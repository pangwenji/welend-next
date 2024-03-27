import { css, cx } from "emotion";
import "rc-slider/assets/index.css";
import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import { CalendarIcon, Column, Container, DollarCycleIcon, DollarIcon, PrimaryButton, Row, Slider } from "../../components";
import calculate, { Errors } from "../../lib/LoanCalculator";
import { isGooglePage } from "../../lib/util";
import { AppProps } from "../../pages/_app";
import { ImmutableRootState } from "../../reducers";
import { LoginModalActions } from "../../reducers/loginModalReducer";
import {CalculatorConfig} from "../../reducers/serverConfigReducer";
import personalLoanCalculatorStyle from "./PersonalLoanCalculatorStyle";

const DEFAULT_AMOUNT = 300000;
const DEFAULT_TENOR = 1080;

interface State {
  usingSlider: boolean;
  amount?: number;
  tenor?: number;
  minMonthlyRepayment?: number;
  maxMonthlyRepayment?: number;
  errors?: Errors[];
  remark: boolean;
}

interface StateProps {
  embedMode?: boolean;
}

interface OwnProps {
  loanType: string;
  calculatorConfig: CalculatorConfig;
}

export interface DispatchProps {
  toggleLoginModal: (amount: number, tenor: number, loanType: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class PersonalLoanCalculator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const defaultAmount = DEFAULT_AMOUNT;
    const defaultTenor = DEFAULT_TENOR;
    const result = this.calculateProper(defaultAmount, defaultTenor);
    this.state = {
      usingSlider: true,
      amount: defaultAmount,
      tenor: defaultTenor,
      minMonthlyRepayment: result.minMonthlyRepayment,
      maxMonthlyRepayment: result.maxMonthlyRepayment,
      errors: result.errors,
      remark: false,
    };
    this.calculateProper = this.calculateProper.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.setAmount = this.setAmount.bind(this);
    this.changeTenor = this.changeTenor.bind(this);
    this.changeTenorInput = this.changeTenorInput.bind(this);
    this.renderTenorInput = this.renderTenorInput.bind(this);
    this.toggleRemark = this.toggleRemark.bind(this);

    this.onFocusAmountField = this.onFocusAmountField.bind(this);
    this.onBlurAmountField = this.onBlurAmountField.bind(this);

    this.submit = this.submit.bind(this);
  }

  public render(): any {
    const { t, theme, embedMode, router, calculatorConfig } = this.props;
    const style = personalLoanCalculatorStyle(theme);
    const calRemark = (
    <>
      {t("common:ploan-calculator:tnc1")} <br/>
      {isGooglePage(router.query) ? t("common:utm-source:google:remark") : t("common:ploan-calculator:tnc2")}
    </>);
    return (
      <div className={cx(style.mainContainer, embedMode ? "embed" : "")}>
        <div className={cx(style.headerContainer, embedMode ? "embed" : "")}>{t("common:ploan-calculator:loan-calculator")}</div>
        <div className={cx(style.sliderSection, embedMode ? "embed" : "")} style={{borderBottom: "1px dotted #ccc"}} >
          <Container noGutter={true}>
            <Row>
              <Column xs={12} >
                <div className={style.inputLabel} ><DollarIcon color={theme.Colors.primary} style={{fontSize: "20px"}} /> {t("common:ploan-calculator:loan-amount")}<sup>1</sup></div>
              </Column>
              <Column xs={12} >
                <div className={style.inputContainer}>
                  <span className={style.amountInputLabel} >HK$</span>
                  <input
                    type="tel"
                    className={style.amountInput}
                    value={this.state.amount}
                    onChange={this.handleAmountChange}
                    onFocus={this.onFocusAmountField}
                    onBlur={this.onBlurAmountField}
                    data-cta-name="input-loan-amount"
                  />
                </div>
              </Column>
            </Row>
          </Container>
          <div
            className={css`
              @media (max-width: ${theme.Config.tabletWidth}px) {
                display: none;
              }
            `}
          >
            {embedMode ? null : (
              <Slider
                value={Number(this.state.amount)}
                max={calculatorConfig.amountUpper}
                min={calculatorConfig.amountLower}
                step={1000}
                onChange={this.changeAmount}
                handleColor={style.mainColor.color}
                trackColor={style.mainColor.gradient}
              />
            )}
          </div>
        </div>
        <div className={cx(style.sliderSection, embedMode ? "embed" : "")}>
          <Container noGutter={true}>
            <Row>
              <Column xs={12} >
                <div className={style.inputLabel} ><CalendarIcon color={theme.Colors.primary} style={{fontSize: "20px"}}/> {t("common:ploan-calculator:tenor")}</div>
              </Column>
              <Column xs={12} >
                <div className={style.inputContainer}>
                  <span className={style.tenorInputLabel} >{t("common:ploan-calculator:month")}</span>
                  <select className={style.tenorInput} value={this.state.tenor} onChange={this.changeTenorInput} data-cta-name="select-tenor">
                    {this.renderTenorInput()}
                  </select>
                </div>
              </Column>
            </Row>
          </Container>
          <div
            className={css`
              @media (max-width: ${theme.Config.tabletWidth}px) {
                display: none;
              }
            `}
          >
            {embedMode ? null : (
              <Slider
                value={this.state.tenor}
                max={calculatorConfig.tenorUpper}
                min={Math.max(30, calculatorConfig.tenorLower)}
                step={30}
                onChange={this.changeTenor}
                handleColor={style.mainColor.color}
                trackColor={style.mainColor.gradient}
              />
            )}
          </div>
        </div>
        <div className={cx(style.resultSection, embedMode ? "embed" : "")} >
          <Container noGutter={true}>
            <Row>
              <Column className="text-left no-wrap" md={8} xs={24} >
                <DollarCycleIcon color={theme.Colors.primary} style={{fontSize: "20px"}}/> {t("common:ploan-calculator:monthly-repayment")}<sup>2</sup>
              </Column>
              <Column
                className={cx("text-right text-color-primary", css`
                @media (max-width: ${theme.Config.tabletWidth}px) {
                  margin-top: 20px;
                  float: none;
                  display: block;
                  text-align: left;
                  padding-left: 25px;
                }
              `)}
                md={16}
                xs={24}
              >
                HK${this.state.minMonthlyRepayment.toLocaleString()} ~ HK${this.state.maxMonthlyRepayment.toLocaleString()}
                <span
                  className={cx("cursor-pointer text-size-small", css`
                    display: none;
                    @media (max-width: ${theme.Config.tabletWidth}px) {
                      display: block;
                      float: right;
                      color: ${theme.Colors.secondary};
                    }
                `)}
                  onClick={this.toggleRemark}
                >{t("common:ploan-calculator:note")}
                </span>
              </Column>
            </Row>
          </Container>
          <div
            className={cx("text-color-light text-size-small text-left", css`
            margin-top: .5rem;
            @media (max-width: ${theme.Config.tabletWidth}px) {
              display: none;
            }
          `)}
          >{calRemark}
          </div>
          <div
            className={css`
              background: #fff;
              position: absolute;
              top: 195px;
              width: 80%;
              left: 10%;
              padding: 10px;
              border-radius: 4px;
              box-shadow: 0 1px 8px #666;
              font-size: 0.8rem;
              text-align: left;
              display: ${this.state.remark ? "block" : "none"};
            `}
            onClick={this.toggleRemark}
          >
            <div>{calRemark}</div>
          </div>
          {embedMode ? null : (
            <PrimaryButton className="margin-top" style={{maxWidth: "200px", margin: "auto auto 20px", height: "45px"}} onClick={this.submit} data-cta-name="home-calc-personal-loan">
              {t("common:layout:apply-now")}
            </PrimaryButton>
          )}
        </div>
      </div>
    );
  }

