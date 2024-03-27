import "animate.css/animate.min.css";
import { css, cx } from "emotion";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import Slider from "react-slick";
import * as Redux from "redux";
import "slick-carousel/slick/slick.css";
import fileImg from "../../../assets/images/static-page/file-img@2x.png";
import welabLogo from "../../../assets/images/static-page/graphic-welab@2x.png";

import {
  AngleRightIcon,
  Collapse,
  Column,
  Container,
  FeatureBlock,
  HeroBanner, MinusIcon, Panel, PlusIcon,
  PrimaryButton,
  Row,
} from "../../../components";
import Layout from "../../../containers/layout";
import PromotionBanner, { PromotionBannerType } from "../../../containers/promotionBanner/PromotionBanner";
import { ImmutableRootState } from "../../../reducers";
import { LoginModalActions } from "../../../reducers/loginModalReducer";
import { ServerConfigActions } from "../../../reducers/serverConfigReducer";
import { AppProps } from "../../_app";
import {faqCategories, faqQuestions} from "../../faqs/data";
import {noDocLoanQuestions} from "../no-doc-loan/data";
import noDocLoanStyle from "./NoDocLoanStyle";

import backgroundImage from "../../../assets/images/key-visual/no-doc/banner-bkg.jpg";
import heroImage from "../../../assets/images/key-visual/no-doc/hero.png";
import backgroundImageMobile from "../../../assets/images/key-visual/no-doc/mobile-banner-bkg@2x.jpg";
import stepLeftMobileEn from "../../../assets/images/static-page/mobile-nodocloan-compare-left-en@2x.png";
import stepLeftMobile from "../../../assets/images/static-page/mobile-nodocloan-compare-left@2x.png";
import stepRightMobileEn from "../../../assets/images/static-page/mobile-nodocloan-compare-right-en@2x.png";
import stepRightMobile from "../../../assets/images/static-page/mobile-nodocloan-compare-right@2x.png";
import stepLeftEn from "../../../assets/images/static-page/nodocloan-compare-left-en@2x.png";
import stepLeft from "../../../assets/images/static-page/nodocloan-compare-left@2x.png";
import stepRightEn from "../../../assets/images/static-page/nodocloan-compare-right-en@2x.png";
import stepRight from "../../../assets/images/static-page/nodocloan-compare-right@2x.png";
import feature1Icon from "../../../assets/images/static-page/svg-icon/icon-ploan-01.svg";
import feature2Icon from "../../../assets/images/static-page/svg-icon/icon-ploan-02.svg";
import feature3Icon from "../../../assets/images/static-page/svg-icon/icon-ploan-03.svg";
import { QuoteBlock } from "../../../components/quoteBlock";
import { getLoanOptions } from "../../../sagas/serverConfig";

interface State {
  selectedCategory: string;
  questions: any[];
  selected: boolean;
}

interface StateProps {
  amountUpper: number;
}

interface OwnProps {
}

