import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Zap, Lock, Award, Phone } from 'lucide-react';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'About Us | Stoffel Appliance Care Madurai',
  description:
    "Stoffel Appliance Care — Madurai's trusted home appliance repair service. 30+ certified technicians, multi-brand expertise, doorstep service across 50+ locations.",
};

const values = [
  { icon: Target, title: 'Transparency', desc: 'Full cost estimate before any work begins. You approve it — then we start.', color: '#2563eb' },
  { icon: Zap, title: 'Speed', desc: '30-minute response time. Same-day service in most Madurai locations.', color: '#d97706' },
  { icon: Lock, title: 'Trust', desc: 'Background-verified technicians with official ID. Your home is safe with us.', color: '#059669' },
  { icon: Award, title: 'Quality', desc: 'Genuine parts, skilled hands, and 90–180 day warranty on every single repair.', color: '#7c3aed' },
];

const stats = [
  { value: '30+', label: 'Expert Technicians' },
  { value: '5,000+', label: 'Happy Customers' },
  { value: '50+', label: 'Madurai Locations' },
  { value: '90 Days', label: 'Repair Warranty' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg dot-grid relative overflow-hidden">
        <div className="deco-ring w-96 h-96 -top-20 -right-20" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Story
            </span>
            <h1 className="text-white font-extrabold mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
              About <span className="text-gradient-blue">Stoffel Appliance Care</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Madurai&apos;s most trusted home appliance repair service — certified technicians, genuine parts, doorstep convenience.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 5 720 20C480 35 240 5 0 20L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ad-separator">
        <AdUnit slot="2829303132" format="horizontal" />
      </div>

      {/* Story section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge mb-5">Who We Are</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5">Madurai&apos;s Home Appliance Repair Specialists</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Stoffel Appliance Care is a professional home appliance repair company based in Madurai, Tamil Nadu. We provide fast, reliable, and affordable <strong>doorstep repair services</strong> for AC, washing machines, refrigerators, televisions, and microwave ovens.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of 30+ certified technicians covers 50+ areas in Madurai. We believe in transparent pricing — you&apos;ll always know the full cost before we begin. Every repair we carry out is backed by a 90–180 day warranty.
            </p>
            <Link href="/contact" className="btn-secondary btn btn-lg">Get in Touch →</Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 text-center border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300"
                style={{ background: 'linear-gradient(135deg,#f8faff 0%,#fff 100%)' }}
              >
                <div className="text-4xl font-black text-brand-700 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg,#f8faff 0%,#fff 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge mb-5">Our Mission</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-5">Making Quality Repair Accessible to Every Madurai Household</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We strive to respond fast (within 30 minutes), fix right the first time, and charge fairly — no hidden costs, no unnecessary part replacements, no surprises on your bill.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="badge mb-4">What Drives Us</span>
          <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${v.color}15`, border: `1.5px solid ${v.color}30`, color: v.color }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-8">
        <AdUnit slot="3233343536" format="auto" />
      </div>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c1428 0%,#1e3a8a 100%)' }}>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-4xl font-extrabold mb-4">Experience the Difference</h2>
          <p className="text-blue-200 text-lg mb-8">Join thousands of satisfied households across Madurai.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918838893560" className="btn-secondary btn btn-lg">
              <Phone className="w-5 h-5" /> Book a Repair
            </a>
            <Link href="/services" className="btn-outline-white btn btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
