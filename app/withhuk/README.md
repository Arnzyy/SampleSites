# WITH H Clone - Premium Streetwear Store

A premium redesign of the WITH H UK storefront, built with Next.js 15, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Visit http://localhost:3000/withhuk
```

## Adding Your Images

### Folder Structure

All images go in `/public/withhuk/`:

```
public/
└── withhuk/
    ├── hero/          # Hero banner images (full-width)
    ├── products/      # Product images
    ├── tiles/         # Promo tiles & category images
    └── brand/         # Logo and brand assets
```

### Expected Image Filenames

The data files reference these specific filenames:

#### Hero Images (`/public/withhuk/hero/`)
- `hero-01.jpg` - Main hero banner
- `hero-01-mobile.jpg` - Mobile version (optional)
- `hero-02.jpg` - Second banner
- `hero-02-mobile.jpg` - Mobile version (optional)
- `hero-03.jpg` - Third banner
- `hero-03-mobile.jpg` - Mobile version (optional)

#### Product Images (`/public/withhuk/products/`)
- `product-01.jpg` through `product-16.jpg` - Main product images
- `product-01-hover.jpg` through `product-16-hover.jpg` - Hover state images (optional)

#### Tile Images (`/public/withhuk/tiles/`)
- `tile-01.jpg` through `tile-03.jpg` - Promo tiles (below hero)
- `category-01.jpg` through `category-04.jpg` - Category tiles (optional)

#### Brand Images (`/public/withhuk/brand/`)
- `brand-01.jpg` - Your logo (optional - text logo is default)

### Recommended Image Sizes

| Type | Aspect Ratio | Recommended Size |
|------|--------------|------------------|
| Hero | 16:9 | 1920x1080px |
| Hero Mobile | 9:16 | 750x1334px |
| Product | 3:4 | 600x800px |
| Tile | 3:4 or 4:5 | 600x750px |

## Using the Rename Script

The rename script automatically renames and organizes your images.

### Basic Usage

```bash
# Show help and current inventory
node scripts/rename-assets.js

# Move hero images
node scripts/rename-assets.js ./incoming-assets hero

# Move product images
node scripts/rename-assets.js ./my-photos products

# Move tile images
node scripts/rename-assets.js ./downloads tiles
```

### Workflow Example

1. **Download/collect your images** into a single folder (e.g., `./incoming-assets`)

2. **Separate by type** - Create subfolders if you have many images:
   ```
   incoming-assets/
   ├── heroes/
   ├── products/
   └── tiles/
   ```

3. **Run the script** for each type:
   ```bash
   node scripts/rename-assets.js ./incoming-assets/heroes hero
   node scripts/rename-assets.js ./incoming-assets/products products
   node scripts/rename-assets.js ./incoming-assets/tiles tiles
   ```

4. **Verify** - The script will show you the current inventory:
   ```
   ✓ hero/         3 images
   ✓ products/    16 images
   ✓ tiles/        6 images
   ○ brand/        0 images
   ```

## Customizing Content

### Products

Edit `data/products.ts` to modify:
- Product titles, brands, prices
- Image paths
- Badges (new, sale, limited, sold-out)
- Categories

### Navigation

Edit `data/nav.ts` to modify:
- Navigation links
- Mega menu categories
- Announcement bar messages

### Hero Banners

Edit `data/banners.ts` to modify:
- Banner images and titles
- CTA buttons
- Content alignment

### Tiles

Edit `data/tiles.ts` to modify:
- Promo tile content
- Category tiles

## Components

| Component | Location | Description |
|-----------|----------|-------------|
| AnnouncementBar | `components/withhuk/AnnouncementBar.tsx` | Rotating announcement messages |
| Header | `components/withhuk/Header.tsx` | Sticky header with nav |
| MegaMenu | `components/withhuk/MegaMenu.tsx` | Desktop dropdown menus |
| MobileMenu | `components/withhuk/MobileMenu.tsx` | Mobile hamburger menu |
| Hero | `components/withhuk/Hero.tsx` | Hero carousel + promo tiles |
| ProductCard | `components/withhuk/ProductCard.tsx` | Individual product card |
| ProductGrid | `components/withhuk/ProductGrid.tsx` | Product grid section |
| Footer | `components/withhuk/Footer.tsx` | Site footer with newsletter |

## Premium Design Features

- **Typography**: Light, elegant fonts with generous letter-spacing
- **Spacing**: Consistent 4/8/12/16/20/24px spacing system
- **Colors**: Neutral palette with strategic red accents for sale items
- **Animations**: Subtle hover effects, smooth transitions (300-700ms)
- **Interactions**:
  - Mega menus with 150ms delay for smooth navigation
  - Product cards with image zoom on hover
  - Quick add buttons that slide up on hover
  - Header blur effect on scroll

## Troubleshooting

### Images not loading?
- Check the file paths in `data/products.ts`, `data/banners.ts`, etc.
- Ensure images are in `/public/withhuk/` folders
- Verify file extensions match (case-sensitive on some systems)

### Slow development builds?
- Optimize images before adding (compress to <500KB each)
- Use WebP format for better performance

### Layout issues?
- Clear `.next` cache: `rm -rf .next && npm run dev`
- Check for Tailwind CSS conflicts with existing styles
