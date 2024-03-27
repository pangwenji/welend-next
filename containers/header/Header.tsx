import { cx } from "emotion";
import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import * as logo from "../../assets/images/logo-welend.png";
import { PrimaryButton } from "../../components";
import { AppProps } from "../../pages/_app";
import { ImmutableRootState } from "../../reducers";
import { AuthActions } from "../../reducers/authReducer";
import { LoginModalActions } from "../../reducers/loginModalReducer";
import { TrackerActions } from "../../reducers/trackerReducer";
import { Link } from "../../routes";
import { isAuthenticatedFromAuthStore } from "../../services/redux";
import { getCurrentPageFromUrl } from "../../services/utils";
import headerStyle from "./HeaderStyle";

interface State {
  menuActive: boolean;
  switchedLanguageUrl: string;
}

interface StateProps {
  authenticated: boolean;
}

interface OwnProps {
}

export interface DispatchProps {
  toggleLoginModal: () => void;
  toggleTracker: () => void;
  logout: () => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menuActive: false,
      switchedLanguageUrl: "",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderLanguageButton = this.renderLanguageButton.bind(this);
    this.shouldRenderLanguageButton = this.shouldRenderLanguageButton.bind(this);
    this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
    this.renderLogingButton = this.renderLogingButton.bind(this);
    this.handleLoginLogoutButtonOnClick = this.handleLoginLogoutButtonOnClick.bind(this);
  }

  public componentDidMount(): any {
    const { locale } = this.props;
    const params = getCurrentPageFromUrl();
    const currentPageFromUrl = params && params.currentPage ? params.currentPage : "";
    const switchedLanguage = locale === "en" ? "tc" : "en";
    this.setState({switchedLanguageUrl: `/${switchedLanguage}${currentPageFromUrl}`});
  }

  public render(): any {
    const { t, theme } = this.props;
    const locale = this.props.locale === "en" ? "en" : null; // default tc
    const style = headerStyle(theme);
    return (
      <React.Fragment>
        <div className={style.placeholder}>{/*placeholder*/}</div>
        <div className={cx(style.base, this.state.menuActive ? "active" : "")}>
          <div className={style.mobile.container}>
            <div className={cx(style.mobile.content, this.state.menuActive ? "active" : "")}>
              <Link route="home" params={{locale}}><a data-cta-name="home" ><img src={logo} className={style.mobile.logo} /></a></Link>
              <div className={cx(style.mobile.menu, this.state.menuActive ? "active" : "")} >
                <div className={cx(style.mobile.item, "lang cursor-pointer")} >{this.renderLanguageButton()}</div><span>|</span>
                <div className={cx(style.mobile.item, "cursor-pointer")}><PrimaryButton className={cx("button", style.mobile.applyButton)} onClick={this.handleButtonOnClick} data-cta-name="apply-open">{t("common:layout:apply")}</PrimaryButton></div><span>|</span>
                <div className={cx(style.mobile.item, "cursor-pointer")} onClick={this.handleButtonOnClick} >{t("common:layout:login")}</div>
                <span className={cx(this.state.menuActive ? "" : style.mobile.hidden)}>|</span>
                <div className={cx(style.mobile.item, `${locale === "en" ? "multi-line" : ""} cursor-pointer`, this.state.menuActive ? "" : style.mobile.hidden)} onClick={this.props.toggleTracker} >{t("common:layout:loan-tracker")}</div>
              </div>
            </div>
            <div className="menu-button" onClick={this.toggleMenu}>
              <div className={`${this.state.menuActive ? "close-icon" : "menu-icon"} icon`}>
                {/*menu icon*/}
              </div>
            </div>
            <div className={style.mobile.itemContainer}>
              <div className={style.mobile.menuItems}>
                <ul>
                  <li className="title">{t("common:layout:products")}</li>
                  <li><Link route="products/personal-loan" params={{locale}}><a data-cta-name="personal-loan" className={cx(style.underlineAnimation, "item")}>{t("common:layout:personal-loan")}</a></Link></li>
                  <li><Link route="products/balance-transfer" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="balance-transfer">{t("common:layout:balance-transfer")}</a></Link></li>
                  <li><Link route="products/no-doc-loan" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="no-doc-loan">{t("common:layout:no-doc-loan")}</a></Link></li>
                  <li><Link route="products/property-owner-loan" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="property-owner-loan">{t("common:layout:property-owner-loan")}</a></Link></li>
                  {locale === "en" ?
                    <li><a href="https://subscribe-plus-for-apple-products.welend.hk" className={cx(style.underlineAnimation, "item")} data-cta-name="apple-subscribe-plus">{t("common:layout:apple-subscribe-plus")}</a></li>
                    :
                    <li><a href="https://subscribe-plus-for-apple-products.welend.hk/tc" className={cx(style.underlineAnimation, "item")} data-cta-name="apple-subscribe-plus">{t("common:layout:apple-subscribe-plus")}</a></li>
                  }
                </ul>
                <ul>
                  <li className="title">{t("common:layout:loan-information")}</li>
                  <li><Link route="card-debt-tips" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="card-debt-tips">{t("common:layout:card-debt-tips")}</a></Link></li>
                  <li><Link route="payment-methods" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="payment-methods">{t("common:layout:payment-methods")}</a></Link></li>
                  <li><Link route="faqs" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="faqs">{t("common:layout:faqs")}</a></Link></li>
                  {locale !== "en" && (
                    <li><a href={"https://aiblog.welend.hk/"} className={cx(style.underlineAnimation, "item")} data-cta-name="ai-blog">{t("common:layout:ai-blog")}</a></li>
                  )}
                </ul>
                <ul>
                  <li className="title">{t("common:layout:company-information")}</li>
                  <li><Link route="about-us" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="about-us">{t("common:layout:about-us")}</a></Link></li>
                  <li><Link route="quotes" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="quotes">{t("common:layout:quotes")}</a></Link></li>
                  <li><a href={`https://www.welab.co/${(locale === "en") ? "en" : "zh-cn"}/careers`} className={cx(style.underlineAnimation, "item")} data-cta-name="careers">{t("common:layout:careers")}</a></li>
                  <li><Link route="contact-us" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="contact-us">{t("common:layout:contact-us")}</a></Link></li>
                </ul>
                <ul>
                  <li className="title">{t("common:layout:legal")}</li>
                  <li><Link route="important-notice" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="important-notice">{t("common:layout:important-notice")}</a></Link></li>
                  <li><Link route="money-lenders-ordinance" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="money-lenders-ordinance">{t("common:layout:money-lenders-ordinance")}</a></Link></li>
                  <li><Link route="privacy-policy" params={{locale}}><a className={cx(style.underlineAnimation, "item")} data-cta-name="privacy-policy">{t("common:layout:privacy-policy")}</a></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.desktop.container} >
            <Link route="home" params={{locale}}><a data-cta-name="home"><img src={logo} className={style.desktop.logo} /></a></Link>
            <ul className={style.desktop.menu} >
              <li>
                <a href="javascript:void(0);" title={t("common:layout:products")}><span className={cx(style.underlineAnimation, "item")} >{t("common:layout:products")}</span></a>
                <ul className="productMenu" >
                  <li className={style.backgroundAnimation} >
                    <Link route="products/personal-loan" params={{locale}}><a data-cta-name="personal-loan"><span>{t("common:layout:personal-loan")}</span></a></Link>
                  </li>
                  <li className={style.backgroundAnimation}>
                    <Link route="products/no-doc-loan" params={{locale}}><a data-cta-name="no-doc-loan"><span>{t("common:layout:no-doc-loan")}</span></a></Link>
                  </li>
                  <li className={style.backgroundAnimation}>
                    <Link route="products/balance-transfer" params={{locale}}><a data-cta-name="balance-transfer"><span>{t("common:layout:balance-transfer")}</span></a></Link>
                    <ul className="productMenu" >
                      <li className={style.backgroundAnimation} >
                        <Link route="products/balance-transfer" params={{locale}}><a data-cta-name="balance-transfer"><span>{t("common:layout:balance-transfer")}</span></a></Link>
                      </li>
                      <li className={style.backgroundAnimation} >
                        <Link route="products/balance-transfer-calculator" params={{locale}}><a data-cta-name="bt-calculator"><span>{t("common:layout:bt-calculator")}</span></a></Link>
                      </li>
                      <li className={style.backgroundAnimation} >
                        <Link route="card-debt-tips" params={{locale}}><a data-cta-name="card-debt-tips"><span>{t("common:layout:card-debt-tips")}</span></a></Link>
                      </li>
                    </ul>
                  </li>
                  <li className={style.backgroundAnimation}>
                    <Link route="products/property-owner-loan" params={{locale}}><a data-cta-name="property-owner-loan"><span>{t("common:layout:property-owner-loan")}</span></a></Link>
                  </li>
                  <li className={style.backgroundAnimation}>
                    {locale === "en" ?
                    <a href="https://subscribe-plus-for-apple-products.welend.hk" data-cta-name="apple-subscribe-plus"><span>{t("common:layout:apple-subscribe-plus")}</span></a>
                    :
                    <a href="https://subscribe-plus-for-apple-products.welend.hk/tc" data-cta-name="apple-subscribe-plus"><span>{t("common:layout:apple-subscribe-plus")}</span></a>
                    }
                  </li>
                </ul>
              </li>
              <li>
                <Link route="about-us" params={{locale}}><a className={cx(style.underlineAnimation, "item")}>{t("common:layout:about-us")}</a></Link>
              </li>
              <li>
                <Link route="faqs" params={{locale}}><a className={cx(style.underlineAnimation, "item")}>{t("common:layout:faqs")}</a></Link>
              </li>
              {locale !== "en" && (
                <li>
                  <a href={"https://aiblog.welend.hk/"} className={cx(style.underlineAnimation, "item")}>{t("common:layout:ai-blog")}</a>
                </li>
              )}

            </ul>
            <ul className={cx(style.desktop.menu, "right")} >
              <li>
                {this.renderLanguageButton()}
              </li>
              <li><span className={cx(style.underlineAnimation, `item cursor-pointer ${locale === "en" ? "multi-line" : ""}`)} onClick={this.props.toggleTracker} data-cta-name="loan-tracker-open">{t("common:layout:loan-tracker")}</span></li>
              {this.renderLogingButton()}
              <li><span className="item" ><PrimaryButton className="button" onClick={this.handleButtonOnClick} data-cta-name="apply-open">{t("common:layout:apply")}</PrimaryButton></span></li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }

  private toggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  private renderLanguageButton() {
    const { locale, theme, router } = this.props;
    const style = headerStyle(theme);
    return this.shouldRenderLanguageButton() ? (
      <a href={this.state.switchedLanguageUrl} className={cx(style.underlineAnimation, "item")}>
        {locale === "en" ? "中" : "EN"}
      </a>
    ) : null;
  }

  private shouldRenderLanguageButton() {
    const { router } = this.props;
    const routes = ["gift-redemption"];
    return !routes.some((element) => `/${element}` === router.route);
  }

  private renderLogingButton(): any {
    const { authenticated, t, theme } = this.props;
    const style = headerStyle(theme);
    return authenticated ? (
      <li><span className={cx(style.underlineAnimation, "item cursor-pointer")} onClick={this.handleLoginLogoutButtonOnClick} data-cta-name="login-open">{t("common:layout:logout")}</span></li>
    ) : (
      <li><span className={cx(style.underlineAnimation, "item cursor-pointer")} onClick={this.handleLoginLogoutButtonOnClick} data-cta-name="login-open">{t("common:layout:login")}</span></li>
    );
  }

  private handleButtonOnClick(): void {
    const { toggleLoginModal } = this.props;
    toggleLoginModal();
  }

  private handleLoginLogoutButtonOnClick(): void {
    const { authenticated, toggleLoginModal, logout } = this.props;
    if (authenticated) {
      logout();
    } else {
      toggleLoginModal();
    }
  }
}

const mapStateToProps = (state: ImmutableRootState): StateProps => {
  return {
    authenticated: isAuthenticatedFromAuthStore(state.get("auth")),
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
  toggleTracker: () => {
    dispatch(TrackerActions.toggleTracker());
  },
  logout: () => {
    dispatch(AuthActions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
