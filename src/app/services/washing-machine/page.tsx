import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { WashingMachineIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Washing Machine Repair in Tiruchirappalli | All Brands',
  description:
    'Washing machine repair in Tiruchirappalli — front-load, top-load, drum, motor, PCB issues. Samsung, LG, Whirlpool, IFB & more. 90-day warranty. Call 8838893560.',
  alternates: { canonical: 'https://yourdomain.com/services/washing-machine' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Washing Machine Repair',
  serviceType: 'Washing Machine Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Stoffel Appliance Care',
    telephone: '+918838893560',
  },
  areaServed: { '@type': 'City', name: 'Tiruchirappalli' },
};

export default function WashingMachinePage() {
  return (
    <ServicePageTemplate
      icon={<WashingMachineIcon className="w-14 h-14" />}
      title="Washing Machine Repair in Tiruchirappalli"
      tagline="Front-load & top-load washing machine repair — drum, motor, drainage, PCB faults fixed at your doorstep."
      description="We repair all types of washing machines including fully automatic front-load, fully automatic top-load, and semi-automatic models. Our technicians carry common spare parts so most repairs are completed in a single visit. We fix drum faults, motor failures, water inlet and drainage issues, PCB damage, lid/door problems, and error codes. We service all major brands and provide a 90–180 day warranty on all repairs."
      problems={[
        'Washing machine not spinning',
        'Water not draining',
        'Drum not rotating',
        'Water leaking from machine',
        'Error codes (E1, E2, F8 etc.)',
        'Door/lid not locking',
        'Motor failure',
        'PCB / control board repair',
        'Vibration & loud noise',
        'Water inlet valve replacement',
        'Programme selector fault',
        'Heating element issues',
      ]}
      brands={['Samsung', 'LG', 'Whirlpool', 'IFB', 'Bosch', 'Godrej', 'Haier', 'Panasonic', 'Videocon', 'Onida', 'BPL']}
      schema={schema}
      adSlot1="6677889900"
      adSlot2="7788990011"
      heroImage="/images/washing-machine.jpg"
      serviceName="Washing Machine Repair"
    />
  );
}
