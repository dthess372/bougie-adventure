'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Adventures' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'bg-royal-blue/98 shadow-lg' : 'bg-royal-blue/95 shadow-md'}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-13' : 'h-16'}`}>
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <Image
            src="/Choice 1.jpg"
            alt="Bougie Adventure"
            width={48}
            height={48}
            className={`rounded-full border border-gold/40 shadow-sm transition-all duration-300 ${scrolled ? 'w-9 h-9' : 'w-12 h-12'}`}
          />
          <span className={`font-serif font-bold text-gold tracking-wide hidden sm:block transition-all duration-300 drop-shadow-sm ${scrolled ? 'text-base' : 'text-lg'}`}>Bougie Adventure</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-cream/90 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-gold text-royal-blue-dark text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors duration-200 btn-shimmer"
        >
          Book a Trip
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-royal-blue-dark border-t border-gold/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-cream/90 hover:text-gold text-base font-medium py-1 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-full bg-gold text-royal-blue-dark text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors btn-shimmer"
              onClick={() => setOpen(false)}
            >
              Book a Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
