// tailwind.config.js
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2000px'
    },
    extend: {
      fontFamily: {
        "main": ['Signika']
      },
      backgroundImage: {
        'footer': "url('./src/assets/images/footer_img.webp')",
      }
    },
  },
  plugins: [],
}
