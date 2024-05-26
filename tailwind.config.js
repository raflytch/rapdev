/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#2C22A9",
        backgroundColor: "#F0F0F6",
      },
    },
  },
  plugins: [],
};
