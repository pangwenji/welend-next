import Router from "next/router";
import { SagaIterator } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import { FormFields } from "../../lib";
import { ImmutableRootState } from "../../reducers";
import { GiftRedemptionAction, GiftRedemptionActions, GiftRedemptionFormFields, GiftRedemptionResponse } from "../../reducers/giftRedemptionReducer";
import { NotificationActions, NotificationType } from "../../reducers/notificationReducer";
import Validator from "../../services/validator";
import WelendApi, { GetGiftRedemptionResponse, SubmitGiftRedemptionRequest } from "../../services/welendApi/WelendApi";

const getLocale = (state: ImmutableRootState) => state.get("application").get("locale");
const getGiftRedemptionFormFields = (state: ImmutableRootState) => state.get("giftRedemption").get("formFields");
const getGiftRedemptionCode = (state: ImmutableRootState) => state.get("giftRedemption").get("redemptionCode");

export function* getGiftRedemption(api: WelendApi, action: GiftRedemptionAction): SagaIterator {
  try {
    const query = Router.router.query;
    const locale = yield select(getLocale);
    const response = yield call(api.getGiftRedemption, locale, query.mid.toString());
    if (response.status === 200 && response.data && Object.keys(response.data).length > 1) {
      yield put(GiftRedemptionActions.getGiftRedemptionSuccess(mapResponseToGiftRedemptionResponse(response.data)));
    } else {
      Router.push("/404");
    }
  } catch (error) {
    Router.push("/404");
    if (error.response) {
      yield put(GiftRedemptionActions.getGiftRedemptionFailure(error));
      yield put(NotificationActions.sendNotification(NotificationType.error, "common:notification-error:tracker-not-found"));
    }
  }
}

export function* submitGiftRedemption(api: WelendApi, action: GiftRedemptionAction): SagaIterator {
  try {
    const query = Router.router.query;
    const locale = yield select(getLocale);
    const formFields = yield select(getGiftRedemptionFormFields);
    const giftReservationDateValidator = new Validator(FormFields.giftReservationDate.rules, { strict: false });
    const giftRedemptionCenterValidator = new Validator(FormFields.giftRedemptionCenter.rules, { strict: false });
    formFields.redemptionCode = yield select(getGiftRedemptionCode);
    formFields.mid = query.mid;
    const giftReservationDateError = giftReservationDateValidator.validate(formFields.giftReservationDate);
    const giftRedemptionCenterError = giftRedemptionCenterValidator.validate(formFields.giftRedemptionCenter);

    if (!giftReservationDateError && !giftRedemptionCenterError) {
      const response = yield call(api.submitGiftRedemption, locale, mapGiftRedemptionToRequest(formFields));
      if (response.status === 200 && response.data) {
        yield put(GiftRedemptionActions.submitGiftRedemptionSuccess(response.data));
      }
    }
  } catch (error) {
    if (error.response) {
      yield put(GiftRedemptionActions.getGiftRedemptionFailure(error));
      yield put(NotificationActions.sendNotification(NotificationType.error, "common:notification-error:tracker-not-found"));
    }
  }
}

function mapResponseToGiftRedemptionResponse(response: GetGiftRedemptionResponse): GiftRedemptionResponse {
  return {
    completed: response.completed,
    programName: response.program_name,
    redemptionCode: response.redemption_code,
    eligibility: response.eligibility,
    giftReservationEnd: response.gift_reservation_end,
    giftRedemptionDates: response.gift_redemption_dates,
    giftRedemptionCenters: response.gift_redemption_centers,
  };
}

function mapGiftRedemptionToRequest(request: GiftRedemptionFormFields): SubmitGiftRedemptionRequest {
  return {
    mid: request.mid,
    redemption_code: request.redemptionCode,
    gift_reservation_date: request.giftReservationDate,
    gift_redemption_center: request.giftRedemptionCenter,
  };
}
