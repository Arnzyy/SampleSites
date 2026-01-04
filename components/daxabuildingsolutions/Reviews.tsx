"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Keynsham",
    rating: 5,
    text: "Mark and Connor were absolutely brilliant from start to finish. Our extension was completed on time and to an exceptional standard. Would highly recommend!",
    project: "Kitchen Extension",
  },
  {
    name: "James T.",
    location: "Bath",
    rating: 5,
    text: "Professional, reliable, and great attention to detail. The loft conversion has transformed our home. The team kept everything clean and tidy throughout.",
    project: "Loft Conversion",
  },
  {
    name: "Helen R.",
    location: "Bristol",
    rating: 5,
    text: "We couldn't be happier with our new open-plan living space. The knock through was done expertly with minimal disruption. True craftsmen!",
    project: "Knock Through",
  },
  {
    name: "David K.",
    location: "Saltford",
    rating: 5,
    text: "From the initial quote to the final finish, everything was handled professionally. Our renovation exceeded all expectations. Thank you DAXA!",
    project: "Full Renovation",
  },
  {
    name: "Emma W.",
    location: "Keynsham",
    rating: 5,
    text: "The summer house they built is absolutely beautiful. Great communication throughout and the quality of workmanship is outstanding.",
    project: "Summer House",
  },
  {
    name: "Michael P.",
    location: "Somerset",
    rating: 5,
    text: "Used DAXA for our new build project. Exceptional quality from foundations to finishing. They made the whole process stress-free.",
    project: "New Build",
  },
];

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-pink-50 via-white to-sky-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-amber-600">5.0 Checkatrade Rating</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-500">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our happy customers have to say about
            their experience with DAXA Building Solutions.
          </p>
        </div>

        {/* Featured Review */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-white/5">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 transition-all duration-500">
              &quot;{reviews[activeIndex].text}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-sky-500 flex items-center justify-center text-white font-bold text-lg">
                  {reviews[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{reviews[activeIndex].name}</div>
                  <div className="text-white/50 text-sm">{reviews[activeIndex].location}</div>
                </div>
              </div>
              <div className="hidden sm:block px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm">
                {reviews[activeIndex].project}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-pink-500 to-sky-500"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={review.name}
              className={`p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 mb-4 line-clamp-3">&quot;{review.text}&quot;</p>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <div>
                  <div className="font-semibold text-neutral-900">{review.name}</div>
                  <div className="text-sm text-neutral-500">{review.location}</div>
                </div>
                <span className="text-xs text-neutral-400">{review.project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Checkatrade Badge */}
        <div
          className={`mt-16 flex flex-col items-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-neutral-50 border border-neutral-100">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-neutral-900">Checkatrade Approved</div>
              <div className="text-sm text-neutral-500">Verified reviews from real customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
