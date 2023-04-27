export const validateForm = (
  obj: { [key: string]: any },
  include: string[]
): boolean => {
  return objHasRquiredProps(obj, include);
};

export const objHasRquiredProps = (
  obj: { [key: string]: any },
  include: string[]
): boolean => {
  return include.every((el: string) => el in obj && obj[el]);
};

export const formatNumber = (number: number): string | number => {
  if (number < 1_000) return number;
  else if (number >= 1_000 && number < 1_000_000) return number / 1_000 + "k";
  else if (number >= 1_000_000 && number < 1_000_000_000)
    return number / 1_000_000 + "M";
  else return number / 1_000_000_000 + "B";
};

export const cutString = (text: string): string => {
  if (text.length <= 250) {
    return text;
  } else {
    return text.substring(0, 250);
  }
};
