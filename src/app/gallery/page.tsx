import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from our luxury adventure trips. See where Bougie Adventure has taken women like you.',
};

const galleryImages = [
  { id: 1,  alt: 'Guides on the raft together',        src: '/gallery-guides-raft.jpg',       trip: 'Salmon River' },
  { id: 2,  alt: 'Rafting the river',                  src: '/gallery-raft.jpg',               trip: 'Salmon River' },
  { id: 3,  alt: 'Kayaks on calm water',               src: '/gallery-kayaks.jpg',             trip: 'Smoky Mountain Kayak' },
  { id: 4,  alt: 'E-bikes through wine country',       src: '/gallery-bikes.jpg',              trip: 'Wine Country E-Bike' },
  { id: 5,  alt: 'Nicole at a waterfall',              src: '/gallery-nicole-waterfall.jpg',   trip: 'Pacific Northwest' },
  { id: 6,  alt: 'Waterfall in the wilderness',        src: '/gallery-waterfall.jpg',          trip: 'Pacific Northwest' },
  { id: 7,  alt: 'Towering redwood trees',             src: '/gallery-redwood.jpg',            trip: 'Pacific Northwest' },
  { id: 8,  alt: 'Fly-in arrival to the backcountry',  src: '/gallery-plane.jpg',              trip: 'Salmon River' },
  { id: 10, alt: 'Nicole on a bridge overlook',        src: '/gallery-nicole-bridge.jpg',      trip: 'Custom Trip' },
  { id: 11, alt: 'Nicole on a rocky outcrop',          src: '/gallery-nicole-rock.jpg',        trip: 'Mountain Retreat' },
  { id: 12, alt: 'Laurel on the river',                src: '/laurel.jpg',                     trip: 'Salmon River' },
  { id: 13, alt: 'Guides on the water',               src: '/hero-home.png',                  trip: 'Salmon River' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 text-cream overflow-hidden">
        <Image src="/hero-gallery.jpg" alt="Turquoise mountain lake surrounded by forest" fill className="object-cover object-center scale-105 blur-sm" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark/70 via-black/50 to-royal-blue-dark/80" />
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
            {galleryImages.map(({ id, alt, src, trip }) => (
              <div key={id} className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer">
                <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/40 text-white/90 text-xs font-medium tracking-wide">
                  {trip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 bg-royal-blue text-cream text-center space-y-6">
        <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Stay Connected</p>
        <h2 className="font-serif text-3xl font-semibold">Follow Our Adventures</h2>
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
        <h2 className="font-serif text-3xl font-semibold text-royal-blue">Want to Be in the Next Gallery?</h2>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-royal-blue text-cream font-semibold tracking-wide hover:bg-royal-blue-light transition-colors">
          Book Your Adventure
        </Link>
      </section>
    </>
  );
}
