import { IUserResponse } from "./IUserResponse";

export interface IStatusResponse {
  statusCode: number;
  statusMessage: string | IUserResponse;
}
