import "animate.css/animate.min.css";
import { css, cx } from "emotion";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import * as Redux from "redux";
import "slick-carousel/slick/slick.css";
import backgroundImage from "../../../assets/images/key-visual/personal-loan/banner-bkg.jpg";
import heroImage from "../../../assets/images/key-visual/personal-loan/hero.png";
import backgroundImageMobile from "../../../assets/images/key-visual/personal-loan/mobile-banner-bkg.png";
import feature1Icon from "../../../assets/images/static-page/svg-icon/icon-ploan-01.svg";
import feature2Icon from "../../../assets/images/static-page/svg-icon/icon-ploan-02.svg";
import feature3Icon from "../../../assets/images/static-page/svg-icon/icon-ploan-03.svg";
import feature4Icon from "../../../assets/images/static-page/svg-icon/icon-ploan-04.svg";
// import 'slick-carousel/slick/slick-theme.css';
import {
  AngleLeftIcon,
  AngleRightIcon,
  BottomToggleButton, Collapse,
  Column,
  Container,
  FeatureBlock,
  HeroBanner, MinusIcon, Panel, PlusIcon,
  PrimaryButton,
  Row,
} from "../../../components";
import { QuoteBlock } from "../../../components/quoteBlock";
import Layout from "../../../containers/layout";
import PersonalLoanCalculator from "../../../containers/personalLoanCalculator";
import PromotionBanner, { PromotionBannerType } from "../../../containers/promotionBanner/PromotionBanner";
import PromotionVideo from "../../../containers/promotionVideo";
import { PromotionVideoType } from "../../../containers/promotionVideo/PromotionVideo";
import { LoginModalActions } from "../../../reducers/loginModalReducer";
import { AppProps } from "../../_app";
import {faqCategories, faqQuestions} from "../../faqs/data";
import {personalLoanQuestions} from "./data";
import personalLoanStyle from "./PersonalLoanStyle";
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
class PersonalLoan extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: "",
      questions: personalLoanQuestions,
      selected: false,
    };
  }
  public formatSliderData(t) {
    const datas = [];
    const utmSourceObj = t("common:slider-text:personal-loan", { returnObjects: true });
    Object.keys(utmSourceObj).forEach((item) => {
      datas.push(utmSourceObj[item]);
    });
    return datas;
  }
  public render(): any {
    const { locale, t, theme } = this.props;
    const { selectedCategory } = this.state;
    const style = personalLoanStyle(theme);
    const settings = {
      dots: true,
      dotsClass: "slick-dots1",
      infinite: true,
      autoplaySpeed: 10000,
      height: 300,
      autoplay: true,
    };
    // @ts-ignore
    // @ts-ignore
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:personal-loan")}
        // metaDescription={t("common:meta-data:description:personal-loan")}
        metaPath="products/personal-loan"
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
            <h1 style={{display: "none"}}>{t("common:h1:text:personal-loan")}</h1>
            <HeroBanner
              backgroundImage={backgroundImage}
              backgroundImageMobile={backgroundImageMobile}
              heroImage={heroImage}
              heroImagePosition={300}
              title={t("common:personal-loan:title")}
              description={t("common:personal-loan:description")}
              lowerTitle={t("common:personal-loan:lower-title")}
              lowerDescription={t("common:personal-loan:lower-description")}
              textColor={theme.Colors.black}
            />
            <PromotionBanner {...this.props} type={PromotionBannerType.product} />
          </div>
          <PromotionVideo {...this.props} type={PromotionVideoType.product} />
        </div>
        <Container className={style.featureContainer} noGutter={true} >
          <Row>
            <Column xs={24} md={6} >
              <FeatureBlock
                icon={feature1Icon}
                title={t("common:personal-loan:feature-1-title")}
                description={t("common:personal-loan:feature-1-description")}
              />
            </Column>
            <Column xs={24} md={6} >
              <FeatureBlock
                icon={feature2Icon}
                title={t("common:personal-loan:feature-2-title")}
                description={t("common:personal-loan:feature-2-description")}
              />
            </Column>
            <Column xs={24} md={6} >
              <FeatureBlock
                icon={feature3Icon}
                title={t("common:personal-loan:feature-3-title")}
                description={t("common:personal-loan:feature-3-description")}
              />
            </Column>
            <Column xs={24} md={6} >
              <FeatureBlock
                icon={feature4Icon}
                title={t("common:personal-loan:feature-4-title")}
                description={t("common:personal-loan:feature-4-description")}
              />
            </Column>
          </Row>
        </Container>
        <div className="text-center hidden-small" >
          <PrimaryButton onClick={this.props.toggleLoginModal} style={{ maxWidth: "200px", margin: "0 auto 20px", height: "45px" }} data-cta-name="apply-open">{t("common:layout:apply")}</PrimaryButton>
        </div>
        <div className={cx("text-left text-size-small", css`padding: 0 20px; margin-bottom: 120px; color: ${theme.Colors.lightContentText}`)}>
          {t("common:personal-loan:feature-tnc", { returnObjects: true }).map((remark, id) => <div key={`home-remark-${id}`} dangerouslySetInnerHTML={{__html: remark}}/>)}
          <div>
            <div>{t("common:layout:welend-reserves")}</div>
            <div>{t("common:layout:prevail-version")}</div>
          </div>
        </div>
        <div className={style.bottomContainer}>
          <Container className={css`max-width: ${theme.Config.siteContainerWidth}px; margin: auto`} >
            <Row className="animated-container">
              <Column xs={24} md={15} >
                <ScrollAnimation animateIn="slideInLeft" duration={0.5} animateOnce={true}>
                  <div className={style.stepContainer}>
                    <div className="step" ><span>{t("common:personal-loan:step-1")}</span></div>
                    <div className="step" ><span>{t("common:personal-loan:step-2")}</span></div>
                    <div className="step" ><span>{t("common:personal-loan:step-3")}</span></div>
                    <div className="step" ><span>{t("common:personal-loan:step-4")}</span></div>
                    <div className="step-center">
                      <div className={`text ${locale}`} >{}</div>
                    </div>
                  </div>
                </ScrollAnimation>
              </Column>
              <Column xs={9} className="hidden-small" >
                <ScrollAnimation animateIn="slideInRight" duration={0.5} animateOnce={true}>
                  <div className={style.calculatorContainer}><PersonalLoanCalculator loanType="personal_loan" {...this.props} /></div>
                </ScrollAnimation>
              </Column>
            </Row>
          </Container>
        </div>
        <div className="visible-small" >
          <BottomToggleButton
            content={<div><PersonalLoanCalculator loanType="personal_loan" {...this.props} embedMode={true} /></div>}
            buttonText={t("common:layout:apply-now")}
            onClick={this.props.toggleLoginModal}
            defaultShow={true}
          />
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
          <div dangerouslySetInnerHTML={{ __html: t(`common:products:personal-loan-data.${item.answer}`) }} />
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
        {t(`common:products:personal-loan-data.${item.question}`)}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
});
export default connect(null, mapDispatchToProps)(PersonalLoan);
