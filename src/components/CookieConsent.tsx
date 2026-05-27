'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    /* Not a blocking pop-up — appears at bottom, doesn't cover content */
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white
                 px-4 py-4 shadow-2xl border-t border-gray-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1 text-gray-300">
          We use cookies and third-party advertising (Google AdSense) to serve personalised ads and
          analyse traffic. See our{' '}
          <Link href="/privacy-policy" className="underline text-blue-400 hover:text-blue-300">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={accept}
            className="min-h-[48px] px-5 py-2 bg-brand-500 hover:bg-brand-600
                       text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="min-h-[48px] px-5 py-2 bg-gray-700 hover:bg-gray-600
                       text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
