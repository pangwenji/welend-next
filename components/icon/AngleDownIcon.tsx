import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const AngleDownIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M40,12.4c0,0.8-0.3,1.6-1,2.2L21.6,29.1c-0.9,0.8-2.2,0.8-3.2,0L1,14.6c-1.2-1-1.4-2.8-0.4-4
      c1-1.2,2.8-1.4,4-0.4l13.7,11.4c0.9,0.8,2.2,0.8,3.2,0l13.7-11.4c1.2-1,3-0.8,4,0.4C39.8,11.1,40,11.8,40,12.4z"
    />
  </Icon>
);

export default AngleDownIcon;
