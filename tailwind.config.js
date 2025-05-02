/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HelveticaNeue: ['HelveticaNeue', "sans-serif"],
      },
      colors: {
        grey: "#C2C2C2",
        fontFamily: {
          HelveticaNeue: ['HelveticaNeue"', "sans-serif"],
        },
        colors: {
          grey: "#C2C2C2",
          primary: "#6F36FF",
          // "primary-dark": "#5E25EE",
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
        grey: "#C2C2C2",
        primary: "#6F36FF",
        "primary-sub": "#7A5FFF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        wave: {
          "0%, 100%": {
            transform: "translateX(-50%) translateY(0)",
          },
          "50%": {
            transform: "translateX(-50%) translateY(-20px)",
          },
        },
        modalBumpIn: {
          from: {
            transform: "translateY(3rem)",
            opacity: "0",
          },
        },
        modalBumpOut: {
          from: {
            transform: "translateY(0)",
            opacity: "0",
          },
        },
        modalOverlayFadeOut: {
          from: {
            opacity: "1",
          },
        },
      },
      animation: {
        wave: "wave 6s ease-in-out infinite",
        modalBumpIn: "modalBumpIn 400ms cubic-bezier(0.97, -0.18, 0.27, 1.55)",
        modalBumpOut:
          "modalBumpOut 400ms cubic-bezier(0.65, -0.07, 0.25, 1.24)",
        modalOverlayFadeOut: "modalOverlayFadeOut 400ms ease",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
