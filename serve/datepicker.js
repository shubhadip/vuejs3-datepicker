var _ErrorTypeStrings;

function _ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (l, r) {
  if (l.getElementById('livereloadscript')) return;
  r = l.createElement('script');
  r.async = 1;
  r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
  r.id = 'livereloadscript';
  l.getElementsByTagName('head')[0].appendChild(r);
})(window.document);
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}

var GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
var isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */

var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);

function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};

    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);

      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  var ret = {};
  cssText.split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function normalizeClass(value) {
  var res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      res += normalizeClass(value[i]) + ' ';
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object.keys(a).length;
    var bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(function (item) {
    return looseEqual(item, val);
  });
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


var toDisplayString = function toDisplayString(val) {
  return val == null ? '' : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = function replacer(_key, val) {
  if (isMap(val)) {
    return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};

var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);

var NOOP = function NOOP() {};
/**
 * Always return false.
 */


var NO = function NO() {
  return false;
};

var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};

var extend = Object.assign;

var remove = function remove(arr, el) {
  var i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};

var isDate = function isDate(val) {
  return val instanceof Date;
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */

var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
}); // compare whether a value has changed, accounting for NaN.

var hasChanged = function hasChanged(value, oldValue) {
  return value !== oldValue && (value === value || oldValue === oldValue);
};

var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};

var toNumber = function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
};

var targetMap = new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol('iterate');
var MAP_KEY_ITERATE_KEY = Symbol('Map key iterate');

function isEffect(fn) {
  return fn && fn._isEffect === true;
}

function effect(fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EMPTY_OBJ;

  if (isEffect(fn)) {
    fn = fn.raw;
  }

  var effect = createReactiveEffect(fn, options);

  if (!options.lazy) {
    effect();
  }

  return effect;
}

function stop(effect) {
  if (effect.active) {
    cleanup(effect);

    if (effect.options.onStop) {
      effect.options.onStop();
    }

    effect.active = false;
  }
}

var uid = 0;

function createReactiveEffect(fn, options) {
  var effect = function reactiveEffect() {
    if (!effect.active) {
      return options.scheduler ? undefined : fn();
    }

    if (!effectStack.includes(effect)) {
      cleanup(effect);

      try {
        enableTracking();
        effectStack.push(effect);
        activeEffect = effect;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };

  effect.id = uid++;
  effect.allowRecurse = !!options.allowRecurse;
  effect._isEffect = true;
  effect.active = true;
  effect.raw = fn;
  effect.deps = [];
  effect.options = options;
  return effect;
}

function cleanup(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }

    deps.length = 0;
  }
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (!shouldTrack || activeEffect === undefined) {
    return;
  }

  var depsMap = targetMap.get(target);

  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }

  var dep = depsMap.get(key);

  if (!dep) {
    depsMap.set(key, dep = new Set());
  }

  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if (activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target: target,
        type: type,
        key: key
      });
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var effects = new Set();

  var add = function add(effectsToAdd) {
    if (effectsToAdd) {
      effectsToAdd.forEach(function (effect) {
        if (effect !== activeEffect || effect.allowRecurse) {
          effects.add(effect);
        }
      });
    }
  };

  if (type === "clear"
  /* CLEAR */
  ) {
      // collection being cleared
      // trigger all effects for target
      depsMap.forEach(add);
    } else if (key === 'length' && isArray(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        add(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      add(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!isArray(target)) {
          add(depsMap.get(ITERATE_KEY));

          if (isMap(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          // new index added to array -> length changes
          add(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!isArray(target)) {
          add(depsMap.get(ITERATE_KEY));

          if (isMap(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if (isMap(target)) {
          add(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var run = function run(effect) {
    if (effect.options.onTrigger) {
      effect.options.onTrigger({
        effect: effect,
        target: target,
        key: key,
        type: type,
        newValue: newValue,
        oldValue: oldValue,
        oldTarget: oldTarget
      });
    }

    if (effect.options.scheduler) {
      effect.options.scheduler(effect);
    } else {
      effect();
    }
  };

  effects.forEach(run);
}

var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
  return Symbol[key];
}).filter(isSymbol));
var get = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
  var method = Array.prototype[key];

  arrayInstrumentations[key] = function () {
    var arr = toRaw(this);

    for (var i = 0, l = this.length; i < l; i++) {
      track(arr, "get"
      /* GET */
      , i + '');
    } // we run the method using the original args first (which may be reactive)


    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var res = method.apply(arr, args);

    if (res === -1 || res === false) {
      // if that didn't work, run it again using raw values.
      return method.apply(arr, args.map(toRaw));
    } else {
      return res;
    }
  };
});
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
  var method = Array.prototype[key];

  arrayInstrumentations[key] = function () {
    pauseTracking();

    for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var res = method.apply(this, args);
    resetTracking();
    return res;
  };
});

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
        return isReadonly;
      } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = isArray(target);

    if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if (isSymbol(key) ? builtInSymbols.has(key) : key === "__proto__" || key === "__v_isRef") {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      var shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }

    if (isObject(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (!shallow) {
      value = toRaw(value);

      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = hasOwn(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , isArray(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    {
      console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    {
      console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }
    return true;
  }
};
var shallowReactiveHandlers = extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

var toReactive = function toReactive(value) {
  return isObject(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return isObject(value) ? readonly(value) : value;
};

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get"
    /* GET */
    , key);
  }

  !isReadonly && track(rawTarget, "get"
  /* GET */
  , rawKey);

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has"
    /* HAS */
    , key);
  }

  !isReadonly && track(rawTarget, "has"
  /* HAS */
  , rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);
  var result = target.add(value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return result;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  var result = target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return result;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target.delete(key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget = isMap(target) ? new Map(target) : new Set(target); // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = isMap(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return _defineProperty({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat(capitalize(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }
    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

var mutableInstrumentations = {
  get: function get(key) {
    return get$1(this, key);
  },

  get size() {
    return size(this);
  },

  has: has$1,
  add: add,
  set: set$1,
  delete: deleteEntry,
  clear: clear,
  forEach: createForEach(false, false)
};
var shallowInstrumentations = {
  get: function get(key) {
    return get$1(this, key, false, true);
  },

  get size() {
    return size(this);
  },

  has: has$1,
  add: add,
  set: set$1,
  delete: deleteEntry,
  clear: clear,
  forEach: createForEach(false, true)
};
var readonlyInstrumentations = {
  get: function get(key) {
    return get$1(this, key, true);
  },

  get size() {
    return size(this, true);
  },

  has: function has(key) {
    return has$1.call(this, key, true);
  },
  add: createReadonlyMethod("add"
  /* ADD */
  ),
  set: createReadonlyMethod("set"
  /* SET */
  ),
  delete: createReadonlyMethod("delete"
  /* DELETE */
  ),
  clear: createReadonlyMethod("clear"
  /* CLEAR */
  ),
  forEach: createForEach(true, false)
};
var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
iteratorMethods.forEach(function (method) {
  mutableInstrumentations[method] = createIterableMethod(method, false, false);
  readonlyInstrumentations[method] = createIterableMethod(method, true, false);
  shallowInstrumentations[method] = createIterableMethod(method, false, true);
});

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
        return isReadonly;
      } else if (key === "__v_raw"
    /* RAW */
    ) {
        return target;
      }

    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, false)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = toRawType(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var readonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap(toRawType(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (target && target["__v_isReadonly"
  /* IS_READONLY */
  ]) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
} // Return a reactive-copy of the original object, where only the root level
// properties are reactive, and does NOT unwrap refs nor recursively convert
// returned properties.


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
}

function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
} // Return a reactive-copy of the original object, where only the root level
// properties are readonly, and does NOT unwrap refs nor recursively convert
// returned properties.
// This is used for creating the props proxy object for stateful components.


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, readonlyCollectionHandlers);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers) {
  if (!isObject(target)) {
    {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }
    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var proxyMap = isReadonly ? readonlyMap : reactiveMap;
  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only a whitelist of value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
      return target;
    }

  var proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  return observed && toRaw(observed["__v_raw"
  /* RAW */
  ]) || observed;
}

function markRaw(value) {
  def(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

var convert = function convert(val) {
  return isObject(val) ? reactive(val) : val;
};

function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value);
}

function shallowRef(value) {
  return createRef(value, true);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(_rawValue) {
    var _shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RefImpl);

    this._rawValue = _rawValue;
    this._shallow = _shallow;
    this.__v_isRef = true;
    this._value = _shallow ? _rawValue : convert(_rawValue);
  }

  _createClass(RefImpl, [{
    key: "value",
    get: function get() {
      track(toRaw(this), "get"
      /* GET */
      , 'value');
      return this._value;
    },
    set: function set(newVal) {
      if (hasChanged(toRaw(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw(this), "set"
        /* SET */
        , 'value', newVal);
      }
    }
  }]);

  return RefImpl;
}();

function createRef(rawValue) {
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

function triggerRef(ref) {
  trigger(toRaw(ref), "set"
  /* SET */
  , 'value', ref.value);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var CustomRefImpl = /*#__PURE__*/function () {
  function CustomRefImpl(factory) {
    var _this = this;

    _classCallCheck(this, CustomRefImpl);

    this.__v_isRef = true;

    var _factory = factory(function () {
      return track(_this, "get"
      /* GET */
      , 'value');
    }, function () {
      return trigger(_this, "set"
      /* SET */
      , 'value');
    }),
        get = _factory.get,
        set = _factory.set;

    this._get = get;
    this._set = set;
  }

  _createClass(CustomRefImpl, [{
    key: "value",
    get: function get() {
      return this._get();
    },
    set: function set(newVal) {
      this._set(newVal);
    }
  }]);

  return CustomRefImpl;
}();

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if (!isProxy(object)) {
    console.warn("toRefs() expects a reactive object but received a plain one.");
  }

  var ret = isArray(object) ? new Array(object.length) : {};

  for (var key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

var ObjectRefImpl = /*#__PURE__*/function () {
  function ObjectRefImpl(_object, _key) {
    _classCallCheck(this, ObjectRefImpl);

    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }

  _createClass(ObjectRefImpl, [{
    key: "value",
    get: function get() {
      return this._object[this._key];
    },
    set: function set(newVal) {
      this._object[this._key] = newVal;
    }
  }]);

  return ObjectRefImpl;
}();

function toRef(object, key) {
  return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
}

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly) {
    var _this2 = this;

    _classCallCheck(this, ComputedRefImpl);

    this._setter = _setter;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = effect(getter, {
      lazy: true,
      scheduler: function scheduler() {
        if (!_this2._dirty) {
          _this2._dirty = true;
          trigger(toRaw(_this2), "set"
          /* SET */
          , 'value');
        }
      }
    });
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      if (this._dirty) {
        this._value = this.effect();
        this._dirty = false;
      }

      track(toRaw(this), "get"
      /* GET */
      , 'value');
      return this._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

function computed(getterOrOptions) {
  var getter;
  var setter;

  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;

    setter = function setter() {
      console.warn('Write operation failed: computed value is readonly');
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  return new ComputedRefImpl(getter, setter, isFunction(getterOrOptions) || !getterOrOptions.set);
}

var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  pauseTracking();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11
    /* APP_WARN_HANDLER */
    , [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref6) {
      var vnode = _ref6.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;

    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */

    if (trace.length && // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(_toConsumableArray(formatTrace(trace))));
    }

    (_console = console).warn.apply(_console, _toConsumableArray(warnArgs));
  }

  resetTracking();
}

function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  } // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.


  var normalizedStack = [];

  while (currentVNode) {
    var last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}
/* istanbul ignore next */


function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, _toConsumableArray(i === 0 ? [] : ["\n"]).concat(_toConsumableArray(formatTraceEntry(entry))));
  });
  return logs;
}

function formatTraceEntry(_ref7) {
  var vnode = _ref7.vnode,
      recurseCount = _ref7.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(_toConsumableArray(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */


function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, _toConsumableArray(formatProp(key, props[key])));
  });

  if (keys.length > 3) {
    res.push(" ...");
  }

  return res;
}
/* istanbul ignore next */


function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if (isFunction(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = toRaw(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, _defineProperty(_ErrorTypeStrings, "bc"
/* BEFORE_CREATE */
, 'beforeCreate hook'), _defineProperty(_ErrorTypeStrings, "c"
/* CREATED */
, 'created hook'), _defineProperty(_ErrorTypeStrings, "bm"
/* BEFORE_MOUNT */
, 'beforeMount hook'), _defineProperty(_ErrorTypeStrings, "m"
/* MOUNTED */
, 'mounted hook'), _defineProperty(_ErrorTypeStrings, "bu"
/* BEFORE_UPDATE */
, 'beforeUpdate hook'), _defineProperty(_ErrorTypeStrings, "u"
/* UPDATED */
, 'updated'), _defineProperty(_ErrorTypeStrings, "bum"
/* BEFORE_UNMOUNT */
, 'beforeUnmount hook'), _defineProperty(_ErrorTypeStrings, "um"
/* UNMOUNTED */
, 'unmounted hook'), _defineProperty(_ErrorTypeStrings, "a"
/* ACTIVATED */
, 'activated hook'), _defineProperty(_ErrorTypeStrings, "da"
/* DEACTIVATED */
, 'deactivated hook'), _defineProperty(_ErrorTypeStrings, "ec"
/* ERROR_CAPTURED */
, 'errorCaptured hook'), _defineProperty(_ErrorTypeStrings, "rtc"
/* RENDER_TRACKED */
, 'renderTracked hook'), _defineProperty(_ErrorTypeStrings, "rtg"
/* RENDER_TRIGGERED */
, 'renderTriggered hook'), _defineProperty(_ErrorTypeStrings, 0
/* SETUP_FUNCTION */
, 'setup function'), _defineProperty(_ErrorTypeStrings, 1
/* RENDER_FUNCTION */
, 'render function'), _defineProperty(_ErrorTypeStrings, 2
/* WATCH_GETTER */
, 'watcher getter'), _defineProperty(_ErrorTypeStrings, 3
/* WATCH_CALLBACK */
, 'watcher callback'), _defineProperty(_ErrorTypeStrings, 4
/* WATCH_CLEANUP */
, 'watcher cleanup function'), _defineProperty(_ErrorTypeStrings, 5
/* NATIVE_EVENT_HANDLER */
, 'native event handler'), _defineProperty(_ErrorTypeStrings, 6
/* COMPONENT_EVENT_HANDLER */
, 'component event handler'), _defineProperty(_ErrorTypeStrings, 7
/* VNODE_HOOK */
, 'vnode hook'), _defineProperty(_ErrorTypeStrings, 8
/* DIRECTIVE_HOOK */
, 'directive hook'), _defineProperty(_ErrorTypeStrings, 9
/* TRANSITION_HOOK */
, 'transition hook'), _defineProperty(_ErrorTypeStrings, 10
/* APP_ERROR_HANDLER */
, 'app errorHandler'), _defineProperty(_ErrorTypeStrings, 11
/* APP_WARN_HANDLER */
, 'app warnHandler'), _defineProperty(_ErrorTypeStrings, 12
/* FUNCTION_REF */
, 'ref function'), _defineProperty(_ErrorTypeStrings, 13
/* ASYNC_COMPONENT_LOADER */
, 'async component loader'), _defineProperty(_ErrorTypeStrings, 14
/* SCHEDULER */
, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'), _ErrorTypeStrings);

function callWithErrorHandling(fn, instance, type, args) {
  var res;

  try {
    res = args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);

    if (res && isPromise(res)) {
      res.catch(function (err) {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  var values = [];

  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;

  if (instance) {
    var cur = instance.parent; // the exposed instance is the render proxy to keep it consistent with 2.x

    var exposedInstance = instance.proxy; // in production the hook receives only the error code

    var errorInfo = ErrorTypeStrings[type];

    while (cur) {
      var errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    } // app-level handling


    var appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10
      /* APP_ERROR_HANDLER */
      , [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  {
    var info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));

    if (contextVNode) {
      popWarningContext();
    } // crash in dev by default so it's more noticeable


    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  }
}

var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPreFlushCbs = [];
var activePreFlushCbs = null;
var preFlushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = Promise.resolve();
var currentFlushPromise = null;
var currentPreFlushParentJob = null;
var RECURSION_LIMIT = 100;

function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}

function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    queue.push(job);
    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function invalidateJob(job) {
  var i = queue.indexOf(job);

  if (i > -1) {
    queue[i] = null;
  }
}

function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!isArray(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push.apply(pendingQueue, _toConsumableArray(cb));
  }

  queueFlush();
}

function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}

function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}

function flushPreFlushCbs(seen) {
  var parentJob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = _toConsumableArray(new Set(pendingPreFlushCbs));
    pendingPreFlushCbs.length = 0;
    {
      seen = seen || new Map();
    }

    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      {
        checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex]);
      }
      activePreFlushCbs[preFlushIndex]();
    }

    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null; // recursively flush until it drains

    flushPreFlushCbs(seen, parentJob);
  }
}

function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = _toConsumableArray(new Set(pendingPostFlushCbs));

    pendingPostFlushCbs.length = 0; // #1947 already has active queue, nested flushPostFlushCbs call

    if (activePostFlushCbs) {
      var _activePostFlushCbs;

      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));

      return;
    }

    activePostFlushCbs = deduped;
    {
      seen = seen || new Map();
    }
    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      {
        checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex]);
      }
      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || new Map();
  }
  flushPreFlushCbs(seen); // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.
  // Jobs can never be null before flush starts, since they are only invalidated
  // during execution of another flushed job.

  queue.sort(function (a, b) {
    return getId(a) - getId(b);
  });

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];

      if (job) {
        if (true) {
          checkRecursiveUpdates(seen, job);
        }

        callWithErrorHandling(job, null, 14
        /* SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null; // some postFlushCb queued jobs!
    // keep flushing until it drains.

    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      throw new Error("Maximum recursive updates exceeded. " + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
    } else {
      seen.set(fn, count + 1);
    }
  }
}
/* eslint-disable no-restricted-globals */


var isHmrUpdating = false;
var hmrDirtyComponents = new Set(); // Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.

{
  var globalObject = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
  globalObject.__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
var map = new Map();

function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);

  if (!record) {
    createRecord(id);
    record = map.get(id);
  }

  record.add(instance);
}

function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).delete(instance);
}

function createRecord(id) {
  if (map.has(id)) {
    return false;
  }

  map.set(id, new Set());
  return true;
}

function rerender(id, newRender) {
  var record = map.get(id);
  if (!record) return; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  Array.from(record).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
    }

    instance.renderCache = []; // this flag forces child components with slot content to update

    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  Array.from(record).forEach(function (instance) {
    var comp = instance.type;

    if (!hmrDirtyComponents.has(comp)) {
      // 1. Update existing comp definition to match new one
      newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
      extend(comp, newComp);

      for (var key in comp) {
        if (!(key in newComp)) {
          delete comp[key];
        }
      } // 2. Mark component dirty. This forces the renderer to replace the component
      // on patch.


      hmrDirtyComponents.add(comp); // 3. Make sure to unmark the component after the reload.

      queuePostFlushCb(function () {
        hmrDirtyComponents.delete(comp);
      });
    }

    if (instance.parent) {
      // 4. Force the parent instance to re-render. This will cause all updated
      // components to be unmounted and re-mounted. Queue the update so that we
      // don't end up forcing the same parent to re-render multiple times.
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      // root instance mounted via createApp() has a reload method
      instance.appContext.reload();
    } else if (typeof window !== 'undefined') {
      // root instance inside tree created via raw render(). Force reload.
      window.location.reload();
    } else {
      console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
    }
  });
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}

var devtools;

function setDevtoolsHook(hook) {
  devtools = hook;
}

function devtoolsInitApp(app, version) {
  // TODO queue if devtools is undefined
  if (!devtools) return;
  devtools.emit("app:init"
  /* APP_INIT */
  , app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment,
    Static: Static
  });
}

function devtoolsUnmountApp(app) {
  if (!devtools) return;
  devtools.emit("app:unmount"
  /* APP_UNMOUNT */
  , app);
}

var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added"
/* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated"
/* COMPONENT_UPDATED */
);
var devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed"
/* COMPONENT_REMOVED */
);

function createDevtoolsComponentHook(hook) {
  return function (component) {
    if (!devtools) return;
    devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined);
  };
}

function devtoolsComponentEmit(component, event, params) {
  if (!devtools) return;
  devtools.emit("component:emit"
  /* COMPONENT_EMIT */
  , component.appContext.app, component, event, params);
}

function emit(instance, event) {
  var props = instance.vnode.props || EMPTY_OBJ;

  for (var _len4 = arguments.length, rawArgs = new Array(_len4 > 2 ? _len4 - 2 : 0), _key5 = 2; _key5 < _len4; _key5++) {
    rawArgs[_key5 - 2] = arguments[_key5];
  }

  {
    var emitsOptions = instance.emitsOptions,
        _instance$propsOption = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption[0];

    if (emitsOptions) {
      if (!(event in emitsOptions)) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat(toHandlerKey(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];

        if (isFunction(validator)) {
          var isValid = validator.apply(void 0, rawArgs);

          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }
  var args = rawArgs;
  var isModelListener = event.startsWith('update:'); // for v-model update:xxx events, apply modifiers on args

  var modelArg = isModelListener && event.slice(7);

  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");

    var _ref8 = props[modifiersKey] || EMPTY_OBJ,
        number = _ref8.number,
        trim = _ref8.trim;

    if (trim) {
      args = rawArgs.map(function (a) {
        return a.trim();
      });
    } else if (number) {
      args = rawArgs.map(toNumber);
    }
  }

  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    var lowerCaseEvent = event.toLowerCase();

    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat(hyphenate(event), "\" instead of \"").concat(event, "\"."));
    }
  } // convert handler name to camelCase. See issue #2249

  var handlerName = toHandlerKey(camelize(event));
  var handler = props[handlerName]; // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case

  if (!handler && isModelListener) {
    handlerName = toHandlerKey(hyphenate(event));
    handler = props[handlerName];
  }

  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }

  var onceHandler = props[handlerName + "Once"];

  if (onceHandler) {
    if (!instance.emitted) {
      (instance.emitted = {})[handlerName] = true;
    } else if (instance.emitted[handlerName]) {
      return;
    }

    callWithAsyncErrorHandling(onceHandler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }
}

function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!appContext.deopt && comp.__emits !== undefined) {
    return comp.__emits;
  }

  var raw = comp.emits;
  var normalized = {}; // apply mixin/extends props

  var hasExtends = false;

  if (!isFunction(comp)) {
    var extendEmits = function extendEmits(raw) {
      hasExtends = true;
      extend(normalized, normalizeEmitsOptions(raw, appContext, true));
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }

    if (comp.extends) {
      extendEmits(comp.extends);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }

  if (!raw && !hasExtends) {
    return comp.__emits = null;
  }

  if (isArray(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    extend(normalized, raw);
  }

  return comp.__emits = normalized;
} // Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.


function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }

  key = key.replace(/Once$/, '');
  return hasOwn(options, key[2].toLowerCase() + key.slice(3)) || hasOwn(options, key.slice(2));
} // mark the current rendering instance for asset resolution (e.g.
// resolveComponent, resolveDirective) during render


var currentRenderingInstance = null;

function setCurrentRenderingInstance(instance) {
  currentRenderingInstance = instance;
} // dev only flag to track whether $attrs was used during render.
// If $attrs was used during render then the warning for failed attrs
// fallthrough can be suppressed.


var accessedAttrs = false;

function markAttrsAccessed() {
  accessedAttrs = true;
}

function renderComponentRoot(instance) {
  var Component = instance.type,
      vnode = instance.vnode,
      proxy = instance.proxy,
      withProxy = instance.withProxy,
      props = instance.props,
      _instance$propsOption2 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption2[0],
      slots = instance.slots,
      attrs = instance.attrs,
      emit = instance.emit,
      render = instance.render,
      renderCache = instance.renderCache,
      data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx;

  var result;
  currentRenderingInstance = instance;
  {
    accessedAttrs = false;
  }

  try {
    var fallthroughAttrs;

    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
        // withProxy is a proxy with a different `has` trap only for
        // runtime-compiled render functions using `with` block.
        var proxyToUse = withProxy || proxy;
        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
      // functional
      var _render = Component; // in dev, mark attrs accessed if optional props (attrs === props)

      if (true && attrs === props) {
        markAttrsAccessed();
      }

      result = normalizeVNode(_render.length > 1 ? _render(props, true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },

        slots: slots,
        emit: emit
      } : {
        attrs: attrs,
        slots: slots,
        emit: emit
      }) : _render(props, null
      /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    } // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment


    var root = result;
    var setRoot = undefined;

    if (true) {
      ;

      var _getChildRoot = getChildRoot(result);

      var _getChildRoot2 = _slicedToArray(_getChildRoot, 2);

      root = _getChildRoot2[0];
      setRoot = _getChildRoot2[1];
    }

    if (Component.inheritAttrs !== false && fallthroughAttrs) {
      var keys = Object.keys(fallthroughAttrs);
      var _root = root,
          shapeFlag = _root.shapeFlag;

      if (keys.length) {
        if (shapeFlag & 1
        /* ELEMENT */
        || shapeFlag & 6
        /* COMPONENT */
        ) {
            if (propsOptions && keys.some(isModelListener)) {
              // If a v-model listener (onUpdate:xxx) has a corresponding declared
              // prop, it indicates this component expects to handle v-model and
              // it should not fallthrough.
              // related: #1543, #1643, #1989
              fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
            }

            root = cloneVNode(root, fallthroughAttrs);
          } else if (true && !accessedAttrs && root.type !== Comment) {
          var allAttrs = Object.keys(attrs);
          var eventAttrs = [];
          var extraAttrs = [];

          for (var i = 0, l = allAttrs.length; i < l; i++) {
            var key = allAttrs[i];

            if (isOn(key)) {
              // ignore v-model handlers when they fail to fallthrough
              if (!isModelListener(key)) {
                // remove `on`, lowercase first letter to reflect event casing
                // accurately
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }

          if (extraAttrs.length) {
            warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
          }

          if (eventAttrs.length) {
            warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
          }
        }
      }
    } // inherit directives


    if (vnode.dirs) {
      if (true && !isElementRoot(root)) {
        warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
      }

      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    } // inherit transition data


    if (vnode.transition) {
      if (true && !isElementRoot(root)) {
        warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
      }

      root.transition = vnode.transition;
    }

    if (true && setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
  } catch (err) {
    handleError(err, instance, 1
    /* RENDER_FUNCTION */
    );
    result = createVNode(Comment);
  }

  currentRenderingInstance = null;
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */


var getChildRoot = function getChildRoot(vnode) {
  if (vnode.type !== Fragment) {
    return [vnode, undefined];
  }

  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);

  if (!childRoot) {
    return [vnode, undefined];
  }

  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;

  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;

    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(_toConsumableArray(dynamicChildren), [updatedRoot]);
      }
    }
  };

  return [normalizeVNode(childRoot), setRoot];
};
/**
 * dev only
 */


function filterSingleRoot(children) {
  var filtered = children.filter(function (child) {
    return !(isVNode(child) && child.type === Comment && child.children !== 'v-if');
  });
  return filtered.length === 1 && isVNode(filtered[0]) ? filtered[0] : null;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;

  for (var key in attrs) {
    if (key === 'class' || key === 'style' || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }

  return res;
};

var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};

  for (var key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }

  return res;
};

var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & 6
  /* COMPONENT */
  || vnode.shapeFlag & 1
  /* ELEMENT */
  || vnode.type === Comment // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
      prevChildren = prevVNode.children,
      component = prevVNode.component;
  var nextProps = nextVNode.props,
      nextChildren = nextVNode.children,
      patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions; // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.

  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  } // force child update for runtime directive or transition on component vnode.


  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }

  if (optimized && patchFlag > 0) {
    if (patchFlag & 1024
    /* DYNAMIC_SLOTS */
    ) {
        // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
      }

    if (patchFlag & 16
    /* FULL_PROPS */
    ) {
        if (!prevProps) {
          return !!nextProps;
        } // presence of this flag indicates props are always non-null


        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8
    /* PROPS */
    ) {
        var dynamicProps = nextVNode.dynamicProps;

        for (var i = 0; i < dynamicProps.length; i++) {
          var key = dynamicProps[i];

          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }

    if (prevProps === nextProps) {
      return false;
    }

    if (!prevProps) {
      return !!nextProps;
    }

    if (!nextProps) {
      return true;
    }

    return hasPropsChanged(prevProps, nextProps, emits);
  }

  return false;
}

function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);

  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }

  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];

    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }

  return false;
}

function updateHOCHostEl(_ref9, el // HostNode
) {
  var vnode = _ref9.vnode,
      parent = _ref9.parent;

  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
}; // Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.


var SuspenseImpl = {
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, // platform-specific impl passed from renderer
  rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary
}; // Force-casted public typing for h and TSX props inference

var Suspense = SuspenseImpl;

function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals) {
  var patch = rendererInternals.p,
      createElement = rendererInternals.o.createElement;
  var hiddenContainer = createElement('div');
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals); // start mounting the content subtree in an off-dom container

  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG); // now check if we have encountered any async deps

  if (suspense.deps > 0) {
    // has async
    // mount the fallback tree
    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
    isSVG);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    // Suspense has no async deps. Just resolve.
    suspense.resolve();
  }
}

