<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label> Date as String </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker placeholder="Select Date" @input="dateSelected" value="2020-12-16"> </appdate-picker>
      </div>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/Datepicker.vue';

export default defineComponent({
  name: 'DefaultValue',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const template = `<template>
    <appdate-picker
      placeholder="Select Date"
      @input="dateSelected"
      value="2020-12-16"
    >
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
     * Handler for select-day function
     */
    function dateSelected(payload: Date): void {
      console.log('dateSelected', payload);
    }

    return {
      script,
      template,
      dateSelected,
    };
  },
});
</script>
