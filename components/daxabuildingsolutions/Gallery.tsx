"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  { image: "/daxabuildingsolutions/gallery/010.jpg", title: "Kitchen Extension" },
  { image: "/daxabuildingsolutions/gallery/011.jpg", title: "Loft Conversion" },
  { image: "/daxabuildingsolutions/gallery/015.jpg", title: "Open Plan Living" },
  { image: "/daxabuildingsolutions/gallery/016.jpg", title: "Bathroom Renovation" },
  { image: "/daxabuildingsolutions/gallery/017.jpg", title: "New Build" },
  { image: "/daxabuildingsolutions/gallery/018.jpg", title: "Garden Room" },
  { image: "/daxabuildingsolutions/gallery/019.jpg", title: "Home Extension" },
  { image: "/daxabuildingsolutions/gallery/020.jpeg", title: "Interior Design" },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="gallery" ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight">
              Recent<br />
              <span className="font-serif italic">Projects</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-md mt-6 lg:mt-0 lg:text-right">
            A showcase of our finest work across Somerset. Each project reflects our commitment to quality craftsmanship.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto pb-8 px-6 sm:px-12 lg:px-16 scrollbar-hide transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw]"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-neutral-900 font-medium">{project.title}</p>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-4 text-neutral-900 text-sm tracking-widest uppercase"
        >
          <span>Request Full Portfolio</span>
          <span className="w-16 h-px bg-[#d4a574]" />
        </a>
      </div>
    </section>
  );
}
