"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Modern Kitchen Extension",
    category: "Extensions",
    image: "/daxabuildingsolutions/gallery/001.jpg",
  },
  {
    title: "Luxury Loft Conversion",
    category: "Loft Conversions",
    image: "/daxabuildingsolutions/gallery/002.jpg",
  },
  {
    title: "Open Plan Living",
    category: "Knock Throughs",
    image: "/daxabuildingsolutions/gallery/003.jpg",
  },
  {
    title: "Complete Home Renovation",
    category: "Renovations",
    image: "/daxabuildingsolutions/gallery/004.jpg",
  },
  {
    title: "Contemporary New Build",
    category: "New Builds",
    image: "/daxabuildingsolutions/gallery/005.jpg",
  },
  {
    title: "Garden Summer House",
    category: "Garden Work",
    image: "/daxabuildingsolutions/gallery/006.jpg",
  },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-neutral-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 bg-sky-400 rounded-full" />
            <span className="text-sm font-medium text-sky-400">Our Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Projects That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Browse our collection of completed projects showcasing our commitment to quality
            craftsmanship and attention to detail.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-pink-500 to-sky-500 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Content */}
              <div
                className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 w-fit mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-pink-400">
                  <span className="text-sm font-medium">View Project</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Border Glow */}
              <div
                className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "border-pink-500/50 shadow-lg shadow-pink-500/20"
                    : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/60 mb-4">Want to see more of our work?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-pink-400 font-medium hover:text-pink-300 transition-colors"
          >
            Request our full portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
