import {CalculatorConfig} from "../reducers/serverConfigReducer";

export interface Result {
  amount: number;
  tenor: number;
  minMonthlyRepayment: number;
  maxMonthlyRepayment: number;
  errors: Errors[];
}

export type Errors = "amountMaxium" | "amountMinium" | "tenorMaxium" | "tenorMinium";

export const MAIN_COLOR = {
  color: `#F48024`,
  gradient: `linear-gradient(270deg, #FFCB31 0%, #F69950 100%)`,
};

export const SUBSIDIARY_COLOR = {
  color: `#85769D`,
  gradient: `linear-gradient(270deg, #708BC1 0%, #85769D 100%)`,
};

export const defaultConfig = {
  amountLower: 5000,
  amountUpper: 800000,
  tenorLower: 90,
  tenorUpper: 1800,
};

const calculate = (config: CalculatorConfig, amount: number, tenor: number): Result => {
  const errors = [];

  const months = tenor / 30;
  const monthlyPayment = (ratePercent) => Math.round((ratePercent / 100 * (months + 1) * amount / 12 / 2 + amount) / months);

  if (amount > config.amountUpper) {
    amount = config.amountUpper;
    errors.push("amountMaxium");
  }
  if (amount < config.amountLower) {
    amount = config.amountLower;
    errors.push("amountMinium");
  }
  if (tenor > config.tenorUpper) {
    tenor = config.tenorUpper;
    errors.push("tenorMaxium");
  }
  if (tenor < config.tenorLower) {
    tenor = config.tenorLower;
    errors.push("tenorMinium");
  }

  const minMonthlyRepayment = monthlyPayment(1.99);
  const maxMonthlyRepayment = monthlyPayment(25);

  return {
    amount,
    tenor,
    minMonthlyRepayment,
    maxMonthlyRepayment,
    errors,
  };
};

export default calculate;
