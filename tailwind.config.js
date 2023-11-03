/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "#000000",
        dark_blue: "#4E4FEB",
        light_blue: "#068FFF",
        gray: "#EEEEEE",
        maroon: "#DA1C5C",
      },
    },
  },
  plugins: [],
};
