/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#202225',
      },
      screens: {
        'x-sm': '410px',
      },
    },
  },
  plugins: [],
}