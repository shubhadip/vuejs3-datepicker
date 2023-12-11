import './DatePickerComponent.css';
import { defineComponent as ze, openBlock as k, createElementBlock as T, normalizeClass as I, createElementVNode as A, ref as ve, computed as v, watch as et, resolveComponent as tt, createTextVNode as Pn, toDisplayString as $, createCommentVNode as G, createVNode as Kt, renderSlot as K, withDirectives as Ct, normalizeStyle as oa, withModifiers as ot, Fragment as at, renderList as nt, vShow as la, resolveDirective as Rn, withCtx as Re, createBlock as xt } from "vue";
const Wn = ["click"], st = [], An = {
  instances: st,
  beforeMount: Ca,
  update: (e, t) => {
    JSON.stringify(t.value) !== JSON.stringify(t.oldValue) && Ca(e, t);
  },
  unmounted: Aa
};
function Ca(e, { value: t }) {
  Aa(e);
  const a = t, n = typeof a == "function";
  if (!n && !(typeof a == "object") || !(a.isActive !== !1))
    return;
  const i = n ? a : a.handler, o = In({ el: e, handler: i });
  o.eventHandlers.forEach(
    ({ event: h, handler: D }) => setTimeout(() => document.addEventListener(h, D, !1), 0)
  ), st.push(o);
}
function Aa(e) {
  const t = st.findIndex((n) => n.el === e);
  if (t === -1)
    return;
  st[t].eventHandlers.forEach(
    ({ event: n, handler: s }) => document.removeEventListener(n, s, !1)
  ), st.splice(t, 1);
}
function In({ el: e, handler: t }) {
  return {
    el: e,
    eventHandlers: Wn.map((a) => ({
      event: a,
      handler: (n) => Hn({ event: n, el: e, handler: t })
    }))
  };
}
function Hn({ event: e, el: t, handler: a }) {
  const n = e.path || (e.composedPath ? e.composedPath() : void 0);
  if (n ? n.indexOf(t) < 0 : !t.contains(e.target))
    return a && a(e, t);
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ia;
function d() {
  return Ia.apply(null, arguments);
}
function Un(e) {
  Ia = e;
}
function ue(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ie(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function O(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ua(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (O(e, t))
      return !1;
  return !0;
}
function Q(e) {
  return e === void 0;
}
function Ne(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ft(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ha(e, t) {
  var a = [], n, s = e.length;
  for (n = 0; n < s; ++n)
    a.push(t(e[n], n));
  return a;
}
function Oe(e, t) {
  for (var a in t)
    O(t, a) && (e[a] = t[a]);
  return O(t, "toString") && (e.toString = t.toString), O(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function we(e, t, a, n) {
  return un(e, t, a, n, !0).utc();
}
function Ln() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function b(e) {
  return e._pf == null && (e._pf = Ln()), e._pf;
}
var Xt;
Array.prototype.some ? Xt = Array.prototype.some : Xt = function(e) {
  var t = Object(this), a = t.length >>> 0, n;
  for (n = 0; n < a; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function da(e) {
  if (e._isValid == null) {
    var t = b(e), a = Xt.call(t.parsedDateParts, function(s) {
      return s != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function Ft(e) {
  var t = we(NaN);
  return e != null ? Oe(b(t), e) : b(t).userInvalidated = !0, t;
}
var Fa = d.momentProperties = [], Jt = !1;
function ca(e, t) {
  var a, n, s, r = Fa.length;
  if (Q(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Q(t._i) || (e._i = t._i), Q(t._f) || (e._f = t._f), Q(t._l) || (e._l = t._l), Q(t._strict) || (e._strict = t._strict), Q(t._tzm) || (e._tzm = t._tzm), Q(t._isUTC) || (e._isUTC = t._isUTC), Q(t._offset) || (e._offset = t._offset), Q(t._pf) || (e._pf = b(t)), Q(t._locale) || (e._locale = t._locale), r > 0)
    for (a = 0; a < r; a++)
      n = Fa[a], s = t[n], Q(s) || (e[n] = s);
  return e;
}
function ht(e) {
  ca(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Jt === !1 && (Jt = !0, d.updateOffset(this), Jt = !1);
}
function de(e) {
  return e instanceof ht || e != null && e._isAMomentObject != null;
}
function Ua(e) {
  d.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function re(e, t) {
  var a = !0;
  return Oe(function() {
    if (d.deprecationHandler != null && d.deprecationHandler(null, e), a) {
      var n = [], s, r, i, o = arguments.length;
      for (r = 0; r < o; r++) {
        if (s = "", typeof arguments[r] == "object") {
          s += `
[` + r + "] ";
          for (i in arguments[0])
            O(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[r];
        n.push(s);
      }
      Ua(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), a = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Va = {};
function La(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), Va[e] || (Ua(t), Va[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function Se(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function $n(e) {
  var t, a;
  for (a in e)
    O(e, a) && (t = e[a], Se(t) ? this[a] = t : this["_" + a] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ea(e, t) {
  var a = Oe({}, e), n;
  for (n in t)
    O(t, n) && (Ie(e[n]) && Ie(t[n]) ? (a[n] = {}, Oe(a[n], e[n]), Oe(a[n], t[n])) : t[n] != null ? a[n] = t[n] : delete a[n]);
  for (n in e)
    O(e, n) && !O(t, n) && Ie(e[n]) && (a[n] = Oe({}, a[n]));
  return a;
}
function fa(e) {
  e != null && this.set(e);
}
var ta;
Object.keys ? ta = Object.keys : ta = function(e) {
  var t, a = [];
  for (t in e)
    O(e, t) && a.push(t);
  return a;
};
var jn = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function En(e, t, a) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Se(n) ? n.call(t, a) : n;
}
function De(e, t, a) {
  var n = "" + Math.abs(e), s = t - n.length, r = e >= 0;
  return (r ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n;
}
var ha = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Dt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Zt = {}, je = {};
function y(e, t, a, n) {
  var s = n;
  typeof n == "string" && (s = function() {
    return this[n]();
  }), e && (je[e] = s), t && (je[t[0]] = function() {
    return De(s.apply(this, arguments), t[1], t[2]);
  }), a && (je[a] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function Bn(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function zn(e) {
  var t = e.match(ha), a, n;
  for (a = 0, n = t.length; a < n; a++)
    je[t[a]] ? t[a] = je[t[a]] : t[a] = Bn(t[a]);
  return function(s) {
    var r = "", i;
    for (i = 0; i < n; i++)
      r += Se(t[i]) ? t[i].call(s, e) : t[i];
    return r;
  };
}
function pt(e, t) {
  return e.isValid() ? (t = $a(t, e.localeData()), Zt[t] = Zt[t] || zn(t), Zt[t](e)) : e.localeData().invalidDate();
}
function $a(e, t) {
  var a = 5;
  function n(s) {
    return t.longDateFormat(s) || s;
  }
  for (Dt.lastIndex = 0; a >= 0 && Dt.test(e); )
    e = e.replace(
      Dt,
      n
    ), Dt.lastIndex = 0, a -= 1;
  return e;
}
var Gn = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function xn(e) {
  var t = this._longDateFormat[e], a = this._longDateFormat[e.toUpperCase()];
  return t || !a ? t : (this._longDateFormat[e] = a.match(ha).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var Jn = "Invalid date";
function Zn() {
  return this._invalidDate;
}
var qn = "%d", Qn = /\d{1,2}/;
function Kn(e) {
  return this._ordinal.replace("%d", e);
}
var Xn = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function es(e, t, a, n) {
  var s = this._relativeTime[a];
  return Se(s) ? s(e, t, a, n) : s.replace(/%d/i, e);
}
function ts(e, t) {
  var a = this._relativeTime[e > 0 ? "future" : "past"];
  return Se(a) ? a(t) : a.replace(/%s/i, t);
}
var rt = {};
function J(e, t) {
  var a = e.toLowerCase();
  rt[a] = rt[a + "s"] = rt[t] = e;
}
function ie(e) {
  return typeof e == "string" ? rt[e] || rt[e.toLowerCase()] : void 0;
}
function ma(e) {
  var t = {}, a, n;
  for (n in e)
    O(e, n) && (a = ie(n), a && (t[a] = e[n]));
  return t;
}
var ja = {};
function Z(e, t) {
  ja[e] = t;
}
function as(e) {
  var t = [], a;
  for (a in e)
    O(e, a) && t.push({ unit: a, priority: ja[a] });
  return t.sort(function(n, s) {
    return n.priority - s.priority;
  }), t;
}
function Vt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function se(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function M(e) {
  var t = +e, a = 0;
  return t !== 0 && isFinite(t) && (a = se(t)), a;
}
function Ge(e, t) {
  return function(a) {
    return a != null ? (Ea(this, e, a), d.updateOffset(this, t), this) : _t(this, e);
  };
}
function _t(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Ea(e, t, a) {
  e.isValid() && !isNaN(a) && (t === "FullYear" && Vt(e.year()) && e.month() === 1 && e.date() === 29 ? (a = M(a), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    a,
    e.month(),
    Ht(a, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a));
}
function ns(e) {
  return e = ie(e), Se(this[e]) ? this[e]() : this;
}
function ss(e, t) {
  if (typeof e == "object") {
    e = ma(e);
    var a = as(e), n, s = a.length;
    for (n = 0; n < s; n++)
      this[a[n].unit](e[a[n].unit]);
  } else if (e = ie(e), Se(this[e]))
    return this[e](t);
  return this;
}
var Ba = /\d/, ne = /\d\d/, za = /\d{3}/, ya = /\d{4}/, Pt = /[+-]?\d{6}/, U = /\d\d?/, Ga = /\d\d\d\d?/, xa = /\d\d\d\d\d\d?/, Rt = /\d{1,3}/, ga = /\d{1,4}/, Wt = /[+-]?\d{1,6}/, xe = /\d+/, At = /[+-]?\d+/, rs = /Z|[+-]\d\d:?\d\d/gi, It = /Z|[+-]\d\d(?::?\d\d)?/gi, is = /[+-]?\d+(\.\d{1,3})?/, mt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, kt;
kt = {};
function f(e, t, a) {
  kt[e] = Se(t) ? t : function(n, s) {
    return n && a ? a : t;
  };
}
function os(e, t) {
  return O(kt, e) ? kt[e](t._strict, t._locale) : new RegExp(ls(e));
}
function ls(e) {
  return ae(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, a, n, s, r) {
        return a || n || s || r;
      }
    )
  );
}
function ae(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var aa = {};
function W(e, t) {
  var a, n = t, s;
  for (typeof e == "string" && (e = [e]), Ne(t) && (n = function(r, i) {
    i[t] = M(r);
  }), s = e.length, a = 0; a < s; a++)
    aa[e[a]] = n;
}
function yt(e, t) {
  W(e, function(a, n, s, r) {
    s._w = s._w || {}, t(a, s._w, s, r);
  });
}
function us(e, t, a) {
  t != null && O(aa, e) && aa[e](t, a._a, a, e);
}
var x = 0, Me = 1, ye = 2, B = 3, le = 4, _e = 5, Ae = 6, ds = 7, cs = 8;
function fs(e, t) {
  return (e % t + t) % t;
}
var E;
Array.prototype.indexOf ? E = Array.prototype.indexOf : E = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ht(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var a = fs(t, 12);
  return e += (t - a) / 12, a === 1 ? Vt(e) ? 29 : 28 : 31 - a % 7 % 2;
}
y("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
y("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
y("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
J("month", "M");
Z("month", 8);
f("M", U);
f("MM", U, ne);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
W(["M", "MM"], function(e, t) {
  t[Me] = M(e) - 1;
});
W(["MMM", "MMMM"], function(e, t, a, n) {
  var s = a._locale.monthsParse(e, n, a._strict);
  s != null ? t[Me] = s : b(a).invalidMonth = e;
});
var hs = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ja = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Za = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ms = mt, ys = mt;
function gs(e, t) {
  return e ? ue(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Za).test(t) ? "format" : "standalone"][e.month()] : ue(this._months) ? this._months : this._months.standalone;
}
function Ds(e, t) {
  return e ? ue(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Za.test(t) ? "format" : "standalone"][e.month()] : ue(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function ws(e, t, a) {
  var n, s, r, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      r = we([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        r,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
  return a ? t === "MMM" ? (s = E.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = E.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = E.call(this._shortMonthsParse, i), s !== -1 ? s : (s = E.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = E.call(this._longMonthsParse, i), s !== -1 ? s : (s = E.call(this._shortMonthsParse, i), s !== -1 ? s : null));
}
function Ss(e, t, a) {
  var n, s, r;
  if (this._monthsParseExact)
    return ws.call(this, e, t, a);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (s = we([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !a && !this._monthsParse[n] && (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), a && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (a && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!a && this._monthsParse[n].test(e))
      return n;
  }
}
function qa(e, t) {
  var a;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = M(t);
    else if (t = e.localeData().monthsParse(t), !Ne(t))
      return e;
  }
  return a = Math.min(e.date(), Ht(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e;
}
function Qa(e) {
  return e != null ? (qa(this, e), d.updateOffset(this, !0), this) : _t(this, "Month");
}
function ps() {
  return Ht(this.year(), this.month());
}
function vs(e) {
  return this._monthsParseExact ? (O(this, "_monthsRegex") || Ka.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (O(this, "_monthsShortRegex") || (this._monthsShortRegex = ms), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function bs(e) {
  return this._monthsParseExact ? (O(this, "_monthsRegex") || Ka.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (O(this, "_monthsRegex") || (this._monthsRegex = ys), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ka() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], a = [], n = [], s, r;
  for (s = 0; s < 12; s++)
    r = we([2e3, s]), t.push(this.monthsShort(r, "")), a.push(this.months(r, "")), n.push(this.months(r, "")), n.push(this.monthsShort(r, ""));
  for (t.sort(e), a.sort(e), n.sort(e), s = 0; s < 12; s++)
    t[s] = ae(t[s]), a[s] = ae(a[s]);
  for (s = 0; s < 24; s++)
    n[s] = ae(n[s]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
y("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? De(e, 4) : "+" + e;
});
y(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
y(0, ["YYYY", 4], 0, "year");
y(0, ["YYYYY", 5], 0, "year");
y(0, ["YYYYYY", 6, !0], 0, "year");
J("year", "y");
Z("year", 1);
f("Y", At);
f("YY", U, ne);
f("YYYY", ga, ya);
f("YYYYY", Wt, Pt);
f("YYYYYY", Wt, Pt);
W(["YYYYY", "YYYYYY"], x);
W("YYYY", function(e, t) {
  t[x] = e.length === 2 ? d.parseTwoDigitYear(e) : M(e);
});
W("YY", function(e, t) {
  t[x] = d.parseTwoDigitYear(e);
});
W("Y", function(e, t) {
  t[x] = parseInt(e, 10);
});
function it(e) {
  return Vt(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return M(e) + (M(e) > 68 ? 1900 : 2e3);
};
var Xa = Ge("FullYear", !0);
function Ms() {
  return Vt(this.year());
}
function _s(e, t, a, n, s, r, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, a, n, s, r, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, a, n, s, r, i), o;
}
function lt(e) {
  var t, a;
  return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Nt(e, t, a) {
  var n = 7 + t - a, s = (7 + lt(e, 0, n).getUTCDay() - t) % 7;
  return -s + n - 1;
}
function en(e, t, a, n, s) {
  var r = (7 + a - n) % 7, i = Nt(e, n, s), o = 1 + 7 * (t - 1) + r + i, h, D;
  return o <= 0 ? (h = e - 1, D = it(h) + o) : o > it(e) ? (h = e + 1, D = o - it(e)) : (h = e, D = o), {
    year: h,
    dayOfYear: D
  };
}
function ut(e, t, a) {
  var n = Nt(e.year(), t, a), s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, r, i;
  return s < 1 ? (i = e.year() - 1, r = s + ke(i, t, a)) : s > ke(e.year(), t, a) ? (r = s - ke(e.year(), t, a), i = e.year() + 1) : (i = e.year(), r = s), {
    week: r,
    year: i
  };
}
function ke(e, t, a) {
  var n = Nt(e, t, a), s = Nt(e + 1, t, a);
  return (it(e) - n + s) / 7;
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
J("week", "w");
J("isoWeek", "W");
Z("week", 5);
Z("isoWeek", 5);
f("w", U);
f("ww", U, ne);
f("W", U);
f("WW", U, ne);
yt(
  ["w", "ww", "W", "WW"],
  function(e, t, a, n) {
    t[n.substr(0, 1)] = M(e);
  }
);
function ks(e) {
  return ut(e, this._week.dow, this._week.doy).week;
}
var Ns = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ys() {
  return this._week.dow;
}
function Ts() {
  return this._week.doy;
}
function Os(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Cs(e) {
  var t = ut(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
y("d", 0, "do", "day");
y("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
y("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
y("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
y("e", 0, 0, "weekday");
y("E", 0, 0, "isoWeekday");
J("day", "d");
J("weekday", "e");
J("isoWeekday", "E");
Z("day", 11);
Z("weekday", 11);
Z("isoWeekday", 11);
f("d", U);
f("e", U);
f("E", U);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
yt(["dd", "ddd", "dddd"], function(e, t, a, n) {
  var s = a._locale.weekdaysParse(e, n, a._strict);
  s != null ? t.d = s : b(a).invalidWeekday = e;
});
yt(["d", "e", "E"], function(e, t, a, n) {
  t[n] = M(e);
});
function Fs(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Vs(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Da(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Ps = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), tn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Rs = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ws = mt, As = mt, Is = mt;
function Hs(e, t) {
  var a = ue(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Da(a, this._week.dow) : e ? a[e.day()] : a;
}
function Us(e) {
  return e === !0 ? Da(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Ls(e) {
  return e === !0 ? Da(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function $s(e, t, a) {
  var n, s, r, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      r = we([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        r,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        r,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
  return a ? t === "dddd" ? (s = E.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = E.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = E.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = E.call(this._weekdaysParse, i), s !== -1 || (s = E.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = E.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = E.call(this._shortWeekdaysParse, i), s !== -1 || (s = E.call(this._weekdaysParse, i), s !== -1) ? s : (s = E.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = E.call(this._minWeekdaysParse, i), s !== -1 || (s = E.call(this._weekdaysParse, i), s !== -1) ? s : (s = E.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
}
function js(e, t, a) {
  var n, s, r;
  if (this._weekdaysParseExact)
    return $s.call(this, e, t, a);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (s = we([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), a && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (a && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (a && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!a && this._weekdaysParse[n].test(e))
      return n;
  }
}
function Es(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Fs(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Bs(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function zs(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Vs(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Gs(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || wa.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (O(this, "_weekdaysRegex") || (this._weekdaysRegex = Ws), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function xs(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || wa.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (O(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = As), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Js(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || wa.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (O(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Is), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function wa() {
  function e(_, F) {
    return F.length - _.length;
  }
  var t = [], a = [], n = [], s = [], r, i, o, h, D;
  for (r = 0; r < 7; r++)
    i = we([2e3, 1]).day(r), o = ae(this.weekdaysMin(i, "")), h = ae(this.weekdaysShort(i, "")), D = ae(this.weekdays(i, "")), t.push(o), a.push(h), n.push(D), s.push(o), s.push(h), s.push(D);
  t.sort(e), a.sort(e), n.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Sa() {
  return this.hours() % 12 || 12;
}
function Zs() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, Sa);
y("k", ["kk", 2], 0, Zs);
y("hmm", 0, 0, function() {
  return "" + Sa.apply(this) + De(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + Sa.apply(this) + De(this.minutes(), 2) + De(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + De(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + De(this.minutes(), 2) + De(this.seconds(), 2);
});
function an(e, t) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
an("a", !0);
an("A", !1);
J("hour", "h");
Z("hour", 13);
function nn(e, t) {
  return t._meridiemParse;
}
f("a", nn);
f("A", nn);
f("H", U);
f("h", U);
f("k", U);
f("HH", U, ne);
f("hh", U, ne);
f("kk", U, ne);
f("hmm", Ga);
f("hmmss", xa);
f("Hmm", Ga);
f("Hmmss", xa);
W(["H", "HH"], B);
W(["k", "kk"], function(e, t, a) {
  var n = M(e);
  t[B] = n === 24 ? 0 : n;
});
W(["a", "A"], function(e, t, a) {
  a._isPm = a._locale.isPM(e), a._meridiem = e;
});
W(["h", "hh"], function(e, t, a) {
  t[B] = M(e), b(a).bigHour = !0;
});
W("hmm", function(e, t, a) {
  var n = e.length - 2;
  t[B] = M(e.substr(0, n)), t[le] = M(e.substr(n)), b(a).bigHour = !0;
});
W("hmmss", function(e, t, a) {
  var n = e.length - 4, s = e.length - 2;
  t[B] = M(e.substr(0, n)), t[le] = M(e.substr(n, 2)), t[_e] = M(e.substr(s)), b(a).bigHour = !0;
});
W("Hmm", function(e, t, a) {
  var n = e.length - 2;
  t[B] = M(e.substr(0, n)), t[le] = M(e.substr(n));
});
W("Hmmss", function(e, t, a) {
  var n = e.length - 4, s = e.length - 2;
  t[B] = M(e.substr(0, n)), t[le] = M(e.substr(n, 2)), t[_e] = M(e.substr(s));
});
function qs(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Qs = /[ap]\.?m?\.?/i, Ks = Ge("Hours", !0);
function Xs(e, t, a) {
  return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM";
}
var sn = {
  calendar: jn,
  longDateFormat: Gn,
  invalidDate: Jn,
  ordinal: qn,
  dayOfMonthOrdinalParse: Qn,
  relativeTime: Xn,
  months: hs,
  monthsShort: Ja,
  week: Ns,
  weekdays: Ps,
  weekdaysMin: Rs,
  weekdaysShort: tn,
  meridiemParse: Qs
}, L = {}, Ke = {}, dt;
function er(e, t) {
  var a, n = Math.min(e.length, t.length);
  for (a = 0; a < n; a += 1)
    if (e[a] !== t[a])
      return a;
  return n;
}
function Pa(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function tr(e) {
  for (var t = 0, a, n, s, r; t < e.length; ) {
    for (r = Pa(e[t]).split("-"), a = r.length, n = Pa(e[t + 1]), n = n ? n.split("-") : null; a > 0; ) {
      if (s = Ut(r.slice(0, a).join("-")), s)
        return s;
      if (n && n.length >= a && er(r, n) >= a - 1)
        break;
      a--;
    }
    t++;
  }
  return dt;
}
function ar(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Ut(e) {
  var t = null, a;
  if (L[e] === void 0 && typeof module < "u" && module && module.exports && ar(e))
    try {
      t = dt._abbr, a = require, a("./locale/" + e), Fe(t);
    } catch {
      L[e] = null;
    }
  return L[e];
}
function Fe(e, t) {
  var a;
  return e && (Q(t) ? a = Ye(e) : a = pa(e, t), a ? dt = a : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), dt._abbr;
}
function pa(e, t) {
  if (t !== null) {
    var a, n = sn;
    if (t.abbr = e, L[e] != null)
      La(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = L[e]._config;
    else if (t.parentLocale != null)
      if (L[t.parentLocale] != null)
        n = L[t.parentLocale]._config;
      else if (a = Ut(t.parentLocale), a != null)
        n = a._config;
      else
        return Ke[t.parentLocale] || (Ke[t.parentLocale] = []), Ke[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return L[e] = new fa(ea(n, t)), Ke[e] && Ke[e].forEach(function(s) {
      pa(s.name, s.config);
    }), Fe(e), L[e];
  } else
    return delete L[e], null;
}
function nr(e, t) {
  if (t != null) {
    var a, n, s = sn;
    L[e] != null && L[e].parentLocale != null ? L[e].set(ea(L[e]._config, t)) : (n = Ut(e), n != null && (s = n._config), t = ea(s, t), n == null && (t.abbr = e), a = new fa(t), a.parentLocale = L[e], L[e] = a), Fe(e);
  } else
    L[e] != null && (L[e].parentLocale != null ? (L[e] = L[e].parentLocale, e === Fe() && Fe(e)) : L[e] != null && delete L[e]);
  return L[e];
}
function Ye(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return dt;
  if (!ue(e)) {
    if (t = Ut(e), t)
      return t;
    e = [e];
  }
  return tr(e);
}
function sr() {
  return ta(L);
}
function va(e) {
  var t, a = e._a;
  return a && b(e).overflow === -2 && (t = a[Me] < 0 || a[Me] > 11 ? Me : a[ye] < 1 || a[ye] > Ht(a[x], a[Me]) ? ye : a[B] < 0 || a[B] > 24 || a[B] === 24 && (a[le] !== 0 || a[_e] !== 0 || a[Ae] !== 0) ? B : a[le] < 0 || a[le] > 59 ? le : a[_e] < 0 || a[_e] > 59 ? _e : a[Ae] < 0 || a[Ae] > 999 ? Ae : -1, b(e)._overflowDayOfYear && (t < x || t > ye) && (t = ye), b(e)._overflowWeeks && t === -1 && (t = ds), b(e)._overflowWeekday && t === -1 && (t = cs), b(e).overflow = t), e;
}
var rr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ir = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, or = /Z|[+-]\d\d(?::?\d\d)?/, wt = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], qt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], lr = /^\/?Date\((-?\d+)/i, ur = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, dr = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function rn(e) {
  var t, a, n = e._i, s = rr.exec(n) || ir.exec(n), r, i, o, h, D = wt.length, _ = qt.length;
  if (s) {
    for (b(e).iso = !0, t = 0, a = D; t < a; t++)
      if (wt[t][1].exec(s[1])) {
        i = wt[t][0], r = wt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, a = _; t < a; t++)
        if (qt[t][1].exec(s[3])) {
          o = (s[2] || " ") + qt[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!r && o != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (or.exec(s[4]))
        h = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (h || ""), Ma(e);
  } else
    e._isValid = !1;
}
function cr(e, t, a, n, s, r) {
  var i = [
    fr(e),
    Ja.indexOf(t),
    parseInt(a, 10),
    parseInt(n, 10),
    parseInt(s, 10)
  ];
  return r && i.push(parseInt(r, 10)), i;
}
function fr(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function hr(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function mr(e, t, a) {
  if (e) {
    var n = tn.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== s)
      return b(a).weekdayMismatch = !0, a._isValid = !1, !1;
  }
  return !0;
}
function yr(e, t, a) {
  if (e)
    return dr[e];
  if (t)
    return 0;
  var n = parseInt(a, 10), s = n % 100, r = (n - s) / 100;
  return r * 60 + s;
}
function on(e) {
  var t = ur.exec(hr(e._i)), a;
  if (t) {
    if (a = cr(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !mr(t[1], a, e))
      return;
    e._a = a, e._tzm = yr(t[8], t[9], t[10]), e._d = lt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), b(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function gr(e) {
  var t = lr.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (rn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (on(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : d.createFromInputFallback(e);
}
d.createFromInputFallback = re(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Le(e, t, a) {
  return e ?? t ?? a;
}
function Dr(e) {
  var t = new Date(d.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ba(e) {
  var t, a, n = [], s, r, i;
  if (!e._d) {
    for (s = Dr(e), e._w && e._a[ye] == null && e._a[Me] == null && wr(e), e._dayOfYear != null && (i = Le(e._a[x], s[x]), (e._dayOfYear > it(i) || e._dayOfYear === 0) && (b(e)._overflowDayOfYear = !0), a = lt(i, 0, e._dayOfYear), e._a[Me] = a.getUTCMonth(), e._a[ye] = a.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[B] === 24 && e._a[le] === 0 && e._a[_e] === 0 && e._a[Ae] === 0 && (e._nextDay = !0, e._a[B] = 0), e._d = (e._useUTC ? lt : _s).apply(
      null,
      n
    ), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[B] = 24), e._w && typeof e._w.d < "u" && e._w.d !== r && (b(e).weekdayMismatch = !0);
  }
}
function wr(e) {
  var t, a, n, s, r, i, o, h, D;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (r = 1, i = 4, a = Le(
    t.GG,
    e._a[x],
    ut(H(), 1, 4).year
  ), n = Le(t.W, 1), s = Le(t.E, 1), (s < 1 || s > 7) && (h = !0)) : (r = e._locale._week.dow, i = e._locale._week.doy, D = ut(H(), r, i), a = Le(t.gg, e._a[x], D.year), n = Le(t.w, D.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (h = !0)) : t.e != null ? (s = t.e + r, (t.e < 0 || t.e > 6) && (h = !0)) : s = r), n < 1 || n > ke(a, r, i) ? b(e)._overflowWeeks = !0 : h != null ? b(e)._overflowWeekday = !0 : (o = en(a, n, s, r, i), e._a[x] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function Ma(e) {
  if (e._f === d.ISO_8601) {
    rn(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    on(e);
    return;
  }
  e._a = [], b(e).empty = !0;
  var t = "" + e._i, a, n, s, r, i, o = t.length, h = 0, D, _;
  for (s = $a(e._f, e._locale).match(ha) || [], _ = s.length, a = 0; a < _; a++)
    r = s[a], n = (t.match(os(r, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && b(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), h += n.length), je[r] ? (n ? b(e).empty = !1 : b(e).unusedTokens.push(r), us(r, n, e)) : e._strict && !n && b(e).unusedTokens.push(r);
  b(e).charsLeftOver = o - h, t.length > 0 && b(e).unusedInput.push(t), e._a[B] <= 12 && b(e).bigHour === !0 && e._a[B] > 0 && (b(e).bigHour = void 0), b(e).parsedDateParts = e._a.slice(0), b(e).meridiem = e._meridiem, e._a[B] = Sr(
    e._locale,
    e._a[B],
    e._meridiem
  ), D = b(e).era, D !== null && (e._a[x] = e._locale.erasConvertYear(D, e._a[x])), ba(e), va(e);
}
function Sr(e, t, a) {
  var n;
  return a == null ? t : e.meridiemHour != null ? e.meridiemHour(t, a) : (e.isPM != null && (n = e.isPM(a), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function pr(e) {
  var t, a, n, s, r, i, o = !1, h = e._f.length;
  if (h === 0) {
    b(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < h; s++)
    r = 0, i = !1, t = ca({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Ma(t), da(t) && (i = !0), r += b(t).charsLeftOver, r += b(t).unusedTokens.length * 10, b(t).score = r, o ? r < n && (n = r, a = t) : (n == null || r < n || i) && (n = r, a = t, i && (o = !0));
  Oe(e, a || t);
}
function vr(e) {
  if (!e._d) {
    var t = ma(e._i), a = t.day === void 0 ? t.date : t.day;
    e._a = Ha(
      [t.year, t.month, a, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), ba(e);
  }
}
function br(e) {
  var t = new ht(va(ln(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ln(e) {
  var t = e._i, a = e._f;
  return e._locale = e._locale || Ye(e._l), t === null || a === void 0 && t === "" ? Ft({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), de(t) ? new ht(va(t)) : (ft(t) ? e._d = t : ue(a) ? pr(e) : a ? Ma(e) : Mr(e), da(e) || (e._d = null), e));
}
function Mr(e) {
  var t = e._i;
  Q(t) ? e._d = new Date(d.now()) : ft(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? gr(e) : ue(t) ? (e._a = Ha(t.slice(0), function(a) {
    return parseInt(a, 10);
  }), ba(e)) : Ie(t) ? vr(e) : Ne(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function un(e, t, a, n, s) {
  var r = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (a === !0 || a === !1) && (n = a, a = void 0), (Ie(e) && ua(e) || ue(e) && e.length === 0) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = s, r._l = a, r._i = e, r._f = t, r._strict = n, br(r);
}
function H(e, t, a, n) {
  return un(e, t, a, n, !1);
}
var _r = re(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = H.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ft();
  }
), kr = re(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = H.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ft();
  }
);
function dn(e, t) {
  var a, n;
  if (t.length === 1 && ue(t[0]) && (t = t[0]), !t.length)
    return H();
  for (a = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](a)) && (a = t[n]);
  return a;
}
function Nr() {
  var e = [].slice.call(arguments, 0);
  return dn("isBefore", e);
}
function Yr() {
  var e = [].slice.call(arguments, 0);
  return dn("isAfter", e);
}
var Tr = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Xe = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Or(e) {
  var t, a = !1, n, s = Xe.length;
  for (t in e)
    if (O(e, t) && !(E.call(Xe, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < s; ++n)
    if (e[Xe[n]]) {
      if (a)
        return !1;
      parseFloat(e[Xe[n]]) !== M(e[Xe[n]]) && (a = !0);
    }
  return !0;
}
function Cr() {
  return this._isValid;
}
function Fr() {
  return ce(NaN);
}
function Lt(e) {
  var t = ma(e), a = t.year || 0, n = t.quarter || 0, s = t.month || 0, r = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, h = t.minute || 0, D = t.second || 0, _ = t.millisecond || 0;
  this._isValid = Or(t), this._milliseconds = +_ + D * 1e3 + // 1000
  h * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + r * 7, this._months = +s + n * 3 + a * 12, this._data = {}, this._locale = Ye(), this._bubble();
}
function vt(e) {
  return e instanceof Lt;
}
function na(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Vr(e, t, a) {
  var n = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), r = 0, i;
  for (i = 0; i < n; i++)
    (a && e[i] !== t[i] || !a && M(e[i]) !== M(t[i])) && r++;
  return r + s;
}
function cn(e, t) {
  y(e, 0, 0, function() {
    var a = this.utcOffset(), n = "+";
    return a < 0 && (a = -a, n = "-"), n + De(~~(a / 60), 2) + t + De(~~a % 60, 2);
  });
}
cn("Z", ":");
cn("ZZ", "");
f("Z", It);
f("ZZ", It);
W(["Z", "ZZ"], function(e, t, a) {
  a._useUTC = !0, a._tzm = _a(It, e);
});
var Pr = /([\+\-]|\d\d)/gi;
function _a(e, t) {
  var a = (t || "").match(e), n, s, r;
  return a === null ? null : (n = a[a.length - 1] || [], s = (n + "").match(Pr) || ["-", 0, 0], r = +(s[1] * 60) + M(s[2]), r === 0 ? 0 : s[0] === "+" ? r : -r);
}
function ka(e, t) {
  var a, n;
  return t._isUTC ? (a = t.clone(), n = (de(e) || ft(e) ? e.valueOf() : H(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), d.updateOffset(a, !1), a) : H(e).local();
}
function sa(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function Rr(e, t, a) {
  var n = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = _a(It, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !a && (e = e * 60);
    return !this._isUTC && t && (s = sa(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), n !== e && (!t || this._changeInProgress ? mn(
      this,
      ce(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : sa(this);
}
function Wr(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ar(e) {
  return this.utcOffset(0, e);
}
function Ir(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(sa(this), "m")), this;
}
function Hr() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = _a(rs, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ur(e) {
  return this.isValid() ? (e = e ? H(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Lr() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function $r() {
  if (!Q(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ca(e, this), e = ln(e), e._a ? (t = e._isUTC ? we(e._a) : H(e._a), this._isDSTShifted = this.isValid() && Vr(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function jr() {
  return this.isValid() ? !this._isUTC : !1;
}
function Er() {
  return this.isValid() ? this._isUTC : !1;
}
function fn() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Br = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, zr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ce(e, t) {
  var a = e, n = null, s, r, i;
  return vt(e) ? a = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Ne(e) || !isNaN(+e) ? (a = {}, t ? a[t] = +e : a.milliseconds = +e) : (n = Br.exec(e)) ? (s = n[1] === "-" ? -1 : 1, a = {
    y: 0,
    d: M(n[ye]) * s,
    h: M(n[B]) * s,
    m: M(n[le]) * s,
    s: M(n[_e]) * s,
    ms: M(na(n[Ae] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (n = zr.exec(e)) ? (s = n[1] === "-" ? -1 : 1, a = {
    y: We(n[2], s),
    M: We(n[3], s),
    w: We(n[4], s),
    d: We(n[5], s),
    h: We(n[6], s),
    m: We(n[7], s),
    s: We(n[8], s)
  }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (i = Gr(
    H(a.from),
    H(a.to)
  ), a = {}, a.ms = i.milliseconds, a.M = i.months), r = new Lt(a), vt(e) && O(e, "_locale") && (r._locale = e._locale), vt(e) && O(e, "_isValid") && (r._isValid = e._isValid), r;
}
ce.fn = Lt.prototype;
ce.invalid = Fr;
function We(e, t) {
  var a = e && parseFloat(e.replace(",", "."));
  return (isNaN(a) ? 0 : a) * t;
}
function Ra(e, t) {
  var a = {};
  return a.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a;
}
function Gr(e, t) {
  var a;
  return e.isValid() && t.isValid() ? (t = ka(t, e), e.isBefore(t) ? a = Ra(e, t) : (a = Ra(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : { milliseconds: 0, months: 0 };
}
function hn(e, t) {
  return function(a, n) {
    var s, r;
    return n !== null && !isNaN(+n) && (La(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), r = a, a = n, n = r), s = ce(a, n), mn(this, s, e), this;
  };
}
function mn(e, t, a, n) {
  var s = t._milliseconds, r = na(t._days), i = na(t._months);
  e.isValid() && (n = n ?? !0, i && qa(e, _t(e, "Month") + i * a), r && Ea(e, "Date", _t(e, "Date") + r * a), s && e._d.setTime(e._d.valueOf() + s * a), n && d.updateOffset(e, r || i));
}
var xr = hn(1, "add"), Jr = hn(-1, "subtract");
function yn(e) {
  return typeof e == "string" || e instanceof String;
}
function Zr(e) {
  return de(e) || ft(e) || yn(e) || Ne(e) || Qr(e) || qr(e) || e === null || e === void 0;
}
function qr(e) {
  var t = Ie(e) && !ua(e), a = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], s, r, i = n.length;
  for (s = 0; s < i; s += 1)
    r = n[s], a = a || O(e, r);
  return t && a;
}
function Qr(e) {
  var t = ue(e), a = !1;
  return t && (a = e.filter(function(n) {
    return !Ne(n) && yn(e);
  }).length === 0), t && a;
}
function Kr(e) {
  var t = Ie(e) && !ua(e), a = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, r;
  for (s = 0; s < n.length; s += 1)
    r = n[s], a = a || O(e, r);
  return t && a;
}
function Xr(e, t) {
  var a = e.diff(t, "days", !0);
  return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse";
}
function ei(e, t) {
  arguments.length === 1 && (arguments[0] ? Zr(arguments[0]) ? (e = arguments[0], t = void 0) : Kr(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var a = e || H(), n = ka(a, this).startOf("day"), s = d.calendarFormat(this, n) || "sameElse", r = t && (Se(t[s]) ? t[s].call(this, a) : t[s]);
  return this.format(
    r || this.localeData().calendar(s, this, H(a))
  );
}
function ti() {
  return new ht(this);
}
function ai(e, t) {
  var a = de(e) ? e : H(e);
  return this.isValid() && a.isValid() ? (t = ie(t) || "millisecond", t === "millisecond" ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function ni(e, t) {
  var a = de(e) ? e : H(e);
  return this.isValid() && a.isValid() ? (t = ie(t) || "millisecond", t === "millisecond" ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf()) : !1;
}
function si(e, t, a, n) {
  var s = de(e) ? e : H(e), r = de(t) ? t : H(t);
  return this.isValid() && s.isValid() && r.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(s, a) : !this.isBefore(s, a)) && (n[1] === ")" ? this.isBefore(r, a) : !this.isAfter(r, a))) : !1;
}
function ri(e, t) {
  var a = de(e) ? e : H(e), n;
  return this.isValid() && a.isValid() ? (t = ie(t) || "millisecond", t === "millisecond" ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function ii(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function oi(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function li(e, t, a) {
  var n, s, r;
  if (!this.isValid())
    return NaN;
  if (n = ka(e, this), !n.isValid())
    return NaN;
  switch (s = (n.utcOffset() - this.utcOffset()) * 6e4, t = ie(t), t) {
    case "year":
      r = bt(this, n) / 12;
      break;
    case "month":
      r = bt(this, n);
      break;
    case "quarter":
      r = bt(this, n) / 3;
      break;
    case "second":
      r = (this - n) / 1e3;
      break;
    case "minute":
      r = (this - n) / 6e4;
      break;
    case "hour":
      r = (this - n) / 36e5;
      break;
    case "day":
      r = (this - n - s) / 864e5;
      break;
    case "week":
      r = (this - n - s) / 6048e5;
      break;
    default:
      r = this - n;
  }
  return a ? r : se(r);
}
function bt(e, t) {
  if (e.date() < t.date())
    return -bt(t, e);
  var a = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(a, "months"), s, r;
  return t - n < 0 ? (s = e.clone().add(a - 1, "months"), r = (t - n) / (n - s)) : (s = e.clone().add(a + 1, "months"), r = (t - n) / (s - n)), -(a + r) || 0;
}
d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function ui() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function di(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, a = t ? this.clone().utc() : this;
  return a.year() < 0 || a.year() > 9999 ? pt(
    a,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Se(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", pt(a, "Z")) : pt(
    a,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function ci() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", a, n, s, r;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), a = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", r = t + '[")]', this.format(a + n + s + r);
}
function fi(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = pt(this, e);
  return this.localeData().postformat(t);
}
function hi(e, t) {
  return this.isValid() && (de(e) && e.isValid() || H(e).isValid()) ? ce({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function mi(e) {
  return this.from(H(), e);
}
function yi(e, t) {
  return this.isValid() && (de(e) && e.isValid() || H(e).isValid()) ? ce({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function gi(e) {
  return this.to(H(), e);
}
function gn(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Ye(e), t != null && (this._locale = t), this);
}
var Dn = re(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function wn() {
  return this._locale;
}
var Yt = 1e3, Ee = 60 * Yt, Tt = 60 * Ee, Sn = (365 * 400 + 97) * 24 * Tt;
function Be(e, t) {
  return (e % t + t) % t;
}
function pn(e, t, a) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, a) - Sn : new Date(e, t, a).valueOf();
}
function vn(e, t, a) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - Sn : Date.UTC(e, t, a);
}
function Di(e) {
  var t, a;
  if (e = ie(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (a = this._isUTC ? vn : pn, e) {
    case "year":
      t = a(this.year(), 0, 1);
      break;
    case "quarter":
      t = a(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = a(this.year(), this.month(), 1);
      break;
    case "week":
      t = a(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = a(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = a(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Be(
        t + (this._isUTC ? 0 : this.utcOffset() * Ee),
        Tt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Be(t, Ee);
      break;
    case "second":
      t = this._d.valueOf(), t -= Be(t, Yt);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function wi(e) {
  var t, a;
  if (e = ie(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (a = this._isUTC ? vn : pn, e) {
    case "year":
      t = a(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = a(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = a(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = a(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = a(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = a(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Tt - Be(
        t + (this._isUTC ? 0 : this.utcOffset() * Ee),
        Tt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ee - Be(t, Ee) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Yt - Be(t, Yt) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function Si() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function pi() {
  return Math.floor(this.valueOf() / 1e3);
}
function vi() {
  return new Date(this.valueOf());
}
function bi() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Mi() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function _i() {
  return this.isValid() ? this.toISOString() : null;
}
function ki() {
  return da(this);
}
function Ni() {
  return Oe({}, b(this));
}
function Yi() {
  return b(this).overflow;
}
function Ti() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
y("N", 0, 0, "eraAbbr");
y("NN", 0, 0, "eraAbbr");
y("NNN", 0, 0, "eraAbbr");
y("NNNN", 0, 0, "eraName");
y("NNNNN", 0, 0, "eraNarrow");
y("y", ["y", 1], "yo", "eraYear");
y("y", ["yy", 2], 0, "eraYear");
y("y", ["yyy", 3], 0, "eraYear");
y("y", ["yyyy", 4], 0, "eraYear");
f("N", Na);
f("NN", Na);
f("NNN", Na);
f("NNNN", Ui);
f("NNNNN", Li);
W(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, a, n) {
    var s = a._locale.erasParse(e, n, a._strict);
    s ? b(a).era = s : b(a).invalidEra = e;
  }
);
f("y", xe);
f("yy", xe);
f("yyy", xe);
f("yyyy", xe);
f("yo", $i);
W(["y", "yy", "yyy", "yyyy"], x);
W(["yo"], function(e, t, a, n) {
  var s;
  a._locale._eraYearOrdinalRegex && (s = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? t[x] = a._locale.eraYearOrdinalParse(e, s) : t[x] = parseInt(e, 10);
});
function Oi(e, t) {
  var a, n, s, r = this._eras || Ye("en")._eras;
  for (a = 0, n = r.length; a < n; ++a) {
    switch (typeof r[a].since) {
      case "string":
        s = d(r[a].since).startOf("day"), r[a].since = s.valueOf();
        break;
    }
    switch (typeof r[a].until) {
      case "undefined":
        r[a].until = 1 / 0;
        break;
      case "string":
        s = d(r[a].until).startOf("day").valueOf(), r[a].until = s.valueOf();
        break;
    }
  }
  return r;
}
function Ci(e, t, a) {
  var n, s, r = this.eras(), i, o, h;
  for (e = e.toUpperCase(), n = 0, s = r.length; n < s; ++n)
    if (i = r[n].name.toUpperCase(), o = r[n].abbr.toUpperCase(), h = r[n].narrow.toUpperCase(), a)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return r[n];
          break;
        case "NNNN":
          if (i === e)
            return r[n];
          break;
        case "NNNNN":
          if (h === e)
            return r[n];
          break;
      }
    else if ([i, o, h].indexOf(e) >= 0)
      return r[n];
}
function Fi(e, t) {
  var a = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * a;
}
function Vi() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].name;
  return "";
}
function Pi() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].narrow;
  return "";
}
function Ri() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].abbr;
  return "";
}
function Wi() {
  var e, t, a, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (a = s[e].since <= s[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return (this.year() - d(s[e].since).year()) * a + s[e].offset;
  return this.year();
}
function Ai(e) {
  return O(this, "_erasNameRegex") || Ya.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Ii(e) {
  return O(this, "_erasAbbrRegex") || Ya.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Hi(e) {
  return O(this, "_erasNarrowRegex") || Ya.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Na(e, t) {
  return t.erasAbbrRegex(e);
}
function Ui(e, t) {
  return t.erasNameRegex(e);
}
function Li(e, t) {
  return t.erasNarrowRegex(e);
}
function $i(e, t) {
  return t._eraYearOrdinalRegex || xe;
}
function Ya() {
  var e = [], t = [], a = [], n = [], s, r, i = this.eras();
  for (s = 0, r = i.length; s < r; ++s)
    t.push(ae(i[s].name)), e.push(ae(i[s].abbr)), a.push(ae(i[s].narrow)), n.push(ae(i[s].name)), n.push(ae(i[s].abbr)), n.push(ae(i[s].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  );
}
y(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
y(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function $t(e, t) {
  y(0, [e, e.length], 0, t);
}
$t("gggg", "weekYear");
$t("ggggg", "weekYear");
$t("GGGG", "isoWeekYear");
$t("GGGGG", "isoWeekYear");
J("weekYear", "gg");
J("isoWeekYear", "GG");
Z("weekYear", 1);
Z("isoWeekYear", 1);
f("G", At);
f("g", At);
f("GG", U, ne);
f("gg", U, ne);
f("GGGG", ga, ya);
f("gggg", ga, ya);
f("GGGGG", Wt, Pt);
f("ggggg", Wt, Pt);
yt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, a, n) {
    t[n.substr(0, 2)] = M(e);
  }
);
yt(["gg", "GG"], function(e, t, a, n) {
  t[n] = d.parseTwoDigitYear(e);
});
function ji(e) {
  return bn.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Ei(e) {
  return bn.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Bi() {
  return ke(this.year(), 1, 4);
}
function zi() {
  return ke(this.isoWeekYear(), 1, 4);
}
function Gi() {
  var e = this.localeData()._week;
  return ke(this.year(), e.dow, e.doy);
}
function xi() {
  var e = this.localeData()._week;
  return ke(this.weekYear(), e.dow, e.doy);
}
function bn(e, t, a, n, s) {
  var r;
  return e == null ? ut(this, n, s).year : (r = ke(e, n, s), t > r && (t = r), Ji.call(this, e, t, a, n, s));
}
function Ji(e, t, a, n, s) {
  var r = en(e, t, a, n, s), i = lt(r.year, 0, r.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
J("quarter", "Q");
Z("quarter", 7);
f("Q", Ba);
W("Q", function(e, t) {
  t[Me] = (M(e) - 1) * 3;
});
function Zi(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
y("D", ["DD", 2], "Do", "date");
J("date", "D");
Z("date", 9);
f("D", U);
f("DD", U, ne);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
W(["D", "DD"], ye);
W("Do", function(e, t) {
  t[ye] = M(e.match(U)[0]);
});
var Mn = Ge("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
J("dayOfYear", "DDD");
Z("dayOfYear", 4);
f("DDD", Rt);
f("DDDD", za);
W(["DDD", "DDDD"], function(e, t, a) {
  a._dayOfYear = M(e);
});
function qi(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
y("m", ["mm", 2], 0, "minute");
J("minute", "m");
Z("minute", 14);
f("m", U);
f("mm", U, ne);
W(["m", "mm"], le);
var Qi = Ge("Minutes", !1);
y("s", ["ss", 2], 0, "second");
J("second", "s");
Z("second", 15);
f("s", U);
f("ss", U, ne);
W(["s", "ss"], _e);
var Ki = Ge("Seconds", !1);
y("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
y(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
y(0, ["SSS", 3], 0, "millisecond");
y(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
y(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
y(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
y(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
y(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
y(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
J("millisecond", "ms");
Z("millisecond", 16);
f("S", Rt, Ba);
f("SS", Rt, ne);
f("SSS", Rt, za);
var Ce, _n;
for (Ce = "SSSS"; Ce.length <= 9; Ce += "S")
  f(Ce, xe);
function Xi(e, t) {
  t[Ae] = M(("0." + e) * 1e3);
}
for (Ce = "S"; Ce.length <= 9; Ce += "S")
  W(Ce, Xi);
_n = Ge("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function eo() {
  return this._isUTC ? "UTC" : "";
}
function to() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = ht.prototype;
l.add = xr;
l.calendar = ei;
l.clone = ti;
l.diff = li;
l.endOf = wi;
l.format = fi;
l.from = hi;
l.fromNow = mi;
l.to = yi;
l.toNow = gi;
l.get = ns;
l.invalidAt = Yi;
l.isAfter = ai;
l.isBefore = ni;
l.isBetween = si;
l.isSame = ri;
l.isSameOrAfter = ii;
l.isSameOrBefore = oi;
l.isValid = ki;
l.lang = Dn;
l.locale = gn;
l.localeData = wn;
l.max = kr;
l.min = _r;
l.parsingFlags = Ni;
l.set = ss;
l.startOf = Di;
l.subtract = Jr;
l.toArray = bi;
l.toObject = Mi;
l.toDate = vi;
l.toISOString = di;
l.inspect = ci;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = _i;
l.toString = ui;
l.unix = pi;
l.valueOf = Si;
l.creationData = Ti;
l.eraName = Vi;
l.eraNarrow = Pi;
l.eraAbbr = Ri;
l.eraYear = Wi;
l.year = Xa;
l.isLeapYear = Ms;
l.weekYear = ji;
l.isoWeekYear = Ei;
l.quarter = l.quarters = Zi;
l.month = Qa;
l.daysInMonth = ps;
l.week = l.weeks = Os;
l.isoWeek = l.isoWeeks = Cs;
l.weeksInYear = Gi;
l.weeksInWeekYear = xi;
l.isoWeeksInYear = Bi;
l.isoWeeksInISOWeekYear = zi;
l.date = Mn;
l.day = l.days = Es;
l.weekday = Bs;
l.isoWeekday = zs;
l.dayOfYear = qi;
l.hour = l.hours = Ks;
l.minute = l.minutes = Qi;
l.second = l.seconds = Ki;
l.millisecond = l.milliseconds = _n;
l.utcOffset = Rr;
l.utc = Ar;
l.local = Ir;
l.parseZone = Hr;
l.hasAlignedHourOffset = Ur;
l.isDST = Lr;
l.isLocal = jr;
l.isUtcOffset = Er;
l.isUtc = fn;
l.isUTC = fn;
l.zoneAbbr = eo;
l.zoneName = to;
l.dates = re(
  "dates accessor is deprecated. Use date instead.",
  Mn
);
l.months = re(
  "months accessor is deprecated. Use month instead",
  Qa
);
l.years = re(
  "years accessor is deprecated. Use year instead",
  Xa
);
l.zone = re(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Wr
);
l.isDSTShifted = re(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  $r
);
function ao(e) {
  return H(e * 1e3);
}
function no() {
  return H.apply(null, arguments).parseZone();
}
function kn(e) {
  return e;
}
var C = fa.prototype;
C.calendar = En;
C.longDateFormat = xn;
C.invalidDate = Zn;
C.ordinal = Kn;
C.preparse = kn;
C.postformat = kn;
C.relativeTime = es;
C.pastFuture = ts;
C.set = $n;
C.eras = Oi;
C.erasParse = Ci;
C.erasConvertYear = Fi;
C.erasAbbrRegex = Ii;
C.erasNameRegex = Ai;
C.erasNarrowRegex = Hi;
C.months = gs;
C.monthsShort = Ds;
C.monthsParse = Ss;
C.monthsRegex = bs;
C.monthsShortRegex = vs;
C.week = ks;
C.firstDayOfYear = Ts;
C.firstDayOfWeek = Ys;
C.weekdays = Hs;
C.weekdaysMin = Ls;
C.weekdaysShort = Us;
C.weekdaysParse = js;
C.weekdaysRegex = Gs;
C.weekdaysShortRegex = xs;
C.weekdaysMinRegex = Js;
C.isPM = qs;
C.meridiem = Xs;
function Ot(e, t, a, n) {
  var s = Ye(), r = we().set(n, t);
  return s[a](r, e);
}
function Nn(e, t, a) {
  if (Ne(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ot(e, t, a, "month");
  var n, s = [];
  for (n = 0; n < 12; n++)
    s[n] = Ot(e, n, a, "month");
  return s;
}
function Ta(e, t, a, n) {
  typeof e == "boolean" ? (Ne(t) && (a = t, t = void 0), t = t || "") : (t = e, a = t, e = !1, Ne(t) && (a = t, t = void 0), t = t || "");
  var s = Ye(), r = e ? s._week.dow : 0, i, o = [];
  if (a != null)
    return Ot(t, (a + r) % 7, n, "day");
  for (i = 0; i < 7; i++)
    o[i] = Ot(t, (i + r) % 7, n, "day");
  return o;
}
function so(e, t) {
  return Nn(e, t, "months");
}
function ro(e, t) {
  return Nn(e, t, "monthsShort");
}
function io(e, t, a) {
  return Ta(e, t, a, "weekdays");
}
function oo(e, t, a) {
  return Ta(e, t, a, "weekdaysShort");
}
function lo(e, t, a) {
  return Ta(e, t, a, "weekdaysMin");
}
Fe("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, a = M(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + a;
  }
});
d.lang = re(
  "moment.lang is deprecated. Use moment.locale instead.",
  Fe
);
d.langData = re(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Ye
);
var pe = Math.abs;
function uo() {
  var e = this._data;
  return this._milliseconds = pe(this._milliseconds), this._days = pe(this._days), this._months = pe(this._months), e.milliseconds = pe(e.milliseconds), e.seconds = pe(e.seconds), e.minutes = pe(e.minutes), e.hours = pe(e.hours), e.months = pe(e.months), e.years = pe(e.years), this;
}
function Yn(e, t, a, n) {
  var s = ce(t, a);
  return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble();
}
function co(e, t) {
  return Yn(this, e, t, 1);
}
function fo(e, t) {
  return Yn(this, e, t, -1);
}
function Wa(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ho() {
  var e = this._milliseconds, t = this._days, a = this._months, n = this._data, s, r, i, o, h;
  return e >= 0 && t >= 0 && a >= 0 || e <= 0 && t <= 0 && a <= 0 || (e += Wa(ra(a) + t) * 864e5, t = 0, a = 0), n.milliseconds = e % 1e3, s = se(e / 1e3), n.seconds = s % 60, r = se(s / 60), n.minutes = r % 60, i = se(r / 60), n.hours = i % 24, t += se(i / 24), h = se(Tn(t)), a += h, t -= Wa(ra(h)), o = se(a / 12), a %= 12, n.days = t, n.months = a, n.years = o, this;
}
function Tn(e) {
  return e * 4800 / 146097;
}
function ra(e) {
  return e * 146097 / 4800;
}
function mo(e) {
  if (!this.isValid())
    return NaN;
  var t, a, n = this._milliseconds;
  if (e = ie(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, a = this._months + Tn(t), e) {
      case "month":
        return a;
      case "quarter":
        return a / 3;
      case "year":
        return a / 12;
    }
  else
    switch (t = this._days + Math.round(ra(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function yo() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + M(this._months / 12) * 31536e6 : NaN;
}
function Te(e) {
  return function() {
    return this.as(e);
  };
}
var go = Te("ms"), Do = Te("s"), wo = Te("m"), So = Te("h"), po = Te("d"), vo = Te("w"), bo = Te("M"), Mo = Te("Q"), _o = Te("y");
function ko() {
  return ce(this);
}
function No(e) {
  return e = ie(e), this.isValid() ? this[e + "s"]() : NaN;
}
function He(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Yo = He("milliseconds"), To = He("seconds"), Oo = He("minutes"), Co = He("hours"), Fo = He("days"), Vo = He("months"), Po = He("years");
function Ro() {
  return se(this.days() / 7);
}
var be = Math.round, $e = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Wo(e, t, a, n, s) {
  return s.relativeTime(t || 1, !!a, e, n);
}
function Ao(e, t, a, n) {
  var s = ce(e).abs(), r = be(s.as("s")), i = be(s.as("m")), o = be(s.as("h")), h = be(s.as("d")), D = be(s.as("M")), _ = be(s.as("w")), F = be(s.as("y")), P = r <= a.ss && ["s", r] || r < a.s && ["ss", r] || i <= 1 && ["m"] || i < a.m && ["mm", i] || o <= 1 && ["h"] || o < a.h && ["hh", o] || h <= 1 && ["d"] || h < a.d && ["dd", h];
  return a.w != null && (P = P || _ <= 1 && ["w"] || _ < a.w && ["ww", _]), P = P || D <= 1 && ["M"] || D < a.M && ["MM", D] || F <= 1 && ["y"] || ["yy", F], P[2] = t, P[3] = +e > 0, P[4] = n, Wo.apply(null, P);
}
function Io(e) {
  return e === void 0 ? be : typeof e == "function" ? (be = e, !0) : !1;
}
function Ho(e, t) {
  return $e[e] === void 0 ? !1 : t === void 0 ? $e[e] : ($e[e] = t, e === "s" && ($e.ss = t - 1), !0);
}
function Uo(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var a = !1, n = $e, s, r;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (a = e), typeof t == "object" && (n = Object.assign({}, $e, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), s = this.localeData(), r = Ao(this, !a, n, s), a && (r = s.pastFuture(+this, r)), s.postformat(r);
}
var Qt = Math.abs;
function Ue(e) {
  return (e > 0) - (e < 0) || +e;
}
function jt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Qt(this._milliseconds) / 1e3, t = Qt(this._days), a = Qt(this._months), n, s, r, i, o = this.asSeconds(), h, D, _, F;
  return o ? (n = se(e / 60), s = se(n / 60), e %= 60, n %= 60, r = se(a / 12), a %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", h = o < 0 ? "-" : "", D = Ue(this._months) !== Ue(o) ? "-" : "", _ = Ue(this._days) !== Ue(o) ? "-" : "", F = Ue(this._milliseconds) !== Ue(o) ? "-" : "", h + "P" + (r ? D + r + "Y" : "") + (a ? D + a + "M" : "") + (t ? _ + t + "D" : "") + (s || n || e ? "T" : "") + (s ? F + s + "H" : "") + (n ? F + n + "M" : "") + (e ? F + i + "S" : "")) : "P0D";
}
var N = Lt.prototype;
N.isValid = Cr;
N.abs = uo;
N.add = co;
N.subtract = fo;
N.as = mo;
N.asMilliseconds = go;
N.asSeconds = Do;
N.asMinutes = wo;
N.asHours = So;
N.asDays = po;
N.asWeeks = vo;
N.asMonths = bo;
N.asQuarters = Mo;
N.asYears = _o;
N.valueOf = yo;
N._bubble = ho;
N.clone = ko;
N.get = No;
N.milliseconds = Yo;
N.seconds = To;
N.minutes = Oo;
N.hours = Co;
N.days = Fo;
N.weeks = Ro;
N.months = Vo;
N.years = Po;
N.humanize = Uo;
N.toISOString = jt;
N.toString = jt;
N.toJSON = jt;
N.locale = gn;
N.localeData = wn;
N.toIsoString = re(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  jt
);
N.lang = Dn;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
f("x", At);
f("X", is);
W("X", function(e, t, a) {
  a._d = new Date(parseFloat(e) * 1e3);
});
W("x", function(e, t, a) {
  a._d = new Date(M(e));
});
//! moment.js
d.version = "2.29.4";
Un(H);
d.fn = l;
d.min = Nr;
d.max = Yr;
d.now = Tr;
d.utc = we;
d.unix = ao;
d.months = so;
d.isDate = ft;
d.locale = Fe;
d.invalid = Ft;
d.duration = ce;
d.isMoment = de;
d.weekdays = io;
d.parseZone = no;
d.localeData = Ye;
d.isDuration = vt;
d.monthsShort = ro;
d.weekdaysMin = lo;
d.defineLocale = pa;
d.updateLocale = nr;
d.locales = sr;
d.weekdaysShort = oo;
d.normalizeUnits = ie;
d.relativeTimeRounding = Io;
d.relativeTimeThreshold = Ho;
d.calendarFormat = Xr;
d.prototype = l;
d.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const Lo = ze({
  name: "IconView",
  props: {
    height: {
      type: [String, Number],
      default: "16"
    },
    width: {
      type: [String, Number],
      default: "16"
    },
    color: {
      type: String,
      default: "black"
    },
    customClass: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup() {
    return {};
  }
}), Je = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, s] of t)
    a[n] = s;
  return a;
}, $o = ["height", "width"], jo = ["fill"];
function Eo(e, t, a, n, s, r) {
  return k(), T("span", {
    class: I(e.customClass)
  }, [
    (k(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      height: e.height,
      width: e.width,
      role: "img",
      "aria-hidden": "true",
      "data-icon": "calendarAlt"
    }, [
      A("path", {
        fill: e.color,
        d: "M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
      }, null, 8, jo)
    ], 8, $o))
  ], 2);
}
const Bo = /* @__PURE__ */ Je(Lo, [["render", Eo]]), S = (e, t = !1) => t ? e.getUTCFullYear() : e.getFullYear(), R = (e, t = !1) => t ? e.getUTCMonth() : e.getMonth(), te = (e, t = !1) => t ? e.getUTCDate() : e.getDate(), me = (e, t = !1) => t ? e.getUTCDay() : e.getDay(), ia = (e, t, a = !1) => a ? e.setUTCFullYear(t) : e.setFullYear(t), On = (e, t, a = !1) => a ? e.setUTCMonth(t) : e.setMonth(t), Mt = (e, t, a = !1) => a ? e.setUTCDate(t) : e.setDate(t), St = (e, t, a = !1) => {
  const n = new Date(e.getTime()), s = new Date(t.getTime());
  return a ? (n.setUTCHours(0, 0, 0, 0), s.setUTCHours(0, 0, 0, 0)) : (n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0)), n.getTime() === s.getTime();
}, zo = (e) => Object.prototype.toString.call(e) !== "[object Date]" ? !1 : !Number.isNaN(e.getTime()), Et = (e, t) => {
  if (typeof e != "object")
    throw TypeError("Invalid Type");
  return t[me(e)];
}, ct = (e, t) => {
  if (!t)
    throw Error("missing 2nd parameter Months array");
  if (typeof e == "object")
    return t[R(e)];
  if (typeof e == "number")
    return t[e];
  throw TypeError("Invalid type");
}, Bt = (e, t) => {
  if (!t)
    throw Error("missing 2nd paramter Months array");
  if (typeof e == "object")
    return t[R(e)];
  if (typeof e == "number")
    return t[e];
  throw TypeError("Invalid type");
}, Go = (e, t) => /8|3|5|10/.test(t) ? 30 : t === 1 ? !(e % 4) && e % 100 || !(e % 400) ? 29 : 28 : 31, xo = (e) => {
  switch (e) {
    case 1:
    case 21:
    case 31:
      return "st";
    case 2:
    case 22:
      return "nd";
    case 3:
    case 23:
      return "rd";
    default:
      return "th";
  }
}, Jo = (e, t, a) => {
  const n = S(e), s = R(e) + 1, r = te(e);
  return t.replace(/dd/, `0${r}`.slice(-2)).replace(/d/, r).replace(/yyyy/, n).replace(/yy/, String(n).slice(2)).replace(/MMMM/, ct(R(e), a.months)).replace(/MMM/, Bt(R(e), a.monthsAbbr)).replace(/MM/, `0${s}`.slice(-2)).replace(/M(?!a|ä|e)/, s.toString()).replace(/su/, xo(te(e))).replace(/D(?!e|é|i)/, Et(e, a.days));
}, Zo = (e) => e === null || e instanceof Date || typeof e == "string" || typeof e == "number", ge = (e) => typeof e == "string" ? new Date(e) : e, qo = ze({
  name: "DateInput",
  components: {
    IconView: Bo
  },
  props: {
    selectedDate: {
      type: [Date, String],
      default: null
    },
    resetTypedDate: {
      type: [Date],
      default: /* @__PURE__ */ new Date()
    },
    format: {
      type: [String, Function]
    },
    translation: {
      type: Object
    },
    inline: {
      type: Boolean
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    openDate: {
      type: Date
    },
    placeholder: {
      type: String
    },
    inputClass: {
      type: [String, Object, Array]
    },
    clearButton: {
      type: Boolean
    },
    clearButtonIcon: {
      type: String
    },
    calendarButton: {
      type: Boolean
    },
    calendarButtonIcon: {
      type: String
    },
    calendarButtonIconContent: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    typeable: {
      type: Boolean
    },
    addBootstrapClass: {
      type: Boolean,
      default: !1,
      required: !1
    },
    useUtc: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    hideInput: {
      type: Boolean,
      default: !0
    },
    fullMonthName: {
      type: Boolean,
      default: !1
    },
    iconColor: {
      default: "black",
      type: String
    },
    iconHeight: {
      default: 16,
      type: [String, Number]
    },
    iconWidth: {
      default: 16,
      type: [String, Number]
    },
    theme: {
      default: "green",
      type: String
    }
  },
  emits: ["show-calendar", "typed-date", "clear-date", "close-calendar"],
  setup(e, { emit: t }) {
    const a = ve(), n = ve(null), s = v(() => e.addBootstrapClass ? typeof e.inputClass == "string" ? [e.inputClass, "form-control"].join(" ") : {
      "form-control": !0,
      ...e.inputClass
    } : e.inputClass), r = v(() => {
      var P, j;
      if (!e.selectedDate)
        return null;
      if (a.value)
        return a.value;
      const _ = ge(e.selectedDate);
      let F = typeof e.format == "function" ? e.format(_) : Jo(_, e.format, e.translation);
      if (e.minimumView === e.maximumView) {
        const [, fe, oe] = F.split(" ");
        if (e.maximumView === "month") {
          if (e.fullMonthName) {
            const he = (P = e.translation) == null ? void 0 : P.monthsAbbr.indexOf(fe);
            return (j = e.translation) == null ? void 0 : j.months[he];
          }
          F = fe;
        } else
          e.maximumView === "year" && (F = oe);
      }
      return F;
    });
    et(
      () => e.resetTypedDate,
      () => {
        a.value = "";
      }
    );
    function i() {
      t("show-calendar");
    }
    function o(_) {
      if ([
        27,
        // escape
        13
        // enter
      ].includes(_.keyCode) && n.value.blur(), e.typeable) {
        const { value: F } = n.value, P = typeof e.format == "function" ? e.format(F) : e.format, j = d(F, P.toUpperCase()).toDate();
        Number.isNaN(j) || (a.value = F, t("typed-date", new Date(j)));
      }
    }
    function h() {
      t("clear-date");
    }
    function D() {
      if (e.format) {
        const _ = n.value.value, F = typeof e.format == "function" ? e.format(_) : e.format;
        if (_) {
          const P = d(_, F.toUpperCase()).toDate();
          if (!P)
            h(), n.value.value = null, a.value = "";
          else {
            t("typed-date", P), t("close-calendar", !0);
            return;
          }
        }
      }
      e.typeable && Number.isNaN(Date.parse(n.value.value)) && (h(), n.value.value = null, a.value = ""), t("close-calendar", !0);
    }
    return {
      typedDate: a,
      computedInputClass: s,
      formattedValue: r,
      showCalendar: i,
      parseTypedDate: o,
      inputBlurred: D,
      inputRef: n,
      clearDate: h
    };
  }
});
const Qo = { key: 0 }, Ko = {
  key: 1,
  style: { position: "relative" }
}, Xo = { key: 0 }, el = ["type", "name", "id", "value", "open-date", "placeholder", "clear-button", "disabled", "required", "readonly"], tl = {
  key: 0,
  class: "vuejs3-datepicker__value"
}, al = { class: "vuejs3-datepicker__icon" }, nl = {
  key: 0,
  class: "vuejs3-datepicker__content"
}, sl = {
  key: 1,
  class: "vuejs3-datepicker__content"
}, rl = { key: 0 };
function il(e, t, a, n, s, r) {
  const i = tt("IconView");
  return k(), T("div", {
    class: I([e.addBootstrapClass ? "input-group" : ""])
  }, [
    e.calendarButton ? (k(), T("span", {
      key: 0,
      class: I(["vuejs3-datepicker__calendar-button", { "input-group-prepend": e.addBootstrapClass, "cursor-na": e.disabled }]),
      onClick: t[0] || (t[0] = (...o) => e.showCalendar && e.showCalendar(...o))
    }, [
      A("span", {
        class: I({ "input-group-text": e.addBootstrapClass })
      }, [
        A("i", {
          class: I(e.calendarButtonIcon)
        }, [
          Pn($(e.calendarButtonIconContent) + " ", 1),
          e.calendarButtonIcon ? G("", !0) : (k(), T("span", Qo, "…"))
        ], 2)
      ], 2)
    ], 2)) : G("", !0),
    e.typeable || !e.hideInput ? (k(), T("div", Ko, [
      e.inline ? G("", !0) : (k(), T("span", Xo, [
        Kt(i, {
          customClass: "vuejs3-datepicker__typeablecalendar",
          color: e.iconColor,
          width: e.iconWidth,
          height: e.iconHeight
        }, null, 8, ["color", "width", "height"])
      ])),
      A("input", {
        type: e.inline ? "hidden" : "text",
        class: I([e.computedInputClass, "vuejs3-datepicker__inputvalue"]),
        name: e.name,
        ref: "inputRef",
        id: e.id,
        value: e.formattedValue,
        "open-date": e.openDate,
        placeholder: e.placeholder,
        "clear-button": e.clearButton,
        disabled: e.disabled,
        required: e.required,
        readonly: !e.typeable,
        onClick: t[1] || (t[1] = (...o) => e.showCalendar && e.showCalendar(...o)),
        onKeyup: t[2] || (t[2] = (...o) => e.parseTypedDate && e.parseTypedDate(...o)),
        onBlur: t[3] || (t[3] = (...o) => e.inputBlurred && e.inputBlurred(...o)),
        autocomplete: "off"
      }, null, 42, el)
    ])) : (k(), T("div", {
      key: 2,
      onClick: t[4] || (t[4] = (...o) => e.showCalendar && e.showCalendar(...o)),
      id: "calendar-div"
    }, [
      e.inline ? G("", !0) : (k(), T("div", tl, [
        A("span", al, [
          Kt(i, {
            color: e.iconColor,
            width: e.iconWidth,
            height: e.iconHeight
          }, null, 8, ["color", "width", "height"])
        ]),
        e.formattedValue ? (k(), T("div", nl, $(e.formattedValue), 1)) : (k(), T("div", sl, $(e.placeholder), 1))
      ]))
    ])),
    e.clearButton && e.selectedDate ? (k(), T("span", {
      key: 3,
      class: I(["vuejs3-datepicker__clear-button", { "input-group-append": e.addBootstrapClass }]),
      onClick: t[5] || (t[5] = (o) => e.clearDate())
    }, [
      A("span", {
        class: I({ "input-group-text": e.addBootstrapClass })
      }, [
        A("i", {
          class: I(e.clearButtonIcon)
        }, [
          e.clearButtonIcon ? G("", !0) : (k(), T("span", rl, "×"))
        ], 2)
      ], 2)
    ], 2)) : G("", !0),
    K(e.$slots, "belowDate", {}, void 0, !0)
  ], 2);
}
const ol = /* @__PURE__ */ Je(qo, [["render", il], ["__scopeId", "data-v-b8cfae44"]]), ll = ze({
  name: "PickerDay",
  props: {
    showDayView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null
    },
    pageDate: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    fullMonthName: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function,
      required: !0
    },
    dayCellContent: {
      type: Function,
      default: (e) => e.date
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    mondayFirst: {
      type: Boolean
    },
    useUtc: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    preventDisableDateSelection: {
      type: Boolean,
      default: !0
    },
    theme: {
      default: "green",
      type: String
    }
  },
  emits: ["show-year-calendar", "changed-month", "show-month-calendar", "selected-disabled", "select-date"],
  setup(e, { emit: t }) {
    function a(u) {
      u.isDisabled ? (t("selected-disabled", u), e.preventDisableDateSelection || t("select-date", u)) : t("select-date", u);
    }
    function n() {
      t("show-month-calendar");
    }
    function s() {
      t("show-year-calendar");
    }
    function r(u) {
      const m = e.pageDate;
      On(m, R(m) + u), t("changed-month", m);
    }
    function i() {
      const u = e.disabledDates;
      if (!u || !u.to)
        return !1;
      const m = e.pageDate;
      return R(u.to) >= R(m) && S(u.to) >= S(m);
    }
    function o() {
      i() || r(-1);
    }
    function h() {
      const u = e.disabledDates;
      if (!u || !u.from)
        return !1;
      const m = e.pageDate;
      return R(u.from) <= R(m) && S(u.from) <= S(m);
    }
    function D() {
      h() || r(1);
    }
    function _(u) {
      const m = ge(e.selectedDate);
      return e.selectedDate ? St(m, u) : !1;
    }
    function F(u) {
      let m = !1;
      const w = e.disabledDates;
      return w ? typeof w > "u" ? !1 : (typeof w.dates < "u" && w.dates.forEach((Pe) => {
        St(u, Pe) && (m = !0);
      }), typeof w.to < "u" && w.to && u < w.to && (m = !0), typeof w.from < "u" && w.from && u > w.from && (m = !0), typeof w.days < "u" && w.days.indexOf(me(u)) !== -1 && (m = !0), typeof w.daysOfMonth < "u" && w.daysOfMonth.indexOf(te(u)) !== -1 && (m = !0), typeof w.customPredictor == "function" && w.customPredictor(u) && (m = !0), m) : m;
    }
    function P(u) {
      return typeof u < "u" && u;
    }
    function j(u) {
      const m = e.highlighted;
      if (!(m && m.includeDisabled) && F(u))
        return !1;
      let w = !1;
      return typeof m > "u" ? !1 : (typeof m.dates < "u" && m.dates.forEach((Pe) => {
        St(u, Pe) && (w = !0);
      }), P(m.from) && P(m.to) && (w = u >= m.from && u <= m.to), typeof m.days < "u" && m.days.indexOf(me(u)) !== -1 && (w = !0), typeof m.daysOfMonth < "u" && m.daysOfMonth.indexOf(te(u)) !== -1 && (w = !0), typeof m.customPredictor == "function" && m.customPredictor(u) && (w = !0), w);
    }
    function fe(u) {
      return {
        selected: u.isSelected,
        disabled: u.isDisabled,
        highlighted: u.isHighlighted,
        today: u.isToday,
        weekend: u.isWeekend,
        sat: u.isSaturday,
        sun: u.isSunday,
        "highlight-start": u.isHighlightStart,
        "highlight-end": u.isHighlightEnd
      };
    }
    function oe(u) {
      const m = e.highlighted;
      return m ? j(u) && m.from instanceof Date && S(m.from) === S(u) && R(m.from) === R(u) && te(m.from) === te(u) : !1;
    }
    function he(u) {
      const m = e.highlighted;
      return m ? j(u) && m.to instanceof Date && S(m.to) === S(u) && R(m.to) === R(u) && te(m.to) === te(u) : !1;
    }
    const q = v(() => {
      if (e.mondayFirst) {
        const u = e.translation && e.translation.days && e.translation.days.slice();
        return u.push(u.shift()), u;
      }
      return e.translation && e.translation.days;
    }), X = v(() => {
      const u = e.pageDate, m = e.useUtc ? new Date(Date.UTC(u.getUTCFullYear(), u.getUTCMonth(), 1)) : new Date(u.getFullYear(), u.getMonth(), 1, u.getHours(), u.getMinutes());
      return e.mondayFirst ? me(m) > 0 ? me(m) - 1 : 6 : me(m);
    }), ee = v(() => {
      const u = e.pageDate, m = [], w = e.useUtc ? new Date(Date.UTC(u.getUTCFullYear(), u.getUTCMonth(), 1)) : new Date(u.getFullYear(), u.getMonth(), 1, u.getHours(), u.getMinutes()), Pe = Go(S(w), R(w));
      for (let Qe = 0; Qe < Pe; Qe += 1)
        m.push({
          date: te(w),
          timestamp: w.getTime(),
          isSelected: _(w),
          isDisabled: F(w),
          isHighlighted: j(w),
          isHighlightStart: oe(w),
          isHighlightEnd: he(w),
          isToday: St(w, /* @__PURE__ */ new Date()),
          isWeekend: me(w) === 0 || me(w) === 6,
          isSaturday: me(w) === 6,
          isSunday: me(w) === 0
        }), Mt(w, te(w) + 1);
      return m;
    }), g = v(() => {
      const u = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return Bt(R(e.pageDate), u);
    }), c = v(() => {
      const u = e.translation && e.translation.months;
      return ct(R(e.pageDate), u);
    }), Y = v(() => {
      const u = e.translation && e.translation.yearSuffix;
      return `${S(e.pageDate)}${u}`;
    }), V = v(() => (e.translation && e.translation.ymd && e.translation && e.translation.ymd) === !0), Ve = v(() => e.isRtl ? h() : i()), Ze = v(() => e.isRtl ? i() : h()), zt = v(() => {
      const u = ge(e.selectedDate);
      return e.selectedDate ? Et(u, e.translation && e.translation.daysNames) : null;
    }), qe = v(() => {
      const u = ge(e.selectedDate);
      return e.selectedDate ? te(u) : null;
    }), Gt = v(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isDefined: P,
      showMonthCalendar: n,
      daysOfWeek: q,
      blankDays: X,
      isYmd: V,
      days: ee,
      currMonthName: g,
      currYearName: Y,
      isLeftNavDisabled: Ve,
      isRightNavDisabled: Ze,
      selectDate: a,
      previousMonth: o,
      nextMonth: D,
      dayClasses: fe,
      monthName: c,
      getDayName: zt,
      getDisplayDate: qe,
      showYearCalendar: s,
      isNextMonthDisabled: h,
      ifDifferentViews: Gt,
      isSelectedDate: _,
      isDisabledDate: F,
      isHighlightedDate: j,
      isHighlightStart: oe,
      isHighlightEnd: he
    };
  }
}), ul = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, dl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, cl = { class: "vuejs3-datepicker__calendar-actionarea" }, fl = ["innerHTML", "onClick"];
function hl(e, t, a, n, s, r) {
  return Ct((k(), T("div", {
    class: I(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: oa(e.calendarStyle),
    onMousedown: t[4] || (t[4] = ot(() => {
    }, ["prevent"]))
  }, [
    K(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (k(), T("section", ul, [
      A("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: t[0] || (t[0] = (...i) => e.showYearCalendar && e.showYearCalendar(...i))
      }, $(e.currYearName), 1),
      K(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (k(), T("p", dl, $(e.getDayName) + " " + $(e.getDisplayDate) + " " + $(e.monthName), 1)) : G("", !0)
      ])
    ])) : G("", !0),
    A("div", cl, [
      A("header", null, [
        A("span", {
          onClick: t[1] || (t[1] = (i) => e.isRtl ? e.nextMonth() : e.previousMonth()),
          class: I(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        A("span", {
          class: I(["day__month_btn", e.allowedToShowView("month") ? "up" : ""]),
          onClick: t[2] || (t[2] = (...i) => e.showMonthCalendar && e.showMonthCalendar(...i))
        }, $(e.isYmd ? e.currYearName : e.currMonthName) + " " + $(e.isYmd ? e.currMonthName : e.currYearName), 3),
        A("span", {
          onClick: t[3] || (t[3] = (i) => e.isRtl ? e.previousMonth() : e.nextMonth()),
          class: I(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      A("div", {
        class: I(e.isRtl ? "flex-rtl" : "")
      }, [
        (k(!0), T(at, null, nt(e.daysOfWeek, (i) => (k(), T("span", {
          class: "cell day-header",
          key: i.timestamp
        }, $(i), 1))), 128)),
        e.blankDays > 0 ? (k(!0), T(at, { key: 0 }, nt(e.blankDays, (i) => (k(), T("span", {
          class: "cell day blank",
          key: i.timestamp
        }))), 128)) : G("", !0),
        (k(!0), T(at, null, nt(e.days, (i) => (k(), T("span", {
          class: I(["cell day", e.dayClasses(i)]),
          key: i.timestamp,
          innerHTML: e.dayCellContent(i),
          onClick: (o) => e.selectDate(i)
        }, null, 10, fl))), 128))
      ], 2)
    ])
  ], 38)), [
    [la, e.showDayView]
  ]);
}
const ml = /* @__PURE__ */ Je(ll, [["render", hl]]), yl = ze({
  name: "PickerMonth",
  props: {
    showMonthView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null
    },
    pageDate: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    disabledDates: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function,
      required: !0
    },
    useUtc: {
      type: Boolean
    },
    fullMonthName: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    theme: {
      default: "green",
      type: String
    }
  },
  setup(e, { emit: t }) {
    function a(c) {
      c.isDisabled || t("select-month", c);
    }
    function n(c) {
      const Y = e.pageDate;
      ia(Y, S(Y) + c), t("changed-year", Y);
    }
    function s() {
      const c = e.disabledDates;
      return !c || !c.to ? !1 : S(c.to) >= S(e.pageDate);
    }
    function r() {
      s() || n(-1);
    }
    function i() {
      const c = e.disabledDates;
      return !c || !c.from ? !1 : S(c.from) <= S(e.pageDate);
    }
    function o() {
      i() || n(1);
    }
    function h() {
      t("show-year-calendar");
    }
    function D(c) {
      const Y = ge(e.selectedDate);
      return Y && S(Y) === S(c) && R(Y) === R(c);
    }
    function _(c) {
      let Y = !1;
      const V = e.disabledDates;
      return !V || typeof V > "u" ? !1 : (typeof V.to < "u" && V.to && (R(c) < R(V.to) && S(c) <= S(V.to) || S(c) < S(V.to)) && (Y = !0), typeof V.from < "u" && V.from && (R(c) > R(V.from) && S(c) >= S(V.from) || S(c) > S(V.from)) && (Y = !0), typeof V.customPredictor == "function" && V.customPredictor(c) && (Y = !0), Y);
    }
    const F = v(() => {
      const c = e.pageDate, Y = [], V = e.useUtc ? new Date(Date.UTC(c.getUTCFullYear(), 0, c.getUTCDate())) : new Date(c.getFullYear(), 0, c.getDate(), c.getHours(), c.getMinutes());
      for (let Ve = 0; Ve < 12; Ve += 1)
        Y.push({
          month: ct(Ve, e.translation && e.translation.months),
          timestamp: V.getTime(),
          isSelected: D(V),
          isDisabled: _(V)
        }), On(V, R(V) + 1);
      return Y;
    }), P = v(() => {
      const c = e.translation && e.translation.yearSuffix;
      return `${S(e.pageDate)}${c}`;
    }), j = v(() => e.isRtl ? i() : s()), fe = v(() => e.isRtl ? s() : i()), oe = v(() => {
      const c = e.translation && e.translation.months;
      return ct(R(e.pageDate), c);
    }), he = v(() => {
      const c = ge(e.selectedDate);
      return e.selectedDate ? te(c) : null;
    }), q = v(() => {
      const c = ge(e.selectedDate);
      return e.selectedDate ? Et(c, e.translation && e.translation.daysNames) : null;
    }), X = v(() => {
      const c = e.translation && e.translation.yearSuffix;
      return `${S(e.pageDate)}${c}`;
    }), ee = v(() => {
      const c = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return Bt(R(e.pageDate), c);
    }), g = v(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: fe,
      isLeftNavDisabled: j,
      pageYearName: P,
      months: F,
      selectMonth: a,
      previousYear: r,
      nextYear: o,
      currYearName: X,
      getDisplayDate: he,
      monthName: oe,
      showYearCalendar: h,
      getDayName: q,
      currMonthName: ee,
      ifDifferentViews: g,
      isSelectedMonth: D,
      isDisabledMonth: _
    };
  }
}), gl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, Dl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, wl = { class: "vuejs3-datepicker__calendar-actionarea" }, Sl = ["onClick"];
function pl(e, t, a, n, s, r) {
  return Ct((k(), T("div", {
    class: I(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: oa(e.calendarStyle),
    onMousedown: t[4] || (t[4] = ot(() => {
    }, ["prevent"]))
  }, [
    K(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews ? (k(), T("section", gl, [
      A("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: t[0] || (t[0] = (...i) => e.showYearCalendar && e.showYearCalendar(...i))
      }, $(e.currYearName), 1),
      K(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (k(), T("p", Dl, $(e.getDayName) + " " + $(e.getDisplayDate) + " " + $(e.monthName), 1)) : G("", !0)
      ])
    ])) : G("", !0),
    A("div", wl, [
      A("header", null, [
        A("span", {
          onClick: t[1] || (t[1] = (i) => e.isRtl ? e.nextYear() : e.previousYear()),
          class: I(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        A("span", {
          class: I(["month__year_btn", e.allowedToShowView("year") ? "up" : ""]),
          onClick: t[2] || (t[2] = (...i) => e.showYearCalendar && e.showYearCalendar(...i))
        }, $(e.pageYearName), 3),
        A("span", {
          onClick: t[3] || (t[3] = (i) => e.isRtl ? e.previousYear() : e.nextYear()),
          class: I(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (k(!0), T(at, null, nt(e.months, (i) => (k(), T("span", {
        class: I(["cell month", { selected: i.isSelected, disabled: i.isDisabled }]),
        key: i.timestamp,
        onClick: ot((o) => e.selectMonth(i), ["stop"])
      }, $(i.month), 11, Sl))), 128))
    ])
  ], 38)), [
    [la, e.showMonthView]
  ]);
}
const vl = /* @__PURE__ */ Je(yl, [["render", pl]]), bl = ze({
  name: "PickerYear",
  props: {
    showYearView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null
    },
    pageDate: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function,
      required: !0
    },
    useUtc: {
      type: Boolean
    },
    fullMonthName: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    theme: {
      default: "green",
      type: String
    }
  },
  emits: ["select-year", "changed-decade"],
  setup(e, { emit: t }) {
    function a(g) {
      g.isDisabled || t("select-year", g);
    }
    function n(g) {
      const c = e.pageDate;
      ia(c, S(c) + g), t("changed-decade", c);
    }
    function s() {
      const g = e.disabledDates;
      if (!g || !g.to)
        return !1;
      const c = S(g.to), Y = Math.floor(S(e.pageDate) / 10) * 10 - 1;
      return c > Y;
    }
    function r() {
      s() || n(-10);
    }
    function i() {
      const g = e.disabledDates;
      if (!g || !g.from)
        return !1;
      const c = S(g.from), Y = Math.ceil(S(e.pageDate) / 10) * 10;
      return c <= Y;
    }
    function o() {
      i() || n(10);
    }
    function h(g) {
      const c = ge(e.selectedDate);
      return e.selectedDate ? S(c) === S(g) : !1;
    }
    function D(g) {
      let c = !1;
      return typeof e.disabledDates > "u" || !e.disabledDates ? !1 : (typeof e.disabledDates.to < "u" && e.disabledDates.to && S(g) < S(e.disabledDates.to) && (c = !0), typeof e.disabledDates.from < "u" && e.disabledDates.from && S(g) > S(e.disabledDates.from) && (c = !0), typeof e.disabledDates.customPredictor == "function" && (c = e.disabledDates.customPredictor(g)), c);
    }
    const _ = v(() => {
      const g = e.pageDate, c = [], Y = e.useUtc ? new Date(Date.UTC(Math.floor(g.getUTCFullYear() / 10) * 10, g.getUTCMonth(), g.getUTCDate())) : new Date(Math.floor(g.getFullYear() / 10) * 10, g.getMonth(), g.getDate(), g.getHours(), g.getMinutes());
      for (let V = 0; V < 10; V += 1)
        c.push({
          year: S(Y),
          timestamp: Y.getTime(),
          isSelected: h(Y),
          isDisabled: D(Y)
        }), ia(Y, S(Y) + 1);
      return c;
    }), F = v(() => {
      const g = Math.floor(S(e.pageDate) / 10) * 10, c = g + 9, Y = e.translation && e.translation.yearSuffix;
      return `${g} - ${c}${Y}`;
    }), P = v(() => e.isRtl ? i() : s()), j = v(() => e.isRtl ? s() : i()), fe = v(() => {
      const g = ge(e.selectedDate);
      return e.selectedDate ? Et(g, e.translation && e.translation.daysNames) : null;
    }), oe = v(() => {
      const g = e.translation && e.translation.months;
      return ct(R(e.pageDate), g);
    }), he = v(() => {
      const g = ge(e.selectedDate);
      return e.selectedDate ? te(g) : null;
    }), q = v(() => {
      const g = e.translation && e.translation.yearSuffix;
      return `${S(e.pageDate)}${g}`;
    }), X = v(() => {
      const g = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return Bt(R(e.pageDate), g);
    }), ee = v(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: j,
      isLeftNavDisabled: P,
      getPageDecade: F,
      years: _,
      nextDecade: o,
      previousDecade: r,
      selectYear: a,
      getDayName: fe,
      monthName: oe,
      getDisplayDate: he,
      currYearName: q,
      currMonthName: X,
      ifDifferentViews: ee,
      // methods
      isNextDecadeDisabled: i,
      isPreviousDecadeDisabled: s,
      isDisabledYear: D
    };
  }
}), Ml = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, _l = { class: "vuejs3-datepicker__calendar-topbar-year" }, kl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, Nl = { class: "vuejs3-datepicker__calendar-actionarea" }, Yl = ["onClick"];
function Tl(e, t, a, n, s, r) {
  return Ct((k(), T("div", {
    class: I(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: oa(e.calendarStyle),
    onMousedown: t[2] || (t[2] = ot(() => {
    }, ["prevent"]))
  }, [
    K(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (k(), T("section", Ml, [
      A("p", _l, $(e.currYearName), 1),
      K(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (k(), T("p", kl, $(e.getDayName) + " " + $(e.getDisplayDate) + " " + $(e.monthName), 1)) : G("", !0)
      ])
    ])) : G("", !0),
    A("div", Nl, [
      A("header", null, [
        A("span", {
          onClick: t[0] || (t[0] = (i) => e.isRtl ? e.nextDecade() : e.previousDecade()),
          class: I(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        A("span", null, $(e.getPageDecade), 1),
        A("span", {
          onClick: t[1] || (t[1] = (i) => e.isRtl ? e.previousDecade() : e.nextDecade()),
          class: I(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (k(!0), T(at, null, nt(e.years, (i) => (k(), T("span", {
        class: I(["cell year", { selected: i.isSelected, disabled: i.isDisabled }]),
        key: i.timestamp,
        onClick: ot((o) => e.selectYear(i), ["stop"])
      }, $(i.year), 11, Yl))), 128))
    ])
  ], 38)), [
    [la, e.showYearView]
  ]);
}
const Ol = /* @__PURE__ */ Je(bl, [["render", Tl]]), Cl = () => {
  const e = "العربية";
  return {
    months: [
      "كانون الثاني",
      "شباط",
      "آذار",
      "نيسان",
      "ايار",
      "حزيران",
      "تموز",
      "آب",
      "أيلول",
      "تشرين الاول",
      "تشرين الثاني",
      "كانون الاول"
    ],
    monthsAbbr: ["كانون الثاني", "شباط", "آذار", "نيسان", "ايار", "حزيران", "تموز", "آب", "أيلول", "تشرين الاول", "تشرين الثاني", "كانون الاول"],
    days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !0,
    langName: e,
    daysNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };
}, Fl = () => {
  const e = "Afrikaans", t = [
    "Januarie",
    "Februarie",
    "Maart",
    "April",
    "Mei",
    "Junie",
    "Julie",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ], a = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], n = ["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."];
  return {
    months: t,
    monthsAbbr: a,
    days: n,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    language: e,
    langName: e,
    daysNames: n
  };
}, Vl = () => {
  const e = "German";
  return {
    months: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    ],
    monthsAbbr: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    days: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
  };
}, Pl = () => {
  const e = "English";
  return {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    monthsAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
}, Rl = () => {
  const e = "Español";
  return {
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    monthsAbbr: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    days: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  };
}, Wl = () => {
  const e = "Français";
  return {
    months: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ],
    monthsAbbr: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"],
    days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  };
}, Al = () => {
  const e = "Hindi";
  return {
    months: [
      "जनवरी",
      "फ़रवरी",
      "मार्च",
      "अप्रैल",
      "मई",
      "जून",
      "जुलाई",
      "अगस्त",
      "सितंबर",
      "अक्टूबर",
      "नवंबर",
      "दिसंबर"
    ],
    monthsAbbr: ["जन", "फ़र", "मार्च", "अप्रै", "मई", "जून", "जुला", "अगस्त", "सितं", "अक्टू", "नवं", "दिसं"],
    days: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
  };
}, Il = () => {
  const e = "Japanese";
  return {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["日", "月", "火", "水", "木", "金", "土"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
  };
}, Hl = () => {
  const e = "Dutch", t = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december"
  ], a = ["jan.", "feb.", "mrt.", "apr.", "mei", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], n = ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."];
  return {
    months: t,
    monthsAbbr: a,
    days: n,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    language: e,
    daysNames: n
  };
}, Ul = () => {
  const e = "Português";
  return {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ],
    monthsAbbr: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado"
    ]
  };
}, Ll = () => {
  const e = "Italian";
  return {
    months: [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre"
    ],
    monthsAbbr: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    days: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Gioved", "Venerdì", "Sabato"]
  };
}, $l = () => {
  const e = "Polish";
  return {
    months: [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień"
    ],
    monthsAbbr: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
    days: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
  };
}, jl = () => {
  const e = "Russian";
  return {
    months: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
    monthsAbbr: ["Янв.", "Фев.", "Мар.", "Апр.", "Май", "Июн.", "Июл.", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."],
    days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
  };
}, El = () => {
  const e = "Türkçe";
  return {
    months: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
    ],
    monthsAbbr: ["Oca", "Şub", "Mar", "Nis", " May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
    days: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Pzr"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
  };
}, Bl = () => {
  const e = "Vietnamese";
  return {
    months: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12"
    ],
    monthsAbbr: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12"
    ],
    days: ["CN", "H", "B", "T", "N", "S", "B"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["CN", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
  };
}, zl = () => {
  const e = "Bulgarian";
  return {
    months: [
      "Януари",
      "Февруари",
      "Март",
      "Април",
      "Май",
      "Юни",
      "Юли",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември"
    ],
    monthsAbbr: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
    days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
  };
}, Gl = () => {
  const e = "Arabic-Tunisia", t = [
    "جانفي",
    "فيفري",
    "مارس",
    "أفريل",
    "ماي",
    "جوان",
    "جويلية",
    "أوت",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
  ];
  return {
    months: t,
    monthsAbbr: t,
    days: ["أحد", "أثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !0,
    langName: e,
    daysNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };
}, xl = () => {
  const e = "Indonesia";
  return {
    months: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "Nopember",
      "Desember"
    ],
    monthsAbbr: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nop", "Des"],
    days: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
  };
}, Jl = () => {
  const e = "kr";
  return {
    months: [
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
      "12월"
    ],
    monthsAbbr: [
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
      "12월"
    ],
    days: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일"
    ],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일"
    ]
  };
}, Zl = () => {
  const e = "繁體中文";
  return {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["日", "一", "二", "三", "四", "五", "六"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  };
}, ql = {
  ar: Cl(),
  af: Fl(),
  arTn: Gl(),
  hi: Al(),
  ja: Il(),
  de: Vl(),
  en: Pl(),
  es: Rl(),
  fr: Wl(),
  nl: Hl(),
  pt: Ul(),
  it: Ll(),
  pl: $l(),
  ru: jl(),
  tr: El(),
  zh_TW: Zl(),
  vn: Bl(),
  bg: zl(),
  kr: Jl(),
  id: xl()
}, Ql = ze({
  name: "Datepicker",
  components: {
    DateInput: ol,
    PickerDay: ml,
    PickerMonth: vl,
    PickerYear: Ol
  },
  directives: {
    clickoutside: An
  },
  props: {
    modelValue: {
      type: [Date, String, Number]
    },
    value: {
      type: [Date, String, Number]
    },
    format: {
      type: [String, Function],
      default: "dd MMM yyyy"
    },
    language: {
      type: String,
      default: "en"
    },
    openDate: {
      validator: (e) => Zo(e),
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    name: {
      type: String
    },
    id: {
      type: String
    },
    dayCellContent: {
      type: Function
    },
    fullMonthName: {
      type: Boolean
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    placeholder: {
      type: String
    },
    inline: {
      type: Boolean
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    inputClass: {
      type: [String, Object, Array]
    },
    wrapperClass: {
      type: [String, Object, Array]
    },
    mondayFirst: {
      type: Boolean
    },
    clearButton: {
      type: Boolean
    },
    clearButtonIcon: {
      type: String
    },
    calendarButton: {
      type: Boolean
    },
    calendarButtonIcon: {
      type: String
    },
    calendarButtonIconContent: {
      type: String
    },
    addBootstrapClass: {
      type: Boolean
    },
    initialView: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    typeable: {
      type: Boolean
    },
    useUtc: {
      type: Boolean
    },
    hideInput: {
      type: Boolean,
      default: !0
    },
    preventDisableDateSelection: {
      type: Boolean,
      default: !0
    },
    iconColor: {
      default: "black",
      type: String
    },
    iconHeight: {
      default: 16,
      type: [String, Number]
    },
    iconWidth: {
      default: 16,
      type: [String, Number]
    },
    theme: {
      default: "green",
      type: String
    }
  },
  emits: [
    "input",
    "cleared",
    "update:modelValue",
    "opened",
    "closed",
    "changed-month",
    "changed-year",
    "changed-day",
    "selected",
    "selected-disabled"
  ],
  setup(e, { emit: t }) {
    const a = new Date(e.modelValue), n = ve(0), s = ve(null);
    e.modelValue && zo(a) && (n.value = a.getTime(), s.value = a), e.openDate && (n.value = Mt(new Date(e.openDate), 1));
    const r = ve(!1), i = ve(!1), o = ve(!1), h = ve(0), D = ve(/* @__PURE__ */ new Date()), _ = v(() => e.initialView ? e.initialView : e.minimumView), F = v(() => new Date(n.value)), P = v(() => ql[e.language]), j = v(() => !!e.inline), fe = v(() => ({
      position: j.value ? "static" : void 0
    })), oe = v(() => r.value || i.value || o.value), he = v(() => P.value && P.value.rtl === !0);
    function q(p) {
      p || (e.openDate ? p = new Date(e.openDate) : p = /* @__PURE__ */ new Date()), n.value = Mt(new Date(p), 1);
    }
    function X(p) {
      const z = ["day", "month", "year"], gt = z.indexOf(e.minimumView), Vn = z.indexOf(e.maximumView), Oa = z.indexOf(p);
      return Oa >= gt && Oa <= Vn;
    }
    function ee(p) {
      r.value = !1, i.value = !1, o.value = !1, j.value || p && t("closed");
    }
    function g() {
      return X("day") ? (ee(), r.value = !0, !0) : !1;
    }
    function c() {
      return X("month") ? (ee(), i.value = !0, !0) : !1;
    }
    function Y() {
      return X("year") ? (ee(), o.value = !0, !0) : !1;
    }
    function V() {
      const p = _.value;
      if (!X(p))
        throw new Error(
          `initialView '${p}' cannot be rendered based on minimum '${e.minimumView}' and maximum '${e.maximumView}'`
        );
      switch (p) {
        case "year":
          Y();
          break;
        case "month":
          c();
          break;
        default:
          g();
          break;
      }
    }
    function Ve() {
      return e.disabled || j.value ? !1 : oe.value ? ee(!0) : (V(), t("opened"), !0);
    }
    function Ze(p) {
      const z = new Date(p);
      s.value = z, q(z), t("selected", z), t("update:modelValue", z), t("input", z);
    }
    function zt() {
      s.value = null, q(), t("selected", null), e.modelValue ? t("update:modelValue", null) : t("input", null), t("cleared");
    }
    function qe(p) {
      Ze(p.timestamp), j.value || ee(!0), D.value = /* @__PURE__ */ new Date();
    }
    function Gt(p) {
      t("selected-disabled", p);
    }
    function u(p) {
      const z = new Date(p.timestamp);
      X("day") ? (q(z), g()) : qe(p), t("changed-month", p);
    }
    function m(p) {
      const z = new Date(p.timestamp);
      X("month") ? (q(z), c()) : qe(p), t("changed-year", p);
    }
    function w(p) {
      let z = p;
      if (typeof p == "string" || typeof p == "number") {
        const gt = new Date(p);
        z = Number.isNaN(gt.valueOf()) ? "" : gt;
      }
      if (!z) {
        q(), s.value = null;
        return;
      }
      s.value = z, q(p);
    }
    function Pe(p) {
      q(p), t("changed-month", p);
    }
    function Qe(p) {
      Ze(p.getTime());
    }
    function Cn() {
      e.value && w(e.value), j.value && V();
    }
    function Fn() {
      ee();
    }
    return et(
      () => e.modelValue,
      (p) => {
        w(p);
      }
    ), et(
      () => e.value,
      (p) => {
        w(p);
      }
    ), et(
      () => e.openDate,
      () => {
        q();
      }
    ), et(
      () => e.initialView,
      () => {
        V();
      }
    ), Cn(), {
      pageTimestamp: n,
      selectedDate: s,
      showDayView: r,
      showMonthView: i,
      showYearView: o,
      calendarHeight: h,
      resetTypedDate: D,
      // computed
      pageDate: F,
      translation: P,
      calendarStyle: fe,
      isOpen: oe,
      isInline: j,
      isRtl: he,
      // methods
      setTypedDate: Qe,
      handleChangedMonthFromDayPicker: Pe,
      selectYear: m,
      selectMonth: u,
      selectDisabledDate: Gt,
      clearDate: zt,
      showCalendar: Ve,
      close: ee,
      allowedToShowView: X,
      showYearCalendar: Y,
      showMonthCalendar: c,
      setPageDate: q,
      selectDate: qe,
      closeOnClickOutside: Fn,
      showDayCalendar: g,
      computedInitialView: _,
      setDate: Mt,
      setDate1: Ze,
      setValue: w
    };
  }
});
function Kl(e, t, a, n, s, r) {
  const i = tt("date-input"), o = tt("picker-day"), h = tt("picker-month"), D = tt("picker-year"), _ = Rn("clickoutside");
  return Ct((k(), T("div", {
    class: I(["vuejs3-datepicker", [e.isRtl ? "rtl" : "", `vuejs3-${e.theme}`, e.wrapperClass]])
  }, [
    Kt(i, {
      selectedDate: e.selectedDate,
      resetTypedDate: e.resetTypedDate,
      format: e.format,
      translation: e.translation,
      inline: e.inline,
      id: e.id,
      name: e.name,
      fullMonthName: e.fullMonthName,
      openDate: e.openDate,
      placeholder: e.placeholder,
      inputClass: e.inputClass,
      typeable: e.typeable,
      clearButton: e.clearButton,
      clearButtonIcon: e.clearButtonIcon,
      calendarButton: e.calendarButton,
      calendarButtonIcon: e.calendarButtonIcon,
      calendarButtonIconContent: e.calendarButtonIconContent,
      disabled: e.disabled,
      required: e.required,
      addBootstrapClass: e.addBootstrapClass,
      "use-utc": e.useUtc,
      onShowCalendar: e.showCalendar,
      onCloseCalendar: e.close,
      onTypedDate: e.setTypedDate,
      onClearDate: e.clearDate,
      minimumView: e.minimumView,
      maximumView: e.maximumView,
      hideInput: e.hideInput,
      iconWidth: e.iconWidth,
      iconHeight: e.iconHeight,
      iconColor: e.iconColor,
      theme: e.theme
    }, {
      belowDate: Re(() => [
        K(e.$slots, "belowDate")
      ]),
      _: 3
    }, 8, ["selectedDate", "resetTypedDate", "format", "translation", "inline", "id", "name", "fullMonthName", "openDate", "placeholder", "inputClass", "typeable", "clearButton", "clearButtonIcon", "calendarButton", "calendarButtonIcon", "calendarButtonIconContent", "disabled", "required", "addBootstrapClass", "use-utc", "onShowCalendar", "onCloseCalendar", "onTypedDate", "onClearDate", "minimumView", "maximumView", "hideInput", "iconWidth", "iconHeight", "iconColor", "theme"]),
    e.allowedToShowView("day") ? (k(), xt(o, {
      key: 0,
      pageDate: e.pageDate,
      selectedDate: e.selectedDate,
      showDayView: e.showDayView,
      fullMonthName: e.fullMonthName,
      allowedToShowView: e.allowedToShowView,
      disabledDates: e.disabledDates,
      highlighted: e.highlighted,
      calendarClass: e.calendarClass,
      calendarStyle: e.calendarStyle,
      translation: e.translation,
      pageTimestamp: e.pageTimestamp,
      isRtl: e.isRtl,
      mondayFirst: e.mondayFirst,
      dayCellContent: e.dayCellContent,
      onChangedMonth: e.handleChangedMonthFromDayPicker,
      onSelectDate: e.selectDate,
      onShowMonthCalendar: e.showMonthCalendar,
      onSelectedDisabled: e.selectDisabledDate,
      onShowYearCalendar: e.showYearCalendar,
      minimumView: e.minimumView,
      maximumView: e.maximumView,
      preventDisableDateSelection: e.preventDisableDateSelection,
      theme: e.theme
    }, {
      customCalendarHeader: Re(() => [
        K(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: Re(() => [
        K(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showDayView", "fullMonthName", "allowedToShowView", "disabledDates", "highlighted", "calendarClass", "calendarStyle", "translation", "pageTimestamp", "isRtl", "mondayFirst", "dayCellContent", "onChangedMonth", "onSelectDate", "onShowMonthCalendar", "onSelectedDisabled", "onShowYearCalendar", "minimumView", "maximumView", "preventDisableDateSelection", "theme"])) : G("", !0),
    e.allowedToShowView("month") ? (k(), xt(h, {
      key: 1,
      pageDate: e.pageDate,
      selectedDate: e.selectedDate,
      showMonthView: e.showMonthView,
      allowedToShowView: e.allowedToShowView,
      disabledDates: e.disabledDates,
      calendarClass: e.calendarClass,
      calendarStyle: e.calendarStyle,
      translation: e.translation,
      isRtl: e.isRtl,
      "use-utc": e.useUtc,
      fullMonthName: e.fullMonthName,
      onSelectMonth: e.selectMonth,
      onShowYearCalendar: e.showYearCalendar,
      onChangedYear: e.setPageDate,
      minimumView: e.minimumView,
      maximumView: e.maximumView,
      theme: e.theme
    }, {
      customCalendarHeader: Re(() => [
        K(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: Re(() => [
        K(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showMonthView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "fullMonthName", "onSelectMonth", "onShowYearCalendar", "onChangedYear", "minimumView", "maximumView", "theme"])) : G("", !0),
    e.allowedToShowView("year") ? (k(), xt(D, {
      key: 2,
      pageDate: e.pageDate,
      selectedDate: e.selectedDate,
      showYearView: e.showYearView,
      allowedToShowView: e.allowedToShowView,
      disabledDates: e.disabledDates,
      calendarClass: e.calendarClass,
      calendarStyle: e.calendarStyle,
      translation: e.translation,
      isRtl: e.isRtl,
      "use-utc": e.useUtc,
      onSelectYear: e.selectYear,
      onChangedDecade: e.setPageDate,
      fullMonthName: e.fullMonthName,
      minimumView: e.minimumView,
      maximumView: e.maximumView,
      theme: e.theme
    }, {
      customCalendarHeader: Re(() => [
        K(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: Re(() => [
        K(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showYearView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectYear", "onChangedDecade", "fullMonthName", "minimumView", "maximumView", "theme"])) : G("", !0)
  ], 2)), [
    [_, {
      handler: e.inline ? null : e.closeOnClickOutside
    }]
  ]);
}
const eu = /* @__PURE__ */ Je(Ql, [["render", Kl]]);
export {
  eu as default
};
