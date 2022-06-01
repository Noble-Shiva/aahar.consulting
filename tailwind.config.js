

module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx'],
  theme: {
    themeVariants: ['dark'],
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'dark'],
    textColor: ['responsive', 'dark'],
  },
  plugins: [
    require('tailwindcss-multi-theme'),
    require('tailwind-colors'),
    require('@tailwindcss/forms'),
  ],
}
