module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        100: '#FEFEFE',
        200: '#F0F0F0',
        300: '#D4D4D4',
        400: '#B8B8B8',
        DEFAULT: '#808080',
        600: '#616161',
        700: '#434343',
        800: '#242424',
        900: '#151515',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
