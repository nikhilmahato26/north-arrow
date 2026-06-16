/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4A017",
          50: "#FBF6E9",
          100: "#F5E9C4",
          200: "#EDD489",
          300: "#E3BD4E",
          400: "#D4A017",
          500: "#B8890F",
          600: "#946C0C",
          700: "#6F510A",
          800: "#4A3606",
          900: "#251B03",
        },
        ink: {
          DEFAULT: "#0B0B0B",
          black: "#0B0B0B",
          charcoal: "#171717",
          800: "#1F1F1F",
          700: "#2A2A2A",
        },
        ivory: "#F8F5F0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.25em",
        wide2: "0.18em",
      },
      boxShadow: {
        glass: "0 8px 40px rgba(0,0,0,0.45)",
        gold: "0 10px 40px rgba(212,160,23,0.25)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg, #E3BD4E 0%, #D4A017 50%, #946C0C 100%)",
        "dark-grad": "linear-gradient(180deg, #0B0B0B 0%, #171717 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
