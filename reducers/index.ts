import * as Immutable from "immutable";
import { ApplicationRecord, ApplicationReducer } from "./applicationReducer";
import { AuthRecord, AuthReducer } from "./authReducer";
import { GiftRedemptionRecord, GiftRedemptionReducer } from "./giftRedemptionReducer";
import { LoginModalRecord, LoginModalReducer } from "./loginModalReducer";
import { NotificationRecord, NotificationReducer } from "./notificationReducer";
import { PageRecord, PageReducer } from "./pageReducer";
import ServerConfigReducer, {ServerConfigRecord} from "./serverConfigReducer";
import { TrackerRecord, TrackerReducer } from "./trackerReducer";
import { WebotRecord, WebotReducer } from "./webotReducer";

// reducer
export const rootReducer = {
  application: ApplicationReducer,
  auth: AuthReducer,
  giftRedemption: GiftRedemptionReducer,
  loginModal: LoginModalReducer,
  notification: NotificationReducer,
  page: PageReducer,
  serverConfig: ServerConfigReducer,
  tracker: TrackerReducer,
  webot: WebotReducer,
};

export interface RootState {
  application: ApplicationRecord;
  auth: AuthRecord;
  giftRedemption: GiftRedemptionRecord;
  loginModal: LoginModalRecord;
  notification: NotificationRecord;
  page: PageRecord;
  serverConfig: ServerConfigRecord;
  tracker: TrackerRecord;
  webot: WebotRecord;
}

export type ImmutableRootState = Immutable.Map<string, Immutable.Record<any>>;

export default rootReducer;
