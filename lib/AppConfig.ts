import * as moment from "moment";
import config from "../config";
import themeColors from "../theme/welend/Colors";
import * as promotionBanner from "./PromotionBanner";

export enum notifyReleaseStagesTypes {
  production = "production",
  staging = "staging",
  development = "development",
}

export enum pages {
  pol = "property-owner-loan",
  pl = "personal-loan",
  bt = "balance-transfer",
  noDoc = "no-doc-loan",
  home = "home",
}

export interface CampaignVideo {
  videoLink: string;
  homeIcon?: string;
  homeIconEn?: string;
  productIcon?: string;
  productIconEn?: string;
  pages: pages[];
}

export enum tncContentVisualTypes {
  image = "image",
  lottie = "lottie",
}

export enum bannerTypes {
  icon = "icon",
  banner = "banner",
  heroBanner = "heroBanner",
  homeLeftBanner = "homeLeftBanner",
}

export interface CampaignVideos extends Array<CampaignVideo> {}

export interface PromotionBanner {
  skipUtm?: boolean;
  startDatetime: string;
  endDatetime: string;
  campaignCode: string;
  sourceCode: string;
  icon?: string;
  iconEN?: string;
  iconMobile?: string;
  iconMobileEN?: string;
  bannerImageDesktop?: string;
  bannerImageMobile?: string;
  tncContentVisual?: {
    type: tncContentVisualTypes.image | tncContentVisualTypes.lottie;
    visual: string;
    visualEN: string;
  } | null;
  bannerImageDesktopEN?: string;
  bannerImageMobileEN?: string;
  bannerImageAltText?: string;
  campaignVideoLink?: string;
  tnc?: string;
  tncButton?: boolean;
  timerBackground?: string;
  pages: pages[];
  applyButton?: boolean;
  bannerType:
    | bannerTypes.icon
    | bannerTypes.banner
    | bannerTypes.heroBanner
    | bannerTypes.homeLeftBanner;
  redirectURL?: string;
  redirectURLEN?: string;
  redirectURLMobile?: string;
  redirectURLMobileEN?: string;
  tncRedirectURL?: string;
  tncRedirectURLEN?: string;
}

export interface PromotionBanners extends Array<PromotionBanner> {}

export interface FraudAlert {
  color: {
    background: string;
    text: string;
  };
  pages: pages[];
}

const uatStart = "2020-04-21 00:00:00";
const yearEnd = "2022-12-31 23:59:59";
const march2021CampaignStart = "2021-03-09 00:00:00";
const march2021CampaignEnd =
  config.nodeEnv === "production" ? "2021-05-04 00:00:00" : "2021-05-04 00:00:00";
const may2021CampaignStart =
  config.nodeEnv === "production" ? "2021-05-04 00:00:00" : uatStart;
const may2021CampaignEnd =
  config.nodeEnv === "production"
    ? "2021-07-03 00:00:00"
    : "2021-05-31 00:00:00";

const june2021CampaignStart =
  config.nodeEnv === "production" ? "2021-06-01 00:00:00" : uatStart;
const june2021CampaignEnd = yearEnd;

const jul2021CampaignStart =
  config.nodeEnv === "production"
    ? "2021-07-06 00:00:00"
    : "2021-07-06 00:00:00";
const jul2021CampaignEnd =
  config.nodeEnv === "production"
    ? "2021-09-09 00:00:00"
    : "2021-09-01 00:00:00";
const jul2021POLCampaignStart =
  config.nodeEnv === "production"
    ? "2021-07-06 00:00:00"
    : "2021-07-06 00:00:00";
const jul2021POLCampaignEnd = yearEnd;

const sep2021CampaignStart =
  config.nodeEnv === "production"
    ? "2021-09-09 00:00:00"
    : "2021-09-01 00:00:00";
const sep2021CampaignEnd =
  config.nodeEnv === "production" ? "2022-01-05 23:59:59" : "2021-12-26 00:00:00";

const nov2021CampaignStart =
  config.nodeEnv === "production" ? "2021-11-08 10:00:00" : uatStart;
const nov2021CampaignEnd =
  config.nodeEnv === "production" ? "2021-12-31 23:59:00" : "2021-12-31 23:59:59";

