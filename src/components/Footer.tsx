import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#4b8b7e] text-cafe-light-beige py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="space-y-4">
                    <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
                    <div className="flex flex-col space-y-3">
                        <Link href="/" className="hover:text-white transition-colors opacity-90 text-sm">Search</Link>
                        <Link href="/" className="hover:text-white transition-colors opacity-90 text-sm">FAQ</Link>
                        <Link href="/" className="hover:text-white transition-colors opacity-90 text-sm">Cancellation & Returns</Link>
                        <Link href="/" className="hover:text-white transition-colors opacity-90 text-sm">Home</Link>
                        <Link href="/" className="hover:text-white transition-colors opacity-90 text-sm">Privacy Policy</Link>
                        <Link href="/" className="hover:text-white transition-colors opacity-90 text-sm">Terms of Service</Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                    <div className="space-y-4">
                        <p>You can reach us at <a href="mailto:hello@seoulstationcafe.in" className="underline hover:text-white transition-colors">hello@seoulstationcafe.in</a></p>
                        <p>Or give us a call at <a href="tel:09205107901" className="underline hover:text-white transition-colors">092051 07901</a></p>
                    </div>
                    <div className="pt-6 space-y-1 text-xs opacity-70">
                        <p className="font-medium text-sm text-white mb-2">SEOUL STATION</p>
                        <p>Lajpat Nagar II, Central Market Area</p>
                        <p>New Delhi, Delhi 110024, India</p>
                        <p className="pt-2">🕒 11:30 AM – 10:45 PM (Daily)</p>
                    </div>
                </div>

                <div className="flex md:justify-end items-start text-center md:text-right">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-3xl font-bold">
                            S
                        </div>
                        <span className="font-semibold tracking-wide">SEOUL STATION</span>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-xs opacity-60">
                © 2026, SEOUL STATION CAFE.
            </div>
        </footer>
    );
}