function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, _ref10) {
  var patch = _ref10.p,
      unmount = _ref10.um,
      createElement = _ref10.o.createElement;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var activeBranch = suspense.activeBranch,
      pendingBranch = suspense.pendingBranch,
      isInFallback = suspense.isInFallback,
      isHydrating = suspense.isHydrating;

  if (pendingBranch) {
    suspense.pendingBranch = newBranch;

    if (isSameVNodeType(newBranch, pendingBranch)) {
      // same root type but content may have changed.
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);

      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG);
        setActiveBranch(suspense, newFallback);
      }
    } else {
      // toggled before pending tree is resolved
      suspense.pendingId++;

      if (isHydrating) {
        // if toggled before hydration is finished, the current DOM tree is
        // no longer valid. set it as the active branch so it will be unmounted
        // when resolved
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      } // increment pending ID. this is used to invalidate async callbacks
      // reset suspense state


      suspense.deps = 0; // discard effects from pending branch

      suspense.effects.length = 0; // discard previous container

      suspense.hiddenContainer = createElement('div');

      if (isInFallback) {
        // already in fallback state
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);

        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // toggled "back" to current active branch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG); // force resolve

        suspense.resolve(true);
      } else {
        // switched to a 3rd branch
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);

        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      // root did not change, just normal patch
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
      setActiveBranch(suspense, newBranch);
    } else {
      // root node toggled
      // invoke @pending event
      var onPending = n2.props && n2.props.onPending;

      if (isFunction(onPending)) {
        onPending();
      } // mount pending branch in off-dom container


      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);

      if (suspense.deps <= 0) {
        // incoming branch has no async deps, resolve now.
        suspense.resolve();
      } else {
        var timeout = suspense.timeout,
            pendingId = suspense.pendingId;

        if (timeout > 0) {
          setTimeout(function () {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}

var hasWarned = false;

function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals) {
  var isHydrating = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;

  /* istanbul ignore if */
  if (!hasWarned) {
    hasWarned = true; // @ts-ignore `console.info` cannot be null error

    console[console.info ? 'info' : 'log']("<Suspense> is an experimental feature and its API will likely change.");
  }

  var patch = rendererInternals.p,
      _move = rendererInternals.m,
      _unmount2 = rendererInternals.um,
      _next = rendererInternals.n,
      _rendererInternals$o = rendererInternals.o,
      parentNode = _rendererInternals$o.parentNode,
      remove = _rendererInternals$o.remove;
  var timeout = toNumber(vnode.props && vnode.props.timeout);
  var suspense = {
    vnode: vnode,
    parent: parent,
    parentComponent: parentComponent,
    isSVG: isSVG,
    container: container,
    hiddenContainer: hiddenContainer,
    anchor: anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === 'number' ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: isHydrating,
    isUnmounted: false,
    effects: [],
    resolve: function resolve() {
      var resume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }

        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }
      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          pendingBranch = suspense.pendingBranch,
          pendingId = suspense.pendingId,
          effects = suspense.effects,
          parentComponent = suspense.parentComponent,
          container = suspense.container;

      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';

        if (delayEnter) {
          activeBranch.transition.afterLeave = function () {
            if (pendingId === suspense.pendingId) {
              _move(pendingBranch, container, _anchor, 0
              /* ENTER */
              );
            }
          };
        } // this is initial anchor on mount


        var _anchor = suspense.anchor; // unmount current active tree

        if (activeBranch) {
          // if the fallback tree was mounted, it may have been moved
          // as part of a parent suspense. get the latest anchor for insertion
          _anchor = _next(activeBranch);

          _unmount2(activeBranch, parentComponent, suspense, true);
        }

        if (!delayEnter) {
          // move content from off-dom container to actual container
          _move(pendingBranch, container, _anchor, 0
          /* ENTER */
          );
        }
      }

      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false; // flush buffered effects
      // check if there is a pending parent suspense

      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;

      while (parent) {
        if (parent.pendingBranch) {
          var _parent$effects;

          // found a pending parent suspense, merge buffered post jobs
          // into that parent
          (_parent$effects = parent.effects).push.apply(_parent$effects, _toConsumableArray(effects));

          hasUnresolvedAncestor = true;
          break;
        }

        parent = parent.parent;
      } // no pending parent suspense, flush all jobs


      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }

      suspense.effects = []; // invoke @resolve event

      var onResolve = vnode.props && vnode.props.onResolve;

      if (isFunction(onResolve)) {
        onResolve();
      }
    },
    fallback: function fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          parentComponent = suspense.parentComponent,
          container = suspense.container,
          isSVG = suspense.isSVG; // invoke @fallback event

      var onFallback = vnode.props && vnode.props.onFallback;

      if (isFunction(onFallback)) {
        onFallback();
      }

      var anchor = _next(activeBranch);

      var mountFallback = function mountFallback() {
        if (!suspense.isInFallback) {
          return;
        } // mount the fallback tree


        patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG);
        setActiveBranch(suspense, fallbackVNode);
      };

      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';

      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      } // unmount current active branch


      _unmount2(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
      true // shouldRemove
      );

      suspense.isInFallback = true;

      if (!delayEnter) {
        mountFallback();
      }
    },
    move: function move(container, anchor, type) {
      suspense.activeBranch && _move(suspense.activeBranch, container, anchor, type);
      suspense.container = container;
    },
    next: function next() {
      return suspense.activeBranch && _next(suspense.activeBranch);
    },
    registerDep: function registerDep(instance, setupRenderEffect) {
      if (!suspense.pendingBranch) {
        return;
      }

      var hydratedEl = instance.vnode.el;
      suspense.deps++;
      instance.asyncDep.catch(function (err) {
        handleError(err, instance, 0
        /* SETUP_FUNCTION */
        );
      }).then(function (asyncSetupResult) {
        // retry when the setup() promise resolves.
        // component may have been unmounted before resolve.
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }

        suspense.deps--; // retry from this component

        instance.asyncResolved = true;
        var vnode = instance.vnode;
        {
          pushWarningContext(vnode);
        }
        handleSetupResult(instance, asyncSetupResult);

        if (hydratedEl) {
          // vnode may have been replaced if an update happened before the
          // async dep is resolved.
          vnode.el = hydratedEl;
        }

        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode, // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : _next(instance.subTree), suspense, isSVG, optimized);

        if (placeholder) {
          remove(placeholder);
        }

        updateHOCHostEl(instance, vnode.el);
        {
          popWarningContext();
        }

        if (suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount: function unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;

      if (suspense.activeBranch) {
        _unmount2(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }

      if (suspense.pendingBranch) {
        _unmount2(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}

function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, optimized, rendererInternals, hydrateNode) {
  /* eslint-disable no-restricted-globals */
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, optimized, rendererInternals, true
  /* hydrating */
  ); // there are two possible scenarios for server-rendered suspense:
  // - success: ssr content should be fully resolved
  // - failure: ssr content should be the fallback branch.
  // however, on the client we don't really know if it has failed or not
  // attempt to hydrate the DOM assuming it has succeeded, but we still
  // need to construct a suspense boundary first

  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, optimized);

  if (suspense.deps === 0) {
    suspense.resolve();
  }

  return result;
  /* eslint-enable no-restricted-globals */
}

function normalizeSuspenseChildren(vnode) {
  var shapeFlag = vnode.shapeFlag,
      children = vnode.children;
  var content;
  var fallback;

  if (shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      content = normalizeSuspenseSlot(children.default);
      fallback = normalizeSuspenseSlot(children.fallback);
    } else {
    content = normalizeSuspenseSlot(children);
    fallback = normalizeVNode(null);
  }

  return {
    content: content,
    fallback: fallback
  };
}

function normalizeSuspenseSlot(s) {
  if (isFunction(s)) {
    s = s();
  }

  if (isArray(s)) {
    var singleChild = filterSingleRoot(s);

    if (!singleChild) {
      warn("<Suspense> slots expect a single root node.");
    }

    s = singleChild;
  }

  return normalizeVNode(s);
}

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      var _suspense$effects;

      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, _toConsumableArray(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var vnode = suspense.vnode,
      parentComponent = suspense.parentComponent;
  var el = vnode.el = branch.el; // in case suspense is the root node of a component,
  // recursively update the HOC el

  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}

var isRenderingCompiledSlot = 0;

var setCompiledSlotRendering = function setCompiledSlotRendering(n) {
  return isRenderingCompiledSlot += n;
};
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */


function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback = arguments.length > 3 ? arguments[3] : undefined;
  var slot = slots[name];

  if (slot && slot.length > 1) {
    warn("SSR-optimized slot function detected in a non-SSR-optimized render " + "function. You need to mark this component with $dynamic-slots in the " + "parent template.");

    slot = function slot() {
      return [];
    };
  } // a compiled slot disables block tracking by default to avoid manual
  // invocation interfering with template-based block tracking, but in
  // `renderSlot` we can be sure that it's template-based so we can force
  // enable it.


  isRenderingCompiledSlot++;
  var rendered = (openBlock(), createBlock(Fragment, {
    key: props.key
  }, slot ? slot(props) : fallback ? fallback() : [], slots._ === 1
  /* STABLE */
  ? 64
  /* STABLE_FRAGMENT */
  : -2
  /* BAIL */
  ));
  isRenderingCompiledSlot--;
  return rendered;
}
/**
 * Wrap a slot function to memoize current rendering instance
 * @private
 */


function withCtx(fn) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  if (!ctx) return fn;

  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we need to push a null block to
    // avoid that. This isn't necessary if rendering a compiled `<slot>`.
    if (!isRenderingCompiledSlot) {
      openBlock(true
      /* null block that disables tracking */
      );
    }

    var owner = currentRenderingInstance;
    setCurrentRenderingInstance(ctx);
    var res = fn.apply(void 0, arguments);
    setCurrentRenderingInstance(owner);

    if (!isRenderingCompiledSlot) {
      closeBlock();
    }

    return res;
  };

  renderFnWithContext._c = true;
  return renderFnWithContext;
} // SFC scoped style ID management.


var currentScopeId = null;
var scopeIdStack = [];
/**
 * @private
 */

function pushScopeId(id) {
  scopeIdStack.push(currentScopeId = id);
}
/**
 * @private
 */


function popScopeId() {
  scopeIdStack.pop();
  currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
/**
 * @private
 */


function withScopeId(id) {
  return function (fn) {
    return withCtx(function () {
      pushScopeId(id);
      var res = fn.apply(this, arguments);
      popScopeId();
      return res;
    });
  };
}

function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  def(attrs, InternalObjectKey, 1);
  setFullProps(instance, rawProps, props, attrs); // validation

  {
    validateProps(props, instance);
  }

  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }

  instance.attrs = attrs;
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
      attrs = instance.attrs,
      patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = toRaw(props);

  var _instance$propsOption3 = _slicedToArray(instance.propsOptions, 1),
      options = _instance$propsOption3[0];

  if ( // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !(instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId) && (optimized || patchFlag > 0) && !(patchFlag & 16
  /* FULL_PROPS */
  )) {
    if (patchFlag & 8
    /* PROPS */
    ) {
        // Compiler-generated props & no keys change, just set the updated
        // the props.
        var propsToUpdate = instance.vnode.dynamicProps;

        for (var i = 0; i < propsToUpdate.length; i++) {
          var key = propsToUpdate[i]; // PROPS flag guarantees rawProps to be non-null

          var value = rawProps[key];

          if (options) {
            // attr / props separation was done on init and will be consistent
            // in this code path, so just check if attrs have it.
            if (hasOwn(attrs, key)) {
              attrs[key] = value;
            } else {
              var camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
            }
          } else {
            attrs[key] = value;
          }
        }
      }
  } else {
    // full props update.
    setFullProps(instance, rawProps, props, attrs); // in case of dynamic props, check if we need to delete keys from
    // the props object

    var kebabKey;

    for (var _key6 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, _key6) && ( // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = hyphenate(_key6)) === _key6 || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && ( // for camelCase
          rawPrevProps[_key6] !== undefined || // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key6] = resolvePropValue(options, rawProps || EMPTY_OBJ, _key6, undefined, instance);
          }
        } else {
          delete props[_key6];
        }
      }
    } // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.


    if (attrs !== rawCurrentProps) {
      for (var _key7 in attrs) {
        if (!rawProps || !hasOwn(rawProps, _key7)) {
          delete attrs[_key7];
        }
      }
    }
  } // trigger updates for $attrs in case it's used in component slots


  trigger(instance, "set"
  /* SET */
  , '$attrs');

  if (rawProps) {
    validateProps(props, instance);
  }
}

function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption4 = _slicedToArray(instance.propsOptions, 2),
      options = _instance$propsOption4[0],
      needCastKeys = _instance$propsOption4[1];

  if (rawProps) {
    for (var key in rawProps) {
      var value = rawProps[key]; // key, ref are reserved and never passed down

      if (isReservedProp(key)) {
        continue;
      } // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.


      var camelKey = void 0;

      if (options && hasOwn(options, camelKey = camelize(key))) {
        props[camelKey] = value;
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        // Any non-declared (either as a prop or an emitted event) props are put
        // into a separate `attrs` object for spreading. Make sure to preserve
        // original key casing
        attrs[key] = value;
      }
    }
  }

  if (needCastKeys) {
    var rawCurrentProps = toRaw(props);

    for (var i = 0; i < needCastKeys.length; i++) {
      var _key8 = needCastKeys[i];
      props[_key8] = resolvePropValue(options, rawCurrentProps, _key8, rawCurrentProps[_key8], instance);
    }
  }
}

function resolvePropValue(options, props, key, value, instance) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = hasOwn(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt.default;

      if (opt.type !== Function && isFunction(defaultValue)) {
        setCurrentInstance(instance);
        value = defaultValue(props);
        setCurrentInstance(null);
      } else {
        value = defaultValue;
      }
    } // boolean casting


    if (opt[0
    /* shouldCast */
    ]) {
      if (!hasOwn(props, key) && !hasDefault) {
        value = false;
      } else if (opt[1
      /* shouldCastTrue */
      ] && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
  }

  return value;
}

function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!appContext.deopt && comp.__props) {
    return comp.__props;
  }

  var raw = comp.props;
  var normalized = {};
  var needCastKeys = []; // apply mixin/extends props

  var hasExtends = false;

  if (!isFunction(comp)) {
    var extendProps = function extendProps(raw) {
      hasExtends = true;

      var _normalizePropsOption = normalizePropsOptions(raw, appContext, true),
          _normalizePropsOption2 = _slicedToArray(_normalizePropsOption, 2),
          props = _normalizePropsOption2[0],
          keys = _normalizePropsOption2[1];

      extend(normalized, props);
      if (keys) needCastKeys.push.apply(needCastKeys, _toConsumableArray(keys));
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }

    if (comp.extends) {
      extendProps(comp.extends);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }

  if (!raw && !hasExtends) {
    return comp.__props = EMPTY_ARR;
  }

  if (isArray(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }

      var normalizedKey = camelize(raw[i]);

      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn("invalid props options", raw);
    }

    for (var key in raw) {
      var _normalizedKey = camelize(key);

      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = isArray(opt) || isFunction(opt) ? {
          type: opt
        } : opt;

        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0
          /* shouldCast */
          ] = booleanIndex > -1;
          prop[1
          /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex; // if the prop needs boolean casting or default value

          if (booleanIndex > -1 || hasOwn(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }

  return comp.__props = [normalized, needCastKeys];
}

function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }

  return false;
} // use function string name to check type constructors
// so that it works across vms / iframes.


function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  return -1;
}
/**
 * dev only
 */


function validateProps(props, instance) {
  var rawValues = toRaw(props);
  var options = instance.propsOptions[0];

  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, rawValues[key], opt, !hasOwn(rawValues, key));
  }
}
/**
 * dev only
 */


function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
      required = prop.required,
      validator = prop.validator; // required!

  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  } // missing but optional


  if (value == null && !prop.required) {
    return;
  } // type check


  if (type != null && type !== true) {
    var isValid = false;
    var types = isArray(type) ? type : [type];
    var expectedTypes = []; // value is valid as long as one of the specified types match

    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
          valid = _assertType.valid,
          expectedType = _assertType.expectedType;

      expectedTypes.push(expectedType || '');
      isValid = valid;
    }

    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  } // custom validator


  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}

var isSimpleType = /*#__PURE__*/makeMap('String,Number,Boolean,Function,Symbol');
/**
 * dev only
 */

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (isSimpleType(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isObject(value);
  } else if (expectedType === 'Array') {
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */


function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }

  return message;
}
/**
 * dev only
 */


function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */


function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */


function isBoolean() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key9 = 0; _key9 < _len5; _key9++) {
    args[_key9] = arguments[_key9];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target) {
    var hooks = target[type] || (target[type] = []); // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".

    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      } // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.


      pauseTracking(); // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.

      setCurrentInstance(target);

      for (var _len6 = arguments.length, args = new Array(_len6), _key10 = 0; _key10 < _len6; _key10++) {
        args[_key10] = arguments[_key10];
      }

      var res = callWithAsyncErrorHandling(hook, target, type, args);
      setCurrentInstance(null);
      resetTracking();
      return res;
    });

    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }

    return wrappedHook;
  } else {
    var apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}

var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (// post-create lifecycle registrations are noops during SSR
      !isInSSRComponentSetup && injectHook(lifecycle, hook, target)
    );
  };
};

var onBeforeMount = createHook("bm"
/* BEFORE_MOUNT */
);
var onMounted = createHook("m"
/* MOUNTED */
);
var onBeforeUpdate = createHook("bu"
/* BEFORE_UPDATE */
);
var onUpdated = createHook("u"
/* UPDATED */
);
var onBeforeUnmount = createHook("bum"
/* BEFORE_UNMOUNT */
);
var onUnmounted = createHook("um"
/* UNMOUNTED */
);
var onRenderTriggered = createHook("rtg"
/* RENDER_TRIGGERED */
);
var onRenderTracked = createHook("rtc"
/* RENDER_TRACKED */
);

var onErrorCaptured = function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec"
  /* ERROR_CAPTURED */
  , hook, target);
}; // Simple effect.


function watchEffect(effect, options) {
  return doWatch(effect, null, options);
} // initial value for watchers to trigger on undefined initial values


var INITIAL_WATCHER_VALUE = {}; // implementation

function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }

  return doWatch(source, cb, options);
}

function doWatch(source, cb) {
  var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJ,
      immediate = _ref11.immediate,
      deep = _ref11.deep,
      flush = _ref11.flush,
      onTrack = _ref11.onTrack,
      onTrigger = _ref11.onTrigger;

  var instance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : currentInstance;

  if (!cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }

    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }

  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };

  var getter;
  var forceTrigger = false;

  if (isRef(source)) {
    getter = function getter() {
      return source.value;
    };

    forceTrigger = !!source._shallow;
  } else if (isReactive(source)) {
    getter = function getter() {
      return source;
    };

    deep = true;
  } else if (isArray(source)) {
    getter = function getter() {
      return source.map(function (s) {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return callWithErrorHandling(s, instance, 2
          /* WATCH_GETTER */
          );
        } else {
          warnInvalidSource(s);
        }
      });
    };
  } else if (isFunction(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2
        /* WATCH_GETTER */
        );
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }

        if (cleanup) {
          cleanup();
        }

        return callWithErrorHandling(source, instance, 3
        /* WATCH_CALLBACK */
        , [onInvalidate]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }

  if (cb && deep) {
    var baseGetter = getter;

    getter = function getter() {
      return traverse(baseGetter());
    };
  }

  var cleanup;

  var onInvalidate = function onInvalidate(fn) {
    cleanup = runner.options.onStop = function () {
      callWithErrorHandling(fn, instance, 4
      /* WATCH_CLEANUP */
      );
    };
  };

  var oldValue = isArray(source) ? [] : INITIAL_WATCHER_VALUE;

  var job = function job() {
    if (!runner.active) {
      return;
    }

    if (cb) {
      // watch(source, cb)
      var newValue = runner();

      if (deep || forceTrigger || hasChanged(newValue, oldValue)) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3
        /* WATCH_CALLBACK */
        , [newValue, // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue, onInvalidate]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      runner();
    }
  }; // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)


  job.allowRecurse = !!cb;
  var scheduler;

  if (flush === 'sync') {
    scheduler = job;
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    scheduler = function scheduler() {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
      }
    };
  }

  var runner = effect(getter, {
    lazy: true,
    onTrack: onTrack,
    onTrigger: onTrigger,
    scheduler: scheduler
  });
  recordInstanceBoundEffect(runner); // initial run

  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = runner();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(runner, instance && instance.suspense);
  } else {
    runner();
  }

  return function () {
    stop(runner);

    if (instance) {
      remove(instance.effects, runner);
    }
  };
} // this.$watch


function instanceWatch(source, cb, options) {
  var publicThis = this.proxy;
  var getter = isString(source) ? function () {
    return publicThis[source];
  } : source.bind(publicThis);
  return doWatch(getter, cb.bind(publicThis), options, this);
}

function traverse(value) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (!isObject(value) || seen.has(value)) {
    return value;
  }

  seen.add(value);

  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
}

function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}

var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref12) {
    var slots = _ref12.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots.default && getTransitionRawChildren(slots.default(), true);

      if (!children || !children.length) {
        return;
      } // warn multiple elements


      if (children.length > 1) {
        warn('<transition> can only be used on a single element or component. Use ' + '<transition-group> for lists.');
      } // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf


      var rawProps = toRaw(props);
      var mode = rawProps.mode; // check mode

      if (mode && !['in-out', 'out-in', 'default'].includes(mode)) {
        warn("invalid <transition> mode: ".concat(mode));
      } // at this point children has a guaranteed length of 1.


      var child = children[0];

      if (state.isLeaving) {
        return emptyPlaceholder(child);
      } // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.


      var innerChild = getKeepAliveChild(child);

      if (!innerChild) {
        return emptyPlaceholder(child);
      }

      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;

      if (getTransitionKey) {
        var key = getTransitionKey();

        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      } // handle mode


      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance); // update old tree's hooks in case of dynamic transition

        setTransitionHooks(oldInnerChild, leavingHooks); // switching between different views

        if (mode === 'out-in') {
          state.isLeaving = true; // return placeholder node and queue update when leave finishes

          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            instance.update();
          };

          return emptyPlaceholder(child);
        } else if (mode === 'in-out') {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild; // early removal callback

            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };

            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }

      return child;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);

  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }

  return leavingVNodesCache;
} // The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.


function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
      mode = props.mode,
      _props$persisted = props.persisted,
      persisted = _props$persisted === void 0 ? false : _props$persisted,
      onBeforeEnter = props.onBeforeEnter,
      onEnter = props.onEnter,
      onAfterEnter = props.onAfterEnter,
      onEnterCancelled = props.onEnterCancelled,
      onBeforeLeave = props.onBeforeLeave,
      onLeave = props.onLeave,
      onAfterLeave = props.onAfterLeave,
      onLeaveCancelled = props.onLeaveCancelled,
      onBeforeAppear = props.onBeforeAppear,
      onAppear = props.onAppear,
      onAfterAppear = props.onAfterAppear,
      onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);

  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9
    /* TRANSITION_HOOK */
    , args);
  };

  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;

      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      } // for same element (v-show)


      if (el._leaveCb) {
        el._leaveCb(true
        /* cancelled */
        );
      } // for toggled element with same key (v-if)


      var leavingVNode = leavingVNodesCache[key];

      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }

      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;

      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }

      var called = false;

      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;

        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }

        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }

        el._enterCb = undefined;
      };

      if (hook) {
        hook(el, done);

        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);

      if (el._enterCb) {
        el._enterCb(true
        /* cancelled */
        );
      }

      if (state.isUnmounting) {
        return remove();
      }

      callHook(onBeforeLeave, [el]);
      var called = false;

      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();

        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }

        el._leaveCb = undefined;

        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };

      leavingVNodesCache[key] = vnode;

      if (onLeave) {
        onLeave(el, done);

        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
} // the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.


function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6
  /* COMPONENT */
  && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var ret = [];
  var keyedFragmentCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // handle fragment children case, e.g. v-for

    if (child.type === Fragment) {
      if (child.patchFlag & 128
      /* KEYED_FRAGMENT */
      ) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment) {
        ret.push(child);
      }
  } // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-top
  // these children to force full diffs to ensure correct behavior.


  if (keyedFragmentCount > 1) {
    for (var _i2 = 0; _i2 < ret.length; _i2++) {
      ret[_i2].patchFlag = -2
      /* BAIL */
      ;
    }
  }

  return ret;
}

var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};

var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  inheritRef: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup: function setup(props, _ref13) {
    var slots = _ref13.slots;
    var cache = new Map();
    var keys = new Set();
    var current = null;
    var instance = getCurrentInstance();
    var parentSuspense = instance.suspense; // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.

    var sharedContext = instance.ctx;
    var _sharedContext$render = sharedContext.renderer,
        patch = _sharedContext$render.p,
        move = _sharedContext$render.m,
        _unmount = _sharedContext$render.um,
        createElement = _sharedContext$render.o.createElement;
    var storageContainer = createElement('div');

    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
      var instance = vnode.component;
      move(vnode, container, anchor, 0
      /* ENTER */
      , parentSuspense); // in case props have changed

      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, optimized);
      queuePostRenderEffect(function () {
        instance.isDeactivated = false;

        if (instance.a) {
          invokeArrayFns(instance.a);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);
    };

    sharedContext.deactivate = function (vnode) {
      var instance = vnode.component;
      move(vnode, storageContainer, null, 1
      /* LEAVE */
      , parentSuspense);
      queuePostRenderEffect(function () {
        if (instance.da) {
          invokeArrayFns(instance.da);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }

        instance.isDeactivated = true;
      }, parentSuspense);
    };

    function unmount(vnode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);

      _unmount(vnode, instance, parentSuspense);
    }

    function pruneCache(filter) {
      cache.forEach(function (vnode, key) {
        var name = getName(vnode.type);

        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key) {
      var cached = cache.get(key);

      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }

      cache.delete(key);
      keys.delete(key);
    } // prune cache on include/exclude prop change


    watch(function () {
      return [props.include, props.exclude];
    }, function (_ref14) {
      var _ref15 = _slicedToArray(_ref14, 2),
          include = _ref15[0],
          exclude = _ref15[1];

      include && pruneCache(function (name) {
        return matches(include, name);
      });
      exclude && pruneCache(function (name) {
        return !matches(exclude, name);
      });
    }, // prune post-render after `current` has been updated
    {
      flush: 'post'
    }); // cache sub tree after render

    var pendingCacheKey = null;

    var cacheSubtree = function cacheSubtree() {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };

    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(function () {
      cache.forEach(function (cached) {
        var subTree = instance.subTree,
            suspense = instance.suspense;
        var vnode = getInnerChild(subTree);

        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode); // but invoke its deactivated hook here

          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }

        unmount(cached);
      });
    });
    return function () {
      pendingCacheKey = null;

      if (!slots.default) {
        return null;
      }

      var children = slots.default();
      var rawVNode = children[0];

      if (children.length > 1) {
        {
          warn("KeepAlive should contain exactly one component child.");
        }
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4
      /* STATEFUL_COMPONENT */
      ) && !(rawVNode.shapeFlag & 128
      /* SUSPENSE */
      )) {
        current = null;
        return rawVNode;
      }

      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type;
      var name = getName(comp);
      var include = props.include,
          exclude = props.exclude,
          max = props.max;

      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }

      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key); // clone vnode if it's reused because we are going to mutate it

      if (vnode.el) {
        vnode = cloneVNode(vnode);

        if (rawVNode.shapeFlag & 128
        /* SUSPENSE */
        ) {
            rawVNode.ssContent = vnode;
          }
      } // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.


      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;

        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        } // avoid vnode being mounted as fresh


        vnode.shapeFlag |= 512
        /* COMPONENT_KEPT_ALIVE */
        ; // make this key the freshest

        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key); // prune oldest entry

        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      } // avoid vnode being unmounted


      vnode.shapeFlag |= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
      current = vnode;
      return rawVNode;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var KeepAlive = KeepAliveImpl;

function getName(comp) {
  return comp.displayName || comp.name;
}

function matches(pattern, name) {
  if (isArray(pattern)) {
    return pattern.some(function (p) {
      return matches(p, name);
    });
  } else if (isString(pattern)) {
    return pattern.split(',').indexOf(name) > -1;
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a"
  /* ACTIVATED */
  , target);
}

function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da"
  /* DEACTIVATED */
  , target);
}

function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;

  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;

    while (current) {
      if (current.isDeactivated) {
        return;
      }

      current = current.parent;
    }

    hook();
  });

  injectHook(type, wrappedHook, target); // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.

  if (target) {
    var current = target.parent;

    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }

      current = current.parent;
    }
  }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */
  );
  onUnmounted(function () {
    remove(keepAliveRoot[type], injected);
  }, target);
}

function resetShapeFlag(vnode) {
  var shapeFlag = vnode.shapeFlag;

  if (shapeFlag & 256
  /* COMPONENT_SHOULD_KEEP_ALIVE */
  ) {
      shapeFlag -= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
    }

  if (shapeFlag & 512
  /* COMPONENT_KEPT_ALIVE */
  ) {
      shapeFlag -= 512
      /* COMPONENT_KEPT_ALIVE */
      ;
    }

  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode) {
  return vnode.shapeFlag & 128
  /* SUSPENSE */
  ? vnode.ssContent : vnode;
}

var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};

var normalizeSlotValue = function normalizeSlotValue(value) {
  return isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};

var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  return withCtx(function (props) {
    if (currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }

    return normalizeSlotValue(rawSlot(props));
  }, ctx);
};

var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots) {
  var ctx = rawSlots._ctx;

  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];

    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function () {
        {
          warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
        }
        var normalized = normalizeSlotValue(value);

        slots[key] = function () {
          return normalized;
        };
      })();
    }
  }
};

var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if (!isKeepAlive(instance.vnode)) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }

  var normalized = normalizeSlotValue(children);

  instance.slots.default = function () {
    return normalized;
  };
};

var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      var type = children._;

      if (type) {
        instance.slots = children; // make compiler marker non-enumerable

        def(children, '_', type);
      } else {
        normalizeObjectSlots(children, instance.slots = {});
      }
    } else {
    instance.slots = {};

    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }

  def(instance.slots, InternalObjectKey, 1);
};

