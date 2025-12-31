"use client";

import { useState, useEffect } from "react";
import { announcements } from "@/data/nav";

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setIsVisible(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-900 text-white py-3 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <p
            className={`text-[11px] sm:text-xs tracking-[0.2em] font-light text-center transition-all duration-400 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            {announcements[currentIndex]}
          </p>
        </div>
      </div>

      {/* Subtle gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
    </div>
  );
}
