"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What types of properties do you manage?",
    answer:
      "We specialize in HMO (House in Multiple Occupation) properties across London. This includes shared houses, student accommodation, and multi-let properties. We have extensive experience with both licensed and non-licensed HMOs.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our management fees are competitive and transparent. We typically charge between 10-15% of the monthly rent, depending on the services required and number of properties. There are no hidden fees - everything is outlined clearly in our agreement.",
  },
  {
    question: "How quickly can you find tenants?",
    answer:
      "On average, we fill vacancies within 2-3 weeks. Our extensive tenant database, professional marketing, and proactive approach means minimal void periods for your property. We also conduct thorough vetting to ensure quality tenants.",
  },
  {
    question: "What happens if a tenant doesn't pay rent?",
    answer:
      "We have a robust rent collection process with automated reminders and follow-ups. If a tenant falls into arrears, we handle all communications and, if necessary, coordinate legal proceedings. Many of our clients opt for our rent guarantee service for complete peace of mind.",
  },
  {
    question: "Are you available for emergencies?",
    answer:
      "Yes, we provide 24/7 emergency support for genuine emergencies like gas leaks, flooding, or security issues. Our network of trusted contractors can respond quickly to minimize damage and ensure tenant safety.",
  },
  {
    question: "How do you keep me informed about my property?",
    answer:
      "You'll receive monthly statements detailing income and expenses, plus access to our online portal where you can view real-time updates. We also provide quarterly property inspection reports and annual performance summaries.",
  },
];

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-rose-400 rounded-full" />
            <span className="text-sm font-medium text-rose-700">FAQ</span>
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Questions?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">
              We&apos;ve Got Answers
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-rose-500/25"
                    : "bg-neutral-50 text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <span className="font-semibold pr-8">{faq.question}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? "bg-white/20" : "bg-neutral-200"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
