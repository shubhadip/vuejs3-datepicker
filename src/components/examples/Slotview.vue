<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label> Custom Slots </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker placeholder="Select Date" @input="dateSelected" :value="defaultValue">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width="10"
              height="10"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </template>
          <template v-slot:belowDate>
            <p>Below Date Input</p>
          </template>
          <template v-slot:customCalendarHeader>
            <p>Custom Calendar Header</p>
          </template>
        </appdate-picker>
      </div>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/Datepicker.vue';

export default defineComponent({
  name: 'Slot View',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const defaultValue = ref(new Date());
    const template = `<template>
    <appdate-picker
      placeholder="Select Date"
      @input="dateSelected"
      :value="defaultValue"
    >
    <template v-slot:belowDate>
      <p>Below Date Input</p>
    </template>
    <template v-slot:customCalendarHeader>
      <p>Before Calendar Header Slot</p>
    </template>
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
  export default {
    setup(){
      const defaultValue = ref(new Date())
      function dateSelected(payload: Date): void {
        console.log('dateSelected', payload)
      }
      return {
        dateSelected,
        defaultValue
      }
    }
  }
  <script>`;
    /**
     * Change default Value of ref
     */
    function changeDefaultValue(): void {
      defaultValue.value = new Date('2021-10-10');
    }
    /**
     * Handler for select-day function
     */
    function dateSelected(payload: Date): void {
      console.log('dateSelected', payload);
    }

    return {
      script,
      template,
      defaultValue,
      dateSelected,
      changeDefaultValue,
    };
  },
});
</script>