var updateSlots = function updateSlots(instance, children) {
  var vnode = instance.vnode,
      slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = EMPTY_OBJ;

  if (vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      var type = children._;

      if (type) {
        // compiled slots.
        if (isHmrUpdating) {
          // Parent was HMR updated so slot content may have changed.
          // force update slots and mark instance for hmr as well
          extend(slots, children);
        } else if (type === 1
        /* STABLE */
        ) {
            // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
          } else {
          // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
          // normalization.
          extend(slots, children);
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }

      deletionComparisonTarget = children;
    } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      default: 1
    };
  } // delete stale slots


  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/


var isBuiltInDirective = /*#__PURE__*/makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');

function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
/**
 * Adds directives to a VNode.
 */


function withDirectives(vnode, directives) {
  var internalInstance = currentRenderingInstance;

  if (internalInstance === null) {
    warn("withDirectives can only be used inside render functions.");
    return vnode;
  }

  var instance = internalInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);

  for (var i = 0; i < directives.length; i++) {
    var _directives$i = _slicedToArray(directives[i], 4),
        dir = _directives$i[0],
        value = _directives$i[1],
        arg = _directives$i[2],
        _directives$i$ = _directives$i[3],
        modifiers = _directives$i$ === void 0 ? EMPTY_OBJ : _directives$i$;

    if (isFunction(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }

    bindings.push({
      dir: dir,
      instance: instance,
      value: value,
      oldValue: void 0,
      arg: arg,
      modifiers: modifiers
    });
  }

  return vnode;
}

function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;

  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];

    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }

    var hook = binding.dir[name];

    if (hook) {
      callWithAsyncErrorHandling(hook, instance, 8
      /* DIRECTIVE_HOOK */
      , [vnode.el, binding, vnode, prevVNode]);
    }
  }
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      isCustomElement: NO,
      errorHandler: undefined,
      warnHandler: undefined
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null)
  };
}

var uid$1 = 0;

function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (rootProps != null && !isObject(rootProps)) {
      warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }

    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      version: version,

      get config() {
        return context.config;
      },

      set config(v) {
        {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },

      use: function use(plugin) {
        for (var _len7 = arguments.length, options = new Array(_len7 > 1 ? _len7 - 1 : 0), _key11 = 1; _key11 < _len7; _key11++) {
          options[_key11 - 1] = arguments[_key11];
        }

        if (installedPlugins.has(plugin)) {
          warn("Plugin has already been applied to target app.");
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }

        return app;
      },
      mixin: function mixin(_mixin) {
        {
          if (!context.mixins.includes(_mixin)) {
            context.mixins.push(_mixin); // global mixin with props/emits de-optimizes props/emits
            // normalization caching.

            if (_mixin.props || _mixin.emits) {
              context.deopt = true;
            }
          } else {
            warn('Mixin has already been applied to target app' + (_mixin.name ? ": ".concat(_mixin.name) : ''));
          }
        }
        return app;
      },
      component: function component(name, _component) {
        {
          validateComponentName(name, context.config);
        }

        if (!_component) {
          return context.components[name];
        }

        if (context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }

        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        {
          validateDirectiveName(name);
        }

        if (!_directive) {
          return context.directives[name];
        }

        if (context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }

        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate) {
        if (!isMounted) {
          var vnode = createVNode(rootComponent, rootProps); // store app context on the root VNode.
          // this will be set on the root instance on initial mount.

          vnode.appContext = context; // HMR root reload

          {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer);
            };
          }

          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer);
          }

          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          {
            devtoolsInitApp(app, version);
          }
          return vnode.component.proxy;
        } else {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);
          {
            devtoolsUnmountApp(app);
          }
        } else {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if (key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        } // TypeScript doesn't allow symbols as index type
        // https://github.com/Microsoft/TypeScript/issues/24587


        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}

var hasMismatch = false;

var isSVGContainer = function isSVGContainer(container) {
  return /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
};

var isComment = function isComment(node) {
  return node.nodeType === 8;
}
/* COMMENT */
; // Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.


function createHydrationFunctions(rendererInternals) {
  var mountComponent = rendererInternals.mt,
      patch = rendererInternals.p,
      _rendererInternals$o2 = rendererInternals.o,
      patchProp = _rendererInternals$o2.patchProp,
      nextSibling = _rendererInternals$o2.nextSibling,
      parentNode = _rendererInternals$o2.parentNode,
      remove = _rendererInternals$o2.remove,
      insert = _rendererInternals$o2.insert,
      createComment = _rendererInternals$o2.createComment;

  var hydrate = function hydrate(vnode, container) {
    if (!container.hasChildNodes()) {
      warn("Attempting to hydrate existing markup but container is empty. " + "Performing full mount instead.");
      patch(null, vnode, container);
      return;
    }

    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null);
    flushPostFlushCbs();

    if (hasMismatch && !false) {
      // this error should show up in production
      console.error("Hydration completed but contains mismatches.");
    }
  };

  var hydrateNode = function hydrateNode(node, vnode, parentComponent, parentSuspense) {
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var isFragmentStart = isComment(node) && node.data === '[';

    var onMismatch = function onMismatch() {
      return handleMismatch(node, vnode, parentComponent, parentSuspense, isFragmentStart);
    };

    var type = vnode.type,
        ref = vnode.ref,
        shapeFlag = vnode.shapeFlag;
    var domType = node.nodeType;
    vnode.el = node;
    var nextNode = null;

    switch (type) {
      case Text:
        if (domType !== 3
        /* TEXT */
        ) {
            nextNode = onMismatch();
          } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
            warn("Hydration text mismatch:" + "\n- Client: ".concat(JSON.stringify(node.data)) + "\n- Server: ".concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }

          nextNode = nextSibling(node);
        }

        break;

      case Comment:
        if (domType !== 8
        /* COMMENT */
        || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }

        break;

      case Static:
        if (domType !== 1
        /* ELEMENT */
        ) {
            nextNode = onMismatch();
          } else {
          // determine anchor, adopt content
          nextNode = node; // if the static vnode has its content stripped during build,
          // adopt it from the server-rendered HTML.

          var needToAdoptContent = !vnode.children.length;

          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.outerHTML;

            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }

            nextNode = nextSibling(nextNode);
          }

          return nextNode;
        }

        break;

      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, optimized);
        }

        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
            if (domType !== 1
            /* ELEMENT */
            || vnode.type !== node.tagName.toLowerCase()) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, optimized);
            }
          } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
            // when setting up the render effect, if the initial vnode already
            // has .el set, the component will perform hydration instead of mount
            // on its sub-tree.
            var container = parentNode(node);

            var hydrateComponent = function hydrateComponent() {
              mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
            }; // async component


            var loadAsync = vnode.type.__asyncLoader;

            if (loadAsync) {
              loadAsync().then(hydrateComponent);
            } else {
              hydrateComponent();
            } // component may be async, so in the case of fragments we cannot rely
            // on component's rendered output to determine the end of the fragment
            // instead, we do a lookahead to find the end anchor node.


            nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
            if (domType !== 8
            /* COMMENT */
            ) {
                nextNode = onMismatch();
              } else {
              nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, optimized, rendererInternals, hydrateChildren);
            }
          } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), optimized, rendererInternals, hydrateNode);
          } else {
          warn('Invalid HostVNode type:', type, "(".concat(_typeof(type), ")"));
        }

    }

    if (ref != null && parentComponent) {
      setRef(ref, null, parentComponent, parentSuspense, vnode);
    }

    return nextNode;
  };

  var hydrateElement = function hydrateElement(el, vnode, parentComponent, parentSuspense, optimized) {
    optimized = optimized || !!vnode.dynamicChildren;
    var props = vnode.props,
        patchFlag = vnode.patchFlag,
        shapeFlag = vnode.shapeFlag,
        dirs = vnode.dirs; // skip props & children if this is hoisted static nodes

    if (patchFlag !== -1
    /* HOISTED */
    ) {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, 'created');
        } // props


        if (props) {
          if (!optimized || patchFlag & 16
          /* FULL_PROPS */
          || patchFlag & 32
          /* HYDRATE_EVENTS */
          ) {
            for (var key in props) {
              if (!isReservedProp(key) && isOn(key)) {
                patchProp(el, key, null, props[key]);
              }
            }
          } else if (props.onClick) {
            // Fast path for click listeners (which is most often) to avoid
            // iterating through props.
            patchProp(el, 'onClick', null, props.onClick);
          }
        } // vnode / directive hooks


        var vnodeHooks;

        if (vnodeHooks = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }

        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }

        if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
          queueEffectWithSuspense(function () {
            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
          }, parentSuspense);
        } // children


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        && // skip if element has innerHTML / textContent
        !(props && (props.innerHTML || props.textContent))) {
          var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, optimized);
          var _hasWarned = false;

          while (next) {
            hasMismatch = true;

            if (!_hasWarned) {
              warn("Hydration children mismatch in <".concat(vnode.type, ">: ") + "server rendered element contains more child nodes than client vdom.");
              _hasWarned = true;
            } // The SSRed DOM contains more nodes than it should. Remove them.


            var cur = next;
            next = next.nextSibling;
            remove(cur);
          }
        } else if (shapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
            if (el.textContent !== vnode.children) {
              hasMismatch = true;
              warn("Hydration text content mismatch in <".concat(vnode.type, ">:\n") + "- Client: ".concat(el.textContent, "\n") + "- Server: ".concat(vnode.children));
              el.textContent = vnode.children;
            }
          }
      }

    return el.nextSibling;
  };

  var hydrateChildren = function hydrateChildren(node, parentVNode, container, parentComponent, parentSuspense, optimized) {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned = false;

    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);

      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, optimized);
      } else {
        hasMismatch = true;

        if (!hasWarned) {
          warn("Hydration children mismatch in <".concat(container.tagName.toLowerCase(), ">: ") + "server rendered element contains fewer child nodes than client vdom.");
          hasWarned = true;
        } // the SSRed DOM didn't contain enough nodes. Mount the missing ones.


        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container));
      }
    }

    return node;
  };

  var hydrateFragment = function hydrateFragment(node, vnode, parentComponent, parentSuspense, optimized) {
    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, optimized);

    if (next && isComment(next) && next.data === ']') {
      return nextSibling(vnode.anchor = next);
    } else {
      // fragment didn't hydrate successfully, since we didn't get a end anchor
      // back. This should have led to node/children mismatch warnings.
      hasMismatch = true; // since the anchor is missing, we need to create one and insert it

      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };

  var handleMismatch = function handleMismatch(node, vnode, parentComponent, parentSuspense, isFragment) {
    hasMismatch = true;
    warn("Hydration node mismatch:\n- Client vnode:", vnode.type, "\n- Server rendered DOM:", node, node.nodeType === 3
    /* TEXT */
    ? "(text)" : isComment(node) && node.data === '[' ? "(start of fragment)" : "");
    vnode.el = null;

    if (isFragment) {
      // remove excessive fragment nodes
      var end = locateClosingAsyncAnchor(node);

      while (true) {
        var _next2 = nextSibling(node);

        if (_next2 && _next2 !== end) {
          remove(_next2);
        } else {
          break;
        }
      }
    }

    var next = nextSibling(node);
    var container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container));
    return next;
  };

  var locateClosingAsyncAnchor = function locateClosingAsyncAnchor(node) {
    var match = 0;

    while (node) {
      node = nextSibling(node);

      if (node && isComment(node)) {
        if (node.data === '[') match++;

        if (node.data === ']') {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }

    return node;
  };

  return [hydrate, hydrateNode];
}

var supported;
var perf;

function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }
}

function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported;
  }
  /* eslint-disable no-restricted-globals */


  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  /* eslint-enable no-restricted-globals */


  return supported;
}

function createDevEffectOptions(instance) {
  return {
    scheduler: queueJob,
    allowRecurse: true,
    onTrack: instance.rtc ? function (e) {
      return invokeArrayFns(instance.rtc, e);
    } : void 0,
    onTrigger: instance.rtg ? function (e) {
      return invokeArrayFns(instance.rtg, e);
    } : void 0
  };
}

var queuePostRenderEffect = queueEffectWithSuspense;

var setRef = function setRef(rawRef, oldRawRef, parentComponent, parentSuspense, vnode) {
  if (isArray(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentComponent, parentSuspense, vnode);
    });
    return;
  }

  var value;

  if (!vnode) {
    value = null;
  } else {
    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
        value = vnode.component.proxy;
      } else {
      value = vnode.el;
    }
  }

  var owner = rawRef.i,
      ref = rawRef.r;

  if (!owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }

  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState; // unset old ref

  if (oldRef != null && oldRef !== ref) {
    if (isString(oldRef)) {
      refs[oldRef] = null;

      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }

  if (isString(ref)) {
    var doSet = function doSet() {
      refs[ref] = value;

      if (hasOwn(setupState, ref)) {
        setupState[ref] = value;
      }
    }; // #1789: for non-null values, set them after render
    // null values means this is unmount and it should not overwrite another
    // ref with the same key


    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if (isRef(ref)) {
    var _doSet = function _doSet() {
      ref.value = value;
    };

    if (value) {
      _doSet.id = -1;
      queuePostRenderEffect(_doSet, parentSuspense);
    } else {
      _doSet();
    }
  } else if (isFunction(ref)) {
    callWithErrorHandling(ref, parentComponent, 12
    /* FUNCTION_REF */
    , [value, refs]);
  } else {
    warn('Invalid template ref type:', value, "(".concat(_typeof(value), ")"));
  }
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */


function createRenderer(options) {
  return baseCreateRenderer(options);
} // Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.


function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
} // implementation


function baseCreateRenderer(options, createHydrationFns) {
  var hostInsert = options.insert,
      hostRemove = options.remove,
      hostPatchProp = options.patchProp,
      hostForcePatchProp = options.forcePatchProp,
      hostCreateElement = options.createElement,
      hostCreateText = options.createText,
      hostCreateComment = options.createComment,
      hostSetText = options.setText,
      hostSetElementText = options.setElementText,
      hostParentNode = options.parentNode,
      hostNextSibling = options.nextSibling,
      _options$setScopeId = options.setScopeId,
      hostSetScopeId = _options$setScopeId === void 0 ? NOOP : _options$setScopeId,
      hostCloneNode = options.cloneNode,
      hostInsertStaticContent = options.insertStaticContent; // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.

  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var optimized = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }

    if (n2.patchFlag === -2
    /* BAIL */
    ) {
        optimized = false;
        n2.dynamicChildren = null;
      }

    var type = n2.type,
        ref = n2.ref,
        shapeFlag = n2.shapeFlag;

    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;

      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;

      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else {
          patchStaticNode(n1, n2, container, isSVG);
        }

        break;

      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
          } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
          } else {
          warn('Invalid VNode type:', type, "(".concat(_typeof(type), ")"));
        }

    } // set ref


    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentComponent, parentSuspense, n2);
    }
  };

  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;

      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };

  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };

  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG);

    var _hostInsertStaticCont2 = _slicedToArray(_hostInsertStaticCont, 2);

    n2.el = _hostInsertStaticCont2[0];
    n2.anchor = _hostInsertStaticCont2[1];
  };
  /**
   * Dev / HMR only
   */


  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor); // remove existing

      removeStaticNode(n1);

      var _hostInsertStaticCont3 = hostInsertStaticContent(n2.children, container, anchor, isSVG);

      var _hostInsertStaticCont4 = _slicedToArray(_hostInsertStaticCont3, 2);

      n2.el = _hostInsertStaticCont4[0];
      n2.anchor = _hostInsertStaticCont4[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  /**
   * Dev / HMR only
   */


  var moveStaticNode = function moveStaticNode(vnode, container, anchor) {
    var cur = vnode.el;
    var end = vnode.anchor;

    while (cur && cur !== end) {
      var next = hostNextSibling(cur);
      hostInsert(cur, container, anchor);
      cur = next;
    }

    hostInsert(end, container, anchor);
  };
  /**
   * Dev / HMR only
   */


  var removeStaticNode = function removeStaticNode(vnode) {
    var cur = vnode.el;

    while (cur && cur !== vnode.anchor) {
      var next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(vnode.anchor);
  };

  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    isSVG = isSVG || n2.type === 'svg';

    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
    }
  };

  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
        props = vnode.props,
        shapeFlag = vnode.shapeFlag,
        transition = vnode.transition,
        scopeId = vnode.scopeId,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs;
    {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is); // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`

      if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
        }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        for (var key in props) {
          if (!isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }

        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      } // scopeId


      setScopeId(el, scopeId, vnode, parentComponent);
    }
    {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }

    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    } // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it


    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;

    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }

    hostInsert(el, container, anchor);

    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };

  var setScopeId = function setScopeId(el, scopeId, vnode, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }

    if (parentComponent) {
      var treeOwnerId = parentComponent.type.__scopeId; // vnode's own scopeId and the current patched component's scopeId is
      // different - this is a slot content node.

      if (treeOwnerId && treeOwnerId !== scopeId) {
        hostSetScopeId(el, treeOwnerId + '-s');
      }

      var subTree = parentComponent.subTree;

      if (subTree.type === Fragment) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }

      if (vnode === subTree) {
        setScopeId(el, parentComponent.vnode.scopeId, parentComponent.vnode, parentComponent.parent);
      }
    }
  };

  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var start = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
    }
  };

  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        dirs = n2.dirs; // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS

    patchFlag |= n1.patchFlag & 16
    /* FULL_PROPS */
    ;
    var oldProps = n1.props || EMPTY_OBJ;
    var newProps = n2.props || EMPTY_OBJ;
    var vnodeHook;

    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }

    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }

    if (isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16
      /* FULL_PROPS */
      ) {
          // element props contain dynamic keys, full diff needed
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2
        /* CLASS */
        ) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, 'class', null, newProps.class, isSVG);
            }
          } // style
        // this flag is matched when the element has dynamic style bindings


        if (patchFlag & 4
        /* STYLE */
        ) {
            hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
          } // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key


        if (patchFlag & 8
        /* PROPS */
        ) {
            // if the flag is present then dynamicProps must be non-null
            var propsToUpdate = n2.dynamicProps;

            for (var i = 0; i < propsToUpdate.length; i++) {
              var key = propsToUpdate[i];
              var prev = oldProps[key];
              var next = newProps[key];

              if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
      } // text
      // This flag is matched when the element has only dynamic text children.


      if (patchFlag & 1
      /* TEXT */
      ) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }

    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';

    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);

      if (parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  }; // The fast path for blocks.


  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i]; // Determine the container (parent element) for the patch.

      var container = // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & 6
      /* COMPONENT */
      || oldVNode.shapeFlag & 64
      /* TELEPORT */
      ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, true);
    }
  };

  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      for (var key in newProps) {
        // empty string is not valid prop
        if (isReservedProp(key)) continue;
        var next = newProps[key];
        var prev = oldProps[key];

        if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }

      if (oldProps !== EMPTY_OBJ) {
        for (var _key12 in oldProps) {
          if (!isReservedProp(_key12) && !(_key12 in newProps)) {
            hostPatchProp(el, _key12, oldProps[_key12], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
    }
  };

  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren;

    if (patchFlag > 0) {
      optimized = true;
    }

    if (isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor); // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.

      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      && dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);

        if (parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if ( // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */
          );
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    }
  };

  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    if (n1 == null) {
      if (n2.shapeFlag & 512
      /* COMPONENT_KEPT_ALIVE */
      ) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };

  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);

    if (instance.type.__hmrId) {
      registerHMR(instance);
    }

    {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    } // inject renderer internals for keepAlive

    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    } // resolve props and slots for setup context


    {
      startMeasure(instance, "init");
    }
    setupComponent(instance);
    {
      endMeasure(instance, "init");
    } // setup() is async. This component relies on async logic to be resolved
    // before proceeding

    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect); // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback

      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }

      return;
    }

    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };

  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;

    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        {
          popWarningContext();
        }
        return;
      } else {
        // normal update
        instance.next = n2; // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.

        invalidateJob(instance.update); // instance.update is the reactive effect runner.

        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };

  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    // create reactive effect for rendering
    instance.update = effect(function componentEffect() {
      if (!instance.isMounted) {
        var vnodeHook;
        var el = initialVNode.el,
            props = initialVNode.props;
        var bm = instance.bm,
            m = instance.m,
            parent = instance.parent; // beforeMount hook

        if (bm) {
          invokeArrayFns(bm);
        } // onVnodeBeforeMount


        if (vnodeHook = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        } // render


        {
          startMeasure(instance, "render");
        }
        var subTree = instance.subTree = renderComponentRoot(instance);
        {
          endMeasure(instance, "render");
        }

        if (el && hydrateNode) {
          {
            startMeasure(instance, "hydrate");
          } // vnode has adopted host node - perform hydration instead of mount.

          hydrateNode(initialVNode.el, subTree, instance, parentSuspense);
          {
            endMeasure(instance, "hydrate");
          }
        } else {
          {
            startMeasure(instance, "patch");
          }
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          {
            endMeasure(instance, "patch");
          }
          initialVNode.el = subTree.el;
        } // mounted hook


        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        } // onVnodeMounted


        if (vnodeHook = props && props.onVnodeMounted) {
          queuePostRenderEffect(function () {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }, parentSuspense);
        } // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive


        var a = instance.a;

        if (a && initialVNode.shapeFlag & 256
        /* COMPONENT_SHOULD_KEEP_ALIVE */
        ) {
            queuePostRenderEffect(a, parentSuspense);
          }

        instance.isMounted = true;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
            bu = instance.bu,
            u = instance.u,
            _parent = instance.parent,
            vnode = instance.vnode;
        var originNext = next;

        var _vnodeHook;

        {
          pushWarningContext(next || instance.vnode);
        }

        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        } // beforeUpdate hook


        if (bu) {
          invokeArrayFns(bu);
        } // onVnodeBeforeUpdate


        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        } // render


        {
          startMeasure(instance, "render");
        }
        var nextTree = renderComponentRoot(instance);
        {
          endMeasure(instance, "render");
        }
        var prevTree = instance.subTree;
        instance.subTree = nextTree;
        {
          startMeasure(instance, "patch");
        }
        patch(prevTree, nextTree, // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        {
          endMeasure(instance, "patch");
        }
        next.el = nextTree.el;

        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        } // updated hook


        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        } // onVnodeUpdated


        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }

        {
          devtoolsComponentUpdated(instance);
        }
        {
          popWarningContext();
        }
      }
    }, createDevEffectOptions(instance));
  };

  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children); // props update may have triggered pre-flush watchers.
    // flush them before the render update.

    flushPreFlushCbs(undefined, instance.update);
  };

  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG) {
    var optimized = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
        shapeFlag = n2.shapeFlag; // fast path

    if (patchFlag > 0) {
      if (patchFlag & 128
      /* KEYED_FRAGMENT */
      ) {
          // this could be either fully-keyed or mixed (some keyed some not)
          // presence of patchFlag means children are guaranteed to be arrays
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          return;
        } else if (patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) {
          // unkeyed
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          return;
        }
    } // children has 3 possibilities: text, array or no children.


    if (shapeFlag & 8
    /* TEXT_CHILDREN */
    ) {
        // text children fast path
        if (prevShapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            unmountChildren(c1, parentComponent, parentSuspense);
          }

        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          // prev children was array
          if (shapeFlag & 16
          /* ARRAY_CHILDREN */
          ) {
              // two arrays, cannot assume anything, do full diff
              patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            } else {
            // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
            hostSetElementText(container, '');
          } // mount new if array


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          }
      }
    }
  };

  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;

    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
    }

    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
    }
  }; // can be all-keyed or mixed


  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index

    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e

    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
      } else {
        break;
      }

      i++;
    } // 2. sync from end
    // a (b c)
    // d e (b c)


    while (i <= e1 && i <= e2) {
      var _n2 = c1[e1];

      var _n3 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);

      if (isSameVNodeType(_n2, _n3)) {
        patch(_n2, _n3, container, null, parentComponent, parentSuspense, isSVG, optimized);
      } else {
        break;
      }

      e1--;
      e2--;
    } // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0


    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;

        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG);
          i++;
        }
      }
    } // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } // 5. unknown sequence
      // [i ... e1 + 1]: a b [c d e] f g
      // [i ... e2 + 1]: a b [e d c h] f g
      // i = 2, e1 = 4, e2 = 5
      else {
          var s1 = i; // prev starting index

          var s2 = i; // next starting index
          // 5.1 build key:index map for newChildren

          var keyToNewIndexMap = new Map();

          for (i = s2; i <= e2; i++) {
            var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

            if (nextChild.key != null) {
              if (keyToNewIndexMap.has(nextChild.key)) {
                warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
              }

              keyToNewIndexMap.set(nextChild.key, i);
            }
          } // 5.2 loop through old children left to be patched and try to patch
          // matching nodes & remove nodes that are no longer present


          var j;
          var patched = 0;
          var toBePatched = e2 - s2 + 1;
          var moved = false; // used to track whether any node has moved

          var maxNewIndexSoFar = 0; // works as Map<newIndex, oldIndex>
          // Note that oldIndex is offset by +1
          // and oldIndex = 0 is a special value indicating the new node has
          // no corresponding old node.
          // used for determining longest stable subsequence

          var newIndexToOldIndexMap = new Array(toBePatched);

          for (i = 0; i < toBePatched; i++) {
            newIndexToOldIndexMap[i] = 0;
          }

          for (i = s1; i <= e1; i++) {
            var prevChild = c1[i];

            if (patched >= toBePatched) {
              // all new children have been patched so this can only be a removal
              unmount(prevChild, parentComponent, parentSuspense, true);
              continue;
            }

            var newIndex = void 0;

            if (prevChild.key != null) {
              newIndex = keyToNewIndexMap.get(prevChild.key);
            } else {
              // key-less node, try to locate a key-less node of the same type
              for (j = s2; j <= e2; j++) {
                if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                  newIndex = j;
                  break;
                }
              }
            }

            if (newIndex === undefined) {
              unmount(prevChild, parentComponent, parentSuspense, true);
            } else {
              newIndexToOldIndexMap[newIndex - s2] = i + 1;

              if (newIndex >= maxNewIndexSoFar) {
                maxNewIndexSoFar = newIndex;
              } else {
                moved = true;
              }

              patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
              patched++;
            }
          } // 5.3 move and mount
          // generate longest stable subsequence only when nodes have moved


          var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
          j = increasingNewIndexSequence.length - 1; // looping backwards so that we can use last patched node as anchor

          for (i = toBePatched - 1; i >= 0; i--) {
            var nextIndex = s2 + i;
            var _nextChild = c2[nextIndex];

            var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;

            if (newIndexToOldIndexMap[i] === 0) {
              // mount new
              patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG);
            } else if (moved) {
              // move if:
              // There is no stable subsequence (e.g. a reverse)
              // OR current node is not among the stable sequence
              if (j < 0 || i !== increasingNewIndexSequence[j]) {
                move(_nextChild, container, _anchor2, 2
                /* REORDER */
                );
              } else {
                j--;
              }
            }
          }
        }
  };

  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
        type = vnode.type,
        transition = vnode.transition,
        children = vnode.children,
        shapeFlag = vnode.shapeFlag;

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
        type.move(vnode, container, anchor, internals);
        return;
      }

    if (type === Fragment) {
      hostInsert(el, container, anchor);

      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }

      hostInsert(vnode.anchor, container, anchor);
      return;
    } // static node move can only happen when force updating HMR


    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    } // single nodes


    var needTransition = moveType !== 2
    /* REORDER */
    && shapeFlag & 1
    /* ELEMENT */
    && transition;

    if (needTransition) {
      if (moveType === 0
      /* ENTER */
      ) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(function () {
            return transition.enter(el);
          }, parentSuspense);
        } else {
        var leave = transition.leave,
            delayLeave = transition.delayLeave,
            afterLeave = transition.afterLeave;

        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };

        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();

            afterLeave && afterLeave();
          });
        };

        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };

  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref,
        children = vnode.children,
        dynamicChildren = vnode.dynamicChildren,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs; // unset ref

    if (ref != null && parentComponent) {
      setRef(ref, null, parentComponent, parentSuspense, null);
    }

    if (shapeFlag & 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }

    var shouldInvokeDirs = shapeFlag & 1
    /* ELEMENT */
    && dirs;
    var vnodeHook;

    if (vnodeHook = props && props.onVnodeBeforeUnmount) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
      if (shapeFlag & 128
      /* SUSPENSE */
      ) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }

      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }

      if (dynamicChildren && ( // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      )) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && (patchFlag & 128
      /* KEYED_FRAGMENT */
      || patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) || !optimized && shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(children, parentComponent, parentSuspense);
      } // an unmounted teleport should always remove its children if not disabled


      if (shapeFlag & 64
      /* TELEPORT */
      && (doRemove || !isTeleportDisabled(vnode.props))) {
        vnode.type.remove(vnode, internals);
      }

      if (doRemove) {
        remove(vnode);
      }
    }

    if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };

  var remove = function remove(vnode) {
    var type = vnode.type,
        el = vnode.el,
        anchor = vnode.anchor,
        transition = vnode.transition;

    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }

    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }

    var performRemove = function performRemove() {
      hostRemove(el);

      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };

    if (vnode.shapeFlag & 1
    /* ELEMENT */
    && transition && !transition.persisted) {
      var leave = transition.leave,
          delayLeave = transition.delayLeave;

      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };

      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };

  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;

    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(end);
  };

  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }

    var bum = instance.bum,
        effects = instance.effects,
        update = instance.update,
        subTree = instance.subTree,
        um = instance.um; // beforeUnmount hook

    if (bum) {
      invokeArrayFns(bum);
    }

    if (effects) {
      for (var i = 0; i < effects.length; i++) {
        stop(effects[i]);
      }
    } // update may be null if a component is unmounted before its async
    // setup has resolved.


    if (update) {
      stop(update);
      unmount(subTree, instance, parentSuspense, doRemove);
    } // unmounted hook


    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }

    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense); // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.

    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;

      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }

    {
      devtoolsComponentRemoved(instance);
    }
  };

  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };

  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6
    /* COMPONENT */
    ) {
        return getNextHostNode(vnode.component.subTree);
      }

    if (vnode.shapeFlag & 128
    /* SUSPENSE */
    ) {
        return vnode.suspense.next();
      }

    return hostNextSibling(vnode.anchor || vnode.el);
  };

  var render = function render(vnode, container) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container);
    }

    flushPostFlushCbs();
    container._vnode = vnode;
  };

  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;

  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);

    var _createHydrationFns2 = _slicedToArray(_createHydrationFns, 2);

    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }

  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}

