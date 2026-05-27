import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Home Appliance Repair Trichy | Appliance Service Experts',
  description:
    'Doorstep repair for AC, Washing Machine, Refrigerator, TV & Microwave in Trichy. 30-min response · 90-day warranty · ₹399 inspection. 30+ expert technicians. Call 9344809038.',
  alternates: { canonical: 'https://yourdomain.com' },
};

const services = [
  {
    icon: '❄️',
    title: 'AC Repair & Service',
    desc: 'Split, window & cassette AC — gas refill, deep clean, cooling issues, all brands.',
    href: '/services/air-conditioner',
  },
  {
    icon: '🫧',
    title: 'Washing Machine',
    desc: 'Front-load, top-load — drum issues, water leakage, spin problems fixed same day.',
    href: '/services/washing-machine',
  },
  {
    icon: '🧊',
    title: 'Refrigerator',
    desc: 'Cooling failures, compressor service, door seal replacement — all brands covered.',
    href: '/services/refrigerator',
  },
  {
    icon: '📺',
    title: 'Television',
    desc: 'LED, LCD, Smart TV — panel, board, sound & display issues repaired at your doorstep.',
    href: '/services/television',
  },
  {
    icon: '📡',
    title: 'Microwave / Oven',
    desc: 'Heating problems, turntable faults, magnetron replacement, all microwave models.',
    href: '/services/microwave',
  },
];

const stats = [
  { value: '30+', label: 'Expert Technicians' },
  { value: '90 Days', label: 'Service Warranty' },
  { value: '30 Min', label: 'Response Time' },
  { value: '50+', label: 'Areas Covered' },
];

const whyUs = [
  {
    icon: '🏠',
    title: 'Doorstep Service',
    desc: 'We come to you. No need to carry heavy appliances — our technicians visit your home.',
  },
  {
    icon: '🔧',
    title: 'Multi-Brand Expertise',
    desc: 'Samsung, LG, Whirlpool, Voltas, Daikin, Sony, Panasonic & 50+ other brands.',
  },
  {
    icon: '✅',
    title: '90–180 Day Warranty',
    desc: 'All repairs covered by our warranty. Parts replaced by us are guaranteed.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: '₹399 inspection charge. Full cost estimate given before any work begins.',
  },
  {
    icon: '⚡',
    title: '30-Minute Response',
    desc: 'Quick booking, fast dispatch. Same-day service in most areas of Trichy.',
  },
  {
    icon: '🛡️',
    title: 'Certified Technicians',
    desc: 'Background-verified, trained professionals with years of hands-on experience.',
  },
];

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can you send a technician?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We aim for a 30-minute response time. In most areas of Trichy, a certified technician will arrive at your doorstep within 30–60 minutes of your call.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the inspection charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The inspection charge is ₹399. After diagnosing the issue, we provide a complete cost estimate before starting any repair work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you service all brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We repair all major brands including Samsung, LG, Whirlpool, Voltas, Daikin, Sony, Panasonic, Godrej, IFB, and 50+ other brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warranty do you offer on repairs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide 90 to 180 days warranty on all repair services. If the same issue recurs within the warranty period, we fix it at no extra charge.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Trichy's Trusted Appliance Experts
              </p>
              <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
                Fast Doorstep<br />Appliance Repair
              </h1>
              <p className="text-blue-100 text-lg sm:text-xl mb-8 leading-relaxed">
                AC · Washing Machine · Refrigerator · TV · Microwave — all repaired at your home by
                certified technicians. Same-day service across Trichy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919344809038" className="btn-secondary text-base">
                  📞 Call Now: 93448 09038
                </a>
                <a
                  href="https://wa.me/919344809038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white text-white hover:bg-white hover:text-brand-700 text-base"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['✅ 90-Day Warranty', '⚡ 30-Min Response', '💰 ₹399 Inspection'].map((b) => (
                  <span key={b} className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: lead form card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <h2 className="text-gray-900 text-xl font-bold mb-1">Get a Free Callback</h2>
              <p className="text-gray-500 text-sm mb-5">
                Fill in your details — we'll call you back within 30 minutes.
              </p>
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-accent-500 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="text-sm font-medium text-orange-100 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD UNIT (above fold — 1 unit only, after content starts) ── */}
      {/* 150px separation from CTA buttons above */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="1234567890" format="horizontal" />
      </div>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2>Our Repair Services</h2>
            <p className="text-gray-600 mt-3 text-lg">
              All appliances repaired at your doorstep across Trichy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card group hover:shadow-lg hover:border-brand-200 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="mb-2 group-hover:text-brand-600 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-brand-600 text-sm font-semibold group-hover:underline">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 bg-white" id="why-us">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2>Why Choose Us?</h2>
            <p className="text-gray-600 mt-3 text-lg">
              Thousands of Trichy households trust us for fast, reliable appliance repair
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 p-5 rounded-xl hover:bg-brand-50 transition-colors">
                <span className="text-3xl flex-shrink-0">{w.icon}</span>
                <div>
                  <h3 className="text-base mb-1">{w.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE AD (after ample content) ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot="0987654321" format="rectangle" />
      </div>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── BOTTOM CTA ── */}
      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white mb-4">Need Appliance Repair Today?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Call now or WhatsApp us. We dispatch a certified technician to your location within
            30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919344809038" className="btn-secondary text-base">
              📞 93448 09038
            </a>
            <a
              href="https://wa.me/919344809038"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3 bg-green-500 hover:bg-green-600 text-white
                         font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── BOTTOM AD (after all content) ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 mb-4">
        <AdUnit slot="1122334455" format="horizontal" />
      </div>
    </>
  );
}
