import "animate.css/animate.min.css";
import "rc-slider/assets/index.css";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";
import featureBlockStyle from "./FeatureBlockStyle";

interface State {
}

export interface Props extends InjectedThemeProps {
  icon: any;
  title: string;
  description: string;
}

class FeatureBlock extends React.Component<Props, State> {
  public render(): any {
    const { theme, icon, title, description } = this.props;
    const style = featureBlockStyle(theme);
    return (
      <div className={style.mainContainer} >
        <ScrollAnimation animateIn="zoomIn" duration={0.3} animateOnce={true} ><div className={style.icon} ><img src={icon} /></div></ScrollAnimation>
        <div className={style.title} dangerouslySetInnerHTML={{__html: title}} />
        <div className={style.description} dangerouslySetInnerHTML={{__html: description}} />
      </div>
    );
  }
}

export default withTheme(FeatureBlock);
