import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const GenderIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M30.455,18.319V8.291l1.331,1.32c0.266,0.265,0.613,0.396,0.961,0.396c0.352,0,0.701-0.135,0.968-0.403
      c0.531-0.534,0.527-1.399-0.007-1.928l-3.674-3.643c-0.534-0.531-1.396-0.527-1.926,0.004L24.47,7.68
      c-0.531,0.534-0.531,1.397,0.002,1.93c0.534,0.531,1.399,0.529,1.93-0.002l1.325-1.329v10.04C23.358,18.982,20,22.719,20,27.273
      c0,5.021,4.07,9.091,9.091,9.091s9.091-4.07,9.091-9.091C38.182,22.719,34.823,18.982,30.455,18.319z M29.091,33.636
      c-3.509,0-6.364-2.855-6.364-6.364c0-3.509,2.855-6.364,6.364-6.364s6.364,2.855,6.364,6.364
      C35.455,30.782,32.6,33.636,29.091,33.636z M20,12.727c0-5.021-4.07-9.091-9.091-9.091s-9.091,4.07-9.091,9.091
      c0,4.554,3.358,8.291,7.727,8.954v6.501H6.388c-0.753,0-1.364,0.611-1.364,1.364c0,0.753,0.611,1.364,1.364,1.364h3.157V35
      c0,0.753,0.611,1.364,1.364,1.364s1.364-0.611,1.364-1.364v-4.091h3.157c0.753,0,1.364-0.611,1.364-1.364
      c0-0.753-0.611-1.364-1.364-1.364h-3.157v-6.501C16.642,21.018,20,17.281,20,12.727z M4.545,12.727c0-3.509,2.855-6.364,6.364-6.364
      s6.364,2.855,6.364,6.364c0,3.509-2.855,6.364-6.364,6.364S4.545,16.236,4.545,12.727z"
    />
  </Icon>
);

export default GenderIcon;
