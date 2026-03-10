import Link from "next/link";
import Image from "next/image";

export default function Products() {
    return (
        <section id="products" className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1558857463-2287413669fc?q=80&w=2674&auto=format&fit=crop"
                    alt="Korean Cafe Products Background"
                    fill
                    className="object-cover object-center filter blur-[2px] scale-105"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-3xl mx-auto text-white space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                    Our Products
                </h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto text-white/90 drop-shadow-md pb-6 text-balance">
                    Discover a world of flavor at our café — with a broad selection of authentic Korean street food alongside Ramens, Tteokbokki, and more.
                    <br className="hidden md:block" /> Explore your perfect pair today.
                </p>

                <Link
                    href="#menu"
                    className="inline-block bg-cafe-light-beige text-cafe-dark-yellow px-8 py-4 font-semibold hover:bg-white transition-colors duration-300 shadow-xl"
                >
                    View Full Menu
                </Link>
            </div>
        </section>
    );
}
