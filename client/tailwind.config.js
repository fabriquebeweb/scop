module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1\/8': '12.5%',
        '2\/8': '25%',
        '3\/8': '37.5%',
        '4\/8': '50%',
        '5\/8': '62.5%',
        '6\/8': '75%',
        '7\/8': '87.5%',
        '8\/8': '100%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
