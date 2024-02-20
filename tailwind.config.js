/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00CD8F',
        'secondary-gray': '#EEEEEE',
        'secondary-blue' : '#17181C'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

