'use client';
import { useState } from 'react';

/*
 * Setup: Go to https://web3forms.com → enter your Gmail → get Access Key
 * Replace WEB3FORMS_ACCESS_KEY below with your key.
 * All form submissions will be emailed to your Gmail instantly.
 */
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

const services = [
  'AC Repair & Service',
  'Washing Machine Repair',
  'Refrigerator Repair',
  'TV Repair',
  'Microwave Repair',
  'Other',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const name = (data.get('name') as string).trim();
    const phone = (data.get('phone') as string).trim();
    if (!name) errs.name = 'Name is required';
    if (!phone) errs.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(phone)) errs.phone = 'Enter a valid 10-digit mobile number';
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Lead: ${data.get('service') || 'Appliance Repair'} — ${data.get('name')}`,
        from_name: 'Appliance Service Experts Website',
        name: data.get('name'),
        phone: data.get('phone'),
        service: data.get('service'),
        message: data.get('message') || 'No message provided',
        botcheck: '',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10 px-6">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">We'll Call You Shortly!</h3>
        <p className="text-gray-600">
          Thanks for reaching out. Our team will contact you within 30 minutes.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 btn-outline text-sm"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="lead-name" className="block text-sm font-semibold text-gray-700 mb-1">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Ravi Kumar"
          className={`w-full border rounded-xl px-4 py-3 text-base text-gray-900
                      focus:outline-none focus:ring-2 focus:ring-brand-500
                      ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="lead-phone" className="block text-sm font-semibold text-gray-700 mb-1">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. 9876543210"
          maxLength={10}
          className={`w-full border rounded-xl px-4 py-3 text-base text-gray-900
                      focus:outline-none focus:ring-2 focus:ring-brand-500
                      ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="lead-service" className="block text-sm font-semibold text-gray-700 mb-1">
          Appliance / Service Needed
        </label>
        <select
          id="lead-service"
          name="service"
          className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-base
                     text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <option value="">Select appliance…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message — hidden in compact mode */}
      {!compact && (
        <div>
          <label htmlFor="lead-message" className="block text-sm font-semibold text-gray-700 mb-1">
            Describe the Problem (optional)
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={3}
            placeholder="e.g. AC not cooling, strange noise from washing machine…"
            className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-base
                       text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
          />
        </div>
      )}

      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please call us directly at{' '}
          <a href="tel:+919344809038" className="font-semibold underline">93448 09038</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-secondary w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </span>
        ) : (
          'Get a Free Callback →'
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We'll call you back within 30 minutes. No spam, ever.
      </p>
    </form>
  );
}
