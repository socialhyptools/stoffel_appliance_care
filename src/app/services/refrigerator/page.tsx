import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Refrigerator Repair in Trichy | All Brands',
  description:
    'Fridge repair in Trichy — cooling failure, compressor, gas charging, door seal & more. Samsung, LG, Whirlpool, Godrej. 90-day warranty. Call 9344809038.',
  alternates: { canonical: 'https://yourdomain.com/services/refrigerator' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Refrigerator Repair',
  serviceType: 'Refrigerator Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Hire Expert Service Center',
    telephone: '+919344809038',
  },
  areaServed: { '@type': 'City', name: 'Tiruchirappalli' },
};

export default function RefrigeratorPage() {
  return (
    <ServicePageTemplate
      icon="🧊"
      title="Refrigerator Repair in Trichy"
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
    />
  );
}
