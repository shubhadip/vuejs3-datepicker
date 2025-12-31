import './DatePickerComponent.css';
import { defineComponent as R, openBlock as y, createElementBlock as D, normalizeClass as N, createElementVNode as w, ref as P, computed as f, watch as G, resolveComponent as K, createTextVNode as ye, toDisplayString as p, createCommentVNode as F, createVNode as oe, renderSlot as A, withDirectives as te, normalizeStyle as le, withModifiers as _, Fragment as Q, renderList as Z, vShow as re, resolveDirective as ge, withCtx as z, createBlock as se } from "vue";
const De = ["click"], X = [], be = {
  instances: X,
  beforeMount: ue,
  updated: (e, a) => {
    JSON.stringify(a.value) !== JSON.stringify(a.oldValue) && ue(e, a);
  },
  unmounted: de
};
function ue(e, { value: a }) {
  de(e);
  const t = a, o = typeof t == "function";
  if (!o && !(typeof t == "object") || !(t.isActive !== !1))
    return;
  const s = o ? t : t.handler, i = we({ el: e, handler: s });
  i.eventHandlers.forEach(
    ({ event: V, handler: v }) => setTimeout(() => document.addEventListener(V, v, !1), 0)
  ), X.push(i);
}
function de(e) {
  const a = X.findIndex((o) => o.el === e);
  if (a === -1)
    return;
  X[a].eventHandlers.forEach(
    ({ event: o, handler: u }) => document.removeEventListener(o, u, !1)
  ), X.splice(a, 1);
}
function we({ el: e, handler: a }) {
  return {
    el: e,
    eventHandlers: De.map((t) => ({
      event: t,
      handler: (o) => Ne({ event: o, el: e, handler: a })
    }))
  };
}
function Ne({ event: e, el: a, handler: t }) {
  const o = e.path || (e.composedPath ? e.composedPath() : void 0);
  if (o ? o.indexOf(a) < 0 : !a.contains(e.target))
    return t && t(e, a);
}
const pe = R({
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
}), E = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [o, u] of a)
    t[o] = u;
  return t;
}, Se = ["height", "width"], Me = ["fill"];
function ve(e, a, t, o, u, d) {
  return y(), D("span", {
    class: N(e.customClass)
  }, [
    (y(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      height: e.height,
      width: e.width,
      role: "img",
      "aria-hidden": "true",
      "data-icon": "calendarAlt"
    }, [
      w("path", {
        fill: e.color,
        d: "M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
      }, null, 8, Me)
    ], 8, Se))
  ], 2);
}
const Ce = /* @__PURE__ */ E(pe, [["render", ve]]), ce = {
  /**
   * @type {Boolean}
   */
  useUtc: !1,
  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear(e) {
    return this.useUtc ? e.getUTCFullYear() : e.getFullYear();
  },
  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth(e) {
    return this.useUtc ? e.getUTCMonth() : e.getMonth();
  },
  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate(e) {
    return this.useUtc ? e.getUTCDate() : e.getDate();
  },
  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay(e) {
    return this.useUtc ? e.getUTCDay() : e.getDay();
  },
  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours(e) {
    return this.useUtc ? e.getUTCHours() : e.getHours();
  },
  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes(e) {
    return this.useUtc ? e.getUTCMinutes() : e.getMinutes();
  },
  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setFullYear(e, a) {
    return this.useUtc ? e.setUTCFullYear(a) : e.setFullYear(a);
  },
  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setMonth(e, a) {
    return this.useUtc ? e.setUTCMonth(a) : e.setMonth(a);
  },
  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setDate(e, a) {
    return this.useUtc ? e.setUTCDate(a) : e.setDate(a);
  },
  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates(e, a) {
    const t = new Date(e.getTime()), o = new Date(a.getTime());
    return this.useUtc ? (t.setUTCHours(0, 0, 0, 0), o.setUTCHours(0, 0, 0, 0)) : (t.setHours(0, 0, 0, 0), o.setHours(0, 0, 0, 0)), t.getTime() === o.getTime();
  },
  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate(e) {
    return Object.prototype.toString.call(e) !== "[object Date]" ? !1 : !Number.isNaN(e.getTime());
  },
  /**
   * Return abbreviated week day name
   * @param {Date} date
   * @param {Array} days
   * @return {String}
   */
  getDayNameAbbr(e, a) {
    if (typeof e != "object")
      throw TypeError("Invalid Type");
    return a[this.getDay(e)];
  },
  /**
   * Return name of the month
   * @param {Number|Date} month
   * @param {Array} months
   * @return {String}
   */
  getMonthName(e, a) {
    if (!a)
      throw Error("missing 2nd parameter Months array");
    if (typeof e == "object")
      return a[this.getMonth(e)];
    if (typeof e == "number")
      return a[e];
    throw TypeError("Invalid type");
  },
  /**
   * Return an abbreviated version of the month
   * @param {Number|Date} month
   * @param {Array} monthsAbbr
   * @return {String}
   */
  getMonthNameAbbr(e, a) {
    if (!a)
      throw Error("missing 2nd paramter Months array");
    if (typeof e == "object")
      return a[this.getMonth(e)];
    if (typeof e == "number")
      return a[e];
    throw TypeError("Invalid type");
  },
  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} month
   * @return {Number}
   */
  daysInMonth(e, a) {
    return /8|3|5|10/.test(a) ? 30 : a === 1 ? !(e % 4) && e % 100 || !(e % 400) ? 29 : 28 : 31;
  },
  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix(e) {
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
  },
  /**
   * Formats date object
   * @param {Date} date
   * @param {String} format
   * @param {Object} translation
   * @return {String}
   */
  formatDate(e, a, t) {
    const o = this.getFullYear(e), u = this.getMonth(e) + 1, d = this.getDate(e);
    return a.replace(/dd/, `0${d}`.slice(-2)).replace(/d/, d).replace(/yyyy/, o).replace(/yy/, String(o).slice(2)).replace(/MMMM/, this.getMonthName(this.getMonth(e), t.months)).replace(/MMM/, this.getMonthNameAbbr(this.getMonth(e), t.monthsAbbr)).replace(/MM/, `0${u}`.slice(-2)).replace(/M(?!a|ä|e)/, u.toString()).replace(/su/, this.getNthSuffix(this.getDate(e))).replace(/D(?!e|é|i)/, this.getDayNameAbbr(e, t.days));
  },
  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray(e, a) {
    const t = [];
    for (; e <= a; )
      t.push(new Date(e)), e = this.setDate(new Date(e), this.getDate(new Date(e)) + 1);
    return t;
  },
  /**
   * method used as a prop validator for input values
   * @param {*} val
   * @return {Boolean}
   */
  validateDateInput(e) {
    return e === null || e instanceof Date || typeof e == "string" || typeof e == "number";
  },
  /**
   * Converts a string to a Date object
   * @param {String|Date} value
   * @return {Date}
   */
  stringToDate(e) {
    return typeof e == "string" ? new Date(e) : e;
  }
}, x = (e) => ({ ...ce, useUtc: e }), Te = {
  ...ce
}, Ve = R({
  name: "DateInput",
  components: {
    IconView: Ce
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
  setup(e, { emit: a }) {
    const t = x(e.useUtc), o = P(), u = P(null), d = f(() => e.addBootstrapClass ? typeof e.inputClass == "string" ? [e.inputClass, "form-control"].join(" ") : {
      "form-control": !0,
      ...e.inputClass
    } : e.inputClass), s = f(() => {
      var T, M;
      if (!e.selectedDate)
        return null;
      if (o.value)
        return o.value;
      const k = t.stringToDate(e.selectedDate);
      let C = typeof e.format == "function" ? e.format(k) : t.formatDate(k, e.format, e.translation);
      if (e.minimumView === e.maximumView) {
        const [, I, U] = C.split(" ");
        if (e.maximumView === "month") {
          if (e.fullMonthName) {
            const H = (T = e.translation) == null ? void 0 : T.monthsAbbr.indexOf(I);
            return (M = e.translation) == null ? void 0 : M.months[H];
          }
          C = I;
        } else
          e.maximumView === "year" && (C = U);
      }
      return C;
    });
    G(
      () => e.resetTypedDate,
      () => {
        o.value = "";
      }
    );
    function i() {
      a("show-calendar");
    }
    function V(k) {
      if ([
        27,
        // escape
        13
        // enter
      ].includes(k.keyCode) && u.value.blur(), e.typeable) {
        const { value: C } = u.value, T = Date.parse(C);
        Number.isNaN(T) || (o.value = C, a("typed-date", new Date(T)));
      }
    }
    function v() {
      a("clear-date");
    }
    function B() {
      e.typeable && Number.isNaN(Date.parse(u.value.value)) && (v(), u.value.value = null, o.value = ""), a("close-calendar", !0);
    }
    return {
      typedDate: o,
      computedInputClass: d,
      formattedValue: s,
      showCalendar: i,
      parseTypedDate: V,
      inputBlurred: B,
      inputRef: u,
      clearDate: v
    };
  }
});
const Fe = { key: 0 }, ke = {
  key: 1,
  style: { position: "relative" }
}, Ye = { key: 0 }, Be = ["type", "name", "id", "value", "open-date", "placeholder", "clear-button", "disabled", "required", "readonly"], $e = {
  key: 0,
  class: "vuejs3-datepicker__value"
}, Ae = { class: "vuejs3-datepicker__icon" }, je = {
  key: 0,
  class: "vuejs3-datepicker__content"
}, Oe = {
  key: 1,
  class: "vuejs3-datepicker__content"
}, Ue = { key: 0 };
function Ie(e, a, t, o, u, d) {
  const s = K("IconView");
  return y(), D("div", {
    class: N([e.addBootstrapClass ? "input-group" : ""])
  }, [
    e.calendarButton ? (y(), D("span", {
      key: 0,
      class: N(["vuejs3-datepicker__calendar-button", { "input-group-prepend": e.addBootstrapClass, "cursor-na": e.disabled }]),
      onClick: a[0] || (a[0] = (...i) => e.showCalendar && e.showCalendar(...i))
    }, [
      w("span", {
        class: N({ "input-group-text": e.addBootstrapClass })
      }, [
        w("i", {
          class: N(e.calendarButtonIcon)
        }, [
          ye(p(e.calendarButtonIconContent) + " ", 1),
          e.calendarButtonIcon ? F("", !0) : (y(), D("span", Fe, "…"))
        ], 2)
      ], 2)
    ], 2)) : F("", !0),
    e.typeable || !e.hideInput ? (y(), D("div", ke, [
      e.inline ? F("", !0) : (y(), D("span", Ye, [
        oe(s, {
          customClass: "vuejs3-datepicker__typeablecalendar",
          color: e.iconColor,
          width: e.iconWidth,
          height: e.iconHeight
        }, null, 8, ["color", "width", "height"])
      ])),
      w("input", {
        type: e.inline ? "hidden" : "text",
        class: N([e.computedInputClass, "vuejs3-datepicker__inputvalue"]),
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
        onClick: a[1] || (a[1] = (...i) => e.showCalendar && e.showCalendar(...i)),
        onKeyup: a[2] || (a[2] = (...i) => e.parseTypedDate && e.parseTypedDate(...i)),
        onBlur: a[3] || (a[3] = (...i) => e.inputBlurred && e.inputBlurred(...i)),
        autocomplete: "off"
      }, null, 42, Be)
    ])) : (y(), D("div", {
      key: 2,
      onClick: a[4] || (a[4] = (...i) => e.showCalendar && e.showCalendar(...i)),
      id: "calendar-div"
    }, [
      e.inline ? F("", !0) : (y(), D("div", $e, [
        w("span", Ae, [
          oe(s, {
            color: e.iconColor,
            width: e.iconWidth,
            height: e.iconHeight
          }, null, 8, ["color", "width", "height"])
        ]),
        e.formattedValue ? (y(), D("div", je, p(e.formattedValue), 1)) : (y(), D("div", Oe, p(e.placeholder), 1))
      ]))
    ])),
    e.clearButton && e.selectedDate ? (y(), D("span", {
      key: 3,
      class: N(["vuejs3-datepicker__clear-button", { "input-group-append": e.addBootstrapClass }]),
      onClick: a[5] || (a[5] = (i) => e.clearDate())
    }, [
      w("span", {
        class: N({ "input-group-text": e.addBootstrapClass })
      }, [
        w("i", {
          class: N(e.clearButtonIcon)
        }, [
          e.clearButtonIcon ? F("", !0) : (y(), D("span", Ue, "×"))
        ], 2)
      ], 2)
    ], 2)) : F("", !0),
    A(e.$slots, "belowDate", {}, void 0, !0)
  ], 2);
}
const He = /* @__PURE__ */ E(Ve, [["render", Ie], ["__scopeId", "data-v-deefa5d0"]]), Pe = R({
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
  setup(e, { emit: a }) {
    const t = x(e.useUtc);
    function o(n) {
      n.isDisabled ? (a("selected-disabled", n), e.preventDisableDateSelection || a("select-date", n)) : a("select-date", n);
    }
    function u() {
      a("show-month-calendar");
    }
    function d() {
      a("show-year-calendar");
    }
    function s(n) {
      const r = e.pageDate;
      t.setMonth(r, t.getMonth(r) + n), a("changed-month", r);
    }
    function i() {
      const n = e.disabledDates;
      if (!n || !n.to)
        return !1;
      const r = e.pageDate;
      return t.getMonth(n.to) >= t.getMonth(r) && t.getFullYear(n.to) >= t.getFullYear(r);
    }
    function V() {
      i() || s(-1);
    }
    function v() {
      const n = e.disabledDates;
      if (!n || !n.from)
        return !1;
      const r = e.pageDate;
      return t.getMonth(n.from) <= t.getMonth(r) && t.getFullYear(n.from) <= t.getFullYear(r);
    }
    function B() {
      v() || s(1);
    }
    function k(n) {
      const r = t.stringToDate(e.selectedDate);
      return e.selectedDate ? t.compareDates(r, n) : !1;
    }
    function C(n) {
      let r = !1;
      const m = e.disabledDates;
      return m ? typeof m > "u" ? !1 : (typeof m.dates < "u" && m.dates.forEach(($) => {
        t.compareDates(n, $) && (r = !0);
      }), typeof m.to < "u" && m.to && n < m.to && (r = !0), typeof m.from < "u" && m.from && n > m.from && (r = !0), typeof m.ranges < "u" && m.ranges.forEach(($) => {
        typeof $.from < "u" && $.from && typeof $.to < "u" && $.to && n >= $.from && n <= $.to && (r = !0);
      }), typeof m.days < "u" && m.days.indexOf(t.getDay(n)) !== -1 && (r = !0), typeof m.daysOfMonth < "u" && m.daysOfMonth.indexOf(t.getDate(n)) !== -1 && (r = !0), typeof m.customPredictor == "function" && m.customPredictor(n) && (r = !0), r) : r;
    }
    function T(n) {
      return typeof n < "u" && n;
    }
    function M(n) {
      const r = e.highlighted;
      if (!(r && r.includeDisabled) && C(n))
        return !1;
      let m = !1;
      return typeof r > "u" ? !1 : (typeof r.dates < "u" && r.dates.forEach(($) => {
        t.compareDates(n, $) && (m = !0);
      }), T(r.from) && T(r.to) && (m = n >= r.from && n <= r.to), typeof r.days < "u" && r.days.indexOf(t.getDay(n)) !== -1 && (m = !0), typeof r.daysOfMonth < "u" && r.daysOfMonth.indexOf(t.getDate(n)) !== -1 && (m = !0), typeof r.customPredictor == "function" && r.customPredictor(n) && (m = !0), m);
    }
    function I(n) {
      return {
        selected: n.isSelected,
        disabled: n.isDisabled,
        highlighted: n.isHighlighted,
        today: n.isToday,
        weekend: n.isWeekend,
        sat: n.isSaturday,
        sun: n.isSunday,
        "highlight-start": n.isHighlightStart,
        "highlight-end": n.isHighlightEnd
      };
    }
    function U(n) {
      const r = e.highlighted;
      return r ? M(n) && r.from instanceof Date && t.getFullYear(r.from) === t.getFullYear(n) && t.getMonth(r.from) === t.getMonth(n) && t.getDate(r.from) === t.getDate(n) : !1;
    }
    function H(n) {
      const r = e.highlighted;
      return r ? M(n) && r.to instanceof Date && t.getFullYear(r.to) === t.getFullYear(n) && t.getMonth(r.to) === t.getMonth(n) && t.getDate(r.to) === t.getDate(n) : !1;
    }
    const Y = f(() => {
      if (e.mondayFirst) {
        const n = e.translation && e.translation.days && e.translation.days.slice();
        return n.push(n.shift()), n;
      }
      return e.translation && e.translation.days;
    }), j = f(() => {
      const n = e.pageDate, r = e.useUtc ? new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), 1)) : new Date(n.getFullYear(), n.getMonth(), 1, n.getHours(), n.getMinutes());
      return e.mondayFirst ? t.getDay(r) > 0 ? t.getDay(r) - 1 : 6 : t.getDay(r);
    }), O = f(() => {
      const n = e.pageDate, r = [], m = e.useUtc ? new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), 1)) : new Date(n.getFullYear(), n.getMonth(), 1, n.getHours(), n.getMinutes()), $ = t.daysInMonth(t.getFullYear(m), t.getMonth(m));
      for (let q = 0; q < $; q += 1)
        r.push({
          date: t.getDate(m),
          timestamp: m.getTime(),
          isSelected: k(m),
          isDisabled: C(m),
          isHighlighted: M(m),
          isHighlightStart: U(m),
          isHighlightEnd: H(m),
          isToday: t.compareDates(m, /* @__PURE__ */ new Date()),
          isWeekend: t.getDay(m) === 0 || t.getDay(m) === 6,
          isSaturday: t.getDay(m) === 6,
          isSunday: t.getDay(m) === 0
        }), t.setDate(m, t.getDate(m) + 1);
      return r;
    }), c = f(() => {
      const n = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return t.getMonthNameAbbr(t.getMonth(e.pageDate), n);
    }), l = f(() => {
      const n = e.translation && e.translation.months;
      return t.getMonthName(t.getMonth(e.pageDate), n);
    }), g = f(() => {
      const n = e.translation && e.translation.yearSuffix;
      return `${t.getFullYear(e.pageDate)}${n}`;
    }), b = f(() => (e.translation && e.translation.ymd && e.translation && e.translation.ymd) === !0), J = f(() => e.isRtl ? v() : i()), L = f(() => e.isRtl ? i() : v()), ae = f(() => {
      const n = t.stringToDate(e.selectedDate);
      return e.selectedDate ? t.getDayNameAbbr(n, e.translation && e.translation.daysNames) : null;
    }), W = f(() => {
      const n = t.stringToDate(e.selectedDate);
      return e.selectedDate ? t.getDate(n) : null;
    }), ne = f(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isDefined: T,
      showMonthCalendar: u,
      daysOfWeek: Y,
      blankDays: j,
      isYmd: b,
      days: O,
      currMonthName: c,
      currYearName: g,
      isLeftNavDisabled: J,
      isRightNavDisabled: L,
      selectDate: o,
      previousMonth: V,
      nextMonth: B,
      dayClasses: I,
      monthName: l,
      getDayName: ae,
      getDisplayDate: W,
      showYearCalendar: d,
      isNextMonthDisabled: v,
      ifDifferentViews: ne,
      isSelectedDate: k,
      isDisabledDate: C,
      isHighlightedDate: M,
      isHighlightStart: U,
      isHighlightEnd: H
    };
  }
}), Je = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, ze = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, Re = { class: "vuejs3-datepicker__calendar-actionarea" }, Ee = ["innerHTML", "onClick"];
function Le(e, a, t, o, u, d) {
  return te((y(), D("div", {
    class: N(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: le(e.calendarStyle),
    onMousedown: a[4] || (a[4] = _(() => {
    }, ["prevent"]))
  }, [
    A(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (y(), D("section", Je, [
      w("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: a[0] || (a[0] = (...s) => e.showYearCalendar && e.showYearCalendar(...s))
      }, p(e.currYearName), 1),
      A(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (y(), D("p", ze, p(e.getDayName) + " " + p(e.getDisplayDate) + " " + p(e.monthName), 1)) : F("", !0)
      ])
    ])) : F("", !0),
    w("div", Re, [
      w("header", null, [
        w("span", {
          onClick: a[1] || (a[1] = (s) => e.isRtl ? e.nextMonth() : e.previousMonth()),
          class: N(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        w("span", {
          class: N(["day__month_btn", e.allowedToShowView("month") ? "up" : ""]),
          onClick: a[2] || (a[2] = (...s) => e.showMonthCalendar && e.showMonthCalendar(...s))
        }, p(e.isYmd ? e.currYearName : e.currMonthName) + " " + p(e.isYmd ? e.currMonthName : e.currYearName), 3),
        w("span", {
          onClick: a[3] || (a[3] = (s) => e.isRtl ? e.previousMonth() : e.nextMonth()),
          class: N(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      w("div", {
        class: N(e.isRtl ? "flex-rtl" : "")
      }, [
        (y(!0), D(Q, null, Z(e.daysOfWeek, (s) => (y(), D("span", {
          class: "cell day-header",
          key: s.timestamp
        }, p(s), 1))), 128)),
        e.blankDays > 0 ? (y(!0), D(Q, { key: 0 }, Z(e.blankDays, (s) => (y(), D("span", {
          class: "cell day blank",
          key: s.timestamp
        }))), 128)) : F("", !0),
        (y(!0), D(Q, null, Z(e.days, (s) => (y(), D("span", {
          class: N(["cell day", e.dayClasses(s)]),
          key: s.timestamp,
          innerHTML: e.dayCellContent(s),
          onClick: (i) => e.selectDate(s)
        }, null, 10, Ee))), 128))
      ], 2)
    ])
  ], 38)), [
    [re, e.showDayView]
  ]);
}
const We = /* @__PURE__ */ E(Pe, [["render", Le]]), qe = R({
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
  setup(e, { emit: a }) {
    const t = x(e.useUtc);
    function o(l) {
      l.isDisabled || a("select-month", l);
    }
    function u(l) {
      const g = e.pageDate;
      t.setFullYear(g, t.getFullYear(g) + l), a("changed-year", g);
    }
    function d() {
      const l = e.disabledDates;
      return !l || !l.to ? !1 : t.getFullYear(l.to) >= t.getFullYear(e.pageDate);
    }
    function s() {
      d() || u(-1);
    }
    function i() {
      const l = e.disabledDates;
      return !l || !l.from ? !1 : t.getFullYear(l.from) <= t.getFullYear(e.pageDate);
    }
    function V() {
      i() || u(1);
    }
    function v() {
      a("show-year-calendar");
    }
    function B(l) {
      const g = t.stringToDate(e.selectedDate);
      return g && t.getFullYear(g) === t.getFullYear(l) && t.getMonth(g) === t.getMonth(l);
    }
    function k(l) {
      let g = !1;
      const b = e.disabledDates;
      return !b || typeof b > "u" ? !1 : (typeof b.to < "u" && b.to && (t.getMonth(l) < t.getMonth(b.to) && t.getFullYear(l) <= t.getFullYear(b.to) || t.getFullYear(l) < t.getFullYear(b.to)) && (g = !0), typeof b.from < "u" && b.from && (t.getMonth(l) > t.getMonth(b.from) && t.getFullYear(l) >= t.getFullYear(b.from) || t.getFullYear(l) > t.getFullYear(b.from)) && (g = !0), typeof b.customPredictor == "function" && b.customPredictor(l) && (g = !0), g);
    }
    const C = f(() => {
      const l = e.pageDate, g = [], b = e.useUtc ? new Date(Date.UTC(l.getUTCFullYear(), 0, l.getUTCDate())) : new Date(l.getFullYear(), 0, l.getDate(), l.getHours(), l.getMinutes());
      for (let J = 0; J < 12; J += 1)
        g.push({
          month: t.getMonthName(J, e.translation && e.translation.months),
          timestamp: b.getTime(),
          isSelected: B(b),
          isDisabled: k(b)
        }), t.setMonth(b, t.getMonth(b) + 1);
      return g;
    }), T = f(() => {
      const l = e.translation && e.translation.yearSuffix;
      return `${t.getFullYear(e.pageDate)}${l}`;
    }), M = f(() => e.isRtl ? i() : d()), I = f(() => e.isRtl ? d() : i()), U = f(() => {
      const l = e.translation && e.translation.months;
      return t.getMonthName(t.getMonth(e.pageDate), l);
    }), H = f(() => {
      const l = t.stringToDate(e.selectedDate);
      return e.selectedDate ? t.getDate(l) : null;
    }), Y = f(() => {
      const l = t.stringToDate(e.selectedDate);
      return e.selectedDate ? t.getDayNameAbbr(l, e.translation && e.translation.daysNames) : null;
    }), j = f(() => {
      const l = e.translation && e.translation.yearSuffix;
      return `${t.getFullYear(e.pageDate)}${l}`;
    }), O = f(() => {
      const l = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return t.getMonthNameAbbr(t.getMonth(e.pageDate), l);
    }), c = f(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: I,
      isLeftNavDisabled: M,
      pageYearName: T,
      months: C,
      selectMonth: o,
      previousYear: s,
      nextYear: V,
      currYearName: j,
      getDisplayDate: H,
      monthName: U,
      showYearCalendar: v,
      getDayName: Y,
      currMonthName: O,
      ifDifferentViews: c,
      isSelectedMonth: B,
      isDisabledMonth: k
    };
  }
}), Ge = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, Ke = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, Qe = { class: "vuejs3-datepicker__calendar-actionarea" }, Ze = ["onClick"];
function Xe(e, a, t, o, u, d) {
  return te((y(), D("div", {
    class: N(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: le(e.calendarStyle),
    onMousedown: a[4] || (a[4] = _(() => {
    }, ["prevent"]))
  }, [
    A(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews ? (y(), D("section", Ge, [
      w("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: a[0] || (a[0] = (...s) => e.showYearCalendar && e.showYearCalendar(...s))
      }, p(e.currYearName), 1),
      A(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (y(), D("p", Ke, p(e.getDayName) + " " + p(e.getDisplayDate) + " " + p(e.monthName), 1)) : F("", !0)
      ])
    ])) : F("", !0),
    w("div", Qe, [
      w("header", null, [
        w("span", {
          onClick: a[1] || (a[1] = (s) => e.isRtl ? e.nextYear() : e.previousYear()),
          class: N(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        w("span", {
          class: N(["month__year_btn", e.allowedToShowView("year") ? "up" : ""]),
          onClick: a[2] || (a[2] = (...s) => e.showYearCalendar && e.showYearCalendar(...s))
        }, p(e.pageYearName), 3),
        w("span", {
          onClick: a[3] || (a[3] = (s) => e.isRtl ? e.previousYear() : e.nextYear()),
          class: N(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (y(!0), D(Q, null, Z(e.months, (s) => (y(), D("span", {
        class: N(["cell month", { selected: s.isSelected, disabled: s.isDisabled }]),
        key: s.timestamp,
        onClick: _((i) => e.selectMonth(s), ["stop"])
      }, p(s.month), 11, Ze))), 128))
    ])
  ], 38)), [
    [re, e.showMonthView]
  ]);
}
const _e = /* @__PURE__ */ E(qe, [["render", Xe]]), xe = R({
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
  setup(e, { emit: a }) {
    const t = x(e.useUtc);
    function o(c) {
      c.isDisabled || a("select-year", c);
    }
    function u(c) {
      const l = e.pageDate;
      t.setFullYear(l, t.getFullYear(l) + c), a("changed-decade", l);
    }
    function d() {
      const c = e.disabledDates;
      if (!c || !c.to)
        return !1;
      const l = t.getFullYear(c.to), g = Math.floor(t.getFullYear(e.pageDate) / 10) * 10 - 1;
      return l > g;
    }
    function s() {
      d() || u(-10);
    }
    function i() {
      const c = e.disabledDates;
      if (!c || !c.from)
        return !1;
      const l = t.getFullYear(c.from), g = Math.ceil(t.getFullYear(e.pageDate) / 10) * 10;
      return l <= g;
    }
    function V() {
      i() || u(10);
    }
    function v(c) {
      const l = t.stringToDate(e.selectedDate);
      return e.selectedDate ? t.getFullYear(l) === t.getFullYear(c) : !1;
    }
    function B(c) {
      let l = !1;
      return typeof e.disabledDates > "u" || !e.disabledDates ? !1 : (typeof e.disabledDates.to < "u" && e.disabledDates.to && t.getFullYear(c) < t.getFullYear(e.disabledDates.to) && (l = !0), typeof e.disabledDates.from < "u" && e.disabledDates.from && t.getFullYear(c) > t.getFullYear(e.disabledDates.from) && (l = !0), typeof e.disabledDates.customPredictor == "function" && (l = e.disabledDates.customPredictor(c)), l);
    }
    const k = f(() => {
      const c = e.pageDate, l = [], g = e.useUtc ? new Date(Date.UTC(Math.floor(c.getUTCFullYear() / 10) * 10, c.getUTCMonth(), c.getUTCDate())) : new Date(Math.floor(c.getFullYear() / 10) * 10, c.getMonth(), c.getDate(), c.getHours(), c.getMinutes());
      for (let b = 0; b < 10; b += 1)
        l.push({
          year: t.getFullYear(g),
          timestamp: g.getTime(),
          isSelected: v(g),
          isDisabled: B(g)
        }), t.setFullYear(g, t.getFullYear(g) + 1);
      return l;
    }), C = f(() => {
      const c = Math.floor(t.getFullYear(e.pageDate) / 10) * 10, l = c + 9, g = e.translation && e.translation.yearSuffix;
      return `${c} - ${l}${g}`;
    }), T = f(() => e.isRtl ? i() : d()), M = f(() => e.isRtl ? d() : i()), I = f(() => {
      const c = t.stringToDate(e.selectedDate);
      return e.selectedDate ? t.getDayNameAbbr(c, e.translation && e.translation.daysNames) : null;
    }), U = f(() => {
      const c = e.translation && e.translation.months;
      return t.getMonthName(t.getMonth(e.pageDate), c);
    }), H = f(() => {
      const c = t.stringToDate(e.selectedDate);
      return e.selectedDate ? t.getDate(c) : null;
    }), Y = f(() => {
      const c = e.translation && e.translation.yearSuffix;
      return `${t.getFullYear(e.pageDate)}${c}`;
    }), j = f(() => {
      const c = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return t.getMonthNameAbbr(t.getMonth(e.pageDate), c);
    }), O = f(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: M,
      isLeftNavDisabled: T,
      getPageDecade: C,
      years: k,
      nextDecade: V,
      previousDecade: s,
      selectYear: o,
      getDayName: I,
      monthName: U,
      getDisplayDate: H,
      currYearName: Y,
      currMonthName: j,
      ifDifferentViews: O,
      // methods
      isNextDecadeDisabled: i,
      isPreviousDecadeDisabled: d,
      isDisabledYear: B
    };
  }
}), et = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, tt = { class: "vuejs3-datepicker__calendar-topbar-year" }, at = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, nt = { class: "vuejs3-datepicker__calendar-actionarea" }, st = ["onClick"];
function ot(e, a, t, o, u, d) {
  return te((y(), D("div", {
    class: N(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: le(e.calendarStyle),
    onMousedown: a[2] || (a[2] = _(() => {
    }, ["prevent"]))
  }, [
    A(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (y(), D("section", et, [
      w("p", tt, p(e.currYearName), 1),
      A(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (y(), D("p", at, p(e.getDayName) + " " + p(e.getDisplayDate) + " " + p(e.monthName), 1)) : F("", !0)
      ])
    ])) : F("", !0),
    w("div", nt, [
      w("header", null, [
        w("span", {
          onClick: a[0] || (a[0] = (s) => e.isRtl ? e.nextDecade() : e.previousDecade()),
          class: N(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        w("span", null, p(e.getPageDecade), 1),
        w("span", {
          onClick: a[1] || (a[1] = (s) => e.isRtl ? e.previousDecade() : e.nextDecade()),
          class: N(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (y(!0), D(Q, null, Z(e.years, (s) => (y(), D("span", {
        class: N(["cell year", { selected: s.isSelected, disabled: s.isDisabled }]),
        key: s.timestamp,
        onClick: _((i) => e.selectYear(s), ["stop"])
      }, p(s.year), 11, st))), 128))
    ])
  ], 38)), [
    [re, e.showYearView]
  ]);
}
const lt = /* @__PURE__ */ E(xe, [["render", ot]]), rt = () => {
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
}, it = () => {
  const e = "Afrikaans", a = [
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
  ], t = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], o = ["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."];
  return {
    months: a,
    monthsAbbr: t,
    days: o,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    language: e,
    langName: e,
    daysNames: o
  };
}, ut = () => {
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
}, dt = () => {
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
}, ct = () => {
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
}, mt = () => {
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
}, ht = () => {
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
}, ft = () => {
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
}, yt = () => {
  const e = "Dutch", a = [
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
  ], t = ["jan.", "feb.", "mrt.", "apr.", "mei", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], o = ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."];
  return {
    months: a,
    monthsAbbr: t,
    days: o,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    language: e,
    daysNames: o
  };
}, gt = () => {
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
}, Dt = () => {
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
}, bt = () => {
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
}, wt = () => {
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
}, Nt = () => {
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
}, pt = () => {
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
}, St = () => {
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
}, Mt = () => {
  const e = "Arabic-Tunisia", a = [
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
    months: a,
    monthsAbbr: a,
    days: ["أحد", "أثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !0,
    langName: e,
    daysNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };
}, vt = () => {
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
}, Ct = () => {
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
}, Tt = () => {
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
}, Vt = () => {
  const e = "Czech";
  return {
    months: [
      "Leden",
      "Únor",
      "Březen",
      "Duben",
      "Smět",
      "Červen",
      "Červenec",
      "Srpen",
      "Září",
      "Říjen",
      "Listopad",
      "Prosinec"
    ],
    monthsAbbr: [
      "Led",
      "Úno",
      "Bře",
      "Dub",
      "Smě",
      "Čen",
      "Čec",
      "Srp",
      "Zář",
      "Říj",
      "Lis",
      "Pro"
    ],
    days: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"]
  };
}, Ft = {
  ar: rt(),
  af: it(),
  arTn: Mt(),
  hi: ht(),
  ja: ft(),
  de: ut(),
  en: dt(),
  es: ct(),
  fr: mt(),
  nl: yt(),
  pt: gt(),
  it: Dt(),
  pl: bt(),
  ru: wt(),
  tr: Nt(),
  zh_TW: Tt(),
  vn: pt(),
  bg: St(),
  kr: Ct(),
  id: vt(),
  cs: Vt()
}, kt = R({
  name: "Datepicker",
  components: {
    DateInput: He,
    PickerDay: We,
    PickerMonth: _e,
    PickerYear: lt
  },
  directives: {
    clickoutside: be
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
      validator: (e) => Te.validateDateInput(e),
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
    "closed",
    "changed-month",
    "changed-year",
    "changed-day",
    "selected",
    "selected-disabled"
  ],
  setup(e, { emit: a }) {
    const t = x(e.useUtc), o = new Date(e.modelValue), u = P(0), d = P(null);
    e.modelValue && t.isValidDate(o) && (u.value = o.getTime(), d.value = o), e.openDate && (u.value = t.setDate(new Date(e.openDate), 1));
    const s = P(!1), i = P(!1), V = P(!1), v = P(0), B = P(/* @__PURE__ */ new Date()), k = f(() => e.initialView ? e.initialView : e.minimumView), C = f(() => new Date(u.value)), T = f(() => Ft[e.language]), M = f(() => !!e.inline), I = f(() => ({
      position: M.value ? "static" : void 0
    })), U = f(() => s.value || i.value || V.value), H = f(() => T.value && T.value.rtl === !0);
    function Y(h) {
      h || (e.openDate ? h = new Date(e.openDate) : h = /* @__PURE__ */ new Date()), u.value = t.setDate(new Date(h), 1);
    }
    function j(h) {
      const S = ["day", "month", "year"], ee = S.indexOf(e.minimumView), fe = S.indexOf(e.maximumView), ie = S.indexOf(h);
      return ie >= ee && ie <= fe;
    }
    function O(h) {
      s.value = !1, i.value = !1, V.value = !1, M.value || h && a("closed");
    }
    function c() {
      return j("day") ? (O(), s.value = !0, !0) : !1;
    }
    function l() {
      return j("month") ? (O(), i.value = !0, !0) : !1;
    }
    function g() {
      return j("year") ? (O(), V.value = !0, !0) : !1;
    }
    function b() {
      const h = k.value;
      if (!j(h))
        throw new Error(
          `initialView '${h}' cannot be rendered based on minimum '${e.minimumView}' and maximum '${e.maximumView}'`
        );
      switch (h) {
        case "year":
          g();
          break;
        case "month":
          l();
          break;
        default:
          c();
          break;
      }
    }
    function J() {
      return e.disabled || M.value ? !1 : U.value ? O(!0) : (b(), !0);
    }
    function L(h) {
      const S = new Date(h);
      d.value = S, Y(S), a("selected", S), a("update:modelValue", S), a("input", S);
    }
    function ae() {
      d.value = null, Y(), a("selected", null), e.modelValue ? a("update:modelValue", null) : a("input", null), a("cleared");
    }
    function W(h) {
      L(h.timestamp), M.value || O(!0), B.value = /* @__PURE__ */ new Date();
    }
    function ne(h) {
      a("selected-disabled", h);
    }
    function n(h) {
      const S = new Date(h.timestamp);
      j("day") ? (Y(S), c()) : W(h), a("changed-month", h);
    }
    function r(h) {
      const S = new Date(h.timestamp);
      j("month") ? (Y(S), l()) : W(h), a("changed-year", h);
    }
    function m(h) {
      let S = h;
      if (typeof h == "string" || typeof h == "number") {
        const ee = new Date(h);
        S = Number.isNaN(ee.valueOf()) ? "" : ee;
      }
      if (!S) {
        Y(), d.value = null;
        return;
      }
      d.value = S, Y(h);
    }
    function $(h) {
      Y(h), a("changed-month", h);
    }
    function q(h) {
      L(h.getTime());
    }
    function me() {
      e.value && m(e.value), M.value && b();
    }
    function he() {
      O();
    }
    return G(
      () => e.modelValue,
      (h) => {
        m(h);
      }
    ), G(
      () => e.value,
      (h) => {
        m(h);
      }
    ), G(
      () => e.openDate,
      () => {
        Y();
      }
    ), G(
      () => e.initialView,
      () => {
        b();
      }
    ), me(), {
      pageTimestamp: u,
      selectedDate: d,
      showDayView: s,
      showMonthView: i,
      showYearView: V,
      calendarHeight: v,
      resetTypedDate: B,
      // computed
      pageDate: C,
      translation: T,
      calendarStyle: I,
      isOpen: U,
      isInline: M,
      isRtl: H,
      // methods
      setTypedDate: q,
      handleChangedMonthFromDayPicker: $,
      selectYear: r,
      selectMonth: n,
      selectDisabledDate: ne,
      clearDate: ae,
      showCalendar: J,
      close: O,
      allowedToShowView: j,
      showYearCalendar: g,
      showMonthCalendar: l,
      setPageDate: Y,
      selectDate: W,
      closeOnClickOutside: he,
      showDayCalendar: c,
      computedInitialView: k,
      setDate: (h, S) => t.setDate(h, S),
      setDate1: L,
      setValue: m
    };
  }
});
function Yt(e, a, t, o, u, d) {
  const s = K("date-input"), i = K("picker-day"), V = K("picker-month"), v = K("picker-year"), B = ge("clickoutside");
  return te((y(), D("div", {
    class: N(["vuejs3-datepicker", [e.isRtl ? "rtl" : "", `vuejs3-${e.theme}`, e.wrapperClass]])
  }, [
    oe(s, {
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
      belowDate: z(() => [
        A(e.$slots, "belowDate")
      ]),
      _: 3
    }, 8, ["selectedDate", "resetTypedDate", "format", "translation", "inline", "id", "name", "fullMonthName", "openDate", "placeholder", "inputClass", "typeable", "clearButton", "clearButtonIcon", "calendarButton", "calendarButtonIcon", "calendarButtonIconContent", "disabled", "required", "addBootstrapClass", "use-utc", "onShowCalendar", "onCloseCalendar", "onTypedDate", "onClearDate", "minimumView", "maximumView", "hideInput", "iconWidth", "iconHeight", "iconColor", "theme"]),
    e.allowedToShowView("day") ? (y(), se(i, {
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
      "use-utc": e.useUtc,
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
      customCalendarHeader: z(() => [
        A(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: z(() => [
        A(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showDayView", "fullMonthName", "allowedToShowView", "disabledDates", "highlighted", "calendarClass", "calendarStyle", "translation", "pageTimestamp", "isRtl", "mondayFirst", "dayCellContent", "use-utc", "onChangedMonth", "onSelectDate", "onShowMonthCalendar", "onSelectedDisabled", "onShowYearCalendar", "minimumView", "maximumView", "preventDisableDateSelection", "theme"])) : F("", !0),
    e.allowedToShowView("month") ? (y(), se(V, {
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
      customCalendarHeader: z(() => [
        A(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: z(() => [
        A(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showMonthView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "fullMonthName", "onSelectMonth", "onShowYearCalendar", "onChangedYear", "minimumView", "maximumView", "theme"])) : F("", !0),
    e.allowedToShowView("year") ? (y(), se(v, {
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
      customCalendarHeader: z(() => [
        A(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: z(() => [
        A(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showYearView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectYear", "onChangedDecade", "fullMonthName", "minimumView", "maximumView", "theme"])) : F("", !0)
  ], 2)), [
    [B, {
      handler: e.inline ? null : e.closeOnClickOutside
    }]
  ]);
}
const $t = /* @__PURE__ */ E(kt, [["render", Yt]]);
export {
  $t as default
};
