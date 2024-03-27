import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const CrossIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M24.925,20L36.252,8.672c1.36-1.36,1.36-3.564,0-4.925c-1.36-1.36-3.564-1.36-4.925,0L20,15.075L8.672,3.748
      c-1.36-1.36-3.564-1.36-4.925,0s-1.36,3.564,0,4.925L15.075,20L3.748,31.328c-1.36,1.36-1.36,3.564,0,4.925
      c0.68,0.68,1.57,1.02,2.462,1.02s1.782-0.34,2.462-1.02L20,24.925l11.328,11.328c0.68,0.68,1.57,1.02,2.462,1.02
      c0.892,0,1.782-0.34,2.462-1.02c1.36-1.36,1.36-3.564,0-4.925L24.925,20z"
    />
  </Icon>
);

export default CrossIcon;
