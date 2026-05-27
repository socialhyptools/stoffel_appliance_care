import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Appliance Service Experts',
  description:
    'Privacy Policy for Appliance Service Experts — how we collect, use, and protect your data. Third-party ad serving disclosure (Google AdSense).',
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-14 max-w-3xl mx-auto px-4 sm:px-6">
      <h1 className="mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-base leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Who We Are</h2>
          <p>
            Appliance Service Experts ("we", "us", "our") operates the website at yourdomain.com.
            We provide home appliance repair and service in Tiruchirappalli, Tamil Nadu, India.
            Contact us at <a href="tel:+919344809038" className="text-brand-600 hover:underline">93448 09038</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Contact information</strong> (name, phone number) when you call or WhatsApp us.</li>
            <li><strong>Usage data</strong> automatically via cookies — pages visited, browser type, IP address.</li>
            <li><strong>Device & browser data</strong> collected by third-party analytics and advertising services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to your service booking requests.</li>
            <li>To improve our website experience.</li>
            <li>To serve relevant advertising (see Section 4).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Advertising — Google AdSense</h2>
          <p>
            We use <strong>Google AdSense</strong> to display advertisements on this website.
            Google uses cookies (including the DoubleClick cookie) to serve ads based on your
            prior visits to this and other websites.
          </p>
          <p className="mt-3">
            You may opt out of personalised advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
              Google Ads Settings
            </a>{' '}
            or{' '}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
              www.aboutads.info/choices
            </a>.
          </p>
          <p className="mt-3">
            For more information on how Google uses data when you use our partners' sites or apps,
            visit{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
              Google Privacy &amp; Terms
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience and to serve personalised
            advertisements. A cookie consent notice is displayed on your first visit. You can
            decline non-essential cookies using the banner shown at the bottom of the page.
          </p>
          <p className="mt-3">
            You can also control cookies through your browser settings. Please note that
            disabling cookies may affect website functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
          <p>
            Contact details you share with us (phone, name) are used solely to fulfil your
            service request and are not shared with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of any personal
            data we hold about you. Contact us at <a href="tel:+919344809038" className="text-brand-600 hover:underline">93448 09038</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Links to Other Sites</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for
            the privacy practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this policy occasionally. Changes will be posted on this page with an
            updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact</h2>
          <p>
            For privacy-related queries, call us at{' '}
            <a href="tel:+919344809038" className="text-brand-600 hover:underline font-semibold">
              93448 09038
            </a>{' '}
            or WhatsApp{' '}
            <a href="https://wa.me/919344809038" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
              here
            </a>.
          </p>
        </section>

      </div>
    </section>
  );
}
