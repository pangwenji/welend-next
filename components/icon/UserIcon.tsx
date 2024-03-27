import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const UserIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M26.049,21.804c2.929-1.956,4.86-5.29,4.86-9.076c0-6.025-4.884-10.909-10.909-10.909S9.091,6.702,9.091,12.727
      c0,3.787,1.931,7.12,4.86,9.076c-7.063,2.121-12.133,7.83-12.133,14.56v0.455c0,0.753,0.611,1.364,1.364,1.364
      c0.753,0,1.364-0.611,1.364-1.364v-0.455c0-7.018,6.933-12.727,15.455-12.727c8.522,0,15.455,5.709,15.455,12.727v0.455
      c0,0.753,0.611,1.364,1.364,1.364c0.753,0,1.364-0.611,1.364-1.364v-0.455C38.182,29.634,33.112,23.925,26.049,21.804z
      M11.818,12.727c0-4.511,3.67-8.182,8.182-8.182s8.182,3.67,8.182,8.182s-3.67,8.182-8.182,8.182S11.818,17.239,11.818,12.727z"
    />
  </Icon>
);

export default UserIcon;
