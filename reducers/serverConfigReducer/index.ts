import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  getLoanOptions: ["productCode"],
  setLoanOptions: ["loanOptions"],
  getLoanOptionsSuccess: ["loanOptions"],
}, {
    prefix: "SERVER_CONFIG_",
  });

export const ServerConfigTypes = Types;
export const ServerConfigActions = Creators;

export interface ServerConfig {
  init: boolean;
  calculatorConfig: CalculatorConfig;
  loanTypes: Option[];
}

export interface LoanOptions {
  min_amount: number;
  max_amount: number;
  tenor_options: number[];
}

export interface CalculatorConfig {
  amountLower: number;
  amountUpper: number;
  tenorLower: number;
  tenorUpper: number;
  tenorOptions: number[];
}

export interface Option {
  name: string;
  id: number | string;
  code?: string | null;
  children?: Option[];
}

export interface SetLoanOptions extends Action {
  loanOptions: LoanOptions;
}

export interface GetLoanOptions {
  locale: string;
  productCode?: string;
}

export type ServerConfigRecord = Immutable.Record<ServerConfig>;
export type ServerConfigAction = Action & SetLoanOptions & GetLoanOptions;

export const setLoanOptions: Reducer<ServerConfigRecord, SetLoanOptions> =
  (state: ServerConfigRecord, { loanOptions }: SetLoanOptions) => {
    if (loanOptions) {
      const tenorOptions = loanOptions.tenor_options.filter((n) => n >= 30);
      return state
        .set("init", true)
        .mergeIn(["calculatorConfig"], {
          amountLower: loanOptions.min_amount,
          amountUpper: loanOptions.max_amount,
          tenorLower: tenorOptions[0],
          tenorUpper: tenorOptions[tenorOptions.length - 1],
          tenorOptions,
        });
    }
    return state.set("init", true);
  };

export const getLoanOptionsSuccess: Reducer<ServerConfigRecord, SetLoanOptions> =
  (state: ServerConfigRecord, { loanOptions }: SetLoanOptions) => {
    if (loanOptions) {
      const tenorOptions = loanOptions.tenor_options.filter((n) => n >= 30);
      return state
        .mergeIn(["loanOptions"], {
          amountLower: loanOptions.min_amount,
          amountUpper: loanOptions.max_amount,
          tenorLower: tenorOptions[0],
          tenorUpper: tenorOptions[tenorOptions.length - 1],
          tenorOptions,
        });
    }
    return state.set("init", true);
  };

const initialState = {
  init: false,
  calculatorConfig: {
    amountLower: 5000,
    amountUpper: 800000,
    tenorLower: 90,
    tenorUpper: 1800,
    tenorOptions: [90, 120, 150, 180, 360, 540, 720, 900, 1080, 1260, 1440, 1620, 1800],
  },
  loanTypes: [
    {
      name: "personal-loan",
      id: "personal_loan",
    },
    {
      name: "no-doc-loan",
      id: "no_doc_loan",
    },
    {
      name: "balance-transfer",
      id: "balance_transfer",
    },
    {
      name: "property-owner-loan",
      id: "property_owner_loan",
    },
  ],
};

export const ServerConfigReducer = createReducer(initialState, {
  [Types.SET_LOAN_OPTIONS]: setLoanOptions,
  [Types.GET_LOAN_OPTIONS_SUCCESS]: getLoanOptionsSuccess,
});

export default ServerConfigReducer;
