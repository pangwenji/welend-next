import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  toggleLoginModal: ["amount", "tenor", "loanType"],
  setStoreLoanInfo: ["amount", "tenor", "loanType"],
}, {
  prefix: "LOGIN_",
});

export const LoginModalTypes = Types;
export const LoginModalActions = Creators;

export interface LoginModal {
  active: boolean;
  amount: number;
  tenor: number;
  loanType: string;
}

export const INITIAL_STATE: LoginModal = {
  active: false,
  amount: null,
  tenor: null,
  loanType: null,
};

export const initialState = Immutable.fromJS(INITIAL_STATE);
export type LoginModalRecord = Immutable.Record<LoginModal>;
export type LoginModalAction = LoginModal & Action;

export const toggleLoginModal: Reducer<LoginModalRecord> =
  (state: LoginModalRecord, action: LoginModalAction) => {
    const active = state.get("active");
    const { amount, tenor, loanType } = action;
    return state.merge({
      active: !active,
      amount,
      tenor,
      loanType,
    });
  };

export const setStoreLoanInfo: Reducer<LoginModalRecord> =
(state: LoginModalRecord, action: LoginModalAction) => {
  const { amount, tenor, loanType } = action;
  return state.merge({
    amount,
    tenor,
    loanType,
  });
};

export const LoginModalReducer = createReducer(initialState, {
  [Types.TOGGLE_LOGIN_MODAL]: toggleLoginModal,
  [Types.SET_STORE_LOAN_INFO]: setStoreLoanInfo,
});
