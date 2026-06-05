'use client';
import { useState } from 'react';
import { Zap, Shield, Banknote, Wrench } from 'lucide-react';
import { AcIcon, WashingMachineIcon, RefrigeratorIcon, TvIcon, MicrowaveIcon } from '@/components/Icons';
import BookingModal from '@/components/BookingModal';

const services = [
  { Icon: AcIcon, title: 'AC Repair & Service', formService: 'AC Repair & Service', href: '/services/air-conditioner', color: '#2563eb', colorLight: '#eff6ff', colorBorder: '#bfdbfe',
    desc: 'Gas refill, deep cleaning, compressor service, installation & uninstallation. All split, window & cassette AC brands.',
    brands: 'Voltas · Daikin · LG · Samsung · Hitachi · Blue Star · O General' },
  { Icon: WashingMachineIcon, title: 'Washing Machine Repair', formService: 'Washing Machine Repair', href: '/services/washing-machine', color: '#7c3aed', colorLight: '#f5f3ff', colorBorder: '#ddd6fe',
    desc: 'Front-load and top-load repair — drum, motor, PCB, water inlet, drainage issues, error codes.',
    brands: 'Samsung · LG · Whirlpool · IFB · Bosch · Godrej · Haier' },
  { Icon: RefrigeratorIcon, title: 'Refrigerator Repair', formService: 'Refrigerator Repair', href: '/services/refrigerator', color: '#0891b2', colorLight: '#ecfeff', colorBorder: '#a5f3fc',
    desc: 'Cooling failure, compressor replacement, gas charging, door seal, thermostat issues. All models.',
    brands: 'Samsung · LG · Whirlpool · Godrej · Haier · Videocon · Bosch' },
  { Icon: TvIcon, title: 'Television Repair', formService: 'TV Repair', href: '/services/television', color: '#be123c', colorLight: '#fff1f2', colorBorder: '#fecdd3',
    desc: 'LED, LCD, OLED, Smart TV — panel replacement, main board, sound issues, HDMI faults.',
    brands: 'Sony · LG · Samsung · Panasonic · Mi · TCL · Hisense · Vu' },
  { Icon: MicrowaveIcon, title: 'Microwave Oven Repair', formService: 'Microwave Repair', href: '/services/microwave', color: '#d97706', colorLight: '#fffbeb', colorBorder: '#fde68a',
    desc: 'Heating failure, magnetron replacement, turntable, door latch, control panel — all models.',
    brands: 'Samsung · LG · IFB · Panasonic · Whirlpool · Morphy Richards' },
];

const trust = [
  { Icon: Zap, label: '30-Min Response' },
  { Icon: Shield, label: '90-Day Warranty' },
  { Icon: Banknote, label: '₹249 Inspection' },
  { Icon: Wrench, label: '30+ Technicians' },
];

export default function ServicesClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  function openModal(serviceName: string) {
    setSelectedService(serviceName);
    setModalOpen(true);
  }

  return (
    <>
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.href}
              className="group flex flex-col sm:flex-row gap-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 border border-gray-100 hover:border-brand-200 p-7 transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.colorLight, border: `2px solid ${s.colorBorder}`, color: s.color }}
              >
                <s.Icon className="w-10 h-10" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">{s.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                <p className="text-xs text-gray-400 font-medium">
                  <span className="font-semibold text-gray-600">Brands: </span>{s.brands}
                </p>
              </div>

              {/* Book button — triggers modal */}
              <div className="flex items-center self-center flex-shrink-0">
                <button
                  onClick={() => openModal(s.formService)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label={`Book ${s.title}`}
                  title="Book this service"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={selectedService}
      />
    </>
  );
}
