import "animate.css/animate.min.css";
import { css, cx } from "emotion";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import backgroundImage from "../../assets/images/static-page/banner-about-us-bkg@2x.jpg";
import bottomBkg from "../../assets/images/static-page/bt-bkg@2x.jpg";
import heroImage from "../../assets/images/static-page/hero-about-us.png";
import backgroundImageMobile from "../../assets/images/static-page/mobile-banner-about-us-bkg@2x.png";
import {
  AUProblem1,
  AUProblem2,
  AUProblem3,
  AUSolve1,
  AUSolve2,
  AUSolve3,
  Column,
  Container,
  FeatureBlock,
  HeroBanner,
  PrimaryButton,
  Row,
  SlideShow,
} from "../../components";
import Layout from "../../containers/layout";
import { AppProps } from "../_app";
import aboutUsStyle from "./aboutUsStyle";

import aboutUs1Icon from "../../assets/icons/icon-aboutus-01.svg";
import aboutUs2Icon from "../../assets/icons/icon-aboutus-02.svg";
import aboutUs3Icon from "../../assets/icons/icon-aboutus-03.svg";
import allianzxLogo from "../../assets/images/static-page/about-us-icon/allianzx.png";
import ccbiLogo from "../../assets/images/static-page/about-us-icon/ccbi.png";
import ifcLogo from "../../assets/images/static-page/about-us-icon/ifc.png";
import khazanahLogo from "../../assets/images/static-page/about-us-icon/khazanah.png";
import sequoiaLogo from "../../assets/images/static-page/about-us-icon/sequoia.png";
import tomLogo from "../../assets/images/static-page/about-us-icon/tom.png";
import awardImg from "../../assets/images/static-page/graphic-award@2x.png";
import chinaMapImg from "../../assets/images/static-page/graphic-china@2x.png";
import awdaLogo from "../../assets/images/static-page/graphic-maucash.png";
import welabLogo from "../../assets/images/static-page/graphic-welab@2x.png";
import welendLogo from "../../assets/images/static-page/graphic-welend@2x.png";
import welendBankLogo from "../../assets/images/static-page/welab-bank-logo.svg";
import welendPalyLogo from "../../assets/images/static-page/welabpay-logo.svg";

