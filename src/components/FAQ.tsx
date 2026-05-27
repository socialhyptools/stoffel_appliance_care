'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'How quickly can you send a technician to my home?',
    a: 'We aim for a 30-minute response time. In most areas of Trichy, a certified technician will arrive at your doorstep within 30–60 minutes of your call or booking.',
  },
  {
    q: 'What is the inspection charge?',
    a: 'The inspection charge is ₹399. After diagnosing the fault, we give you a complete cost breakdown before starting any repair work. No hidden charges.',
  },
  {
    q: 'Do you service all brands of appliances?',
    a: 'Yes. We repair all major brands including Samsung, LG, Whirlpool, Voltas, Daikin, Sony, Panasonic, Godrej, IFB, Haier, and 50+ other brands.',
  },
  {
    q: 'What warranty do you provide on repairs?',
    a: 'We provide 90 to 180 days warranty on all services. If the same issue recurs within the warranty period, we fix it free of charge.',
  },
  {
    q: 'Can you repair appliances on-site, or do you take them to a workshop?',
    a: 'Almost all repairs are done right at your doorstep. We carry necessary spare parts in our service vehicles. Only in rare cases requiring heavy machinery do we arrange workshop service.',
  },
  {
    q: 'Do you offer annual maintenance contracts (AMC)?',
    a: 'Yes. We offer AMC packages for AC, refrigerators, and washing machines. Contact us for customised annual service plans.',
  },
  {
    q: 'Are your technicians certified and background-verified?',
    a: 'All our technicians are trained, certified, and background-verified. They carry official ID cards that you can check at the time of visit.',
  },
  {
    q: 'Which areas in Trichy do you cover?',
    a: 'We cover 50+ locations including Thillai Nagar, KK Nagar, Woraiyur, Srirangam, Anna Nagar, Palakarai, Ariyamangalam, Kattur, and surrounding areas. See our full Service Areas page.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2>Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know about our appliance repair services
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card p-0 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left
                           min-h-[48px] hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center
                              text-brand-600 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100">
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
