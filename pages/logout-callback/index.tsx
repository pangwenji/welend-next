import * as React from "react";
import { connect } from "react-redux";
import { ImmutableRootState } from "../../reducers";
import { Router } from "../../routes";
import { setCookie } from "../../services/utils";

interface State {
}

interface StateProps {
  locale: string;
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps;

// Empty page handle logout redirect
class LogoutCallback extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.logoutSingleSignOn = this.logoutSingleSignOn.bind(this);
    this.dispatchLogoutEvent = this.dispatchLogoutEvent.bind(this);
  }

  public componentDidMount() {
    this.dispatchLogoutEvent();
  }

  public render(): any {
    return null;
  }

  private dispatchLogoutEvent() {
    const { locale } = this.props;
    this.logoutSingleSignOn();
    Router.push(`/${locale}`);
  }

  private logoutSingleSignOn() {
    const cookies = ["user_token"];
    this.clearCookies(cookies);
  }

  private clearCookies(cookies: string[]) {
    cookies.map((cookie) => {
      setCookie(cookie, "");
    });
  }
}

const mapStateToProps = (state: ImmutableRootState): StateProps => {
  return {
    locale: state.getIn(["application", "locale"]),
  };
};

export default connect(mapStateToProps, null)(LogoutCallback);
