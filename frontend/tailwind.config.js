/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FFCE1A',
        'secondary':'#0d0842',
        'blackBG':'#F3F3F3',
        'Favorite':'#ff5841'

      },
      fontFamily: {
        'primary':["Montserrat", "sans-serif"],
        'secondary':["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};

