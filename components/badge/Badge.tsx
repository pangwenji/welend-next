import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLSpanElement>, InjectedThemeProps {}

const Badge: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { BadgeTheme } = theme;

  return (
    <span
      className={cx(css`
        display: inline-block;
        width: ${BadgeTheme.size};
        height: ${BadgeTheme.size};
        border-radius: 50%;
        font-size: ${BadgeTheme.fontSize};
        font-weight: ${BadgeTheme.fontWeight};
        line-height: ${BadgeTheme.size};
        text-align: center;
        background-color: ${BadgeTheme.backgroundColor};
        color: ${BadgeTheme.color};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(Badge);
