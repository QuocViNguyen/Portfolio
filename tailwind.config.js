module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
