import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const TickIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M13.747,37.242c-0.902,0-1.773-0.356-2.419-0.991L1.029,26.11c-1.358-1.336-1.374-3.518-0.038-4.876
      c1.334-1.352,3.521-1.377,4.876-0.038l7.618,7.5L33.893,4.009c1.218-1.466,3.386-1.676,4.857-0.461
      c1.466,1.215,1.673,3.389,0.461,4.857L16.406,35.992c-0.617,0.744-1.517,1.196-2.484,1.245
      C13.866,37.239,13.807,37.242,13.747,37.242z"
    />
  </Icon>
);

export default TickIcon;
