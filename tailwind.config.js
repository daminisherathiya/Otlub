/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    colors: {
      primary: {
        light: "#19224F",
        main: "#0D1646",
        dark: "#000A3C",
      },
      secondary: {
        main: "#FAD05E",
      },
      sucess: {
        main: "#ABCA42",
      },
      error: {
        light: "#E52628",
        main: "#F15F61",
      },
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
  important: "#html",
  prefix: "tw-",
};
