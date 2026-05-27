import type { Metadata } from 'next';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Contact Us | Hire Expert Service Center Trichy',
  description:
    'Contact Hire Expert Service Center for home appliance repair in Trichy. Call 9344809038 or WhatsApp. Same-day service, 30-min response.',
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Hire Expert Service Center',
  url: 'https://yourdomain.com/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Hire Expert Service Center',
    telephone: '+919344809038',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tiruchirappalli',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-white text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-xl">
            Call, WhatsApp, or drop us a message. We respond within minutes.
          </p>
        </div>
      </section>

      {/* Ad — separated from hero CTAs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="3637383940" format="horizontal" />
      </div>

      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="mb-6">Get in Touch</h2>

            <div className="card flex gap-4">
              <span className="text-3xl">📞</span>
              <div>
                <h3 className="text-base mb-1">Phone</h3>
                <a href="tel:+919344809038" className="text-brand-600 font-semibold text-lg hover:underline">
                  93448 09038
                </a>
                <p className="text-sm text-gray-500 mt-1">Mon–Sun, 8 AM – 8 PM</p>
              </div>
            </div>

            <div className="card flex gap-4">
              <span className="text-3xl">💬</span>
              <div>
                <h3 className="text-base mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/919344809038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold text-lg hover:underline"
                >
                  Message on WhatsApp
                </a>
                <p className="text-sm text-gray-500 mt-1">Quick response guaranteed</p>
              </div>
            </div>

            <div className="card flex gap-4">
              <span className="text-3xl">📍</span>
              <div>
                <h3 className="text-base mb-1">Service Location</h3>
                <address className="not-italic text-gray-700 text-sm">
                  Tiruchirappalli, Tamil Nadu, India<br />
                  (Doorstep service — we come to you)
                </address>
              </div>
            </div>

            <div className="card flex gap-4">
              <span className="text-3xl">🕐</span>
              <div>
                <h3 className="text-base mb-1">Working Hours</h3>
                <p className="text-gray-700 text-sm">Monday – Sunday<br />8:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="tel:+919344809038" className="btn-secondary text-base">
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919344809038"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 bg-green-600 hover:bg-green-700 text-white
                           font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Service summary */}
          <div className="card h-fit">
            <h3 className="mb-4">What We Repair</h3>
            <ul className="space-y-3">
              {[
                { icon: '❄️', service: 'AC Repair & Service', href: '/services/air-conditioner' },
                { icon: '🫧', service: 'Washing Machine Repair', href: '/services/washing-machine' },
                { icon: '🧊', service: 'Refrigerator Repair', href: '/services/refrigerator' },
                { icon: '📺', service: 'TV Repair', href: '/services/television' },
                { icon: '📡', service: 'Microwave Repair', href: '/services/microwave' },
              ].map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-50
                               text-gray-700 hover:text-brand-600 transition-colors min-h-[48px]"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <span className="font-medium">{s.service}</span>
                    <span className="ml-auto text-brand-500">→</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-accent-50 rounded-xl border border-accent-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-accent-600">₹399</span> inspection charge ·{' '}
                <span className="font-semibold text-accent-600">90-day</span> warranty ·{' '}
                <span className="font-semibold text-accent-600">30-min</span> response
              </p>
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
