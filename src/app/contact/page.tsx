import type { Metadata } from 'next';
import AdUnit from '@/components/AdUnit';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us | Appliance Service Experts Trichy',
  description:
    'Contact Appliance Service Experts for home appliance repair in Trichy. Call 9344809038 or WhatsApp. Same-day service, 30-min response.',
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
            Book a repair, ask a question, or just say hello — we respond within 30 minutes.
          </p>
        </div>
      </section>

      {/* Ad — separated from hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="3637383940" format="horizontal" />
      </div>

      {/* Lead Form + Contact Info side by side */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Lead Form */}
          <div className="card shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Book a Free Callback</h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill in your details and we'll call you back within 30 minutes.
            </p>
            <LeadForm />
          </div>

          {/* Contact details */}
          <div className="space-y-5">
            <h2 className="mb-2">Other Ways to Reach Us</h2>

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
                <p className="text-gray-700 text-sm">Monday – Sunday · 8:00 AM – 8:00 PM</p>
              </div>
            </div>

            {/* Services quick list */}
            <div className="card bg-brand-50 border-brand-200">
              <h3 className="text-brand-700 mb-3">What We Repair</h3>
              <ul className="space-y-2">
                {[
                  { icon: '❄️', label: 'AC Repair & Service', href: '/services/air-conditioner' },
                  { icon: '🫧', label: 'Washing Machine Repair', href: '/services/washing-machine' },
                  { icon: '🧊', label: 'Refrigerator Repair', href: '/services/refrigerator' },
                  { icon: '📺', label: 'TV Repair', href: '/services/television' },
                  { icon: '📡', label: 'Microwave Repair', href: '/services/microwave' },
                ].map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      className="flex items-center gap-3 py-1 text-sm text-brand-700
                                 hover:text-brand-900 font-medium transition-colors"
                    >
                      <span>{s.icon}</span> {s.label} <span className="ml-auto">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot="4041424344" format="auto" />
      </div>
    </>
  );
}
