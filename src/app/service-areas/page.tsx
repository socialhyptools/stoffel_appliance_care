import type { Metadata } from 'next';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Service Areas in Trichy | Home Appliance Repair',
  description:
    'Appliance Service Experts covers 50+ locations in Trichy — Thillai Nagar, KK Nagar, Srirangam, Woraiyur, Anna Nagar & more. Call 9344809038.',
};

const areas = [
  'Thillai Nagar', 'KK Nagar', 'Woraiyur', 'Srirangam', 'Anna Nagar',
  'Palakarai', 'Ariyamangalam', 'Kattur', 'Karumandabam', 'Puthur',
  'Cantonment', 'Teppakulam', 'Tennur', 'Ponmalai', 'Golden Rock',
  'Manapparai', 'Musiri', 'Lalgudi', 'Manachanallur', 'Thiruverambur',
  'Sathyamangalam', 'Vayalur Road', 'Rockfort Area', 'Chathiram Bus Stand',
  'Ponnagar', 'Kailasapuram', 'Navalpattu', 'Edamalaipattippu',
  'Poolangudi', 'Kaveri Nagar', 'Collector Office Area', 'Pallapatti',
  'Arulmigu Mariamman Teppakulam', 'Panjapur', 'Sendurai', 'Uppiliapuram',
  'Andankoil', 'Keezhamadhanur', 'Thuraiyanur', 'Turaiyur',
  'Thuvakudi', 'Koothampoondi', 'Varaganeri', 'West Boulevard Road',
  'Rajaji Nagar', 'Gandhi Nagar', 'Krishnamurthy Nagar', 'Bharathidasan Nagar',
  'Nehru Nagar', 'Sangam Nagar',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home Appliance Repair Service Areas',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Appliance Service Experts',
    telephone: '+919344809038',
  },
  areaServed: areas.map((a) => ({ '@type': 'Place', name: `${a}, Tiruchirappalli` })),
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-white text-4xl font-extrabold mb-4">Service Areas in Trichy</h1>
          <p className="text-blue-200 text-lg max-w-xl">
            We cover 50+ locations across Tiruchirappalli. Fast doorstep appliance repair wherever you are.
          </p>
        </div>
      </section>

      {/* Ad after hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="2021222324" format="horizontal" />
      </div>

      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="mb-6">Areas We Serve</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-brand-50 border border-brand-100 text-brand-700
                         text-sm font-medium px-3 py-3 rounded-xl text-center
                         hover:bg-brand-100 transition-colors"
            >
              {area}
            </div>
          ))}
        </div>

        <div className="mt-10 card bg-accent-50 border-accent-200">
          <h3 className="text-accent-600 mb-2">Don't see your area?</h3>
          <p className="text-gray-700 text-sm">
            Call us at{' '}
            <a href="tel:+919344809038" className="text-brand-600 font-semibold hover:underline">
              93448 09038
            </a>{' '}
            — we may still be able to send a technician to your location. We're constantly expanding
            our coverage across the Trichy district.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot="2425262728" format="rectangle" />
      </div>

      <section className="bg-brand-700 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white mb-4">Ready to Book?</h2>
          <p className="text-blue-200 mb-8">Call or WhatsApp — 30-minute response guaranteed.</p>
          <a href="tel:+919344809038" className="btn-secondary text-base">
            📞 Call 93448 09038
          </a>
        </div>
      </section>
    </>
  );
}
