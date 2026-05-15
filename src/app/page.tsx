import Link from 'next/link';
import Image from 'next/image';
import { Compass, Star, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Curated Itineraries',
    body: 'Every trip is thoughtfully planned, from the rapids to the yoga mat to the wine glass. No guesswork, just adventure.',
  },
  {
    icon: Star,
    title: 'Luxury Standards',
    body: 'Upscale accommodations, fine dining, and comfort at every step. Because adventure and luxury belong together.',
  },
  {
    icon: Users,
    title: 'Expert Guides',
    body: 'Led by women who live for the outdoors. Our guides bring safety, skill, and sisterhood to every journey.',
  },
  {
    icon: Leaf,
    title: 'Adventure + Wellness',
    body: 'White water by day, yoga at sunrise, wine by firelight. We balance the thrill with the restore.',
  },
];

const trips = [
  {
    name: 'Grand Canyon River Run',
    tag: 'Signature',
    tagClass: 'bg-gold text-royal-blue-dark',
    description: 'Six days rafting the Colorado through the heart of the Grand Canyon. Class III–IV rapids, glamping under the stars, and canyon-side gourmet dinners.',
    duration: '6 days',
    difficulty: 'Moderate',
  },
  {
    name: 'Wine Country E-Bike Tour',
    tag: 'New',
    tagClass: 'bg-royal-blue text-cream',
    description: 'Pedal through stunning vineyard landscapes at your own pace, with curated wine tastings, farm-to-table lunches, and boutique inn stays each night.',
    duration: '5 days',
    difficulty: 'Easy',
  },
  {
    name: 'Mountain Yoga & Wilderness Retreat',
    tag: 'Wellness',
    tagClass: 'bg-pink-dark text-royal-blue-dark',
    description: 'Morning yoga overlooking mountain peaks, afternoon nature hikes, and evenings at a secluded luxury lodge. Rest, restore, and reconnect.',
    duration: '6 days',
    difficulty: 'Gentle',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background image — photo by Samuel Ferrara / Unsplash */}
        <Image
          src="/hero.jpg"
          alt="Mountain peaks above a sea of clouds at sunset"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay: darkens for text legibility, fades to brand blue at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-royal-blue-dark/80" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/Choice 1.jpg"
              alt="Bougie Adventure"
              width={120}
              height={120}
              className="rounded-full border-2 border-gold/40 shadow-xl"
            />
          </div>
          <p className="text-gold text-xs uppercase font-medium mb-6" style={{ letterSpacing: '0.35em' }}>
            Adventure &nbsp;·&nbsp; Wellness &nbsp;·&nbsp; Sisterhood
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream leading-tight mb-6">
            Adventure Awaits,<br />
            <em className="text-gold not-italic">Darling.</em>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Curated luxury adventure trips for women 50+ who want thrilling experiences without sacrificing comfort, community, or style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold text-base tracking-wide hover:bg-gold-light transition-colors shadow-lg btn-shimmer"
            >
              Explore Adventures
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-cream/40 text-cream font-medium text-base tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              Meet Your Guides
            </Link>
          </div>
        </div>

        {/* Layered mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 130" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0,130 L0,75 L60,35 L120,58 L200,18 L280,48 L360,10 L440,42 L520,20 L600,40 L680,8 L760,38 L840,14 L920,44 L1000,24 L1080,50 L1160,20 L1240,46 L1320,30 L1380,52 L1440,36 L1440,130 Z" fill="#fdfaf5" fillOpacity="0.08"/>
            <path d="M0,130 L0,90 L90,62 L180,82 L270,52 L360,75 L450,48 L540,70 L630,55 L720,78 L810,50 L900,72 L990,60 L1080,80 L1170,55 L1260,74 L1350,63 L1440,76 L1440,130 Z" fill="#fdfaf5" fillOpacity="0.12"/>
            <path d="M0,130 L0,105 L80,88 L160,108 L240,85 L320,100 L400,80 L480,98 L560,82 L640,102 L720,86 L800,104 L880,88 L960,106 L1040,84 L1120,100 L1200,88 L1280,105 L1360,90 L1440,100 L1440,130 Z" fill="#fdfaf5"/>
          </svg>
        </div>

      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Why Bougie Adventure</p>
            <h2 className="font-serif text-4xl font-bold text-royal-blue tracking-wide">The Experience You Deserve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center space-y-4 p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink border border-pink-dark">
                  <Icon className="text-royal-blue" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-royal-blue">{title}</h3>
                <p className="text-base text-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider cream to pink */}
      <div className="bg-cream -mb-px">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,30 C180,60 360,0 540,30 C720,60 900,10 1080,35 C1200,50 1320,20 1440,30 L1440,60 L0,60 Z" fill="rgba(244,194,194,0.35)"/>
        </svg>
      </div>

      {/* Featured trips */}
      <section className="py-24 px-6 bg-pink/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Featured Adventures</p>
            <h2 className="font-serif text-4xl font-bold text-royal-blue tracking-wide">Trips Made for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.name} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:ring-2 hover:ring-gold/30 transition-all duration-300 border border-gold/10 group">
                {/* Image with overlay */}
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue to-royal-blue-light group-hover:scale-105 transition-transform duration-500" />
                  {/* Stronger scrim for clear metadata legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center text-cream/15 text-xs tracking-widest uppercase">Photo Coming Soon</span>
                  {/* Metadata — padded 16px from edges */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-white/90 font-medium tracking-wide">
                    <span>{trip.duration}</span>
                    <span className="opacity-40">·</span>
                    <span>{trip.difficulty}</span>
                  </div>
                  {/* Badge top-left */}
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${trip.tagClass}`}>
                    {trip.tag}
                  </span>
                </div>
                <div className="px-6 pt-5 pb-7 space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-royal-blue">{trip.name}</h3>
                  <p className="text-base text-charcoal/70 leading-relaxed">{trip.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-royal-blue text-cream text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-transparent hover:text-royal-blue hover:ring-2 hover:ring-royal-blue hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]"
            >
              View All Adventures
            </Link>
          </div>
        </div>
      </section>

      {/* Wave divider pink to royal blue */}
      <div className="bg-pink/30 -mb-px">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,20 C240,55 480,0 720,25 C960,50 1200,5 1440,20 L1440,60 L0,60 Z" fill="#1D3557"/>
        </svg>
      </div>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-royal-blue text-cream relative overflow-hidden">
        <svg className="absolute left-0 top-0 opacity-5 w-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10,100 Q50,10 100,10 Q150,10 190,100 Q150,190 100,190 Q50,190 10,100 Z" fill="#fdfaf5"/>
        </svg>
        <svg className="absolute right-0 bottom-0 opacity-5 w-64 rotate-180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10,100 Q50,10 100,10 Q150,10 190,100 Q150,190 100,190 Q50,190 10,100 Z" fill="#fdfaf5"/>
        </svg>

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed text-cream/90">
            "I turned 56 on a white water raft in the Grand Canyon. Best birthday of my life, and I didn't break a nail."
          </blockquote>
          <p className="text-gold text-sm tracking-widest uppercase">Margaret T., Arizona</p>
          <div className="flex items-center justify-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold/50">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span className="text-cream/40 text-xs tracking-widest uppercase">Verified Traveler</span>
          </div>
        </div>
      </section>

      {/* Wave divider royal blue to cream */}
      <div className="bg-royal-blue -mb-px">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,40 C360,10 720,55 1080,30 C1260,18 1380,45 1440,40 L1440,60 L0,60 Z" fill="#fdfaf5"/>
        </svg>
      </div>

      {/* CTA */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-16 bg-gold/30" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="currentColor" aria-hidden="true">
              <path d="M12 2C9 2 6 5 6 9c0 2.5 1.5 4.5 3 6l3 3 3-3c1.5-1.5 3-3.5 3-6 0-4-3-7-6-7z"/>
            </svg>
            <div className="h-px w-16 bg-gold/30" />
          </div>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Ready?</p>
          <h2 className="font-serif text-4xl font-bold text-royal-blue tracking-wide">Your Next Chapter Starts Here</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Tell us your dream adventure and we'll build the perfect itinerary around you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold text-base tracking-wide hover:bg-gold-light transition-colors shadow-lg btn-shimmer"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </>
  );
}
