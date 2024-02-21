
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      colors :{
        primary: ' rgb(255, 15, 15)',
        secondary: ' rgb(255, 15, 15)',
        "background-100": "#1A1A1A",
        "background-200": "#292929",
        "background-300": "#404040",
        "background-400": "#5B5B5B",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}