  private onFocusAmountField(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ usingSlider: false });
  }

  private onBlurAmountField(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ usingSlider: true });
    this.setState(this.calculateProper(this.state.amount, this.state.tenor));
  }

  private renderTenorInput() {
    return this.props.calculatorConfig.tenorOptions.map((value, index) => {
      return (<option key={index} value={value}>{value / 30}</option>);
    });
  }

  private changeTenor(tenor: number) {
    const roundedTenors = this.props.calculatorConfig.tenorOptions.filter((value) => {
      return value <= tenor;
    });
    const roundedTenor = roundedTenors[roundedTenors.length - 1];
    const result = this.calculateProper(Number(this.state.amount), roundedTenor);
    this.setState({
      ...result,
    });
  }

  private changeTenorInput(event: React.FormEvent<HTMLSelectElement>) {
    const tenor = Number(event.currentTarget.value);
    const result = this.calculateProper(Number(this.state.amount), tenor);
    this.setState({
      ...result,
    });
  }

  private handleAmountChange(event: React.FormEvent<HTMLInputElement>) {
    const text = event.currentTarget.value;
    if (!/^[0-9]*$/.test(text)) { return; }
    this.setAmount(Number(text));
  }

  private changeAmount(amount: number) {
    if (!this.state.usingSlider) { return; }
    this.setAmount(amount);
  }

  private setAmount(amount: number) {
    this.setState(this.calculate(amount, this.state.tenor));
  }

  private calculate(amount: number, tenor: number) {
    const result = this.calculateProper(amount, tenor);
    result.amount = amount < result.amount ? amount : result.amount;
    return result;
  }

  private calculateProper(amount: number, tenor: number) {
    return calculate(this.props.calculatorConfig, amount, tenor);
  }

  private submit() {
    const { tenor } = this.state;
    const { toggleLoginModal, loanType } = this.props;
    toggleLoginModal(Number(this.state.amount), tenor, loanType);
  }

  private toggleRemark() {
    this.setState({
      remark: !this.state.remark,
    });
  }
}

const mapStateToProps = (state: ImmutableRootState) => {
  const application = state.get("application");
  const calculatorConfig = state.getIn(["serverConfig", "calculatorConfig"]).toJS();
  return {
    locale: application.get("locale"),
    calculatorConfig,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: (amount, tenor, loanType) => {
    dispatch(LoginModalActions.toggleLoginModal(amount, tenor, loanType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalLoanCalculator);
