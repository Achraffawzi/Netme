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
