/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        creemy: "#F8F7FF",
        lightPurple: "#B8B8FF",
        normalPurple: "#9381FF",
        darkPurple: "#453AA4",

        alertDarkError: "rgba(255, 0, 0, 0.7)",
        alertLightError: "rgba(255, 0, 0, 0.2)",
        alertDarkWarning: "rgba(255, 135, 46, 0.7)",
        alertLightWarning: "rgba(255, 135, 46, 0.2)",
        alertDarkSuccess: "rgba(0, 136, 0, 0.7)",
        alertLightWarning: "rgba(0, 136, 0, 0.2)",
        alertDarkInfo: "rgba(7, 144, 250, 0.7)",
        alertLightInfo: "rgba(7, 144, 250, 0.2)",
      },
    },
    minWidth: {
      "1/2": "50%",
    },
  },
  plugins: [],
};
