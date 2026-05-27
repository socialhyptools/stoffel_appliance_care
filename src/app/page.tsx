import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Home Appliance Repair Trichy | Appliance Service Experts',
  description: 'Doorstep repair for AC, Washing Machine, Refrigerator, TV & Microwave in Trichy. 30-min response · 90-day warranty · ₹399 inspection. 30+ expert technicians. Call 9344809038.',
  alternates: { canonical: 'https://yourdomain.com' },
};

const services = [
  { icon: '❄️', title: 'AC Repair & Service', desc: 'Gas refill, deep clean, compressor repair. All split, window & cassette AC brands.', href: '/services/air-conditioner', color: '#2563eb' },
  { icon: '🫧', title: 'Washing Machine', desc: 'Front-load, top-load — drum, motor, drainage, PCB faults fixed same day.', href: '/services/washing-machine', color: '#7c3aed' },
  { icon: '🧊', title: 'Refrigerator', desc: 'Cooling failure, compressor, gas charging, door seal — all brands covered.', href: '/services/refrigerator', color: '#0891b2' },
  { icon: '📺', title: 'Television', desc: 'LED, LCD, Smart TV — panel, board, sound and display issues repaired.', href: '/services/television', color: '#be123c' },
  { icon: '📡', title: 'Microwave / Oven', desc: 'Heating failure, magnetron, turntable, control panel issues fixed at doorstep.', href: '/services/microwave', color: '#d97706' },
];

const stats = [
  { value: '30+', label: 'Expert Technicians', icon: '👨‍🔧' },
  { value: '90 Days', label: 'Service Warranty', icon: '🛡️' },
  { value: '30 Min', label: 'Response Time', icon: '⚡' },
  { value: '50+', label: 'Areas Covered', icon: '📍' },
];

const steps = [
  { n: '1', title: 'Call or Book Online', desc: 'Call us or submit the form. A booking agent confirms in minutes.', icon: '📞' },
  { n: '2', title: 'Expert Arrives', desc: 'A certified technician arrives at your door within 30 minutes.', icon: '🚗' },
  { n: '3', title: 'Fixed + Warranty', desc: 'Appliance repaired with genuine parts. 90-day warranty included.', icon: '✅' },
];

const features = [
  { icon: '🏠', title: 'Doorstep Service', desc: 'We come to you. No hassle of carrying heavy appliances.' },
  { icon: '🔧', title: 'Multi-Brand Expertise', desc: 'Samsung, LG, Whirlpool, Voltas, Daikin, Sony, Panasonic & 50+ more.' },
  { icon: '✅', title: '90–180 Day Warranty', desc: 'All repairs covered. Same issue recurs? We fix it free.' },
  { icon: '💰', title: 'Transparent Pricing', desc: '₹399 inspection. Full estimate before any work starts.' },
  { icon: '⚡', title: '30-Minute Response', desc: 'Quick dispatch. Same-day service in most Trichy areas.' },
  { icon: '🛡️', title: 'Certified Technicians', desc: 'Background-verified, trained professionals with years of experience.' },
];

