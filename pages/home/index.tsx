import { css, cx } from "emotion";
import * as _ from "lodash";
import * as moment from "moment";
import * as React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import * as Redux from "redux";
import "slick-carousel/slick/slick.css";
import placeholderImage from "../../assets/images/FFFFFF-0.png";
import leftImage from "../../assets/images/homepage-201810/left.png";
import rightImage from "../../assets/images/homepage-201810/right.png";
import mobileBannerPlaceholderEn from "../../assets/images/key-visual/homepage/homepage-banner-oct2021-en@2x.jpg";
import mobileBannerPlaceholder from "../../assets/images/key-visual/homepage/homepage-banner-oct2021-tc@2x.jpg";
import { Column, Container, Modal, ModalCard, ModalContent, ModalHeader, ModalTitle, Overlay, PrimaryButton, Row } from "../../components";
import CloseButton from "../../components/button/closeButton";
import { QuoteBlock } from "../../components/quoteBlock";
import BalanceTransferCalculator from "../../containers/balanceTransferCalculator";
import Layout from "../../containers/layout";
import MobileBottomBanner from "../../containers/mobileBottomBanner";
import PersonalLoanCalculator from "../../containers/personalLoanCalculator";
import PromotionBanner from "../../containers/promotionBanner";
import { PromotionBannerType } from "../../containers/promotionBanner/PromotionBanner";
import PromotionVideo from "../../containers/promotionVideo";
import { PromotionVideoType } from "../../containers/promotionVideo/PromotionVideo";
import appConfig from "../../lib/AppConfig";
import * as MaintenanceImage from "../../lib/MaintenanceImage";
import { isGooglePage } from "../../lib/util";
import { LoginModalActions } from "../../reducers/loginModalReducer";
import { Link } from "../../routes";
import { AppProps } from "../_app";
import homeStyle from "./HomeStyle";

interface State {
  activeBTCalculator: boolean;
  slideIndex: number;
  currentCalculatorIndex: number;
  showNotice: boolean;
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
  toggleLoginModal: () => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const noticeType = appConfig.noticeType;
    const showNotice = noticeType &&
      moment().isBetween(appConfig.noticeStartTime, appConfig.noticeEndTime) &&
      _.reject([
        "Desktop", "Mobile",
      ], (platform) => (
        `${noticeType}${platform}EN` in MaintenanceImage ||
        `${noticeType}${platform}TC` in MaintenanceImage
      ));

    this.state = {
      slideIndex: 0,
      activeBTCalculator: true,
      currentCalculatorIndex: 0,
      showNotice,
    };

