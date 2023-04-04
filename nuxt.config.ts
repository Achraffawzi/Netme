import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  typescript: {
    strict: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    MONGO_URI: process?.env?.MONGO_URI,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
});
