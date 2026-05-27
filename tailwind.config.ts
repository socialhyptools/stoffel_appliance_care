import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e3a8a',
          800: '#1e2f6e',
          900: '#0f1e4b',
          950: '#070e2b',
        },
        accent: {
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':    'fadeIn 0.5s ease-out both',
        'float':      'float 5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'slide-right':'slideRight 0.5s cubic-bezier(0.16,1,0.3,1) both',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow':  'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
      },
      boxShadow: {
        'soft':       '0 2px 12px 0 rgba(0,0,0,0.05)',
        'card':       '0 4px 24px 0 rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.04)',
        'card-hover': '0 16px 48px 0 rgba(0,0,0,0.13), 0 4px 12px 0 rgba(0,0,0,0.06)',
        'cta':        '0 8px 24px 0 rgba(249,115,22,0.38)',
        'cta-hover':  '0 14px 36px 0 rgba(249,115,22,0.48)',
        'brand':      '0 8px 28px 0 rgba(29,78,216,0.28)',
        'brand-lg':   '0 16px 48px 0 rgba(29,78,216,0.35)',
        'form':       '0 24px 64px 0 rgba(0,0,0,0.18), 0 4px 16px 0 rgba(0,0,0,0.08)',
        'glass':      '0 8px 32px 0 rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.12)',
        'inner-sm':   'inset 0 2px 4px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
