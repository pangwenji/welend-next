import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import { GridContext } from "../container";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Column: React.SFC<Props> = ({ className, theme, xs, sm, md, lg, xl, ...props}: Props) => {
  const { GridTheme } = theme;
  const columnClasses: string[] = [];

  if (xs) {
    columnClasses.push(`col-${xs}`);
  }

  if (sm) {
    columnClasses.push(`col-sm-${sm}`);
  }

  if (md) {
    columnClasses.push(`col-md-${md}`);
  }

  if (lg) {
    columnClasses.push(`col-lg-${lg}`);
  }

  if (xl) {
    columnClasses.push(`col-xl-${xl}`);
  }

  return (
    <GridContext.Consumer>
      { (context) => (
        <div
          className={cx(css`
            display: inline-block;
            padding-left: ${context.noGutter ? 0 : GridTheme.gutter};
            padding-right: ${context.noGutter ? 0 : GridTheme.gutter};
            width: 100%;
            float: left;
          `, columnClasses, className)}
          {...props}
        />
      ) }
    </GridContext.Consumer>
  );
};

export default withTheme(Column);
