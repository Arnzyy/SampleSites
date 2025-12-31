export interface Tile {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  href: string;
  size?: "small" | "medium" | "large";
}

export const promoTiles: Tile[] = [
  {
    id: "tile-001",
    image: "/withhuk/tiles/tile-01.jpg",
    title: "NEW IN FOOTWEAR",
    subtitle: "Shop the latest drops",
    href: "/withhuk/footwear",
    size: "medium",
  },
  {
    id: "tile-002",
    image: "/withhuk/tiles/tile-02.jpg",
    title: "WINTER ESSENTIALS",
    subtitle: "Stay warm in style",
    href: "/withhuk/clothing",
    size: "medium",
  },
  {
    id: "tile-003",
    image: "/withhuk/tiles/tile-03.jpg",
    title: "SHOP BY BRAND",
    subtitle: "Explore all brands",
    href: "/withhuk/brands",
    size: "medium",
  },
];

export const categoryTiles: Tile[] = [
  {
    id: "cat-001",
    image: "/withhuk/tiles/category-01.jpg",
    title: "SNEAKERS",
    href: "/withhuk/footwear/sneakers",
    size: "large",
  },
  {
    id: "cat-002",
    image: "/withhuk/tiles/category-02.jpg",
    title: "HOODIES",
    href: "/withhuk/clothing/hoodies",
    size: "large",
  },
  {
    id: "cat-003",
    image: "/withhuk/tiles/category-03.jpg",
    title: "ACCESSORIES",
    href: "/withhuk/accessories",
    size: "large",
  },
  {
    id: "cat-004",
    image: "/withhuk/tiles/category-04.jpg",
    title: "SALE",
    href: "/withhuk/sale",
    size: "large",
  },
];
