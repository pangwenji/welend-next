import { PhoneNumberUtil } from "google-libphonenumber";
import * as moment from "moment";

import Rule, {
  DateConfig,
  PhoneConfig,
  RequiredConfig,
} from "./Rule";

interface Options {
  required: RequiredConfig;
}

interface Config {
  strict: boolean;
}

export interface ValidationError {
  name: string;
  args: string[];
}

export const NUMBER_FORMAT = /^([-]{0,1})([\d]+)(([.]{1}[\d]{1,}){0,})$/;

class Validator {
  private config: Config;
  private rules: Rule[];
  private options: Options;

  constructor(rules?: Rule[], config?: Config) {
    this.rules = rules || [];
    this.options = {
      required: {
        allowEmpty: false,
      },
    };
    this.config = { strict: true, ...config };
  }

  public validate = (value: any, rules: Rule[] = []) => {
    const errors: ValidationError[] = [];
    const validationRules = [...this.rules, ...rules];
    for (const rule of validationRules) {
      const name = Object.keys(rule)[0];
      let valid = true;
      let args: any[] = [];

      if (typeof rule[name] !== "function") {
        switch (name) {
          case "required":
            const requiredConfig: RequiredConfig = typeof rule[name] === "object" ?
            rule[name] as RequiredConfig : undefined;
            valid = this.required(value, requiredConfig);
            break;
          case "minLength":
            const minLength: number = rule[name];
            valid = this.minLength(value, minLength);
            args = [minLength];
            break;
          case "maxLength":
            const maxLength: number = rule[name];
            valid = this.maxLength(value, maxLength);
            args = [maxLength];
            break;
          case "min":
            const min: number = rule[name];
            valid = this.min(value, min);
            args = [min];
            break;
          case "max":
            const max: number = rule[name];
            valid = this.max(value, max);
            args = [max];
            break;
          case "number":
            valid = this.isNumber(value);
            break;
          case "boolean":
            valid = this.isBoolean(value);
            break;
          case "format":
            const formatConfig: RegExp = rule[name];
            valid = this.format(value, formatConfig);
            break;
          case "date":
            const dateConfig: DateConfig = rule[name];
            valid = this.date(value, dateConfig);
            break;
          case "dateBefore":
            const dateBeforeConfig: DateConfig = rule[name];
            valid = this.dateBefore(value, dateBeforeConfig);
            break;
          case "dateAfter":
            const dateAfterConfig: DateConfig = rule[name];
            valid = this.dateAfter(value, dateAfterConfig);
            break;
          case "phone":
            const phoneConfig: PhoneConfig = typeof rule[name] === "object" ?
            rule[name] as PhoneConfig : undefined;
            valid = this.phone(value, phoneConfig);
            break;
          default:
            throw new Error(`Invalid rule: ${name}`);
        }
      } else {
        const validate = rule[name];
        valid = validate(value);
      }

      if (!valid) {
        errors.push({ name, args });
      }
    }

    return errors.length > 0 ? errors : null;
  }

  private required = (value: any, options?: RequiredConfig) => {
    const requiredOptions: RequiredConfig = { ...this.options.required, ...options };
    if (
      !this.isDefined(value) ||
      (this.isString(value) && (value.trim() === "" && !requiredOptions.allowEmpty)) ||
      (this.isObject(value) && value === null) ||
      (Array.isArray(value) && (value.length === 0) && !requiredOptions.allowEmpty)
    ) {
      return false;
    }

    return true;
  }

  private minLength = (value: any, length: number) => {
    return this.isString(value) && value.length >= length;
  }

  private maxLength = (value: any, length: number) => {
    return this.isString(value) && value.length <= length;
  }

  private min = (value: any, min: number) => {
    if (this.config.strict) {
      return this.isNumber(value) && value >= min;
    } else {
      if (this.isNumber(value)) {
        value = parseFloat(value);
        return value >= min;
      } else {
        return false;
      }
    }
  }

  private max = (value: any, max: number) => {
    if (this.config.strict) {
      return this.isNumber(value) && value <= max;
    } else {
      if (this.isNumber(value)) {
        value = parseFloat(value);
        return value <= max;
      } else {
        return false;
      }
    }
  }

  private format = (value: any, format: RegExp) => {
    return this.isString(value) && value.match(format);
  }

  private date = (value: any, options?: DateConfig) => {
    const date = moment(value, options.format, true);
    if (date.isValid()) {
      if (options.before && !date.isBefore(options.before)) {
        return false;
      }
      if (options.after && !date.isAfter(options.after)) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  private dateAfter = (value: any, options?: DateConfig) => {
    const date = moment(value, options.format, true);
    return date.isValid() && options.after && date.isSameOrAfter(options.after);
  }

  private dateBefore = (value: any, options?: DateConfig) => {
    const date = moment(value, options.format, true);
    return date.isValid() && options.before && date.isSameOrBefore(options.before);
  }

  private phone = (value: any, options: any) => {
    const phoneUtil = PhoneNumberUtil.getInstance();
    try {
      const region = options ? options.region : "";
      value = !options && !value.match(/\+[0-9]*/) ? `+${value}` : value;
      const phone = phoneUtil.parseAndKeepRawInput(value, region);
      return phoneUtil.isValidNumber(phone);
    } catch (error) {
      return false;
    }
  }

  private isNaN = (value: any) => {
    return Number.isNaN(value);
  }

  private isNumber = (value: any) => {
    if (this.config.strict || typeof value === "number") {
      return typeof value === "number" && !this.isNaN(value);
    } else if (typeof value === "string") {
      const matches = value.match(NUMBER_FORMAT);
      return matches ? true : false;
    } else {
      return false;
    }
  }

  private isObject = (value: any) => {
    return value === Object(value);
  }

  private isString = (value: any) => {
    return typeof value === "string";
  }

  private isArray = (value: any) => {
    return {}.toString.call(value) === "[object Array]";
  }

  private isDefined = (value: any) => {
    return value !== null && value !== undefined;
  }

  private isBoolean = (value: any) => {
    return typeof value === "boolean";
  }
}

export default Validator;