const brands = ['Samsung', 'LG', 'Whirlpool', 'Voltas', 'Daikin', 'Sony', 'Panasonic', 'IFB', 'Godrej', 'Haier', 'Bosch', 'Carrier', 'Blue Star', 'Hitachi', 'O General', 'Onida'];

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can you send a technician?', acceptedAnswer: { '@type': 'Answer', text: '30-minute response time. Technician arrives within 30–60 minutes of your call.' } },
    { '@type': 'Question', name: 'What is the inspection charge?', acceptedAnswer: { '@type': 'Answer', text: '₹399. After diagnosis, full cost estimate before work begins.' } },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero-bg dot-grid relative overflow-hidden">
        {/* Decorative rings */}
        <div className="deco-ring w-[600px] h-[600px] -top-32 -right-32" aria-hidden="true" />
        <div className="deco-ring w-[400px] h-[400px] top-20 -left-48" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Trichy&apos;s Most Trusted Repair Experts
              </div>

              <h1 className="text-white font-extrabold leading-[1.1] mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                Fast Doorstep<br />
                <span className="text-gradient-blue">Home Appliance</span><br />
                Repair in Trichy
              </h1>

              <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
                AC · Washing Machine · Refrigerator · TV · Microwave — certified technicians at your home within 30 minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="tel:+919344809038" className="btn-secondary btn btn-lg">
                  📞 Call Now: 93448 09038
                </a>
                <a href="https://wa.me/919344809038" target="_blank" rel="noopener noreferrer"
                  className="btn-outline-white btn btn-lg">
                  💬 WhatsApp Us
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {['✅ 90-Day Warranty', '⚡ 30-Min Response', '💰 ₹399 Inspection', '🔧 All Brands'].map((b) => (
                  <span key={b} className="text-sm text-blue-100 bg-white/10 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — lead form card */}
            <div className="animate-slide-right">
              <div className="card-glass rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 32px 80px 0 rgba(0,0,0,0.4), 0 4px 20px 0 rgba(0,0,0,0.2)' }}>
                <div className="px-6 pt-6 pb-5 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="icon-box-accent w-10 h-10 text-xl rounded-xl">🚀</div>
                    <div>
                      <h2 className="text-lg font-extrabold text-gray-900">Get a Free Callback</h2>
                      <p className="text-xs text-gray-500">We call back within 30 minutes</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <LeadForm compact />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 5 720 20C480 35 240 5 0 20L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}
                className="rounded-2xl p-6 text-center border border-gray-100 hover:border-brand-200 hover:shadow-card transition-all duration-300"
                style={{ background: 'linear-gradient(135deg,#f8faff 0%,#fff 100%)' }}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-3xl font-black text-brand-700 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ AD (after content, 150px from buttons) ══════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="1234567890" format="horizontal" />
      </div>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg,#f8faff 0%,#fff 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge mb-4">What We Fix</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Appliance Repair Services</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Expert doorstep repair for every home appliance — all brands, same day</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href}
                className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2
                           border border-gray-100 hover:border-brand-200 p-7 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg,${s.color}22 0%,${s.color}11 100%)`, border: `1.5px solid ${s.color}30` }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}

            {/* Book Now card */}
            <div className="rounded-2xl p-7 flex flex-col justify-between text-white"
              style={{ background: 'linear-gradient(135deg,#1d4ed8 0%,#1e3a8a 100%)', boxShadow: '0 8px 32px 0 rgba(29,78,216,0.3)' }}>
              <div>
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-white mb-2">Book a Repair Today</h3>
                <p className="text-blue-200 text-sm leading-relaxed">Same-day service available across all 50+ Trichy locations.</p>
              </div>
              <a href="tel:+919344809038"
                className="mt-6 inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3
                           bg-white text-brand-700 font-bold text-sm rounded-xl
                           hover:bg-blue-50 transition-colors">
                📞 Call 93448 09038
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge mb-4">Simple Process</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg">Get your appliance fixed in 3 easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line on desktop */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-brand-200 to-brand-200" style={{ borderTop: '2px dashed #bfdbfe' }} aria-hidden="true" />

            {steps.map((step, i) => (
              <div key={step.n} className={`flex flex-col items-center text-center animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl shadow-card mb-0"
                    style={{ background: 'linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%)', border: '2px solid #bfdbfe' }}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-black shadow-brand"
                    style={{ background: 'linear-gradient(135deg,#2563eb 0%,#1e3a8a 100%)' }}>
                    {step.n}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY US ══════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg,#f8faff 0%,#fff 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-5">Why Choose Us</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-5">
                Why Trichy Trusts<br /><span className="text-gradient">Appliance Service Experts</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                From a simple AC service to a complex refrigerator repair — we show up fast, diagnose right, fix it the first time, and back it with a warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919344809038" className="btn-secondary btn btn-lg">📞 Book a Repair</a>
                <Link href="/about" className="btn-primary btn btn-lg">Learn About Us</Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100 hover:border-brand-100">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ BRANDS ══════════════ */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Brands We Service
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((b) => (
              <span key={b} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 transition-all duration-150 cursor-default">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ AD ══════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AdUnit slot="0987654321" format="rectangle" />
      </div>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <Testimonials />

      {/* ══════════════ FAQ ══════════════ */}
      <FAQ />

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(135deg,#0c1428 0%,#1e3a8a 100%)' }}>
        {/* Decorative rings */}
        <div className="deco-ring w-80 h-80 -top-20 -right-20" aria-hidden="true" />
        <div className="deco-ring w-60 h-60 -bottom-10 -left-10" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-5 animate-float">🔧</div>
          <h2 className="text-white text-4xl font-extrabold mb-4 text-balance">
            Appliance Broken?<br />
            <span className="text-gradient-blue">We'll Fix It Today.</span>
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-lg mx-auto">
            Call now or WhatsApp. A certified technician reaches your door in 30 minutes, flat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919344809038" className="btn-secondary btn btn-lg">📞 93448 09038</a>
            <a href="https://wa.me/919344809038" target="_blank" rel="noopener noreferrer" className="btn-outline-white btn btn-lg">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════ BOTTOM AD ══════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-6">
        <AdUnit slot="1122334455" format="horizontal" />
      </div>
    </>
  );
}
