import * as moment from "moment";
import config from "../config";
import AppConfig from "./AppConfig";

// we can extract this out later
// tslint:disable-next-line:max-line-length
const EMAIL_FORMAT = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const HKID_FORMAT = /^([A-Z]{1,2})([0-9]{6})([A|0-9])$/;
const ALPHABET = /^[A-z\. ]+$/;
const NUMERIC = /^[0-9]+$/;
const ADDRESS_FORMAT = /^[a-z\d-\/,. |():'#/\r\n\r]*\d+[a-z\d-\/,. |():'#/\r\n\r]*$/gi;

const validateHkId = (value: any) => {
  if (typeof value !== "string") {
    return false;
  }
  value = value.toUpperCase();

  const matches = value.match(HKID_FORMAT);
  // pattern not match
  if (!matches) {
    return false;
  }

  const idPart = matches[1] + matches[2];
  const CHARACTER_SET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let total = (idPart.length === 7) ? 36 * 9 : 0;
  let weight = 2;

  for (let i = idPart.length - 1; i >= 0; --i) {
    const character = CHARACTER_SET.indexOf(idPart[i]);
    total += (character * weight);
    weight++;
  }

  const remainder = total % 11;
  const checkDigit = (remainder === 0) ? "0" : CHARACTER_SET[11 - remainder];
  return checkDigit === matches[3][0];
};

const minAgeDate = moment().subtract(AppConfig.minAge, "years");

const mobileRule = config.nodeEnv === "production" || config.nodeEnv === "staging" ?
  [
    { required: true },
    { format: NUMERIC },
    { phone: {
      region: "HK",
    }},
  ] : [
    { required: true },
    { format: NUMERIC },
  ];

export default {
  amount: {
    rules: [
      { required: true },
      { number: true },
      { min: 5000 },
      { max: 600000 },
    ],
    errorMessages: {
      required: "common:form-field-error.amount.required",
      number: "common:form-field-error.amount.number",
      min: "common:form-field-error.amount.min",
      max: "common:form-field-error.amount.max",
    },
  },
  tenor: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.tenor.required",
    },
  },
  firstName: {
    rules: [
      { required: true },
      { minLength: 0 },
      { format: ALPHABET },
    ],
    errorMessages: {
      required: "common:form-field-error.first-name.required",
      minLength: "common:form-field-error.first-name.min-length",
      format: "common:form-field-error.first-name.format",
    },
  },
  lastName: {
    rules: [
      { required: true },
      { minLength: 0 },
      { format: ALPHABET },
    ],
    errorMessages: {
      required: "common:form-field-error.last-name.required",
      minLength: "common:form-field-error.last-name.min-length",
      format: "common:form-field-error.last-name.format",
    },
  },
  gender: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.gender.required",
    },
  },
  birthday: {
    rules: [
      { required: true },
      { date: { format: "YYYY-MM-DD"} },
      { dateBefore: { format: "YYYY-MM-DD", before: minAgeDate } },
    ],
    errorMessages: {
      required: "common:form-field-error.birthday.required",
      date: "common:form-field-error.birthday.date",
      dateBefore: "common:form-field-error.birthday.date-before",
    },
  },
  email: {
    rules: [
      { required: true },
      { format: EMAIL_FORMAT },
    ],
    errorMessages: {
      required: "common:form-field-error.email.required",
      format: "common:form-field-error.email.format",
    },
  },
  emailLogin: {
    rules: [
      { format: EMAIL_FORMAT },
    ],
    errorMessages: {
      format: "common:form-field-error.email.format",
    },
  },
  hkid: {
    rules: [
      { required: true },
      { hkid: validateHkId },
    ],
    errorMessages: {
      required: "common:form-field-error.hkid.required",
      hkid: "common:form-field-error.hkid.hkid",
    },
  },
  monthlyIncome: {
    rules: [
      { required: true },
      { min: 8000 },
    ],
    errorMessages: {
      required: "common:form-field-error.monthly-income.required",
      min: "common:form-field-error.monthly-income.min",
    },
  },
  mobile: {
    rules: mobileRule,
    errorMessages: {
      required: "common:form-field-error.mobile.required",
      format: "common:form-field-error.mobile.format",
      phone: "common:form-field-error.mobile.phone",
    },
  },
  residentialAddress: {
    rules: [
      { required: true },
      { minLength: 10 },
      { format: ADDRESS_FORMAT },
    ],
    errorMessages: {
      required: "common:form-field-error.residential-address.required",
      minLength: "common:form-field-error.residential-address.min-length",
      format: "common:form-field-error.residential-address.format",
    },
  },
  educationLevel: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.education-level.required",
    },
  },
  bankrupted: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.bankrupted.required",
    },
  },
  employmentStatus: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.employment-status.required",
    },
  },
  employerName: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.employer-name.required",
    },
  },
  workPhone: {
    rules: [
      { required: true },
      { format: NUMERIC },
      { phone: {
        region: "HK",
      }},
    ],
    errorMessages: {
      required: "common:form-field-error.work-phone.required",
      format: "common:form-field-error.work-phone.format",
      phone: "common:form-field-error.work-phone.phone",
    },
  },
  businessNature: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.business-nature.required",
    },
  },
  position: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.position.required",
    },
  },
  residentialStatus: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.residential-status.required",
    },
  },
  residentialRepayment: {
    rules: [
      { required: true },
      { min: 0 },
    ],
    errorMessages: {
      required: "common:form-field-error.residential-repayment.required",
      min: "common:form-field-error.residential-repayment.min",
    },
  },
  disbursementAccount: {
    rules: [
      { required: true },
      { format: NUMERIC },
    ],
    errorMessages: {
      required: "common:form-field-error.disbursement-account.required",
      format: "common:form-field-error.disbursement-account.format",
    },
  },
  yearOfServiceYearPartial: {
    rules: [
      { required: true },
      { number: true },
      { min: 0 },
      { max: 99 },
    ],
    errorMessages: {
      required: "common:form-field-error.year-of-service-year-partial.required",
      number: "common:form-field-error.year-of-service-year-partial.number",
      min: "common:form-field-error.year-of-service-year-partial.min",
      max: "common:form-field-error.year-of-service-year-partial.max",
    },
  },
  yearOfServiceMonthPartial: {
    rules: [
      { required: true },
      { number: true },
      { min: 0 },
      { max: 11 },
    ],
    errorMessages: {
      required: "common:form-field-error.year-of-service-month-partial.required",
      number: "common:form-field-error.year-of-service-month-partial.number",
      max: "common:form-field-error.year-of-service-month-partial.max",
      min: "common:form-field-error.year-of-service-month-partial.min",
    },
  },
  cashoutAmount: {
    rules: [],
    errorMessages: {
      max: "common:form-field-error.cashout-amount.max",
    },
  },
  giftReservationDate: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.residential-status.required",
    },
  },
  giftRedemptionCenter: {
    rules: [
      { required: true },
    ],
    errorMessages: {
      required: "common:form-field-error.residential-status.required",
    },
  },
};
