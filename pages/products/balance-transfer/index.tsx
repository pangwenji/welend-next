import "animate.css/animate.min.css";
import { css, cx } from "emotion";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import Slider from "react-slick";
import * as Redux from "redux";
import "slick-carousel/slick/slick.css";
import backgroundImage from "../../../assets/images/key-visual/balance-transfer/banner-bkg.jpg";
import heroImage from "../../../assets/images/key-visual/balance-transfer/hero.png";
import backgroundImageMobile from "../../../assets/images/key-visual/balance-transfer/mobile-banner-bkg.jpg";
import bottomBkg from "../../../assets/images/static-page/bt-bkg@2x.jpg";
import feature1Icon from "../../../assets/images/static-page/svg-icon/icon-bt-01.svg";
import feature2Icon from "../../../assets/images/static-page/svg-icon/icon-bt-02.svg";
import feature3Icon from "../../../assets/images/static-page/svg-icon/icon-bt-03.svg";
import {
  AngleRightIcon,
  BottomToggleButton,
  Collapse,
  Column,
  Container,
  FeatureBlock,
  HeroBanner, MinusIcon, Panel, PlusIcon,
  PrimaryButton,
  Row,
  SlideShow,
} from "../../../components";
import FacebookPlayer from "../../../components/facebookPlayer";
import { BTProblem1, BTProblem2, BTProblem3, BTProblem4, BTProblem5, BTSolve1, BTSolve2, BTSolve3, BTSolve4, BTSolve5 } from "../../../components/icon";
import { QuoteBlock } from "../../../components/quoteBlock";
import BalanceTransferCalculator from "../../../containers/balanceTransferCalculator";
import Layout from "../../../containers/layout";
import PromotionBanner, { PromotionBannerType } from "../../../containers/promotionBanner/PromotionBanner";
import PromotionVideo from "../../../containers/promotionVideo";
import { PromotionVideoType } from "../../../containers/promotionVideo/PromotionVideo";
import { LoginModalActions } from "../../../reducers/loginModalReducer";
import { AppProps } from "../../_app";
import {faqCategories, faqQuestions} from "../../faqs/data";
import balanceTransferStyle from "./BalanceTransferStyle";
import {balanceTransferQuestions} from "./data";

