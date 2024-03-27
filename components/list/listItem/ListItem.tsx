import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.LiHTMLAttributes<HTMLLIElement>, InjectedThemeProps {}

const ListItem: React.SFC<Props> = ({ theme, ...props }: Props) => {
  return (
    <li {...props} />
  );
};

export default withTheme(ListItem);
