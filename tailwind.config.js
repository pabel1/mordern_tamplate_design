/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'764px',
      lg:'992px',
      xl:'1200px'
    },
    container:{

      center:true,
      padding:"16px"
    },
    extend: {
      colors:{
        primary:"#fd3d57",
        secondary:"#00f6ff",
        dimWhite:"#4b5563",
        bgnav:"hsl(94,59%,35%)"

      },
      fontFamily:{
        popins:["Poppins","sans-serif"]
      },
      
    },
  },
  plugins: [],
}
