<template>
  <div class="page-head">
    <h1>Vue 3 Datepicker</h1>
    <a href="https://github.com/shubhadip/vuejs3-datepicker">
      <img src="./assets/github.svg" alt="vuejs3-datepicker" />
    </a>
  </div>
  <div class="wrapper">
    <div class="ind">
      <label>Typeable</label>
      <appdate-picker
        :full-month-name="true"
        input-class="customClass"
        placeholder="YYYY-MM-DD"
        :typeable="true"
        :hideInput="false"
        @input="dateSelected"
      >
      </appdate-picker>
    </div>

    <div class="ind">
      <label> Disabled: from-to </label>
      <appdate-picker
        :full-month-name="true"
        placeholder="Select Date"
        @input="dateSelected"
        :disabled-dates="{
          to: new Date(2020, 10, 5),
          from: new Date(2020, 10, 16),
        }"
      ></appdate-picker>
    </div>
    <div class="ind">
      <label> Disabled Dates : Array </label>
      <appdate-picker
        placeholder="Select Date"
        @input="dateSelected"
        :disabled-dates="{
          dates: [
            new Date(2020, 11, 16),
            new Date(2020, 11, 17),
            new Date(2020, 11, 18),
            new Date(2020, 11, 19),
            new Date(2020, 11, 20),
          ],
        }"
      ></appdate-picker>
    </div>

    <div class="ind">
      <label>Default Value</label>
      <appdate-picker
        placeholder="Select Date"
        @input="dateSelected"
        :value="defaultValue"
        :disabled-dates="{
          dates: [new Date(2020, 10, 16), new Date(2020, 10, 17), new Date(2020, 10, 18)],
        }"
        :highlighted="{
          to: new Date(2020, 12, 16),
          from: new Date(2020, 11, 17),
        }"
      ></appdate-picker>
      <div class="change-btn">
        <button @click="changeDefaultValue">Change Default Value</button>
      </div>
    </div>

    <div class="ind">
      <div>
        <label>V Model: {{ dateinput }}</label>
        <appdate-picker v-model="dateinput" @update:modelValue="dateSelected"></appdate-picker>
      </div>
      <div class="change-btn">
        <button @click="changedVmodel">Change Date Input</button>
      </div>
    </div>

    <div class="ind">
      <label>With Programmatic Access</label>
      <appdate-picker
        ref="inputRef"
        @selected="handleSelectDate"
        :highlighted="highlightDates"
        :value="emptyDate"
        @closed="handleCalendarClose"
        placeholder="Select Date"
      />
      <div class="change-btn">
        <button @click="checkDatePicker">Check DatePicker</button>
      </div>
    </div>

    <div class="ind">
      <label>Day View</label>
      <appdate-picker
        placeholder="Select Day"
        :minimum-view="'day'"
        :maximum-view="'day'"
        @input="handleChangedDay"
      ></appdate-picker>
    </div>

    <div class="ind">
      <label>Highlighted Dates</label>
      <appdate-picker
        @input="dateSelected"
        :highlighted="{
          to: new Date(2020, 11, 16),
          from: new Date(2020, 10, 17),
        }"
      >
      </appdate-picker>
    </div>

    <div class="ind">
      <label>Month View</label>
      <appdate-picker
        placeholder="Select Month"
        :value="new Date()"
        :minimum-view="'month'"
        :maximum-view="'month'"
        @changedMonth="handleChangedMonth"
      ></appdate-picker>
    </div>

    <div class="ind">
      <label>Month View</label>
      <appdate-picker
        :full-month-name="true"
        placeholder="Select Month"
        :value="new Date()"
        :minimum-view="'month'"
        :maximum-view="'month'"
        @changedMonth="handleChangedMonth"
      ></appdate-picker>
    </div>

    <div class="ind">
      <label>Year View</label>
      <appdate-picker
        placeholder="Select Year"
        :value="new Date()"
        :minimum-view="'year'"
        :maximum-view="'year'"
        @changedYear="handleChangedYear"
      ></appdate-picker>
    </div>

    <div class="ind">
      <label>Calendar Color </label>
      <appdate-picker
        :full-month-name="true"
        input-class="customClass"
        placeholder="Select Date"
        @input="dateSelected"
        iconColor="red"
        :iconHeight="18"
        :iconWidth="18"
      >
      </appdate-picker>
    </div>

    <div class="ind">
      <label>Inline </label>
      <appdate-picker :inline="true" @input="dateSelected"></appdate-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Datepicker from './components/datepicker/Datepicker.vue';

export default defineComponent({
  name: 'App-Home',
  components: {
    'appdate-picker': Datepicker,
  },
  data() {
    return {
      defaultValue: new Date(),
      dateValue: new Date(),
      disabledDates: {
        to: new Date(2020, 11, 16),
        from: new Date(2020, 10, 17),
      },
      highlightDates: {
        to: new Date(2020, 12, 16),
        from: new Date(2020, 11, 17),
      },
      initialDate: new Date(),
      dateinput: new Date(),
      emptyDate: null,
    };
  },
  computed: {},
  methods: {
    handleCalendarClose(payload: string | Date): void {
      console.log('close', payload);
    },
    handleSelectDate(payload: string | Date): void {
      console.log('select', payload);
    },
    handleChangedMonth(payload: any): void {
      console.log(payload);
    },
    handleChangedYear(payload: any): void {
      console.log(payload);
    },
    handleChangedDay(payload: any): void {
      console.log(payload);
    },
    dateSelected(payload: Date | string): void {
      console.log(payload);
    },
    checkDatePicker(): void {
      const { selectedDate } = this.$refs.inputRef as any;
      console.log(selectedDate);
    },
    changedVmodel(): void {
      this.dateinput = new Date('2020-12-12');
    },
    changeDefaultValue(): void {
      this.defaultValue = new Date('2021-10-10');
    },
  },
});
</script>
<style scoped>
.page-head {
  background-color: #2f9668;
  text-align: center;
  margin-bottom: 30px;
}
.page-head h1 {
  color: #fff;
  font-size: 25px;
  padding: 20px;
  margin: 0px;
}

button {
  background-color: #40b983;
  border: none;
  font-size: 15px;
  color: #fff;
  padding: 13px 15px;
  cursor: pointer;
  margin-top: 10px;
  outline: none;
  border-radius: 5px;
  width: 200px;
  transition: 0.45s;
}
button:hover {
  background-color: #2f9668;
}
input {
  outline: none;
}

label {
  text-align: left;
  margin: 10px 0px;
  display: block;
  font-size: 14px;
}
.ind {
  min-width: 30%;
  padding: 20px;
}
.wrapper {
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
