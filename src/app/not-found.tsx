import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-cream text-center">
      <Image
        src="/logo.png"
        alt="Bougie Adventure"
        width={80}
        height={80}
        className="drop-shadow mb-8"
      />
      <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium mb-3">Lost on the trail</p>
      <h1 className="font-serif text-5xl font-bold text-royal-blue mb-4">Page Not Found</h1>
      <p className="text-charcoal/80 text-lg leading-relaxed max-w-md mb-10">
        Looks like this path leads nowhere. Let's get you back to the adventure.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold tracking-wide hover:bg-gold-light transition-colors shadow-lg"
        >
          Back to Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-royal-blue text-royal-blue font-medium tracking-wide hover:bg-royal-blue hover:text-cream transition-colors"
        >
          Explore Adventures
        </Link>
      </div>
    </section>
  );
}
