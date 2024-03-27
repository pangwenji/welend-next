import "animate.css/animate.min.css";
import { css, cx } from "emotion";
import * as React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import * as Redux from "redux";
import "slick-carousel/slick/slick.css";
import {
  AngleRightIcon,
  Collapse,
  Column,
  Container,
  FeatureBlock,
  HeroBanner,
  MinusIcon,
  Panel,
  PlusIcon,
  PrimaryButton,
  Row,
} from "../../../components";
import { QuoteBlock } from "../../../components/quoteBlock";
import Layout from "../../../containers/layout";
import { LoginModalActions } from "../../../reducers/loginModalReducer";
import { AppProps } from "../../_app";
import { faqCategories, faqQuestions } from "../../faqs/data";
import { balanceTransferQuestions } from "../balance-transfer/data";
import { propertyOwnerQuestions } from "./data";
import propertyOwnerLoanStyle from "./PropertyOwnerLoanStyle";

import backgroundImage from "../../../assets/images/key-visual/common/banner-bkg.jpg";
import heroImage from "../../../assets/images/key-visual/property-owner-loan/hero.png";
import backgroundImageMobile from "../../../assets/images/key-visual/property-owner-loan/mobile-banner-bkg@2x.jpg";
import feature1Icon from "../../../assets/images/static-page/svg-icon/icon-pol-01.svg";
import feature2Icon from "../../../assets/images/static-page/svg-icon/icon-pol-02.svg";
import feature3Icon from "../../../assets/images/static-page/svg-icon/icon-pol-03.svg";
import feature4Icon from "../../../assets/images/static-page/svg-icon/icon-pol-04.svg";
import feature5Icon from "../../../assets/images/static-page/svg-icon/icon-pol-05.svg";
import feature6Icon from "../../../assets/images/static-page/svg-icon/icon-pol-06.svg";
import PromotionBanner, {
  PromotionBannerType,
} from "../../../containers/promotionBanner/PromotionBanner";
import PromotionVideo from "../../../containers/promotionVideo";
import { PromotionVideoType } from "../../../containers/promotionVideo/PromotionVideo";

interface State {
  selectedCategory: string;
  questions: any[];
  selected: boolean;
}

interface StateProps {}

interface OwnProps {}

