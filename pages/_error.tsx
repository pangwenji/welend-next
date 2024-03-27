import bugsnag from "@bugsnag/js";
import { css, injectGlobal } from "emotion";
import * as React from "react";
import * as notFoundImage from "../assets/images/image-404@2x.png";
import { Card, CardContent, Content, Root } from "../components";
import config from "../config";
import AppConfig from "../lib/AppConfig";
import { version } from "../package.json";
import { baseTheme, ThemeProvider } from "../theme";
let bugsnagClient = null;
if (config.bugsnagApiKey) {
  bugsnagClient = bugsnag({
    apiKey: config.bugsnagApiKey,
    releaseStage: config.nodeEnv,
    appVersion: version,
    notifyReleaseStages: AppConfig.notifyReleaseStages,
  });
}

export default class Error extends React.Component {
  public static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    if (bugsnagClient) {
      bugsnagClient.notify(`PAGE_NOT_FOUND: ${res && res.req ? res.req.originalUrl : null}`);
    }
    return { statusCode };
  }

  public render() {
    return (
      <ThemeProvider theme={baseTheme}>
        <Root>
          <Content>
            <Card>
              <CardContent>
                <div className="text-center">
                  <div>
                    <img
                      className={css`
                        max-width: 163px;
                        margin-top: 1.8rem;
                        margin-bottom: 3rem;
                      `}
                      src={notFoundImage}
                    />
                  </div>
                  <div
                    className={css`
                      font-size: 30px;
                      color: #91ACC2;
                    `}
                  >
                    Oops!<br />抱歉
                  </div>
                  <div
                    className={css`
                      margin-top: 2rem;
                      margin-bottom: 1.466rem;
                    `}
                  >
                    <p>
                      We can’t seem to find the page you’re looking for
                    </p>
                    <p>
                      我們未能找到你想前往的網頁
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Content>
        </Root>
      </ThemeProvider>
    );
  }
}