export interface DispatchProps {
  toggleLoginModal: () => void;
  getLoanOptions: (productCode: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class NoDocLoan extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: "",
      questions: noDocLoanQuestions,
      selected: false,
    };
  }

  public componentDidMount(): any {
    this.props.getLoanOptions("no_doc_loan");
  }
  public formatSliderData(t) {
    const datas = [];
    const utmSourceObj = t("common:slider-text:no-doc-loan", { returnObjects: true });
    Object.keys(utmSourceObj).forEach((item) => {
      datas.push(utmSourceObj[item]);
    });
    return datas;
  }
  public render(): any {
    const { locale, t, theme, amountUpper } = this.props;
    const style = noDocLoanStyle(theme);
    const settings = {
      dots: true,
      dotsClass: "slick-dots1",
      infinite: true,
      autoplaySpeed: 10000,
      height: 300,
      autoplay: true,
    };
    const renderTimelineEntryLeft = (idx, logo = undefined, info = undefined) => {
      const textOnRight = idx % 2 === 1;
      let showTimelineBottom  = "";
      if (idx === 6) {
        showTimelineBottom = "none";
      }

      const text = (
        <>
          <div className={style.yearDetailLeft}>{t(`common:no-doc-loan:timeline-${idx}`)}</div>
          {info}
        </>);
      const graphics = (
        <div className={style.timelineSideLeft}>
          {logo}
        </div>);
      return (
        <div className={`${style.timelineContentLeft} line-${idx}`}>
          <div className={`${style.timelineLeft} left-line`}>
            <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
              {text}
            </ScrollAnimation>
          </div>
          <div className={style.timelineMiddle}>
            <div className={style.timelineCircle}>
              <div className={cx(css(`font-size: 16px;text-align: center;padding-top: 4px;color: #FFFFFF;`))}>{idx}</div>
            </div>
            <div style={{display: showTimelineBottom}} className={style.timelineBottomLeft}>{}</div>
          </div>
        </div>
      );
    };
    const renderTimelineEntryRightOne = (idx, logo = undefined, info = undefined) => {
      const textOnRight = idx % 2 === 1;
      let showTimelineBottom  = "";
      if (idx === 3) {
        showTimelineBottom = "none";
      }
      const text = (
        <>
          <div className={style.yearDetail} dangerouslySetInnerHTML={{__html: t(`common:no-doc-loan:timeline2-${idx}`)}}/>
          {info}
        </>);
      const graphics = (
        <div className={style.timelineSideLeft}>
          {logo}
        </div>);
      return (
        <div className={`${style.timelineContentRightOne} line-${idx}`}>
          <div className="timeline-wrapper">
            <div className="item-step">
              <div className={cx(css(`font-size: 16px;text-align: center;;color: #FFFFFF;`))}>{idx}</div>
            </div>
            <div className="item-text">
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                {text}
                {
                  idx === 1 && (
                    <div className={"sub-text"} dangerouslySetInnerHTML={{__html: t(`common:no-doc-loan:timeline2-1-small`)}}/>
                  )
                }
              </ScrollAnimation>
            </div>
          </div>
          <div style={{display: showTimelineBottom}} className={"item-line"}>{}</div>
          {
            idx === 1 && (
              <div className={"step-img"}>
                <img  src={fileImg}/>
                <div className={"img-desc"}>{t(`common:no-doc-loan:timeline2-img-desc`)}</div>
              </div>
            )
          }

        </div>
      );
    };
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:no-doc-loan")}
        metaDescription={t("common:meta-data:description:no-doc-loan")}
        metaPath="products/no-doc-loan"
      >
        <div className={css`position:relative;`}>
          <div
            className={css`
              @media (max-width: ${theme.Config.tabletWidth}px) {
                display:flex;
                flex-direction: column-reverse;
              }
            `}
          >
            <h1 style={{display: "none"}}>{t("common:h1:text:no-doc-loan")}</h1>
            <HeroBanner
              backgroundImage={backgroundImage}
              backgroundImageMobile={backgroundImageMobile}
              heroImage={heroImage}
              heroImagePosition={180}
              title={t("common:no-doc-loan:title")}
              description={t("common:no-doc-loan:description")}
              lowerTitle={t("common:no-doc-loan:lowerTitle")}
              lowerDescription={t("common:no-doc-loan:lowerDescription")}
              textColor={theme.Colors.black}
            />
            <PromotionBanner {...this.props} type={PromotionBannerType.product} />
          </div>
        </div>
        <Container className={style.featureContainer} noGutter={true} >
          <Row>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={feature1Icon}
                title={t("common:no-doc-loan:feature-1-title")}
                description={t("common:no-doc-loan:feature-1-description")}
              />
            </Column>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={feature2Icon}
                title={t("common:no-doc-loan:feature-2-title")}
                description={t("common:no-doc-loan:feature-2-description")}
              />
            </Column>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={feature3Icon}
                title={t("common:no-doc-loan:feature-3-title")}
                description={t("common:no-doc-loan:feature-3-description")}
              />
            </Column>
          </Row>
        </Container>
        <div className="text-center">
          <PrimaryButton onClick={this.props.toggleLoginModal} style={{ maxWidth: "200px", margin: "0 auto 60px", height: "45px" }} data-cta-name="apply-open">{t("common:layout:apply-now")}</PrimaryButton>
        </div>
        <div className={cx("text-left text-size-small", css`padding: 0 20px; color: ${theme.Colors.lightContentText}`)}>
          {t("common:no-doc-loan:feature-tnc", { returnObjects: true, max: amountUpper && amountUpper.toLocaleString() }).map((remark, id) => <div key={`home-remark-${id}`}>{remark}</div>)}
          {/* tslint:disable-next-line:jsx-self-close */}
          <p></p>
          <div>
            {/* tslint:disable-next-line:jsx-self-close */}
            <p></p>
            <div>{t("common:layout:welend-reserves")}</div>
            <div>{t("common:layout:prevail-version")}</div>
          </div>
        </div>
        <Container className={style.promotionalContainer} noGutter={true}>
          <Slider {...settings}>
            {this.formatSliderData(t).map((item, id) => {
              return (
                <QuoteBlock
                  key={`quote-block-${id}`}
                  quote={item.quote}
                  content={item.content}
                />
              );
            })}
          </Slider>
          <div className={cx("text-color-light", style.remarkContent)} dangerouslySetInnerHTML={{__html: t("common:remark-text:personal-loan")}}/>
        </Container>
        <div className={css(style.stepContainer)}>
          <div className={css(style.stepTitle)} >{t("common:no-doc-loan:section-1-title")}</div>
          <Container
            className={cx(css(`
              height:1300px;
              overflow: hidden;
               @media (max-width: ${theme.Config.mobileWidth}px) {
                  overflow: unset;
              }
            `), "") as string}
          >
            <Row className={"animated-container"}>
              <Column xs={12} className={css`text-align: right;`} >
                <ScrollAnimation animateIn="slideInLeft" duration={1} animateOnce={true}>
                  <div
                    className={cx(css(`
            max-width: 1220px;
            margin-right: auto;
            margin-left: auto;
            margin-top:-120px;
            padding: 120px 0px;
             @media (max-width: ${theme.Config.tabletWidth}px) {
             padding: 120px 6px;
            }
          `), "")}
                  >
                    <div className={style.timeStepContainerLeft}>
                      <p
                        className={cx(css(`
              font-size: 1.4rem;
              font-weight: 500;
              text-align: right;
              padding-bottom: 10px;
              margin-top: 11px;
              min-height: 130px;
              letter-spacing: 2px;
              line-height: 50px;
              margin-right:52px;
               @media only screen and (min-width: 375px) and (max-width: 480px) {
                line-height: 28px;
                margin-bottom: 11px;
                text-align: center;
                width: 148px;
                margin-left: 12px;
              }
            `), "text-center")}
                      >
                        <div className={cx(css(`color:#DEDEDE;`))}>{t("common:no-doc-loan:section-2-left-title-1")}</div>
                        <div className={cx(css(`color:#DEDEDE;`))}>{t("common:no-doc-loan:section-2-left-title-2")}</div>
                      </p >
                    {renderTimelineEntryLeft(1)}
                    {renderTimelineEntryLeft(2)}
                    {renderTimelineEntryLeft(3)}
                    {renderTimelineEntryLeft(4)}
                    {renderTimelineEntryLeft(5)}
                    {renderTimelineEntryLeft(6)}
                    </div>
                  </div>
                </ScrollAnimation>
              </Column>
              <Column xs={12} >
                <ScrollAnimation animateIn="slideInRight" duration={1} animateOnce={true}>
                  <div
                    className={cx(css(`
            max-width: 1220px;
            margin-right: auto;
            margin-left: auto;
            padding: 120px 20px;
            margin-top:-120px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              margin-left: 13px;
              padding: 60px 20px;
            }
          `), "")}
                  >
                    <div className={style.timeStepContainerRight}>
                    <div
                      className={cx(css(`
              font-size: 1.4rem;
              font-weight: 500;
              text-align: left;
              padding-bottom: 30px;
              letter-spacing: 2px;
              margin-left: 41px;
              line-height: 50px;
              min-height: 153px;
              @media (min-width: ${theme.Config.mobileWidth}px) {
                display: flex;
              }
              @media only screen and (min-width: 500px) and (max-width: 638px) {
              margin-left: -4px;
              width: 232px;
              }
              @media (max-width: 480px) {
                line-height: 28px;
                padding-bottom: 20px;
                margin-top: -6px;
                min-height: 107px;
                text-align: center;
                margin-left: 0px;
                width: 122px;
              }
            `), "text-center")}
                    >
                      <div>
                        <span className={cx(css(`color:#F28021;`))}>{t("common:no-doc-loan:section-2-right-title-we")}</span>
                        <span className={cx(css(`color:#026BB5;`))}>{t("common:no-doc-loan:section-2-right-title-land")}</span>
                        <span className={cx(css(`color:#fff;`))}>{t("common:no-doc-loan:section-2-right-title")}</span>
                      </div>
                    </div>
                    {renderTimelineEntryRightOne(1)}
                    {renderTimelineEntryRightOne(2)}
                    {renderTimelineEntryRightOne(3)}
                    </div>
                  </div>
                  <PrimaryButton
                    onClick={this.props.toggleLoginModal}
                    className={css`
                      display: block;
                      max-width: 200px;
                      width: 80%;
                      height: 45px;
                      margin: -50px auto 50px 30px;
                      @media (max-width: ${theme.Config.mobileWidth}px) {
                      margin-top:10px;
                      }
                    `}
                    data-cta-name="apply-open"
                  >
                    {t("common:layout:apply-now")}
                  </PrimaryButton>
                </ScrollAnimation>
              </Column>
            </Row>
          </Container>
        </div>

        <div
          className={cx(css(`
          background-color: #F0F2F2;
          padding-top: 60px;
          @media (max-width: ${theme.Config.mobileWidth}px) {
            padding: 30px 0;
          }
        `, ""))}
        >
          <Container
            className={css(`
            max-width: 1220px;
            margin-right: auto;
            margin-left: auto;
            @media (max-width: ${theme.Config.tabletWidth}px) {
              display: none;
            }
          `)}
          >
            <Row>
              <Column
                xs={24}
                md={24}
                className={css(`
                padding-left: 5rem;
              `)}
              >
                <div className={cx(css`margin-bottom: 32px;`, "text-size-double")}>
                  {t(`common:products:title`)}
                </div>
                <div className={css`padding: 30px 0;margin: 0px 80px;`}>{this.renderQuestions()}</div>
              </Column>
            </Row>
          </Container>
          <div
            className={css(`
            @media (min-width: ${theme.Config.tabletWidth + 1}px) {
              display: none;
            }
          `)}
          >
            <div className="text-size-double text-left">
              {t("faq:title")}
            </div>
            {this.renderMobile()}
          </div>
        </div>
      </Layout >
    );
  }

  public handleCategoryClick = (selectedCategory) => {
    return () => {
      const questions = selectedCategory === faqCategories.all ? faqQuestions : faqQuestions.filter((question) => question.category === selectedCategory);
      this.setState({ selectedCategory, questions, selected: true });
    };
  }
  public backToCategory() {
    this.setState({ selected: false });
  }
  public renderMobile() {
    const { selected, selectedCategory } = this.state;
    const { t, theme } = this.props;
    return (
      <div>
        {this.renderQuestions()}
      </div>
    );
  }
  public renderCategories() {
    const { selectedCategory } = this.state;
    const { t, theme } = this.props;
    return Object.values(faqCategories).map((item) => {
      return (
        <div
          className={cx(css(`
            &:hover {
              color: ${theme.Colors.primary}
            }
            @media (max-width: ${theme.Config.tabletWidth}px) {
              border-radius: 3px;
              background-color: #FFFFFF;
              box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
              margin: 15px 15px;
              padding: 15px;
              color: ${theme.Colors.primary}
            }
          `), `padding-top padding-bottom cursor-pointer ${selectedCategory === item && "text-color-primary"}`)}
          key={item}
          onClick={this.handleCategoryClick(item)}
          data-cta-name={`${item}`}
        >
          {t(`faq:faq-data.${item}`)}
          <AngleRightIcon
            color={theme.Colors.primary}
            className={css(`
            float: right;
            @media (min-width: ${theme.Config.tabletWidth + 1}px) {
              display: none;
            }
          `)}
          />
        </div>
      );
    });
  }
  public renderQuestions() {
    const { t, theme } = this.props;
    return (
      <Collapse
        accordion={true}
        openIcon={<MinusIcon color={theme.Colors.primary} />}
        closeIcon={<PlusIcon color={theme.Colors.primary} />}
      >
        {this.renderQuestion()}
      </Collapse>
    );
  }
  public renderQuestion() {
    const { questions } = this.state;
    const { t, theme } = this.props;
    return questions.map((item, key) => {
      return (
        <Panel
          key={key}
          header={this.renderPanelHeader(item)}
          data-cta-name={`${item.answer}`}
          className={css(`
          @media (max-width: ${theme.Config.tabletWidth}px) {
            margin: 15px;
            width: auto;
            padding-right: 1.66rem;
          }
        `)}
        >
          <div dangerouslySetInnerHTML={{ __html: t(`common:products:no-doc-loan-data.${item.answer}`) }} />
        </Panel>
      );
    });
  }
  public renderPanelHeader(item) {
    const { t, theme } = this.props;
    return (
      <div
        className={cx(css(`
        font-size:  1.2rem;
        @media (max-width: ${theme.Config.tabletWidth}px) {
          font-size: 1rem;
        }
      `), "text-color-primary")}
      >
        {t(`common:products:no-doc-loan-data.${item.question}`)}
      </div>
    );
  }
}

const mapStateToProps = (state: ImmutableRootState): StateProps => {
  const amountUpper = state.getIn(["serverConfig", "loanOptions", "amountUpper"]);
  return {
    amountUpper,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
  getLoanOptions: (productCode: string) => {
    dispatch(ServerConfigActions.getLoanOptions(productCode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NoDocLoan);
