/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep forest green — primary brand color (growth, productivity)
        forest: {
          50: '#f1f8f4',
          100: '#dceee3',
          200: '#bbddc9',
          300: '#8bc4a4',
          400: '#57a47b',
          500: '#36875c',
          600: '#256b48',
          700: '#1d5539',
          800: '#19432e',
          900: '#163727',
          950: '#0a2018',
        },
        // Gold / amber — accent (hope, justice)
        gold: {
          50: '#fdf9ec',
          100: '#faf0c9',
          200: '#f5df90',
          300: '#f0c757',
          400: '#ecb231',
          500: '#d99519',
          600: '#bc7214',
          700: '#975314',
          800: '#7c4217',
          900: '#683817',
          950: '#3c1d09',
        },
        // Neutral warm tones
        sand: {
          50: '#faf8f5',
          100: '#f2eee6',
          200: '#e6dccd',
          300: '#d4c4ac',
          400: '#bda585',
          500: '#a98a64',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #163727 0%, #1d5539 50%, #256b48 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d99519 0%, #f0c757 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(10,32,24,0.85) 0%, rgba(22,55,39,0.7) 50%, rgba(22,55,39,0.92) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'soft': '0 2px 20px -4px rgba(22, 55, 39, 0.15)',
        'card': '0 8px 40px -12px rgba(22, 55, 39, 0.2)',
        'gold': '0 4px 24px -8px rgba(217, 149, 25, 0.4)',
      },
    },
  },
  plugins: [],
};
