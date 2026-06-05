'use client';
import { useState } from 'react';
import { User, Phone, Wrench, Send } from 'lucide-react';

// Formsubmit.co — no signup needed. First submission triggers a one-time
// verification email to this address. Click the link in that email once, done.
const RECIPIENT_EMAIL = 'srvservice174@gmail.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

const services = [
  'AC Repair & Service',
  'Washing Machine Repair',
  'Refrigerator Repair',
  'TV Repair',
  'Microwave Repair',
  'Other',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function LeadForm({ compact = false, defaultService = '' }: { compact?: boolean; defaultService?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const name = (data.get('name') as string).trim();
    const phone = (data.get('phone') as string).trim();
    if (!name) errs.name = 'Name is required';
    if (!phone) errs.phone = 'Phone is required';
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
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          service: data.get('service') || 'Not specified',
          message: data.get('message') || '—',
          _subject: `New Booking: ${data.get('service') || 'Repair'} — ${data.get('name')}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const json = await res.json();
      setStatus(json.success === 'true' || json.success === true ? 'success' : 'error');
      if (json.success === 'true' || json.success === true) form.reset();
    } catch { setStatus('error'); }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8 px-4 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">We&apos;ll Call You Shortly!</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Our team will reach out within <span className="font-semibold text-brand-600">30 minutes</span>. Get ready for fast, expert service!
        </p>
        <button onClick={() => setStatus('idle')}
          className="mt-5 text-sm text-brand-600 hover:underline font-medium">
          Submit another request →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {/* Name */}
      <div>
        <label htmlFor="lead-name" className="form-label">
          Your Name <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <User className="w-4 h-4" />
          </span>
          <input id="lead-name" name="name" type="text" autoComplete="name"
            placeholder="e.g. Ravi Kumar"
            className={`form-input pl-10 ${errors.name ? '!border-red-400 !bg-red-50' : ''}`} />
        </div>
        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="lead-phone" className="form-label">
          Mobile Number <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <Phone className="w-4 h-4" />
          </span>
          <input id="lead-phone" name="phone" type="tel" autoComplete="tel"
            placeholder="10-digit mobile number" maxLength={10}
            className={`form-input pl-10 ${errors.phone ? '!border-red-400 !bg-red-50' : ''}`} />
        </div>
        {errors.phone && <p className="form-error">{errors.phone}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="lead-service" className="form-label">Appliance Needed</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <Wrench className="w-4 h-4" />
          </span>
          <select id="lead-service" name="service" className="form-select pl-10" defaultValue={defaultService}>
            <option value="">Select appliance…</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Message — hidden in compact mode */}
      {!compact && (
        <div>
          <label htmlFor="lead-message" className="form-label">
            Problem Description <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea id="lead-message" name="message" rows={3}
            placeholder="Describe the issue, e.g. AC not cooling, machine making noise…"
            className="form-input resize-none" />
        </div>
      )}

      {status === 'error' && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please call us at{' '}
          <a href="tel:+918838893560" className="font-semibold underline">88388 93560</a>.
        </div>
      )}

      <button type="submit" disabled={status === 'loading'}
        className="btn-secondary btn btn-lg w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" /> Get Free Callback
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We call back within 30 minutes · No spam · 100% free
      </p>
    </form>
  );
}
