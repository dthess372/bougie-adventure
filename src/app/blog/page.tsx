import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { posts, tripSeries } from './posts';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Trip recaps, travel tips, and stories from Bougie Adventure. Luxury adventures for women 50+.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 text-cream overflow-hidden">
        <Image src="/images/heroes/blog-river-forest.jpg" alt="Wide river flowing through a lush forest" fill className="object-cover object-center scale-105 blur-sm" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark/70 via-black/50 to-royal-blue-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Stories from the Water
          </h1>
          <p className="text-cream/85 text-lg leading-relaxed max-w-xl mx-auto">
            Trip recaps, packing guides, and reflections from women who choose adventure.
          </p>
        </div>
      </section>

      {/* Featured series */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">{tripSeries.kicker}</p>
            <h2 className="font-serif text-4xl font-semibold text-royal-blue">{tripSeries.title}</h2>
            <p className="font-serif text-xl italic text-royal-blue/80 max-w-2xl mx-auto leading-relaxed">
              {tripSeries.tagline}
            </p>
            <p className="text-charcoal/75 text-base max-w-2xl mx-auto leading-relaxed">
              {tripSeries.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-gold/10 overflow-hidden shadow-sm hover:shadow-xl hover:ring-2 hover:ring-gold/30 transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-royal-blue-dark text-xs font-semibold tracking-wide">
                    Day {post.day}
                  </span>
                </div>
                <div className="p-6 space-y-3 flex flex-col flex-1">
                  <span className="text-charcoal/55 text-xs tracking-wide">{post.date}</span>
                  <h3 className="font-serif text-xl font-semibold text-royal-blue leading-snug group-hover:text-royal-blue-light transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-base text-charcoal/75 leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="text-gold text-sm font-semibold tracking-wide pt-1">Read Day {post.day} &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-pink/20 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl font-semibold text-royal-blue">Get Trip Stories in Your Inbox</h2>
          <p className="text-charcoal/75 text-sm">Recaps, early trip announcements, and packing guides. No spam, ever.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full border border-gold/30 text-sm focus:outline-none focus:border-gold bg-white"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-gold text-royal-blue-dark text-sm font-semibold hover:bg-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
