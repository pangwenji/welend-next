import { all, takeLatest } from "redux-saga/effects";
import { staticApi, welendApi, welendStaticApi } from "../services/welendApi";

/* ------------- Types ------------- */
import { AuthTypes } from "../reducers/authReducer";
import { GiftRedemptionTypes } from "../reducers/giftRedemptionReducer";
import { PageTypes } from "../reducers/pageReducer";
import { ServerConfigTypes } from "../reducers/serverConfigReducer";
import { TrackerTypes } from "../reducers/trackerReducer";

/* ------------- Sagas ------------- */
import {
  handleRedirectForAuthenticatedUser,
  login,
  logout,
  setLoanInfoToCookie,
  setTokenFromCookie,
} from "./auth";
import {
  getGiftRedemption,
  submitGiftRedemption,
 } from "./giftRedemption";
import { initGiftRedemptionPage } from "./page";
import { getLoanOptions } from "./serverConfig";
import { track } from "./tracker";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // Page
    takeLatest(PageTypes.INIT_GIFT_REDEMPTION_PAGE, initGiftRedemptionPage, welendApi),
    // Gift Redemption
    takeLatest(GiftRedemptionTypes.GET_GIFT_REDEMPTION, getGiftRedemption, welendStaticApi),
    takeLatest(GiftRedemptionTypes.SUBMIT_GIFT_REDEMPTION, submitGiftRedemption, welendStaticApi),
    // Tracker
    takeLatest(TrackerTypes.TRACK, track, staticApi),
    // Auth
    takeLatest(AuthTypes.HANDLE_REDIRECT_FOR_AUTHENTICATED_USER, handleRedirectForAuthenticatedUser, staticApi),
    takeLatest(AuthTypes.LOGIN, login, staticApi),
    takeLatest(AuthTypes.LOGOUT, logout, staticApi),
    takeLatest(AuthTypes.SET_LOAN_INFO_TO_COOKIE, setLoanInfoToCookie, staticApi),
    takeLatest(AuthTypes.SET_TOKEN_FROM_COOKIE, setTokenFromCookie, staticApi),
    // Loan options
    takeLatest(ServerConfigTypes.GET_LOAN_OPTIONS, getLoanOptions, staticApi),
  ]);
}
