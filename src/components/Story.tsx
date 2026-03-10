import Image from "next/image";
import Link from "next/link";

export default function Story() {
    const stories = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
            date: "Nov 03, 2023 • 0 comments",
            title: "Episode 03: The Perfect Gimbap",
            excerpt: "Hey SeoulCafe Fam, late summer handed us a wonderful surprise. We wanted to make the most authentic gimbap, and here's how we did it..."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1583095368625-83f1df643c16?q=80&w=1200&auto=format&fit=crop",
            date: "Jul 01, 2023 • 0 comments",
            title: "Episode 02: #ISeoulStationCafe",
            excerpt: "This wasn't just about sipping something authentic—it was about celebrating you and the beautiful little moments that happen around our tables."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop",
            date: "Jun 05, 2023 • 0 comments",
            title: "Episode 01: Toasty Bites & Summer Sips",
            excerpt: "We rolled into summer 2023 with bold flavors, creamy nostalgia, and a whole lot of fruity excitement in our cold coffees."
        }
    ];

    return (
        <section id="story" className="bg-cafe-light-beige py-24 px-4 sm:px-6 lg:px-8 border-t border-cafe-dark-yellow/5">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center text-cafe-text-main mb-20 tracking-tight">
                    The Story Behind the Story
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div key={story.id} className="group cursor-pointer">

                            {/* Image Container */}
                            <div className="relative aspect-square w-full mb-6 overflow-hidden bg-cafe-beige">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-3">
                                <p className="text-xs text-cafe-text-main/60 font-medium">
                                    {story.date}
                                </p>
                                <h3 className="text-2xl font-bold text-cafe-text-main group-hover:text-cafe-dark-yellow transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-cafe-text-main/80 leading-relaxed font-light line-clamp-3">
                                    {story.excerpt}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="#more-stories"
                        className="inline-block border border-cafe-dark-yellow text-cafe-dark-yellow px-10 py-3 font-semibold hover:bg-cafe-dark-yellow hover:text-white transition-colors duration-300"
                    >
                        Read More
                    </Link>
                </div>

            </div>
        </section>
    );
}
