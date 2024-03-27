import * as React from "react";
import withTheme, { InjectedThemeProps, Subtract } from "../../theme/withTheme";

export interface Props extends React.SVGAttributes<SVGElement>, InjectedThemeProps {
  children?: React.ReactNode;
  color?: string;
  size?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

export interface IconProps extends Subtract<Props, InjectedThemeProps> {}

export enum IconSize {
  small = "small_icon",
  medium = "medium_icon",
  large = "large_icon",
  xl = "xl_icon",
}

const Icon = ({
  children,
  color,
  size,
  style = {},
  width,
  height,
  fill,
  theme,
  ...props
}: Props) => {
  let computedSize = "1em";

  const { IconTheme } = theme;

  switch (size) {
    case IconSize.small:
      computedSize = IconTheme.small;
      break;
    case IconSize.medium:
      computedSize = IconTheme.medium;
      break;
    case IconSize.large:
      computedSize = IconTheme.large;
      break;
    case IconSize.xl:
      computedSize = IconTheme.xl;
      break;
    default:
      computedSize = "1em";
  }

  const styleProp = {
    verticalAlign: "middle",
    ...style,
  };

  const computedColor = color || style.color || IconTheme.color;
  let computedFill = "currentColor";
  let defs = null;
  if (fill) {
    computedFill = `url(#${fill})`;
  } else if (IconTheme && IconTheme.fill) {
    computedFill = `url(#${IconTheme.fill.id})`;
    defs = (
      <defs>
        {IconTheme.fill.gradient}
      </defs>
    );
  } else {
    styleProp.color = computedColor;
  }

  return (
    <svg
      fill={computedFill}
      preserveAspectRatio="xMidYMid meet"
      height={height || computedSize}
      width={width || computedSize}
      {...props}
      style={styleProp}
    >
      {defs}
      {children}
    </svg>
  );
};

export default withTheme(Icon);
