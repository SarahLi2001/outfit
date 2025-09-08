# Outfit98

A nostalgic Windows 98-style outfit selector desktop application built with Electron, React, TypeScript, and Vite.

## Features

- **Windows 98 Aesthetic**: Authentic retro styling using 98.css
- **Interactive Outfit Selection**: Browse through tops and bottoms with arrow navigation
- **Live Preview**: See your outfit combination in real-time
- **Keyboard Support**: Use arrow keys to navigate and 'R' for random selection
- **Persistent Storage**: Your selections are saved to localStorage
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the Electron application in development mode:

```bash
npm run electron-dev
# or
npm start
```

This will start both the Vite dev server and Electron app. The application will open in a desktop window.

### Building for Production

Build the Electron application:

```bash
npm run build-electron
# or
yarn build-electron
```

This will build the React app and create a distributable Electron application.

## Usage

1. **Navigate**: Use the left/right arrow buttons or keyboard arrow keys to browse through tops and bottoms
2. **Random Selection**: Click the "Random" button or press 'R' to randomly select an outfit
3. **Select Outfit**: Click "Select" to confirm your choice (logs to console and shows status message)
4. **Focus Groups**: Hover over the Tops or Bottoms sections to enable keyboard navigation

## Project Structure

```
src/
├── components/          # React components
│   ├── Group.tsx       # Tops/Bottoms selection groups
│   ├── MenuBar.tsx     # Windows 98 menu bar
│   ├── PreviewCanvas.tsx # Outfit preview rendering
│   └── StatusBar.tsx   # Status message display
├── data/
│   └── items.ts        # Clothing items and configuration
├── hooks/
│   └── useCarousel.ts  # Navigation logic hook
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── styles.css          # Custom styling

public/assets/          # Image assets
├── person.svg         # Base person image
├── tops/              # Top clothing items
└── bottoms/           # Bottom clothing items
```

## Customization

### Adding New Clothing Items

Edit `src/data/items.ts` to add new tops or bottoms:

```typescript
{
  id: 'unique_id',
  name: 'Item Name',
  imageUrl: '/assets/path/to/image.svg',
  offset: {
    x: 0,        // Horizontal position adjustment
    y: 0,        // Vertical position adjustment
    scale: 1.0,  // Size scaling
    zIndex: 10   // Layer order (higher = on top)
  }
}
```

### Styling

The application uses 98.css for the Windows 98 theme. Custom styles can be added to `src/styles.css`.

## Technologies Used

- **Electron** - Desktop application framework
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **98.css** - Windows 98 styling library
- **PNG** - Raster graphics for clothing items
- **MS Sans Serif** - Authentic Windows 98 pixel font

## Platform Support

- **macOS** - Native desktop application
- **Windows** - Native desktop application  
- **Linux** - Native desktop application

## License

This project is open source and available under the MIT License.
# outfit-decider
# outfit-decider
# outfit-decider
# outfit-decider
# outfit
