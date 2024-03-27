import { AxiosResponse } from "axios";
import BaseApi, { ApiConfig } from "./BaseApi";

export interface TrackerRequest {
  mobile?: string;
  amount?: string;
}

export interface TrackerResponse {
  application_id: string;
  history: Array<{time: string; state: string}>;
  next_action: string;
  state: string;
  url: string;
}

export default class StaticApi extends BaseApi {
  constructor(config: ApiConfig) {
    super(config);
    this.track = this.track.bind(this);
    this.getLoanOptions = this.getLoanOptions.bind(this);
  }

  public track(trackerOptions: TrackerRequest): Promise<AxiosResponse<TrackerResponse>> {
    const response = this.apiCall("post", `/loans/tracking`, trackerOptions);
    return response;
  }

  public getLoanOptions(productCode): Promise<AxiosResponse> {
    const response = this.apiCall("get", `/options/loan_options?product_code=${productCode}`);
    return response;
  }
}
