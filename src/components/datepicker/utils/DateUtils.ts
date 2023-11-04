/* eslint-disable */

/**
 * Returns the full year, using UTC or not
 * @param {Date} date
 */
export const getFullYear = (date: Date, useUtc = false): number => {
  return useUtc ? date.getUTCFullYear() : date.getFullYear();
};

/**
 * Returns the month, using UTC or not
 * @param {Date} date
 */
export const getMonth = (date: Date, useUtc = false): number => {
  return useUtc ? date.getUTCMonth() : date.getMonth();
};

/**
 * Returns the date, using UTC or not
 * @param {Date} date
 */
export const getDate = (date: Date, useUtc = false): number => {
  return useUtc ? date.getUTCDate() : date.getDate();
};

/**
 * Returns the day, using UTC or not
 * @param {Date} date
 */
export const getDay = (date: Date, useUtc = false): number => {
  return useUtc ? date.getUTCDay() : date.getDay();
};

/**
 * Returns the hours, using UTC or not
 * @param {Date} date
 */
export const getHours = (date: Date, useUtc = false): number => {
  return useUtc ? date.getUTCHours() : date.getHours();
};

/**
 * Returns the minutes, using UTC or not
 * @param {Date} date
 */
export const getMinutes = (date: Date, useUtc = false): number => {
  return useUtc ? date.getUTCMinutes() : date.getMinutes();
};

/**
 * Sets the full year, using UTC or not
 * @param {Date} date
 */
export const setFullYear = (date: Date, value: any, useUtc = false): number => {
  return useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
};

/**
 * Sets the month, using UTC or not
 * @param {Date} date
 */
export const setMonth = (date: Date, value: any, useUtc = false): number => {
  return useUtc ? date.setUTCMonth(value) : date.setMonth(value);
};

/**
 * Sets the date, using UTC or not
 * @param {Date} date
 * @param {Number} value
 */
export const setDate = (date: Date, value: any, useUtc = false): number => {
  return useUtc ? date.setUTCDate(value) : date.setDate(value);
};

/**
 * Check if date1 is equivalent to date2, without comparing the time
 * @see https://stackoverflow.com/a/6202196/4455925
 * @param {Date} date1
 * @param {Date} date2
 */
export const compareDates = (
  date1: { getTime: () => string | number | Date },
  date2: { getTime: () => string | number | Date },
  useUtc = false
): boolean => {
  const d1 = new Date(date1.getTime());
  const d2 = new Date(date2.getTime());

  if (useUtc) {
    d1.setUTCHours(0, 0, 0, 0);
    d2.setUTCHours(0, 0, 0, 0);
  } else {
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
  }
  return d1.getTime() === d2.getTime();
};

/**
 * Validates a date object
 * @param {Date} date - an object instantiated with the new Date constructor
 * @return {Boolean}
 */
export const isValidDate = (date: { getTime: () => number }): boolean => {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return false;
  }
  return !Number.isNaN(date.getTime());
};

/**
 * Return abbreviated week day name
 * @param {Date}
 * @param {Array}
 * @return {String}
 */
export const getDayNameAbbr = (date: any, days: { [x: string]: any }): number => {
  if (typeof date !== 'object') {
    throw TypeError('Invalid Type');
  }
  return days[getDay(date)];
};

/**
 * Return name of the month
 * @param {Number|Date}
 * @param {Array}
 * @return {String}
 */
export const getMonthName = (month: string | number, months: any[]): number => {
  if (!months) {
    throw Error('missing 2nd parameter Months array');
  }
  if (typeof month === 'object') {
    return months[getMonth(month)];
  }
  if (typeof month === 'number') {
    return months[month];
  }
  throw TypeError('Invalid type');
};

/**
 * Return an abbreviated version of the month
 * @param {Number|Date}
 * @return {String}
 */
export const getMonthNameAbbr = (month: string | number, monthsAbbr: any[]): number => {
  if (!monthsAbbr) {
    throw Error('missing 2nd paramter Months array');
  }
  if (typeof month === 'object') {
    return monthsAbbr[getMonth(month)];
  }
  if (typeof month === 'number') {
    return monthsAbbr[month];
  }
  throw TypeError('Invalid type');
};

/**
 * Alternative get total number of days in month
 * @param {Number} year
 * @param {Number} m
 * @return {Number}
 */

export const daysInMonth = (year: number, month: string | number): number => {
  if (/8|3|5|10/.test(month as string)) {
    return 30;
  }
  if (month === 1) {
    if ((!(year % 4) && year % 100) || !(year % 400)) {
      return 29;
    }
    return 28;
  }
  return 31;

  // return /8|3|5|10/.test(month as string)
  //   ? 30
  //   : month === 1
  //   ? (!(year % 4) && year % 100) || !(year % 400)
  //     ? 29
  //     : 28
  //   : 31;
};

/**
 * Get nth suffix for date
 * @param {Number} day
 * @return {String}
 */
export const getNthSuffix = (day: any): string => {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return 'st';
    case 2:
    case 22:
      return 'nd';
    case 3:
    case 23:
      return 'rd';
    default:
      return 'th';
  }
};

/**
 * Formats date object
 * @param {Date}
 * @param {String}
 * @param {Object}
 * @return {String}
 */
export const formatDate = (
  date: Date,
  format: {
    replace: (
      arg0: RegExp,
      arg1: string
    ) => {
      (): any;
      new (): any;
      replace: {
        (arg0: RegExp, arg1: any): {
          (): any;
          new (): any;
          replace: { (arg0: RegExp, arg1: number): string; new (): any };
        };
        new (): any;
      };
    };
  },
  translation: { months: any; monthsAbbr: any; days: any }
): string => {
  const year = getFullYear(date);
  const month = getMonth(date) + 1;
  const day = getDate(date);
  const str = format
    .replace(/dd/, `0${day}`.slice(-2))
    .replace(/d/, day)
    .replace(/yyyy/, year)
    .replace(/yy/, String(year).slice(2))
    .replace(/MMMM/, getMonthName(getMonth(date), translation.months) as any)
    .replace(/MMM/, getMonthNameAbbr(getMonth(date), translation.monthsAbbr) as any)
    .replace(/MM/, `0${month}`.slice(-2))
    .replace(/M(?!a|ä|e)/, month.toString())
    .replace(/su/, getNthSuffix(getDate(date)))
    .replace(/D(?!e|é|i)/, getDayNameAbbr(date, translation.days) as any);
  return str;
};

/**
 * Creates an array of dates for each day in between two dates.
 * @param {Date} start
 * @param {Date} end
 * @return {Array}
 */
export const createDateArray = (start: number , end: number): Date[] => {
  const dates = [];
  while (start <= end) {
    dates.push(new Date(start));
    start = setDate(new Date(start), getDate(new Date(start)) + 1);
  }
  return dates;
};

/**
 * method used as a prop validator for input values
 * @param {*} val
 * @return {Boolean}
 */
export const validateDateInput = (val: any): boolean => {
  return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
};

export const stringToDate = (value: string | Date): Date => {
  if (typeof value === 'string') {
    return new Date(value);
  }
  return value;
};
