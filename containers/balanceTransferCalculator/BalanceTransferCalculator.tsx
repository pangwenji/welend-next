import { css, cx } from "emotion";
import "rc-slider/assets/index.css";
import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import { BankCardIcon, Column, Container, PrimaryButton, Row, Slider } from "../../components";
import calculate, { Errors, MAIN_COLOR } from "../../lib/BtCalculator";
import { defaultConfig as LoanCalculatorConfig } from "../../lib/LoanCalculator";
import { AppProps } from "../../pages/_app";
import { LoginModalActions } from "../../reducers/loginModalReducer";

import arrowIcon from "../../assets/images/static-page/svg-icon/arrow-change-to.svg";

const DEFAULT_AMOUNT = 80000;

interface State {
  usingSlider: boolean;
  amount?: number;
  bankRepayment?: number;
  welendRepayment?: number;
  bankInterest?: number;
  welendInterest?: number;
  bankTenor?: number;
  welendTenor?: number;
  remark: boolean;
  errors?: Errors[];
}

interface StateProps {
  embedMode?: boolean;
}

interface OwnProps {
  loanType: string;
}

export interface DispatchProps {
  toggleLoginModal: (amount: number, tenor: number, loanType: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class BalanceTransferCalculator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const defaultAmount = DEFAULT_AMOUNT;
    const result = this.calculateProper(defaultAmount);
    this.state = {
      usingSlider: true,
      amount: defaultAmount,
      remark: false,
      ...result,
    };
    this.calculate = this.calculate.bind(this);
    this.calculateProper = this.calculateProper.bind(this);
    this.onFocusAmountField = this.onFocusAmountField.bind(this);
    this.onBlurAmountField = this.onBlurAmountField.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.toggleRemark = this.toggleRemark.bind(this);
    this.submit = this.submit.bind(this);
    this.toReadableYear = this.toReadableYear.bind(this);
  }

