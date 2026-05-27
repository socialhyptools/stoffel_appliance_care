import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d4ed8',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Appliance Service Experts | Home Appliance Repair Trichy',
    template: '%s | Appliance Service Experts',
  },
  description:
    'Expert doorstep repair for AC, Washing Machine, Refrigerator, TV & Microwave in Trichy. 30-min response · 90-day warranty · ₹399 inspection. Call 9344809038.',
  keywords: [
    'home appliance repair Trichy',
    'AC service Trichy',
    'washing machine repair Trichy',
    'refrigerator repair Trichy',
    'TV repair Trichy',
    'microwave repair Trichy',
    'doorstep appliance service',
  ],
  authors: [{ name: 'Appliance Service Experts' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Appliance Service Experts',
    title: 'Appliance Service Experts | Home Appliance Repair Trichy',
    description:
      'Expert doorstep repair for AC, Washing Machine, Refrigerator, TV & Microwave in Trichy.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appliance Service Experts',
    description: 'Expert doorstep appliance repair in Trichy. Call 9344809038.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://yourdomain.com' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Appliance Service Experts',
  alternateName: 'Home Appliance Trichy',
  description:
    'Professional home appliance repair and installation service in Trichy — AC, Washing Machine, Refrigerator, TV, Microwave.',
  url: 'https://yourdomain.com',
  telephone: '+919344809038',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  areaServed: {
    '@type': 'City',
    name: 'Tiruchirappalli',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tiruchirappalli',
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
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
