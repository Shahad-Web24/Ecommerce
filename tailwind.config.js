/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'josef':["Josefin Sans", "sans-serif"],
        'lato':["Lato", "sans-serif"],
        'Roboto':["Roboto", "sans-serif"],
      },
      colors: {
        'Common': '#FB2E86',
        'semiCommon': '#151875'
      },
      boxShadow: {
        'Shadow': '*/-webkit-box-shadow: -4px 5px 37px 8px rgba(0, 0, 0, 0.37);-moz-box-shadow: -4px 5px 37px 8px rgba(0, 0, 0, 0.37);box-shadow: -4px 5px 37px 8px rgba(0, 0, 0, 0.37);'
      }
    },
  },
  plugins: [],
}

