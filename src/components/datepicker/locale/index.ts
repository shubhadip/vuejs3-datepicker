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
  const shortName = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'];
  const days = ['So.', 'Ma.', 'Di.', 'Wo.', 'Do.', 'Vr.', 'Sa.'];
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

const de = (): any => {
  const langName = 'German';
  const monthFullName = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];
  const shortName = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const daysNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
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
  const shortName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

const fr = (): any => {
  const langName = 'Français';
  const monthFullName = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  const shortName = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const daysNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
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

const hi = (): any => {
  const langName = 'Hindi';
  const monthFullName = [
    'जनवरी',
    'फ़रवरी',
    'मार्च',
    'अप्रैल',
    'मई',
    'जून',
    'जुलाई',
    'अगस्त',
    'सितंबर',
    'अक्टूबर',
    'नवंबर',
    'दिसंबर',
  ];
  const shortName = ['जन', 'फ़र', 'मार्च', 'अप्रै', 'मई', 'जून', 'जुला', 'अगस्त', 'सितं', 'अक्टू', 'नवं', 'दिसं'];
  const days = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
  const daysNames = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
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

const ja = (): any => {
  const langName = 'Japanese';
  const monthFullName = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ];
  const shortName = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const daysNames = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
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

const nl = (): any => {
  const langName = 'Dutch';
  const monthFullName = [
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'juli',
    'augustus',
    'september',
    'oktober',
    'november',
    'december',
  ];
  const shortName = ['jan.', 'feb.', 'mrt.', 'apr.', 'mei', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'];
  const days = ['zo.', 'ma.', 'di.', 'wo.', 'do.', 'vr.', 'za.'];
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

export const data = {
  af: af(),
  hi: hi(),
  ja: ja(),
  de: de(),
  en: en(),
  fr: fr(),
  nl: nl(),
};
