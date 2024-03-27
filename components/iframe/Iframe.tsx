import * as React from "react";

interface Props extends React.HTMLProps<HTMLIFrameElement> {
  styles?: any;
}

const Iframe: React.SFC<Props> = ({ children, title, ...props }: Props) => (
  <iframe {...props} />
);

export default Iframe;
