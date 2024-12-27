/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf1e8',
        cyan: '#00BCD4',
        orange: '#FF6A3A',
        charcoal: '#333333',
        olive: '#3A6507',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
