"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300 glass-effect border-b border-cafe-dark-yellow/10"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-24 h-24 overflow-hidden">
                <Image
                  src="/logoseoul.png"
                  alt="Seoul Station Cafe Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-3xl tracking-tight text-cafe-dark-yellow hidden sm:block">
                Seoul Station
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/menu"
              className="text-cafe-text-main hover:text-cafe-dark-yellow font-medium transition-colors"
            >
              Menu
            </Link>

            <Link
              href="/location"
              className="text-cafe-text-main hover:text-cafe-dark-yellow font-medium transition-colors"
            >
              Location
            </Link>

            <div
              className="relative py-8"
              onMouseEnter={() => setActiveMenu("about")}
            >
              <button className="flex items-center space-x-1 text-cafe-text-main hover:text-cafe-dark-yellow font-medium transition-colors">
                <span>About</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "about" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdowns */}
              {activeMenu === "about" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-cafe-light-beige border border-cafe-dark-yellow/10 shadow-xl rounded-xl overflow-hidden min-w-[200px]">
                    <div className="py-2">
                      <Link
                        href="/our-beginning"
                        className="block px-6 py-3 text-sm hover:bg-cafe-dark-yellow/5 transition-colors"
                      >
                        Our Beginning
                      </Link>
                      <Link
                        href="/story-behind-our-story"
                        className="block px-6 py-3 text-sm hover:bg-cafe-dark-yellow/5 transition-colors"
                      >
                        The Story Behind Our Story
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-6 py-2 rounded-full bg-cafe-red text-white font-medium hover:bg-cafe-red/90 transition-colors shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cafe-text-main hover:text-cafe-dark-yellow p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cafe-light-beige border-t border-cafe-dark-yellow/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-6 space-y-6 shadow-xl max-h-[80vh] overflow-y-auto">
            <Link
              href="/menu"
              className="block text-lg text-cafe-text-main hover:text-cafe-dark-yellow font-bold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>

            <Link
              href="/location"
              className="block text-lg text-cafe-text-main hover:text-cafe-dark-yellow font-bold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Location
            </Link>

            <div className="space-y-3">
              <span className="block text-lg text-cafe-text-main font-bold border-b border-cafe-dark-yellow/10 pb-2">
                About
              </span>
              <div className="pl-4 space-y-4 pt-2">
                <Link
                  href="/our-beginning"
                  className="block text-cafe-text-main/90 hover:text-cafe-dark-yellow font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Beginning
                </Link>
                <Link
                  href="/story-behind-our-story"
                  className="block text-cafe-text-main/90 hover:text-cafe-dark-yellow font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  The Story Behind Our Story
                </Link>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="block text-center px-6 py-4 rounded-full bg-cafe-red text-white font-bold hover:bg-cafe-red/90 transition-colors shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
