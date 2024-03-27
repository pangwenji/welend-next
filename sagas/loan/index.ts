import { SagaIterator } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import { ApprovedLoan, LoanAction, LoanActions, LoanDetails } from "../../reducers/loanReducer";
import { getCurrentLoanFromLoanStore } from "../../services/redux";
import { setCookie } from "../../services/utils";
import WelendApi, {
  ApprovedLoanResponse,
  LoanResponse,
  UserResponse,
} from "../../services/welendApi/WelendApi";

export function* getLoans(api: WelendApi, action: LoanAction): SagaIterator {
  try {
    const userResponse = yield call(
      api.getUser,
    );
    const loanResponse = yield call(
      api.getLoans,
    );
    let userLoanData = {};
    if (userResponse.status === 200 && userResponse.data) {
      if (userResponse.data.tracker_id) {
        setCookie("user_id", userResponse.data.tracker_id);
      }
      userLoanData = mapUserResponseToLoan(userResponse.data);
    }
    if (loanResponse.status === 200 && loanResponse.data) {
      const loansResponse: LoanResponse[] = loanResponse.data;

      const loans = loansResponse.map((loan) => ({
        ...userLoanData,
        ...mapLoanResponseToLoan(loan),
      }));
      yield put(LoanActions.getLoansSuccess(loans));
    }
  } catch (error) {
    if (error.response) {
      yield put(LoanActions.getLoansFailure());
    }
  }
}

function mapUserResponseToLoan(response: UserResponse): LoanDetails {
  return {
    birthday: response.birthday,
    firstName: response.english_first_name,
    gender: response.gender,
    lastName: response.english_last_name,
    mobile: response.mobile,
    hkid: response.hkid,
  };
}

