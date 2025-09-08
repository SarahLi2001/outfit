import { useState, useEffect, useCallback } from 'react';
import { useCarousel } from './hooks/useCarousel';
import { tops, bottoms } from './data/items';

function App() {
  const [selectedTop, setSelectedTop] = useState(0);
  const [selectedBottom, setSelectedBottom] = useState(0);
  const [previewTop, setPreviewTop] = useState(0);
  const [previewBottom, setPreviewBottom] = useState(0);

  const topsCarousel = useCarousel(tops.length);
  const bottomsCarousel = useCarousel(bottoms.length);

  // Handle random selection
  const handleRandom = useCallback(() => {
    const randomTop = Math.floor(Math.random() * tops.length);
    const randomBottom = Math.floor(Math.random() * bottoms.length);
    
    setPreviewTop(randomTop);
    setPreviewBottom(randomBottom);
    
    console.log('Random outfit selected:', {
      top: tops[randomTop].id,
      bottom: bottoms[randomBottom].id
    });
  }, []);

  // Handle select button (stub for now)
  const handleSelect = useCallback(() => {
    console.log('Select button clicked - stub functionality');
  }, []);

  // Update preview when carousel changes
  useEffect(() => {
    setPreviewTop(topsCarousel.currentIndex);
  }, [topsCarousel.currentIndex]);

  useEffect(() => {
    setPreviewBottom(bottomsCarousel.currentIndex);
  }, [bottomsCarousel.currentIndex]);

  return (
    <div className="outfit-window">
      <div className="main-container">
        {/* Left Column - Selection Area */}
        <div className="left-column">
          {/* Tops Section */}
          <div className="section-container">
            {/* <div className="section-label">Tops</div> */}
            <div className="nav-buttons">
              <button 
                className="nav-button left-button"
                onClick={topsCarousel.previous}
                title="Previous top"
              />
              <div className="clothes-window">
                {tops[topsCarousel.currentIndex] && (
                  <img 
                    src={tops[topsCarousel.currentIndex].imageUrl}
                    alt={tops[topsCarousel.currentIndex].name}
                    className="clothing-item"
                  />
                )}
              </div>
              <button 
                className="nav-button right-button"
                onClick={topsCarousel.next}
                title="Next top"
              />
            </div>
          </div>

          {/* Bottoms Section */}
          <div className="section-container bottoms-section">
            {/* <div className="section-label">Bottoms</div> */}
            <div className="nav-buttons">
              <button 
                className="nav-button left-button"
                onClick={bottomsCarousel.previous}
                title="Previous bottom"
              />
              <div className="clothes-window">
                {bottoms[bottomsCarousel.currentIndex] && (
                  <img 
                    src={bottoms[bottomsCarousel.currentIndex].imageUrl}
                    alt={bottoms[bottomsCarousel.currentIndex].name}
                    className="clothing-item"
                  />
                )}
              </div>
              <button 
                className="nav-button right-button"
                onClick={bottomsCarousel.next}
                title="Next bottom"
              />
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="bottom-buttons">
            <button 
              className="bottom-button random-button"
              onClick={handleRandom}
              title="Random outfit"
            />
            <button 
              className="bottom-button select-button"
              onClick={handleSelect}
              title="Select outfit"
            />
          </div>
        </div>

        {/* Right Column - Outfit Preview */}
        <div className="right-column">
          <div className="outfit-preview">
            {/* Preview outfit items */}
            {tops[previewTop] && (
              <img 
                src={tops[previewTop].imageUrl}
                alt={tops[previewTop].name}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '200px',
                  maxHeight: '200px',
                  objectFit: 'contain',
                  imageRendering: 'pixelated',
                  zIndex: 2
                }}
              />
            )}
            {bottoms[previewBottom] && (
              <img 
                src={bottoms[previewBottom].imageUrl}
                alt={bottoms[previewBottom].name}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '200px',
                  maxHeight: '200px',
                  objectFit: 'contain',
                  imageRendering: 'pixelated',
                  zIndex: 1
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;