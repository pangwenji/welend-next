import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const FacebookIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M20,0C9,0,0,9,0,20s9,20,20,20c11,0,20-9,20-20S31,0,20,0z M25.6,12.8l-2,0c-1.6,0-1.9,0.8-1.9,1.9v2.5h3.8
      L25,21h-3.3v9.9h-4V21h-3.3v-3.9h3.3v-2.8c0-3.3,2-5.1,5-5.1c1.4,0,2.6,0.1,3,0.2V12.8z"
    />
  </Icon>
);

export default FacebookIcon;
