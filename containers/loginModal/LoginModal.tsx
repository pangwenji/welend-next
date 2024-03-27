import { css, cx } from "emotion";
import * as React from "react";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import * as Redux from "redux";
import {
  FieldError,
  FormField,
  Input,
  MobileIcon,
  Modal,
  ModalCard,
  ModalContent,
  ModalHeader,
  ModalTitle,
  Option,
  PrimaryButton,
  Select,
} from "../../components/";
import { FormFields } from "../../lib";
import { AppProps } from "../../pages/_app";
import { ImmutableRootState } from "../../reducers";
import { AuthActions, LoanInfo } from "../../reducers/authReducer";
import { LoginModalActions } from "../../reducers/loginModalReducer";
import { Option as OptionInterface } from "../../reducers/serverConfigReducer";
import { isAuthenticatedFromAuthStore } from "../../services/redux";
import Validator, { ValidationError } from "../../services/validator/Validator";

interface State {
  mobile: string;
  mobileErrors: ValidationError[] | null;
}

interface StateProps {
  active: boolean;
  amount: number;
  tenor: number;
  loanType: string;
  authenticated: boolean;
  loanTypes: OptionInterface[];
}

interface OwnProps {
}

interface DispatchProps {
  login: (mobile: string, loanInfo: LoanInfo, locale: string) => void;
  toggleLoginModal: () => void;
  setStoreLoanInfo: (amount: number, tenor: number, loanType: string) => void;
  setTokenFromCookie: () => void;
  setLoanInfoToCookie: () => void;
  handleRedirectForAuthenticatedUser: (loanInfo: LoanInfo) => void;
}

type Props = StateProps & OwnProps & DispatchProps & AppProps;

class LoginModal extends React.PureComponent<Props, State> {
  private mobileValidator: Validator;

  constructor(props: Props) {
    super(props);
    this.state = {
      mobile: "",
      mobileErrors: null,
    };
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleMobileBlur = this.handleMobileBlur.bind(this);
    this.handleMobileFocus = this.handleMobileFocus.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleHashTrigger = this.handleHashTrigger.bind(this);
    this.handleLoanTypeOnChange = this.handleLoanTypeOnChange.bind(this);

    this.mobileValidator = new Validator(FormFields.mobile.rules, { strict: false });
    this.checkPageAssociatedLoanType = this.checkPageAssociatedLoanType.bind(this);

    this.renderLoanProductSelect = this.renderLoanProductSelect.bind(this);
  }

  public componentDidMount(): void {
    this.props.setTokenFromCookie();
    this.handleHashTrigger();
  }

  public getSnapshotBeforeUpdate(prevProps, prevState): any {
    const { active, authenticated, amount, tenor, loanType } = this.props;
    if (active && authenticated) {
      return {
        authenticated,
      };
    }
    if (prevProps.active !== active && (prevProps.loanType === loanType || loanType === undefined)) {
      return {
        updateloanType: true,
      };
    }
    if (prevProps.amount !== amount || prevProps.tenor !== tenor || prevProps.loanType !== loanType) {
      return {
        updateloanInfo: true,
      };
    }
    return null;
  }

  public componentDidUpdate(prevProps, prevState, snapshot): void {
    if (snapshot !== null) {
      const { amount, tenor, loanType } = this.props;
      if (snapshot.authenticated) {
        const loanInfo = {
          amount,
          tenor,
          loanType,
        };
        this.props.handleRedirectForAuthenticatedUser(loanInfo);
      }
      if (snapshot.updateloanInfo) {
        this.props.setLoanInfoToCookie();
      }
      if (snapshot.updateloanType) {
        this.props.setStoreLoanInfo(amount, tenor, this.checkPageAssociatedLoanType());
      }
    }
  }

