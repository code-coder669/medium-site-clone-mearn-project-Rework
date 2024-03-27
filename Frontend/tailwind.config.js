/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
       "responsive-grid": "repeat(auto-fit, minmax(350px, 1fr))",
      },

      dropShadow:{
        "comment-shadow" : "rgba(0, 0, 0, 0.12) 0px 2px 8px"
      },

      fontFamily: {
        "hero-header-font": [
          "gt-super",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],

        "body-font": [
          "sohne",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "header-bg": "#FFC017",
        "heroBg": "#34AA45",
        "footBg" : " #242424"
      },

      backgroundImage: {
        "hero-bg-img" : "url(./assets/img/PNGs/bgImage.png)"
      }
    },
  },
  plugins: [],
};
