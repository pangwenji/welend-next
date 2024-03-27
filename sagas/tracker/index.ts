import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { NotificationActions, NotificationType } from "../../reducers/notificationReducer";
import { TrackerAction, TrackerActions, TrackerResults } from "../../reducers/trackerReducer";
import StaticApi, { TrackerRequest, TrackerResponse } from "../../services/welendApi/StaticApi";

export function* track(api: StaticApi, action: TrackerAction): SagaIterator {
  try {
    const { mobile, amount } = action;
    const response = yield call(
      api.track,
      {
        mobile,
        amount,
      },
    );
    if (response.status === 200 && response.data) {
      yield put(TrackerActions.trackSuccess(mapResponseToTrackerResults(response.data)));
    }
  } catch (error) {
    if (error.response) {
      yield put(TrackerActions.trackFailure(error));
      yield put(NotificationActions.sendNotification(NotificationType.error, "common:notification-error:tracker-not-found"));
    }
  }
}

function mapResponseToTrackerResults(response: TrackerResponse): TrackerResults {
  return {
    applicationId: response.application_id,
    nextAction: response.next_action,
    history: response.history,
    state: response.state,
    url: response.url,
  };
}
