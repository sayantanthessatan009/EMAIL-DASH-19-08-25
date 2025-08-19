/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // 👈 picks up all React/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
