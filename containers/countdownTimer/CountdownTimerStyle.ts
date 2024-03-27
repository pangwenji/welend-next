import { css, cx } from "emotion";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    mainContainer: cx(
      `text-color-white`,
      css`
        text-align: center;
        position: relative;
        background-size: 1920px 100%;
        background-repeat: no-repeat;
        background-position: center center;
        padding: 10px 0;
        @media (max-width: ${theme.Config.mobileWidth}px) {
          padding: 0px;
        }
    `),
    descriptionContainer: css`
      margin-bottom: 5px;
    `,
    descriptionText: cx(
      `text-size-small`,
      css`
        padding-left: 5px;
      `,
    ),
    timeGroup: css`
      margin-right: 5px;
      display: inline-block;
      text-align: center;
      position: relative;
    `,
    timeGroupUnitText: css`
      font-size: 0.6em;
      position: absolute;
      text-align: center;
      bottom: 2px;
      width: 100%;
      span {
        color: ${theme.Colors.primary};
        background-color: #f0f0f0f0;
        display:inline-block;
      }
    `,
  };
};

export default styles;
