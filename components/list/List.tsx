import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLUListElement>, InjectedThemeProps {
  topBorder?: boolean;
  bottomBorder?: boolean;
}

const List: React.SFC<Props> = ({ className, theme, topBorder, bottomBorder, ...props}: Props) => {
  const { ListTheme } = theme;

  const topBorderStyles = topBorder ? "" : `
    & > li:first-child {
      border-top: none;
    }
  `;

  const bottomBorderStyles = bottomBorder ? `
    & > li:last-child {
      border-bottom-width: 1px;
      border-bottom-style: dashed;
      border-bottom-color: ${ListTheme.borderColor};
    }
  ` : "";

  return (
    <ul
      className={cx(css`
        margin: 0;
        padding-left: 0;
        list-style-type: none;
        & > li {
          padding-top: ${ListTheme.paddingTop};
          padding-right: ${ListTheme.paddingRight};
          padding-bottom: ${ListTheme.paddingBottom};
          padding-left: ${ListTheme.paddingLeft};
          border-top-width: 1px;
          border-top-style: dashed;
          border-top-color: ${ListTheme.borderColor};
          ${bottomBorderStyles}
        }
        ${topBorderStyles}
        ${bottomBorderStyles}
      `, className)}
      {...props}
    />
  );
};

export default withTheme(List);
