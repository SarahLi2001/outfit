import { useState, useCallback, useEffect } from 'react';

interface UseCarouselReturn {
  index: number;
  next: () => void;
  prev: () => void;
  setRandom: () => void;
  setIndex: (index: number) => void;
}

export function useCarousel(itemsLength: number, storageKey: string): UseCarouselReturn {
  const [index, setIndexState] = useState(() => {
    const saved = localStorage.getItem(`outfit98.${storageKey}`);
    return saved ? Math.max(0, Math.min(parseInt(saved, 10), itemsLength - 1)) : 0;
  });

  const setIndex = useCallback((newIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(newIndex, itemsLength - 1));
    setIndexState(clampedIndex);
    localStorage.setItem(`outfit98.${storageKey}`, clampedIndex.toString());
  }, [itemsLength, storageKey]);

  const next = useCallback(() => {
    setIndex((index + 1) % itemsLength);
  }, [index, itemsLength, setIndex]);

  const prev = useCallback(() => {
    setIndex((index - 1 + itemsLength) % itemsLength);
  }, [index, itemsLength, setIndex]);

  const setRandom = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * itemsLength);
    setIndex(randomIndex);
  }, [itemsLength, setIndex]);

  // Update localStorage when index changes
  useEffect(() => {
    localStorage.setItem(`outfit98.${storageKey}`, index.toString());
  }, [index, storageKey]);

  return {
    index,
    next,
    prev,
    setRandom,
    setIndex
  };
}
