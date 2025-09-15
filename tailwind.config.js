/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: '#49129C',
        secondary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266',
        },
        tertiary: '#EF2967',
      },

      fontFamily: {
        'work-black': ['WorkSans-Black'],
        'work-light': ['WorkSans-Light'],
        'work-medium': ['WorkSans-Medium'],
      }


    },
  },
  plugins: [],
}

 