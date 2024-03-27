import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLUListElement>, InjectedThemeProps {}

const UnorderedList: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { UnorderedListTheme } = theme;

  return (
    <ul
      className={cx(css`
        padding-left: 0;
        list-style-type: none;
        & > li {
          position: relative;
          padding-left: ${UnorderedListTheme.paddingLeft};
          margin-bottom: ${UnorderedListTheme.listMarginBottom};
          font-size: ${UnorderedListTheme.fontSize};
          font-weight: ${UnorderedListTheme.fontWeight};
          color: ${UnorderedListTheme.color};
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: "•";
            color: ${UnorderedListTheme.color}
          }
        }
      `, className)}
      {...props}
    />
  );
};

export default withTheme(UnorderedList);
