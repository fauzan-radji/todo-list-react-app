const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecf6fe",
          100: "#b1dafb",
          200: "#77bef8",
          300: "#3da2f5",
          400: "#0c85e9",
          500: "#0a6fc2",
          600: "#08599b",
          700: "#064374",
          800: "#042c4e",
          900: "#021627",
        },
        secondary: "#084172",
        accent: "#ffc085",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
