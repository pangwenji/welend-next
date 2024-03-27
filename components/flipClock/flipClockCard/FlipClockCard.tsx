import { css, cx } from "emotion";
import * as React from "react";
import { ClockStyle } from "../";
import clockface from "../../../assets/images/campaign-banner/flipboard@2x.png";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, ClockStyle, InjectedThemeProps {
  digit: number;
}

const FlipClockCard: React.SFC<Props> = ({ className, theme, digit, clockSize, ...props}: Props) => {
  return (
    <div
      className={cx(css`
        height: 50%;
        width: 100%;
        overflow: hidden;
        background-image: url('${clockface}');
        background-size: 100% 200%;
        background-color: transparent;
        transition: transform .5s;
        transform-origin: 50% 100%;
        animation-iteration-count: 1;
        animation-duration: 1s;
        backface-visibility: hidden;
        top: 0;
        position: relative;
        span {
          font-family: Avenir Next Condensed;
          color: ${theme.TextColorPrimary.color};
          font-size: ${clockSize.clockHeight * (3 / 4)}px;
          font-weight: 600;
          position: relative;
        }
      `, className)}
      {...props}
    >
      <span>{digit}</span>
    </div>
  );
};

export default withTheme(FlipClockCard);
