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
    },
  },
  plugins: [],
}
