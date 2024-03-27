import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>, InjectedThemeProps {}

const FormLabel: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { FormLabelTheme } = theme;

  return (
    <label
      className={cx(css`
        font-size: ${FormLabelTheme.fontSize};
        font-weight: ${FormLabelTheme.fontWeight};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(FormLabel);
