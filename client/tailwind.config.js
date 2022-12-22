/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "1bg": "hsl(200, 100%, 20%)",
        "2bg": "#6cd"
      }
    },
  },
  plugins: [],
}