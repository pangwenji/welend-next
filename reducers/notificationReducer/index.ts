import * as Immutable from "immutable";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";

export enum NotificationType {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}

const { Types, Creators } = createActions({
  sendNotification: ["notificationType", "message"],
  resetNotification: [],
}, {
  prefix: "NOTIFICATION_",
});

export const NotificationTypes = Types;
export const NotificationActions = Creators;

export interface Notification {
  notificationType: NotificationType;
  message: string;
}

export const INITIAL_STATE: Notification = {
  notificationType: null,
  message: null,
};

export const initialState = Immutable.fromJS(INITIAL_STATE);
export type NotificationRecord = Immutable.Record<Notification>;
export type NotificationAction = Notification & Action;

export const sendNotification: Reducer<NotificationRecord> =
(state: NotificationRecord, action: NotificationAction) => {
  const { notificationType, message } = action;
  return state.merge({
    notificationType,
    message,
  });
};

export const resetNotification: Reducer<NotificationRecord> =
(state: NotificationRecord, action: NotificationAction) => {
  return state.merge({
    notificationType: null,
    message: null,
  });
};

export const NotificationReducer = createReducer(initialState, {
  [Types.SEND_NOTIFICATION]: sendNotification,
  [Types.RESET_NOTIFICATION]: resetNotification,
});
