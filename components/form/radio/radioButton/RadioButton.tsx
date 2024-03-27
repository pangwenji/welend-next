import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../../theme/withTheme";
import { RadioGroupContext } from "../radioGroup";

interface Props extends React.InputHTMLAttributes<HTMLLabelElement>, InjectedThemeProps {}

const RadioButton: React.SFC<Props> = ({ className, theme, value, children, ...props }: Props) => {
  const { RadioButtonTheme } = theme;

  return (
    <RadioGroupContext.Consumer>
      { (selectedValue: string) => (
        <label
          className={cx(css`
            padding-top: ${RadioButtonTheme.paddingTop};
            padding-bottom: ${RadioButtonTheme.paddingBottom};
            text-align: center;
            background-color: ${selectedValue === value ?
              RadioButtonTheme.checkedBackgroundColor : RadioButtonTheme.uncheckedBackgroundColor
            };
            color: ${selectedValue === value  ?
              RadioButtonTheme.checkedColor : RadioButtonTheme.uncheckedColor
            };
            border-width: 1px;
            border-style: solid;
            border-color: ${selectedValue === value  ?
              RadioButtonTheme.checkedBorderColor : RadioButtonTheme.uncheckedBorderColor
            };
            cursor: pointer;
          `, className)}
          {...props}
        >
          <input
            type="radio"
            className={css`
              display: none;
            `}
            checked={selectedValue === value}
            value={value}
            readOnly={true}
          />
          {children}
        </label>
      ) }
    </RadioGroupContext.Consumer>
  );
};

export default withTheme(RadioButton);
