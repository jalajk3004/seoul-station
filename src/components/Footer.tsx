import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-cafe-yellow text-cafe-text-main py-16 border-t border-cafe-dark-yellow/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-16">

                <div className="space-y-6">
                    <h4 className="font-bold text-xl mb-6 text-cafe-red">Useful Links</h4>
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="hover:text-cafe-red transition-colors font-medium">Search</Link>
                        <Link href="/" className="hover:text-cafe-red transition-colors font-medium">FAQ</Link>
                        <Link href="/" className="hover:text-cafe-red transition-colors font-medium">Cancellation & Returns</Link>
                        <Link href="/" className="hover:text-cafe-red transition-colors font-medium">Home</Link>
                        <Link href="/" className="hover:text-cafe-red transition-colors font-medium">Privacy Policy</Link>
                        <Link href="/" className="hover:text-cafe-red transition-colors font-medium">Terms of Service</Link>
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="font-bold text-xl mb-6 text-cafe-red">Contact Us</h4>
                    <div className="space-y-4">
                        <p className="text-lg">You can reach us at <br/> <a href="mailto:hello@seoulstationcafe.in" className="underline font-bold hover:text-cafe-red transition-colors">hello@seoulstationcafe.in</a></p>
                        <p className="text-lg">Or give us a call at <br/> <a href="tel:09205107901" className="underline font-bold hover:text-cafe-red transition-colors">092051 07901</a></p>
                    </div>
                    <div className="pt-6 space-y-2 text-sm">
                        <p className="font-bold text-lg text-cafe-red">SEOUL STATION</p>
                        <p className="opacity-80">Lajpat Nagar II, Central Market Area</p>
                        <p className="opacity-80">New Delhi, Delhi 110024, India</p>
                        <p className="pt-2 font-medium">🕒 11:30 AM – 10:45 PM (Daily)</p>
                    </div>
                </div>

                <div className="flex md:justify-end items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative w-32 h-32 overflow-hidden bg-white rounded-2xl shadow-lg p-2">
                            <Image
                                src="/logoseoul.png"
                                alt="Seoul Station Cafe Logo"
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                        <span className="font-bold text-2xl tracking-tighter text-cafe-red">SEOUL STATION</span>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-cafe-dark-yellow/20 text-sm font-medium opacity-60">
                © 2026, SEOUL STATION CAFE.
            </div>
        </footer>
    );
}
