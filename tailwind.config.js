/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        c_80: ["5rem", { lineHeight: "5rem", letterSpacing: "-1px" }],
        c_48: ["2.5rem", { lineHeight: "3rem", letterSpacing: "-0.5px" }],
        c_32: ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.5px" }],
        c_20b: ["1.25rem", { lineHeight: "2rem", letterSpacing: "-0.25px" }],
        c_17: ["1.0625rem", { lineHeight: "1.75rem", letterSpacing: "2.5px" }],
        c_20r: ["1.25rem", { lineHeight: "1.875rem" }],
        c_16: ["1rem", { lineHeight: "1.625rem" }],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        c_beaver: "rgb(158, 127, 102)",
        c_cgrey: "rgb(17,17,17)",
        c_mirage: "rgb(23, 25, 43)",
        c_eclay: "rgb(36, 43, 55)",
        c_sgrey: "rgb(92, 103, 121)",
      },
      fontFamily: {
        spartan: ["spartan", "sans-serif"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "Manrope",
        }),
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
