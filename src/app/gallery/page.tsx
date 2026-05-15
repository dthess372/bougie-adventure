import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from our luxury adventure trips — see where Bougie Adventure has taken women like you.',
};

const placeholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: ['Grand Canyon', 'Smoky Mountains', 'Pacific Northwest', 'Grand Canyon', 'Smoky Mountains', 'Custom Trip', 'Grand Canyon', 'Pacific Northwest', 'Custom Trip', 'Smoky Mountains', 'Grand Canyon', 'Pacific Northwest'][i],
}));

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
          <p className="text-center text-charcoal/50 text-sm mb-10 italic">
            Photos coming soon — follow us on Instagram for the latest from our adventures.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {placeholders.map(({ id, label }) => (
              <div
                key={id}
                className="aspect-square rounded-xl bg-gradient-to-br from-royal-blue to-royal-blue-light flex flex-col items-center justify-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-cream/20 text-xs tracking-widest uppercase text-center px-2">{label}</span>
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
