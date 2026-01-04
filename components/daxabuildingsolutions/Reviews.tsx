"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Keynsham",
    text: "Mark and Connor were absolutely brilliant from start to finish. Our extension was completed on time and to an exceptional standard. Would highly recommend!",
    project: "Kitchen Extension",
  },
  {
    name: "James Thompson",
    location: "Bath",
    text: "Professional, reliable, and great attention to detail. The loft conversion has transformed our home. The team kept everything clean and tidy throughout.",
    project: "Loft Conversion",
  },
  {
    name: "Helen Roberts",
    location: "Bristol",
    text: "We couldn't be happier with our new open-plan living space. The knock through was done expertly with minimal disruption. True craftsmen!",
    project: "Knock Through",
  },
];

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900 mb-8 leading-tight">
              What Our<br />
              <span className="font-serif italic">Clients Say</span>
            </h2>

            {/* Checkatrade Badge */}
            <a
              href="https://www.checkatrade.com/trades/daxabuildingsolutions993285"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/daxabuildingsolutions/checkatrade.png"
                alt="Checkatrade Approved"
                width={120}
                height={60}
                className="h-14 w-auto"
              />
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-neutral-500 mt-1">5.0 Rating</p>
              </div>
            </a>
          </div>

          {/* Right Side - Review */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Quote Mark */}
              <svg
                className="absolute -top-8 -left-4 w-16 h-16 text-[#d4a574]/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Review Content */}
              <div className="min-h-[200px]">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 absolute"
                    }`}
                  >
                    <p className="text-2xl sm:text-3xl font-light text-neutral-700 leading-relaxed mb-8">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div>
                      <p className="text-neutral-900 font-medium">{review.name}</p>
                      <p className="text-neutral-400 text-sm">{review.location} — {review.project}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-12">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1 transition-all ${
                      index === activeIndex
                        ? "w-12 bg-[#d4a574]"
                        : "w-6 bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
