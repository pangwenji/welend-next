import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLInputElement>, InjectedThemeProps {
  onIdentifierChange?: (value: string) => void;
  onCheckDigitChange?: (value: string) => void;
  identifier?: string;
  checkDigit?: string;
  disabled?: boolean;
}

class HkidInput extends React.PureComponent<Props> {
  /// @ts-ignore
  private checkDigit = React.createRef<HTMLInputElement>();

  constructor(props: Props) {
    super(props);

    this.handleIdentifierChange = this.handleIdentifierChange.bind(this);
    this.handleCheckDigitChange = this.handleCheckDigitChange.bind(this);
  }

  public render() {
    const { checkDigit, className, identifier, theme, onIdentifierChange, onCheckDigitChange, ...props } = this.props;
    const { InputTheme } = theme;

    return (
      <div
        className={cx(css`
          position: relative;
          padding-right: 6rem;
        `, className)}
      >
        <input
          className={cx(css`
            height: ${InputTheme.height};
            padding-left: ${InputTheme.paddingLeft};
            padding-right: ${InputTheme.paddingRight};
            border-width: 1px;
            border-style: solid;
            border-color: ${InputTheme.borderColor};
            border-radius: ${InputTheme.borderRadius};
            outline: none;
            width: 100%;
            font-size: ${InputTheme.fontSize};
            font-weight: ${InputTheme.fontWeight};
            color: ${InputTheme.color};
            background-color: ${InputTheme.backgroundColor};
            appearance: none;
            &:focus {
              border-color: ${InputTheme.focus.borderColor};
            }
            &::placeholder {
              color: ${InputTheme.placeholder.color};
            }
            &:disabled {
              color: ${InputTheme.disabled.color};
              background-color: ${InputTheme.disabled.backgroundColor};
            }
          `, className)}
          {...props}
          onChange={this.handleIdentifierChange}
          value={identifier}
        />
        <span
          className={css`
            position: absolute;
            top: 0;
            right: 1rem;
            width: 3rem;
            &:before {
              content: "(";
              position: absolute;
              top: 1rem;
              left: 0;
              margin-left: -1rem;
            };
            &:after {
              content: ")";
              position: absolute;
              top: 1rem;
              right: 0;
              margin-right: -1rem;
            }
          `}
        >
          <input
            ref={this.checkDigit}
            className={cx(css`
              height: ${InputTheme.height};
              padding-left: ${InputTheme.paddingLeft};
              padding-right: ${InputTheme.paddingRight};
              border-width: 1px;
              border-style: solid;
              border-color: ${InputTheme.borderColor};
              border-radius: ${InputTheme.borderRadius};
              outline: none;
              width: 100%;
              text-align: center;
              font-size: ${InputTheme.fontSize};
              font-weight: ${InputTheme.fontWeight};
              color: ${InputTheme.color};
              appearance: none;
              background-color: ${InputTheme.backgroundColor};
              &:focus {
                border-color: ${InputTheme.focus.borderColor};
              }
              &::placeholder {
                color: ${InputTheme.placeholder.color};
              }
              &:disabled {
                color: ${InputTheme.disabled.color};
                background-color: ${InputTheme.disabled.backgroundColor};
              }
            `, className)}
            {...props}
            onChange={this.handleCheckDigitChange}
            value={checkDigit}
            maxLength={1}
          />
        </span>
      </div>
    );
  }

  private handleIdentifierChange(event: React.FormEvent<HTMLInputElement>) {
    if ((event.currentTarget.value.length === 8 ||
      (event.currentTarget.value.length === 7 && event.currentTarget.value.match(/^[a-z][0-9]{6}/i))) &&
      this.checkDigit.current
    ) {
      this.checkDigit.current.focus();
    }
    if (this.props.onIdentifierChange) {
      this.props.onIdentifierChange(event.currentTarget.value.toUpperCase());
    }
  }

  private handleCheckDigitChange(event: React.FormEvent<HTMLInputElement>) {
    if (this.props.onCheckDigitChange) {
      this.props.onCheckDigitChange(event.currentTarget.value.toUpperCase());
    }
  }
}

export default withTheme(HkidInput);
