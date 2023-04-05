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
    API_URL: process?.env?.API_URL,
    CLOUDINARY_NAME: process?.env?.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process?.env?.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process?.env?.CLOUDINARY_API_SECRET,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
});
