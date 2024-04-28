/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage:{
        'normal-body':"url('/images/bg8.jpg')",
        'dark-body':"url('/images/bg6.jpg')"
      },
      fontFamily:
      {
        itali: ["Italianno"],
        mono:["Roboto Mono"], 
      },
      animation: {
        fadeIn: 'fadeIn ease-in-out 0.5s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

