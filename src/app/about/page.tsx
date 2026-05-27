import type { Metadata } from 'next';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'About Us | Appliance Service Experts Trichy',
  description:
    'Appliance Service Experts — Trichy\'s trusted home appliance repair service. 30+ certified technicians, multi-brand expertise, doorstep service across 50+ locations.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-white text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-blue-200 text-lg max-w-xl">
            Trichy's most trusted home appliance repair service — expert technicians, doorstep
            convenience.
          </p>
        </div>
      </section>

      {/* Ad */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="2829303132" format="horizontal" />
      </div>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div>
          <h2 className="mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Appliance Service Experts is a professional home appliance repair and service company
            based in Tiruchirappalli, Tamil Nadu. We provide fast, reliable, and affordable
            doorstep repair services for all major home appliances including air conditioners,
            washing machines, refrigerators, televisions, and microwave ovens.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our team of 30+ certified technicians is trained on all major brands and models. We
            believe in transparent pricing — you'll always know the cost before we start work.
            Every repair we carry out is backed by our 90 to 180-day service warranty.
          </p>
        </div>

        <div>
          <h2 className="mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple: to make quality appliance repair accessible to every household
            in Trichy. We strive to respond fast (within 30 minutes), fix right the first time,
            and charge fairly — no hidden costs, no unnecessary part replacements.
          </p>
        </div>

        <div>
          <h2 className="mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'Transparency', desc: 'Full cost estimate before any work begins. No surprises on your bill.' },
              { icon: '⚡', title: 'Speed', desc: '30-minute response time. Same-day service in most Trichy locations.' },
              { icon: '🔒', title: 'Trust', desc: 'Background-verified technicians with official ID. Your home is safe.' },
              { icon: '🛡️', title: 'Quality', desc: 'Genuine parts, skilled hands, and 90–180 day warranty on every repair.' },
            ].map((v) => (
              <div key={v.title} className="flex gap-4 p-5 rounded-xl bg-brand-50">
                <span className="text-3xl">{v.icon}</span>
                <div>
                  <h3 className="text-base mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4">Coverage</h2>
          <p className="text-gray-700 leading-relaxed">
            We cover 50+ locations across Tiruchirappalli including Thillai Nagar, KK Nagar,
            Woraiyur, Srirangam, Anna Nagar, Palakarai, Ariyamangalam, Kattur, and many more.
            Visit our{' '}
            <a href="/service-areas" className="text-brand-600 hover:underline font-medium">
              Service Areas page
            </a>{' '}
            for the full list.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot="3233343536" format="auto" />
      </div>

      <section className="bg-accent-500 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white mb-4">Experience the Difference</h2>
          <p className="text-orange-100 mb-8">
            Join thousands of satisfied customers across Trichy. Book a repair today.
          </p>
          <a href="tel:+919344809038" className="btn-primary bg-white text-brand-700 hover:bg-gray-100 text-base">
            📞 Call 93448 09038
          </a>
        </div>
      </section>
    </>
  );
}
