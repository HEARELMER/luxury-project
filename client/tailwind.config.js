
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors :{
        'dark': {
          'background': '#0f172a',
          'primary': '#dc2626',
          'secondary': '#facc15',
          
          
        },
        'light': {
          'background': 'rgba(254, 249, 195, 1)',
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