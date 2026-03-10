export default function Customers() {
    const reviews = [
        {
            text: "I really loved the food, the ambience and also the Service was excellent. The owner is very sweet and staff members very interactive. Highly recommend for authentic Korean food!",
            author: "Parnika Som, Local Guide"
        },
        {
            text: "The staff and service were excellent. Now, if you're going to ask about the food—don't even get me started! It had a real Korean kick, so spicy and absolutely amazing.",
            author: "Ishu Chauhan, Review Tracker"
        },
        {
            text: "As a Korean, stumbling upon this restaurant was a real treat. I was looking for a quick meal, but from the first bite, I was hooked! Finished three plates – it was that good.",
            author: "건또이또이, Authentic Foodie"
        }
    ];

    return (
        <section className="bg-cafe-beige py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center text-cafe-text-main mb-20 tracking-tight">
                    Our Customers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="relative pt-8 px-6 flex flex-col items-center text-center">

                            {/* Decorative Quote Mark */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-9xl text-cafe-dark-yellow/5 font-serif leading-none select-none">
                                &ldquo;
                            </div>

                            <p className="relative z-10 text-cafe-text-main/80 text-lg leading-relaxed mb-8 flex-grow font-light text-balance">
                                {review.text}
                            </p>

                            <div className="w-full flex items-center justify-center gap-4 mt-auto">
                                <div className="w-12 h-px bg-cafe-text-main/20"></div>
                                <p className="text-cafe-dark-yellow font-medium text-sm">
                                    {review.author}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
