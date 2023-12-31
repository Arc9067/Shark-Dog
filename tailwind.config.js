/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: { black: "#070707" },
      fontFamily: {
        Sumana: ["Sumana", "sans-serif"],
        spicyRice: ["Spicy Rice", "sans-serif"],
        Rakkas: ["Rakkas", "sans-serif"],
      },
    },
  },
  plugins: [],
};
