import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Trip recaps, travel tips, and stories from Bougie Adventure. Luxury adventures for women 50+.',
};

const placeholderPosts = [
  {
    slug: 'grand-canyon-recap',
    title: '6 Days on the Colorado: What Nobody Tells You About the Grand Canyon',
    excerpt: "We expected rapids. We didn't expect to cry at sunset every single night. Here's what our spring Grand Canyon trip was really like.",
    date: 'April 2025',
    tag: 'Trip Recap',
    image: '/blog-canyon.jpg',
  },
  {
    slug: 'packing-list',
    title: 'The Bougie Packing List: What to Bring (and What to Leave Behind)',
    excerpt: "After dozens of river trips, we've narrowed it down. Pack light, pack right. And always bring one thing that makes you feel like yourself.",
    date: 'March 2025',
    tag: 'Travel Tips',
    image: '/blog-packing.jpg',
  },
  {
    slug: 'why-women-50',
    title: 'Why Women Over 50 Are the Best Adventure Travelers',
    excerpt: "They show up prepared. They don't complain. They laugh harder and sleep better than anyone else on the river. Here's our love letter to our guests.",
    date: 'February 2025',
    tag: 'Story',
    image: '/blog-women.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 bg-royal-blue text-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark to-royal-blue opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Stories from the Water
          </h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-xl mx-auto">
            Trip recaps, packing guides, and reflections from women who choose adventure.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholderPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-gold/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-44 relative overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded-full bg-pink text-royal-blue text-xs font-semibold tracking-wide">
                      {post.tag}
                    </span>
                    <span className="text-charcoal/40 text-xs">{post.date}</span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-royal-blue leading-snug group-hover:text-royal-blue-light transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-charcoal/65 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-pink/20 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl font-bold text-royal-blue">Get Trip Stories in Your Inbox</h2>
          <p className="text-charcoal/65 text-sm">Recaps, early trip announcements, and packing guides. No spam, ever.</p>
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