export interface DispatchProps {
  toggleLoginModal: () => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class PropertyOwnerLoan extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: "",
      questions: propertyOwnerQuestions,
      selected: false,
    };

    const renderPageRemark = this.renderPageRemark.bind(this);
  }
  public formatSliderData(t) {
    const datas = [];
    const utmSourceObj = t("common:slider-text:property-owner-loan", {
      returnObjects: true,
    });
    Object.keys(utmSourceObj).forEach((item) => {
      datas.push(utmSourceObj[item]);
    });
    return datas;
  }
  public render(): any {
    const { t, theme } = this.props;
    const style = propertyOwnerLoanStyle(theme);
    const showQuoteBlock = true;
    const settings = {
      dots: true,
      dotsClass: "slick-dots1",
      infinite: true,
      autoplaySpeed: 10000,
      height: 300,
      autoplay: true,
    };
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:property-owner-loan")}
        metaDescription={t("common:meta-data:description:property-owner-loan")}
        metaPath="products/property-owner-loan"
      >
        <div
          className={css`
            position: relative;
          `}
        >
          <div
            className={css`
              @media (max-width: ${theme.Config.tabletWidth}px) {
                display: flex;
                flex-direction: column-reverse;
              }
            `}
          >
            <h1 style={{ display: "none" }}>
              {t("common:h1:text:property-owner-loan")}
            </h1>
            <HeroBanner
              backgroundImage={backgroundImage}
              backgroundImageMobile={backgroundImageMobile}
              heroImage={heroImage}
              heroImagePosition={180}
              title={t("common:property-owner-loan:title")}
              description={t("common:property-owner-loan:description")}
              lowerTitle={t("common:property-owner-loan:lowerTitle")}
              lowerDescription={t(
                "common:property-owner-loan:lowerDescription",
              )}
              textColor={theme.Colors.black}
            />
            <PromotionBanner
              {...this.props}
              type={PromotionBannerType.product}
            />
          </div>
          <PromotionVideo {...this.props} type={PromotionVideoType.product} />
        </div>
        <Container className={style.featureContainer} noGutter={true}>
          <Row>
            <Column xs={24} md={8}>
              <FeatureBlock
                icon={feature1Icon}
                title={t("common:property-owner-loan:feature-1-title")}
                description={t(
                  "common:property-owner-loan:feature-1-description",
                )}
              />
            </Column>
            <Column xs={24} md={8}>
              <FeatureBlock
                icon={feature2Icon}
                title={t("common:property-owner-loan:feature-2-title")}
                description={t(
                  "common:property-owner-loan:feature-2-description",
                )}
              />
            </Column>
            <Column xs={24} md={8}>
              <FeatureBlock
                icon={feature3Icon}
                title={t("common:property-owner-loan:feature-3-title")}
                description={t(
                  "common:property-owner-loan:feature-3-description",
                )}
              />
            </Column>
          </Row>
          <Row className={style.featureBlockRow}>
            <Column xs={24} md={8}>
              <FeatureBlock
                icon={feature4Icon}
                title={t("common:property-owner-loan:feature-4-title")}
                description={t(
                  "common:property-owner-loan:feature-4-description",
                )}
              />
            </Column>
            <Column xs={24} md={8}>
              <FeatureBlock
                icon={feature5Icon}
                title={t("common:property-owner-loan:feature-5-title")}
                description={t(
                  "common:property-owner-loan:feature-5-description",
                )}
              />
            </Column>
            <Column xs={24} md={8}>
              <FeatureBlock
                icon={feature6Icon}
                title={t("common:property-owner-loan:feature-6-title")}
                description={t(
                  "common:property-owner-loan:feature-6-description",
                )}
              />
            </Column>
          </Row>
        </Container>
        <div className="text-center">
          <PrimaryButton
            onClick={this.props.toggleLoginModal}
            style={{ maxWidth: "200px", margin: "0 auto 60px", height: "45px" }}
            data-cta-name="apply-open"
          >
            {t("common:property-owner-loan:apply")}
          </PrimaryButton>
        </div>
        <div
          className={cx(
            css`
              padding: 0px 20px;
              margin: 20 0 120px;
              @media (max-width: ${theme.Config.mobileWidth}px) {
                margin-bottom: 60px;
              }
            `,
            "text-color-light text-size-small text-left margin-top",
          )}
        >
          {this.renderPageRemark()}
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
          <div
            className={cx("text-color-light", style.remarkContent)}
            dangerouslySetInnerHTML={{
              __html: t("common:remark-text:personal-loan"),
            }}
          />
        </Container>
        <div
          className={cx(
            css(
              `
          background-color: #F0F2F2;
          padding-top: 60px;
          @media (max-width: ${theme.Config.mobileWidth}px) {
            padding: 30px 0;
          }
        `,
              "",
            ),
          )}
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
                <div
                  className={cx(
                    css`
                      margin-bottom: 32px;
                    `,
                    "text-size-double",
                  )}
                >
                  {t(`common:products:title`)}
                </div>
                <div
                  className={css`
                    padding: 30px 0;
                    margin: 0px 80px;
                  `}
                >
                  {this.renderQuestions()}
                </div>
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
            <div className="text-size-double text-left">{t("faq:title")}</div>
            {this.renderMobile()}
          </div>
        </div>
      </Layout>
    );
  }
  public handleCategoryClick = (selectedCategory) => {
    return () => {
      const questions =
        selectedCategory === faqCategories.all
          ? faqQuestions
          : faqQuestions.filter(
              (question) => question.category === selectedCategory,
            );
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
          className={cx(
            css(`
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
          `),
            `padding-top padding-bottom cursor-pointer ${
              selectedCategory === item && "text-color-primary"
            }`,
          )}
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
          <div
            dangerouslySetInnerHTML={{
              __html: t(`common:products:property-owner-data.${item.answer}`),
            }}
          />
        </Panel>
      );
    });
  }
  public renderPanelHeader(item) {
    const { t, theme } = this.props;
    return (
      <div
        className={cx(
          css(`
        font-size:  1.2rem;
        @media (max-width: ${theme.Config.tabletWidth}px) {
          font-size: 1rem;
        }
      `),
          "text-color-primary",
        )}
      >
        {t(`common:products:property-owner-data.${item.question}`)}
      </div>
    );
  }
  private renderPageRemark(): any {
    const { t, router } = this.props;
    const remark = `${t("common:property-owner-loan:remark-1")} ${t(
      "common:utm-source:pol-google:page-tnc",
    )} ${t("common:property-owner-loan:welend-reserves")}`;
    return (
      <React.Fragment>
        <div>{t("common:property-owner-loan:remark-1")}</div>
        {/*<div>{remark}</div>*/}
        <div>{t("common:property-owner-loan:remark-2")}</div>
        <div>{t("common:property-owner-loan:remark-3")}</div>
        <div>{t("common:property-owner-loan:welend-reserves")}</div>
        <div>{t("common:layout:prevail-version")}</div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
});

export default connect(null, mapDispatchToProps)(PropertyOwnerLoan);
