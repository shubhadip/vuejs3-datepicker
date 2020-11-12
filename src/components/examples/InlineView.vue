<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      Inline View
    </template>
    <template v-slot:content>
      <appdate-picker :inline="true"></appdate-picker>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/Datepicker.vue';

export default defineComponent({
  name: 'InlineView',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const template = `<template>
    <appdate-picker
      inline="true"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  export default {
    setup(){
      return {}
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
