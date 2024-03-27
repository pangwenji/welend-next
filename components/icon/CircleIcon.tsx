import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

/* tslint:disable:max-line-length */
const CircleIcon: React.SFC<Props> = ({ className, theme, children, ...props}: Props) => {
  const { CircleIconTheme } = theme;

  return (
    <div
      className={cx(css`
        display: inline-block;
        padding: ${CircleIconTheme.padding};
        border-radius: 50%;
        background-color: ${CircleIconTheme.backgroundColor};
        > * {
          color: ${CircleIconTheme.color} !important;
        }
      `, className)}
    >
      {children}
    </div>
  );
};

export default withTheme(CircleIcon);
