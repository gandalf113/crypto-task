/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          dark: '#18181C',
          light: '#232331'
        }
      }
    }
  },
  plugins: [],
}
