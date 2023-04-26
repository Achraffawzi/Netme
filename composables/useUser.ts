import { useUserStore } from "~/store/user";

export const useUser = () => {
  const userStore = useUserStore();
  return {
    userStore,
    user: userStore.user,
    setUser: userStore.setUser,
  };
};
