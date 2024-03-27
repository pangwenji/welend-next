import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  open: boolean;
}

class Modal extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.setPageLock = this.setPageLock.bind(this);
  }

  public componentDidMount() {
    if (this.props.open) {
      this.setPageLock(true);
    }
  }

  public componentWillUnmount() {
    this.setPageLock(false);
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.open) {
      this.setPageLock(true);
    } else if (this.props.open && !nextProps.open) {
      this.setPageLock(false);
    }
  }

  public render() {
    const { className, open, theme, ...props } = this.props;
    const { ModalTheme } = theme;

    return (
      <div
        className={cx(css`
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: ${open ? "block" : "none"};
          background: ${ModalTheme.background};
          z-index: 9999;
        `, className)}
        {...props}
      />
    );
  }

  private setPageLock(lock: boolean) {
    const html = document.getElementsByTagName("html");
    const body = document.getElementsByTagName("body");
    if (lock) {
      html[0].setAttribute("style", "overflow: hidden");
      body[0].setAttribute("style", "overflow-y: scroll");
    } else {
      html[0].setAttribute("style", "overflow-y: scroll");
      body[0].setAttribute("style", "overflow: hidden");
    }

  }
}

export default withTheme(Modal);
