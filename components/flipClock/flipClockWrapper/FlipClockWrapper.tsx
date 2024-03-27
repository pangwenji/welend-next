import { css, cx } from "emotion";
import * as React from "react";
import { FlipClockCard } from "../../../components";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

export interface ClockStyle {
  clockSize: {
    clockHeight: number;
    clockWidth: number;
  };
}

interface Props extends React.HTMLAttributes<HTMLDivElement>, ClockStyle, InjectedThemeProps {
  digit: number;
  flip: boolean;
}

const FlipClockWrapper: React.SFC<Props> = ({ className, theme, digit, flip, clockSize, ...props}: Props) => {
  const currentDigit = digit;
  let previousDigit = digit + 1;
  previousDigit = previousDigit === 10 ? 0 : previousDigit;
  const digit1 = flip ? previousDigit : currentDigit;
  const digit2 = !flip ? previousDigit : currentDigit;
  return (
    <div
      className={cx(css(`
        height: ${clockSize.clockHeight}px;
        width: ${clockSize.clockWidth}px;
        text-align: center;
        perspective: 200px;
        position: relative;
        border-radius: 5px;
        float: left;
        .flip-card {
          position: absolute;
          top: 50%;
          width: 100%;
          height: 100%;
          .flip {
            position: absolute;
            top: 0;
            opacity: 0;
            transform-origin: 50% 100%;
            animation-name: flipping-top;
            background-position: top;
          }
          .unflip {
            position: absolute;
            top: 0;
            opacity: 1;
            transform-origin: 50% 0;
            animation-name: flipping-bottom;
            background-position: bottom;
            span {
              transform: translateY(-50%);
              display: block;
            }
          }
        }
        .lower {
          background-position: bottom;
          span {
            transform: translateY(-50%);
            display: block;
          }
        }
        @keyframes flipping-top {
          0% {
            top: -50%;
            transform: rotateX(0);
            opacity: 1;
            background-position: top;
          }
          100% {
            top: -50%;
            transform: rotateX(-180deg);
            opacity: 1;
            background-position: top;
          }
        }
        @keyframes flipping-bottom {
          0% {
            top: 0;
            transform: rotateX(180deg);
            opacity: 1;
          }
          100% {
            top: 0;
            transform: rotateX(0);
            opacity: 1;
          }
        }
      `),
      className)
      }
    >
      <FlipClockCard className={`upper`} digit={currentDigit} clockSize={clockSize}/>
      <FlipClockCard className={`lower`} digit={previousDigit} clockSize={clockSize}/>
      <div className={cx(`flip-card`)} >
        <FlipClockCard className={cx(`flip-upper`, flip ? `flip` : `unflip`)} digit={digit1} clockSize={clockSize}/>
        <FlipClockCard className={cx(`flip-lower`, flip ? `unflip` : `flip`)} digit={digit2} clockSize={clockSize}/>
      </div>
    </div>
  );
};

export default withTheme(FlipClockWrapper);
