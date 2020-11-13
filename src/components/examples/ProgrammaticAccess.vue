<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      Programmatic Access
    </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker
          :ref="
            (el) => {
              inputRef = el;
            }
          "
        >
        </appdate-picker>
        <div class="change-btn">
          <button @click="accessDatePicker">Access DatePicker</button>
          <p>Value : {{ accessValue }}</p>
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
  name: 'ProgrammaticAccess',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const template = `<appdate-picker
        :ref="(el) => {
          inputRef = el;
        }"
      >
      </appdate-picker>
      <div class="change-btn">
        <button @click="accessDatePicker">
          Access DatePicker
        </button>
      </div>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
  export default {
    setup(){
      const inputRef = ref(null);
      function accessDatePicker(): void {
        (inputRef.value).value
      }
      return {inputRef,accessDatePicker}
    }
  }
  <script>`;
    const inputRef = ref<typeof Datepicker | null>(null);
    const accessValue = ref<Date | null>(null);
    /**
     * Handler for programmatic access of selected date
     */
    function accessDatePicker(): void {
      const value = ((inputRef.value as unknown) as InstanceType<typeof Datepicker>).selectedDate;
      accessValue.value = value as Date;
    }

    return {
      inputRef,
      template,
      script,
      accessDatePicker,
      accessValue,
    };
  },
});
</script>
