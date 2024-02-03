export interface Product {
  id: number;
  category: Category;
  name: string;
  shortName: string;
  price: number;
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
  genericImg: string;
  new: boolean;
  description: string;
  reversed: boolean;
  amount: number;
  galleryMobImg1: string;
  galleryMobImg2: string;
  galleryMobImg3: string;
  galleryTabImg1: string;
  galleryTabImg2: string;
  galleryTabImg3: string;
  galleryDesImg1: string;
  galleryDesImg2: string;
  galleryDesImg3: string;
  featuresStart: string;
  featuresEnd: string;
}

export enum Category {
  HEADPHONES,
  SPEAKERS,
  EARPHONES,
}
