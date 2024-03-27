import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const LinkedInIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0z M15.6,28.3h-3.8V16h3.8V28.3z M13.6,13.6L13.6,13.6
      c-1.2,0-1.9-0.9-1.9-1.9c0-1.1,0.8-1.9,2-1.9c1.2,0,1.9,0.8,1.9,1.9C15.6,12.7,14.8,13.6,13.6,13.6z M30.3,28.3h-3.8v-7
      c0-1.7-0.9-2.5-2.4-2.5c-1.1,0-1.8,0.8-2.1,1.5c-0.1,0.3-0.1,0.6-0.1,1v7H18c0,0,0.1-11.2,0-12.3h3.8l0,1.6c0.5-0.9,1.5-2.1,3.8-2.1
      c2.7,0,4.8,1.8,4.8,5.6V28.3z"
    />
  </Icon>
);

export default LinkedInIcon;
