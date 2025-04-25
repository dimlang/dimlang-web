/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HelveticaNeue: ['HelveticaNeue"', "sans-serif"],
      },
      colors: {
        grey: "#C2C2C2",
        primary: "#6F36FF", 
        "primary-sub": "#7A5FFF", //#7A5FFF
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(-20px)" },
        },
        // "spin-slow": {
        //   "0%": { transform: "rotate(0deg)" },
        //   "100%": { transform: "rotate(360deg)" },
        // },
      },

      animation: {
        wave: "wave 6s ease-in-out infinite",
        // "spin-slow": "spin-slow 6s linear infinite"
      },
    },
  },
  plugins: [],
};
