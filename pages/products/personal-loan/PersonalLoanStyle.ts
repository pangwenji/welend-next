import { css } from "emotion";
import stepTitleEn from "../../../assets/images/static-page/4steps-text-en@2x.png";
import stepTitle from "../../../assets/images/static-page/4steps-text-tc@2x.png";
import stepTitleMobileEn from "../../../assets/images/static-page/mobile-4steps-text-en@2x.png";
import stepTitleMobile from "../../../assets/images/static-page/mobile-4steps-text-tc@2x.png";
import stepCircleMobile from "../../../assets/images/static-page/mobile-ploan-circle@2x.png";
import bottomBkg from "../../../assets/images/static-page/ploan-bkg@2x.jpg";
import stepCircle from "../../../assets/images/static-page/ploan-circle@2x.png";
import Theme from "../../../theme/theme";

const styles = (theme: Theme) => {
  return {
    featureContainer: css`
      width: 100%;
      margin: auto;
      padding: 120px 20px 60px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding-top: 0;
      }
    `,
    bottomContainer: css`
      background-image: url(${bottomBkg});
      background-repeat: no-repeat;
      padding: 120px 0;
      @media (max-width: ${theme.Config.mobileWidth}px) {
        padding: 60px 15px;
      }
    `,
    calculatorContainer: css`
      height: 470px;
    `,
    stepContainer: css`
      color: #fff;
      height: 470px;
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      .step {
        width: 49.9%;
        height: 50%;
        float: left;
        &:nth-child(1) {
          background: ${theme.Colors.primary};
          span {
            top: 0;
            left: 0;
          }
        }
        &:nth-child(2) {
          background: #fff;
          span {
            top: 0;
            right: 0;
            color: ${theme.Colors.text}
          }
        }
        &:nth-child(3) {
          background: #fff;
          span {
            bottom: 0;
            left: 0;
            color: ${theme.Colors.text}
          }
        }
        &:nth-child(4) {
          background: ${theme.Colors.secondary};
          span {
            bottom: 0;
            right: 0;
          }
        }
        img {
          width: 100%;
        }
        span {
          width: 20%;
          position: absolute;
          margin: 5%;
          display: inline-block;
        }
      }
      .step-center {
        width: 200px;
        height: 470px;
        margin-left: calc(50% - 100px);
        position: absolute;
        background-image: url(${stepCircleMobile});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        text-align: center;
        line-height: 470px;
        color: #000;
        letter-spacing: 4px;
        top: -2px;
        span {
          font-size: 3rem;
          color: ${theme.Colors.primary};
        }
        .text {
          width: 100px;
          height: 22px;
          display: inline-block;
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url(${stepTitleMobile});
          background-position: center;
          @media (min-width: ${theme.Config.mobileWidth}px) {
            width: 180px;
            height: 100%;
            background-image: url(${stepTitle});
          }
          &.en {
            background-image: url(${stepTitleMobileEn});
            @media (min-width: ${theme.Config.mobileWidth}px) {
              background-image: url(${stepTitleEn});
            }
          }
        }
        @media (min-width: ${theme.Config.tabletWidth}px) {
          background-image: url(${stepCircle});
          padding-top: 0;
          width: 354px;
          height: 470px;
          margin-left: calc(50% - 177px);
        }
      }
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
                color: #F28021;
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
    remarkContent: css`
    display: flex;
    justify-content: center;
    margin: 30px auto 0;
    `,
    commonProblemText: css`
/* Body #1D1D1F */

color: #1D1D1F;
    `,
    commonProblem: css`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 80px 670px;
    position: static;
    width: 2560px;
    height: 800px;
    left: 0px;
    top: 3310px;
/* Background #F5F5F7 */
    background: #F5F5F7;
    transform: matrix(1, 0, 0, -1, 0, 0);
/* Inside Auto Layout */
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 0px;
    `,
  };
};

export default styles;
