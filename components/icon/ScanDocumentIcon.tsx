import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const ScanDocumentIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M38.636,14.725h-4.091V5.455C34.545,2.442,32.103,0,29.091,0H10.909C7.897,0,5.455,2.442,5.455,5.455
      v9.271H1.364C0.611,14.725,0,15.336,0,16.089c0,0.753,0.611,1.364,1.364,1.364h4.091v17.093c0,3.012,2.442,5.455,5.455,5.455h18.182
      c3.012,0,5.455-2.442,5.455-5.455V17.453h4.091c0.753,0,1.364-0.611,1.364-1.364C40,15.336,39.389,14.725,38.636,14.725z
      M8.182,5.455c0-1.504,1.223-2.727,2.727-2.727h18.182c1.504,0,2.727,1.223,2.727,2.727v9.271H8.182V5.455z M31.818,34.545
      c0,1.504-1.223,2.727-2.727,2.727H10.909c-1.504,0-2.727-1.223-2.727-2.727V17.453h23.636V34.545z M26.79,7.339H13.196
      c-0.753,0-1.364,0.611-1.364,1.364s0.611,1.364,1.364,1.364H26.79c0.753,0,1.364-0.611,1.364-1.364S27.543,7.339,26.79,7.339z
      M13.196,24.837H26.79c0.753,0,1.364-0.611,1.364-1.364c0-0.753-0.611-1.364-1.364-1.364H13.196c-0.753,0-1.364,0.611-1.364,1.364
      C11.832,24.226,12.443,24.837,13.196,24.837z M13.196,32.224h4.695c0.753,0,1.364-0.611,1.364-1.364
      c0-0.753-0.611-1.364-1.364-1.364h-4.695c-0.753,0-1.364,0.611-1.364,1.364C11.832,31.613,12.443,32.224,13.196,32.224z"
    />
  </Icon>
);

export default ScanDocumentIcon;
