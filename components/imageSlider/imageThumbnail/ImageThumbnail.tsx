import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement>, InjectedThemeProps {}

const ImageThumbnail: React.SFC<Props> = ({ className, theme, style, src, ...props}: Props) => {
  const { ImageThumbnailTheme } = theme;

  return (
    <img
      className={cx(css`
        width: ${ImageThumbnailTheme.size};
        height: ${ImageThumbnailTheme.size};
        border-radius: ${ImageThumbnailTheme.borderRadius};
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
      `, className)}
      style={{ backgroundImage: `url(${src})`}}
      {...props}
    />
  );
};

export default withTheme(ImageThumbnail);
