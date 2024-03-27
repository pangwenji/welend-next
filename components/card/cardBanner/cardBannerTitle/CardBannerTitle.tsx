import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, InjectedThemeProps {}

const CardBannerTitle: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { CardBannerTitleTheme } = theme;
  return (
    <h3
      className={cx(css`
        margin: 0;
        font-size: ${CardBannerTitleTheme.fontSize};
        font-weight: ${CardBannerTitleTheme.fontWeight};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(CardBannerTitle);
