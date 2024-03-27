import { extractCritical } from "emotion-server";
import Document, { Head, Main, NextScript } from "next/document";
import * as React from "react";
import config from "../config";
import { notifyReleaseStagesTypes } from "../lib/AppConfig";

import { version } from "../package.json";

const JS_PRELOAD_URLS = [
  "//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
  "//d2wy8f7a9ursnm.cloudfront.net/v4/bugsnag.min.js",
  "/static/assets/js/analytics.js",
  "/static/assets/js/polyfill.js",
];

const normalizeJavascriptConfig =
  `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${config.gtm}');
if (window.analyticsInit) {analyticsInit({ahoyUrl: "${config.ahoyUrl}",domain: "${config.ahoyDomain}"});window.ahoy.trackAll();}
`;

const bugsnagConfig =
  `
window.bugsnagClient = ${config.bugsnagApiKey} && bugsnag({
  apiKey: "${config.bugsnagApiKey}",
  releaseStage: "${config.nodeEnv}",
  notifyReleaseStages: ["${notifyReleaseStagesTypes.production}", "${notifyReleaseStagesTypes.staging}"],
  appVersion: "${version}",
  beforeSend: function (report) {
    if (window.getUser) {
      var user = window.getUser();
      report.user = {
        mobile: user.mobile,
        applicationId: user.applicationId,
      };
    }
  }
});
`;

const jsPreload = JS_PRELOAD_URLS.map((url: string) => <link as="script" rel="preload" key={url} href={url} />);
const js = JS_PRELOAD_URLS.map((url: string) => <script key={url} src={url} />);

export default class MyDocument extends Document {
  public static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  public render() {
    return (
      <html lang="zh-HK" dir="ltr" >
        <Head>
          {jsPreload}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/images/favicon/apple-touch-icon-57-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/images/favicon/apple-touch-icon-72-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/images/favicon/apple-touch-icon-114-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/images/favicon/apple-touch-icon-144-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" href="/assets/images/favicon/apple-touch-icon-precomposed.png" />
          <link rel="shortcut icon" href="/assets/images/favicon/favicon.ico" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          {js}
          <script
            dangerouslySetInnerHTML={{ __html: `${normalizeJavascriptConfig}` }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: `${bugsnagConfig}` }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
