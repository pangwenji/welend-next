import "animate.css/animate.min.css";
import { css, cx } from "emotion";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import backgroundImage from "../../assets/images/static-page/banner-contact-us-bkg@2x.jpg";
import backgroundImageMobile from "../../assets/images/static-page/mobile-banner-contact-us-bkg.jpg";
import { Column, Container, HeroBanner, Row } from "../../components";
import Layout from "../../containers/layout";
import { AppProps } from "../_app";

import careerIcon from "../../assets/images/static-page/icon-career@2x.png";
import csIcon from "../../assets/images/static-page/icon-cs@2x.png";
import emailIcon from "../../assets/images/static-page/icon-email@2x.png";
import lineIcon from "../../assets/images/static-page/icon-line@2x.png";
import newsIcon from "../../assets/images/static-page/icon-news@2x.png";
import wechatIcon from "../../assets/images/static-page/icon-wechat@2x.png";
import whatsappIcon from "../../assets/images/static-page/icon-whatsapp@2x.png";

interface State {
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class ContactUs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.renderBlock = this.renderBlock.bind(this);
  }

  public render(): any {
    const { t, theme, locale } = this.props;
    const hotlineContent = t("common:contact-us:hotline-content");
    const cardContainerStyle = css`
      padding: 0 15px 30px 15px;
      &:last-child{
        padding-bottom: 0;
      }
    `;
    const careerLink = `https://www.welab.co/${(locale === "en") ? "en" : "zh-cn"}/careers`;
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:contact-us")}
        metaPath="contact-us"
        // metaDescription={t("common:meta-data:description:contact-us")}
      >
        <HeroBanner
          backgroundImage={backgroundImage}
          backgroundImageMobile={backgroundImageMobile}
          heroImagePosition={151}
          title={t("common:contact-us:title")}
          description={t("common:contact-us:description")}
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
          <h1 style={{display: "none"}}>{t("common:h1:text:contact-us")}</h1>
          <div
            className={css`
            max-width: ${theme.Config.siteContainerWidth}px;
            margin: auto;
          `}
          >
            <Container>
              <Row
                className={cx(css`
                  padding: 60px 15px;
                  overflow: hidden;
                  @media (min-width: ${theme.Config.mobileWidth}px) {
                    padding: 30px 0;
                  }
                `)}
              >
                <Column className={cx(cardContainerStyle)} xs={24} md={8} lg={6} >{this.renderBlock(csIcon, t("common:contact-us:hotline"), (<div><a href="tel:35906396">3590 6396</a> <br /><br /><span className="text-size-small" dangerouslySetInnerHTML={{__html: hotlineContent}}/></div>))}</Column>
                <Column className={cx(cardContainerStyle)} xs={24} md={8} lg={6} >{this.renderBlock(emailIcon, t("common:contact-us:email"), (<a href="mailto:cs@welend.hk">cs@welend.hk</a>))}</Column>
                <Column className={cx(cardContainerStyle)} xs={24} md={8} lg={6} >{this.renderBlock(whatsappIcon, t("common:contact-us:whatsapp"), (<a href={t("common:contact-us:whatsapp-link")} target="_blank" >3706 9120</a>))}</Column>
                <Column className={cx(cardContainerStyle)} xs={24} md={8} lg={6} >{this.renderBlock(careerIcon, t("common:contact-us:career"), <div><a href={careerLink}>www.welab.co</a><br /><a className="margin-top" href="mailto:careershk@welab.co">careershk@welab.co</a></div>)}</Column>
                <Column className={cx(cardContainerStyle)} xs={24} md={8} lg={6} >{this.renderBlock(newsIcon, t("common:contact-us:press-enquiries"), (<a href="mailto:info@welab.co" >info@welab.co</a>))}</Column>
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    );
  }

  public renderBlock(logo: string, title: string, content: string | JSX.Element) {
    const { theme } = this.props;
    return (
      <ScrollAnimation animateIn="slideInUp" duration={0.5} animateOnce={true}>
        <Container
          className={css`
          width: 100%;
          padding: 30px;
          box-shadow: rgba(0,0,0,.1) 0px 2px 8px;
          border-radius: 4px;
          height: 200px;
          background: #fff;
          overflow: hidden;
          a {
            color: ${theme.Colors.secondary};
          }
          img {
            display: inline-block;
            margin: auto ;
          }
          @media (max-width: ${theme.Config.mobileWidth}px) {
            height: auto;
          }
        `}
        >
          <Row>
            <Column
              className={cx("text-center", css`
                padding-left: 0;
                width: 50%;
              `)}
              xs={6}
            >
              <img src={logo} />
            </Column>
            <Column xs={18}>
              <div className={cx("text-size-large")}>{title}</div>
              <div className={cx("margin-top", css`letter-spacing: 0;`)} >{content}</div>
            </Column>
          </Row>
        </Container>
      </ScrollAnimation>
    );
  }
}

export default ContactUs;
