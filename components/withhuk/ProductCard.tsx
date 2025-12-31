"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import PlaceholderImage from "./PlaceholderImage";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickAddVisible, setIsQuickAddVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoverImageError, setHoverImageError] = useState(false);

  const badgeStyles = {
    new: "bg-neutral-900 text-white",
    sale: "bg-red-600 text-white",
    "sold-out": "bg-neutral-400 text-white",
    limited: "bg-amber-600 text-white",
  };

  const badgeLabels = {
    new: "NEW",
    sale: "SALE",
    "sold-out": "SOLD OUT",
    limited: "LIMITED",
  };

  return (
    <div
      className="group"
      onMouseEnter={() => {
        setIsHovered(true);
        setTimeout(() => setIsQuickAddVisible(true), 150);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsQuickAddVisible(false);
      }}
    >
      {/* Image Container */}
      <Link
        href={`/withhuk/product/${product.slug}`}
        className="block relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4"
      >
        {/* Main Image */}
        {imageError ? (
          <PlaceholderImage text={product.brand} />
        ) : (
          <Image
            src={product.image}
            alt={product.title}
            fill
            onError={() => setImageError(true)}
            className={`object-cover transition-all duration-700 ease-out ${
              isHovered && product.hoverImage && !hoverImageError ? "opacity-0" : "opacity-100"
            } ${isHovered ? "scale-105" : "scale-100"}`}
          />
        )}

        {/* Hover Image */}
        {product.hoverImage && !hoverImageError && !imageError && (
          <Image
            src={product.hoverImage}
            alt={`${product.title} alternate view`}
            fill
            onError={() => setHoverImageError(true)}
            className={`object-cover transition-all duration-700 ease-out ${
              isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.15em] font-medium ${
              badgeStyles[product.badge]
            }`}
          >
            {badgeLabels[product.badge]}
          </div>
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            isQuickAddVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic here
            }}
            className="w-full py-3.5 bg-neutral-900/90 backdrop-blur-sm text-white text-xs tracking-[0.15em] font-medium hover:bg-neutral-900 transition-colors"
          >
            QUICK ADD
          </button>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist logic here
          }}
          className={`absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Add to wishlist"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </Link>

      {/* Product Info */}
      <div className="space-y-1.5">
        {/* Brand */}
        <p className="text-[10px] tracking-[0.2em] text-neutral-400 font-medium uppercase">
          {product.brand}
        </p>

        {/* Title */}
        <Link href={`/withhuk/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-neutral-800 hover:text-neutral-600 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 pt-1">
          <span
            className={`text-sm font-medium ${
              product.originalPrice ? "text-red-600" : "text-neutral-900"
            }`}
          >
            £{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-neutral-400 line-through">
              £{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
