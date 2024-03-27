import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const ImageSlider: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { ImageSliderTheme } = theme;

  return (
    <div
      className={cx(css`
        width: 100%;
        overflow-x: scroll;
        white-space: nowrap;
        & > * {
          display: inline-block;
          margin-right: ${ImageSliderTheme.imageMargin};
        };
        & > *:last-child {
          margin-right: 0;
        };
      `, className)}
      {...props}
    />
  );
};

export default withTheme(ImageSlider);
