export interface Banner {
  id: string;
  image: string;
  mobileImage?: string;
  title: string;
  subtitle?: string;
  cta: {
    label: string;
    href: string;
  };
  alignment?: "left" | "center" | "right";
  theme?: "light" | "dark";
}

export const heroBanners: Banner[] = [
  {
    id: "banner-001",
    image: "/withhuk/hero/hero-01.jpg",
    mobileImage: "/withhuk/hero/hero-01-mobile.jpg",
    title: "LATEST ARRIVALS",
    subtitle: "Discover the newest additions to our collection",
    cta: {
      label: "Shop Now",
      href: "/withhuk/latest",
    },
    alignment: "center",
    theme: "light",
  },
  {
    id: "banner-002",
    image: "/withhuk/hero/hero-02.jpg",
    mobileImage: "/withhuk/hero/hero-02-mobile.jpg",
    title: "OFF-WHITE",
    subtitle: "Out Of Office Collection",
    cta: {
      label: "Explore",
      href: "/withhuk/brands/off-white",
    },
    alignment: "left",
    theme: "dark",
  },
  {
    id: "banner-003",
    image: "/withhuk/hero/hero-03.jpg",
    mobileImage: "/withhuk/hero/hero-03-mobile.jpg",
    title: "WINTER SALE",
    subtitle: "Up to 50% off selected items",
    cta: {
      label: "Shop Sale",
      href: "/withhuk/sale",
    },
    alignment: "center",
    theme: "light",
  },
];
