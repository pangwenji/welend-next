import { css, cx } from "emotion";
import * as React from "react";
import Layout from "../../containers/layout";
import { AppProps } from "../_app";

interface State {
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class OsakaGameTnc extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};

    this.renderContent = this.renderContent.bind(this);
  }

  public render(): any {
    const { t, theme } = this.props;
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:osaka-game-tnc")}
        metaPath="privacy-policy"
      >
        <div
          className={css`
          background-color: #F0F2F2;
          padding: 60px 0;
          @media (max-width: ${theme.Config.mobileWidth}px) {
            padding: 30px 0;
          }
        `}
        >
          <div
            className={cx(css`
            margin-bottom: 60px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              margin-bottom: 30px;
            }
          `,
              "text-center text-size-double text-bold")}
          >
            {t("legal:osaka-game-tnc:title")}
          </div>
          <div
            className={css`
            max-width: ${theme.Config.siteContainerWidth}px;
            padding: 60px 120px;
            margin: 0 auto;
            box-shadow: rgba(0,0,0,.1) 0px 2px 8px;
            background-color: #fff;
            border-radius: 4px;
            h2 {
              color: ${theme.Colors.primary}
            }
            @media (max-width: ${theme.Config.mobileWidth}px) {
              margin: 0 10px;
              padding: 30px 20px;
            }
            `
            }
          >
            {this.renderContent()}
          </div>
        </div>
      </Layout>
    );
  }

  private renderContent() {
    const { t } = this.props;
    const contentList = t("legal:osaka-game-tnc:content", { returnObjects: true });
    return (
      <div key={`osaka-game-tnc`}>
        <ol>
        {
          contentList.map((content, id) => {
            return typeof content === "string" ? <li key={`osaka-game-tnc-content-${id}`} dangerouslySetInnerHTML={{ __html: content }}/> : <ol key={`osaka-game-tnc-sublist`} className={css`list-style-type: lower-alpha`}>{content.map((subList, index) => <li key={`osaka-game-tnc-sublist-content-${index}`}>{subList}</li>)}</ol>;
          })
        }
        </ol>
      </div>
    );
  }
}

export default OsakaGameTnc;
