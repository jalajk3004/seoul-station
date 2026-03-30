import { MapPin, Clock } from "lucide-react";

export default function LocationPage() {
    return (
        <div className="min-h-screen bg-cafe-light-beige pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-3xl w-full bg-white rounded-3xl p-8 shadow-xl border border-cafe-dark-yellow/10">
                <h1 className="text-4xl font-bold text-cafe-text-main mb-8 text-center text-cafe-dark-yellow">Our Location</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative h-64 md:h-full bg-cafe-dark-yellow/5 rounded-2xl overflow-hidden border border-cafe-dark-yellow/10">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0901450130063!2d77.24425857528654!3d28.567055675700534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36ac9e51901%3A0x3f2da19eebc03e41!2sSeoul%20Station%20Cafe!5e0!3m2!1sen!2sin!4v1774843064563!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
