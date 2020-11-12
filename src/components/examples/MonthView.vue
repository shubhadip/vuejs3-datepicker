<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      Month View
    </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker
          :full-month-name="true"
          placeholder="Select Month"
          :minimum-view="'month'"
          :maximum-view="'month'"
          @changedMonth="handleChangedMonth"
        >
        </appdate-picker>
      </div>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/Datepicker.vue';

export default defineComponent({
  name: 'MonthView',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const template = `<template>
    <appdate-picker
      placeholder="Select Month"
      :minimum-view="'month'"
      :maximum-view="'month'"
      @changedMonth="handleChangedMonth"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  export default {
    setup(){
      function handleChangedMonth(payload) {
        console.log( payload )
      }
      return {handleChangedMonth}
    }
  }
  <script>`;
    /**
     * Handler for select-month function
     */
    function handleChangedMonth(payload: Date): void {
      console.log('selectedMonth', payload);
    }

    return {
      template,
      script,
      handleChangedMonth,
    };
  },
});
</script>
