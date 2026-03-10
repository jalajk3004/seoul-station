import { MapPin, Clock } from "lucide-react";

export default function LocationPage() {
    return (
        <div className="min-h-screen bg-cafe-light-beige pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-3xl w-full bg-white rounded-3xl p-8 shadow-xl border border-cafe-dark-yellow/10">
                <h1 className="text-4xl font-bold text-cafe-text-main mb-8 text-center text-cafe-dark-yellow">Our Location</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative h-64 bg-cafe-dark-yellow/5 rounded-2xl overflow-hidden border border-cafe-dark-yellow/10 flex items-center justify-center">
                        {/* Placeholder for Map or Location Image */}
                        <MapPin className="w-20 h-20 text-cafe-dark-yellow/40" />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h3 className="font-bold text-2xl text-cafe-dark-yellow mb-2">Seoul Station</h3>
                            <p className="text-lg text-cafe-text-main/80 leading-relaxed max-w-sm">
                                Lajpat Nagar II, Central Market Area<br />
                                New Delhi, Delhi 110024, India
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 text-lg text-cafe-dark-yellow font-medium bg-cafe-dark-yellow/5 p-4 rounded-xl w-fit">
                                <Clock className="w-5 h-5" />
                                <span>11:30 AM – 10:45 PM (Daily)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
