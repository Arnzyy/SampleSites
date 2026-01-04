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
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms]"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: `scale(1.1) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900/90" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-64 sm:w-96 lg:w-[500px] h-64 sm:h-96 lg:h-[500px] bg-pink-500/20 rounded-full blur-[80px] lg:blur-[100px] animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-64 sm:w-96 lg:w-[600px] h-64 sm:h-96 lg:h-[600px] bg-sky-500/20 rounded-full blur-[80px] lg:blur-[100px] animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "1s" }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        {/* Floating Logo */}
        <div
          className={`relative mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
          }`}
          style={{
            animation: isVisible ? "float 6s ease-in-out infinite" : "none",
          }}
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-sky-500/30 rounded-full blur-2xl animate-pulse" />
            <Image
              src="/daxabuildingsolutions/logo.png"
              alt="DAXA Building Solutions"
              fill
              className="object-contain drop-shadow-2xl relative z-10"
              priority
            />
          </div>
        </div>

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
          </span>
          <span className="text-xs sm:text-sm text-white/80 font-medium">
            50+ Years Combined Experience
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm text-sky-400">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Checkatrade Approved
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400">
              Dreams
            </span>
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 10C50 4 150 4 198 10"
                stroke="url(#hero-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="hero-gradient" x1="0" y1="0" x2="200" y2="0">
                  <stop stopColor="#f472b6" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <br />
          <span className="text-white/90">Into Reality</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 font-light leading-relaxed mb-8 sm:mb-10 max-w-xl sm:max-w-2xl transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Family-run building company delivering{" "}
          <span className="text-white font-normal">exceptional craftsmanship</span> across Somerset.
          From extensions to complete renovations.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span className="relative z-10">Get Free Quote</span>
            <svg
              className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="tel:07411179660"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            07411 179660
          </a>
        </div>

        {/* Slide Indicators */}
        <div
          className={`flex gap-2 sm:gap-3 mb-8 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`group flex items-center gap-2 transition-all duration-300 ${
                index === currentSlide ? "opacity-100" : "opacity-50 hover:opacity-75"
              }`}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-8 sm:w-12 bg-gradient-to-r from-pink-500 to-sky-500"
                    : "w-1.5 bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Trust Stats - Mobile Optimized */}
        <div
          className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-white/50">Years Experience</div>
            </div>
          </div>

          <div className="h-8 sm:h-12 w-px bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-500/20 to-sky-500/5 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-white">100%</div>
              <div className="text-xs sm:text-sm text-white/50">Satisfaction</div>
            </div>
          </div>

          <div className="h-8 sm:h-12 w-px bg-white/10 hidden lg:block" />

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex -space-x-1 sm:-space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 border-2 border-neutral-900 flex items-center justify-center"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-white">5.0</div>
              <div className="text-xs sm:text-sm text-white/50">Checkatrade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Float Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
