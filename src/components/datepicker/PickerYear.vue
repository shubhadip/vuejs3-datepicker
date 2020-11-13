<template>
  <div
    :class="['vuejs3-datepicker__calendar', `vuejs3-${theme}`, calendarClass]"
    v-show="showYearView"
    :style="calendarStyle"
    @mousedown.prevent
  >
    <slot name="customCalendarHeader"></slot>
    <section v-if="ifDifferentViews && selectedDate" class="vuejs3-datepicker__calendar-topbar">
      <p class="vuejs3-datepicker__calendar-topbar-year">{{ currYearName }}</p>
      <p class="vuejs3-datepicker__calendar-topbar-day" v-if="selectedDate">
        {{ getDayName }} {{ getDisplayDate }} {{ monthName }}
      </p>
    </section>
    <div class="vuejs3-datepicker__calendar-actionarea">
      <header>
        <span @click="isRtl ? nextDecade() : previousDecade()" class="prev" :class="{ disabled: isLeftNavDisabled }"
          >&lt;</span
        >
        <span>{{ getPageDecade }}</span>
        <span @click="isRtl ? previousDecade() : nextDecade()" class="next" :class="{ disabled: isRightNavDisabled }"
          >&gt;</span
        >
      </header>
      <span
        class="cell year"
        v-for="year in years"
        :key="year.timestamp"
        :class="{ selected: year.isSelected, disabled: year.isDisabled }"
        @click.stop="selectYear(year)"
        >{{ year.year }}</span
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import {
  getDate,
  getDayNameAbbr,
  getFullYear,
  getMonth,
  getMonthName,
  getMonthNameAbbr,
  setFullYear,
  stringToDate,
} from './utils/DateUtils';

export default defineComponent({
  name: 'PickerYear',
  props: {
    showYearView: {
      type: Boolean,
    },
    selectedDate: {
      type: [String, Date],
      default: new Date(),
    },
    pageDate: {
      type: Date as PropType<Date>,
      default: new Date(),
    },
    pageTimestamp: {
      type: Number,
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
    allowedToShowView: {
      type: Function,
    },
    useUtc: {
      type: Boolean,
    },
    fullMonthName: {
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
    theme: {
      default: 'green',
      type: String,
    },
  },
  emits: ['select-year', 'changed-decade'],
  setup(props, { emit }) {
    /** ********************************** Methods  *********************************** */

    /**
     * Select year
     * @param {year}
     */
    function selectYear(year: { isDisabled: boolean }): void {
      if (!year.isDisabled) {
        emit('select-year', year);
      }
    }

    /**
     * Change year (increment / decrement)
     * @param {number}
     */
    function changeYear(incrementBy: number): void {
      const date = props.pageDate;
      setFullYear(date, getFullYear(date) + incrementBy);
      emit('changed-decade', date);
    }

    /**
     * checks if previous decade is disabled
     */
    function isPreviousDecadeDisabled(): boolean {
      const d = props.disabledDates;
      if (!d || !d.to) {
        return false;
      }
      const disabledYear = getFullYear(d.to);
      const lastYearInPreviousPage = Math.floor(getFullYear(props.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage;
    }

    /**
     * changes year to previous decade
     */
    function previousDecade(): void {
      if (!isPreviousDecadeDisabled()) {
        changeYear(-10);
      }
    }

    /**
     * check if next decade is disabled
     */
    function isNextDecadeDisabled(): boolean {
      const d = props.disabledDates;
      if (!d || !d.from) {
        return false;
      }
      const disabledYear = getFullYear(d.from);
      const firstYearInNextPage = Math.ceil(getFullYear(props.pageDate) / 10) * 10;
      return disabledYear <= firstYearInNextPage;
    }

    /**
     * moves year to next decade
     */
    function nextDecade(): void {
      if (!isNextDecadeDisabled()) {
        changeYear(10);
      }
    }

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    function isSelectedYear(date: Date): boolean {
      const propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getFullYear(propDate) === getFullYear(date) : false;
    }

    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    function isDisabledYear(date: Date): boolean {
      let disabledDates = false;
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

      if (typeof props.disabledDates.customPredictor === 'function') {
        disabledDates = props.disabledDates.customPredictor(date);
      }

      return disabledDates;
    }

    /** ********************************** Computed  *********************************** */
    const years = computed(() => {
      const d = props.pageDate;
      const tyears = [];
      // set up a new date object to the beginning of the current 'page'7
      const dObj = props.useUtc
        ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate()))
        : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
      for (let i = 0; i < 10; i += 1) {
        tyears.push({
          year: getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: isSelectedYear(dObj),
          isDisabled: isDisabledYear(dObj),
        });
        setFullYear(dObj, getFullYear(dObj) + 1);
      }
      return tyears;
    });

    /**
     * @return {String}
     */
    const getPageDecade = computed(() => {
      const decadeStart = Math.floor(getFullYear(props.pageDate) / 10) * 10;
      const decadeEnd = decadeStart + 9;
      const yearSuffix = props.translation && props.translation.yearSuffix;
      return `${decadeStart} - ${decadeEnd}${yearSuffix}`;
    });

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    const isLeftNavDisabled = computed(() => {
      return props.isRtl ? isNextDecadeDisabled() : isPreviousDecadeDisabled();
    });

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    const isRightNavDisabled = computed(() => {
      return props.isRtl ? isPreviousDecadeDisabled() : isNextDecadeDisabled();
    });

    const getDayName = computed(() => {
      const propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getDayNameAbbr(propDate, props.translation && props.translation.daysNames) : null;
    });

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    const monthName = computed(() => {
      const tempName = props.translation && props.translation.months;
      return getMonthName(getMonth(props.pageDate), tempName);
    });

    const getDisplayDate = computed(() => {
      const propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getDate(propDate) : null;
    });

    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    const currYearName = computed(() => {
      const yearSuffix = props.translation && props.translation.yearSuffix;
      return `${getFullYear(props.pageDate)}${yearSuffix}`;
    });

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    const currMonthName = computed(() => {
      const tempmonthName = props.fullMonthName
        ? props.translation && props.translation.months
        : props.translation && props.translation.monthsAbbr;
      return getMonthNameAbbr(getMonth(props.pageDate), tempmonthName);
    });

    const ifDifferentViews = computed(() => {
      return !(props.minimumView === props.maximumView && (props.minimumView !== 'day' || props.maximumView !== 'day'));
    });

    return {
      isRightNavDisabled,
      isLeftNavDisabled,
      getPageDecade,
      years,
      nextDecade,
      previousDecade,
      selectYear,
      getDayName,
      monthName,
      getDisplayDate,
      currYearName,
      currMonthName,
      ifDifferentViews,
      // methods
      isNextDecadeDisabled,
      isPreviousDecadeDisabled,
      isDisabledYear,
    };
  },
});
</script>
