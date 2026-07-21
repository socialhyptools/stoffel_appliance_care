import Link from 'next/link';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';

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
  { href: '/disclaimer', label: 'Disclaimer' },
];
const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/applianceserviceexperts', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> },
  { label: 'Instagram', href: 'https://instagram.com/applianceserviceexperts', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: 'WhatsApp', href: 'https://wa.me/918778783255', icon: <WhatsAppIcon className="w-5 h-5" /> },
  { label: 'YouTube', href: 'https://youtube.com/@applianceserviceexperts', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg,#0c1428 0%,#070e2b 100%)' }} className="text-gray-400 mt-0">
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Stoffel Appliance Care" className="w-14 h-14 rounded-xl object-contain" />
                <div>
                  <div className="text-white font-extrabold text-sm tracking-tight">Stoffel Appliance Care</div>
                  <div className="text-blue-400 text-[11px] font-medium">Tiruchirappalli, Tamil Nadu</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 mb-5">Tiruchirappalli&apos;s most trusted home appliance repair service. Doorstep convenience, certified experts, genuine parts.</p>
              <a href="tel:+918838893560" className="inline-flex items-center gap-2 text-accent-400 font-bold text-base hover:text-accent-300 transition-colors">
                <Phone className="w-4 h-4" /> 88388 93560
              </a>
              <div className="flex items-center gap-3 mt-5">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 hover:bg-brand-600 text-gray-400 hover:text-white transition-all duration-200 border border-white/10">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Services</h3>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:bg-accent-500 transition-colors" />{s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:bg-accent-500 transition-colors" />{l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contact</h3>
              <address className="not-italic text-sm space-y-3 text-gray-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-gray-300">Head Office:</strong> Stoffel Appliance Care<br />
                    110/4, Keelavaithiyanatha Puram,<br />
                    Madurai, Tamil Nadu,<br />
                    PIN – 625018, India
                  </span>
                </p>
                <p><a href="tel:+918838893560" className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4 flex-shrink-0" /> 88388 93560</a></p>
                <p><a href="mailto:srvservice174@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4 flex-shrink-0" /> srvservice174@gmail.com</a></p>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4 flex-shrink-0" /> Mon – Sun · 8:00 AM – 8:00 PM</p>
              </address>
              <a href="https://wa.me/918778783255" target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 min-h-[48px] px-5 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#25d366,#128c7e)', boxShadow: '0 8px 24px rgba(37,211,102,0.3)' }}>
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Disclaimer strip */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-[11px] text-gray-500 leading-relaxed text-center">
            <span className="font-semibold text-gray-400">Disclaimer:</span> Stoffel Appliance Care is an independent appliance repair and maintenance service provider. We are not affiliated with, authorized by, endorsed by, or sponsored by LG, Samsung, Whirlpool, IFB, Bosch, Sony, Panasonic, Haier, Daikin, Voltas, or any other appliance manufacturer. Brand names are used solely to identify the appliances we service. All trademarks belong to their respective owners.{' '}
            <Link href="/disclaimer" className="text-gray-400 hover:text-gray-300 underline transition-colors">Read full disclaimer →</Link>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Stoffel Appliance Care. All rights reserved. &nbsp;|&nbsp; Designed and Developed by <a href="https://socialhyp.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors underline">Socialhyp</a></p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <span>&middot;</span>
          <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
          <span>&middot;</span>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
