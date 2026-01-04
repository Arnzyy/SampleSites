"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/daxabuildingsolutions/hero-1.jpg",
    title: "Extensions",
  },
  {
    image: "/daxabuildingsolutions/gallery/007.jpg",
    title: "Renovations",
  },
  {
    image: "/daxabuildingsolutions/gallery/008.jpg",
    title: "New Builds",
  },
  {
    image: "/daxabuildingsolutions/gallery/009.jpg",
    title: "Loft Conversions",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/daxabuildingsolutions/logo.png"
            alt="DAXA Building Solutions"
            width={280}
            height={100}
            className="h-20 sm:h-24 lg:h-28 w-auto brightness-0 invert"
            priority
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-wide mb-6 font-serif italic">
          Professional Building Services in Somerset
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 font-light tracking-wide mb-12 max-w-2xl">
          Transform your home into a masterpiece of craftsmanship and quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-10 py-4 bg-[#d4a574] text-white text-sm font-medium tracking-widest uppercase"
          >
            Book a Free Consultation
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-white text-white text-sm font-medium tracking-widest uppercase"
          >
            View Our Services
          </a>
        </div>

        {/* Checkatrade Badge */}
        <a
          href="https://www.checkatrade.com/trades/daxabuildingsolutions993285"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16"
        >
          <Image
            src="/daxabuildingsolutions/checkatrade.png"
            alt="Checkatrade Approved"
            width={150}
            height={75}
            className="h-16 w-auto"
          />
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase rotate-90 origin-center translate-y-8">
          Scroll
        </span>
      </div>
    </section>
  );
}
