import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { RefrigeratorIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Refrigerator Repair in Madurai | All Brands',
  description:
    'Fridge repair in Madurai — cooling failure, compressor, gas charging, door seal & more. Samsung, LG, Whirlpool, Godrej. 90-day warranty. Call 8838893560.',
  alternates: { canonical: 'https://yourdomain.com/services/refrigerator' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Refrigerator Repair',
  serviceType: 'Refrigerator Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Stoffel Appliance Care',
    telephone: '+918838893560',
  },
  areaServed: { '@type': 'City', name: 'Madurai' },
};

export default function RefrigeratorPage() {
  return (
    <ServicePageTemplate
      icon={<RefrigeratorIcon className="w-14 h-14" />}
      title="Refrigerator Repair in Madurai"
      tagline="Single-door, double-door & side-by-side fridge repair — cooling, compressor, gas charging & more."
      description="We repair all models of refrigerators — single-door, double-door, frost-free, and side-by-side units. Our technicians diagnose cooling failures, gas leaks, compressor faults, thermostat and PCB issues, and door seal problems. We also handle ice maker repairs, defrost system failures, and water dispenser issues. With genuine spare parts and a comprehensive warranty, your fridge is in safe hands."
      problems={[
        'Refrigerator not cooling',
        'Compressor replacement',
        'Gas / refrigerant charging',
        'Fridge making loud noise',
        'Water leaking inside/outside',
        'Frost build-up (defrost issue)',
        'Temperature control fault',
        'Door seal / gasket replacement',
        'Ice maker not working',
        'Freezer not freezing',
        'PCB / thermostat repair',
        'Light not working',
      ]}
      brands={['Samsung', 'LG', 'Whirlpool', 'Godrej', 'Haier', 'Videocon', 'Kelvinator', 'Bosch', 'Panasonic', 'Mitsubishi', 'Hitachi']}
      schema={schema}
      adSlot1="8899001122"
      adSlot2="9900112233"
      heroImage="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80"
    />
  );
}
