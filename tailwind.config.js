/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  safelist: [
    "bg-alertDarkError",
    "bg-alertLightError",
    "bg-alertDarkWarning",
    "bg-alertLightWarning",
    "bg-alertDarkSuccess",
    "bg-alertLightSuccess",
    "bg-alertDarkInfo",
    "bg-alertLightInfo",
  ],
  theme: {
    extend: {
      colors: {
        creemy: "#F8F7FF",
        lightPurple: "#B8B8FF",
        normalPurple: "#9381FF",
        darkPurple: "#453AA4",

        alertDarkError: "#e90707b3",
        alertLightError: "rgba(190, 1, 1, 1)", //rgba(208, 1, 1, 0.5)
        alertDarkWarning: "rgb(236, 202, 0, 0.62)",
        alertLightWarning: "rgb(236, 202, 0, 0.62)",
        alertDarkSuccess: "rgba(0, 136, 0, 0.7)",
        alertLightSuccess: "rgba(0, 136, 0, 0.6)",
        alertDarkInfo: "rgba(7, 144, 250, 0.7)",
        alertLightInfo: "rgba(7, 144, 250, 0.6)",
      },
    },
    minWidth: {
      "1/2": "50%",
    },
  },
  plugins: [],
};
