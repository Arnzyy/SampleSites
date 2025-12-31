"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroBanners } from "@/data/banners";
import { promoTiles } from "@/data/tiles";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {/* Main Hero Banner */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-neutral-100">
        {heroBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Image */}
            {imageErrors[banner.id] ? (
              <PlaceholderImage text="Hero Banner" />
            ) : (
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority={index === 0}
                onError={() => setImageErrors(prev => ({ ...prev, [banner.id]: true }))}
                className="object-cover"
              />
            )}

            {/* Overlay */}
            <div
              className={`absolute inset-0 ${
                banner.theme === "dark"
                  ? "bg-black/30"
                  : "bg-gradient-to-t from-black/40 via-transparent to-transparent"
              }`}
            />

            {/* Content */}
            <div
              className={`absolute inset-0 flex items-center ${
                banner.alignment === "left"
                  ? "justify-start"
                  : banner.alignment === "right"
                  ? "justify-end"
                  : "justify-center"
              }`}
            >
              <div
                className={`px-8 lg:px-16 ${
                  banner.alignment === "center" ? "text-center" : "max-w-xl"
                }`}
              >
                <h1
                  className={`text-4xl sm:text-5xl lg:text-7xl font-light tracking-[0.15em] mb-4 transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  } ${banner.theme === "dark" ? "text-white" : "text-white"}`}
                >
                  {banner.title}
                </h1>

                {banner.subtitle && (
                  <p
                    className={`text-sm sm:text-base lg:text-lg font-light tracking-wide mb-8 transition-all duration-700 delay-300 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    } ${
                      banner.theme === "dark"
                        ? "text-white/80"
                        : "text-white/90"
                    }`}
                  >
                    {banner.subtitle}
                  </p>
                )}

                <Link
                  href={banner.cta.href}
                  className={`inline-block px-8 py-3.5 text-xs tracking-[0.2em] font-medium transition-all duration-500 delay-400 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  } ${
                    banner.theme === "dark"
                      ? "bg-white text-neutral-900 hover:bg-neutral-100"
                      : "bg-white text-neutral-900 hover:bg-neutral-100"
                  }`}
                >
                  {banner.cta.label}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-0.5 transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-4 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroBanners.length) % heroBanners.length
            )
          }
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroBanners.length)
          }
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Promo Tiles */}
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {promoTiles.map((tile) => (
            <Link key={tile.id} href={tile.href} className="group block">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-100">
                {imageErrors[tile.id] ? (
                  <PlaceholderImage text={tile.title} />
                ) : (
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    onError={() => setImageErrors(prev => ({ ...prev, [tile.id]: true }))}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="text-white text-sm lg:text-base tracking-[0.15em] font-medium mb-1">
                    {tile.title}
                  </h3>
                  {tile.subtitle && (
                    <p className="text-white/70 text-xs lg:text-sm font-light">
                      {tile.subtitle}
                    </p>
                  )}

                  {/* Underline animation */}
                  <div className="mt-4 h-px bg-white/30 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
