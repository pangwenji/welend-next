import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  toggleTracker: [],
  track: ["mobile", "amount"],
  trackSuccess: ["results"],
  trackFailure: ["trackError"],
}, {
  prefix: "TRACKER_",
});

export const TrackerTypes = Types;
export const TrackerActions = Creators;

export interface TrackerResults {
  applicationId: string;
  history: Array<{time: string; state: string}>;
  nextAction: string;
  state: string;
  url: string;
}

export interface Tracker {
  active: boolean;
  mobile?: string;
  amount?: string;
  results?: TrackerResults;
}

export const INITIAL_STATE: Tracker = {
  active: false,
  results: null,
};

export const initialState = Immutable.fromJS(INITIAL_STATE);
export type TrackerRecord = Immutable.Record<Tracker>;
export type TrackerAction = Tracker & Action;

export const toggleTracker: Reducer<TrackerRecord> =
  (state: TrackerRecord) => {
    const active = state.get("active");
    return state.merge({
      active: !active,
      results: null,
    });
};

export const trackSuccess: Reducer<TrackerRecord> =
(state: TrackerRecord, action: TrackerAction) => {
  const { results } = action;
  return state.merge({
    results,
  });
};

export const TrackerReducer = createReducer(initialState, {
  [Types.TOGGLE_TRACKER]: toggleTracker,
  [Types.TRACK_SUCCESS]: trackSuccess,
});

export default TrackerReducer;
