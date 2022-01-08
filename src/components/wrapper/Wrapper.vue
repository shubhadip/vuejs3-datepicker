<template>
  <div class="container">
    <label class="slot-label">
      <slot name="label"></slot>
    </label>
    <div class="code-block">
      <Prism language="javascript" class="codesnippet">
        {{ $props.templatecontent }}
      </Prism>
      <Prism language="javascript" class="codesnippet">
        {{ $props.scriptcontent }}
      </Prism>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Prism from '../prismcomponent';
import 'prismjs';
import 'prismjs/themes/prism.css';

export default defineComponent({
  name: 'Wrapper',
  components: {
    Prism,
  },
  props: {
    customClass: {
      type: String,
      default: '',
    },
    scriptcontent: {
      type: String,
      default: '',
      required: true,
    },
    templatecontent: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup() {
    const code1 = `const c = a+b`;
    return {
      code1,
    };
  },
});
</script>
<style scoped>
.codesnippet {
  width: 48%;
  border: 1px solid #222;
  border-radius: 5px;
}

.container {
  background-color: #f6f7f6;
  margin-top: 20px;
  padding: 25px;
  border-radius: 10px;
}

label {
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
  font-weight: bold;
}
</style>
