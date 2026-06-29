import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Meet Your Guides',
  description: 'Meet Laurel and Nicole, the Certified Accessible Travel Planners behind Bougie Adventure who believe every woman deserves a thrilling, luxurious adventure.',
};

const candids = [
  { src: '/images/guides-come-sail-away.jpg', alt: 'Laurel and Nicole celebrating a sailing send-off' },
  { src: '/images/laurel-desert-hike.jpg', alt: 'Laurel on a desert mountain hike' },
  { src: '/images/laurel-riverside.jpg', alt: 'Laurel relaxing riverside on a rafting trip' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 text-cream overflow-hidden">
        <Image src="/images/heroes/about-women-mountain-hike.jpg" alt="Two women hiking toward mountain peaks" fill className="object-cover object-center scale-105 blur-sm" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark/70 via-black/50 to-royal-blue-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">The Bougie Way</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            Adventure should challenge you, not your standards.
          </h1>
          <p className="text-cream/85 text-lg leading-relaxed max-w-2xl mx-auto">
            Bougie Adventure was born from one simple idea: women shouldn&apos;t have to choose between adventure and comfort. We believe you can chase waterfalls, climb mountains, sip wine at sunset, and sleep in a fabulous bed, all in the same day. All this can be done while making lifelong friends along the way. Because the best adventures aren&apos;t just about the places you visit, they&apos;re about the women you share them with along the way.
          </p>
        </div>
      </section>

      {/* Meet the guides — first, because people are the product */}
      <section className="py-20 px-6 bg-pink/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">The Team</p>
            <h2 className="font-serif text-4xl font-semibold text-royal-blue">Meet Your Guides</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-8 md:gap-0 items-start">
            {/* Guide 1 */}
            <div className="space-y-5">
              <div className="relative aspect-square rounded-2xl overflow-hidden max-w-xs mx-auto w-full">
                <Image src="/images/team/laurel-on-river.jpg" alt="Laurel on the river" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover object-[30%_20%]" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-serif text-2xl font-bold text-royal-blue">Laurel</h3>
                <p className="text-gold text-sm tracking-widest uppercase">Co-Founder & Guide</p>
                <p className="text-royal-blue/80 text-xs tracking-wide font-medium">Certified Accessible Travel Planner (CATP)</p>
                <p className="text-charcoal/80 text-base leading-relaxed max-w-sm mx-auto">
                  I believe the best adventures happen somewhere between courage and comfort, and preferably near a river. A lifelong explorer and experienced group trip organizer, I have spent more than 20 years bringing people together through meaningful travel centered around connection, wellness, laughter, and the outdoors.
                </p>
                <p className="text-charcoal/80 text-base leading-relaxed max-w-sm mx-auto">
                  Having white water rafted more than 20 rivers, with a personal goal of rafting one new river every year for the rest of my life, I see travel as both adventure and healing. A way to reconnect with nature, community, and ourselves.
                </p>
                <p className="text-charcoal/80 text-base leading-relaxed max-w-sm mx-auto">
                  Guests traveling with me can expect active days, beautiful scenery, genuine sisterhood, creative problem-solving when adventure strikes, sore muscles, full hearts, and probably a great glass of wine at the end of the day.
                </p>
              </div>
            </div>

            {/* Decoration */}
            <div className="hidden md:flex flex-col items-center justify-center gap-3 pt-24 text-pink-dark">
              <span className="text-gold text-lg leading-none">✦</span>
              <svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor" className="text-pink-dark drop-shadow-sm">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
              </svg>
              <span className="text-gold text-lg leading-none">✦</span>
            </div>

            {/* Guide 2 */}
            <div className="space-y-5">
              <div className="relative aspect-square rounded-2xl overflow-hidden max-w-xs mx-auto w-full">
                <Image src="/images/team/nicole-on-bridge-overlook.jpg" alt="Nicole on a bridge overlook" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover object-[50%_40%]" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-serif text-2xl font-bold text-royal-blue">Nicole</h3>
                <p className="text-gold text-sm tracking-widest uppercase">Co-Founder & Guide</p>
                <p className="text-royal-blue/80 text-xs tracking-wide font-medium">Certified Accessible Travel Planner (CATP)</p>
                <p className="text-charcoal/80 text-base leading-relaxed max-w-sm mx-auto">
                  Travel is more than reaching a destination. It&apos;s about creating experiences that stay with you long after you return home. Growing up immersed in travel from an early age, I learned that the best trips are thoughtfully designed around the people taking them. Those early experiences shaped not only my love of travel, but my understanding of what makes a journey truly meaningful.
                </p>
                <p className="text-charcoal/80 text-base leading-relaxed max-w-sm mx-auto">
                  For the past 15 years, I have specialized in creating personalized travel experiences tailored to each client&apos;s unique interests, travel style, and sense of adventure. My approach combines thoughtful planning, curated experiences, and seamless logistics to remove the stress from travel while maximizing the moments that matter most.
                </p>
                <p className="text-charcoal/80 text-base leading-relaxed max-w-sm mx-auto">
                  The greatest reward is helping travelers create lifelong memories, strengthen connections, and experience the excitement and joy that meaningful travel can bring to their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATP certification */}
      <section className="py-16 px-6 bg-pink/20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          <div className="relative w-44 h-44 shrink-0 drop-shadow-sm">
            <Image src="/images/catp-badge.png" alt="Certified Accessible Travel Planner (CATP) badge" fill sizes="176px" className="object-contain" />
          </div>
          <div className="space-y-3">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Accredited & Certified</p>
            <h2 className="font-serif text-3xl font-semibold text-royal-blue">Certified Accessible Travel Planners</h2>
            <p className="text-charcoal/80 text-base leading-relaxed">
              Both Laurel and Nicole are Certified Accessible Travel Planners (CATP). It is a credential that means they know how to design adventures that welcome every body and every ability, so no one gets left at the trailhead. Thoughtful planning, real expertise, and a seat at the table for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story — after guides, so readers know who's speaking */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto space-y-6 text-charcoal/85 text-base leading-relaxed">
          <p className="font-serif text-xl text-royal-blue italic">
            &ldquo;We got tired of trips that were either too tame or too rough. So we built our own.&rdquo;
          </p>
          <p>
            Bougie Adventure is owned and operated by two longtime friends who have spent decades on the water, in the wilderness, and at the table of life&apos;s best experiences. For years, they were the ones in their friend group who planned the trips everyone still talks about. So they made it official, and created something that didn&apos;t exist: luxury adventure travel tailored specifically for women in their prime.
          </p>
          <p>
            Every itinerary is personally crafted. Every accommodation is hand-selected. And you&apos;ll always be in the hands of Laurel or Nicole, never a stranger.
          </p>
        </div>
      </section>

      {/* Moments from the trail */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Off the Clock</p>
            <h2 className="font-serif text-3xl font-semibold text-royal-blue">Moments From the Trail</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {candids.map(({ src, alt }) => (
              <div key={src} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md ring-1 ring-gold/10">
                <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-royal-blue text-cream text-center space-y-6">
        <h2 className="font-serif text-3xl font-semibold">Ready to Adventure With Us?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold tracking-wide hover:bg-gold-light transition-colors"
        >
          Let&apos;s Plan Your Trip
        </Link>
      </section>
    </>
  );
}
