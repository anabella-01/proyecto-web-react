/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors:{
      "primary-color":   "#5EB9F0",
      "paragraph-color": "#60697B",
      "heading-color":   "#343F52",
      "skyblue":         "#E5F4FD",
      "white":           "#fff",
      "light-grey":      "#F0F8FE",
      "gray":            "#FEFEFE",
      "footer-p":        "#CACACA",
    },
  },
  plugins: [],
}

