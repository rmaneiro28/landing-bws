/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        paragraph: ["Figtree", "serif"],
        body: ["Figtree", "serif"],
      },
      colors: {
        "white": "#FFFFFF",
        "blue": "#0B43BC",
        "dark": "#1E1E1E"
    },
  },
  plugins: [],
}};