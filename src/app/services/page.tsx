import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ChartBar, Check } from 'lucide-react';
import FAQ from './FAQ';

export const metadata: Metadata = {
  title: 'Adventures',
  description: 'Browse our curated luxury adventure packages: river kayaking, white water rafting, and more for women 50+.',
};

type Package = {
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  highlights: string[];
  cta: string;
  image: string;
  journalHref?: string;
};

const packages: Package[] = [
  {
    name: 'Salmon River Expedition',
    tag: 'Signature',
    tagColor: 'bg-gold text-royal-blue-dark',
    description:
      "Our signature trip, and the very same adventure we recap day by day in our River of No Return journal. Six days rafting 80 miles of Idaho's Salmon River through the Frank Church Wilderness, a protected corridor so remote it can only be reached by boat or small plane. Class III-IV rapids by day, riverside camp and gourmet Dutch-oven dinners by night.",
    duration: '6 days / 5 nights',
    difficulty: 'Moderate',
    groupSize: 'Up to 10',
    highlights: [
      '80 miles of Class III-IV rapids through the Frank Church Wilderness',
      'Fly-in access to a pristine, protected backcountry corridor',
      'Riverside camp each night under a sky full of stars',
      'Gourmet riverside meals, Dutch-oven desserts, and wine shipped in',
      'Wildlife spotting: bears, eagles, bighorn sheep, and trout',
    ],
    cta: 'Inquire About This Trip',
    journalHref: '/blog',
    image: '/images/trips/trip-idaho-salmon-river.jpg',
  },
  {
    name: 'Custom Private Adventure',
    tag: 'Bespoke',
    tagColor: 'bg-charcoal/5 text-charcoal',
    description: "Have an idea of what you want? Tell us and we'll build it. From the first conversation to the last day on the trail, we take care of every detail.",
    duration: 'Your choice',
    difficulty: 'Your choice',
    groupSize: 'Any size',
    highlights: [
      'Fully customized itinerary around your vision',
      'Host-led or self-guided, your call',
      'Perfect for birthdays, reunions, and milestones',
      'Any destination, any pace',
      'White-glove planning from start to finish',
    ],
    cta: 'Start Designing Your Trip',
    image: '/images/trips/trip-custom-adventure.jpg',
  },
];

const steps = [
  {
    step: '01',
    title: 'Tell Us Your Dream',
    body: "Fill out a quick inquiry with your dates, travel interests, and group size. No commitment required. Just a conversation starter.",
  },
  {
    step: '02',
    title: 'We Craft Your Plan',
    body: "We'll schedule a planning call and send you a custom itinerary built around what you actually want.",
  },
  {
    step: '03',
    title: 'Show Up and Thrive',
    body: "Your only job is to enjoy every single moment. We handle every detail, from gear to dinners to the stories you'll tell for years.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-6 text-cream overflow-hidden">
        <Image src="/images/heroes/adventures-mountain-wilderness.jpg" alt="Mountain wilderness landscape" fill className="object-cover object-center scale-105 blur-sm" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark/70 via-black/50 to-royal-blue-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Adventure by Day. Wine by Night.</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Find Your Perfect Trip
          </h1>
          <p className="text-cream/85 text-lg leading-relaxed max-w-xl mx-auto">
            From white water rapids in remote wilderness to a fully custom trip designed around your circle. Every adventure is built for women who want the real thing without giving up a single comfort.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto space-y-12">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-3xl border border-gold/15 shadow-md hover:shadow-2xl hover:ring-2 hover:ring-gold/25 transition-all duration-300 overflow-hidden grid grid-cols-1 md:grid-cols-5 group">
              <div className="md:col-span-2 min-h-48 overflow-hidden relative">
                <Image src={pkg.image} alt={pkg.name} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${pkg.tagColor}`}>
                  {pkg.tag}
                </span>
              </div>
              <div className="md:col-span-3 p-8 space-y-5">
                <div className="flex items-center gap-4 text-sm text-charcoal/65">
                  <span className="flex items-center gap-1"><Clock size={13} /> {pkg.duration}</span>
                  <span className="flex items-center gap-1"><ChartBar size={13} /> {pkg.difficulty}</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-royal-blue">{pkg.name}</h2>
                <p className="text-base text-charcoal/80 leading-relaxed">{pkg.description}</p>
                <ul className="space-y-1.5">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-base text-charcoal/80">
                      <Check size={14} className="text-gold mt-1 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
                  <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gold text-royal-blue-dark text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors">
                    {pkg.cta}
                  </Link>
                  {pkg.journalHref && (
                    <Link href={pkg.journalHref} className="inline-flex items-center gap-1.5 text-royal-blue text-sm font-semibold tracking-wide hover:text-gold transition-colors">
                      Read the trip journal &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-royal-blue text-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Simple by Design</p>
            <h2 className="font-serif text-4xl font-semibold">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map(({ step, title, body }) => (
              <div key={step} className="text-center space-y-4">
                <div className="font-serif text-7xl font-bold text-gold/25 leading-none">{step}</div>
                <h3 className="font-serif text-xl font-semibold text-cream">{title}</h3>
                <p className="text-cream/80 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-6 bg-pink/20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl font-semibold text-royal-blue">Every Trip Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              'Experienced, certified female guides',
              'All adventure equipment and safety gear',
              'Curated accommodations, hand selected',
              'Most meals (detailed per itinerary)',
              'Airport pickup / group transport',
              'Pre-trip planning consultation',
              '24/7 guide support during the trip',
              'Post-trip photo share from our guides',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                <Check size={14} className="text-gold mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-royal-blue text-cream font-semibold tracking-wide hover:bg-royal-blue-light transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Questions & Answers</p>
            <h2 className="font-serif text-4xl font-semibold text-royal-blue">Things You Might Be Wondering</h2>
            <p className="text-charcoal/75 text-base mt-3 leading-relaxed">We hear these before most trips. Hopefully one of them is yours.</p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-royal-blue text-cream text-center space-y-5">
        <h2 className="font-serif text-3xl font-semibold">Still have questions?</h2>
        <p className="text-cream/80 text-base max-w-md mx-auto">Reach out directly and we&apos;ll answer every single one. No pressure, no sales pitch.</p>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold tracking-wide hover:bg-gold-light transition-colors">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
