import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const MobileIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M29.091,0H10.909C7.897,0,5.455,2.442,5.455,5.455v29.091c0,3.012,2.442,5.455,5.455,5.455h18.182
      c3.012,0,5.455-2.442,5.455-5.455V5.455C34.545,2.442,32.103,0,29.091,0z M10.909,2.727h18.182c1.504,0,2.727,1.223,2.727,2.727
      H8.182C8.182,3.951,9.405,2.727,10.909,2.727z M31.818,8.182v23.636H8.182V8.182H31.818z M29.091,37.273H10.909
      c-1.504,0-2.727-1.223-2.727-2.727h23.636C31.818,36.049,30.595,37.273,29.091,37.273z"
    />
  </Icon>
);

export default MobileIcon;
