/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#e5e5e4",
        header: "#e4e4e3",
        cardBg: "#f6f6f6",
        logo: "#8a8a8a",
        dotRed: "#f08988",
        dotYellow: "#f0d882",
        dotGreen: "#8fdea5",
      },
    },
  },
  plugins: [],
}
