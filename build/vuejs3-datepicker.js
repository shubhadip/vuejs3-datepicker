import './DatePickerComponent.css';
import { defineComponent as q, openBlock as g, createElementBlock as b, normalizeClass as S, createElementVNode as N, ref as R, computed as h, watch as X, resolveComponent as Z, createTextVNode as Ce, toDisplayString as v, createCommentVNode as Y, createVNode as fe, renderSlot as U, withDirectives as le, normalizeStyle as ye, withModifiers as te, Fragment as _, renderList as x, vShow as ge, resolveDirective as Me, withCtx as se, createBlock as me } from "vue";
const Ve = ["click"], ee = [], ke = {
  instances: ee,
  beforeMount: be,
  update: (e, t) => {
    JSON.stringify(t.value) !== JSON.stringify(t.oldValue) && be(e, t);
  },
  unmounted: we
};
function be(e, { value: t }) {
  we(e);
  const o = t, i = typeof o == "function";
  if (!i && !(typeof o == "object") || !(o.isActive !== !1))
    return;
  const n = i ? o : o.handler, c = Te({ el: e, handler: n });
  c.eventHandlers.forEach(
    ({ event: M, handler: $ }) => setTimeout(() => document.addEventListener(M, $, !1), 0)
  ), ee.push(c);
}
function we(e) {
  const t = ee.findIndex((i) => i.el === e);
  if (t === -1)
    return;
  ee[t].eventHandlers.forEach(
    ({ event: i, handler: r }) => document.removeEventListener(i, r, !1)
  ), ee.splice(t, 1);
}
function Te({ el: e, handler: t }) {
  return {
    el: e,
    eventHandlers: Ve.map((o) => ({
      event: o,
      handler: (i) => Be({ event: i, el: e, handler: t })
    }))
  };
}
function Be({ event: e, el: t, handler: o }) {
  const i = e.path || (e.composedPath ? e.composedPath() : void 0);
  if (i ? i.indexOf(t) < 0 : !t.contains(e.target))
    return o && o(e, t);
}
const $e = q({
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
}), W = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, r] of t)
    o[i] = r;
  return o;
}, Fe = ["height", "width"], Ye = ["fill"];
function je(e, t, o, i, r, y) {
  return g(), b("span", {
    class: S(e.customClass)
  }, [
    (g(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      height: e.height,
      width: e.width,
      role: "img",
      "aria-hidden": "true",
      "data-icon": "calendarAlt"
    }, [
      N("path", {
        fill: e.color,
        d: "M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
      }, null, 8, Ye)
    ], 8, Fe))
  ], 2);
}
const Oe = /* @__PURE__ */ W($e, [["render", je]]), m = (e, t = !1) => t ? e.getUTCFullYear() : e.getFullYear(), p = (e, t = !1) => t ? e.getUTCMonth() : e.getMonth(), A = (e, t = !1) => t ? e.getUTCDate() : e.getDate(), J = (e, t = !1) => t ? e.getUTCDay() : e.getDay(), he = (e, t, o = !1) => o ? e.setUTCFullYear(t) : e.setFullYear(t), pe = (e, t, o = !1) => o ? e.setUTCMonth(t) : e.setMonth(t), ie = (e, t, o = !1) => o ? e.setUTCDate(t) : e.setDate(t), oe = (e, t, o = !1) => {
  const i = new Date(e.getTime()), r = new Date(t.getTime());
  return o ? (i.setUTCHours(0, 0, 0, 0), r.setUTCHours(0, 0, 0, 0)) : (i.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0)), i.getTime() === r.getTime();
}, Ae = (e) => Object.prototype.toString.call(e) !== "[object Date]" ? !1 : !Number.isNaN(e.getTime()), re = (e, t) => {
  if (typeof e != "object")
    throw TypeError("Invalid Type");
  return t[J(e)];
}, ae = (e, t) => {
  if (!t)
    throw Error("missing 2nd parameter Months array");
  if (typeof e == "object")
    return t[p(e)];
  if (typeof e == "number")
    return t[e];
  throw TypeError("Invalid type");
}, ue = (e, t) => {
  if (!t)
    throw Error("missing 2nd paramter Months array");
  if (typeof e == "object")
    return t[p(e)];
  if (typeof e == "number")
    return t[e];
  throw TypeError("Invalid type");
}, Ie = (e, t) => /8|3|5|10/.test(t) ? 30 : t === 1 ? !(e % 4) && e % 100 || !(e % 400) ? 29 : 28 : 31, He = (e) => {
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
}, Pe = (e, t, o) => {
  const i = m(e), r = p(e) + 1, y = A(e);
  return t.replace(/dd/, `0${y}`.slice(-2)).replace(/d/, y).replace(/yyyy/, i).replace(/yy/, String(i).slice(2)).replace(/MMMM/, ae(p(e), o.months)).replace(/MMM/, ue(p(e), o.monthsAbbr)).replace(/MM/, `0${r}`.slice(-2)).replace(/M(?!a|ä|e)/, r.toString()).replace(/su/, He(A(e))).replace(/D(?!e|é|i)/, re(e, o.days));
}, Je = (e) => e === null || e instanceof Date || typeof e == "string" || typeof e == "number", z = (e) => typeof e == "string" ? new Date(e) : e, ze = q({
  name: "DateInput",
  components: {
    IconView: Oe
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
      required: !1,
      validator: (e) => !!e
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
    const o = R(), i = R(null), r = h(() => e.addBootstrapClass ? typeof e.inputClass == "string" ? [e.inputClass, "form-control"].join(" ") : {
      "form-control": !0,
      ...e.inputClass
    } : e.inputClass), y = h(() => {
      var T, C;
      if (!e.selectedDate)
        return null;
      if (o.value)
        return o.value;
      const V = z(e.selectedDate);
      let k = typeof e.format == "function" ? e.format(V) : Pe(V, e.format, e.translation);
      if (e.minimumView === e.maximumView) {
        const [, H, I] = k.split(" ");
        if (e.maximumView === "month") {
          if (e.fullMonthName) {
            const P = (T = e.translation) == null ? void 0 : T.monthsAbbr.indexOf(H);
            return (C = e.translation) == null ? void 0 : C.months[P];
          }
          k = H;
        } else
          e.maximumView === "year" && (k = I);
      }
      return k;
    });
    X(
      () => e.resetTypedDate,
      () => {
        o.value = "";
      }
    );
    function n() {
      t("show-calendar");
    }
    function c(V) {
      if ([
        27,
        // escape
        13
        // enter
      ].includes(V.keyCode) && i.value.blur(), e.typeable) {
        const { value: k } = i.value, T = Date.parse(k);
        Number.isNaN(T) || (o.value = k, t("typed-date", new Date(T)));
      }
    }
    function M() {
      t("clear-date");
    }
    function $() {
      e.typeable && Number.isNaN(Date.parse(i.value.value)) && (M(), i.value.value = null, o.value = ""), t("close-calendar", !0);
    }
    return {
      typedDate: o,
      computedInputClass: r,
      formattedValue: y,
      showCalendar: n,
      parseTypedDate: c,
      inputBlurred: $,
      inputRef: i,
      clearDate: M
    };
  }
});
const Re = { key: 0 }, Ue = {
  key: 1,
  style: { position: "relative" }
}, Ee = { key: 0 }, Le = ["type", "name", "id", "value", "open-date", "placeholder", "clear-button", "disabled", "required", "readonly"], qe = {
  key: 0,
  class: "vuejs3-datepicker__value"
}, We = { class: "vuejs3-datepicker__icon" }, Ge = {
  key: 0,
  class: "vuejs3-datepicker__content"
}, Ke = {
  key: 1,
  class: "vuejs3-datepicker__content"
}, Qe = { key: 0 };
function Xe(e, t, o, i, r, y) {
  const n = Z("IconView");
  return g(), b("div", {
    class: S([e.addBootstrapClass ? "input-group" : ""])
  }, [
    e.calendarButton ? (g(), b("span", {
      key: 0,
      class: S(["vuejs3-datepicker__calendar-button", { "input-group-prepend": e.addBootstrapClass, "cursor-na": e.disabled }]),
      onClick: t[0] || (t[0] = (...c) => e.showCalendar && e.showCalendar(...c))
    }, [
      N("span", {
        class: S({ "input-group-text": e.addBootstrapClass })
      }, [
        N("i", {
          class: S(e.calendarButtonIcon)
        }, [
          Ce(v(e.calendarButtonIconContent) + " ", 1),
          e.calendarButtonIcon ? Y("", !0) : (g(), b("span", Re, "…"))
        ], 2)
      ], 2)
    ], 2)) : Y("", !0),
    e.typeable || !e.hideInput ? (g(), b("div", Ue, [
      e.inline ? Y("", !0) : (g(), b("span", Ee, [
        fe(n, {
          customClass: "vuejs3-datepicker__typeablecalendar",
          color: e.iconColor,
          width: e.iconWidth,
          height: e.iconHeight
        }, null, 8, ["color", "width", "height"])
      ])),
      N("input", {
        type: e.inline ? "hidden" : "text",
        class: S([e.computedInputClass, "vuejs3-datepicker__inputvalue"]),
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
        onClick: t[1] || (t[1] = (...c) => e.showCalendar && e.showCalendar(...c)),
        onKeyup: t[2] || (t[2] = (...c) => e.parseTypedDate && e.parseTypedDate(...c)),
        onBlur: t[3] || (t[3] = (...c) => e.inputBlurred && e.inputBlurred(...c)),
        autocomplete: "off"
      }, null, 42, Le)
    ])) : (g(), b("div", {
      key: 2,
      onClick: t[4] || (t[4] = (...c) => e.showCalendar && e.showCalendar(...c)),
      id: "calendar-div"
    }, [
      e.inline ? Y("", !0) : (g(), b("div", qe, [
        N("span", We, [
          fe(n, {
            color: e.iconColor,
            width: e.iconWidth,
            height: e.iconHeight
          }, null, 8, ["color", "width", "height"])
        ]),
        e.formattedValue ? (g(), b("div", Ge, v(e.formattedValue), 1)) : (g(), b("div", Ke, v(e.placeholder), 1))
      ]))
    ])),
    e.clearButton && e.selectedDate ? (g(), b("span", {
      key: 3,
      class: S(["vuejs3-datepicker__clear-button", { "input-group-append": e.addBootstrapClass }]),
      onClick: t[5] || (t[5] = (c) => e.clearDate())
    }, [
      N("span", {
        class: S({ "input-group-text": e.addBootstrapClass })
      }, [
        N("i", {
          class: S(e.clearButtonIcon)
        }, [
          e.clearButtonIcon ? Y("", !0) : (g(), b("span", Qe, "×"))
        ], 2)
      ], 2)
    ], 2)) : Y("", !0),
    U(e.$slots, "belowDate", {}, void 0, !0)
  ], 2);
}
const Ze = /* @__PURE__ */ W(ze, [["render", Xe], ["__scopeId", "data-v-204bf2e8"]]), _e = q({
  name: "PickerDay",
  props: {
    showDayView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null,
      validator: (e) => ["string", "number"].indexOf(typeof e) !== -1 || e === null
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
    function o(a) {
      a.isDisabled ? (t("selected-disabled", a), e.preventDisableDateSelection || t("select-date", a)) : t("select-date", a);
    }
    function i() {
      t("show-month-calendar");
    }
    function r() {
      t("show-year-calendar");
    }
    function y(a) {
      const l = e.pageDate;
      pe(l, p(l) + a), t("changed-month", l);
    }
    function n() {
      const a = e.disabledDates;
      if (!a || !a.to)
        return !1;
      const l = e.pageDate;
      return p(a.to) >= p(l) && m(a.to) >= m(l);
    }
    function c() {
      n() || y(-1);
    }
    function M() {
      const a = e.disabledDates;
      if (!a || !a.from)
        return !1;
      const l = e.pageDate;
      return p(a.from) <= p(l) && m(a.from) <= m(l);
    }
    function $() {
      M() || y(1);
    }
    function V(a) {
      const l = z(e.selectedDate);
      return e.selectedDate ? oe(l, a) : !1;
    }
    function k(a) {
      let l = !1;
      const d = e.disabledDates;
      return d ? typeof d > "u" ? !1 : (typeof d.dates < "u" && d.dates.forEach((L) => {
        oe(a, L) && (l = !0);
      }), typeof d.to < "u" && d.to && a < d.to && (l = !0), typeof d.from < "u" && d.from && a > d.from && (l = !0), typeof d.days < "u" && d.days.indexOf(J(a)) !== -1 && (l = !0), typeof d.daysOfMonth < "u" && d.daysOfMonth.indexOf(A(a)) !== -1 && (l = !0), typeof d.customPredictor == "function" && d.customPredictor(a) && (l = !0), l) : l;
    }
    function T(a) {
      return typeof a < "u" && a;
    }
    function C(a) {
      const l = e.highlighted;
      if (!(l && l.includeDisabled) && k(a))
        return !1;
      let d = !1;
      return typeof l > "u" ? !1 : (typeof l.dates < "u" && l.dates.forEach((L) => {
        oe(a, L) && (d = !0);
      }), T(l.from) && T(l.to) && (d = a >= l.from && a <= l.to), typeof l.days < "u" && l.days.indexOf(J(a)) !== -1 && (d = !0), typeof l.daysOfMonth < "u" && l.daysOfMonth.indexOf(A(a)) !== -1 && (d = !0), typeof l.customPredictor == "function" && l.customPredictor(a) && (d = !0), d);
    }
    function H(a) {
      return {
        selected: a.isSelected,
        disabled: a.isDisabled,
        highlighted: a.isHighlighted,
        today: a.isToday,
        weekend: a.isWeekend,
        sat: a.isSaturday,
        sun: a.isSunday,
        "highlight-start": a.isHighlightStart,
        "highlight-end": a.isHighlightEnd
      };
    }
    function I(a) {
      const l = e.highlighted;
      return l ? C(a) && l.from instanceof Date && m(l.from) === m(a) && p(l.from) === p(a) && A(l.from) === A(a) : !1;
    }
    function P(a) {
      const l = e.highlighted;
      return l ? C(a) && l.to instanceof Date && m(l.to) === m(a) && p(l.to) === p(a) && A(l.to) === A(a) : !1;
    }
    const F = h(() => {
      if (e.mondayFirst) {
        const a = e.translation && e.translation.days && e.translation.days.slice();
        return a.push(a.shift()), a;
      }
      return e.translation && e.translation.days;
    }), j = h(() => {
      const a = e.pageDate, l = e.useUtc ? new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), 1)) : new Date(a.getFullYear(), a.getMonth(), 1, a.getHours(), a.getMinutes());
      return e.mondayFirst ? J(l) > 0 ? J(l) - 1 : 6 : J(l);
    }), O = h(() => {
      const a = e.pageDate, l = [], d = e.useUtc ? new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), 1)) : new Date(a.getFullYear(), a.getMonth(), 1, a.getHours(), a.getMinutes()), L = Ie(m(d), p(d));
      for (let Q = 0; Q < L; Q += 1)
        l.push({
          date: A(d),
          timestamp: d.getTime(),
          isSelected: V(d),
          isDisabled: k(d),
          isHighlighted: C(d),
          isHighlightStart: I(d),
          isHighlightEnd: P(d),
          isToday: oe(d, /* @__PURE__ */ new Date()),
          isWeekend: J(d) === 0 || J(d) === 6,
          isSaturday: J(d) === 6,
          isSunday: J(d) === 0
        }), ie(d, A(d) + 1);
      return l;
    }), u = h(() => {
      const a = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return ue(p(e.pageDate), a);
    }), s = h(() => {
      const a = e.translation && e.translation.months;
      return ae(p(e.pageDate), a);
    }), D = h(() => {
      const a = e.translation && e.translation.yearSuffix;
      return `${m(e.pageDate)}${a}`;
    }), w = h(() => (e.translation && e.translation.ymd && e.translation && e.translation.ymd) === !0), E = h(() => e.isRtl ? M() : n()), G = h(() => e.isRtl ? n() : M()), de = h(() => {
      const a = z(e.selectedDate);
      return e.selectedDate ? re(a, e.translation && e.translation.daysNames) : null;
    }), K = h(() => {
      const a = z(e.selectedDate);
      return e.selectedDate ? A(a) : null;
    }), ce = h(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isDefined: T,
      showMonthCalendar: i,
      daysOfWeek: F,
      blankDays: j,
      isYmd: w,
      days: O,
      currMonthName: u,
      currYearName: D,
      isLeftNavDisabled: E,
      isRightNavDisabled: G,
      selectDate: o,
      previousMonth: c,
      nextMonth: $,
      dayClasses: H,
      monthName: s,
      getDayName: de,
      getDisplayDate: K,
      showYearCalendar: r,
      isNextMonthDisabled: M,
      ifDifferentViews: ce,
      isSelectedDate: V,
      isDisabledDate: k,
      isHighlightedDate: C,
      isHighlightStart: I,
      isHighlightEnd: P
    };
  }
}), xe = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, et = { class: "vuejs3-datepicker__calendar-topbar-day" }, tt = { class: "vuejs3-datepicker__calendar-actionarea" }, at = ["innerHTML", "onClick"];
function nt(e, t, o, i, r, y) {
  return le((g(), b("div", {
    class: S(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: ye(e.calendarStyle),
    onMousedown: t[4] || (t[4] = te(() => {
    }, ["prevent"]))
  }, [
    U(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (g(), b("section", xe, [
      N("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: t[0] || (t[0] = (...n) => e.showYearCalendar && e.showYearCalendar(...n))
      }, v(e.currYearName), 1),
      N("p", et, v(e.getDayName) + " " + v(e.getDisplayDate) + " " + v(e.monthName), 1)
    ])) : Y("", !0),
    N("div", tt, [
      N("header", null, [
        N("span", {
          onClick: t[1] || (t[1] = (n) => e.isRtl ? e.nextMonth() : e.previousMonth()),
          class: S(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        N("span", {
          class: S(["day__month_btn", e.allowedToShowView("month") ? "up" : ""]),
          onClick: t[2] || (t[2] = (...n) => e.showMonthCalendar && e.showMonthCalendar(...n))
        }, v(e.isYmd ? e.currYearName : e.currMonthName) + " " + v(e.isYmd ? e.currMonthName : e.currYearName), 3),
        N("span", {
          onClick: t[3] || (t[3] = (n) => e.isRtl ? e.previousMonth() : e.nextMonth()),
          class: S(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      N("div", {
        class: S(e.isRtl ? "flex-rtl" : "")
      }, [
        (g(!0), b(_, null, x(e.daysOfWeek, (n) => (g(), b("span", {
          class: "cell day-header",
          key: n.timestamp
        }, v(n), 1))), 128)),
        e.blankDays > 0 ? (g(!0), b(_, { key: 0 }, x(e.blankDays, (n) => (g(), b("span", {
          class: "cell day blank",
          key: n.timestamp
        }))), 128)) : Y("", !0),
        (g(!0), b(_, null, x(e.days, (n) => (g(), b("span", {
          class: S(["cell day", e.dayClasses(n)]),
          key: n.timestamp,
          innerHTML: e.dayCellContent(n),
          onClick: (c) => e.selectDate(n)
        }, null, 10, at))), 128))
      ], 2)
    ])
  ], 38)), [
    [ge, e.showDayView]
  ]);
}
const st = /* @__PURE__ */ W(_e, [["render", nt]]), ot = q({
  name: "PickerMonth",
  props: {
    showMonthView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null,
      validator: (e) => ["string", "number"].indexOf(typeof e) !== -1 || e === null
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
    function o(s) {
      s.isDisabled || t("select-month", s);
    }
    function i(s) {
      const D = e.pageDate;
      he(D, m(D) + s), t("changed-year", D);
    }
    function r() {
      const s = e.disabledDates;
      return !s || !s.to ? !1 : m(s.to) >= m(e.pageDate);
    }
    function y() {
      r() || i(-1);
    }
    function n() {
      const s = e.disabledDates;
      return !s || !s.from ? !1 : m(s.from) <= m(e.pageDate);
    }
    function c() {
      n() || i(1);
    }
    function M() {
      t("show-year-calendar");
    }
    function $(s) {
      const D = z(e.selectedDate);
      return D && m(D) === m(s) && p(D) === p(s);
    }
    function V(s) {
      let D = !1;
      const w = e.disabledDates;
      return !w || typeof w > "u" ? !1 : (typeof w.to < "u" && w.to && (p(s) < p(w.to) && m(s) <= m(w.to) || m(s) < m(w.to)) && (D = !0), typeof w.from < "u" && w.from && (p(s) > p(w.from) && m(s) >= m(w.from) || m(s) > m(w.from)) && (D = !0), typeof w.customPredictor == "function" && w.customPredictor(s) && (D = !0), D);
    }
    const k = h(() => {
      const s = e.pageDate, D = [], w = e.useUtc ? new Date(Date.UTC(s.getUTCFullYear(), 0, s.getUTCDate())) : new Date(s.getFullYear(), 0, s.getDate(), s.getHours(), s.getMinutes());
      for (let E = 0; E < 12; E += 1)
        D.push({
          month: ae(E, e.translation && e.translation.months),
          timestamp: w.getTime(),
          isSelected: $(w),
          isDisabled: V(w)
        }), pe(w, p(w) + 1);
      return D;
    }), T = h(() => {
      const s = e.translation && e.translation.yearSuffix;
      return `${m(e.pageDate)}${s}`;
    }), C = h(() => e.isRtl ? n() : r()), H = h(() => e.isRtl ? r() : n()), I = h(() => {
      const s = e.translation && e.translation.months;
      return ae(p(e.pageDate), s);
    }), P = h(() => {
      const s = z(e.selectedDate);
      return e.selectedDate ? A(s) : null;
    }), F = h(() => {
      const s = z(e.selectedDate);
      return e.selectedDate ? re(s, e.translation && e.translation.daysNames) : null;
    }), j = h(() => {
      const s = e.translation && e.translation.yearSuffix;
      return `${m(e.pageDate)}${s}`;
    }), O = h(() => {
      const s = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return ue(p(e.pageDate), s);
    }), u = h(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: H,
      isLeftNavDisabled: C,
      pageYearName: T,
      months: k,
      selectMonth: o,
      previousYear: y,
      nextYear: c,
      currYearName: j,
      getDisplayDate: P,
      monthName: I,
      showYearCalendar: M,
      getDayName: F,
      currMonthName: O,
      ifDifferentViews: u,
      isSelectedMonth: $,
      isDisabledMonth: V
    };
  }
}), it = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, lt = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, rt = { class: "vuejs3-datepicker__calendar-actionarea" }, ut = ["onClick"];
function dt(e, t, o, i, r, y) {
  return le((g(), b("div", {
    class: S(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: ye(e.calendarStyle),
    onMousedown: t[4] || (t[4] = te(() => {
    }, ["prevent"]))
  }, [
    U(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews ? (g(), b("section", it, [
      N("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: t[0] || (t[0] = (...n) => e.showYearCalendar && e.showYearCalendar(...n))
      }, v(e.currYearName), 1),
      e.selectedDate ? (g(), b("p", lt, v(e.getDayName) + " " + v(e.getDisplayDate) + " " + v(e.monthName), 1)) : Y("", !0)
    ])) : Y("", !0),
    N("div", rt, [
      N("header", null, [
        N("span", {
          onClick: t[1] || (t[1] = (n) => e.isRtl ? e.nextYear() : e.previousYear()),
          class: S(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        N("span", {
          class: S(["month__year_btn", e.allowedToShowView("year") ? "up" : ""]),
          onClick: t[2] || (t[2] = (...n) => e.showYearCalendar && e.showYearCalendar(...n))
        }, v(e.pageYearName), 3),
        N("span", {
          onClick: t[3] || (t[3] = (n) => e.isRtl ? e.previousYear() : e.nextYear()),
          class: S(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (g(!0), b(_, null, x(e.months, (n) => (g(), b("span", {
        class: S(["cell month", { selected: n.isSelected, disabled: n.isDisabled }]),
        key: n.timestamp,
        onClick: te((c) => e.selectMonth(n), ["stop"])
      }, v(n.month), 11, ut))), 128))
    ])
  ], 38)), [
    [ge, e.showMonthView]
  ]);
}
const ct = /* @__PURE__ */ W(ot, [["render", dt]]), mt = q({
  name: "PickerYear",
  props: {
    showYearView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null,
      validator: (e) => ["string", "number"].indexOf(typeof e) !== -1 || e === null
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
    function o(u) {
      u.isDisabled || t("select-year", u);
    }
    function i(u) {
      const s = e.pageDate;
      he(s, m(s) + u), t("changed-decade", s);
    }
    function r() {
      const u = e.disabledDates;
      if (!u || !u.to)
        return !1;
      const s = m(u.to), D = Math.floor(m(e.pageDate) / 10) * 10 - 1;
      return s > D;
    }
    function y() {
      r() || i(-10);
    }
    function n() {
      const u = e.disabledDates;
      if (!u || !u.from)
        return !1;
      const s = m(u.from), D = Math.ceil(m(e.pageDate) / 10) * 10;
      return s <= D;
    }
    function c() {
      n() || i(10);
    }
    function M(u) {
      const s = z(e.selectedDate);
      return e.selectedDate ? m(s) === m(u) : !1;
    }
    function $(u) {
      let s = !1;
      return typeof e.disabledDates > "u" || !e.disabledDates ? !1 : (typeof e.disabledDates.to < "u" && e.disabledDates.to && m(u) < m(e.disabledDates.to) && (s = !0), typeof e.disabledDates.from < "u" && e.disabledDates.from && m(u) > m(e.disabledDates.from) && (s = !0), typeof e.disabledDates.customPredictor == "function" && (s = e.disabledDates.customPredictor(u)), s);
    }
    const V = h(() => {
      const u = e.pageDate, s = [], D = e.useUtc ? new Date(Date.UTC(Math.floor(u.getUTCFullYear() / 10) * 10, u.getUTCMonth(), u.getUTCDate())) : new Date(Math.floor(u.getFullYear() / 10) * 10, u.getMonth(), u.getDate(), u.getHours(), u.getMinutes());
      for (let w = 0; w < 10; w += 1)
        s.push({
          year: m(D),
          timestamp: D.getTime(),
          isSelected: M(D),
          isDisabled: $(D)
        }), he(D, m(D) + 1);
      return s;
    }), k = h(() => {
      const u = Math.floor(m(e.pageDate) / 10) * 10, s = u + 9, D = e.translation && e.translation.yearSuffix;
      return `${u} - ${s}${D}`;
    }), T = h(() => e.isRtl ? n() : r()), C = h(() => e.isRtl ? r() : n()), H = h(() => {
      const u = z(e.selectedDate);
      return e.selectedDate ? re(u, e.translation && e.translation.daysNames) : null;
    }), I = h(() => {
      const u = e.translation && e.translation.months;
      return ae(p(e.pageDate), u);
    }), P = h(() => {
      const u = z(e.selectedDate);
      return e.selectedDate ? A(u) : null;
    }), F = h(() => {
      const u = e.translation && e.translation.yearSuffix;
      return `${m(e.pageDate)}${u}`;
    }), j = h(() => {
      const u = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return ue(p(e.pageDate), u);
    }), O = h(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: C,
      isLeftNavDisabled: T,
      getPageDecade: k,
      years: V,
      nextDecade: c,
      previousDecade: y,
      selectYear: o,
      getDayName: H,
      monthName: I,
      getDisplayDate: P,
      currYearName: F,
      currMonthName: j,
      ifDifferentViews: O,
      // methods
      isNextDecadeDisabled: n,
      isPreviousDecadeDisabled: r,
      isDisabledYear: $
    };
  }
}), ft = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, ht = { class: "vuejs3-datepicker__calendar-topbar-year" }, yt = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, gt = { class: "vuejs3-datepicker__calendar-actionarea" }, Dt = ["onClick"];
function bt(e, t, o, i, r, y) {
  return le((g(), b("div", {
    class: S(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: ye(e.calendarStyle),
    onMousedown: t[2] || (t[2] = te(() => {
    }, ["prevent"]))
  }, [
    U(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (g(), b("section", ft, [
      N("p", ht, v(e.currYearName), 1),
      e.selectedDate ? (g(), b("p", yt, v(e.getDayName) + " " + v(e.getDisplayDate) + " " + v(e.monthName), 1)) : Y("", !0)
    ])) : Y("", !0),
    N("div", gt, [
      N("header", null, [
        N("span", {
          onClick: t[0] || (t[0] = (n) => e.isRtl ? e.nextDecade() : e.previousDecade()),
          class: S(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        N("span", null, v(e.getPageDecade), 1),
        N("span", {
          onClick: t[1] || (t[1] = (n) => e.isRtl ? e.previousDecade() : e.nextDecade()),
          class: S(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (g(!0), b(_, null, x(e.years, (n) => (g(), b("span", {
        class: S(["cell year", { selected: n.isSelected, disabled: n.isDisabled }]),
        key: n.timestamp,
        onClick: te((c) => e.selectYear(n), ["stop"])
      }, v(n.year), 11, Dt))), 128))
    ])
  ], 38)), [
    [ge, e.showYearView]
  ]);
}
const wt = /* @__PURE__ */ W(mt, [["render", bt]]), pt = () => {
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
  ], o = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], i = ["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."];
  return {
    months: t,
    monthsAbbr: o,
    days: i,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    language: e,
    langName: e,
    daysNames: i
  };
}, Nt = () => {
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
}, St = () => {
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
}, vt = () => {
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
}, Ct = () => {
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
}, Mt = () => {
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
}, Vt = () => {
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
}, kt = () => {
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
  ], o = ["jan.", "feb.", "mrt.", "apr.", "mei", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], i = ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."];
  return {
    months: t,
    monthsAbbr: o,
    days: i,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    language: e,
    daysNames: i
  };
}, Tt = () => {
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
}, Bt = () => {
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
}, $t = () => {
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
}, Ft = () => {
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
}, Yt = () => {
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
}, jt = () => {
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
}, Ot = () => {
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
}, At = () => {
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
}, It = {
  af: pt(),
  arTn: At(),
  hi: Mt(),
  ja: Vt(),
  de: Nt(),
  en: St(),
  es: vt(),
  fr: Ct(),
  nl: kt(),
  pt: Tt(),
  it: Bt(),
  pl: $t(),
  ru: Ft(),
  tr: Yt(),
  vn: jt(),
  bg: Ot()
}, Ht = q({
  name: "Datepicker",
  components: {
    DateInput: Ze,
    PickerDay: st,
    PickerMonth: ct,
    PickerYear: wt
  },
  directives: {
    clickoutside: ke
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
      validator: (e) => Je(e),
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
  setup(e, { emit: t }) {
    const o = new Date(e.modelValue), i = R(0), r = R(null);
    e.modelValue && Ae(o) && (i.value = o.getTime(), r.value = o), e.openDate && (i.value = ie(new Date(e.openDate), 1));
    const y = R(!1), n = R(!1), c = R(!1), M = R(0), $ = R(/* @__PURE__ */ new Date()), V = h(() => e.initialView ? e.initialView : e.minimumView), k = h(() => new Date(i.value)), T = h(() => It[e.language]), C = h(() => !!e.inline), H = h(() => ({
      position: C.value ? "static" : void 0
    })), I = h(() => y.value || n.value || c.value), P = h(() => T.value && T.value.rtl === !0);
    function F(f) {
      f || (e.openDate ? f = new Date(e.openDate) : f = /* @__PURE__ */ new Date()), i.value = ie(new Date(f), 1);
    }
    function j(f) {
      const B = ["day", "month", "year"], ne = B.indexOf(e.minimumView), ve = B.indexOf(e.maximumView), De = B.indexOf(f);
      return De >= ne && De <= ve;
    }
    function O(f) {
      y.value = !1, n.value = !1, c.value = !1, C.value || f && t("closed");
    }
    function u() {
      return j("day") ? (O(), y.value = !0, !0) : !1;
    }
    function s() {
      return j("month") ? (O(), n.value = !0, !0) : !1;
    }
    function D() {
      return j("year") ? (O(), c.value = !0, !0) : !1;
    }
    function w() {
      const f = V.value;
      if (!j(f))
        throw new Error(
          `initialView '${f}' cannot be rendered based on minimum '${e.minimumView}' and maximum '${e.maximumView}'`
        );
      switch (f) {
        case "year":
          D();
          break;
        case "month":
          s();
          break;
        default:
          u();
          break;
      }
    }
    function E() {
      return e.disabled || C.value ? !1 : I.value ? O(!0) : (w(), !0);
    }
    function G(f) {
      const B = new Date(f);
      r.value = B, F(B), t("selected", B), t("update:modelValue", B), t("input", B);
    }
    function de() {
      r.value = null, F(), t("selected", null), e.modelValue ? t("update:modelValue", null) : t("input", null), t("cleared");
    }
    function K(f) {
      G(f.timestamp), C.value || O(!0), $.value = /* @__PURE__ */ new Date();
    }
    function ce(f) {
      t("selected-disabled", f);
    }
    function a(f) {
      const B = new Date(f.timestamp);
      j("day") ? (F(B), u()) : K(f), t("changed-month", f);
    }
    function l(f) {
      const B = new Date(f.timestamp);
      j("month") ? (F(B), s()) : K(f), t("changed-year", f);
    }
    function d(f) {
      let B = f;
      if (typeof f == "string" || typeof f == "number") {
        const ne = new Date(f);
        B = Number.isNaN(ne.valueOf()) ? "" : ne;
      }
      if (!B) {
        F(), r.value = null;
        return;
      }
      r.value = B, F(f);
    }
    function L(f) {
      F(f), t("changed-month", f);
    }
    function Q(f) {
      G(f.getTime());
    }
    function Ne() {
      e.value && d(e.value), C.value && w();
    }
    function Se() {
      O();
    }
    return X(
      () => e.modelValue,
      (f) => {
        d(f);
      }
    ), X(
      () => e.value,
      (f) => {
        d(f);
      }
    ), X(
      () => e.openDate,
      () => {
        F();
      }
    ), X(
      () => e.initialView,
      () => {
        w();
      }
    ), Ne(), {
      pageTimestamp: i,
      selectedDate: r,
      showDayView: y,
      showMonthView: n,
      showYearView: c,
      calendarHeight: M,
      resetTypedDate: $,
      // computed
      pageDate: k,
      translation: T,
      calendarStyle: H,
      isOpen: I,
      isInline: C,
      isRtl: P,
      // methods
      setTypedDate: Q,
      handleChangedMonthFromDayPicker: L,
      selectYear: l,
      selectMonth: a,
      selectDisabledDate: ce,
      clearDate: de,
      showCalendar: E,
      close: O,
      allowedToShowView: j,
      showYearCalendar: D,
      showMonthCalendar: s,
      setPageDate: F,
      selectDate: K,
      closeOnClickOutside: Se,
      showDayCalendar: u,
      computedInitialView: V,
      setDate: ie,
      setDate1: G,
      setValue: d
    };
  }
});
function Pt(e, t, o, i, r, y) {
  const n = Z("date-input"), c = Z("picker-day"), M = Z("picker-month"), $ = Z("picker-year"), V = Me("clickoutside");
  return le((g(), b("div", {
    class: S(["vuejs3-datepicker", [e.isRtl ? "rtl" : "", `vuejs3-${e.theme}`, e.wrapperClass]])
  }, [
    fe(n, {
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
      belowDate: se(() => [
        U(e.$slots, "belowDate")
      ]),
      _: 3
    }, 8, ["selectedDate", "resetTypedDate", "format", "translation", "inline", "id", "name", "fullMonthName", "openDate", "placeholder", "inputClass", "typeable", "clearButton", "clearButtonIcon", "calendarButton", "calendarButtonIcon", "calendarButtonIconContent", "disabled", "required", "addBootstrapClass", "use-utc", "onShowCalendar", "onCloseCalendar", "onTypedDate", "onClearDate", "minimumView", "maximumView", "hideInput", "iconWidth", "iconHeight", "iconColor", "theme"]),
    e.allowedToShowView("day") ? (g(), me(c, {
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
      customCalendarHeader: se(() => [
        U(e.$slots, "customCalendarHeader")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showDayView", "fullMonthName", "allowedToShowView", "disabledDates", "highlighted", "calendarClass", "calendarStyle", "translation", "pageTimestamp", "isRtl", "mondayFirst", "dayCellContent", "onChangedMonth", "onSelectDate", "onShowMonthCalendar", "onSelectedDisabled", "onShowYearCalendar", "minimumView", "maximumView", "preventDisableDateSelection", "theme"])) : Y("", !0),
    e.allowedToShowView("month") ? (g(), me(M, {
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
      customCalendarHeader: se(() => [
        U(e.$slots, "customCalendarHeader")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showMonthView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "fullMonthName", "onSelectMonth", "onShowYearCalendar", "onChangedYear", "minimumView", "maximumView", "theme"])) : Y("", !0),
    e.allowedToShowView("year") ? (g(), me($, {
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
      customCalendarHeader: se(() => [
        U(e.$slots, "customCalendarHeader")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showYearView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectYear", "onChangedDecade", "fullMonthName", "minimumView", "maximumView", "theme"])) : Y("", !0)
  ], 2)), [
    [V, {
      handler: e.inline ? null : e.closeOnClickOutside
    }]
  ]);
}
const zt = /* @__PURE__ */ W(Ht, [["render", Pt]]);
export {
  zt as default
};
