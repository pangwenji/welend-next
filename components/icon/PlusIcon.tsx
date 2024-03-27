import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const PlusIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M22.7,22.7l14.1,0c1.5,0,2.7-1.2,2.7-2.7c0-1.5-1.2-2.7-2.7-2.7l-14.1,0l0-14.1c0-1.5-1.2-2.7-2.7-2.7
      c-1.5,0-2.7,1.2-2.7,2.7l0,14.1l-14,0c-1.5,0-2.8,1.2-2.8,2.7c0,1.5,1.2,2.7,2.8,2.7l14,0l0,14c0,1.5,1.2,2.8,2.7,2.8
      c1.5,0,2.7-1.2,2.7-2.8L22.7,22.7z"
    />
  </Icon>
);

export default PlusIcon;
