/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Blue": "#5847eb",
        "light-red-work": "#ff8c66",
        "soft-blue-play": "#56c2e6",
        "light-red-study": "#ff5c7c",
        "lime-green-exercise": "#4acf81",
        "violet-social": "#7536d3",
        "soft-orange": "#f1c65b",

        "very-dark-blue": "#0f1424",
        "dark-blue": "#1c1f4a",
        "desaturated-blue": "#6f76c8",
        "pale-blue": "#bdc1ff"
      },
      screens: {
        'md2': '820px',
      }
    },
  },
  plugins: [],
}

