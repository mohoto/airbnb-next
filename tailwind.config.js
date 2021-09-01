module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'radical-red': {
          DEFAULT: '#FF385C',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFD1DA',
          '300': '#FF9EB0',
          '400': '#FF6B87',
          '500': '#FF385C',
          '600': '#FF0533',
          '700': '#D10027',
          '800': '#9E001D',
          '900': '#6B0014'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