  public render() {
    const { authenticated, t, theme, loanType } = this.props;
    const { mobile } = this.state;
    const mobileErrorMessage = this.state.mobileErrors ? t(FormFields.mobile.errorMessages[this.state.mobileErrors[0].name]) : null;

    return (
      <Modal open={!!this.props.active && !authenticated}>
        <ModalCard
          className={css(`
          @media (min-width: ${theme.Config.tabletWidth}px) {
            width: 345px;
            left: 0;
            right: 0;
              top: 0;
              transform: unset;
              margin: auto;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            @media (max-width: ${theme.Config.mobileWidth}px) {
              transition: top .1s;
              > div {
                height: 100%;
                overflow: unset;
                overflow-y: auto;
              }
            }
          `)}
        >
          <ModalHeader onClose={this.props.toggleLoginModal}>
            <ModalTitle>
              {t("common:login-modal.title")}
            </ModalTitle>
          </ModalHeader>
          <ModalContent>
            <div className="margin-bottom-large">
              <FormField label={t("common:login-modal.mobile")} />
              <Input
                onChange={this.handleMobileChange}
                onBlur={this.handleMobileBlur}
                onFocus={this.handleMobileFocus}
                value={mobile}
                data-cta-name="input-mobile"
                type="text"
                maxLength={8}
              />
              <FieldError errorMessage={mobileErrorMessage} />
            </div>
            <div className="margin-bottom-large">
              {this.renderLoanProductSelect()}
            </div>
            <div className="margin-top text-size-small">
              <div className="text-bold text-color-secondary">{t("common:login-modal.tips-title")}</div>
              <div className="margin-top-small" dangerouslySetInnerHTML={{ __html: t("common:login-modal.tips-content") }} />
            </div>
          </ModalContent>
          <div style={{ padding: "0 20px 20px 20px" }}>
            <PrimaryButton onClick={this.handleLogin} disabled={!loanType || (!mobile || mobileErrorMessage)}>{t("common:login-modal.apply-btn")}</PrimaryButton>
            <div
              className={cx(css(`
                a {
                  color: ${theme.Colors.secondary}
                }
              `), "margin-top-large text-size-small text-color-light")}
              dangerouslySetInnerHTML={{ __html: t("common:login-modal.statement") }}
            />
          </div>
        </ModalCard>
      </Modal>
    );
  }

  private handleMobileChange(event: any) {
    this.setState({ mobile: event.target.value });
  }

  private handleMobileBlur() {
    const mobileErrors = this.mobileValidator.validate(this.state.mobile);
    if (mobileErrors) {
      this.setState({ mobileErrors });
    }
  }

  private handleMobileFocus() {
    this.setState({ mobileErrors: null });
  }

  private handleLogin() {
    const { mobile } = this.state;
    const { amount, tenor, locale, loanType } = this.props;
    const mobileErrors = this.mobileValidator.validate(this.state.mobile);
    if (!mobileErrors) {
      this.props.login(mobile, { amount, tenor, loanType }, locale);
    }
    this.setState({ mobileErrors });
  }

  private checkPageAssociatedLoanType(): string {
    const { router } = this.props;
    const route = router.route;
    let newLoanType = null;
    if (route === "/products/no-doc-loan") {
      newLoanType = "no_doc_loan";
    } else if (["/card-debt-tips", "/products/balance-transfer"].indexOf(route) > -1) {
      newLoanType = "balance_transfer";
    } else if (["/products/property-owner-loan"].indexOf(route) > -1) {
      newLoanType = "property_owner_loan";
    } else if (route === "/products/personal-loan") {
      newLoanType = "personal_loan";
    }
    return newLoanType;
  }

  private handleHashTrigger(): void {
    const { authenticated, toggleLoginModal } = this.props;
    if (window.location.hash === "#login" && !authenticated) {
      toggleLoginModal();
    }
  }

  private handleLoanTypeOnChange(loanType): void {
    const { amount, tenor } = this.props;
    this.props.setStoreLoanInfo(amount, tenor, loanType);
  }

  private renderLoanProductSelect = () => {
    const { loanType, loanTypes, t } = this.props;
    const onChange = (event) => this.handleLoanTypeOnChange(event.target.value);
    if (loanTypes) {
      const options = loanTypes.map(({ name, id }) => (
        <Option key={`loan-product-${name}`} value={id}>{t(`common:layout.${name}`)}</Option>
      ));
      return (
        <React.Fragment>
          <FormField label={t("common:login-modal.loan-type")} />
          <Select
            name="loan-types"
            value={loanType}
            onChange={onChange}
          >
            {options}
          </Select>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state: ImmutableRootState) => {
  const loginModal = state.get("loginModal");
  const serverConfig = state.get("serverConfig");

  return {
    active: loginModal.get("active"),
    amount: loginModal.get("amount"),
    tenor: loginModal.get("tenor"),
    loanType: loginModal.get("loanType"),
    authenticated: isAuthenticatedFromAuthStore(state.get("auth")),
    loanTypes: serverConfig.get("loanTypes").toJS(),
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  login: (mobile: string, loanInfo: LoanInfo, locale: string) => {
    dispatch(AuthActions.login(mobile, loanInfo, locale));
  },
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
  setStoreLoanInfo: (amount, tenor, loanType) => {
    dispatch(LoginModalActions.setStoreLoanInfo(amount, tenor, loanType));
  },
  setTokenFromCookie: () => {
    dispatch(AuthActions.setTokenFromCookie());
  },
  setLoanInfoToCookie: () => {
    dispatch(AuthActions.setLoanInfoToCookie());
  },
  handleRedirectForAuthenticatedUser: (loanInfo: LoanInfo) => {
    dispatch(AuthActions.handleRedirectForAuthenticatedUser(loanInfo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
