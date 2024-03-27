import { cx } from "emotion";
import * as React from "react";
import Lottie from "react-lottie";
import ButtonApplyAnimation from "../../assets/animations/btn-apply.json";
import { CalculatorWithNumPadIcon } from "../../components"; // TODO: update button or pass from props
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";
import bottomToggleButtonStyle from "./ButtomToggleButtonStyle";

interface State {
  show: boolean;
}

interface OwnProps {
  content: React.ReactElement<HTMLDivElement>;
  buttonText: string;
  defaultShow?: boolean;
}

type Props = OwnProps & InjectedThemeProps & React.HTMLAttributes<HTMLDivElement>;

class BottomToggleButton extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      show: true,
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  public componentDidMount() {
    if (this.props.defaultShow) {
      setTimeout(() => {
        this.toggleButton();
      }, 1500);
    }
  }

  public render(): any {
    const { theme, content, buttonText, defaultShow, ...props } = this.props;
    const style = bottomToggleButtonStyle(theme);
    return (
      <React.Fragment>
        <div onClick={this.toggleButton} className={cx(style.openButton, this.state.show ? "active" : "")}><CalculatorWithNumPadIcon color="#fff" /></div>
        <div className={cx(style.mainContainer, this.state.show ? "active" : "")} >
          {this.renderCloseButton()}
          <div className={cx(style.content, this.state.show ? "active" : "")}>{content}</div>
          <div className={cx(style.buttonApply)} {...props}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: ButtonApplyAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }
              }
              height={54}
              width={"auto"}
            />
            <span className={cx(style.buttonApplyText)}>{buttonText}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  private renderCloseButton() {
    const { theme } = this.props;
    const style = bottomToggleButtonStyle(theme);
    if (!this.state.show) {
      return (<div className={style.closeButton} ><span onClick={this.toggleButton} >{}</span></div>);
    }
    return null;
  }

  private toggleButton() {
    this.setState({
      show: this.state.show ? false : true,
    });
  }
}

export default withTheme(BottomToggleButton);
