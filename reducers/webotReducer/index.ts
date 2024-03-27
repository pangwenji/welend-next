import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  toggleWebot: [],
  toggleWebotFullscreen: [],
  toggleWebotControlPanel: [],
}, {
  prefix: "WEBOT_",
});

export const WebotTypes = Types;
export const WebotActions = Creators;

export interface Webot {
  active: boolean;
  fullscreen: boolean;
  controlPanel: boolean;
}

export const INITIAL_STATE: Webot = {
  active: false,
  fullscreen: false,
  controlPanel: true,
};

export interface Input {
  conversationId: string;
}

export const initialState = Immutable.fromJS(INITIAL_STATE);
export type WebotRecord = Immutable.Record<Webot>;
export type WebotAction = Webot & Action & Input;

export const toggleWebot: Reducer<WebotRecord> =
  (state: WebotRecord) => {
    const active = state.get("active");
    return state.merge({
      active: !active,
    });
};

export const toggleWebotFullscreen: Reducer<WebotRecord> =
  (state: WebotRecord) => {
    const fullscreen = state.get("fullscreen");
    return state.merge({
      fullscreen: !fullscreen,
    });
};

export const toggleWebotControlPanel: Reducer<WebotRecord> =
  (state: WebotRecord) => {
    const controlPanel = state.get("controlPanel");
    return state.merge({
      controlPanel: !controlPanel,
    });
};

export const WebotReducer = createReducer(initialState, {
  [Types.TOGGLE_WEBOT]: toggleWebot,
  [Types.TOGGLE_WEBOT_FULLSCREEN]: toggleWebotFullscreen,
  [Types.TOGGLE_WEBOT_CONTROL_PANEL]: toggleWebotControlPanel,
});

export default WebotReducer;
