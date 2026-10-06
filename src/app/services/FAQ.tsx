'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from './faqs';

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
              <p className="text-base font-medium text-charcoal/85 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
