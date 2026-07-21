'use client';
import { useState } from 'react';
import { Phone } from 'lucide-react';

const faqs = [
  { q: 'How quickly can you send a technician?', a: 'We aim for a 30-minute response time. In most areas of Trichy, a experienced technician will arrive within 30–60 minutes of your call.' },
  { q: 'What is the inspection charge?', a: 'The inspection charge is ₹399. After diagnosis, we give you a full cost breakdown before starting any repair. No hidden charges — ever.' },
  { q: 'Do you service all appliance brands?', a: 'Yes. We repair all major brands including Samsung, LG, Whirlpool, Voltas, Daikin, Sony, Panasonic, Godrej, IFB, Haier, and 50+ others.' },
  { q: 'What warranty do you provide?', a: 'We provide 90 to 180 days warranty on all services. If the same issue recurs within the warranty period, we fix it at no extra charge.' },
  { q: 'Can you repair appliances on-site?', a: 'Almost all repairs are done right at your doorstep. We carry common spare parts in our service vehicles. Only in rare cases do we use a workshop.' },
  { q: 'Do you offer Annual Maintenance Contracts (AMC)?', a: 'Yes. We offer customised AMC packages for AC, refrigerators, and washing machines. Contact us for details.' },
  { q: 'Are your technicians verified?', a: 'All technicians are trained, certified, and background-verified. They carry official ID cards you can check at the time of the visit.' },
  { q: 'Which areas in Trichy do you cover?', a: 'We cover 50+ locations including Thillai Nagar, KK Nagar, Woraiyur, Srirangam, Anna Nagar, Ariyamangalam, Kattur and many more.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="badge mb-4">FAQ</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked<br />Questions</h2>
          <p className="text-gray-500 text-lg">Everything you need to know before booking a repair</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open === i ? 'border-brand-200 shadow-brand bg-brand-50/30' : 'border-gray-100 bg-white hover:border-gray-200 shadow-soft'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left min-h-[64px]" aria-expanded={open === i}>
                <span className={`font-semibold pr-4 transition-colors duration-200 ${open === i ? 'text-brand-700' : 'text-gray-900'}`}>{faq.q}</span>
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? 'bg-brand-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 animate-fade-in">
                  <div className="border-t border-brand-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a href="tel:+918778783255" className="btn-primary btn">
            <Phone className="w-4 h-4" /> Call us — 88388 93560
          </a>
        </div>
      </div>
    </section>
  );
}
