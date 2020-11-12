<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      Typeable
    </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker
          :input-class="customClass"
          placeholder="YYYY-MM-DD"
          :typeable="true"
          :hideInput="false"
          @input="dateSelected"
        >
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
  name: 'Typeable',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const dateSelected = ref<Date>(new Date());
    const customClass = 'customClass';
    const template = `<template>
    <appdate-picker
      :full-month-name="true"
      input-class="customClass"
      placeholder="YYYY-MM-DD"
      :typeable="true"
      :hideInput="false"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
  export default {
    setup(){
      const dateSelected = ref(new Date())
      return {
        dateSelected
      }
    }
  }
  <script>`;
    return {
      dateSelected,
      template,
      script,
      customClass,
    };
  },
});
</script>