function mapLoanResponseToLoan(response: LoanResponse): LoanDetails {
  const documents = response.documents ? response.documents.map((document) => {
    const images = document.images.map((image) => ({
      docId: image.doc_id,
      url: image.url,
      createdAt: image.created_at,
      rejectedAt: image.rejected_at,
      rejectReason: image.reject_reason,
    }));

    return {
      required: document.required,
      completed: document.completed,
      docType: document.doc_type,
      images,
    };
  }) : [];

  const identifyVerification = response.identify_verification ? {
        kbaCompleted: response.identify_verification.kba_completed,
        facialProofUploaded: response.identify_verification.facial_proof_uploaded,
        ivCompleted: response.identify_verification.iv_completed,
    } : undefined;

  const salesFinanceLoan = response.sf_loan ? {
    productAmount: response.sf_loan.product_amount,
    preApprovalCode: response.sf_loan.pre_approval_code,
    preApprovalValidTill: response.sf_loan.valid_till,
    preApprovalCashoutValidBefore: response.sf_loan.cash_out_valid_before,
    paymentApprovalCode: response.sf_loan.payment_approval_code,
    maxCashoutAmount: response.sf_loan.max_cashout_amount,
    tenors: response.sf_loan.tenors,
    cashoutAmount: response.sf_loan.cashout_amount,
    tenor: response.sf_loan.tenor,
    monthlyAdminFee: response.sf_loan.monthly_admin_fee,
    monthlyInstallment: response.sf_loan.monthly_installment,
    apr: response.sf_loan.apr,
    maxProductAmount: response.sf_loan.max_product_amount,
    premiumOffer: response.sf_loan.premium_offer,
  } : undefined;

  const salesFinancePreApprovedLoan = response.sf_pre_approved_loan ? {
    amount: response.sf_pre_approved_loan.amount,
    expiryDate: response.sf_pre_approved_loan.expiry_date,
    startDate: response.sf_pre_approved_loan.start_date,
    isPreApproved: response.sf_pre_approved_loan.is_pre_approved,
  } : undefined;

  const disbursement = response.disbursement ? {
    beneficiaryName: response.disbursement.beneficiary_name,
    netAmount: response.disbursement.net_amount,
    customerCash: response.disbursement.customer_cash,
    external: response.disbursement.external,
    refinanceAmount: response.disbursement.refinance_amount,
    refinanceApplicationIds: response.disbursement.refinance_application_ids,
  } : undefined;

  const approval = response.approval ? {
    audioFile: response.approval.audio_file,
    audioFileEn: response.approval.audio_file_en,
    audioFileTc: response.approval.audio_file_tc,
    amount: response.approval.amount,
    monthlyFlatRate: response.approval.monthly_flat_rate,
    monthlyDueDay: response.approval.monthly_due_day,
    apr: response.approval.apr,
    monthlyInstallment: response.approval.monthly_installment,
    totalInterest: response.approval.total_interest,
    handlingFeeAmount: response.approval.handling_fee_amount,
  } : undefined;

  const btAndCash = response.bt_and_cash ? {
    amount: response.bt_and_cash.amount,
    discountedInstallment: response.bt_and_cash.discounted_installment,
    handlingFee: response.bt_and_cash.handling_fee,
    originalMonthlyInstallment: response.bt_and_cash.original_monthly_installment,
  } : undefined;

  const repayments = response.repayments ? response.repayments.map((repayment) => {
    return {
      installment: repayment.i,
      amount: repayment.amt,
      date: repayment.date,
    };
  }) : undefined;

  const externalLoans = response.external_loans ? response.external_loans.map((externalLoan) => ({
    company: externalLoan.loan_company,
    amount: externalLoan.loan_amount,
    monthlyRepayment: externalLoan.installment_amount,
    tenor: externalLoan.tenor,
    disbursementDate: externalLoan.opened_date,
    currency: externalLoan.currency,
  })) : undefined;

  const user: any = {};

  if (response.user) {
    user.email = response.user.email;

    if (response.user.profile) {
      user.firstName = response.user.profile.english_first_name;
      user.lastName = response.user.profile.english_last_name;
      user.gender = response.user.profile.gender;
      user.birthday = response.user.profile.birthday;
      user.hkid = response.user.profile.hkid;
    }

    if (response.user.education_profile) {
      user.educationLevel = response.user.education_profile.education_level;
    }
  }
  return {
    productCode: response.product_code,
    applicationId: response.application_id,
    state: response.state,
    amount: response.amount,
    tenor: response.tenor,
    bankrupted: response.bankrupted,
    residentialAddress: response.residential_address,
    residentialStatus: response.residential_status,
    residentialRepayment: response.residential_repayment,
    employmentStatus: response.employment_status,
    employerName: response.name_of_employer,
    workPhone: response.work_phone,
    businessNature: response.business_nature,
    position: response.position,
    monthlyIncome: response.monthly_income,
    yearOfService: response.year_of_service,
    monthlyFlatRate: response.monthly_flat_rate,
    disbursementAccount: response.disbursement_account,
    disbursementBank: response.disbursement_bank,
    apr: response.apr,
    hasTu: response.has_tu,
    dischargedBankruptcy: response.discharged_bankruptcy,
    repeating: response.repeating,
    btAndCash,
    disbursement,
    approval,
    documents,
    repayments,
    externalLoans,
    approvedLoan: response.approved_loan ? mapApprovedLoanResponseToApprovedLoan(response.approved_loan) : null,
    userReadOnly: response.user_readonly,
    createdAt: response.created_at,
    identifyVerification,
    sendDocumentsInOtherChannels: response.send_documents_in_other_channels,
    salesFinanceLoan,
    salesFinancePreApprovedLoan,
    ...user,
  };
}

function mapApprovedLoanResponseToApprovedLoan(response: ApprovedLoanResponse): ApprovedLoan {
  const dues = response.dues.map((due) => ({
    id: due.id,
    dueType: due.due_type,
    date: due.date,
    index: due.index,
    amount: due.amount,
    outstandingAmount: due.outstanding_amount,
  }));

  return {
    state: response.state,
    disbursedAt: response.disbursed_at,
    handlingFeeAmount: response.handling_fee_amount,
    outstandingBalance: response.outstanding_balance,
    nextAmountDue: response.next_amount_due,
    dueDate: response.due_date,
    dues,
    nextDues: response.next_dues,
    lastPaidDue: response.last_paid_due,
  };
}
