import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  selectedValue: string;
}

export const MultipleChoiceGroupContext = React.createContext("");

const MultipleChoiceGroup: React.SFC<Props> = ({ className, theme, children, selectedValue, ...props}: Props) => {
  const { MultipleChoiceGroupTheme } = theme;

  return (
    <div
      className={cx(css`
        & > * {
          margin-bottom: ${MultipleChoiceGroupTheme.marginBottom};
        }
        & > *:last-child {
          margin-bottom: 0;
        }
      `, className)}
      {...props}
    >
      <MultipleChoiceGroupContext.Provider value={selectedValue}>
        {children}
      </MultipleChoiceGroupContext.Provider>
    </div>
  );
};

export default withTheme(MultipleChoiceGroup);
