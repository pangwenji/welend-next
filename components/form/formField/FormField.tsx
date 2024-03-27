import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import { IconSize } from "../../icon/Icon";
import FormLabel from "../formLabel";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  /// @ts-ignore
  icon?: Icon;
  label: string;
}

const FormField: React.SFC<Props> = ({ className, theme, children, icon, label, ...props}: Props) => {
  const { FormFieldTheme } = theme;
  const formIcon = icon ?
    React.createElement(icon, { size: IconSize.small, style: { marginRight: FormFieldTheme.iconMarginRight } },  null) :
    null;

  return (
    <div
      className={className}
      {...props}
    >
      <div
        className={css`
          margin-bottom: ${FormFieldTheme.labelMarginBottom};
        `}
      >
        {formIcon}
        <FormLabel
          className={css`
            vertical-align: middle;
          `}
        >
          {label}
        </FormLabel>
      </div>
    </div>
  );
};

export default withTheme(FormField);
