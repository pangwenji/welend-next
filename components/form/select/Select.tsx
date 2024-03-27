import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement>, InjectedThemeProps {}

const Select: React.SFC<Props> = ({ children, className, theme, value, ...props}: Props) => {
  const { InputTheme } = theme;
  let label = Array.isArray(children) && value ?
    children.find((child: React.ReactElement<HTMLOptionElement>) => {
      return child.props.value === value;
    }) : "";

  /// @ts-ignore
  label = label ? label.props.children : "";

  const emptyOption = !value ? (
    <option disabled={true} label="" value="" />
  ) : null;

  return (
    <div
      className={cx(css`
        position: relative;
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
        line-height: ${InputTheme.height};
        color: ${InputTheme.color};
        background-color: ${InputTheme.backgroundColor};
        overflow-x: hidden;
        overflow-y: hidden;
        &::after {
          position: absolute;
          top: 50%;
          right: ${InputTheme.paddingRight};
          transform: translate(-50%, -50%);
          content: "•••";
          color: #d8d8d8;
          pointer-events: none;
        }
      `, className)}
    >
      <select
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          opacity: 0;
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
        `}
        value={value || ""}
        {...props}
      >
        {emptyOption}
        {children}
      </select>
      {label}
    </div>
  );
};

export default withTheme(Select);
