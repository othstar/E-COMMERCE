export type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type CategoryImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Includes = {
  quantity: number;
  item: string;
};

export type GalleryImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Gallery = {
  first: GalleryImage;
  second: GalleryImage;
  third: GalleryImage;
};

export type OtherProduct = {
  slug: string;
  name: string;
  image: Image;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Includes[];
  gallery: Gallery;
  others: OtherProduct[];
};