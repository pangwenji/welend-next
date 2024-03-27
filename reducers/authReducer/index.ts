import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  handleRedirectForAuthenticatedUser: ["loanInfo"],
  login: ["mobile", "loanInfo", "locale"],
  logout: [],
  setTokenFromCookie: [],
  setLoanInfoToCookie: [],
  setStoreToken: ["token"],
}, {
  prefix: "AUTH_",
});

export const AuthTypes = Types;
export const AuthActions = Creators;

export interface Token {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  expiresAt: number;
  state: string;
}

export interface LoanInfo {
  email?: string;
  amount: number;
  tenor: number;
  loanType: string;
}

export interface Auth {
  expiresAt?: number;
  token?: Token;
}

export interface Input {
  mobile: string;
  locale: string;
  loanInfo: LoanInfo;
}

export const INITIAL_STATE: Auth = {
  token: null,
};

export const initialState = Immutable.fromJS(INITIAL_STATE);
export type AuthRecord = Immutable.Record<Auth>;
export type AuthAction = Auth & Action & Input;

export const setStoreToken: Reducer<AuthRecord> =
  (state: AuthRecord, action: AuthAction) => {
    const { token } = action;
    return state.merge({
      token,
    });
  };

export const logout: Reducer<AuthRecord> =
(state: AuthRecord, action: AuthAction) => {
  return state.merge({
    ...INITIAL_STATE,
  });
};

export const AuthReducer = createReducer(initialState, {
  [Types.SET_STORE_TOKEN]: setStoreToken,
  [Types.LOGOUT]: logout,
});

export default AuthReducer;
