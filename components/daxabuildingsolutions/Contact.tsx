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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-neutral-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-gradient-to-br from-pink-500/10 to-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-pink-400">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">
              Project?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed px-4 sm:px-0">
            Get in touch today for a free, no-obligation quote. We&apos;re here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div
            className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/60">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all text-base"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all text-base"
                      placeholder="07XXX XXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all text-base"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all text-base appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    <option value="" className="bg-neutral-900">Select a service...</option>
                    <option value="extension" className="bg-neutral-900">Extension</option>
                    <option value="loft" className="bg-neutral-900">Loft Conversion</option>
                    <option value="knockthrough" className="bg-neutral-900">Knock Through</option>
                    <option value="renovation" className="bg-neutral-900">Renovation</option>
                    <option value="newbuild" className="bg-neutral-900">New Build</option>
                    <option value="garden" className="bg-neutral-900">Garden Work</option>
                    <option value="other" className="bg-neutral-900">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <input type="checkbox" id="captcha" className="w-5 h-5 rounded accent-pink-500" required />
                  <label htmlFor="captcha" className="text-white/70 text-sm">I&apos;m not a robot</label>
                  <div className="ml-auto">
                    <svg className="w-8 h-8 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3.5 sm:py-4 bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[250px] sm:h-[300px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5!2d-2.4961!3d51.4144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzUxLjgiTiAywrAyOSc0Ni4wIlc!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* Quick Contact Cards */}
            <div className="grid gap-4">
              <a
                href="tel:07411179660"
                className="group p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-sm mb-1">Call Us</div>
                  <div className="text-white font-semibold text-base sm:text-lg group-hover:text-pink-400 transition-colors">07411 179660</div>
                  <div className="text-white/40 text-sm">or 07512 621136</div>
                </div>
                <svg className="w-5 h-5 text-white/30 group-hover:text-pink-400 transition-colors ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="mailto:info@daxabuildingsolutions.co.uk"
                className="group p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-sm mb-1">Email Us</div>
                  <div className="text-white font-semibold text-sm sm:text-base group-hover:text-sky-400 transition-colors break-all">info@daxabuildingsolutions.co.uk</div>
                </div>
                <svg className="w-5 h-5 text-white/30 group-hover:text-sky-400 transition-colors ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-sm mb-1">Find Us</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Lays Farms Trading Estate</div>
                  <div className="text-white/60 text-sm">Charlton Road, Keynsham, Somerset BS31 2SE</div>
                </div>
              </div>
            </div>

            {/* Free Quote Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-pink-500 to-sky-500 text-center">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Free, No-Obligation Quotes</h3>
              <p className="text-white/80 text-sm sm:text-base">
                We offer free site visits and detailed quotes for all projects. No pressure, just honest advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
