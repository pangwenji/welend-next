import "animate.css/animate.min.css";
import { css } from "emotion";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Masonry from "react-masonry-component";
import backgroundImage from "../../assets/images/static-page/banner-repayment-method-bkg@2x.jpg";
import backgroundImageMobile from "../../assets/images/static-page/mobile-banner-repayment-method-bkg.jpg";
import { Column, Container, HeroBanner, Row } from "../../components";
import Layout from "../../containers/layout";
import { AppProps } from "../_app";

import sevenIcon from "../../assets/images/static-page/icon-711@2x.png";
import autopayIcon from "../../assets/images/static-page/icon-autopay@2x.png";
import jetcoIcon from "../../assets/images/static-page/icon-jetco@2x.png";
import ppsIcon from "../../assets/images/static-page/icon-pps@2x.png";

interface State {
  masonryResize?: boolean;
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

declare let window: Window;
interface Window {
  addEventListener?: (event: string, callback: (event: Event) => any) => any;
  removeEventListener?: (event: string, callback: (event: Event) => any) => any;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class PaymentMethods extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.renderBlock = this.renderBlock.bind(this);
    this.masonryResize = this.masonryResize.bind(this);
  }

  public componentDidMount(): any {
    window.addEventListener("resize", this.masonryResize);
  }

  public componentWillUnmount(): any {
    window.removeEventListener("resize", this.masonryResize);
  }

  public render(): any {
    const { masonryResize } = this.state;
    const { t, theme } = this.props;
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:payment-methods")}
        metaPath="payment-methods"
      >
        <HeroBanner
          backgroundImage={backgroundImage}
          backgroundImageMobile={backgroundImageMobile}
          heroImagePosition={151}
          title={t("common:payment-methods:title")}
          description={t("common:payment-methods:description")}
          className={css`background: #F0F2F2;`}
        />
        <div
          className={css`
            background: #F0F2F2;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              margin-top: -97px;
              padding-top: 97px;
            }
          `}
        >
          <div
            className={css`
            max-width: ${theme.Config.siteContainerWidth}px;
            margin: auto;
            padding: 30px 15px;
            a {
              color: ${theme.Colors.secondary};
            }
            // @media (min-width: ${theme.Config.mobileWidth}px) {
            //   padding: 60px 0;
            // }
            .animated:first-child > div {
              margin-top: 0;
            }
          `}
          >
            <Masonry options={{ transitionDuration: 0, gutter: 30, resize: masonryResize }}>
              {this.renderBlock(autopayIcon, t("common:payment-methods:autopay-title"), t("common:payment-methods:autopay-description"))}
              {this.renderBlock(jetcoIcon, t("common:payment-methods:jetco-title"), t("common:payment-methods:jetco-description"))}
              {this.renderBlock(ppsIcon, t("common:payment-methods:pps-title"), t("common:payment-methods:pps-description"))}
              {this.renderBlock(sevenIcon, t("common:payment-methods:seven-eleven-title"), t("common:payment-methods:seven-eleven-description"))}
            </Masonry>
            <div className="mmargin-top text-size-small">{t("common:payment-methods:remark")}</div>
          </div>
        </div>
      </Layout>
    );
  }

  public renderBlock(logo: string, title: string, content: string) {
    const { theme } = this.props;
    return (
      <ScrollAnimation animateIn="slideInUp" duration={0.5} animateOnce={true}>
        <Container
          className={css`
          width: 100%;
          padding: 30px;
          box-shadow: rgba(0,0,0,.1) 0px 2px 8px;
          border-radius: 4px;
          margin: 0 auto 30px auto;
          background: #fff;
          img {
            display: inline-block;
            margin: auto ;
          }
          @media (min-width: ${theme.Config.siteWidth}px) {
            max-width: ${(theme.Config.siteContainerWidth / 2) - 30 - 15 }px;
          }
        `}
        >
          <Row>
            <Column className="text-center" xs={6} ><img src={logo} /></Column>
            <Column xs={18}>
              <div className="text-size-large" >{title}</div>
              <div className="margin-top" dangerouslySetInnerHTML={{__html: content}}/>
            </Column>
          </Row>
        </Container>
      </ScrollAnimation>
    );
  }

  private masonryResize(event): void {
    const masonryResize = event.currentTarget.innerWidth > this.props.theme.Config.siteWidth ? true : false;
    if (masonryResize !== this.state.masonryResize) {
      this.setState({masonryResize});
    }
  }
}

export default PaymentMethods;
