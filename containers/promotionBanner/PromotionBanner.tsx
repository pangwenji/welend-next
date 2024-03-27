import { css, cx, injectGlobal } from "emotion";
import * as moment from "moment";
import Router from "next/router";
import * as React from "react";
import Lottie from "react-lottie";
import { connect } from "react-redux";
import * as Redux from "redux";
import { CampaignBanner, Carousel, Modal, ModalCard, ModalContent, ModalHeader, ModalTitle, PrimaryButton } from "../../components";
import Overlay from "../../components/overlay";
import AppConfig, { bannerTypes, PromotionBanner as PromotionBannerInfo, tncContentVisualTypes } from "../../lib/AppConfig";
import { AppProps } from "../../pages/_app";
import { ImmutableRootState } from "../../reducers";
import { LoginModalActions } from "../../reducers/loginModalReducer";
import { getLastUtm } from "../../services/utils";
import CountdownTimer from "../countdownTimer";
import promotionBannerStyle from "./PromotionBannerStyle";

interface State {
  showTnc: boolean;
  showOverlay?: boolean;
  showBanner?: boolean[];
  images: Array<{
    tc: PromotionBannerImages | {},
    en?: PromotionBannerImages | {},
  }>;
  promotionBannerInfos: PromotionBannerInfo[];
  activeBannerIndex: number;
  banners: HTMLDivElement[] | [];
  heroBanners: HTMLDivElement[] | [];
  iconBanners: HTMLDivElement[] | [];
  mobileBanners: HTMLDivElement[] | [];
}

export enum PromotionBannerType {
  home = "home",
  product = "product",
}

interface StateProps { }

interface OwnProps {
  type: PromotionBannerType;
  toggleLoginModal: () => any;
}

interface PromotionBannerImages {
  icon?: PromotionBannerInfo["icon"];
  tncContentVisual?: PromotionBannerInfo["tncContentVisual"]["visual"];
  banner?: PromotionBannerInfo["bannerImageDesktop"];
  bannerMobile?: PromotionBannerInfo["bannerImageMobile"];
}

type Props = OwnProps & StateProps & AppProps;

