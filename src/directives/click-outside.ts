/* eslint-disable */
// https://github.com/simplesmiler/vue-clickaway
// https://github.com/ndelvalle/v-click-outside/blob/master/lib/v-click-outside.js
// Mixed both :)

const EVENTS = ['click'];

const instances: any[] = [];

const ClickOutside = {
  instances,
  beforeMount: bind,
  update: (el: any, binding: any) => {
    if (JSON.stringify(binding.value) === JSON.stringify(binding.oldValue)) return;
    bind(el, binding);
  },
  unmounted: unbind,
};

function bind(el: any, { value }: { value: any }) {
  unbind(el);

  const bindingValue = value;
  const isFunction = typeof bindingValue === 'function';
  const isObject = typeof bindingValue === 'object';

  if (!isFunction && !isObject) return;

  const isActive = !(bindingValue.isActive === false);
  if (!isActive) return;

  const handler = isFunction ? bindingValue : bindingValue.handler;
  const instance = createInstance({ el, handler });

  instance.eventHandlers.forEach(({ event, handler }) =>
    setTimeout(() => document.addEventListener(event, handler, false), 0)
  );
  instances.push(instance);
}

function unbind(el: any) {
  const instanceIndex = instances.findIndex((instance) => instance.el === el);
  if (instanceIndex === -1) return;

  const instance = instances[instanceIndex];
  instance.eventHandlers.forEach(({ event, handler }: { event: any; handler: any }) =>
    document.removeEventListener(event, handler, false)
  );
  instances.splice(instanceIndex, 1);
}

// --------------------
// Helpers
// --------------------
function createInstance({ el, handler }: { el: any; handler: any }) {
  return {
    el,
    eventHandlers: EVENTS.map((eventName) => ({
      event: eventName,
      handler: (event: any) => onEvent({ event, el, handler }),
    })),
  };
}

function onEvent({ event, el, handler }: { event: any; el: any; handler: any }) {
  const path = event.path || (event.composedPath ? event.composedPath() : undefined);
  if (path ? path.indexOf(el) < 0 : !el.contains(event.target)) {
    return handler && handler(event, el);
  }
}

export default ClickOutside;
