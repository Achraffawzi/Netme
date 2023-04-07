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
      },
    },
  },
  plugins: [],
};
