"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/daxabuildingsolutions" className="relative z-10">
            <Image
              src="/daxabuildingsolutions/logo.png"
              alt="DAXA Building Solutions"
              width={180}
              height={60}
              className="h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-neutral-700 hover:text-sky-500 hover:bg-sky-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:07411179660"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-pink-400 to-sky-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              07411 179660
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
              isScrolled ? "text-neutral-900" : "text-white"
            }`}
          >
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-neutral-900 hover:text-sky-500 transition-colors"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:07411179660"
            className="mt-4 px-8 py-3 bg-gradient-to-r from-pink-400 to-sky-400 text-white font-semibold rounded-full"
          >
            07411 179660
          </a>
        </div>
      </div>
    </header>
  );
}