class PromotionBanner extends React.Component<Props, State> {
  public static getDerivedStateFromProps(props, state): any {
    const { theme, locale, router } = props;
    const style = promotionBannerStyle(theme);
    const promotionBannerInfos = AppConfig.promotionBanner.filter((offer, id) => {
      const now = moment(new Date());
      const start = moment(offer.startDatetime);
      const end = moment(offer.endDatetime);
      return now.isBetween(start, end) && offer.pages.some((page) => page === router.pathname.split("/").pop());
    });
    const showBanner = [];
    const images = [];
    const banners = [];
    const heroBanners = [];
    const iconBanners = [];
    const mobileBanners = [];
    const validUtms = promotionBannerInfos.filter((offer) => !offer.skipUtm).map((offer) => offer.campaignCode);
    if (promotionBannerInfos && promotionBannerInfos.length > 0) {
      promotionBannerInfos.forEach((promotionBannerInfo, id) => {
        const isIconBanner = promotionBannerInfo.bannerType === bannerTypes.icon;
        const showCurrentBanner = shouldShowPromotionBanner(promotionBannerInfo, locale, validUtms, router.query);
        showBanner.push(showCurrentBanner);
        images.push({
          id,
          tc: {
            icon: promotionBannerInfo.icon,
            tncContentVisual: promotionBannerInfo.tncContentVisual && promotionBannerInfo.tncContentVisual.visual,
            banner: promotionBannerInfo.bannerImageDesktop,
            bannerMobile: promotionBannerInfo.bannerImageMobile,
            iconMobile: promotionBannerInfo.iconMobile,
          },
          en: {
            icon: promotionBannerInfo.iconEN,
            tncContentVisual: promotionBannerInfo.tncContentVisual && promotionBannerInfo.tncContentVisual.visualEN,
            banner: promotionBannerInfo.bannerImageDesktopEN,
            bannerMobile: promotionBannerInfo.bannerImageMobileEN,
            iconMobile: promotionBannerInfo.iconMobileEN,
          },
        });
        if (showCurrentBanner) {
          switch (promotionBannerInfo.bannerType) {
            case bannerTypes.icon:
              iconBanners.push({...promotionBannerInfo, id});
              break;
            case bannerTypes.heroBanner:
              heroBanners.push({...promotionBannerInfo, id});
              break;
            default:
              banners.push({...promotionBannerInfo, id});
              break;
          }
          if (promotionBannerInfo[`bannerImageMobile${locale === "tc" ? "" : locale.toUpperCase()}`] && promotionBannerInfo.bannerType !== bannerTypes.heroBanner) {
            mobileBanners.push({...promotionBannerInfo, id});
          }
          if (isIconBanner) {
            injectGlobal(style.injectGlobal);
          }
        }
      });
    }
    return { ...state, showBanner, images, promotionBannerInfos, banners, heroBanners, iconBanners, mobileBanners };
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      showTnc: true,
      showOverlay: false,
      showBanner: [],
      images: [],
      promotionBannerInfos: null,
      activeBannerIndex: 0,
      banners: [],
      heroBanners: [],
      iconBanners: [],
      mobileBanners: [],
    };
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggerTnc = this.toggerTnc.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.renderCampaignBanner = this.renderCampaignBanner.bind(this);
    this.renderTncModal = this.renderTncModal.bind(this);
    this.renderApplyBtn = this.renderApplyBtn.bind(this);
    this.renderTncBtn = this.renderTncBtn.bind(this);
    this.renderTncOverlay = this.renderTncOverlay.bind(this);
    this.currentPageBanner = this.currentPageBanner.bind(this);
    this.isMobile = this.isMobile.bind(this);
  }

  public render(): any {
    const { theme } = this.props;
    const { images, promotionBannerInfos, banners, heroBanners, iconBanners, mobileBanners } = this.state;
    const containerStyle = promotionBannerInfos && promotionBannerInfos.some(({ bannerType }) => bannerType === bannerTypes.icon) ? cx(css(`
      position: relative;
      z-index: auto;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        z-index: auto;
      }
    `)) : cx(css(`
      position: relative;
      right: 0;
      bottom: 0;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        position: relative;
        top: 0;
        bottom: 0;
        z-index: auto;
      }
    `));

    const desktopBanner = css(`
      @media (max-width: ${theme.Config.tabletWidth}px) {
        display: none;
      }
    `);

    const mobileBanner = css(`
      margin-bottom: 0px;
      @media (min-width: ${theme.Config.tabletWidth}px) {
        display: none;
        margin-bottom: 0;
      }
    `);

    const carouselConfig = {
      interval: 3000,
      swipeable: promotionBannerInfos && images.length > 1,
    };

    return (
      <div>
        <div
          className={containerStyle}
        >
          <div className={desktopBanner}>
            {this.renderCampaignBanner(banners)}
            {this.renderCampaignBanner(iconBanners)}
          </div>
          <Carousel className={mobileBanner} config={carouselConfig}>
            {this.renderCampaignBanner(mobileBanners)}
          </Carousel>
          {this.renderCampaignBanner(heroBanners)}
        </div>
        {this.renderCountdown()}
        {this.renderTncModal()}
      </div>
    );
  }

  private renderCampaignBanner(bannerInfos) {
    const { theme, locale, type, t } = this.props;
    const { images } = this.state;
    return bannerInfos.map(({bannerType, id, applyButton, tnc, tncButton, bannerImageAltText, redirectURL, redirectURLEN, redirectURLMobile, redirectURLMobileEN, tncRedirectURL, tncRedirectURLEN}) => {
      const style = promotionBannerStyle(theme);
      const isIconBanner = bannerType === bannerTypes.icon;
      const isHeroBanner = bannerType === bannerTypes.heroBanner;
      const isHomeLeftBanner = bannerType === bannerTypes.homeLeftBanner;
      const containerStyle = isIconBanner ? style.bannerContainer : null;
      const iconBannerStyle = isIconBanner ? style.iconBanner : null;
      const heroBannerStyle = isHeroBanner ? style.heroBanner : null;
      const homeLeftBannerStyle = isHomeLeftBanner ? style.homeLeftBanner : null;
      const bannerOnClick = () => this.toggleOverlay(id);
      const currentBannerImages = images[id][locale];
      const isMobile = this.isMobile();
      const redirectTncLink = locale === "tc" ? tncRedirectURL : tncRedirectURLEN;
      let redirectLink = locale === "tc" ? redirectURL : redirectURLEN;
      if (isMobile && !!(redirectURLMobile || redirectURLMobileEN)) {
        redirectLink = locale === "tc" ? redirectURLMobile : redirectURLMobileEN;
      }
      return (
        <CampaignBanner
          key={`campaign-banner-${id}`}
          className={cx(containerStyle, iconBannerStyle, heroBannerStyle, homeLeftBannerStyle)}
          image={isIconBanner ? currentBannerImages.icon : currentBannerImages.banner}
          imageMobile={currentBannerImages.bannerMobile}
          mobileIcon={currentBannerImages.iconMobile}
          altText={t(bannerImageAltText, {defaultValue: null})}
          newTab={true}
          type={type}
          applyButton={applyButton}
          handleBannerOnClick={isIconBanner && currentBannerImages.icon ? bannerOnClick : this.toggleLoginModal}
          nonBackground={isHeroBanner}
          redirectURL={redirectLink}
        >
          {type !== PromotionBannerType.home && applyButton && this.renderApplyBtn()}
          {(tnc || redirectTncLink) && this.renderTncBtn(redirectTncLink, id, isHeroBanner && tncButton)}
        </CampaignBanner>
      );
    });
  }

  private renderTncModal(): any {
    const { showOverlay, activeBannerIndex, promotionBannerInfos } = this.state;
    if (showOverlay && promotionBannerInfos[activeBannerIndex].tnc) {
      if (promotionBannerInfos[activeBannerIndex].bannerType === bannerTypes.icon) {
        return this.renderOverlay();
      } else {
        return this.renderTncOverlay();
      }
    }
    return null;
  }

  private renderOverlay() {
    const { locale, t, theme, ...props } = this.props;
    const { showTnc, images, promotionBannerInfos, activeBannerIndex } = this.state;
    const desktopBanner = promotionBannerInfos[activeBannerIndex];
    const bannerImage = images[activeBannerIndex][locale];
    const style = promotionBannerStyle(theme);
    const lottieMobileStyle = css`
      @media (max-width: ${theme.Config.tabletWidth}px) {
        > div {
          max-width: 336px;
          margin: 0 auto;
        }
      }
    `;
    return (
      <Overlay
        show={this.state.showOverlay}
        onClose={this.toggleOverlay}
        popupStyle={style.overlay}
        {...props}
      >
        {
          desktopBanner.tncContentVisual && (
            <div className={lottieMobileStyle}>
              {desktopBanner.tncContentVisual.type === tncContentVisualTypes.lottie ? (
                <Lottie
                  options={{
                    loop: false,
                    autoplay: true,
                    animationData: bannerImage.tncContentVisual,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }
                  }
                  height="auto"
                  width="auto"
                />
              ) : (
                  <div className={css`text-align: center`} >
                    <img className={css`max-width: 400px; width: 100%;`} src={bannerImage.tncContentVisual} />
                  </div>
                )}
            </div>
          )
        }
        <div className={css`color: ${theme.Colors.lightContentText}; margin-top: 15px; font-size: 12px;`}>
          <a className={css`display: inline-block; width: 100%;`} href="javascript:void(0)" onClick={this.toggerTnc}>
            <span className={css`float: right;`}>{showTnc ? "-" : "+"}</span>
            <span>{t(`${desktopBanner.tnc}:title`)}</span>
          </a>
          {showTnc ? <div
            className={css`
                table { width: 100%;}
                td { border: 1px solid; padding: 5px;}
              `}
            dangerouslySetInnerHTML={{ __html: t(`${desktopBanner.tnc}:tnc`) }}
          /> : null}
        </div>
      </Overlay>
    );
  }

  private renderApplyBtn() {
    const { type, t, theme } = this.props;
    const { promotionBannerInfos, activeBannerIndex } = this.state;
    const style = promotionBannerStyle(theme);
    if (type !== PromotionBannerType.home && promotionBannerInfos && promotionBannerInfos[activeBannerIndex].applyButton) {
      return (
        <div className={style.applyButton}>
          <div className={css`display: inline-block;`} onClick={this.toggleLoginModal} data-cta-name="apply-open">
            <PrimaryButton>{t("campaign:jan2019:buttonText")}</PrimaryButton>
          </div>
        </div>
      );
    }
    return null;
  }

  private renderTncBtn(redirectTncLink, activeBannerIndex, showTncButtonText = false) {
    const { theme, t } = this.props;
    const style = promotionBannerStyle(theme);
    const onClick = () => {
      if (redirectTncLink) {
        window.open(redirectTncLink, "_blank");
      } else {
        this.toggleOverlay(activeBannerIndex);
      }
    };
    return (
      <span
        onClick={onClick}
        className={cx(style.tncButton, showTncButtonText && style.heroBannerTncButton)}
      >
        <span dangerouslySetInnerHTML={{ __html: showTncButtonText ? t("common:tnc-button") : "" }} />
      </span>
    );
  }

  private renderTncOverlay() {
    const { t, theme } = this.props;
    const { promotionBannerInfos, activeBannerIndex } = this.state;
    const activeBanner = promotionBannerInfos[activeBannerIndex];
    return (
      <Modal
        open={this.state.showOverlay}
      >
        <ModalCard
          className={css(`
            margin: auto;
            height: 80%;
            overflow: auto;
            @media (min-width: ${theme.Config.tabletWidth}px) {
              width: 50%;
              left: 0;
              right: 0;
            }
          `)}
        >
          <ModalHeader onClose={this.toggleOverlay}>
            <ModalTitle>
              {t(`${activeBanner.tnc}:title`)}
            </ModalTitle>
          </ModalHeader>
          <ModalContent>
            <div
              className={css`
                table { width: 100%;}
                td { border: 1px solid; padding: 5px;}
              `}
              dangerouslySetInnerHTML={{ __html: t(`${activeBanner.tnc}:tnc`) }}
            /></ModalContent>
        </ModalCard>
      </Modal>
    );
  }

  private toggleLoginModal(): void {
    this.props.toggleLoginModal();
  }

  private toggerTnc(): void {
    this.setState({ showTnc: !this.state.showTnc });
  }

  private toggleOverlay(activeBannerIndex = null): void {
    this.setState({ showOverlay: !this.state.showOverlay, activeBannerIndex });
  }

  private currentPageBanner(): PromotionBannerInfo[] {
    const currentOffer = AppConfig.promotionBanner.filter((offer, id) => {
      const { router } = this.props;
      const now = moment(new Date());
      const start = moment(offer.startDatetime);
      const end = moment(offer.endDatetime);
      return now.isBetween(start, end) && offer.pages.some((page) => page === router.pathname.split("/").pop());
    });
    return currentOffer;
  }

  private renderCountdown(): any {
    const { promotionBannerInfos, activeBannerIndex } = this.state;
    return promotionBannerInfos && promotionBannerInfos[activeBannerIndex] && promotionBannerInfos[activeBannerIndex].timerBackground ? <CountdownTimer {...this.props} promotionOffer={promotionBannerInfos[activeBannerIndex]} /> : null;
  }

  private isMobile(): boolean {
    return typeof window !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}