interface State {
  selectedCategory: string;
  questions: any[];
  selected: boolean;
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
  toggleLoginModal: () => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class BalanceTransfer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: "",
      questions: balanceTransferQuestions,
      selected: false,
    };
    this.renderPlayer = this.renderPlayer.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
  }
  public formatSliderData(t) {
    const datas = [];
    const utmSourceObj = t("common:slider-text:balance-transfer", { returnObjects: true });
    Object.keys(utmSourceObj).forEach((item) => {
      datas.push(utmSourceObj[item]);
    });
    return datas;
  }
  public render(): any {
    const { t, theme } = this.props;
    const style = balanceTransferStyle(theme);
    const settings = {
      dots: true,
      dotsClass: "slick-dots1",
      infinite: true,
      autoplaySpeed: 10000,
      height: 300,
      autoplay: true,
    };
    const cardStyleConfig = {
      problemColor: "#8EC0DB",
      problembgColor: theme.Colors.white,
      solveColor: theme.Colors.white,
      solvebgColor: "#026BB5",
      solveCircle: theme.Colors.secondary,
    };
    const cardIcon = {
      problemIcon1: <BTProblem1 color={cardStyleConfig.problemColor}/>,
      problemIcon2: <BTProblem2 color={cardStyleConfig.problemColor}/>,
      problemIcon3: <BTProblem3 color={cardStyleConfig.problemColor}/>,
      problemIcon4: <BTProblem4 color={cardStyleConfig.problemColor}/>,
      problemIcon5: <BTProblem5 color={cardStyleConfig.problemColor}/>,
      solveIcon1: <BTSolve1 color={cardStyleConfig.solveColor}/>,
      solveIcon2: <BTSolve2 color={cardStyleConfig.solveColor}/>,
      solveIcon3: <BTSolve3 color={cardStyleConfig.solveColor}/>,
      solveIcon4: <BTSolve4 color={cardStyleConfig.solveColor}/>,
      solveIcon5: <BTSolve5 color={cardStyleConfig.solveColor}/>,
    };
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:balance-transfer")}
        metaDescription={t("common:meta-data:description:balance-transfer")}
        metaPath="products/balance-transfer"
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
            <h1 style={{display: "none"}}>{t("common:h1:text:balance-transfer")}</h1>
            <HeroBanner
              backgroundImage={backgroundImage}
              backgroundImageMobile={backgroundImageMobile}
              heroImage={heroImage}
              heroImagePosition={180}
              altText={t("campaign:oct-2020:alt-text", {defaultValue: null})}
              title={t("common:balance-transfer:title")}
              description={t("common:balance-transfer:description")}
              lowerTitle={t("common:balance-transfer:lowerTitle")}
              lowerDescription={t("common:balance-transfer:lowerDescription")}
              textColor={theme.Colors.black}
            />
            <PromotionBanner {...this.props} type={PromotionBannerType.product} />
          </div>
          <PromotionVideo {...this.props} type={PromotionVideoType.product}/>
        </div>
        <Container
          className={css`
            width: 100%;
            margin: auto;
            padding: 120px 20px 60px;
            @media (max-width: ${theme.Config.tabletWidth}px) {
              padding-top: 0;
            }
          `}
          noGutter={true}
        >
          <Row>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={feature1Icon}
                title={t("common:balance-transfer:feature-1-title")}
                description={t("common:balance-transfer:feature-1-description")}
              />
            </Column>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={feature2Icon}
                title={t("common:balance-transfer:feature-2-title")}
                description={t("common:balance-transfer:feature-2-description")}
              />
            </Column>
            <Column xs={24} md={8} >
              <FeatureBlock
                icon={feature3Icon}
                title={t("common:balance-transfer:feature-3-title")}
                description={t("common:balance-transfer:feature-3-description")}
              />
            </Column>
          </Row>
        </Container>
        <div className="text-center hidden-small" >
          <PrimaryButton onClick={this.props.toggleLoginModal} style={{ maxWidth: "200px", margin: "0 auto 20px", height: "45px" }} data-cta-name="apply-open">{t("common:layout:apply-now")}</PrimaryButton>
        </div>
        <div className={cx("text-left text-size-small", css`padding: 0 20px; margin-bottom: 120px; color: ${theme.Colors.lightContentText}`)}>
          <div>{t("common:balance-transfer:waiver-remark")}</div>
          <div>{t("common:balance-transfer:feature-tnc", { returnObjects: true }).map((remark, id) => <div key={`bt-feature-tnc-${id}`} dangerouslySetInnerHTML={{__html: remark}}/>)}</div>
          {/* tslint:disable-next-line:jsx-self-close */}
          <p></p>
          <div>{t("common:layout:welend-reserves")}</div>
          <div>{t("common:layout:prevail-version")}</div>
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
          <Container className={css`max-width: ${theme.Config.siteContainerWidth}px; margin: auto`} >
            <Row className={"animated-container"}>
              <Column md={24} lg={16} >
                <ScrollAnimation animateIn="slideInLeft" duration={0.5} animateOnce={true}>
                  <div
                    className={cx(css`
                      width: 100%;
                      height: 620px;
                      text-align: center;
                      border-radius: 5px;
                      overflow: hidden;
                      .title {
                        font-size: 1.6rem;
                        font-weight: bold;
                      }
                      .content {
                        font-size: .8rem;
                        font-weight: 400;
                      }
                      svg {
                        margin: 40px auto;
                        width: 120px;
                        height: 75px;
                      }
                      .bt-slide {
                        width: 100%;
                        height:588px;//展开的样式
                        .bt-slide-problem {
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
                            font-size: .8rem;
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
                              font-size: .8rem;
                            }
                          }
                        }
                      }
                    `, "hidden-small margin-top-large")}
                  >
                    <SlideShow enableControlButton={true} duration={5000} full={true} navStyles={{background: "transparent", textAlign: "center"}} >
                      {this.renderSlide(t("common:balance-transfer:slide-1-problem"), cardIcon.problemIcon1 , t("common:balance-transfer:slide-1-solve"), cardIcon.solveIcon1, t("common:balance-transfer:slide-1-feature"))}
                      {this.renderSlide(t("common:balance-transfer:slide-2-problem"), cardIcon.problemIcon2, t("common:balance-transfer:slide-2-solve"), cardIcon.solveIcon2, t("common:balance-transfer:slide-2-feature"))}
                      {this.renderSlide(t("common:balance-transfer:slide-3-problem"), cardIcon.problemIcon3, t("common:balance-transfer:slide-3-solve"), cardIcon.solveIcon3, t("common:balance-transfer:slide-3-feature"))}
                      {this.renderSlide(t("common:balance-transfer:slide-4-problem"), cardIcon.problemIcon4, t("common:balance-transfer:slide-4-solve"), cardIcon.solveIcon4, t("common:balance-transfer:slide-4-feature"))}
                      {this.renderSlide(t("common:balance-transfer:slide-5-problem"), cardIcon.problemIcon5, t("common:balance-transfer:slide-5-solve"), cardIcon.solveIcon5, t("common:balance-transfer:slide-5-feature"))}
                    </SlideShow>
                  </div>
                </ScrollAnimation>
                <div
                  className={cx(css`
                    width: 100%;
                    margin-top: 30px;
                    height: 690px;
                    .bt-slide { //分辨率为414
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
                        font-size:0.6rem;
                        font-weight: 400;
                      }
                      .bt-slide-problem {
                        background: ${cardStyleConfig.problembgColor};
                        color: ${cardStyleConfig.problemColor};
                        position: relative;
                        padding: 20px 20px 0;
                        border-radius: 4px 4px 0 0;
                        height: 250px;
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
                        height: 380px;
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
                    {this.renderSlide(t("common:balance-transfer:slide-1-problem"), cardIcon.problemIcon1 , t("common:balance-transfer:slide-1-solve"), cardIcon.solveIcon1, t("common:balance-transfer:slide-1-feature"))}
                    {this.renderSlide(t("common:balance-transfer:slide-2-problem"), cardIcon.problemIcon2, t("common:balance-transfer:slide-2-solve"), cardIcon.solveIcon2, t("common:balance-transfer:slide-2-feature"))}
                    {this.renderSlide(t("common:balance-transfer:slide-3-problem"), cardIcon.problemIcon3, t("common:balance-transfer:slide-3-solve"), cardIcon.solveIcon3, t("common:balance-transfer:slide-3-feature"))}
                    {this.renderSlide(t("common:balance-transfer:slide-4-problem"), cardIcon.problemIcon4, t("common:balance-transfer:slide-4-solve"), cardIcon.solveIcon4, t("common:balance-transfer:slide-4-feature"))}
                    {this.renderSlide(t("common:balance-transfer:slide-5-problem"), cardIcon.problemIcon5, t("common:balance-transfer:slide-5-solve"), cardIcon.solveIcon5, t("common:balance-transfer:slide-5-feature"))}
                  </SlideShow>
                </div>
              </Column>
              <Column md={24} lg={8} className="hidden-small" >
                <ScrollAnimation animateIn="slideInRight" duration={0.5} animateOnce={true}>
                  <div id="calculator" className="margin-top-large" style={{height: "570px"}}>
                    <BalanceTransferCalculator loanType="balance_transfer" {...this.props} />
                    </div>
                </ScrollAnimation>
              </Column>
            </Row>
          </Container>
          <div className="visible-small" >
            <BottomToggleButton
              content={
              <div><BalanceTransferCalculator loanType="balance_transfer" {...this.props} embedMode={true} />
              </div>}
              buttonText={t("common:layout:apply-now")}
              onClick={this.props.toggleLoginModal}
              defaultShow={true}
            />
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
      </Layout>
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
    // if (selected) {
    return (
      <div>
        {/* <div onClick={this.backToCategory} className={cx(css(`margin: 15px;`), "text-color-primary")}>
            <AngleLeftIcon color={theme.Colors.primary} />
            {t(`faq:faq-data.${selectedCategory}`)}
          </div> */}
        {this.renderQuestions()}
      </div>
    );
    // } else {
    //  return this.renderCategories();
    // }
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
          <div dangerouslySetInnerHTML={{ __html: t(`common:products:balance-transfer-data.${item.answer}`) }} />
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
        {t(`common:products:balance-transfer-data.${item.question}`)}
      </div>
    );
  }
  private renderSlide(problem: string, problemImg: any, solve: string, solveImg: any, save: string) {
    const { locale, t } = this.props;

    return (
      <div className="bt-slide" >
        <div className="bt-slide-problem"  >
              <div className="title" >{t("common:balance-transfer:slide-title-problem")}</div>
               {problemImg}
              <div className="content" style={{marginBottom: ""}} >{problem}</div>
        </div>
        <div className="bt-slide-solve"  >
          <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{flex: 1}}>
             <div className="title" ><span className="text-color-secondary" >We</span>Lend {t("common:balance-transfer:slide-title-solve")}</div>
           </div>
           <div style={{flex: 2}}>{solveImg}</div>
           <div style={{flex: 3, marginBottom: "14px"}}><div className="content" >{solve}</div></div>
          </div>
          <div className="text-color-black text-bold margin-top-large feature" style={{ position: "absolute", bottom: "30px"}} ><span className={`circle ${locale}`} >{t("common:balance-transfer:save")}</span>{save}</div>
        </div>
      </div>
    );
  }

  private renderPlayer(title: string, url: string) {
    return (
      <React.Fragment>
        <FacebookPlayer url={url} showinfo={false} />
        <div
          className={css`
            line-height: 2rem;
            text-align: center;
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 10px;
            border-radius: 0 0 5px 5px;
          `}
        >
          {title}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
});

export default connect(null, mapDispatchToProps)(BalanceTransfer);