interface State {
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class AboutUs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render(): any {
    const { t, theme } = this.props;
    const style = aboutUsStyle(theme);

    const renderTimelineEntry = (idx, logo = undefined, info = undefined) => {
      const textOnRight = idx % 2 === 1;
      const text = (
        <>
          <div className={style.yearLabel}>{t(`common:about-us:timeline-${idx}-time`)}</div>
          <div className={style.yearDetail}>{t(`common:about-us:timeline-${idx}`)}</div>
          {info}
        </>);
      const graphics = (
        <div className={style.timelineSideLeft}>
          {logo}
        </div>);
      return (
        <div className={style.timelineContent}>
          <div className={style.timelineLeft}>
            <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
              {textOnRight ? text : graphics}
            </ScrollAnimation>
          </div>
          <div className={style.timelineMiddle}>
            <div className={style.timelineCircle}>{}</div>
            <div className={style.timelineBottom}>{}</div>
          </div>
          <div className={style.timelineRight}>
            <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
              {textOnRight ? graphics : text}
            </ScrollAnimation>
          </div>
        </div>
      );
    };
    const cardStyleConfig = {
      problemColor: "#8EC0DB",
      problembgColor: theme.Colors.white,
      solveColor: theme.Colors.white,
      solvebgColor: "#026BB5",
      solveCircle: theme.Colors.secondary,
    };
    const cardIcon = {
      problemIcon1: <AUProblem1 color={cardStyleConfig.problemColor}/>,
      problemIcon2: <AUProblem2 color={cardStyleConfig.problemColor}/>,
      problemIcon3: <AUProblem3 color={cardStyleConfig.problemColor}/>,
      solveIcon1: <AUSolve1 color={cardStyleConfig.solveColor}/>,
      solveIcon2: <AUSolve2 color={cardStyleConfig.solveColor}/>,
      solveIcon3: <AUSolve3 color={cardStyleConfig.solveColor}/>,
    };

    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:about-us")}
        metaDescription={t("common:meta-data:description:about-us")}
        metaPath="about-us"
      >
        <HeroBanner
          backgroundImage={backgroundImage}
          backgroundImageMobile={backgroundImageMobile}
          heroImagePosition={100}
          title={t("common:about-us:title")}
          description={t("common:about-us:description")}
          textColor={theme.Colors.black}
        />
        <h1 style={{display: "none"}}>{t("common:h1:text:about-us")}</h1>
        <Container
          className={css`
            width: 100%;
            margin: auto;
            padding: 120px 20px;
            @media (max-width: ${theme.Config.tabletWidth}px) {
              padding-top: 0;
            }
            @media (max-width: ${theme.Config.mobileWidth}px) {
              padding: 60px 20px;
            }
          `}
          noGutter={true}
        >
          <Row>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={aboutUs1Icon}
                title={t("common:about-us:feature-1-title")}
                description={t("common:about-us:feature-1-description")}
              />
            </Column>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={aboutUs2Icon}
                title={t("common:about-us:feature-2-title")}
                description={t("common:about-us:feature-2-description")}
              />
            </Column>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={aboutUs3Icon}
                title={t("common:about-us:feature-3-title")}
                description={t("common:about-us:feature-3-description")}
              />
            </Column>
          </Row>
        </Container>
        <div className={cx("text-left text-size-small", css`padding: 0 20px; margin-bottom: 120px; color: ${theme.Colors.lightContentText}`)}>
          <div>{t("common:about-us:feature-tnc", { returnObjects: true }).map((remark, id) => <div key={`bt-feature-tnc-${id}`} dangerouslySetInnerHTML={{__html: remark}}/>)}</div>
        </div>
        <div
          className={css`
            background-image: url(${bottomBkg});
            background-repeat: no-repeat;
            padding: 120px 0;
            @media (min-width: ${theme.Config.mobileWidth}px) {
              padding: 120px 15px;
            }
          `}
        >
          <div
            className={cx(css`text-align: center;
            font-family: Noto Sans TC;
            font-style: normal;
            letter-spacing: 0.05em;
            font-weight: bold;`,
            )}
          >
            <span className={css`font-size: 40px;color: #F28021;`}>{t("common:about-us:section-4-title")}</span>
            <span className={css`font-size: 40px;color: #FFFFFF;`}>{t("common:about-us:section-5-title")}</span>
          </div>
          <Container className={css`max-width: ${theme.Config.siteContainerWidth}px; margin: auto`} >
            <Row className={"animated-container"}>
              <Column md={24} lg={16} >
                <ScrollAnimation animateIn="slideInLeft" duration={0.5} animateOnce={true}>
                  <div
                    className={cx(css`
                      width: 111%;
                      height: 568px;
                      position: relative;
                      left: 155px;
                      text-align: center;
                      border-radius: 5px;
                      overflow: hidden;
                      @media screen and (min-width: 768px) and (max-width: 991px){
                      position: relative;
                      left: 61px;
                      width: 84%;
                      }
                      .title {
                        font-size: 1.6rem;
                        font-weight: bold;
                      }
                      .content {
                        font-size: 0.9rem;
                        font-weight: 400;
                      }
                      svg {
                        margin: 40px auto;
                        width: 120px;
                        height: 75px;
                      }
                      .bt-slide {
                        width: 100%;
                        height: 550px;
                        .bt-slide-problem {
                          display: inline-block;
                          width: 50%;
                          height: 100%;
                          background: ${cardStyleConfig.problembgColor};
                          color: ${cardStyleConfig.problemColor};
                          float: left;
                          padding: 20px 50px;
                          svg {
                            opacity: .4;
                          }
                        }
                        .bt-slide-solve {
                          display: inline-block;
                          width: 50%;
                          height: 100%;
                          background: ${cardStyleConfig.solvebgColor};
                          color: ${cardStyleConfig.solveColor};
                          float: right;
                          padding: 20px 50px;
                          position: relative;
                          .title {
                            color: ${cardStyleConfig.solveColor};
                          }
                          .feature {
                            font-size: 1.2rem;
                            bottom: 70px;
                            position: absolute;
                            width: 100%;
                            text-align: center;
                            left: 0;
                          }
                          .circle {
                            background: ${cardStyleConfig.solveCircle};
                            width: 40px;
                            height: 40px;
                            border-radius: 40px;
                            color: #fff;
                            display: inline-block;
                            line-height: 40px;
                            margin: 0 5px;
                            &.en {
                              font-size: 0.8rem;
                            }
                          }
                        }
                      }
                    `, "hidden-small margin-top-large")}
                  >
                    <SlideShow enableControlButton={true} duration={5000} full={true} navStyles={{background: "transparent", textAlign: "center"}} >
                      {this.renderSlide(t("common:about-us:slide-1-problem"), cardIcon.problemIcon1 , t("common:about-us:slide-1-solve"), cardIcon.solveIcon1, "")}
                      {this.renderSlide(t("common:about-us:slide-2-problem"), cardIcon.problemIcon2, t("common:about-us:slide-2-solve"), cardIcon.solveIcon2, "")}
                      {this.renderSlide(t("common:about-us:slide-3-problem"), cardIcon.problemIcon3, t("common:about-us:slide-3-solve"), cardIcon.solveIcon3, "")}
                    </SlideShow>
                  </div>
                </ScrollAnimation>
                <div
                  className={cx(css`
                    width: 100%;
                    margin-top: 30px;
                    height: 560px;
                    .bt-slide {
                      width: 320px;
                      padding: 15px;
                      text-align: center;
                      svg {
                        width: 80px;
                        height: 80px;
                        margin: 10px;
                      }
                      .title {
                        font-size: 1.2rem;
                        font-weight: 600;
                      }
                      .content {
                        font-size: 0.8rem;
                        font-weight: 400;
                      }
                      .bt-slide-problem {
                        background: ${cardStyleConfig.problembgColor};
                        color: ${cardStyleConfig.problemColor};
                        position: relative;
                        padding: 20px 20px 0;
                        border-radius: 4px 4px 0 0;
                        height: 200px;
                        svg {
                          opacity: 0.4;
                        }
                        &::after {
                          content: " ";
                          position: absolute;
                          left: 0;
                          width: 0px;
                          height: 0px;
                          border-left: 145px solid transparent;
                          border-right: 145px solid transparent;
                          border-top: 30px solid ${cardStyleConfig.problembgColor};
                          bottom: -30px;
                        }
                      }
                      .bt-slide-solve {
                        padding: 50px 20px 10px;
                        background: ${cardStyleConfig.solvebgColor};
                        color: ${cardStyleConfig.solveColor};
                        border-radius: 0 0 4px 4px;
                        height: 300px;
                        .feature {
                          position: absolute;
                          bottom: 50px;
                          width: 100%;
                          left: 0;
                        }
                        .circle {
                          background: ${cardStyleConfig.solveCircle};
                          width: 30px;
                          height: 30px;
                          border-radius: 40px;
                          color: #fff;
                          display: inline-block;
                          line-height: 30px;
                          margin: 0 5px;
                          &.en {
                            font-size: 0.5rem;
                          }
                        }
                      }
                    }
                  `, "visible-small")}
                >
                  <SlideShow enableControlButton={true} duration={0} >
                    {this.renderSlide(t("common:about-us:slide-1-problem"), cardIcon.problemIcon1 , t("common:about-us:slide-1-solve"), cardIcon.solveIcon1, "")}
                    {this.renderSlide(t("common:about-us:slide-2-problem"), cardIcon.problemIcon2, t("common:about-us:slide-2-solve"), cardIcon.solveIcon2, "")}
                    {this.renderSlide(t("common:about-us:slide-3-problem"), cardIcon.problemIcon3, t("common:about-us:slide-3-solve"), cardIcon.solveIcon3, "")}
                  </SlideShow>
                </div>
              </Column>
            </Row>
          </Container>
        </div>
        <div
          className={css(`
            background-color: #F0F2F2;
            padding: 120px 20px 88px 20px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              padding: 60px 20px;
            }
          `)}
        >
          <div
            className={cx(css(`
              max-width: 1220px;
              margin-right: auto;
              margin-left: auto;
            `), "text-center")}
          >
            <div
              className={cx(css(`
              font-size: 2.4rem;
              font-weight: 500;
              padding-bottom: 30px;
              letter-spacing: 2px;
              line-height: 50px;
            `), "")}
            >
              {t("common:about-us:section-1-title")}
            </div>
            <div
              className={css(`
                max-width: 595px;
                margin-right: auto;
                margin-left: auto;
              `)}
            >
              {t("common:about-us:section-1-description")}
            </div>
          </div>
          <Container
            className={cx(css(`
              max-width: 1220px;
              margin-right: auto;
              margin-left: auto;
              overflow: hidden;
              .fadeIn img {
                max-width: 440px;
                width: 100%;
              }
            `), "margin-top-xl margin-bottom-xl")}
            noGutter={true}
          >
            <Row>
              {[allianzxLogo, ccbiLogo, ifcLogo,
                khazanahLogo, tomLogo, sequoiaLogo].map((logo, idx) => (
                <Column xs={12} md={8} className="text-center" key={"logo" + idx}>
                  <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100 + idx * 50} >
                    <img src={logo}/>
                  </ScrollAnimation>
                </Column>
              ))}
            </Row>
          </Container>
        </div>
        <div
          className={cx(css(`
            max-width: 1220px;
            margin-right: auto;
            margin-left: auto;
            padding: 120px 20px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              padding: 60px 20px;
            }
          `), "")}
        >
          <div
            className={cx(css(`
              font-size: 2.4rem;
              font-weight: 500;
              padding-bottom: 60px;
              letter-spacing: 2px;
              line-height: 50px;
            `), "text-center")}
          >
            {t("common:about-us:section-2-title")}
          </div>
          {renderTimelineEntry(1, <img src={welabLogo} className={style.welabLogo} />, <div className={style.yearLearnMore}><a className="text-size-small margin-top text-color-secondary" href="http://www.welab.co" target="_blank">{t("common:about-us:learn-more")}</a></div>)}
          {renderTimelineEntry(2, <img src={welendLogo} className={style.welendLogo} />)}
          {renderTimelineEntry(3, <img src={chinaMapImg} className={style.chinaMapImg} />)}
          {renderTimelineEntry(4)}
          {renderTimelineEntry(5)}
          {renderTimelineEntry(6)}
          {renderTimelineEntry(7, <img src={awdaLogo} className={style.awdaImg} />)}
          {renderTimelineEntry(8)}
          {renderTimelineEntry(9, <img src={awardImg} className={style.awardImg} />)}
          {renderTimelineEntry(10)}
          {renderTimelineEntry(11)}
          {renderTimelineEntry(12, <img src={welendBankLogo} className={style.welendLogo}/>, <div className={style.yearLearnMore}><a className="text-size-small margin-top text-color-secondary" href={t("common:about-us:weLab-bank-learn-more-link")} target="_blank">{t("common:about-us:welab-bank-learn-more")}</a></div>)}
          {renderTimelineEntry(13, <img src={welendPalyLogo} className={style.welendLogo}/>, <div className={style.yearLearnMore}><a className="text-size-small margin-top text-color-secondary" href={t("common:about-us:welab-pay-learn-more-link")} target="_blank">{t("common:about-us:welab-pay-learn-more")}</a></div>)}
        </div>
        <div
          className={css(`
            background-color: #F0F2F2;
            padding: 120px 20px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              padding: 60px 20px;
            }
          `)}
        >
          <div
            className={cx(css(`
              max-width: 1220px;
              margin-right: auto;
              margin-left: auto;
            `), "text-center")}
          >
            <div
              className={cx(css(`
                font-size: 2.4rem;
                font-weight: 500;
                padding-bottom: 30px;
                letter-spacing: 2px;
                line-height: 50px;
              `))}
            >
               {t("common:about-us:section-3-title")}
            </div>
            <div
              className={css(`
                max-width: 595px;
                margin-right: auto;
                margin-left: auto;
              `)}
            >
              {t("common:about-us:section-3-description")}
            </div>
            <a href="https://www.welab.co/en/careers">
              <PrimaryButton className="margin-top" style={{ maxWidth: "200px", margin: "auto", height: "45px" }} data-cta-name="about-us-join-button">{t("common:about-us:join-us")}</PrimaryButton>
            </a>
          </div>
        </div>
      </Layout>
    );
  }
  private renderSlide(problem: string, problemImg: any, solve: string, solveImg: any, save: string) {
    const { locale, t } = this.props;

    return (
      <div className="bt-slide" >
        <div className="bt-slide-problem" >
          <div className="title" >{t("common:about-us:slide-title-problem")}</div>
          {problemImg}
          <div className="content" >{problem}</div>
        </div>
        <div className="bt-slide-solve" >
          <div className="title" ><span className="text-color-secondary" >We</span>Lend {t("common:about-us:slide-title-solve")}</div>
          {solveImg}
          <div className="content" >{solve}</div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
