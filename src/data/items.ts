export interface ItemOffset {
  x: number;
  y: number;
  scale: number;
  zIndex: number;
}

export interface ClothingItem {
  id: string;
  name: string;
  imageUrl: string;
  offset?: Partial<ItemOffset>;
}

export interface PersonConfig {
  imageUrl: string;
  baseScale: number;
}

export const personConfig: PersonConfig = {
  imageUrl: '/assets/person.png',
  baseScale: 1.0
};

export const tops: ClothingItem[] = [
  {
    id: 'top_1',
    name: 'Black Sleeveless Top',
    imageUrl: '/assets/tops/top_1.png',
    offset: {
      x: 0,
      y: -20,
      scale: 1.0,
      zIndex: 10
    }
  },
  {
    id: 'top_2',
    name: 'White Button Shirt',
    imageUrl: '/assets/tops/top_2.png',
    offset: {
      x: 0,
      y: -15,
      scale: 1.0,
      zIndex: 10
    }
  },
  {
    id: 'top_3',
    name: 'Red Tank Top',
    imageUrl: '/assets/tops/top_3.png',
    offset: {
      x: 0,
      y: -25,
      scale: 1.0,
      zIndex: 10
    }
  }
];

export const bottoms: ClothingItem[] = [
  {
    id: 'bottom_1',
    name: 'Blue Wide Leg Jeans',
    imageUrl: '/assets/bottoms/bottom_1.png',
    offset: {
      x: 0,
      y: 50,
      scale: 1.0,
      zIndex: 9
    }
  },
  {
    id: 'bottom_2',
    name: 'Black Pants',
    imageUrl: '/assets/bottoms/bottom_2.png',
    offset: {
      x: 0,
      y: 45,
      scale: 1.0,
      zIndex: 9
    }
  },
  {
    id: 'bottom_3',
    name: 'Gray Shorts',
    imageUrl: '/assets/bottoms/bottom_3.png',
    offset: {
      x: 0,
      y: 60,
      scale: 1.0,
      zIndex: 9
    }
  }
];

// Helper function to get default offset for tops
export function getTopOffset(item: ClothingItem): ItemOffset {
  return {
    x: 0,
    y: 0,
    scale: 1,
    zIndex: 10,
    ...item.offset
  };
}

// Helper function to get default offset for bottoms
export function getBottomOffset(item: ClothingItem): ItemOffset {
  return {
    x: 0,
    y: 0,
    scale: 1,
    zIndex: 9,
    ...item.offset
  };
}
