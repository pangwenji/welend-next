import * as Immutable from "immutable";
import * as moment from "moment";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";
import AppConfig from "../../lib/AppConfig";

const { Types, Creators } = createActions({
  updateCurrentServerTime: ["currentServerTime"],
}, {
  prefix: "LOGIN_",
});

export const PromotionOfferTypes = Types;
export const PromotionOfferActions = Creators;

export interface PromotionOffer {
  currentServerTime: string;
}

export const INITIAL_STATE: PromotionOffer = {
  currentServerTime: new Date().getTime().toString(),
};

export const initialState = Immutable.fromJS(INITIAL_STATE);
export type PromotionOfferRecord = Immutable.Record<PromotionOffer>;
export type PromotionOfferAction = PromotionOffer & Action;

export const updateCurrentServerTime: Reducer<PromotionOfferRecord> =
  (state: PromotionOfferRecord, action: PromotionOfferAction) => {
    const { currentServerTime } = action;
    return state.merge({
      currentServerTime,
    });
  };

export const PromotionOfferReducer = createReducer(initialState, {
  [Types.UPDATE_CURRENT_SERVER_TIME]: updateCurrentServerTime,
});
