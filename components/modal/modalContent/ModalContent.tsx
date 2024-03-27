import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const ModalContent: React.SFC<Props> = ({ className, theme, ...props }: Props) => {
  const { ModalContentTheme } = theme;

  return (
    <div
      className={cx(css`
        padding-top: ${ModalContentTheme.paddingTop};
        padding-bottom: ${ModalContentTheme.paddingBottom};
        padding-left: ${ModalContentTheme.paddingLeft};
        padding-right: ${ModalContentTheme.paddingRight};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(ModalContent);
