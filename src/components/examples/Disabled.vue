<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label> Disabled </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker
          placeholder="Select Date"
          @input="dateSelected"
          :value="defaultValue"
          :openDate="new Date('2020-11-06')"
          :disabled-dates="{
            to: new Date(2020, 10, 5),
            from: new Date(2020, 10, 16),
            dates: [new Date(2020, 10, 10), new Date(2020, 10, 11)],
          }"
          :prevent-disable-date-selection="preventDisableDateSelection"
        >
        </appdate-picker>
      </div>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/DatePickerComponent.vue';

export default defineComponent({
  name: 'Disabled',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const defaultValue = ref(new Date());
    const preventDisableDateSelection = true;
    /**
     * Handler for select-day function
     */
    function dateSelected(payload: Date): void {
      console.log('dateSelected', payload);
    }

    const template = `<template>
    <appdate-picker
      placeholder="Select Date"
      :disabled-dates="{
        to: new Date(2020, 10, 5),
        from: new Date(2020, 10, 16),
        dates: [
            new Date(2020, 10, 10),
            new Date(2020, 10, 11),
          ],
      }"
      :prevent-disable-date-selection="preventDisableDateSelection"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
  export default {
    setup(){
      const defaultValue = ref(new Date())
      /**
         * Handler for select-day function
         */
        function dateSelected(payload: Date): void {
          console.log('dateSelected', payload);
        }
      const preventDisableDateSelection = true
      return {
        dateSelected,
        defaultValue
        preventDisableDateSelection
      }
    }
  }
  <script>`;
    return {
      script,
      template,
      dateSelected,
      defaultValue,
      preventDisableDateSelection,
    };
  },
});
</script>
