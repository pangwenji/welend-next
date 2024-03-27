import { AxiosResponse } from "axios";
import BaseApi, { ApiConfig } from "./BaseApi";

export interface SubmitGiftRedemptionRequest {
  mid: string;
  redemption_code: string;
  gift_reservation_date: string;
  gift_redemption_center: string;
}

export interface GetGiftRedemptionResponse {
  completed: string;
  program_name: string;
  redemption_code: string;
  eligibility: boolean;
  gift_reservation_end: string;
  gift_redemption_dates: string[];
  gift_redemption_centers: object;
}

export default class WelendApi extends BaseApi {
  constructor(config: ApiConfig) {
    super(config);
  }

  public getGiftRedemption = (locale: string, encryptedMemberId: string): Promise<AxiosResponse<GetGiftRedemptionResponse>> => {
    const response = this.apiCall("get", `/${locale}/gift_redemption?mid=${encryptedMemberId}`);
    return response;
  }

  public submitGiftRedemption = (locale: string, giftRedemptionOptions: SubmitGiftRedemptionRequest): Promise<AxiosResponse<GetGiftRedemptionResponse>> => {
    const response = this.apiCall("post", `/${locale}/gift_redemption`, giftRedemptionOptions);
    return response;
  }
}
