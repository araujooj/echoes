const { theme, variants } = require('app/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
  theme: {
    ...theme,
    boxShadow: {
      'primary-button': '0 20px 80px -10px #99e28d',
    },
    translate: {
      '-3': '-3px',
    },
  },
  variants: {
    ...variants,
  },
}
