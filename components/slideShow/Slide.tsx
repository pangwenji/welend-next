import { cx } from "emotion";
import * as React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {}

const Slide: React.SFC<Props> = ({ children, ...props }: Props) => {
  return (
    <div data-slide={true} {...props} >{children}</div>
  );
};

export default Slide;
