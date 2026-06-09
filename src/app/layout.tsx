import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import CallFloat from '@/components/CallFloat';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d4ed8',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Stoffel Appliance Care | Home Appliance Repair Tiruchirappalli',
    template: '%s | Stoffel Appliance Care',
  },
  description:
    'Expert doorstep repair for AC, Washing Machine, Refrigerator, TV & Microwave in Tiruchirappalli. 30-min response · 90-day warranty · ₹249 inspection. Call 8838893560.',
  keywords: [
    'home appliance repair Tiruchirappalli',
    'AC service Tiruchirappalli',
    'washing machine repair Tiruchirappalli',
    'refrigerator repair Tiruchirappalli',
    'TV repair Tiruchirappalli',
    'microwave repair Tiruchirappalli',
    'doorstep appliance service',
  ],
  authors: [{ name: 'Stoffel Appliance Care' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Stoffel Appliance Care',
    title: 'Stoffel Appliance Care | Home Appliance Repair Tiruchirappalli',
    description:
      'Expert doorstep repair for AC, Washing Machine, Refrigerator, TV & Microwave in Tiruchirappalli.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stoffel Appliance Care',
    description: 'Expert doorstep appliance repair in Tiruchirappalli. Call 8838893560.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://yourdomain.com' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stoffel Appliance Care',
  alternateName: 'Home Appliance Tiruchirappalli',
  description:
    'Professional home appliance repair and installation service in Tiruchirappalli — AC, Washing Machine, Refrigerator, TV, Microwave.',
  url: 'https://yourdomain.com',
  telephone: '+918838893560',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  areaServed: {
    '@type': 'City',
    name: 'Tiruchirappalli',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '110/4, Keelavaithiyanatha Puram',
    addressLocality: 'Tiruchirappalli',
    postalCode: '625018',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
    ],
    opens: '08:00',
    closes: '20:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance Repair Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair & Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Washing Machine Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Refrigerator Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TV Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Microwave Repair' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — replace ca-pub-XXXXXXXXXXXXXXXX with your Publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Structured data */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallFloat />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
