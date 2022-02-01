<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      Disabled
    </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker
          placeholder="Select Date"
          @input="dateSelected"
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
import Datepicker from '../datepicker/Datepicker.vue';

export default defineComponent({
  name: 'Disabled',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const dateSelected = ref(new Date());
    const preventDisableDateSelection = true;
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
      const dateSelected = ref(new Date())
      const preventDisableDateSelection = true
      return {
        dateSelected,
        preventDisableDateSelection
      }
    }
  }
  <script>`;
    return {
      script,
      template,
      dateSelected,
      preventDisableDateSelection,
    };
  },
});
</script>
