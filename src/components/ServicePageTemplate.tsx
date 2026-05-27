import AdUnit from '@/components/AdUnit';
import FAQ from '@/components/FAQ';

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
}

export default function ServicePageTemplate({
  title,
  icon,
  tagline,
  description,
  problems,
  brands,
  schema,
  adSlot1,
  adSlot2,
}: ServiceProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-6">
            <span className="text-6xl hidden sm:block">{icon}</span>
            <div>
              <h1 className="text-white text-4xl font-extrabold mb-3">{title}</h1>
              <p className="text-blue-100 text-lg max-w-2xl">{tagline}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a href="tel:+919344809038" className="btn-secondary text-base">
                  📞 Book Now: 93448 09038
                </a>
                <a
                  href="https://wa.me/919344809038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-6 py-3 bg-green-500 hover:bg-green-600 text-white
                             font-semibold rounded-xl transition-colors flex items-center justify-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad: after hero, before content — 150px separation enforced via ad-separator class */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot={adSlot1} format="horizontal" />
      </div>

      {/* Content */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="mb-4">About This Service</h2>
              <p className="text-gray-700 leading-relaxed text-base">{description}</p>
            </div>

            <div>
              <h2 className="mb-4">Common Problems We Fix</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4">Brands We Service</h2>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="bg-brand-50 text-brand-700 text-sm font-medium px-3 py-1.5 rounded-lg"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar booking card */}
          <aside>
            <div className="card bg-brand-50 border-brand-200 sticky top-24">
              <h3 className="text-brand-700 mb-2">Book This Service</h3>
              <p className="text-sm text-gray-600 mb-4">
                Same-day service available. 30-min response time.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>✅ ₹399 inspection charge</li>
                <li>✅ 90–180 day warranty</li>
                <li>✅ All brands covered</li>
                <li>✅ Doorstep service</li>
                <li>✅ Transparent pricing</li>
              </ul>
              <a href="tel:+919344809038" className="btn-secondary w-full justify-center text-sm">
                📞 93448 09038
              </a>
              <a
                href="https://wa.me/919344809038"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 min-h-[48px] w-full px-4 py-3 bg-green-600 hover:bg-green-700
                           text-white text-sm font-semibold rounded-xl transition-colors
                           flex items-center justify-center"
              >
                WhatsApp Us
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Mid-page ad */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot={adSlot2} format="auto" />
      </div>

      <FAQ />
    </>
  );
}
