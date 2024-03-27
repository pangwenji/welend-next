import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  getGiftRedemption: [],
  getGiftRedemptionSuccess: ["response"],
  getGiftRedemptionFailure: ["error"],
  updateGiftRedemptionForm: ["formFields"],
  submitGiftRedemption: [],
  submitGiftRedemptionSuccess: ["response"],
  submitGiftRedemptionFailure: ["error"],
}, {
  prefix: "GIFT_REDEMPTION_",
});

export const GiftRedemptionTypes = Types;
export const GiftRedemptionActions = Creators;

export interface  GiftRedemptionResponse {
  completed?: string;
  programName?: string;
  redemptionCode?: string;
  eligibility?: boolean;
  giftReservationEnd?: string;
  giftRedemptionDates?: string[];
  giftRedemptionCenters?: object;
}

export interface GiftRedemptionFormFields {
  mid?: string;
  redemptionCode?: string;
  giftReservationDate?: string;
  giftRedemptionCenter?: string;
}

export interface GiftRedemption extends GiftRedemptionResponse {
  formFields?: GiftRedemptionFormFields;
}

export interface Input {
  response?: GiftRedemptionResponse;
  encryptedMemberId?: string;
}

export const INITIAL_STATE: GiftRedemption = {
  formFields: {
    giftReservationDate: null,
    giftRedemptionCenter: null,
  },
};

export const initialState = Immutable.fromJS(INITIAL_STATE);
export type GiftRedemptionRecord = Immutable.Record<GiftRedemption>;
export type GiftRedemptionAction = GiftRedemption & Action & Input;

export const getGiftRedemptionSuccess: Reducer<GiftRedemptionRecord> =
(state: GiftRedemptionRecord, action: GiftRedemptionAction) => {
  const { response } = action;
  return state.merge({
    ...response,
  });
};

export const updateGiftRedemptionForm: Reducer<GiftRedemptionRecord> =
(state: GiftRedemptionRecord, action: GiftRedemptionAction) => {
  const { formFields } = action;
  const mergedFormFields = {
    formFields: {
      ...state.get("formFields"),
      ...formFields,
    },
  };
  return state.merge({
    ...mergedFormFields,
  });
};

export const submitGiftRedemptionSuccess: Reducer<GiftRedemptionRecord> =
(state: GiftRedemptionRecord, action: GiftRedemptionAction) => {
  const { response } = action;
  return state.merge({
    ...response,
  });
};

export const GiftRedemptionReducer = createReducer(initialState, {
  [Types.GET_GIFT_REDEMPTION_SUCCESS]: getGiftRedemptionSuccess,
  [Types.UPDATE_GIFT_REDEMPTION_FORM]: updateGiftRedemptionForm,
  [Types.SUBMIT_GIFT_REDEMPTION_SUCCESS]: submitGiftRedemptionSuccess,
});

export default GiftRedemptionReducer;
