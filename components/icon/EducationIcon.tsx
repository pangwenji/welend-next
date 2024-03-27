import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const EducationIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M38.496,9.728L21.468,3.881C20.993,3.718,20.496,3.636,20,3.636s-0.993,0.082-1.468,0.245L1.504,9.728
      c-2.005,0.688-2.005,3.492,0,4.18l4.168,1.431c-0.022,0.097-0.059,0.187-0.059,0.29V35c0,0.753,0.611,1.364,1.364,1.364h26.048
      c0.753,0,1.364-0.611,1.364-1.364V15.63c0-0.103-0.037-0.194-0.059-0.29l1.126-0.387v5.017c0,0.753,0.611,1.364,1.364,1.364
      c0.753,0,1.364-0.611,1.364-1.364v-5.953l0.314-0.108C40.501,13.22,40.501,10.416,38.496,9.728z M19.417,6.461
      C19.605,6.396,19.801,6.364,20,6.364s0.395,0.033,0.583,0.097l15.603,5.357l-15.603,5.357c-0.188,0.064-0.384,0.097-0.583,0.097
      s-0.395-0.033-0.583-0.097L3.814,11.818L19.417,6.461z M31.66,33.636H8.34V16.256l10.192,3.499C19.007,19.918,19.504,20,20,20
      s0.993-0.082,1.468-0.245l10.192-3.499V33.636z"
    />
  </Icon>
);

export default EducationIcon;
