import { app, BrowserWindow, session } from "electron";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEV_URL = process.env.VITE_DEV_SERVER_URL || "http://localhost:5173";

let win = null;

async function createWindow() {
  // Use a dedicated dev partition so you can nuke all state each run
  const part = session.fromPartition("persist:outfit98-dev");

  // Purge everything that could pin old UI
  await part.clearCache();
  await part.clearStorageData({
    storages: ["appcache", "serviceworkers", "caches", "localstorage", "indexdb", "shadercache", "websql"],
    quotas: ["temporary", "persistent", "syncable"]
  });

  win = new BrowserWindow({
    width: 846,
    height: 900,
    minWidth: 846,
    minHeight: 900,
    maxWidth: 846,
    maxHeight: 900,
    resizable: false,
    show: false,
    webPreferences: {
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
      partition: "persist:outfit98-dev"
    }
  });

  const urlToLoad = `${DEV_URL}/?ts=${Date.now()}`;
  console.log("Loading renderer:", urlToLoad);

  // In dev always hit the Vite server. In prod fall back to your built file.
  if (process.env.NODE_ENV === "production") {
    await win.loadFile(join(__dirname, "../dist/index.html"));
  } else {
    await win.loadURL(urlToLoad);
    win.webContents.openDevTools({ mode: "detach" });
  }

  // Extra hard kill of any lingering service workers registered by older builds
  win.webContents.once("dom-ready", () => {
    win?.webContents.executeJavaScript(`
      if (navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
        caches?.keys?.().then(keys => keys.forEach(k => caches.delete(k)));
      }
    `).catch(() => {});
  });

  win.once("ready-to-show", () => win?.show());

  win.webContents.on("did-fail-load", (_e, code, desc, url) => {
    console.error("did-fail-load", code, desc, url);
  });
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });