/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage : {
        'img_header' : "url('/images/desktop/image-header.jpg')",
        'img_header_mb' : "url('/images/mobile/image-header.jpg')",
        'cerises' : "url('/images/mobile/image-graphic-design.jpg')",
        'cerises_dsk' : "url('/images/desktop/image-graphic-design.jpg')",
        'clementines' : "url('/images/mobile/image-photography.jpg')", 
        'clementines_dsk' : "url('/images/desktop/image-photography.jpg')"
      },
      fontFamily: {
        'Barlow' : ['Barlow', 'sans-serif'],
        'Fraunces' : ['Fraunces', 'serif'],
      },
      colors : {
        'gris-p': 'hsl(232, 10%, 55%)',
        'titres' : 'hsl(212, 27%, 19%)',
        'barre-more' : 'hsla(51, 100%, 49%, 40%)',
        'barre-more-pink' : 'hsla(7, 99%, 70%, 40%)',
        'cerises' : 'hsl(167, 40%, 24%)',
        'clementine' : 'hsl(198, 62%, 26%)',
        'grey-client' : 'hsl(210, 4%, 67%)',
        'client-p' : 'hsl(212, 27%, 19%)',
        'footer' : 'rgb(159, 210, 197)',
        'svg' : 'rgb(68,119,105)',
        'dark-blue' : 'hsl(212, 27%, 19%)'
      },
      letterSpacing: {
        'more-wide':'.4em',
      },
      screens : {
        'dsk': '1440px',
        'mb': '375px'
      },
      height : {
        '599' : '599px'
      },
      width : {
        '360' : '360px',
        '1440' : '1440px',
      }
    },
  },
  plugins: [],
}