    this.switchCalculator = this.switchCalculator.bind(this);
    this.renderNoticeModal = this.renderNoticeModal.bind(this);
    this.toggleNoticeModal = this.toggleNoticeModal.bind(this);
  }
  public formatSliderData(t) {
    const datas = [];
    const utmSourceObj = t("common:slider-text:index", { returnObjects: true });
    Object.keys(utmSourceObj).forEach((item) => {
      datas.push(utmSourceObj[item]);
    });
    return datas;
  }
  public render(): any {
    const { locale, t, theme, router } = this.props;
    const showQuoteBlock = isGooglePage(router.query);
    const style = homeStyle(theme);
    const settings = {
      dots: true,
      dotsClass: "slick-dots1",
      infinite: true,
      autoplaySpeed: 10000,
      height: 300,
      autoplay: true,
    };
    const { activeBTCalculator, showNotice } = this.state;
    const activeCalculatorTitle = activeBTCalculator ? t("common:balance-transfer-calculator:loan-calculator") : t("common:ploan-calculator:loan-calculator");
    return (
      // tslint:disable-next-line:jsx-alignment
      <Layout lowerWeBot={showNotice} {...this.props}
              metaTitle={t("common:meta-data:title:index")}
              metaDescription={t("common:meta-data:description:index")}
      >
        <div className={style.mainContainer} >
          <h1 style={{display: "none"}}>{t("common:h1:text:index")}</h1>
          <div className={style.topSectionContainer}>
            <div className={style.content}>
              <div className={cx(style.topSlogan, `${locale}`)} />
              <div className={style.topSection} >
                <div className={style.topSectionBackground} />
                <div>
                  <div className={style.mobileBanner}>
                    <PromotionBanner {...this.props} type={PromotionBannerType.home} />
                    <PromotionVideo {...this.props} type={PromotionVideoType.home} />
                    <img src={locale === "en" ? mobileBannerPlaceholderEn : mobileBannerPlaceholder} />
                  </div>
                  <div className={cx(style.desktopBanner, `${locale}`)}>
                    <PromotionBanner {...this.props} type={PromotionBannerType.home} />
                    <PromotionVideo {...this.props} type={PromotionVideoType.home} />
                  </div>
                </div>
                <div className={style.calculatorContainer} >
                  <div className={cx(style.switchCulatorContainer)}>
                    <div className={cx(style.switchCalculatorButton)} onClick={this.switchCalculator}>
                      <button className={activeBTCalculator ? style.nonActiveCalculatorSwitchButton : style.activeCalculatorSwitchButton}><span>{activeCalculatorTitle}</span></button>
                    </div>
                    <div className={activeBTCalculator ? style.nonActiveCalculator : style.activeCalculator}>
                      <BalanceTransferCalculator loanType="balance_transfer" {...this.props} />
                    </div>
                    <div className={activeBTCalculator ? style.activeCalculator : style.nonActiveCalculator} >
                      <PersonalLoanCalculator loanType="personal_loan" {...this.props} />
                    </div>
                  </div>
                  <div className={cx(style.switchCalculatorCarousel, `${this.state.activeBTCalculator ? "bt" : "ploan"}`)}>
                    <div className={cx(style.switchCalculatorButton, `ploan ${this.state.activeBTCalculator ? "" : "active"}`)} onClick={this.switchCalculator} >
                      <button className={cx(style.activeCalculatorSwitchButton)}><span>{t("common:ploan-calculator:loan-calculator")}</span></button>
                    </div>
                    <div className={cx(style.switchCalculatorButton, `bt ${this.state.activeBTCalculator ? "active" : ""}`)} onClick={this.switchCalculator} >
                      <button className={cx(style.nonActiveCalculatorSwitchButton)}><span>{t("common:balance-transfer-calculator:loan-calculator")}</span></button>
                    </div>
                    <div className={cx(style.switchCalculatorCarouselContainer, `${this.state.activeBTCalculator ? "bt" : "ploan"}`)}>
                      <div className={cx(style.switchCalculatorCarouselSlide)} ><PersonalLoanCalculator loanType="personal_loan" {...this.props} /></div>
                      <div className={cx(style.switchCalculatorCarouselSlide)} ><BalanceTransferCalculator loanType="balance_transfer" {...this.props} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.middleSection}>
            <Container noGutter={true}>
              <Row>
                <Column xs={24} md={12} style={{ background: theme.Colors.primary, color: "#fff" }}>
                  <div className={cx(style.featureBlock, "left")}>
                    <div className="feature-animation feature-1">
                      <img src={placeholderImage} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: t("common:home:lead-in1") }} />
                      <div className={`details ${locale}`} dangerouslySetInnerHTML={{ __html: t("common:home:lead-in1-details") }} />

                    </div>
                  </div>
                </Column>
                <Column xs={24} md={12} style={{ background: "#fff" }} className="hidden-small" >
                  <div className={cx(style.featureBlock, "right")}>
                    <div className="feature-animation feature-2">
                      <img src={placeholderImage} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: t("common:home:lead-in2") }} />
                      <div className={`details ${locale}`} dangerouslySetInnerHTML={{ __html: t("common:home:lead-in2-details") }} />
                    </div>
                  </div>
                </Column>
                <Column xs={24} md={12} style={{ background: "#fff" }} className="visible-small" >
                  <div className={cx(style.featureBlock, "left")}>
                    <div className="feature-animation feature-3">
                      <img src={placeholderImage} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: t("common:home:lead-in3") }} />
                      <div className={`details ${locale}`} dangerouslySetInnerHTML={{ __html: t("common:home:lead-in3-details") }} />
                    </div>
                  </div>
                </Column>
                <Column xs={24} md={12} className={cx(style.middleSlogan, "visible-small")} >
                  {/* {t("common:home:more-instant")} */}
                </Column>
                <Column xs={24} md={12} style={{ background: "#fff" }} className="hidden-small" >
                  <div className={cx(style.featureBlock, "left")}>
                    <div className="feature-animation feature-3">
                      <img src={placeholderImage} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: t("common:home:lead-in3") }} />
                      <div className={`details ${locale}`} dangerouslySetInnerHTML={{ __html: t("common:home:lead-in3-details") }} />
                    </div>
                  </div>
                </Column>
                <Column xs={24} md={12} style={{ background: theme.Colors.secondary, color: "#fff" }} >
                  <div className={cx(style.featureBlock, "right")}>
                    <div className="feature-animation feature-4">
                      <img src={placeholderImage} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: t("common:home:lead-in4") }} />
                      <div className={`details ${locale}`} dangerouslySetInnerHTML={{ __html: t("common:home:lead-in4-details") }} />
                    </div>
                  </div>
                </Column>
                <Column xs={24} md={12} style={{ background: "#fff" }} className="visible-small" >
                  <div className={cx(style.featureBlock, "right")}>
                    <div className="feature-animation feature-2">
                      <img src={placeholderImage} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: t("common:home:lead-in2") }} />
                      <div className={`details ${locale}`} dangerouslySetInnerHTML={{ __html: t("common:home:lead-in2-details") }} />
                    </div>
                  </div>
                </Column>
              </Row>
            </Container>
            <div className={style.featureWrapper}>
              <div className="content">
                <div className="title">{t("common:home:more-reliable-more-instant")}</div>
                <div className="title" dangerouslySetInnerHTML={{ __html: t("common:home:that-a-weLend-ai-loan") }} />
                <PrimaryButton
                  className="margin-top"
                  style={{ maxWidth: "120px", margin: "auto", height: "45px" }}
                  onClick={this.props.toggleLoginModal}
                  data-cta-name="feature-wrapper-button"
                >
                  {t("common:layout:apply-now")}
                </PrimaryButton>
              </div>
            </div>
            <div className={style.slider}>
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
            </div>
          </div>
          <div className={cx(style.tncSection, "text-color-light text-size-small")}>
            {t("common:home:remark-1", { returnObjects: true }).map((remark, id) => <div key={`home-remark-${id}`}>{remark}</div>)}
            <div>{t("common:layout:welend-reserves")}</div>
            <div>{t("common:layout:prevail-version")}</div>
          </div>
        </div>
        <MobileBottomBanner {...this.props} />
        {this.renderNoticeModal()}
      </Layout>
    );
  }

  private switchCalculator(): any {
    this.setState({ activeBTCalculator: !this.state.activeBTCalculator });
  }

  private renderNoticeModal(): any {
    const { locale, theme } = this.props;
    const { showNotice } = this.state;
    const style = homeStyle(theme);

    if (!showNotice) {
      return null;
    }
    const noticeType = appConfig.noticeType;

    return (
      <Overlay
        show={showNotice}
        centralise={true}
        hideCloseButton={true}
      >
        <div className={cx(style.noticeDesktop)}  >
          <CloseButton onClick={this.toggleNoticeModal} className={style.inlineNoticeCloseButton} />
          <img src={MaintenanceImage[`${noticeType}Desktop${locale.toUpperCase()}`]} />
        </div>
        <div className={cx(style.noticeMobile)} >
          <CloseButton onClick={this.toggleNoticeModal} className={style.inlineNoticeCloseButton} />
          <img src={MaintenanceImage[`${noticeType}Mobile${locale.toUpperCase()}`]} />
        </div>
      </Overlay>
    );
  }

  private toggleNoticeModal(): any {
    const { showNotice } = this.state;
    this.setState({
      showNotice: !showNotice,
    });
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
});

export default connect(null, mapDispatchToProps)(Home);