const mapStateToProps = (state: ImmutableRootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
});

export const shouldShowPromotionBanner = (promotionBannerInfo: PromotionBannerInfo, locale: string, validUtms: string[], query: any) => {
  // client side only
  if (promotionBannerInfo) {
    const now = moment(new Date());
    const start = moment(promotionBannerInfo.startDatetime);
    const end = moment(promotionBannerInfo.endDatetime);
    const utmCampaignFromUrl = query.utm_campaign;
    const utmSourceFromUrl = query.utm_source;
    const lastUtmCampaignCode = utmCampaignFromUrl || getLastUtm("campaign");
    const lastUtmSourceCode = utmSourceFromUrl || getLastUtm("source");
    const isPromoPeriod = now.isBetween(start, end);
    const isUtmCampaign = lastUtmCampaignCode && promotionBannerInfo.campaignCode && lastUtmCampaignCode === promotionBannerInfo.campaignCode;
    const isUtmSource = lastUtmSourceCode && promotionBannerInfo.sourceCode && lastUtmSourceCode === promotionBannerInfo.sourceCode;
    const bannerLocale = locale === "tc" ? "" : "EN";
    const currentLocaleBanner = !!promotionBannerInfo[`icon${bannerLocale}`] || !!(promotionBannerInfo[`bannerImageDesktop${bannerLocale}`] || promotionBannerInfo[`bannerImageMobile${bannerLocale}`]);
    const validUtm = validUtms.includes(lastUtmCampaignCode);
    return (
      currentLocaleBanner &&
      isPromoPeriod &&
      // show banners which has no campaign code(skip_utm: true) when no or invalid campaign code given in url/cookie
      ((promotionBannerInfo.skipUtm && !validUtm) || !!isUtmCampaign) &&
      (promotionBannerInfo.sourceCode === null || isUtmSource)
    );
  }
  return false;
};

export default connect(mapStateToProps, mapDispatchToProps)(PromotionBanner);
