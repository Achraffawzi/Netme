import { defineStore } from "pinia";
import { IUserResponse } from "~/types";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
  }),

  actions: {
    setUser(payload: Partial<IUserResponse>) {
      this.user = { ...this.user, ...payload };
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(this.user));
      }
    },
  },
});
