import { css } from "emotion";
import iconClose from "../../assets/images/static-page/icon-menu@2x.png";
import buttonBkg from "../../assets/images/static-page/mobile-button-apply@2x.png";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    mainContainer: css`
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #fff;
      z-index: 5;
    `,
    content: css`
      border-top: 4px solid ${theme.Colors.secondary};
      overflow: hidden;
      height: auto;
      max-height: 500px;
      transition: max-height 0.5s;
      &.active {
        border: 0;
        height: 0;
        max-height: 0;
      }
    `,
    button: css`
      background-color: ${theme.Colors.primary};
      background-image: url(${buttonBkg});
      background-repeat: no-repeat;
      background-size: 480px 100%;
      background-position: center;
      color: #fff;
      text-align: center;
      line-height: 50px;
      z-index: 1;
      position: relative;
      letter-spacing: 2px;
    `,
    openButton: css`
      position: fixed;
      width: 60px;
      height: 60px;
      right: 30px;
      box-shadow: rgba(0,0,0,.2) 0px 2px 8px;
      bottom: 145px;
      background: ${theme.Colors.primary};
      border-radius: 50%;
      transition: all 0.3s;
      opacity: 0;
      transform: scale(0);
      z-index: 2;
      font-size: 30px;
      line-height: 54px;
      text-align: center;
      &.active {
        opacity: 1;
        transform: scale(1);
      }
    `,
    closeButton: css`
      span {
        color: #fff;
        background: url(${iconClose});
        background-size: 100%;
        display: inline-block;
        width: 58px;
        height: 32px;
        border-radius: 0 0 50% 50%;
        text-align: center;
        line-height: 30px;
        position: absolute;
        top: 3px;
        right: 20px;
        z-index: 1;
      }
    `,
    buttonApply: css`
      background-color: #026bb5;
      color: ${theme.Colors.white};
      position: relative;
    `,
    buttonApplyText: css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      text-align: center;
    `,
  };
};

export default styles;
