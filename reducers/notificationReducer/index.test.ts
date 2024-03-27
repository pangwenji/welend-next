import { initialState, NotificationActions, NotificationReducer, NotificationType, NotificationTypes } from "./index";

describe("actions", () => {
  it("should create an action to sendNotification", () => {
    const expectedAction = {
      type: NotificationTypes.SEND_NOTIFICATION,
      notificationType: NotificationType.success,
      message: "hello world",
    };
    expect(NotificationActions.sendNotification(NotificationType.success, "hello world")).toEqual(expectedAction);
  });
});

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(NotificationReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle sendNotification", () => {
    const modifiedinitialState = initialState.merge({
      notificationType: NotificationType.success,
      message: "hello world",
    });

    expect(
      NotificationReducer(initialState, {
        type: NotificationTypes.SEND_NOTIFICATION,
        notificationType: NotificationType.success,
        message: "hello world",
      }),
    ).toEqual(modifiedinitialState);
  });
});
