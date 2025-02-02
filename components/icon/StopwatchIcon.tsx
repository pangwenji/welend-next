import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const StopwatchIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M21.364,5.523V2.727h4.464c0.753,0,1.364-0.611,1.364-1.364S26.58,0,25.827,0H14.173
      c-0.753,0-1.364,0.611-1.364,1.364s0.611,1.364,1.364,1.364h4.464v2.796c-8.9,0.697-15.909,8.125-15.909,17.204
      C2.727,32.267,10.461,40,20,40s17.273-7.733,17.273-17.273C37.273,13.648,30.264,6.221,21.364,5.523z M20,37.273
      c-8.02,0-14.545-6.525-14.545-14.545S11.98,8.182,20,8.182c8.02,0,14.545,6.525,14.545,14.545S28.02,37.273,20,37.273z
      M25.694,22.121h-4.331v-7.489c0-0.753-0.611-1.364-1.364-1.364s-1.364,0.611-1.364,1.364v8.809c0,0.008,0.004,0.014,0.004,0.022
      c0,0.008-0.004,0.014-0.004,0.022c0,0.753,0.611,1.364,1.364,1.364h5.694c0.753,0,1.364-0.611,1.364-1.364
      C27.058,22.732,26.447,22.121,25.694,22.121z"
    />
  </Icon>
);

export default StopwatchIcon;
