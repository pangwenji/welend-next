import { cx } from "emotion";
import * as React from "react";
import CloseButton from "../../components/button/closeButton";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";
import OverlayStyle from "./OverlayStyle";

interface OwnProps {
  show: boolean;
  popupStyle?: any;
  centralise?: boolean;
  hideCloseButton?: boolean;
  onClose?(): void;
}

interface ThemeProps extends React.InputHTMLAttributes<HTMLInputElement>, InjectedThemeProps {}

interface State {
}

export interface DispatchProps {
  togglePopupOverlay?: (activePopupId: string) => void;
}

export type Props = DispatchProps & OwnProps & ThemeProps;

class Overlay extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};

    this.handleCloseBtnClick = this.handleCloseBtnClick.bind(this);
  }

  public render() {
    const { className, theme, children, popupStyle, centralise = false, hideCloseButton, ...props} = this.props;
    const style = OverlayStyle(theme, this.props);

    if (this.props.show) {
      return (
        <div className={popupStyle}>
          <div className={style.mainContainer}>
              <div className={style.contentArea}>
                {!hideCloseButton && <CloseButton onClick={this.handleCloseBtnClick}/>}
                <div className={cx(style.contentContainer, centralise ? style.centralise : null)} >{children}</div>
              </div>
          </div>
        </div>
      );
    }
    return null;
  }

  private handleCloseBtnClick(): void {
    this.props.onClose();
  }
}

export default withTheme(Overlay);
