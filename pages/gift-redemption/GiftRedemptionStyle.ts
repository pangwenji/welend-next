import { css, cx } from "emotion";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    mainContainer: css`
      background-color: ${theme.Colors.paleGray};
    `,
    cardContainer: cx(
      "margin-top margin-bottom",
      css`
        max-width: ${theme.Config.siteContainerWidth}px;
        margin: 0 auto;
    `),
    formFieldRow: cx(
      "margin-bottom-large",
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: ${theme.Config.tabletWidth}px) {
            display: block;
        }
    `),
    subtitle: cx(
        "text-color-primary text-size-large",
    ),
  };
};

export default styles;
