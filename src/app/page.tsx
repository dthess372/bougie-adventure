import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, ShieldCheck, Bed, Mountain, Check, Star } from 'lucide-react';

const features: { id: string; icon: React.ElementType; title: React.ReactNode; body: string }[] = [
  {
    id: 'small-groups',
    icon: Users,
    title: <>Small Groups,<br />Big Bonds</>,
    body: 'Max 10 women per trip. More personal attention from your guides, more flexibility in the day, and the chance to actually connect with who you\'re adventuring with.',
  },
  {
    id: 'female-guides',
    icon: ShieldCheck,
    title: <>Certified<br />Female Guides</>,
    body: 'Every trip is led by experienced, certified women who live for this work. You\'re in expert hands from the first morning to the last evening.',
  },
  {
    id: 'luxury-nights',
    icon: Bed,
    title: <>Luxury<br />Every Night</>,
    body: 'Hand-selected lodges, boutique inns, and glamping sites. Never an afterthought, always a highlight.',
  },
  {
    id: 'your-terms',
    icon: Mountain,
    title: <>Adventure on<br />Your Terms</>,
    body: 'Every trip has difficulty options. Easy floats to challenging runs. You set the pace and we make it work. No pressure, ever.',
  },
];

const reassurances = [
  {
    title: 'No experience needed.',
    body: "First time on the water? Perfect. Our certified guides handle everything from fitting gear to safety briefings. If you're willing to try, you're qualified.",
  },
  {
    title: 'All fitness levels welcome.',
    body: "Every trip has a difficulty rating: Easy, Moderate, or Challenging. We'll help you find your fit. If you can walk a mile comfortably, you can do most of our trips.",
  },
  {
    title: 'You will never be left behind.',
    body: 'Our groups move together. No rushing, no racing. Our guides are here to make sure every woman has her best day, every single day.',
  },
  {
    title: 'Luxury is non-negotiable.',
    body: "Adventure ends at the water's edge. Every evening is a real bed, a real meal, and room to breathe. No roughing it. Ever.",
  },
];

const trips = [
  {
    name: 'Salmon River Expedition',
    tag: 'Signature',
    tagClass: 'bg-gold text-royal-blue-dark',
    description: "Six days rafting Idaho's legendary River of No Return through one of the most remote wilderness corridors in North America. Class III-IV rapids, riverside glamping with real beds and linens, and gourmet dinners under a sky full of stars.",
    duration: '6 days',
    difficulty: 'Moderate',
    image: '/images/trips/trip-idaho-salmon-river.jpg',
  },
  {
    name: 'Wine Country E-Bike Tour',
    tag: 'New',
    tagClass: 'bg-royal-blue text-cream',
    description: 'Pedal through stunning vineyard landscapes at your own pace, with curated wine tastings, farm-to-table lunches, and boutique inn stays each night.',
    duration: '5 days',
    difficulty: 'Easy',
    image: '/images/trips/trip-ebike-wine-country.jpg',
  },
  {
    name: 'Mountain Yoga & Wilderness Retreat',
    tag: 'Wellness',
    tagClass: 'bg-pink-dark text-royal-blue-dark',
    description: 'Morning yoga overlooking mountain peaks, afternoon nature hikes, and evenings at a secluded luxury lodge. Rest, restore, and reconnect.',
    duration: '6 days',
    difficulty: 'Gentle',
    image: '/images/trips/trip-mountain-yoga-retreat.jpg',
  },
];

