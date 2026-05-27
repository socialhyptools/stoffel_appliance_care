import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'All Appliance Repair Services in Trichy',
  description: 'Complete home appliance repair in Trichy — AC, Washing Machine, Refrigerator, TV, Microwave. Doorstep service, all brands, 90-day warranty. Call 9344809038.',
};

const services = [
  { icon: '❄️', title: 'AC Repair & Service', href: '/services/air-conditioner', color: '#2563eb', colorLight: '#eff6ff', colorBorder: '#bfdbfe',
    desc: 'Gas refill, deep cleaning, compressor service, installation & uninstallation. All split, window & cassette AC brands.',
    brands: 'Voltas · Daikin · LG · Samsung · Hitachi · Blue Star · O General' },
  { icon: '🫧', title: 'Washing Machine Repair', href: '/services/washing-machine', color: '#7c3aed', colorLight: '#f5f3ff', colorBorder: '#ddd6fe',
    desc: 'Front-load and top-load repair — drum, motor, PCB, water inlet, drainage issues, error codes.',
    brands: 'Samsung · LG · Whirlpool · IFB · Bosch · Godrej · Haier' },
  { icon: '🧊', title: 'Refrigerator Repair', href: '/services/refrigerator', color: '#0891b2', colorLight: '#ecfeff', colorBorder: '#a5f3fc',
    desc: 'Cooling failure, compressor replacement, gas charging, door seal, thermostat issues. All models.',
    brands: 'Samsung · LG · Whirlpool · Godrej · Haier · Videocon · Bosch' },
  { icon: '📺', title: 'Television Repair', href: '/services/television', color: '#be123c', colorLight: '#fff1f2', colorBorder: '#fecdd3',
    desc: 'LED, LCD, OLED, Smart TV — panel replacement, main board, sound issues, HDMI faults.',
    brands: 'Sony · LG · Samsung · Panasonic · Mi · TCL · Hisense · Vu' },
  { icon: '📡', title: 'Microwave Oven Repair', href: '/services/microwave', color: '#d97706', colorLight: '#fffbeb', colorBorder: '#fde68a',
    desc: 'Heating failure, magnetron replacement, turntable, door latch, control panel — all models.',
    brands: 'Samsung · LG · IFB · Panasonic · Whirlpool · Morphy Richards' },
];

const trust = [
  { icon: '⚡', label: '30-Min Response' },
  { icon: '🛡️', label: '90-Day Warranty' },
  { icon: '💰', label: '₹399 Inspection' },
  { icon: '🔧', label: '30+ Technicians' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg dot-grid relative overflow-hidden">
        <div className="deco-ring w-80 h-80 -top-16 -right-16" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
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
                <span key={t.label} className="text-sm text-blue-100 bg-white/10 border border-white/10 px-4 py-2 rounded-full">
                  {t.icon} {t.label}
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

      {/* Ad */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="2233445566" format="horizontal" />
      </div>

      {/* Services grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {services.map((s, i) => (
            <Link key={s.href} href={s.href}
              className="group flex flex-col sm:flex-row gap-6 bg-white rounded-2xl shadow-card
                         hover:shadow-card-hover hover:-translate-y-1 border border-gray-100
                         hover:border-brand-200 p-7 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.colorLight, border: `2px solid ${s.colorBorder}` }}>
                {s.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {s.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                <p className="text-xs text-gray-400 font-medium">
                  <span className="font-semibold text-gray-600">Brands: </span>{s.brands}
                </p>
              </div>
              <div className="flex items-center self-center">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <AdUnit slot="3344556677" format="rectangle" />
      </div>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c1428 0%,#1e3a8a 100%)' }}>
        <div className="deco-ring w-72 h-72 -top-16 -right-16" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-4xl font-extrabold mb-4">Ready to Book a Repair?</h2>
          <p className="text-blue-200 text-lg mb-8">Call or WhatsApp — we respond within 30 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919344809038" className="btn-secondary btn btn-lg">📞 93448 09038</a>
            <a href="https://wa.me/919344809038" target="_blank" rel="noopener noreferrer" className="btn-outline-white btn btn-lg">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
