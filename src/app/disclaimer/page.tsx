import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Stoffel Appliance Care',
  description: 'Stoffel Appliance Care is an independent appliance repair service provider, not affiliated with any appliance manufacturer or brand.',
};

export default function DisclaimerPage() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mb-10">
        <span className="badge mb-4">Legal</span>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Disclaimer</h1>
        <p className="text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-extrabold text-yellow-800 mb-3">⚠️ Independent Service Provider</h2>
        <p className="text-yellow-900 leading-relaxed font-medium">
          STOFFEL APPLIANCE CARE is an independent appliance repair and maintenance service provider.
          We are <strong>not affiliated with, authorized by, endorsed by, or sponsored by</strong> LG,
          Samsung, Whirlpool, IFB, Bosch, Sony, Panasonic, Haier, Daikin, Voltas, or any other
          appliance manufacturer. Brand names are used solely to identify the appliances we service.
          All trademarks belong to their respective owners.
        </p>
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Trademark Notice</h2>
          <p>
            All brand names, trademarks, logos, and registered trademarks mentioned on this website
            — including but not limited to LG, Samsung, Whirlpool, IFB, Bosch, Sony, Panasonic,
            Haier, Daikin, Voltas, Hitachi, Blue Star, Godrej, Carrier, O General, Mitsubishi,
            Lloyd, Videocon, Morphy Richards, TCL, Hisense, Vu, Mi — are the property of their
            respective owners. Their mention on this website is solely for the purpose of identifying
            the brands of appliances that Stoffel Appliance Care services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">No Manufacturer Affiliation</h2>
          <p>
            Stoffel Appliance Care operates as a fully independent third-party repair service. We are
            not an authorised service centre for any appliance brand. Customers seeking warranty
            repairs or brand-authorised service should contact the respective manufacturer&apos;s
            authorised service network directly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Service Quality</h2>
          <p>
            Our technicians are trained and experienced professionals. We use quality spare parts
            sourced from reputable suppliers. However, we make no claim of being an OEM (Original
            Equipment Manufacturer) authorised service centre.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Limitation of Liability</h2>
          <p>
            Stoffel Appliance Care shall not be liable for any damages arising from the use of
            information on this website. Repair estimates provided are indicative and may vary based
            on actual inspection findings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Contact</h2>
          <p>
            If you have any questions about this disclaimer, please contact us at{' '}
            <a href="mailto:srvservice174@gmail.com" className="text-brand-600 hover:underline font-semibold">
              srvservice174@gmail.com
            </a>{' '}
            or call{' '}
            <a href="tel:+918838893560" className="text-brand-600 hover:underline font-semibold">
              88388 93560
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
