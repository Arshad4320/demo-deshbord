/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#156BCA",
        secondary: "#E7E7E7",
      },
      backgroundColor: {
        primary: "#156BCA",
        secondary: "#E7E7E7",
      },
    },
  },
  plugins: [],
};
