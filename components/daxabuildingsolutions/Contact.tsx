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
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E91E8C]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#E91E8C]/10 text-[#E91E8C] text-sm font-semibold rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E8C] to-[#38BDF8]">Project?</span>
          </h2>
          <p className="text-white/60 text-lg">
            Get in touch today for a free, no-obligation quote. We&apos;re here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`bg-white rounded-3xl p-8 sm:p-10 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#38BDF8] flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                <p className="text-neutral-600">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all"
                      placeholder="07XXX XXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">Service Required</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all bg-white"
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
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="captcha" required className="w-5 h-5 rounded accent-[#E91E8C]" />
                  <label htmlFor="captcha" className="text-neutral-600 text-sm">I&apos;m not a robot</label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#E91E8C] to-[#38BDF8] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#E91E8C]/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5!2d-2.4961!3d51.4144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzUxLjgiTiAywrAyOSc0Ni4wIlc!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Contact Cards */}
            <a href="tel:07411179660" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E91E8C]/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#E91E8C] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-white/50 text-sm">Call Us</div>
                <div className="text-white font-semibold text-lg group-hover:text-[#E91E8C] transition-colors">07411 179660</div>
              </div>
            </a>

            <a href="mailto:info@daxabuildingsolutions.co.uk" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#38BDF8]/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#38BDF8] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white/50 text-sm">Email Us</div>
                <div className="text-white font-semibold group-hover:text-[#38BDF8] transition-colors break-all">info@daxabuildingsolutions.co.uk</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E91E8C] to-[#38BDF8] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white/50 text-sm">Find Us</div>
                <div className="text-white font-semibold">Keynsham, Somerset BS31 2SE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
