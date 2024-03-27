import { css, cx } from "emotion";
import * as React from "react";
import withtheme, { InjectedThemeProps } from "../../theme/withTheme";

interface State {
}

interface OwnProps {
  image?: string;
  imageMobile?: string;
  iconMobile?: string;
  altText?: string;
  redirectURL?: string;
  newTab?: boolean;
  className?: any;
  applyButton?: boolean;
  handleBannerOnClick?: () => any;
  type: string;
  ctaName?: string;
  nonBackground?: boolean;
}

export type Props = OwnProps & InjectedThemeProps;

class CampaignBanner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.renderBanner = this.renderBanner.bind(this);
    this.handleRedirection = this.handleRedirection.bind(this);
  }

  public render(): any {
    const { className, theme, image, imageMobile } = this.props;
    const containerStyle = css`
      width: 100%;
      position: relative;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        position: relative;
        + div {
          margin-top: 106px;
        }
      }
    `;

    return image || imageMobile ? (
      <div className={cx("campaign-banner-container", containerStyle, className)}>
        {this.renderBanner()}
      </div>
    ) : null;
  }

  private renderBanner(): any {
    const { children, theme, image, imageMobile, altText, redirectURL, applyButton, handleBannerOnClick, type, ctaName, nonBackground } = this.props;
    const imageStyle = cx("banner-image-container", css`
      cursor: pointer;
      display: ${ image ? `block` : `none`};
      margin: 0 auto;
      width: 100%;
      height: auto;
      background-size: 1920px 100%;
      background-repeat: no-repeat;
      background-position: center center;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        display: ${ imageMobile ? `block` : `none`};
        margin-bottom: 0;
        height: auto;
        background-color: #000712;
        background-size: auto 100%;
        object-fit: contain;
      }
      @media (max-width: ${theme.Config.smallMobileWidth}px) {
        height: auto;
      }
    `);
    const desktop = css`
      .banner-image-container& {
        margin-bottom: -9px;
        margin-right: -9px;
        @media (max-width: ${theme.Config.tabletWidth}px) {
          display: none;
      }}
    `;
    const mobile = css`
      .banner-image-container& {
      @media (min-width: ${theme.Config.tabletWidth}px) {
        display: none;
      }}
    `;

    const dataCtaName = (redirectURL && ctaName) ? ctaName : `campaign-banner-${type}`;
    const handleOnClick = (() => {
      if (redirectURL) {
        return this.handleRedirection;
      } else {
        return applyButton ? null : handleBannerOnClick;
      }
    })();

    return (
      <div>
        <div onClick={handleOnClick}><img
          className={cx(imageStyle, desktop)}
          src={image}
          alt={altText}
          data-cta-name={dataCtaName}
        /></div>
        <div onClick={handleOnClick}><img
          className={cx(imageStyle, mobile)}
          src={imageMobile}
          alt={altText}
          data-cta-name={dataCtaName}
        /></div>
        {children}
      </div>
    );
  }

  private handleRedirection(): any {
    const { redirectURL, newTab } = this.props;
    window.open(
      redirectURL,
      newTab ? "_blank" : "_self",
    );
  }
}

export default withtheme(CampaignBanner);
