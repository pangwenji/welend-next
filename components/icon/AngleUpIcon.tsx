import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const AngleUpIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M0,26.9c0-0.8,0.3-1.6,1-2.2l17.4-14.5c0.9-0.8,2.2-0.8,3.2,0L39,24.7c1.2,1,1.4,2.8,0.4,4
      c-1,1.2-2.8,1.4-4,0.4L21.7,17.7c-0.9-0.8-2.2-0.8-3.2,0L4.8,29.1c-1.2,1-3,0.8-4-0.4C0.2,28.2,0,27.5,0,26.9z"
    />
  </Icon>
);

export default AngleUpIcon;
