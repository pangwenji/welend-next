import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, InjectedThemeProps {}

const TextArea: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { InputTheme, TextAreaTheme } = theme;

  return (
    <textarea
      className={cx(css`
        padding-top: ${TextAreaTheme.paddingTop};
        padding-bottom: ${TextAreaTheme.paddingBottom};
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
        resize: vertical;
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

export default withTheme(TextArea);
