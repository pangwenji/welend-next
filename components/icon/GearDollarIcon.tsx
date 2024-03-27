import * as React from "react";
import Icon, { IconProps } from "./Icon";

/* tslint:disable:max-line-length */
const GearDollarIcon: React.SFC<IconProps> = ({...props}: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      d="M22.822,39.545h-5.646c-1.097,0-2.076-0.698-2.434-1.735l-0.664-1.916c-1.754-0.657-3.374-1.6-4.831-2.809
      L7.25,33.469c-1.078,0.217-2.17-0.295-2.718-1.245l-2.825-4.906c-0.545-0.95-0.431-2.145,0.282-2.974l1.317-1.532
      C3.15,21.879,3.072,20.936,3.072,20s0.078-1.879,0.234-2.812l-1.317-1.532c-0.714-0.829-0.827-2.024-0.282-2.972L4.53,7.777
      c0.55-0.952,1.642-1.461,2.72-1.246l1.998,0.384c1.458-1.209,3.077-2.152,4.83-2.809l0.664-1.918
      c0.359-1.035,1.337-1.733,2.434-1.733h5.646c1.096,0,2.074,0.696,2.434,1.731l0.666,1.919c1.752,0.657,3.372,1.598,4.831,2.809
      l1.998-0.384c1.083-0.213,2.173,0.293,2.718,1.248l2.823,4.902c0.547,0.95,0.433,2.147-0.284,2.976l-1.316,1.531
      c0.156,0.934,0.234,1.877,0.234,2.812s-0.078,1.879-0.234,2.812l1.317,1.532c0.716,0.827,0.829,2.024,0.281,2.976l-2.821,4.902
      c-0.549,0.953-1.646,1.456-2.718,1.246l-1.998-0.384c-1.46,1.211-3.079,2.152-4.831,2.809l-0.664,1.918
      C24.896,38.849,23.917,39.545,22.822,39.545z M10.043,30.156l0.504,0.453c1.479,1.328,3.171,2.312,5.028,2.924l0.641,0.21
      l1.103,3.175l5.502-0.099l0.961-3.075l0.641-0.21c1.854-0.613,3.546-1.596,5.028-2.926l0.504-0.451l3.31,0.636l2.662-4.833
      l-2.168-2.372l0.137-0.657C34.097,21.958,34.2,20.973,34.2,20s-0.103-1.958-0.304-2.93l-0.137-0.657l2.184-2.537l-2.839-4.739
      l-3.148,0.707l-0.504-0.451c-1.483-1.33-3.175-2.314-5.028-2.926l-0.641-0.21L22.68,3.082l-5.504,0.099l-0.959,3.075l-0.641,0.21
      c-1.855,0.613-3.546,1.596-5.027,2.924l-0.502,0.453L6.735,9.208l-2.663,4.833l2.168,2.372L6.103,17.07
      C5.902,18.042,5.799,19.027,5.799,20s0.103,1.958,0.304,2.93l0.137,0.657l-2.184,2.537l2.839,4.739L10.043,30.156z M24.571,20.319
      c-0.54-0.456-1.155-0.838-1.832-1.136c-0.677-0.298-1.38-0.525-2.092-0.677c-0.397-0.097-0.814-0.222-1.256-0.374
      c-0.4-0.14-0.775-0.331-1.116-0.571c-0.322-0.234-0.596-0.51-0.804-0.826c-0.195-0.295-0.29-0.644-0.29-1.06
      c0-0.304,0.072-0.577,0.218-0.829c0.159-0.264,0.361-0.492,0.612-0.677c0.257-0.188,0.547-0.334,0.872-0.434
      c0.69-0.21,1.445-0.219,2.096,0.067c0.348,0.149,0.648,0.352,0.924,0.613c0.27,0.264,0.478,0.568,0.644,0.935
      c0.163,0.355,0.241,0.75,0.241,1.172v0.456h3.121v-0.456c0-0.513-0.091-1.099-0.273-1.74c-0.185-0.656-0.504-1.276-0.95-1.837
      c-0.452-0.577-1.067-1.066-1.835-1.455c-0.377-0.191-0.693-0.334-1.165-0.431V9.091h-3.075v1.95c-0.28,0.055-0.566,0.115-0.843,0.21
      c-0.693,0.231-1.318,0.565-1.861,0.987c-0.547,0.425-0.993,0.935-1.328,1.522c-0.338,0.595-0.514,1.248-0.514,1.941
      c0,0.744,0.159,1.437,0.475,2.056c0.309,0.601,0.719,1.133,1.214,1.579c0.488,0.44,1.058,0.811,1.689,1.105
      c0.622,0.289,1.269,0.507,1.92,0.647c0.436,0.097,0.888,0.225,1.37,0.386c0.459,0.155,0.882,0.358,1.263,0.607
      c0.368,0.24,0.677,0.535,0.918,0.875c0.225,0.319,0.332,0.689,0.332,1.136c0,0.41-0.081,0.759-0.234,1.039
      c-0.166,0.292-0.391,0.541-0.664,0.738c-0.277,0.207-0.612,0.358-0.989,0.459c-0.872,0.228-1.848,0.231-2.607-0.131
      c-0.413-0.194-0.771-0.459-1.071-0.777c-0.296-0.319-0.524-0.699-0.683-1.124c-0.159-0.431-0.238-0.878-0.238-1.327v-0.456h-3.121
      v0.456c0,0.859,0.179,1.679,0.537,2.433c0.355,0.75,0.836,1.412,1.429,1.962c0.592,0.55,1.289,0.993,2.066,1.318
      c0.309,0.128,0.625,0.21,0.94,0.289v1.941h3.075v-1.956c0.28-0.052,0.599-0.039,0.862-0.118c0.761-0.225,1.435-0.553,1.995-0.978
      c0.576-0.431,1.028-0.972,1.344-1.613c0.316-0.632,0.478-1.367,0.478-2.178c0-0.784-0.166-1.497-0.495-2.123
      C25.553,21.33,25.117,20.784,24.571,20.319"
    />
  </Icon>
);

export default GearDollarIcon;
