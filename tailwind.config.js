/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgb(2, 132, 199)", // Blue
        secondary: {
          DEFAULT: "rgb(96, 99, 106)", // Medium Gray
          dark: "rgb(77, 77, 79)", // Dark Gray
          neutral: "rgb(112, 112, 112)", // Neutral Gray
          light: "rgb(169, 169, 169)", // Light Gray
        },
        accent: {
          red: "rgb(244, 67, 54)", // Red
          green: "rgb(0, 128, 0)", // Green
          orange: "rgb(255, 165, 0)", // Orange
          gold: "rgb(255, 215, 0)", // Gold
          deepOrange: "rgb(255, 87, 34)", // Deep Orange
        },
        background: {
          light: "rgb(248, 249, 250)", // Light Gray
          veryLight: "rgb(236, 236, 236)", // Very Light Gray
          DEFAULT: "rgb(245, 245, 245)", // Default Light Gray
          white: "rgb(255, 255, 255)", // White
        },
        text: {
          darkGray: "rgb(33, 37, 41)", // Dark Gray
          charcoalGray: "rgb(60, 60, 60)", // Charcoal Gray
          slateGray: "rgb(50, 50, 50)", // Slate Gray
          DEFAULT: "rgb(80, 80, 80)", // Default Dark Gray
          medium: "rgb(90, 90, 90)", // Medium Dark Gray
        },
      },
    },
  },
  plugins: [],
};
