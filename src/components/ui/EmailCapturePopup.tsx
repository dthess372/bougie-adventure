'use client';

import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';

const STORAGE_KEY = 'bougie-email-capture';

type Status = 'idle' | 'loading' | 'success' | 'error';

function persistDismiss() {
  try {
    window.localStorage.setItem(STORAGE_KEY, 'true');
  } catch {
    /* localStorage unavailable; ignore */
  }
}

export default function EmailCapturePopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  // Show once, a few seconds after first visit (unless already dismissed/joined).
  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      /* ignore */
    }
    if (dismissed) return;
    const timer = window.setTimeout(() => setOpen(true), 7000);
    return () => window.clearTimeout(timer);
  }, []);

  // Lock scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        persistDismiss();
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  function close() {
    setOpen(false);
    persistDismiss();
  }

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
      persistDismiss();
      window.setTimeout(() => setOpen(false), 2800);
    } catch {
      setStatus('error');
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-capture-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-royal-blue-dark/70 backdrop-blur-sm cursor-default"
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-cream shadow-2xl ring-1 ring-gold/30 overflow-hidden">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 text-charcoal/55 hover:text-charcoal transition-colors"
        >
          <X size={20} />
        </button>

        <div className="h-1.5 w-full bg-gradient-to-r from-gold/40 via-gold to-gold/40" />

        <div className="px-8 pt-8 pb-9 text-center">
          {status === 'success' ? (
            <div className="py-8 space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-royal-blue">You&apos;re in!</h2>
              <p className="text-charcoal/80 text-sm leading-relaxed">
                Welcome to the Bougies. First-class inspiration is on its way to your inbox.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gold text-xs tracking-[0.4em] uppercase font-semibold mb-3">Join the List</p>
              <h2
                id="email-capture-title"
                className="font-serif text-3xl font-bold text-royal-blue tracking-[0.15em] uppercase mb-4"
              >
                Join the Bougies!
              </h2>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-1">
                Your next great adventure shouldn&apos;t require roughing it.
              </p>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-6">
                Be the first to unlock luxury itineraries, receive exclusive deals, and get trusted travel inspiration delivered straight to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-xl border border-gold/25 bg-white text-sm text-charcoal placeholder:text-charcoal/55 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gold/25 bg-white text-sm text-charcoal placeholder:text-charcoal/55 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
                />
                {status === 'error' && (
                  <p className="text-red-600 text-xs text-center">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold text-royal-blue-dark font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed btn-shimmer"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={16} className="animate-spin" /> Joining…</>
                  ) : (
                    'Count Me In!'
                  )}
                </button>
              </form>

              <p className="text-charcoal/60 text-xs leading-relaxed mt-4">
                No spam. Just first-class inspiration and priority access.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
