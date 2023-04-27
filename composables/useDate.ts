import moment from "moment";
import { computed } from "vue";

export const useDate = (date: Date, format: string) => {
  const formattedDate = computed(() => {
    return moment(date).format(format);
  });

  return {
    formattedDate,
  };
};
