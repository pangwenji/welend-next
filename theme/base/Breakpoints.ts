import { css } from "emotion";

// const breakpoints = {
//   small: 576,
//   medium: 768,
//   large: 992,
//   xLarge: 1200,
// };

interface BreakPoints {
  small: number;
  medium: number;
  large: number;
  xLarge: number;
}

export default (breakpoints: BreakPoints) => {
  return Object.keys(breakpoints).reduce(
    (accumulator, label) => {
      accumulator[label] = (cls: string) =>
        css`
          @media (min-width:${breakpoints[label]}px) {
            ${cls};
          }
        `;
      return accumulator;
    },
    {},
  );
};
