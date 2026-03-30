import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/seoul2.jpg", alt: "Seoul Station Cafe Interior" },
    { src: "/seoul5.jpg", alt: "Seoul Station Cafe Vibe" },
    { src: "/seoul6.jpg", alt: " Korean Street Food" },
  ];

  return (
    <section id="gallery" className="py-24 bg-cafe-light-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-text-main mb-4 tracking-tight">
            Our Atmosphere
          </h2>
          <div className="w-24 h-1 bg-cafe-dark-yellow mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-cafe-text-main/70 max-w-2xl mx-auto font-light">
            Step into a piece of Seoul right in the heart of Delhi. Experience the authentic vibes,
            the music, and most importantly, the incredible flavors of Korea.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-medium text-lg italic">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
