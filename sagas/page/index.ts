import { SagaIterator } from "redux-saga";
import { put } from "redux-saga/effects";
import { GiftRedemptionActions } from "../../reducers/giftRedemptionReducer";
import { PageAction } from "../../reducers/pageReducer";
import WelendApi from "../../services/welendApi/WelendApi";

export function* initGiftRedemptionPage(api: WelendApi, action: PageAction): SagaIterator {
  yield put(GiftRedemptionActions.getGiftRedemption());
}
