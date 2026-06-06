import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nouri Digital — Light palette
        primary: '#855300',
        'on-primary': '#ffffff',
        'primary-container': '#f59e0b',
        'on-primary-container': '#613b00',
        'primary-fixed': '#ffddb8',
        'primary-fixed-dim': '#ffb95f',
        'on-primary-fixed': '#2a1700',
        'on-primary-fixed-variant': '#653e00',
        'inverse-primary': '#ffb95f',

        secondary: '#555f6f',
        'on-secondary': '#ffffff',
        'secondary-container': '#d6e0f3',
        'on-secondary-container': '#596373',
        'secondary-fixed': '#d9e3f6',
        'secondary-fixed-dim': '#bdc7d9',
        'on-secondary-fixed': '#121c2a',
        'on-secondary-fixed-variant': '#3d4756',

        tertiary: '#9b4500',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#ff9657',
        'on-tertiary-container': '#713000',
        'tertiary-fixed': '#ffdbca',
        'tertiary-fixed-dim': '#ffb68e',
        'on-tertiary-fixed': '#331200',
        'on-tertiary-fixed-variant': '#763300',

        background: '#fff8f4',
        'on-background': '#221a12',

        surface: '#fff8f4',
        'surface-dim': '#e7d7c9',
        'surface-bright': '#fff8f4',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fff1e5',
        'surface-container': '#fbebdd',
        'surface-container-high': '#f5e6d7',
        'surface-container-highest': '#f0e0d1',
        'surface-variant': '#f0e0d1',
        'surface-tint': '#855300',
        'on-surface': '#221a12',
        'on-surface-variant': '#534434',
        'inverse-surface': '#382f25',
        'inverse-on-surface': '#feeedf',

        outline: '#867461',
        'outline-variant': '#d8c3ad',

        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // Nouri Dark palette (used with dark: variants)
        'dark-surface': '#17130a',
        'dark-surface-container': '#241f15',
        'dark-surface-container-high': '#2f291f',
        'dark-surface-container-highest': '#3a3429',
        'dark-on-surface': '#ece1d1',
        'dark-on-surface-variant': '#d3c5ac',
        'dark-primary': '#ffe1a7',
        'dark-primary-container': '#fbbf24',
        'dark-on-primary': '#402d00',
        'dark-on-primary-container': '#6c4f00',
        'dark-outline': '#9c8f79',
        'dark-outline-variant': '#4f4633',

        // Semantic
        'mpesa-green': '#4CAF50',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'label-md': ['Inter', 'sans-serif'],
        'label-sm': ['Inter', 'sans-serif'],
        'headline-lg': ['Montserrat', 'sans-serif'],
        'headline-lg-mobile': ['Montserrat', 'sans-serif'],
        'headline-md': ['Montserrat', 'sans-serif'],
        'display-lg': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      spacing: {
        base: '8px',
        'stack-sm': '4px',
        'stack-md': '12px',
        'stack-lg': '24px',
        gutter: '16px',
        'container-margin-mobile': '16px',
        'container-margin-desktop': '40px',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '0.5rem',   // buttons/inputs = 8px
        xl: '0.75rem',
        '2xl': '1rem',  // cards = 16px
        '3xl': '1.5rem', // large cards = 24px
        full: '9999px',
      },
      keyframes: {
        'status-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' },
        },
      },
      animation: {
        'status-pulse': 'status-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
