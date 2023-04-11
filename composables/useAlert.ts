import { ref, onBeforeMount } from "vue";
import { IAlert, AlertTypes } from "~/types";

export const useAlert = () => {
  const config = useRuntimeConfig();
  let alert = ref<IAlert | null>(null);
  let isAlertOpen = ref<boolean>(false);

  const setAlert = (content: string, type: AlertTypes): void => {
    switch (type) {
      case "ERROR":
        alert.value = {
          content,
          iconClass: config.public.ICONS.ERROR,
          dark: config.public.COLORS.ALERT_DARK_ERROR,
          light: config.public.COLORS.ALERT_LIGHT_ERROR,
        };
        break;

      case "SUCCESS":
        alert.value = {
          content,
          iconClass: config.public.ICONS.SUCCESS,
          dark: config.public.COLORS.ALERT_DARK_SUCCESS,
          light: config.public.COLORS.ALERT_LIGHT_SUCCESS,
        };
        break;

      case "WARNING":
        alert.value = {
          content,
          iconClass: config.public.ICONS.WARNING,
          dark: config.public.COLORS.ALERT_DARK_WARNING,
          light: config.public.COLORS.ALERT_LIGHT_WARNING,
        };
        break;

      case "INFO":
        alert.value = {
          content,
          iconClass: config.public.ICONS.INFO,
          dark: config.public.COLORS.ALERT_DARK_INFO,
          light: config.public.COLORS.ALERT_LIGHT_INFO,
        };
        break;
    }

    isAlertOpen.value = true;
  };

  const clearAlert = () => {
    alert.value = null;
    isAlertOpen.value = false;
  };

  onBeforeMount(() => {
    clearAlert();
  });

  return {
    alert,
    isAlertOpen,
    setAlert,
    clearAlert,
  };
};
