import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nouri: {
          black: '#111111',
          red: '#d32f2f',
          'red-dark': '#b71c1c',
          'red-light': '#A64444',
          gray: '#f9f9f9',
          'gray-mid': '#666666',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        float: '0 10px 30px rgba(211,47,47,0.4)',
        cart: '-5px 0 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
