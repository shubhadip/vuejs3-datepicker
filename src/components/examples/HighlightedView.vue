<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label> Highlighted View </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker
          placeholder="Select Date"
          :highlighted="{
            to: new Date(2020, 11, 16),
            from: new Date(2020, 10, 17),
          }"
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
  name: 'HighlightedView',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const dateSelected = ref(new Date());
    const template = `<template>
    <appdate-picker
      placeholder="Select Date"
        :highlighted="{
          to: new Date(2020, 11, 16),
          from: new Date(2020, 10, 17),
        }"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
  export default {
    setup(){
      return {
      }
    }
  }
  <script>`;
    return {
      script,
      template,
      dateSelected,
    };
  },
});
</script>
