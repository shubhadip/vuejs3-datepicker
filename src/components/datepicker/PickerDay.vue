<template>
  <div
    :class="['vuejs3-datepicker__calendar', `vuejs3-${theme}`, calendarClass]"
    v-show="showDayView"
    :style="calendarStyle"
    @mousedown.prevent
  >
    <slot name="customCalendarHeader"></slot>
    <section v-if="ifDifferentViews && selectedDate" class="vuejs3-datepicker__calendar-topbar">
      <p class="vuejs3-datepicker__calendar-topbar-year" @click="showYearCalendar">{{ currYearName }}</p>
      <slot name="formatDateTopBar">
        <p class="vuejs3-datepicker__calendar-topbar-day" v-if="selectedDate">
          {{ getDayName }} {{ getDisplayDate }} {{ monthName }}
        </p>
      </slot>
    </section>
    <div class="vuejs3-datepicker__calendar-actionarea">
      <header>
        <span @click="isRtl ? nextMonth() : previousMonth()" class="prev" :class="{ disabled: isLeftNavDisabled }"
          >&lt;</span
        >
        <span class="day__month_btn" @click="showMonthCalendar" :class="allowedToShowView('month') ? 'up' : ''"
          >{{ isYmd ? currYearName : currMonthName }} {{ isYmd ? currMonthName : currYearName }}</span
        >
        <span @click="isRtl ? previousMonth() : nextMonth()" class="next" :class="{ disabled: isRightNavDisabled }"
          >&gt;</span
        >
      </header>
      <div :class="isRtl ? 'flex-rtl' : ''">
        <span class="cell day-header" v-for="d in daysOfWeek" :key="d.timestamp">{{ d }}</span>
        <template v-if="blankDays > 0">
          <span class="cell day blank" v-for="d in blankDays" :key="d.timestamp"></span>
        </template>
        <span
          class="cell day"
          v-for="day in days"
          :key="day.timestamp"
          :class="dayClasses(day)"
          v-html="dayCellContent(day)"
          @click="selectDate(day)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { makeDateUtils } from './utils/DateUtils';

interface IDays {
  date: number;
  timestamp: number;
  isSelected: boolean;
  isDisabled: boolean;
  isHighlighted: boolean;
  isHighlightStart: boolean;
  isHighlightEnd: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isSaturday: boolean;
  isSunday: boolean;
}

