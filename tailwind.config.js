/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#2180FA",
        bgColor:"#F5F7FB",
        darkcolorCard:"#282828",
        darkcolorNav:"#575757",
        darkcolorComment:"#3f3f3f",
        darkcolorText:"#8b8b8b",
        darkcolorInput:"#3f3f3f"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
