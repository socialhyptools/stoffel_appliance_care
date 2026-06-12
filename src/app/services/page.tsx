import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Zap, Shield, Banknote, Wrench } from 'lucide-react';
import AdUnit from '@/components/AdUnit';
import { WhatsAppIcon } from '@/components/Icons';
import ServicesClient from '@/components/ServicesClient';

export const metadata: Metadata = {
  title: 'All Appliance Repair Services in Tiruchirappalli',
  description: 'Complete home appliance repair in Tiruchirappalli — AC, Washing Machine, Refrigerator, TV, Microwave. Doorstep service, all brands, 90-day warranty. Call 8838893560.',
};

const trust = [
  { Icon: Zap, label: '30-Min Response' },
  { Icon: Shield, label: '90-Day Warranty' },
  { Icon: Banknote, label: '₹249 Inspection' },
  { Icon: Wrench, label: '30+ Technicians' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-bg dot-grid relative overflow-hidden">
        <div className="deco-ring w-80 h-80 -top-16 -right-16" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Expert Repair Services
            </span>
            <h1 className="text-white font-extrabold mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
              All Appliance<br /><span className="text-gradient-blue">Repair Services</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Certified doorstep repair for every home appliance in Trichy. All brands. 90-day warranty.
            </p>
            <div className="flex flex-wrap gap-3">
              {trust.map((t) => (
                <span key={t.label} className="inline-flex items-center gap-1.5 text-sm text-blue-100 bg-white/10 border border-white/10 px-4 py-2 rounded-full">
                  <t.Icon className="w-4 h-4" /> {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 5 720 20C480 35 240 5 0 20L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="2233445566" format="horizontal" />
      </div>

      {/* Interactive services list with booking modal */}
      <ServicesClient />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <AdUnit slot="3344556677" format="rectangle" />
      </div>

      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c1428 0%,#1e3a8a 100%)' }}>
        <div className="deco-ring w-72 h-72 -top-16 -right-16" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-4xl font-extrabold mb-4">Ready to Book a Repair?</h2>
          <p className="text-blue-200 text-lg mb-8">Call or WhatsApp — we respond within 30 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918778783255" className="btn-secondary btn btn-lg">
              <Phone className="w-5 h-5" /> 93448 09038
            </a>
            <a href="https://wa.me/918778783255" target="_blank" rel="noopener noreferrer" className="btn-outline-white btn btn-lg">
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
