/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGray: "#EEF1F3",
        btnBlue: "#046DFF"
      },
      screens: {
        'sm': '400px',
        // => @media (min-width: 400px) { ... }
  
        'md': '1367px',
        // => @media (min-width: 1367px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}