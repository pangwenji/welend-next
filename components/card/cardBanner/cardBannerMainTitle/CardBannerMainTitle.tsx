import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, InjectedThemeProps {}

const CardBannerMainTitle: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { CardBannerMainTitleTheme } = theme;
  return (
    <h2
      className={cx(css`
        margin: 0;
        font-size: ${CardBannerMainTitleTheme.fontSize};
        font-weight: ${CardBannerMainTitleTheme.fontWeight};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(CardBannerMainTitle);
