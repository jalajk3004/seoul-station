"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_IMAGES = [
    { src: "/seoul1.jpg", alt: "Premium Korean Coffee and Food" },
    { src: "/seoul2.jpg", alt: "Authentic Korean Atmosphere" },
    { src: "/seoul3.jpg", alt: "Traditional Korean Flavors" },
    { src: "/seoul4.jpg", alt: "Seoul Station Special Dishes" },
    { src: "/seoul5.jpg", alt: "Modern Korean Cafe Vibe" },
    { src: "/seoul6.jpg", alt: "Delicious Korean Street Food" },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative bg-cafe-yellow text-cafe-text-main pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 max-w-2xl">
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            A Taste of Seoul: <br />
                            <span className="text-cafe-red opacity-90">Authentic & Fresh!</span>
                        </h1>

                        <p className="text-lg text-cafe-text-main/90 leading-relaxed font-light text-balance pb-2">
                            A modern café atmosphere inspired by Korean culture and K-dramas, serving authentic Korean street food and Cuisine right here in Delhi.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="#menu"
                                className="inline-block bg-cafe-red text-white px-8 py-4 font-semibold rounded-full hover:bg-cafe-red/90 transition-colors duration-300 shadow-lg"
                            >
                                Explore Menu
                            </Link>
                        </div>
                    </div>

                    {/* Carousel Content */}
                    <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-cafe-dark-yellow/10 mix-blend-overlay z-10" />
                        
                        <div className="relative w-full h-full overflow-hidden">
                            {HERO_IMAGES.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                        index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
                                    }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover object-center"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-cafe-dark-yellow/20 hover:bg-cafe-dark-yellow/40 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-cafe-dark-yellow/20 hover:bg-cafe-dark-yellow/40 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>

                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                    {HERO_IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                ? "bg-white ring-2 ring-white ring-offset-2 ring-offset-cafe-dark-yellow scale-125" 
                                : "bg-white/40 hover:bg-white/70"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
