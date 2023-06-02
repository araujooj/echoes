// @ts-check

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
  extend: {
    colors: {
      brand: '#240046',
      primary: '#99e28d',
      secondary: '#e9d6fa',
      accent: '#bc85ef',
    },
  },
}

module.exports = {
  theme,
  variants: {
    extend: {
      boxShadow: ['hover'],
      translate: ['hover'],
    },
  },
}
