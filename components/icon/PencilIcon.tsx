import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const PencilIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M36.015,3.988c-1.4-1.399-3.261-2.17-5.241-2.17c-1.98,0-3.841,0.771-5.241,2.169L5.485,24.009
      c-2.268,2.265-4.815,11.874-3.11,13.577c0.407,0.406,1.097,0.595,2.172,0.596h0.001c3.047-0.001,9.374-1.658,11.419-3.702
      l20.049-20.021C38.904,11.571,38.904,6.874,36.015,3.988z M25.331,8.044l2.32,2.315L11.728,26.247
      c-1.028-0.801-2.045-1.363-2.892-1.731L25.331,8.044z M4.548,35.455c-0.01,0-0.02,0-0.03,0c-0.067-2.079,1.201-6.737,2.366-8.773
      c1.442,0.464,4.846,1.995,6.556,6.314C11.565,34.159,7.052,35.454,4.548,35.455z M15.563,31.029
      c-0.543-1.133-1.189-2.075-1.873-2.887l15.892-15.857l2.376,2.372L15.563,31.029z M34.089,12.528l-0.2,0.2l-6.627-6.613l0.198-0.198
      c0.886-0.884,2.062-1.372,3.314-1.372c1.251,0,2.428,0.487,3.313,1.372c0.881,0.881,1.367,2.055,1.367,3.306
      S34.969,11.648,34.089,12.528z"
    />
  </Icon>
);

export default PencilIcon;
