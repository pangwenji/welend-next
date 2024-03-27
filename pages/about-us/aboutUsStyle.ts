import { css } from "emotion";
import Theme from "../../theme/theme";

const HEADER_HEIGHT_MOBILE = 50;

const styles = (theme: Theme) => {
  return {
    timelineContent: css`
      position: relative;
      width: 95%;
      min-height: 150px;
      margin: auto;
      overflow: hidden;
      margin-top: 0 !important;
      display: flex;
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
    `,
    timelineLeft: css`
      text-align: right;
      width: 45%;
      float: left;
    `,
    timelineRight: css`
      width: 45%;
      float: left;
    `,
    timelineSideLeft: css`
      height: 150px;
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
    yearDetail: css`
    `,
    yearLearnMore: css`
    `,
    timelineMiddle: css`
      width: 10%;
      float: left;
    `,
    timelineCircle: css`
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 5px solid #f4f8f9;
      background-color: #026bb5;
      margin: 0 auto;
    `,
    timelineBottom: css`
      border-right: 1px dashed #026bb5;
      min-height: 150px;
      height: 100%;
      width: 1px;
      margin: 0 auto;
    `,
    welabLogo: css`
      width: 207.1px;
    `,
    welendLogo: css`
      width: 207.1px;
    `,
    chinaMapImg: css`
      width: 207.1px;
    `,
    awdaImg: css`
      width: 207.1px;
    `,
    awardImg: css`
      width: 137.2px;
    `,
  };
};

export default styles;
