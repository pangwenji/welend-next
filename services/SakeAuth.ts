import * as  ClientOAuth2 from "client-oauth2";
import config from "../config";
import AppConfig from "../lib/AppConfig";
import mapToServerLocale from "../lib/mapToServerLocale";
import { readCookie } from "../services/utils";

interface SakeAuthConfig {
  mobile?: string;
  locale?: string;
  email?: string;
  amount?: string;
  tenor?: string;
  loan_type?: string;
}

export default (sakeAuthConfig: SakeAuthConfig) => {
  const { mobile, email, amount, tenor, loan_type, locale } = sakeAuthConfig;
  const encodedState = readCookie("state");
  const serverLocale = mapToServerLocale(locale);
  const options = {
    clientId: config.clientId,
    accessTokenUri: config.accessTokenUri,
    authorizationUri: config.authorizationUri.replace("{locale}", serverLocale),
    redirectUri: config.sakeUIRedirectUri,
    query: {
      mobile,
      email,
      loan_amount: amount,
      loan_tenor: tenor,
      loan_type,
    },
    scopes: ["user_welend"],
    state: encodedState,
  };
  return new ClientOAuth2(options);
};
