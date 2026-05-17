'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need prior experience with rafting or kayaking?',
    a: "Not at all. Most of our guests have never been on the water before their first trip with us. Our certified guides handle everything from fitting your gear to safety briefings before you ever touch the water. If you're willing to try, you're more than qualified.",
  },
  {
    q: 'What fitness level is required?',
    a: "It depends on the trip. We offer Easy, Moderate, and Challenging options across our catalog. The honest answer: if you can walk a mile comfortably, you can do most of our trips. We're happy to help you find the right fit during your planning call — that's exactly what it's for.",
  },
  {
    q: 'Are the trips women-only?',
    a: "Yes. Every Bougie Adventure trip is exclusively for women. That's by design — there's something that happens when a group of women adventure together, and we've witnessed it on every single trip we've run.",
  },
  {
    q: 'How big are the groups?',
    a: "We keep our groups small — typically 8 to 10 women maximum. Small groups mean more personal attention from your guides, more flexibility in the day's rhythm, and the chance to actually get to know the women you're traveling with. Many guests return year after year, not just for the adventure, but for the friendships.",
  },
  {
    q: 'What does a typical day look like?',
    a: "That depends on the trip, but the pattern holds across all of them: mornings are for adventure (on the water, on the trail, on the bike), afternoons allow for genuine downtime, and evenings are for great meals and great company. Rest days are built into every multi-day trip. You will never feel rushed.",
  },
  {
    q: 'Are flights included?',
    a: "Flights are not included — you book your own travel to the trip meeting point, which we provide well in advance of your departure date. From there, all ground transportation, activities, accommodations, and most meals are fully covered.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Full details are shared at the time of booking, but our general policy: full refund up to 60 days before departure, 50% refund up to 30 days out, and trip credit after that. We strongly recommend purchasing travel insurance for any adventure trip — it gives you peace of mind and protects your investment.",
  },
  {
    q: 'Can I join a trip as a solo traveler?',
    a: "Absolutely. Solo travelers are not just welcome — they're common. We handle all logistics, and if accommodations involve shared rooms, we pair you with a compatible travel companion. Many of our guests' most lasting friendships started on a Bougie Adventure trip.",
  },
  {
    q: "I'm in my 60s or 70s — is this still for me?",
    a: "Yes, and you may be our ideal guest. Our oldest adventurer was 74. We design every trip with mature women in mind: carefully managed pacing, quality medical preparedness, excellent gear, and guides who understand that you're here for real adventure — not a watered-down version of it.",
  },
  {
    q: 'Can you create a custom private trip for our group?',
    a: "Yes — and it's one of our favorite things to do. Milestone birthdays, retirement celebrations, annual girls' trips, family adventures — we love building something bespoke from the ground up. Reach out through the contact page and tell us what you have in mind.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gold/20 rounded-2xl overflow-hidden bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left group"
            aria-expanded={open === i}
          >
            <span className="font-serif text-base font-semibold text-royal-blue group-hover:text-royal-blue-light transition-colors leading-snug">
              {faq.q}
            </span>
            <span className="shrink-0 w-7 h-7 rounded-full bg-pink flex items-center justify-center group-hover:bg-gold/10 transition-colors">
              {open === i
                ? <Minus size={13} className="text-royal-blue" />
                : <Plus size={13} className="text-royal-blue" />
              }
            </span>
          </button>
          {open === i && (
            <div className="px-7 pb-6">
              <div className="h-px bg-gold/15 mb-5" />
              <p className="text-sm text-charcoal/70 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
