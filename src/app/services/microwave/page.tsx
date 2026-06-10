import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { MicrowaveIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Microwave Oven Repair in Tiruchirappalli | All Brands',
  description:
    'Microwave oven repair in Tiruchirappalli — heating failure, magnetron, turntable, door faults. Samsung, LG, IFB, Panasonic. 90-day warranty. Call 8838893560.',
  alternates: { canonical: 'https://yourdomain.com/services/microwave' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Microwave Oven Repair',
  serviceType: 'Microwave Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Stoffel Appliance Care',
    telephone: '+918838893560',
  },
  areaServed: { '@type': 'City', name: 'Tiruchirappalli' },
};

export default function MicrowavePage() {
  return (
    <ServicePageTemplate
      icon={<MicrowaveIcon className="w-14 h-14" />}
      title="Microwave Oven Repair in Tiruchirappalli"
      tagline="Solo, grill & convection microwave repairs — heating issues, magnetron, turntable & control faults fixed fast."
      description="We repair all types of microwave ovens including solo, grill, and convection models. Our technicians diagnose heating failures, magnetron faults, turntable motor issues, door latch problems, and control panel malfunctions. We use genuine spare parts and our repairs are backed by a comprehensive warranty. Most microwave repairs are completed in a single visit at your doorstep."
      problems={[
        'Microwave not heating',
        'Magnetron replacement',
        'Turntable not rotating',
        'Door latch / seal repair',
        'Microwave sparking inside',
        'Control panel / buttons fault',
        'Display not working',
        'Unusual humming / noise',
        'Microwave not starting',
        'Fan not running',
        'Convection function fault',
        'Grill element replacement',
      ]}
      brands={['Samsung', 'LG', 'IFB', 'Panasonic', 'Whirlpool', 'Morphy Richards', 'Bajaj', 'Godrej', 'Sharp', 'Kenstar']}
      schema={schema}
      adSlot1="1516171819"
      adSlot2="1617181920"
      heroImage="/images/microwave.jpg"
      serviceName="Microwave Repair"
    />
  );
}
