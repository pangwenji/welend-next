import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import { CloseIcon, IconSize } from "../../icon";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  onClose: () => void;
}

const ModalHeader: React.SFC<Props> = ({ className, theme, children, onClose, ...props }: Props) => {
  const { ModalHeaderTheme } = theme;

  return (
    <div
      className={cx(css`
        position: relative;
        padding-right: ${ModalHeaderTheme.paddingRight};
        padding-top: ${ModalHeaderTheme.marginTop};
      `, className)}
      {...props}
    >
      <div>
        {children}
      </div>
      <CloseIcon
        className={css`
          position: absolute;
          top: ${ModalHeaderTheme.closeIconMarginTop};
          right: ${ModalHeaderTheme.closeIconMarginRight};
          cursor: pointer;
        `}
        color={ModalHeaderTheme.closeIconColor}
        onClick={onClose}
        size={IconSize.medium}
      />
    </div>
  );
};

export default withTheme(ModalHeader);
