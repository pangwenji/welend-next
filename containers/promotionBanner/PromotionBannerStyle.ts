import { css } from "emotion";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    heroBanner: css`
      @media (max-width: ${theme.Config.tabletWidth}px) {
        + div {
          margin-top: 56px;
        }
      }
      > div {
        @media (max-width: ${theme.Config.tabletWidth}px) {
          position: absolute;
          width: 100%;
        }
      }
      > div span, > div img {
        height: 463px;
        background-size: contain;
        top: 0;
        @media (max-width: ${theme.Config.tabletWidth}px) {
          height: 100%;
          width: 100%;
        }
      }
    `,
    bannerContainer: css(`
      position: fixed;
      right: 30px;
      bottom: 33px;
      z-index: 3;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: auto;
      }
    `),
    iconBanner: css`
      width: auto;
      > div img, > div span {
        width: 235px;
        height: 225px;
        object-fit: contain;
        @media (max-width: ${theme.Config.tabletWidth}px) {
          background-size: auto 100%;
          width: 100%;
          height: 75px;
        }
        @media (max-width: ${theme.Config.smallMobileWidth}px) {
          background-size: auto 100%;
          width: 100%;
          height: 65px;
        }
      }
    `,
    applyButton: css`
      display: inline-block;
      width: 100%;
      text-align: center;
      height: 100%;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        display: none;
      }
      > div {
        width: 125px;
        top: 29px;
        left: 202px;
        display: inline-block;
        position: relative;
      }
      button {
        height: 40px;
      }
    `,
    tncButton: css(`
      width: 100%;
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: 0px;
      cursor: pointer;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        height: 20px;
      }
    `),
    heroBannerTncButton: css(`
      span {
        width: 120px;
        position: absolute;
        bottom: 15px;
        right: 0;
        font-size: 12px;
        @media (max-width: ${theme.Config.tabletWidth}px) {
          bottom: 97px;
        }
        @media (max-width: ${theme.Config.mobileWidth}px) {
          bottom: unset;
          top: 165px;
          right: 5px;
          left: unset;
        }
        @media (max-width: 380px) {
          bottom: unset;
          top: 145px;
          right: -5px;
          left: unset;
        }
        @media (max-width: 320px) {
          bottom: unset;
          top: 125px;
          right: -11px;
          left: unset;
        }
      }
    `),
    overlay: css(`
      .popup-content-area {
        max-width: 680px;
        text-align: center;
        .popup-content-container {
          text-align: left;
          overflow: auto;
        }
        ul {
          list-style: none;
          counter-reset: term;
          position: relative;
          padding-left: 20px;
          li {
            counter-increment: term;
            &:before {
              content: counter(term)".";
              position: absolute;
              left: 0;
            }
          }
        }
      }
    `),
    injectGlobal: `
      .wp-container {
        right: 178px !important;
        bottom: 40px !important;
        @media (max-width: ${theme.Config.tabletWidth}px) {
          right: 30px !important;
          bottom: 75px !important;
        }
      }
    `,
    homeLeftBanner: css(`
      > div img, > div span {
        @media (min-width: ${theme.Config.tabletWidth}px) {
          background-size: 100% 100%;
          height: 344px;
          width: 280px;
          position: fixed;
          left: 0;
          bottom: 0;
          z-index: 1;
        }
      }
    `),
  };
};

export default styles;
