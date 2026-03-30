import Link from "next/link";
import Image from "next/image";

export default function Products() {
    return (
        <section id="products" className="relative min-h-[600px] flex items-center justify-center text-center py-20 px-4 md:px-8">
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
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                    Our Products
                </h2>
                <p className="text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto text-white/90 drop-shadow-md pb-6 text-balance">
                    Experience Authentic Korean Street Food & Cuisine
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 text-lg font-medium text-cafe-light-beige">
                    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors">Korean Ramen</div>
                    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors">Tteokbokki</div>
                    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors">Korean Fried Chicken</div>
                    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors">Kimbap</div>
                    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors">Korean Corn Dogs</div>
                    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors">Kimchi-based Dishes</div>
                </div>

                <div className="bg-cafe-dark-yellow/90 backdrop-blur-md px-4 sm:px-6 py-3 rounded-xl sm:rounded-full inline-flex items-center mb-8 border border-white/20 shadow-lg max-w-full">
                    <p className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <span className="text-lg sm:text-xl">💰</span>
                        <span className="text-balance">Approx. ₹600 – ₹1,000 for two people</span>
                    </p>
                </div>

                <Link
                    href="#menu"
                    className="inline-block bg-cafe-red text-white px-12 py-4 font-semibold rounded-full hover:bg-cafe-red/90 transition-colors duration-300 shadow-xl"
                >
                    View Full Menu
                </Link>
            </div>
        </section>
    );
}
