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

class TermsAndConditions extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render(): any {
    const { t, theme } = this.props;
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:terms-and-conditions")}
        metaPath="terms-and-conditions"
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
            {t("legal:terms-and-conditions:title")}
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
            <div dangerouslySetInnerHTML={{ __html: t("legal:terms-and-conditions:content") }} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default TermsAndConditions;
