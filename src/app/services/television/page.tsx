import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { TvIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'TV Repair in Tiruchirappalli | LED, LCD, Smart TV',
  description:
    'TV repair in Tiruchirappalli — LED, LCD, OLED, Smart TV panel, board, sound & display issues. Sony, LG, Samsung, Panasonic. 90-day warranty. Call 8838893560.',
  alternates: { canonical: 'https://yourdomain.com/services/television' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Television Repair',
  serviceType: 'TV Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Stoffel Appliance Care',
    telephone: '+918838893560',
  },
  areaServed: { '@type': 'City', name: 'Tiruchirappalli' },
};

export default function TelevisionPage() {
  return (
    <ServicePageTemplate
      icon={<TvIcon className="w-14 h-14" />}
      title="TV Repair in Tiruchirappalli"
      tagline="LED, LCD, OLED & Smart TV repair — panel, main board, sound, display issues fixed at your doorstep."
      description="Our TV repair technicians handle all types of televisions including LED, LCD, OLED, QLED, and Smart TVs. We diagnose and fix display issues, backlight failures, main board faults, power supply problems, and sound issues. Smart TV software and connectivity problems are also resolved. All repairs come with a warranty, and we carry common spare parts to ensure same-day completion."
      problems={[
        'TV not turning on',
        'No display / blank screen',
        'Backlight failure',
        'Panel replacement',
        'Main board repair',
        'No sound / distorted audio',
        'Power supply repair',
        'Smart TV connectivity issues',
        'HDMI / USB port faults',
        'Remote sensor not working',
        'Vertical / horizontal lines on screen',
        'Screen flickering',
      ]}
      brands={['Sony', 'LG', 'Samsung', 'Panasonic', 'Onida', 'Videocon', 'Mi', 'TCL', 'Hisense', 'Vu', 'BPL', 'Philips']}
      schema={schema}
      adSlot1="1011121314"
      adSlot2="1112131415"
      heroImage="/images/television.jpg"
      serviceName="TV Repair"
    />
  );
}
