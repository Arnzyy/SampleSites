"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/nav";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <span className="text-lg font-semibold tracking-tight">Menu</span>
          <button
            onClick={onClose}
            className="p-2 -mr-2 hover:bg-neutral-50 rounded-sm transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="overflow-y-auto h-[calc(100vh-73px)]">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-neutral-50">
                {item.megaMenu ? (
                  <>
                    <button
                      onClick={() => toggleItem(item.label)}
                      className={`flex items-center justify-between w-full px-6 py-4 text-left transition-colors ${
                        item.featured
                          ? "text-red-600"
                          : "text-neutral-800 hover:text-neutral-900"
                      }`}
                    >
                      <span className="text-sm tracking-[0.05em] font-medium">
                        {item.label}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedItems.includes(item.label) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems.includes(item.label)
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-neutral-50/50 py-4 px-6">
                        {item.megaMenu.categories.map((category) => (
                          <div key={category.title} className="mb-6 last:mb-0">
                            <p className="text-[10px] tracking-[0.2em] font-medium text-neutral-400 uppercase mb-3">
                              {category.title}
                            </p>
                            <ul className="space-y-3">
                              {category.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
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
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block px-6 py-4 text-sm tracking-[0.05em] font-medium transition-colors ${
                      item.featured
                        ? "text-red-600"
                        : "text-neutral-800 hover:text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Bottom Actions */}
          <div className="px-6 py-6 border-t border-neutral-100 mt-4">
            <button className="flex items-center space-x-3 w-full py-3 text-neutral-700 hover:text-neutral-900 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-sm">Account</span>
            </button>
            <button className="flex items-center space-x-3 w-full py-3 text-neutral-700 hover:text-neutral-900 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-sm">Search</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
