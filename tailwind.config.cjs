/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        heading: ['Junicode', 'serif'],
      },
    },
    plugins: [
      function ({ addUtilities, theme }) {
        const newUtilities = {
          '.font-heading': {
            fontFamily: theme('fontFamily.heading').join(','),
          },
        };
        addUtilities(newUtilities);
      },
      require('@tailwindcss/line-clamp'),
    ],
  },
};
