'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/subscribe', {
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

  if (status === 'success') {
    return (
      <p className="font-serif text-lg font-semibold text-royal-blue max-w-md mx-auto">
        You&apos;re in! Welcome to the Bougies.
      </p>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-2">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="flex-1 px-5 py-3 rounded-full border border-gold/30 text-sm focus:outline-none focus:border-gold bg-white"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold text-royal-blue-dark text-sm font-semibold hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <><Loader2 size={16} className="animate-spin" /> Joining…</>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-600 text-xs">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
