import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, InjectedThemeProps {
  pinLength: number;
}

interface State {
  focused: boolean;
}

class PinInput extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      focused: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  public render() {
    const { className, theme, pinLength, value, onFocus, onBlur, maxLength, type, ...props} = this.props;
    const { PinInputTheme } = theme;
    const pins = [];

    for (let i = 0; i < pinLength; i++) {
      const content = typeof value === "string" && value[i] ? (
        <span
          className={css`
            position: absolute;
            display: inline-block;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: ${PinInputTheme.selectedColor};
          `}
        >
          {value[i]}
        </span>
      ) : (
        <span
          className={css`
            display: inline-block;
            width: 40px;
            height: 54px;
            margin-left: auto;
            margin-right: auto;
            border-width: 1px;
            border-style: solid;
            border-color: ${ typeof value === "string" &&
              (value[i - 1] || !value[0] && i === 0) &&
              this.state.focused ?
              PinInputTheme.selectedColor : PinInputTheme.unselectedColor
            };
            border-radius: 3px;
          `}
        />
      );

      pins.push(
        <span
          className={css`
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: ${100 / pinLength}%;
            height: 54px;
            text-align: center;
          `}
        >
          {content}
        </span>,
      );
    }

    return (
      <div
        className={css`
          position: relative;
        `}
      >
        {pins}
        <input
          type="tel"
          className={cx(css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            appearance: none;
          `, className)}
          value={value}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          maxLength={pinLength}
          {...props}
        />
      </div>
    );
  }

  private handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({ focused: !this.state.focused });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  private handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({ focused: !this.state.focused });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }
}

export default withTheme(PinInput);
