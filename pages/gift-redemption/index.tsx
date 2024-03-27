import { css, cx } from "emotion";
import * as Moment from "moment";
import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import { Card, CardContent, CardHeader, CardTitle, Checkbox, Column, Container, FieldError, FormField, Input, Option, PrimaryButton, Row, Select } from "../../components";
import Layout from "../../containers/layout";
import { FormFields } from "../../lib";
import { ImmutableRootState } from "../../reducers";
import { GiftRedemptionActions, GiftRedemptionFormFields } from "../../reducers/giftRedemptionReducer";
import { PageActions } from "../../reducers/pageReducer";
import Validator, { ValidationError } from "../../services/validator/Validator";
import { AppProps } from "../_app";
import GiftRedemptionStyle from "./GiftRedemptionStyle";

interface State {
  giftReservationDateError: ValidationError[];
  giftRedemptionCenterError: ValidationError[];
}

interface StateProps {
  completed: boolean;
  eligibility: string;
  giftReservationEnd: string;
  programName: string;
  redemptionCode: string;
  giftRedemptionDates: string[];
  giftRedemptionCenters: object;
  giftReservationDate: string;
  giftRedemptionCenter: string;
}

interface OwnProps {
}

export interface DispatchProps {
  initGiftRedemptionPage: () => void;
  updateGiftRedemptionForm: (formFields: GiftRedemptionFormFields) => void;
  submitGiftRedemption: () => void;
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class GiftRedemption extends React.Component<Props, State> {
  private giftReservationDateValidator: Validator;
  private giftRedemptionCenterValidator: Validator;

  constructor(props: Props) {
    super(props);
    this.state = {
      giftReservationDateError: null,
      giftRedemptionCenterError: null,
    };

    this.giftReservationDateValidator = new Validator(FormFields.giftReservationDate.rules, { strict: false });
    this.giftRedemptionCenterValidator = new Validator(FormFields.giftRedemptionCenter.rules, { strict: false });

    this.renderGiftRedemptionForm = this.renderGiftRedemptionForm.bind(this);
    this.renderRedemptionDateOptions = this.renderRedemptionDateOptions.bind(this);
    this.renderRedemptionCenterOptions = this.renderRedemptionCenterOptions.bind(this);
    this.renderAcknowledgement = this.renderAcknowledgement.bind(this);
    this.renderExpiry = this.renderExpiry.bind(this);

    this.handleReservationDateChange = this.handleReservationDateChange.bind(this);
    this.handleRedemptionCenterChange = this.handleRedemptionCenterChange.bind(this);

    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }

  public componentDidMount(): void {
    const { initGiftRedemptionPage } = this.props;
    initGiftRedemptionPage();
  }

  public render(): any {
    const { t, theme } = this.props;
    const style = GiftRedemptionStyle(theme);
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:gift-redemption")}
        metaPath="gift-redemption"
      >
        <Container className={style.mainContainer}>
          {this.renderGiftRedemption()}
        </Container>
      </Layout>
    );
  }

  private renderGiftRedemption(): any {
    const { completed, eligibility, giftReservationEnd } = this.props;
    const reservationEnd = Moment().isAfter(Moment(giftReservationEnd, "YYYY-MM-DD"));
    if ((eligibility !== null && eligibility !== undefined) && (giftReservationEnd !== null && giftReservationEnd !== undefined) && (completed !== null && completed !== undefined)) {
      return completed ? this.renderAcknowledgement() : reservationEnd || !eligibility ? this.renderExpiry() : this.renderGiftRedemptionForm();
    }
  }

  private renderGiftRedemptionForm(): any {
    const { giftReservationDateError, giftRedemptionCenterError } = this.state;
    const { giftReservationEnd, giftReservationDate, giftRedemptionCenter, t, theme, programName, redemptionCode } = this.props;
    const style = GiftRedemptionStyle(theme);
    const giftReservationDateMessage = giftReservationDateError ? t(FormFields.giftReservationDate.errorMessages[giftReservationDateError[0].name]) : null;
    const giftRedemptionCenterMessage = giftRedemptionCenterError ? t(FormFields.giftRedemptionCenter.errorMessages[giftRedemptionCenterError[0].name]) : null;
    const disabled = !giftReservationDate ||  !giftRedemptionCenter;
    return (
      <Card className={style.cardContainer}>
        <CardHeader>
          <CardTitle>{t("giftRedemption:form:title", {gift: programName})}</CardTitle>
        </CardHeader>
        <CardContent>
          <Row className={cx(style.formFieldRow)}>
            <Column xs={24}>
              <div
                dangerouslySetInnerHTML={{__html: t("giftRedemption:form:lead-in", {
                  gift: programName,
                  giftReservationEnd,
                })}}
              />
            </Column>
          </Row>
          <Row className={cx(style.formFieldRow)}>
            <Column xs={24}>
              <FormField label={t("giftRedemption:form:redemption-code")} />
              <Input
                value={redemptionCode}
                disabled={true}
              />
            </Column>
          </Row>
          <Row className={cx(style.formFieldRow)}>
            <Column xs={24}>
              <FormField label={t("giftRedemption:form:reservation-date")} />
              <Select
                onChange={this.handleReservationDateChange}
                // onFocus={this.handleEmploymentStatusFocus}
                value={giftReservationDate}
                data-cta-name="input-reservation_date"
              >
                {this.renderRedemptionDateOptions()}
              </Select>
              <FieldError errorMessage={giftReservationDateMessage} />
            </Column>
          </Row>
          {giftReservationDate ? <Row className={cx(style.formFieldRow)}>
            <Column xs={24}>
              <FormField label={t("giftRedemption:form:redemption-center")} />
              {this.renderRedemptionCenterOptions()}
              <FieldError errorMessage={giftRedemptionCenterMessage} />
            </Column>
          </Row> : null}
          <Row className={cx(style.formFieldRow)}>
            <Column md={8} xs={24}>
              <PrimaryButton disabled={disabled} onClick={this.handleSubmitButtonClick}>{t("giftRedemption:form:submit-button")}</PrimaryButton>
            </Column>
          </Row>
        </CardContent>
      </Card>
    );
  }

