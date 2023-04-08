import axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const axiosPublic = axios.create({
    baseURL: config.public?.API_URL,
  });

  return {
    provide: {
      axiosPublic,
    },
  };
});
