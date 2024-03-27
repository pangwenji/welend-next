import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, InjectedThemeProps {}

const CardTitle: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { CardTitleTheme } = theme;

  return (
    <h3
      className={cx(css`
        padding-left: ${CardTitleTheme.paddingLeft};
        padding-right: ${CardTitleTheme.paddingRight};
        margin: 0;
        border-left-width: ${CardTitleTheme.borderWidth};
        border-left-style: solid;
        border-left-color: ${CardTitleTheme.borderColor};
        color: ${CardTitleTheme.color};
        font-size: ${CardTitleTheme.fontSize};
        font-weight: ${CardTitleTheme.fontWeight};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(CardTitle);
