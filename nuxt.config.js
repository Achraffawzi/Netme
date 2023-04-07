import { resolve } from "path";
export default defineNuxtConfig({
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap",
      },
    ],
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },

  typescript: {
    strict: true,
  },
  css: ["~/assets/css/global.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  runtimeConfig: {
    public: {
      APP_NAME: "StoryBlogy",
    },

    MONGO_URI: process?.env?.MONGO_URI,
    API_URL: process?.env?.API_URL,

    CLOUDINARY_NAME: process?.env?.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process?.env?.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process?.env?.CLOUDINARY_API_SECRET,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  components: [
    {
      path: "~/components/",
      // path: "~/components/**/*.vue",
      // path: "~/components/core",
      // path: "~/components/layout",
      pathPrefix: false,
    },
  ],
});
