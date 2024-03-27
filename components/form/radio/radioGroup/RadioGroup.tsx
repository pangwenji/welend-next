import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  selectedValue: string;
}

export const RadioGroupContext = React.createContext("");

const RadioGroup: React.SFC<Props> = ({ className, theme, children, selectedValue, ...props }: Props) => {
  const { InputTheme } = theme;
  const radioLength = React.Children.count(children);

  return (
    <div
      className={cx(css`
        & > * {
          display: inline-block;
          width: ${100 / radioLength}%
        }
        & > *:first-child {
          border-top-left-radius: ${InputTheme.borderRadius};
          border-bottom-left-radius: ${InputTheme.borderRadius};
        }
        & > *:last-child {
          border-top-right-radius: ${InputTheme.borderRadius};
          border-bottom-right-radius: ${InputTheme.borderRadius};
        }
      `, className)}
      {...props}
    >
      <RadioGroupContext.Provider value={selectedValue}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
};

export default withTheme(RadioGroup);
