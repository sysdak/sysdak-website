/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#F0F8FF',
          100: '#E1EFFF',
          200: '#C3DFFF',
          300: '#A4CFFF',
          400: '#86BFFF',
          500: '#68AFFF',
          600: '#4A9FFF',
          700: '#0F52BA', // Primary blue
          800: '#0A3A8C',
          900: '#05245E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};