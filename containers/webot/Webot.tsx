
import { css, cx } from "emotion";
import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import * as IconWejai from "../../assets/images/icon-wejai.png";
import { CloseIcon, MinusIcon, PlusIcon } from "../../components";
import { pages } from "../../lib/AppConfig";
import { AppProps } from "../../pages/_app";
import { ImmutableRootState } from "../../reducers";
import { WebotActions } from "../../reducers/webotReducer";
import Colors from "../../theme/welend/Colors";
import WebChat from "./WebChat";

interface State {
}

interface OwnProps {
  lowerWeBot?: boolean;
}

interface StateProps {
  active: boolean;
  fullscreen: boolean;
  controlPanel: boolean;
}

interface DispatchProps {
  toggleWebot: () => void;
  toggleWebotFullscreen: () => void;
}

type Props = OwnProps & DispatchProps & StateProps & AppProps;

class Webot extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleToggleWebot = this.handleToggleWebot.bind(this);
    this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
    this.renderToggleFullscreenBtn = this.renderToggleFullscreenBtn.bind(this);
    this.renderToggleControlPanel = this.renderToggleControlPanel.bind(this);
  }

  public render(): any {
    const { theme, router, lowerWeBot } = this.props;
    if (this.props.active) {
      const containerHeight = this.props.fullscreen ? "100%" : "auto";
      const webchatHeight = this.props.fullscreen ? "calc(100% - 75px)" : "510px";
      const webchatWidth = this.props.fullscreen ? "100%" : "400px";
      const bottom = this.props.fullscreen ? "0" : "30px";
      const right = this.props.fullscreen ? "0" : "30px";
      return (
        <div
          className={
            css(`
              box-shadow: 0 2px 7px #999;
              border-radius: 5px;
              overflow: hidden;
              position: fixed;
              z-index: 999;
              bottom: ${bottom};
              right: ${right};
              width: ${webchatWidth};
              height: ${containerHeight};
              background-color: #bfd6e6;
              @media (max-width: ${theme.Config.mobileWidth}px) {
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
              }
            `)
          }
        >
          <div
            className={
              cx(css(`
                padding: 15px;
                background: ${Colors.primary};
              `), "clearfix")
            }
          >
            <div className="float-left text-color-white">
              <div className="inline-block vertical-align-middle">
                <img
                  className={cx(css`
                    width: 40px;
                    height: 40px;
                  `, "margin-right")}
                  src={IconWejai}
                />
              </div>
              <div className="inline-block vertical-align-middle">
                <div>Webot</div>
                <div
                  className={cx(css`
                    &:after {
                      content: "• ";
                      font-size: 28px;
                      position: absolute;
                      line-height: 0.8rem;
                      margin-left: 6px;
                      color: #06cd96;
                    }
                  `, "text-size-small")}
                >
                  Online
                </div>
              </div>
            </div>
            <div
              className={cx(css`
                line-height: 45px;
              `, "float-right")}
            >
              {this.renderToggleControlPanel()}
            </div>
          </div>
          <div
            className={css`
              width: ${webchatWidth};
              height: ${webchatHeight};
              @media (max-width: ${theme.Config.mobileWidth}px) {
                width: 100%;
                height: calc(100% - 75px);
              }
            `}
          >
            <WebChat />
          </div>
        </div>
      );
    } else {
      return (
        <img
          className={cx(`wp-container`, css`
            box-shadow: 0 2px 7px #999;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            position: fixed;
            z-index: ${lowerWeBot ? 0 : 4};
            right: 30px;
            bottom: 30px;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              bottom: 75px;
            }
          `)}
          src={IconWejai}
          onClick={this.handleToggleWebot}
        />

      );
    }
  }

  private handleToggleWebot() {
    this.props.toggleWebot();
  }

  private handleToggleFullscreen() {
    this.props.toggleWebotFullscreen();
  }

  private renderToggleFullscreenBtn() {
    if (this.props.fullscreen) {
      return (
        <MinusIcon color={Colors.white} className="text-size-large hidden-small" onClick={this.handleToggleFullscreen} />
      );
    } else {
      return (
        <PlusIcon color={Colors.white} className="text-size-large hidden-small" onClick={this.handleToggleFullscreen} />
      );
    }
  }

  private renderToggleControlPanel() {
    const { controlPanel } = this.props;
    if (controlPanel) {
      return (
        <React.Fragment>
          {this.renderToggleFullscreenBtn()}
          <CloseIcon color={Colors.white} className="margin-left text-size-large" onClick={this.handleToggleWebot} />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state: ImmutableRootState) => {
  const webot = state.get("webot");
  return {
    active: webot.get("active"),
    fullscreen: webot.get("fullscreen"),
    controlPanel: webot.get("controlPanel"),
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleWebot: () => {
    dispatch(WebotActions.toggleWebot());
  },
  toggleWebotFullscreen: () => {
    dispatch(WebotActions.toggleWebotFullscreen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Webot);
