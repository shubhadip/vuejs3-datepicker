<template>
<div id="app">
    <div  class="ind">
      <label>Typeable</label>
      <appdate-picker :full-month-name="true" input-class="customClass" placeholder="select date" :typeable="true" :hideInput="false" @input="dateSelected">
      </appdate-picker>
    </div>

  <div class="wrapper">

    <div class="ind">
    <label>With Validations</label>
      <appdate-picker
        :autoValidate="true"
        @selected="handleSelectDate"
        :highlighted="highlightDates"
        :value="emptyDate"
        @closed="handleCalendarClose"
        :validations="validations"
      />
    </div>

    <div class="ind">
    <label>With Programmatic Access</label>
      <appdate-picker
        ref="inputRef"
        :autoValidate="true"
        @selected="handleSelectDate"
        :highlighted="highlightDates"
        :value="emptyDate"
        @closed="handleCalendarClose"
        :validations="validations"
      />
      <button @click="checkDatePicker">Check DatePicker</button>
    </div>

    <div class="ind">
      <label>Default Value</label>
      <appdate-picker @input="dateSelected" :value="defaultValue" :disabled-dates="{
          dates: [new Date(2020, 10, 16), new Date(2020, 10, 17), new Date(2020, 10, 18)],
        }" :highlighted="{
          to: new Date(2020, 12, 16),
          from: new Date(2020, 11, 17),
        }"></appdate-picker>
        <button @click="changeDefaultValue">Change Default Value</button>
    </div>  
      <div  class="ind">
        <label> Disabled: from-to </label>
        <appdate-picker @input="dateSelected" :disabled-dates="{
          to: new Date(2020, 10, 5),
          from: new Date(2020, 10, 16),
        }" ></appdate-picker>
      </div>
      <div  class="ind">   
      <label> Disabled Dates : Array </label>
        <appdate-picker @input="dateSelected" :disabled-dates="{
          dates: [new Date(2020, 11, 16), new Date(2020, 11, 17), new Date(2020, 11, 18),
          new Date(2020, 11, 19),new Date(2020, 11, 20)],
          }" ></appdate-picker>
      </div>
    </div>
    <div  class="ind">
      <label>Highlighted Dates</label>
      <appdate-picker 
        @input="dateSelected" 
          :highlighted="{
          to: new Date(2020, 11, 16),
          from: new Date(2020, 10, 17),
        }">
      </appdate-picker>
    </div>
    
    <div class="ind" style="flex-direction: column">
      <div style="justify-content: space-between;display: flex;width: 100%;">
        <label>V Model</label>
        <appdate-picker v-model="dateinput" @update:modelValue="dateSelected"></appdate-picker>
      </div>
      <br/>
      <div>{{dateinput}}</div>
      <button @click="changedVmodel">Change Date Input</button>
    </div>

    <div  class="ind">
      <label>Inline </label>
      <appdate-picker :inline="true" @input="dateSelected"></appdate-picker>
    </div>

    <div  class="ind">
      <label>Day View</label>
      <appdate-picker :minimum-view='"day"' :maximum-view='"day"' @input="handleChangedDay"></appdate-picker>
    </div>

    <div  class="ind">
      <label>Month View</label>
      <appdate-picker :value="new Date()" :minimum-view='"month"' 
        :maximum-view='"month"' @changedMonth="handleChangedMonth"></appdate-picker>
    </div>

    <div  class="ind">
      <label>Year View</label>
      <appdate-picker :value="new Date()" :minimum-view='"year"' :maximum-view='"year"' @changedYear="handleChangedYear"></appdate-picker>
    </div>

    <div  class="ind">
      <label>Year View</label>
      <appdate-picker :value="new Date()" :minimum-view='"year"' :maximum-view='"year"' 
        @changedYear="handleChangedYear"></appdate-picker>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref
} from 'vue';
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
        from: new Date(2020, 10, 17)
      },
      highlightDates: {
        to: new Date(2020, 12, 16),
        from: new Date(2020, 11, 17),
      },
      initialDate: new Date(),
      dateinput: new Date(),
      validations: [
        {
          name: 'required',
          message: 'Oh, we can’t proceed without value. Do your bit?',
        },
      ],
      emptyDate: null
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
      console.log(payload)
    },
    handleChangedYear(payload: any): void {
      console.log(payload)
    },
    handleChangedDay(payload: any): void {
      console.log(payload)
    },
    dateSelected(payload: Date| string) : void{
      console.log(payload);
    },
    checkDatePicker(): void {
      const isValid = (this.$refs.inputRef as any).isValid();
      const { selectedDate } = this.$refs.inputRef as any;
      console.log(isValid);
      console.log(selectedDate);
    },
    changedVmodel(): void {
      this.dateinput = new Date('2020-12-12')
    },
    changeDefaultValue(): void {
      this.defaultValue = new Date('2021-10-10')
    }
  },
});
</script>
<style scoped>
    .ind {
      display: flex;
      align-items: center;
      max-width: 400px;
      padding: 20px;
      justify-content: space-between;
    }
    .wrapper{
      display: flex;
      flex-direction: column;
    }
</style>
