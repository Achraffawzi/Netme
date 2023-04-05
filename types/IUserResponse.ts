export interface IUserResponse {
  _id: string;
  username: string;
  email: string;
  picture: string;
  interests?: Array<string>;
}
