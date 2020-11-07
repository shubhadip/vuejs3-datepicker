<template>
  <div
    :class="[calendarClass, 'vuejs3-datepicker__calendar']"
    v-show="showMonthView"
    :style="calendarStyle"
    @mousedown.prevent
  >
    <slot name="beforeCalendarHeader"></slot>
    <section>
      <p @click="showYearCalendar">{{currYearName}}</p>
      <p v-if="selectedDate">{{getDayName}} {{getDisplayDate}} {{monthName}}</p>
    </section>
    
    <header>
      <span @click="isRtl ? nextYear() : previousYear()" class="prev" :class="{ disabled: isLeftNavDisabled }"
        >&lt;</span
      >
      <span class="month__year_btn" @click="showYearCalendar" :class="allowedToShowView('year') ? 'up' : ''">{{
        pageYearName
      }}</span>
      <span @click="isRtl ? previousYear() : nextYear()" class="next" :class="{ disabled: isRightNavDisabled }"
        >&gt;</span
      >
    </header>
    <span
      class="cell month"
      v-for="month in months"
      :key="month.timestamp"
      :class="{ selected: month.isSelected, disabled: month.isDisabled }"
      @click.stop="selectMonth(month)"
      >{{ month.month }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { getFullYear, getMonth, setMonth, setFullYear, getMonthName, getDate, getMonthNameAbbr, getDayNameAbbr } from './utils/DateUtils';

interface IMonths {
  month: number;
  timestamp: number;
  isSelected: boolean;
  isDisabled: boolean;
}
export default defineComponent({
  name: 'PickerMonth',
  props: {
    showMonthView: {
      type: Boolean,
    },
    selectedDate: {
      type: Date as PropType<Date>,
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
      type: Boolean
    }
  },
  setup(props, { emit }) {
    /** ********************************** Methods  *********************************** */
    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    function selectMonth(month: { isDisabled: boolean }): void {
      if (!month.isDisabled) {
        emit('select-month', month);
      }
    }

    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    function changeYear(incrementBy: number): void {
      const date = props.pageDate;
      setFullYear(date, getFullYear(date) + incrementBy);
      emit('changed-year', date);
    }

    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */
    function isPreviousYearDisabled(): boolean {
      const d = props.disabledDates;
      if (!d || !d.to) {
        return false;
      }
      return getFullYear(d.to) >= getFullYear(props.pageDate);
    }

    /**
     * Decrements the year
     */
    function previousYear(): void {
      if (!isPreviousYearDisabled()) {
        changeYear(-1);
      }
    }

    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */
    function isNextYearDisabled(): boolean {
      const d = props.disabledDates;
      if (!d || !d.from) {
        return false;
      }
      return getFullYear(d.from) <= getFullYear(props.pageDate);
    }

    /**
     * Increments the year
     */
    function nextYear(): void {
      if (!isNextYearDisabled()) {
        changeYear(1);
      }
    }

    /**
     * Emits an event that shows the year calendar
     */
    function showYearCalendar(): void {
      emit('show-year-calendar');
    }

    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    function isSelectedMonth(date: Date): boolean {
      const d = props.selectedDate;
      return d && getFullYear(d) === getFullYear(date) && getMonth(d) === getMonth(date);
    }

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    function isDisabledMonth(date: Date): boolean {
      let disabledDates = false;
      const d = props.disabledDates;
      if (!d) return false;
      if (typeof d === 'undefined') {
        return false;
      }

      if (typeof d.to !== 'undefined' && d.to) {
        if (
          (getMonth(date) < getMonth(d.to) && getFullYear(date) <= getFullYear(d.to)) ||
          getFullYear(date) < getFullYear(d.to)
        ) {
          disabledDates = true;
        }
      }
      if (typeof d.from !== 'undefined' && d.from) {
        if (
          (getMonth(date) > getMonth(d.from) && getFullYear(date) >= getFullYear(d.from)) ||
          getFullYear(date) > getFullYear(d.from)
        ) {
          disabledDates = true;
        }
      }

      if (typeof d.customPredictor === 'function' && d.customPredictor(date)) {
        disabledDates = true;
      }
      return disabledDates;
    }

    /** ********************************** Computed  *********************************** */
    const months = computed((): IMonths[] => {
      const d = props.pageDate;
      const tmonths: IMonths[] = [];
      // set up a new date object to the beginning of the current 'page'
      const dObj = props.useUtc
        ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate()))
        : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());
      for (let i = 0; i < 12; i += 1) {
        tmonths.push({
          month: getMonthName(i, props.translation && props.translation.months),
          timestamp: dObj.getTime(),
          isSelected: isSelectedMonth(dObj),
          isDisabled: isDisabledMonth(dObj),
        });
        setMonth(dObj, getMonth(dObj) + 1);
      }
      return tmonths;
    });

    /**
     * Get year name on current page.
     * @return {String}
     */
    const pageYearName = computed(() => {
      const yearSuffix = props.translation && props.translation.yearSuffix;
      return `${getFullYear(props.pageDate)}${yearSuffix}`;
    });

    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */
    const isLeftNavDisabled = computed(() => {
      return props.isRtl ? isNextYearDisabled() : isPreviousYearDisabled();
    });

    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */
    const isRightNavDisabled = computed(() => {
      return props.isRtl ? isPreviousYearDisabled() : isNextYearDisabled();
    });


    /**
    * Gets the name of the month the current page is on
    * @return {String}
    */
    const monthName = computed(() => {
      const tempName = props.translation && props.translation.months
      return getMonthName(getMonth(props.pageDate), tempName);
    });


    const getDisplayDate = computed(()=>{
      return props.selectedDate ? getDate(props.selectedDate) : null
    })


    const getDayName = computed(()=>{
      return props.selectedDate ? getDayNameAbbr(props.selectedDate,props.translation && props.translation.daysNames) : null
    })
    
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
      const monthName = props.fullMonthName
        ? props.translation && props.translation.months
        : props.translation && props.translation.monthsAbbr;
      return getMonthNameAbbr(getMonth(props.pageDate), monthName);
    });


    return {
      isRightNavDisabled,
      isLeftNavDisabled,
      pageYearName,
      months,
      selectMonth,
      previousYear,
      nextYear,
      currYearName,
      getDisplayDate,
      monthName,
      showYearCalendar,
      getDayName
    };
  },
});
</script>
