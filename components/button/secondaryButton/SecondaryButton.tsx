import { css, cx } from "emotion";
import * as React from "react";
import withTheme from "../../../theme/withTheme";
import BaseButton, { Props as BaseButtonProps } from "../baseButton/BaseButton";

interface Props extends BaseButtonProps {
  inverse?: boolean;
}

const SecondaryButton: React.SFC<Props> = ({ className, theme, inverse, ...props}: Props) => {
  const { SecondaryButtonTheme } = theme;

  return (
    <BaseButton
      className={cx(css`
        background-color: ${inverse ? SecondaryButtonTheme.color : SecondaryButtonTheme.backgroundColor};
        color: ${inverse ? SecondaryButtonTheme.backgroundColor : SecondaryButtonTheme.color};
        border-color: ${SecondaryButtonTheme.backgroundColor};
      `, className)}
      {...props}
    />
  );
};

export default withTheme(SecondaryButton);
