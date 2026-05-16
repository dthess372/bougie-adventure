import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ChartBar, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adventures',
  description: 'Browse our curated luxury adventure packages: river kayaking, white water rafting, and more for women 50+.',
};

const packages = [
  {
    name: 'Grand Canyon River Run',
    tag: 'Signature',
    tagColor: 'bg-gold text-royal-blue-dark',
    description: 'Our most iconic trip. Six days rafting the Colorado through the heart of the Grand Canyon, one of the most awe-inspiring places on Earth.',
    duration: '6 days / 5 nights',
    difficulty: 'Moderate',
    groupSize: 'Up to 10',
    highlights: [
      'Class III–IV rapids',
      'Guided geology and history tours',
      'Camp-to-hut glamping accommodations',
      'Canyon-side gourmet dinners',
      'All safety gear and guide fees included',
    ],
    cta: 'Inquire About This Trip',
    image: '/trip-grand-canyon.jpg',
  },
  {
    name: 'Wine Country E-Bike Tour',
    tag: 'New',
    tagColor: 'bg-royal-blue text-cream',
    description: 'Glide through stunning vineyard landscapes on premium e-bikes at your own pace, with curated wine tastings, farm-to-table lunches, and boutique inn stays each evening.',
    duration: '5 days / 4 nights',
    difficulty: 'Easy',
    groupSize: 'Up to 10',
    highlights: [
      'Electric bikes, no cycling experience required',
      'Private winery tours and tastings',
      'Boutique inn accommodations nightly',
      'Farm-to-table dining and local artisan markets',
      'Scenic countryside routes, no traffic',
    ],
    cta: 'Inquire About This Trip',
    image: '/trip-ebike.jpg',
  },
  {
    name: 'Mountain Yoga & Wilderness Retreat',
    tag: 'Wellness',
    tagColor: 'bg-pink-dark text-royal-blue-dark',
    description: 'Morning yoga overlooking mountain peaks, afternoon nature hikes, and evenings at a secluded luxury lodge. Rest, restore, and reconnect with yourself and your fellow adventurers.',
    duration: '6 days / 5 nights',
    difficulty: 'Gentle',
    groupSize: 'Up to 8',
    highlights: [
      'Daily guided yoga, all levels welcome',
      'Guided wilderness hikes through meadows and peaks',
      'Luxury mountain lodge accommodations',
      'Spa treatments and restorative sessions',
      'Wholesome gourmet meals included',
    ],
    cta: 'Inquire About This Trip',
    image: '/trip-yoga.jpg',
  },
  {
    name: 'Smoky Mountain Kayak Escape',
    tag: 'Popular',
    tagColor: 'bg-pink text-royal-blue',
    description: 'A peaceful float through Appalachian splendor with stops at hidden waterfalls, local artisan markets, and a luxury mountain lodge each evening.',
    duration: '4 days / 3 nights',
    difficulty: 'Easy',
    groupSize: 'Up to 8',
    highlights: [
      'Class I–II gentle river kayaking',
      'Luxury lodge accommodations nightly',
      'Farm-to-table dining',
      'Guided waterfall hike',
      'Optional spa day add-on',
    ],
    cta: 'Inquire About This Trip',
    image: '/trip-kayak.jpg',
  },
  {
    name: 'Pacific Northwest White Water',
    tag: 'Thrill',
    tagColor: 'bg-royal-blue-dark text-cream',
    description: 'Heart-pounding white water through the Cascades by day, cedar spa retreat and gourmet Pacific Northwest cuisine by night.',
    duration: '5 days / 4 nights',
    difficulty: 'Challenging',
    groupSize: 'Up to 8',
    highlights: [
      'Class IV–V rapids (optional Class III alternative)',
      'Boutique cedar lodge retreat',
      'Professional safety kayakers on all runs',
      'Pacific Northwest culinary experience',
      'Guided forest trail on rest day',
    ],
    cta: 'Inquire About This Trip',
    image: '/trip-whitewater.jpg',
  },
  {
    name: 'Custom Private Adventure',
    tag: 'Bespoke',
    tagColor: 'bg-charcoal/5 text-charcoal',
    description: "Design your dream adventure from scratch. Choose your destination, activity level, group size, and we'll handle everything else.",
    duration: 'Your choice',
    difficulty: 'Your choice',
    groupSize: 'Private groups',
    highlights: [
      'Fully customized itinerary',
      'Perfect for birthdays, reunions, and milestones',
      'Private guide team',
      'Any destination, any pace',
      'White-glove planning from start to finish',
    ],
    cta: 'Start Designing Your Trip',
    image: '/trip-custom.jpg',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 bg-royal-blue text-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark to-royal-blue opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Adventures</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Find Your Perfect Trip
          </h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-xl mx-auto">
            From white water rapids to mountain yoga retreats to wine country e-biking. Every trip is designed for women who want real adventure without giving up a single comfort.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto space-y-12">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-3xl border border-gold/15 shadow-md hover:shadow-2xl hover:ring-2 hover:ring-gold/25 transition-all duration-300 overflow-hidden grid grid-cols-1 md:grid-cols-5 group">
              {/* Photo */}
              <div className="md:col-span-2 min-h-48 overflow-hidden relative">
                <Image src={pkg.image} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${pkg.tagColor}`}>
                  {pkg.tag}
                </span>
              </div>

              {/* Details */}
              <div className="md:col-span-3 p-8 space-y-5">
                <div className="flex items-center gap-4 text-sm text-charcoal/50">
                  <span className="flex items-center gap-1"><Clock size={13} /> {pkg.duration}</span>
                  <span className="flex items-center gap-1"><ChartBar size={13} /> {pkg.difficulty}</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-royal-blue">{pkg.name}</h2>
                <p className="text-base text-charcoal/70 leading-relaxed">{pkg.description}</p>

                <ul className="space-y-1.5">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-base text-charcoal/70">
                      <Check size={14} className="text-gold mt-1 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gold text-royal-blue-dark text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors"
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-6 bg-pink/20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-royal-blue">Every Trip Includes</h2>
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
              <div key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                <Check size={14} className="text-gold mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-royal-blue text-cream font-semibold tracking-wide hover:bg-royal-blue-light transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
