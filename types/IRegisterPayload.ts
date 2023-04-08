export interface IRegisterPayload {
  [key: string]: string | boolean | string[];
  picture: string;
  username: string;
  email: string;
  password: string;
  interests: Array<string>;
}
