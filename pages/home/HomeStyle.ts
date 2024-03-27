import { css, cx } from "emotion";
import centerBkg from "../../assets/images/homepage-201810/center-graphic.png";
import topSectionBkg from "../../assets/images/homepage-201810/frame@2x.png";
import topSectionSloganEn from "../../assets/images/homepage-201810/homepage_title_new_en.png";
import topSectionSlogan from "../../assets/images/homepage-201810/homepage_title_new_tc.png";
import feature1 from "../../assets/images/homepage-201810/icon1.gif";
import feature2 from "../../assets/images/homepage-201810/icon2.gif";
import feature3 from "../../assets/images/homepage-201810/icon3.gif";
import feature4 from "../../assets/images/homepage-201810/icon4.gif";
import homeBkgMobile from "../../assets/images/homepage-201810/mobile-bkg.jpg";
import homeBkg from "../../assets/images/key-visual/homepage/banner-bkg.jpg";
import topSectionBannerBkgEn from "../../assets/images/key-visual/homepage/homepage-banner-oct2021-en@2x.jpg";
import topSectionBannerBkg from "../../assets/images/key-visual/homepage/homepage-banner-oct2021-tc@2x.jpg";
import { MAIN_COLOR, SUBSIDIARY_COLOR } from "../../lib/LoanCalculator";
import Theme from "../../theme/theme";
const HEADER_HEIGHT_MOBILE = 50;
const styles = (theme: Theme) => {
  return {
    mainContainer: css`
      position: relative;
      &::before {
        content: "";
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        @media (max-width: ${theme.Config.tabletWidth + 1}px) {
          display: none;
        }
      }
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        background: #CCC4D3;
        background-image: url(${homeBkgMobile});
        background-repeat: no-repeat;
        background-size: 100%;
        overflow: hidden;
      }
    `,
    topSectionContainer: css`
      min-height: 800px;
      position: relative;
      @media (min-width: ${theme.Config.tabletWidth + 1}px) {
        background: url(${homeBkg}) no-repeat top center;
        background-size: cover;
      }
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        min-height: auto;
      }
    `,
    topSection: css`
      width: 100%;
      max-width: 1107px;
      height: 560px;
      top: 150px;
      // left: calc(50% - 560px);
      position: relative;
      z-index: auto;
      @media (min-width: ${theme.Config.tabletWidth}px) and (max-width: ${theme.Config.siteWidth + 1}px) {
        width: 1107px;
        // transform: scale(0.8);
        // left: calc(50% - 490px);
      }
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        // transform: scale(1);
        top: 0px;
        left: 0;
        width: 100%;
        height: auto;
      }
    `,
    topSectionBackground: css`
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${topSectionBkg});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        display: none;
      }
    `,
    topSlogan: css`
      position: relative;
      margin: 0 auto;
      top: 110px;
      z-index: 1;
      width: 370px;
      height: 103px;
      margin-bottom: -103px;
      background-image: url(${topSectionSlogan});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      &.en {
        background-image: url(${topSectionSloganEn});
        width: 660px;
        height: 107px;
        margin-bottom: -107px;
      }
      @media (min-width: ${theme.Config.tabletWidth}px) and (max-width: ${theme.Config.siteWidth + 1}px){
        transform: scale(0.8);
      }
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        display: none;
      }
    `,
    desktopBanner: css`
      display: inline-block;
      width: 576px;
      height: 463px;
      background-image: url(${topSectionBannerBkg});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      position: absolute;
      top: 67px;
      border-radius: 3px;
      box-shadow: 0 20px 40px 0 rgba(57, 81, 114, 0.3);
      z-index: auto;
      &.en {
        background-image: url(${topSectionBannerBkgEn});
      }
      @media (min-width: ${theme.Config.tabletWidth}px) {
        margin-left: 40px;
      }
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        display: none;
      }
    `,
    desktopBannerCTA: css`
      color: ${theme.Colors.white};
      position: absolute;
      bottom: 20px;
      right: 5px;
    `,
    mobileBanner: css`
      position: relative;
      width: 100%;
      img {
        width: 100%;
      }
      @media (min-width: ${theme.Config.tabletWidth + 1}px) {
        display: none;
      }
    `,
    content: css`
      position: relative;
      max-width: ${theme.Config.siteContainerWidth}px;
      margin: auto;
    `,
    calculatorContainer: css`
      width: 100%;
      max-width: 440px;
      height: 462px;
      float: right;
      display: inline-block;
      box-shadow: 0 0 5px #ccc;
      margin-top: 67px;
      margin-right: 40px;
      border-radius: 5px;
      box-shadow: 0px 20px 40px 0px rgba(112, 113, 146, 0.4);
      position: relative;
      z-index: 0;
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        float: none;
        width: 100%;
        height: auto;
        max-width: 100%;
        margin-top: 35px;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 50px;
        box-shadow: none;
      }
    `,
    switchCulatorContainer: cx(css`
      z-index: 1;
      height: 100%;
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        display: none;
      }
    `),
    switchCalculatorButton: cx(css`
        position: absolute;
        right: -230px;
        width: auto;
        width: 460px;
        z-index: 2;
        top: 50%;
        transform: rotate(90deg) translateY(-50%);
        text-align: center;
        > button {
          padding: 5px 40px;
          white-space: nowrap;
          display: inline-block;
          border-radius: 5px 5px 0 0;
          border: none;
          cursor: pointer;
          opacity: 0.8;
          position: relative;
          outline: none;
          font-size: 0.8rem;
          > span:before, > span:after {
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 4.5px 6px 4.5px;
            border-color: transparent transparent #FFF transparent;
            position: absolute;
            left: 6px;
            top: 10px;
          }
          > span:after {
            right: 6px;
            left: auto;
          }
        }
        @media (max-width: ${theme.Config.tabletWidth + 1}px) {
          display: none;
          &.active {
            display: block;
          }
          &.bt {
            left: auto;
            right: auto;
            transform: rotate(-90deg) translateY(-50%);
            margin-left: calc(100% - 230px);
          }
          &.ploan {
            right: 0;
            left: -230px;
          }
        }
    `),
    slider: cx(css`
        background-color: white;
    `),
    activeCalculatorSwitchButton: cx(css`
      background-color: ${MAIN_COLOR.color};
      color: #FFF;
    `),
    nonActiveCalculatorSwitchButton: cx(css`
      background-color: ${SUBSIDIARY_COLOR.color};
      color: #FFF;
    `),
    activeCalculator: cx(css`
      @media (min-width: ${theme.Config.tabletWidth}px) {
        top: 0;
        left: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 1;
        transition: all 1s;
        box-shadow: 5px 5px 30px 0 rgba(128, 106, 119, 0.3);
      }
    `),
    nonActiveCalculator: cx(css`
      @media (min-width: ${theme.Config.tabletWidth}px) {
        position: relative;
        z-index: 0;
        right: -40px;
        -webkit-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95);
        height: 100%;
        transition: all 1s;
      }
    `),
    switchCalculatorCarousel: cx(css`
      display: none;
      .slider-slide {
        box-shadow: 0px 20px 40px 0px rgba(112,113,146,0.4);
        > div {
          height: 510px;
        }
      }
      @media (max-width: ${theme.Config.tabletWidth - 1}px) {
        display: block;
        overflow: hidden;
        ::-webkit-scrollbar {
          width: 0px;
        }
      }
    `),
    switchCalculatorCarouselContainer: cx(css`
      width: 180%;
      padding: 10px;
      position: relative;
      transition: left 0.3s;
      &.bt {
        left: 0;
      }
      &.ploan {
        left: -80%;
      }
    `),
    switchCalculatorCarouselSlide: cx(css`
      width: 50%;
      height: 440px;
      float: left;
      padding: 0 7px;
    `),
    switchCalculatorCarouselBottomControl: css`
      position: relative;
      bottom: -65px;
      padding: 0;
    `,
    switchCalculatorCarouselBottomControlDefault: css`
      position: relative;
      display: inline-block;
      background-color: transparent;
      margin: 0 5px;
      padding: 20px 10px;
      opacity: 0.3;
      a {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        &:before {
          content: '';
          width: 10px;
          height: 10px;
          background-color: white;
          position: relative;
          display: block;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          margin: 0 auto;
        }
      }
    `,
    switchCalculatorCarouselBottomControlActive: css`
      opacity: 1;
    `,
    mobileSwitchCalculatorNext: cx(css`
      @media (max-width: ${theme.Config.tabletWidth}px) {
        > button {
          border-radius: 0 0 5px 5px;
        }
      }
    `),
    mobileSwitchCalculatorPrev: cx(css`
      @media (max-width: ${theme.Config.tabletWidth}px) {
        right: -230px;
      }
    `),
    middleSection: css`
      position: relative;
    `,
    middleSlogan: css`
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
      padding: 14px 0;
      font-size: 30px;
      color: #fff;
      font-weight: 500;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        font-size: 23px;
        margin-top: 0;
        padding: 10px;
        background: linear-gradient(90deg, rgba(122, 175, 212, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
      }
    `,
    featureBlock: css`
      width: 100%;
      height: 502px;
      max-width: 300px;
      text-align: center;
      padding-bottom: 60px;
      &.left {
        float: right;
        margin-right: 160px;
        @media (max-width: ${theme.Config.tabletWidth + 1}px) {
          float: none;
          margin: auto;
        }
      }
      &.right {
        float: left;
        margin-left: 160px;
        @media (max-width: ${theme.Config.tabletWidth + 1}px) {
          float: none;
          margin: auto;
        }
      }
      .feature-animation {
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: top center;
        width: 100%;
        img {
          width: 90%;
        }
        &.feature-1 {
          background-image: url(${feature1});
        }
        &.feature-2 {
          background-image: url(${feature2});
          .title span{
            color: ${theme.Colors.secondary};
          }
        }
        &.feature-3 {
          background-image: url(${feature3});
          width:305px;
          .title span {
            color: ${theme.Colors.primary};
          }
        }
        &.feature-4 {
          background-image: url(${feature4});
          width:310px;
        }
      }
      .title {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 500;
      }
      .details {
        margin-top: 1px;
        font-size: 0.9rem;
        line-height: 1.5rem;
        &.en {
          font-size: 0.8rem;
          line-height: 1rem;
          width: 323px;
        }
      }
    `,
    featureWrapper: css`
      width: 591px;
      height: 379px;
      background-image: url(${centerBkg});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      position: absolute;
      left: calc(50% - 295px);
      top: calc(50% - 620px);
      text-align: center;
      padding-left: 0;
      .content {
        text-align: center;
        position: relative;
        top: calc(50% - 64px);
      }
      .title {
        font-size: 1.5rem;
      }
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        transform: scale(0.7);
      }
      @media (max-width: ${theme.Config.tabletWidth}px) {
        display: none;
      }
    `,
    tncSection: css`
      position: relative;
      text-align: left;
      background: #fff;
      padding: 50px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding: 50px 20px;
      }
    `,
    bottomSection: css`
      width: 100%;
      padding: 120px 20px 60px;
      background-color: ${theme.Colors.white};
      position: relative;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding: 30px;
      }
    `,
    noticeMobile: css`
      img {
        width: 100%;
      }
      @media (min-width: ${theme.Config.tabletWidth + 1}px) {
        display: none;
      }
    `,
    remarkContent: css`
    display: flex;
    justify-content: center;
    margin: 30px auto 0;
    `,
    promotionalContainer: css`
      width: 100%;
      margin: auto;
      padding:120px 20px 60px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding-top: 30px;
      }
      .slick-dots1{
        position: absolute;
        bottom: -25px;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
        li{
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
          &.slick-active{
            button{
              &:before{
                color: #2183E2;
                border-radius: 5px;
              }
            }
          }
          button{
            font-size: 0;
            line-height: 0;
            display: block;
            width: 20px;
            height: 20px;
            padding: 5px;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: none;
            background: transparent;
            &:before{
              font-family: 'slick';
              font-size: 28px;
              line-height: 18px;
              position: absolute;
              top: 0;
              left: 0;
              width: 20px;
              height: 8px;
              content: '•';
              text-align: center;
              color: #CCCCCC;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            &:hover,&:focus{
              outline: none;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .slick-prev,.slick-next{display:none !important;}
    `,
    noticeDesktop: css`
      > img {
        max-width: 700px;
        width: 100%;
      }
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        display: none;
      }
    `,
    inlineNoticeCloseButton: css`
      position: relative;
      top: -20px;
      right: 0;
      float: right;
    `,
  };
};
export default styles;
