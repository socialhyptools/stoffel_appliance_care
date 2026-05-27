'use client';
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight min-h-[48px] justify-center">
            <span className="text-lg font-bold text-brand-600">Hire Expert</span>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Service Center
            </span>
          </Link>

          {/* Desktop nav — 8px gap minimum between links */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-[48px] px-4 flex items-center text-sm font-medium text-gray-700
                           hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — well separated from nav (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919344809038"
              className="btn-secondary text-sm"
              aria-label="Call us now"
            >
              📞 9344809038
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center
                       rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white pb-4">
          <nav className="flex flex-col px-4 pt-2 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="min-h-[48px] px-4 flex items-center text-base font-medium
                           text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919344809038"
              className="btn-secondary mt-3 text-base w-full justify-center"
            >
              📞 Call Now: 9344809038
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
