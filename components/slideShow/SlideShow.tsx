import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";
import Slide from "./Slide";

interface State {
  index: number;
  left: string;
  totalWidth: number;
  slidesWidth: number[];
}

interface OwnProps extends React.HTMLProps<HTMLDivElement> {
  children?: any;
  navStyles?: React.CSSProperties;
  duration?: number;
  full?: boolean;
  enableControlButton?: boolean;
  controlButtonStyle?: React.CSSProperties;
}

type Props = OwnProps & InjectedThemeProps;

class SlideShow extends React.Component<Props, State> {

  private interval;
  private slides: Array<React.RefObject<HTMLDivElement>>;

  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0,
      left: "0",
      totalWidth: 0,
      slidesWidth: [],
    };
    this.slides = [];
    this.renderNav = this.renderNav.bind(this);
    this.renderSlides = this.renderSlides.bind(this);
    this.renderSlideControlButton = this.renderSlideControlButton.bind(this);
    this.move = this.move.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.moveTo = this.moveTo.bind(this);
  }

  public render(): any {
    const { className, children, enableControlButton } = this.props;
    if (!children || children.length === 0) { return null; }
    return (
      <div
        className={css`
          position: relative;
          height: 100%;
          padding-bottom: 50px;
        `}
      >
        <div
          className={cx(css`
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 5px;
        `, className)}
        >
          <div
            className={css`
            position: absolute;
            transition: left 0.3s;
            [data-slide] {
              position: relative;
              display: inline-block;
              float: left;
              ${this.props.full ? `width: ${100 / children.length}%` : ""}
            }
          `}
            style={{ left: `${this.state.left}`, width: `${this.props.full ? `${100 * children.length}%` : `${this.state.totalWidth}px`}` }}
          >
            {this.renderSlides()}
          </div>
        </div>
        {this.renderNav()}
        {enableControlButton && this.renderSlideControlButton()}
      </div>
    );
  }

  public componentDidMount() {
    this.start();
    const state = {
      slidesWidth: [],
      totalWidth: 0,
    };

    for (const slide of this.slides) {
      state.slidesWidth.push(slide.current.clientWidth);
      state.totalWidth += slide.current.clientWidth;
    }

    this.setState(state);
  }

  private start() {
    const duration = typeof this.props.duration !== "undefined" ? this.props.duration : 5000;
    if (duration > 0 && this.props.children && this.props.children.length > 0) {
      this.pause();
      this.interval = setInterval(() => {
        this.moveNext();
      }, duration);
    }
  }

  private pause() {
    clearInterval(this.interval);
  }

  private move(index?: number) {
    let left = 0;
    let position = "";
    if (this.props.full) {
      position = `-${index * 100}%`;
    } else {
      for (let i = 0; i < index; i++) {
        left += this.state.slidesWidth[i];
      }
      position = `-${left}px`;
    }
    this.setState({ left: position, index });
  }

  private moveNext() {
    let index = this.state.index + 1;
    if (index > this.props.children.length - 1) {
      index = 0;
    }
    this.move(index);
  }

  private movePrev() {
    let index = this.state.index - 1;
    if (index < 0) {
      index = this.props.children.length - 1;
    }
    this.move(index);
  }

  private moveTo(event: React.MouseEvent) {
    this.pause();
    this.move(Number(event.currentTarget.getAttribute("data-index")));
    this.start();
  }

  private renderSlides() {
    const slides = this.props.children.map((child, i) => {
      this.slides[i] = React.createRef();
      return (<div data-slide={true} key={i} ref={this.slides[i]} >{child}</div>);
    });
    return slides;
  }

  private renderNav() {
    const { navStyles, children } = this.props;
    const buttons = children.map((child, index) => {
      return (
        <div
          key={index}
          onClick={this.moveTo}
          data-index={index}
          className={css`
            width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 2rem;
            cursor: pointer;
            opacity: ${this.state.index === index ? 1 : 0.6};
            color: ${this.state.index === index ? "#F48024" : "#ccc"};
            display: inline-block;
          `}
        >
          •
        </div>
      );
    });
    return (
      <div
        className={css`
          position: relative;
          width: 100%;
          text-align: center;
        `}
        style={navStyles}
      >
        {buttons}
      </div>
    );
  }

  private renderSlideControlButton(): any {
    const { index } = this.state;
    const { theme, children, controlButtonStyle } = this.props;
    const buttonStyle = css`
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      z-index: 0;
      height: 66px;
      width: 32px;
      overflow: hidden;
      &:after {
        position: absolute;
        left: 0;
        content: ' ';
        height: 66px;
        width: 66px;
        top:50%;
        border-radius: 50%;
        background-color: #D8D8D8;
        opacity: .5;
      }
      &:before {
        position: absolute;
        content: ' ';
        height: 12px;
        width: 12px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        background-color: transparent;
        top: 50%;
        z-index: 1;
      }
    `;
    const prevStyle = css`
      left: 0;
      &:after {
        transform: translate(-50%, -50%);
      }
      &:before {
        transform: translateY(-50%) rotate(225deg);
        right: 8px;
      }
    `;
    const nextStyle = css`
      right: 0;
      &:after {
        transform: translate(0, -50%);
      }
      &:before {
        transform: translateY(-50%) rotate(45deg);
        left: 8px;
      }
    `;
    return (
      <div
        className={cx(css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      `, controlButtonStyle)}
      >
        {index > 0 ? <a href={"javascript:void(0);"} onClick={this.movePrev} className={cx(prevStyle, buttonStyle)} /> : null}
        {index < children.length - 1 ? <a href={"javascript:void(0);"} onClick={this.moveNext} className={cx(nextStyle, buttonStyle)} /> : null}
      </div>
    );
  }
}

export default withTheme(SlideShow);
