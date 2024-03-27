import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const CloseIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M23.796,20.008l9.964-9.97c1.047-1.048,1.047-2.75,0-3.798c-1.047-1.048-2.749-1.048-3.796,0L20,16.21
      L10.036,6.24c-1.047-1.048-2.749-1.048-3.796,0c-1.047,1.048-1.047,2.75,0,3.798l9.964,9.97l-9.912,9.918
      c-1.075,1.075-1.099,2.802-0.052,3.85c1.047,1.048,2.773,1.024,3.848-0.052L20,23.805l9.912,9.918
      c1.075,1.076,2.801,1.1,3.848,0.052c1.047-1.048,1.023-2.774-0.052-3.85L23.796,20.008z"
    />
  </Icon>
);

export default CloseIcon;
