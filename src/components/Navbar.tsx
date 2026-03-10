"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 glass-effect border-b border-cafe-dark-yellow/10"
            onMouseLeave={() => setActiveMenu(null)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-cafe-dark-yellow flex items-center justify-center text-cafe-beige font-bold text-xl">
                                S
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-cafe-dark-yellow">
                                Seoul Station Cafe
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/menu" className="text-cafe-text-main hover:text-cafe-dark-yellow font-medium transition-colors">
                            Menu
                        </Link>

                        <Link href="/location" className="text-cafe-text-main hover:text-cafe-dark-yellow font-medium transition-colors">
                            Location
                        </Link>

                        <div
                            className="relative py-8"
                            onMouseEnter={() => setActiveMenu('about')}
                        >
                            <button className="flex items-center space-x-1 text-cafe-text-main hover:text-cafe-dark-yellow font-medium transition-colors">
                                <span>About</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'about' ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdowns */}
                            {activeMenu === 'about' && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="bg-cafe-light-beige border border-cafe-dark-yellow/10 shadow-xl rounded-xl overflow-hidden min-w-[200px]">
                                        <div className="py-2">
                                            <Link href="/our-beginning" className="block px-6 py-3 text-sm hover:bg-cafe-dark-yellow/5 transition-colors">Our Beginning</Link>
                                            <Link href="/story-behind-our-story" className="block px-6 py-3 text-sm hover:bg-cafe-dark-yellow/5 transition-colors">The Story Behind Our Story</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/contact" className="px-6 py-2 rounded-full bg-cafe-dark-yellow text-white font-medium hover:bg-cafe-dark-yellow/90 transition-colors shadow-md">
                            Contact Us
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}
