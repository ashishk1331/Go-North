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
        black: "#191825",
        voilet: "#865DFF",
        pink: "#E384FF",
        "light-pink": "#FFA3FD",
      },
    },
  },
  plugins: [],
};
