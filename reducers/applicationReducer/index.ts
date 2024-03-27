import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  initApplication: ["locale"],
}, {
  prefix: "APPLICATION_",
});

export const ApplicationTypes = Types;
export const ApplicationActions = Creators;

export interface Application {
  locale: string;
}

export const INITIAL_STATE: Application = {
  locale: "",
};

export const initialState = Immutable.fromJS(INITIAL_STATE);
export type ApplicationRecord = Immutable.Record<Application>;
export type ApplicationAction = Application & Action;

export const initApplication: Reducer<ApplicationRecord> =
  (state: ApplicationRecord, action: ApplicationAction) => {
    const { locale } = action;
    return state.merge({
      locale,
    });
};

export const ApplicationReducer = createReducer(initialState, {
  [Types.INIT_APPLICATION]: initApplication,
});

export default ApplicationReducer;
