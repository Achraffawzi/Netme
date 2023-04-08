import axios, { AxiosInstance } from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const axiosPublic: AxiosInstance = axios.create({
    baseURL: config.public?.API_URL,
  });

  return {
    provide: {
      axiosPublic: axiosPublic,
    },
  };
});
