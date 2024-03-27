import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const MinusIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M36.8,22.7c1.5,0,2.7-1.2,2.7-2.7s-1.2-2.7-2.7-2.7H3.3c-1.5,0-2.8,1.2-2.8,2.7s1.2,2.7,2.8,2.7H36.8z"
    />
  </Icon>
);

export default MinusIcon;