  public render(): any {
    const { locale, t, theme, embedMode } = this.props;
    return (
      <div
        className={css`
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 5px;
          position: relative;
          text-align: center;
          overflow: hidden;
          padding-bottom: 20px;
        `}
      >
        <div
          className={css`
            text-align: left;
            padding: 20px 30px 20px 20px;
            font-size: ${locale === "en" ? "1.25rem" : "1.5rem"};
            line-height: normal;
            font-weight: 400;
            width: 101%;
            color: #fff;
            border-radius: 5px 5px 0 0;
            background: ${MAIN_COLOR.gradient};
            display: flex;
            align-items: center;
            position: relative;
            @media (max-width: ${theme.Config.mobileWidth}px) {
              padding: 10px 30px 10px 20px;
            }

            ${
            embedMode ? `
                color: ${theme.Colors.text};
                background: #fff;
                line-height: 1.5rem;
                padding-bottom: 0;
              ` : null
            }
          `}
        >
          <div className={css`font-size: ${locale === "en" ? "20px" : "inherit"}`}>{t("common:balance-transfer-calculator:loan-calculator")}</div>
          <div
            className={cx("cursor-pointer text-size-small", css`
              position: absolute;
              right: 30px;
              @media (max-width: ${theme.Config.tabletWidth}px){
                right: unset;
                bottom: unset;
                position: relative;
                padding-left: 20px;
              }
            `)}
            onClick={this.toggleRemark}
          >{t("common:balance-transfer-calculator:note")}
          </div>
        </div>
        <Container noGutter={true}>
          <Row className={css`padding: 0 20px;`}>
            <Column xs={12} >
              <div
                className={css`
                  display: flex;
                  align-items: center;
                  padding: 10px 0;
                  line-height: ${locale === "en" ? "20px" : "normal"};
                  text-align: left;
                  font-size: 1rem;
                `}
              >
                <BankCardIcon color={theme.Colors.primary} style={{ fontSize: "20px" }} />
                <span
                  className={css`
                    padding: 5px;
                    ${locale === "en" ? "font-size:0.8em;" : ""}
                  `}
                >
                  {t("common:balance-transfer-calculator:loan-amount")}
                </span>
              </div>
            </Column>
            <Column xs={12} >
              <div
                className={css`
                  height: 40px;
                  overflow: hidden;
                  position: relative;
                  border: 1px solid #e9e9e9;
                  color: #CCC;
                  background: #FFF;
                  white-space: nowrap;
                  padding: 8px;
                  margin: 10px auto;
                  border-radius: 4px;
                  text-align: left;
                  font-size: 14px;
                `}
              >
                <span
                  className={css`
                    width: 40%;
                    line-height: 40px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: inline-block;
                    text-align: right;
                    padding-right: 5px;
                    z-index: 1;
                  `}
                >
                  HK$
                </span>
                <input
                  type="tel"
                  className={css`
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    font-size: 1rem;
                    padding-left: 40%;
                    background: #FFF;
                    color: ${theme.Colors.secondary};
                    border: 1px solid transparent;
                    border-radius: 5px;
                    background: transparent;
                    &:focus {
                      outline: none;
                    }
                  `}
                  value={this.state.amount}
                  onChange={this.handleAmountChange}
                  onFocus={this.onFocusAmountField}
                  onBlur={this.onBlurAmountField}
                  style={{ background: "transparent" }}
                />
              </div>
            </Column>
          </Row>
        </Container>
        <div
          className={css`
          padding: 0 30px 20px 20px;
          @media (max-width: ${theme.Config.tabletWidth}px) {
            display: none;
          }`}
        >
          {embedMode ? null : (
            <Slider
              value={Number(this.state.amount)}
              max={LoanCalculatorConfig.amountUpper}
              min={LoanCalculatorConfig.amountLower}
              step={1000}
              onChange={this.changeAmount}
              handleColor={MAIN_COLOR.color}
              trackColor={MAIN_COLOR.gradient}
            />
          )}
        </div>
        <div
          className={css`
            .line {
              height: ${embedMode ? "74" : "74"}px;
              margin: 0;
              border-bottom: 1px dotted #ccc;
              padding: 8px 20px 0 20px;
              font-size: 15px;
              &:first-child{
                height: auto;
                overflow: hidden;
                padding: 10px 20px 15px 20px;
                @media (max-width: ${theme.Config.tabletWidth}px) {
                  font-size: 13px;
                }
              }
              .arrow {
                letter-spacing: -4px;
                font-size: 1rem;
              }
              .multi {
                line-height: 120%;
              }
              .reduce-color {
                color: ${theme.Colors.tertiary}
              }
              &:last-child {
                border-bottom: 0;
              }
              &:first-child {
                div {
                  vertical-align: middle;
                }
              }
              & div {
                float: none;
                vertical-align: top;
              }
            }
          `}
        >
          <Container noGutter={true} className="text-left" style={{marginBottom: "30px"}} >
            <Row className="line">
              <Column xs={8} className={cx("text-color-light multi")} ><span>{t("common:balance-transfer-calculator:credit-card")}<span className={css`display: ${locale === "en" ? "block" : "inline"};`}>Min Pay</span></span></Column>
              <Column xs={2} className="text-color-primary arrow text-half-bold" >
                <img className={css`width: 20px; padding: 0 1px`} src={arrowIcon} />
              </Column>
              <Column xs={13} className="text-color-primary multi text-half-bold" ><span className="text-bold"><span className="text-color-secondary" >We</span>Lend</span><span className={css(`line-height: normal;`)} > {t("common:balance-transfer-calculator:bt-loan")}</span></Column>
            </Row>

            {this.state.bankRepayment && this.state.welendRepayment ? (
              <Row className="line" >
                <Row>
                  <Column xs={24} className="text-color-primary multi text-half-bold" >
                    <span className={css(`line-height: normal; font-size: 0.7rem;`)} >{t("common:balance-transfer-calculator:repayment")}</span>
                  </Column>
                </Row>
                <Column xs={8} className="text-color-light multi" >
                  <span className={css`font-weight: 500; letter-spacing: 0;`} >${this.state.bankRepayment.toLocaleString()}</span>
                </Column>
                <Column xs={2} className="text-color-primary arrow text-half-bold" >
                  <img className={css`width: 20px; padding: 0 1px`} src={arrowIcon} />
                </Column>
                <Column xs={6}>
                  <span className={cx("text-color-primary", css`font-weight: 500; letter-spacing: 0;`)} >${this.state.welendRepayment.toLocaleString()}</span>
                </Column>
                <Column xs={8} className={cx("reduce-color")} ><span className={css`font-weight: bold;`}>&darr;</span> ${(this.state.bankRepayment - this.state.welendRepayment).toLocaleString()}</Column>
              </Row>
            ) : null}

            {this.state.bankInterest && this.state.welendInterest ? (
              <Row className="line" >
                <Row>
                  <Column xs={24} className="text-color-primary multi text-half-bold" ><span className={css(`line-height: normal; font-size: 0.7rem;`)} >{t("common:balance-transfer-calculator:interest")}</span></Column>
                </Row>
                <Row>
                  <Column xs={8} className="text-color-light multi" >
                    <span className={css`font-weight: 500; letter-spacing: 0;`} >${this.state.bankInterest.toLocaleString()}</span>
                  </Column>
                  <Column xs={2} className="text-color-primary arrow text-half-bold" >
                    <img className={css`width: 20px; padding: 0 1px`} src={arrowIcon} />
                  </Column>
                  <Column xs={6} className="text-color-primary multi text-half-bold" >
                    <span className={css`font-weight: 500; letter-spacing: 0;`} >${this.state.welendInterest.toLocaleString()}</span>
                  </Column>
                  <Column xs={8} className={cx("reduce-color")} >
                    <span className={css`font-weight: bold;`}>&darr;</span> ${(this.state.bankInterest - this.state.welendInterest).toLocaleString()}
                  </Column>
                </Row>
              </Row>
            ) : null}

            {this.state.bankTenor && this.state.welendTenor ? (
              <Row className="line" >
                <Row>
                  <Column xs={24} className="text-color-primary multi text-half-bold" ><span className={css(`line-height: normal; font-size: 0.7rem;`)} >{t("common:balance-transfer-calculator:tenor")}</span>
                  </Column>
                </Row>
                <Row>
                  <Column xs={8} className="text-color-light multi" >
                    <span className={css`font-weight: 500; letter-spacing: 0;`} >{this.toReadableYear(this.state.bankTenor)}</span></Column>
                  <Column xs={2} className="text-color-primary arrow text-half-bold" >
                    <img className={css`width: 20px; padding: 0 1px`} src={arrowIcon} />
                  </Column>
                  <Column xs={6} className="text-color-primary multi text-half-bold" >
                    <span className={css`font-weight: 500; letter-spacing: 0;`} >{this.toReadableYear(this.state.welendTenor)}</span></Column>
                  <Column
                    xs={8}
                    className={cx(css`
                      ${locale === "en" ? "line-height: 20px;" : ""}
                      @media (max-width: ${theme.Config.mobileWidth}px) {
                        ${locale === "en" ? "white-space: nowrap; font-size: 0.9em" : ""}
                      }
                    `,
                      "reduce-color")}
                  >
                    <span className={css`font-weight: bold;`}>&darr;</span>
                    {this.toReadableYear(this.state.bankTenor - this.state.welendTenor)}
                  </Column>
                </Row>
              </Row>
            ) : null}
          </Container>
        </div>
        {embedMode ? null : (
          <PrimaryButton
            className={css`
              margin-top: ${locale === "en" ? "0px" : "10px"};
            `}
            style={{ maxWidth: "200px", height: "45px" }}
            onClick={this.submit}
            data-cta-name="ai-cal-button"
          >
            {t("common:layout:get-your-real-rate")}
          </PrimaryButton>
        )}
        <div
          className={css`
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: #fff;
            opacity: 0;
            display: ${this.state.remark ? "block" : "none"};
          `}
          onClick={this.toggleRemark}
        >{}
        </div>
        <div
          className={css`
            background: #fff;
            position: absolute;
            top: 195px;
            width: 90%;
            left: 5%;
            padding: 10px;
            border-radius: 4px;
            box-shadow: 0 1px 8px #666;
            font-size: 0.8rem;
            text-align: left;
            display: ${this.state.remark ? "block" : "none"};
            @media (max-width: ${theme.Config.tabletWidth}px) {
              top: 80px;
            }
          `}
          onClick={this.toggleRemark}
        >
          <div>{t("common:balance-transfer-calculator:note-1")}</div>
          <div className="margin-top" >{t("common:balance-transfer-calculator:note-2")}</div>
          <div className="margin-top" >{t("common:balance-transfer-calculator:note-3")}</div>
        </div>
      </div>
    );
  }

