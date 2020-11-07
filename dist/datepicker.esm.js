import { defineComponent, ref, computed, watch, openBlock, createBlock, createCommentVNode, createVNode, createTextVNode, toDisplayString, renderSlot, withDirectives, withModifiers, Fragment, renderList, vShow, reactive, resolveComponent, withCtx } from 'vue';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

// import en from '@/components/datepicker/locale/translations/en';

/**
 * Returns the full year, using UTC or not
 * @param {Date} date
 */
var getFullYear = function getFullYear(date) {
  var useUtc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useUtc ? date.getUTCFullYear() : date.getFullYear();
};
/**
 * Returns the month, using UTC or not
 * @param {Date} date
 */

var getMonth = function getMonth(date) {
  var useUtc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useUtc ? date.getUTCMonth() : date.getMonth();
};
/**
 * Returns the date, using UTC or not
 * @param {Date} date
 */

var getDate = function getDate(date) {
  var useUtc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useUtc ? date.getUTCDate() : date.getDate();
};
/**
 * Returns the day, using UTC or not
 * @param {Date} date
 */

var getDay = function getDay(date) {
  var useUtc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useUtc ? date.getUTCDay() : date.getDay();
};
/**
 * Sets the full year, using UTC or not
 * @param {Date} date
 */

var setFullYear = function setFullYear(date, value) {
  var useUtc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
};
/**
 * Sets the month, using UTC or not
 * @param {Date} date
 */

var setMonth = function setMonth(date, value) {
  var useUtc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return useUtc ? date.setUTCMonth(value) : date.setMonth(value);
};
/**
 * Sets the date, using UTC or not
 * @param {Date} date
 * @param {Number} value
 */

var setDate = function setDate(date, value) {
  var useUtc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return useUtc ? date.setUTCDate(value) : date.setDate(value);
};
/**
 * Check if date1 is equivalent to date2, without comparing the time
 * @see https://stackoverflow.com/a/6202196/4455925
 * @param {Date} date1
 * @param {Date} date2
 */

