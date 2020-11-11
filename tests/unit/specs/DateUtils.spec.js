import {
  isValidDate,
  getMonthName,
  getMonthNameAbbr,
  getDayNameAbbr,
  setFullYear,
  setMonth,
  setDate,
  getMinutes,
  getHours,
  getDay,
  daysInMonth,
  formatDate,
  createDateArray,
  getFullYear,
  getMonth,
  getDate,
} from '@/components/datepicker/utils/DateUtils';
import * as Langlist from '@/components/datepicker/locale';

let en;

describe('DateUtils', () => {
  beforeEach(()=>{
    en = Langlist.data['en'];
  })
  it('should detect invalid date object', () => {
    expect(isValidDate(null)).toEqual(false);
    expect(isValidDate(123)).toEqual(false);
    expect(isValidDate('abc')).toEqual(false);
    expect(isValidDate({})).toEqual(false);
    expect(isValidDate(new Date())).toEqual(true);
  });

  it('should give correct days in a month', () => {
    expect(daysInMonth(2020, 0)).toEqual(31);
    expect(daysInMonth(2020, 1)).toEqual(29);
    expect(daysInMonth(2015, 1)).toEqual(28);
    expect(daysInMonth(2020, 2)).toEqual(31);
    expect(daysInMonth(2020, 3)).toEqual(30);
    expect(daysInMonth(2020, 4)).toEqual(31);
    expect(daysInMonth(2020, 5)).toEqual(30);
    expect(daysInMonth(2020, 6)).toEqual(31);
    expect(daysInMonth(2020, 7)).toEqual(31);
    expect(daysInMonth(2020, 8)).toEqual(30);
    expect(daysInMonth(2020, 9)).toEqual(31);
    expect(daysInMonth(2020, 10)).toEqual(30);
    expect(daysInMonth(2020, 11)).toEqual(31);
  });

  it('should format date strings correctly in English', () => {
    expect(formatDate(new Date(2020, 0, 1), 'd MMMM yyyy', en)).toEqual('1 January 2020');
    expect(formatDate(new Date(2020, 0, 9), 'dd MMM yyyy', en)).toEqual('09 Jan 2020');
    expect(formatDate(new Date(2020, 0, 9), 'dd MMM yy', en)).toEqual('09 Jan 20');
    expect(formatDate(new Date(2020, 2, 9), 'yyyy-MM-dd', en)).toEqual('2020-03-09');
    expect(formatDate(new Date(2020, 2, 9), 'dsu MMMM yyyy', en)).toEqual('9th March 2020');
    expect(formatDate(new Date(2020, 2, 1), 'dsu MMMM yyyy', en)).toEqual('1st March 2020');
    expect(formatDate(new Date(2020, 2, 2), 'dsu MMMM yyyy', en)).toEqual('2nd March 2020');
    expect(formatDate(new Date(2020, 2, 3), 'dsu MMMM yyyy', en)).toEqual('3rd March 2020');
    expect(formatDate(new Date(2020, 7, 2), 'D dsu MMMM yyyy', en)).toEqual('Sun 2nd August 2020');
    expect(formatDate(new Date(2020, 8, 1), 'D dsu MMMM yyyy', en)).toEqual('Tue 1st September 2020');
    expect(formatDate(new Date(2020, 7, 7), 'D dsu MMMM yyyy', en)).toEqual('Fri 7th August 2020');
    expect(formatDate(new Date(2020, 11, 2), 'dd MMM yyyy', en)).toEqual('02 Dec 2020');
  });

  it('should give the correct day', () => {
    expect(formatDate(new Date(2020, 0, 1), 'D', en)).toEqual('Wed');
  });

  it('can create an array of dates', () => {
    const start = new Date(2020, 9, 12);
    const end = new Date(2020, 9, 16);
    const dates = createDateArray(start, end);
    expect(dates.length).toEqual(5);
    let day = 12;
    dates.forEach((date) => {
      expect(date.getDate()).toEqual(day);
      day++;
    });
  });

  it('gives days in a month', () => {
    expect(daysInMonth(2020, 0)).toEqual(31);
    expect(daysInMonth(2020, 1)).toEqual(29);
    expect(daysInMonth(2020, 2)).toEqual(31);
  });

  it('getDayNameAbbr moans if date is not a Date object', () => {
    expect(() => getDayNameAbbr(123, en.months)).toThrow(TypeError);
  });

  it('getMonthName moans if date is not a Date object', () => {
    expect(() => getMonthName('string', en.months)).toThrow(TypeError);
  });

  it('getMonthName complains if missing months array', () => {
    expect(() => getMonthName(new Date())).toThrow(Error);
  });

  it('getMonthName accepts a number', () => {
    expect(getMonthName(3, en.months)).toEqual('April');
  });

  it('getMonthName accepts a Date object', () => {
    expect(getMonthName(new Date(2016, 9, 10), en.months)).toEqual('October');
  });

  it('getMonthNameAbbr moans if date is not a Date object', () => {
    expect(() => getMonthNameAbbr('abc', en.months)).toThrow(TypeError);
  });

  it('getMonthNameAbbr complains if missing months array', () => {
    expect(() => getMonthNameAbbr(new Date())).toThrow(Error);
  });

  it('getMonthNameAbbr accepts a Date object', () => {
    expect(getMonthNameAbbr(new Date(2016, 9, 10), en.monthsAbbr)).toEqual('Oct');
  });

  it('getMonthName accepts a number', () => {
    expect(getMonthNameAbbr(3, en.monthsAbbr)).toEqual('Apr');
  });
});

