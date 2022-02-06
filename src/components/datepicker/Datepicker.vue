<template>
  <div
    class="vuejs3-datepicker"
    :class="[isRtl ? 'rtl' : '', `vuejs3-${theme}`, wrapperClass]"
    v-clickoutside="{
      handler: inline ? null : closeOnClickOutside,
    }"
  >
    <date-input
      :selectedDate="selectedDate"
      :resetTypedDate="resetTypedDate"
      :format="format"
      :translation="translation"
      :inline="inline"
      :id="id"
      :name="name"
      :fullMonthName="fullMonthName"
      :openDate="openDate"
      :placeholder="placeholder"
      :inputClass="inputClass"
      :typeable="typeable"
      :clearButton="clearButton"
      :clearButtonIcon="clearButtonIcon"
      :calendarButton="calendarButton"
      :calendarButtonIcon="calendarButtonIcon"
      :calendarButtonIconContent="calendarButtonIconContent"
      :disabled="disabled"
      :required="required"
      :addBootstrapClass="addBootstrapClass"
      :use-utc="useUtc"
      @showCalendar="showCalendar"
      @closeCalendar="close"
      @typedDate="setTypedDate"
      @clearDate="clearDate"
      :minimumView="minimumView"
      :maximumView="maximumView"
      :hideInput="hideInput"
      :iconWidth="iconWidth"
      :iconHeight="iconHeight"
      :iconColor="iconColor"
      :theme="theme"
    >
      <template v-slot:belowDate>
        <slot name="belowDate"></slot>
      </template>
    </date-input>
    <!--Day View  -->
    <picker-day
      v-if="allowedToShowView('day')"
      :pageDate="pageDate"
      :selectedDate="selectedDate"
      :showDayView="showDayView"
      :fullMonthName="fullMonthName"
      :allowedToShowView="allowedToShowView"
      :disabledDates="disabledDates"
      :highlighted="highlighted"
      :calendarClass="calendarClass"
      :calendarStyle="calendarStyle"
      :translation="translation"
      :pageTimestamp="pageTimestamp"
      :isRtl="isRtl"
      :mondayFirst="mondayFirst"
      :dayCellContent="dayCellContent"
      @changedMonth="handleChangedMonthFromDayPicker"
      @selectDate="selectDate"
      @showMonthCalendar="showMonthCalendar"
      @selectedDisabled="selectDisabledDate"
      @showYearCalendar="showYearCalendar"
      :minimumView="minimumView"
      :maximumView="maximumView"
      :preventDisableDateSelection="preventDisableDateSelection"
      :theme="theme"
    >
      <template v-slot:customCalendarHeader>
        <slot name="customCalendarHeader"></slot>
      </template>
    </picker-day>

    <!--Month View -->
    <picker-month
      v-if="allowedToShowView('month')"
      :pageDate="pageDate"
      :selectedDate="selectedDate"
      :showMonthView="showMonthView"
      :allowedToShowView="allowedToShowView"
      :disabledDates="disabledDates"
      :calendarClass="calendarClass"
      :calendarStyle="calendarStyle"
      :translation="translation"
      :isRtl="isRtl"
      :use-utc="useUtc"
      :fullMonthName="fullMonthName"
      @selectMonth="selectMonth"
      @showYearCalendar="showYearCalendar"
      @changedYear="setPageDate"
      :minimumView="minimumView"
      :maximumView="maximumView"
      :theme="theme"
    >
      <template v-slot:customCalendarHeader>
        <slot name="customCalendarHeader"></slot>
      </template>
    </picker-month>

    <!-- Year View -->
    <picker-year
      v-if="allowedToShowView('year')"
      :pageDate="pageDate"
      :selectedDate="selectedDate"
      :showYearView="showYearView"
      :allowedToShowView="allowedToShowView"
      :disabledDates="disabledDates"
      :calendarClass="calendarClass"
      :calendarStyle="calendarStyle"
      :translation="translation"
      :isRtl="isRtl"
      :use-utc="useUtc"
      @selectYear="selectYear"
      @changedDecade="setPageDate"
      :fullMonthName="fullMonthName"
      :minimumView="minimumView"
      :maximumView="maximumView"
      :theme="theme"
    >
      <template v-slot:customCalendarHeader>
        <slot name="customCalendarHeader"></slot>
      </template>
    </picker-year>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue';
