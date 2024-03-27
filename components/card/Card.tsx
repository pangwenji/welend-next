import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const Card: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { CardTheme } = theme;

  return (
    <div
      className={cx(css`
        width: 100%;
        background-color: ${CardTheme.backgroundColor};
        box-shadow: ${CardTheme.boxShadow};
        border-radius: ${CardTheme.borderRadius};
        overflow: auto;
      `, className)}
      {...props}
    />
  );
};

export default withTheme(Card);
