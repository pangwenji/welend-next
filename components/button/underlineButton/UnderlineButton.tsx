import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLSpanElement>, InjectedThemeProps {}

const UnderlineButton: React.SFC<Props> = ({ className, theme, children, ...props}: Props) => {
  return (
    <div
      className={cx(css`
        text-align: center;
      `, className)}
    >
      <span
        className={css`
          text-decoration: underline;
          cursor: pointer;
        `}
        {...props}
      >
        {children}
      </span>
    </div>
  );
};

export default withTheme(UnderlineButton);
