import Link from "next/link";
import { Crown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-pink-500" />
              <span className="text-lg font-bold">
                Girl<span className="text-pink-500">#1</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Professional household services with personality. All the perks of
              having your life together, none of the arguments about the
              thermostat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-pink-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-pink-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="hover:text-pink-400 transition-colors"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-pink-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-pink-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@girl1service.com</li>
              <li>(555) 420-GIRL</li>
              <li>Based in California</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Girl#1. All rights reserved. No
          drama included.
        </div>
      </div>
    </footer>
  );
}
