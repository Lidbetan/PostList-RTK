/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}","./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'serif':['"Merriweather"'],
        'customFont': ['Montserrat', "sans-serif"],
      }
    },
  },
  plugins: [],
}

