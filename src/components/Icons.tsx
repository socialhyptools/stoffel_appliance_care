import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { className?: string };

export function AcIcon({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="6" width="20" height="9" rx="2"/>
      <line x1="5" y1="10" x2="14" y2="10"/>
      <line x1="5" y1="12.5" x2="14" y2="12.5"/>
      <circle cx="18" cy="10.5" r="1" fill="currentColor" stroke="none"/>
      <path d="M4 18c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0"/>
    </svg>
  );
}

export function WashingMachineIcon({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="2" width="18" height="20" rx="2"/>
      <line x1="3" y1="7" x2="21" y2="7"/>
      <circle cx="12" cy="14" r="4.5"/>
      <circle cx="12" cy="14" r="1.5"/>
      <circle cx="7" cy="4.5" r="0.75" fill="currentColor" stroke="none"/>
      <circle cx="10" cy="4.5" r="0.75" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export function RefrigeratorIcon({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="5" y1="9" x2="19" y2="9"/>
      <line x1="15" y1="4" x2="15" y2="7"/>
      <line x1="15" y1="11.5" x2="15" y2="16.5"/>
    </svg>
  );
}

export function TvIcon({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  );
}

export function MicrowaveIcon({ className, ...p }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <rect x="4" y="7" width="10" height="10" rx="1"/>
      <circle cx="18" cy="10" r="1" fill="currentColor" stroke="none"/>
      <circle cx="18" cy="14" r="1" fill="currentColor" stroke="none"/>
      <line x1="16" y1="12" x2="20" y2="12"/>
    </svg>
  );
}

export function WhatsAppIcon({ className, ...p }: P) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...p}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
