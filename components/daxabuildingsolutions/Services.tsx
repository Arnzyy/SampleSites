"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Extensions",
    description:
      "Transform your living space with beautifully designed extensions that seamlessly blend with your existing home.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Loft Conversions",
    description:
      "Unlock hidden potential in your home with expert loft conversions, adding valuable living space and property value.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Knock Throughs",
    description:
      "Create open-plan living with structural knock throughs, modernizing your home layout for contemporary living.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Renovations",
    description:
      "Complete home renovations handled from start to finish, breathing new life into tired properties.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "New Builds",
    description:
      "From foundations to finishing touches, we deliver quality new build construction projects on time and on budget.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Garden & Landscaping",
    description:
      "Transform your outdoor space with summer houses, patios, decking, and complete garden makeovers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    gradient: "from-lime-500 to-green-500",
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100/50 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            <span className="text-sm font-medium text-pink-600">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Building Excellence,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-500">
              One Project at a Time
            </span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            From concept to completion, we deliver outstanding craftsmanship across every aspect of construction
            and renovation. Whatever your vision, we have the expertise to make it reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`group relative p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 hover:-translate-y-2 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              <div className="absolute inset-[1px] rounded-3xl bg-white -z-5" />

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-sky-500 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">{service.description}</p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-neutral-400 group-hover:text-pink-500 transition-colors duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            Discuss Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
