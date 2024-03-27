import { cx } from "emotion";
import * as moment from "moment";
import * as React from "react";
import * as caringlogo from "../../assets/images/caring_logo.png";
import AppConfig from "../../lib/AppConfig";
import { AppProps } from "../../pages/_app";
import { Link } from "../../routes";
import footerStyle from "./FooterStyle";

interface State { }

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class Footer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getLink = this.getLink.bind(this);
  }

  public render(): any {
    const { t, theme } = this.props;
    const locale = this.props.locale === "en" ? "en" : null; // default tc
    const style = footerStyle(theme);
    return (
      <React.Fragment>
        <div className={style.mainContainer}>
          <div className={style.content}>
            <div className={style.menuItems}>
              <ul>
                <li className="title">{t("common:layout:products")}</li>
                <li><Link route="products/personal-loan" params={{locale}}><a className="item" data-cta-name="personal-loan">{t("common:layout:personal-loan")}</a></Link></li>
                <li><Link route="products/balance-transfer" params={{locale}}><a className="item" data-cta-name="balance-transfer">{t("common:layout:balance-transfer")}</a></Link></li>
                <li><Link route="products/no-doc-loan" params={{locale}}><a className="item" data-cta-name="no-doc-loan">{t("common:layout:no-doc-loan")}</a></Link></li>
                <li><Link route="products/property-owner-loan" params={{locale}}><a className="item" data-cta-name="property-owner-loan">{t("common:layout:property-owner-loan")}</a></Link></li>
                {locale === "en" ?
                <li><a href="https://subscribe-plus-for-apple-products.welend.hk" className="item" data-cta-name="apple-subscribe-plus">{t("common:layout:apple-subscribe-plus")}</a></li>
                :
                <li><a href="https://subscribe-plus-for-apple-products.welend.hk/tc" className="item" data-cta-name="apple-subscribe-plus">{t("common:layout:apple-subscribe-plus")}</a></li>
                }
              </ul>
              <ul>
                <li className="title">{t("common:layout:company-information")}</li>
                <li><Link route="about-us" params={{locale}}><a className="item" data-cta-name="about-us">{t("common:layout:about-us")}</a></Link></li>
                <li><Link route="quotes" params={{locale}}><a className="item" data-cta-name="quotes">{t("common:layout:quotes")}</a></Link></li>
                <li><a href={`https://www.welab.co/${(locale === "en") ? "en" : "zh-cn"}/careers`} className="item" data-cta-name="careers">{t("common:layout:careers")}</a></li>
                <li><Link route="contact-us" params={{locale}}><a className="item" data-cta-name="contact-us">{t("common:layout:contact-us")}</a></Link></li>
              </ul>
              <ul>
                <li className="title">{t("common:layout:loan-information")}</li>
                <li><Link route="card-debt-tips" params={{locale}}><a className="item" >{t("common:layout:card-debt-tips")}</a></Link></li>
                <li><Link route="payment-methods" params={{locale}}><a className="item" >{t("common:layout:payment-methods")}</a></Link></li>
                <li><Link route="faqs" params={{locale}}><a className="item" >{t("common:layout:faqs")}</a></Link></li>
              </ul>
              <ul>
                <li className="title">{t("common:layout:legal")}</li>
                <li><Link route="important-notice" params={{locale}}><a className="item" data-cta-name="important-notice">{t("common:layout:important-notice")}</a></Link></li>
                <li><Link route="money-lenders-ordinance" params={{locale}}><a className="item" data-cta-name="money-lenders-ordinance">{t("common:layout:money-lenders-ordinance")}</a></Link></li>
                <li><Link route="privacy-policy" params={{locale}}><a className="item" style={{display: "inline-block", lineHeight: "120%"}} data-cta-name="privacy-policy">{t("common:layout:privacy-policy")}</a></Link></li>
              </ul>
            </div>
            <div className={cx(style.contactContainer, "text-size-small margin-top-large")}>
              <div className="text-size-normal">WELEND LIMITED</div>
              <div className="margin-top">{t("common:layout:license", {moneyLenderLicense: AppConfig.moneyLenderLicense, interpolation: { escapeValue: false }})}</div>
              <div dangerouslySetInnerHTML={{__html: t("common:layout:contact-email", {customerServiceEmail: AppConfig.customerServiceEmail})}} />
              <div className="margin-top">{t("common:layout:address")}</div>
              <div className="margin-top">{t("common:layout:copyright", {year: moment().format("YYYY")})}</div>
            </div>
          </div>
          <div className={cx(style.statementContainer, "text-center margin-top")}>
            <div className="text-size-double">{t("common:layout:warning")}</div>
            <div>{t("common:layout:customer-service", {customerServiceHotline: AppConfig.customerServiceHotline})}</div>
            <div>{t("common:layout:opening-hours")}</div>
          </div>
        </div>
        <div className={cx(style.caringLogoContainer, "padding-top-xl padding-bottom-xl")}>
          <div className={cx(style.caringLogoContent)}>
            <img className={style.caringLogoImage} src={caringlogo} />
          </div>
        </div>
      </React.Fragment>
    );
  }

  private getLink(path: string): string {
    return this.props.locale === "en" ? `/en${path}` : path;
  }
}

export default Footer;