  private toggleRemark() {
    this.setState({
      remark: !this.state.remark,
    });
  }

  private toReadableYear(months: number) {
    const { t } = this.props;
    const year = Math.floor(months / 12);
    const month = months % 12;
    const formated = [];
    if (year > 0) {
      formated.push(`${year}${t("common:balance-transfer-calculator:year")}`);
    }
    if (month > 0) {
      formated.push(`${month}${t("common:balance-transfer-calculator:month")}`);
    }
    return formated.join(" ");
  }

  private onFocusAmountField(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ usingSlider: false });
  }

  private onBlurAmountField(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ usingSlider: true });
    this.setState(this.calculateProper(this.state.amount));
  }

  private handleAmountChange(event: React.FormEvent<HTMLInputElement>) {
    const text = event.currentTarget.value;
    if (!/^[0-9]*$/.test(text)) { return; }
    this.setState(this.calculate(Number(text)));
  }

  private changeAmount(amount: number) {
    if (!this.state.usingSlider) { return; }
    this.setState(this.calculateProper(amount));
  }

  private calculate(amount: number) {
    const result = this.calculateProper(amount);
    result.amount = amount < result.amount ? amount : result.amount;
    return result;
  }

  private calculateProper(amount: number) {
    const result = calculate(amount);
    return {
      amount: result.amount,
      bankRepayment: Math.round(result.bankMonthlyPayment),
      bankInterest: Math.round(result.bankTotalInterest),
      bankTenor: result.bankTenor,
      welendRepayment: Math.round(result.welendMonthlyPayment),
      welendInterest: Math.round(result.welendTotalInterest),
      welendTenor: result.welendTenor,
      errors: result.errors,
    };
  }

  private submit() {
    this.props.toggleLoginModal(Number(this.state.amount), 1080, this.props.loanType);
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: (amount, tenor, loanType) => {
    dispatch(LoginModalActions.toggleLoginModal(amount, tenor, loanType));
  },
});

export default connect(null, mapDispatchToProps)(BalanceTransferCalculator);
