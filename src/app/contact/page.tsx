import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-cafe-light-beige pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-cafe-dark-yellow/10">
                <h1 className="text-4xl md:text-5xl font-bold text-cafe-text-main mb-4 text-center text-cafe-dark-yellow">Contact Us</h1>
                <p className="text-center text-lg text-cafe-text-main/80 mb-12">We'd love to hear from you. Get in touch with us.</p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-2xl text-cafe-text-main mb-6">Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cafe-dark-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 text-cafe-dark-yellow">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-cafe-dark-yellow text-lg">Location</h4>
                                        <p className="text-cafe-text-main/80 mt-1 leading-relaxed">
                                            O Block, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cafe-dark-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 text-cafe-dark-yellow">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-cafe-dark-yellow text-lg">Hours</h4>
                                        <p className="text-cafe-text-main/80 mt-1">
                                            Opens 11:30 AM Daily
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cafe-dark-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 text-cafe-dark-yellow">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-cafe-dark-yellow text-lg">Phone</h4>
                                        <p className="text-cafe-text-main/80 mt-1">
                                            092051 07901
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cafe-dark-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 text-cafe-dark-yellow">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-cafe-dark-yellow text-lg">Email</h4>
                                        <p className="text-cafe-text-main/80 mt-1">
                                            hello@seoulstationcafe.in
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-cafe-dark-yellow/5 rounded-2xl p-8 border border-cafe-dark-yellow/10 flex flex-col justify-center">
                        <h3 className="font-bold text-2xl text-cafe-text-main mb-2">Ready to visit?</h3>
                        <p className="text-cafe-text-main/80 mb-8">Reserve a table or order online to pick up.</p>

                        <div className="space-y-4">
                            <button className="w-full text-center px-6 py-4 rounded-xl bg-cafe-dark-yellow text-white font-semibold text-lg hover:bg-cafe-dark-yellow/90 transition-colors shadow-lg">
                                Reserve a table
                            </button>
                            <button className="w-full text-center px-6 py-4 rounded-xl border-2 border-cafe-dark-yellow text-cafe-dark-yellow font-semibold text-lg hover:bg-cafe-dark-yellow/10 transition-colors">
                                Order online
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
