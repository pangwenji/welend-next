import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import BaseButton from "../baseButton";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, InjectedThemeProps {}

const LightButton: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { LightButtonTheme } = theme;

  return (
    <BaseButton
      className={cx(css`
        display: inline-block;
        width: auto;
        height: auto;
        padding-top: ${LightButtonTheme.paddingTop};
        padding-right: ${LightButtonTheme.paddingRight};
        padding-bottom: ${LightButtonTheme.paddingBottom};
        padding-left: ${LightButtonTheme.paddingLeft};
        font-size: ${LightButtonTheme.fontSize};
        font-weight: ${LightButtonTheme.fontWeight};
        border-width: 1px;
        border-style: solid;
        border-color: ${LightButtonTheme.borderColor};
        color: ${LightButtonTheme.color};
        background-color: #ffffff;
      `, className)}
      {...props}
    />
  );
};

export default withTheme(LightButton);
