/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f8f6f5',
          100: '#e8e3e1',
          200: '#d3c9c4',
          300: '#bba9a1',
          400: '#a2897e',
          500: '#8a6f62',
          600: '#6f584e',
          700: '#54433c',
          800: '#3a2e2a',
          900: '#201917',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
