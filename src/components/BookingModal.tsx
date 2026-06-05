'use client';
import { useEffect } from 'react';
import { X, PhoneCall } from 'lucide-react';
import LeadForm from './LeadForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

export default function BookingModal({ isOpen, onClose, serviceName }: BookingModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Book ${serviceName}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[92vh] overflow-y-auto animate-fade-up">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-3xl z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-gray-900">Book This Service</h2>
              <p className="text-xs text-brand-600 font-semibold">{serviceName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex gap-2 px-6 pt-4 flex-wrap">
          {['₹249 Inspection', '90-Day Warranty', '30-Min Response'].map((b) => (
            <span key={b} className="text-xs text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full font-medium">
              {b}
            </span>
          ))}
        </div>

        {/* Form */}
        <div className="p-6 pt-4">
          <LeadForm defaultService={serviceName} />
        </div>
      </div>
    </div>
  );
}
