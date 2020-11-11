/* eslint-disable */

import * as Vue from 'vue';
import Prism from 'prismjs'

export default {
  functional: true,
  props: {
    code: {
      type: String
    },
    inline: {
      type: Boolean,
      default: false
    },
    language: {
      type: String,
      default: 'markup'
    }
  },
  render({$props, $data, $slots}: {$props: any, $data:any, $slots: any}) {
    
    const { h } = Vue;
    
    const code =
      $props.code ||
      ($slots.default() && $slots.default().length > 0 ? $slots.default()[0].children : '')
    const inline = $props.inline
    const language = $props.language
    const prismLanguage = Prism.languages[language]
    const className = `language-${language}`
    
    if (process.env.NODE_ENV === 'development' && !prismLanguage) {
      throw new Error(
        `Prism component for language "${language}" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/`
      )
    }

    if (inline) {
      console.log(Prism.highlight(code, prismLanguage))
      return h(
        'code',
        Object.assign({}, $data, {
          class: [$data.class, className],
          innerHTML: Prism.highlight(code, prismLanguage)
        })
      )
    }

    const d = Prism.highlight(code, prismLanguage)
    return h(
      'pre',
      Object.assign({}, $data, {
        class: [$data.class, className]
      }),
      [
        h('code', {
          class: className,
          innerHTML: d
        })
      ]
    )
  }
}
/* eslint-enable */
