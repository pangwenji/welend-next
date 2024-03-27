import { css } from "emotion";
import * as React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as Redux from "redux";
import Webot from "../../containers/webot/Webot";
import { ImmutableRootState } from "../../reducers";
import { WebotActions } from "../../reducers/webotReducer";

interface StateProps {
  active: boolean;
  fullscreen: boolean;
  controlPanel: boolean;
}

interface OwnProps {
}

interface DispatchProps {
  toggleWebot: () => void;
  toggleWebotFullscreen: () => void;
  toggleWebotControlPanel: () => void;
}

type Props = StateProps & OwnProps & DispatchProps;
// empty page for chatbot web (load from GTM)
class WebotWeb extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount(): void {
    const { toggleWebot, toggleWebotFullscreen, toggleWebotControlPanel } = this.props;
    toggleWebot();
    toggleWebotFullscreen();
    toggleWebotControlPanel();
  }

  public render(): any {
    const { ...props } = this.props;
    return (
      <div className={css(`height: 100%`)}>
        <title>WeLend.hk</title>
        <Webot {...props}/>
      </div >
    );
  }
}

const mapStateToProps = (state: ImmutableRootState) => {
  const webot = state.get("webot");
  return {
    active: webot.get("active"),
    fullscreen: webot.get("fullscreen"),
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleWebot: () => {
    dispatch(WebotActions.toggleWebot());
  },
  toggleWebotFullscreen: () => {
    dispatch(WebotActions.toggleWebotFullscreen());
  },
  toggleWebotControlPanel: () => {
    dispatch(WebotActions.toggleWebotControlPanel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WebotWeb);