describe('daysInMonth', () => {
  it('should give the correct days in a month', () => {
    expect(daysInMonth(2017, 0)).toEqual(31); // Jan
    expect(daysInMonth(2017, 1)).toEqual(28); // Feb
    expect(daysInMonth(2017, 2)).toEqual(31); // Mar
    expect(daysInMonth(2017, 3)).toEqual(30); // Apr
    expect(daysInMonth(2017, 4)).toEqual(31); // May
    expect(daysInMonth(2017, 5)).toEqual(30); // Jun
    expect(daysInMonth(2017, 6)).toEqual(31); // Jul
    expect(daysInMonth(2017, 7)).toEqual(31); // Aug
    expect(daysInMonth(2017, 8)).toEqual(30); // Sep
    expect(daysInMonth(2017, 9)).toEqual(31); // Oct
    expect(daysInMonth(2017, 10)).toEqual(30); // Nov
    expect(daysInMonth(2017, 11)).toEqual(31); // Dec
  });
});

const getAmbiguousDate = (_) => {
  const timezoneOffset = new Date().getTimezoneOffset() / 60;
  const ambiguousHour = 25 - timezoneOffset;
  const ambiguousDate = new Date(2018, 11, 31, ambiguousHour);
  return ambiguousDate;
};

describe('UTC functions', () => {
  // const utcUtils = makeDateUtils(true)

  it('getFullYear', () => {
    const date = getAmbiguousDate();
    expect(getFullYear(date)).toEqual(date.getFullYear());
    expect(getFullYear(date, true)).toEqual(date.getUTCFullYear());
  });

  it('getMonth', () => {
    const date = getAmbiguousDate();
    expect(getMonth(date)).toEqual(date.getMonth());
    expect(getMonth(date, true)).toEqual(date.getUTCMonth());
  });

  it('getDate', () => {
    const date = getAmbiguousDate();
    expect(getDate(date)).toEqual(date.getDate());
    expect(getDate(date, true)).toEqual(date.getUTCDate());
  });

  it('getDay', () => {
    const date = getAmbiguousDate();
    expect(getDay(date)).toEqual(date.getDay());
    expect(getDay(date, true)).toEqual(date.getUTCDay());
  });

  it('getHours', () => {
    const date = getAmbiguousDate();
    expect(getHours(date)).toEqual(date.getHours());
    expect(getHours(date, true)).toEqual(date.getUTCHours());
  });

  it('getMinutes', () => {
    const date = getAmbiguousDate();
    expect(getMinutes(date)).toEqual(date.getMinutes());
    expect(getMinutes(date, true)).toEqual(date.getUTCMinutes());
  });

  it('setFullYear', () => {
    const date = getAmbiguousDate();
    expect(setFullYear(date, 2018)).toEqual(date.setFullYear(2018));
    expect(setFullYear(date, 2018, true)).toEqual(date.setUTCFullYear(2018));
  });

  it('setMonth', () => {
    const date = getAmbiguousDate();
    expect(setMonth(date, 11)).toEqual(date.setMonth(11));
    expect(setMonth(date, 11, true)).toEqual(date.setUTCMonth(11));
  });

  it('setDate', () => {
    const date = getAmbiguousDate();
    expect(setDate(date, 31)).toEqual(date.setDate(31));
    expect(setDate(date, 31, true)).toEqual(date.setUTCDate(31));
  });
 
});
