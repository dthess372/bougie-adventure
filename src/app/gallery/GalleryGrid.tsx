'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  // Salmon River
  { id: 1,  alt: 'Guides on the raft together',                   src: '/images/gallery/guides-rafting-salmon-river.jpg',         trip: 'Salmon River' },
  { id: 2,  alt: 'Rafting the river',                             src: '/images/gallery/rafting-salmon-river-rapids.jpg',          trip: 'Salmon River' },
  { id: 3,  alt: 'Group rafting through canyon rapids',           src: '/images/gallery/group-rafting-through-canyon-rapids.jpg',  trip: 'Salmon River' },
  { id: 4,  alt: 'View from the raft along canyon walls',         src: '/images/gallery/raft-pov-canyon-river-walls.jpg',          trip: 'Salmon River' },
  { id: 5,  alt: 'Rafters floating down the river canyon',        src: '/images/gallery/rafters-floating-river-canyon.jpg',        trip: 'Salmon River' },
  { id: 6,  alt: 'Raft parked on canyon riverbank',               src: '/images/gallery/raft-parked-on-canyon-riverbank.jpg',      trip: 'Salmon River' },
  { id: 7,  alt: 'River camp with canopy shade',                  src: '/images/gallery/river-camp-canopy-shaded-aerial.jpg',      trip: 'Salmon River' },
  { id: 8,  alt: 'River camp setup at sunset',                    src: '/images/gallery/river-camp-setup-at-sunset.jpg',           trip: 'Salmon River' },
  { id: 9,  alt: 'Two women smiling on the raft',                 src: '/images/gallery/two-women-smiling-on-raft.jpg',            trip: 'Salmon River' },
  { id: 10, alt: 'Yellow paddles raised against the sky',         src: '/images/gallery/yellow-paddles-raised-against-sky.jpg',    trip: 'Salmon River' },
  { id: 11, alt: 'Woman standing on a rock by the river canyon',  src: '/images/gallery/woman-standing-on-rock-river-canyon.jpg',  trip: 'Salmon River' },
  { id: 12, alt: 'Glamping tent interior',                        src: '/images/gallery/glamping-tent-interior.jpg',               trip: 'Salmon River' },
  { id: 13, alt: 'Fly-in arrival to the backcountry',             src: '/images/gallery/fly-in-backcountry-arrival.jpg',           trip: 'Salmon River' },
  { id: 14, alt: 'Mountain silhouette at dusk',                   src: '/images/gallery/mountain-silhouette-blue-dusk.jpg',        trip: 'Salmon River' },
  { id: 15, alt: 'Mountain ridge at pink sunset',                 src: '/images/gallery/mountain-ridge-pink-sunset.jpg',           trip: 'Salmon River' },
];

const trips = ['All', ...Array.from(new Set(galleryImages.map((img) => img.trip)))];

export default function GalleryGrid() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? galleryImages : galleryImages.filter((img) => img.trip === active);

  return (
    <section className="py-16 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Filter bar — shown only when there is more than one trip to filter by */}
        {trips.length > 2 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {trips.map((trip) => (
              <button
                key={trip}
                onClick={() => setActive(trip)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-colors ${
                  active === trip
                    ? 'bg-gold text-royal-blue-dark'
                    : 'bg-white border border-gold/30 text-royal-blue hover:border-gold hover:bg-gold/10'
                }`}
              >
                {trip}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div key={active} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 animate-fadeIn">
          {filtered.map(({ id, alt, src, trip }) => (
            <div key={id} className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/40 text-white/90 text-xs font-medium tracking-wide">
                {trip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
