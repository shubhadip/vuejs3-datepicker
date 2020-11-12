<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      V-Model
    </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker v-model="dateinput" @update:modelValue="dateSelected" />
        <div class="change-btn">
          <button @click="changeValue">Change Value</button>
          <p>UpdateValue : {{ dateinput }}</p>
        </div>
      </div>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/Datepicker.vue';

export default defineComponent({
  name: 'VModel',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const dateinput = ref(new Date());
    const template = `<appdate-picker
  v-model="dateinput" 
  @update:modelValue="dateSelected"
/>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
  export default {
    setup(){
      const dateinput = ref(new Date())
      function dateSelected(payload : Date): void {
        console.log(payload);
      }
      return {dateinput,dateSelected}
    }
  }
  <script>`;
    /**
     * Handler to change value od v-model
     */
    function changeValue(): void {
      dateinput.value = new Date('2021-01-01');
    }

    /**
     * Handler for select-day function
     */
    function dateSelected(payload: Date): void {
      console.log(payload);
    }

    return {
      dateinput,
      changeValue,
      dateSelected,
      template,
      script,
    };
  },
});
</script>