function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7
  /* VNODE_HOOK */
  , [vnode, prevVNode]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */


function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;

  if (isArray(ch1) && isArray(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];

      if (c2.shapeFlag & 1
      /* ELEMENT */
      && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32
        /* HYDRATE_EVENTS */
        ) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }

        if (!shallow) traverseStaticChildren(c1, c2);
      } // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)


      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = (u + v) / 2 | 0;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};

var isTeleportDisabled = function isTeleportDisabled(props) {
  return props && (props.disabled || props.disabled === '');
};

var resolveTarget = function resolveTarget(props, select) {
  var targetSelector = props && props.to;

  if (isString(targetSelector)) {
    if (!select) {
      warn("Current renderer does not support string target for Teleports. " + "(missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector);

      if (!target) {
        warn("Failed to locate Teleport target with selector \"".concat(targetSelector, "\". ") + "Note the target element must exist before the component is mounted - " + "i.e. the target cannot be rendered by the component itself, and " + "ideally should be outside of the entire Vue component tree.");
      }

      return target;
    }
  } else {
    if (!targetSelector && !isTeleportDisabled(props)) {
      warn("Invalid Teleport target: ".concat(targetSelector));
    }

    return targetSelector;
  }
};

var TeleportImpl = {
  __isTeleport: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals) {
    var mountChildren = internals.mc,
        patchChildren = internals.pc,
        patchBlockChildren = internals.pbc,
        _internals$o = internals.o,
        insert = _internals$o.insert,
        querySelector = _internals$o.querySelector,
        createText = _internals$o.createText,
        createComment = _internals$o.createComment;
    var disabled = isTeleportDisabled(n2.props);
    var shapeFlag = n2.shapeFlag,
        children = n2.children;

    if (n1 == null) {
      // insert anchors in the main view
      var placeholder = n2.el = createComment('teleport start');
      var mainAnchor = n2.anchor = createComment('teleport end');
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector);
      var targetAnchor = n2.targetAnchor = createText('');

      if (target) {
        insert(targetAnchor, target);
      } else if (!disabled) {
        warn('Invalid Teleport target on mount:', target, "(".concat(_typeof(target), ")"));
      }

      var mount = function mount(container, anchor) {
        // Teleport *always* has Array children. This is enforced in both the
        // compiler and vnode children normalization.
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          }
      };

      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      // update content
      n2.el = n1.el;

      var _mainAnchor = n2.anchor = n1.anchor;

      var _target = n2.target = n1.target;

      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;

      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;

      if (n2.dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG); // even in block tree mode we need to make sure all root-level nodes
        // in the teleport inherit previous DOM references so that they can
        // be moved in future patches.

        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG);
      }

      if (disabled) {
        if (!wasDisabled) {
          // enabled -> disabled
          // move into main container
          moveTeleport(n2, container, _mainAnchor, internals, 1
          /* TOGGLE */
          );
        }
      } else {
        // target changed
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector);

          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0
            /* TARGET_CHANGE */
            );
          } else {
            warn('Invalid Teleport target on update:', _target, "(".concat(_typeof(_target), ")"));
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // move into teleport target
          moveTeleport(n2, _target, _targetAnchor, internals, 1
          /* TOGGLE */
          );
        }
      }
    }
  },
  remove: function remove(vnode, _ref16) {
    var remove = _ref16.r,
        hostRemove = _ref16.o.remove;
    var shapeFlag = vnode.shapeFlag,
        children = vnode.children,
        anchor = vnode.anchor;
    hostRemove(anchor);

    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        for (var i = 0; i < children.length; i++) {
          remove(children[i]);
        }
      }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};

function moveTeleport(vnode, container, parentAnchor, _ref17)
/* REORDER */
{
  var insert = _ref17.o.insert,
      move = _ref17.m;
  var moveType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

  // move target anchor if this is a target change.
  if (moveType === 0
  /* TARGET_CHANGE */
  ) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }

  var el = vnode.el,
      anchor = vnode.anchor,
      shapeFlag = vnode.shapeFlag,
      children = vnode.children,
      props = vnode.props;
  var isReorder = moveType === 2
  /* REORDER */
  ; // move main view anchor if this is a re-order.

  if (isReorder) {
    insert(el, container, parentAnchor);
  } // if this is a re-order and teleport is enabled (content is in target)
  // do not move children. So the opposite is: only move children if this
  // is not a reorder, or the teleport is disabled


  if (!isReorder || isTeleportDisabled(props)) {
    // Teleport has either Array children or no children.
    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        for (var i = 0; i < children.length; i++) {
          move(children[i], container, parentAnchor, 2
          /* REORDER */
          );
        }
      }
  } // move main view anchor if this is a re-order.


  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(node, vnode, parentComponent, parentSuspense, optimized, _ref18, hydrateChildren) {
  var _ref18$o = _ref18.o,
      nextSibling = _ref18$o.nextSibling,
      parentNode = _ref18$o.parentNode,
      querySelector = _ref18$o.querySelector;
  var target = vnode.target = resolveTarget(vnode.props, querySelector);

  if (target) {
    // if multiple teleports rendered to the same target element, we need to
    // pick up from where the last teleport finished instead of the first node
    var targetNode = target._lpa || target.firstChild;

    if (vnode.shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        if (isTeleportDisabled(vnode.props)) {
          vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, optimized);
          vnode.targetAnchor = targetNode;
        } else {
          vnode.anchor = nextSibling(node);
          vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, optimized);
        }

        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
      }
  }

  return vnode.anchor && nextSibling(vnode.anchor);
} // Force-casted public typing for h and TSX props inference


var Teleport = TeleportImpl;
var COMPONENTS = 'components';
var DIRECTIVES = 'directives';
/**
 * @private
 */

function resolveComponent(name) {
  return resolveAsset(COMPONENTS, name) || name;
}

var NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */

function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
/**
 * @private
 */


function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
} // implementation


function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var instance = currentRenderingInstance || currentInstance;

  if (instance) {
    var Component = instance.type; // self name has highest priority

    if (type === COMPONENTS) {
      var selfName = Component.displayName || Component.name;

      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }

    var res = // local registration
    // check instance[type] first for components with mixin or extends.
    resolve(instance[type] || Component[type], name) || // global registration
    resolve(instance.appContext[type], name);

    if (warnMissing && !res) {
      warn("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name));
    }

    return res;
  } else {
    warn("resolve".concat(capitalize(type.slice(0, -1)), " ") + "can only be used in render() or setup().");
  }
}

function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}

var Fragment = Symbol('Fragment');
var Text = Symbol('Text');
var Comment = Symbol('Comment');
var Static = Symbol('Static'); // Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).

var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */

function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
} // Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)


var shouldTrack$1 = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */

function setBlockTracking(value) {
  shouldTrack$1 += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */


function createBlock(type, props, children, patchFlag, dynamicProps) {
  var vnode = createVNode(type, props, children, patchFlag, dynamicProps, true
  /* isBlock: prevent a block from tracking itself */
  ); // save current block children on the block vnode

  vnode.dynamicChildren = currentBlock || EMPTY_ARR; // close block

  closeBlock(); // a block is always going to be patched, so track it as a child of its
  // parent block

  if (shouldTrack$1 > 0 && currentBlock) {
    currentBlock.push(vnode);
  }

  return vnode;
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6
  /* COMPONENT */
  && hmrDirtyComponents.has(n2.type)) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }

  return n1.type === n2.type && n1.key === n2.key;
}

var vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */

function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}

var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len8 = arguments.length, args = new Array(_len8), _key13 = 0; _key13 < _len8; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return _createVNode.apply(void 0, _toConsumableArray(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};

var InternalObjectKey = "__vInternal";

var normalizeKey = function normalizeKey(_ref19) {
  var key = _ref19.key;
  return key != null ? key : null;
};

var normalizeRef = function normalizeRef(_ref20) {
  var ref = _ref20.ref;
  return ref != null ? isArray(ref) ? ref : {
    i: currentRenderingInstance,
    r: ref
  } : null;
};

var createVNode = createVNodeWithArgsTransform;

function _createVNode(type) {
  var _vnode;

  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }

    type = Comment;
  }

  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true
    /* mergeRef: true */
    );

    if (children) {
      normalizeChildren(cloned, children);
    }

    return cloned;
  } // class component normalization.


  if (isClassComponent(type)) {
    type = type.__vccOpts;
  } // class & style normalization.


  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    if (isProxy(props) || InternalObjectKey in props) {
      props = extend({}, props);
    }

    var _props = props,
        klass = _props.class,
        style = _props.style;

    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }

    if (isObject(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }

      props.style = normalizeStyle(style);
    }
  } // encode the vnode type information into a bitmap


  var shapeFlag = isString(type) ? 1
  /* ELEMENT */
  : isSuspense(type) ? 128
  /* SUSPENSE */
  : isTeleport(type) ? 64
  /* TELEPORT */
  : isObject(type) ? 4
  /* STATEFUL_COMPONENT */
  : isFunction(type) ? 2
  /* FUNCTIONAL_COMPONENT */
  : 0;

  if (shapeFlag & 4
  /* STATEFUL_COMPONENT */
  && isProxy(type)) {
    type = toRaw(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }

  var vnode = (_vnode = {
    __v_isVNode: true
  }, _defineProperty(_vnode, "__v_skip"
  /* SKIP */
  , true), _defineProperty(_vnode, "type", type), _defineProperty(_vnode, "props", props), _defineProperty(_vnode, "key", props && normalizeKey(props)), _defineProperty(_vnode, "ref", props && normalizeRef(props)), _defineProperty(_vnode, "scopeId", currentScopeId), _defineProperty(_vnode, "children", null), _defineProperty(_vnode, "component", null), _defineProperty(_vnode, "suspense", null), _defineProperty(_vnode, "ssContent", null), _defineProperty(_vnode, "ssFallback", null), _defineProperty(_vnode, "dirs", null), _defineProperty(_vnode, "transition", null), _defineProperty(_vnode, "el", null), _defineProperty(_vnode, "anchor", null), _defineProperty(_vnode, "target", null), _defineProperty(_vnode, "targetAnchor", null), _defineProperty(_vnode, "staticCount", 0), _defineProperty(_vnode, "shapeFlag", shapeFlag), _defineProperty(_vnode, "patchFlag", patchFlag), _defineProperty(_vnode, "dynamicProps", dynamicProps), _defineProperty(_vnode, "dynamicChildren", null), _defineProperty(_vnode, "appContext", null), _vnode); // validate key

  if (vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  }

  normalizeChildren(vnode, children); // normalize suspense children

  if (shapeFlag & 128
  /* SUSPENSE */
  ) {
      var _normalizeSuspenseChi = normalizeSuspenseChildren(vnode),
          content = _normalizeSuspenseChi.content,
          fallback = _normalizeSuspenseChi.fallback;

      vnode.ssContent = content;
      vnode.ssFallback = fallback;
    }

  if (shouldTrack$1 > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && ( // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  patchFlag > 0 || shapeFlag & 6
  /* COMPONENT */
  ) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  patchFlag !== 32
  /* HYDRATE_EVENTS */
  ) {
      currentBlock.push(vnode);
    }

  return vnode;
}

function cloneVNode(vnode, extraProps) {
  var _ref21;

  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
      ref = vnode.ref,
      patchFlag = vnode.patchFlag;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  return _ref21 = {
    __v_isVNode: true
  }, _defineProperty(_ref21, "__v_skip"
  /* SKIP */
  , true), _defineProperty(_ref21, "type", vnode.type), _defineProperty(_ref21, "props", mergedProps), _defineProperty(_ref21, "key", mergedProps && normalizeKey(mergedProps)), _defineProperty(_ref21, "ref", extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
  // if the vnode itself already has a ref, cloneVNode will need to merge
  // the refs so the single vnode can be set on multiple refs
  mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref), _defineProperty(_ref21, "scopeId", vnode.scopeId), _defineProperty(_ref21, "children", vnode.children), _defineProperty(_ref21, "target", vnode.target), _defineProperty(_ref21, "targetAnchor", vnode.targetAnchor), _defineProperty(_ref21, "staticCount", vnode.staticCount), _defineProperty(_ref21, "shapeFlag", vnode.shapeFlag), _defineProperty(_ref21, "patchFlag", extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
  ? 16
  /* FULL_PROPS */
  : patchFlag | 16
  /* FULL_PROPS */
  : patchFlag), _defineProperty(_ref21, "dynamicProps", vnode.dynamicProps), _defineProperty(_ref21, "dynamicChildren", vnode.dynamicChildren), _defineProperty(_ref21, "appContext", vnode.appContext), _defineProperty(_ref21, "dirs", vnode.dirs), _defineProperty(_ref21, "transition", vnode.transition), _defineProperty(_ref21, "component", vnode.component), _defineProperty(_ref21, "suspense", vnode.suspense), _defineProperty(_ref21, "ssContent", vnode.ssContent && cloneVNode(vnode.ssContent)), _defineProperty(_ref21, "ssFallback", vnode.ssFallback && cloneVNode(vnode.ssFallback)), _defineProperty(_ref21, "el", vnode.el), _defineProperty(_ref21, "anchor", vnode.anchor), _ref21;
}
/**
 * @private
 */


function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
/**
 * @private
 */


function createStaticVNode(content, numberOfNodes) {
  // A static vnode can contain multiple stringified elements, and the number
  // of elements is necessary for hydration.
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
/**
 * @private
 */


function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}

function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment);
  } else if (isArray(child)) {
    // fragment
    return createVNode(Fragment, null, child);
  } else if (_typeof(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return child.el === null ? child : cloneVNode(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
} // optimized normalization for template-compiled render fns


function cloneIfMounted(child) {
  return child.el === null ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;

  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16
    /* ARRAY_CHILDREN */
    ;
  } else if (_typeof(children) === 'object') {
    if (shapeFlag & 1
    /* ELEMENT */
    || shapeFlag & 64
    /* TELEPORT */
    ) {
        // Normalize slot to plain children for plain element and Teleport
        var slot = children.default;

        if (slot) {
          // _c marker is added by withCtx() indicating this is a compiled slot
          slot._c && setCompiledSlotRendering(1);
          normalizeChildren(vnode, slot());
          slot._c && setCompiledSlotRendering(-1);
        }

        return;
      } else {
      type = 32
      /* SLOTS_CHILDREN */
      ;
      var slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3
      /* FORWARDED */
      && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.vnode.patchFlag & 1024
        /* DYNAMIC_SLOTS */
        ) {
            children._ = 2
            /* DYNAMIC */
            ;
            vnode.patchFlag |= 1024
            /* DYNAMIC_SLOTS */
            ;
          } else {
          children._ = 1
          /* STABLE */
          ;
        }
      }
    }
  } else if (isFunction(children)) {
    children = {
      default: children,
      _ctx: currentRenderingInstance
    };
    type = 32
    /* SLOTS_CHILDREN */
    ;
  } else {
    children = String(children); // force teleport children to array so it can be moved around

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
        type = 16
        /* ARRAY_CHILDREN */
        ;
        children = [createTextVNode(children)];
      } else {
      type = 8
      /* TEXT_CHILDREN */
      ;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  var ret = extend({}, arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in toMerge) {
      if (key === 'class') {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === 'style') {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];

        if (existing !== incoming) {
          ret[key] = existing ? [].concat(existing, toMerge[key]) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}

function provide(key, value) {
  if (!currentInstance) {
    {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides; // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.

    var parentProvides = currentInstance.parent && currentInstance.parent.provides;

    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    } // TS doesn't allow symbol as index type


    provides[key] = value;
  }
}

function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;

  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the intance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;

    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue() : defaultValue;
    } else {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else {
    warn("inject() can only be used inside setup() or functional components.");
  }
}

function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}

var isInBeforeCreate = false;

function applyOptions(instance, options) {
  var deferredData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var deferredWatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var deferredProvide = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var asMixin = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var mixins = options.mixins,
      extendsOptions = options.extends,
      dataOptions = options.data,
      computedOptions = options.computed,
      methods = options.methods,
      watchOptions = options.watch,
      provideOptions = options.provide,
      injectOptions = options.inject,
      components = options.components,
      directives = options.directives,
      beforeMount = options.beforeMount,
      mounted = options.mounted,
      beforeUpdate = options.beforeUpdate,
      updated = options.updated,
      activated = options.activated,
      deactivated = options.deactivated,
      beforeDestroy = options.beforeDestroy,
      beforeUnmount = options.beforeUnmount,
      destroyed = options.destroyed,
      unmounted = options.unmounted,
      render = options.render,
      renderTracked = options.renderTracked,
      renderTriggered = options.renderTriggered,
      errorCaptured = options.errorCaptured;
  var publicThis = instance.proxy;
  var ctx = instance.ctx;
  var globalMixins = instance.appContext.mixins;

  if (asMixin && render && instance.render === NOOP) {
    instance.render = render;
  } // applyOptions is called non-as-mixin once per instance


  if (!asMixin) {
    isInBeforeCreate = true;
    callSyncHook('beforeCreate', "bc"
    /* BEFORE_CREATE */
    , options, instance, globalMixins);
    isInBeforeCreate = false; // global mixins are applied first

    applyMixins(instance, globalMixins, deferredData, deferredWatch, deferredProvide);
  } // extending a base component...


  if (extendsOptions) {
    applyOptions(instance, extendsOptions, deferredData, deferredWatch, deferredProvide, true);
  } // local mixins


  if (mixins) {
    applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide);
  }

  var checkDuplicateProperties = createDuplicateChecker();
  {
    var _instance$propsOption5 = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption5[0];

    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props"
        /* PROPS */
        , key);
      }
    }
  } // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)

  if (injectOptions) {
    if (isArray(injectOptions)) {
      for (var i = 0; i < injectOptions.length; i++) {
        var _key14 = injectOptions[i];
        ctx[_key14] = inject(_key14);
        {
          checkDuplicateProperties("Inject"
          /* INJECT */
          , _key14);
        }
      }
    } else {
      for (var _key15 in injectOptions) {
        var opt = injectOptions[_key15];

        if (isObject(opt)) {
          ctx[_key15] = inject(opt.from || _key15, opt.default, true
          /* treat default function as factory */
          );
        } else {
          ctx[_key15] = inject(opt);
        }

        {
          checkDuplicateProperties("Inject"
          /* INJECT */
          , _key15);
        }
      }
    }
  }

  if (methods) {
    for (var _key16 in methods) {
      var methodHandler = methods[_key16];

      if (isFunction(methodHandler)) {
        ctx[_key16] = methodHandler.bind(publicThis);
        {
          checkDuplicateProperties("Methods"
          /* METHODS */
          , _key16);
        }
      } else {
        warn("Method \"".concat(_key16, "\" has type \"").concat(_typeof(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }

  if (!asMixin) {
    if (deferredData.length) {
      deferredData.forEach(function (dataFn) {
        return resolveData(instance, dataFn, publicThis);
      });
    }

    if (dataOptions) {
      resolveData(instance, dataOptions, publicThis);
    }

    {
      (function () {
        var rawData = toRaw(instance.data);

        var _loop = function _loop(_key17) {
          checkDuplicateProperties("Data"
          /* DATA */
          , _key17); // expose data on ctx during dev

          if (_key17[0] !== '$' && _key17[0] !== '_') {
            Object.defineProperty(ctx, _key17, {
              configurable: true,
              enumerable: true,
              get: function get() {
                return rawData[_key17];
              },
              set: NOOP
            });
          }
        };

        for (var _key17 in rawData) {
          _loop(_key17);
        }
      })();
    }
  } else if (dataOptions) {
    deferredData.push(dataOptions);
  }

  if (computedOptions) {
    var _loop2 = function _loop2(_key18) {
      var opt = computedOptions[_key18];
      var get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;

      if (get === NOOP) {
        warn("Computed property \"".concat(_key18, "\" has no getter."));
      }

      var set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : function () {
        warn("Write operation failed: computed property \"".concat(_key18, "\" is readonly."));
      };
      var c = computed$1({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key18, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });
      {
        checkDuplicateProperties("Computed"
        /* COMPUTED */
        , _key18);
      }
    };

    for (var _key18 in computedOptions) {
      _loop2(_key18);
    }
  }

  if (watchOptions) {
    deferredWatch.push(watchOptions);
  }

  if (!asMixin && deferredWatch.length) {
    deferredWatch.forEach(function (watchOptions) {
      for (var _key19 in watchOptions) {
        createWatcher(watchOptions[_key19], ctx, publicThis, _key19);
      }
    });
  }

  if (provideOptions) {
    deferredProvide.push(provideOptions);
  }

  if (!asMixin && deferredProvide.length) {
    deferredProvide.forEach(function (provideOptions) {
      var provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;

      for (var _key20 in provides) {
        provide(_key20, provides[_key20]);
      }
    });
  } // asset options.
  // To reduce memory usage, only components with mixins or extends will have
  // resolved asset registry attached to instance.


  if (asMixin) {
    if (components) {
      extend(instance.components || (instance.components = extend({}, instance.type.components)), components);
    }

    if (directives) {
      extend(instance.directives || (instance.directives = extend({}, instance.type.directives)), directives);
    }
  } // lifecycle options


  if (!asMixin) {
    callSyncHook('created', "c"
    /* CREATED */
    , options, instance, globalMixins);
  }

  if (beforeMount) {
    onBeforeMount(beforeMount.bind(publicThis));
  }

  if (mounted) {
    onMounted(mounted.bind(publicThis));
  }

  if (beforeUpdate) {
    onBeforeUpdate(beforeUpdate.bind(publicThis));
  }

  if (updated) {
    onUpdated(updated.bind(publicThis));
  }

  if (activated) {
    onActivated(activated.bind(publicThis));
  }

  if (deactivated) {
    onDeactivated(deactivated.bind(publicThis));
  }

  if (errorCaptured) {
    onErrorCaptured(errorCaptured.bind(publicThis));
  }

  if (renderTracked) {
    onRenderTracked(renderTracked.bind(publicThis));
  }

  if (renderTriggered) {
    onRenderTriggered(renderTriggered.bind(publicThis));
  }

  if (beforeDestroy) {
    warn("`beforeDestroy` has been renamed to `beforeUnmount`.");
  }

  if (beforeUnmount) {
    onBeforeUnmount(beforeUnmount.bind(publicThis));
  }

  if (destroyed) {
    warn("`destroyed` has been renamed to `unmounted`.");
  }

  if (unmounted) {
    onUnmounted(unmounted.bind(publicThis));
  }
}

function callSyncHook(name, type, options, instance, globalMixins) {
  callHookFromMixins(name, type, globalMixins, instance);
  var base = options.extends,
      mixins = options.mixins;

  if (base) {
    callHookFromExtends(name, type, base, instance);
  }

  if (mixins) {
    callHookFromMixins(name, type, mixins, instance);
  }

  var selfHook = options[name];

  if (selfHook) {
    callWithAsyncErrorHandling(selfHook.bind(instance.proxy), instance, type);
  }
}

function callHookFromExtends(name, type, base, instance) {
  if (base.extends) {
    callHookFromExtends(name, type, base.extends, instance);
  }

  var baseHook = base[name];

  if (baseHook) {
    callWithAsyncErrorHandling(baseHook.bind(instance.proxy), instance, type);
  }
}

function callHookFromMixins(name, type, mixins, instance) {
  for (var i = 0; i < mixins.length; i++) {
    var chainedMixins = mixins[i].mixins;

    if (chainedMixins) {
      callHookFromMixins(name, type, chainedMixins, instance);
    }

    var fn = mixins[i][name];

    if (fn) {
      callWithAsyncErrorHandling(fn.bind(instance.proxy), instance, type);
    }
  }
}

function applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide) {
  for (var i = 0; i < mixins.length; i++) {
    applyOptions(instance, mixins[i], deferredData, deferredWatch, deferredProvide, true);
  }
}

function resolveData(instance, dataFn, publicThis) {
  if (!isFunction(dataFn)) {
    warn("The data option must be a function. " + "Plain object usage is no longer supported.");
  }

  var data = dataFn.call(publicThis, publicThis);

  if (isPromise(data)) {
    warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
  }

  if (!isObject(data)) {
    warn("data() should return an object.");
  } else if (instance.data === EMPTY_OBJ) {
    instance.data = reactive(data);
  } else {
    // existing data: this is a mixin or extends.
    extend(instance.data, data);
  }
}

function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };

  if (isString(raw)) {
    var handler = ctx[raw];

    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];

      if (isFunction(_handler)) {
        watch(getter, _handler, raw);
      } else {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}

function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;

    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function resolveMergedOptions(instance) {
  var raw = instance.type;
  var __merged = raw.__merged,
      mixins = raw.mixins,
      extendsOptions = raw.extends;
  if (__merged) return __merged;
  var globalMixins = instance.appContext.mixins;
  if (!globalMixins.length && !mixins && !extendsOptions) return raw;
  var options = {};
  globalMixins.forEach(function (m) {
    return mergeOptions(options, m, instance);
  });
  mergeOptions(options, raw, instance);
  return raw.__merged = options;
}

function mergeOptions(to, from, instance) {
  var strats = instance.appContext.config.optionMergeStrategies;
  var mixins = from.mixins,
      extendsOptions = from.extends;
  extendsOptions && mergeOptions(to, extendsOptions, instance);
  mixins && mixins.forEach(function (m) {
    return mergeOptions(to, m, instance);
  });

  for (var key in from) {
    if (strats && hasOwn(strats, key)) {
      to[key] = strats[key](to[key], from[key], instance.proxy, key);
    } else {
      to[key] = from[key];
    }
  }
}

var publicPropertiesMap = extend(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return shallowReadonly(i.props);
  },
  $attrs: function $attrs(i) {
    return shallowReadonly(i.attrs);
  },
  $slots: function $slots(i) {
    return shallowReadonly(i.slots);
  },
  $refs: function $refs(i) {
    return shallowReadonly(i.refs);
  },
  $parent: function $parent(i) {
    return i.parent && i.parent.proxy;
  },
  $root: function $root(i) {
    return i.root && i.root.proxy;
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return resolveMergedOptions(i);
  },
  $forceUpdate: function $forceUpdate(i) {
    return function () {
      return queueJob(i.update);
    };
  },
  $nextTick: function $nextTick(i) {
    return nextTick.bind(i.proxy);
  },
  $watch: function $watch(i) {
    return instanceWatch.bind(i);
  }
});
var PublicInstanceProxyHandlers = {
  get: function get(_ref22, key) {
    var instance = _ref22._;
    var ctx = instance.ctx,
        setupState = instance.setupState,
        data = instance.data,
        props = instance.props,
        accessCache = instance.accessCache,
        type = instance.type,
        appContext = instance.appContext; // let @vue/reactivity know it should never observe Vue public instances.

    if (key === "__v_skip"
    /* SKIP */
    ) {
        return true;
      } // for internal formatters to know that this is a Vue instance


    if (key === '__isVue') {
      return true;
    } // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.


    var normalizedProps;

    if (key[0] !== '$') {
      var n = accessCache[key];

      if (n !== undefined) {
        switch (n) {
          case 0
          /* SETUP */
          :
            return setupState[key];

          case 1
          /* DATA */
          :
            return data[key];

          case 3
          /* CONTEXT */
          :
            return ctx[key];

          case 2
          /* PROPS */
          :
            return props[key];
          // default: just fallthrough
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 0
        /* SETUP */
        ;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 1
        /* DATA */
        ;
        return data[key];
      } else if ( // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 2
        /* PROPS */
        ;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 3
        /* CONTEXT */
        ;
        return ctx[key];
      } else if (!isInBeforeCreate) {
        accessCache[key] = 4
        /* OTHER */
        ;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties; // public $xxx properties

    if (publicGetter) {
      if (key === '$attrs') {
        track(instance, "get"
        /* GET */
        , key);
        markAttrsAccessed();
      }

      return publicGetter(instance);
    } else if ( // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 3
      /* CONTEXT */
      ;
      return ctx[key];
    } else if ( // global properties
    globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      return globalProperties[key];
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== EMPTY_OBJ && (key[0] === '$' || key[0] === '_') && hasOwn(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref23, key, value) {
    var instance = _ref23._;
    var data = instance.data,
        setupState = instance.setupState,
        ctx = instance.ctx;

    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
    } else if (key in instance.props) {
      warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."), instance);
      return false;
    }

    if (key[0] === '$' && key.slice(1) in instance) {
      warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.", instance);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },
  has: function has(_ref24, key) {
    var _ref24$_ = _ref24._,
        data = _ref24$_.data,
        setupState = _ref24$_.setupState,
        accessCache = _ref24$_.accessCache,
        ctx = _ref24$_.ctx,
        appContext = _ref24$_.appContext,
        propsOptions = _ref24$_.propsOptions;
    var normalizedProps;
    return accessCache[key] !== undefined || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}
var RuntimeCompiledPublicInstanceProxyHandlers = extend({}, PublicInstanceProxyHandlers, {
  get: function get(target, key) {
    // fast path for unscopables when using `with` block
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has: function has(_, key) {
    var has = key[0] !== '_' && !isGloballyWhitelisted(key);

    if (!has && PublicInstanceProxyHandlers.has(_, key)) {
      warn("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }

    return has;
  }
}); // In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.

function createRenderContext(instance) {
  var target = {}; // expose internal instance for proxy handlers

  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  }); // expose public properties

  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  }); // expose global properties

  var globalProperties = instance.appContext.config.globalProperties;
  Object.keys(globalProperties).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return globalProperties[key];
      },
      set: NOOP
    });
  });
  return target;
} // dev only


function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
      _instance$propsOption6 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption6[0];

  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: NOOP
      });
    });
  }
} // dev only


