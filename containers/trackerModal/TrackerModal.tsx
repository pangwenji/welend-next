import { css, cx } from "emotion";
import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import {
  DollarIcon,
  FieldError,
  FormField,
  Input,
  ListItem,
  MobileIcon,
  Modal,
  ModalCard,
  ModalContent,
  ModalHeader,
  ModalTitle,
  PinInput,
  PrimaryButton,
  UnorderedList,
} from "../../components";
import config from "../../config";
import { FormFields } from "../../lib";
import { AppProps } from "../../pages/_app";
import { ImmutableRootState } from "../../reducers";
import { LoginModalActions } from "../../reducers/loginModalReducer";
import { TrackerActions, TrackerResults } from "../../reducers/trackerReducer";
import Validator, { ValidationError } from "../../services/validator/Validator";

interface State {
  mobile?: string;
  amount?: string;
  mobileErrors: ValidationError[] | null;
  amountErrors: ValidationError[] | null;
}

interface StateProps {
  active: boolean;
  results: TrackerResults;
}

interface OwnProps {
}

export interface DispatchProps {
  toggleLoginModal: () => void;
  toggleTracker: () => void;
  track: (mobile: string, amount: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class Tracker extends React.Component<Props, State> {
  private mobileValidator: Validator;
  private amountValidator: Validator;

  constructor(props: Props) {
    super(props);
    this.state = this.initialState();
    this.toggleModal = this.toggleModal.bind(this);
    this.nextAction = this.nextAction.bind(this);
    this.handleMobileBlur = this.handleMobileBlur.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleAmountBlur = this.handleAmountBlur.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.track = this.track.bind(this);
    this.disabled = this.disabled.bind(this);
    this.handleHashTrigger = this.handleHashTrigger.bind(this);

    this.mobileValidator = new Validator(FormFields.mobile.rules, { strict: false });
    this.amountValidator = new Validator(FormFields.amount.rules, { strict: false });
  }

  public componentDidMount(): void {
    this.handleHashTrigger();
  }

  public render(): any {
    const { t, theme, locale } = this.props;
    return (
      <Modal open={this.props.active}>
        <ModalCard
          className={css(`
          @media (min-width: ${theme.Config.tabletWidth}px) {
            width: 345px;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            margin: auto;
          }
        `)}
        >
          <ModalHeader onClose={this.toggleModal}>
            <ModalTitle>{t("common:tracker-modal:title")}</ModalTitle>
          </ModalHeader>
          <ModalContent>
            {this.props.results ? this.renderResults() : this.renderForm()}
          </ModalContent>
        </ModalCard>
      </Modal>
    );
  }

  private renderForm() {
    const { t } = this.props;
    const mobileErrorMessage = this.state.mobileErrors ? t(FormFields.mobile.errorMessages[this.state.mobileErrors[0].name]) : null;
    const amountErrorMessage = this.state.amountErrors ? t(FormFields.amount.errorMessages[this.state.amountErrors[0].name]) : null;
    return (
      <React.Fragment>
        <div className="margin-bottom">{t("common:tracker-modal:description")}</div>
        <div className="margin-bottom-large">
          <FormField label={t("common:tracker-modal:mobile")} icon={MobileIcon} />
          <Input
            maxLength={8}
            value={this.state.mobile}
            onChange={this.handleMobileChange}
            onBlur={this.handleMobileBlur}
            data-cta-name="input-tracker-mobile"
          />
          <FieldError errorMessage={mobileErrorMessage} />
        </div>
        <div>
          <FormField label={t("common:tracker-modal:amount")} icon={DollarIcon} />
          <Input
            type="tel"
            onChange={this.handleAmountChange}
            value={this.state.amount}
            onBlur={this.handleAmountBlur}
            data-cta-name="input-tracker-amount"
          />
          <FieldError errorMessage={amountErrorMessage} />
        </div>
        <PrimaryButton disabled={this.disabled()} className="margin-top-large" onClick={this.track}>{t("common:tracker-modal:check")}</PrimaryButton>
      </React.Fragment>
    );
  }

  private renderResults() {
    if (!this.props.results) { return null; }
    const { t, results } = this.props;
    const histories = results.history.map((history, i) => {
      return (
        <ListItem key={i} >{t(`common:tracker-modal.results.${history.state}`)}</ListItem>
      );
    });

    const nextAction = this.props.results.nextAction;
    const nextActionButton = nextAction ? (<PrimaryButton onClick={this.nextAction} >{t(`common:tracker-modal.results.${nextAction}`)}</PrimaryButton>) : null;
    return (
      <React.Fragment>
        <UnorderedList>{histories}</UnorderedList>
        {nextActionButton}
      </React.Fragment>
    );
  }

  private nextAction() {
    const { results } = this.props;
    if (!results) { return null; }
    if (results.nextAction === "upload_doc") {
      window.location.href = config.applicationFormBase + results.url;
    } else {
      this.toggleModal();
      this.props.toggleLoginModal();
    }
  }

  private initialState() {
    return {
      mobile: "",
      amount: "",
      mobileErrors: null,
      amountErrors: null,
    };
  }

  private handleMobileBlur(event: React.FormEvent<HTMLInputElement>): void {
    const mobileErrors = this.mobileValidator.validate(this.state.mobile);
    this.setState({ mobileErrors });
  }

  private handleMobileChange(event: React.FormEvent<HTMLInputElement>): void {
    if (!/^[0-9]+$/.test(event.currentTarget.value) && event.currentTarget.value !== "") {
      return;
    }
    this.setState({
      mobile: event.currentTarget.value,
    });
  }

  private handleAmountBlur(event: React.FormEvent<HTMLInputElement>): void {
    const amountErrors = this.amountValidator.validate(this.state.amount);
    this.setState({ amountErrors });
  }

  private handleAmountChange(event: React.FormEvent<HTMLInputElement>): void {
    if (!/^[0-9]+$/.test(event.currentTarget.value) && event.currentTarget.value !== "") {
      return;
    }
    this.setState({
      amount: event.currentTarget.value,
    });
  }

  private toggleModal() {
    this.props.toggleTracker();
    const state = this.initialState();
    this.setState(state);
  }

  private track() {
    this.props.track(this.state.mobile, this.state.amount);
  }

  private disabled() {
    const amountErrors = this.amountValidator.validate(this.state.amount);
    const mobileErrors = this.mobileValidator.validate(this.state.mobile);
    return !!(amountErrors || mobileErrors);
  }

  private handleHashTrigger(): void {
    const { toggleTracker } = this.props;
    if (window.location.hash === "#loan-tracker") {
      toggleTracker();
    }
  }
}

const mapStateToProps = (state: ImmutableRootState) => {
  const tracker = state.get("tracker");
  return {
    active: tracker.get("active"),
    results: tracker.get("results"),
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  toggleLoginModal: () => {
    dispatch(LoginModalActions.toggleLoginModal());
  },
  toggleTracker: () => {
    dispatch(TrackerActions.toggleTracker());
  },
  track: (mobile: string, amount: string) => {
    dispatch(TrackerActions.track(mobile, amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
