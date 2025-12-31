export interface NavItem {
  label: string;
  href: string;
  featured?: boolean;
  megaMenu?: MegaMenuData;
}

export interface MegaMenuCategory {
  title: string;
  links: { label: string; href: string }[];
}

export interface MegaMenuData {
  categories: MegaMenuCategory[];
  featuredImage?: string;
  featuredTitle?: string;
  featuredLink?: string;
}

export const navItems: NavItem[] = [
  {
    label: "Latest Arrivals",
    href: "/withhuk/latest",
    featured: true,
  },
  {
    label: "Footwear",
    href: "/withhuk/footwear",
    megaMenu: {
      categories: [
        {
          title: "Shop by Style",
          links: [
            { label: "Sneakers", href: "/withhuk/footwear/sneakers" },
            { label: "Boots", href: "/withhuk/footwear/boots" },
            { label: "Loafers", href: "/withhuk/footwear/loafers" },
            { label: "Sandals", href: "/withhuk/footwear/sandals" },
          ],
        },
        {
          title: "Shop by Brand",
          links: [
            { label: "Nike", href: "/withhuk/footwear/nike" },
            { label: "Adidas", href: "/withhuk/footwear/adidas" },
            { label: "New Balance", href: "/withhuk/footwear/new-balance" },
            { label: "Off-White", href: "/withhuk/footwear/off-white" },
          ],
        },
      ],
      featuredImage: "/withhuk/tiles/tile-01.jpg",
      featuredTitle: "New Season Footwear",
      featuredLink: "/withhuk/footwear",
    },
  },
  {
    label: "Clothing",
    href: "/withhuk/clothing",
    megaMenu: {
      categories: [
        {
          title: "Categories",
          links: [
            { label: "T-Shirts", href: "/withhuk/clothing/t-shirts" },
            { label: "Hoodies", href: "/withhuk/clothing/hoodies" },
            { label: "Jackets", href: "/withhuk/clothing/jackets" },
            { label: "Trousers", href: "/withhuk/clothing/trousers" },
            { label: "Knitwear", href: "/withhuk/clothing/knitwear" },
          ],
        },
        {
          title: "Collections",
          links: [
            { label: "Essentials", href: "/withhuk/clothing/essentials" },
            { label: "Streetwear", href: "/withhuk/clothing/streetwear" },
            { label: "Premium", href: "/withhuk/clothing/premium" },
          ],
        },
      ],
      featuredImage: "/withhuk/tiles/tile-02.jpg",
      featuredTitle: "Winter Collection",
      featuredLink: "/withhuk/clothing",
    },
  },
  {
    label: "Brands",
    href: "/withhuk/brands",
    megaMenu: {
      categories: [
        {
          title: "Featured Brands",
          links: [
            { label: "Off-White", href: "/withhuk/brands/off-white" },
            { label: "Stone Island", href: "/withhuk/brands/stone-island" },
            { label: "Palm Angels", href: "/withhuk/brands/palm-angels" },
            { label: "Amiri", href: "/withhuk/brands/amiri" },
          ],
        },
        {
          title: "Sportswear",
          links: [
            { label: "Nike", href: "/withhuk/brands/nike" },
            { label: "Adidas", href: "/withhuk/brands/adidas" },
            { label: "Jordan", href: "/withhuk/brands/jordan" },
            { label: "New Balance", href: "/withhuk/brands/new-balance" },
          ],
        },
        {
          title: "Luxury",
          links: [
            { label: "Balenciaga", href: "/withhuk/brands/balenciaga" },
            { label: "Gucci", href: "/withhuk/brands/gucci" },
            { label: "Versace", href: "/withhuk/brands/versace" },
            { label: "Burberry", href: "/withhuk/brands/burberry" },
          ],
        },
      ],
      featuredImage: "/withhuk/tiles/tile-03.jpg",
      featuredTitle: "Explore All Brands",
      featuredLink: "/withhuk/brands",
    },
  },
  {
    label: "Accessories",
    href: "/withhuk/accessories",
    megaMenu: {
      categories: [
        {
          title: "Shop All",
          links: [
            { label: "Bags", href: "/withhuk/accessories/bags" },
            { label: "Hats & Caps", href: "/withhuk/accessories/hats" },
            { label: "Belts", href: "/withhuk/accessories/belts" },
            { label: "Watches", href: "/withhuk/accessories/watches" },
            { label: "Jewellery", href: "/withhuk/accessories/jewellery" },
          ],
        },
      ],
    },
  },
  {
    label: "Sale",
    href: "/withhuk/sale",
    featured: true,
  },
  {
    label: "Pre-owned",
    href: "/withhuk/pre-owned",
  },
];

export const announcements = [
  "FREE UK SHIPPING ON ORDERS OVER £150",
  "RATED EXCELLENT ON TRUSTPILOT",
  "BUY NOW, PAY LATER WITH KLARNA",
  "AUTHENTICITY GUARANTEED",
];
