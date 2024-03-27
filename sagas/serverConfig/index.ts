import {call, put} from "@redux-saga/core/effects";
import {SagaIterator} from "@redux-saga/types";
import {notifyError} from "../../errorHandler";
import {ServerConfigAction, ServerConfigActions} from "../../reducers/serverConfigReducer";
import StaticApi from "../../services/welendApi/StaticApi";

export function* getLoanOptions(api: StaticApi, action: ServerConfigAction): SagaIterator {
  try {
    const { productCode } = action;
    const response = yield call(api.getLoanOptions, productCode || "personal_installment_loan");
    if (response.status === 200) {
      if (productCode !== "personal_installment_loan" || !productCode) {
        yield put(ServerConfigActions.setLoanOptions(response.data));
      }
      yield put(ServerConfigActions.getLoanOptionsSuccess(response.data));
    }
  } catch (err) {
    notifyError(err.response);
  }
}
