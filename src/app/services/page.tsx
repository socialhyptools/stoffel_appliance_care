import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'All Appliance Repair Services in Trichy',
  description:
    'Complete home appliance repair services in Trichy — AC, Washing Machine, Refrigerator, TV, Microwave. Doorstep service, all brands, 90-day warranty. Call 9344809038.',
};

const services = [
  {
    icon: '❄️',
    title: 'AC Repair & Service',
    href: '/services/air-conditioner',
    desc: 'Gas refill, deep cleaning, compressor service, installation & uninstallation. All brands of split, window & cassette ACs.',
    brands: 'Voltas, Daikin, LG, Samsung, Hitachi, Blue Star, O General',
  },
  {
    icon: '🫧',
    title: 'Washing Machine Repair',
    href: '/services/washing-machine',
    desc: 'Front-load and top-load repair — drum, motor, PCB, water inlet valve, drainage issues.',
    brands: 'Samsung, LG, Whirlpool, IFB, Bosch, Godrej, Haier',
  },
  {
    icon: '🧊',
    title: 'Refrigerator Repair',
    href: '/services/refrigerator',
    desc: 'Cooling failure, compressor replacement, gas charging, door seal, thermostat issues.',
    brands: 'Samsung, LG, Whirlpool, Godrej, Haier, Videocon, Kelvinator',
  },
  {
    icon: '📺',
    title: 'Television Repair',
    href: '/services/television',
    desc: 'LED, LCD, OLED, Smart TV — panel replacement, main board, sound issues, remote faults.',
    brands: 'Sony, LG, Samsung, Panasonic, Onida, Videocon, Mi',
  },
  {
    icon: '📡',
    title: 'Microwave & Oven Repair',
    href: '/services/microwave',
    desc: 'Heating failure, magnetron replacement, turntable motor, door latch, control panel issues.',
    brands: 'Samsung, LG, IFB, Panasonic, Whirlpool, Morphy Richards',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-white text-4xl font-extrabold mb-4">Our Repair Services</h1>
          <p className="text-blue-200 text-lg max-w-xl">
            Expert doorstep repair for all home appliances in Trichy. Certified technicians,
            all brands, 90-day service warranty.
          </p>
        </div>
      </section>

      {/* Ad after hero, before service listing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="2233445566" format="horizontal" />
      </div>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="card group hover:shadow-lg hover:border-brand-200 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{s.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-xl mb-2 group-hover:text-brand-600 transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Brands: </span>{s.brands}
                    </p>
                    <p className="mt-3 text-brand-600 text-sm font-semibold group-hover:underline">
                      View service details →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot="3344556677" format="rectangle" />
      </div>

      {/* Booking CTA */}
      <section className="bg-accent-500 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white mb-4">Book a Repair Today</h2>
          <p className="text-orange-100 mb-8 text-lg">
            Call or WhatsApp — our team responds within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919344809038" className="btn-primary text-base bg-white text-brand-700 hover:bg-gray-100">
              📞 93448 09038
            </a>
            <a
              href="https://wa.me/919344809038"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3 bg-green-600 hover:bg-green-700 text-white
                         font-semibold rounded-xl transition-colors flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
