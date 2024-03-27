import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const Sticky: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  return (
    <div
      className={cx(css`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        & > * {
          border-radius: 0 !important;
        }
      `, className)}
      {...props}
    />
  );
};

export default withTheme(Sticky);
