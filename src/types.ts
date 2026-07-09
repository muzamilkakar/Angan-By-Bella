export type Category = "Embroidered" | "Printed" | "Solids" | "Silk" | "Formals" | "Kurtis" | "Bottoms" | "Other";
export type Season = "Winter" | "Summer" | "All Season";

export interface DetailHighlight {
  label: string;
  image: string;
}

export interface Dress {
  name: string;
  price: number;
  category: Category;
  season: Season;
  mainImage: string;
  galleryImages: string[];
  description: string;
  highlights: DetailHighlight[];
  featured: boolean;
}

export interface DressesData {
  dresses: Dress[];
}
