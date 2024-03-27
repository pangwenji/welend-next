import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import OrderedListItem from "./OrderedListItem";

interface Props extends React.HTMLAttributes<HTMLOListElement>, InjectedThemeProps {
  children: React.ReactElement<HTMLLIElement> | Array<React.ReactElement<HTMLLIElement>>;
}

const OrderedList: React.SFC<Props> = ({ className, theme, children, ...props}: Props) => {

  let listItems = null;

  if (children && Array.isArray(children)) {
    listItems = children.map((listItem: React.ReactElement<HTMLLIElement>, i: number) => {
      return (
        <OrderedListItem key={i} index={i + 1}>
          {listItem.props.children}
        </OrderedListItem>
      );
    });
  } else if (children) {
    listItems = (
      <OrderedListItem index={1}>
        {children.props.children}
      </OrderedListItem>
    );
  }

  return (
    <ol
      className={cx(css`
        list-style-type: none;
        counter-reset: item;
        padding: 0;
        > li {
          display: table;
          counter-increment: item;
          margin-bottom: 0.6em;
        }
        > li:before {
          content: counters(item, ".") ". ";
          display: table-cell;
          padding-right: 0.6em;
        }
        li ol > li {
          margin: 0;
        }
        li ol > li:before {
          content: counters(item, ".") " ";
        }
        > *:before {
          content: "";
          padding-right: 0;
        }
      `, className)}
      {...props}
    >
      {listItems}
    </ol>
  );
};

export default withTheme(OrderedList);
