/* eslint-disable */

const utils = {
  /**
   * @type {Boolean}
   */
  useUtc: false,

  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear(date: Date): number {
    return this.useUtc ? date.getUTCFullYear() : date.getFullYear();
  },

  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth(date: Date): number {
    return this.useUtc ? date.getUTCMonth() : date.getMonth();
  },

  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate(date: Date): number {
    return this.useUtc ? date.getUTCDate() : date.getDate();
  },

  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay(date: Date): number {
    return this.useUtc ? date.getUTCDay() : date.getDay();
  },

  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours(date: Date): number {
    return this.useUtc ? date.getUTCHours() : date.getHours();
  },

  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes(date: Date): number {
    return this.useUtc ? date.getUTCMinutes() : date.getMinutes();
  },

  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setFullYear(date: Date, value: any): number {
    return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
  },

  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setMonth(date: Date, value: any): number {
    return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value);
  },

  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setDate(date: Date, value: any): number {
    return this.useUtc ? date.setUTCDate(value) : date.setDate(value);
  },

  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates(
    date1: { getTime: () => string | number | Date },
    date2: { getTime: () => string | number | Date }
  ): boolean {
    const d1 = new Date(date1.getTime());
    const d2 = new Date(date2.getTime());

    if (this.useUtc) {
      d1.setUTCHours(0, 0, 0, 0);
      d2.setUTCHours(0, 0, 0, 0);
    } else {
      d1.setHours(0, 0, 0, 0);
      d2.setHours(0, 0, 0, 0);
    }
    return d1.getTime() === d2.getTime();
  },

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate(date: { getTime: () => number }): boolean {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false;
    }
    return !Number.isNaN(date.getTime());
  },

  /**
   * Return abbreviated week day name
   * @param {Date} date
   * @param {Array} days
   * @return {String}
   */
  getDayNameAbbr(date: any, days: { [x: string]: any }): number {
    if (typeof date !== 'object') {
      throw TypeError('Invalid Type');
    }
    return days[this.getDay(date)];
  },

  /**
   * Return name of the month
   * @param {Number|Date} month
   * @param {Array} months
   * @return {String}
   */
  getMonthName(month: string | number, months: any[]): number {
    if (!months) {
      throw Error('missing 2nd parameter Months array');
    }
    if (typeof month === 'object') {
      return months[this.getMonth(month)];
    }
    if (typeof month === 'number') {
      return months[month];
    }
    throw TypeError('Invalid type');
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date} month
   * @param {Array} monthsAbbr
   * @return {String}
   */
  getMonthNameAbbr(month: string | number, monthsAbbr: any[]): number {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array');
    }
    if (typeof month === 'object') {
      return monthsAbbr[this.getMonth(month)];
    }
    if (typeof month === 'number') {
      return monthsAbbr[month];
    }
    throw TypeError('Invalid type');
  },

  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} month
   * @return {Number}
   */
  daysInMonth(year: number, month: string | number): number {
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
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix(day: any): string {
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
  },

  /**
   * Formats date object
   * @param {Date} date
   * @param {String} format
   * @param {Object} translation
   * @return {String}
   */
  formatDate(
    date: Date,
    format: {
      replace: (
        arg0: RegExp,
        arg1: string
      ) => {
        (): any;
        new(): any;
        replace: {
          (arg0: RegExp, arg1: any): {
            (): any;
            new(): any;
            replace: { (arg0: RegExp, arg1: number): string; new(): any };
          };
          new(): any;
        };
      };
    },
    translation: { months: any; monthsAbbr: any; days: any }
  ): string {
    const year = this.getFullYear(date);
    const month = this.getMonth(date) + 1;
    const day = this.getDate(date);
    const str = format
      .replace(/dd/, `0${day}`.slice(-2))
      .replace(/d/, day)
      .replace(/yyyy/, year)
      .replace(/yy/, String(year).slice(2))
      .replace(/MMMM/, this.getMonthName(this.getMonth(date), translation.months) as any)
      .replace(/MMM/, this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr) as any)
      .replace(/MM/, `0${month}`.slice(-2))
      .replace(/M(?!a|ä|e)/, month.toString())
      .replace(/su/, this.getNthSuffix(this.getDate(date)))
      .replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days) as any);
    return str;
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray(start: number, end: number): Date[] {
    const dates = []
    while (start <= end) {
      dates.push(new Date(start));
      start = this.setDate(new Date(start), this.getDate(new Date(start)) + 1);
    }
    return dates;
  },

  /**
   * method used as a prop validator for input values
   * @param {*} val
   * @return {Boolean}
   */
  validateDateInput(val: any): boolean {
    return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
  },

  /**
   * Converts a string to a Date object
   * @param {String|Date} value
   * @return {Date}
   */
  stringToDate(value: string | Date): Date {
    if (typeof value === 'string') {
      return new Date(value);
    }
    return value;
  }
}

export const makeDateUtils = (useUtc: boolean) => ({ ...utils, useUtc })

export default {
  ...utils
}
