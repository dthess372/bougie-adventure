import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from './ContactForm';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Ready to plan your adventure? Reach out to the Bougie Adventure team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 text-cream overflow-hidden">
        <Image src="/hero-contact.jpg" alt="Mountains reflecting in a turquoise lake" fill className="object-cover object-center scale-105 blur-sm" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-dark/70 via-black/50 to-royal-blue-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Let's Talk</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Your Adventure Starts Here
          </h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-xl mx-auto">
            Tell us about your dream trip and we'll start planning. No question is too big or too small.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-royal-blue mb-4">Get in Touch</h2>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                We respond to all inquiries within 24 hours. For urgent questions, reach us directly on Instagram.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:laurel@bougieadventure.com" className="flex items-center gap-3 text-sm text-charcoal/70 hover:text-gold transition-colors group">
                <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Mail size={16} className="text-royal-blue" />
                </div>
                laurel@bougieadventure.com
              </a>
              <a href="mailto:nicole@bougieadventure.com" className="flex items-center gap-3 text-sm text-charcoal/70 hover:text-gold transition-colors group">
                <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Mail size={16} className="text-royal-blue" />
                </div>
                nicole@bougieadventure.com
              </a>
              <a href="https://instagram.com/bougieadventure" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-charcoal/70 hover:text-gold transition-colors group">
                <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-royal-blue">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                @bougieadventure
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-pink/30 border border-pink-dark/20 space-y-2">
              <p className="font-serif text-royal-blue font-semibold">Planning a group trip?</p>
              <p className="text-sm text-charcoal/65 leading-relaxed">
                Birthdays, reunions, and girl's trips are our specialty. Groups of 6 or more get priority scheduling and a complimentary planning call.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
