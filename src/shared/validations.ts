/* eslint-disable comma-dangle */
import { isNullUndefined } from './utils';
import { ValidationMessages } from './enum';
import { IValidation, IValidationRules, IValidationRule } from './interfaces';

// rules
/**
 * Required validation
 * @param value
 */
const required = (value: any): boolean => {
  if (isNullUndefined(value)) {
    return false;
  }
  if (typeof value === 'object' && !Object.keys(value).length) {
    if (Object.prototype.toString.call(value) === '[object Date]' && value) {
      return true;
    }
    return false;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }
  if (value.constructor === Array && value.length <= 0) {
    return false;
  }
  return true;
};

const validationRules: IValidationRules = {
  required
};

/**
 *
 * @param validationName
 * @param validationObj
 * @param value
 */
const callValidator = (validationName: string, validationObj?: any, value?: any): boolean => {
  let isValid = true;
  switch (validationName) {
    default:
      if ((validationRules as any)[validationName]) {
        isValid = (validationRules as any)[validationName](value);
      }
      break;
  }
  return isValid;
};

// helper validation functions
/**
 *
 * @param value
 * @param validationArray
 */
export const validationHandler = (value: any, validationArray: IValidationRule[]): IValidation => {
  const validationObject: IValidation = { isValid: true, message: '' };

  for (const validation of validationArray) {
    validationObject.isValid = callValidator(validation.name, validation, value);
    validationObject.message = '';
    if (!validationObject.isValid) {
      // checking if custom message is passed if not then use standard msgs
      if (validation.message) {
        validationObject.message = validation.message;
      } else {
        validationObject.message = (ValidationMessages as any)[validation.name];
      }
      // break if any one validation is failed
      break;
    }
  }
  return validationObject;
};
