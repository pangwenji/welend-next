import { css } from "emotion";
import { MAIN_COLOR } from "../../lib/LoanCalculator";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    mainColor: MAIN_COLOR,
    mainContainer: css`
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      text-align: center;
      overflow: hidden;
    `,
    headerContainer: css`
      text-align: left;
      padding: 10px 20px;
      font-size: 1.5rem;
      line-height: 3rem;
      font-weight: 400;
      color: #fff;
      border-radius: 5px 5px 0 0;
      background: ${MAIN_COLOR.gradient};
      &.embed {
        color: ${theme.Colors.text};
        background: #fff;
        line-height: 1.5rem;
        padding-bottom: 0;
      }
    `,
    sliderSection: css`
      padding: 10px 20px 30px;
      &.embed {
        padding: 5px 20px;
      }
    `,
    resultSection: css`
      padding: 20px;
      background-color: #F2F5F8;
      height: 100%;
      &.embed {
        padding: 20px;
      }
    `,
    inputLabel: css`
      padding: 10px 0;
      line-height: 40px;
      text-align: left;
    `,
    inputContainer: css`
      height: 40px;
      overflow: hidden;
      position: relative;
      border: 1px solid #e9e9e9;
      color: #ccc;
      background: #fff;
      white-space: nowrap;
      padding: 8px;
      margin: 10px auto;
      border-radius: 3px;
      text-align: left;
      font-size: 14px;
    `,
    amountInputLabel: css`
      width: 40%;
      line-height: 40px;
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      text-align: right;
      padding-right: 5px;
      z-index: 1;
    `,
    amountInput: css`
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 1rem;
      padding-left: 40%;
      color: ${theme.Colors.secondary};
      border: 1px solid transparent;
      border-radius: 5px;
      background: transparent;
      &:focus {
        outline: none;
      }
    `,
    tenorInputLabel: css`
      width: 100%;
      line-height: 40px;
      position: absolute;
      left: 0;
      display: inline-block;
      padding-left: 40%;
      top: 0;
      text-align: center;
    `,
    tenorInput: css`
      position: absolute;
      color: ${theme.Colors.secondary};
      top: 0;
      left: 0;
      line-height: 40px;
      width: 100%;
      height: 100%;
      text-align: left;
      padding-left: 25%;
      font-size: 1rem;
      margin-top: -2px;
      border: 0;
      background-color: transparent;
      cursor: pointer;
      -webkit-appearance: none;
      &:focus {
        outline: none;
      }
    `,
  };
};

export default styles;
