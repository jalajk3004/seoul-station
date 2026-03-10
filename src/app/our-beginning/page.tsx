export default function OurBeginningPage() {
    return (
        <div className="min-h-screen bg-cafe-light-beige pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-cafe-dark-yellow/10">
                <h1 className="text-4xl md:text-5xl font-bold text-cafe-text-main mb-8 text-center text-cafe-dark-yellow">Our Beginning</h1>

                <div className="prose prose-lg mx-auto text-cafe-text-main/80 space-y-6">
                    <p className="text-xl leading-relaxed">
                        Welcome to the origin of Seoul Station Cafe. Our journey started with a simple passion for authentic Korean flavors and a desire to bring the vibrant cafe culture of Seoul to New Delhi.
                    </p>
                    <p className="leading-relaxed">
                        Every sip of our carefully crafted beverages and every bite of our food carries the essence of tradition mixed with modern flair. We traveled extensively through South Korea to perfect our recipes, learning from local artisans and coffee masters.
                    </p>
                    <div className="w-full h-64 bg-cafe-dark-yellow/10 rounded-2xl my-8 flex items-center justify-center border border-cafe-dark-yellow/20">
                        <span className="text-cafe-dark-yellow/50 font-medium">Historical Photo Placeholder</span>
                    </div>
                    <p className="leading-relaxed">
                        Today, we stand as a testament to that dream, offering an oasis where you can experience a piece of Seoul right in the heart of the city.
                    </p>
                </div>
            </div>
        </div>
    );
}
