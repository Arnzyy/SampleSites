"use client";

import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/withhuk/latest" },
      { label: "Footwear", href: "/withhuk/footwear" },
      { label: "Clothing", href: "/withhuk/clothing" },
      { label: "Accessories", href: "/withhuk/accessories" },
      { label: "Sale", href: "/withhuk/sale" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "Contact Us", href: "/withhuk/contact" },
      { label: "FAQs", href: "/withhuk/faqs" },
      { label: "Shipping & Returns", href: "/withhuk/shipping" },
      { label: "Size Guide", href: "/withhuk/size-guide" },
      { label: "Track Order", href: "/withhuk/track" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "Our Story", href: "/withhuk/about" },
      { label: "Authenticity", href: "/withhuk/authenticity" },
      { label: "Sustainability", href: "/withhuk/sustainability" },
      { label: "Careers", href: "/withhuk/careers" },
      { label: "Press", href: "/withhuk/press" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/withhuk/terms" },
      { label: "Privacy Policy", href: "/withhuk/privacy" },
      { label: "Cookie Policy", href: "/withhuk/cookies" },
    ],
  },
};

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic here
    setEmail("");
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xs tracking-[0.3em] font-medium text-neutral-400 mb-3">
              NEWSLETTER
            </h3>
            <p className="text-2xl lg:text-3xl font-light tracking-wide mb-8">
              Be the first to know
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-white/30 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-white text-neutral-900 text-xs tracking-[0.15em] font-medium hover:bg-neutral-100 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
            <p className="mt-4 text-xs text-neutral-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/withhuk" className="inline-block mb-6">
              <span className="text-xl font-semibold tracking-tight">
                WITH H
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Premium streetwear and luxury fashion. Authenticity guaranteed on every item.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xs tracking-wide">{social.label.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h4 className="text-[10px] tracking-[0.25em] font-medium text-neutral-400 uppercase mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} WITH H. All rights reserved.
            </p>

            {/* Payment Icons Placeholder */}
            <div className="flex items-center space-x-3">
              {["Visa", "MC", "Amex", "PayPal", "Klarna"].map((method) => (
                <div
                  key={method}
                  className="px-2 py-1 bg-white/5 text-[10px] text-neutral-400 tracking-wide"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
