/* eslint-disable */
import hljs from 'highlight.js';

const Highlight = {
  deep: true,
  beforeMount: function bind(el: any, binding: any) {
    // on first bind, highlight all targets
    debugger
    var targets = el.querySelectorAll('code');
    var target;
    var i;

    for (i = 0; i < targets.length; i += 1) {
      target = targets[i];

      if (typeof binding.value === 'string') {
        // if a value is directly assigned to the directive, use this
        // instead of the element content.
        target.textContent = binding.value;
      }

      hljs.highlightBlock(target);
    }
  },
  updated: function componentUpdated(el: any, binding: any) {
    // after an update, re-fill the content and then highlight
    var targets = el.querySelectorAll('code');
    var target;
    var i;

    for (i = 0; i < targets.length; i += 1) {
      target = targets[i];
      if (typeof binding.value === 'string') {
        target.textContent = binding.value;
      }
      hljs.highlightBlock(target);
    }
  }
}
export default Highlight;