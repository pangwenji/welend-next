import * as React from "react";
import backgroundImage from "../../../assets/images/static-page/banner-3hk-bkg@2x.jpg";
import backgroundImageMobile from "../../../assets/images/static-page/mobile-banner-3hk-bkg.jpg";
import { HeroBanner } from "../../../components";
import Layout from "../../../containers/layout";
import { AppProps } from "../../_app";

interface State {
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class ThreeHk extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render(): any {
    return (
      <Layout {...this.props}>
        <HeroBanner
          backgroundImage={backgroundImage}
          backgroundImageMobile={backgroundImageMobile}
          heroImagePosition={151}
          title={"清卡數貸款"}
          description={"WeLend A.I. 網上自動分析你所有卡數，即秒計出最慳息方案，卡數清哂，信貸評級升番哂！卡數脫身，信貸重生！"}
        />
      </Layout>
    );
  }
}

export default ThreeHk;
