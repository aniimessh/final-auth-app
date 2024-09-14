/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/assets/images/background.png')",
      },
      colors: {
        green: "#0D7C9C",
      },
    },
  },
  plugins: [],
};
