import getConfig from "next/config";

const nextConfig = { ...getConfig().publicRuntimeConfig, ...getConfig().serverRuntimeConfig};

const config = {
  siteUrl: nextConfig.SITE_URL,
  apiHost: nextConfig.API_HOST,
  staticApiUrl: nextConfig.STATIC_API_HOST,
  bugsnagApiKey: nextConfig.BUGSNAG_KEY,
  ahoyUrl: nextConfig.AHOY_URL,
  ahoyDomain: nextConfig.AHOY_COOKIE_DOMAIN,
  gtm: nextConfig.GTM,
  applicationFormBase: nextConfig.APPLICATION_FORM_BASE,
  campaignVideoLink: nextConfig.CAMPAIGN_VIDEO_LINK,
  campaignVideoLink2: nextConfig.CAMPAIGN_VIDEO_LINK2,
  nodeEnv: nextConfig.NODE_ENV,
  fbAppId: nextConfig.FB_APP_ID,
  sakeUrl: nextConfig.SAKE_URL,
  accessTokenUri: `${nextConfig.SAKE_URL}/oauth/token`,
  authorizationUri: `${nextConfig.SAKE_URL}/{locale}/users/sign_up`,
  redirectUri: `${nextConfig.SITE_URL}/login/callback`,
  sakeUIRedirectUri: `${nextConfig.APPLICATION_FORM_BASE}/login/callback`,
  clientId: nextConfig.API_CLIENT_ID,
  clientSecret: nextConfig.API_CLIENT_SECRET,
  botframeworkApiHost: "https://directline.botframework.com/v3/directline",
  botframeworkSecret: nextConfig.BOTFRAMEWORK_SECRET,
  userTokenKeyName: "oauth.access.token",
  moneyLenderLicense: nextConfig.MONEY_LENDER_LICENSE,
  welabBankUrl: nextConfig.WELAB_BANK_URL,
  noticeType: nextConfig.NOTICE_TYPE || null,
  noticeStartTime: nextConfig.NOTICE_START_TIME || null,
  noticeEndTime: nextConfig.NOTICE_END_TIME || null,
};

export default config;
