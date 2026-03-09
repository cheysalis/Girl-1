"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Crown } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Crown className="w-7 h-7 text-pink-500 group-hover:text-pink-400 transition-colors" />
            <span className="text-xl font-bold tracking-tight">
              Girl<span className="text-pink-500">#1</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="ml-3 px-5 py-2 bg-pink-600 hover:bg-pink-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-white/5">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="block mt-2 px-3 py-2 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
