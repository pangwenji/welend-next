import "animate.css/animate.min.css";
import { css, cx } from "emotion";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Column, Container, Row } from "../../components";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";
import CampaignBanner from "../campaignBanner/CampaignBanner";
import HeroBannerStyle from "./HeroBannerStyle";
interface State {
}

interface OwnProps extends React.HTMLProps<HTMLDivElement> {
  backgroundImage: any;
  backgroundImageMobile: any;
  heroImage?: any;
  altText?: string;
  heroImageMobile?: any;
  heroImagePosition?: number | string;
  heroImagePositionMobile?: string;
  title: string;
  mobileTitle?: string;
  subTitle?: string[] | string;
  description: string;
  lowerTitle?: string;
  lowerDescription?: string;
  textColor?: string;
}

export type Props = OwnProps & InjectedThemeProps;

class HeroBanner extends React.Component<Props, State> {
  public render(): any {
    const { theme, title, mobileTitle, subTitle, description, lowerTitle, lowerDescription, className, textColor, altText } = this.props;
    const subTitleArr = Array.isArray(subTitle) ? subTitle : [subTitle];
    const style = HeroBannerStyle(theme, this.props);
    const styleTextColor = textColor ? css`
      @media (min-width: ${theme.Config.tabletWidth}px) {
        color: ${textColor};
        &:before { background-color: ${textColor};};
        &:after { background-color: ${textColor};};
      }
      ` : ``;
    const textBlockStyle = this.props.heroImage ? css`
      @media (min-width: ${theme.Config.tabletWidth}px) {
        margin-bottom: 10px;
      }
    ` : css`
      @media (min-width: ${theme.Config.tabletWidth}px) {
        float: none;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
      }
    `;
    return (
      <div className={cx(className, style.mainContainer)}>
        <div className={style.contentContainer}>
          <span role={"img"} aria-label={altText} />
          <Container noGutter={true} className={style.contentWrapper} >
            <Row>
              <Column md={12} xs={24} className={cx(textBlockStyle)} >
                <div className={style.animationWrapper}>
                  <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true} >
                    <div className={cx(style.content, styleTextColor)} >
                      <div className={cx(style.title, styleTextColor)}>{title}</div>
                      <div className={cx(style.dot, styleTextColor)}>•</div>
                      <div className={style.hideDesktop}>
                        {mobileTitle && <div className={style.subTitle}>{mobileTitle}</div>}
                        <div className={mobileTitle ? style.description : style.subTitle}>{subTitleArr.join(" ")}</div>
                        <div className={(style.description)} dangerouslySetInnerHTML={{__html: description}}/>
                        {(lowerTitle || lowerDescription) && <>
                          <div className={cx(style.lowerDot, styleTextColor)}>--------------•--------------</div>
                          <div className={cx(style.lowerTitle, styleTextColor)}>{lowerTitle}</div>
                          <div className={cx(style.description)} dangerouslySetInnerHTML={{__html: lowerDescription}}/>
                        </>}
                      </div>
                      <div className={style.hideMobile}>
                        {
                          subTitleArr.map((t, idx) =>
                            <div key={idx} className={cx(style.subTitle)}>{t}</div>)
                        }
                        <div className={cx(style.description)} dangerouslySetInnerHTML={{__html: description}}/>
                        {(lowerTitle || lowerDescription) && <>
                          <div className={cx(style.dot, styleTextColor)}>•</div>
                          <div className={cx(style.lowerTitle, styleTextColor)}>{lowerTitle}</div>
                          <div className={cx(style.description)} dangerouslySetInnerHTML={{__html: lowerDescription}}/>
                        </>}
                      </div>
                    </div>
                  </ScrollAnimation>
                  <div className={cx(style.contentBottom)} />
                </div>
              </Column>
              <Column xs={12} className="hidden-small" >{/** empty */}</Column>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default withTheme(HeroBanner);
