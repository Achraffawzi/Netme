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
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
  runtimeConfig: {
    public: {
      APP_NAME: "StoryBlogy",
      API_URL: process?.env?.API_URL,

      ICONS: {
        SUCCESS: "ic:baseline-check",
        WARNING: "ic:outline-warning-amber",
        ERROR: "ic:outline-error-outline",
        INFO: "ic:outline-info",
      },

      COLORS: {
        ALERT_DARK_ERROR: "alertDarkError",
        ALERT_LIGHT_ERROR: "alertLightError",
        ALERT_DARK_WARNING: "alertDarkWarning",
        ALERT_LIGHT_WARNING: "alertLightWarning",
        ALERT_DARK_SUCCESS: "alertDarkSuccess",
        ALERT_LIGHT_SUCCESS: "alertLightSuccess",
        ALERT_DARK_INFO: "alertDarkInfo",
        ALERT_LIGHT_INFO: "alertLightInfo",
      },
    },

    MONGO_URI: process?.env?.MONGO_URI,

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
