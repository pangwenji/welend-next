import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, InjectedThemeProps {}

const ModalTitle: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { ModalTitleTheme } = theme;

  return (
    <h3
      className={cx(css`
        padding-left: ${ModalTitleTheme.paddingLeft};
        padding-right: ${ModalTitleTheme.paddingRight};
        margin: 0;
        border-left-width: ${ModalTitleTheme.borderWidth};
        border-left-style: solid;
        border-left-color: ${ModalTitleTheme.borderColor};
        color: ${ModalTitleTheme.color};
        font-size: ${ModalTitleTheme.fontSize};
        font-weight: ${ModalTitleTheme.fontWeight};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(ModalTitle);
