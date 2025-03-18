/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        secondary: "#E6C200",
        background: "#0D0D0D",
        lightgray: "#F5F5F5",
        darkgray: "#333333",
        hovercolor: "#E6C200",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      boxShadowwhite: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
