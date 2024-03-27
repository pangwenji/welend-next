import * as React from "react";
import Layout from "../../containers/layout";
import { AppProps } from "../_app";

interface State {
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class HowItWork extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render(): any {
    return (
      <Layout {...this.props}>
        How it work
      </Layout>
    );
  }
}

export default HowItWork;
