interface ILocale {
  months: string[];
  monthsAbbr: string[];
  days: string[];
  yearSuffix: string;
  ymd: boolean;
  rtl: boolean;
  langName: string;
  daysNames: string[];
  language: string;
}

const ar = (): ILocale => {
  const langName = 'العربية';
  const monthFullName = [
    'كانون الثاني',
    'شباط',
    'آذار',
    'نيسان',
    'ايار',
    'حزيران',
    'تموز',
    'آب',
    'أيلول',
    'تشرين الاول',
    'تشرين الثاني',
    'كانون الاول',
  ];
  const shortName = ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'ايار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الاول', 'تشرين الثاني', 'كانون الاول'];
  const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const daysNames = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const rtl = true;
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


const af = (): ILocale => {
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
    language: langName,
    langName,
    daysNames: days,
  };
};

const de = (): ILocale => {
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

const en = (): ILocale => {
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

const es = (): ILocale => {
  const langName = 'Español';
  const monthFullName = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const shortName = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  const daysNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
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

const fr = (): ILocale => {
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

const hi = (): ILocale => {
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

const ja = (): ILocale => {
  const langName = 'Japanese';
  const monthFullName = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
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

const nl = (): ILocale => {
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
    language: langName,
    daysNames: days,
  };
};

const pt = (): ILocale => {
  const langName = 'Português';
  const monthFullName = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const shortName = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const daysNames = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ];
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

const it = (): ILocale => {
  const langName = 'Italian';
  const monthFullName = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ];
  const shortName = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
  const days = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
  const daysNames = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Gioved', 'Venerdì', 'Sabato'];
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

const pl = (): ILocale => {
  const langName = 'Polish';
  const monthFullName = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ];
  const shortName = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
  const days = ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'];
  const daysNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
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

const ru = (): ILocale => {
  const langName = 'Russian';
  const monthFullName = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const shortName = ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'];
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const daysNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
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

export const tr = (): ILocale => {
  const langName = 'Türkçe';
  const monthFullName = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
  const shortName = ['Oca', 'Şub', 'Mar', 'Nis', ' May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
  const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Pzr'];
  const daysNames = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
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

export const vn = (): ILocale => {
  const langName = 'Vietnamese';
  const monthFullName = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];
  const shortName = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];
  const days = ['CN', 'H', 'B', 'T', 'N', 'S', 'B'];
  const daysNames = ['CN', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
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

const bg = (): ILocale => {
  const langName = 'Bulgarian';
  const monthFullName = [
    'Януари',
    'Февруари',
    'Март',
    'Април',
    'Май',
    'Юни',
    'Юли',
    'Август',
    'Септември',
    'Октомври',
    'Ноември',
    'Декември',
  ];
  const shortName = ['Яну', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'];
  const days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const daysNames = ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'];
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

const arTn = (): ILocale => {
  const langName = 'Arabic-Tunisia';
  const monthFullName = [
    'جانفي',
    'فيفري',
    'مارس',
    'أفريل',
    'ماي',
    'جوان',
    'جويلية',
    'أوت',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];

  const days = ['أحد', 'أثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
  const daysNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const rtl = true;
  const ymd = false;
  const yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: monthFullName,
    days,
    language: langName,
    yearSuffix,
    ymd,
    rtl,
    langName,
    daysNames,
  };
};

const id = (): ILocale => {
  const langName = 'Indonesia';
  const monthFullName = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'Nopember',
    'Desember',
  ];
  const shortName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nop', 'Des'];
  const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const daysNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
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

export const kr = (): ILocale => {
  const langName = "kr";
  const monthFullName = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const shortName = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const days = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const daysNames = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const rtl = false;
  const ymd = false;
  const yearSuffix = "";

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
}

const zh_TW = (): ILocale => {
  const langName = '繁體中文';
  const monthFullName = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const shortName = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  const daysNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
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

const cs = (): ILocale => {
  const langName = 'Czech';
  const monthFullName = ['Leden', 'Únor', 'Březen', 'Duben', 'Smět', 'Červen',
    'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
  const shortName = ['Led', 'Úno', 'Bře', 'Dub', 'Smě', 'Čen',
    'Čec', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'];
  const days = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'];
  const daysNames = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
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
  ar: ar(),
  af: af(),
  arTn: arTn(),
  hi: hi(),
  ja: ja(),
  de: de(),
  en: en(),
  es: es(),
  fr: fr(),
  nl: nl(),
  pt: pt(),
  it: it(),
  pl: pl(),
  ru: ru(),
  tr: tr(),
  zh_TW: zh_TW(),
  vn: vn(),
  bg: bg(),
  kr: kr(),
  id: id(),
  cs: cs()
};