function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
      setupState = instance.setupState;
  Object.keys(toRaw(setupState)).forEach(function (key) {
    if (key[0] === '$' || key[0] === '_') {
      warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
      return;
    }

    Object.defineProperty(ctx, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return setupState[key];
      },
      set: NOOP
    });
  });
}

var emptyAppContext = createAppContext();
var uid$2 = 0;

function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type; // inherit parent app context - or - if root, adopt from root vnode

  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid$2++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    update: null,
    render: null,
    proxy: null,
    withProxy: null,
    effects: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resovled assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null
  };
  {
    instance.ctx = createRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  {
    devtoolsComponentAdded(instance);
  }
  return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};

var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
};

var isBuiltInTag = /*#__PURE__*/makeMap('slot,component');

function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || NO;

  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
      props = _instance$vnode.props,
      children = _instance$vnode.children,
      shapeFlag = _instance$vnode.shapeFlag;
  var isStateful = shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ;
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  var Component = instance.type;
  {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }

    if (Component.components) {
      var names = Object.keys(Component.components);

      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }

    if (Component.directives) {
      var _names = Object.keys(Component.directives);

      for (var _i3 = 0; _i3 < _names.length; _i3++) {
        validateDirectiveName(_names[_i3]);
      }
    }
  } // 0. create render proxy property access cache

  instance.accessCache = Object.create(null); // 1. create public instance / render proxy
  // also mark it raw so it's never observed

  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  {
    exposePropsOnRenderContext(instance);
  } // 2. call setup()

  var setup = Component.setup;

  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    currentInstance = instance;
    pauseTracking();
    var setupResult = callWithErrorHandling(setup, instance, 0
    /* SETUP_FUNCTION */
    , [shallowReadonly(instance.props), setupContext]);
    resetTracking();
    currentInstance = null;

    if (isPromise(setupResult)) {
      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult);
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult);
    }
  } else {
    finishComponentSetup(instance);
  }
}

function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    // setup returned an inline render function
    instance.render = setupResult;
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    } // setup returned bindings.
    // assuming a render function compiled from template is present.


    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : _typeof(setupResult)));
  }

  finishComponentSetup(instance);
}

var compile;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */

function registerRuntimeCompiler(_compile) {
  compile = _compile;
}

function finishComponentSetup(instance, isSSR) {
  var Component = instance.type; // template / render function normalization

  if (!instance.render) {
    // could be set from setup()
    if (compile && Component.template && !Component.render) {
      {
        startMeasure(instance, "compile");
      }
      Component.render = compile(Component.template, {
        isCustomElement: instance.appContext.config.isCustomElement,
        delimiters: Component.delimiters
      });
      {
        endMeasure(instance, "compile");
      }
    }

    instance.render = Component.render || NOOP; // for runtime-compiled render functions using `with` blocks, the render
    // proxy used needs a different `has` handler which is more performant and
    // also only allows a whitelist of globals to fallthrough.

    if (instance.render._rc) {
      instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  } // support for 2.x options


  {
    currentInstance = instance;
    applyOptions(instance, Component);
    currentInstance = null;
  } // warn missing template/render

  if (!Component.render && instance.render === NOOP) {
    /* istanbul ignore if */
    if (!compile && Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Use \"vue.esm-browser.js\" instead."
      /* should not happen */
      );
    } else {
      warn("Component is missing template or render function.");
    }
  }
}

var attrHandlers = {
  get: function get(target, key) {
    {
      markAttrsAccessed();
    }
    return target[key];
  },
  set: function set() {
    warn("setupContext.attrs is readonly.");
    return false;
  },
  deleteProperty: function deleteProperty() {
    warn("setupContext.attrs is readonly.");
    return false;
  }
};

function createSetupContext(instance) {
  {
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
      get attrs() {
        return new Proxy(instance.attrs, attrHandlers);
      },

      get slots() {
        return shallowReadonly(instance.slots);
      },

      get emit() {
        return function (event) {
          for (var _len9 = arguments.length, args = new Array(_len9 > 1 ? _len9 - 1 : 0), _key21 = 1; _key21 < _len9; _key21++) {
            args[_key21 - 1] = arguments[_key21];
          }

          return instance.emit.apply(instance, [event].concat(args));
        };
      }

    });
  }
} // record effects created during a component's setup() so that they can be
// stopped when the component unmounts


function recordInstanceBoundEffect(effect) {
  if (currentInstance) {
    (currentInstance.effects || (currentInstance.effects = [])).push(effect);
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};
/* istanbul ignore next */


function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = isFunction(Component) ? Component.displayName || Component.name : Component.name;

  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.vue$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent(value) {
  return isFunction(value) && '__vccOpts' in value;
}

function computed$1(getterOrOptions) {
  var c = computed(getterOrOptions);
  recordInstanceBoundEffect(c.effect);
  return c;
} // implementation, close to no-op


function defineComponent(options) {
  return isFunction(options) ? {
    setup: options,
    name: options.name
  } : options;
}

function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = {
      loader: source
    };
  }

  var _source = source,
      loader = _source.loader,
      loadingComponent = _source.loadingComponent,
      errorComponent = _source.errorComponent,
      _source$delay = _source.delay,
      delay = _source$delay === void 0 ? 200 : _source$delay,
      timeout = _source.timeout,
      _source$suspensible = _source.suspensible,
      suspensible = _source$suspensible === void 0 ? true : _source$suspensible,
      userOnError = _source.onError;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;

  var retry = function retry() {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function load() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch(function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function userRetry() {
            return resolve(retry());
          };

          var userFail = function userFail() {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }

      if (!comp) {
        warn("Async component loader resolved to undefined. " + "If you are using retry(), make sure to return its return value.");
      } // interop module default


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp.default;
      }

      if (comp && !isObject(comp) && !isFunction(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }

      resolvedComp = comp;
      return comp;
    }));
  };

  return defineComponent({
    __asyncLoader: load,
    name: 'AsyncComponentWrapper',
    setup: function setup() {
      var instance = currentInstance; // already resolved

      if (resolvedComp) {
        return function () {
          return createInnerComp(resolvedComp, instance);
        };
      }

      var onError = function onError(err) {
        pendingRequest = null;
        handleError(err, instance, 13
        /* ASYNC_COMPONENT_LOADER */
        , !errorComponent
        /* do not throw in dev if user provided error component */
        );
      }; // suspense-controlled or SSR.


      if (suspensible && instance.suspense || false) {
        return load().then(function (comp) {
          return function () {
            return createInnerComp(comp, instance);
          };
        }).catch(function (err) {
          onError(err);
          return function () {
            return errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          };
        });
      }

      var loaded = ref(false);
      var error = ref();
      var delayed = ref(!!delay);

      if (delay) {
        setTimeout(function () {
          delayed.value = false;
        }, delay);
      }

      if (timeout != null) {
        setTimeout(function () {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError(err);
            error.value = err;
          }
        }, timeout);
      }

      load().then(function () {
        loaded.value = true;
      }).catch(function (err) {
        onError(err);
        error.value = err;
      });
      return function () {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}

function createInnerComp(comp, _ref25) {
  var _ref25$vnode = _ref25.vnode,
      props = _ref25$vnode.props,
      children = _ref25$vnode.children;
  return createVNode(comp, props, children);
} // Actual implementation


function h(type, propsOrChildren, children) {
  var l = arguments.length;

  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      } // props without children


      return createVNode(type, propsOrChildren);
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }

    return createVNode(type, propsOrChildren, children);
  }
}

var ssrContextKey = Symbol("ssrContext");

var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);

    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSsrContext() conditionally in the server build.");
    }

    return ctx;
  }
};

function initCustomFormatter() {
  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  }; // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html

  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!isObject(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if (isRef(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if (isReactive(obj)) {
        return ['div', {}, ['span', vueStyle, 'Reactive'], '<', formatValue(obj), ">".concat(isReadonly(obj) ? " (readonly)" : "")];
      } else if (isReadonly(obj)) {
        return ['div', {}, ['span', vueStyle, 'Readonly'], '<', formatValue(obj), '>'];
      }

      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(_toConsumableArray(formatInstance(obj.$)));
      }
    }
  };

  function formatInstance(instance) {
    var blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', toRaw(instance.props)));
    }

    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }

    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock('data', toRaw(instance.data)));
    }

    var computed = extractKeys(instance, 'computed');

    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }

    var injected = extractKeys(instance, 'inject');

    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }

    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = extend({}, target);

    if (!Object.keys(target).length) {
      return ['span', {}];
    }

    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(_toConsumableArray(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }

  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if (isObject(v)) {
      return ['object', {
        object: asRaw ? toRaw(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    var Comp = instance.type;

    if (isFunction(Comp)) {
      return;
    }

    var extracted = {};

    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];

    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }

    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (v._shallow) {
      return "ShallowRef";
    }

    if (v.effect) {
      return "ComputedRef";
    }

    return "Ref";
  }
  /* eslint-disable no-restricted-globals */


  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
/**
 * Actual implementation
 */


function renderList(source, renderItem) {
  var ret;

  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);

    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i);
    }
  } else if (typeof source === 'number') {
    if (!Number.isInteger(source)) {
      warn("The v-for range expect an integer value but got ".concat(source, "."));
      return [];
    }

    ret = new Array(source);

    for (var _i4 = 0; _i4 < source; _i4++) {
      ret[_i4] = renderItem(_i4 + 1, _i4);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, renderItem);
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);

      for (var _i5 = 0, _l = keys.length; _i5 < _l; _i5++) {
        var key = keys[_i5];
        ret[_i5] = renderItem(source[key], key, _i5);
      }
    }
  } else {
    ret = [];
  }

  return ret;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */


function toHandlers(obj) {
  var ret = {};

  if (!isObject(obj)) {
    warn("v-on with no argument expects an object value.");
    return ret;
  }

  for (var key in obj) {
    ret[toHandlerKey(key)] = obj[key];
  }

  return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */


function createSlots(slots, dynamicSlots) {
  for (var i = 0; i < dynamicSlots.length; i++) {
    var slot = dynamicSlots[i]; // array of dynamic slot generated by <template v-for="..." #[...]>

    if (isArray(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      // conditional single slot generated by <template v-if="..." #foo>
      slots[slot.name] = slot.fn;
    }
  }

  return slots;
} // Core API ------------------------------------------------------------------


var version = "3.0.2";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */

var ssrUtils = null;
var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var tempContainer;
var tempSVGContainer;
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is) {
    return isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    return el.cloneNode(true);
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG) {
    var temp = isSVG ? tempSVGContainer || (tempSVGContainer = doc.createElementNS(svgNS, 'svg')) : tempContainer || (tempContainer = doc.createElement('div'));
    temp.innerHTML = content;
    var first = temp.firstChild;
    var node = first;
    var last = node;

    while (node) {
      last = node;
      nodeOps.insert(node, parent, anchor);
      node = temp.firstChild;
    }

    return [first, last];
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  if (value == null) {
    value = '';
  }

  if (isSVG) {
    el.setAttribute('class', value);
  } else {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    var transitionClasses = el._vtc;

    if (transitionClasses) {
      value = (value ? [value].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(' ');
    }

    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;

  if (!next) {
    el.removeAttribute('style');
  } else if (isString(next)) {
    if (prev !== next) {
      style.cssText = next;
    }
  } else {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !isString(prev)) {
      for (var _key22 in prev) {
        if (next[_key22] == null) {
          setStyle(style, _key22, '');
        }
      }
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = camelize(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = capitalize(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var _isBoolean = isSpecialBooleanAttr(key);

    if (value == null || _isBoolean && value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, _isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS') {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }

    return;
  }

  if (value === '' && typeof el[key] === 'boolean') {
    // e.g. <select multiple> compiles to { multiple: '' }
    el[key] = true;
  } else if (value == null && typeof el[key] === 'string') {
    // e.g. <div :id="null">
    el[key] = '';
    el.removeAttribute(key);
  } else {
    // some properties perform value validation and throw
    try {
      el[key] = value;
    } catch (e) {
      {
        warn("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
      }
    }
  }
} // Async edge case fix requires storing an event listener's attach timestamp.


var _getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.

if (typeof document !== 'undefined' && _getNow() > document.createEvent('Event').timeStamp) {
  // if the low-res timestamp which is bigger than the event timestamp
  // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
  // and we need to use the hi-res version for event listeners as well.
  _getNow = function _getNow() {
    return performance.now();
  };
} // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = _slicedToArray(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [name.slice(2).toLowerCase(), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var forcePatchProp = function forcePatchProp(_, key) {
  return key === 'value';
};

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  switch (key) {
    // special
    case 'class':
      patchClass(el, nextValue, isSVG);
      break;

    case 'style':
      patchStyle(el, prevValue, nextValue);
      break;

    default:
      if (isOn(key)) {
        // ignore v-model listeners
        if (!isModelListener(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      } else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
          el._trueValue = nextValue;
        } else if (key === 'false-value') {
          el._falseValue = nextValue;
        }

        patchAttr(el, key, nextValue, isSVG);
      }

      break;
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML
    if (key === 'innerHTML') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }

    return false;
  } // spellcheck and draggable are numerated attrs, however their
  // corresponding DOM properties are actually booleans - this leads to
  // setting it with a string "false" value leading it to be coerced to
  // `true`, so we need to always treat them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable') {
    return false;
  } // #1787 form as an attribute must be a string, while it accepts an Element as
  // a prop


  if (key === 'form' && typeof value === 'string') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }

  return key in el;
}

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = getCurrentInstance();

    if (!instance) {
      warn("useCssModule must be called inside setup()");
      return EMPTY_OBJ;
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
      warn("Current instance does not have CSS modules injected.");
      return EMPTY_OBJ;
    }

    var mod = modules[name];

    if (!mod) {
      warn("Current instance does not have CSS module named \"".concat(name, "\"."));
      return EMPTY_OBJ;
    }

    return mod;
  }
}

function useCssVars(getter) {
  var scoped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var instance = getCurrentInstance();
  /* istanbul ignore next */

  if (!instance) {
    warn("useCssVars is called without current active component instance.");
    return;
  }

  var prefix = scoped && instance.type.__scopeId ? "".concat(instance.type.__scopeId.replace(/^data-v-/, ''), "-") : "";

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy), prefix);
  };

  onMounted(function () {
    return watchEffect(setVars);
  });
  onUpdated(setVars);
}

