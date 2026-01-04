"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5!2d-2.4961!3d51.4144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzUxLjgiTiAywrAyOSc0Ni4wIlc!5e0!3m2!1sen!2suk!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="grayscale"
        />
        <div className="absolute inset-0 bg-neutral-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
              Start Your<br />
              <span className="font-serif italic">Project Today</span>
            </h2>
            <p className="text-white/60 mb-12 max-w-md">
              Ready to transform your home? Get in touch for a free, no-obligation consultation and quote.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a href="tel:07411179660" className="flex items-center gap-4 text-white">
                <span className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase">Phone</p>
                  <p className="text-lg">07411 179660</p>
                </div>
              </a>

              <a href="mailto:info@daxabuildingsolutions.co.uk" className="flex items-center gap-4 text-white">
                <span className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase">Email</p>
                  <p className="text-lg">info@daxabuildingsolutions.co.uk</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white">
                <span className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase">Address</p>
                  <p className="text-lg">Keynsham, Somerset BS31 2SE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`bg-white p-8 sm:p-12 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#d4a574] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-neutral-900 mb-2">Thank You</h3>
                <p className="text-neutral-500">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-[#d4a574] focus:ring-0 bg-transparent text-neutral-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-[#d4a574] focus:ring-0 bg-transparent text-neutral-900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-[#d4a574] focus:ring-0 bg-transparent text-neutral-900"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-[#d4a574] focus:ring-0 bg-transparent text-neutral-900 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="extension">Extension</option>
                    <option value="loft">Loft Conversion</option>
                    <option value="knockthrough">Knock Through</option>
                    <option value="renovation">Renovation</option>
                    <option value="newbuild">New Build</option>
                    <option value="garden">Garden Work</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-[#d4a574] focus:ring-0 bg-transparent text-neutral-900 resize-none"
                  />
                </div>

                {/* Simple Captcha */}
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="captcha" required className="w-5 h-5 accent-[#d4a574]" />
                  <label htmlFor="captcha" className="text-neutral-500 text-sm">I&apos;m not a robot</label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-neutral-900 text-white text-sm tracking-widest uppercase disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
