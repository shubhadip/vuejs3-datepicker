/* eslint-disable */
const EVENTS = ['click'];

const instances: any = [];

const ClickOutside = {
  instances,
  beforeMount: bind,
  update: (el : any, binding : any) => {
    if (JSON.stringify(binding.value) === JSON.stringify(binding.oldValue)) return;
    bind(el, binding);
  },
  unmounted: unbind,
};

function bind (el: any, { value }: {value : any}) {
  unbind(el);

  const bindingValue = value as any;
  const isFunction = typeof bindingValue === 'function';
  const isObject = typeof bindingValue === 'object';

  if (!isFunction && !isObject) return;

  const isActive = !(bindingValue.isActive === false);
  if (!isActive) return;

  const handler = isFunction ? bindingValue : bindingValue.handler;
  const instance = createInstance({ el, handler });

  instance.eventHandlers.forEach(({ event, handler }) =>
    setTimeout(() => document.addEventListener(event, handler, false), 0),
  );
  instances.push(instance);
}

function unbind (el: HTMLElement) {
  const instanceIndex = instances.findIndex(( instance : any) => instance.el === el);
  if (instanceIndex === -1) return;

  const instance = instances[instanceIndex];
  instance.eventHandlers.forEach(({ event, handler }: { event: any, handler: any}) =>
    document.removeEventListener(event as any, handler, false),
  );
  instances.splice(instanceIndex, 1);
}

// --------------------
// Helpers
// --------------------
function createInstance ({ el, handler }: { el: HTMLElement, handler: any}) {
  return {
    el,
    eventHandlers: EVENTS.map(eventName => ({
      event: eventName,
      handler: (event: Event) => onEvent({ event, el, handler }),
    })),
  };
}

function onEvent ({ event, el, handler }: { event: any, el: Element, handler: any }) {
  debugger
  const path = event.path || (event.composedPath ? event.composedPath() : undefined);
  if (path ? path.indexOf(el) < 0 : !el.contains(event.target)) {
    return handler(event, el);
  }
};

export default ClickOutside;
/* eslint-disable */