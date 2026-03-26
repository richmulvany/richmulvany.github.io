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
        sans: ['ui-sans-serif', 'system-ui'], // default body font
      },
      lineClamp: {
        7: '7', // adds line-clamp-7
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};