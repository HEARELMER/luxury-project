
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      colors :{
        'dark': {
          'background': '#0f172a',
          'primary': '#dc2626',
          'secondary': '#facc15',
          
          
        },
        'light': {
          'background': '#FEF9C3',
          'primary': '#dc2626',
          'secondary': '#facc15',
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}