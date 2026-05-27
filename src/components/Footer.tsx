import Link from 'next/link';

const services = [
  { href: '/services/air-conditioner', label: 'AC Repair & Service' },
  { href: '/services/washing-machine', label: 'Washing Machine Repair' },
  { href: '/services/refrigerator', label: 'Refrigerator Repair' },
  { href: '/services/television', label: 'TV Repair' },
  { href: '/services/microwave', label: 'Microwave Repair' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'All Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-white text-lg font-bold mb-3">Hire Expert Service Center</h2>
            <p className="text-sm leading-relaxed">
              Professional doorstep home appliance repair across Trichy. Trusted by thousands of
              households since day one.
            </p>
            <p className="mt-4 text-sm">
              <a
                href="tel:+919344809038"
                className="text-accent-400 font-semibold hover:text-accent-300 transition-colors"
              >
                📞 93448 09038
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-white transition-colors min-h-[44px] flex items-center"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors min-h-[44px] flex items-center"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Tiruchirappalli, Tamil Nadu, India</p>
              <p>
                <a href="tel:+919344809038" className="hover:text-white transition-colors">
                  Phone: 93448 09038
                </a>
              </p>
              <p>Mon – Sun: 8:00 AM – 8:00 PM</p>
            </address>
            <a
              href="https://wa.me/919344809038"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 min-h-[48px] px-5 py-3
                         bg-green-600 hover:bg-green-700 text-white text-sm font-semibold
                         rounded-xl transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Hire Expert Service Center. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            {' · '}
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
