<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label>
      Calendar Icon Details
    </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker placeholder="Select Date" iconColor="red" :iconHeight="18" :iconWidth="18"> </appdate-picker>
      </div>
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
      placeholder="Select Date"
      :iconColor="color"
      :iconHeight="height"
      :iconWidth="width"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  export default {
    setup(){
      const color = 'red';
      const height = '18';
      const width = '18';
      return {color,width,height}
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
