/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0B0F19',
          accent: '#00F0FF',
          card: 'rgba(17, 25, 40, 0.75)'
        }
      }
    },
  },
  plugins: [],
}