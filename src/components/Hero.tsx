import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative bg-cafe-dark-yellow text-cafe-light-beige pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 max-w-2xl">
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            A Taste of Seoul: <br />
                            <span className="text-cafe-beige opacity-90">Authentic & Fresh!</span>
                        </h1>

                        <p className="text-lg text-cafe-light-beige/90 leading-relaxed font-light text-balance">
                            We've brought the vibrant streets of Seoul straight to New Delhi. Our curated menu features everything from classic cold coffees to authentic gimbaps and spicy tteokbokki.
                        </p>

                        <p className="text-lg text-cafe-light-beige/90 leading-relaxed font-light text-balance">
                            A better meal starts with authentic recipes, and we've made sure ours are as genuine as it gets. Come taste the difference.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="#menu"
                                className="inline-block bg-cafe-light-beige text-cafe-dark-yellow px-8 py-4 font-semibold hover:bg-white transition-colors duration-300 shadow-lg"
                            >
                                Explore Menu
                            </Link>
                        </div>
                    </div>

                    {/* Image Content (Interactive/Visual side) */}
                    <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                        <div className="absolute inset-0 bg-cafe-dark-yellow/20 mix-blend-overlay z-10" />
                        <Image
                            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2674&auto=format&fit=crop"
                            alt="Premium Korean Coffee and Food"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                </div>

                {/* Dots / Indicators (Decorative from reference) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-white opacity-100 ring-2 ring-white ring-offset-2 ring-offset-cafe-dark-yellow cursor-pointer"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/70 transition-colors cursor-pointer"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/70 transition-colors cursor-pointer"></div>
                </div>

            </div>
        </section>
    );
}
