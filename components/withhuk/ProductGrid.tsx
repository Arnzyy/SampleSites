"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
  columns?: 2 | 3 | 4;
}

export default function ProductGrid({
  title,
  subtitle,
  products,
  viewAllHref,
  columns = 4,
}: ProductGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 lg:mb-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-light tracking-[0.1em] text-neutral-900 mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-neutral-500 font-light">{subtitle}</p>
            )}
          </div>

          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="mt-4 sm:mt-0 inline-flex items-center text-xs tracking-[0.15em] font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
            >
              VIEW ALL
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className={`grid ${gridCols[columns]} gap-4 lg:gap-8`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
