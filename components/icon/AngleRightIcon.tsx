import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const AngleRightIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M12.8,0c0.8,0,1.6,0.3,2.2,1l14.5,17.4c0.8,0.9,0.8,2.2,0,3.2L15,39c-1,1.2-2.8,1.4-4,0.4
      c-1.2-1-1.4-2.8-0.4-4L22,21.7c0.8-0.9,0.8-2.2,0-3.2L10.6,4.8c-1-1.2-0.8-3,0.4-4C11.5,0.2,12.2,0,12.8,0z"
    />
  </Icon>
);

export default AngleRightIcon;
