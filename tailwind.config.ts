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
    extend: {
      transitionProperty: {
        menu: 'transform, opacity, background',
      },
      transitionTimingFunction: {
        'menu-ease': 'cubic-bezier(0.77,0.2,0.05,1.0)',
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
        'slide-from-top': '1s ease-out 0s 1 slideFromTop',
      },
      keyframes: {
        rotate: {
          '0%': { rotate: '0deg' },
          '50%': { scale: '0.7' },
          '100%': { rotate: '360deg' },
        },
        slideFromTop: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      minHeight: {
        'screen-2/3': '60vh',
        'screen-8/9': '85vh',
      },
      colors: {
        brand: '#AC58F5',
        darkest: '#0F172A',
        dark: '#222C42',
        mid: '#64748B',
        light: '#B1BED1',
        lightest: '#F8FBFE',
      },
      backgroundImage: {
        'fade-opacity-gradient': 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
      },
      spacing: {
        '8xl': '90rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;
