"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Properties Managed", suffix: "" },
  { value: "98", label: "Occupancy Rate", suffix: "%" },
  { value: "24", label: "Hour Response Time", suffix: "h" },
  { value: "15", label: "Years Experience", suffix: "+" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block">
                <span className="text-5xl lg:text-6xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-rose-400">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-3 text-white/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <p className="text-center text-white/40 text-sm mb-8">
            Trusted & Certified
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {[
              "PRS Certified",
              "Simply Business Insured",
              "ARLA Member",
              "ICO Registered",
            ].map((badge) => (
              <div
                key={badge}
                className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-white/60 text-sm font-medium"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
