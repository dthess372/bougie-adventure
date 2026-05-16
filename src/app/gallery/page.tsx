import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from our luxury adventure trips. See where Bougie Adventure has taken women like you.',
};

const galleryImages = [
  { id: 1, alt: 'Grand Canyon adventure', src: '/gallery-1.jpg' },
  { id: 2, alt: 'Smoky Mountains landscape', src: '/gallery-2.jpg' },
  { id: 3, alt: 'Pacific Northwest wilderness', src: '/gallery-3.jpg' },
  { id: 4, alt: 'Grand Canyon river', src: '/gallery-4.jpg' },
  { id: 5, alt: 'Smoky Mountains hiking', src: '/gallery-5.jpg' },
  { id: 6, alt: 'Custom trip adventure', src: '/gallery-6.jpg' },
  { id: 7, alt: 'Grand Canyon rafting', src: '/gallery-7.jpg' },
  { id: 8, alt: 'Pacific Northwest kayaking', src: '/gallery-8.jpg' },
  { id: 9, alt: 'Custom trip scenery', src: '/gallery-9.jpg' },
  { id: 10, alt: 'Smoky Mountains retreat', src: '/gallery-10.jpg' },
  { id: 11, alt: 'Grand Canyon sunset', src: '/gallery-11.jpg' },
  { id: 12, alt: 'Pacific Northwest forest', src: '/gallery-12.jpg' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 bg-royal-blue text-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark to-royal-blue opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Gallery</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Adventures Worth Remembering
          </h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-xl mx-auto">
            A glimpse into the moments that make our trips unforgettable.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map(({ id, alt, src }) => (
              <div
                key={id}
                className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer"
              >
                <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 bg-royal-blue text-cream text-center space-y-6">
        <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Stay Connected</p>
        <h2 className="font-serif text-3xl font-bold">Follow Our Adventures</h2>
        <p className="text-cream/70 text-base">
          We share real moments from every trip on Instagram. Tag us in yours.
        </p>
        <a
          href="https://instagram.com/bougieadventure"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold tracking-wide hover:bg-gold-light transition-colors"
        >
          @bougieadventure on Instagram
        </a>
      </section>

      {/* Trip CTA */}
      <section className="py-16 px-6 bg-cream text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold text-royal-blue">Want to Be in the Next Gallery?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-royal-blue text-cream font-semibold tracking-wide hover:bg-royal-blue-light transition-colors"
        >
          Book Your Adventure
        </Link>
      </section>
    </>
  );
}
