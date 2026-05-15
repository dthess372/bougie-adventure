import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Journal',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="py-28 px-6 max-w-3xl mx-auto text-center space-y-6">
      <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Coming Soon</p>
      <h1 className="font-serif text-4xl font-bold text-royal-blue">
        Full Blog Coming Soon
      </h1>
      <p className="text-charcoal/65 leading-relaxed">
        Trip recaps and stories will be published here once the Sanity CMS is connected. Check back soon!
      </p>
      <Link href="/blog" className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-dark transition-colors text-sm">
        ← Back to Journal
      </Link>
    </div>
  );
}
