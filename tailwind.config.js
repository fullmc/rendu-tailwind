/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage : {
        'img_header' : "url('/images/mobile/image-header.jpg')",
      },
      fontFamily: {
        'Barlow' : ['Barlow', 'sans-serif'],
        'Fraunces' : ['Fraunces', 'serif'],
      },
      colors : {
        'gris-p': 'hsl(232, 10%, 55%)',
        'titres' : 'hsl(212, 27%, 19%)',
        'barre-more' : 'hsla(51, 100%, 49%, 40%)',
        'barre-more-pink' : 'hsla(7, 99%, 70%, 40%)'
      }
    },
  },
  plugins: [],
}
