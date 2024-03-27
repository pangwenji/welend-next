import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../../theme/withTheme";

interface Props extends React.OptionHTMLAttributes<HTMLOptionElement>, InjectedThemeProps {}

const Option: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  return (
    <option
      {...props}
    />
  );
};

export default withTheme(Option);
