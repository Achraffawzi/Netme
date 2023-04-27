import moment from "moment";
import { computed } from "vue";

export const useDate = (data: Date) => {
  const formattedDate = computed((date) => {
    return moment().format("LL");
  });

  return {
    formattedDate,
  };
};
