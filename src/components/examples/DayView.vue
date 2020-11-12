<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      Day View
    </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker placeholder="Select Day" :minimum-view="'day'" :maximum-view="'day'" @input="handleChangedDay">
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
  name: 'DayView',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const template = `<template>
    <appdate-picker
      placeholder="Select Day"
      :minimum-view="'day'"
      :maximum-view="'day'"
      @input="handleChangedDay"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  export default {
    setup(){
      function handleChangedDay(payload) {
        console.log( payload )
      }
      return {handleChangedDay}
    }
  }
  <script>`;
    /**
     * Handler for select-day function
     */
    function handleChangedDay(payload: Date): void {
      console.log('selectedDay', payload);
    }
    return {
      template,
      script,
      handleChangedDay,
    };
  },
});
</script>
