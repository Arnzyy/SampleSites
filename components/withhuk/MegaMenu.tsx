"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MegaMenuData } from "@/data/nav";
import PlaceholderImage from "./PlaceholderImage";

interface MegaMenuProps {
  data: MegaMenuData;
  isOpen: boolean;
}

export default function MegaMenu({ data, isOpen }: MegaMenuProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`absolute left-0 right-0 top-full bg-white border-t border-neutral-100 shadow-2xl shadow-black/5 transition-all duration-300 ease-out ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
    >
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Categories */}
          <div className="col-span-8 grid grid-cols-3 gap-12">
            {data.categories.map((category) => (
              <div key={category.title}>
                <h3 className="text-[10px] tracking-[0.25em] font-medium text-neutral-400 uppercase mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors duration-200 relative group"
                      >
                        <span>{link.label}</span>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Image */}
          {data.featuredImage && (
            <div className="col-span-4">
              <Link href={data.featuredLink || "#"} className="block group">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  {imageError ? (
                    <PlaceholderImage text="Featured" />
                  ) : (
                    <Image
                      src={data.featuredImage}
                      alt={data.featuredTitle || "Featured"}
                      fill
                      onError={() => setImageError(true)}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                {data.featuredTitle && (
                  <p className="mt-4 text-xs tracking-[0.15em] font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {data.featuredTitle}
                  </p>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
