<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      Year View
    </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker placeholder="Select Year" :minimum-view="'year'" :maximum-view="'year'"> </appdate-picker>
      </div>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/Datepicker.vue';

export default defineComponent({
  name: 'YearView',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const template = `<template>
    <appdate-picker
      placeholder="Select Year"
      :minimum-view="'year'"
      :maximum-view="'year'"
      @changedYear="handleChangedYear"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  export default {
    setup(){
      function handleChangedYear(payload) {
        console.log( payload )
      }
      return {handleChangedYear}
    }
  }
  <script>`;

    return {
      template,
      script,
    };
  },
});
</script>