  private renderAcknowledgement(): any {
    const { t, theme } = this.props;
    const style = GiftRedemptionStyle(theme);
    return (
      <Card className={style.cardContainer}>
        <CardHeader>
          <CardTitle>{t("giftRedemption:acknowledgement:title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div dangerouslySetInnerHTML={{__html: t("giftRedemption:acknowledgement:message")}}/>
        </CardContent>
      </Card>
    );
  }

  private renderExpiry(): any {
    const { t, theme } = this.props;
    const style = GiftRedemptionStyle(theme);
    return (
      <Card className={style.cardContainer}>
        <CardHeader>
          <CardTitle>{t("giftRedemption:expiry:title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div  dangerouslySetInnerHTML={{__html: t("giftRedemption:expiry:message")}}/>
        </CardContent>
      </Card>
    );
  }

  private renderRedemptionDateOptions(): any {
    const { giftRedemptionDates } = this.props;
    return giftRedemptionDates ? giftRedemptionDates.map((date, id) => {
      return (
        <Option
          key={`gift-redemption-date-${id}`}
          value={date}
        >
          {date}
        </Option>
      );
    }) : null;
  }

  private renderRedemptionCenterOptions(): any {
    const { giftRedemptionCenters, giftRedemptionCenter } = this.props;
    return giftRedemptionCenters ? Object.keys(giftRedemptionCenters).map((center, id) => {
      const centerInfo = giftRedemptionCenters[center];
      return (
        <div className={cx("margin-top-medium")} key={`gift-redemption-center-${id}`}>
          <Checkbox
            className={cx("vertical-align-top")}
            onChange={this.handleRedemptionCenterChange}
            value={center}
            data-cta-name="input-redemption_center"
            checked={giftRedemptionCenter === center}
          >
            <p className="margin-remove vertical-align-top padding-top-medium">
              {`${centerInfo.name} ${centerInfo.address} ${centerInfo.tel}`}
            </p>
          </Checkbox>
        </div>
      );
    }) : null;
  }

  private handleReservationDateChange(): void {
    const { updateGiftRedemptionForm } = this.props;
    const value = event.target.value;
    updateGiftRedemptionForm({
      giftReservationDate: value,
    });
  }

  private handleRedemptionCenterChange(): void {
    const { updateGiftRedemptionForm } = this.props;
    const value = event.target.getAttribute("value");
    updateGiftRedemptionForm({
      giftRedemptionCenter: value,
    });
  }

  private handleSubmitButtonClick(): void {
    const { giftReservationDate, giftRedemptionCenter, submitGiftRedemption } = this.props;

    const giftReservationDateError = this.giftReservationDateValidator.validate(giftReservationDate);
    const giftRedemptionCenterError = this.giftRedemptionCenterValidator.validate(giftRedemptionCenter);

    if (!giftReservationDateError && !giftRedemptionCenterError) {
      submitGiftRedemption();
    }
  }
}

const mapStateToProps = (state: ImmutableRootState): StateProps => {
  const giftRedemption = state.get("giftRedemption");
  const formFields = giftRedemption.get("formFields");
  return {
    completed: giftRedemption.get("completed"),
    programName: giftRedemption.get("programName"),
    redemptionCode: giftRedemption.get("redemptionCode"),
    eligibility: giftRedemption.get("eligibility"),
    giftReservationEnd: giftRedemption.get("giftReservationEnd"),
    giftRedemptionDates: giftRedemption.get("giftRedemptionDates"),
    giftRedemptionCenters: giftRedemption.get("giftRedemptionCenters"),
    giftReservationDate: formFields.giftReservationDate,
    giftRedemptionCenter: formFields.giftRedemptionCenter,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  initGiftRedemptionPage: () => {
    dispatch(PageActions.initGiftRedemptionPage());
  },
  updateGiftRedemptionForm: (formFields: GiftRedemptionFormFields) => {
    dispatch(GiftRedemptionActions.updateGiftRedemptionForm(formFields));
  },
  submitGiftRedemption: () => {
    dispatch(GiftRedemptionActions.submitGiftRedemption());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GiftRedemption);
