import axios, { AxiosRequestConfig } from "axios";
import * as ClientOAuth2 from "client-oauth2";
import config from "../../config";
import AuthStorage from "./storage/AuthStorage";

export enum API_TYPE {
  loan = "loan",
  scan = "scan",
  static = "static",
}

export type ApiType = API_TYPE.loan | API_TYPE.scan | API_TYPE.static;

export enum LOAN_CATEGORY {
  osw = "osw",
  hsf = "hsf",
  local = "local",
}

export type LoanCategory = LOAN_CATEGORY.osw | LOAN_CATEGORY.hsf | LOAN_CATEGORY.local;

export interface ApiConfig {
  authStorage?: AuthStorage;
  options: {
    host: string;
    version?: string;
    apiType?: ApiType;
    loanCategory?: LoanCategory;
  };
}

export default class BaseApi {
  protected apiEndpoint: string;
  protected loanCategory: LoanCategory;
  private authStorage: AuthStorage;

  constructor(apiConfig: ApiConfig) {
    this.apiEndpoint = `${apiConfig.options.host}/api${apiConfig.options.version ? `/${apiConfig.options.version}` : ""}`;
    this.authStorage = apiConfig.authStorage;
    this.loanCategory = apiConfig.options.loanCategory;
    this.apiCall = this.apiCall.bind(this);
    this.protectedUserApiCall = this.protectedUserApiCall.bind(this);
  }

  protected async apiCall(method: string, url: string, data?: any, accessToken?: string, debug: boolean = false): Promise<any> {
    const request: AxiosRequestConfig = {
      method,
      url : `${this.apiEndpoint}${url}`,
      data,
    };

    if (accessToken) {
      request.headers = {
        common: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
    }

    const response = await axios(request);
    return response;
  }

  protected async protectedServerApiCall(method: string, url: string, data?: any): Promise<any> {
    const sakeAuth = new ClientOAuth2({
      clientSecret: config.clientId,
      accessTokenUri: config.accessTokenUri,
      authorizationUri: config.authorizationUri,
      redirectUri: config.redirectUri,
    });
    const token = await sakeAuth.credentials.getToken();

    if (!token) {
      throw new Error("No token stored.");
    }
    return this.apiCall(method, url, data, token.accessToken);
  }

  protected async protectedUserApiCall(method: string, url: string, data?: any): Promise<any> {
    const token = await this.authStorage.getToken();
    if (!token) {
      throw new Error("No token stored.");
    }
    return this.apiCall(method, url, data, token.access_token);
  }
}