function setVarsOnVNode(vnode, vars, prefix) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      var suspense = vnode.suspense;
      vnode = suspense.activeBranch;

      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(function () {
          setVarsOnVNode(suspense.activeBranch, vars, prefix);
        });
      }
    } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    var style = vnode.el.style;

    for (var key in vars) {
      style.setProperty("--".concat(prefix).concat(key), unref(vars[key]));
    }
  } else if (vnode.type === Fragment) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars, prefix);
    });
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref26) {
  var slots = _ref26.slots;
  return h(BaseTransition, resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/extend({}, BaseTransition.props, DOMTransitionPropsValidators);

function resolveTransitionProps(rawProps) {
  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      _rawProps$css = rawProps.css,
      css = _rawProps$css === void 0 ? true : _rawProps$css,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (!css) {
    return baseProps;
  }

  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      hook && hook(el, resolve);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!(hook && hook.length > 1)) {
          if (enterDuration) {
            setTimeout(resolve, enterDuration);
          } else {
            whenTransitionEnds(el, type, resolve);
          }
        }
      });
    };
  };

  return extend(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      _onBeforeEnter && _onBeforeEnter(el);
      addTransitionClass(el, enterActiveClass);
      addTransitionClass(el, enterFromClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      _onBeforeAppear && _onBeforeAppear(el);
      addTransitionClass(el, appearActiveClass);
      addTransitionClass(el, appearFromClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveActiveClass);
      addTransitionClass(el, leaveFromClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!(_onLeave && _onLeave.length > 1)) {
          if (leaveDuration) {
            setTimeout(resolve, leaveDuration);
          } else {
            whenTransitionEnds(el, type, resolve);
          }
        }
      });
      _onLeave && _onLeave(el, resolve);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      _onEnterCancelled && _onEnterCancelled(el);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      _onAppearCancelled && _onAppearCancelled(el);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      _onLeaveCancelled && _onLeaveCancelled(el);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = toNumber(val);
  validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    warn("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    warn("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc.delete(cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

function whenTransitionEnds(el, expectedType, cb) {
  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return cb();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    cb();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, _toConsumableArray(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref27) {
    var slots = _ref27.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevChildren;
    var children;
    onUpdated(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = toRaw(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || Fragment;
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
        } else {
          warn("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i6 = 0; _i6 < prevChildren.length; _i6++) {
          var _child = prevChildren[_i6];
          setTransitionHooks(_child, resolveTransitionHooks(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return createVNode(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
} // this is put in a dedicated function to avoid the line from being treeshaken


function forceReflow() {
  return document.body.offsetHeight;
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'];
  return isArray(fn) ? function (value) {
    return invokeArrayFns(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    trigger$1(target, 'input');
  }
}

function trigger$1(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref28, vnode) {
    var _ref28$modifiers = _ref28.modifiers,
        lazy = _ref28$modifiers.lazy,
        trim = _ref28$modifiers.trim,
        number = _ref28$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || el.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = toNumber(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref29) {
    var value = _ref29.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref30, vnode) {
    var value = _ref30.value,
        _ref30$modifiers = _ref30.modifiers,
        trim = _ref30$modifiers.trim,
        number = _ref30$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el) {
      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && toNumber(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  created: function created(el, binding, vnode) {
    setChecked(el, binding, vnode);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if (isArray(modelValue)) {
        var index = looseIndexOf(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = _toConsumableArray(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if (isSet(modelValue)) {
        if (checked) {
          modelValue.add(elementValue);
        } else {
          modelValue.delete(elementValue);
        }
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref31, vnode) {
  var value = _ref31.value,
      oldValue = _ref31.oldValue;
  el._modelValue = value;

  if (isArray(value)) {
    el.checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = looseEqual(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref32, vnode) {
    var value = _ref32.value;
    el.checked = looseEqual(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref33, vnode) {
    var value = _ref33.value,
        oldValue = _ref33.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  created: function created(el, _ref34, vnode) {
    var number = _ref34.modifiers.number;
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? toNumber(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref35) {
    var value = _ref35.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref36) {
    var value = _ref36.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !isArray(value) && !isSet(value)) {
    warn("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if (isArray(value)) {
        option.selected = looseIndexOf(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse;

  switch (el.tagName) {
    case 'SELECT':
      modelToUse = vModelSelect;
      break;

    case 'TEXTAREA':
      modelToUse = vModelText;
      break;

    default:
      switch (vnode.props && vnode.props.type) {
        case 'checkbox':
          modelToUse = vModelCheckbox;
          break;

        case 'radio':
          modelToUse = vModelRadio;
          break;

        default:
          modelToUse = vModelText;
      }

  }

  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key23 = 1; _key23 < _len10; _key23++) {
      args[_key23 - 1] = arguments[_key23];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  delete: 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) return;
    var eventKey = hyphenate(event.key);

    if ( // None of the provided key modifiers match the current event key
    !modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return;
    }

    return fn(event);
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref37, _ref38) {
    var value = _ref37.value;
    var transition = _ref38.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref39, _ref40) {
    var value = _ref39.value;
    var transition = _ref40.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref41, _ref42) {
    var value = _ref41.value,
        oldValue = _ref41.oldValue;
    var transition = _ref42.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref43) {
    var value = _ref43.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
}

var rendererOptions = extend({
  patchProp: patchProp,
  forcePatchProp: forcePatchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  {
    injectNativeTagCheck(app);
  }
  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container);
    container.removeAttribute('v-cloak');
    container.setAttribute('data-v-app', '');
    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  {
    injectNativeTagCheck(app);
  }
  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return isHTMLTag(tag) || isSVGTag(tag);
    },
    writable: false
  });
}

function normalizeContainer(container) {
  if (isString(container)) {
    var res = document.querySelector(container);

    if (!res) {
      warn("Failed to mount app: mount target selector returned null.");
    }

    return res;
  }

  return container;
}

function initDev() {
  var target = getGlobalThis();
  target.__VUE__ = true;
  setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
  {
    console.info("You are running a development build of Vue.\n" + "Make sure to use the production build (*.prod.js) when deploying for production.");
    initCustomFormatter();
  }
} // This entry exports the runtime only, and is built as


initDev();

var compile$1 = function compile$1() {
  {
    warn("Runtime compilation is not supported in this build of Vue." + " Use \"vue.esm-browser.js\" instead."
    /* should not happen */
    );
  }
};

var Vue = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BaseTransition: BaseTransition,
  Comment: Comment,
  Fragment: Fragment,
  KeepAlive: KeepAlive,
  Static: Static,
  Suspense: Suspense,
  Teleport: Teleport,
  Text: Text,
  Transition: Transition,
  TransitionGroup: TransitionGroup,
  callWithAsyncErrorHandling: callWithAsyncErrorHandling,
  callWithErrorHandling: callWithErrorHandling,
  camelize: camelize,
  capitalize: capitalize,
  cloneVNode: cloneVNode,
  compile: compile$1,
  computed: computed$1,
  createApp: createApp,
  createBlock: createBlock,
  createCommentVNode: createCommentVNode,
  createHydrationRenderer: createHydrationRenderer,
  createRenderer: createRenderer,
  createSSRApp: createSSRApp,
  createSlots: createSlots,
  createStaticVNode: createStaticVNode,
  createTextVNode: createTextVNode,
  createVNode: createVNode,
  customRef: customRef,
  defineAsyncComponent: defineAsyncComponent,
  defineComponent: defineComponent,

  get devtools() {
    return devtools;
  },

  getCurrentInstance: getCurrentInstance,
  getTransitionRawChildren: getTransitionRawChildren,
  h: h,
  handleError: handleError,
  hydrate: hydrate,
  initCustomFormatter: initCustomFormatter,
  inject: inject,
  isProxy: isProxy,
  isReactive: isReactive,
  isReadonly: isReadonly,
  isRef: isRef,
  isVNode: isVNode,
  markRaw: markRaw,
  mergeProps: mergeProps,
  nextTick: nextTick,
  onActivated: onActivated,
  onBeforeMount: onBeforeMount,
  onBeforeUnmount: onBeforeUnmount,
  onBeforeUpdate: onBeforeUpdate,
  onDeactivated: onDeactivated,
  onErrorCaptured: onErrorCaptured,
  onMounted: onMounted,
  onRenderTracked: onRenderTracked,
  onRenderTriggered: onRenderTriggered,
  onUnmounted: onUnmounted,
  onUpdated: onUpdated,
  openBlock: openBlock,
  popScopeId: popScopeId,
  provide: provide,
  proxyRefs: proxyRefs,
  pushScopeId: pushScopeId,
  queuePostFlushCb: queuePostFlushCb,
  reactive: reactive,
  readonly: readonly,
  ref: ref,
  registerRuntimeCompiler: registerRuntimeCompiler,
  render: render,
  renderList: renderList,
  renderSlot: renderSlot,
  resolveComponent: resolveComponent,
  resolveDirective: resolveDirective,
  resolveDynamicComponent: resolveDynamicComponent,
  resolveTransitionHooks: resolveTransitionHooks,
  setBlockTracking: setBlockTracking,
  setDevtoolsHook: setDevtoolsHook,
  setTransitionHooks: setTransitionHooks,
  shallowReactive: shallowReactive,
  shallowReadonly: shallowReadonly,
  shallowRef: shallowRef,
  ssrContextKey: ssrContextKey,
  ssrUtils: ssrUtils,
  toDisplayString: toDisplayString,
  toHandlerKey: toHandlerKey,
  toHandlers: toHandlers,
  toRaw: toRaw,
  toRef: toRef,
  toRefs: toRefs,
  transformVNodeArgs: transformVNodeArgs,
  triggerRef: triggerRef,
  unref: unref,
  useCssModule: useCssModule,
  useCssVars: useCssVars,
  useSSRContext: useSSRContext,
  useTransitionState: useTransitionState,
  vModelCheckbox: vModelCheckbox,
  vModelDynamic: vModelDynamic,
  vModelRadio: vModelRadio,
  vModelSelect: vModelSelect,
  vModelText: vModelText,
  vShow: vShow,
  version: version,
  warn: warn,
  watch: watch,
  watchEffect: watchEffect,
  withCtx: withCtx,
  withDirectives: withDirectives,
  withKeys: withKeys,
  withModifiers: withModifiers,
  withScopeId: withScopeId
});
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function require(path, base) {
      return commonjsRequire(path, base === undefined || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}

function commonjsRequire() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var prism = createCommonjsModule(function (module) {
  /* **********************************************
       Begin prism-core.js
  ********************************************** */
  /// <reference lib="WebWorker"/>
  var _self = typeof window !== 'undefined' ? window // if in browser
  : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
  : {} // if in node js
  ;
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */


  var Prism = function (_self) {
    // Private helper vars
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    var uniqueId = 0;
    var _ = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: _self.Prism && _self.Prism.manual,
      disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
          }
        },

        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function type(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },

        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function objId(obj) {
          if (!obj['__id']) {
            Object.defineProperty(obj, '__id', {
              value: ++uniqueId
            });
          }

          return obj['__id'];
        },

        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone, id;

          switch (_.util.type(o)) {
            case 'Object':
              id = _.util.objId(o);

              if (visited[id]) {
                return visited[id];
              }

              clone =
              /** @type {Record<string, any>} */
              {};
              visited[id] = clone;

              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }

              return (
                /** @type {any} */
                clone
              );

            case 'Array':
              id = _.util.objId(o);

              if (visited[id]) {
                return visited[id];
              }

              clone = [];
              visited[id] = clone;

              /** @type {Array} */

              /** @type {any} */
              o.forEach(function (v, i) {
                clone[i] = deepClone(v, visited);
              });
              return (
                /** @type {any} */
                clone
              );

            default:
              return o;
          }
        },

        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function getLanguage(element) {
          while (element && !lang.test(element.className)) {
            element = element.parentElement;
          }

          if (element) {
            return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
          }

          return 'none';
        },

        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function currentScript() {
          if (typeof document === 'undefined') {
            return null;
          }

          if ('currentScript' in document && 1 < 2
          /* hack to trip TS' flow analysis */
          ) {
              return (
                /** @type {any} */
                document.currentScript
              );
            } // IE11 workaround
          // we'll get the src of the current script by parsing IE11's error stack trace
          // this will not work for inline scripts


          try {
            throw new Error();
          } catch (err) {
            // Get file src url from stack. Specifically works with the format of stack traces in IE.
            // A stack will look like this:
            //
            // Error
            //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
            //    at Global code (http://localhost/components/prism-core.js:606:1)
            var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];

            if (src) {
              var scripts = document.getElementsByTagName('script');

              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }

            return null;
          }
        },

        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function isActive(element, className, defaultActivation) {
          var no = 'no-' + className;

          while (element) {
            var classList = element.classList;

            if (classList.contains(className)) {
              return true;
            }

            if (classList.contains(no)) {
              return false;
            }

            element = element.parentElement;
          }

          return !!defaultActivation;
        }
      },

      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function extend(id, redef) {
          var lang = _.util.clone(_.languages[id]);

          for (var key in redef) {
            lang[key] = redef[key];
          }

          return lang;
        },

        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function insertBefore(inside, before, insert, root) {
          root = root ||
          /** @type {any} */
          _.languages;
          var grammar = root[inside];
          /** @type {Grammar} */

          var ret = {};

          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              } // Do not insert token which also occur in insert. See #1525


              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }

          var old = root[inside];
          root[inside] = ret; // Update references in other language definitions

          _.languages.DFS(_.languages, function (key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });

          return ret;
        },
        // Traverse a language definition with Depth First Search
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;

          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);

              var property = o[i],
                  propertyType = _.util.type(property);

              if (propertyType === 'Object' && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === 'Array' && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},

      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function highlightAll(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },

      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function highlightAllUnder(container, async, callback) {
        var env = {
          callback: callback,
          container: container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };

        _.hooks.run('before-highlightall', env);

        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

        _.hooks.run('before-all-elements-highlight', env);

        for (var i = 0, element; element = env.elements[i++];) {
          _.highlightElement(element, async === true, env.callback);
        }
      },

      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function highlightElement(element, async, callback) {
        // Find language
        var language = _.util.getLanguage(element);

        var grammar = _.languages[language]; // Set language on the element, if not present

        element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

        var parent = element.parentElement;

        if (parent && parent.nodeName.toLowerCase() === 'pre') {
          parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
        }

        var code = element.textContent;
        var env = {
          element: element,
          language: language,
          grammar: grammar,
          code: code
        };

        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;

          _.hooks.run('before-insert', env);

          env.element.innerHTML = env.highlightedCode;

          _.hooks.run('after-highlight', env);

          _.hooks.run('complete', env);

          callback && callback.call(env.element);
        }

        _.hooks.run('before-sanity-check', env);

        if (!env.code) {
          _.hooks.run('complete', env);

          callback && callback.call(env.element);
          return;
        }

        _.hooks.run('before-highlight', env);

        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }

        if (async && _self.Worker) {
          var worker = new Worker(_.filename);

          worker.onmessage = function (evt) {
            insertHighlightedCode(evt.data);
          };

          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },

      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function highlight(text, grammar, language) {
        var env = {
          code: text,
          grammar: grammar,
          language: language
        };

        _.hooks.run('before-tokenize', env);

        env.tokens = _.tokenize(env.code, env.grammar);

        _.hooks.run('after-tokenize', env);

        return Token.stringify(_.util.encode(env.tokens), env.language);
      },

      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function tokenize(text, grammar) {
        var rest = grammar.rest;

        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }

          delete grammar.rest;
        }

        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },

      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},

        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function add(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },

        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function run(name, env) {
          var callbacks = _.hooks.all[name];

          if (!callbacks || !callbacks.length) {
            return;
          }

          for (var i = 0, callback; callback = callbacks[i++];) {
            callback(env);
          }
        }
      },
      Token: Token
    };
    _self.Prism = _; // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

    /**
     * Creates a new token.
     *
     * @param {string} type See {@link Token#type type}
     * @param {string | TokenStream} content See {@link Token#content content}
     * @param {string|string[]} [alias] The alias(es) of the token.
     * @param {string} [matchedStr=""] A copy of the full string this token was created from.
     * @class
     * @global
     * @public
     */

    function Token(type, content, alias, matchedStr) {
      /**
       * The type of the token.
       *
       * This is usually the key of a pattern in a {@link Grammar}.
       *
       * @type {string}
       * @see GrammarToken
       * @public
       */
      this.type = type;
      /**
       * The strings or tokens contained by this token.
       *
       * This will be a token stream if the pattern matched also defined an `inside` grammar.
       *
       * @type {string | TokenStream}
       * @public
       */

      this.content = content;
      /**
       * The alias(es) of the token.
       *
       * @type {string|string[]}
       * @see GrammarToken
       * @public
       */

      this.alias = alias; // Copy of the full string this token was created from

      this.length = (matchedStr || '').length | 0;
    }
    /**
     * A token stream is an array of strings and {@link Token Token} objects.
     *
     * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
     * them.
     *
     * 1. No adjacent strings.
     * 2. No empty strings.
     *
     *    The only exception here is the token stream that only contains the empty string and nothing else.
     *
     * @typedef {Array<string | Token>} TokenStream
     * @global
     * @public
     */

    /**
     * Converts the given token or token stream to an HTML representation.
     *
     * The following hooks will be run:
     * 1. `wrap`: On each {@link Token}.
     *
     * @param {string | Token | TokenStream} o The token or token stream to be converted.
     * @param {string} language The name of current language.
     * @returns {string} The HTML representation of the token or token stream.
     * @memberof Token
     * @static
     */


    Token.stringify = function stringify(o, language) {
      if (typeof o == 'string') {
        return o;
      }

      if (Array.isArray(o)) {
        var s = '';
        o.forEach(function (e) {
          s += stringify(e, language);
        });
        return s;
      }

      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: 'span',
        classes: ['token', o.type],
        attributes: {},
        language: language
      };
      var aliases = o.alias;

      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }

      _.hooks.run('wrap', env);

      var attributes = '';

      for (var name in env.attributes) {
        attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
      }

      return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };
    /**
     * @param {string} text
     * @param {LinkedList<string | Token>} tokenList
     * @param {any} grammar
     * @param {LinkedListNode<string | Token>} startNode
     * @param {number} startPos
     * @param {RematchOptions} [rematch]
     * @returns {void}
     * @private
     *
     * @typedef RematchOptions
     * @property {string} cause
     * @property {number} reach
     */


    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + ',' + j) {
            return;
          }

          var patternObj = patterns[j],
              inside = patternObj.inside,
              lookbehind = !!patternObj.lookbehind,
              greedy = !!patternObj.greedy,
              lookbehindLength = 0,
              alias = patternObj.alias;

          if (greedy && !patternObj.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
          }
          /** @type {RegExp} */


          var pattern = patternObj.pattern || patternObj;

          for ( // iterate the token list and keep track of the current token/string position
          var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }

            var str = currentNode.value;

            if (tokenList.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            var removeCount = 1; // this is the to parameter of removeBetween

            if (greedy && currentNode != tokenList.tail.prev) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
              var to = match.index + match[0].length;
              var p = pos; // find the node that contains the match

              p += currentNode.value.length;

              while (from >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              } // adjust pos (and p)


              p -= currentNode.value.length;
              pos = p; // the current node is a Token, then the match starts inside another Token, which is invalid

              if (currentNode.value instanceof Token) {
                continue;
              } // find the last node which is affected by this match


              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next) {
                removeCount++;
                p += k.value.length;
              }

              removeCount--; // replace with the new match

              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str);
            }

            if (!match) {
              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                matchStr = match[0].slice(lookbehindLength),
                to = from + matchStr.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var reach = pos + str.length;

            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }

            var removeFrom = currentNode.prev;

            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }

            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);

            if (after) {
              addAfter(tokenList, currentNode, after);
            }

            if (removeCount > 1) {
              // at least one Token object was removed, so we have to do some rematching
              // this can only happen if the current pattern is greedy
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
                cause: token + ',' + j,
                reach: reach
              });
            }
          }
        }
      }
    }
    /**
     * @typedef LinkedListNode
     * @property {T} value
     * @property {LinkedListNode<T> | null} prev The previous node.
     * @property {LinkedListNode<T> | null} next The next node.
     * @template T
     * @private
     */

    /**
     * @template T
     * @private
     */


    function LinkedList() {
      /** @type {LinkedListNode<T>} */
      var head = {
        value: null,
        prev: null,
        next: null
      };
      /** @type {LinkedListNode<T>} */

      var tail = {
        value: null,
        prev: head,
        next: null
      };
      head.next = tail;
      /** @type {LinkedListNode<T>} */

      this.head = head;
      /** @type {LinkedListNode<T>} */

      this.tail = tail;
      this.length = 0;
    }
    /**
     * Adds a new node with the given value to the list.
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {T} value
     * @returns {LinkedListNode<T>} The added node.
     * @template T
     */


    function addAfter(list, node, value) {
      // assumes that node != list.tail && values.length >= 0
      var next = node.next;
      var newNode = {
        value: value,
        prev: node,
        next: next
      };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    /**
     * Removes `count` nodes after the given node. The given node will not be removed.
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {number} count
     * @template T
     */


    function removeRange(list, node, count) {
      var next = node.next;

      for (var i = 0; i < count && next !== list.tail; i++) {
        next = next.next;
      }

      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    /**
     * @param {LinkedList<T>} list
     * @returns {T[]}
     * @template T
     */


    function toArray(list) {
      var array = [];
      var node = list.head.next;

      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }

      return array;
    }

    if (!_self.document) {
      if (!_self.addEventListener) {
        // in Node.js
        return _;
      }

      if (!_.disableWorkerMessageHandler) {
        // In worker
        _self.addEventListener('message', function (evt) {
          var message = JSON.parse(evt.data),
              lang = message.language,
              code = message.code,
              immediateClose = message.immediateClose;

          _self.postMessage(_.highlight(code, _.languages[lang], lang));

          if (immediateClose) {
            _self.close();
          }
        }, false);
      }

      return _;
    } // Get current script and highlight


    var script = _.util.currentScript();

    if (script) {
      _.filename = script.src;

      if (script.hasAttribute('data-manual')) {
        _.manual = true;
      }
    }

    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }

    if (!_.manual) {
      // If the document state is "loading", then we'll use DOMContentLoaded.
      // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
      // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
      // might take longer one animation frame to execute which can create a race condition where only some plugins have
      // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
      // See https://github.com/PrismJS/prism/issues/2102
      var readyState = document.readyState;

      if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
        document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }

    return _;
  }(_self);

  if (module.exports) {
    module.exports = Prism;
  } // hack for components to work correctly in node.js


  if (typeof commonjsGlobal !== 'undefined') {
    commonjsGlobal.Prism = Prism;
  } // some additional documentation/types

  /**
   * The expansion of a simple `RegExp` literal to support additional properties.
   *
   * @typedef GrammarToken
   * @property {RegExp} pattern The regular expression of the token.
   * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
   * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
   * @property {boolean} [greedy=false] Whether the token is greedy.
   * @property {string|string[]} [alias] An optional alias or list of aliases.
   * @property {Grammar} [inside] The nested grammar of this token.
   *
   * The `inside` grammar will be used to tokenize the text value of each token of this kind.
   *
   * This can be used to make nested and even recursive language definitions.
   *
   * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
   * each another.
   * @global
   * @public
  */

  /**
   * @typedef Grammar
   * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
   * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
   * @global
   * @public
   */

  /**
   * A function which will invoked after an element was successfully highlighted.
   *
   * @callback HighlightCallback
   * @param {Element} element The element successfully highlighted.
   * @returns {void}
   * @global
   * @public
  */

  /**
   * @callback HookCallback
   * @param {Object<string, any>} env The environment variables of the hook.
   * @returns {void}
   * @global
   * @public
   */

  /* **********************************************
       Begin prism-markup.js
  ********************************************** */


  Prism.languages.markup = {
    'comment': /<!--[\s\S]*?-->/,
    'prolog': /<\?[\s\S]+?\?>/,
    'doctype': {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        'internal-subset': {
          pattern: /(\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null // see below

        },
        'string': {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        'punctuation': /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/,
        'name': /[^\s<>'"]+/
      }
    },
    'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
    'tag': {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        'tag': {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            'punctuation': /^<\/?/,
            'namespace': /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        },
        'punctuation': /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            'namespace': /^[^\s>\/:]+:/
          }
        }
      }
    },
    'entity': [{
      pattern: /&[\da-z]{1,8};/i,
      alias: 'named-entity'
    }, /&#x?[\da-f]{1,8};/i]
  };
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
  Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

  Prism.hooks.add('wrap', function (env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
  });
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      };
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
          return tagName;
        }), 'i'),
        lookbehind: true,
        greedy: true,
        inside: inside
      };
      Prism.languages.insertBefore('markup', 'cdata', def);
    }
  });
  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;
  Prism.languages.xml = Prism.languages.extend('markup', {});
  Prism.languages.ssml = Prism.languages.xml;
  Prism.languages.atom = Prism.languages.xml;
  Prism.languages.rss = Prism.languages.xml;
  /* **********************************************
       Begin prism-css.js
  ********************************************** */

  (function (Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    Prism.languages.css = {
      'comment': /\/\*[\s\S]*?\*\//,
      'atrule': {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          'rule': /^@[\w-]+/,
          'selector-function-argument': {
            pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
            lookbehind: true,
            alias: 'selector'
          },
          'keyword': {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          } // See rest below

        }
      },
      'url': {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
        greedy: true,
        inside: {
          'function': /^url/i,
          'punctuation': /^\(|\)$/,
          'string': {
            pattern: RegExp('^' + string.source + '$'),
            alias: 'url'
          }
        }
      },
      'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
      'string': {
        pattern: string,
        greedy: true
      },
      'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      'important': /!important\b/i,
      'function': /[-a-z0-9]+(?=\()/i,
      'punctuation': /[(){};:,]/
    };
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
    var markup = Prism.languages.markup;

    if (markup) {
      markup.tag.addInlined('style', 'css');
      Prism.languages.insertBefore('inside', 'attr-value', {
        'style-attr': {
          pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
          inside: {
            'attr-name': {
              pattern: /^\s*style/i,
              inside: markup.tag.inside
            },
            'punctuation': /^\s*=\s*['"]|['"]\s*$/,
            'attr-value': {
              pattern: /.+/i,
              inside: Prism.languages.css
            }
          },
          alias: 'language-css'
        }
      }, markup.tag);
    }
  })(Prism);
  /* **********************************************
       Begin prism-clike.js
  ********************************************** */


  Prism.languages.clike = {
    'comment': [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }],
    'string': {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        'punctuation': /[.\\]/
      }
    },
    'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    'boolean': /\b(?:true|false)\b/,
    'function': /\w+(?=\()/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    'punctuation': /[{}[\];(),.:]/
  };
  /* **********************************************
       Begin prism-javascript.js
  ********************************************** */

  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [Prism.languages.clike['class-name'], {
      pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: true
    }],
    'keyword': [{
      pattern: /((?:^|})\s*)(?:catch|finally)\b/,
      lookbehind: true
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }],
    'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: true,
      greedy: true,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: 'language-regex',
          inside: Prism.languages.regex
        },
        'regex-flags': /[a-z]+$/,
        'regex-delimiter': /^\/|\/$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: 'function'
    },
    'parameter': [{
      pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: Prism.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }],
    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'interpolation': {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        'string': /[\s\S]+/
      }
    }
  });

  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript');
  }

  Prism.languages.js = Prism.languages.javascript;
  /* **********************************************
       Begin prism-file-highlight.js
  ********************************************** */

  (function () {
    if (typeof self === 'undefined' || !self.Prism || !self.document) {
      return;
    }

    var Prism = window.Prism;
    var LOADING_MESSAGE = 'Loading…';

    var FAILURE_MESSAGE = function FAILURE_MESSAGE(status, message) {
      return '✖ Error ' + status + ' while fetching file: ' + message;
    };

    var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
    var EXTENSIONS = {
      'js': 'javascript',
      'py': 'python',
      'rb': 'ruby',
      'ps1': 'powershell',
      'psm1': 'powershell',
      'sh': 'bash',
      'bat': 'batch',
      'h': 'c',
      'tex': 'latex'
    };
    var STATUS_ATTR = 'data-src-status';
    var STATUS_LOADING = 'loading';
    var STATUS_LOADED = 'loaded';
    var STATUS_FAILED = 'failed';
    var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    /**
     * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
     *
     * @param {HTMLElement} element
     * @param {string} language
     * @returns {void}
     */

    function setLanguageClass(element, language) {
      var className = element.className;
      className = className.replace(lang, ' ') + ' language-' + language;
      element.className = className.replace(/\s+/g, ' ').trim();
    }

    Prism.hooks.add('before-highlightall', function (env) {
      env.selector += ', ' + SELECTOR;
    });
    Prism.hooks.add('before-sanity-check', function (env) {
      var pre =
      /** @type {HTMLPreElement} */
      env.element;

      if (pre.matches(SELECTOR)) {
        env.code = ''; // fast-path the whole thing and go to complete

        pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading
        // add code element with loading message

        var code = pre.appendChild(document.createElement('CODE'));
        code.textContent = LOADING_MESSAGE;
        var src = pre.getAttribute('data-src');
        var language = env.language;

        if (language === 'none') {
          // the language might be 'none' because there is no language set;
          // in this case, we want to use the extension as the language
          var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
          language = EXTENSIONS[extension] || extension;
        } // set language classes


        setLanguageClass(code, language);
        setLanguageClass(pre, language); // preload the language

        var autoloader = Prism.plugins.autoloader;

        if (autoloader) {
          autoloader.loadLanguages(language);
        } // load file


        var xhr = new XMLHttpRequest();
        xhr.open('GET', src, true);

        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status < 400 && xhr.responseText) {
              // mark as loaded
              pre.setAttribute(STATUS_ATTR, STATUS_LOADED); // highlight code

              code.textContent = xhr.responseText;
              Prism.highlightElement(code);
            } else {
              // mark as failed
              pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

              if (xhr.status >= 400) {
                code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
              } else {
                code.textContent = FAILURE_EMPTY_MESSAGE;
              }
            }
          }
        };

        xhr.send(null);
      }
    });
    Prism.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function highlight(container) {
        var elements = (container || document).querySelectorAll(SELECTOR);

        for (var i = 0, element; element = elements[i++];) {
          Prism.highlightElement(element);
        }
      }
    };
    var logged = false;
    /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */

    Prism.fileHighlight = function () {
      if (!logged) {
        console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
        logged = true;
      }

      Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  })();
});
var Prism = defineComponent({
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
  setup: function setup(props, _ref44) {
    var slots = _ref44.slots,
        attrs = _ref44.attrs;
    var h = Vue.h;
    var slotsData = slots && slots.default && slots.default() || [];
    var code = props.code || (slotsData.length > 0 ? slotsData[0].children : '');
    var inline = props.inline,
        language = props.language;
    var prismLanguage = prism.languages[language];
    var className = "language-".concat(language);

    if (inline) {
      return function () {
        return h('code', _objectSpread(_objectSpread({}, attrs), {}, {
          class: [attrs.class, className],
          innerHTML: prism.highlight(code, prismLanguage)
        }));
      };
    }

    var d = prism.highlight(code, prismLanguage);
    return function () {
      return h('pre', _objectSpread(_objectSpread({}, attrs), {}, {
        class: [attrs.class, className]
      }), [h('code', {
        class: className,
        innerHTML: d
      })]);
    };
  }
});

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}";
styleInject(css_248z);
var script = defineComponent({
  name: 'Wrapper',
  components: {
    Prism: Prism
  },
  props: {
    customClass: {
      type: String,
      default: ''
    },
    scriptcontent: {
      type: String,
      default: '',
      required: true
    },
    templatecontent: {
      type: String,
      default: '',
      required: true
    }
  },
  setup: function setup() {
    var code1 = "const c = a+b";
    return {
      code1: code1
    };
  }
});

var _withId = /*#__PURE__*/withScopeId("data-v-13946cd2");

pushScopeId("data-v-13946cd2");
var _hoisted_1 = {
  class: "container"
};
var _hoisted_2 = {
  class: "slot-label"
};
var _hoisted_3 = {
  class: "code-block"
};
popScopeId();

var render$1 = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Prism = resolveComponent("Prism");

  return openBlock(), createBlock("div", _hoisted_1, [createVNode("label", _hoisted_2, [renderSlot(_ctx.$slots, "label")]), createVNode("div", _hoisted_3, [createVNode(_component_Prism, {
    language: "javascript",
    class: "codesnippet"
  }, {
    default: _withId(function () {
      return [createTextVNode(toDisplayString(_ctx.$props.templatecontent), 1
      /* TEXT */
      )];
    }),
    _: 1
  }), createVNode(_component_Prism, {
    language: "javascript",
    class: "codesnippet"
  }, {
    default: _withId(function () {
      return [createTextVNode(toDisplayString(_ctx.$props.scriptcontent), 1
      /* TEXT */
      )];
    }),
    _: 1
  })]), createVNode("div", null, [renderSlot(_ctx.$slots, "content")])]);
});

var css_248z$1 = ".codesnippet[data-v-13946cd2]{width:48%;border:1px solid #222;border-radius:5px}.container[data-v-13946cd2]{background-color:#f6f7f6;margin-top:20px;padding:25px;border-radius:10px}label[data-v-13946cd2]{font-size:18px;margin-bottom:10px;display:block;font-weight:700}";
styleInject(css_248z$1);
script.render = render$1;
script.__scopeId = "data-v-13946cd2";
script.__file = "src/components/wrapper/Wrapper.vue";
/* eslint-disable */
// https://github.com/simplesmiler/vue-clickaway
// https://github.com/ndelvalle/v-click-outside/blob/master/lib/v-click-outside.js
// Mixed both :)

var EVENTS = ['click'];
var instances = [];
var ClickOutside = {
  instances: instances,
  beforeMount: bind,
  update: function update(el, binding) {
    if (JSON.stringify(binding.value) === JSON.stringify(binding.oldValue)) return;
    bind(el, binding);
  },
  unmounted: unbind
};

function bind(el, _ref45) {
  var value = _ref45.value;
  unbind(el);
  var bindingValue = value;
  var isFunction = typeof bindingValue === 'function';
  var isObject = _typeof(bindingValue) === 'object';
  if (!isFunction && !isObject) return;
  var isActive = !(bindingValue.isActive === false);
  if (!isActive) return;
  var handler = isFunction ? bindingValue : bindingValue.handler;
  var instance = createInstance({
    el: el,
    handler: handler
  });
  instance.eventHandlers.forEach(function (_ref46) {
    var event = _ref46.event,
        handler = _ref46.handler;
    return setTimeout(function () {
      return document.addEventListener(event, handler, false);
    }, 0);
  });
  instances.push(instance);
}

function unbind(el) {
  var instanceIndex = instances.findIndex(function (instance) {
    return instance.el === el;
  });
  if (instanceIndex === -1) return;
  var instance = instances[instanceIndex];
  instance.eventHandlers.forEach(function (_ref47) {
    var event = _ref47.event,
        handler = _ref47.handler;
    return document.removeEventListener(event, handler, false);
  });
  instances.splice(instanceIndex, 1);
} // --------------------
// Helpers
// --------------------


function createInstance(_ref48) {
  var el = _ref48.el,
      _handler2 = _ref48.handler;
  return {
    el: el,
    eventHandlers: EVENTS.map(function (eventName) {
      return {
        event: eventName,
        handler: function handler(event) {
          return onEvent({
            event: event,
            el: el,
            handler: _handler2
          });
        }
      };
    })
  };
}

function onEvent(_ref49) {
  var event = _ref49.event,
      el = _ref49.el,
      handler = _ref49.handler;
  var path = event.path || (event.composedPath ? event.composedPath() : undefined);

  if (path ? path.indexOf(el) < 0 : !el.contains(event.target)) {
    return handler && handler(event, el);
  }
}

var script$1 = defineComponent({
  name: 'IconView',
  props: {
    height: {
      type: [String, Number],
      default: '16'
    },
    width: {
      type: [String, Number],
      default: '16'
    },
    color: {
      type: String,
      default: 'black'
    }
  },
  setup: function setup() {
    return {};
  }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Fragment, null, [createCommentVNode(" eslint-disable "), (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    height: _ctx.height,
    width: _ctx.width,
    role: "img",
    "aria-hidden": "true",
    "data-icon": "calendarAlt"
  }, [createVNode("path", {
    fill: _ctx.color,
    d: "M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
  }, null, 8
  /* PROPS */
  , ["fill"])], 8
  /* PROPS */
  , ["height", "width"])), createCommentVNode("eslint-enable")], 64
  /* STABLE_FRAGMENT */
  );
}

script$1.render = render$2;
script$1.__file = "src/components/iconview/IconView.vue"; // import en from '@/components/datepicker/locale/translations/en';

/**
 * Returns the full year, using UTC or not
 * @param {Date} date
 */

var getFullYear = function getFullYear(date) {
  var useUtc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useUtc ? date.getUTCFullYear() : date.getFullYear();
};
/**
 * Returns the month, using UTC or not
 * @param {Date} date
 */


var getMonth = function getMonth(date) {
  var useUtc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useUtc ? date.getUTCMonth() : date.getMonth();
};
/**
 * Returns the date, using UTC or not
 * @param {Date} date
 */


var getDate = function getDate(date) {
  var useUtc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useUtc ? date.getUTCDate() : date.getDate();
};
/**
 * Returns the day, using UTC or not
 * @param {Date} date
 */


var getDay = function getDay(date) {
  var useUtc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useUtc ? date.getUTCDay() : date.getDay();
};
/**
 * Sets the full year, using UTC or not
 * @param {Date} date
 */


var setFullYear = function setFullYear(date, value) {
  var useUtc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
};
/**
 * Sets the month, using UTC or not
 * @param {Date} date
 */


var setMonth = function setMonth(date, value) {
  var useUtc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return useUtc ? date.setUTCMonth(value) : date.setMonth(value);
};
/**
 * Sets the date, using UTC or not
 * @param {Date} date
 * @param {Number} value
 */


var setDate = function setDate(date, value) {
  var useUtc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return useUtc ? date.setUTCDate(value) : date.setDate(value);
};
/**
 * Check if date1 is equivalent to date2, without comparing the time
 * @see https://stackoverflow.com/a/6202196/4455925
 * @param {Date} date1
 * @param {Date} date2
 */


var compareDates = function compareDates(date1, date2) {
  var useUtc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var d1 = new Date(date1.getTime());
  var d2 = new Date(date2.getTime());

  if (useUtc) {
    d1.setUTCHours(0, 0, 0, 0);
    d2.setUTCHours(0, 0, 0, 0);
  } else {
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
  }

  return d1.getTime() === d2.getTime();
};
/**
 * Validates a date object
 * @param {Date} date - an object instantiated with the new Date constructor
 * @return {Boolean}
 */


var isValidDate = function isValidDate(date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return false;
  }

  return !Number.isNaN(date.getTime());
};
/**
 * Return abbreviated week day name
 * @param {Date}
 * @param {Array}
 * @return {String}
 */


var getDayNameAbbr = function getDayNameAbbr(date, days) {
  if (_typeof(date) !== 'object') {
    throw TypeError('Invalid Type');
  }

  return days[getDay(date)];
};
/**
 * Return name of the month
 * @param {Number|Date}
 * @param {Array}
 * @return {String}
 */


var getMonthName = function getMonthName(month, months) {
  if (!months) {
    throw Error('missing 2nd parameter Months array');
  }

  if (_typeof(month) === 'object') {
    return months[getMonth(month)];
  }

  if (typeof month === 'number') {
    return months[month];
  }

  throw TypeError('Invalid type');
};
/**
 * Return an abbreviated version of the month
 * @param {Number|Date}
 * @return {String}
 */


var getMonthNameAbbr = function getMonthNameAbbr(month, monthsAbbr) {
  if (!monthsAbbr) {
    throw Error('missing 2nd paramter Months array');
  }

  if (_typeof(month) === 'object') {
    return monthsAbbr[getMonth(month)];
  }

  if (typeof month === 'number') {
    return monthsAbbr[month];
  }

  throw TypeError('Invalid type');
};
/**
 * Alternative get total number of days in month
 * @param {Number} year
 * @param {Number} m
 * @return {Number}
 */


var daysInMonth = function daysInMonth(year, month) {
  if (/8|3|5|10/.test(month)) {
    return 30;
  }

  if (month === 1) {
    if (!(year % 4) && year % 100 || !(year % 400)) {
      return 29;
    }

    return 28;
  }

  return 31; // return /8|3|5|10/.test(month as string)
  //   ? 30
  //   : month === 1
  //   ? (!(year % 4) && year % 100) || !(year % 400)
  //     ? 29
  //     : 28
  //   : 31;
};
/**
 * Get nth suffix for date
 * @param {Number} day
 * @return {String}
 */


var getNthSuffix = function getNthSuffix(day) {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return 'st';

    case 2:
    case 22:
      return 'nd';

    case 3:
    case 23:
      return 'rd';

    default:
      return 'th';
  }
};
/**
 * Formats date object
 * @param {Date}
 * @param {String}
 * @param {Object}
 * @return {String}
 */


