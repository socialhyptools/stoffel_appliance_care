import AdUnit from '@/components/AdUnit';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';

interface ServiceProps {
  title: string;
  icon: string;
  tagline: string;
  description: string;
  problems: string[];
  brands: string[];
  schema: object;
  adSlot1: string;
  adSlot2: string;
  accentColor?: string;
}

export default function ServicePageTemplate({
  title, icon, tagline, description, problems, brands,
  schema, adSlot1, adSlot2, accentColor = '#2563eb',
}: ServiceProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ── */}
      <section className="hero-bg dot-grid relative overflow-hidden">
        <div className="deco-ring w-96 h-96 -top-20 -right-20" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <a href="/services" className="inline-flex items-center gap-1.5 text-blue-300 hover:text-blue-200 text-sm mb-6 transition-colors">
                ← All Services
              </a>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl">{icon}</div>
              </div>
              <h1 className="text-white font-extrabold mb-5" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)' }}>
                {title}
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">{tagline}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919344809038" className="btn-secondary btn btn-lg">📞 Book: 93448 09038</a>
                <a href="https://wa.me/919344809038" target="_blank" rel="noopener noreferrer" className="btn-outline-white btn btn-lg">💬 WhatsApp</a>
              </div>
              <div className="flex flex-wrap gap-3 mt-7">
                {['✅ ₹399 Inspection', '🛡️ 90-Day Warranty', '⚡ Same-Day Service'].map((b) => (
                  <span key={b} className="text-xs text-blue-100 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">{b}</span>
                ))}
              </div>
            </div>

            {/* Booking card */}
            <div className="animate-slide-right">
              <div className="card-glass rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 32px 80px 0 rgba(0,0,0,0.4)' }}>
                <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                  <h2 className="text-lg font-extrabold text-gray-900">Book This Service</h2>
                  <p className="text-xs text-gray-500 mt-0.5">Free callback within 30 minutes</p>
                </div>
                <div className="p-6">
                  <LeadForm compact />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 5 720 20C480 35 240 5 0 20L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Ad ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot={adSlot1} format="horizontal" />
      </div>

      {/* ── Content ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">

            {/* About */}
            <div>
              <span className="badge mb-4">About This Service</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">What's Included</h2>
              <p className="text-gray-600 leading-relaxed text-base">{description}</p>
            </div>

            {/* Problems */}
            <div>
              <span className="badge mb-4">Common Issues</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Problems We Fix</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problems.map((p) => (
                  <div key={p} className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-brand-50 rounded-xl border border-gray-100 hover:border-brand-200 transition-all duration-200">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                      style={{ background: accentColor }}>✓</span>
                    <span className="text-gray-700 text-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <span className="badge mb-4">Brand Coverage</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Brands We Service</h2>
              <div className="flex flex-wrap gap-3">
                {brands.map((b) => (
                  <span key={b} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:border-brand-300 hover:text-brand-700 transition-all duration-150 shadow-soft">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="space-y-6">
            {/* Booking card */}
            <div className="card sticky top-24"
              style={{ background: 'linear-gradient(135deg,#eff6ff 0%,#fff 100%)', borderColor: '#bfdbfe' }}>
              <h3 className="font-extrabold text-gray-900 mb-1">Book This Service</h3>
              <p className="text-sm text-gray-500 mb-5">Same-day service. 30-min response.</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  '₹399 inspection charge',
                  '90–180 day warranty',
                  'All brands covered',
                  'Doorstep service',
                  'Transparent pricing',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="tel:+919344809038" className="btn-secondary btn w-full justify-center text-sm">
                📞 93448 09038
              </a>
              <a href="https://wa.me/919344809038" target="_blank" rel="noopener noreferrer"
                className="btn-green btn w-full justify-center text-sm mt-3">
                💬 WhatsApp Us
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Mid Ad ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot={adSlot2} format="auto" />
      </div>

      <FAQ />
    </>
  );
}