const jan2022CampaignStart =
  config.nodeEnv === "production" ? "2022-01-06 00:00:00" : uatStart;
const jan2022CampaignEnd =
  config.nodeEnv = yearEnd;

const defaultConfig: {
  siteUrl: string;
  notifyReleaseStages: notifyReleaseStagesTypes[];
  customerServiceEmail: string;
  customerServiceHotline: string;
  moneyLenderLicense: string;
  merchant: {
    threeHk: string;
    fortress: string;
  };
  campaignVideos: CampaignVideos;
  promotionBanner: PromotionBanners;
  noticeType?: string;
  noticeStartTime?: Date;
  noticeEndTime?: Date;
  emailAutoSuggestion: string[];
  fraudAlert: FraudAlert;
} = {
  siteUrl: config.siteUrl,
  notifyReleaseStages: [
    notifyReleaseStagesTypes.production,
    notifyReleaseStagesTypes.staging,
  ],
  customerServiceEmail: "cs@welend.hk",
  customerServiceHotline: "3590 6396 ",
  moneyLenderLicense: config.moneyLenderLicense,
  merchant: {
    threeHk: "3hk",
    fortress: "fortress",
  },
  noticeType: config.noticeType,
  noticeStartTime: moment(config.noticeStartTime).toDate(),
  noticeEndTime: moment(config.noticeEndTime).toDate(),
  campaignVideos: [],
  promotionBanner: [
    // March Campaign
    {
      skipUtm: true,
      startDatetime: march2021CampaignStart,
      endDatetime: march2021CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.mar2021HomeOfferBannerMobileTC,
      bannerImageMobileEN: promotionBanner.mar2021HomeOfferBannerMobileEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1ZCWv1sd3lOyVK5gP5uFFf0W8YQrJi9T2SR_CeumtMc0/edit",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/1fgBks9oBGqvuagZ3zxK2zAVW71EoPDgoVK1WJaUIF_g/edit",
      pages: [pages.home, pages.pl],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
    {
      skipUtm: true,
      startDatetime: march2021CampaignStart,
      endDatetime: march2021CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.mar2021HomeOfferBannerDesktopTC,
      iconEN: promotionBanner.mar2021HomeOfferBannerDesktopEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1ZCWv1sd3lOyVK5gP5uFFf0W8YQrJi9T2SR_CeumtMc0/edit",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/1fgBks9oBGqvuagZ3zxK2zAVW71EoPDgoVK1WJaUIF_g/edit",
      pages: [pages.home, pages.pl],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    // May campaign
    // without UTM
    {
      skipUtm: true,
      startDatetime: may2021CampaignStart,
      endDatetime: may2021CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.may2021HomeOfferBannerMobileTC,
      bannerImageMobileEN: promotionBanner.may2021HomeOfferBannerMobileEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1ZCWv1sd3lOyVK5gP5uFFf0W8YQrJi9T2SR_CeumtMc0/edit",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/1fgBks9oBGqvuagZ3zxK2zAVW71EoPDgoVK1WJaUIF_g/edit",
      pages: [pages.home, pages.pl, pages.pol],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
    {
      skipUtm: true,
      startDatetime: may2021CampaignStart,
      endDatetime: may2021CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.may2021HomeOfferIconTC,
      iconEN: promotionBanner.may2021HomeOfferIconEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1ZCWv1sd3lOyVK5gP5uFFf0W8YQrJi9T2SR_CeumtMc0/edit",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/1fgBks9oBGqvuagZ3zxK2zAVW71EoPDgoVK1WJaUIF_g/edit",
      pages: [pages.home, pages.pl, pages.pol],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    // with UTM
    {
      skipUtm: false,
      startDatetime: may2021CampaignStart,
      endDatetime: may2021CampaignEnd,
      campaignCode: "2104_AprPOLCashRebateOffer",
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.may2021PolOfferBannerMobileTC,
      bannerImageMobileEN: promotionBanner.may2021PolOfferBannerMobileEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1O_l3nSfd1nWYJD18yebdg6LMS1biFAum386JdCCeee0/edit?usp=sharing",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/1YmZJoTgotZVbiN8s1KjtxKqmno321pHNTQ68TAUVHjE/edit?usp=sharing",
      pages: [pages.pol],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
    {
      skipUtm: false,
      startDatetime: may2021CampaignStart,
      endDatetime: may2021CampaignEnd,
      campaignCode: "2104_AprPOLCashRebateOffer",
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.may2021PolOfferIconTC,
      iconEN: promotionBanner.may2021PolOfferIconEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1O_l3nSfd1nWYJD18yebdg6LMS1biFAum386JdCCeee0/edit?usp=sharing",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/1YmZJoTgotZVbiN8s1KjtxKqmno321pHNTQ68TAUVHjE/edit?usp=sharing",
      pages: [pages.pol],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    // June Campaign
    {
      skipUtm: false,
      startDatetime: june2021CampaignStart,
      endDatetime: june2021CampaignEnd,
      campaignCode: "2106_1.88Offer",
      sourceCode: null,
      tncContentVisual: null,
      pages: [pages.pl, pages.pol],
      applyButton: false,
      bannerImageDesktop: promotionBanner.june2021fferDesktopBannerTC,
      bannerImageDesktopEN: promotionBanner.june2021fferDesktopBannerEN,
      bannerImageMobile: promotionBanner.june2021fferMobileBannerTC,
      bannerImageMobileEN: promotionBanner.june2021fferMobileBannerEN,
      bannerType: bannerTypes.banner,
    },
    // Jul
    {
      skipUtm: true,
      startDatetime: jul2021CampaignStart,
      endDatetime: jul2021CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.jul2021IconTC,
      iconEN: promotionBanner.jul2021IconEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1fnWC_SvN20eayNASnljnDm9zpF_xBLsUGUHisn6Dqkg/edit?usp=sharing",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/10-V2gjBz4r2xFdCi0Olwhd-g5ZMDGKqyUvMrpyGZFQI/edit?usp=sharing",
      pages: [pages.home, pages.bt],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    {
      skipUtm: true,
      startDatetime: jul2021CampaignStart,
      endDatetime: jul2021CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.jul2021MobileBannerTC,
      bannerImageMobileEN: promotionBanner.jul2021MobileBannerEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1fnWC_SvN20eayNASnljnDm9zpF_xBLsUGUHisn6Dqkg/edit?usp=sharing",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/10-V2gjBz4r2xFdCi0Olwhd-g5ZMDGKqyUvMrpyGZFQI/edit?usp=sharing",
      pages: [pages.home, pages.bt],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
    {
      skipUtm: false,
      startDatetime: jul2021POLCampaignStart,
      endDatetime: jul2021POLCampaignEnd,
      campaignCode: "2106_1.88Offer",
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.jul2021POLIconTC,
      iconEN: promotionBanner.jul2021POLIconEN,
      bannerImageMobile: promotionBanner.jul2021POLMobileTC,
      bannerImageMobileEN: promotionBanner.jul2021POLMobileEN,
      tnc: "campaign:jul-pol-2021",
      pages: [pages.pol],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    {
      skipUtm: false,
      startDatetime: jul2021POLCampaignStart,
      endDatetime: jul2021POLCampaignEnd,
      campaignCode: "2104_AprPOLCashRebateOffer",
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.jul2021POLIconTC,
      iconEN: promotionBanner.jul2021POLIconEN,
      tnc: "campaign:jul-pol-2021",
      pages: [pages.pol],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    {
      skipUtm: false,
      startDatetime: jul2021POLCampaignStart,
      endDatetime: jul2021POLCampaignEnd,
      campaignCode: "2104_AprPOLCashRebateOffer",
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.jul2021POLMobileTC,
      bannerImageMobileEN: promotionBanner.jul2021POLMobileEN,
      tnc: "campaign:jul-pol-2021",
      pages: [pages.pol],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
    // Sep2021 Campaign
    {
      skipUtm: true,
      startDatetime: sep2021CampaignStart,
      endDatetime: sep2021CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.sep2021IconTC,
      iconEN: promotionBanner.sep2021IconEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1QRTg9M-I854hdrs8kB9xKntD_SG0DLj0/edit?usp=sharing&ouid=105997216295514291502&rtpof=true&sd=true",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/12o4RK0a_sy9ifay1MDsL8KDzTDefF3eau2H0A_5ruh4/edit?usp=sharing",
      pages: [pages.home, pages.bt, pages.pl, pages.pol],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    {
      skipUtm: true,
      startDatetime: sep2021CampaignStart,
      endDatetime: sep2021CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.sep2021MobileBannerTC,
      bannerImageMobileEN: promotionBanner.sep2021MobileBannerEN,
      tncRedirectURL:
        "https://docs.google.com/document/d/1QRTg9M-I854hdrs8kB9xKntD_SG0DLj0/edit?usp=sharing&ouid=105997216295514291502&rtpof=true&sd=true",
      tncRedirectURLEN:
        "https://docs.google.com/document/d/12o4RK0a_sy9ifay1MDsL8KDzTDefF3eau2H0A_5ruh4/edit?usp=sharing",
      pages: [pages.home, pages.bt, pages.pl, pages.pol],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
    {
      skipUtm: false,
      startDatetime: nov2021CampaignStart,
      endDatetime: nov2021CampaignEnd,
      campaignCode: "2111_hellomate_POLCashRebate",
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.nov2021IconTC,
      iconEN: promotionBanner.nov2021IconEN,
      tnc: "campaign:nov-pol-2021",
      pages: [pages.pol],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    {
      skipUtm: false,
      startDatetime: nov2021CampaignStart,
      endDatetime: nov2021CampaignEnd,
      campaignCode: "2111_hellomate_POLCashRebate",
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.nov2021MobileBannerTC,
      bannerImageMobileEN: promotionBanner.nov2021MobileBannerEN,
      tnc: "campaign:nov-pol-2021",
      pages: [pages.pol],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
    {
      skipUtm: true,
      startDatetime: jan2022CampaignStart,
      endDatetime: jan2022CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.jan2022IconTC,
      iconEN: promotionBanner.jan2022IconEN,
      tncRedirectURL:
        "https://bit.ly/3EhBjX4",
      tncRedirectURLEN:
        "https://bit.ly/3mm1HJb",
      pages: [pages.home, pages.bt, pages.pl, pages.pol],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    {
      skipUtm: true,
      startDatetime: jan2022CampaignStart,
      endDatetime: jan2022CampaignEnd,
      campaignCode: null,
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.jan2022MobileBannerTC,
      bannerImageMobileEN: promotionBanner.jan2022MobileBannerEN,
      tncRedirectURL:
        "https://bit.ly/3EhBjX4",
      tncRedirectURLEN:
        "https://bit.ly/3mm1HJb",
      pages: [pages.home, pages.bt, pages.pl, pages.pol],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
    // to show jan campaign(8k) along with 2106_1.88Offer in pl page
    {
      skipUtm: false,
      startDatetime: jan2022CampaignStart,
      endDatetime: jan2022CampaignEnd,
      campaignCode: "2106_1.88Offer",
      sourceCode: null,
      tncContentVisual: null,
      icon: promotionBanner.jan2022IconTC,
      iconEN: promotionBanner.jan2022IconEN,
      tncRedirectURL:
        "https://bit.ly/3EhBjX4",
      tncRedirectURLEN:
        "https://bit.ly/3mm1HJb",
      pages: [pages.pl],
      applyButton: false,
      bannerType: bannerTypes.icon,
    },
    {
      skipUtm: false,
      startDatetime: jan2022CampaignStart,
      endDatetime: jan2022CampaignEnd,
      campaignCode: "2106_1.88Offer",
      sourceCode: null,
      tncContentVisual: null,
      bannerImageMobile: promotionBanner.jan2022MobileBannerTC,
      bannerImageMobileEN: promotionBanner.jan2022MobileBannerEN,
      tncRedirectURL:
        "https://bit.ly/3EhBjX4",
      tncRedirectURLEN:
        "https://bit.ly/3mm1HJb",
      pages: [pages.pl],
      applyButton: false,
      bannerType: bannerTypes.banner,
    },
  ],
  emailAutoSuggestion: [
    "gmail.com",
    "hotmail.com",
    "yahoo.com.hk",
    "yahoo.com",
  ],
  fraudAlert: {
    color: {
      background: themeColors.navyBlue,
      text: themeColors.white,
    },
    pages: [pages.home],
  },
};

export default defaultConfig;
