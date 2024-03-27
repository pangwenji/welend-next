import config from "../../config";
import { API_TYPE } from "./BaseApi";
import StaticApi from "./StaticApi";
import { AuthStorage } from "./storage";
import WelendApi from "./WelendApi";

const authStorage = new AuthStorage();

const staticApi = new StaticApi({
  options: {
    host: config.apiHost,
    version: "",
    apiType: API_TYPE.static,
  },
});

const welendApi = new WelendApi({
  options: {
    host: config.apiHost,
    version: "",
    apiType: API_TYPE.static,
  },
});

const welendStaticApi = new WelendApi({
  options: {
    host: config.staticApiUrl,
    version: "",
    apiType: API_TYPE.loan,
  },
});

export {
  staticApi,
  welendApi,
  welendStaticApi,
  authStorage,
};
