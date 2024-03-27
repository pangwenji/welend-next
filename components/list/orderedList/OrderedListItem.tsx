import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import { Badge } from "../../badge";
import ListItem from "../listItem";

interface Props extends React.LiHTMLAttributes<HTMLLIElement>, InjectedThemeProps {
  index: number;
}

const OrderedListItem: React.SFC<Props> = ({ className, theme, children, index, ...props}: Props) => {
  const { OrderedListTheme } = theme;
  return (
    <ListItem
      className={cx(css`
        position: relative;
        padding-left: ${OrderedListTheme.paddingLeft};
        margin-bottom: ${OrderedListTheme.listMarginBottom};
        font-size: ${OrderedListTheme.fontSize};
        font-weight: ${OrderedListTheme.fontWeight};
        color: ${OrderedListTheme.color};
      `, className)}
    >
      <Badge
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          background-color: ${OrderedListTheme.badgeBackgroundColor};
          color: ${OrderedListTheme.badgeTextColor};
        `}
      >
        {index}
      </Badge>
      {children}
    </ListItem>
  );
};

export default withTheme(OrderedListItem);