var compareDates = function compareDates(date1, date2) {
  var useUtc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var d1 = new Date(date1.getTime());
  var d2 = new Date(date2.getTime());

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

var isValidDate = function isValidDate(date) {
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

var getDayNameAbbr = function getDayNameAbbr(date, days) {
  if (_typeof(date) !== 'object') {
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

var getMonthName = function getMonthName(month, months) {
  if (!months) {
    throw Error('missing 2nd parameter Months array');
  }

  if (_typeof(month) === 'object') {
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

var getMonthNameAbbr = function getMonthNameAbbr(month, monthsAbbr) {
  if (!monthsAbbr) {
    throw Error('missing 2nd paramter Months array');
  }

  if (_typeof(month) === 'object') {
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

var daysInMonth = function daysInMonth(year, month) {
  if (/8|3|5|10/.test(month)) {
    return 30;
  }

  if (month === 1) {
    if (!(year % 4) && year % 100 || !(year % 400)) {
      return 29;
    }

    return 28;
  }

  return 31; // return /8|3|5|10/.test(month as string)
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

var getNthSuffix = function getNthSuffix(day) {
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

var formatDate = function formatDate(date, format, translation) {
  var year = getFullYear(date);
  var month = getMonth(date) + 1;
  var day = getDate(date);
  var str = format.replace(/dd/, "0".concat(day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, getMonthName(getMonth(date), translation.months)).replace(/MMM/, getMonthNameAbbr(getMonth(date), translation.monthsAbbr)).replace(/MM/, "0".concat(month).slice(-2)).replace(/M(?!a|ä|e)/, month.toString()).replace(/su/, getNthSuffix(getDate(date))).replace(/D(?!e|é|i)/, getDayNameAbbr(date, translation.days));
  return str;
};
/**
 * method used as a prop validator for input values
 * @param {*} val
 * @return {Boolean}
 */

var validateDateInput = function validateDateInput(val) {
  return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
};

var script = defineComponent({
  name: 'DateInput',
  props: {
    selectedDate: {
      type: Date
    },
    resetTypedDate: {
      type: [Date]
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
      type: String
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
    bootstrapStyling: {
      type: Boolean
    },
    useUtc: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    },
    clearError: {
      type: Function,
      required: true
    },
    hideInput: {
      type: Boolean,
      default: true
    }
  },
  emits: ['showCalendar', 'typedDate', 'clearDate', 'closeCalendar'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var typedDate = ref();
    var inputRef = ref(null); // computed

    var computedInputClass = computed(function () {
      if (props.bootstrapStyling) {
        if (typeof props.inputClass === 'string') {
          return [props.inputClass, 'form-control'].join(' ');
        } // tbd : need to add here props.inputClass


        return {
          'form-control': true
        };
      }

      return props.inputClass;
    });
    var formattedValue = computed(function () {
      if (!props.selectedDate) {
        return null;
      }

      if (typedDate.value) {
        return typedDate.value;
      }

      var date = typeof props.format === 'function' ? props.format(props.selectedDate) : formatDate(new Date(props.selectedDate), props.format, props.translation);

      if (props.minimumView === props.maximumView) {
        var _date$split = date.split(' '),
            _date$split2 = _slicedToArray(_date$split, 3),
            y = _date$split2[1],
            z = _date$split2[2];

        if (props.maximumView === 'month') {
          date = y;
        } else if (props.maximumView === 'year') {
          date = z;
        }
      }

      return date;
    }); // watchers

    watch(function () {
      return props.resetTypedDate;
    }, function () {
      typedDate.value = '';
    });
    /**
     * open Calendar
     */

    function showCalendar() {
      emit('showCalendar');
    }
    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */


    function parseTypedDate(event) {
      if ([27, 13 // enter
      ].includes(event.keyCode)) {
        inputRef.value.blur();
      }

      if (props.typeable) {
        var value = inputRef.value.value;
        var temptypedDate = Date.parse(value);

        if (!isNaN(temptypedDate)) {
          typedDate.value = value;
          emit('typedDate', temptypedDate);
        }
      }
    }
    /**
     * emit a clearDate event
     */


    function clearDate() {
      emit('clearDate');
    }
    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */


    function inputBlurred() {
      if (props.typeable && Number.isNaN(Date.parse(inputRef.value.value))) {
        clearDate(); // need to check this if required

        inputRef.value.value = null;
        typedDate.value = '';
      }

      emit('closeCalendar', true);
    }
    /**
     * nullify the error
     * called once the input is focused
     */


    function onFocus() {
      props.clearError();
    }

    return {
      typedDate: typedDate,
      computedInputClass: computedInputClass,
      formattedValue: formattedValue,
      showCalendar: showCalendar,
      parseTypedDate: parseTypedDate,
      inputBlurred: inputBlurred,
      onFocus: onFocus,
      inputRef: inputRef
    };
  }
});

const img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' height='16' width='16' role='img' aria-hidden='true' data-icon='calendarAlt'%3e%3cpath fill='currentColor' d='M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z'%3e%3c/path%3e%3c/svg%3e";

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = /*#__PURE__*/createVNode("img", { src: img }, null, -1 /* HOISTED */);
const _hoisted_4 = { key: 0 };
const _hoisted_5 = /*#__PURE__*/createTextVNode("Default");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: { 'input-group': _ctx.bootstrapStyling }
  }, [
    createCommentVNode(" Calendar Button "),
    (_ctx.calendarButton)
      ? (openBlock(), createBlock("span", {
          key: 0,
          class: ["vuejs3-datepicker__calendar-button", { 'input-group-prepend': _ctx.bootstrapStyling }],
          onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.showCalendar(...args))),
          style: { 'cursor:not-allowed;': _ctx.disabled }
        }, [
          createVNode("span", {
            class: { 'input-group-text': _ctx.bootstrapStyling }
          }, [
            createVNode("i", { class: _ctx.calendarButtonIcon }, [
              createTextVNode(toDisplayString(_ctx.calendarButtonIconContent) + " ", 1 /* TEXT */),
              (!_ctx.calendarButtonIcon)
                ? (openBlock(), createBlock("span", _hoisted_1, "…"))
                : createCommentVNode("v-if", true)
            ], 2 /* CLASS */)
          ], 2 /* CLASS */)
        ], 6 /* CLASS, STYLE */))
      : createCommentVNode("v-if", true),
    createVNode("div", null, [
      (!_ctx.inline)
        ? (openBlock(), createBlock("span", _hoisted_2, [
            _hoisted_3
          ]))
        : createCommentVNode("v-if", true),
      createVNode("input", {
        type: _ctx.inline ? 'hidden' : 'text',
        class: _ctx.computedInputClass,
        name: _ctx.name,
        ref: "inputRef",
        id: _ctx.id,
        value: _ctx.formattedValue,
        "open-date": _ctx.openDate,
        placeholder: _ctx.placeholder,
        "clear-button": _ctx.clearButton,
        disabled: _ctx.disabled,
        required: _ctx.required,
        readonly: !_ctx.typeable,
        onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.showCalendar(...args))),
        onKeyup: _cache[3] || (_cache[3] = (...args) => (_ctx.parseTypedDate(...args))),
        onBlur: _cache[4] || (_cache[4] = (...args) => (_ctx.inputBlurred(...args))),
        onFocus: _cache[5] || (_cache[5] = (...args) => (_ctx.onFocus(...args))),
        autocomplete: "off"
      }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["type", "name", "id", "value", "open-date", "placeholder", "clear-button", "disabled", "required", "readonly"])
    ]),
    createCommentVNode(" Clear Button "),
    (_ctx.clearButton && _ctx.selectedDate)
      ? (openBlock(), createBlock("span", {
          key: 1,
          class: ["vuejs3-datepicker__clear-button", { 'input-group-append': _ctx.bootstrapStyling }],
          onClick: _cache[6] || (_cache[6] = $event => (_ctx.clearDate()))
        }, [
          createVNode("span", {
            class: { 'input-group-text': _ctx.bootstrapStyling }
          }, [
            createVNode("i", { class: _ctx.clearButtonIcon }, [
              (!_ctx.clearButtonIcon)
                ? (openBlock(), createBlock("span", _hoisted_4, "×"))
                : createCommentVNode("v-if", true)
            ], 2 /* CLASS */)
          ], 2 /* CLASS */)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "afterDateInput", {}, () => [
      _hoisted_5
    ])
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/datepicker/DateInput.vue";

var script$1 = defineComponent({
  name: 'PickerDay',
  props: {
    showDayView: {
      type: Boolean
    },
    selectedDate: {
      type: Date,
      default: new Date()
    },
    pageDate: {
      type: Date,
      default: new Date()
    },
    pageTimestamp: {
      type: Number
    },
    fullMonthName: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function
    },
    dayCellContent: {
      type: Function,
      default: function _default(day) {
        return day.date;
      }
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
    }
  },
  emits: ['show-year-calendar', 'changed-month', 'show-month-calendar', 'selected-disabled', 'select-date'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    /** ********************************** Methods *********************************** */

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {string | Date}
     */
    function selectDate(date) {
      if (date.isDisabled) {
        emit('selected-disabled', date);
      }

      emit('select-date', date);
    }
    /**
     * Emit an event to show the month picker
     */


    function showMonthCalendar() {
      emit('show-month-calendar');
    }
    /**
     * Emit an event to show the year picker
     */


    function showYearCalendar() {
      emit('show-year-calendar');
    }
    /**
     * Change the page month
     * @param {Number} incrementBy
     */


    function changeMonth(incrementBy) {
      var date = props.pageDate;
      setMonth(date, getMonth(date) + incrementBy);
      emit('changed-month', date);
    }
    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */


    function isPreviousMonthDisabled() {
      var d = props.disabledDates;

      if (!d || !d.to) {
        return false;
      }

      var t = props.pageDate;
      return getMonth(d.to) >= getMonth(t) && getFullYear(d.to) >= getFullYear(t);
    }
    /**
     * Decrement the page month
     */


    function previousMonth() {
      if (!isPreviousMonthDisabled()) {
        changeMonth(-1);
      }
    }
    /**
     * Is the next month disabled?
     * @return {Boolean}
     */


    function isNextMonthDisabled() {
      var d = props.disabledDates;

      if (!d || !d.from) {
        return false;
      }

      var t = props.pageDate;
      return getMonth(d.from) <= getMonth(t) && getFullYear(d.from) <= getFullYear(t);
    }
    /**
     * Increment the current page month
     */


    function nextMonth() {
      if (!isNextMonthDisabled()) {
        changeMonth(+1);
      }
    }
    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */


    function isSelectedDate(dObj) {
      return props.selectedDate ? compareDates(props.selectedDate, dObj) : false;
    }
    /**
     * Whether a date is disabled
     * @return {Boolean}
     */


    function isDisabledDate(date) {
      var disabledDates = false;
      var t = props.disabledDates;
      if (!t) return disabledDates;

      if (typeof t === 'undefined') {
        return false;
      }

      if (typeof t.dates !== 'undefined') {
        t.dates.forEach(function (d) {
          if (compareDates(date, d)) {
            disabledDates = true; // return true;
          }
        });
      }

      if (typeof t.to !== 'undefined' && t.to && date < t.to) {
        disabledDates = true;
      }

      if (typeof t.from !== 'undefined' && t.from && date > t.from) {
        disabledDates = true;
      }

      if (typeof t.ranges !== 'undefined') {
        t.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true; // return true;
            }
          }
        });
      }

      if (typeof t.days !== 'undefined' && t.days.indexOf(getDay(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof t.daysOfMonth !== 'undefined' && t.daysOfMonth.indexOf(getDate(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof t.customPredictor === 'function' && t.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */


    function isDefined(prop) {
      return typeof prop !== 'undefined' && prop;
    }
    /**
     * Whether a date is highlighted or not
     * @return {Boolean}
     */


    function isHighlightedDate(date) {
      var h = props.highlighted;

      if (!(h && h.includeDisabled) && isDisabledDate(date)) {
        return false;
      }

      var highlighted = false;

      if (typeof h === 'undefined') {
        return false;
      }

      if (typeof h.dates !== 'undefined') {
        h.dates.forEach(function (d) {
          if (compareDates(date, d)) {
            highlighted = true; // return true;
          }
        });
      }

      if (isDefined(h.from) && isDefined(h.to)) {
        highlighted = date >= h.from && date <= h.to;
      }

      if (typeof h.days !== 'undefined' && h.days.indexOf(getDay(date)) !== -1) {
        highlighted = true;
      }

      if (typeof h.daysOfMonth !== 'undefined' && h.daysOfMonth.indexOf(getDate(date)) !== -1) {
        highlighted = true;
      }

      if (typeof h.customPredictor === 'function' && h.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted;
    }
    /**
     * Returns Css Classes for a day element
     */


    function dayClasses(day) {
      return {
        selected: day.isSelected,
        disabled: day.isDisabled,
        highlighted: day.isHighlighted,
        today: day.isToday,
        weekend: day.isWeekend,
        sat: day.isSaturday,
        sun: day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      };
    }
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */


    function isHighlightStart(date) {
      var h = props.highlighted;
      if (!h) return false;
      return isHighlightedDate(date) && h.from instanceof Date && getFullYear(h.from) === getFullYear(date) && getMonth(h.from) === getMonth(date) && getDate(h.from) === getDate(date);
    }
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */


    function isHighlightEnd(date) {
      var h = props.highlighted;
      if (!h) return false;
      return isHighlightedDate(date) && h.to instanceof Date && getFullYear(h.to) === getFullYear(date) && getMonth(h.to) === getMonth(date) && getDate(h.to) === getDate(date);
    }
    /** ********************************** Computed  *********************************** */

    /**
     * Returns an array of day names
     * @return {String[]}
     */


    var daysOfWeek = computed(function () {
      if (props.mondayFirst) {
        var tempDays = props.translation && props.translation.days && props.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }

      return props.translation && props.translation.days;
    });
    var blankDays = computed(function () {
      var d = props.pageDate;
      var dObj = props.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());

      if (props.mondayFirst) {
        return getDay(dObj) > 0 ? getDay(dObj) - 1 : 6;
      }

      return getDay(dObj);
    });
    /**
     * @return {Object[]}
     */

    var days = computed(function () {
      var d = props.pageDate;
      var tdays = []; // set up a new date object to the beginning of the current 'page'

      var dObj = props.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var t = daysInMonth(getFullYear(dObj), getMonth(dObj));

      for (var i = 0; i < t; i += 1) {
        tdays.push({
          date: getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: isSelectedDate(dObj),
          isDisabled: isDisabledDate(dObj),
          isHighlighted: isHighlightedDate(dObj),
          isHighlightStart: isHighlightStart(dObj),
          isHighlightEnd: isHighlightEnd(dObj),
          isToday: compareDates(dObj, new Date()),
          isWeekend: getDay(dObj) === 0 || getDay(dObj) === 6,
          isSaturday: getDay(dObj) === 6,
          isSunday: getDay(dObj) === 0
        });
        setDate(dObj, getDate(dObj) + 1);
      }

      return tdays;
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var currMonthName = computed(function () {
      var monthName = props.fullMonthName ? props.translation && props.translation.months : props.translation && props.translation.monthsAbbr;
      return getMonthNameAbbr(getMonth(props.pageDate), monthName);
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var monthName = computed(function () {
      var tempName = props.translation && props.translation.months;
      return getMonthName(getMonth(props.pageDate), tempName);
    });
    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */

    var currYearName = computed(function () {
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(getFullYear(props.pageDate)).concat(yearSuffix);
    });
    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */

    var isYmd = computed(function () {
      return (props.translation && props.translation.ymd && props.translation && props.translation.ymd) === true;
    });
    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */

    var isLeftNavDisabled = computed(function () {
      return props.isRtl ? isNextMonthDisabled() : isPreviousMonthDisabled();
    });
    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */

    var isRightNavDisabled = computed(function () {
      return props.isRtl ? isPreviousMonthDisabled() : isNextMonthDisabled();
    });
    var getDayName = computed(function () {
      return props.selectedDate ? getDayNameAbbr(props.selectedDate, props.translation && props.translation.daysNames) : null;
    });
    var getDisplayDate = computed(function () {
      return props.selectedDate ? getDate(props.selectedDate) : null;
    });
    return {
      isDefined: isDefined,
      showMonthCalendar: showMonthCalendar,
      daysOfWeek: daysOfWeek,
      blankDays: blankDays,
      isYmd: isYmd,
      days: days,
      currMonthName: currMonthName,
      currYearName: currYearName,
      isLeftNavDisabled: isLeftNavDisabled,
      isRightNavDisabled: isRightNavDisabled,
      selectDate: selectDate,
      previousMonth: previousMonth,
      nextMonth: nextMonth,
      dayClasses: dayClasses,
      monthName: monthName,
      getDayName: getDayName,
      getDisplayDate: getDisplayDate,
      showYearCalendar: showYearCalendar
    };
  }
});

const _hoisted_1$1 = { key: 0 };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("div", {
    class: [_ctx.calendarClass, 'vuejs3-datepicker__calendar'],
    style: _ctx.calendarStyle,
    onMousedown: _cache[5] || (_cache[5] = withModifiers(() => {}, ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "beforeCalendarHeader"),
    createVNode("section", null, [
      createVNode("p", {
        onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.showYearCalendar(...args)))
      }, toDisplayString(_ctx.currYearName), 1 /* TEXT */),
      (_ctx.selectedDate)
        ? (openBlock(), createBlock("p", _hoisted_1$1, toDisplayString(_ctx.getDayName) + " " + toDisplayString(_ctx.getDisplayDate) + " " + toDisplayString(_ctx.monthName), 1 /* TEXT */))
        : createCommentVNode("v-if", true)
    ]),
    createVNode("header", null, [
      createVNode("span", {
        onClick: _cache[2] || (_cache[2] = $event => (_ctx.isRtl ? _ctx.nextMonth() : _ctx.previousMonth())),
        class: ["prev", { disabled: _ctx.isLeftNavDisabled }]
      }, "<", 2 /* CLASS */),
      createVNode("span", {
        class: ["day__month_btn", _ctx.allowedToShowView('month') ? 'up' : ''],
        onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.showMonthCalendar(...args)))
      }, toDisplayString(_ctx.isYmd ? _ctx.currYearName : _ctx.currMonthName) + " " + toDisplayString(_ctx.isYmd ? _ctx.currMonthName : _ctx.currYearName), 3 /* TEXT, CLASS */),
      createVNode("span", {
        onClick: _cache[4] || (_cache[4] = $event => (_ctx.isRtl ? _ctx.previousMonth() : _ctx.nextMonth())),
        class: ["next", { disabled: _ctx.isRightNavDisabled }]
      }, ">", 2 /* CLASS */)
    ]),
    createVNode("div", {
      class: _ctx.isRtl ? 'flex-rtl' : ''
    }, [
      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.daysOfWeek, (d) => {
        return (openBlock(), createBlock("span", {
          class: "cell day-header",
          key: d.timestamp
        }, toDisplayString(d), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */)),
      (_ctx.blankDays > 0)
        ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.blankDays, (d) => {
            return (openBlock(), createBlock("span", {
              class: "cell day blank",
              key: d.timestamp
            }))
          }), 128 /* KEYED_FRAGMENT */))
        : createCommentVNode("v-if", true),
      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.days, (day) => {
        return (openBlock(), createBlock("span", {
          class: ["cell day", _ctx.dayClasses(day)],
          key: day.timestamp,
          innerHTML: _ctx.dayCellContent(day),
          onClick: $event => (_ctx.selectDate(day))
        }, null, 10 /* CLASS, PROPS */, ["innerHTML", "onClick"]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 2 /* CLASS */)
  ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */)), [
    [vShow, _ctx.showDayView]
  ])
}

script$1.render = render$1;
script$1.__file = "src/components/datepicker/PickerDay.vue";

var script$2 = defineComponent({
  name: 'PickerMonth',
  props: {
    showMonthView: {
      type: Boolean
    },
    selectedDate: {
      type: Date,
      default: new Date()
    },
    pageDate: {
      type: Date,
      default: new Date()
    },
    pageTimestamp: {
      type: Number
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
      type: Function
    },
    useUtc: {
      type: Boolean
    },
    fullMonthName: {
      type: Boolean
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    /** ********************************** Methods  *********************************** */

    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    function selectMonth(month) {
      if (!month.isDisabled) {
        emit('select-month', month);
      }
    }
    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */


    function changeYear(incrementBy) {
      var date = props.pageDate;
      setFullYear(date, getFullYear(date) + incrementBy);
      emit('changed-year', date);
    }
    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */


    function isPreviousYearDisabled() {
      var d = props.disabledDates;

      if (!d || !d.to) {
        return false;
      }

      return getFullYear(d.to) >= getFullYear(props.pageDate);
    }
    /**
     * Decrements the year
     */


    function previousYear() {
      if (!isPreviousYearDisabled()) {
        changeYear(-1);
      }
    }
    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */


    function isNextYearDisabled() {
      var d = props.disabledDates;

      if (!d || !d.from) {
        return false;
      }

      return getFullYear(d.from) <= getFullYear(props.pageDate);
    }
    /**
     * Increments the year
     */


    function nextYear() {
      if (!isNextYearDisabled()) {
        changeYear(1);
      }
    }
    /**
     * Emits an event that shows the year calendar
     */


    function showYearCalendar() {
      emit('show-year-calendar');
    }
    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */


    function isSelectedMonth(date) {
      var d = props.selectedDate;
      return d && getFullYear(d) === getFullYear(date) && getMonth(d) === getMonth(date);
    }
    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */


    function isDisabledMonth(date) {
      var disabledDates = false;
      var d = props.disabledDates;
      if (!d) return false;

      if (typeof d === 'undefined') {
        return false;
      }

      if (typeof d.to !== 'undefined' && d.to) {
        if (getMonth(date) < getMonth(d.to) && getFullYear(date) <= getFullYear(d.to) || getFullYear(date) < getFullYear(d.to)) {
          disabledDates = true;
        }
      }

      if (typeof d.from !== 'undefined' && d.from) {
        if (getMonth(date) > getMonth(d.from) && getFullYear(date) >= getFullYear(d.from) || getFullYear(date) > getFullYear(d.from)) {
          disabledDates = true;
        }
      }

      if (typeof d.customPredictor === 'function' && d.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
    /** ********************************** Computed  *********************************** */


    var months = computed(function () {
      var d = props.pageDate;
      var tmonths = []; // set up a new date object to the beginning of the current 'page'

      var dObj = props.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 12; i += 1) {
        tmonths.push({
          month: getMonthName(i, props.translation && props.translation.months),
          timestamp: dObj.getTime(),
          isSelected: isSelectedMonth(dObj),
          isDisabled: isDisabledMonth(dObj)
        });
        setMonth(dObj, getMonth(dObj) + 1);
      }

      return tmonths;
    });
    /**
     * Get year name on current page.
     * @return {String}
     */

    var pageYearName = computed(function () {
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(getFullYear(props.pageDate)).concat(yearSuffix);
    });
    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */

    var isLeftNavDisabled = computed(function () {
      return props.isRtl ? isNextYearDisabled() : isPreviousYearDisabled();
    });
    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */

    var isRightNavDisabled = computed(function () {
      return props.isRtl ? isPreviousYearDisabled() : isNextYearDisabled();
    });
    /**
    * Gets the name of the month the current page is on
    * @return {String}
    */

    var monthName = computed(function () {
      var tempName = props.translation && props.translation.months;
      return getMonthName(getMonth(props.pageDate), tempName);
    });
    var getDisplayDate = computed(function () {
      return props.selectedDate ? getDate(props.selectedDate) : null;
    });
    var getDayName = computed(function () {
      return props.selectedDate ? getDayNameAbbr(props.selectedDate, props.translation && props.translation.daysNames) : null;
    });
    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */

    var currYearName = computed(function () {
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(getFullYear(props.pageDate)).concat(yearSuffix);
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var currMonthName = computed(function () {
      var monthName = props.fullMonthName ? props.translation && props.translation.months : props.translation && props.translation.monthsAbbr;
      return getMonthNameAbbr(getMonth(props.pageDate), monthName);
    });
    return {
      isRightNavDisabled: isRightNavDisabled,
      isLeftNavDisabled: isLeftNavDisabled,
      pageYearName: pageYearName,
      months: months,
      selectMonth: selectMonth,
      previousYear: previousYear,
      nextYear: nextYear,
      currYearName: currYearName,
      getDisplayDate: getDisplayDate,
      monthName: monthName,
      showYearCalendar: showYearCalendar,
      getDayName: getDayName
    };
  }
});

const _hoisted_1$2 = { key: 0 };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("div", {
    class: [_ctx.calendarClass, 'vuejs3-datepicker__calendar'],
    style: _ctx.calendarStyle,
    onMousedown: _cache[5] || (_cache[5] = withModifiers(() => {}, ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "beforeCalendarHeader"),
    createVNode("section", null, [
      createVNode("p", {
        onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.showYearCalendar(...args)))
      }, toDisplayString(_ctx.currYearName), 1 /* TEXT */),
      (_ctx.selectedDate)
        ? (openBlock(), createBlock("p", _hoisted_1$2, toDisplayString(_ctx.getDayName) + " " + toDisplayString(_ctx.getDisplayDate) + " " + toDisplayString(_ctx.monthName), 1 /* TEXT */))
        : createCommentVNode("v-if", true)
    ]),
    createVNode("header", null, [
      createVNode("span", {
        onClick: _cache[2] || (_cache[2] = $event => (_ctx.isRtl ? _ctx.nextYear() : _ctx.previousYear())),
        class: ["prev", { disabled: _ctx.isLeftNavDisabled }]
      }, "<", 2 /* CLASS */),
      createVNode("span", {
        class: ["month__year_btn", _ctx.allowedToShowView('year') ? 'up' : ''],
        onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.showYearCalendar(...args)))
      }, toDisplayString(_ctx.pageYearName), 3 /* TEXT, CLASS */),
      createVNode("span", {
        onClick: _cache[4] || (_cache[4] = $event => (_ctx.isRtl ? _ctx.previousYear() : _ctx.nextYear())),
        class: ["next", { disabled: _ctx.isRightNavDisabled }]
      }, ">", 2 /* CLASS */)
    ]),
    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.months, (month) => {
      return (openBlock(), createBlock("span", {
        class: ["cell month", { selected: month.isSelected, disabled: month.isDisabled }],
        key: month.timestamp,
        onClick: withModifiers($event => (_ctx.selectMonth(month)), ["stop"])
      }, toDisplayString(month.month), 11 /* TEXT, CLASS, PROPS */, ["onClick"]))
    }), 128 /* KEYED_FRAGMENT */))
  ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */)), [
    [vShow, _ctx.showMonthView]
  ])
}

script$2.render = render$2;
script$2.__file = "src/components/datepicker/PickerMonth.vue";

var script$3 = defineComponent({
  name: 'PickerYear',
  props: {
    showYearView: {
      type: Boolean
    },
    selectedDate: {
      type: Date,
      default: new Date()
    },
    pageDate: {
      type: Date,
      default: new Date()
    },
    pageTimestamp: {
      type: Number
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
      type: Function
    },
    useUtc: {
      type: Boolean
    },
    fullMonthName: {
      type: Boolean
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    /** ********************************** Methods  *********************************** */

    /**
     * Select year
     * @param {year}
     */
    function selectYear(year) {
      if (!year.isDisabled) {
        emit('select-year', year);
      }
    }
    /**
     * Change year (increment / decrement)
     * @param {number}
     */


    function changeYear(incrementBy) {
      var date = props.pageDate;
      setFullYear(date, getFullYear(date) + incrementBy);
      emit('changed-decade', date);
    }
    /**
     * checks if previous decade is disabled
     */


    function isPreviousDecadeDisabled() {
      var d = props.disabledDates;

      if (!d || !d.to) {
        return false;
      }

      var disabledYear = getFullYear(d.to);
      var lastYearInPreviousPage = Math.floor(getFullYear(props.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage;
    }
    /**
     * changes year to previous decade
     */


    function previousDecade() {
      if (!isPreviousDecadeDisabled()) {
        changeYear(-10);
      }
    }
    /**
     * check if next decade is disabled
     */


    function isNextDecadeDisabled() {
      var d = props.disabledDates;

      if (!d || !d.from) {
        return false;
      }

      var disabledYear = getFullYear(d.from);
      var firstYearInNextPage = Math.ceil(getFullYear(props.pageDate) / 10) * 10;
      return disabledYear < firstYearInNextPage;
    }
    /**
     * moves year to next decade
     */


    function nextDecade() {
      if (!isNextDecadeDisabled()) {
        changeYear(10);
      }
    }
    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */


    function isSelectedYear(date) {
      return props.selectedDate ? getFullYear(props.selectedDate) === getFullYear(date) : false;
    }
    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */


    function isDisabledYear(date) {
      var disabledDates = false;

      if (typeof props.disabledDates === 'undefined' || !props.disabledDates) {
        return false;
      }

      if (typeof props.disabledDates.to !== 'undefined' && props.disabledDates.to) {
        if (getFullYear(date) < getFullYear(props.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof props.disabledDates.from !== 'undefined' && props.disabledDates.from) {
        if (getFullYear(date) > getFullYear(props.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof props.disabledDates.customPredictor === 'function' && props.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
    /** ********************************** Computed  *********************************** */


    var years = computed(function () {
      var d = props.pageDate;
      var tyears = []; // set up a new date object to the beginning of the current 'page'7

      var dObj = props.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 10; i += 1) {
        tyears.push({
          year: getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: isSelectedYear(dObj),
          isDisabled: isDisabledYear(dObj)
        });
        setFullYear(dObj, getFullYear(dObj) + 1);
      }

      return tyears;
    });
    /**
     * @return {String}
     */

    var getPageDecade = computed(function () {
      var decadeStart = Math.floor(getFullYear(props.pageDate) / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(decadeStart, " - ").concat(decadeEnd).concat(yearSuffix);
    });
    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */

    var isLeftNavDisabled = computed(function () {
      return props.isRtl ? isNextDecadeDisabled() : isPreviousDecadeDisabled();
    });
    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */

    var isRightNavDisabled = computed(function () {
      return props.isRtl ? isPreviousDecadeDisabled() : isNextDecadeDisabled();
    });
    var getDayName = computed(function () {
      return props.selectedDate ? getDayNameAbbr(props.selectedDate, props.translation && props.translation.daysNames) : null;
    });
    /**
    * Gets the name of the month the current page is on
    * @return {String}
    */

    var monthName = computed(function () {
      var tempName = props.translation && props.translation.months;
      return getMonthName(getMonth(props.pageDate), tempName);
    });
    var getDisplayDate = computed(function () {
      return props.selectedDate ? getDate(props.selectedDate) : null;
    });
    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */

    var currYearName = computed(function () {
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(getFullYear(props.pageDate)).concat(yearSuffix);
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var currMonthName = computed(function () {
      var monthName = props.fullMonthName ? props.translation && props.translation.months : props.translation && props.translation.monthsAbbr;
      return getMonthNameAbbr(getMonth(props.pageDate), monthName);
    });
    return {
      isRightNavDisabled: isRightNavDisabled,
      isLeftNavDisabled: isLeftNavDisabled,
      getPageDecade: getPageDecade,
      years: years,
      nextDecade: nextDecade,
      previousDecade: previousDecade,
      selectYear: selectYear,
      getDayName: getDayName,
      monthName: monthName,
      getDisplayDate: getDisplayDate,
      currYearName: currYearName,
      currMonthName: currMonthName
    };
  }
});

const _hoisted_1$3 = { key: 0 };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("div", {
    class: [_ctx.calendarClass, 'vuejs3-datepicker__calendar'],
    style: _ctx.calendarStyle,
    onMousedown: _cache[3] || (_cache[3] = withModifiers(() => {}, ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "beforeCalendarHeader"),
    createVNode("section", null, [
      createVNode("p", null, toDisplayString(_ctx.currYearName), 1 /* TEXT */),
      (_ctx.selectedDate)
        ? (openBlock(), createBlock("p", _hoisted_1$3, toDisplayString(_ctx.getDayName) + " " + toDisplayString(_ctx.getDisplayDate) + " " + toDisplayString(_ctx.monthName), 1 /* TEXT */))
        : createCommentVNode("v-if", true)
    ]),
    createVNode("header", null, [
      createVNode("span", {
        onClick: _cache[1] || (_cache[1] = $event => (_ctx.isRtl ? _ctx.nextDecade() : _ctx.previousDecade())),
        class: ["prev", { disabled: _ctx.isLeftNavDisabled }]
      }, "<", 2 /* CLASS */),
      createVNode("span", null, toDisplayString(_ctx.getPageDecade), 1 /* TEXT */),
      createVNode("span", {
        onClick: _cache[2] || (_cache[2] = $event => (_ctx.isRtl ? _ctx.previousDecade() : _ctx.nextDecade())),
        class: ["next", { disabled: _ctx.isRightNavDisabled }]
      }, ">", 2 /* CLASS */)
    ]),
    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.years, (year) => {
      return (openBlock(), createBlock("span", {
        class: ["cell year", { selected: year.isSelected, disabled: year.isDisabled }],
        key: year.timestamp,
        onClick: withModifiers($event => (_ctx.selectYear(year)), ["stop"])
      }, toDisplayString(year.year), 11 /* TEXT, CLASS, PROPS */, ["onClick"]))
    }), 128 /* KEYED_FRAGMENT */))
  ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */)), [
    [vShow, _ctx.showYearView]
  ])
}

script$3.render = render$3;
script$3.__file = "src/components/datepicker/PickerYear.vue";

var af = function af() {
  var langName = 'Afrikaans';
  var monthFullName = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
  var shortName = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'];
  var days = ['So.', 'Ma.', 'Di.', 'Wo.', 'Do.', 'Vr.', 'Sa.'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    // tbd: need fullName of days
    daysNames: days
  };
};

var en = function en() {
  var langName = 'English';
  var monthFullName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var shortName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    language: langName,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    daysNames: daysNames
  };
};

var data = {
  af: af(),
  en: en()
};

/**
 * Returns true if data is null or undefined
 * @param data
 */
var isNullUndefined = function isNullUndefined(data) {
  return data === null || data === undefined;
};

var ValidationMessages;

(function (ValidationMessages) {
  ValidationMessages["required"] = "Please enter this value";
})(ValidationMessages || (ValidationMessages = {}));

var VALIDATORS;

(function (VALIDATORS) {
  VALIDATORS["REQUIRED"] = "required";
})(VALIDATORS || (VALIDATORS = {}));

var KeyName;

(function (KeyName) {
  KeyName["Enter"] = "Enter";
  KeyName["ArrowUp"] = "ArrowUp";
  KeyName["ArrowDown"] = "ArrowDown";
  KeyName["Escape"] = "Escape";
  KeyName["Tab"] = "Tab";
})(KeyName || (KeyName = {}));

/**
 * Required validation
 * @param value
 */

var required = function required(value) {
  if (isNullUndefined(value)) {
    return false;
  }

  if (_typeof(value) === 'object' && !Object.keys(value).length) {
    if (Object.prototype.toString.call(value) === '[object Date]' && value) {
      return true;
    }

    return false;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }

  if (value.constructor === Array && value.length <= 0) {
    return false;
  }

  return true;
};

var validationRules = {
  required: required
};
/**
 *
 * @param validationName
 * @param validationObj
 * @param value
 */

var callValidator = function callValidator(validationName, validationObj, value) {
  var isValid = true;

  switch (validationName) {
    default:
      if (validationRules[validationName]) {
        isValid = validationRules[validationName](value);
      }

      break;
  }

  return isValid;
}; // helper validation functions

/**
 *
 * @param value
 * @param validationArray
 */


var validationHandler = function validationHandler(value, validationArray) {
  var validationObject = {
    isValid: true,
    message: ''
  };

  var _iterator = _createForOfIteratorHelper(validationArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var validation = _step.value;
      validationObject.isValid = callValidator(validation.name, validation, value);
      validationObject.message = '';

      if (!validationObject.isValid) {
        // checking if custom message is passed if not then use standard msgs
        if (validation.message) {
          validationObject.message = validation.message;
        } else {
          validationObject.message = ValidationMessages[validation.name];
        } // break if any one validation is failed


        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return validationObject;
};

var script$4 = defineComponent({
  name: 'Datepicker',
  components: {
    DateInput: script,
    PickerDay: script$1,
    PickerMonth: script$2,
    PickerYear: script$3
  },
  props: {
    modelValue: {
      type: [Date, String]
    },
    value: {
      type: [Date, String]
    },
    format: {
      type: [String, Function],
      default: 'dd MMM yyyy'
    },
    language: {
      type: String,
      default: 'en'
    },
    openDate: {
      validator: function validator(val) {
        return validateDateInput(val);
      },
      type: Date
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
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
    bootstrapStyling: {
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

    /**
     * Validations array of objects of type IValidationRule to valdiate the input
     * @values IValidationRule[]
     */
    validations: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    autoValidate: {
      type: Boolean,
      default: false
    },
    hideInput: {
      type: Boolean,
      default: true
    }
  },
  emits: ['input', 'cleared', 'update:modelValue', 'closed', 'changed-month', 'changed-year', 'changed-day', 'selected', 'selected-disabled'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var initmodelvalue = new Date(props.modelValue);
    var pageTimestamp = ref(0);
    var selectedDate = ref(null);

    if (props.modelValue && isValidDate(initmodelvalue)) {
      pageTimestamp.value = setDate(initmodelvalue, 1);
      selectedDate.value = initmodelvalue;
    } else {
      pageTimestamp.value = setDate(new Date(), 1);
    }

    var showDayView = ref(false);
    var showMonthView = ref(false);
    var showYearView = ref(false);
    var calendarHeight = ref(0);
    var resetTypedDate = ref(new Date());
    var validation = reactive({
      isValid: true,
      message: ''
    });
    /** ********************************** Computed  *********************************** */

    var computedInitialView = computed(function () {
      if (!props.initialView) {
        return props.minimumView;
      }

      return props.initialView;
    });
    var pageDate = computed(function () {
      return new Date(pageTimestamp.value);
    });
    var translation = computed(function () {
      var temp = data;
      return temp[props.language];
    });
    var isInline = computed(function () {
      return !!props.inline;
    });
    var calendarStyle = computed(function () {
      return {
        position: isInline.value ? 'static' : undefined
      };
    });
    var isOpen = computed(function () {
      return showDayView.value || showMonthView.value || showYearView.value;
    });
    var isRtl = computed(function () {
      return translation.value && translation.value.rtl === true;
    });
    /** ********************************** Methods  *********************************** */

    /**
     * Sets the date that the calendar should open on
     */

    function setPageDate(date) {
      if (!date) {
        if (props.openDate) {
          date = new Date(props.openDate);
        } else {
          date = new Date();
        }
      }

      pageTimestamp.value = setDate(new Date(date), 1);
    }
    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */


    function allowedToShowView(view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(props.minimumView);
      var maximumViewIndex = views.indexOf(props.maximumView);
      var viewIndex = views.indexOf(view);
      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    }
    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */


    function close(emitEvent) {
      showDayView.value = false;
      showMonthView.value = false;
      showYearView.value = false;

      if (!isInline.value) {
        if (emitEvent) {
          if (props.autoValidate) {
            isValid();
          }

          emit('closed');
        }
      }
    }
    /**
     * Show the day picker
     * @return {Boolean}
     */


    function showDayCalendar() {
      if (!allowedToShowView('day')) {
        return false;
      }

      close();
      showDayView.value = true;
      return true;
    }
    /**
     * Show the month picker
     * @return {Boolean}
     */


    function showMonthCalendar() {
      if (!allowedToShowView('month')) {
        return false;
      }

      close();
      showMonthView.value = true;
      return true;
    }
    /**
     * Show the year picker
     * @return {Boolean}
     */


    function showYearCalendar() {
      if (!allowedToShowView('year')) {
        return false;
      }

      close();
      showYearView.value = true;
      return true;
    }
    /**
     * Sets the initial picker page view: day, month or year
     */


    function setInitialView() {
      var initialView = computedInitialView.value;

      if (!allowedToShowView(initialView)) {
        throw new Error("initialView '".concat(initialView, "' cannot be rendered based on minimum '").concat(props.minimumView, "' and maximum '").concat(props.maximumView, "'"));
      }

      switch (initialView) {
        case 'year':
          showYearCalendar();
          break;

        case 'month':
          showMonthCalendar();
          break;

        default:
          showDayCalendar();
          break;
      }
    }
    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */


    function showCalendar() {
      if (props.disabled || isInline.value) {
        return false;
      }

      if (isOpen.value) {
        return close(true);
      }

      setInitialView();
      return true;
    }
    /**
     * Set the selected date
     * @param {Number} timestamp
     */


    function setDate1(timestamp) {
      var date = new Date(timestamp);
      selectedDate.value = date;
      setPageDate(date);
      emit('selected', date);

      if (props.modelValue) {
        emit('update:modelValue', date);
      } else {
        emit('input', date);
      }
    }
    /**
     * Clear the selected date
     */


    function clearDate() {
      selectedDate.value = null;
      setPageDate();
      emit('selected', null);

      if (props.modelValue) {
        emit('update:modelValue', null);
      } else {
        emit('input', null);
      }

      emit('cleared');
    }
    /**
     * @param {Object} date
     */


    function selectDate(date) {
      setDate1(date.timestamp);

      if (!isInline.value) {
        close(true);
      }

      resetTypedDate.value = new Date();
    }
    /**
     * @param {Object} date
     */


    function selectDisabledDate(date) {
      emit('selected-disabled', date);
    }
    /**
     * @param {Object} month
     */


    function selectMonth(month) {
      var date = new Date(month.timestamp);

      if (allowedToShowView('day')) {
        setPageDate(date);
        showDayCalendar();
      } else {
        selectDate(month);
      }

      emit('changed-month', month);
    }
    /**
     * @param {Object} year
     */


    function selectYear(year) {
      var date = new Date(year.timestamp);

      if (allowedToShowView('month')) {
        setPageDate(date);
        showMonthCalendar();
      } else {
        selectDate(year);
      }

      emit('changed-year', year);
    }
    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */


    function setValue(date) {
      var tempDate = date;

      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        tempDate = Number.isNaN(parsed.valueOf()) ? null : parsed;
      }

      if (!tempDate) {
        setPageDate();
        selectedDate.value = null;
        return;
      }

      selectedDate.value = date;
      setPageDate(date);
    }
    /**
     * Handles a month change from the day picker
     */


    function handleChangedMonthFromDayPicker(date) {
      setPageDate(date);
      emit('changed-month', date);
    }
    /**
     * Set the date from a typedDate event
     */


    function setTypedDate(date) {
      setDate1(date.getTime());
    }
    /**
     * Initiate the component
     */


    function init() {
      if (props.value) {
        setValue(props.value);
      }

      if (isInline.value) {
        setInitialView();
      }
    }
    /**
     * Calls the validationHandler to check the validations,
     * whether the state of input is valid or not.
     *
     * @returns boolean whether current state of the input is valid or not
     */


    function isValid() {
      var response = validationHandler(selectedDate.value, props.validations);
      validation.isValid = response.isValid;
      validation.message = response.message;
      return validation.isValid;
    }
    /**
     * Reset Validation Message
     */


    function clearError() {
      validation.message = '';
      validation.isValid = true;
    }
    /** ********************************** Watchers  *********************************** */


    watch(function () {
      return props.modelValue;
    }, function (curr) {
      setValue(curr);
    });
    watch(function () {
      return props.value;
    }, function (curr) {
      setValue(curr);
    });
    watch(function () {
      return props.openDate;
    }, function () {
      setPageDate();
    });
    watch(function () {
      return props.initialView;
    }, function () {
      setInitialView();
    });
    /**
    * test
    */

    function onClose() {
      debugger;
    }

    init();
    return {
      pageTimestamp: pageTimestamp,
      selectedDate: selectedDate,
      showDayView: showDayView,
      showMonthView: showMonthView,
      showYearView: showYearView,
      calendarHeight: calendarHeight,
      resetTypedDate: resetTypedDate,
      // computed
      pageDate: pageDate,
      translation: translation,
      calendarStyle: calendarStyle,
      isOpen: isOpen,
      isInline: isInline,
      isRtl: isRtl,
      // methods
      setTypedDate: setTypedDate,
      handleChangedMonthFromDayPicker: handleChangedMonthFromDayPicker,
      selectYear: selectYear,
      selectMonth: selectMonth,
      selectDisabledDate: selectDisabledDate,
      clearDate: clearDate,
      showCalendar: showCalendar,
      close: close,
      allowedToShowView: allowedToShowView,
      showYearCalendar: showYearCalendar,
      showMonthCalendar: showMonthCalendar,
      setPageDate: setPageDate,
      selectDate: selectDate,
      validation: validation,
      isValid: isValid,
      clearError: clearError,
      onClose: onClose
    };
  }
});

const _hoisted_1$4 = {
  key: 0,
  class: "dp-error"
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_date_input = resolveComponent("date-input");
  const _component_picker_day = resolveComponent("picker-day");
  const _component_picker_month = resolveComponent("picker-month");
  const _component_picker_year = resolveComponent("picker-year");

  return (openBlock(), createBlock("div", {
    class: ["vuejs3-datepicker", [_ctx.wrapperClass, _ctx.isRtl ? 'rtl' : '']]
  }, [
    createVNode(_component_date_input, {
      selectedDate: _ctx.selectedDate,
      resetTypedDate: _ctx.resetTypedDate,
      format: _ctx.format,
      translation: _ctx.translation,
      inline: _ctx.inline,
      id: _ctx.id,
      name: _ctx.name,
      openDate: _ctx.openDate,
      placeholder: _ctx.placeholder,
      inputClass: _ctx.inputClass,
      typeable: _ctx.typeable,
      clearButton: _ctx.clearButton,
      clearButtonIcon: _ctx.clearButtonIcon,
      calendarButton: _ctx.calendarButton,
      calendarButtonIcon: _ctx.calendarButtonIcon,
      calendarButtonIconContent: _ctx.calendarButtonIconContent,
      disabled: _ctx.disabled,
      required: _ctx.required,
      bootstrapStyling: _ctx.bootstrapStyling,
      "use-utc": _ctx.useUtc,
      onShowCalendar: _ctx.showCalendar,
      onCloseCalendar: _ctx.close,
      onTypedDate: _ctx.setTypedDate,
      onClearDate: _ctx.clearDate,
      minimumView: _ctx.minimumView,
      maximumView: _ctx.maximumView,
      clearError: _ctx.clearError,
      hideInput: _ctx.hideInput
    }, {
      afterDateInput: withCtx(() => [
        renderSlot(_ctx.$slots, "afterDateInput")
      ]),
      _: 1
    }, 8 /* PROPS */, ["selectedDate", "resetTypedDate", "format", "translation", "inline", "id", "name", "openDate", "placeholder", "inputClass", "typeable", "clearButton", "clearButtonIcon", "calendarButton", "calendarButtonIcon", "calendarButtonIconContent", "disabled", "required", "bootstrapStyling", "use-utc", "onShowCalendar", "onCloseCalendar", "onTypedDate", "onClearDate", "minimumView", "maximumView", "clearError", "hideInput"]),
    (!_ctx.validation.isValid)
      ? (openBlock(), createBlock("div", _hoisted_1$4, toDisplayString(_ctx.validation.message), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createCommentVNode("Day View  "),
    (_ctx.allowedToShowView('day'))
      ? (openBlock(), createBlock(_component_picker_day, {
          key: 1,
          pageDate: _ctx.pageDate,
          selectedDate: _ctx.selectedDate,
          showDayView: _ctx.showDayView,
          fullMonthName: _ctx.fullMonthName,
          allowedToShowView: _ctx.allowedToShowView,
          disabledDates: _ctx.disabledDates,
          highlighted: _ctx.highlighted,
          calendarClass: _ctx.calendarClass,
          calendarStyle: _ctx.calendarStyle,
          translation: _ctx.translation,
          pageTimestamp: _ctx.pageTimestamp,
          isRtl: _ctx.isRtl,
          mondayFirst: _ctx.mondayFirst,
          dayCellContent: _ctx.dayCellContent,
          onChangedMonth: _ctx.handleChangedMonthFromDayPicker,
          onSelectDate: _ctx.selectDate,
          onShowMonthCalendar: _ctx.showMonthCalendar,
          onSelectedDisabled: _ctx.selectDisabledDate,
          onShowYearCalendar: _ctx.showYearCalendar
        }, {
          beforeCalendarHeader: withCtx(() => [
            renderSlot(_ctx.$slots, "beforeCalendarHeader")
          ]),
          _: 1
        }, 8 /* PROPS */, ["pageDate", "selectedDate", "showDayView", "fullMonthName", "allowedToShowView", "disabledDates", "highlighted", "calendarClass", "calendarStyle", "translation", "pageTimestamp", "isRtl", "mondayFirst", "dayCellContent", "onChangedMonth", "onSelectDate", "onShowMonthCalendar", "onSelectedDisabled", "onShowYearCalendar"]))
      : createCommentVNode("v-if", true),
    createCommentVNode("Month View "),
    (_ctx.allowedToShowView('month'))
      ? (openBlock(), createBlock(_component_picker_month, {
          key: 2,
          pageDate: _ctx.pageDate,
          selectedDate: _ctx.selectedDate,
          showMonthView: _ctx.showMonthView,
          allowedToShowView: _ctx.allowedToShowView,
          disabledDates: _ctx.disabledDates,
          calendarClass: _ctx.calendarClass,
          calendarStyle: _ctx.calendarStyle,
          translation: _ctx.translation,
          isRtl: _ctx.isRtl,
          "use-utc": _ctx.useUtc,
          onSelectMonth: _ctx.selectMonth,
          onShowYearCalendar: _ctx.showYearCalendar,
          onChangedYear: _ctx.setPageDate
        }, {
          beforeCalendarHeader: withCtx(() => [
            renderSlot(_ctx.$slots, "beforeCalendarHeader")
          ]),
          _: 1
        }, 8 /* PROPS */, ["pageDate", "selectedDate", "showMonthView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectMonth", "onShowYearCalendar", "onChangedYear"]))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Year View "),
    (_ctx.allowedToShowView('year'))
      ? (openBlock(), createBlock(_component_picker_year, {
          key: 3,
          pageDate: _ctx.pageDate,
          selectedDate: _ctx.selectedDate,
          showYearView: _ctx.showYearView,
          allowedToShowView: _ctx.allowedToShowView,
          disabledDates: _ctx.disabledDates,
          calendarClass: _ctx.calendarClass,
          calendarStyle: _ctx.calendarStyle,
          translation: _ctx.translation,
          isRtl: _ctx.isRtl,
          "use-utc": _ctx.useUtc,
          onSelectYear: _ctx.selectYear,
          onChangedDecade: _ctx.setPageDate,
          fullMonthName: _ctx.fullMonthName
        }, {
          beforeCalendarHeader: withCtx(() => [
            renderSlot(_ctx.$slots, "beforeCalendarHeader")
          ]),
          _: 1
        }, 8 /* PROPS */, ["pageDate", "selectedDate", "showYearView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectYear", "onChangedDecade", "fullMonthName"]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".rtl{direction:rtl}.vuejs3-datepicker{position:relative;text-align:left}.vuejs3-datepicker *{box-sizing:border-box}.vuejs3-datepicker input{border:1px solid}.vuejs3-datepicker__calendar{position:absolute;z-index:100;background:#fff;width:300px;border:1px solid #000}.vuejs3-datepicker__calendar header{display:block;line-height:40px}.vuejs3-datepicker__calendar header span{text-align:center;width:71.42857142857143%;float:left}.vuejs3-datepicker__calendar header .next,.vuejs3-datepicker__calendar header .prev{width:14.285714285714286%;float:left;text-indent:-10000px;position:relative}.vuejs3-datepicker__calendar header .next:after,.vuejs3-datepicker__calendar header .prev:after{content:\"\";position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);border:6px solid transparent}.vuejs3-datepicker__calendar header .prev:after{border-right:10px solid #000;margin-left:-5px}.vuejs3-datepicker__calendar header .prev.disabled:after{border-right:10px solid #000}.vuejs3-datepicker__calendar header .next:after{border-left:10px solid #000;margin-left:5px}.vuejs3-datepicker__calendar header .next.disabled:after{border-left:10px solid #ddd}.vuejs3-datepicker__calendar header .next:not(.disabled),.vuejs3-datepicker__calendar header .prev:not(.disabled),.vuejs3-datepicker__calendar header .up:not(.disabled){cursor:pointer}.vuejs3-datepicker__calendar header .next:not(.disabled):hover,.vuejs3-datepicker__calendar header .prev:not(.disabled):hover,.vuejs3-datepicker__calendar header .up:not(.disabled):hover{background:#eee}.vuejs3-datepicker__calendar .disabled{color:#ddd;cursor:default}.vuejs3-datepicker__calendar .flex-rtl{display:-webkit-flex;display:-ms-flexbox;display:flex;width:inherit;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.vuejs3-datepicker__calendar .cell{display:inline-block;padding:0 5px;width:14.285714285714286%;height:40px;line-height:40px;text-align:center;vertical-align:middle;border:1px solid transparent}.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).day,.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).month,.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).year{cursor:pointer}.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover{border:1px solid #4bd}.vuejs3-datepicker__calendar .cell.selected,.vuejs3-datepicker__calendar .cell.selected.highlighted,.vuejs3-datepicker__calendar .cell.selected:hover{background:#4bd}.vuejs3-datepicker__calendar .cell.highlighted{background:#cae5ed}.vuejs3-datepicker__calendar .cell.highlighted.disabled{color:#a3a3a3}.vuejs3-datepicker__calendar .cell.grey{color:#888}.vuejs3-datepicker__calendar .cell.grey:hover{background:inherit}.vuejs3-datepicker__calendar .cell.day-header{font-size:75%;white-space:nowrap;cursor:inherit}.vuejs3-datepicker__calendar .cell.day-header:hover{background:inherit}.vuejs3-datepicker__calendar .month,.vuejs3-datepicker__calendar .year{width:33.333%}.vuejs3-datepicker__calendar-button,.vuejs3-datepicker__clear-button{cursor:pointer;font-style:normal}.vuejs3-datepicker__calendar-button.disabled,.vuejs3-datepicker__clear-button.disabled{color:#999;cursor:default}.dp-error{color:red;font-size:12px}.backdrop{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2;cursor:pointer}";
styleInject(css_248z);

script$4.render = render$4;
script$4.__file = "src/components/datepicker/Datepicker.vue";

export default script$4;
