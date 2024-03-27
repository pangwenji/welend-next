import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import { GridContext } from "../container";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const Row: React.SFC<Props> = ({ className, theme, ...props}: Props) => {
  const { GridTheme } = theme;

  return (
    <GridContext.Consumer>
      { (context) => (
        <div
          className={cx(css`
            margin-left: ${context.noGutter ? 0 : `-${GridTheme.gutter}`};
            margin-right: ${context.noGutter ? 0 : `-${GridTheme.gutter}`};
            overflow: auto;
          `, className)}
          {...props}
        />
      ) }
    </GridContext.Consumer>
  );
};

export default withTheme(Row);
