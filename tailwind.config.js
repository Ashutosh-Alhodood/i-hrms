/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/pages/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2fbf6',
          100: '#e6f7ef',
          200: '#c9efe0',
          300: '#9fe5c6',
          400: '#4fd3a0',
          500: '#16b67f', // main brand green
          600: '#12986a',
          700: '#0e7a52',
          800: '#0b5b3b',
          900: '#063922'
        },
        accent: {
          500: '#6f5cff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      },
      boxShadow: {
        'card': '0 6px 20px rgba(2,6,23,0.06)'
      }
    }
  },
  plugins: []
}