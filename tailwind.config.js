/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['EB Garamond', 'serif'], // fancy font for headers
        sans: ['ui-sans-serif', 'system-ui'],      // keep default for body
      },
    },
  },
  plugins: [],
};