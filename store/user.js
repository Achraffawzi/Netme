import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore("user", {
  state: () => ({
    // user: process.client ? JSON.parse(localStorage.getItem("user")) : null,
    // user: useStorage("userStore", null),
  }),

  actions: {
    setUser(payload) {
      this.user = { ...this.user, ...payload };
      // if (process.client) {
      // localStorage.setItem("user", JSON.stringify(this.user));
      // }
    },
  },

  persist: {
    storage: persistedState.localStorage,
  },
});
