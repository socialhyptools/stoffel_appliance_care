'use client';
import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

// Replace ca-pub-XXXXXXXXXXXXXXXX with your Google AdSense Publisher ID
const PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXX';
const IS_ADSENSE_CONFIGURED = !PUBLISHER_ID.includes('XXXX');

export default function AdUnit({
  slot,
  format = 'auto',
  className = '',
  style,
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      // @ts-expect-error adsbygoogle is injected by Google
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet
    }
  }, []);

  if (!IS_ADSENSE_CONFIGURED) return null;

  return (
    /* Viewable placement: full width, natural flow, not hidden */
    <div
      className={`ad-unit w-full overflow-hidden ${className}`}
      style={style}
      aria-label="Advertisement"
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
