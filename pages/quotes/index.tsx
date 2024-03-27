import "animate.css/animate.min.css";
import { css } from "emotion";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Masonry from "react-masonry-component";
import backgroundImage from "../../assets/images/static-page/banner-press-bkg@2x.jpg";
import backgroundImageMobile from "../../assets/images/static-page/mobile-banner-press-bkg.jpg";
import { HeroBanner } from "../../components";
import Layout from "../../containers/layout";
import { AppProps } from "../_app";

import am730Logo from "../../assets/images/static-page/quotes-icon/am730-aws.png";
import appledailyLogo from "../../assets/images/static-page/quotes-icon/appledaily-aws.jpg";
import bloombergLogo from "../../assets/images/static-page/quotes-icon/bloomberg_logo-aws.jpg";
import ftLogo from "../../assets/images/static-page/quotes-icon/financial-times-aws.png";
import forbesLogo from "../../assets/images/static-page/quotes-icon/forbes_logo-aws.png";
import hkcdLogo from "../../assets/images/static-page/quotes-icon/hkcd-aws.jpg";
import mingpaoLogo from "../../assets/images/static-page/quotes-icon/mingpao-aws.jpg";
import nphjLogo from "../../assets/images/static-page/quotes-icon/nphj-aws.jpg";
import nytLogo from "../../assets/images/static-page/quotes-icon/nyt-aws.jpg";
import onccLogo from "../../assets/images/static-page/quotes-icon/oncc_logo-aws1.png";
import scmpLogo from "../../assets/images/static-page/quotes-icon/SCMP_logo-aws.jpg";
import tvbLogo from "../../assets/images/static-page/quotes-icon/tvb_logo-aws.jpg";
import wallstreetLogo from "../../assets/images/static-page/quotes-icon/wallstreetjournal-aws.png";

