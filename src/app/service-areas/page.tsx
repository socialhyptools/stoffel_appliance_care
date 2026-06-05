import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Map } from 'lucide-react';
import AdUnit from '@/components/AdUnit';
import { AcIcon, WashingMachineIcon, RefrigeratorIcon, TvIcon, MicrowaveIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Service Areas in Madurai | Stoffel Appliance Care',
  description: 'Stoffel Appliance Care covers 50+ locations in Madurai — Thillai Nagar, KK Nagar, Srirangam, Woraiyur, Anna Nagar & more. Call 8838893560.',
};

const areas = [
  'Thillai Nagar','KK Nagar','Woraiyur','Srirangam','Anna Nagar',
  'Palakarai','Ariyamangalam','Kattur','Karumandabam','Puthur',
  'Cantonment','Teppakulam','Tennur','Ponmalai','Golden Rock',
  'Manapparai','Musiri','Lalgudi','Manachanallur','Thiruverambur',
  'Sathyamangalam','Vayalur Road','Rockfort Area','Chathiram Bus Stand',
  'Ponnagar','Kailasapuram','Navalpattu','Edamalaipattippu',
  'Poolangudi','Kaveri Nagar','Collector Office Area','Pallapatti',
  'Panjapur','Sendurai','Uppiliapuram','Andankoil','Keezhamadhanur',
  'Thuraiyanur','Turaiyur','Thuvakudi','Koothampoondi','Varaganeri',
  'West Boulevard Road','Rajaji Nagar','Gandhi Nagar','Krishnamurthy Nagar',
  'Bharathidasan Nagar','Nehru Nagar','Sangam Nagar',
];

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Home Appliance Repair Service Areas',
  provider: { '@type': 'LocalBusiness', name: 'Stoffel Appliance Care', telephone: '+918838893560' },
  areaServed: areas.map((a) => ({ '@type': 'Place', name: `${a}, Madurai` })),
};

const serviceLinks = [
  { Icon: AcIcon, label: 'AC Repair', href: '/services/air-conditioner' },
  { Icon: WashingMachineIcon, label: 'Washing Machine', href: '/services/washing-machine' },
  { Icon: RefrigeratorIcon, label: 'Refrigerator', href: '/services/refrigerator' },
  { Icon: TvIcon, label: 'TV Repair', href: '/services/television' },
  { Icon: MicrowaveIcon, label: 'Microwave', href: '/services/microwave' },
];

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="hero-bg dot-grid relative overflow-hidden">
        <div className="deco-ring w-80 h-80 -top-16 -right-16" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              50+ Locations Covered
            </span>
            <h1 className="text-white font-extrabold mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
              Serving All of<br /><span className="text-gradient-blue">Madurai</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Fast doorstep appliance repair wherever you are in Madurai. 30-minute response, 50+ areas covered.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 5 720 20C480 35 240 5 0 20L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="2021222324" format="horizontal" />
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="badge mb-4">Service Coverage</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Areas We Cover</h2>
          <p className="text-gray-500">Can&apos;t find yours? Call us — we&apos;ll check availability.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {areas.map((area) => (
            <div key={area}
              className="group bg-white border border-gray-100 rounded-xl px-3 py-3.5 text-sm font-medium text-gray-700 text-center hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 hover:shadow-soft transition-all duration-200 cursor-default flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 group-hover:bg-accent-500 transition-colors flex-shrink-0" />
              {area}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 border border-brand-200"
          style={{ background: 'linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%)' }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-brand-100 text-brand-600">
            <Map className="w-7 h-7" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bold text-brand-900 mb-1">Don&apos;t see your area?</h3>
            <p className="text-brand-700 text-sm">Call us at <a href="tel:+918838893560" className="font-bold hover:underline">88388 93560</a> — we may still be able to send a technician.</p>
          </div>
          <a href="tel:+918838893560" className="btn-primary btn flex-shrink-0">
            <Phone className="w-4 h-4" /> Call Us
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <AdUnit slot="2425262728" format="rectangle" />
      </div>

      <section className="py-14 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Services Available in All Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceLinks.map((s) => (
              <Link key={s.href} href={s.href}
                className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-2xl px-5 py-3 text-sm font-semibold text-gray-700 hover:border-brand-300 hover:text-brand-700 shadow-soft hover:shadow-card transition-all duration-200">
                <s.Icon className="w-5 h-5 text-brand-500" /> {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c1428 0%,#1e3a8a 100%)' }}>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-4xl font-extrabold mb-4">Ready to Book?</h2>
          <p className="text-blue-200 text-lg mb-8">30-minute response guaranteed across all Madurai locations.</p>
          <a href="tel:+918838893560" className="btn-secondary btn btn-lg">
            <Phone className="w-5 h-5" /> Call 88388 93560
          </a>
        </div>
      </section>
    </>
  );
}
