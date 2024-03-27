import { MomentInput } from "moment";

export interface RequiredConfig {
  allowEmpty?: boolean;
}

export interface DateConfig {
  format: string;
  before?: MomentInput;
  after?: MomentInput;
}

export interface PhoneConfig {
  region?: string;
}

export default interface Rule {
  required?: boolean | RequiredConfig;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  number?: boolean;
  format?: RegExp;
  date?: DateConfig;
  dateAfter?: DateConfig;
  dateBefore?: DateConfig;
  phone?: boolean | PhoneConfig;
  [rule: string]: any;
}
