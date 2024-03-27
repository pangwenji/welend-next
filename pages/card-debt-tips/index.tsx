import "animate.css/animate.min.css";
import { css, cx } from "emotion";
import Carousel from "nuka-carousel";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import * as Redux from "redux";
import { Column, Container, HeroBanner, PrimaryButton, Row } from "../../components";
import Layout from "../../containers/layout";
import { LoginModalActions } from "../../reducers/loginModalReducer";
import { AppProps } from "../_app";

import backgroundImage from "../../assets/images/static-page/banner-tips-bkg@2x.jpg";
import heroImage from "../../assets/images/static-page/banner-tips-character@2x.png";
import cardImage from "../../assets/images/static-page/image-card.png";
import wejai1Image from "../../assets/images/static-page/image-wejai1.png";
import wejai2Image from "../../assets/images/static-page/image-wejai2.png";
import backgroundImageMobile from "../../assets/images/static-page/mobile-banner-tips-bkg.jpg";
import heroImageMobile from "../../assets/images/static-page/mobile-banner-tips-character@2x.png";
import tips1Icon1 from "../../assets/images/static-page/tips1-icon1.gif";
import tips1Icon2 from "../../assets/images/static-page/tips1-icon2.gif";
import tips1Icon3 from "../../assets/images/static-page/tips1-icon3.gif";
import tips1Icon4 from "../../assets/images/static-page/tips1-icon4.gif";
import tips2Icon1 from "../../assets/images/static-page/tips2-icon1.gif";
import tips2Icon2 from "../../assets/images/static-page/tips2-icon2.gif";
import tips2Icon3 from "../../assets/images/static-page/tips2-icon3.gif";
import tips2Icon4 from "../../assets/images/static-page/tips2-icon4.gif";

