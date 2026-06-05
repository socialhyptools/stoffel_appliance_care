import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { AcIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'AC Repair & Service in Madurai | All Brands',
  description:
    'Expert AC repair and service in Madurai — gas refill, deep cleaning, installation, compressor repair. All brands: Voltas, Daikin, LG, Samsung. 90-day warranty. Call 8838893560.',
  alternates: { canonical: 'https://yourdomain.com/services/air-conditioner' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Repair & Service',
  serviceType: 'Air Conditioner Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Stoffel Appliance Care',
    telephone: '+918838893560',
  },
  areaServed: { '@type': 'City', name: 'Madurai' },
  description:
    'AC gas refill, deep cleaning, installation, cooling issues, compressor service for all brands in Madurai.',
};

export default function ACPage() {
  return (
    <ServicePageTemplate
      icon={<AcIcon className="w-14 h-14" />}
      title="AC Repair & Service in Madurai"
      tagline="Split, window & cassette AC — cooling issues, gas refill, deep cleaning & installation by certified technicians."
      description="Our AC technicians are trained on all types of air conditioners — split, window, cassette, and portable units. We diagnose and fix cooling failures, refrigerant leaks, compressor faults, PCB failures, water leakage, and unusual noise issues. AC deep cleaning service extends the life of your unit and keeps energy bills low. We also handle new AC installation, uninstallation, and relocation across Madurai."
      problems={[
        'AC not cooling / poor cooling',
        'Gas refill (refrigerant charging)',
        'AC deep cleaning service',
        'Compressor replacement',
        'Water leaking from indoor unit',
        'AC making loud noise',
        'PCB / remote control issues',
        'Fan motor repair',
        'AC installation & uninstallation',
        'Timer / thermostat faults',
        'Capacitor replacement',
        'Error code diagnosis',
      ]}
      brands={['Voltas', 'Daikin', 'LG', 'Samsung', 'Hitachi', 'Blue Star', 'O General', 'Godrej', 'Carrier', 'Panasonic', 'Mitsubishi', 'Lloyd']}
      schema={schema}
      adSlot1="4455667788"
      adSlot2="5566778899"
    />
  );
}
