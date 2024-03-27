import RcSlider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";
import * as React from "react";

interface State {
}

interface Props extends SliderProps {
  trackColor?: string;
  handleColor?: string;
}

class Slider extends React.Component<Props, State> {
  public render(): any {
    const { trackColor, handleColor } = this.props;
    return (
      <RcSlider
        handleStyle={{
          display: "inline-block",
          width: "30px",
          height: "30px",
          border: "0",
          borderRadius: "20px",
          backgroundColor: handleColor ? handleColor : "#F48024",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.4)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
          cursor: "move",
          transition: "border 0.3s",
        }}
        railStyle={{
          backgroundColor: "#e9e9e9",
          borderRadius: "4px",
          height: "8px",
          top: "12px",
        }}
        trackStyle={{
          background: trackColor ? trackColor : "linear-gradient(90deg, #F8C839 0%, #F48024 96.09%)",
          borderRadius: "4px",
          height: "8px",
          top: "12px",
        }}
        {...this.props}
      />
    );
  }
}

export default Slider;
