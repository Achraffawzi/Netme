export interface IRegisterPayload {
  [key: string]: string | boolean | number | string[];
  picture: string;
  username: string;
  email: string;
  password: string;
  interests: Array<string>;
}
