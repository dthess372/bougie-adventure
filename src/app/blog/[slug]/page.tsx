import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts, getPost, tripSeries } from '../posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Journal' };
  return {
    title: `Day ${post.day}: ${post.title}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 text-cream overflow-hidden">
        <Image src={post.image} alt={post.imageAlt} fill className="object-cover object-center scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark/75 via-black/55 to-royal-blue-dark/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">{tripSeries.title}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            Day {post.day}: {post.title}
          </h1>
          <p className="text-cream/85 text-sm tracking-wide uppercase">{post.date}</p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 px-6 bg-cream">
        <div className="max-w-2xl mx-auto">
          {/* Scene callout */}
          <div className="mb-10 pl-5 border-l-4 border-gold/60">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-2">Scene</p>
            <p className="font-serif text-lg italic text-royal-blue/85 leading-relaxed">{post.scene}</p>
          </div>

          <div className="space-y-6">
            {post.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-charcoal/80 leading-relaxed">{p}</p>
            ))}
          </div>

          {/* Gallery */}
          {post.gallery && (
            <div className="mt-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gold/25" />
                <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">From Day {post.day}</p>
                <div className="h-px flex-1 bg-gold/25" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {post.gallery.map((img) => (
                  <div key={img.src} className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md ring-1 ring-gold/10">
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Day navigation */}
      <section className="px-6 pb-20 bg-cream">
        <div className="max-w-2xl mx-auto border-t border-gold/15 pt-8 flex items-stretch justify-between gap-4">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex-1 text-left">
              <span className="text-charcoal/55 text-xs tracking-wide uppercase">Previous</span>
              <span className="block font-serif text-lg font-semibold text-royal-blue group-hover:text-gold transition-colors">
                Day {prev.day}: {prev.title}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="group flex-1 text-right">
              <span className="text-charcoal/55 text-xs tracking-wide uppercase">Next</span>
              <span className="block font-serif text-lg font-semibold text-royal-blue group-hover:text-gold transition-colors">
                Day {next.day}: {next.title}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </div>
        <div className="max-w-2xl mx-auto text-center mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-dark transition-colors text-sm">
            &larr; Back to Journal
          </Link>
        </div>
      </section>
    </>
  );
}
