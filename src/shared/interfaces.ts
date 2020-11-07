export interface IValidation {
  isValid: boolean;
  message: string;
}

export interface IValidationRules {
  required: (value: any) => boolean;
}

export interface IValidationMessages {
  required: string;
  email: string;
  mobile: string;
  integer: string;
  regex: string;
  inverseRegex: string;
  maxValue: string;
  minValue: string;
  maxLength: string;
  minLength: string;
  pan: string;
  aadhar: string;
  gstin: string;
  pincode: string;
  alphaNumeric: string;
  alphaNumericWithSpace: string;
  multipleOf: string;
}

export interface IValidationRule {
  name: string;
  message?: string;
  minValue?: number;
  maxValue?: number;
  expression?: string;
}
