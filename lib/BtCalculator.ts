import { defaultConfig as LoanCalculatorConfig, MAIN_COLOR as CalculatorMainColor, SUBSIDIARY_COLOR } from "./LoanCalculator";

export interface Result {
  amount: number;
  bankMonthlyPayment: number;
  bankTotalAmount: number;
  bankTotalInterest: number;
  bankTotalInterestPercentage: number;
  bankTenor: number;
  bankTotalAmountPercentage: number;
  bankTenorPercentage: number;
  welendMonthlyPayment: number;
  welendTotalAmount: number;
  welendTotalInterest: number;
  welendTotalInterestPercentage: number;
  welendTenor: number;
  welendTotalAmountPercentage: number;
  welendTenorPercentage: number;
  saveTotalAmount: number;
  saveTotalAmountPercentage: number;
  saveTotalInterest: number;
  saveTotalInterestPercentage: number;
  saveTenor: number;
  saveTenorPercentage: number;
  saveTotalMonthlyPayment: number;
  saveInsterestPercentage: number;
  errors: Errors[];
}

export type Errors = "amountMaxium" | "amountMinium";

export const MAIN_COLOR = SUBSIDIARY_COLOR;

export const config = {
  amountLower: LoanCalculatorConfig.amountLower,
  amountUpper: LoanCalculatorConfig.amountUpper,
  welendApr: 8.35,
  welendAnnualInterest: 0.065,
  welendInterest: 0.065 / 12,
  welendTenor: 48,
  bankApr: 36.47,
  bankAnnualInterest: 0.3115,
  bankMinPayment: 0.04,
};

const calcWelendMonthlyRepayment = (amount: number) => {
  const tenorExp = Math.pow(1 + config.welendInterest, config.welendTenor);
  return amount * config.welendInterest * tenorExp / (tenorExp - 1);
};

const calcWelendTotalAmountPayable = (amount: number) => {
  return calcWelendMonthlyRepayment(amount) * config.welendTenor;
};

const calcWelendInterestPayable = (amount: number) => {
  return calcWelendTotalAmountPayable(amount) - amount;
};

const calcBank = (amount: number) => {
  let interestAmount = 0;
  let tenor = 0;
  const monthlyPayment = amount * config.bankMinPayment;
  while (amount > 0) {
    const currPay = Math.min(Math.max(amount * config.bankMinPayment, 50), amount);
    const currInterest = (amount - currPay) * config.bankAnnualInterest / 12;
    interestAmount += currInterest;
    amount -= currPay - currInterest;
    tenor += 1;
  }

  return {
    interestAmount,
    tenor,
    monthlyPayment,
  };
};

const calculate = (amount: number): Result => {
  const errors = [];

  if (amount > config.amountUpper) {
    amount = config.amountUpper;
    errors.push("amountMaxium");
  }
  if (amount < config.amountLower) {
    amount = config.amountLower;
    errors.push("amountMinium");
  }

  const welendTotalInterest = calcWelendInterestPayable(amount);
  const bankCalcResult = calcBank(amount);
  const bankTotalInterest = bankCalcResult.interestAmount;
  const bankTenor = bankCalcResult.tenor;
  const bankMonthlyPayment = bankCalcResult.monthlyPayment;
  const welendTotalAmount = welendTotalInterest + amount;
  const bankTotalAmount = bankTotalInterest + amount;
  const welendTenorPercentage = Math.round((config.welendTenor / bankTenor) * 100);
  const welendTotalAmountPercentage = Math.round((welendTotalAmount / bankTotalAmount) * 100);
  const saveTotalAmount = bankTotalAmount - welendTotalAmount;
  const welendMonthlyPayment = calcWelendMonthlyRepayment(amount);
  const saveInsterestPercentage = 100 - Math.round((welendMonthlyPayment / bankMonthlyPayment) * 100);
  const saveTenorPercentage = 100 - Math.round((config.welendTenor / bankTenor) * 100);
  const welendTotalInterestPercentage = Math.floor((welendTotalInterest / bankTotalInterest) * 100);
  const saveTotalMonthlyPayment = bankMonthlyPayment - welendMonthlyPayment;

  return {
    amount,
    bankMonthlyPayment,
    bankTotalAmount,
    bankTotalInterest,
    bankTotalInterestPercentage: 100,
    bankTenor,
    bankTotalAmountPercentage: 100,
    bankTenorPercentage: 100,
    welendMonthlyPayment,
    welendTotalAmount,
    welendTotalInterest,
    welendTotalInterestPercentage,
    welendTenor: config.welendTenor,
    welendTotalAmountPercentage,
    welendTenorPercentage,
    saveTotalAmount,
    saveTotalAmountPercentage: 100 - welendTotalAmountPercentage,
    saveTotalInterest: bankTotalInterest - welendTotalInterest,
    saveTotalInterestPercentage: 100 - welendTotalInterestPercentage,
    saveTenor: (bankTenor - config.welendTenor),
    saveTenorPercentage,
    saveTotalMonthlyPayment,
    saveInsterestPercentage,
    errors,
  };
};

export default calculate;