interface State {
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class Quotes extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.renderQuote = this.renderQuote.bind(this);
  }

  public render(): any {
    const { t, theme } = this.props;
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:quotes")}
        metaPath="quotes"
        // metaDescription={t("common:meta-data:description:quotes")}
      >
        <HeroBanner
          backgroundImage={backgroundImage}
          backgroundImageMobile={backgroundImageMobile}
          heroImagePosition={151}
          title={t("common:about-us:title")}
          description={t("common:about-us:description")}
        />
        <div
          className={css`
            background: #F0F2F2;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              margin-top: -97px;
              padding-top: 97px;
            }
          `}
        >
          <h1 style={{display: "none"}}>{t("common:h1:text:quotes")}</h1>
          <div
            className={css`
              max-width: ${theme.Config.siteContainerWidth}px;
              margin: auto;
              padding: 60px 15px;
              @media (min-width: ${theme.Config.mobileWidth}px) {
                padding: 60px 0;
              }
            `}
          >
            <Masonry options={{ gutter: 30, transitionDuration: 500 }}>
              {this.renderQuote(tvbLogo, "他們會透過互聯網大數據去審核貸款申請，因為沒有分行，亦沒有推銷員，可以減低借貸的利率", "TVB . 21-02-2016")}
              {this.renderQuote(scmpLogo, "WeLab now boasts 2.5 million customers in Hong Kong and the mainland, a loan volume of 9 billion yuan (HK$10.7 billion) and last month announced it had raised US$160 million in its latest funding round.", "SCMP . 18-02-2016")}
              {this.renderQuote(forbesLogo, "The new $160 million financing at a near-unicorn valuation for Hong Kong-based fintech innovation WeLab sets a new benchmark for the city’s bustling startup scene.", "Forbes . 23-01-2016")}
              {this.renderQuote(onccLogo, "網貸平台 WeLab 宣布，該公司獲得12億元B輪融資，用作優化全網上貸款的自動批核及放款流程", "東網 . 22-01-2016")}
              {this.renderQuote(appledailyLogo, "本港互聯網貸款公司 WeLab 完成12億港元的第二輪（B輪）融資，由馬來西亞國家主權基金國庫控股、荷蘭國際集團（ING）、南豐集團及省屬國企「粵科金融投資」入股", "蘋果日報 . 21-01-2016")}
              {this.renderQuote(bloombergLogo, "ING Bank, Malaysia’s Khazanah Nasional Bhd. and Chinese state fund Guangdong Technology Financial Group participated in WeLab’s latest round of financing, which raised $160 million", "Bloomberg . 20-01-2016")}
              {this.renderQuote(ftLogo, "The target market is small to midsized borrowers, who have traditionally had few sources from which to obtain funds conveniently and affordably in Hong Kong", "Financial Times . 14-04-2015")}
              {this.renderQuote(hkcdLogo, "Welab卻反其道而行，透過大幅縮減還款期，既方便應急的借貸人，亦可減省他們的利息支出。", "香港商報 . 03-12-2014")}
              {this.renderQuote(forbesLogo, "WeLab leverages big data and web technology to shorten the time it takes to get a loan to only 24 hours for qualified customers.", "Forbes . 26-11-2014")}
              {this.renderQuote(mingpaoLogo, "…所有都在網上做妥，因此成本較低，息率也可以調低", "明報 . 05-11-2014")}
              {this.renderQuote(am730Logo, "一向以客為先的Welend.hk打破舊有慣例，向申請私人貸款的客戶，送上0%息稅貸*，真心幫助客戶解決稅務問題", "AM730 . 21-10-2014")}
              {this.renderQuote(appledailyLogo, "…這類的創意，不但為香港過於單一化的經濟注入清新空氣，推動創新經濟，以及帶來的正面界外效應", "蘋果日報 . 30-09-2014")}
              {this.renderQuote(wallstreetLogo, "We are very excited about WeLab’s cutting-edge risk and fraud control technology, which has the ability to leverage big data, a massive untapped opportunity in the region,” said Ken Yeung, chief executive of TOM Group", "Wall Street Journal . 17-06-2014")}
              {this.renderQuote(nytLogo, "WeLab Holdings, an Internet finance start-up in Hong Kong, said on Monday that it had raised $14 million from Li Ka-shing, Asia’s richest man, and Sequoia Capital, a stalwart of Silicon Valley.", "The New York Times . 16-06-2014")}
              {this.renderQuote(nphjLogo, "優點在於客戶可隨時全數清還，亦無隱藏費用及支出… WeLend.hk 仍能以「較低息借貸」脫穎而出", "東方日報 . 30-01-2014")}
              {this.renderQuote(mingpaoLogo, "WeLab 與「財仔」(財務公司)的最大分別是，會對客戶的信貸紀錄、月入及工作穩定性方面有嚴格要求，風險管理準則靠近銀行的模式。", "明報 . 04-11-2013")}
              {this.renderQuote(appledailyLogo, "WeLend 貸款息率，貼近市場低息下限區定位，以貸款額10萬元、同一風險類別計，年息率為 3 至 25 厘，銀行普遍為 7 至 35 厘，財務公司則達 10 至 48 厘。", "蘋果日報 . 29-07-2013")}
            </Masonry>

          </div>
        </div>
      </Layout>
    );
  }

  private renderQuote(logo: string, content: string, date: string) {
    const { theme } = this.props;
    return (
      <ScrollAnimation animateIn="slideInUp" duration={0.5} animateOnce={true}>
        <div
          className={css`
          width: 96%;
          padding: 30px;
          box-shadow: rgba(0,0,0,.1) 0px 2px 8px;
          margin: 15px auto;
          border-radius: 4px;
          background: #fff;
          img {
            display: inline-block;
            height: 80px;
            margin: auto;
          }
          @media (min-width: ${theme.Config.mobileWidth}px) {
            width: 280px;
            padding: 20px;
          }
        `}
        >

          <div className="text-center" ><img src={logo} /></div>
          <div className="margin-top" >{content}</div>
          <div className="margin-top text-size-small" >{date}</div>
        </div>
      </ScrollAnimation>
    );
  }
}

export default Quotes;
