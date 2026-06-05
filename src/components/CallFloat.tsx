export default function CallFloat() {
  return (
    <a
      href="tel:+918838893560"
      aria-label="Call us now"
      className="fixed bottom-24 right-5 z-50 flex items-center justify-center
                 w-14 h-14 rounded-full
                 transition-transform duration-200 hover:scale-110"
      style={{ background: 'linear-gradient(135deg,#2563eb 0%,#1e3a8a 100%)', boxShadow: '0 8px 28px 0 rgba(37,99,235,0.45)' }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: 'rgba(37,99,235,0.4)' }}
        aria-hidden="true"
      />
      <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    </a>
  );
}
