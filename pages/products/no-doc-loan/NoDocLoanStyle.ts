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
    stepContainer: css`
      margin-top: 50px;
      background-image: url(${bottomBkg});
      background-repeat: no-repeat;
      background-position: top center;
      background-size: auto 100%;
      padding: 80px 0;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        height: 1110px;
        width: 500px;
      }
      @media only screen and (min-width: 481px) and (max-width: 500px) {
        width: 100%;
        height: 1510px;
      }
      @media only screen and (min-width: 500px) and (max-width: 1250px) {
        width: 100%;
        height: 1510px;
      }
      @media (max-width: 414px) {
        height: 1116px;
        width: 414px;
      }
      @media (max-width: 375px) {
        height: 1116px;
        width: 375px;
      }
    `,
    stepTitle: css`
      font-size: 2rem;
      font-weight: 800;
      color: #fff;
      text-align: center;
      margin-bottom: 30px;
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
        & > span {
          display: inline-block;
          width: 30px;
          height: 30px;
          text-align: center;
          border-radius: 50%;
          color: #fff;
          position: relative;
        }
        & > div {
          position: absolute;
          top: calc(50% - 15px);
          @media (max-width: ${theme.Config.mobileWidth}px) {
            line-height: 1.5rem;
          }
        }
      }
      &.left {
        text-align: right;
        padding-right: 5%;
        .step {
          & > div {
            right: calc(5% + 55px);
          }
          & > span {
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
            & > span {
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
          & > div {
            left: calc(5% + 55px);
          }
          & > span {
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
            & > span {
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
            & > span {
              &::before {
                display: none;
              }
            }
          }
        }
      }
    `,
    promotionalContainer: css`
      width: 100%;
      margin: auto;
      padding: 120px 20px 60px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding-top: 30px;
      }
      .slick-dots1 {
        position: absolute;
        bottom: -25px;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
        li {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
          &.slick-active {
            button {
              &:before {
                color: #f28021;
                border-radius: 5px;
              }
            }
          }
          button {
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
            &:before {
              font-family: "slick";
              font-size: 28px;
              line-height: 18px;
              position: absolute;
              top: 0;
              left: 0;
              width: 20px;
              height: 8px;
              content: "•";
              text-align: center;
              color: #cccccc;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            &:hover,
            &:focus {
              outline: none;
              &:before {
                opacity: 1;
              }
            }
          }
        }
      }
      .slick-prev,
      .slick-next {
        display: none !important;
      }
    `,
    remarkContent: css`
      display: flex;
      justify-content: center;
      margin: 30px auto 0;
    `,

    timelineContentLeft: css`
      position: relative;
      width: 95%;
      min-height: 186px;
      margin: 0 43px;
      overflow: hidden;
      margin-top: 0 !important;
      display: flex;
      @media (min-width: 2559px) {
        margin: 0 125px;
      }
      @media only screen and (min-width: 500px) and (max-width: 1800px) {
        margin-left: -5px;
      }
      @media only screen and (min-width: 1200px) and (max-width: 1799px) {
        margin-left: -10px;
      }
      @media only screen and (min-width: 481px) and (max-width: 500px) {
        margin-left: -12px;
      }
      @media (max-width: ${theme.Config.mobileWidth}px) {
        min-height: 180px;
        margin: auto;
        font-size: 13px;
      }
      &:before {
        content: "";
        display: block;
        overflow: hidden;
      }
      &:after {
        cclear: both;
        content: "";
        display: block;
        overflow: hidden;
      }
      .slideInRight > div:first-child {
        border-radius: 0px 20px 25px 25px;
      }
      &.line-1 {
        @media (max-width: ${theme.Config.mobileWidth}px) {
          min-height: 72px;
        }
        .left-line {
        }
      }
      &.line-2 {
        @media (max-width: ${theme.Config.mobileWidth}px) {
          min-height: 129px;
        }
        .left-line {
        }
      }
      &.line-3 {
        @media (max-width: ${theme.Config.mobileWidth}px) {
          min-height: 78px;
        }
        .left-line {
        }
      }
      &.line-4 {
        @media (max-width: ${theme.Config.mobileWidth}px) {
          min-height: 106px;
        }
        @media (max-width: 375px) {
          min-height: 107px;
        }
        .left-line {
          @media (max-width: ${theme.Config.mobileWidth}px) {
          }
        }
      }
      &.line-5 {
        @media (max-width: ${theme.Config.mobileWidth}px) {
          min-height: 133px;
        }
        @media (max-width: 375px) {
          min-height: 133px;
        }
        .left-line {
          @media (max-width: ${theme.Config.mobileWidth}px) {
          }
        }
      }
    `,
    timeOlineImg: css`
      margin-top: 320px;
    `,
    timeOlineText: css``,
    applyNow: css``,
    timelineContentRightOne: css`
      position: relative;
      width: 95%;
      margin-left: 13.5px;
      margin-top: 0 !important;
      display: flex;
      &.line-1 {
        min-height: 745px;
        @media (max-width: ${theme.Config.mobileWidth}px) {
          margin-left: -30px;
          margin-top: 16px !important;
          min-height: 395px;
          font-size: 13px;
        }
        @media only screen and (min-width: 500px) and (max-width: 638px) {
          margin-left: -10px;
        }
        .timeline-wrapper {
          margin-top: -12px;
          @media only screen and (min-width: 500px) and (max-width: 645px) {
            height: 169px;
          }
          @media only screen and (min-width: 481px) and (max-width: 500px) {
            height: 169px;
          }
          @media (max-width: ${theme.Config.mobileWidth}px) {
            height: 118px !important;
            margin-top: 8px;
          }
          .item-step {
            top: 28px;
          }
          .item-text {
            @media (max-width: ${theme.Config.mobileWidth}px) {
            }
            > div {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }
            > div .css-0 {
              height: auto;
            }
            .sub-text {
              font-size: 10px;
              color: #fff;
              width: 100%;
            }
          }
        }
        .step-img {
          @media only screen and (min-width: 500px) and (max-width: 709px) {
            margin-left: 5px;
            left: 50px;
          }
          @media only screen and (min-width: 480px) and (max-width: 499px) {
            margin-left: 5px;
            left: 0px;
          }
          position: absolute;
          top: 50%;
          left: 90px;
          text-algin: center;
          margin-top: -70px;
          img {
            height: 160px;
            width: 160px;
            @media only screen and (min-width: 500px) and (max-width: 725px) {
              height: 140px;
              width: 140px;
              margin-top: 40px;
            }
            @media only screen and (max-width: 499px) {
              height: 140px;
              width: 140px;
              margin-left: 42px;
            }

            @media only screen and (min-width: 707) and (max-width: 725px) {
              left: 70px;
            }
          }
          .img-desc {
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 45px;
            letter-spacing: 0.1em;
            color: #ffffff;
            text-shadow: 0px 0px 22px #f48024;
            margin-left: -15px;
            @media only screen and (min-width: 500px) and (max-width: 725px) {
              margin-left: 12px;
            }
            @media only screen and (min-width: 415px) and (max-width: 479px) {
              margin-left: 8px;
            }
            @media only screen and (min-width: 480px) and (max-width: 499px) {
              margin-left: 55px;
            }
          }
        }
        @media only screen and (min-width: 415px) and (max-width: 499px) {
          margin-top: -10px;
        }
        @media (max-width: ${theme.Config.mobileWidth}px) {
          .step-img {
            left: 40%;
            width: 80%;
            margin-left: -40px;
            text-align: center;
            margin-top: -14px;
            img {
              width: 90px;
              height: 90px;
            }
            .img-desc {
              font-size: 15px;
              line-height: 21px;
              width: 80px;
              text-align: center;
              margin-left: 45px;
            }
          }
        }
      }
      &.line-2 {
        .timeline-wrapper {
          @media (max-width: ${theme.Config.mobileWidth}px) {
            height: 70px;
            font-size: 13px;
          }
          .item-text {
            width: 100%;
            white-space: normal;
            > div {
              height: 100%;
            }
            .css-0 {
              height: 100%;
              display: flex;
              color: #fff;
              align-items: center;
            }
          }
        }
        min-height: 186px;
        @media only screen and (min-width: 500px) and (max-width: 638px) {
          margin-left: -10px;
        }
        @media (max-width: ${theme.Config.mobileWidth}px) {
          margin-left: -30px;
          margin-top: 16px !important;
          min-height: 110px;
          .item-line {
            height: calc(100% - 10px) !important;
            margin-top: -10px !important;
          }
        }
      }
      &.line-3 {
        min-height: 0px;
        .timeline-wrapper {
          .item-text {
            width: 100%;
            white-space: normal;
            > div {
              height: 100%;
            }
            .css-0 {
              height: 100%;
              display: flex;
              color: #fff;
              align-items: center;
            }
          }
        }
        @media only screen and (min-width: 500px) and (max-width: 638px) {
          margin-left: -10px;
        }
        @media (max-width: ${theme.Config.mobileWidth}px) {
          margin-left: -30px;
          font-size: 13px;
        }
      }
      .timeline-wrapper {
        @media only screen and (min-width: 481) and (max-width: 645px) {
          height: 169px;
        }
        @media (max-width: ${theme.Config.mobileWidth}px) {
          min-width: 166px;
          height: 120px;
          padding: 0 10px 0 20px;
          margin-top: -28px;
          .item-step {
            left: 12px !important;
            @media (max-width: ${theme.Config.mobileWidth}px) {
            }
          }
          .item-text {
            margin-left: 34px !important;
          }
        }
        position: relative;
        width: 331px;
        height: 90px;
        padding: 0 20px 0 80px;
        background: rgba(240, 240, 240, 0.25);
        border-radius: 20px;
        display: flex;
        margin-top: -28px;
        .item-text {
          width: 100%;
          white-space: normal;
          > div {
            height: 100%;
          }
          .css-0 {
            height: 100%;
            display: inline;
            color: #fff;
            align-items: center;
          }
        }
        .item-step {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 22px;
          width: 34px;
          height: 34px;
          background: #f28021;
          border: 4px solid #6d6c79;
          box-shadow: 0px 0px 12px #f48024;
          border-radius: 25px;

          > div {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }
        }
      }
      .item-line {
        @media (max-width: ${theme.Config.mobileWidth}px) {
          left: 28px !important;
          height: calc(100% - 6px) !important;
          margin-top: 20px;
        }
        margin-left: 22px;
        margin-top: -2px;
        border-right: 2px solid #ffffff;
        height: calc(100% - 32px);
        top: 32px;
        width: 1px;
        margin: 0 auto;
        position: absolute;
        left: 38px;
        z-index: -1;
      }

      &:before {
        content: "";
        display: block;
        overflow: hidden;
      }
      &:after {
        cclear: both;
        content: "";
        display: block;
        overflow: hidden;
      }
      .slideInRight > div:first-child {
      }
    `,
    yearDetailLeft: css`
      color: #dedede;
    `,
    timelineLeft: css`
      text-align: right;
      width: 85%;
      float: left;
      margin-right: 10px;
    `,
    timelineRight: css`
      width: 45%;
      float: left;
    `,
    timelineSideLeft: css`
      height: 150px;
    `,
    timeStepContainerLeft: css`
      margin-top: -10px;
    `,
    timeStepContainerRight: css`
      @media (max-width: ${theme.Config.mobileWidth}px) {
        margin-top: 66px;
      }
    `,
    yearLabel: css`
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin-top: 20px;
      background-color: #026bb5;
      color: #fff;
      border-radius: 25px 0 20px 25px;
      display: inline-block;
      margin-bottom: 10px;
    `,
    yearDetail: css``,
    yearLearnMore: css``,
    timelineMiddle: css`
      float: left;
    `,
    timelineMiddleRight: css`
      width: 10%;
      height: 88px;
      float: left;
    `,
    timelineCircle: css`
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 0px solid #f4f8f9;
      background-color: #888695;
      margin: 0 auto;
    `,
    backgroundBorder: css``,
    timelineCircleRight: css`
      margin-top: 10px;
      margin-left: 10px;
      width: 30px;
      height: 30px;
      background: #f28021;
      border: 2px solid #6d6c79;
      box-shadow: 0px 1px 5px #f48024;
      border-radius: 50%;
      margin: 0 auto;
    `,
    timelineBottomLeft: css`
      border-right: 2px solid #c4c4c4;
      min-height: 155px;
      height: 100%;
      width: 1px;
      margin: 0 auto;
      @media (max-width: ${theme.Config.mobileWidth}px) {
        min-height: 40px;
      }
    `,
    timelineBottomRight: css`
      border-right: 1px solid #ffffff;
      min-height: 150px;
      height: 100%;
      width: 1px;
      margin: 0 auto;
    `,
    timelineBottomRightStep: css``,
    welabLogo: css`
      width: 207.1px;
    `,
    welendLogo: css`
      width: 207.1px;
    `,
  };
};

export default styles;
