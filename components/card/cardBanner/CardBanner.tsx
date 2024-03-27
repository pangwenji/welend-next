import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  image: string;
}

const CardBanner: React.SFC<Props> = ({ className, theme, image, children, ...props }: Props) => {
  const { CardBannerTheme } = theme;

  return (
    <div
      className={cx(css`
        position: relative;
        text-align: center;
        color: ${CardBannerTheme.color};
      `, className)}
      {...props}
    >
      <img
        className={css`
          display: block;
          width: 100%;
        `}
        src={image}
      />
      <div
        className={css`
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          padding-left: ${CardBannerTheme.paddingLeft};
          padding-right: ${CardBannerTheme.paddingRight};
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default withTheme(CardBanner);
