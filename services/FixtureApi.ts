import { OptionResponse } from "./WelendApi";

export default {
  getOptions: (language: string): Promise<any> => {
    if (language === "en") {
      return Promise.resolve({
        data: require("../fixtures/getEnOptions.json"),
        status: 200,
      } as any);
    } else if (language === "tc") {
      return Promise.resolve({
        data: require("../fixtures/getZhOptions.json"),
        status: 200,
      } as any);
    }
  },
};
