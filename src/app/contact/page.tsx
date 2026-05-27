import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us | Appliance Service Experts Trichy',
  description: 'Contact Appliance Service Experts for home appliance repair in Trichy. Call 9344809038 or WhatsApp. Same-day service, 30-min response.',
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Appliance Service Experts',
  url: 'https://yourdomain.com/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Appliance Service Experts',
    telephone: '+919344809038',
    address: { '@type': 'PostalAddress', addressLocality: 'Tiruchirappalli', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
  },
};

const contactCards = [
  { icon: '📞', title: 'Phone', value: '93448 09038', href: 'tel:+919344809038', sub: 'Mon – Sun · 8 AM – 8 PM', color: '#2563eb' },
  { icon: '💬', title: 'WhatsApp', value: 'Message Us', href: 'https://wa.me/919344809038', sub: 'Quick response guaranteed', color: '#25d366' },
  { icon: '📍', title: 'Location', value: 'Tiruchirappalli, TN', href: undefined, sub: 'Doorstep service — we come to you', color: '#d97706' },
  { icon: '⏰', title: 'Working Hours', value: '8 AM – 8 PM', href: undefined, sub: 'Monday to Sunday, all week', color: '#7c3aed' },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section className="hero-bg dot-grid relative overflow-hidden">
        <div className="deco-ring w-80 h-80 -top-16 -right-16" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-xl animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Get In Touch
            </span>
            <h1 className="text-white font-extrabold mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
              Let's Fix Your<br /><span className="text-gradient-blue">Appliance Today</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Call, WhatsApp, or fill the form. Our team responds within 30 minutes — every time.
            </p>
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
        <AdUnit slot="3637383940" format="horizontal" />
      </div>

      {/* Contact grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Lead Form */}
          <div className="card shadow-form">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Book a Free Callback</h2>
              <p className="text-gray-500">Our team calls you back within 30 minutes.</p>
            </div>
            <LeadForm />
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Other Ways to Reach Us</h2>

            {contactCards.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card border border-gray-100 hover:border-gray-200 transition-all duration-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${c.color}15`, border: `1.5px solid ${c.color}25` }}>
                  {c.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-bold text-gray-900 hover:text-brand-600 transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-bold text-gray-900">{c.value}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Services list */}
            <div className="rounded-2xl p-5 border border-brand-100 mt-6"
              style={{ background: 'linear-gradient(135deg,#eff6ff 0%,#fff 100%)' }}>
              <h3 className="font-bold text-brand-700 mb-4 text-sm uppercase tracking-widest">Services We Offer</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { icon: '❄️', label: 'AC Repair & Service', href: '/services/air-conditioner' },
                  { icon: '🫧', label: 'Washing Machine Repair', href: '/services/washing-machine' },
                  { icon: '🧊', label: 'Refrigerator Repair', href: '/services/refrigerator' },
                  { icon: '📺', label: 'TV Repair', href: '/services/television' },
                  { icon: '📡', label: 'Microwave Repair', href: '/services/microwave' },
                ].map((s) => (
                  <a key={s.href} href={s.href}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl text-sm font-medium text-gray-700
                               hover:text-brand-700 hover:bg-brand-100/50 transition-colors min-h-[44px]">
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                    <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="tel:+919344809038" className="btn-secondary btn btn-lg flex-1 justify-center">📞 Call Now</a>
              <a href="https://wa.me/919344809038" target="_blank" rel="noopener noreferrer" className="btn-green btn btn-lg flex-1 justify-center">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot="4041424344" format="auto" />
      </div>
    </>
  );
}
