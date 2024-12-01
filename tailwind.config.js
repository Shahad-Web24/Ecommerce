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
        'lato':["Lato", "sans-serif"]
      },
      colors: {
        'Common': '#FB2E86'
      }
    },
  },
  plugins: [],
}

