<template>
  <div :class="[addBootstrapClass ? 'input-group' : '']">
    <!-- Calendar Button -->
    <span
      v-if="calendarButton"
      class="vuejs3-datepicker__calendar-button"
      :class="{ 'input-group-prepend': addBootstrapClass }"
      @click="showCalendar"
      v-bind:style="{ 'cursor:not-allowed;': disabled }"
    >
      <span :class="{ 'input-group-text': addBootstrapClass }">
        <i :class="calendarButtonIcon">
          {{ calendarButtonIconContent }}
          <span v-if="!calendarButtonIcon">&hellip;</span>
        </i>
      </span>
    </span>
    <div v-if="typeable || !hideInput" style="position: relative">
      <span v-if="!inline">
        <IconView
          customClass="vuejs3-datepicker__typeablecalendar"
          :color="iconColor"
          :width="iconWidth"
          :height="iconHeight"
        />
      </span>
      <input
        :type="inline ? 'hidden' : 'text'"
        :class="computedInputClass"
        :name="name"
        ref="inputRef"
        :id="id"
        class="vuejs3-datepicker__inputvalue"
        :value="formattedValue"
        :open-date="openDate"
        :placeholder="placeholder"
        :clear-button="clearButton"
        :disabled="disabled"
        :required="required"
        :readonly="!typeable"
        @click="showCalendar"
        @keyup="parseTypedDate"
        @blur="inputBlurred"
        autocomplete="off"
      />
    </div>
    <div v-else @click="showCalendar" id="calendar-div">
      <div class="vuejs3-datepicker__value" v-if="!inline">
        <span class="vuejs3-datepicker__icon">
          <IconView :color="iconColor" :width="iconWidth" :height="iconHeight" />
        </span>
        <div class="vuejs3-datepicker__content" v-if="formattedValue">{{ formattedValue }}</div>
        <div v-else class="vuejs3-datepicker__content">{{ placeholder }}</div>
      </div>
    </div>
    <span
      v-if="clearButton && selectedDate"
      class="vuejs3-datepicker__clear-button"
      :class="{ 'input-group-append': addBootstrapClass }"
      @click="clearDate()"
    >
      <span :class="{ 'input-group-text': addBootstrapClass }">
        <i :class="clearButtonIcon">
          <span v-if="!clearButtonIcon">&times;</span>
        </i>
      </span>
    </span>
    <slot name="belowDate"></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import IconView from '../iconview/IconView.vue';
import { formatDate, stringToDate } from './utils/DateUtils';

export default defineComponent({
  name: 'DateInput',
  components: {
    IconView,
  },
  props: {
    selectedDate: {
      type: [Date, String],
    },
    resetTypedDate: {
      type: [Date as new () => Date],
    },
    format: {
      type: [String, Function],
    },
    translation: {
      type: Object,
    },
    inline: {
      type: Boolean,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    openDate: {
      type: Date,
    },
    placeholder: {
      type: String,
    },
    inputClass: {
      type: String,
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
    disabled: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
    typeable: {
      type: Boolean,
    },
    addBootstrapClass: {
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
    hideInput: {
      type: Boolean,
      default: true,
    },
    fullMonthName: {
      type: Boolean,
      default: false,
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
  emits: ['show-calendar', 'typed-date', 'clear-date', 'close-calendar'],
  setup(props, { emit }) {
    const typedDate = ref<string | number>();
    const inputRef = ref(null);

    const computedInputClass = computed(() => {
      if (props.addBootstrapClass) {
        if (typeof props.inputClass === 'string') {
          return [props.inputClass, 'form-control'].join(' ');
        }
        return {
          'form-control': true,
          ...((props.inputClass as unknown) as Record<string, any>),
        };
      }
      return props.inputClass;
    });

    const formattedValue = computed((): string | Date | null | number => {
      if (!props.selectedDate) {
        return null;
      }
      if (typedDate.value) {
        return typedDate.value;
      }

      const propDate = stringToDate(props.selectedDate);

      let date =
        typeof props.format === 'function'
          ? props.format(propDate)
          : formatDate(propDate, props.format as any, props.translation as any);

      if (props.minimumView === props.maximumView) {
        const [, y, z] = date.split(' ');
        if (props.maximumView === 'month') {
          if (props.fullMonthName) {
            const i = props.translation?.monthsAbbr.indexOf(y);
            return props.translation?.months[i];
          }
          date = y;
        } else if (props.maximumView === 'year') {
          date = z;
        }
      }

      return date;
    });

    // watchers
    watch(
      () => props.resetTypedDate,
      () => {
        typedDate.value = '';
      }
    );

    /**
     * open Calendar
     */
    function showCalendar(): void {
      emit('show-calendar');
    }

    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    function parseTypedDate(event: KeyboardEvent): void {
      if (
        [
          27, // escape
          13, // enter
        ].includes(event.keyCode)
      ) {
        (inputRef.value as any).blur();
      }
      if (props.typeable) {
        const { value } = inputRef.value as any;
        const temptypedDate = Date.parse(value);
        if (!Number.isNaN(temptypedDate)) {
          typedDate.value = value;
          emit('typed-date', new Date(temptypedDate));
        }
      }
    }

    /**
     * emit a clearDate event
     */
    function clearDate(): void {
      emit('clear-date');
    }

    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    function inputBlurred(): void {
      if (props.typeable && Number.isNaN(Date.parse((inputRef.value as any).value))) {
        clearDate();
        (inputRef.value as any).value = null;
        typedDate.value = '';
      }
      emit('close-calendar', true);
    }

    return {
      typedDate,
      computedInputClass,
      formattedValue,
      showCalendar,
      parseTypedDate,
      inputBlurred,
      inputRef,
    };
  },
});
</script>
