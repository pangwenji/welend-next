import { Base64 } from "js-base64";
import Router from "next/router";
import { SagaIterator } from "redux-saga";
import { call, put, select, take } from "redux-saga/effects";
import config from "../../config";
import randomString from "../../lib/randomString";
import { ImmutableRootState } from "../../reducers";
import { AuthAction, AuthActions, AuthTypes } from "../../reducers/authReducer";
import { LoginModalActions } from "../../reducers/loginModalReducer";
import sakeAuth from "../../services/SakeAuth";
import { getLastUtm, setCookie } from "../../services/utils";
import { authStorage } from "../../services/welendApi";
import StaticApi from "../../services/welendApi/StaticApi";

const getLoginModal = (state: ImmutableRootState) => state.get("loginModal");

export function* login(api: StaticApi, action: AuthAction): SagaIterator {
  const { mobile, loanInfo, locale } = action;
  const { amount, tenor, loanType } = loanInfo;
  const state = Base64.encode(JSON.stringify({
    nonce: randomString(16),
    mobile,
    application: "main",
    amount: amount && amount.toString(),
    tenor: tenor && tenor.toString(),
    loan_type: loanType,
    locale,
  }));
  // set 10 min expire time to state
  setCookie("state_www", state, 10 * 60);
  const sakeAuthConfig = {
    mobile,
    amount: amount && amount.toString(),
    tenor: tenor && tenor.toString(),
    loan_type: loanType,
    locale,
    sign_in_mobile: mobile,
  };
  // form post for login
  const params = {
    "user[mobile]": mobile,
    amount,
    tenor,
    loan_type: loanType,
  };
  const path = `${config.apiHost}/${(locale === "en" ? "en" : "tc")}/users`;
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", path);
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }
  }
  document.body.appendChild(form);
  form.submit();
}

export function* logout(api: StaticApi, action: AuthAction): SagaIterator {
  yield call(authStorage.clearToken);
  Router.push("/logout-callback", "/");
}

export function* setTokenFromCookie(api: StaticApi, action: AuthAction): SagaIterator {
  const token = yield call(authStorage.getToken);
  yield put(AuthActions.setStoreToken(token));
}

export function* setLoanInfoToCookie(api: StaticApi, action: AuthAction): SagaIterator {
  const loginModal = yield select(getLoginModal);
  setCookie("loan_amount", loginModal.get("amount"));
  setCookie("loan_tenor", loginModal.get("tenor"));
  setCookie("loan_type", loginModal.get("loanType"));
}

export function* handleRedirectForAuthenticatedUser(api: StaticApi, action: AuthAction): SagaIterator {
    const { loanInfo } = action;
    const amount = loanInfo.amount ? loanInfo.amount : null;
    const tenor = loanInfo.tenor ? loanInfo.tenor : null;
    const loginModal = yield select(getLoginModal);
    const loanType = loginModal.get("loanType");
    yield put(LoginModalActions.setStoreLoanInfo(amount, tenor, loanType));
    yield put(AuthActions.setLoanInfoToCookie());
    window.location.href = `${config.sakeUrl}${loanType ? `?loan_type=${loanType}` : ``}`;
}
