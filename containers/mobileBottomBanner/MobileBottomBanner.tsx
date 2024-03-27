import { css, cx, injectGlobal } from "emotion";
import * as React from "react";
import { connect } from "react-redux";
import backgroundInvert from "../../assets/images/homepage-201810/mobile-bottom-banner-bg-invert@2x.png";
import background from "../../assets/images/homepage-201810/mobile-bottom-banner-bg@2x.png";
import { Column, Container, PrimaryButton, Row } from "../../components";
import { AppProps } from "../../pages/_app";
import { LoginModalActions } from "../../reducers/loginModalReducer";

interface State {
  bannerBGInverted: boolean;
  showBanner?: boolean;
}

interface OwnProps {
  containerStyle: any;
  toggleLoginModal: any;
}

type Props = OwnProps & AppProps;

class MobileBottomBanner extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      bannerBGInverted: true,
    };
    this.buttonOnCLick = this.buttonOnCLick.bind(this);
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  public componentDidMount(): void {
    window.addEventListener("scroll", this.scrollEvent);
    injectGlobal(`
      .wc-container.webot {
        @media (max-width: ${this.props.theme.Config.mobileWidth}px) {
          bottom: 90px;
        }
      }
    `);
  }

  public componentWillUnmount(): void {
    window.removeEventListener("scroll", this.scrollEvent);
  }

  public render() {
    const { t, theme, containerStyle } = this.props;
    const { bannerBGInverted, showBanner } = this.state;
    const bgStyle = cx(css`
      display: none;
      @media (max-width: ${theme.Config.mobileWidth}px) {
        display: block;
        height: 75px;
        width: 100%;
        padding: 23px 0;
        position: fixed;
        bottom: ${showBanner ? "0" : "-75"}px;
        transition: bottom .5s;
        background-image: url(${bannerBGInverted ? backgroundInvert : background});
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    `);
    const lineStyle = cx(css`span {
      display: inline-block;
    }`);
    return (
      <div className={cx(bgStyle, containerStyle)}>
          <Container>
            <Row>
              <Column xs={14} className={css`font-size: 13px;`}>
                <div className="details">{t("common:home:bottom-banner-text-1")}</div>
                <div className={cx("title", lineStyle)} dangerouslySetInnerHTML={{__html: t("common:home:bottom-banner-text-2")}} />
              </Column>
              <Column xs={10}>
                <div className={css`display: inline-block; width: 100%;`} onClick={this.buttonOnCLick} data-cta-name="apply-open">
                  <PrimaryButton className={css`height: 40px; font-size: 14px;`}>{t("common:home:bottom-banner-button-text")}</PrimaryButton>
                </div>
              </Column>
            </Row>
          </Container>
      </div>
    );
  }

  private buttonOnCLick(): void {
    this.props.toggleLoginModal();
  }

  private scrollEvent(): void {
    const pageOffset = window.pageYOffset - 75;
    const featureBlocks = document.querySelectorAll(".feature-animation");
    const { bannerBGInverted, showBanner} = this.state;
    const switchBG = (inverted) => {
        if (bannerBGInverted !== inverted) {
          this.setState({bannerBGInverted: !bannerBGInverted});
        }
    };
    if (pageOffset > featureBlocks[5].offsetTop + featureBlocks[5].offsetHeight || pageOffset < featureBlocks[0].offsetTop) {
      if (showBanner) {
        this.setState({showBanner: false});
      }
    } else {
      if (!showBanner) {
        this.setState({showBanner: true});
      }
    }
    if (pageOffset < featureBlocks[2].offsetTop) {
      switchBG(true);
    } else if (pageOffset < featureBlocks[4].offsetTop) {
      switchBG(false);
    } else if (pageOffset < featureBlocks[5].offsetTop) {
      switchBG(true);
    } else if (pageOffset < featureBlocks[5].offsetTop + featureBlocks[5].offsetHeight) {
      switchBG(false);
    }
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
});

export default connect(null, mapDispatchToProps)(MobileBottomBanner);
