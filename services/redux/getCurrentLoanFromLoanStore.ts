import { LoanDetails, LoanRecord } from "../../reducers/loanReducer";

export default (loanState: LoanRecord): LoanDetails | null => {
  if (loanState && loanState.get("loans")) {
    const loans =  [...loanState.get("loans")];
    if (loans.length > 0) {
      const sortedLoans = loanState.get("loans").sort((a: LoanDetails, b: LoanDetails) => {
        const at = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const bt = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return bt - at;
      });
      return sortedLoans[0];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
