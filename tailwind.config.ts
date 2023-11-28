import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: 'var(--montserrat-font)',
      poppins: 'var(--poppins-font)',
      'dm-snans': 'var(--dm-snans-font)',
    },
    minHeight: {
      'screen-2/3': '60vh',
    },
    extend: {
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { rotate: '0deg' },
          '50%': { scale: '0.7' },
          '100%': { rotate: '360deg' },
        },
      },
      colors: {
        brand: '#AC58F5',
        darkest: '#0F172A',
        dark: '#222C42',
        mid: '#64748B',
        light: '#B1BED1',
        lightest: '#F8FBFE',
      },
    },
  },
  plugins: [],
};
export default config;
