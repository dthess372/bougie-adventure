'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  // This component lives in the root layout, so it stays mounted across
  // client-side navigations — only `pathname` changing tells us a new
  // page's [data-animate] sections have landed in the DOM and need to be
  // (re)wired up. Without this dependency, only the very first page ever
  // loaded gets the fade-in behavior; every page reached by clicking a
  // <Link> afterward renders with no observer watching it.
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => el.classList.add('will-animate'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
