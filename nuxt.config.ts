import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  typescript: {
    strict: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
});
