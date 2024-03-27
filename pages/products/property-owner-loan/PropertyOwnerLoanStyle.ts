import { css } from "emotion";
import bottomBkg from "../../../assets/images/static-page/nodoc-bkg@2x.jpg";
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
    featureBlockRow: css`
      margin-top: 60px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding-top: 0;
      }
    `,
    stepContainer: css`
      margin-top: 50px;
      background-image: url(${bottomBkg});
      background-repeat: no-repeat;
      background-position: top center;
      background-size: auto 100%;
      padding: 80px 0;
    `,
    stepTitle: css`
      font-size: 2rem;
      font-weight: 800;
      color: #fff;
      text-align: center;
      margin-bottom: 80px;
    `,
    steps: css`
      .title {
        font-size: 1.5rem;
        margin-bottom: 30px;
        line-height: 40px;
        height: 40px;
        img {
          height: 33px;
        }
      }
      .step {
        line-height: 30px;
        margin-bottom: 60px;
        padding: 20px;
        position: relative;
        &>span {
          display: inline-block;
          width: 30px;
          height: 30px;
          text-align: center;
          border-radius: 50%;
          color: #fff;
          position: relative;
        }
        &>div {
          position: absolute;
          top: calc(50% - 15px);
          @media (max-width: ${theme.Config.mobileWidth}px) {
            line-height: 1.5rem;
          }
        }
      }
      &.left {
        text-align: right;
        padding-right: 5%;;
        .step {
          &>div {
            right: calc(5% + 55px)
          }
          &>span {
            margin-left: 30px;
            background-color: #ccc;
            &::after {
              content: " ";
              display: inline-block;
              width: 2px;
              height: 100px;
              position: absolute;
              background-color: #ccc;
              left: 15px;
              bottom: -100px;
            }
          }
          &.last {
            &>span {
              &::after {
                display: none;
              }
            }
          }
        }
      }
      &.right {
        text-align: left;
        padding-left: 5%;
        color: #fff;
        .step {
          max-width: 100%;
          max-width: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 35px;
          &>div {
            left: calc(5% + 55px)
          }
          &>span {
            margin-right: 30px;
            background-color: ${theme.Colors.secondary};
            box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.2);
            &::before {
              content: " ";
              display: inline-block;
              width: 2px;
              height: 92px;
              position: absolute;
              background-color: #fff;
              left: 15px;
              bottom: -96px;
            }
          }
          &.first {
            margin-bottom: 450px;
            &>span {
              &::before {
                height: 482px;
                bottom: -486px;
              }
            }
            .no-doc-image {
              left: 70px;
              top: 270px;
              width: 200px;
              position: absolute;
            }
          }
          &.last {
            &>span {
              &::before {
                display: none;
              }
            }
          }
        }
      }
    `,
    bottomSection: css`
      width: 100%;
      padding: 0 20px 60px;
      background-color: ${theme.Colors.white};
      position: relative;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding: 30px;
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
  };
};

export default styles;
