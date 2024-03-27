import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import TickIcon from "../../icon/TickIcon";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, InjectedThemeProps { }

const Checkbox: React.SFC<Props> = ({ className, theme, checked, children, ...props }: Props) => {
  const { CheckboxTheme } = theme;
  const tick = checked ? (
    <TickIcon
      className={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
      `}
      style={{ color: "white" }}
    />
  ) : null;

  return (
    <div className={css`position: relative;`}>
      <input
        type="checkbox"
        checked={checked}
        className={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            outline: none;
            appearance: none;
            cursor: pointer;
            z-index: 1;
            opacity: 0;
          `}
        {...props}
      />
      <span
        className={cx(css`
          position: relative;
          display: inline-block;
          width: 2.5rem;
          height: 2.5rem;
          border-width: 2px;
          border-style: solid;
          border-color: ${CheckboxTheme.borderColor};
          border-radius: 50%;
          cursor: pointer;
          background-color: ${checked ? CheckboxTheme.checkedBackgroundColor : CheckboxTheme.uncheckedBackgroundColor}
        `, className)}
      >
        {tick}
      </span>
      <div
        className={css`
          display: inline-block;
          width: calc(100% - 2.5rem);
          padding-left: 1rem;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default withTheme(Checkbox);
