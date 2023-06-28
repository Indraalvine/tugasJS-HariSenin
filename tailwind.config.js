/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors:
    {
      'primary' : '#f8edeb',
      'secondary' : '#ffe5d9',
      'third' : '#a68c94'
    }},
  },
  plugins: [require("daisyui")],
}

