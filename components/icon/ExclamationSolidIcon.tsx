import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const ExclamationSolidIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M20,30c1.105,0,2-0.895,2-2s-0.895-2-2-2c-1.105,0-2,0.895-2,2S18.895,30,20,30z M20,10
      c-1.105,0-2,0.895-2,2v8c0,1.105,0.895,2,2,2c1.105,0,2-0.895,2-2v-8C22,10.895,21.105,10,20,10z M20,0c11.046,0,20,8.954,20,20
      s-8.954,20-20,20S0,31.046,0,20S8.954,0,20,0z"
    />
  </Icon>
);

export default ExclamationSolidIcon;
