import Link from 'next/link';
import Image from 'next/image';
import { Compass, Star, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Curated Itineraries',
    body: 'Every trip is thoughtfully planned — from the rapids to the yoga mat to the wine glass. No guesswork, just adventure.',
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
    description: 'Six days rafting the Colorado through the heart of the Grand Canyon. Class III–IV rapids, glamping under the stars, and canyon-side gourmet dinners.',
    duration: '6 days',
    difficulty: 'Moderate',
  },
  {
    name: 'Wine Country E-Bike Tour',
    tag: 'New',
    description: 'Pedal through stunning vineyard landscapes at your own pace, with curated wine tastings, farm-to-table lunches, and boutique inn stays each night.',
    duration: '5 days',
    difficulty: 'Easy',
  },
  {
    name: 'Mountain Yoga & Wilderness Retreat',
    tag: 'Wellness',
    description: 'Morning yoga overlooking mountain peaks, afternoon nature hikes, and evenings at a secluded luxury lodge — rest, restore, and reconnect.',
    duration: '6 days',
    difficulty: 'Gentle',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light" />

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
          <p className="text-gold text-sm tracking-[0.4em] uppercase font-medium mb-6">
            Adventure · Wellness · Sisterhood
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold text-base tracking-wide hover:bg-gold-light transition-colors shadow-lg"
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream/40 text-xs tracking-widest">
          <span>scroll</span>
          <div className="w-px h-10 bg-cream/20" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Why Bougie Adventure</p>
            <h2 className="font-serif text-4xl font-bold text-royal-blue">The Experience You Deserve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center space-y-4 p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink border border-pink-dark">
                  <Icon className="text-royal-blue" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-royal-blue">{title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured trips */}
      <section className="py-20 px-6 bg-pink/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Featured Adventures</p>
            <h2 className="font-serif text-4xl font-bold text-royal-blue">Trips Made for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gold/10">
                <div className="h-48 bg-gradient-to-br from-royal-blue to-royal-blue-light flex items-center justify-center">
                  <span className="text-cream/30 text-xs tracking-widest uppercase">Photo Coming Soon</span>
                </div>
                <div className="p-6 space-y-3">
                  <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-wide">
                    {trip.tag}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-royal-blue">{trip.name}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{trip.description}</p>
                  <div className="flex items-center gap-4 pt-2 text-xs text-charcoal/50 font-medium">
                    <span>{trip.duration}</span>
                    <span>·</span>
                    <span>{trip.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-royal-blue text-cream text-sm font-semibold tracking-wide hover:bg-royal-blue-light transition-colors"
            >
              View All Adventures
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-royal-blue text-cream">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed text-cream/90">
            "I turned 56 on a white water raft in the Grand Canyon. Best birthday of my life — and I didn't break a nail."
          </blockquote>
          <p className="text-gold text-sm tracking-widest uppercase">— Margaret T., Arizona</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Ready?</p>
          <h2 className="font-serif text-4xl font-bold text-royal-blue">Your Next Chapter Starts Here</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Tell us your dream adventure and we'll build the perfect itinerary around you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold text-base tracking-wide hover:bg-gold-light transition-colors shadow-lg"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </>
  );
}
