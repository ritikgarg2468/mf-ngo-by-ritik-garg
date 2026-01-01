/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#d4af37',
        'brand-black': '#0a0a0a',
      }
    },
  },
  plugins: [],
}