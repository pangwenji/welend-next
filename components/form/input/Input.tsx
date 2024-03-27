import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, InjectedThemeProps {}

const Input: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { InputTheme } = theme;
  return (
    <input
      className={cx(css`
        height: ${InputTheme.height};
        padding-left: ${InputTheme.paddingLeft};
        padding-right: ${InputTheme.paddingRight};
        border-width: 1px;
        border-style: solid;
        border-color: ${InputTheme.borderColor};
        border-radius: ${InputTheme.borderRadius};
        outline: none;
        width: 100%;
        font-size: ${InputTheme.fontSize};
        font-weight: ${InputTheme.fontWeight};
        color: ${InputTheme.color};
        background-color: ${InputTheme.backgroundColor};
        appearance: none;
        &:focus {
          border-color: ${InputTheme.focus.borderColor};
        }
        &::placeholder {
          color: ${InputTheme.placeholder.color};
        }
        &:disabled {
          color: ${InputTheme.disabled.color};
          background-color: ${InputTheme.disabled.backgroundColor};
        }
      `, className)}
      {...props}
    />
  );
};

export default withTheme(Input);
