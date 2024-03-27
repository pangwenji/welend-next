import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import Input from "../input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, InjectedThemeProps {}

interface State {
  focused: boolean;
}

const CURRENCY_SYMBOL = "HK$";

class MoneyInput extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      focused: false,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.currencyFormat = this.currencyFormat.bind(this);
  }

  public render() {
    const { value, onBlur, onFocus, ...props} = this.props;
    const computedValue = this.state.focused ? value : this.currencyFormat(value);
    return (
      <Input
        type="tel"
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        value={computedValue}
        {...props}
      />
    );
  }

  private currencyFormat(value?: string | number | string[]) {
    let currencyValue = "";

    if (value && ((typeof value === "string" && /^\d+$/.test(value)) || typeof value === "number")) {
      currencyValue = `${CURRENCY_SYMBOL} ${parseInt(value.toString(), 10).toLocaleString()}`;
    }

    return currencyValue;
  }

  private handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({ focused: false });
    if (typeof this.props.onBlur === "function") {
      this.props.onBlur(event);
    }
  }

  private handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({ focused: true });
    if (typeof this.props.onFocus === "function") {
      this.props.onFocus(event);
    }
  }
}

export default withTheme(MoneyInput);
