import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-royal-blue-dark text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Bougie Adventure"
              width={56}
              height={56}
              className="drop-shadow"
            />
            <div>
              <span className="text-gold font-serif font-bold text-xl block">Bougie Adventure</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-cream/60">
            Luxury adventure travel designed for women who refuse to choose between comfort and thrill.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="text-cream/60 hover:text-gold transition-colors">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="mailto:laurel@bougieadventure.com" aria-label="Email Laurel"
              className="text-cream/60 hover:text-gold transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-gold font-serif text-sm tracking-widest uppercase mb-4">Explore</h4>
          <nav className="flex flex-col gap-2">
            {[
              { href: '/about', label: 'Meet Your Guides' },
              { href: '/services', label: 'Adventures' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-cream/60 hover:text-gold transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold font-serif text-sm tracking-widest uppercase mb-4">Get in Touch</h4>
          <div className="space-y-2 text-sm text-cream/60">
            <a href="mailto:laurel@bougieadventure.com" className="hover:text-gold transition-colors block">
              laurel@bougieadventure.com
            </a>
            <a href="mailto:nicole@bougieadventure.com" className="hover:text-gold transition-colors block">
              nicole@bougieadventure.com
            </a>
            <p className="leading-relaxed">
              Ready for your next great adventure?<br />
              We'd love to plan it with you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 mt-2 rounded-full bg-gold text-royal-blue-dark text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors"
            >
              INQUIRE NOW
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 py-4">
        <p className="text-center text-xs text-cream/30">
          © {new Date().getFullYear()} Bougie Adventure. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
