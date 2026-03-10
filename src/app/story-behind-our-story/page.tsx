export default function StoryBehindPage() {
    return (
        <div className="min-h-screen bg-cafe-light-beige pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-cafe-dark-yellow/10">
                <h1 className="text-4xl md:text-5xl font-bold text-cafe-text-main mb-8 text-center text-cafe-dark-yellow">The Story Behind Our Story</h1>

                <div className="prose prose-lg mx-auto text-cafe-text-main/80 space-y-6">
                    <p className="text-xl leading-relaxed font-medium">
                        More than just a cafe, Seoul Station is a convergence of cultures, stories, and shared moments.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                        <div className="h-48 bg-cafe-dark-yellow/10 rounded-2xl flex items-center justify-center border border-cafe-dark-yellow/20">
                            <span className="text-cafe-dark-yellow/50">Ingredient Sourcing</span>
                        </div>
                        <div className="h-48 bg-cafe-dark-yellow/10 rounded-2xl flex items-center justify-center border border-cafe-dark-yellow/20">
                            <span className="text-cafe-dark-yellow/50">Community</span>
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        We believe that every great dish has a story behind it. From the farmers who meticulously grow our premium matcha to the local craftsmen who helped design our serene interiors, Seoul Station is built on layers of meaningful connections.
                    </p>
                    <p className="leading-relaxed">
                        As you enjoy our space, we invite you to become a part of our continuing story. Whether it's a quiet morning with a book or a lively evening with friends, these are the chapters we write together.
                    </p>
                </div>
            </div>
        </div>
    );
}
