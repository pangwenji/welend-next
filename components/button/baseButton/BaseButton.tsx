import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, InjectedThemeProps {
  large?: boolean;
}

const BaseButton: React.SFC<Props> = ({ className, theme, large, ...props}: Props) => {
  const { BaseButtonTheme } = theme;

  const height = large ? BaseButtonTheme.largeHeight : BaseButtonTheme.normalHeight;

  return (
    <button
      className={cx(css`
        height: ${height};
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        border-radius: ${BaseButtonTheme.borderRadius};
        width: 100%;
        font-size: ${BaseButtonTheme.fontSize};
        font-weight: ${BaseButtonTheme.fontWeight};
        cursor: pointer;
        &:disabled {
          color: ${BaseButtonTheme.disabled.color};
          background-color: ${BaseButtonTheme.disabled.backgroundColor};
          border-color: transparent;
        }
      `, className)}
      {...props}
    />
  );
};

export default withTheme(BaseButton);
