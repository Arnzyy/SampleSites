"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Logo */}
          <Link href="/daxabuildingsolutions">
            <Image
              src="/daxabuildingsolutions/logo.png"
              alt="DAXA Building Solutions"
              width={160}
              height={55}
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-8">
            {["Home", "Services", "Gallery", "Reviews", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/50 text-sm tracking-wide uppercase"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Checkatrade */}
          <a
            href="https://www.checkatrade.com/trades/daxabuildingsolutions993285"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/daxabuildingsolutions/checkatrade.png"
              alt="Checkatrade Approved"
              width={100}
              height={50}
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-white/30 text-sm">
          <p>&copy; {currentYear} DAXA Building Solutions. All rights reserved.</p>
          <p>Keynsham, Somerset</p>
        </div>
      </div>
    </footer>
  );
}
