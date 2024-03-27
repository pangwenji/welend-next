import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
    initGiftRedemptionPage: [],
}, {
    prefix: "PAGE_",
});

export const PageTypes = Types;
export const PageActions = Creators;

export interface Page {
}

export const INITIAL_STATE: Page = {
};

export const immutablePageState = Immutable.fromJS(INITIAL_STATE);
export type PageRecord = Immutable.Record<Page>;
export type PageAction = Page & Action;

export const PageReducer = createReducer(immutablePageState, {
});
