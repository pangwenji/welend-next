import { css } from "emotion";
import * as React from "react";
import { Column, Container, Row } from "../../components";
import FacebookPlayer from "../../components/facebookPlayer";
import Overlay from "../../components/overlay";
import YoutubePlayer from "../../components/youtubePlayer";
import config from "../../config";
import AppConfig, { CampaignVideo } from "../../lib/AppConfig";
import { AppProps } from "../../pages/_app";

interface State {
  videoHeight: number;
  currentPageVideo: boolean | CampaignVideo;
  showOverlay?: boolean;
}

export enum PromotionVideoType {
  home = "home",
  product = "product",
}

interface OwnProps {
  type: PromotionVideoType;
}

type Props = OwnProps & AppProps;

class PromotionVideo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      videoHeight: 500,
      currentPageVideo: false,
    };

    this.renderVideoContainer = this.renderVideoContainer.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.renderVideoContent = this.renderVideoContent.bind(this);
    this.currentPageVideo = this.currentPageVideo.bind(this);
  }

  public componentDidMount(): void {
    const currentPageVideo = this.currentPageVideo();
    if (currentPageVideo) {
      this.setState({currentPageVideo});
    }
  }

  public render(): any {
    return this.renderVideoContainer();
  }

  private renderVideoContainer(): any {
    const { theme, type } = this.props;
    const { currentPageVideo } = this.state;
    const columnMdWidth = type === PromotionVideoType.home ? 24 : 12;
    const containerStyle = type === PromotionVideoType.home ? css`
      position: absolute;
      top: 300px;
      right: 0;
      z-index: 3;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        top: unset;
        bottom: 0;
      }
    ` : css`
      position: absolute;
      top: 270px;
      right: 0;
      left: 0;
      width: 100%;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        top: 160px;
      }
    `;
    return currentPageVideo ? (
      <div className={containerStyle}>
        <Container
          noGutter={true}
          className={css`
            max-width: ${theme.Config.siteWidth}px;
            width: 100%;
            margin: auto;
            position: relative;
          `}
        >
          <Row>
            <Column xs={24} md={columnMdWidth} >
              {this.renderBanner()}
            </Column>
          </Row>
        </Container>
        {this.renderOverlay()}
      </div>
    ) : null;
  }

  private renderBanner() {
    const { theme, type, locale } = this.props;
    const { currentPageVideo } = this.state;
    const isTC = locale === "tc";
    const homeIcon = (isTC ? currentPageVideo.homeIcon : currentPageVideo.homeIconEn) || currentPageVideo.homeIcon;
    const productIcon = (isTC ? currentPageVideo.productIcon : currentPageVideo.productIconEn) || currentPageVideo.productIcon;
    const cursor = currentPageVideo.videoLink ? "pointer" : "unset";
    const bannerIconStyle = type === PromotionVideoType.home ? css`
      height: 100%;
      cursor: ${cursor};
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center right;
      background-image: url(${homeIcon});
      @media (max-width: ${theme.Config.tabletWidth}px) {
        background-image: url(${homeIcon});
      }
    ` : css`
      height: 100%;
      cursor: ${cursor};
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url(${productIcon});
      @media (max-width: ${theme.Config.tabletWidth}px) {
        background-image: url(${homeIcon});
      }
    `;
    const containerStyle = type === PromotionVideoType.home ? css`
      width: 275px;
      height: 170px;
      float: right;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        width: 135px;
        height: 105px;
        float: right;
      }
    ` : css`
      width: 290px;
      height: 150px;
      margin: 0 auto;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        width: 90px;
        height: 90px;
        float: right;
      }
    `;
    if (currentPageVideo) {
      const toggle = currentPageVideo.videoLink ? this.toggleOverlay : undefined;
      return (
        <div
          onClick={toggle}
          className={containerStyle}
        >
          <div className={bannerIconStyle} />
        </div>
      );
    }
    return null;
  }

  private renderOverlay() {
    const { locale, t, theme, type, ...props } = this.props;
    const { videoHeight } = this.state;
    const videoContainerStyle = css`
      width: 100%
      height: ${videoHeight}px;
      transition: all .5s;
      max-width: 1107px;
      max-height: 100%;
      margin: 0 auto;
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      height: 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `;
    return (
      <Overlay
        show={this.state.showOverlay}
        onClose={this.toggleOverlay}
        {...props}
      >
        <div className={videoContainerStyle}>
          {this.renderVideoContent()}
        </div>
      </Overlay>
    );
  }

  private toggleOverlay(): void {
    this.setState({ showOverlay: !this.state.showOverlay, videoHeight: window.innerHeight });
  }

  private renderVideoContent(): any {
    const { currentPageVideo } = this.state;
    const videoLink = currentPageVideo.videoLink;
    if (videoLink) {
      const isFacebookLink = videoLink.search("facebook") > -1;
      return isFacebookLink ? (<FacebookPlayer url={videoLink} showinfo={false} />) : (<YoutubePlayer videoId={videoLink} showinfo={false} />);
    }
  }

  private currentPageVideo(): any {
    const { router } = this.props;
    const { campaignVideos } = AppConfig;
    const currentVideo = campaignVideos.find((videoDetails) => videoDetails.pages.some((page) => {
      return router.pathname.search(page) > -1;
    }));
    return currentVideo;
  }
}

export default PromotionVideo;