var formatDate = function formatDate(date, format, translation) {
  var year = getFullYear(date);
  var month = getMonth(date) + 1;
  var day = getDate(date);
  var str = format.replace(/dd/, "0".concat(day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, getMonthName(getMonth(date), translation.months)).replace(/MMM/, getMonthNameAbbr(getMonth(date), translation.monthsAbbr)).replace(/MM/, "0".concat(month).slice(-2)).replace(/M(?!a|ä|e)/, month.toString()).replace(/su/, getNthSuffix(getDate(date))).replace(/D(?!e|é|i)/, getDayNameAbbr(date, translation.days));
  return str;
};
/**
 * method used as a prop validator for input values
 * @param {*} val
 * @return {Boolean}
 */


var validateDateInput = function validateDateInput(val) {
  return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
};

var stringToDate = function stringToDate(value) {
  if (typeof value === 'string') {
    return new Date(value);
  }

  return value;
};

var script$2 = defineComponent({
  name: 'DateInput',
  components: {
    IconView: script$1
  },
  props: {
    selectedDate: {
      type: [Date, String]
    },
    resetTypedDate: {
      type: [Date]
    },
    format: {
      type: [String, Function]
    },
    translation: {
      type: Object
    },
    inline: {
      type: Boolean
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    openDate: {
      type: Date
    },
    placeholder: {
      type: String
    },
    inputClass: {
      type: String
    },
    clearButton: {
      type: Boolean
    },
    clearButtonIcon: {
      type: String
    },
    calendarButton: {
      type: Boolean
    },
    calendarButtonIcon: {
      type: String
    },
    calendarButtonIconContent: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    typeable: {
      type: Boolean
    },
    addBootstrapClass: {
      type: Boolean
    },
    useUtc: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    },
    hideInput: {
      type: Boolean,
      default: true
    },
    fullMonthName: {
      type: Boolean,
      default: false
    },
    iconColor: {
      default: 'black',
      type: String
    },
    iconHeight: {
      default: 16,
      type: [String, Number]
    },
    iconWidth: {
      default: 16,
      type: [String, Number]
    },
    theme: {
      default: 'green',
      type: String
    }
  },
  emits: ['show-calendar', 'typed-date', 'clear-date', 'close-calendar'],
  setup: function setup(props, _ref50) {
    var emit = _ref50.emit;
    var typedDate = ref();
    var inputRef = ref(null);
    var computedInputClass = computed$1(function () {
      if (props.addBootstrapClass) {
        if (typeof props.inputClass === 'string') {
          return [props.inputClass, 'form-control'].join(' ');
        }

        return _objectSpread({
          'form-control': true
        }, props.inputClass);
      }

      return props.inputClass;
    });
    var formattedValue = computed$1(function () {
      if (!props.selectedDate) {
        return null;
      }

      if (typedDate.value) {
        return typedDate.value;
      }

      var propDate = stringToDate(props.selectedDate);
      var date = typeof props.format === 'function' ? props.format(propDate) : formatDate(propDate, props.format, props.translation);

      if (props.minimumView === props.maximumView) {
        var _date$split = date.split(' '),
            _date$split2 = _slicedToArray(_date$split, 3),
            y = _date$split2[1],
            z = _date$split2[2];

        if (props.maximumView === 'month') {
          if (props.fullMonthName) {
            var _props$translation, _props$translation2;

            var i = (_props$translation = props.translation) === null || _props$translation === void 0 ? void 0 : _props$translation.monthsAbbr.indexOf(y);
            return (_props$translation2 = props.translation) === null || _props$translation2 === void 0 ? void 0 : _props$translation2.months[i];
          }

          date = y;
        } else if (props.maximumView === 'year') {
          date = z;
        }
      }

      return date;
    }); // watchers

    watch(function () {
      return props.resetTypedDate;
    }, function () {
      typedDate.value = '';
    });
    /**
     * open Calendar
     */

    function showCalendar() {
      emit('show-calendar');
    }
    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */


    function parseTypedDate(event) {
      if ([27, 13].includes(event.keyCode)) {
        inputRef.value.blur();
      }

      if (props.typeable) {
        var value = inputRef.value.value;
        var temptypedDate = Date.parse(value);

        if (!Number.isNaN(temptypedDate)) {
          typedDate.value = value;
          emit('typed-date', new Date(temptypedDate));
        }
      }
    }
    /**
     * emit a clearDate event
     */


    function clearDate() {
      emit('clear-date');
    }
    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */


    function inputBlurred() {
      if (props.typeable && Number.isNaN(Date.parse(inputRef.value.value))) {
        clearDate();
        inputRef.value.value = null;
        typedDate.value = '';
      }

      emit('close-calendar', true);
    }

    return {
      typedDate: typedDate,
      computedInputClass: computedInputClass,
      formattedValue: formattedValue,
      showCalendar: showCalendar,
      parseTypedDate: parseTypedDate,
      inputBlurred: inputBlurred,
      inputRef: inputRef
    };
  }
});
var _hoisted_1$1 = {
  key: 0
};
var _hoisted_2$1 = {
  key: 1,
  style: {
    "position": "relative"
  }
};
var _hoisted_3$1 = {
  key: 0
};
var _hoisted_4 = {
  key: 0,
  class: "vuejs3-datepicker__value"
};
var _hoisted_5 = {
  class: "vuejs3-datepicker__icon"
};
var _hoisted_6 = {
  key: 0,
  class: "vuejs3-datepicker__content"
};
var _hoisted_7 = {
  key: 1,
  class: "vuejs3-datepicker__content"
};
var _hoisted_8 = {
  key: 0
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_IconView = resolveComponent("IconView");

  return openBlock(), createBlock("div", {
    class: [_ctx.addBootstrapClass ? 'input-group' : '']
  }, [createCommentVNode(" Calendar Button "), _ctx.calendarButton ? (openBlock(), createBlock("span", {
    key: 0,
    class: ["vuejs3-datepicker__calendar-button", {
      'input-group-prepend': _ctx.addBootstrapClass
    }],
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.showCalendar.apply(_ctx, arguments);
    }),
    style: {
      'cursor:not-allowed;': _ctx.disabled
    }
  }, [createVNode("span", {
    class: {
      'input-group-text': _ctx.addBootstrapClass
    }
  }, [createVNode("i", {
    class: _ctx.calendarButtonIcon
  }, [createTextVNode(toDisplayString(_ctx.calendarButtonIconContent) + " ", 1
  /* TEXT */
  ), !_ctx.calendarButtonIcon ? (openBlock(), createBlock("span", _hoisted_1$1, "…")) : createCommentVNode("v-if", true)], 2
  /* CLASS */
  )], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true), _ctx.typeable || !_ctx.hideInput ? (openBlock(), createBlock("div", _hoisted_2$1, [!_ctx.inline ? (openBlock(), createBlock("span", _hoisted_3$1, [createVNode(_component_IconView, {
    class: "vuejs3-datepicker__typeablecalendar",
    color: _ctx.iconColor,
    width: _ctx.iconWidth,
    height: _ctx.iconHeight
  }, null, 8
  /* PROPS */
  , ["color", "width", "height"])])) : createCommentVNode("v-if", true), createVNode("input", {
    type: _ctx.inline ? 'hidden' : 'text',
    class: [_ctx.computedInputClass, "vuejs3-datepicker__inputvalue"],
    name: _ctx.name,
    ref: "inputRef",
    id: _ctx.id,
    value: _ctx.formattedValue,
    "open-date": _ctx.openDate,
    placeholder: _ctx.placeholder,
    "clear-button": _ctx.clearButton,
    disabled: _ctx.disabled,
    required: _ctx.required,
    readonly: !_ctx.typeable,
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.showCalendar.apply(_ctx, arguments);
    }),
    onKeyup: _cache[3] || (_cache[3] = function () {
      return _ctx.parseTypedDate.apply(_ctx, arguments);
    }),
    onBlur: _cache[4] || (_cache[4] = function () {
      return _ctx.inputBlurred.apply(_ctx, arguments);
    }),
    autocomplete: "off"
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , ["type", "name", "id", "value", "open-date", "placeholder", "clear-button", "disabled", "required", "readonly"])])) : (openBlock(), createBlock("div", {
    key: 2,
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.showCalendar.apply(_ctx, arguments);
    }),
    id: "calendar-div"
  }, [!_ctx.inline ? (openBlock(), createBlock("div", _hoisted_4, [createVNode("span", _hoisted_5, [createVNode(_component_IconView, {
    color: _ctx.iconColor,
    width: _ctx.iconWidth,
    height: _ctx.iconHeight
  }, null, 8
  /* PROPS */
  , ["color", "width", "height"])]), _ctx.formattedValue ? (openBlock(), createBlock("div", _hoisted_6, toDisplayString(_ctx.formattedValue), 1
  /* TEXT */
  )) : (openBlock(), createBlock("div", _hoisted_7, toDisplayString(_ctx.placeholder), 1
  /* TEXT */
  ))])) : createCommentVNode("v-if", true)])), _ctx.clearButton && _ctx.selectedDate ? (openBlock(), createBlock("span", {
    key: 3,
    class: ["vuejs3-datepicker__clear-button", {
      'input-group-append': _ctx.addBootstrapClass
    }],
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return _ctx.clearDate();
    })
  }, [createVNode("span", {
    class: {
      'input-group-text': _ctx.addBootstrapClass
    }
  }, [createVNode("i", {
    class: _ctx.clearButtonIcon
  }, [!_ctx.clearButtonIcon ? (openBlock(), createBlock("span", _hoisted_8, "×")) : createCommentVNode("v-if", true)], 2
  /* CLASS */
  )], 2
  /* CLASS */
  )], 2
  /* CLASS */
  )) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "belowDate")], 2
  /* CLASS */
  );
}

script$2.render = render$3;
script$2.__file = "src/components/datepicker/DateInput.vue";
var script$3 = defineComponent({
  name: 'PickerDay',
  props: {
    showDayView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      default: new Date()
    },
    pageDate: {
      type: Date,
      default: new Date()
    },
    pageTimestamp: {
      type: Number
    },
    fullMonthName: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function
    },
    dayCellContent: {
      type: Function,
      default: function _default(day) {
        return day.date;
      }
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    mondayFirst: {
      type: Boolean
    },
    useUtc: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    },
    preventDisableDateSelection: {
      type: Boolean,
      default: true
    },
    theme: {
      default: 'green',
      type: String
    }
  },
  emits: ['show-year-calendar', 'changed-month', 'show-month-calendar', 'selected-disabled', 'select-date'],
  setup: function setup(props, _ref51) {
    var emit = _ref51.emit;

    /** ********************************** Methods *********************************** */

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {string | Date}
     */
    function selectDate(date) {
      if (date.isDisabled) {
        emit('selected-disabled', date);

        if (!props.preventDisableDateSelection) {
          emit('select-date', date);
        }
      } else {
        emit('select-date', date);
      }
    }
    /**
     * Emit an event to show the month picker
     */


    function showMonthCalendar() {
      emit('show-month-calendar');
    }
    /**
     * Emit an event to show the year picker
     */


    function showYearCalendar() {
      emit('show-year-calendar');
    }
    /**
     * Change the page month
     * @param {Number} incrementBy
     */


    function changeMonth(incrementBy) {
      var date = props.pageDate;
      setMonth(date, getMonth(date) + incrementBy);
      emit('changed-month', date);
    }
    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */


    function isPreviousMonthDisabled() {
      var d = props.disabledDates;

      if (!d || !d.to) {
        return false;
      }

      var t = props.pageDate;
      return getMonth(d.to) >= getMonth(t) && getFullYear(d.to) >= getFullYear(t);
    }
    /**
     * Decrement the page month
     */


    function previousMonth() {
      if (!isPreviousMonthDisabled()) {
        changeMonth(-1);
      }
    }
    /**
     * Is the next month disabled?
     * @return {Boolean}
     */


    function isNextMonthDisabled() {
      var d = props.disabledDates;

      if (!d || !d.from) {
        return false;
      }

      var t = props.pageDate;
      return getMonth(d.from) <= getMonth(t) && getFullYear(d.from) <= getFullYear(t);
    }
    /**
     * Increment the current page month
     */


    function nextMonth() {
      if (!isNextMonthDisabled()) {
        changeMonth(+1);
      }
    }
    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */


    function isSelectedDate(dObj) {
      var propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? compareDates(propDate, dObj) : false;
    }
    /**
     * Whether a date is disabled
     * @return {Boolean}
     */


    function isDisabledDate(date) {
      var disabledDates = false;
      var t = props.disabledDates;
      if (!t) return disabledDates;

      if (typeof t === 'undefined') {
        return false;
      }

      if (typeof t.dates !== 'undefined') {
        t.dates.forEach(function (d) {
          var isEqual = compareDates(date, d);

          if (isEqual) {
            disabledDates = true; // return true;
          }
        });
      }

      if (typeof t.to !== 'undefined' && t.to && date < t.to) {
        disabledDates = true;
      }

      if (typeof t.from !== 'undefined' && t.from && date > t.from) {
        disabledDates = true;
      }

      if (typeof t.ranges !== 'undefined') {
        t.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true; // return true;
            }
          }
        });
      }

      if (typeof t.days !== 'undefined' && t.days.indexOf(getDay(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof t.daysOfMonth !== 'undefined' && t.daysOfMonth.indexOf(getDate(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof t.customPredictor === 'function' && t.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */


    function isDefined(prop) {
      return typeof prop !== 'undefined' && prop;
    }
    /**
     * Whether a date is highlighted or not
     * @return {Boolean}
     */


    function isHighlightedDate(date) {
      var h = props.highlighted;

      if (!(h && h.includeDisabled) && isDisabledDate(date)) {
        return false;
      }

      var highlighted = false;

      if (typeof h === 'undefined') {
        return false;
      }

      if (typeof h.dates !== 'undefined') {
        h.dates.forEach(function (d) {
          if (compareDates(date, d)) {
            highlighted = true; // return true;
          }
        });
      }

      if (isDefined(h.from) && isDefined(h.to)) {
        highlighted = date >= h.from && date <= h.to;
      }

      if (typeof h.days !== 'undefined' && h.days.indexOf(getDay(date)) !== -1) {
        highlighted = true;
      }

      if (typeof h.daysOfMonth !== 'undefined' && h.daysOfMonth.indexOf(getDate(date)) !== -1) {
        highlighted = true;
      }

      if (typeof h.customPredictor === 'function' && h.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted;
    }
    /**
     * Returns Css Classes for a day element
     */


    function dayClasses(day) {
      return {
        selected: day.isSelected,
        disabled: day.isDisabled,
        highlighted: day.isHighlighted,
        today: day.isToday,
        weekend: day.isWeekend,
        sat: day.isSaturday,
        sun: day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      };
    }
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */


    function isHighlightStart(date) {
      var h = props.highlighted;
      if (!h) return false;
      return isHighlightedDate(date) && h.from instanceof Date && getFullYear(h.from) === getFullYear(date) && getMonth(h.from) === getMonth(date) && getDate(h.from) === getDate(date);
    }
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */


    function isHighlightEnd(date) {
      var h = props.highlighted;
      if (!h) return false;
      return isHighlightedDate(date) && h.to instanceof Date && getFullYear(h.to) === getFullYear(date) && getMonth(h.to) === getMonth(date) && getDate(h.to) === getDate(date);
    }
    /** ********************************** Computed  *********************************** */

    /**
     * Returns an array of day names
     * @return {String[]}
     */


    var daysOfWeek = computed$1(function () {
      if (props.mondayFirst) {
        var tempDays = props.translation && props.translation.days && props.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }

      return props.translation && props.translation.days;
    });
    var blankDays = computed$1(function () {
      var d = props.pageDate;
      var dObj = props.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());

      if (props.mondayFirst) {
        return getDay(dObj) > 0 ? getDay(dObj) - 1 : 6;
      }

      return getDay(dObj);
    });
    /**
     * @return {Object[]}
     */

    var days = computed$1(function () {
      var d = props.pageDate;
      var tdays = []; // set up a new date object to the beginning of the current 'page'

      var dObj = props.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var t = daysInMonth(getFullYear(dObj), getMonth(dObj));

      for (var i = 0; i < t; i += 1) {
        tdays.push({
          date: getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: isSelectedDate(dObj),
          isDisabled: isDisabledDate(dObj),
          isHighlighted: isHighlightedDate(dObj),
          isHighlightStart: isHighlightStart(dObj),
          isHighlightEnd: isHighlightEnd(dObj),
          isToday: compareDates(dObj, new Date()),
          isWeekend: getDay(dObj) === 0 || getDay(dObj) === 6,
          isSaturday: getDay(dObj) === 6,
          isSunday: getDay(dObj) === 0
        });
        setDate(dObj, getDate(dObj) + 1);
      }

      return tdays;
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var currMonthName = computed$1(function () {
      var monthName = props.fullMonthName ? props.translation && props.translation.months : props.translation && props.translation.monthsAbbr;
      return getMonthNameAbbr(getMonth(props.pageDate), monthName);
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var monthName = computed$1(function () {
      var tempName = props.translation && props.translation.months;
      return getMonthName(getMonth(props.pageDate), tempName);
    });
    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */

    var currYearName = computed$1(function () {
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(getFullYear(props.pageDate)).concat(yearSuffix);
    });
    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */

    var isYmd = computed$1(function () {
      return (props.translation && props.translation.ymd && props.translation && props.translation.ymd) === true;
    });
    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */

    var isLeftNavDisabled = computed$1(function () {
      return props.isRtl ? isNextMonthDisabled() : isPreviousMonthDisabled();
    });
    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */

    var isRightNavDisabled = computed$1(function () {
      return props.isRtl ? isPreviousMonthDisabled() : isNextMonthDisabled();
    });
    var getDayName = computed$1(function () {
      var propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getDayNameAbbr(propDate, props.translation && props.translation.daysNames) : null;
    });
    var getDisplayDate = computed$1(function () {
      var propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getDate(propDate) : null;
    });
    var ifDifferentViews = computed$1(function () {
      return !(props.minimumView === props.maximumView && (props.minimumView !== 'day' || props.maximumView !== 'day'));
    });
    return {
      isDefined: isDefined,
      showMonthCalendar: showMonthCalendar,
      daysOfWeek: daysOfWeek,
      blankDays: blankDays,
      isYmd: isYmd,
      days: days,
      currMonthName: currMonthName,
      currYearName: currYearName,
      isLeftNavDisabled: isLeftNavDisabled,
      isRightNavDisabled: isRightNavDisabled,
      selectDate: selectDate,
      previousMonth: previousMonth,
      nextMonth: nextMonth,
      dayClasses: dayClasses,
      monthName: monthName,
      getDayName: getDayName,
      getDisplayDate: getDisplayDate,
      showYearCalendar: showYearCalendar,
      isNextMonthDisabled: isNextMonthDisabled,
      ifDifferentViews: ifDifferentViews,
      isSelectedDate: isSelectedDate,
      isDisabledDate: isDisabledDate,
      isHighlightedDate: isHighlightedDate,
      isHighlightStart: isHighlightStart,
      isHighlightEnd: isHighlightEnd
    };
  }
});
var _hoisted_1$2 = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
};
var _hoisted_2$2 = {
  class: "vuejs3-datepicker__calendar-topbar-day"
};
var _hoisted_3$2 = {
  class: "vuejs3-datepicker__calendar-actionarea"
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("div", {
    class: ['vuejs3-datepicker__calendar', "vuejs3-".concat(_ctx.theme), _ctx.calendarClass],
    style: _ctx.calendarStyle,
    onMousedown: _cache[5] || (_cache[5] = withModifiers(function () {}, ["prevent"]))
  }, [renderSlot(_ctx.$slots, "customCalendarHeader"), _ctx.ifDifferentViews && _ctx.selectedDate ? (openBlock(), createBlock("section", _hoisted_1$2, [createVNode("p", {
    class: "vuejs3-datepicker__calendar-topbar-year",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.showYearCalendar.apply(_ctx, arguments);
    })
  }, toDisplayString(_ctx.currYearName), 1
  /* TEXT */
  ), createVNode("p", _hoisted_2$2, toDisplayString(_ctx.getDayName) + " " + toDisplayString(_ctx.getDisplayDate) + " " + toDisplayString(_ctx.monthName), 1
  /* TEXT */
  )])) : createCommentVNode("v-if", true), createVNode("div", _hoisted_3$2, [createVNode("header", null, [createVNode("span", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.isRtl ? _ctx.nextMonth() : _ctx.previousMonth();
    }),
    class: ["prev", {
      disabled: _ctx.isLeftNavDisabled
    }]
  }, "<", 2
  /* CLASS */
  ), createVNode("span", {
    class: ["day__month_btn", _ctx.allowedToShowView('month') ? 'up' : ''],
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.showMonthCalendar.apply(_ctx, arguments);
    })
  }, toDisplayString(_ctx.isYmd ? _ctx.currYearName : _ctx.currMonthName) + " " + toDisplayString(_ctx.isYmd ? _ctx.currMonthName : _ctx.currYearName), 3
  /* TEXT, CLASS */
  ), createVNode("span", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.isRtl ? _ctx.previousMonth() : _ctx.nextMonth();
    }),
    class: ["next", {
      disabled: _ctx.isRightNavDisabled
    }]
  }, ">", 2
  /* CLASS */
  )]), createVNode("div", {
    class: _ctx.isRtl ? 'flex-rtl' : ''
  }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.daysOfWeek, function (d) {
    return openBlock(), createBlock("span", {
      class: "cell day-header",
      key: d.timestamp
    }, toDisplayString(d), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), _ctx.blankDays > 0 ? (openBlock(true), createBlock(Fragment, {
    key: 0
  }, renderList(_ctx.blankDays, function (d) {
    return openBlock(), createBlock("span", {
      class: "cell day blank",
      key: d.timestamp
    });
  }), 128
  /* KEYED_FRAGMENT */
  )) : createCommentVNode("v-if", true), (openBlock(true), createBlock(Fragment, null, renderList(_ctx.days, function (day) {
    return openBlock(), createBlock("span", {
      class: ["cell day", _ctx.dayClasses(day)],
      key: day.timestamp,
      innerHTML: _ctx.dayCellContent(day),
      onClick: function onClick($event) {
        return _ctx.selectDate(day);
      }
    }, null, 10
    /* CLASS, PROPS */
    , ["innerHTML", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )])], 38
  /* CLASS, STYLE, HYDRATE_EVENTS */
  )), [[vShow, _ctx.showDayView]]);
}