const testimonials = [
  {
    quote: "[Add guest quote here — something about how the trip made her feel, a specific moment, or a before/after.]",
    name: 'Guest Name',
    location: 'Location',
  },
  {
    quote: "[Add guest quote here — something about overcoming fear, surprise at the experience, or what she told friends after.]",
    name: 'Guest Name',
    location: 'Location',
  },
  {
    quote: "[Add guest quote here — something about the luxury + adventure combination, the guides, or why she'd go again.]",
    name: 'Guest Name',
    location: 'Location',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Coming Soon Banner */}
      <div className="w-full bg-gold text-royal-blue-dark text-center py-3 px-4 text-sm font-semibold tracking-wide">
        <span className="inline-flex items-center gap-2.5 justify-center flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full bg-royal-blue animate-pulse" />
          Our site is coming soon. We&apos;re putting the finishing touches on something beautiful. Stay tuned!
          <span className="w-1.5 h-1.5 rounded-full bg-royal-blue animate-pulse" />
        </span>
      </div>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/heroes/home-mountain-peaks-sunset.jpg" alt="Mountain peaks above a sea of clouds at sunset" fill priority className="object-cover object-center scale-105 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-royal-blue-dark/90" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto -mt-20">
          <div className="flex justify-center mb-6">
            <div className="logo-glimmer drop-shadow-xl w-[200px] h-[200px]">
              <Image src="/logo.png" alt="Bougie Adventure" width={200} height={200} />
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream leading-tight mb-6">
            Come as a stranger<br />
            <span className="text-pink-dark">Stay as a sister</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Curated luxury adventure trips for women 50+ who want thrilling experiences without sacrificing comfort, community, or style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold text-base tracking-wide hover:bg-gold-light hover:scale-105 transition-all shadow-lg btn-shimmer">
              Find Your Next Bougie Adventure
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-cream/40 text-cream font-medium text-base tracking-wide hover:border-gold hover:text-gold hover:scale-105 transition-all">
              Meet Your Guides
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 130" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0,130 L0,75 L60,35 L120,58 L200,18 L280,48 L360,10 L440,42 L520,20 L600,40 L680,8 L760,38 L840,14 L920,44 L1000,24 L1080,50 L1160,20 L1240,46 L1320,30 L1380,52 L1440,36 L1440,130 Z" fill="#fdfaf5" fillOpacity="0.08"/>
            <path d="M0,130 L0,90 L90,62 L180,82 L270,52 L360,75 L450,48 L540,70 L630,55 L720,78 L810,50 L900,72 L990,60 L1080,80 L1170,55 L1260,74 L1350,63 L1440,76 L1440,130 Z" fill="#fdfaf5" fillOpacity="0.12"/>
            <path d="M0,130 L0,105 L80,88 L160,108 L240,85 L320,100 L400,80 L480,98 L560,82 L640,102 L720,86 L800,104 L880,88 L960,106 L1040,84 L1120,100 L1200,88 L1280,105 L1360,90 L1440,100 L1440,130 Z" fill="#fdfaf5"/>
          </svg>
        </div>
      </section>

      {/* The Bougie Promise */}
      <section className="py-24 px-6 bg-cream" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">The Bougie Promise</p>
            <h2 className="font-serif text-4xl font-semibold text-royal-blue tracking-wide">What Every Trip Delivers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ id, icon: Icon, title, body }) => (
              <div key={id} className="text-center space-y-4 p-6">
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

      {/* Wave cream → pink */}
      <div className="bg-cream -mb-px">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,30 C180,60 360,0 540,30 C720,60 900,10 1080,35 C1200,50 1320,20 1440,30 L1440,60 L0,60 Z" fill="rgba(244,194,194,0.35)"/>
        </svg>
      </div>

      {/* Made for Women Like You */}
      <section className="py-24 px-6 bg-pink/20" data-animate>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Made for Women Like You</p>
            <h2 className="font-serif text-4xl font-semibold text-royal-blue">No Experience Required.<br className="hidden sm:block" /> No Compromises Either.</h2>
            <p className="text-charcoal/60 text-lg mt-4 max-w-xl mx-auto leading-relaxed">We hear the same questions before every trip. Here is what we want you to know.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reassurances.map(({ title, body }) => (
              <div key={title} className="flex gap-5 p-7 rounded-2xl bg-white/80">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-gold" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-royal-blue mb-2">{title}</h3>
                  <p className="text-sm text-charcoal/65 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured trips */}
      <section className="py-24 px-6 bg-pink/30" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Featured Adventures</p>
            <h2 className="font-serif text-4xl font-semibold text-royal-blue tracking-wide">Trips Made for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.name} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:ring-2 hover:ring-gold/30 transition-all duration-300 border border-gold/10 group">
                <div className="h-52 overflow-hidden relative">
                  <Image src={trip.image} alt={trip.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-white/90 font-medium tracking-wide">
                    <span>{trip.duration}</span>
                    <span className="opacity-40">·</span>
                    <span>{trip.difficulty}</span>
                  </div>
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
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-royal-blue text-cream text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-transparent hover:text-royal-blue hover:ring-2 hover:ring-royal-blue hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]">
              View All Adventures
            </Link>
          </div>
        </div>
      </section>

      {/* Wave pink → royal blue */}
      <div className="bg-pink/30 -mb-px">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,20 C240,55 480,0 720,25 C960,50 1200,5 1440,20 L1440,60 L0,60 Z" fill="#1D3557"/>
        </svg>
      </div>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-royal-blue text-cream relative overflow-hidden" data-animate>
        <svg className="absolute left-0 top-0 opacity-5 w-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10,100 Q50,10 100,10 Q150,10 190,100 Q150,190 100,190 Q50,190 10,100 Z" fill="#fdfaf5"/>
        </svg>
        <svg className="absolute right-0 bottom-0 opacity-5 w-64 rotate-180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10,100 Q50,10 100,10 Q150,10 190,100 Q150,190 100,190 Q50,190 10,100 Z" fill="#fdfaf5"/>
        </svg>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Real Women, Real Trips</p>
            <h2 className="font-serif text-4xl font-semibold text-cream">What Our Adventurers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, location }, i) => (
              <div key={i} className="p-8 rounded-2xl border border-cream/10 bg-white/5 space-y-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-gold fill-gold" />)}
                </div>
                <blockquote className="font-serif text-lg italic leading-relaxed text-cream/90">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gold/20" />
                  <p className="text-gold text-xs tracking-widest uppercase">{name}, {location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave royal blue → cream */}
      <div className="bg-royal-blue -mb-px">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,40 C360,10 720,55 1080,30 C1260,18 1380,45 1440,40 L1440,60 L0,60 Z" fill="#fdfaf5"/>
        </svg>
      </div>

      {/* CTA */}
      <section className="py-20 px-6 bg-cream" data-animate>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-16 bg-gold/30" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="currentColor" aria-hidden="true">
              <path d="M12 2C9 2 6 5 6 9c0 2.5 1.5 4.5 3 6l3 3 3-3c1.5-1.5 3-3.5 3-6 0-4-3-7-6-7z"/>
            </svg>
            <div className="h-px w-16 bg-gold/30" />
          </div>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Ready?</p>
          <h2 className="font-serif text-4xl font-semibold text-royal-blue tracking-wide">Your Next Chapter Starts Here</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Tell us your dream adventure and we&apos;ll build the perfect itinerary around you.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold text-base tracking-wide hover:bg-gold-light transition-colors shadow-lg btn-shimmer">
            Start Planning
          </Link>
        </div>
      </section>
    </>
  );
}