interface State {
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
  toggleLoginModal: () => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class CardDebtTips extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render(): any {
    const { t, theme } = this.props;
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:card-debt-tips")}
        metaDescription={t("common:meta-data:description:card-debt-tips")}
        metaPath="card-debt-tips"
      >
        <HeroBanner
          backgroundImage={backgroundImage}
          backgroundImageMobile={backgroundImageMobile}
          heroImage={heroImage}
          heroImageMobile={heroImageMobile}
          heroImagePosition={245}
          title={t("common:card-tips:title")}
          description={t("common:card-tips:description")}
        />
        <div
          className={cx(css`
            @media (max-width: ${theme.Config.mobileWidth}px) {
              margin: 0 30px;
            }
          `, "text-center margin-top-xl margin-bottom-xl")}
        >
          <h1 style={{display: "none"}}>{t("common:h1:text:card-debt-tips")}</h1>
          <div
            className={cx(css`
              font-size: 36px;
              font-weight: 600;
              letter-spacing: 2px;
              line-height: 50px;
              margin-top: 120px;
              margin-bottom: 60px;
              @media (max-width: ${theme.Config.mobileWidth}px) {
                margin-top: 60px;
                margin-bottom: 30px;
              }
            `)}
          >
            {t("common:card-tips:section-1-title")}
          </div>
          <div
            className={css`
            width: 100%;
            padding: 10px;
            max-width: 800px;
            margin-right: auto;
            margin-left: auto;
          `}
          >
            {t("common:card-tips:section-1-description")}
          </div>
        </div>
        <Container
          className={css(`
            max-width: 1220px;
            margin-right: auto;
            margin-left: auto;
            position: relative;
            @media (max-width: ${theme.Config.tabletWidth}px) {
              display: none;
            }
          `)}
          noGutter={true}
        >
          <Row
            className={cx(css(`
              display: flex;
              justify-content: center;
              align-items: center;
            `), "animated-container")}
          >
            <Column
              xs={24}
              md={12}
              className={cx(css(`
              border: 1px solid #DDDDDD;
              border-radius: 3px 3px 0 3px;`), "padding-top-large padding-bottom-large")}
            >
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <div className="text-center margin-top-xl margin-bottom-xl" >
                  <div
                    className={cx(css`
                    color: ${theme.Colors.primary};
                    font-size: 26px;
                    font-weight: bold;
                    letter-spacing: 3.9px;
                    line-height: 38px;
                  `, "margin-bottom-xl")}
                  >
                    {t("common:card-tips:term-1-title")}
                  </div>
                  <div
                    className={css`
                    max-width: 490px;
                    margin-right: auto;
                    margin-left: auto;
                  `}
                  >
                    {t("common:card-tips:term-1-description")}
                  </div>
                </div>
              </ScrollAnimation>
            </Column>
            <Column xs={24} md={12} >
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="text-center" >
                  <img src={tips1Icon1} />
                </div>
              </ScrollAnimation>
            </Column>
          </Row>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <img
              src={wejai1Image}
              className={css(`
              position: absolute;
              left: 0;
              right: 0;
              margin: auto;
              top: 15%;
            `)}
            />
          </ScrollAnimation>
          <Row
            className={cx(css(`
            display: flex;
            justify-content: center;
            align-items: center;
          `), "animated-container")}
          >
            <Column xs={24} md={12} >
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <div className="text-center" >
                  <img src={tips1Icon2} />
                </div>
              </ScrollAnimation>
            </Column>
            <Column
              xs={24}
              md={12}
              className={cx(css(`
              border: 1px solid #DDDDDD;
              border-radius: 3px 3px 0 3px;`), "padding-top-large padding-bottom-large")}
            >
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="text-center margin-top-xl margin-bottom-xl" >
                  <div
                    className={cx(css`
                    color: ${theme.Colors.primary};
                    font-size: 26px;
                    font-weight: bold;
                    letter-spacing: 3.9px;
                    line-height: 38px;
                  `, "margin-bottom-xl")}
                  >
                    {t("common:card-tips:term-2-title")}
                  </div>
                  <div
                    className={css`
                    max-width: 490px;
                    margin-right: auto;
                    margin-left: auto;
                  `}
                  >
                    {t("common:card-tips:term-2-description")}
                  </div>
                </div>
              </ScrollAnimation>
            </Column>
          </Row>
          <Row
            className={cx(css(`
            display: flex;
            justify-content: center;
            align-items: center;
          `), "animated-container")}
          >
            <Column
              xs={24}
              md={12}
              className={cx(css(`
              border: 1px solid #DDDDDD;
              border-radius: 3px 3px 0 3px;`), "padding-top-large padding-bottom-large")}
            >
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <div className="text-center margin-top-xl margin-bottom-xl" >
                  <div
                    className={cx(css`
                    color: ${theme.Colors.primary};
                    font-size: 26px;
                    font-weight: bold;
                    letter-spacing: 3.9px;
                    line-height: 38px;
                  `, "margin-bottom-xl")}
                  >
                    {t("common:card-tips:term-3-title")}
                  </div>
                  <div
                    className={css`
                    max-width: 490px;
                    margin-right: auto;
                    margin-left: auto;
                  `}
                  >
                    {t("common:card-tips:term-3-description")}
                  </div>
                </div>
              </ScrollAnimation>
            </Column>
            <Column xs={24} md={12} >
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="text-center" >
                  <img src={tips1Icon3} />
                </div>
              </ScrollAnimation>
            </Column>
          </Row>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <img
              src={cardImage}
              className={css(`
              position: absolute;
              left: 0;
              right: 0;
              margin: auto;
              top: 65%;
            `)}
            />
          </ScrollAnimation>
          <Row
            className={cx(css(`
            display: flex;
            justify-content: center;
            align-items: center;
          `), "animated-container")}
          >
            <Column xs={24} md={12} >
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <div className="text-center" >
                  <img src={tips1Icon4} />
                </div>
              </ScrollAnimation>
            </Column>
            <Column
              xs={24}
              md={12}
              className={cx(css(`
              border: 1px solid #DDDDDD;
              border-radius: 3px 3px 0 3px;`), "padding-top-large padding-bottom-large")}
            >
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="text-center margin-top-xl margin-bottom-xl" >
                  <div
                    className={cx(css`
                    color: ${theme.Colors.primary};
                    font-size: 26px;
                    font-weight: bold;
                    letter-spacing: 3.9px;
                    line-height: 38px;
                  `, "margin-bottom-xl")}
                  >
                    {t("common:card-tips:term-4-title")}
                  </div>
                  <div
                    className={css`
                    max-width: 490px;
                    margin-right: auto;
                    margin-left: auto;
                  `}
                  >
                    {t("common:card-tips:term-4-description")}
                  </div>
                </div>
              </ScrollAnimation>
            </Column>
          </Row>
        </Container>
        <div
          className={cx(css(`
            @media (min-width: ${theme.Config.tabletWidth + 1}px) {
              display: none;
            }
          `), "text-center")}
        >
          <img src={wejai1Image} />
          <div
            className={cx(css(`
              border: 1px solid #DDDDDD;
            `), "margin-right margin-left margin-top margin-bottom padding-top padding-bottom padding-right padding-left")}
          >
            <Carousel>
              <div className="text-center margin-top-xl margin-bottom-xl" >
                <div
                  className={cx(css`
                  color: ${theme.Colors.primary};
                  font-size: 26px;
                  font-weight: bold;
                  letter-spacing: 3.9px;
                  line-height: 38px;
                `, "margin-bottom-xl")}
                >
                  {t("common:card-tips:term-1-title")}
                </div>
                <div
                  className={css`
                  max-width: 490px;
                  margin-right: auto;
                  margin-left: auto;
                `}
                >
                  {t("common:card-tips:term-1-description")}
                </div>
                <img src={tips1Icon1} />
              </div>
              <div className="text-center margin-top-xl margin-bottom-xl" >
                <div
                  className={cx(css`
                  color: ${theme.Colors.primary};
                  font-size: 26px;
                  font-weight: bold;
                  letter-spacing: 3.9px;
                  line-height: 38px;
                `, "margin-bottom-xl")}
                >
                  {t("common:card-tips:term-2-title")}
                </div>
                <div
                  className={css`
                  max-width: 490px;
                  margin-right: auto;
                  margin-left: auto;
                `}
                >
                  {t("common:card-tips:term-2-description")}
                </div>
                <img src={tips1Icon2} />
              </div>
              <div className="text-center margin-top-xl margin-bottom-xl" >
                <div
                  className={cx(css`
                  color: ${theme.Colors.primary};
                  font-size: 26px;
                  font-weight: bold;
                  letter-spacing: 3.9px;
                  line-height: 38px;
                `, "margin-bottom-xl")}
                >
                  {t("common:card-tips:term-3-title")}
                </div>
                <div
                  className={css`
                  max-width: 490px;
                  margin-right: auto;
                  margin-left: auto;
                `}
                >
                  {t("common:card-tips:term-3-description")}
                </div>
                <img src={tips1Icon3} />
              </div>
              <div className="text-center margin-top-xl margin-bottom-xl" >
                <div
                  className={cx(css`
                  color: ${theme.Colors.primary};
                  font-size: 26px;
                  font-weight: bold;
                  letter-spacing: 3.9px;
                  line-height: 38px;
                `, "margin-bottom-xl")}
                >
                  {t("common:card-tips:term-4-title")}
                </div>
                <div
                  className={css`
                  max-width: 490px;
                  margin-right: auto;
                  margin-left: auto;
                `}
                >
                  {t("common:card-tips:term-4-description")}
                </div>
                <img src={tips1Icon4} />
              </div>
            </Carousel>
          </div>
        </div>
        <div
          className={cx(css`
            padding-bottom: 120px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              padding-bottom: 60px;
            }
          `, "text-center margin-top-xl margin-bottom-xl")}
        >
          <div
            className={css`
            max-width: 490px;
            margin-right: auto;
            margin-left: auto;
          `}
          >
            {t("common:card-tips:action-1")}
          </div>
          <PrimaryButton className="margin-top" style={{ maxWidth: "200px", margin: "auto", height: "45px" }} onClick={this.props.toggleLoginModal} data-cta-name="apply-open">
            {t("common:layout:apply-now")}
          </PrimaryButton>
        </div>
        <div
          className={css(`
            display: block;
            height: 1px;
            border: 0;
            border: 2px solid ${theme.Colors.primary};
            margin: 1em 0;
            padding: 0;
        `)}
        />

        <div
          className={cx(css`
            @media (max-width: ${theme.Config.mobileWidth}px) {
              margin: 0 30px;
            }
          `, "text-center margin-top-xl margin-bottom-xl")}
        >
          <div
            className={cx(css`
            font-size: 36px;
            font-weight: 600;
            letter-spacing: 2px;
            line-height: 50px;
            margin-top: 120px;
            margin-bottom: 60px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              margin-top: 60px;
              margin-bottom: 30px;
            }
          `)}
          >
            {t("common:card-tips:section-2-title")}
          </div>
          <div
            className={css`
            width: 100%;
            padding: 10px;
            max-width: 800px;
            margin-right: auto;
            margin-left: auto;
          `}
          >
            {t("common:card-tips:section-2-description")}
          </div>
        </div>
        <Container
          className={css(`
          max-width: 1220px;
          margin-right: auto;
          margin-left: auto;
          position: relative;
          @media (max-width: ${theme.Config.tabletWidth}px) {
            display: none;
          }
        `)}
          noGutter={true}
        >
          <Row
            className={cx(css(`
            display: flex;
            justify-content: center;
            align-items: center;
          `), "animated-container")}
          >
            <Column
              xs={24}
              md={12}
              className={cx(css(`
              border: 1px solid #DDDDDD;
              border-radius: 3px 3px 0 3px;`), "padding-top-large padding-bottom-large")}
            >
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <div className="text-center margin-top-xl margin-bottom-xl" >
                  <div
                    className={cx(css`
                    color: ${theme.Colors.primary};
                    font-size: 26px;
                    font-weight: bold;
                    letter-spacing: 3.9px;
                    line-height: 38px;
                  `, "margin-bottom-xl")}
                  >
                    {t("common:card-tips:solution-1-title")}
                  </div>
                  <div
                    className={css`
                    max-width: 490px;
                    margin-right: auto;
                    margin-left: auto;
                  `}
                  >
                    {t("common:card-tips:solution-1-description")}
                  </div>
                </div>
              </ScrollAnimation>
            </Column>
            <Column xs={24} md={12} >
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="text-center" >
                  <img src={tips2Icon1} />
                </div>
              </ScrollAnimation>
            </Column>
          </Row>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <img
              src={wejai2Image}
              className={css(`
              position: absolute;
              left: 0;
              right: 0;
              margin: auto;
              top: 15%;
            `)}
            />
          </ScrollAnimation>
          <Row
            className={cx(css(`
            display: flex;
            justify-content: center;
            align-items: center;
          `), "animated-container")}
          >
            <Column xs={24} md={12} >
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <div className="text-center" >
                  <img src={tips2Icon2} />
                </div>
              </ScrollAnimation>
            </Column>
            <Column
              xs={24}
              md={12}
              className={cx(css(`
              border: 1px solid #DDDDDD;
              border-radius: 3px 3px 0 3px;`), "padding-top-large padding-bottom-large")}
            >
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="text-center margin-top-xl margin-bottom-xl" >
                  <div
                    className={cx(css`
                    color: ${theme.Colors.primary};
                    font-size: 26px;
                    font-weight: bold;
                    letter-spacing: 3.9px;
                    line-height: 38px;
                  `, "margin-bottom-xl")}
                  >
                    {t("common:card-tips:solution-2-title")}
                  </div>
                  <div
                    className={css`
                    max-width: 490px;
                    margin-right: auto;
                    margin-left: auto;
                  `}
                  >
                    {t("common:card-tips:solution-2-description")}
                  </div>
                </div>
              </ScrollAnimation>
            </Column>
          </Row>
          <Row
            className={cx(css(`
            display: flex;
            justify-content: center;
            align-items: center;
          `), "animated-container")}
          >
            <Column
              xs={24}
              md={12}
              className={cx(css(`
              border: 1px solid #DDDDDD;
              border-radius: 3px 3px 0 3px;`), "padding-top-large padding-bottom-large")}
            >
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <div className="text-center margin-top-xl margin-bottom-xl" >
                  <div
                    className={cx(css`
                    color: ${theme.Colors.primary};
                    font-size: 26px;
                    font-weight: bold;
                    letter-spacing: 3.9px;
                    line-height: 38px;
                  `, "margin-bottom-xl")}
                  >
                    {t("common:card-tips:solution-3-title")}
                  </div>
                  <div
                    className={css`
                    max-width: 490px;
                    margin-right: auto;
                    margin-left: auto;
                  `}
                  >
                    {t("common:card-tips:solution-3-description")}
                  </div>
                </div>
              </ScrollAnimation>
            </Column>
            <Column xs={24} md={12} >
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="text-center" >
                  <img src={tips2Icon3} />
                </div>
              </ScrollAnimation>
            </Column>
          </Row>
          <Row
            className={cx(css(`
            display: flex;
            justify-content: center;
            align-items: center;
            `), "animated-container")}
          >
            <Column xs={24} md={12} >
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <div className="text-center" >
                  <img src={tips2Icon4} />
                </div>
              </ScrollAnimation>
            </Column>
            <Column
              xs={24}
              md={12}
              className={cx(css(`
              border: 1px solid #DDDDDD;
              border-radius: 3px 3px 0 3px;`), "padding-top-large padding-bottom-large")}
            >
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <div className="text-center margin-top-xl margin-bottom-xl" >
                  <div
                    className={cx(css`
                    color: ${theme.Colors.primary};
                    font-size: 26px;
                    font-weight: bold;
                    letter-spacing: 3.9px;
                    line-height: 38px;
                  `, "margin-bottom-xl")}
                  >
                    {t("common:card-tips:solution-4-title")}
                  </div>
                  <div
                    className={css`
                    max-width: 490px;
                    margin-right: auto;
                    margin-left: auto;
                  `}
                  >
                    {t("common:card-tips:solution-4-description")}
                  </div>
                </div>
              </ScrollAnimation>
            </Column>
          </Row>
        </Container>
        <div
          className={cx(css(`
            @media (min-width: ${theme.Config.tabletWidth + 1}px) {
              display: none;
            }
          `), "text-center")}
        >
          <img src={wejai2Image} />
          <div
            className={cx(css(`
              border: 1px solid #DDDDDD;
            `), "margin-right margin-left margin-top margin-bottom padding-top padding-bottom padding-right padding-left")}
          >
            <Carousel>
              <div className="text-center margin-top-xl margin-bottom-xl" >
                <div
                  className={cx(css`
                  color: ${theme.Colors.primary};
                  font-size: 26px;
                  font-weight: bold;
                  letter-spacing: 3.9px;
                  line-height: 38px;
                `, "margin-bottom-xl")}
                >
                  {t("common:card-tips:solution-1-title")}
                </div>
                <div
                  className={css`
                  max-width: 490px;
                  margin-right: auto;
                  margin-left: auto;
                `}
                >
                  {t("common:card-tips:solution-1-description")}
                </div>
                <img src={tips2Icon1} />
              </div>
              <div className="text-center margin-top-xl margin-bottom-xl" >
                <div
                  className={cx(css`
                  color: ${theme.Colors.primary};
                  font-size: 26px;
                  font-weight: bold;
                  letter-spacing: 3.9px;
                  line-height: 38px;
                `, "margin-bottom-xl")}
                >
                  {t("common:card-tips:solution-2-title")}
                </div>
                <div
                  className={css`
                  max-width: 490px;
                  margin-right: auto;
                  margin-left: auto;
                `}
                >
                  {t("common:card-tips:solution-2-description")}
                </div>
                <img src={tips2Icon2} />
              </div>
              <div className="text-center margin-top-xl margin-bottom-xl" >
                <div
                  className={cx(css`
                  color: ${theme.Colors.primary};
                  font-size: 26px;
                  font-weight: bold;
                  letter-spacing: 3.9px;
                  line-height: 38px;
                `, "margin-bottom-xl")}
                >
                  {t("common:card-tips:solution-3-title")}
                </div>
                <div
                  className={css`
                  max-width: 490px;
                  margin-right: auto;
                  margin-left: auto;
                `}
                >
                  {t("common:card-tips:solution-3-description")}
                </div>
                <img src={tips2Icon3} />
              </div>
              <div className="text-center margin-top-xl margin-bottom-xl" >
                <div
                  className={cx(css`
                  color: ${theme.Colors.primary};
                  font-size: 26px;
                  font-weight: bold;
                  letter-spacing: 3.9px;
                  line-height: 38px;
                `, "margin-bottom-xl")}
                >
                  {t("common:card-tips:solution-4-title")}
                </div>
                <div
                  className={css`
                  max-width: 490px;
                  margin-right: auto;
                  margin-left: auto;
                `}
                >
                  {t("common:card-tips:solution-4-description")}
                </div>
                <img src={tips2Icon4} />
              </div>
            </Carousel>
          </div>
        </div>

        <div
          className={cx(css`
            padding-bottom: 120px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              padding-bottom: 60px;
            }
          `, "text-center margin-top-xl margin-bottom-xl")}
        >
          <div
            className={css`
            max-width: 490px;
            margin-right: auto;
            margin-left: auto;
          `}
          >
            {t("common:card-tips:action-2")}
          </div>
          <PrimaryButton className="margin-top" style={{ maxWidth: "200px", margin: "auto", height: "45px" }} onClick={this.props.toggleLoginModal} data-cta-name="apply-open">{t("common:layout:apply-now")}</PrimaryButton>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
});

export default connect(null, mapDispatchToProps)(CardDebtTips);