import clickOutside from '../../directives/click-outside';
import DateInput from './DateInput.vue';
import PickerDay from './PickerDay.vue';
import PickerMonth from './PickerMonth.vue';
import PickerYear from './PickerYear.vue';
import * as Langlist from './locale/index';
import { isValidDate, setDate, validateDateInput } from './utils/DateUtils';

export default defineComponent({
  name: 'Datepicker',
  components: {
    DateInput,
    PickerDay,
    PickerMonth,
    PickerYear,
  },
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    modelValue: {
      type: [Date as new () => Date, String, Number],
    },
    value: {
      type: [Date as new () => Date, String, Number],
    },
    format: {
      type: [String, Function],
      default: 'dd MMM yyyy',
    },
    language: {
      type: String,
      default: 'en',
    },
    openDate: {
      validator: (val: Date): boolean => validateDateInput(val),
      type: Date as new () => Date,
      default: new Date(),
    },
    minimumView: {
      type: String,
      default: 'day',
    },
    maximumView: {
      type: String,
      default: 'year',
    },
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    dayCellContent: {
      type: Function,
    },
    fullMonthName: {
      type: Boolean,
    },
    disabledDates: {
      type: Object,
    },
    highlighted: {
      type: Object,
    },
    placeholder: {
      type: String,
    },
    inline: {
      type: Boolean,
    },
    calendarClass: {
      type: [String, Object, Array],
    },
    inputClass: {
      type: [String, Object, Array],
    },
    wrapperClass: {
      type: [String, Object, Array],
    },
    mondayFirst: {
      type: Boolean,
    },
    clearButton: {
      type: Boolean,
    },
    clearButtonIcon: {
      type: String,
    },
    calendarButton: {
      type: Boolean,
    },
    calendarButtonIcon: {
      type: String,
    },
    calendarButtonIconContent: {
      type: String,
    },
    addBootstrapClass: {
      type: Boolean,
    },
    initialView: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
    typeable: {
      type: Boolean,
    },
    useUtc: {
      type: Boolean,
    },
    hideInput: {
      type: Boolean,
      default: true,
    },
    preventDisableDateSelection: {
      type: Boolean,
      default: true,
    },
    iconColor: {
      default: 'black',
      type: String,
    },
    iconHeight: {
      default: 16,
      type: [String, Number],
    },
    iconWidth: {
      default: 16,
      type: [String, Number],
    },
    theme: {
      default: 'green',
      type: String,
    },
  },
  emits: [
    'input',
    'cleared',
    'update:modelValue',
    'closed',
    'changed-month',
    'changed-year',
    'changed-day',
    'selected',
    'selected-disabled',
  ],
  setup(props, { emit }) {
    const initmodelvalue = new Date((props.modelValue as unknown) as Date);
    const pageTimestamp = ref<number>(0);
    const selectedDate = ref<Date | string | null>(null);
    if (props.modelValue && isValidDate(initmodelvalue)) {
      pageTimestamp.value = initmodelvalue.getTime();
      selectedDate.value = initmodelvalue;
    }
    if (props.openDate) {
      pageTimestamp.value = setDate(new Date(props.openDate), 1);
    }
    const showDayView = ref(false);
    const showMonthView = ref(false);
    const showYearView = ref(false);
    const calendarHeight = ref(0);
    const resetTypedDate = ref(new Date());

    /** ********************************** Computed  *********************************** */
    const computedInitialView = computed(() => {
      if (!props.initialView) {
        return props.minimumView;
      }
      return props.initialView;
    });

    const pageDate = computed(() => {
      return new Date(pageTimestamp.value);
    });

    const translation = computed(() => {
      const temp = (Langlist as any).data;
      return temp[props.language as any];
    });

    const isInline = computed(() => {
      return !!props.inline;
    });

    const calendarStyle = computed(() => {
      return {
        position: isInline.value ? 'static' : undefined,
      };
    });

    const isOpen = computed(() => {
      return showDayView.value || showMonthView.value || showYearView.value;
    });

    const isRtl = computed(() => {
      return translation.value && translation.value.rtl === true;
    });
    /** ********************************** Methods  *********************************** */

    /**
     * Sets the date that the calendar should open on
     */
    function setPageDate(date?: string | number | Date | undefined): void {
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
    function allowedToShowView(view: string): boolean {
      const views = ['day', 'month', 'year'];
      const minimumViewIndex = views.indexOf(props.minimumView);
      const maximumViewIndex = views.indexOf(props.maximumView);
      const viewIndex = views.indexOf(view);

      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    }

    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */
    function close(emitEvent?: boolean): void {
      showDayView.value = false;
      showMonthView.value = false;
      showYearView.value = false;
      if (!isInline.value) {
        if (emitEvent) {
          emit('closed');
        }
      }
    }

    /**
     * Show the day picker
     * @return {Boolean}
     */
    function showDayCalendar(): boolean {
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
    function showMonthCalendar(): boolean {
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
    function showYearCalendar(): boolean {
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
    function setInitialView(): void {
      const initialView = computedInitialView.value;
      if (!allowedToShowView(initialView)) {
        throw new Error(
          `initialView '${initialView}' cannot be rendered based on minimum '${props.minimumView}' and maximum '${props.maximumView}'`
        );
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
    function showCalendar(): boolean | void {
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
    function setDate1(timestamp: string | number | Date): void {
      const date = new Date(timestamp);
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
    function clearDate(): void {
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
    function selectDate(date: { timestamp: string | number | Date }): void {
      setDate1(date.timestamp);
      if (!isInline.value) {
        close(true);
      }
      resetTypedDate.value = new Date();
    }
    /**
     * @param {Object} date
     */
    function selectDisabledDate(date: any): void {
      emit('selected-disabled', date);
    }
    /**
     * @param {Object} month
     */
    function selectMonth(month: { timestamp: any }): void {
      const date = new Date(month.timestamp);
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
    function selectYear(year: { timestamp: any }): void {
      const date = new Date(year.timestamp);
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
    function setValue(date?: Date | string | number): void {
      let tempDate = date;
      if (typeof date === 'string' || typeof date === 'number') {
        const parsed = new Date(date);
        tempDate = Number.isNaN(parsed.valueOf()) ? '' : parsed;
      }
      if (!tempDate) {
        setPageDate();
        selectedDate.value = null;
        return;
      }
      selectedDate.value = tempDate as Date;
      setPageDate(date);
    }

    /**
     * Handles a month change from the day picker
     */
    function handleChangedMonthFromDayPicker(date: string | number | Date | undefined): void {
      setPageDate(date);
      emit('changed-month', date);
    }

    /**
     * Set the date from a typedDate event
     */
    function setTypedDate(date: { getTime: () => string | number | Date }): void {
      setDate1(date.getTime());
    }

    /**
     * Initiate the component
     */
    function init(): void {
      if (props.value) {
        setValue(props.value as any);
      }
      if (isInline.value) {
        setInitialView();
      }
    }

    /**
     * Click Outside handler
     */
    function closeOnClickOutside(): void {
      close();
    }
    /** ********************************** Watchers  *********************************** */
    watch(
      () => props.modelValue,
      (curr?: any) => {
        setValue(curr);
      }
    );

    watch(
      () => props.value,
      (curr: any) => {
        setValue(curr);
      }
    );

    watch(
      () => props.openDate,
      () => {
        setPageDate();
      }
    );
    watch(
      () => props.initialView,
      () => {
        setInitialView();
      }
    );

    init();

    return {
      pageTimestamp,
      selectedDate,
      showDayView,
      showMonthView,
      showYearView,
      calendarHeight,
      resetTypedDate,
      // computed
      pageDate,
      translation,
      calendarStyle,
      isOpen,
      isInline,
      isRtl,
      // methods
      setTypedDate,
      handleChangedMonthFromDayPicker,
      selectYear,
      selectMonth,
      selectDisabledDate,
      clearDate,
      showCalendar,
      close,
      allowedToShowView,
      showYearCalendar,
      showMonthCalendar,
      setPageDate,
      selectDate,
      closeOnClickOutside,
      showDayCalendar,
      computedInitialView,
      setDate,
      setDate1,
      setValue,
    };
  },
});
</script>

<style lang="css">
@import './datepicker.css';
</style>
