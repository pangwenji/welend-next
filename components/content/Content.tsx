import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const Content: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { ContentTheme } = theme;

  return (
    <div
      className={cx(css`
        padding: ${ContentTheme.padding};
        background-color: ${ContentTheme.backgroundColor};
        min-height: 600px;
      `, className)}
      {...props}
    />
  );
};

export default withTheme(Content);
