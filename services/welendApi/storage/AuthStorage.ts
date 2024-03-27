import config from "../../../config";
import { readCookie, setCookie } from "../../../services/utils";

export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  state: string;
}

export default interface AuthStorage {
  getToken(): Promise<Token | null>;
  clearToken(): Promise<void>;
}

export default class AuthStorage implements AuthStorage {
  public async getToken() {
    const token = readCookie(config.userTokenKeyName);
    return token ? JSON.parse(token) : null;
  }

  public async clearToken() {
    setCookie(config.userTokenKeyName, "", -1);
    setCookie("state", "", -1);
    setCookie("state_www", "", -1);
  }
}
