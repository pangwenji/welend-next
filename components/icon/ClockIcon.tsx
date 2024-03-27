import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const ClockIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M20,2.727c9.524,0,17.273,7.749,17.273,17.273S29.524,37.273,20,37.273S2.727,29.524,2.727,20
      S10.476,2.727,20,2.727 M20,0C8.954,0,0,8.954,0,20s8.954,20,20,20s20-8.954,20-20S31.046,0,20,0L20,0z M26.027,18.31h-4.457V9.418
      c0-0.753-0.611-1.364-1.364-1.364c-0.753,0-1.364,0.611-1.364,1.364v10.256c0,0.753,0.611,1.364,1.364,1.364h5.82
      c0.753,0,1.364-0.611,1.364-1.364C27.391,18.92,26.78,18.31,26.027,18.31z"
    />
  </Icon>
);

export default ClockIcon;
