import { ref, onBeforeMount } from "vue";
import { IAlert } from "~/types";

export const useAlert = () => {
  let alert = ref<IAlert | null>(null);
  let isAlertOpen = ref<boolean>(false);

  const setAlert = (payload: IAlert | null): void => {
    alert.value = { ...payload } as IAlert | null;
    isAlertOpen.value = !!payload;
  };

  onBeforeMount(() => setAlert(null));

  return {
    alert,
    isAlertOpen,
    setAlert,
  };
};
