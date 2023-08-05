/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ['./src/**/*.{html,js,jsx,vue,ts,tsx}'],
  theme: {
    fontFamily: {
      theme: ['"Noto Sans Bassa Vah"', 'sans-serif']
    },
    extend: {
      colors: {
        cream: '#fbfbfb',
        dark: '#0a0a0a'
      },
      maxWidth: {
        'screen-4xl': '1920px'
      }
    }
  },
  plugins: []
}
