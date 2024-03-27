import { css } from "emotion";
import AppConfig from "../../lib/AppConfig";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    fraudAlertContainer: css`
      background-color: ${AppConfig.fraudAlert.color.background};
      color: ${AppConfig.fraudAlert.color.text};
      padding: 20px;
      position: relative;
      z-index: 1;
    `,
    messageContainer: css`
      position: relative;
      max-width: 1220px;
      margin: 0 auto;
    `,
    messageTitle: css`
      font-weight: bold;
      font-size: 1.2rem;
    `,
    messages: css`
      display: inline-block;
      padding-bottom: 10px;
      &:last-child {
        padding-bottom: 0;
      }
    `,
    closeBtn: css`
      position: absolute;
      right: 20px;
      cursor: pointer;
    `,
  };
};

export default styles;
