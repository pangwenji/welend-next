// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const typescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps')();
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({
  // path: '.env',
  public: [
    'NODE_ENV',
    'API_HOST',
    'STATIC_API_HOST',
    'SITE_URL',
    'BUGSNAG_KEY',
    'AHOY_URL',
    'AHOY_COOKIE_DOMAIN',
    'GTM',
    'APPLICATION_FORM_BASE',
    'CAMPAIGN_VIDEO_LINK',
    'CAMPAIGN_VIDEO_LINK2',
    'FB_APP_ID',
    'SAKE_URL',
    'API_ACCESS_TOKEN_URI',
    'API_AUTHORIZATION_URI',
    'API_REDIRECT_URI',
    'API_CLIENT_ID',
    'BOTFRAMEWORK_SECRET',
    'MONEY_LENDER_LICENSE',
    'WELAB_BANK_URL',
    'NOTICE_TYPE',
    'NOTICE_START_TIME',
    'NOTICE_END_TIME',
  ],
  server: [
    'API_CLIENT_SECRET',
  ]
});

module.exports = withConfig(withPlugins([
  [optimizedImages],
  [typescript],
  [withCSS],
  [withSourceMaps],
], {
    poweredByHeader: false,
    webpack: (config, options) => {
      // Unshift polyfills in main entrypoint.
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js']) {
          entries['main.js'].unshift('./polyfills.js');
        }
        return entries;
      };

      return config;
    }
  }));
