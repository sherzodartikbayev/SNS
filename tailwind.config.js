/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111025",
        gradient: "#121327",
        yellow: "#ffdc08",
        white: "#fff",
        black: "#000",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: { 
      xs: '480px',
      ss: '620px',
      sm: "768px",
      md: '1060px',
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}