export default defineComponent({
  name: 'PickerDay',
  props: {
    showDayView: {
      type: Boolean,
    },
    selectedDate: {
      type: [String, Date],
      required: false,
      default: null,
    },
    pageDate: {
      type: Date as PropType<Date>,
      default: new Date(),
    },
    fullMonthName: {
      type: Boolean,
    },
    allowedToShowView: {
      type: Function,
      required: true,
    },
    dayCellContent: {
      type: Function,
      default: (day: { date: Date }): Date => day.date,
    },
    disabledDates: {
      type: Object,
    },
    highlighted: {
      type: Object,
    },
    calendarClass: {
      type: [String, Object, Array],
    },
    calendarStyle: {
      type: Object,
    },
    translation: {
      type: Object,
    },
    isRtl: {
      type: Boolean,
    },
    mondayFirst: {
      type: Boolean,
    },
    useUtc: {
      type: Boolean,
    },
    minimumView: {
      type: String,
      default: 'day',
    },
    maximumView: {
      type: String,
      default: 'year',
    },
    preventDisableDateSelection: {
      type: Boolean,
      default: true,
    },
    theme: {
      default: 'green',
      type: String,
    },
  },
  emits: ['show-year-calendar', 'changed-month', 'show-month-calendar', 'selected-disabled', 'select-date'],
  setup(props, { emit }) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const dateUtils = makeDateUtils(props.useUtc);
    /** ********************************** Methods *********************************** */
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {string | Date}
     */
    function selectDate(date: { isDisabled: any }): void {
      if (date.isDisabled) {
        emit('selected-disabled', date);
        if (!props.preventDisableDateSelection) {
          emit('select-date', date);
        }
      } else {
        emit('select-date', date);
      }
    }

    /**
     * Emit an event to show the month picker
     */
    function showMonthCalendar(): void {
      emit('show-month-calendar');
    }

    /**
     * Emit an event to show the year picker
     */
    function showYearCalendar(): void {
      emit('show-year-calendar');
    }
    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    function changeMonth(incrementBy: number): void {
      const date: Date = props.pageDate;
      dateUtils.setMonth(date, dateUtils.getMonth(date) + incrementBy);
      emit('changed-month', date);
    }

    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    function isPreviousMonthDisabled(): boolean {
      const d = props.disabledDates;
      if (!d || !d.to) {
        return false;
      }
      const t = props.pageDate;
      return (
        dateUtils.getMonth(d.to) >= dateUtils.getMonth(t) && dateUtils.getFullYear(d.to) >= dateUtils.getFullYear(t)
      );
    }

    /**
     * Decrement the page month
     */
    function previousMonth(): void {
      if (!isPreviousMonthDisabled()) {
        changeMonth(-1);
      }
    }

    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    function isNextMonthDisabled(): boolean {
      const d = props.disabledDates;
      if (!d || !d.from) {
        return false;
      }
      const t = props.pageDate;
      return (
        dateUtils.getMonth(d.from) <= dateUtils.getMonth(t) && dateUtils.getFullYear(d.from) <= dateUtils.getFullYear(t)
      );
    }

    /**
     * Increment the current page month
     */
    function nextMonth(): void {
      if (!isNextMonthDisabled()) {
        changeMonth(+1);
      }
    }
    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    function isSelectedDate(dObj: Date): boolean {
      const propDate = dateUtils.stringToDate(props.selectedDate);
      return props.selectedDate ? dateUtils.compareDates(propDate, dObj) : false;
    }

    /**
     * Whether a date is disabled
     * @return {Boolean}
     */
    function isDisabledDate(date: number | Date): boolean {
      let disabledDates = false;
      const t = props.disabledDates;

      if (!t) return disabledDates;

      if (typeof t === 'undefined') {
        return false;
      }

      if (typeof t.dates !== 'undefined') {
        t.dates.forEach((d: { getTime: () => string | number | Date }): void => {
          const isEqual = dateUtils.compareDates(date as Date, d);
          if (isEqual) {
            disabledDates = true;
            // return true;
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
        t.ranges.forEach((range: { from: Date; to: Date }): void => {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date >= range.from && date <= range.to) {
              disabledDates = true;
            }
          }
        });
      }
      if (typeof t.days !== 'undefined' && t.days.indexOf(dateUtils.getDay(date as Date)) !== -1) {
        disabledDates = true;
      }
      if (typeof t.daysOfMonth !== 'undefined' && t.daysOfMonth.indexOf(dateUtils.getDate(date as Date)) !== -1) {
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
    function isDefined(prop: any): any {
      return typeof prop !== 'undefined' && prop;
    }

    /**
     * Whether a date is highlighted or not
     * @return {Boolean}
     */
    function isHighlightedDate(date: number | Date): boolean {
      const h = props.highlighted;
      if (!(h && h.includeDisabled) && isDisabledDate(date)) {
        return false;
      }

      let highlighted = false;

      if (typeof h === 'undefined') {
        return false;
      }

      if (typeof h.dates !== 'undefined') {
        h.dates.forEach((d: { getTime: () => string | number | Date }): void => {
          if (dateUtils.compareDates(date as Date, d)) {
            highlighted = true;
            // return true;
          }
        });
      }

      if (isDefined(h.from) && isDefined(h.to)) {
        highlighted = date >= h.from && date <= h.to;
      }

      if (typeof h.days !== 'undefined' && h.days.indexOf(dateUtils.getDay(date as Date)) !== -1) {
        highlighted = true;
      }

      if (typeof h.daysOfMonth !== 'undefined' && h.daysOfMonth.indexOf(dateUtils.getDate(date as Date)) !== -1) {
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
    function dayClasses(day: {
      isSelected: any;
      isDisabled: any;
      isHighlighted: any;
      isToday: any;
      isWeekend: any;
      isSaturday: any;
      isSunday: any;
      isHighlightStart: any;
      isHighlightEnd: any;
    }): any {
      return {
        selected: day.isSelected,
        disabled: day.isDisabled,
        highlighted: day.isHighlighted,
        today: day.isToday,
        weekend: day.isWeekend,
        sat: day.isSaturday,
        sun: day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd,
      };
    }

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    function isHighlightStart(date: Date): boolean {
      const h = props.highlighted;
      if (!h) return false;
      return (
        isHighlightedDate(date) &&
        h.from instanceof Date &&
        dateUtils.getFullYear(h.from) === dateUtils.getFullYear(date) &&
        dateUtils.getMonth(h.from) === dateUtils.getMonth(date) &&
        dateUtils.getDate(h.from) === dateUtils.getDate(date)
      );
    }

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    function isHighlightEnd(date: Date): boolean {
      const h = props.highlighted;
      if (!h) return false;
      return (
        isHighlightedDate(date) &&
        h.to instanceof Date &&
        dateUtils.getFullYear(h.to) === dateUtils.getFullYear(date) &&
        dateUtils.getMonth(h.to) === dateUtils.getMonth(date) &&
        dateUtils.getDate(h.to) === dateUtils.getDate(date)
      );
    }

    /** ********************************** Computed  *********************************** */
    /**
     * Returns an array of day names
     * @return {String[]}
     */
    const daysOfWeek = computed(() => {
      if (props.mondayFirst) {
        const tempDays = props.translation && props.translation.days && props.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }
      return props.translation && props.translation.days;
    });

    const blankDays = computed((): any => {
      const d = props.pageDate;
      const dObj = props.useUtc
        ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
        : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      if (props.mondayFirst) {
        return dateUtils.getDay(dObj) > 0 ? dateUtils.getDay(dObj) - 1 : 6;
      }
      return dateUtils.getDay(dObj);
    });

    /**
     * @return {Object[]}
     */
    const days = computed((): IDays[] => {
      const d = props.pageDate;
      const tdays: IDays[] = [];
      // set up a new date object to the beginning of the current 'page'
      const dObj = props.useUtc
        ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
        : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      const t = dateUtils.daysInMonth(dateUtils.getFullYear(dObj), dateUtils.getMonth(dObj));
      for (let i = 0; i < t; i += 1) {
        tdays.push({
          date: dateUtils.getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: isSelectedDate(dObj),
          isDisabled: isDisabledDate(dObj),
          isHighlighted: isHighlightedDate(dObj),
          isHighlightStart: isHighlightStart(dObj),
          isHighlightEnd: isHighlightEnd(dObj),
          isToday: dateUtils.compareDates(dObj, new Date()),
          isWeekend: dateUtils.getDay(dObj) === 0 || dateUtils.getDay(dObj) === 6,
          isSaturday: dateUtils.getDay(dObj) === 6,
          isSunday: dateUtils.getDay(dObj) === 0,
        });
        dateUtils.setDate(dObj, dateUtils.getDate(dObj) + 1);
      }
      return tdays;
    });

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    const currMonthName = computed(() => {
      const monthName = props.fullMonthName
        ? props.translation && props.translation.months
        : props.translation && props.translation.monthsAbbr;
      return dateUtils.getMonthNameAbbr(dateUtils.getMonth(props.pageDate), monthName);
    });

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    const monthName = computed(() => {
      const tempName = props.translation && props.translation.months;
      return dateUtils.getMonthName(dateUtils.getMonth(props.pageDate), tempName);
    });

    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    const currYearName = computed(() => {
      const yearSuffix = props.translation && props.translation.yearSuffix;
      return `${dateUtils.getFullYear(props.pageDate)}${yearSuffix}`;
    });

    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */
    const isYmd = computed(() => {
      return (props.translation && props.translation.ymd && props.translation && props.translation.ymd) === true;
    });

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    const isLeftNavDisabled = computed(() => {
      return props.isRtl ? isNextMonthDisabled() : isPreviousMonthDisabled();
    });
    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    const isRightNavDisabled = computed(() => {
      return props.isRtl ? isPreviousMonthDisabled() : isNextMonthDisabled();
    });

    const getDayName = computed(() => {
      const propDate = dateUtils.stringToDate(props.selectedDate);
      return props.selectedDate
        ? dateUtils.getDayNameAbbr(propDate, props.translation && props.translation.daysNames)
        : null;
    });

    const getDisplayDate = computed(() => {
      const propDate = dateUtils.stringToDate(props.selectedDate);
      return props.selectedDate ? dateUtils.getDate(propDate) : null;
    });

    const ifDifferentViews = computed(() => {
      return !(props.minimumView === props.maximumView && (props.minimumView !== 'day' || props.maximumView !== 'day'));
    });

    return {
      isDefined,
      showMonthCalendar,
      daysOfWeek,
      blankDays,
      isYmd,
      days,
      currMonthName,
      currYearName,
      isLeftNavDisabled,
      isRightNavDisabled,
      selectDate,
      previousMonth,
      nextMonth,
      dayClasses,
      monthName,
      getDayName,
      getDisplayDate,
      showYearCalendar,
      isNextMonthDisabled,
      ifDifferentViews,
      isSelectedDate,
      isDisabledDate,
      isHighlightedDate,
      isHighlightStart,
      isHighlightEnd,
    };
  },
});
</script>
