import { css, keyframes } from "emotion";
import mobileTitleBkg from "../../assets/images/static-page/mobile-title-line.png";
import mobileTitleBottomBkg from "../../assets/images/static-page/mobile-title-triangle.png";
import Theme from "../../theme/theme";
import { Props } from "./HeroBanner";

const bannerBackground = keyframes`
  0% {
    opacity: 0;
    margin-top: -20px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`;

const dotLine = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 45%;
  }
`;

const styles = (theme: Theme, props: Props) => {
  return {
    hideDesktop: css(`
      @media (min-width: ${theme.Config.tabletWidth}px) {
        display: none;
      }
    `),
    hideMobile: css(`
      @media (max-width: ${theme.Config.tabletWidth}px) {
        display: none;
      }
    `),
    flexContainer: css`
      display: flex;
      flex-direction: column-reverse;
    `,
    mainContainer: css`
      width: 100%;
      height: auto;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top center;
      background-image: url(${props.backgroundImage});
      @media (min-width: 1920px) {
        background-size: auto 100%;
      }
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        height: auto;
        background-size: auto 200px;
        background-image: url(${props.backgroundImageMobile});
      }
    `,
    contentContainer: css`
      width: 100%;
      height: 100%;
      margin: auto;
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-image: url(${props.heroImage});
      background-position: top center;
      background-position: ${typeof props.heroImagePosition === "number" ? `calc(50% + ${props.heroImagePosition}px)` : props.heroImagePosition};
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        background-size: auto 200px;
        background-image: url(${props.heroImageMobile});
        background-position: ${props.heroImagePositionMobile ? props.heroImagePositionMobile : "top center"};
      }
    `,
    contentWrapper: css`
      max-width: ${theme.Config.siteContainerWidth}px;
      width: 100%;
      margin: auto;
      position: relative;
    `,
    animationWrapper: css`
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        animation: ${bannerBackground} 1s ease;
      }
    `,
    content: css`
      margin-top: 80px;
      text-align: center;
      color: #fff;
      line-height: 200%;
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        margin-top: 143px;
        background-image: url(${mobileTitleBkg});
      }
    `,
    contentBottom: css`
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        width: 100%;
        height: 46px;
        background-image: url(${mobileTitleBottomBkg});
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    `,
    title: css`
      font-size: 2.4rem;
      font-weight: 500;
      padding-bottom: 10px;
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        font-size: 1.5rem;
        line-height: 3rem;
      }
    `,
    subTitle: css`
      font-size: 1.7rem;
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        margin-top: 15px;
        font-size: 1.2rem;
      }
    `,
    description: css`
      font-size: 1.15rem;
      margin: auto;
      padding-top: 10px;
      line-height: 150%;
      font-weight: 300;
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        line-height: 180%;
        font-size: 0.75rem;
      }
    `,
    dot: css`
      max-width: 60%;
      margin: auto;
      font-size: 30px;
      line-height: 30px;
      position: relative;
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        max-width: 100%;
        width: 100%;
        position: absolute;
        width: 100%;
        margin-top: -17px;
      }
      &::before {
        content: ' ';
        width: 45%;
        height: 2px;
        background: #fff;
        float: left;
        margin-top: 15px;
        animation: ${dotLine} 1s ease;
      }
      &::after {
        content: ' ';
        width: 45%;
        height: 2px;
        background: #fff;
        float: right;
        margin-top: 15px;
        animation: ${dotLine} 1s ease;
      }
    `,
    lowerTitle: css`
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: -9px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        margin-bottom: -5px;
        font-size: 1.2rem;
      }
    `,
    lowerDot: css`
      margin-bottom: -6px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        margin-top: -5px;
      }
    `,
  };
};

export default styles;
