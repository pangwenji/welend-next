import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import { Card } from "../../card";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const ModalCard: React.SFC<Props> = ({ className, theme, children, ...props}: Props) => {
  const { ModalCardTheme } = theme;

  return (
    <div
      className={cx(css`
        position: absolute;
        top: ${ModalCardTheme.top};
        right: ${ModalCardTheme.right};
        bottom: ${ModalCardTheme.bottom};
        left: ${ModalCardTheme.left};
      `, className)}
      {...props}
    >
      <Card>
        {children}
      </Card>
    </div>
  );
};

export default withTheme(ModalCard);
