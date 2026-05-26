'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-charcoal/60 tracking-wide uppercase">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl border border-gold/25 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-charcoal/60 tracking-wide uppercase">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gold/25 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="phone" className="text-xs font-medium text-charcoal/60 tracking-wide uppercase">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-3 rounded-xl border border-gold/25 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="trip" className="text-xs font-medium text-charcoal/60 tracking-wide uppercase">
          Interested in which adventure?
        </label>
        <select
          id="trip"
          name="trip"
          className="w-full px-4 py-3 rounded-xl border border-gold/25 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
        >
          <option value="">Select a trip…</option>
          <option>Salmon River Expedition</option>
          <option>Wine Country E-Bike Tour</option>
          <option>Mountain Yoga &amp; Wilderness Retreat</option>
          <option>Smoky Mountain Kayak Escape</option>
          <option>Pacific Northwest White Water</option>
          <option>Custom Private Adventure</option>
          <option>Not sure yet, tell me what&apos;s available</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="groupSize" className="text-xs font-medium text-charcoal/60 tracking-wide uppercase">
          Group size
        </label>
        <select
          id="groupSize"
          name="groupSize"
          className="w-full px-4 py-3 rounded-xl border border-gold/25 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
        >
          <option value="">Select…</option>
          <option>Just me</option>
          <option>2–3 people</option>
          <option>4–6 people</option>
          <option>7 or more</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-charcoal/60 tracking-wide uppercase">
          Your message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your dream adventure, any questions, or the occasion you're celebrating…"
          className="w-full px-4 py-3 rounded-xl border border-gold/25 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm">
          Message sent! We'll be in touch within 24 hours.
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          Something went wrong. Please email us directly at info@bougieadventure.com
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-royal-blue-dark font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
      >
        {status === 'loading' ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  );
}
