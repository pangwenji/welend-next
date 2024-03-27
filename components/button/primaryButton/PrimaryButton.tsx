import { css, cx } from "emotion";
import * as React from "react";
import withTheme from "../../../theme/withTheme";
import BaseButton, { Props as BaseButtonProps } from "../baseButton/BaseButton";

interface Props extends BaseButtonProps {
  inverse?: boolean;
}

const PrimaryButton: React.SFC<Props> = ({ className, theme, inverse, ...props}: Props) => {
  const { PrimaryButtonTheme } = theme;

  return (
    <BaseButton
      className={cx(css`
        background-color: ${inverse ? PrimaryButtonTheme.color : PrimaryButtonTheme.backgroundColor};
        color: ${inverse ? PrimaryButtonTheme.backgroundColor : PrimaryButtonTheme.color};
        border-color: ${PrimaryButtonTheme.backgroundColor};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(PrimaryButton);
