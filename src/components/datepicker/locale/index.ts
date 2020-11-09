const af = (): any => {
  const langName = 'Afrikaans';
  const monthFullName = [
    'Januarie',
    'Februarie',
    'Maart',
    'April',
    'Mei',
    'Junie',
    'Julie',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const shortName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const rtl = false;
  const ymd = false;
  const yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days,
    yearSuffix,
    ymd,
    rtl,
    langName,
    // tbd: need fullName of days
    daysNames: days,
  };
};

const en = (): any => {
  const langName = 'English';
  const monthFullName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const shortName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const rtl = false;
  const ymd = false;
  const yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days,
    language: langName,
    yearSuffix,
    ymd,
    rtl,
    langName,
    daysNames,
  };
};

export const data = {
  af: af(),
  en: en(),
};
