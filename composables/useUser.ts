import { useUserStore } from "~/store/user";

export const useUser = () => {
  const user = useUserStore();
  return {
    userStore: user,
  };
};
