module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sidebarbg': '#181818',
        'mainbg': '#1d1d1d',
        'hoverb': '#08fdd8',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
