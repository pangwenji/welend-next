import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, InjectedThemeProps {}

const CardHeader: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { CardHeaderTheme } = theme;

  return (
    <div
      className={cx(css`
        margin-top: ${CardHeaderTheme.marginTop};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(CardHeader);
