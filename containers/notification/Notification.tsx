import { TranslationFunction } from "i18next";
import * as React from "react";
import { connect } from "react-redux";
import { toast, ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Redux from "redux";
import { ImmutableRootState } from "../../reducers";
import {NotificationActions, NotificationType } from "../../reducers/notificationReducer";

interface OwnProps {
  t: TranslationFunction;
}

interface StateProps {
  notificationType: NotificationType;
  message: string;
}

interface DispatchProps {
  resetNotification: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class Notification extends React.PureComponent<Props> {
  public componentWillReceiveProps(nextProps: Props) {
    if (this.props.notificationType !== nextProps.notificationType && nextProps.message && this.props.message !== nextProps.message) {
      toast(this.props.t(nextProps.message), {
        type: nextProps.notificationType,
        onClose: () => {
          this.props.resetNotification();
        },
      });
    }
  }

  public render() {
    return (
      <div>
        <ToastContainer position={"top-center"} hideProgressBar={true} closeOnClick={true} />
      </div>
    );
  }
}

const mapStateToProps = (state: ImmutableRootState) => {
  const notification = state.get("notification");

  return {
    notificationType: notification.get("notificationType"),
    message: notification.get("message"),
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  resetNotification: () => {
    dispatch(NotificationActions.resetNotification());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
