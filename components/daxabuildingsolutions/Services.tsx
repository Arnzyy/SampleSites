"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Extensions",
    description: "Transform your living space with beautifully designed extensions that seamlessly blend with your existing home.",
    image: "/daxabuildingsolutions/gallery/001.jpg",
    number: "01",
  },
  {
    title: "Loft Conversions",
    description: "Unlock hidden potential in your home with expert loft conversions, adding valuable living space.",
    image: "/daxabuildingsolutions/gallery/002.jpg",
    number: "02",
  },
  {
    title: "Knock Throughs",
    description: "Create open-plan living with structural knock throughs, modernizing your home for contemporary living.",
    image: "/daxabuildingsolutions/gallery/003.jpg",
    number: "03",
  },
  {
    title: "Renovations",
    description: "Complete home renovations handled from start to finish, breathing new life into tired properties.",
    image: "/daxabuildingsolutions/gallery/004.jpg",
    number: "04",
  },
  {
    title: "New Builds",
    description: "From foundations to finishing touches, we deliver quality new build construction on time and budget.",
    image: "/daxabuildingsolutions/gallery/005.jpg",
    number: "05",
  },
  {
    title: "Garden Work",
    description: "Transform outdoor spaces with summer houses, patios, decking, and complete garden makeovers.",
    image: "/daxabuildingsolutions/gallery/006.jpg",
    number: "06",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative bg-neutral-900 overflow-hidden">
      {/* Large Background Number */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[40vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        {services[activeService].number}
      </div>

      <div className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Service List */}
        <div className="lg:w-1/2 flex flex-col justify-center py-20 lg:py-0 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-6">
              Our Expertise
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-16 leading-tight">
              What We<br />
              <span className="font-serif italic">Specialise In</span>
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`w-full text-left py-6 border-t border-white/10 flex items-center justify-between group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`text-sm font-light transition-colors ${
                      activeService === index ? "text-[#d4a574]" : "text-white/30"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span
                    className={`text-2xl sm:text-3xl lg:text-4xl font-light transition-all ${
                      activeService === index
                        ? "text-white translate-x-4"
                        : "text-white/50"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 transition-all ${
                    activeService === index
                      ? "text-[#d4a574] rotate-0"
                      : "text-white/20 -rotate-45"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Active Service Image & Details */}
        <div className="lg:w-1/2 relative min-h-[60vh] lg:min-h-screen">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`absolute inset-0 transition-all duration-700 ${
                activeService === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
                <p
                  className={`text-white/70 text-lg leading-relaxed max-w-md transition-all duration-500 ${
                    activeService === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-3 mt-8 text-white text-sm tracking-widest uppercase transition-all duration-500 ${
                    activeService === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <span>Get a Quote</span>
                  <span className="w-12 h-px bg-[#d4a574]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
