<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label> Typeable</template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker
          v-model="dateSelected"
          @input="handleValue"
          :input-class="customClass"
          placeholder="dd.MM.yyyy"
          language="ru"
          theme="red"
          wrapperClass="inputClass"
          format="dd.MM.yyyy"
          :typeable="true"
          :clear-button="true"
          :hideInput="false"
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
  name: 'Typeable',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const dateSelected = ref(new Date());
    const customClass = 'customClass';
    const template = `<template>
    <appdate-picker
      input-class="customClass"
      :format="'dd.MM.yyyy'"
      placeholder="dd.MM.yyyy"
      :typeable="true"
      :clear-button="true"
      :hideInput="false"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
  export default {
    setup(){
      const dateSelected = ref(new Date())
      /**
         * Handler for select-day function
         */
        function handleValue(payload: Date): void {
          console.log('handleValue', payload);
        }
      return {
        dateSelected,
        handleValue
      }
    }
  }
  <script>`;

    /**
     * Handler for select-day function
     */
    function handleValue(payload: Date): void {
      console.log('handleValue', payload);
    }

    return {
      dateSelected,
      template,
      script,
      customClass,
      handleValue,
    };
  },
});
</script>
