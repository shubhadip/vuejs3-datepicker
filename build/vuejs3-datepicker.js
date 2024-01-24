import './DatePickerComponent.css';
import { defineComponent as q, openBlock as g, createElementBlock as b, normalizeClass as S, createElementVNode as p, ref as U, computed as y, watch as X, resolveComponent as _, createTextVNode as Me, toDisplayString as v, createCommentVNode as $, createVNode as fe, mergeProps as we, renderSlot as j, withDirectives as le, normalizeStyle as ye, withModifiers as ae, Fragment as x, renderList as ee, vShow as ge, resolveDirective as Ve, withCtx as W, createBlock as me } from "vue";
const ke = ["click"], te = [], Te = {
  instances: te,
  beforeMount: be,
  update: (e, t) => {
    JSON.stringify(t.value) !== JSON.stringify(t.oldValue) && be(e, t);
  },
  unmounted: Ne
};
function be(e, { value: t }) {
  Ne(e);
  const s = t, o = typeof s == "function";
  if (!o && !(typeof s == "object") || !(s.isActive !== !1))
    return;
  const n = o ? s : s.handler, u = Be({ el: e, handler: n });
  u.eventHandlers.forEach(
    ({ event: M, handler: F }) => setTimeout(() => document.addEventListener(M, F, !1), 0)
  ), te.push(u);
}
function Ne(e) {
  const t = te.findIndex((o) => o.el === e);
  if (t === -1)
    return;
  te[t].eventHandlers.forEach(
    ({ event: o, handler: l }) => document.removeEventListener(o, l, !1)
  ), te.splice(t, 1);
}
function Be({ el: e, handler: t }) {
  return {
    el: e,
    eventHandlers: ke.map((s) => ({
      event: s,
      handler: (o) => Fe({ event: o, el: e, handler: t })
    }))
  };
}
function Fe({ event: e, el: t, handler: s }) {
  const o = e.path || (e.composedPath ? e.composedPath() : void 0);
  if (o ? o.indexOf(t) < 0 : !t.contains(e.target))
    return s && s(e, t);
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
}), G = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, l] of t)
    s[o] = l;
  return s;
}, Ae = ["height", "width"], je = ["fill"];
function Ye(e, t, s, o, l, m) {
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
      p("path", {
        fill: e.color,
        d: "M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
      }, null, 8, je)
    ], 8, Ae))
  ], 2);
}
const Oe = /* @__PURE__ */ G($e, [["render", Ye]]), f = (e, t = !1) => t ? e.getUTCFullYear() : e.getFullYear(), N = (e, t = !1) => t ? e.getUTCMonth() : e.getMonth(), I = (e, t = !1) => t ? e.getUTCDate() : e.getDate(), z = (e, t = !1) => t ? e.getUTCDay() : e.getDay(), he = (e, t, s = !1) => s ? e.setUTCFullYear(t) : e.setFullYear(t), pe = (e, t, s = !1) => s ? e.setUTCMonth(t) : e.setMonth(t), re = (e, t, s = !1) => s ? e.setUTCDate(t) : e.setDate(t), oe = (e, t, s = !1) => {
  const o = new Date(e.getTime()), l = new Date(t.getTime());
  return s ? (o.setUTCHours(0, 0, 0, 0), l.setUTCHours(0, 0, 0, 0)) : (o.setHours(0, 0, 0, 0), l.setHours(0, 0, 0, 0)), o.getTime() === l.getTime();
}, Ie = (e) => Object.prototype.toString.call(e) !== "[object Date]" ? !1 : !Number.isNaN(e.getTime()), ie = (e, t) => {
  if (typeof e != "object")
    throw TypeError("Invalid Type");
  return t[z(e)];
}, ne = (e, t) => {
  if (!t)
    throw Error("missing 2nd parameter Months array");
  if (typeof e == "object")
    return t[N(e)];
  if (typeof e == "number")
    return t[e];
  throw TypeError("Invalid type");
}, ue = (e, t) => {
  if (!t)
    throw Error("missing 2nd paramter Months array");
  if (typeof e == "object")
    return t[N(e)];
  if (typeof e == "number")
    return t[e];
  throw TypeError("Invalid type");
}, Pe = (e, t) => /8|3|5|10/.test(t) ? 30 : t === 1 ? !(e % 4) && e % 100 || !(e % 400) ? 29 : 28 : 31, Je = (e) => {
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
}, He = (e, t, s) => {
  const o = f(e), l = N(e) + 1, m = I(e);
  return t.replace(/dd/, `0${m}`.slice(-2)).replace(/d/, m).replace(/yyyy/, o).replace(/yy/, String(o).slice(2)).replace(/MMMM/, ne(N(e), s.months)).replace(/MMM/, ue(N(e), s.monthsAbbr)).replace(/MM/, `0${l}`.slice(-2)).replace(/M(?!a|ä|e)/, l.toString()).replace(/su/, Je(I(e))).replace(/D(?!e|é|i)/, ie(e, s.days));
}, ze = (e) => e === null || e instanceof Date || typeof e == "string" || typeof e == "number", R = (e) => typeof e == "string" ? new Date(e) : e, Re = q({
  name: "DateInput",
  inheritAttrs: !1,
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
    const s = U(), o = U(null), l = y(() => e.addBootstrapClass ? typeof e.inputClass == "string" ? [e.inputClass, "form-control"].join(" ") : {
      "form-control": !0,
      ...e.inputClass
    } : e.inputClass), m = y(() => {
      var T, C;
      if (!e.selectedDate)
        return null;
      if (s.value)
        return s.value;
      const V = R(e.selectedDate);
      let k = typeof e.format == "function" ? e.format(V) : He(V, e.format, e.translation);
      if (e.minimumView === e.maximumView) {
        const [, J, P] = k.split(" ");
        if (e.maximumView === "month") {
          if (e.fullMonthName) {
            const H = (T = e.translation) == null ? void 0 : T.monthsAbbr.indexOf(J);
            return (C = e.translation) == null ? void 0 : C.months[H];
          }
          k = J;
        } else
          e.maximumView === "year" && (k = P);
      }
      return k;
    });
    X(
      () => e.resetTypedDate,
      () => {
        s.value = "";
      }
    );
    function n() {
      t("show-calendar");
    }
    function u(V) {
      if ([
        27,
        // escape
        13
        // enter
      ].includes(V.keyCode) && o.value.blur(), e.typeable) {
        const { value: k } = o.value, T = Date.parse(k);
        Number.isNaN(T) || (s.value = k, t("typed-date", new Date(T)));
      }
    }
    function M() {
      t("clear-date");
    }
    function F() {
      e.typeable && Number.isNaN(Date.parse(o.value.value)) && (M(), o.value.value = null, s.value = ""), t("close-calendar", !0);
    }
    return {
      typedDate: s,
      computedInputClass: l,
      formattedValue: m,
      showCalendar: n,
      parseTypedDate: u,
      inputBlurred: F,
      inputRef: o,
      clearDate: M
    };
  }
});
const Ue = { key: 0 }, Ee = {
  key: 1,
  style: { position: "relative" }
}, Le = { key: 0 }, We = ["type", "name", "id", "value", "open-date", "placeholder", "clear-button", "disabled", "required", "readonly"], qe = {
  key: 0,
  class: "vuejs3-datepicker__value"
}, Ge = { class: "vuejs3-datepicker__icon" }, Ke = {
  key: 0,
  class: "vuejs3-datepicker__content"
}, Qe = {
  key: 1,
  class: "vuejs3-datepicker__content"
}, Ze = { key: 0 };
function Xe(e, t, s, o, l, m) {
  const n = _("IconView");
  return g(), b("div", {
    class: S([e.addBootstrapClass ? "input-group" : ""])
  }, [
    e.calendarButton ? (g(), b("span", {
      key: 0,
      class: S(["vuejs3-datepicker__calendar-button", { "input-group-prepend": e.addBootstrapClass, "cursor-na": e.disabled }]),
      onClick: t[0] || (t[0] = (...u) => e.showCalendar && e.showCalendar(...u))
    }, [
      p("span", {
        class: S({ "input-group-text": e.addBootstrapClass })
      }, [
        p("i", {
          class: S(e.calendarButtonIcon)
        }, [
          Me(v(e.calendarButtonIconContent) + " ", 1),
          e.calendarButtonIcon ? $("", !0) : (g(), b("span", Ue, "…"))
        ], 2)
      ], 2)
    ], 2)) : $("", !0),
    e.typeable || !e.hideInput ? (g(), b("div", Ee, [
      e.inline ? $("", !0) : (g(), b("span", Le, [
        fe(n, {
          customClass: "vuejs3-datepicker__typeablecalendar",
          color: e.iconColor,
          width: e.iconWidth,
          height: e.iconHeight
        }, null, 8, ["color", "width", "height"])
      ])),
      p("input", we(e.$attrs, {
        type: e.inline ? "hidden" : "text",
        class: [e.computedInputClass, "vuejs3-datepicker__inputvalue"],
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
        onClick: t[1] || (t[1] = (...u) => e.showCalendar && e.showCalendar(...u)),
        onKeyup: t[2] || (t[2] = (...u) => e.parseTypedDate && e.parseTypedDate(...u)),
        onBlur: t[3] || (t[3] = (...u) => e.inputBlurred && e.inputBlurred(...u)),
        autocomplete: "off"
      }), null, 16, We)
    ])) : (g(), b("div", {
      key: 2,
      onClick: t[4] || (t[4] = (...u) => e.showCalendar && e.showCalendar(...u)),
      id: "calendar-div"
    }, [
      e.inline ? $("", !0) : (g(), b("div", qe, [
        p("span", Ge, [
          fe(n, {
            color: e.iconColor,
            width: e.iconWidth,
            height: e.iconHeight
          }, null, 8, ["color", "width", "height"])
        ]),
        e.formattedValue ? (g(), b("div", Ke, v(e.formattedValue), 1)) : (g(), b("div", Qe, v(e.placeholder), 1))
      ]))
    ])),
    e.clearButton && e.selectedDate ? (g(), b("span", {
      key: 3,
      class: S(["vuejs3-datepicker__clear-button", { "input-group-append": e.addBootstrapClass }]),
      onClick: t[5] || (t[5] = (u) => e.clearDate())
    }, [
      p("span", {
        class: S({ "input-group-text": e.addBootstrapClass })
      }, [
        p("i", {
          class: S(e.clearButtonIcon)
        }, [
          e.clearButtonIcon ? $("", !0) : (g(), b("span", Ze, "×"))
        ], 2)
      ], 2)
    ], 2)) : $("", !0),
    j(e.$slots, "belowDate", {}, void 0, !0)
  ], 2);
}
const _e = /* @__PURE__ */ G(Re, [["render", Xe], ["__scopeId", "data-v-d224d91b"]]), xe = q({
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
    function s(a) {
      a.isDisabled ? (t("selected-disabled", a), e.preventDisableDateSelection || t("select-date", a)) : t("select-date", a);
    }
    function o() {
      t("show-month-calendar");
    }
    function l() {
      t("show-year-calendar");
    }
    function m(a) {
      const i = e.pageDate;
      pe(i, N(i) + a), t("changed-month", i);
    }
    function n() {
      const a = e.disabledDates;
      if (!a || !a.to)
        return !1;
      const i = e.pageDate;
      return N(a.to) >= N(i) && f(a.to) >= f(i);
    }
    function u() {
      n() || m(-1);
    }
    function M() {
      const a = e.disabledDates;
      if (!a || !a.from)
        return !1;
      const i = e.pageDate;
      return N(a.from) <= N(i) && f(a.from) <= f(i);
    }
    function F() {
      M() || m(1);
    }
    function V(a) {
      const i = R(e.selectedDate);
      return e.selectedDate ? oe(i, a) : !1;
    }
    function k(a) {
      let i = !1;
      const c = e.disabledDates;
      return c ? typeof c > "u" ? !1 : (typeof c.dates < "u" && c.dates.forEach((L) => {
        oe(a, L) && (i = !0);
      }), typeof c.to < "u" && c.to && a < c.to && (i = !0), typeof c.from < "u" && c.from && a > c.from && (i = !0), typeof c.days < "u" && c.days.indexOf(z(a)) !== -1 && (i = !0), typeof c.daysOfMonth < "u" && c.daysOfMonth.indexOf(I(a)) !== -1 && (i = !0), typeof c.customPredictor == "function" && c.customPredictor(a) && (i = !0), i) : i;
    }
    function T(a) {
      return typeof a < "u" && a;
    }
    function C(a) {
      const i = e.highlighted;
      if (!(i && i.includeDisabled) && k(a))
        return !1;
      let c = !1;
      return typeof i > "u" ? !1 : (typeof i.dates < "u" && i.dates.forEach((L) => {
        oe(a, L) && (c = !0);
      }), T(i.from) && T(i.to) && (c = a >= i.from && a <= i.to), typeof i.days < "u" && i.days.indexOf(z(a)) !== -1 && (c = !0), typeof i.daysOfMonth < "u" && i.daysOfMonth.indexOf(I(a)) !== -1 && (c = !0), typeof i.customPredictor == "function" && i.customPredictor(a) && (c = !0), c);
    }
    function J(a) {
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
    function P(a) {
      const i = e.highlighted;
      return i ? C(a) && i.from instanceof Date && f(i.from) === f(a) && N(i.from) === N(a) && I(i.from) === I(a) : !1;
    }
    function H(a) {
      const i = e.highlighted;
      return i ? C(a) && i.to instanceof Date && f(i.to) === f(a) && N(i.to) === N(a) && I(i.to) === I(a) : !1;
    }
    const A = y(() => {
      if (e.mondayFirst) {
        const a = e.translation && e.translation.days && e.translation.days.slice();
        return a.push(a.shift()), a;
      }
      return e.translation && e.translation.days;
    }), Y = y(() => {
      const a = e.pageDate, i = e.useUtc ? new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), 1)) : new Date(a.getFullYear(), a.getMonth(), 1, a.getHours(), a.getMinutes());
      return e.mondayFirst ? z(i) > 0 ? z(i) - 1 : 6 : z(i);
    }), O = y(() => {
      const a = e.pageDate, i = [], c = e.useUtc ? new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), 1)) : new Date(a.getFullYear(), a.getMonth(), 1, a.getHours(), a.getMinutes()), L = Pe(f(c), N(c));
      for (let Z = 0; Z < L; Z += 1)
        i.push({
          date: I(c),
          timestamp: c.getTime(),
          isSelected: V(c),
          isDisabled: k(c),
          isHighlighted: C(c),
          isHighlightStart: P(c),
          isHighlightEnd: H(c),
          isToday: oe(c, /* @__PURE__ */ new Date()),
          isWeekend: z(c) === 0 || z(c) === 6,
          isSaturday: z(c) === 6,
          isSunday: z(c) === 0
        }), re(c, I(c) + 1);
      return i;
    }), d = y(() => {
      const a = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return ue(N(e.pageDate), a);
    }), r = y(() => {
      const a = e.translation && e.translation.months;
      return ne(N(e.pageDate), a);
    }), D = y(() => {
      const a = e.translation && e.translation.yearSuffix;
      return `${f(e.pageDate)}${a}`;
    }), w = y(() => (e.translation && e.translation.ymd && e.translation && e.translation.ymd) === !0), E = y(() => e.isRtl ? M() : n()), K = y(() => e.isRtl ? n() : M()), de = y(() => {
      const a = R(e.selectedDate);
      return e.selectedDate ? ie(a, e.translation && e.translation.daysNames) : null;
    }), Q = y(() => {
      const a = R(e.selectedDate);
      return e.selectedDate ? I(a) : null;
    }), ce = y(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isDefined: T,
      showMonthCalendar: o,
      daysOfWeek: A,
      blankDays: Y,
      isYmd: w,
      days: O,
      currMonthName: d,
      currYearName: D,
      isLeftNavDisabled: E,
      isRightNavDisabled: K,
      selectDate: s,
      previousMonth: u,
      nextMonth: F,
      dayClasses: J,
      monthName: r,
      getDayName: de,
      getDisplayDate: Q,
      showYearCalendar: l,
      isNextMonthDisabled: M,
      ifDifferentViews: ce,
      isSelectedDate: V,
      isDisabledDate: k,
      isHighlightedDate: C,
      isHighlightStart: P,
      isHighlightEnd: H
    };
  }
}), et = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, tt = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, at = { class: "vuejs3-datepicker__calendar-actionarea" }, nt = ["innerHTML", "onClick"];
function st(e, t, s, o, l, m) {
  return le((g(), b("div", {
    class: S(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: ye(e.calendarStyle),
    onMousedown: t[4] || (t[4] = ae(() => {
    }, ["prevent"]))
  }, [
    j(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (g(), b("section", et, [
      p("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: t[0] || (t[0] = (...n) => e.showYearCalendar && e.showYearCalendar(...n))
      }, v(e.currYearName), 1),
      j(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (g(), b("p", tt, v(e.getDayName) + " " + v(e.getDisplayDate) + " " + v(e.monthName), 1)) : $("", !0)
      ])
    ])) : $("", !0),
    p("div", at, [
      p("header", null, [
        p("span", {
          onClick: t[1] || (t[1] = (n) => e.isRtl ? e.nextMonth() : e.previousMonth()),
          class: S(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        p("span", {
          class: S(["day__month_btn", e.allowedToShowView("month") ? "up" : ""]),
          onClick: t[2] || (t[2] = (...n) => e.showMonthCalendar && e.showMonthCalendar(...n))
        }, v(e.isYmd ? e.currYearName : e.currMonthName) + " " + v(e.isYmd ? e.currMonthName : e.currYearName), 3),
        p("span", {
          onClick: t[3] || (t[3] = (n) => e.isRtl ? e.previousMonth() : e.nextMonth()),
          class: S(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      p("div", {
        class: S(e.isRtl ? "flex-rtl" : "")
      }, [
        (g(!0), b(x, null, ee(e.daysOfWeek, (n) => (g(), b("span", {
          class: "cell day-header",
          key: n.timestamp
        }, v(n), 1))), 128)),
        e.blankDays > 0 ? (g(!0), b(x, { key: 0 }, ee(e.blankDays, (n) => (g(), b("span", {
          class: "cell day blank",
          key: n.timestamp
        }))), 128)) : $("", !0),
        (g(!0), b(x, null, ee(e.days, (n) => (g(), b("span", {
          class: S(["cell day", e.dayClasses(n)]),
          key: n.timestamp,
          innerHTML: e.dayCellContent(n),
          onClick: (u) => e.selectDate(n)
        }, null, 10, nt))), 128))
      ], 2)
    ])
  ], 38)), [
    [ge, e.showDayView]
  ]);
}
const ot = /* @__PURE__ */ G(xe, [["render", st]]), rt = q({
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
    function s(r) {
      r.isDisabled || t("select-month", r);
    }
    function o(r) {
      const D = e.pageDate;
      he(D, f(D) + r), t("changed-year", D);
    }
    function l() {
      const r = e.disabledDates;
      return !r || !r.to ? !1 : f(r.to) >= f(e.pageDate);
    }
    function m() {
      l() || o(-1);
    }
    function n() {
      const r = e.disabledDates;
      return !r || !r.from ? !1 : f(r.from) <= f(e.pageDate);
    }
    function u() {
      n() || o(1);
    }
    function M() {
      t("show-year-calendar");
    }
    function F(r) {
      const D = R(e.selectedDate);
      return D && f(D) === f(r) && N(D) === N(r);
    }
    function V(r) {
      let D = !1;
      const w = e.disabledDates;
      return !w || typeof w > "u" ? !1 : (typeof w.to < "u" && w.to && (N(r) < N(w.to) && f(r) <= f(w.to) || f(r) < f(w.to)) && (D = !0), typeof w.from < "u" && w.from && (N(r) > N(w.from) && f(r) >= f(w.from) || f(r) > f(w.from)) && (D = !0), typeof w.customPredictor == "function" && w.customPredictor(r) && (D = !0), D);
    }
    const k = y(() => {
      const r = e.pageDate, D = [], w = e.useUtc ? new Date(Date.UTC(r.getUTCFullYear(), 0, r.getUTCDate())) : new Date(r.getFullYear(), 0, r.getDate(), r.getHours(), r.getMinutes());
      for (let E = 0; E < 12; E += 1)
        D.push({
          month: ne(E, e.translation && e.translation.months),
          timestamp: w.getTime(),
          isSelected: F(w),
          isDisabled: V(w)
        }), pe(w, N(w) + 1);
      return D;
    }), T = y(() => {
      const r = e.translation && e.translation.yearSuffix;
      return `${f(e.pageDate)}${r}`;
    }), C = y(() => e.isRtl ? n() : l()), J = y(() => e.isRtl ? l() : n()), P = y(() => {
      const r = e.translation && e.translation.months;
      return ne(N(e.pageDate), r);
    }), H = y(() => {
      const r = R(e.selectedDate);
      return e.selectedDate ? I(r) : null;
    }), A = y(() => {
      const r = R(e.selectedDate);
      return e.selectedDate ? ie(r, e.translation && e.translation.daysNames) : null;
    }), Y = y(() => {
      const r = e.translation && e.translation.yearSuffix;
      return `${f(e.pageDate)}${r}`;
    }), O = y(() => {
      const r = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return ue(N(e.pageDate), r);
    }), d = y(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: J,
      isLeftNavDisabled: C,
      pageYearName: T,
      months: k,
      selectMonth: s,
      previousYear: m,
      nextYear: u,
      currYearName: Y,
      getDisplayDate: H,
      monthName: P,
      showYearCalendar: M,
      getDayName: A,
      currMonthName: O,
      ifDifferentViews: d,
      isSelectedMonth: F,
      isDisabledMonth: V
    };
  }
}), lt = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, it = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, ut = { class: "vuejs3-datepicker__calendar-actionarea" }, dt = ["onClick"];
function ct(e, t, s, o, l, m) {
  return le((g(), b("div", {
    class: S(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: ye(e.calendarStyle),
    onMousedown: t[4] || (t[4] = ae(() => {
    }, ["prevent"]))
  }, [
    j(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews ? (g(), b("section", lt, [
      p("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: t[0] || (t[0] = (...n) => e.showYearCalendar && e.showYearCalendar(...n))
      }, v(e.currYearName), 1),
      j(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (g(), b("p", it, v(e.getDayName) + " " + v(e.getDisplayDate) + " " + v(e.monthName), 1)) : $("", !0)
      ])
    ])) : $("", !0),
    p("div", ut, [
      p("header", null, [
        p("span", {
          onClick: t[1] || (t[1] = (n) => e.isRtl ? e.nextYear() : e.previousYear()),
          class: S(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        p("span", {
          class: S(["month__year_btn", e.allowedToShowView("year") ? "up" : ""]),
          onClick: t[2] || (t[2] = (...n) => e.showYearCalendar && e.showYearCalendar(...n))
        }, v(e.pageYearName), 3),
        p("span", {
          onClick: t[3] || (t[3] = (n) => e.isRtl ? e.previousYear() : e.nextYear()),
          class: S(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (g(!0), b(x, null, ee(e.months, (n) => (g(), b("span", {
        class: S(["cell month", { selected: n.isSelected, disabled: n.isDisabled }]),
        key: n.timestamp,
        onClick: ae((u) => e.selectMonth(n), ["stop"])
      }, v(n.month), 11, dt))), 128))
    ])
  ], 38)), [
    [ge, e.showMonthView]
  ]);
}
const mt = /* @__PURE__ */ G(rt, [["render", ct]]), ft = q({
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
    function s(d) {
      d.isDisabled || t("select-year", d);
    }
    function o(d) {
      const r = e.pageDate;
      he(r, f(r) + d), t("changed-decade", r);
    }
    function l() {
      const d = e.disabledDates;
      if (!d || !d.to)
        return !1;
      const r = f(d.to), D = Math.floor(f(e.pageDate) / 10) * 10 - 1;
      return r > D;
    }
    function m() {
      l() || o(-10);
    }
    function n() {
      const d = e.disabledDates;
      if (!d || !d.from)
        return !1;
      const r = f(d.from), D = Math.ceil(f(e.pageDate) / 10) * 10;
      return r <= D;
    }
    function u() {
      n() || o(10);
    }
    function M(d) {
      const r = R(e.selectedDate);
      return e.selectedDate ? f(r) === f(d) : !1;
    }
    function F(d) {
      let r = !1;
      return typeof e.disabledDates > "u" || !e.disabledDates ? !1 : (typeof e.disabledDates.to < "u" && e.disabledDates.to && f(d) < f(e.disabledDates.to) && (r = !0), typeof e.disabledDates.from < "u" && e.disabledDates.from && f(d) > f(e.disabledDates.from) && (r = !0), typeof e.disabledDates.customPredictor == "function" && (r = e.disabledDates.customPredictor(d)), r);
    }
    const V = y(() => {
      const d = e.pageDate, r = [], D = e.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
      for (let w = 0; w < 10; w += 1)
        r.push({
          year: f(D),
          timestamp: D.getTime(),
          isSelected: M(D),
          isDisabled: F(D)
        }), he(D, f(D) + 1);
      return r;
    }), k = y(() => {
      const d = Math.floor(f(e.pageDate) / 10) * 10, r = d + 9, D = e.translation && e.translation.yearSuffix;
      return `${d} - ${r}${D}`;
    }), T = y(() => e.isRtl ? n() : l()), C = y(() => e.isRtl ? l() : n()), J = y(() => {
      const d = R(e.selectedDate);
      return e.selectedDate ? ie(d, e.translation && e.translation.daysNames) : null;
    }), P = y(() => {
      const d = e.translation && e.translation.months;
      return ne(N(e.pageDate), d);
    }), H = y(() => {
      const d = R(e.selectedDate);
      return e.selectedDate ? I(d) : null;
    }), A = y(() => {
      const d = e.translation && e.translation.yearSuffix;
      return `${f(e.pageDate)}${d}`;
    }), Y = y(() => {
      const d = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return ue(N(e.pageDate), d);
    }), O = y(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: C,
      isLeftNavDisabled: T,
      getPageDecade: k,
      years: V,
      nextDecade: u,
      previousDecade: m,
      selectYear: s,
      getDayName: J,
      monthName: P,
      getDisplayDate: H,
      currYearName: A,
      currMonthName: Y,
      ifDifferentViews: O,
      // methods
      isNextDecadeDisabled: n,
      isPreviousDecadeDisabled: l,
      isDisabledYear: F
    };
  }
}), ht = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, yt = { class: "vuejs3-datepicker__calendar-topbar-year" }, gt = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, Dt = { class: "vuejs3-datepicker__calendar-actionarea" }, bt = ["onClick"];
function wt(e, t, s, o, l, m) {
  return le((g(), b("div", {
    class: S(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: ye(e.calendarStyle),
    onMousedown: t[2] || (t[2] = ae(() => {
    }, ["prevent"]))
  }, [
    j(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (g(), b("section", ht, [
      p("p", yt, v(e.currYearName), 1),
      j(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (g(), b("p", gt, v(e.getDayName) + " " + v(e.getDisplayDate) + " " + v(e.monthName), 1)) : $("", !0)
      ])
    ])) : $("", !0),
    p("div", Dt, [
      p("header", null, [
        p("span", {
          onClick: t[0] || (t[0] = (n) => e.isRtl ? e.nextDecade() : e.previousDecade()),
          class: S(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        p("span", null, v(e.getPageDecade), 1),
        p("span", {
          onClick: t[1] || (t[1] = (n) => e.isRtl ? e.previousDecade() : e.nextDecade()),
          class: S(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (g(!0), b(x, null, ee(e.years, (n) => (g(), b("span", {
        class: S(["cell year", { selected: n.isSelected, disabled: n.isDisabled }]),
        key: n.timestamp,
        onClick: ae((u) => e.selectYear(n), ["stop"])
      }, v(n.year), 11, bt))), 128))
    ])
  ], 38)), [
    [ge, e.showYearView]
  ]);
}
const Nt = /* @__PURE__ */ G(ft, [["render", wt]]), pt = () => {
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
}, St = () => {
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
  ], s = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], o = ["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."];
  return {
    months: t,
    monthsAbbr: s,
    days: o,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    language: e,
    langName: e,
    daysNames: o
  };
}, vt = () => {
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
}, Ct = () => {
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
}, Mt = () => {
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
}, Vt = () => {
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
}, kt = () => {
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
}, Tt = () => {
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
}, Bt = () => {
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
  ], s = ["jan.", "feb.", "mrt.", "apr.", "mei", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], o = ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."];
  return {
    months: t,
    monthsAbbr: s,
    days: o,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    language: e,
    daysNames: o
  };
}, Ft = () => {
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
}, $t = () => {
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
}, At = () => {
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
}, jt = () => {
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
}, Ot = () => {
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
}, It = () => {
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
}, Pt = () => {
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
}, Jt = () => {
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
}, Ht = () => {
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
}, zt = () => {
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
}, Rt = () => {
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
}, Ut = {
  ar: pt(),
  af: St(),
  arTn: Pt(),
  hi: kt(),
  ja: Tt(),
  de: vt(),
  en: Ct(),
  es: Mt(),
  fr: Vt(),
  nl: Bt(),
  pt: Ft(),
  it: $t(),
  pl: At(),
  ru: jt(),
  tr: Yt(),
  zh_TW: zt(),
  vn: Ot(),
  bg: It(),
  kr: Ht(),
  id: Jt(),
  cs: Rt()
}, Et = q({
  name: "Datepicker",
  inheritAttrs: !1,
  components: {
    DateInput: _e,
    PickerDay: ot,
    PickerMonth: mt,
    PickerYear: Nt
  },
  directives: {
    clickoutside: Te
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
      validator: (e) => ze(e),
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
    const s = new Date(e.modelValue), o = U(0), l = U(null);
    e.modelValue && Ie(s) && (o.value = s.getTime(), l.value = s), e.openDate && (o.value = re(new Date(e.openDate), 1));
    const m = U(!1), n = U(!1), u = U(!1), M = U(0), F = U(/* @__PURE__ */ new Date()), V = y(() => e.initialView ? e.initialView : e.minimumView), k = y(() => new Date(o.value)), T = y(() => Ut[e.language]), C = y(() => !!e.inline), J = y(() => ({
      position: C.value ? "static" : void 0
    })), P = y(() => m.value || n.value || u.value), H = y(() => T.value && T.value.rtl === !0);
    function A(h) {
      h || (e.openDate ? h = new Date(e.openDate) : h = /* @__PURE__ */ new Date()), o.value = re(new Date(h), 1);
    }
    function Y(h) {
      const B = ["day", "month", "year"], se = B.indexOf(e.minimumView), Ce = B.indexOf(e.maximumView), De = B.indexOf(h);
      return De >= se && De <= Ce;
    }
    function O(h) {
      m.value = !1, n.value = !1, u.value = !1, C.value || h && t("closed");
    }
    function d() {
      return Y("day") ? (O(), m.value = !0, !0) : !1;
    }
    function r() {
      return Y("month") ? (O(), n.value = !0, !0) : !1;
    }
    function D() {
      return Y("year") ? (O(), u.value = !0, !0) : !1;
    }
    function w() {
      const h = V.value;
      if (!Y(h))
        throw new Error(
          `initialView '${h}' cannot be rendered based on minimum '${e.minimumView}' and maximum '${e.maximumView}'`
        );
      switch (h) {
        case "year":
          D();
          break;
        case "month":
          r();
          break;
        default:
          d();
          break;
      }
    }
    function E() {
      return e.disabled || C.value ? !1 : P.value ? O(!0) : (w(), !0);
    }
    function K(h) {
      const B = new Date(h);
      l.value = B, A(B), t("selected", B), t("update:modelValue", B), t("input", B);
    }
    function de() {
      l.value = null, A(), t("selected", null), e.modelValue ? t("update:modelValue", null) : t("input", null), t("cleared");
    }
    function Q(h) {
      K(h.timestamp), C.value || O(!0), F.value = /* @__PURE__ */ new Date();
    }
    function ce(h) {
      t("selected-disabled", h);
    }
    function a(h) {
      const B = new Date(h.timestamp);
      Y("day") ? (A(B), d()) : Q(h), t("changed-month", h);
    }
    function i(h) {
      const B = new Date(h.timestamp);
      Y("month") ? (A(B), r()) : Q(h), t("changed-year", h);
    }
    function c(h) {
      let B = h;
      if (typeof h == "string" || typeof h == "number") {
        const se = new Date(h);
        B = Number.isNaN(se.valueOf()) ? "" : se;
      }
      if (!B) {
        A(), l.value = null;
        return;
      }
      l.value = B, A(h);
    }
    function L(h) {
      A(h), t("changed-month", h);
    }
    function Z(h) {
      K(h.getTime());
    }
    function Se() {
      e.value && c(e.value), C.value && w();
    }
    function ve() {
      O();
    }
    return X(
      () => e.modelValue,
      (h) => {
        c(h);
      }
    ), X(
      () => e.value,
      (h) => {
        c(h);
      }
    ), X(
      () => e.openDate,
      () => {
        A();
      }
    ), X(
      () => e.initialView,
      () => {
        w();
      }
    ), Se(), {
      pageTimestamp: o,
      selectedDate: l,
      showDayView: m,
      showMonthView: n,
      showYearView: u,
      calendarHeight: M,
      resetTypedDate: F,
      // computed
      pageDate: k,
      translation: T,
      calendarStyle: J,
      isOpen: P,
      isInline: C,
      isRtl: H,
      // methods
      setTypedDate: Z,
      handleChangedMonthFromDayPicker: L,
      selectYear: i,
      selectMonth: a,
      selectDisabledDate: ce,
      clearDate: de,
      showCalendar: E,
      close: O,
      allowedToShowView: Y,
      showYearCalendar: D,
      showMonthCalendar: r,
      setPageDate: A,
      selectDate: Q,
      closeOnClickOutside: ve,
      showDayCalendar: d,
      computedInitialView: V,
      setDate: re,
      setDate1: K,
      setValue: c
    };
  }
});
function Lt(e, t, s, o, l, m) {
  const n = _("date-input"), u = _("picker-day"), M = _("picker-month"), F = _("picker-year"), V = Ve("clickoutside");
  return le((g(), b("div", {
    class: S(["vuejs3-datepicker", [e.isRtl ? "rtl" : "", `vuejs3-${e.theme}`, e.wrapperClass]])
  }, [
    fe(n, we(e.$attrs, {
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
    }), {
      belowDate: W(() => [
        j(e.$slots, "belowDate")
      ]),
      _: 3
    }, 16, ["selectedDate", "resetTypedDate", "format", "translation", "inline", "id", "name", "fullMonthName", "openDate", "placeholder", "inputClass", "typeable", "clearButton", "clearButtonIcon", "calendarButton", "calendarButtonIcon", "calendarButtonIconContent", "disabled", "required", "addBootstrapClass", "use-utc", "onShowCalendar", "onCloseCalendar", "onTypedDate", "onClearDate", "minimumView", "maximumView", "hideInput", "iconWidth", "iconHeight", "iconColor", "theme"]),
    e.allowedToShowView("day") ? (g(), me(u, {
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
      customCalendarHeader: W(() => [
        j(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: W(() => [
        j(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showDayView", "fullMonthName", "allowedToShowView", "disabledDates", "highlighted", "calendarClass", "calendarStyle", "translation", "pageTimestamp", "isRtl", "mondayFirst", "dayCellContent", "onChangedMonth", "onSelectDate", "onShowMonthCalendar", "onSelectedDisabled", "onShowYearCalendar", "minimumView", "maximumView", "preventDisableDateSelection", "theme"])) : $("", !0),
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
      customCalendarHeader: W(() => [
        j(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: W(() => [
        j(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showMonthView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "fullMonthName", "onSelectMonth", "onShowYearCalendar", "onChangedYear", "minimumView", "maximumView", "theme"])) : $("", !0),
    e.allowedToShowView("year") ? (g(), me(F, {
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
      customCalendarHeader: W(() => [
        j(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: W(() => [
        j(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showYearView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectYear", "onChangedDecade", "fullMonthName", "minimumView", "maximumView", "theme"])) : $("", !0)
  ], 2)), [
    [V, {
      handler: e.inline ? null : e.closeOnClickOutside
    }]
  ]);
}
const qt = /* @__PURE__ */ G(Et, [["render", Lt]]);
export {
  qt as default
};
