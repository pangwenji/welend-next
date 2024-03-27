import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, InjectedThemeProps {
  large?: boolean;
  closeOverlay?: any;
}

const CloseButton: React.SFC<Props> = ({ className, theme, large, ...props}: Props) => {
  const { BaseButtonTheme } = theme;

//   const height = large ? BaseButtonTheme.largeHeight : BaseButtonTheme.normalHeight;

  return (
    <span
      className={cx("close-button", css`
        position: absolute;
        width: 20px;
        height: 20px;
        right: 10px;
        top: 10px;
        cursor: pointer;

        &:before, &:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 20px;
            width: 2px;
            background-color: #fff;
          }
        &:before {
        transform: rotate(45deg);
        }
        &:after {
        transform: rotate(-45deg);
        }
      `, className)}
      {...props}
    />
  );
};

export default withTheme(CloseButton);
