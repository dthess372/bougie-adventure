import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the women behind Bougie Adventure, expert guides who believe every woman deserves a thrilling, luxurious adventure.',
};

const values = [
  { title: 'Safety First', body: 'Every trip is designed with your safety as the absolute priority. Certified guides, quality gear, and detailed emergency plans on every journey.' },
  { title: 'Real Adventure', body: 'No watered-down experiences. We take you on the real thing: Class III rapids, remote wilderness, breathtaking terrain.' },
  { title: 'Unapologetic Luxury', body: "Adventure ends at the water's edge. The rest of your day includes fine food, comfortable beds, and beautiful surroundings." },
  { title: 'Community', body: 'Our trips attract incredible women. Many guests return year after year, not just for the adventure, but for the friendships.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 bg-royal-blue text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark to-royal-blue opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Women Who Lead the Way
          </h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-xl mx-auto">
            Bougie Adventure was born from a simple belief: that women over 50 deserve trips that are equal parts thrilling and indulgent.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto space-y-6 text-charcoal/80 text-lg leading-relaxed">
          <p className="font-serif text-2xl text-royal-blue italic">
            "We got tired of trips that were either too tame or too rough. So we built our own."
          </p>
          <p>
            Bougie Adventure is owned and operated by two women who have spent decades on the water, in the wilderness, and at the table of life's best experiences. After years of guiding independently, they partnered to create something that didn't exist: luxury adventure travel tailored specifically for women in their prime.
          </p>
          <p>
            Every itinerary is personally crafted. Every accommodation is hand-selected. Every guide is someone they would trust with their own mother.
          </p>
        </div>
      </section>

      {/* Meet the guides */}
      <section className="py-20 px-6 bg-pink/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">The Team</p>
            <h2 className="font-serif text-4xl font-bold text-royal-blue">Meet Your Guides</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Guide 1 */}
            <div className="space-y-5">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-royal-blue to-royal-blue-light flex items-center justify-center max-w-xs mx-auto w-full">
                <span className="text-cream/30 text-xs tracking-widest uppercase">Photo Coming Soon</span>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-serif text-2xl font-bold text-royal-blue">Your Name Here</h3>
                <p className="text-gold text-sm tracking-widest uppercase">Co-Founder & Lead Guide</p>
                <p className="text-charcoal/70 text-sm leading-relaxed max-w-sm mx-auto">
                  [Add your bio here: your experience, what you love about leading trips, and what guests can expect traveling with you.]
                </p>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="space-y-5">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-royal-blue to-royal-blue-light flex items-center justify-center max-w-xs mx-auto w-full">
                <span className="text-cream/30 text-xs tracking-widest uppercase">Photo Coming Soon</span>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-serif text-2xl font-bold text-royal-blue">Partner Name Here</h3>
                <p className="text-gold text-sm tracking-widest uppercase">Co-Founder & Guide</p>
                <p className="text-charcoal/70 text-sm leading-relaxed max-w-sm mx-auto">
                  [Add partner bio here: her background, certifications, what she brings to every trip, and her adventure philosophy.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl font-bold text-royal-blue">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map(({ title, body }) => (
              <div key={title} className="p-8 rounded-2xl border border-gold/20 bg-white space-y-3">
                <h3 className="font-serif text-xl font-semibold text-royal-blue">{title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-royal-blue text-cream text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold">Ready to Adventure With Us?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold tracking-wide hover:bg-gold-light transition-colors"
        >
          Let's Plan Your Trip
        </Link>
      </section>
    </>
  );
}
