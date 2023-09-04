/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'mob': {'min': '320px', 'max': '850px'},
      'tab': {'min': '320px', 'max': '480px'},
      'lap': {'min': '320px', 'max': '480px'},
    },
    extend: {},
  },
  plugins: [],
}

