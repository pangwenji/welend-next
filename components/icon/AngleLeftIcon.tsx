import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const AngleLeftIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M27.3,40c-0.8,0-1.6-0.3-2.2-1L10.6,21.6c-0.8-0.9-0.8-2.2,0-3.2L25.1,1c1-1.2,2.8-1.4,4-0.4
      c1.2,1,1.4,2.8,0.4,4L18.1,18.3c-0.8,0.9-0.8,2.2,0,3.2l11.4,13.7c1,1.2,0.8,3-0.4,4C28.6,39.8,27.9,40,27.3,40z"
    />
  </Icon>
);

export default AngleLeftIcon;
