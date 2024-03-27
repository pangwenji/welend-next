import { css } from "emotion";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    mainContainer: css`
      width: 70%;
      margin: auto;
      text-align: center;
      h {
        color: ${theme.Colors.primary}
      }
      @media (max-width: ${theme.Config.tabletWidth}px) {
        margin-top: 50px;
      }
    `,
    icon: css`
      width: 100%;
      max-width: 150px;
      margin: auto;
    `,
    title: css`
      margin-top: 15px;
      font-size: 1.7rem;
      font-weight: 500;
    `,
    description: css`
      margin-top: 10px;
      line-height: 24px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        font-weight: 300;
        line-height: 24px;
      }
    `,
  };
};

export default styles;
