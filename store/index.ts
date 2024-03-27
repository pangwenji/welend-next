import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { persistStore } from "redux-persist";
import { persistCombineReducers } from "redux-persist-immutable";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeConfiguredStore = (reducer, initialState) => {
  return createStore(reducer, initialState, bindMiddleware([sagaMiddleware]));
};

const makeStore = (initialState, { isServer }) => {
  let store = null;

  if (isServer) {
    store = makeConfiguredStore(combineReducers(rootReducer), initialState);
  } else {
    const persistConfig = {
      key: "root",
      storage,
      whitelist: ["auth"],
    };
    const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
    store = makeConfiguredStore(persistedReducer, initialState);
    store.__persistor = persistStore(store);
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default makeStore;