script$3.render = render$4;
script$3.__file = "src/components/datepicker/PickerDay.vue";
var script$4 = defineComponent({
  name: 'PickerMonth',
  props: {
    showMonthView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      default: new Date()
    },
    pageDate: {
      type: Date,
      default: new Date()
    },
    pageTimestamp: {
      type: Number
    },
    disabledDates: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function
    },
    useUtc: {
      type: Boolean
    },
    fullMonthName: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    },
    theme: {
      default: 'green',
      type: String
    }
  },
  setup: function setup(props, _ref52) {
    var emit = _ref52.emit;

    /** ********************************** Methods  *********************************** */

    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    function selectMonth(month) {
      if (!month.isDisabled) {
        emit('select-month', month);
      }
    }
    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */


    function changeYear(incrementBy) {
      var date = props.pageDate;
      setFullYear(date, getFullYear(date) + incrementBy);
      emit('changed-year', date);
    }
    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */


    function isPreviousYearDisabled() {
      var d = props.disabledDates;

      if (!d || !d.to) {
        return false;
      }

      return getFullYear(d.to) >= getFullYear(props.pageDate);
    }
    /**
     * Decrements the year
     */


    function previousYear() {
      if (!isPreviousYearDisabled()) {
        changeYear(-1);
      }
    }
    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */


    function isNextYearDisabled() {
      var d = props.disabledDates;

      if (!d || !d.from) {
        return false;
      }

      return getFullYear(d.from) <= getFullYear(props.pageDate);
    }
    /**
     * Increments the year
     */


    function nextYear() {
      if (!isNextYearDisabled()) {
        changeYear(1);
      }
    }
    /**
     * Emits an event that shows the year calendar
     */


    function showYearCalendar() {
      emit('show-year-calendar');
    }
    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */


    function isSelectedMonth(date) {
      var d = stringToDate(props.selectedDate);
      return d && getFullYear(d) === getFullYear(date) && getMonth(d) === getMonth(date);
    }
    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */


    function isDisabledMonth(date) {
      var disabledDates = false;
      var d = props.disabledDates;
      if (!d) return false;

      if (typeof d === 'undefined') {
        return false;
      }

      if (typeof d.to !== 'undefined' && d.to) {
        if (getMonth(date) < getMonth(d.to) && getFullYear(date) <= getFullYear(d.to) || getFullYear(date) < getFullYear(d.to)) {
          disabledDates = true;
        }
      }

      if (typeof d.from !== 'undefined' && d.from) {
        if (getMonth(date) > getMonth(d.from) && getFullYear(date) >= getFullYear(d.from) || getFullYear(date) > getFullYear(d.from)) {
          disabledDates = true;
        }
      }

      if (typeof d.customPredictor === 'function' && d.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
    /** ********************************** Computed  *********************************** */


    var months = computed$1(function () {
      var d = props.pageDate;
      var tmonths = []; // set up a new date object to the beginning of the current 'page'

      var dObj = props.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 12; i += 1) {
        tmonths.push({
          month: getMonthName(i, props.translation && props.translation.months),
          timestamp: dObj.getTime(),
          isSelected: isSelectedMonth(dObj),
          isDisabled: isDisabledMonth(dObj)
        });
        setMonth(dObj, getMonth(dObj) + 1);
      }

      return tmonths;
    });
    /**
     * Get year name on current page.
     * @return {String}
     */

    var pageYearName = computed$1(function () {
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(getFullYear(props.pageDate)).concat(yearSuffix);
    });
    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */

    var isLeftNavDisabled = computed$1(function () {
      return props.isRtl ? isNextYearDisabled() : isPreviousYearDisabled();
    });
    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */

    var isRightNavDisabled = computed$1(function () {
      return props.isRtl ? isPreviousYearDisabled() : isNextYearDisabled();
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var monthName = computed$1(function () {
      var tempName = props.translation && props.translation.months;
      return getMonthName(getMonth(props.pageDate), tempName);
    });
    var getDisplayDate = computed$1(function () {
      var propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getDate(propDate) : null;
    });
    var getDayName = computed$1(function () {
      var propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getDayNameAbbr(propDate, props.translation && props.translation.daysNames) : null;
    });
    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */

    var currYearName = computed$1(function () {
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(getFullYear(props.pageDate)).concat(yearSuffix);
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var currMonthName = computed$1(function () {
      var tempmonthName = props.fullMonthName ? props.translation && props.translation.months : props.translation && props.translation.monthsAbbr;
      return getMonthNameAbbr(getMonth(props.pageDate), tempmonthName);
    });
    var ifDifferentViews = computed$1(function () {
      return !(props.minimumView === props.maximumView && (props.minimumView !== 'day' || props.maximumView !== 'day'));
    });
    return {
      isRightNavDisabled: isRightNavDisabled,
      isLeftNavDisabled: isLeftNavDisabled,
      pageYearName: pageYearName,
      months: months,
      selectMonth: selectMonth,
      previousYear: previousYear,
      nextYear: nextYear,
      currYearName: currYearName,
      getDisplayDate: getDisplayDate,
      monthName: monthName,
      showYearCalendar: showYearCalendar,
      getDayName: getDayName,
      currMonthName: currMonthName,
      ifDifferentViews: ifDifferentViews,
      isSelectedMonth: isSelectedMonth,
      isDisabledMonth: isDisabledMonth
    };
  }
});
var _hoisted_1$3 = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
};
var _hoisted_2$3 = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
};
var _hoisted_3$3 = {
  class: "vuejs3-datepicker__calendar-actionarea"
};

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("div", {
    class: ['vuejs3-datepicker__calendar', "vuejs3-".concat(_ctx.theme), _ctx.calendarClass],
    style: _ctx.calendarStyle,
    onMousedown: _cache[5] || (_cache[5] = withModifiers(function () {}, ["prevent"]))
  }, [renderSlot(_ctx.$slots, "customCalendarHeader"), _ctx.ifDifferentViews ? (openBlock(), createBlock("section", _hoisted_1$3, [createVNode("p", {
    class: "vuejs3-datepicker__calendar-topbar-year",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.showYearCalendar.apply(_ctx, arguments);
    })
  }, toDisplayString(_ctx.currYearName), 1
  /* TEXT */
  ), _ctx.selectedDate ? (openBlock(), createBlock("p", _hoisted_2$3, toDisplayString(_ctx.getDayName) + " " + toDisplayString(_ctx.getDisplayDate) + " " + toDisplayString(_ctx.monthName), 1
  /* TEXT */
  )) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), createVNode("div", _hoisted_3$3, [createVNode("header", null, [createVNode("span", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.isRtl ? _ctx.nextYear() : _ctx.previousYear();
    }),
    class: ["prev", {
      disabled: _ctx.isLeftNavDisabled
    }]
  }, "<", 2
  /* CLASS */
  ), createVNode("span", {
    class: ["month__year_btn", _ctx.allowedToShowView('year') ? 'up' : ''],
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.showYearCalendar.apply(_ctx, arguments);
    })
  }, toDisplayString(_ctx.pageYearName), 3
  /* TEXT, CLASS */
  ), createVNode("span", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.isRtl ? _ctx.previousYear() : _ctx.nextYear();
    }),
    class: ["next", {
      disabled: _ctx.isRightNavDisabled
    }]
  }, ">", 2
  /* CLASS */
  )]), (openBlock(true), createBlock(Fragment, null, renderList(_ctx.months, function (month) {
    return openBlock(), createBlock("span", {
      class: ["cell month", {
        selected: month.isSelected,
        disabled: month.isDisabled
      }],
      key: month.timestamp,
      onClick: withModifiers(function ($event) {
        return _ctx.selectMonth(month);
      }, ["stop"])
    }, toDisplayString(month.month), 11
    /* TEXT, CLASS, PROPS */
    , ["onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 38
  /* CLASS, STYLE, HYDRATE_EVENTS */
  )), [[vShow, _ctx.showMonthView]]);
}

script$4.render = render$5;
script$4.__file = "src/components/datepicker/PickerMonth.vue";
var script$5 = defineComponent({
  name: 'PickerYear',
  props: {
    showYearView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      default: new Date()
    },
    pageDate: {
      type: Date,
      default: new Date()
    },
    pageTimestamp: {
      type: Number
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function
    },
    useUtc: {
      type: Boolean
    },
    fullMonthName: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    },
    theme: {
      default: 'green',
      type: String
    }
  },
  emits: ['select-year', 'changed-decade'],
  setup: function setup(props, _ref53) {
    var emit = _ref53.emit;

    /** ********************************** Methods  *********************************** */

    /**
     * Select year
     * @param {year}
     */
    function selectYear(year) {
      if (!year.isDisabled) {
        emit('select-year', year);
      }
    }
    /**
     * Change year (increment / decrement)
     * @param {number}
     */


    function changeYear(incrementBy) {
      var date = props.pageDate;
      setFullYear(date, getFullYear(date) + incrementBy);
      emit('changed-decade', date);
    }
    /**
     * checks if previous decade is disabled
     */


    function isPreviousDecadeDisabled() {
      var d = props.disabledDates;

      if (!d || !d.to) {
        return false;
      }

      var disabledYear = getFullYear(d.to);
      var lastYearInPreviousPage = Math.floor(getFullYear(props.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage;
    }
    /**
     * changes year to previous decade
     */


    function previousDecade() {
      if (!isPreviousDecadeDisabled()) {
        changeYear(-10);
      }
    }
    /**
     * check if next decade is disabled
     */


    function isNextDecadeDisabled() {
      var d = props.disabledDates;

      if (!d || !d.from) {
        return false;
      }

      var disabledYear = getFullYear(d.from);
      var firstYearInNextPage = Math.ceil(getFullYear(props.pageDate) / 10) * 10;
      return disabledYear <= firstYearInNextPage;
    }
    /**
     * moves year to next decade
     */


    function nextDecade() {
      if (!isNextDecadeDisabled()) {
        changeYear(10);
      }
    }
    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */


    function isSelectedYear(date) {
      var propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getFullYear(propDate) === getFullYear(date) : false;
    }
    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */


    function isDisabledYear(date) {
      var disabledDates = false;

      if (typeof props.disabledDates === 'undefined' || !props.disabledDates) {
        return false;
      }

      if (typeof props.disabledDates.to !== 'undefined' && props.disabledDates.to) {
        if (getFullYear(date) < getFullYear(props.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof props.disabledDates.from !== 'undefined' && props.disabledDates.from) {
        if (getFullYear(date) > getFullYear(props.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof props.disabledDates.customPredictor === 'function') {
        disabledDates = props.disabledDates.customPredictor(date);
      }

      return disabledDates;
    }
    /** ********************************** Computed  *********************************** */


    var years = computed$1(function () {
      var d = props.pageDate;
      var tyears = []; // set up a new date object to the beginning of the current 'page'7

      var dObj = props.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 10; i += 1) {
        tyears.push({
          year: getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: isSelectedYear(dObj),
          isDisabled: isDisabledYear(dObj)
        });
        setFullYear(dObj, getFullYear(dObj) + 1);
      }

      return tyears;
    });
    /**
     * @return {String}
     */

    var getPageDecade = computed$1(function () {
      var decadeStart = Math.floor(getFullYear(props.pageDate) / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(decadeStart, " - ").concat(decadeEnd).concat(yearSuffix);
    });
    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */

    var isLeftNavDisabled = computed$1(function () {
      return props.isRtl ? isNextDecadeDisabled() : isPreviousDecadeDisabled();
    });
    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */

    var isRightNavDisabled = computed$1(function () {
      return props.isRtl ? isPreviousDecadeDisabled() : isNextDecadeDisabled();
    });
    var getDayName = computed$1(function () {
      var propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getDayNameAbbr(propDate, props.translation && props.translation.daysNames) : null;
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var monthName = computed$1(function () {
      var tempName = props.translation && props.translation.months;
      return getMonthName(getMonth(props.pageDate), tempName);
    });
    var getDisplayDate = computed$1(function () {
      var propDate = stringToDate(props.selectedDate);
      return props.selectedDate ? getDate(propDate) : null;
    });
    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */

    var currYearName = computed$1(function () {
      var yearSuffix = props.translation && props.translation.yearSuffix;
      return "".concat(getFullYear(props.pageDate)).concat(yearSuffix);
    });
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */

    var currMonthName = computed$1(function () {
      var tempmonthName = props.fullMonthName ? props.translation && props.translation.months : props.translation && props.translation.monthsAbbr;
      return getMonthNameAbbr(getMonth(props.pageDate), tempmonthName);
    });
    var ifDifferentViews = computed$1(function () {
      return !(props.minimumView === props.maximumView && (props.minimumView !== 'day' || props.maximumView !== 'day'));
    });
    return {
      isRightNavDisabled: isRightNavDisabled,
      isLeftNavDisabled: isLeftNavDisabled,
      getPageDecade: getPageDecade,
      years: years,
      nextDecade: nextDecade,
      previousDecade: previousDecade,
      selectYear: selectYear,
      getDayName: getDayName,
      monthName: monthName,
      getDisplayDate: getDisplayDate,
      currYearName: currYearName,
      currMonthName: currMonthName,
      ifDifferentViews: ifDifferentViews,
      // methods
      isNextDecadeDisabled: isNextDecadeDisabled,
      isPreviousDecadeDisabled: isPreviousDecadeDisabled,
      isDisabledYear: isDisabledYear
    };
  }
});
var _hoisted_1$4 = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
};
var _hoisted_2$4 = {
  class: "vuejs3-datepicker__calendar-topbar-year"
};
var _hoisted_3$4 = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
};
var _hoisted_4$1 = {
  class: "vuejs3-datepicker__calendar-actionarea"
};

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("div", {
    class: ['vuejs3-datepicker__calendar', "vuejs3-".concat(_ctx.theme), _ctx.calendarClass],
    style: _ctx.calendarStyle,
    onMousedown: _cache[3] || (_cache[3] = withModifiers(function () {}, ["prevent"]))
  }, [renderSlot(_ctx.$slots, "customCalendarHeader"), _ctx.ifDifferentViews && _ctx.selectedDate ? (openBlock(), createBlock("section", _hoisted_1$4, [createVNode("p", _hoisted_2$4, toDisplayString(_ctx.currYearName), 1
  /* TEXT */
  ), _ctx.selectedDate ? (openBlock(), createBlock("p", _hoisted_3$4, toDisplayString(_ctx.getDayName) + " " + toDisplayString(_ctx.getDisplayDate) + " " + toDisplayString(_ctx.monthName), 1
  /* TEXT */
  )) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), createVNode("div", _hoisted_4$1, [createVNode("header", null, [createVNode("span", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.isRtl ? _ctx.nextDecade() : _ctx.previousDecade();
    }),
    class: ["prev", {
      disabled: _ctx.isLeftNavDisabled
    }]
  }, "<", 2
  /* CLASS */
  ), createVNode("span", null, toDisplayString(_ctx.getPageDecade), 1
  /* TEXT */
  ), createVNode("span", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.isRtl ? _ctx.previousDecade() : _ctx.nextDecade();
    }),
    class: ["next", {
      disabled: _ctx.isRightNavDisabled
    }]
  }, ">", 2
  /* CLASS */
  )]), (openBlock(true), createBlock(Fragment, null, renderList(_ctx.years, function (year) {
    return openBlock(), createBlock("span", {
      class: ["cell year", {
        selected: year.isSelected,
        disabled: year.isDisabled
      }],
      key: year.timestamp,
      onClick: withModifiers(function ($event) {
        return _ctx.selectYear(year);
      }, ["stop"])
    }, toDisplayString(year.year), 11
    /* TEXT, CLASS, PROPS */
    , ["onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 38
  /* CLASS, STYLE, HYDRATE_EVENTS */
  )), [[vShow, _ctx.showYearView]]);
}

script$5.render = render$6;
script$5.__file = "src/components/datepicker/PickerYear.vue";

var af = function af() {
  var langName = 'Afrikaans';
  var monthFullName = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
  var shortName = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'];
  var days = ['So.', 'Ma.', 'Di.', 'Wo.', 'Do.', 'Vr.', 'Sa.'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    language: langName,
    langName: langName,
    daysNames: days
  };
};

var de = function de() {
  var langName = 'German';
  var monthFullName = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  var shortName = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  var days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  var daysNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    language: langName,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    daysNames: daysNames
  };
};

var en = function en() {
  var langName = 'English';
  var monthFullName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var shortName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    language: langName,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    daysNames: daysNames
  };
};

var fr = function fr() {
  var langName = 'Français';
  var monthFullName = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  var shortName = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  var days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  var daysNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    language: langName,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    daysNames: daysNames
  };
};

var hi = function hi() {
  var langName = 'Hindi';
  var monthFullName = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
  var shortName = ['जन', 'फ़र', 'मार्च', 'अप्रै', 'मई', 'जून', 'जुला', 'अगस्त', 'सितं', 'अक्टू', 'नवं', 'दिसं'];
  var days = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
  var daysNames = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    language: langName,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    daysNames: daysNames
  };
};

var ja = function ja() {
  var langName = 'Japanese';
  var monthFullName = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  var shortName = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  var days = ['日', '月', '火', '水', '木', '金', '土'];
  var daysNames = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    language: langName,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    daysNames: daysNames
  };
};

var nl = function nl() {
  var langName = 'Dutch';
  var monthFullName = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  var shortName = ['jan.', 'feb.', 'mrt.', 'apr.', 'mei', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'];
  var days = ['zo.', 'ma.', 'di.', 'wo.', 'do.', 'vr.', 'za.'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    language: langName,
    daysNames: days
  };
};

var pt = function pt() {
  var langName = 'Português';
  var monthFullName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  var shortName = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  var daysNames = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  var rtl = false;
  var ymd = false;
  var yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days: days,
    language: langName,
    yearSuffix: yearSuffix,
    ymd: ymd,
    rtl: rtl,
    langName: langName,
    daysNames: daysNames
  };
};

var data = {
  af: af(),
  hi: hi(),
  ja: ja(),
  de: de(),
  en: en(),
  fr: fr(),
  nl: nl(),
  pt: pt()
};
var script$6 = defineComponent({
  name: 'Datepicker',
  components: {
    DateInput: script$2,
    PickerDay: script$3,
    PickerMonth: script$4,
    PickerYear: script$5
  },
  directives: {
    clickoutside: ClickOutside
  },
  props: {
    modelValue: {
      type: [Date, String, Number]
    },
    value: {
      type: [Date, String, Number]
    },
    format: {
      type: [String, Function],
      default: 'dd MMM yyyy'
    },
    language: {
      type: String,
      default: 'en'
    },
    openDate: {
      validator: function validator(val) {
        return validateDateInput(val);
      },
      type: Date,
      default: new Date()
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    },
    name: {
      type: String
    },
    id: {
      type: String
    },
    dayCellContent: {
      type: Function
    },
    fullMonthName: {
      type: Boolean
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    placeholder: {
      type: String
    },
    inline: {
      type: Boolean
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    inputClass: {
      type: [String, Object, Array]
    },
    wrapperClass: {
      type: [String, Object, Array]
    },
    mondayFirst: {
      type: Boolean
    },
    clearButton: {
      type: Boolean
    },
    clearButtonIcon: {
      type: String
    },
    calendarButton: {
      type: Boolean
    },
    calendarButtonIcon: {
      type: String
    },
    calendarButtonIconContent: {
      type: String
    },
    addBootstrapClass: {
      type: Boolean
    },
    initialView: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    typeable: {
      type: Boolean
    },
    useUtc: {
      type: Boolean
    },
    hideInput: {
      type: Boolean,
      default: true
    },
    preventDisableDateSelection: {
      type: Boolean,
      default: true
    },
    iconColor: {
      default: 'black',
      type: String
    },
    iconHeight: {
      default: 16,
      type: [String, Number]
    },
    iconWidth: {
      default: 16,
      type: [String, Number]
    },
    theme: {
      default: 'green',
      type: String
    }
  },
  emits: ['input', 'cleared', 'update:modelValue', 'closed', 'changed-month', 'changed-year', 'changed-day', 'selected', 'selected-disabled'],
  setup: function setup(props, _ref54) {
    var emit = _ref54.emit;
    var initmodelvalue = new Date(props.modelValue);
    var pageTimestamp = ref(0);
    var selectedDate = ref(null);

    if (props.modelValue && isValidDate(initmodelvalue)) {
      pageTimestamp.value = initmodelvalue.getTime();
      selectedDate.value = initmodelvalue;
    }

    if (props.openDate) {
      pageTimestamp.value = setDate(new Date(props.openDate), 1);
    }

    var showDayView = ref(false);
    var showMonthView = ref(false);
    var showYearView = ref(false);
    var calendarHeight = ref(0);
    var resetTypedDate = ref(new Date());
    /** ********************************** Computed  *********************************** */

    var computedInitialView = computed$1(function () {
      if (!props.initialView) {
        return props.minimumView;
      }

      return props.initialView;
    });
    var pageDate = computed$1(function () {
      return new Date(pageTimestamp.value);
    });
    var translation = computed$1(function () {
      var temp = data;
      return temp[props.language];
    });
    var isInline = computed$1(function () {
      return !!props.inline;
    });
    var calendarStyle = computed$1(function () {
      return {
        position: isInline.value ? 'static' : undefined
      };
    });
    var isOpen = computed$1(function () {
      return showDayView.value || showMonthView.value || showYearView.value;
    });
    var isRtl = computed$1(function () {
      return translation.value && translation.value.rtl === true;
    });
    /** ********************************** Methods  *********************************** */

    /**
     * Sets the date that the calendar should open on
     */

    function setPageDate(date) {
      if (!date) {
        if (props.openDate) {
          date = new Date(props.openDate);
        } else {
          date = new Date();
        }
      }

      pageTimestamp.value = setDate(new Date(date), 1);
    }
    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */


    function allowedToShowView(view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(props.minimumView);
      var maximumViewIndex = views.indexOf(props.maximumView);
      var viewIndex = views.indexOf(view);
      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    }
    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */


    function close(emitEvent) {
      showDayView.value = false;
      showMonthView.value = false;
      showYearView.value = false;

      if (!isInline.value) {
        if (emitEvent) {
          emit('closed');
        }
      }
    }
    /**
     * Show the day picker
     * @return {Boolean}
     */


    function showDayCalendar() {
      if (!allowedToShowView('day')) {
        return false;
      }

      close();
      showDayView.value = true;
      return true;
    }
    /**
     * Show the month picker
     * @return {Boolean}
     */


    function showMonthCalendar() {
      if (!allowedToShowView('month')) {
        return false;
      }

      close();
      showMonthView.value = true;
      return true;
    }
    /**
     * Show the year picker
     * @return {Boolean}
     */


    function showYearCalendar() {
      if (!allowedToShowView('year')) {
        return false;
      }

      close();
      showYearView.value = true;
      return true;
    }
    /**
     * Sets the initial picker page view: day, month or year
     */


    function setInitialView() {
      var initialView = computedInitialView.value;

      if (!allowedToShowView(initialView)) {
        throw new Error("initialView '".concat(initialView, "' cannot be rendered based on minimum '").concat(props.minimumView, "' and maximum '").concat(props.maximumView, "'"));
      }

      switch (initialView) {
        case 'year':
          showYearCalendar();
          break;

        case 'month':
          showMonthCalendar();
          break;

        default:
          showDayCalendar();
          break;
      }
    }
    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */


    function showCalendar() {
      if (props.disabled || isInline.value) {
        return false;
      }

      if (isOpen.value) {
        return close(true);
      }

      setInitialView();
      return true;
    }
    /**
     * Set the selected date
     * @param {Number} timestamp
     */


    function setDate1(timestamp) {
      var date = new Date(timestamp);
      selectedDate.value = date;
      setPageDate(date);
      emit('selected', date);

      if (props.modelValue) {
        emit('update:modelValue', date);
      } else {
        emit('input', date);
      }
    }
    /**
     * Clear the selected date
     */


    function clearDate() {
      selectedDate.value = null;
      setPageDate();
      emit('selected', null);

      if (props.modelValue) {
        emit('update:modelValue', null);
      } else {
        emit('input', null);
      }

      emit('cleared');
    }
    /**
     * @param {Object} date
     */


    function selectDate(date) {
      setDate1(date.timestamp);

      if (!isInline.value) {
        close(true);
      }

      resetTypedDate.value = new Date();
    }
    /**
     * @param {Object} date
     */


    function selectDisabledDate(date) {
      emit('selected-disabled', date);
    }
    /**
     * @param {Object} month
     */


    function selectMonth(month) {
      var date = new Date(month.timestamp);

      if (allowedToShowView('day')) {
        setPageDate(date);
        showDayCalendar();
      } else {
        selectDate(month);
      }

      emit('changed-month', month);
    }
    /**
     * @param {Object} year
     */


    function selectYear(year) {
      var date = new Date(year.timestamp);

      if (allowedToShowView('month')) {
        setPageDate(date);
        showMonthCalendar();
      } else {
        selectDate(year);
      }

      emit('changed-year', year);
    }
    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */


    function setValue(date) {
      var tempDate = date;

      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        tempDate = Number.isNaN(parsed.valueOf()) ? '' : parsed;
      }

      if (!tempDate) {
        setPageDate();
        selectedDate.value = null;
        return;
      }

      selectedDate.value = tempDate;
      setPageDate(date);
    }
    /**
     * Handles a month change from the day picker
     */


    function handleChangedMonthFromDayPicker(date) {
      setPageDate(date);
      emit('changed-month', date);
    }
    /**
     * Set the date from a typedDate event
     */


    function setTypedDate(date) {
      setDate1(date.getTime());
    }
    /**
     * Initiate the component
     */


    function init() {
      if (props.value) {
        setValue(props.value);
      }

      if (isInline.value) {
        setInitialView();
      }
    }
    /**
     * Click Outside handler
     */


    function closeOnClickOutside() {
      close();
    }
    /** ********************************** Watchers  *********************************** */


    watch(function () {
      return props.modelValue;
    }, function (curr) {
      setValue(curr);
    });
    watch(function () {
      return props.value;
    }, function (curr) {
      setValue(curr);
    });
    watch(function () {
      return props.openDate;
    }, function () {
      setPageDate();
    });
    watch(function () {
      return props.initialView;
    }, function () {
      setInitialView();
    });
    init();
    return {
      pageTimestamp: pageTimestamp,
      selectedDate: selectedDate,
      showDayView: showDayView,
      showMonthView: showMonthView,
      showYearView: showYearView,
      calendarHeight: calendarHeight,
      resetTypedDate: resetTypedDate,
      // computed
      pageDate: pageDate,
      translation: translation,
      calendarStyle: calendarStyle,
      isOpen: isOpen,
      isInline: isInline,
      isRtl: isRtl,
      // methods
      setTypedDate: setTypedDate,
      handleChangedMonthFromDayPicker: handleChangedMonthFromDayPicker,
      selectYear: selectYear,
      selectMonth: selectMonth,
      selectDisabledDate: selectDisabledDate,
      clearDate: clearDate,
      showCalendar: showCalendar,
      close: close,
      allowedToShowView: allowedToShowView,
      showYearCalendar: showYearCalendar,
      showMonthCalendar: showMonthCalendar,
      setPageDate: setPageDate,
      selectDate: selectDate,
      closeOnClickOutside: closeOnClickOutside,
      showDayCalendar: showDayCalendar,
      computedInitialView: computedInitialView,
      setDate: setDate,
      setDate1: setDate1,
      setValue: setValue
    };
  }
});

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_date_input = resolveComponent("date-input");

  var _component_picker_day = resolveComponent("picker-day");

  var _component_picker_month = resolveComponent("picker-month");

  var _component_picker_year = resolveComponent("picker-year");

  var _directive_clickoutside = resolveDirective("clickoutside");

  return withDirectives((openBlock(), createBlock("div", {
    class: ["vuejs3-datepicker", [_ctx.isRtl ? 'rtl' : '', "vuejs3-".concat(_ctx.theme), _ctx.wrapperClass]]
  }, [createVNode(_component_date_input, {
    selectedDate: _ctx.selectedDate,
    resetTypedDate: _ctx.resetTypedDate,
    format: _ctx.format,
    translation: _ctx.translation,
    inline: _ctx.inline,
    id: _ctx.id,
    name: _ctx.name,
    fullMonthName: _ctx.fullMonthName,
    openDate: _ctx.openDate,
    placeholder: _ctx.placeholder,
    inputClass: _ctx.inputClass,
    typeable: _ctx.typeable,
    clearButton: _ctx.clearButton,
    clearButtonIcon: _ctx.clearButtonIcon,
    calendarButton: _ctx.calendarButton,
    calendarButtonIcon: _ctx.calendarButtonIcon,
    calendarButtonIconContent: _ctx.calendarButtonIconContent,
    disabled: _ctx.disabled,
    required: _ctx.required,
    addBootstrapClass: _ctx.addBootstrapClass,
    "use-utc": _ctx.useUtc,
    onShowCalendar: _ctx.showCalendar,
    onCloseCalendar: _ctx.close,
    onTypedDate: _ctx.setTypedDate,
    onClearDate: _ctx.clearDate,
    minimumView: _ctx.minimumView,
    maximumView: _ctx.maximumView,
    hideInput: _ctx.hideInput,
    iconWidth: _ctx.iconWidth,
    iconHeight: _ctx.iconHeight,
    iconColor: _ctx.iconColor,
    theme: _ctx.theme
  }, {
    belowDate: withCtx(function () {
      return [renderSlot(_ctx.$slots, "belowDate")];
    }),
    _: 1
  }, 8
  /* PROPS */
  , ["selectedDate", "resetTypedDate", "format", "translation", "inline", "id", "name", "fullMonthName", "openDate", "placeholder", "inputClass", "typeable", "clearButton", "clearButtonIcon", "calendarButton", "calendarButtonIcon", "calendarButtonIconContent", "disabled", "required", "addBootstrapClass", "use-utc", "onShowCalendar", "onCloseCalendar", "onTypedDate", "onClearDate", "minimumView", "maximumView", "hideInput", "iconWidth", "iconHeight", "iconColor", "theme"]), createCommentVNode("Day View  "), _ctx.allowedToShowView('day') ? (openBlock(), createBlock(_component_picker_day, {
    key: 0,
    pageDate: _ctx.pageDate,
    selectedDate: _ctx.selectedDate,
    showDayView: _ctx.showDayView,
    fullMonthName: _ctx.fullMonthName,
    allowedToShowView: _ctx.allowedToShowView,
    disabledDates: _ctx.disabledDates,
    highlighted: _ctx.highlighted,
    calendarClass: _ctx.calendarClass,
    calendarStyle: _ctx.calendarStyle,
    translation: _ctx.translation,
    pageTimestamp: _ctx.pageTimestamp,
    isRtl: _ctx.isRtl,
    mondayFirst: _ctx.mondayFirst,
    dayCellContent: _ctx.dayCellContent,
    onChangedMonth: _ctx.handleChangedMonthFromDayPicker,
    onSelectDate: _ctx.selectDate,
    onShowMonthCalendar: _ctx.showMonthCalendar,
    onSelectedDisabled: _ctx.selectDisabledDate,
    onShowYearCalendar: _ctx.showYearCalendar,
    minimumView: _ctx.minimumView,
    maximumView: _ctx.maximumView,
    preventDisableDateSelection: _ctx.preventDisableDateSelection,
    theme: _ctx.theme
  }, {
    customCalendarHeader: withCtx(function () {
      return [renderSlot(_ctx.$slots, "customCalendarHeader")];
    }),
    _: 1
  }, 8
  /* PROPS */
  , ["pageDate", "selectedDate", "showDayView", "fullMonthName", "allowedToShowView", "disabledDates", "highlighted", "calendarClass", "calendarStyle", "translation", "pageTimestamp", "isRtl", "mondayFirst", "dayCellContent", "onChangedMonth", "onSelectDate", "onShowMonthCalendar", "onSelectedDisabled", "onShowYearCalendar", "minimumView", "maximumView", "preventDisableDateSelection", "theme"])) : createCommentVNode("v-if", true), createCommentVNode("Month View "), _ctx.allowedToShowView('month') ? (openBlock(), createBlock(_component_picker_month, {
    key: 1,
    pageDate: _ctx.pageDate,
    selectedDate: _ctx.selectedDate,
    showMonthView: _ctx.showMonthView,
    allowedToShowView: _ctx.allowedToShowView,
    disabledDates: _ctx.disabledDates,
    calendarClass: _ctx.calendarClass,
    calendarStyle: _ctx.calendarStyle,
    translation: _ctx.translation,
    isRtl: _ctx.isRtl,
    "use-utc": _ctx.useUtc,
    fullMonthName: _ctx.fullMonthName,
    onSelectMonth: _ctx.selectMonth,
    onShowYearCalendar: _ctx.showYearCalendar,
    onChangedYear: _ctx.setPageDate,
    minimumView: _ctx.minimumView,
    maximumView: _ctx.maximumView,
    theme: _ctx.theme
  }, {
    customCalendarHeader: withCtx(function () {
      return [renderSlot(_ctx.$slots, "customCalendarHeader")];
    }),
    _: 1
  }, 8
  /* PROPS */
  , ["pageDate", "selectedDate", "showMonthView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "fullMonthName", "onSelectMonth", "onShowYearCalendar", "onChangedYear", "minimumView", "maximumView", "theme"])) : createCommentVNode("v-if", true), createCommentVNode(" Year View "), _ctx.allowedToShowView('year') ? (openBlock(), createBlock(_component_picker_year, {
    key: 2,
    pageDate: _ctx.pageDate,
    selectedDate: _ctx.selectedDate,
    showYearView: _ctx.showYearView,
    allowedToShowView: _ctx.allowedToShowView,
    disabledDates: _ctx.disabledDates,
    calendarClass: _ctx.calendarClass,
    calendarStyle: _ctx.calendarStyle,
    translation: _ctx.translation,
    isRtl: _ctx.isRtl,
    "use-utc": _ctx.useUtc,
    onSelectYear: _ctx.selectYear,
    onChangedDecade: _ctx.setPageDate,
    fullMonthName: _ctx.fullMonthName,
    minimumView: _ctx.minimumView,
    maximumView: _ctx.maximumView,
    theme: _ctx.theme
  }, {
    customCalendarHeader: withCtx(function () {
      return [renderSlot(_ctx.$slots, "customCalendarHeader")];
    }),
    _: 1
  }, 8
  /* PROPS */
  , ["pageDate", "selectedDate", "showYearView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectYear", "onChangedDecade", "fullMonthName", "minimumView", "maximumView", "theme"])) : createCommentVNode("v-if", true)], 2
  /* CLASS */
  )), [[_directive_clickoutside, {
    handler: _ctx.inline ? null : _ctx.closeOnClickOutside
  }]]);
}

var css_248z$2 = ".rtl{direction:rtl}.vuejs3-datepicker{position:relative;display:inline-block}.vuejs3-datepicker *{box-sizing:border-box}.vuejs3-datepicker input{border:1px solid}.vuejs3-datepicker__icon{display:-webkit-flex;display:-ms-flexbox;display:flex}.vuejs3-datepicker__value{min-width:200px;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;border-radius:5px;padding:13px 15px;cursor:pointer;border:1px solid}.vuejs3-datepicker__content{margin-left:10px;font-size:15px}.vuejs3-datepicker__typeablecalendar{position:absolute;top:10px;left:10px}.vuejs3-datepicker__inputvalue{min-width:200px;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;border-radius:5px;padding:12px 10px 13px 35px;cursor:pointer;border:1px solid}.vuejs3-datepicker__calendar{position:absolute;z-index:100;background:#fff;width:300px;box-shadow:0 .2rem 1rem rgba(0,0,0,.12);border-radius:4px;margin-top:4px}.vuejs3-datepicker__calendar-topbar{background-color:#40b983;color:#fff;border-radius:4px 4px 0 0;padding:25px}.vuejs3-datepicker__calendar-topbar-year{font-size:30px;margin:0;padding-bottom:10px}.vuejs3-datepicker__calendar-topbar-day{font-size:20px;margin:0}.vuejs3-datepicker__calendar-actionarea{padding:10px}.vuejs3-datepicker__calendar header{display:block;line-height:40px}.vuejs3-datepicker__calendar header span{text-align:center;width:71.42857142857143%;float:left}.vuejs3-datepicker__calendar header .next,.vuejs3-datepicker__calendar header .prev{width:14.285714285714286%;float:left;text-indent:-10000px;position:relative}.vuejs3-datepicker__calendar header .next:after,.vuejs3-datepicker__calendar header .prev:after{content:\"\";position:absolute;left:50%;width:8px;height:8px;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg)}.vuejs3-datepicker__calendar header .prev:after{border-left:1px solid #2f2f2f;border-bottom:1px solid #2f2f2f}.vuejs3-datepicker__calendar header .next.disabled:after,.vuejs3-datepicker__calendar header .prev.disabled:after{opacity:.5}.vuejs3-datepicker__calendar header .next:after{border-top:1px solid #2f2f2f;border-right:1px solid #2f2f2f}.vuejs3-datepicker__calendar header .next:not(.disabled),.vuejs3-datepicker__calendar header .prev:not(.disabled),.vuejs3-datepicker__calendar header .up:not(.disabled){cursor:pointer;font-size:15px;border-radius:4px}.vuejs3-datepicker__calendar header .next:not(.disabled):hover,.vuejs3-datepicker__calendar header .prev:not(.disabled):hover,.vuejs3-datepicker__calendar header .up:not(.disabled):hover{background:#f8f8f8}.vuejs3-datepicker__calendar .disabled{color:#ddd;cursor:default}.vuejs3-datepicker__calendar .flex-rtl{display:-webkit-flex;display:-ms-flexbox;display:flex;width:inherit;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.vuejs3-datepicker__calendar .cell{display:inline-block;padding:0 5px;width:14.285714285714286%;height:40px;line-height:40px;text-align:center;font-size:14px;vertical-align:middle;border:1px solid transparent}.vuejs3-datepicker__calendar .cell.month,.vuejs3-datepicker__calendar .cell.year{padding:10px 5px;height:50px;line-height:28px}.vuejs3-datepicker__calendar .cell.day-header{text-transform:uppercase}.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).day,.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).month,.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).year{cursor:pointer;transition:.45s}.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,.vuejs3-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover{border:1px solid #40b983}.vuejs3-datepicker__calendar .cell.selected{background:#40b983;color:#fff}.vuejs3-datepicker__calendar .cell.selected:hover{background:#40b983}.vuejs3-datepicker__calendar .cell.highlighted{background:#40b983;color:#fff}.vuejs3-datepicker__calendar .cell.highlighted.selected{background:#40b983}.vuejs3-datepicker__calendar .cell.highlighted.disabled{color:#a3a3a3}.vuejs3-datepicker__calendar .cell.highlighted.highlight-start,.vuejs3-datepicker__calendar .cell.highlighted:last-child{background:#2f9668}.vuejs3-datepicker__calendar .cell.grey{color:#888}.vuejs3-datepicker__calendar .cell.grey:hover{background:inherit}.vuejs3-datepicker__calendar .cell.day-header{font-size:75%;white-space:nowrap;cursor:inherit}.vuejs3-datepicker__calendar .cell.day-header:hover{background:inherit}.vuejs3-datepicker__calendar .month,.vuejs3-datepicker__calendar .year{width:33.333%}.vuejs3-datepicker__calendar-button,.vuejs3-datepicker__clear-button{cursor:pointer;font-style:normal}.vuejs3-datepicker__calendar-button.disabled,.vuejs3-datepicker__clear-button.disabled{color:#999;cursor:default}.vuejs3-datepicker #calendar-div{background-color:#fff;border-radius:5px}.dp-error{color:red;font-size:12px}.backdrop{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2;cursor:pointer}";
styleInject(css_248z$2);
script$6.render = render$7;
script$6.__file = "src/components/datepicker/Datepicker.vue";
var script$7 = defineComponent({
  name: 'UseCase',
  components: {
    Wrapper: script,
    'appdate-picker': script$6
  },
  setup: function setup() {
    var dateSelected = ref(new Date());
    var customClass = 'customClass';
    var starts = ref(new Date());
    return {
      dateSelected: dateSelected,
      customClass: customClass,
      starts: starts,
      disabledStartDates: [],
      calendar: ''
    };
  }
});
var _hoisted_1$5 = {
  class: "flex-block"
};

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_appdate_picker = resolveComponent("appdate-picker");

  return openBlock(), createBlock("div", _hoisted_1$5, [createVNode(_component_appdate_picker, {
    modelValue: _ctx.starts,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.starts = $event;
    }),
    name: "starts",
    placeholder: "Select Date",
    iconColor: "#333",
    "disabled-dates": _ctx.disabledStartDates,
    format: "yyyy-MM-dd",
    "open-date": _ctx.starts,
    typeable: true,
    "wrapper-class": _ctx.calendar,
    asdadada: "asdasd"
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled-dates", "open-date", "wrapper-class"])]);
}

script$7.render = render$8;
script$7.__file = "src/components/usecase/index.vue";
var app = createApp(script$7);
app.directive('clickoutside', ClickOutside);
app.mount('#app');
