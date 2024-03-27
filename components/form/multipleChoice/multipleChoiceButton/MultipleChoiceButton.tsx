import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../../theme/withTheme";
import { MultipleChoiceGroupContext } from "../multipleChoiceGroup";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, InjectedThemeProps {}

const MultipleChoiceButton: React.SFC<Props> = ({ className, theme, value, children, ...props }: Props) => {
  const { MultipleChoiceButtonTheme } = theme;

  return (
    <MultipleChoiceGroupContext.Consumer>
      { (selectedValue: string) => (
        <label
          className={cx(css`
            display: block;
            width: 100%;
            padding-top: ${MultipleChoiceButtonTheme.paddingTop};
            padding-bottom: ${MultipleChoiceButtonTheme.paddingBottom};
            padding-left: ${MultipleChoiceButtonTheme.paddingLeft};
            padding-right: ${MultipleChoiceButtonTheme.paddingRight};
            background-color: ${MultipleChoiceButtonTheme.backgroundColor};
            font-size: ${MultipleChoiceButtonTheme.fontSize};
            font-weight: ${MultipleChoiceButtonTheme.fontWeight};
            color: ${selectedValue === value  ?
              MultipleChoiceButtonTheme.selectedColor : MultipleChoiceButtonTheme.unselectedColor
            };
            border-width: 1px;
            border-style: solid;
            border-color: ${selectedValue === value  ?
              MultipleChoiceButtonTheme.selectedColor : MultipleChoiceButtonTheme.unselectedColor
            };
            cursor: pointer;
            word-wrap: break-word;
          `, className)}
        >
          <input
            type="radio"
            className={css`
              display: none;
            `}
            checked={selectedValue === value}
            value={value}
            readOnly={true}
            {...props}
          />
          {children}
        </label>
      ) }
    </MultipleChoiceGroupContext.Consumer>
  );
};

export default withTheme(MultipleChoiceButton);
