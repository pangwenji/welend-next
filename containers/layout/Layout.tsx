import { css } from "emotion";
import Head from "next/head";
import * as React from "react";
import ThreeMoneyLogo from "../../assets/images/3money_logo@2x.png";
import config from "../../config";
import AppConfig from "../../lib/AppConfig";
import { AppProps } from "../../pages/_app";
import Footer from "../footer";
import FraudAlert from "../fraudAlert";
import Header from "../header";
import LoginModal from "../loginModal";
import Notification from "../notification";
import TrackerModal from "../trackerModal";
import Webot from "../webot";

export interface Props extends AppProps {
  lowerWeBot?: boolean;
  hideWelabBot?: boolean;
}

const googleStructureDataMarkupConfig = (address: string) => {
  return (
    <script
      id="google-structure-data-markup-js-config"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "name": "WeLend.hk",
          "image": `${AppConfig.siteUrl}/assets/images/logo-welend.png`,
          "telephone": AppConfig.customerServiceHotline,
          "email": AppConfig.customerServiceEmail,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": address,
            "addressLocality": "Hong Kong",
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": {
              "@type": "DayOfWeek",
              "name": "Monday to Friday",
            },
            "opens": "9:00",
            "closes": "20:00",
          },
        }),
      }}
    />
  );
};

class Layout extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.isEmbededChecking = this.isEmbededChecking.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderFraudAlert = this.renderFraudAlert.bind(this);
    this.renderAppLogo = this.renderAppLogo.bind(this);
  }
  public render() {
    // tslint:disable-next-line:variable-name
    let description: string;
    const { children, metaTitle, metaDescription, metaPath, hideWelabBot, ...props } = this.props;
    const sp = this.props.router.pathname.split("/");
    const p = sp[sp.length - 1];
    const path = `common:meta-data:description:${p}`;
    // tslint:disable-next-line:prefer-conditional-expression
    if (this.props.t(path) === "") {
      // tslint:disable-next-line:no-console
      description = metaDescription ? metaDescription : this.props.t("common:meta-data:description:default");
    } else {
      description = metaDescription ? metaDescription : this.props.t(`common:meta-data:description:${p}`);
    }
    const title = metaTitle ? metaTitle : this.props.t("common:meta-data:title:default");
    const url = `${AppConfig.siteUrl}${metaPath ? `/${metaPath}` : ""}`;
    const image = `${AppConfig.siteUrl}/assets/images/fb_200x200_wejai.png`;
    const isEmded = this.isEmbededChecking();
    return (
      <div
        className={css`
          ${props.locale === "en" ? "" : "letter-spacing: 1px"}`
        }
      >
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="og_title" />
          <meta name="twitter:title" content={title} key="twitter_title" />
          <meta property="fb:app_id" content={config.fbAppId} />
          {description ? (<meta name="description" content={description} key="description" />) : null}
          {url ? (<link rel="canonical" href={url} key="canonical" />) : null}
          <meta property="og:type" content="article" key="og_type" />
          {description ? (<meta property="og:description" content={description} key="og_description" />) : null}
          {image ? (<meta property="og:image" content={image} key="og_image" />) : null}
          {url ? (<meta property="og:url" content={url} key="og_url" />) : null}
          <meta property="og:site_name" content="WeLend" key="og_site_name" />
          <meta property="twitter:card" content="summary" key="og_summary" />
          {description ? (<meta name="twitter:description" content={description} key="twitter_description" />) : null}
          {image ? (<meta name="twitter:image" content={image} key="twitter_image" />) : null}
          {googleStructureDataMarkupConfig(this.props.t("common:layout:address"))}
        </Head>
        {this.renderHeader(!isEmded)}
        {this.renderFraudAlert(!isEmded)}
        {this.renderAppLogo(isEmded)}
        {this.props.children}
        {this.renderFooter(!isEmded)}
        <LoginModal {...props} />
        <TrackerModal {...props} />
        <Notification {...props} />
        {!hideWelabBot && <Webot {...props} />}
      </div>
    );
  }

  private isEmbededChecking(): any {
    const conditions = {
      app_embed: ["apps"],
    };
    if (this.props.router) {
      const showHeaderFooter = Object.keys(conditions).map((condition, id) => {
        return conditions[condition].some((value) => value === this.props.router.query[condition]);
      }).some((result) => result === false);
      if (!showHeaderFooter) {
        return true;
      }
    }
    return false;
  }

  private renderHeader(condition: boolean): any {
    return condition ? <Header {...this.props} /> : null;
  }

  private renderFooter(condition: boolean): any {
    return condition ? <Footer {...this.props} /> : null;
  }

  private renderFraudAlert(condition: boolean): any {
    return condition ? <FraudAlert {...this.props} /> : null;
  }

  private renderAppLogo(condition: boolean): any {
    const routes = [
      "important-notice",
      "faqs",
      "privacy-policy",
      "payment-methods",
      "money-lenders-ordinance",
      "terms-and-conditions",
      "contact-us",
      "about-us",
      "customer-declaration",
    ];
    const logo = {
      "3money-app": ThreeMoneyLogo,
    };
    if (condition && this.props.router) {
      const query = this.props.router.query.t;
      if (query && routes.some((page) => this.props.router.pathname === `/${page}`)) {
        return (
          <div className={css`text-align: center; margin: 20px 0;`}>
            <img className={css`width:85%; max-width:300px`} src={logo[query]} />
          </div>
        );
      }
    }
  }
}

export default Layout;
