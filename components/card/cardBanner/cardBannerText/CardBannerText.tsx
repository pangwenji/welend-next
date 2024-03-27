import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, InjectedThemeProps {}

const CardBannerText: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { CardBannerTextTheme } = theme;
  return (
    <p
      className={cx(css`
        margin: 0;
        font-size: ${CardBannerTextTheme.fontSize};
        font-weight: ${CardBannerTextTheme.fontWeight};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(CardBannerText);
