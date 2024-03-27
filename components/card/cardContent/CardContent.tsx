import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const CardContent: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { CardContentTheme } = theme;

  return (
    <div
      className={cx(css`
        padding-top: ${CardContentTheme.paddingTop};
        padding-bottom: ${CardContentTheme.paddingBottom};
        padding-left: ${CardContentTheme.paddingLeft};
        padding-right: ${CardContentTheme.paddingRight};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(CardContent);
