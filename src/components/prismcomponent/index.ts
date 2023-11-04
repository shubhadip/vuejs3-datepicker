import * as Vue from 'vue';
import Prism from 'prismjs';
import { Slots, VNode } from 'vue';

declare type Data = Record<string, unknown>;

export default Vue.defineComponent({
  functional: true,
  props: {
    code: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'markup',
    },
  },
  setup(props, { slots, attrs }: { slots: Slots; attrs: Data }) {
    const { h } = Vue;
    const slotsData = (slots && slots.default && slots.default()) || [];
    const code = props.code || (slotsData.length > 0 ? slotsData[0].children : '');
    const { inline, language } = props;
    const className = `language-${language}`;

    if (inline) {
      return (): VNode =>
        h('code', {
          ...attrs,
          class: [attrs.class, className],
          innerHTML: Prism.highlight(code as string, Prism.languages.javascript, language),
        });
    }

    const d = Prism.highlight(code as string, Prism.languages.javascript, language);
    return (): VNode =>
      h('pre', { ...attrs, class: [attrs.class, className] }, [
        h('code', {
          class: className,
          innerHTML: d,
        }),
      ]);
  },
});
