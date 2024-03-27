import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const StopIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M20,0C8.954,0,0,8.954,0,20s8.954,20,20,20s20-8.954,20-20S31.046,0,20,0z M20,2.727
      c3.989,0,7.656,1.372,10.583,3.651L6.378,30.582C4.099,27.655,2.727,23.988,2.727,20C2.727,10.476,10.476,2.727,20,2.727z
      M20,37.273c-4.555,0-8.691-1.785-11.78-4.676L32.597,8.221c2.89,3.089,4.675,7.225,4.675,11.779
      C37.273,29.524,29.524,37.273,20,37.273z"
    />
  </Icon>
);

export default StopIcon;
