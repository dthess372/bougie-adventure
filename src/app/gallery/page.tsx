import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GalleryGrid from './GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from our luxury adventure trips. See where Bougie Adventure has taken women like you.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 text-cream overflow-hidden">
        <Image src="/images/heroes/gallery-mountain-lake.jpg" alt="Turquoise mountain lake surrounded by forest" fill className="object-cover object-center scale-105 blur-sm" priority />
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

      <GalleryGrid />

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
