import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLParagraphElement>, InjectedThemeProps {
  errorMessage: string;
}

const FieldError: React.SFC<Props> = ({ className, errorMessage, theme, ...props }: Props) => {
  const { FieldErrorTheme } = theme;

  return errorMessage ? (
    <p
      className={cx(css`
        margin-top: ${FieldErrorTheme.marginTop};
        color: ${FieldErrorTheme.color};
        font-size: ${FieldErrorTheme.fontSize};
        font-weight: ${FieldErrorTheme.fontWeight};
      `, className)}
    >
      {errorMessage}
    </p>
  ) : null;
};

export default withTheme(FieldError);
