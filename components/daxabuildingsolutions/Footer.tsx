"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Extensions", href: "#services" },
    { name: "Loft Conversions", href: "#services" },
    { name: "Knock Throughs", href: "#services" },
    { name: "Renovations", href: "#services" },
    { name: "New Builds", href: "#services" },
    { name: "Garden Work", href: "#services" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-neutral-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/daxabuildingsolutions" className="inline-block mb-4 sm:mb-6">
                <Image
                  src="/daxabuildingsolutions/logo.png"
                  alt="DAXA Building Solutions"
                  width={140}
                  height={46}
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-4 sm:mb-6">
                Family-run building company with 50+ years combined experience. Quality craftsmanship across Somerset.
              </p>
              <a
                href="https://www.checkatrade.com/trades/daxabuildingsolutions993285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/daxabuildingsolutions/checkatrade.png"
                  alt="Checkatrade Approved"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-white/50 hover:text-pink-400 transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-pink-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="tel:07411179660"
                    className="flex items-center gap-2 text-white/50 hover:text-pink-400 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>07411 179660</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@daxabuildingsolutions.co.uk"
                    className="flex items-start gap-2 text-white/50 hover:text-pink-400 transition-colors text-sm break-all"
                  >
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="break-all">info@daxabuildingsolutions.co.uk</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/50 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Keynsham, Somerset BS31 2SE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
                &copy; {currentYear} DAXA Building Solutions. All rights reserved.
              </p>
              <div className="flex items-center gap-4 sm:gap-6">
                <a href="#" className="text-white/40 hover:text-white/70 text-xs sm:text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/40 hover:text-white/70 text-xs sm:text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
