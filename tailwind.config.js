/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      /* Monokai-inspired color palette */
      primary: {
        100: "#A6E22E", // Monokai green (bright)
        200: "#A6E22E",
        300: "#A6E22E",
        400: "#A6E22E",
        500: "#A6E22E", // Main green
        600: "#8CC826", // Darker green
      },
      accent: {
        100: "#F92672", // Monokai pink/red
        200: "#F92672",
        300: "#F92672",
        400: "#F92672",
        500: "#F92672", // Main pink
        600: "#D91962", // Darker pink
      },
      secondary: {
        100: "#FD971F", // Monokai orange
        200: "#FD971F",
        300: "#FD971F",
        400: "#FD971F",
        500: "#FD971F", // Main orange
        600: "#E6861C", // Darker orange
      },
      highlight: {
        100: "#66D9EF", // Monokai cyan/blue
        200: "#66D9EF",
        300: "#66D9EF",
        400: "#66D9EF",
        500: "#66D9EF", // Main cyan
        600: "#5AC3D7", // Darker cyan
      },
      surface: {
        100: "#272822", // Monokai dark background
        200: "#3E3D32", // Lighter background
        300: "#49483E", // Even lighter
        400: "#5E5D52", // Mid-tone
        500: "#75715E", // Comment color
        600: "#8B8982", // Light grey
      },
      background: "#272822", // Main dark background
      "on-background": "#F8F8F2", // Main white text (Monokai foreground)
      white: "#FFFFFF", // Pure white
      black: "#000000", // Pure black
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      body: ['"Inter"', "Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
