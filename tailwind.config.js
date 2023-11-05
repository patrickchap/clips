module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,js}",
    "./src/app/components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        secondary: '#af1763',
        'secondary-light': '#cc4488',
        primary: '#191c24'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
