/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'msm' : { 'max' : "640px"},

      'mmd' : { 'max' : "768px"},

      'mlg' : { 'max' : "1024px"},

      'mxl' : { 'max' : "12800px"},

      '2mxl' : { 'max' : "1536px"},
    },

    extend: {
      width: {
        '110': '31rem',
      }
    },
  },  
  plugins: [],
}

