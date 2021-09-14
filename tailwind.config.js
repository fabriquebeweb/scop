module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'material': ['Roboto', '"Helvetica Neue"', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#009688',
          600: '#00897B',
          700: '#00796B',
          800: '#00695C',
          900: '#004D40'
        },
        accent: {
          50: '#F1F8E9',
          100: '#DCEDC8',
          200: '#C5E1A5',
          300: '#AED581',
          400: '#9CCC65',
          500: '#8BC34A',
          600: '#7CB342',
          700: '#689F38',
          800: '#558B2F',
          900: '#33691E',
        },
        warn: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        basic: {
          light: '#F4F4F4',
          DEFAULT: '#EEEEEE'
        }
      },
      boxShadow: {
        raised: '0 2px 3px 0px #00000005, 0 2px 3px 0px #0000004D'
      },
      spacing: {
        '1\/8': '12.5%',
        '2\/8': '25%',
        '3\/8': '37.5%',
        '4\/8': '50%',
        '5\/8': '62.5%',
        '6\/8': '75%',
        '7\/8': '87.5%',
        '8\/8': '100%',
        '1\/10': '10%',
        '2\/10': '20%',
        '3\/10': '30%',
        '4\/10': '40%',
        '5\/10': '50%',
        '6\/10': '60%',
        '7\/10': '70%',
        '8\/10': '80%',
        '9\/10': '90%',
        '10\/10': '100%',
        '1\/20': '5%',
        '2\/20': '10%',
        '3\/20': '15%',
        '4\/20': '20%',
        '5\/20': '25%',
        '6\/20': '30%',
        '7\/20': '35%',
        '8\/20': '40%',
        '9\/20': '45%',
        '10\/20': '50%',
        '11\/20': '55%',
        '12\/20': '60%',
        '13\/20': '65%',
        '14\/20': '70%',
        '15\/20': '75%',
        '16\/20': '80%',
        '17\/20': '85%',
        '18\/20': '90%',
        '19\/20': '95%',
        '20\/20': '100%',
        '99': '30rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
