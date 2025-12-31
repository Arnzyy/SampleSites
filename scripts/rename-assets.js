#!/usr/bin/env node

/**
 * Asset Rename & Move Script for WITH H Clone
 *
 * This script helps you quickly organize images for the WITH H clone.
 * It reads from a source folder and renames/moves images into the correct
 * public/withhuk/ subfolders based on the prefix you specify.
 *
 * Usage:
 *   node scripts/rename-assets.js <source-folder> <type>
 *
 * Types:
 *   hero     - Moves to /public/withhuk/hero/    (hero-01.jpg, hero-02.jpg, ...)
 *   products - Moves to /public/withhuk/products/ (product-01.jpg, product-02.jpg, ...)
 *   tiles    - Moves to /public/withhuk/tiles/   (tile-01.jpg, tile-02.jpg, ...)
 *   brand    - Moves to /public/withhuk/brand/   (brand-01.jpg, brand-02.jpg, ...)
 *
 * Examples:
 *   node scripts/rename-assets.js ./incoming-assets hero
 *   node scripts/rename-assets.js ./my-photos products
 *   node scripts/rename-assets.js ./downloads tiles
 */

const fs = require("fs");
const path = require("path");

// Configuration
const DEST_BASE = path.join(process.cwd(), "public", "withhuk");

const TYPE_CONFIG = {
  hero: {
    dest: "hero",
    prefix: "hero",
    extensions: [".jpg", ".jpeg", ".png", ".webp"],
  },
  products: {
    dest: "products",
    prefix: "product",
    extensions: [".jpg", ".jpeg", ".png", ".webp"],
  },
  tiles: {
    dest: "tiles",
    prefix: "tile",
    extensions: [".jpg", ".jpeg", ".png", ".webp"],
  },
  brand: {
    dest: "brand",
    prefix: "brand",
    extensions: [".jpg", ".jpeg", ".png", ".webp"],
  },
};

function printUsage() {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║         WITH H - Asset Rename & Move Script                   ║
╚════════════════════════════════════════════════════════════════╝

Usage:
  node scripts/rename-assets.js <source-folder> <type>

Types:
  hero      → /public/withhuk/hero/     (hero-01.jpg, hero-02.jpg, ...)
  products  → /public/withhuk/products/ (product-01.jpg, product-02.jpg, ...)
  tiles     → /public/withhuk/tiles/    (tile-01.jpg, tile-02.jpg, ...)
  brand     → /public/withhuk/brand/    (brand-01.jpg, brand-02.jpg, ...)

Examples:
  node scripts/rename-assets.js ./incoming-assets hero
  node scripts/rename-assets.js ./my-photos products
  node scripts/rename-assets.js ./downloads tiles
`);
}

function padNumber(num) {
  return num.toString().padStart(2, "0");
}

function getExistingCount(destPath, prefix) {
  if (!fs.existsSync(destPath)) {
    return 0;
  }

  const files = fs.readdirSync(destPath);
  const matchingFiles = files.filter((f) =>
    f.toLowerCase().startsWith(prefix.toLowerCase())
  );
  return matchingFiles.length;
}

function moveAndRename(sourcePath, type) {
  const config = TYPE_CONFIG[type];

  if (!config) {
    console.error(`\n❌ Unknown type: "${type}"`);
    console.log(`   Valid types: ${Object.keys(TYPE_CONFIG).join(", ")}`);
    process.exit(1);
  }

  // Check source folder exists
  if (!fs.existsSync(sourcePath)) {
    console.error(`\n❌ Source folder not found: ${sourcePath}`);
    process.exit(1);
  }

  const destPath = path.join(DEST_BASE, config.dest);

  // Ensure destination exists
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  // Get all valid image files from source
  const sourceFiles = fs.readdirSync(sourcePath).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return config.extensions.includes(ext);
  });

  if (sourceFiles.length === 0) {
    console.log(`\n⚠️  No valid image files found in: ${sourcePath}`);
    console.log(`   Looking for: ${config.extensions.join(", ")}`);
    return;
  }

  // Get starting index based on existing files
  let startIndex = getExistingCount(destPath, config.prefix) + 1;

  console.log(`
╔════════════════════════════════════════════════════════════════╗
║  Moving ${sourceFiles.length} images to ${config.dest}/
╚════════════════════════════════════════════════════════════════╝
`);

  const results = {
    moved: 0,
    errors: [],
  };

  sourceFiles.forEach((file, index) => {
    const ext = path.extname(file).toLowerCase();
    const newName = `${config.prefix}-${padNumber(startIndex + index)}${ext}`;
    const sourceFilePath = path.join(sourcePath, file);
    const destFilePath = path.join(destPath, newName);

    try {
      fs.copyFileSync(sourceFilePath, destFilePath);
      fs.unlinkSync(sourceFilePath); // Remove original after successful copy
      console.log(`  ✓ ${file} → ${newName}`);
      results.moved++;
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
      results.errors.push({ file, error: err.message });
    }
  });

  // Summary
  console.log(`
────────────────────────────────────────────────────────────────
  Summary:
  ✓ Moved: ${results.moved} files
  ${results.errors.length > 0 ? `✗ Errors: ${results.errors.length} files` : ""}

  Destination: ${destPath}
────────────────────────────────────────────────────────────────
`);

  // Print checklist of all folders
  printFolderChecklist();
}

function printFolderChecklist() {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║  Current Asset Inventory                                       ║
╚════════════════════════════════════════════════════════════════╝
`);

  Object.entries(TYPE_CONFIG).forEach(([type, config]) => {
    const destPath = path.join(DEST_BASE, config.dest);
    let count = 0;

    if (fs.existsSync(destPath)) {
      const files = fs.readdirSync(destPath).filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return config.extensions.includes(ext);
      });
      count = files.length;
    }

    const status = count > 0 ? "✓" : "○";
    console.log(`  ${status} ${config.dest.padEnd(12)} ${count} images`);
  });

  console.log(`
  ────────────────────────────────────────────────────────────────

  Expected minimums:
    • hero/     : 3 images  (hero-01.jpg to hero-03.jpg)
    • products/ : 16 images (product-01.jpg to product-16.jpg)
    • tiles/    : 6 images  (tile-01.jpg to tile-06.jpg)
    • brand/    : 1 image   (brand-01.jpg - your logo)
  `);
}

// Main
const args = process.argv.slice(2);

if (args.length === 0) {
  printUsage();
  printFolderChecklist();
  process.exit(0);
}

if (args.length < 2) {
  console.error("\n❌ Missing arguments.");
  printUsage();
  process.exit(1);
}

const [sourcePath, type] = args;
moveAndRename(path.resolve(sourcePath), type.toLowerCase());
