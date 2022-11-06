!function(factory, __required) {
    'use strict';
    /** trigged factory **/ 
    factory(__required);
}(function(__required) {
    var core = __required('dist/core/bundles/jeli-core-module.js');
var bootStrapApplication = core['bootStrapApplication'];
var AppModule = __required('viewers/Todo/src/app/app.module.js', 'AppModule');
bootStrapApplication(AppModule);
}, (function(modules,  global) { 
    'use strict';
    var installedModules = {};
    function __required(moduleId, property) {
        'use strict';
        if (!installedModules.hasOwnProperty(moduleId)){
            /** create a new ref **/ 
            installedModules[moduleId] = { exports: true };
            try {
                modules[moduleId](installedModules[moduleId], installedModules[moduleId], __required, global);
            } catch (e) {}
        }

        return property ? installedModules[moduleId][property] : installedModules[moduleId];
    };

    __required.r = function(context, name, getter) {
        if (!context.hasOwnProperty(name)) {
            Object.defineProperty(context, name, {
                get: getter,
                configurable: false,
                enumerable: true
            });
        }
    }

    return __required;
})( /** JELI DEPENDECY HUB **/ {
'node_modules/js-helpers/fns/isstring.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (str) {
    return typeof str === 'string' && new String(str) instanceof String;
}
}),
'node_modules/js-helpers/fns/isarray.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
}),
'node_modules/js-helpers/fns/inarray.js': (function(module, exports, __required, global){
"use strict";
var isarray = __required('node_modules/js-helpers/fns/isarray.js', 'default');
var isstring = __required('node_modules/js-helpers/fns/isstring.js', 'default');
exports.default = function (needle, haystack) {
    return (isstring(haystack) || isarray(haystack)) && haystack.indexOf(needle) > -1;
}
}),
'node_modules/js-helpers/fns/isboolean.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (bool) {
    return Object.prototype.toString.call(bool) === '[object Boolean]';
}
}),
'node_modules/js-helpers/fns/isdefined.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (val) {
    return typeof val !== 'undefined';
}
}),
'node_modules/js-helpers/fns/isdouble.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (n) {
    return parseFloat(n) > 0;
}
}),
'node_modules/js-helpers/fns/isempty.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (val) {
    if (val && typeof val === 'object') {
        return Object.values(val).length < 1;
    }
    return !val || val === '';
}
}),
'node_modules/js-helpers/fns/isequal.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (a, b) {
    return a === b;
}
}),
'node_modules/js-helpers/fns/isfloat.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (n) {
    return Number(n) === n && n % 1 !== 0;
}
}),
'node_modules/js-helpers/fns/isfunction.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (fn) {
    return typeof fn === 'function';
}
}),
'node_modules/js-helpers/fns/isjsonstring.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (str) {
    return str && typeof str === 'string' && '{['.indexOf(str.charAt(0)) > -1 && '}]'.indexOf(str.charAt(str.length - 1)) > -1;
}
}),
'node_modules/js-helpers/fns/isnull.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (val) {
    return null === val;
}
}),
'node_modules/js-helpers/fns/isnumber.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (n) {
    return Number(n) === n && n % 1 === 0;
}
}),
'node_modules/js-helpers/fns/isobject.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (obj) {
    return typeof obj === 'object' && obj instanceof Object && Object.prototype.toString.call(obj) === '[object Object]';
}
;
}),
'node_modules/js-helpers/fns/isundefined.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (val) {
    return typeof val === 'undefined';
}
}),
'node_modules/js-helpers/fns/addToarray.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (list, item, index) {
    if (index >= list.length) {
        list.push(item);
    } else {
        list.splice(index, 0, item);
    }
}
}),
'node_modules/js-helpers/fns/removeFromArray.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (list, index) {
    if (index >= list.length - 1) {
        return list.pop();
    } else {
        return list.splice(index, 1)[0];
    }
}
}),
'node_modules/js-helpers/helpers.js': (function(module, exports, __required, global){
"use strict";

exports.removeFromArray = __required('node_modules/js-helpers/fns/removeFromArray.js', 'default');
exports.addToArray = __required('node_modules/js-helpers/fns/addToarray.js', 'default');
exports.isundefined = __required('node_modules/js-helpers/fns/isundefined.js', 'default');
exports.isstring = __required('node_modules/js-helpers/fns/isstring.js', 'default');
exports.isobject = __required('node_modules/js-helpers/fns/isobject.js', 'default');
exports.isnumber = __required('node_modules/js-helpers/fns/isnumber.js', 'default');
exports.isnull = __required('node_modules/js-helpers/fns/isnull.js', 'default');
exports.isjsonstring = __required('node_modules/js-helpers/fns/isjsonstring.js', 'default');
exports.isfunction = __required('node_modules/js-helpers/fns/isfunction.js', 'default');
exports.isfloat = __required('node_modules/js-helpers/fns/isfloat.js', 'default');
exports.isequal = __required('node_modules/js-helpers/fns/isequal.js', 'default');
exports.isempty = __required('node_modules/js-helpers/fns/isempty.js', 'default');
exports.isdouble = __required('node_modules/js-helpers/fns/isdouble.js', 'default');
exports.isdefined = __required('node_modules/js-helpers/fns/isdefined.js', 'default');
exports.isboolean = __required('node_modules/js-helpers/fns/isboolean.js', 'default');
exports.isarray = __required('node_modules/js-helpers/fns/isarray.js', 'default');
exports.inarray = __required('node_modules/js-helpers/fns/inarray.js', 'default');
}),
'node_modules/js-helpers/fns/base64.js': (function(module, exports, __required, global){
"use strict";
exports.default = function () {
    return {
        encode: function (str) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
        },
        decode: function (str) {
            return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }
    };
}
}),
'node_modules/js-helpers/fns/camelcase.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (str) {
    return str(/^([A-Z])|[\s-_](\w)/g, function (match, p1, p2, offset) {
        if (p2) {
            return p2.toUpperCase();
        }
        return p1.toLowerCase();
    });
}
}),
'node_modules/js-helpers/fns/pascalcase.js': (function(module, exports, __required, global){
"use strict";
var camelCase = __required('node_modules/js-helpers/fns/camelcase.js', 'default');
exports.default = function (str) {
    return str.charAt(0).toUpperCase() + camelCase(str.substring(1));
}
}),
'node_modules/js-helpers/fns/kebabcase.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (str) {
    return str.split('').map(function (char, idx) {
        if (/[A-Z]/.test(char)) {
            return '-' != str[idx - 1] ? '-' + char.toLowerCase() : char.toLowerCase();
        }
        return char;
    }).join('');
}
;
}),
'node_modules/js-helpers/fns/cookie.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (name, value) {
    if (typeof value != 'undefined') {
        setCookie.apply(null, arguments);
    } else {
        return getCookie(name);
    }
}
;
function setCookie(name, value, options) {
    options = options || {};
    if (value === null) {
        value = '';
        options.expires = -1;
    }
    var expires = '', isNumberExpires = typeof options.expires === 'number';
    if (options.expires && (isNumberExpires || options.expires.toUTCString)) {
        var date;
        if (isNumberExpires) {
            date = new Date();
            date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
        } else {
            date = options.expires;
        }
        expires = '; expires=' + date.toUTCString();
    }
    var path = options.path ? '; path=' + options.path : '';
    var domain = options.domain ? '; domain=' + options.domain : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [
        name,
        '=',
        encodeURIComponent(value),
        expires,
        path,
        domain,
        secure
    ].join('');
}
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) == name + '=') {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
}),
'node_modules/js-helpers/fns/extend.js': (function(module, exports, __required, global){
"use strict";
exports.default = extend;
function extend() {
    var extended = {};
    var deep = typeof arguments[0] === 'boolean';
    var i = 0;
    var length = arguments.length;
    if (deep) {
        i++;
        deep = arguments[0];
    }
    if (!deep && Object.assign) {
        return Object.assign.apply(Object, arguments);
    }
    if (Object.prototype.toString.call(arguments[i]) === '[object Array]') {
        extended = Array(arguments[i].length);
    }
    var merger = function (source) {
        for (var name in source) {
            if (source.hasOwnProperty(name)) {
                if (deep && (source[name] && typeof source[name] === 'object') && !Object.keys(source[name]).length) {
                    extended[name] = extend(true, extended[name], source[name]);
                } else {
                    extended[name] = source[name];
                }
            }
        }
    };
    for (; i < length; i++) {
        merger(arguments[i]);
    }
    return extended;
}
}),
'node_modules/js-helpers/fns/copy.js': (function(module, exports, __required, global){
"use strict";
var extend = __required('node_modules/js-helpers/fns/extend.js', 'default');
exports.default = function (item, deep) {
    var type = {};
    if (Object.prototype.toString.call(item) === '[object Array]') {
        type = [];
    }
    if (item && item.nodeType)
        return item.cloneNode(true);
    if (typeof item === 'object' && !deep)
        return item;
    if (item instanceof Date)
        return new Date(item.getTime());
    if (item instanceof RegExp)
        return new RegExp(item);
    if (typeof item !== 'object')
        return item;
    if (deep) {
        var ret;
        try {
            ret = JSON.parse(JSON.stringify(item));
        } catch (e) {
            ret = extend(true, item);
        }
        return ret;
    }
    return extend(type, item);
}
}),
'node_modules/js-helpers/fns/copyfrom.js': (function(module, exports, __required, global){
"use strict";
exports.default = copyFrom;
function copyFrom(to, from) {
    for (var key in to) {
        if (from.hasOwnProperty(key)) {
            if (typeof to[key] === 'object') {
                to[key] = copyFrom(to[key], from[key]);
            } else {
                to[key] = from[key];
            }
        }
    }
    return to;
}
}),
'node_modules/js-helpers/fns/count.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (obj) {
    return Object.keys(obj).length;
}
}),
'node_modules/js-helpers/fns/expect.js': (function(module, exports, __required, global){
"use strict";
var isobject = __required('node_modules/js-helpers/fns/isobject.js', 'default');
exports.default = function (objToInspect) {
    var isObject = isobject(objToInspect);
    function contains(ins) {
        if (isObject) {
            return objToInspect.hasOwnProperty(ins) || ins in objToInspect;
        } else {
            return objToInspect.indexOf(ins) > -1;
        }
    }
    function search(str, iteratorFn) {
        if (!objToInspect) {
            return false;
        }
        var found = false, len = 0, trigger = function (prop) {
                if (iteratorFn && typeof iteratorFn === 'function') {
                    if (iteratorFn(objToInspect[prop], prop, len)) {
                        found = objToInspect[prop];
                    }
                } else {
                    if (JSON.stringify(objToInspect[prop]) === JSON.stringify(str)) {
                        found = objToInspect[len];
                    }
                }
                len++;
            };
        if (isObject) {
            var ObjKeys = Object.keys(objToInspect);
            while (ObjKeys.length > len) {
                trigger(ObjKeys[len]);
            }
            ObjKeys = null;
        } else {
            while (objToInspect.length > len) {
                trigger(len);
            }
            ;
        }
        return found;
    }
    function each(iterator) {
        this.search(null, iterator);
    }
    return {
        search: search,
        contains: contains,
        each: each
    };
}
}),
'node_modules/js-helpers/fns/hashcode.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (code) {
    var hash = 0, i, chr, len;
    if (!code || code.length === 0)
        return hash;
    for (i = 0, len = code.length; i < len; i++) {
        chr = code.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}
}),
'node_modules/js-helpers/fns/logger.js': (function(module, exports, __required, global){
"use strict";
exports.default = logger;
var logLevels = {
    DEBUG: 4,
    LOG: 3,
    INFO: 2,
    WARN: 1,
    ERROR: 0
};
var logger = {
    _log: function logger(mockOptions, args, level) {
        var loggerLevel = 2;
        var logLevelMethods = [
            'error',
            'warn',
            'info',
            'log',
            'debug'
        ];
        if (mockOptions && typeof mockOptions.logging !== 'undefined') {
            loggerLevel = mockOptions.logging;
        }
        level = level === 0 ? level : level || logLevels.LOG;
        args = args.splice ? args : [args];
        if (loggerLevel === false || loggerLevel < level) {
            return;
        }
        if (mockOptions.log) {
            return mockOptions.log(args[1] || args[0]);
        } else if (mockOptions.logger && mockOptions.logger[logLevelMethods[level]]) {
            return mockOptions.logger[logLevelMethods[level]].apply(mockOptions.logger, args);
        }
    },
    debug: function (m, a) {
        return this._log(m, a, logLevels.DEBUG);
    },
    log: function (m, a) {
        return this._log(m, a, logLevels.LOG);
    },
    info: function (m, a) {
        return this._log(m, a, logLevels.INFO);
    },
    warn: function (m, a) {
        return this._log(m, a, logLevels.WARN);
    },
    error: function (m, a) {
        return this._log(m, a, logLevels.ERROR);
    }
};
}),
'node_modules/js-helpers/fns/makeuid.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (e) {
    var uid = '';
    var f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var g = 0; g < e; g++) {
        uid += f.charAt(Math.floor(Math.random() * f.length));
    }
    return uid;
}
}),
'node_modules/js-helpers/fns/nodubs.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (arr) {
    return arr.reduce(function (all, item, index) {
        if (arr.indexOf(arr[index]) === index) {
            all.push(item);
        }
        return all;
    }, []);
}
}),
'node_modules/js-helpers/fns/serializer.js': (function(module, exports, __required, global){
"use strict";
var isFunction = __required('node_modules/js-helpers/fns/isfunction.js', 'default');
var isObject = __required('node_modules/js-helpers/fns/isobject.js', 'default');
var isArray = __required('node_modules/js-helpers/fns/isarray.js', 'default');
exports.default = serialize;
function serialize(obj) {
    if (!obj)
        return;
    var param = [];
    function buildParams(prefix, dn) {
        if (isArray(dn)) {
            dn.forEach(function (n) {
                if (/\[\]$/.test(prefix)) {
                    add(prefix, n);
                } else {
                    buildParams(prefix + '[' + (isObject(n) ? prefix : '') + ']', n);
                }
            });
        } else if (isObject(dn)) {
            for (var name in dn) {
                buildParams(prefix + '[' + name + ']', dn[name]);
            }
        } else {
            add(prefix, dn);
        }
    }
    function add(key, value) {
        value = isFunction(value) ? value() : value === '' ? '' : value;
        param[param.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
    ;
    return Object.keys(obj).map(function (key) {
        return buildParams(key, obj[key]);
    }).join('&').replace(/%20/g, '+');
}
}),
'node_modules/js-helpers/fns/splitntrim.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (str, regexp) {
    return (str || '').split(regexp).map(function (val) {
        return val.trim();
    });
}
}),
'node_modules/js-helpers/fns/toobject.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (str, replacerObj) {
    var newObj;
    var splitedStr = str.match(new RegExp('\\' + str.charAt(0) + '(.*?)' + '\\' + str.charAt(str.length - 1)));
    var newObj = '{' === str.charAt(0) ? {} : [];
    splitedStr = (splitedStr && splitedStr[1] || '').split(',');
    replacerObj = replacerObj || {};
    for (var j in splitedStr) {
        var xSplitedStr = splitedStr[j].split(':');
        newObj[xSplitedStr.shift()] = replacerObj[xSplitedStr.join(':')] || xSplitedStr.pop();
    }
    return newObj;
}
}),
'node_modules/js-helpers/fns/unserialize.js': (function(module, exports, __required, global){
"use strict";
exports.default = function (par) {
    return (par || '').split('&').reduce(function (accum, val) {
        if (val) {
            var splitPairs = val.split('=');
            accum[splitPairs[0]] = parseJSON(splitPairs[1]);
        }
        return accum;
    }, {});
    function parseJSON(str) {
        try {
            str = JSON.parse(str);
        } catch (e) {
        }
        return str;
    }
}
}),
'node_modules/js-helpers/fns/simpleBooleanParser.js': (function(module, exports, __required, global){
"use strict";
exports.default = function ($boolValue) {
    return {
        'true': true,
        '1': true,
        'on': true,
        'yes': true,
        'false': false,
        '0': false,
        'off': false,
        'no': false,
        'null': null,
        'undefined': undefined
    }[$boolValue];
}
}),
'node_modules/js-helpers/utils.js': (function(module, exports, __required, global){
"use strict";

exports.simpleBooleanParser = __required('node_modules/js-helpers/fns/simpleBooleanParser.js', 'default');
exports.kebabCase = __required('node_modules/js-helpers/fns/kebabcase.js', 'default');
exports.pascalCase = __required('node_modules/js-helpers/fns/pascalcase.js', 'default');
exports.camelcase = __required('node_modules/js-helpers/fns/camelcase.js', 'default');
exports.unserialize = __required('node_modules/js-helpers/fns/unserialize.js', 'default');
exports.toobject = __required('node_modules/js-helpers/fns/toobject.js', 'default');
exports.splitntrim = __required('node_modules/js-helpers/fns/splitntrim.js', 'default');
exports.serialize = __required('node_modules/js-helpers/fns/serializer.js', 'default');
exports.nodubs = __required('node_modules/js-helpers/fns/nodubs.js', 'default');
exports.makeuid = __required('node_modules/js-helpers/fns/makeuid.js', 'default');
exports.logger = __required('node_modules/js-helpers/fns/logger.js', 'default');
exports.hashcode = __required('node_modules/js-helpers/fns/hashcode.js', 'default');
exports.extend = __required('node_modules/js-helpers/fns/extend.js', 'default');
exports.expect = __required('node_modules/js-helpers/fns/expect.js', 'default');
exports.count = __required('node_modules/js-helpers/fns/count.js', 'default');
exports.copyfrom = __required('node_modules/js-helpers/fns/copyfrom.js', 'default');
exports.copy = __required('node_modules/js-helpers/fns/copy.js', 'default');
exports.cookie = __required('node_modules/js-helpers/fns/cookie.js', 'default');
exports.base64 = __required('node_modules/js-helpers/fns/base64.js', 'default');
}),
'dist/core/bundles/jeli-core-module.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'LazyLoader', function(){ return LazyLoader;});
__required.r(exports, 'InterceptorResolver', function(){ return InterceptorResolver;});
__required.r(exports, 'IterableProfiler', function(){ return IterableProfiler;});
__required.r(exports, 'ComponentFactoryResolver', function(){ return ComponentFactoryResolver;});
__required.r(exports, 'rxWhile', function(){ return rxWhile;});
__required.r(exports, 'rxDebounceTime', function(){ return rxDebounceTime;});
__required.r(exports, 'debounce', function(){ return debounce;});
__required.r(exports, 'EventManager', function(){ return EventManager;});
__required.r(exports, 'Promise2', function(){ return Promise2;});
__required.r(exports, 'EventEmitter', function(){ return EventEmitter;});
__required.r(exports, 'StateManager', function(){ return StateManager;});
__required.r(exports, 'AbstractObserver', function(){ return AbstractObserver;});
__required.r(exports, 'Observable', function(){ return Observable;});
__required.r(exports, 'Subscription', function(){ return Subscription;});
__required.r(exports, 'Subject', function(){ return Subject;});
__required.r(exports, 'QueryList', function(){ return QueryList;});
__required.r(exports, 'interpolationHelper', function(){ return interpolationHelper;});
__required.r(exports, 'CustomEventHandler', function(){ return CustomEventHandler;});
__required.r(exports, 'ElementRef', function(){ return ElementRef;});
__required.r(exports, 'scheduler', function(){ return scheduler;});
__required.r(exports, 'ViewRef', function(){ return ViewRef;});
__required.r(exports, 'ElementClassList', function(){ return ElementClassList;});
__required.r(exports, 'ElementStyle', function(){ return ElementStyle;});
__required.r(exports, 'AttributeAppender', function(){ return AttributeAppender;});
__required.r(exports, 'DOMHelper', function(){ return DOMHelper;});
__required.r(exports, 'sce', function(){ return sce;});
__required.r(exports, 'ViewParser', function(){ return ViewParser;});
__required.r(exports, 'ChangeDetector', function(){ return ChangeDetector;});
__required.r(exports, 'bootStrapApplication', function(){ return bootStrapApplication;});
__required.r(exports, 'APP_BOOTSTRAP', function(){ return APP_BOOTSTRAP;});
__required.r(exports, 'INITIALIZERS', function(){ return INITIALIZERS;});
__required.r(exports, 'Observer', function(){ return Observer;});
__required.r(exports, 'staticInjectionToken', function(){ return staticInjectionToken;});
__required.r(exports, 'TemplateRef', function(){ return TemplateRef;});
__required.r(exports, 'ϕjeliLinker', function(){ return ϕjeliLinker;});
__required.r(exports, 'LifeCycle', function(){ return LifeCycle;});
__required.r(exports, 'noop', function(){ return noop;});
__required.r(exports, 'resolveClosureRef', function(){ return resolveClosureRef;});
__required.r(exports, 'closureRef', function(){ return closureRef;});
__required.r(exports, 'AbstractInjectorInstance', function(){ return AbstractInjectorInstance;});
__required.r(exports, 'wireResolvers', function(){ return wireResolvers;});
__required.r(exports, 'AutoWire', function(){ return AutoWire;});
__required.r(exports, 'Inject', function(){ return Inject;});
__required.r(exports, 'ProviderToken', function(){ return ProviderToken;});
__required.r(exports, 'errorBuilder', function(){ return errorBuilder;});
var utils = __required('node_modules/js-helpers/utils.js');
var hashcode = utils['hashcode'];
var helpers = __required('node_modules/js-helpers/helpers.js');
var isnumber = helpers['isnumber'];
var isarray = helpers['isarray'];
var isnull = helpers['isnull'];
var isundefined = helpers['isundefined'];
var isboolean = helpers['isboolean'];
var addToArray = helpers['addToArray'];
var removeFromArray = helpers['removeFromArray'];
var isstring = helpers['isstring'];
var inarray = helpers['inarray'];
var isequal = helpers['isequal'];
var isobject = helpers['isobject'];
var isfunction = helpers['isfunction'];
var __buildOptions = {};
function errorBuilder(error, logLevel, stack) {
    var loggerLevel = void 0 == logLevel ? 0 : logLevel;
    var logLevelMethods = [
        'error',
        'warn',
        'info',
        'log',
        'debug'
    ];
    function userException() {
        this.name = 'jEliException';
        this.message = error;
        this.stack = stack;
    }
    userException.prototype.toString = function () {
        return this.name + ': "' + this.message + '"';
    };
    if (typeof error == 'string') {
        error = new userException();
    }
    console[logLevelMethods[loggerLevel]](error);
}
function closureRef(closureRefFn) {
    if (isfunction(closureRefFn)) {
        closureRefFn.__ref__ = closureRef;
    }
    return closureRefFn;
}
function resolveClosureRef(ref) {
    if (isfunction(ref) && ref.__ref__ === closureRef) {
        return ref();
    } else {
        return ref;
    }
}
;
function noop(callback) {
    return callback || function () {
    };
}
;
var existingInstance = new Map();
function ProviderToken(tokenName, multiple, provide) {
    var tokenRecords = [];
    var _persists = true;
    var resolved = false;
    this.tokenName = tokenName;
    this.register = function (value, persist) {
        if (multiple) {
            tokenRecords.push(value);
        } else {
            tokenRecords = value;
        }
        _persists = persist;
        resolved = false;
    };
    this.resolve = function () {
        if (resolved && _persists)
            return tokenRecords;
        var token = null;
        try {
            if (multiple) {
                token = tokenRecords.map(getToken);
            } else {
                token = getToken(tokenRecords);
            }
            if (!_persists)
                tokenRecords = [];
            else
                tokenRecords = token;
            resolved = _persists;
        } catch (e) {
            errorBuilder('error while resolving ' + tokenName);
        }
        return token;
    };
    if (provide) {
        this.register(provide, true);
    }
    function getToken(token) {
        return resolved ? token : AutoWire(token);
    }
}
function Inject(dep, localInjector) {
    if (dep.instance) {
        return dep.instance;
    } else if (dep instanceof ProviderToken) {
        return dep.resolve();
    } else if (localInjector && localInjector.has(dep.tokenName)) {
        return localInjector.get(dep);
    } else if (isfunction(dep)) {
        if (!dep.annotations) {
            return resolveClosureRef(dep);
        }
        var instance = dep.annotations.instance;
        if (!instance) {
            instance = AutoWire(resolveClosureRef(dep), localInjector);
            if (!dep.annotations.noSingleton) {
                dep.annotations.instance = instance;
            }
        }
        return instance;
    }
    return null;
}
;
function AutoWire(factory, localInjector, callback) {
    if (isfunction(factory)) {
        var deps = resolveDeps(factory.annotations && factory.annotations.DI, localInjector);
        var protos = Object.create(factory.prototype);
        var result = factory.apply(protos, deps) || protos;
        if (existingInstance.has(factory)) {
            existingInstance.set(factory, result);
        }
        if (isfunction(callback)) {
            return callback(result);
        }
        return result;
    }
    factory = resolveTokenBase(factory, localInjector);
    return factory;
}
;
function wireResolvers(deps, localInjector) {
    if (deps) {
        for (var i = 0; i < deps.length; i++) {
            var token = deps[i];
            var tokenValue = resolveTokenBase(token, localInjector);
            if (token.name instanceof ProviderToken) {
                token.name.register(tokenValue, false);
            } else if (isfunction(token.name)) {
                console.log(token, tokenValue);
            }
        }
    }
}
function resolveTokenBase(token, localInjector) {
    var tokenValue;
    if (token.factory) {
        tokenValue = resolveClosureRef.factory(token, localInjector);
    } else if (token.useClass) {
        tokenValue = Inject(token.useClass, localInjector);
    } else if (token.reference) {
        tokenValue = resolveReference(Inject(token.reference, localInjector), localInjector);
    } else if (token.value) {
        tokenValue = token.value;
    }
    return tokenValue;
}
function resolveDeps(deps, localInjector) {
    return (deps || []).map(function (di) {
        var injectableParam = null;
        var err = false;
        try {
            injectableParam = Inject(di, localInjector);
        } catch (e) {
            err = true;
        } finally {
            if (err && !di.optional) {
                throw new Error('Unable to resolve provider ' + di.name || di.tokenName);
            }
        }
        return injectableParam;
    });
}
function resolveReference(reference, localInjector) {
    if (isfunction(reference)) {
        if (reference.instance)
            return reference.instance;
        else if (localInjector.has(reference))
            return localInjector.get(reference);
        else if (reference.annotations) {
            existingInstance.set(reference, null);
            return function () {
                return existingInstance.get(reference);
            };
        }
        return AutoWire(reference);
    } else {
        return reference;
    }
}
resolveClosureRef.factory = function (token, localInjector) {
    var args = resolveDeps(token.DI, localInjector);
    return function () {
        return resolveClosureRef(token.factory).apply(null, args);
    };
};
function AbstractInjectorInstance() {
    this.injectors = {};
    this.has = function (injectorToken) {
        return this.injectors.hasOwnProperty(injectorToken);
    };
}
AbstractInjectorInstance.prototype.set = function (tokenName, value) {
    this.injectors[tokenName] = value;
};
AbstractInjectorInstance.prototype.get = function (injectorToken) {
    return this.injectors[injectorToken];
};
AbstractInjectorInstance.prototype.destroy = function () {
    this.injectors = null;
};
function LifeCycle(componentInstance) {
    var _cycleState = {
        didInit: !!componentInstance.didInit,
        viewDidLoad: !!componentInstance.viewDidLoad,
        viewDidDestroy: !!componentInstance.viewDidDestroy,
        willObserve: !!componentInstance.willObserve,
        didChange: !!componentInstance.didChange
    };
    this.has = function (cycle) {
        return _cycleState[cycle] && isfunction(componentInstance[cycle]);
    };
    this.trigger = function (cycle, args) {
        if (this.has(cycle)) {
            componentInstance[cycle](args);
        }
    };
}
;
function TemplateRef(templates) {
    this.createElement = function (parentNode, viewContainer) {
        return ViewParser.builder[templates.type](templates, parentNode, viewContainer);
    };
    this.getContext = function () {
        return templates.context;
    };
    this.forEach = function (selector, callback) {
        function _selectable(template) {
            if (!selector) {
                return true;
            } else if (inarray(selector[0], [
                    'id',
                    'class'
                ])) {
                return template.attr && inarray(template.attr[selector[0]], selector[1]) || selector[0] === 'id' && template.refId === selector[1];
            } else if (isequal(selector[0], 'attr')) {
                return template.attr && template.attr.hasOwnProperty(selector[1]);
            } else {
                return isequal(selector[1], template.name);
            }
        }
        for (var i = 0; i < templates.length; i++) {
            var template = templates[i];
            if (_selectable(template)) {
                if (isequal(template.name, '#fragment'))
                    template.children.forEach(callback);
                else
                    callback(template);
            }
        }
    };
}
TemplateRef.factory = function (node, templateId, silent) {
    var templates = node['[[TEMPLATES]]'];
    if (!templates || !templates.hasOwnProperty(templateId)) {
        if (!silent)
            errorBuilder('No templates Defined #' + templateId);
        return null;
    }
    if (typeof templates[templateId] === 'function') {
        templates[templateId] = templates[templateId]();
    }
    return new TemplateRef(templates[templateId]);
};
var staticInjectionToken = {
    ElementRef: 'ElementRef',
    TemplateRef: 'TemplateRef',
    changeDetector: 'changeDetector',
    ViewRef: 'ViewRef',
    ParentRef: 'ParentRef',
    VALIDATORS: 'VALIDATORS',
    QueryList: 'QueryList',
    Function: 'Function',
    HostRef: 'HostRef',
    HTMLElement: 'HTMLElement'
};
function ComponentInjectors(elementRef, selector) {
    AbstractInjectorInstance.call(this, elementRef);
    this.injectors.ElementRef = elementRef;
    this.injectors.Selector = selector;
    this.has = function (tokenName) {
        return this.injectors.hasOwnProperty(tokenName) || staticInjectionToken.hasOwnProperty(tokenName);
    };
}
ComponentInjectors.prototype = Object.create(AbstractInjectorInstance.prototype);
ComponentInjectors.prototype.constructor = AbstractInjectorInstance;
ComponentInjectors.prototype.destroy = function () {
    this.injectors.ElementRef = null;
    this.injectors = null;
    this.currentClassAnnotations = null;
};
ComponentInjectors.prototype.get = function (dep) {
    if (this.injectors.hasOwnProperty(dep.tokenName))
        return this.injectors[dep.tokenName];
    else if (staticInjectionToken[dep.tokenName])
        return _ComponentInjectionToken(dep, this);
};
function _ComponentInjectionToken(dep, context) {
    switch (dep.tokenName) {
    case staticInjectionToken.TemplateRef:
        return TemplateRef.factory(context.injectors.ElementRef, context.get({ tokenName: 'Selector' }));
    case staticInjectionToken.changeDetector:
        return context.injectors.ElementRef.changeDetector;
    case staticInjectionToken.ViewRef:
        return new ViewRef(context.injectors.ElementRef);
    case staticInjectionToken.ParentRef: {
            if (dep.value) {
                return findParentRef(context.injectors.ElementRef.parent, dep);
            }
            return context.injectors.ElementRef.parent.componentInstance;
        }
    case staticInjectionToken.VALIDATORS:
        return getValidators(context.injectors.ElementRef);
    }
}
function getValidators(elementRef) {
    return [
        'required',
        'pattern',
        'minlength',
        'maxlength'
    ].reduce(function (accum, key) {
        if (elementRef.hasAttribute(key)) {
            accum[key] = elementRef.getAttribute(key);
        }
        return accum;
    }, {});
}
function findParentRef(parentRef, refInstance) {
    var selector = refInstance.value + (refInstance.type ? ':' + refInstance.type : '');
    if (parentRef && (!parentRef.nodes || !parentRef.nodes.has(selector))) {
        return findParentRef(parentRef.parent, refInstance);
    }
    if (!parentRef) {
        return null;
    }
    return parentRef.nodes.get(selector);
}
function ϕjeliLinker(componentInstance, elementRef, lifeCycle, definition) {
    lifeCycle.trigger('willObserve');
    var propChanges = null;
    var registeredProperty = {};
    var isPrimitive = [];
    var always = false;
    if (definition.props) {
        always = _updateViewBinding();
    }
    function _updateViewBinding() {
        var hasBinding = false;
        var context = null;
        if (elementRef.hasContext) {
            context = elementRef.context;
        } else {
            context = (isequal(elementRef.parent.type, 'comment') && !elementRef.isc ? elementRef : elementRef.parent).context;
        }
        for (var prop in definition.props) {
            if (isPrimitive.includes(prop))
                continue;
            var item = definition.props[prop];
            var name = item.value || prop;
            var value;
            if (elementRef.props && elementRef.props.hasOwnProperty(name)) {
                try {
                    if (isobject(elementRef.props[name])) {
                        hasBinding = true;
                        value = getFilteredTemplateValue(elementRef.props[name], context, elementRef.parent.componentInstance);
                    } else {
                        value = getPrimitiveValue(item.type, name, elementRef.props[name]);
                        isPrimitive.push(prop);
                    }
                    setValue(prop, value);
                } catch (e) {
                    console.error(e);
                }
            } else if (elementRef.hasAttribute(name)) {
                isPrimitive.push(prop);
                setValue(prop, elementRef.attr[name]);
            }
        }
        if (propChanges) {
            lifeCycle.trigger('didChange', propChanges);
            propChanges = null;
        }
        return hasBinding;
    }
    function hash(a, count) {
        var count = count || 0;
        if (a === null || a === undefined)
            return count;
        else if (typeof a === 'number')
            count += a;
        else if (typeof a === 'string')
            count += a.length;
        else if (typeof a === 'boolean')
            count += a ? 1 : 0;
        else if (typeof a === 'object' && (a.constructor === Object || a.constructor === Array)) {
            for (var prop in a) {
                if (typeof prop === 'number')
                    count += prop;
                else
                    count += prop.length;
                count = hash(a[prop], count);
            }
        } else {
            count += 1;
        }
        return count;
    }
    function setValue(property, value) {
        var hasProp = registeredProperty.hasOwnProperty(property);
        var hashValue = 1;
        var sameValue = isequal(componentInstance[property], value);
        ;
        if (typeof value === 'object') {
            hashValue = hash(value);
            sameValue = hashValue === registeredProperty[property];
        }
        if (hasProp && sameValue)
            return;
        if (propChanges === null) {
            propChanges = {};
        }
        registeredProperty[property] = hashValue;
        propChanges[property] = value;
        componentInstance[property] = value;
    }
    function getPrimitiveValue(type, name, value) {
        switch (type) {
        case staticInjectionToken.TemplateRef:
            return TemplateRef.factory(elementRef, name);
        case staticInjectionToken.Function:
            return elementRef.parent.componentInstance[value];
        default:
            return value;
        }
    }
    var unsubscribe = SubscribeObservables(elementRef.hostRef.refId, function () {
        if (always)
            _updateViewBinding();
        lifeCycle.trigger('willObserve');
    });
    attachElementObserver(elementRef, function () {
        unsubscribe();
        registeredProperty = null;
        isPrimitive.length = 0;
    });
}
function SubscribeObservables(refId, fn) {
    var componentRef = componentDebugContext.get(refId);
    var unsubscribe = null;
    if (componentRef) {
        unsubscribe = componentRef.observables.subscribe(fn);
    }
    return unsubscribe;
}
function ElementCompiler(ctrl, elementRef, componentInjectors, next) {
    var definition = ctrl.annotations, lifeCycle;
    function CoreComponentCompiler(componentInstance) {
        if (!elementRef.isc) {
            return;
        }
        var componentRef = componentDebugContext.get(elementRef.refId);
        componentRef.componentInstance = componentInstance;
        if (ctrl.view) {
            try {
                var renderedElement = ctrl.view(elementRef);
                elementMutationObserver(elementRef.nativeElement, function (mutaionList, observer) {
                    lifeCycle && lifeCycle.trigger('viewDidLoad');
                    observer.disconnect();
                });
                elementRef.nativeElement.appendChild(renderedElement);
                elementRef.changeDetector.detectChanges();
            } catch (e) {
                errorBuilder(e);
            }
        }
        attachElementObserver(elementRef, function () {
            lifeCycle.trigger('viewDidDestroy');
            componentRef.destroy();
            lifeCycle = null;
            componentRef = null;
        });
        componentRef.changeDetector.detectChanges(true, true);
    }
    function compileEventsRegistry(componentInstance) {
        if (definition.events) {
            Object.keys(definition.events).forEach(_registry);
        }
        function _registry(evName) {
            switch (definition.events[evName].type) {
            case 'event':
                EventHandler.attachEvent(elementRef.events, evName, definition.events[evName].value, componentInstance);
                break;
            case 'emitter':
                EventHandler.attachEventEmitter(elementRef, evName, componentInstance);
                break;
            case 'dispatcher':
                EventHandler.attachEventDispatcher(elementRef, evName, componentInstance);
                break;
            }
        }
    }
    function registerDirectiveInstance(componentInstance) {
        if (!elementRef.isc) {
            elementRef.nodes.set(ctrl.annotations.exportAs || definition.selector, componentInstance);
            lifeCycle && lifeCycle.trigger('viewDidLoad');
            attachElementObserver(elementRef, function () {
                lifeCycle.trigger('viewDidDestroy');
                elementRef.nodes.delete(definition.selector);
            });
        }
    }
    ComponentFactoryInitializer(ctrl, componentInjectors, function triggerInstance(componentInstance) {
        compileEventsRegistry(componentInstance);
        lifeCycle = new LifeCycle(componentInstance);
        ϕjeliLinker(componentInstance, elementRef, lifeCycle, definition);
        registerDirectiveInstance(componentInstance);
        lifeCycle.trigger('didInit');
        next(componentInstance);
        CoreComponentCompiler(componentInstance);
    });
}
ElementCompiler.resolve = function (node, nextTick) {
    var inc = 0;
    var componentInjectors = new ComponentInjectors(node);
    function next() {
        var factory = node.providers[inc];
        inc++;
        if (factory) {
            componentInjectors.set('Selector', factory.annotations.selector);
            try {
                ElementCompiler(factory, node, componentInjectors, next);
            } catch (e) {
                errorBuilder(e);
            }
        } else {
            componentInjectors.destroy();
            nextTick(node);
        }
    }
    next(null);
};
function ComponentFactoryInitializer(ctrl, injectorInstance, CB) {
    wireResolvers(ctrl.annotations.resolve, injectorInstance);
    AutoWire(ctrl, injectorInstance, function (instance) {
        try {
            CB(instance);
        } catch (e) {
            errorBuilder(e);
        }
    });
}
;
function Observer() {
    this.$notifyInProgress = 0;
    this.bindingIdx = 0;
    this.retry = false;
    this._entries = new Map();
}
Observer.prototype.subscribe = function (callback) {
    var self = this, bindingIdx = this.bindingIdx++;
    this.retry = true;
    this._entries.set(bindingIdx, {
        handler: callback,
        state: false
    });
    return function () {
        self._entries.delete(bindingIdx);
    };
};
Observer.prototype.observeForKey = function (key, callback, core) {
    var index = 0;
    var self = this;
    var keyObserver;
    if (!this._entries.has(key)) {
        this._entries.push(key, {
            watchKey: key,
            handler: [callback],
            core: core,
            state: false
        });
    } else {
        keyObserver = this.get(key);
        index = keyObserver.length;
        keyObserver.handler.push(fn);
    }
    return function () {
        if (!index) {
            self._entries.delete(key);
        } else {
            keyObserver.handler.splice(index, 1);
        }
    };
};
Observer.prototype.notifyAllObservers = function (model, ignoreCheck) {
    if (this.$notifyInProgress) {
        this.retry = true;
        return;
    }
    this.$notifyInProgress = true;
    this._entries.forEach(function (subscription) {
        rxNotify(subscription, model, ignoreCheck);
    });
    if (this.retry) {
        this.retry = false;
        this.notifyAllObservers(model);
    }
    this.$notifyInProgress = false;
};
Observer.prototype.destroy = function () {
    this._entries.clear();
    this.notifyAllObservers = 0;
    this.retry = false;
};
function InternalChangeDetector(context) {
    this._changeDetectorState = 3;
    Object.defineProperty(this, 'status', {
        get: function () {
            return _changeDetectorState;
        }
    });
    this.detectChanges = function () {
        if (this._changeDetectorState == 3) {
            tick.apply(null, arguments);
        }
    };
    function tick(ignoreChild, ignoreParent) {
        if (!context.observables) {
            return;
        }
        if (context.parent && !ignoreParent && componentDebugContext.has(context.parent)) {
            var parent = componentDebugContext.get(context.parent);
            parent.changeDetector.detectChanges(true);
            triggerChild(parent.child, []);
        }
        context.observables && context.observables.notifyAllObservers(context.componentInstance);
        if (!ignoreChild) {
            triggerChild(context.child, []);
        }
        function triggerChild(children, ignore) {
            for (var i = 0; i < children.length; i++) {
                var refId = children[i];
                if (!ignore.includes(refId) && componentDebugContext.has(refId)) {
                    var child = componentDebugContext.get(refId);
                    child.changeDetector.detectChanges(false, true);
                }
            }
        }
    }
    ;
}
InternalChangeDetector.prototype.onlySelf = function () {
    this.detectChanges(false, true);
};
InternalChangeDetector.prototype.markAsChecked = function () {
    this._changeDetectorState = 1;
};
InternalChangeDetector.prototype.markAsUnChecked = function () {
    this._changeDetectorState = 3;
};
InternalChangeDetector.prototype.markAsOnce = function () {
    this._changeDetectorState = 2;
};
var componentDebugContext = new Map();
function ComponentRef(refId, context) {
    this.componentRefId = refId;
    this.observables = new Observer();
    this.child = [];
    this.parent = null;
    this.changeDetector = new InternalChangeDetector(this);
    this._componentInstance = null;
    this._context = context || null;
    Object.defineProperties(this, {
        context: {
            get: function () {
                if (this._context) {
                    return this._context;
                }
                return this.componentInstance;
            }
        },
        componentInstance: {
            get: function () {
                if (!this._componentInstance && this.parent && componentDebugContext.has(this.parent)) {
                    return componentDebugContext.get(this.parent).componentInstance;
                }
                return this._componentInstance;
            },
            set: function (componentInstance) {
                this._componentInstance = componentInstance;
            }
        }
    });
}
ComponentRef.prototype.removeChild = function (refId) {
    this.child.splice(this.child.indexOf(refId), 1);
    componentDebugContext.delete(refId);
};
ComponentRef.prototype.updateModel = function (propName, value) {
    if (isobject(propName)) {
        for (var prop in propName) {
            setModelValue(prop, this.context, propName[name]);
        }
    } else {
        setModelValue(propName, this.context, value);
    }
    this.changeDetector.detectChanges(false, true);
    return this;
};
ComponentRef.prototype.destroy = function () {
    if (!componentDebugContext.has(this.componentRefId))
        return;
    this.changeDetector.markAsChecked();
    componentDebugContext.delete(this.componentRefId);
    if (this.parent && componentDebugContext.has(this.parent)) {
        componentDebugContext.get(this.parent).removeChild(this.componentRefId);
    }
    this._componentInstance = null;
    this._context = null;
    this.observables.destroy();
    this.changeDetector = null;
    this.observables = null;
    this.parent = null;
    this.child.length = 0;
};
ComponentRef.create = function (refId, parentId, context) {
    var componentRef = componentDebugContext.get(refId);
    if (!componentRef) {
        componentRef = new ComponentRef(refId, context);
        componentDebugContext.set(refId, componentRef);
    } else {
        componentRef._context = context || null;
    }
    if (parentId && componentDebugContext.has(parentId)) {
        componentRef.parent = parentId;
        componentDebugContext.get(parentId).child.push(refId);
    }
    componentRef = null;
};
ComponentRef.get = function (refId, hostRefId) {
    return componentDebugContext.get(refId) || componentDebugContext.get(hostRefId) || {};
};
var CoreBootstrapContext = {
    bootStrapComponent: null,
    compiledModule: null,
    $isCompiled: false,
    injector: null,
    enableDebugger: true
};
var INITIALIZERS = new ProviderToken('AppInitializers', true);
var APP_BOOTSTRAP = new ProviderToken('AppBootstrap', true);
function bootStrapApplication(moduleToBootStrap) {
    return new Promise(function (resolve, reject) {
        try {
            CoreBootstrapContext.compiledModule = moduleToBootStrap;
            CoreBootstrapContext.injector = new AbstractInjectorInstance();
            moduleToBootStrap.fac();
            moduleToBootStrap();
            Promise.all(Inject(INITIALIZERS, CoreBootstrapContext.injector).map(function (callback) {
                return callback();
            })).then(function () {
                CoreBootstrapContext.$isCompiled = true;
                bootStrapElement();
                resolve();
            }, reject);
        } catch (e) {
            errorBuilder(e.message);
            reject();
        }
    });
    function bootStrapElement() {
        if (moduleToBootStrap.rootElement) {
            var selector = moduleToBootStrap.rootElement.annotations.selector;
            CoreBootstrapContext.bootStrapComponent = new ElementRef({
                name: selector,
                isc: true,
                type: 'element',
                fromDOM: true
            }, null);
            ElementCompiler(moduleToBootStrap.rootElement, CoreBootstrapContext.bootStrapComponent, CoreBootstrapContext.injector, function () {
                Inject(APP_BOOTSTRAP, CoreBootstrapContext.injector).forEach(function (callback) {
                    callback();
                });
            });
        }
    }
}
;
function ChangeDetector() {
    if (!CoreBootstrapContext.bootStrapComponent)
        return;
    CoreBootstrapContext.bootStrapComponent.changeDetector.detectChanges();
}
;
var ViewParser = function () {
    function JSONCompiler() {
        var fragment = document.createDocumentFragment();
        this.compile = function (transpiledHTML, parent) {
            for (var i = 0; i < transpiledHTML.length; i++) {
                var compiled = ViewParser.builder[transpiledHTML[i].type](transpiledHTML[i], parent, this);
                if (compiled) {
                    this.pushToView(compiled);
                }
            }
            return fragment;
        };
        this.pushToView = function (compiled) {
            compiled.parent && compiled.parent.children.add(compiled);
            fragment.appendChild(compiled.nativeElement || compiled.nativeNode);
            transverse(compiled);
        };
    }
    function element(definition, parent, viewContainer) {
        var elementRef = new ElementRef(definition, parent);
        if (definition.attr) {
            AttributeAppender(elementRef.nativeElement, definition.attr);
        }
        if (definition.children) {
            for (var i = 0; i < definition.children.length; i++) {
                var childDefinition = typeof definition.children[i] === 'function' ? definition.children[i]() : definition.children[i];
                var child = ViewParser.builder[childDefinition.type](childDefinition, elementRef, viewContainer, true);
                if (child) {
                    pushToParent(child, elementRef, i);
                }
            }
        }
        if (definition.vc) {
            addViewQuery(elementRef.hostRef, definition.vc, elementRef);
        }
        return elementRef;
    }
    function pushToParent(child, parent, index) {
        parent.children.add(child, index);
        parent.nativeElement.appendChild(child.nativeElement || child.nativeNode);
    }
    function comment(definition, parent) {
        return new AbstractElementRef(definition, parent);
    }
    function text(definition, parent) {
        return new TextNodeRef(definition, parent);
    }
    function place(definition, parent, viewContainer, appendToParent) {
        var hostRef = parent.hostRef;
        var createPlaceElement = !(viewContainer || appendToParent);
        var template = TemplateRef.factory(hostRef, 'place', true);
        var placeElement = createPlaceElement ? new AbstractElementRef({
            name: '#fragment',
            type: 'element'
        }, hostRef) : null;
        function createAndAppend(elementDefinition) {
            var child = ViewParser.builder[elementDefinition.type](elementDefinition, hostRef.parent, viewContainer);
            child.hostRefId = hostRef.refId;
            if (appendToParent || createPlaceElement) {
                pushToParent(child, placeElement || parent);
            } else {
                viewContainer.pushToView(child);
            }
            if (definition.vc && [
                    elementDefinition.refId,
                    child.tagName
                ].includes(definition.vc[0].value)) {
                addViewQuery(hostRef, definition.vc, child);
            }
        }
        if (template) {
            template.forEach(definition.selector, createAndAppend);
        }
        return placeElement;
    }
    ;
    function outlet(definition, parent, viewContainer) {
        var template = definition.template;
        if (!template && parent.hostRef) {
            template = parent.hostRef.templates[definition.templateId];
        }
        if (template) {
            var element = ViewParser.builder.element(template, parent, viewContainer);
            element.context = context;
            return element;
        }
        return null;
    }
    return {
        JSONCompiler: JSONCompiler,
        builder: {
            element: element,
            text: text,
            place: place,
            outlet: outlet,
            comment: comment
        }
    };
}();
function transverse(node) {
    if (node instanceof AbstractElementRef) {
        if (node._lazyCompiled)
            return;
        if (node.providers && node.providers.length) {
            ElementCompiler.resolve(node, proceedWithCompilation);
        } else {
            proceedWithCompilation(node);
        }
    } else if (node instanceof TextNodeRef && node.hasBinding) {
        textNodeCompiler(node);
    }
    function proceedWithCompilation(node) {
        if (isequal(node.nativeElement.nodeType, 8)) {
            return;
        }
        ;
        EventHandler.registerListener(node);
        node.children.forEach(transverse);
    }
}
var sce = function () {
    var element = document.createElement('div');
    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    ;
    function decodeHTMLEntities(str) {
        if (str && typeof str === 'string') {
            str = htmlEscape(str).replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '').replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '').replace(/^[ \n\r\t\f]+/, '').replace(/[ \n\r\t\f]+$/, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }
        return str;
    }
    return {
        trustAsHTML: decodeHTMLEntities,
        escapeHTML: htmlEscape,
        isPlainHtml: /<[a-z][\s\S]*>/i
    };
}();
function ElementStyle(nativeElement, name, value) {
    if (name && !value && isstring(name)) {
        if (!!window.getComputedStyle) {
            var ret = window.getComputedStyle(nativeElement)[name];
            return parseInt(ret) || ret;
        }
        return;
    }
    if (isobject(name)) {
        for (var prop in name) {
            ElementStyle.set(nativeElement, prop, name[prop]);
        }
    } else {
        ElementStyle.set.apply(null, arguments);
    }
}
;
ElementStyle.set = function (nativeElement, name, value, suffix) {
    if (typeof value === 'number' && ElementStyle.props.WithSuffix.includes(name)) {
        value += suffix || 'px';
    }
    if (ElementStyle.props.background.includes(name) && value.includes('.') && !value.startsWith('url')) {
        value = 'url(' + value + ')';
    }
    nativeElement.style[name] = value;
};
ElementStyle.props = {
    WithSuffix: 'width|height|top|bottom|left|right|marginTop|marginBottom|marginLeft|marginRight|paddingRight|paddingLeft|paddingTop|paddingBottom|fontSize'.split('|'),
    background: 'backgroundImage|background'.split('|')
};
function ElementClassList(nativeElement, classList, type) {
    if (type) {
        nativeElement.classList[type].apply(nativeElement.classList, toClass(classList));
    } else if (classList) {
        nativeElement.classList.value = classList;
    } else {
        return nativeElement.classList.value;
    }
}
function toClass(classList) {
    return classList.split(/\s/g).filter(function (k) {
        return !!k;
    });
}
ElementClassList.add = function (nativeElement, classList, removeClass) {
    if (!classList || !nativeElement) {
        return;
    }
    if (isobject(classList)) {
        for (var className in classList) {
            nativeElement.classList[classList[className] ? 'add' : 'remove'](className);
        }
    } else {
        nativeElement.classList.add.apply(nativeElement.classList, toClass(classList));
    }
};
ElementClassList.remove = function (nativeElement, classList) {
    if (!classList || !nativeElement) {
        return;
    }
    nativeElement.classList.remove.apply(nativeElement.classList, toClass(classList));
};
ElementClassList.contains = function (nativeElement, className) {
    return nativeElement.classList.contains(className);
};
function AttributeAppender(nativeElement, prop, value) {
    if (Node.DOCUMENT_FRAGMENT_NODE === nativeElement.nodeType)
        return;
    var setValue = function (cprop, cvalue) {
        var elementValue = nativeElement.getAttribute(cprop);
        if (elementValue === cvalue)
            return;
        nativeElement.setAttribute(cprop, cvalue);
    };
    if (isobject(prop)) {
        for (var name in prop) {
            setValue(name, prop[name]);
        }
    } else {
        setValue(prop, value);
    }
}
AttributeAppender.helpers = {
    style: function (nativeElement, value, template) {
        if (isobject(value)) {
            ElementStyle(nativeElement, value);
        } else {
            ElementStyle.set(nativeElement, template.type, value, template.suffix);
        }
    },
    innerhtml: function (nativeElement, value) {
        var elementValue = nativeElement.getAttribute('innerHTML');
        if (elementValue === value)
            return;
        nativeElement.innerHTML = sce.trustAsHTML(value);
    },
    src: function (nativeElement, value) {
        if (![
                'IMG',
                'IFRAME'
            ].includes(nativeElement.tagName)) {
            errorBuilder('src is not a valid property of ' + nativeElement.tagName);
        }
        var elementValue = nativeElement.getAttribute('src');
        if (elementValue === value)
            return;
        nativeElement.setAttribute('src', value);
    },
    href: function (nativeElement, value) {
        if (!isequal('A', nativeElement.tagName)) {
            errorBuilder('href is not a valid property of ' + nativeElement.nativeElement.tagName);
        }
        var elementValue = nativeElement.getAttribute('href');
        if (elementValue === value)
            return;
        nativeElement.setAttribute('href', value);
    },
    class: function (nativeElement, value) {
        ElementClassList.add(nativeElement, value);
    }
};
AttributeAppender.setProp = function (nativeElement, propName, propValue, template) {
    if (propValue === undefined || !nativeElement)
        return;
    if (AttributeAppender.helpers[propName]) {
        return AttributeAppender.helpers[propName](nativeElement, propValue, template);
    }
    if (propName in nativeElement) {
        nativeElement[propName] = propValue;
    } else {
        nativeElement.setAttribute(propName, propValue);
    }
};
function elementMutationObserver(nativeElement, callback) {
    var observer = new MutationObserver(function (mutationsList, observer) {
        if (mutationsList.length) {
            callback.apply(null, arguments);
        }
    });
    observer.observe(nativeElement, {
        attributes: false,
        childList: true,
        subtree: true
    });
}
;
function addViewQuery(hostElement, option, childElement) {
    if (!isequal(option[1], hostElement.tagName)) {
        return hostElement.parent && addViewQuery(hostElement.parent.hostRef, option, childElement);
    }
    var name = option[0].name;
    var type = option[0].type;
    switch (type) {
    case staticInjectionToken.QueryList:
        if (!hostElement.componentInstance.hasOwnProperty(name)) {
            hostElement.componentInstance[name] = new QueryList();
        }
        hostElement.componentInstance[name].add(childElement);
        break;
    case staticInjectionToken.ElementRef:
        hostElement.componentInstance[name] = childElement;
        break;
    case staticInjectionToken.HTMLElement:
        hostElement.componentInstance[name] = childElement.nativeElement;
        break;
    default:
        Object.defineProperty(hostElement.componentInstance, name, {
            configurable: true,
            enumerable: true,
            get: function () {
                return childElement.nodes.has(type) ? childElement.nodes.get(type) : childElement.context;
            }
        });
        break;
    }
}
function elementInsertAfter(hostElement, newNode, targetNode) {
    if (!targetNode || !targetNode.parentNode)
        return;
    targetNode = targetNode || hostElement.nativeElement;
    targetNode.parentNode.insertBefore(newNode, targetNode.nextSibling);
    hostElement.changeDetector.detectChanges();
}
function removeElement(elementRef, removeFromParent) {
    if (!elementRef)
        return;
    if (elementRef instanceof AbstractElementRef) {
        if (elementRef.nativeElement && elementRef.nativeElement.nodeType != 11) {
            elementRef.nativeElement.remove();
        }
        if (removeFromParent && elementRef.parent) {
            elementRef.parent.children.remove(elementRef);
        }
        cleanupElementRef(elementRef);
    } else {
        elementRef.nativeNode.remove();
    }
}
function attachElementObserver(element, onDestroyListener) {
    if (onDestroyListener) {
        element.$observers.push(onDestroyListener);
    }
}
;
function textNodeCompiler(textNodeRef) {
    function _compiler() {
        compileTemplate(textNodeRef.ast, textNodeRef.parent.context, textNodeRef.parent.componentInstance, function (value) {
            if (textNodeRef.nativeNode.nodeValue === value)
                return;
            textNodeRef.nativeNode.nodeValue = value;
        });
    }
    if (!textNodeRef.ast.once) {
        attachElementObserver(textNodeRef.parent, SubscribeObservables(textNodeRef.parent.hostRef.refId, _compiler));
    }
    ;
    _compiler();
}
function cleanupElementRef(elementRef) {
    elementRef.events && elementRef.events.destroy();
    while (elementRef.$observers.length) {
        elementRef.$observers.pop()();
    }
    elementRef.children.destroy();
    elementRef.nativeElement = null;
    elementRef.parent = null;
    if (elementRef.providers) {
        elementRef.providers = null;
        elementRef.nodes.clear();
    }
}
;
function createElementByType(tag, text, fromDOM) {
    if (fromDOM) {
        return document.querySelector(tag);
    }
    switch (tag) {
    case '#comment':
        return document.createComment(text);
    case '#fragment':
        return document.createDocumentFragment();
    default:
        return document.createElement(tag);
    }
}
;
function setupAttributeObservers(element, attrObservers) {
    var observerStarted = false;
    attachElementObserver(element, SubscribeObservables(element.hostRef.refId, observe));
    function observe() {
        for (var propName in attrObservers) {
            if (attrObservers[propName].once && observerStarted) {
                break;
            }
            attributeEvaluator(propName, attrObservers[propName]);
        }
        function attributeEvaluator(propName, template) {
            compileTemplate(template, element.context, element.componentInstance, function (value) {
                try {
                    AttributeAppender.setProp(element.nativeElement, propName, value, template);
                } catch (e) {
                    console.error(e);
                }
            });
        }
        observerStarted = true;
    }
}
function createLocalVariables(localVariables, viewContext) {
    var context = {};
    if (localVariables) {
        for (var propName in localVariables) {
            if (!Array.isArray(localVariables[propName]) && localVariables[propName].match(/\s/)) {
                context[propName] = localVariables[propName];
            } else {
                writePropertyBinding(propName);
            }
        }
    }
    function writePropertyBinding(propName) {
        Object.defineProperty(context, propName, {
            get: function () {
                if (!viewContext.context)
                    return null;
                return evaluateExpression(localVariables[propName], viewContext.context, viewContext.compiledElement.parent.context);
            }
        });
    }
    return context;
}
var DOMHelper = {
    insert: elementInsertAfter,
    remove: removeElement
};
var $eUID = 1;
function AbstractElementRef(definition, parentRef) {
    this.nativeElement = createElementByType(definition.name, definition.text, definition.fromDOM);
    this.$observers = [];
    this.refId = '__eid_' + $eUID++;
    this.children = new QueryList();
    this.parent = parentRef;
    this.hostRefId = parentRef ? parentRef.isc ? parentRef.refId : parentRef.hostRefId || this.refId : this.refId;
    this.type = definition.type;
    this.tagName = definition.name.toLowerCase();
    this.index = definition.index;
    this.attr = definition.attr;
    this.props = definition.props;
    this.isc = definition.isc;
    this.hasContext = !!definition.context;
    if (definition.providers) {
        this.providers = definition.providers;
        this.nodes = new Map();
    }
    Object.defineProperties(this, {
        context: {
            get: function () {
                if (componentDebugContext.has(this.refId)) {
                    return componentDebugContext.get(this.refId).context;
                }
                return this.parent && this.parent.context;
            }
        },
        componentInstance: {
            get: function () {
                var hostElement = ComponentRef.get(this.refId, this.hostRefId);
                return hostElement.componentInstance;
            }
        },
        changeDetector: {
            get: function () {
                var hostElement = ComponentRef.get(this.refId, this.hostRefId);
                return hostElement.changeDetector;
            }
        },
        hostRef: {
            get: function () {
                if (this.isc) {
                    return this;
                }
                return this.parent && this.parent.hostRef;
            }
        },
        '[[TEMPLATES]]': {
            get: function () {
                return definition.templates;
            }
        },
        nativeNode: {
            get: function () {
                return this.nativeElement.nodeType === 8 ? this.nativeElement : null;
            }
        },
        data: {
            get: function () {
                return definition.data;
            }
        }
    });
}
;
AbstractElementRef.prototype.hasAttribute = function (name) {
    return this.attr && this.attr.hasOwnProperty(name);
};
AbstractElementRef.prototype.getAttribute = function (name) {
    return this.attr && name in this.attr ? this.attr[name] : this.nativeElement.getAttribute(name);
};
var scheduler = {
    schedule: function (taskFn, timer) {
        if (!window.requestAnimationFrame) {
            var taskId = setTimeout(taskFn, timer === undefined ? 15 : timer);
            return function () {
                clearTimeout(taskId);
            };
        }
        var taskId = window.requestAnimationFrame(taskFn);
        return function () {
            window.cancelAnimationFrame(taskId);
        };
    }
};
function ViewRef(elementRef) {
    this._viewRefs = [];
    this._destroyed = false;
    this.get = function (index) {
        return this._viewRefs[index];
    };
    this.createEmbededView = function (templateRef, context, index) {
        var view = new EmbededViewContext(elementRef, templateRef, context);
        view.renderView(index);
        addToArray(this._viewRefs, view, index);
        return view;
    };
    Object.defineProperty(this, 'length', {
        get: function () {
            return this._viewRefs.length;
        }
    });
}
ViewRef.prototype.move = function (prev, curr) {
    var view = this.get(prev);
    scheduler.schedule(function () {
        if (view) {
            var parent = view.compiledElement.parent;
            var targetNode = parent.children.getByIndex(curr - 1);
            if (targetNode) {
                elementInsertAfter(parent, view.compiledElement.nativeElement, targetNode.nativeElement);
            }
        }
    });
};
ViewRef.prototype.remove = function (index) {
    var view = removeFromArray(this._viewRefs, index);
    if (view) {
        view._destroyed_view = true;
        view.destroy();
    }
    view = null;
};
ViewRef.prototype.clearView = function () {
    while (this._viewRefs.length) {
        var view = this._viewRefs.shift();
        view.destroy();
    }
};
function EmbededViewContext(parentRef, templateRef, context) {
    var _componentRef = null;
    this.compiledElement = templateRef.createElement(parentRef);
    this.context = context;
    this.unsubscribeScheduler;
    if (this.compiledElement.hasContext) {
        ComponentRef.create(this.compiledElement.refId, parentRef.hostRef.refId, createLocalVariables(templateRef.getContext(), this));
    }
    this.renderView = function (index) {
        var _this = this;
        function _scheduler() {
            var targetNode = (parentRef.children.last || parentRef).nativeElement;
            var _arrIndex = index ? index - 1 : index;
            if (index !== undefined && parentRef.children.hasIndex(_arrIndex)) {
                targetNode = parentRef.children.getByIndex(_arrIndex).nativeElement;
            }
            if (!_this.compiledElement)
                return;
            transverse(_this.compiledElement);
            elementInsertAfter(parentRef, _this.compiledElement.nativeElement, targetNode);
            parentRef.children.add(_this.compiledElement, index);
            var changeDetector = _this.compiledElement && _this.compiledElement.changeDetector;
            if (changeDetector) {
                changeDetector.detectChanges();
            }
        }
        this.unsubscribeScheduler = scheduler.schedule(_scheduler);
    };
    this.destroy = function () {
        this.unsubscribeScheduler();
        if (_componentRef && !this.compiledElement.isc) {
            _componentRef.destroy();
            _componentRef = null;
        }
        removeElement(this.compiledElement, true);
        this.compiledElement = null;
        this.context = null;
    };
    this.setContext = function (context) {
        this.context = context;
        this.compiledElement.changeDetector.detectChanges();
    };
}
EmbededViewContext.prototype.updateContext = function (updates) {
    if (!this.context)
        return;
    for (var prop in updates) {
        this.context[prop] = updates[prop];
    }
};
function ElementRef(definition, parent, _lazyCompiled) {
    AbstractElementRef.call(this, definition, parent);
    this.events = new EventHandler((definition.events || []).slice());
    this._lazyCompiled = _lazyCompiled;
    if (definition.isc) {
        ComponentRef.create(this.refId, parent && parent.hostRef.refId);
    }
    if (definition.attr$) {
        setupAttributeObservers(this, definition.attr$);
    }
}
ElementRef.prototype = Object.create(AbstractElementRef.prototype);
ElementRef.prototype.constructor = AbstractElementRef;
function TextNodeRef(definition, parent) {
    this.nativeNode = document.createTextNode(definition.ast[0]);
    this.type = 'text';
    this.hasBinding = definition.ast.length > 1;
    if (this.hasBinding) {
        Object.defineProperties(this, {
            parent: {
                get: function () {
                    return parent;
                }
            },
            ast: {
                get: function () {
                    return definition.ast;
                }
            }
        });
    }
}
function EventHandler(events) {
    this._events = events;
    this.registeredEvents = new Map();
}
EventHandler.prototype.destroy = function () {
    this.registeredEvents.forEach(function (removeListenerFn) {
        removeListenerFn();
    });
    this.registeredEvents.clear();
    this._events.length = 0;
};
EventHandler.customRegistry = {
    window: new CustomEventHandler(window),
    document: new CustomEventHandler(document)
};
EventHandler.registerListener = function (element) {
    if (!element.events || !element.events._events.length)
        return;
    var eventInstance = element.events;
    var handler = function ($ev) {
        handleEvent(element, $ev);
    };
    function _registerEvent(eventName) {
        if (!eventInstance.registeredEvents.has(eventName)) {
            if (eventName.includes('.')) {
                var event = eventName.split('.');
                if (EventHandler.customRegistry[event[0]]) {
                    var unsubscribe = EventHandler.customRegistry[event[0]].register(event[1], function (htmlEvent) {
                        handleEvent(element, htmlEvent, eventName);
                    });
                    eventInstance.registeredEvents.set(eventName, unsubscribe);
                }
            } else {
                element.nativeElement.addEventListener(eventName, handler, false);
                eventInstance.registeredEvents.set(eventName, function () {
                    element.nativeElement.removeEventListener(eventName, handler);
                });
            }
        }
    }
    var totalEvents = eventInstance._events.length;
    while (totalEvents--) {
        var event = eventInstance._events[totalEvents];
        if (!event.custom) {
            event.name.split(' ').forEach(_registerEvent);
        }
    }
};
EventHandler.attachEvent = function (eventInstance, eventName, eventValue, componentInstance) {
    eventInstance._events.push({
        name: eventName,
        handler: function ($event) {
            return _executeEventsTriggers(eventValue, componentInstance, null, $event);
        }
    });
};
EventHandler.attachEventEmitter = function (element, eventName, componentInstance) {
    var registeredEvent = getEventsByType(element.events._events, eventName)[0];
    if (registeredEvent && registeredEvent.value) {
        var unSubscribe = componentInstance[eventName].subscribe(function (value) {
            var parentElement = element && element.parent;
            _executeEventsTriggers(registeredEvent.value, parentElement.componentInstance, parentElement.context, value);
            parentElement && parentElement.changeDetector && parentElement.changeDetector.detectChanges();
        });
        element.events.registeredEvents.set(eventName, unSubscribe);
    }
};
EventHandler.attachEventDispatcher = function (element, eventName, componentInstance) {
    var registeredEvent = getEventsByType(element.events._events, eventName)[0];
    var context = null;
    if (registeredEvent && registeredEvent.value) {
        context = element.context;
        if (element.isc) {
            context = element.parent.context;
        }
        if (context.hasOwnProperty(eventName)) {
            var unSubscribe = context[eventName].subscribe(function (value) {
                _executeEventsTriggers(registeredEvent.value, componentInstance, element.context, value);
                element && element.changeDetector.detectChanges();
            });
            element.events.registeredEvents.set(eventName, unSubscribe);
        }
    }
};
function getEventsByType(events, type) {
    return events.filter(function (event) {
        return event.name.split(/\s/g).includes(type);
    });
}
;
function _executeEventsTriggers(eventTriggers, componentInstance, context, ev) {
    eventTriggers.forEach(_dispatch);
    function _dispatch(event) {
        if (event.left) {
            parseObjectExpression(event, context, componentInstance, ev);
        } else if (event.fn) {
            var fn = getFnFromContext(event, componentInstance);
            if (fn) {
                var narg = generateArguments(event.args, context || componentInstance, null, ev);
                fn.apply(fn.context, narg);
                fn.context = null;
                fn = null;
            }
        }
    }
}
function getFnFromContext(eventInstance, componentInstance) {
    var instance = componentInstance;
    if (eventInstance.namespaces) {
        instance = resolveContext(eventInstance.namespaces, componentInstance);
    }
    var fn = instance[eventInstance.fn];
    if (instance instanceof Array || !componentInstance[eventInstance.fn]) {
        fn.context = instance;
    } else {
        fn.context = componentInstance;
    }
    instance = null;
    return fn;
}
;
function handleEvent(element, event, eventName) {
    eventName = eventName || event.type;
    if (inarray(eventName, [
            'touchstart',
            'touchend',
            'touchmove',
            'submit'
        ])) {
        event.preventDefault();
    }
    try {
        getEventsByType(element.events._events, eventName).forEach(triggerEvents);
    } catch (e) {
        errorBuilder(e);
    } finally {
        element && element.changeDetector && element.changeDetector.detectChanges();
    }
    function triggerEvents(registeredEvent) {
        if (registeredEvent.handler) {
            return registeredEvent.handler(event);
        } else {
            var selectedElem = element;
            if (registeredEvent.target) {
                if (!event.target.closest(registeredEvent.target))
                    return;
                selectedElem = jeliQuerySelector(element, event.target) || element;
            }
            _executeEventsTriggers(registeredEvent.value, element.hostRef.componentInstance, selectedElem.context, event);
            selectedElem = null;
        }
    }
}
function CustomEventHandler(element) {
    var _this = this;
    var trigger = function (event) {
        _this.trigger(event);
    };
    this.element = element;
    this.registeredEvents = {};
    this.register = function (type, callback) {
        var _this = this;
        var index = -1;
        if (this.element && this.registeredEvents) {
            if (!this.registeredEvents.hasOwnProperty(type)) {
                this.registeredEvents[type] = [];
                this.element.addEventListener(type, trigger, false);
            }
            index = this.registeredEvents[type].push(callback);
            return function () {
                _this.registeredEvents[type].splice(index - 1, 1);
            };
        }
    };
    this.trigger = function (event) {
        var listeners = this.registeredEvents[event.type];
        if (listeners && listeners.length) {
            listeners.forEach(function (listener) {
                listener(event);
            });
        }
    };
    this.destroy = function () {
        for (var type in this.registeredEvents) {
            this.registeredEvents[type].length = 0;
            delete this.registeredEvents[type];
            this.element.removeEventListener(type, trigger, false);
        }
        this.element = null;
        this.registeredEvents = null;
    };
}
function filterParser(filterClass, context) {
    var filterInstance = Inject(filterClass);
    if (!filterInstance) {
        errorBuilder(filterClass + 'Provider was not found in FilterProvider');
    }
    return filterInstance.compile.apply(filterInstance, context);
}
;
function getFilteredTemplateValue(templateModel, context, componentInstance) {
    var value = resolveValueFromContext(templateModel.prop, context, componentInstance);
    if (templateModel.fns) {
        value = templateModel.fns.reduce(function (accum, filterClass, idx) {
            var filterArgs = [];
            if (templateModel.args[idx])
                filterArgs = generateArguments(templateModel.args[idx], context, value);
            filterArgs.unshift(accum);
            return filterParser(filterClass, filterArgs);
        }, value);
    }
    return value;
}
function compileTemplate(definition, context, componentInstance, cb) {
    var value = undefined;
    if (definition.length > 1) {
        value = definition[1].reduce(function (accum, options) {
            return accum.replace(options[0], evaluateExpression(options[1], context, componentInstance));
        }, definition[0]);
    } else {
        value = getFilteredTemplateValue(definition, context, componentInstance);
    }
    cb(value == null || value == undefined || value == 'null' ? '' : value);
}
function evaluateExpression(expr, context, componentInstance) {
    if (isobject(expr) && expr.hasOwnProperty('prop')) {
        return getFilteredTemplateValue(expr, context, componentInstance);
    }
    return resolveValueFromContext(expr, context, componentInstance);
}
;
function generateArguments(args, context, componentInstance, event) {
    return args.map(argumentMapper);
    function argumentMapper(node) {
        if (isarray(node)) {
            if (!node.length)
                return node;
            var isEvent = isequal(node[0], '$event');
            return resolveContext(node.slice(isEvent ? 1 : 0), isEvent ? event : context, componentInstance);
        } else if (isobject(node) && node.arg)
            return generateArguments(node.arg, context, componentInstance, event);
        else if (isstring(node))
            return isequal(node, '$event') ? event : context.hasOwnProperty(node) ? context[node] : node;
        return resolveValueFromContext(node, context, componentInstance, event);
    }
}
function resolveValueFromContext(expression, context, componentInstance) {
    if (isundefined(expression) || isnull(expression) || isboolean(expression) || isnumber(expression) || /(#|rgb)/.test(expression))
        return expression;
    else if (isobject(expression))
        return parseObjectExpression(expression, context, componentInstance);
    else if (isarray(expression))
        return resolveContext(expression, context, componentInstance);
    else if (expression === '$this')
        return componentInstance;
    else if (isobject(context) && expression in context)
        return context[expression];
    else if (isobject(componentInstance) && expression in componentInstance)
        return componentInstance[expression];
    return context && context.hasOwnProperty(expression) ? context[expression] : null;
}
function parseObjectExpression(expression, context, componentInstance, event) {
    var internalParser = {
        ite: function () {
            return resolveValueFromContext(expression.test, context, componentInstance) ? resolveValueFromContext(expression.cons, context, componentInstance) : resolveValueFromContext(expression.alt, context, componentInstance);
        },
        call: function () {
            var dcontext = context;
            if (expression.namespaces) {
                dcontext = resolveContext(expression.namespaces, context, componentInstance);
            } else {
                dcontext = expression.fn in dcontext ? context : componentInstance;
            }
            if (dcontext && isfunction(dcontext[expression.fn])) {
                var args = generateArguments(expression.args, context, componentInstance, event);
                return dcontext[expression.fn].apply(dcontext, args);
            }
            return null;
        },
        obj: function () {
            if (expression.expr) {
                return Object.keys(expression.expr).reduce(function (accum, key) {
                    accum[key] = resolveValueFromContext(expression.expr[key], context, componentInstance);
                    return accum;
                }, {});
            }
        },
        asg: function () {
            var value = generateArguments([expression.right], context, componentInstance, event)[0];
            return setModelValue(expression.left, context, componentInstance, value);
        },
        una: function () {
            var val = resolveValueFromContext(expression.args, context, componentInstance, event);
            if (expression.ops === '+')
                return +val;
            if (expression.ops === '-')
                return -val;
            if (expression.ops === '~')
                return ~val;
            if (expression.ops === '!')
                return !val;
        },
        bin: function () {
            if (expression.ops === '&&') {
                var l = resolveValueFromContext(expression.left, context, componentInstance, event);
                if (!l)
                    return l;
                return resolveValueFromContext(expression.right, context, componentInstance, event);
            } else if (expression.ops === '||') {
                var l = resolveValueFromContext(expression.left, context, componentInstance, event);
                if (l)
                    return l;
                return resolveValueFromContext(expression.right, context, componentInstance, event);
            }
            var l = resolveValueFromContext(expression.left, context, componentInstance, event);
            var r = resolveValueFromContext(expression.right, context, componentInstance, event);
            if (expression.ops === '==')
                return l == r;
            if (expression.ops === '===')
                return l === r;
            if (expression.ops === '!=')
                return l != r;
            if (expression.ops === '!==')
                return l !== r;
            if (expression.ops === '+')
                return l + r;
            if (expression.ops === '-')
                return l - r;
            if (expression.ops === '*')
                return l * r;
            if (expression.ops === '/')
                return l / r;
            if (expression.ops === '%')
                return l % r;
            if (expression.ops === '<')
                return l < r;
            if (expression.ops === '<=')
                return l <= r;
            if (expression.ops === '>')
                return l > r;
            if (expression.ops === '>=')
                return l >= r;
            if (expression.ops === '|')
                return l | r;
            if (expression.ops === '&')
                return l & r;
            if (expression.ops === '^')
                return l ^ r;
        },
        new: function () {
            errorBuilder('NewExpression not allowed in template interpolation -> (new ' + expression.fn + ') ');
        },
        raw: function () {
            return expression.value;
        },
        mem: function () {
            return resolveValueFromContext(expression.list, context, componentInstance, event);
        }
    };
    return internalParser[expression.type] && internalParser[expression.type]();
}
function setModelValue(key, context, componentInstance, value) {
    var modelContext = {};
    if (isarray(key)) {
        modelContext = resolveContext(key.slice(0, key.length - 1), context, componentInstance);
        key = key[key.length - 1];
    } else {
        modelContext = key in context ? context : componentInstance;
    }
    if (modelContext) {
        if (Array.isArray(key)) {
            key = resolveContext(key, context, componentInstance);
        }
        modelContext[key] = value;
    }
    modelContext = null;
    return value;
}
function resolveContext(key, context, componentInstance) {
    var isEventType = context instanceof Event;
    return key.reduce(function (accum, property, idx) {
        if (isEventType) {
            return accum[property];
        }
        var componentEntry = idx ? null : componentInstance;
        if (Array.isArray(property)) {
            var value = resolveValueFromContext(property, context, componentEntry);
            return accum && accum[value];
        }
        return resolveValueFromContext(property, accum, componentEntry);
    }, context || {});
}
function interpolationHelper(delimiterRegExp, str, replacerData) {
    if (typeof str === 'object' || isboolean(str) || isnumber(str))
        return str;
    return str.replace(delimiterRegExp, function (_, key) {
        return resolveContext(key.split('.'), replacerData);
    });
}
function Subscription(replayOnSubscription) {
    this.subscriptions = [];
    this.state = {
        pending: false,
        value: null,
        resolveWith: ''
    };
}
Subscription.prototype.add = function (success, error, completed) {
    if (isobject(success)) {
        this.subscriptions.push(success);
    } else {
        this.subscriptions.push({
            onSuccess: success,
            onError: error,
            onCompleted: completed
        });
    }
    return this;
};
Subscription.prototype.notify = function (type, args) {
    if (!this.state || this.state.resolveWith === 'completed') {
        return;
    }
    this.subscriptions.forEach(function (subscription) {
        if (subscription[type] && isfunction(subscription[type])) {
            subscription[type](args);
        }
    });
    this.state.pending = this.subscriptions.length < 1;
    this.state.resolveWith = type;
    this.state.value = args;
};
Subscription.prototype.destroy = function () {
    this.subscriptions.length = 0;
    this.state = null;
};
function Observable(callback) {
    var _observer = AbstractObserver();
    callback(_observer);
    this.subscribe = function (success, error, completed) {
        var subscription = new Subscription();
        subscription.add(success, error, completed);
        _observer.add(subscription);
        return subscription;
    };
}
function AbstractObserver() {
    var subscriptions = [];
    this.add = function (subscription) {
        if (!(subscription instanceof Subscription)) {
            throw new Error('Expected instance of subscriptions but got ' + typeof subscription);
        }
        subscriptions.push(subscription);
    };
    this._forEach = function (callback) {
        var length = subscriptions.length;
        var _subscriptions = subscriptions.slice();
        for (var i = 0; i < length; i++) {
            if (callback(_subscriptions[i])) {
                subscriptions.splice(i, i);
            }
        }
        _subscriptions.length = 0;
    };
    this.hasObservers = function () {
        return subscriptions.length > 0;
    };
}
AbstractObserver.prototype.next = function (value) {
    this._forEach(function (subscription) {
        subscription.notify('onSuccess', value);
    });
};
AbstractObserver.prototype.error = function (errorObject) {
    this._forEach(function (subscription) {
        subscription.notify('onError', errorObject);
    });
};
AbstractObserver.prototype.completed = function () {
    this._forEach(function (subscription) {
        subscription.notify('onCompleted');
    });
};
AbstractObserver.prototype.destroy = function () {
    this._forEach(function (subscription) {
        subscription.destroy();
        return true;
    });
};
function Subject() {
    this._observer = new AbstractObserver();
}
Subject.prototype.subscribe = function (success, error, completed) {
    var subscription = new Subscription(false);
    subscription.add(success, error, completed);
    this._observer.add(subscription);
    return subscription;
};
Subject.prototype.destroy = function () {
    this._observer.destroy();
};
Subject.prototype.hasObservers = function () {
    return this._observer.hasObservers();
};
Subject.prototype.next = function (value) {
    this._observer.next(value);
};
Subject.prototype.error = function (error) {
    this._observer.error(error);
};
Subject.prototype.completed = function () {
    this._observer.completed();
};
function QueryList() {
    this._list = [];
    Object.defineProperties(this, {
        length: {
            get: function () {
                return this._list.length;
            }
        },
        first: {
            get: function () {
                return this._list[0];
            }
        },
        last: {
            get: function () {
                return this._list[this.length - 1];
            }
        }
    });
}
QueryList.prototype.add = function (element, index, emitEvent) {
    addToArray(this._list, element, index);
    if (emitEvent) {
        this.onChanges.next({
            value: element,
            index: index,
            type: 'add'
        });
    }
};
QueryList.prototype.get = function (element) {
    if (element) {
        return this._list.find(function (ele) {
            return ele === element;
        });
    }
    return this._list;
};
QueryList.prototype.filter = function (callback) {
    return this._list.filter(callback);
};
QueryList.prototype.forEach = function (callback) {
    this._list.forEach(callback);
};
QueryList.prototype.reduce = function (callback, accumulator) {
    return this._list.reduce(callback, accumulator);
};
QueryList.prototype.some = function (callback) {
    return this._list.some(callback);
};
QueryList.prototype.map = function (callback) {
    return this._list.map(callback);
};
QueryList.prototype.getByIndex = function (index) {
    return this._list[index];
};
QueryList.prototype.find = function (callback) {
    return this._list.find(callback);
};
QueryList.prototype.toString = function () {
    return JSON.stringify(this._list);
};
QueryList.prototype.destroy = function () {
    while (this._list.length) {
        var element = this._list.pop();
        if (element)
            removeElement(element);
    }
    this.onChanges.destroy();
};
QueryList.prototype.remove = function (element) {
    var index = this._list.findIndex(function (ele) {
        return ele === element;
    });
    return this.removeByIndex(index);
};
QueryList.prototype.hasIndex = function (index) {
    return this._list.length - 1 > index;
};
QueryList.prototype.removeByIndex = function (index) {
    var element = removeFromArray(this._list, index);
    this.onChanges.next({
        value: element,
        index: index,
        type: 'detached'
    });
    return element;
};
QueryList.prototype.onChanges = new Subject();
function AbstractEventRx() {
    this._listeners = [];
    this._hooks = [];
}
AbstractEventRx.prototype.when = function () {
    for (var i = 0; i < arguments.length; i++) {
        this._hooks.push(arguments[i]);
    }
    return this;
};
AbstractEventRx.prototype.subscribe = function (fn) {
    var index = this._listeners.length;
    var _this = this;
    if (typeof fn !== 'function') {
        errorBuilder('Expected a function got ' + typeof fn);
        return;
    }
    this._listeners.push(fn);
    return function () {
        _this._listeners.splice(index, 1);
    };
};
AbstractEventRx.prototype.destroy = function () {
    this._listeners.length = 0;
    this._hooks.length = 0;
};
function StateManager(current, callback, states) {
    this.current = '';
    this.states = states || [];
    this.set = function (name) {
        if (!validateAction(this.current, name)) {
            this.current = name;
            this.lastStateIndex = this.states.indexOf(name);
        }
    };
    function validateAction(current, next) {
        return (callback || function () {
            return false;
        })(current, next);
    }
    Object.defineProperties(this, {
        isLast: {
            get: function () {
                return this.lastStateIndex === this.states.length - 1;
            }
        },
        isFirst: {
            get: function () {
                return this.lastStateIndex < 1;
            }
        }
    });
    this.set(current);
}
StateManager.prototype.next = function () {
    var next = this.lastStateIndex + 1;
    if (this.states.length - 1 >= next) {
        this.set(this.states[next]);
    }
};
StateManager.prototype.previous = function () {
    if (this.lastStateIndex) {
        this.set(this.states[this.lastStateIndex - 1]);
    }
};
StateManager.prototype.isState = function (state) {
    return state === this.current;
};
StateManager.prototype.setClass = function (state) {
    return this.isState(state) ? 'active' : '';
};
function EventEmitter() {
    AbstractEventRx.call(this);
}
EventEmitter.prototype = Object.create(AbstractEventRx.prototype);
EventEmitter.prototype.constructor = AbstractEventRx;
EventEmitter.prototype.emit = function (args) {
    _eventRxTrigger(this, args);
};
function Promise2(callback, extension) {
    var _catchCallback = function (e) {
        console.error(e);
    };
    var defer = {
        success: [],
        error: [],
        state: {
            pending: true,
            value: undefined
        }
    };
    var noop = function () {
    };
    function trigger(code) {
        return function (response) {
            defer.state.pending = false;
            defer.state.value = response;
            defer.state.resolvedWith = code;
            while (defer[code].length) {
                call(defer[code].shift());
            }
        };
    }
    function call(fn) {
        defer.state.value = (fn || noop)(defer.state.value);
    }
    function commitOrTrigger(type, fn) {
        if (!defer.state.pending) {
            if (type === defer.state.resolvedWith) {
                call(fn);
            }
        } else {
            defer[type].push(fn);
        }
    }
    this.onSuccess = function (fn) {
        commitOrTrigger('success', fn);
        return this;
    };
    this.onError = function (fn) {
        commitOrTrigger('error', fn);
        return this;
    };
    this.then = function (done, fail) {
        this.onSuccess(done);
        this.onError(fail);
        return this;
    };
    this.catch = function (catchFn) {
        _catchCallback = catchFn;
    };
    if (extension) {
        for (var action in extension) {
            this[action] = extension[action];
        }
    }
    if (callback) {
        try {
            callback(trigger('success'), trigger('error'));
        } catch (e) {
            _catchCallback(e);
        }
    } else {
        throw Error('DBPromise requires a callback method');
    }
}
Promise2.extension = function (callback, events) {
    var eventRegistry = {};
    this.handlers = (events || []).reduce(function (acc, event) {
        acc[event] = registry(event);
        eventRegistry[event] = [];
        return acc;
    }, {});
    function registry(event) {
        return function (fn) {
            eventRegistry[event].push(fn || callback);
            return this;
        };
    }
    this.call = function (eventName, args) {
        if (eventRegistry[eventName] && eventRegistry[eventName].length) {
            while (eventRegistry[eventName].length) {
                eventRegistry[eventName].shift().apply(null, args);
            }
        } else {
            callback.apply(null, args);
        }
    };
};
Promise2.all = function (resolve) {
    var slice = [].slice;
    var resolveValues = arguments.length == 1 && resolve.length ? resolve : slice.call(arguments);
    var length = resolveValues.length;
    var remaining = length;
    var failed = 0;
    var results = [];
    return new Promise2(function (resolve, reject) {
        function updateDefered(idx, err) {
            return function (res) {
                results[idx] = res;
                if (err) {
                    ++failed;
                }
                if (!--remaining) {
                    (failed ? reject : resolve)(results);
                }
            };
        }
        for (var i = 0; i < length; i++) {
            var cur = resolveValues[i];
            if (cur instanceof Promise2 || cur instanceof Promise) {
                cur.then(updateDefered(i), updateDefered(i, true));
            } else {
                updateDefered(i)(cur);
            }
        }
    });
};
function EventManager(defaultCallback, eventExtensionMethod) {
    var _events = {};
    this.defaultCallback = defaultCallback || function () {
    };
    this.eventExtensionMethod = typeof eventExtensionMethod === 'function' ? eventExtensionMethod : function (obj) {
        return obj;
    };
    this.add = function (eventName, callback) {
        if (!_events.hasOwnProperty(eventName)) {
            _events[eventName] = [];
        }
        _events[eventName].push(callback);
        return _events[eventName].length - 1;
    };
    this.get = function (eventName) {
        return _events[eventName] || [];
    };
}
EventManager.prototype._eventsObj = function (type) {
    return this.eventExtensionMethod({
        type: type,
        timestamp: +new Date(),
        isTrusted: true,
        returnValue: true,
        target: null,
        defaultPrevented: false,
        preventDefault: function () {
            this.defaultPrevented = true;
        }
    });
};
EventManager.prototype.dispatch = function (eventName) {
    var eventObj = this._eventsObj(eventName);
    var arg = [eventObj].concat(Array.prototype.slice.call(arguments, 1, arguments.length));
    var eventListeners = this.get(eventName);
    if (eventListeners) {
        eventListeners.forEach(function (fn) {
            fn.apply(fn, arg);
        });
    }
    if (!eventObj.defaultPrevented) {
        this.defaultCallback.apply(this.defaultCallback, arg);
    }
};
EventManager.prototype.unlink = function (eventName, index) {
    var eventListeners = this.get(eventName);
    if (eventListeners) {
        eventListeners.splice(1, index);
    }
};
EventManager.prototype.destroy = function (eventName) {
    var eventListeners = this.get(eventName);
    if (eventListeners) {
        eventListeners.length = 0;
    }
};
EventManager.prototype.one = function (eventName, idx) {
    var eventListeners = this.get(eventName);
    if (eventListeners) {
        return eventListeners[idx];
    }
};
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
;
function rxDebounceTime(timeout, immediate) {
    return debounce(function (value, listener) {
        listener(true);
    }, timeout, immediate);
}
;
function rxWhile(callback) {
    return function (value, listener) {
        listener(callback(value));
    };
}
;
function rxNotify(subscription, model, ignoreCheck) {
    if (subscription.watchKey) {
        if (model) {
            var value;
            if (isfunction(suscription.watchKey)) {
                value = suscription.watchKey(model);
            } else {
                value = resolveValueFromContext(suscription.watchKey, model);
            }
            if (suscription.core && isfunction(suscription.core)) {
                if (suscription.core(value)) {
                    _trigger(suscription.handler, value);
                }
            } else if (ignoreCheck || _comparison(value, suscription)) {
                _trigger(suscription.handler, value);
            }
        }
    } else {
        subscription.handler(model);
    }
}
function _trigger(handlers, value) {
    if (Array.isArray(handlers)) {
        handlers.forEach(function (cb) {
            cb(value);
        });
    } else {
        handlers(value);
    }
}
function _comparison(value, suscription) {
    if (isobject(value)) {
        value = hashcode(JSON.stringify(value));
    }
    var noChanges = !isequal(value, suscription.lastValue);
    suscription.lastValue = value;
    return noChanges;
}
function triggerWhen(operators, args, callback) {
    if (!operators || !operators.length) {
        return callback(true);
    }
    var inc = 0;
    var failed = false;
    function next() {
        var fn = operators[inc];
        if (fn) {
            fn(args, function (value) {
                if (!value) {
                    failed = true;
                }
                inc++;
                next();
            });
        } else {
            callback(!failed);
        }
    }
    next();
}
function _eventRxTrigger(context, value) {
    triggerWhen(context._hooks, value, function (allPassed) {
        if (allPassed) {
            context._listeners.forEach(function (fn) {
                fn(value);
            });
        }
    });
}
function ComponentFactoryResolver(componentFactory, viewComponent, callback, skipElementInsert) {
    if (!componentFactory || !componentFactory.annotations.exposeView) {
        errorBuilder('No exported factory found for <' + componentFactory.annotations.selector + '> in ' + componentFactory.annotations.module);
        return null;
    }
    if (!viewComponent) {
        throw new Error('Unable to determine viewRef');
    }
    var viewDefinition = {
        name: componentFactory.annotations.selector,
        type: 'element',
        isc: true,
        providers: [componentFactory]
    };
    var componentRef = new ElementRef(viewDefinition, viewComponent, true);
    var localInjectors = new ComponentInjectors(componentRef);
    ElementCompiler(componentFactory, componentRef, localInjectors, function (componentInstance) {
        if (!skipElementInsert) {
            elementInsertAfter(viewComponent, componentRef.nativeElement, viewComponent.nativeElement);
            viewComponent.children.add(componentRef);
        }
        noop(callback)(componentRef, componentInstance);
    });
    localInjectors = null;
    viewDefinition = null;
}
function IterableProfiler(trackBy) {
    this._destroyed = false;
    this.cacheHash = [];
    this.out = null;
    this.trackBy = trackBy || function (item, index) {
        return item;
    };
}
IterableProfiler.prototype.diff = function (source) {
    if (this._destroyed) {
        return false;
    }
    if (source && !(source instanceof Array)) {
        throw new Error('Collection should be an array');
    }
    this.out = {
        deleted: [],
        order: []
    };
    var noSource = !source || !source.length;
    if (noSource && (!this.cacheHash || !this.cacheHash.length)) {
        return false;
    }
    if (noSource && this.cacheHash.length) {
        this.out.deleted = Object.keys(this.cacheHash).map(Number);
        this.cacheHash.length = 0;
        return true;
    }
    var len = source.length;
    var newCacheHash = [];
    var operationOrder = [];
    var isDirty = false;
    for (var inc = 0; inc < len; inc++) {
        var item = source[inc];
        var hash = this.trackBy(item, inc);
        var outOfCacheRange = inc > this.cacheHash.length - 1;
        if (this.cacheHash.includes(hash)) {
            if (!Object.is(this.cacheHash[inc], hash)) {
                isDirty = true;
                var prevIndex = this.cacheHash.indexOf(hash);
                if (prevIndex > -1 && prevIndex !== inc) {
                    operationOrder.push({
                        index: inc,
                        prevIndex: prevIndex,
                        state: outOfCacheRange ? 'create' : 'update'
                    });
                    isDirty = true;
                }
            }
        } else {
            isDirty = true;
            operationOrder.push({
                index: inc,
                state: outOfCacheRange ? 'create' : 'update'
            });
        }
        newCacheHash.push(hash);
    }
    if (isDirty || this.cacheHash.length > newCacheHash.length) {
        for (var i = newCacheHash.length; i < this.cacheHash.length; i++) {
            isDirty = true;
            this.out.deleted.push(i);
        }
    }
    this.cacheHash = newCacheHash;
    this.out.order = operationOrder;
    newCacheHash = null;
    operationOrder = null;
    return isDirty;
};
IterableProfiler.prototype.forEachDeleted = function (callback) {
    this.out.deleted.forEach(callback);
};
IterableProfiler.prototype.forEachOperation = function (callback) {
    var len = this.out.order.length;
    for (var i = 0; i < len; i++) {
        if (this.out.order[i]) {
            callback(this.out.order[i], i);
        }
    }
};
IterableProfiler.prototype.checkDuplicateRepeater = function (hash) {
    if (this.cacheHash.indexOf(hash) > -1) {
        errorBuilder('Duplicate values are not allowed in repeaters. Use \'track by\' expression to specify unique keys');
    }
};
IterableProfiler.prototype.attachTrackBy = function (fn) {
    if (!isfunction(fn))
        return;
    this.trackBy = fn;
};
IterableProfiler.prototype.destroy = function () {
    this._destroyed = true;
    this.cacheHash.length = 0;
    this.out = null;
};
function InterceptorResolver(interceptorToken, locals) {
    var interceptors = Inject(interceptorToken);
    return new Promise(function (resolve, reject) {
        if (!interceptors || !interceptors.length) {
            return resolve();
        }
        var len = 0;
        function next() {
            var interceptor = interceptors[len];
            len++;
            if (interceptor) {
                interceptor.resolve(locals, next, reject);
            } else {
                resolve();
            }
        }
        next();
    });
}
function LazyLoader(dropZone) {
    this.dropZone = dropZone;
    this.setPath = function (path) {
        this.sourcePath = path;
        return this;
    };
}
LazyLoader.prototype.js = function (obj, callback) {
    this._resolve(obj, callback, 'js');
};
LazyLoader.prototype.css = function (obj) {
    this._resolve(obj, null, 'css');
};
LazyLoader.prototype.jscs = function (obj, callback) {
    for (var type in obj) {
        this._resolve(obj[type], callback, type);
    }
    return this;
};
LazyLoader.prototype._resolve = function (filePaths, callback, type) {
    var stack = [], self = this;
    if (typeof callback !== 'function') {
        callback = function () {
        };
    }
    if (filePaths && isarray(filePaths) && filePaths.length > 0) {
        for (var i = 0; i < filePaths.length; i++) {
            if (LazyLoader.cached.hasOwnProperty(filePaths[i])) {
                break;
            }
            LazyLoader.cached[filePaths[i]] = '' + Math.random();
            switch (type) {
            case 'css':
                _createCss(filePaths[i]);
                break;
            case 'js':
                _createJs(filePaths[i]);
                break;
            }
            ;
        }
        if (type === 'js' && stack.length) {
            process(callback);
        } else {
            callback();
        }
    }
    function _createCss(cssPath) {
        var styleElement = document.createElement('link');
        styleElement.setAttribute('type', 'text/css');
        styleElement.setAttribute('href', clink(cssPath));
        styleElement.setAttribute('rel', 'stylesheet');
        styleElement.setAttribute('id', LazyLoader.cached[cssPath]);
        append(styleElement);
    }
    function _createJs(jsPath) {
        var scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', clink(jsPath));
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.async = true;
        scriptElement.setAttribute('id', LazyLoader.cached[jsPath]);
        stack.push(scriptElement);
    }
    function clink(path) {
        if (path.includes('//')) {
            return path;
        }
        return [
            self.sourcePath,
            path,
            '.',
            type
        ].join('');
    }
    function append(scriptElement) {
        (self.dropZone || document.getElementsByTagName('head')[0]).appendChild(scriptElement);
    }
    function process(isCallback) {
        var currentElement = stack.shift();
        append(currentElement);
        currentElement.onreadystatechange = currentElement.onload = function () {
            var state = currentElement.readyState;
            if (!isCallback.done && (!state || /loaded|complete/.test(state))) {
                if (stack.length) {
                    process(isCallback);
                } else {
                    isCallback.done = true;
                    isCallback();
                }
            }
        };
    }
    ;
};
LazyLoader.cached = {};
LazyLoader.staticLoader = function () {
    LazyLoader.prototype._resolve.apply({}, arguments);
};
var jeliContext = Object.create({
    buildTime: Date.now(),
    version: __buildOptions.version,
    debug: jeliDebugger
});
function jeliQuerySelector(b, c) {
    if ((b.nativeElement || b.nativeNode) === c) {
        return b;
    } else if (b.children) {
        for (var e of b.children._list) {
            const f = jeliQuerySelector(e, c);
            if (f)
                return f;
        }
    } else {
        return null;
    }
}
;
function jeliDebugger(element) {
    if (element && CoreBootstrapContext.enableDebugger) {
        return jeliQuerySelector(CoreBootstrapContext.bootStrapComponent, element);
    }
    return null;
}
global.jeli = jeliContext;
var nativeTimeout = window.setTimeout;
var nativeClearTimeout = window.clearTimeout;
var nativeInterval = window.setInterval;
var nativeClearInterval = window.clearInterval;
window.setTimeout = function (fn, timer, trigerDetector) {
    return nativeTimeout(trigger(fn, trigerDetector), timer);
};
window.clearTimeout = function (timeoutID) {
    nativeClearTimeout(timeoutID);
};
window.clearInterval = function (intervalID) {
    nativeClearInterval(intervalID);
};
window.setInterval = function (fn, interval, trigerDetector) {
    return nativeInterval(trigger(fn, trigerDetector), interval);
};
function trigger(fn, trigerDetector) {
    return function () {
        fn();
        trigerDetector && ChangeDetector();
    };
}
;
}),
'dist/common/bundles/jeli-common-module.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'FilterPipe', function(){ return FilterPipe;});
__required.r(exports, 'whereFilterFn', function(){ return whereFilterFn;});
__required.r(exports, 'upperCaseFilter', function(){ return upperCaseFilter;});
__required.r(exports, 'QueryFactory', function(){ return QueryFactory;});
__required.r(exports, 'orderByFilterFn', function(){ return orderByFilterFn;});
__required.r(exports, 'lowerCaseFilter', function(){ return lowerCaseFilter;});
__required.r(exports, 'jsonFilterFn', function(){ return jsonFilterFn;});
__required.r(exports, 'NumberFilter', function(){ return NumberFilter;});
__required.r(exports, 'CurrencyFilter', function(){ return CurrencyFilter;});
__required.r(exports, 'capitalizeFilter', function(){ return capitalizeFilter;});
__required.r(exports, 'ClassDirective', function(){ return ClassDirective;});
__required.r(exports, 'SwitchDefaultDirective', function(){ return SwitchDefaultDirective;});
__required.r(exports, 'SwitchCaseDirective', function(){ return SwitchCaseDirective;});
__required.r(exports, 'SwitchDirective', function(){ return SwitchDirective;});
__required.r(exports, 'IfDirective', function(){ return IfDirective;});
__required.r(exports, 'ForDirective', function(){ return ForDirective;});
__required.r(exports, 'CommonModule', function(){ return CommonModule;});
var helpers = __required('node_modules/js-helpers/helpers.js');
var isundefined = helpers['isundefined'];
var isfunction = helpers['isfunction'];
var isarray = helpers['isarray'];
var isobject = helpers['isobject'];
var isequal = helpers['isequal'];
var core = __required('dist/core/bundles/jeli-core-module.js');
var errorBuilder = core['errorBuilder'];
var ElementClassList = core['ElementClassList'];
var IterableProfiler = core['IterableProfiler'];
var __buildOptions = {};
function jForRow(context, index, count) {
    this.count = count;
    this.index = index;
    this.$context = context;
    Object.defineProperties(this, {
        first: {
            get: function () {
                return this.index > 0;
            }
        },
        last: {
            get: function () {
                return this.count - 1 === this.index;
            }
        },
        even: {
            get: function () {
                return this.index % 2 === 0;
            }
        },
        odd: {
            get: function () {
                return !this.even;
            }
        }
    });
}
var ForDirective = function () {
    'use strict';
    function ForDirective(viewRef, templateRef) {
        this.viewRef = viewRef;
        this.templateRef = templateRef;
        this.iterable = new IterableProfiler();
        this._forTrackBy = null;
        this._forValue = null;
        this._isForIn = false;
        this._isForOf = false;
        Object.defineProperties(this, {
            forIn: {
                set: function (value) {
                    this._isForIn = true;
                    this._forValue = value;
                },
                get: function () {
                    if (!this._isForIn)
                        return null;
                    return this._forValue;
                }
            },
            forOf: {
                set: function (value) {
                    this._isForOff = true;
                    this._forValue = value;
                },
                get: function () {
                    if (!this._isForOff)
                        return null;
                    return this._forValue;
                }
            },
            forTrackBy: {
                set: function (fn) {
                    this.iterable.attachTrackBy(fn);
                    this._forTrackBy = fn;
                },
                get: function () {
                    return this._forTrackBy;
                }
            }
        });
    }
    ForDirective.prototype._listenerFn = function () {
        var _this = this;
        this.iterable.forEachDeleted(function (index) {
            _this.viewRef.remove(index);
        });
        this.iterable.forEachOperation(function (item) {
            switch (item.state) {
            case 'create':
                var context = new jForRow(_this._forValue[item.index], item.index, null);
                _this.viewRef.createEmbededView(_this.templateRef, context, item.index);
                break;
            case 'update':
                var view = _this.viewRef.get(item.index);
                view.updateContext({ $context: _this._forValue[item.index] });
                break;
            case 'move':
                _this.viewRef.move(item.prevIndex, item.index);
                break;
            }
        });
        for (var i = 0; i < this.viewRef.length; i++) {
            var view = _this.viewRef.get(i);
            view.updateContext({
                index: i,
                count: _this._forValue.length
            });
        }
    };
    ForDirective.prototype.willObserve = function () {
        var changes = this.iterable.diff(this._forValue);
        if (changes)
            this._listenerFn();
    };
    ForDirective.prototype.viewDidDestroy = function () {
        this.viewRef.clearView();
        this.iterable.destroy();
        this.viewRef = null;
        this.templateRef = null;
    };
    ForDirective.annotations = {
        selector: 'for',
        DI: [
            {
                optional: true,
                tokenName: 'ViewRef'
            },
            {
                optional: true,
                tokenName: 'TemplateRef'
            }
        ],
        props: {
            forIn: {},
            forOf: {},
            forTrackBy: { type: 'Function' }
        },
        module: 'CommonModule'
    };
    return ForDirective;
}();
var IfDirective = function () {
    'use strict';
    function IfDirective(viewRef, templateRef) {
        this._jIfValue = false;
        this._thenTemplateRef = templateRef;
        this._elseTemplateRef = null;
        this._thenView = null;
        this._elseView = null;
        this.createView = function () {
            if (this._jIfValue) {
                if (!this._thenView) {
                    viewRef.clearView();
                    this._elseView = null;
                    if (this._thenTemplateRef) {
                        this._thenView = viewRef.createEmbededView(this._thenTemplateRef);
                    }
                }
            } else {
                if (!this._elseView) {
                    viewRef.clearView();
                    this._thenView = null;
                    if (this._elseTemplateRef) {
                        this._elseView = viewRef.createEmbededView(this._elseTemplateRef);
                    }
                }
            }
        };
        Object.defineProperties(this, {
            if: {
                set: function (value) {
                    this._jIfValue = value;
                    this.createView();
                },
                get: function () {
                    return this._jIfValue;
                }
            },
            ifElse: {
                set: function (templateRef) {
                    this._elseTemplateRef = templateRef;
                    this.createView();
                }
            },
            ifThen: {
                set: function (templateRef) {
                    if (templateRef) {
                        this._thenTemplateRef = templateRef;
                        this.createView();
                    }
                }
            }
        });
    }
    IfDirective.annotations = {
        selector: 'if',
        DI: [
            {
                optional: true,
                tokenName: 'ViewRef'
            },
            {
                optional: true,
                tokenName: 'TemplateRef'
            }
        ],
        props: {
            if: {},
            ifElse: { type: 'TemplateRef' },
            ifThen: { type: 'TemplateRef' }
        },
        module: 'CommonModule'
    };
    return IfDirective;
}();
function SwitchViewContext(viewRef, templateRef) {
    this._isCreated = false;
    this.setState = function (create) {
        if (create && !this._isCreated) {
            this.createView();
        } else if (!create && this._isCreated) {
            this.destroyView();
        }
    };
    this.createView = function () {
        this._isCreated = true;
        viewRef.createEmbededView(templateRef);
    };
    this.destroyView = function () {
        this._isCreated = false;
        viewRef.clearView();
    };
}
var SwitchDirective = function () {
    'use strict';
    function SwitchDirective() {
        this._caseCount = 0;
        this.defaultViews;
        this._lastCaseCheckIndex = 0;
        this._isDefaultCase = false;
        this._previousValue = undefined;
        this._lastCaseMatched = false;
        this._addCase = function () {
            this._caseCount++;
        };
        this._addDefaultView = function (viewContext) {
            if (!this.defaultViews) {
                this.defaultViews = [];
            }
            this.defaultViews.push(viewContext);
        };
        Object.defineProperty(this, 'switch', {
            set: function (value) {
                this._jSwitch = value;
                if (isequal(this._caseCount, 0)) {
                    this._compileDefaultView(true);
                }
            }
        });
    }
    SwitchDirective.prototype._compileDefaultView = function (isDefaultCase) {
        if (this.defaultViews && !isequal(this._isDefaultCase, isDefaultCase)) {
            this._isDefaultCase = isDefaultCase;
            for (var i = 0; i < this.defaultViews.length; i++) {
                var defaultView = this.defaultViews[i];
                defaultView.setState(isDefaultCase);
            }
        }
    };
    SwitchDirective.prototype.viewDidDestroy = function () {
    };
    SwitchDirective.prototype._matchCase = function (caseValue) {
        var matched = isequal(this._jSwitch, caseValue);
        this._lastCaseMatched = this._lastCaseMatched || matched;
        this._lastCaseCheckIndex++;
        if (isequal(this._lastCaseCheckIndex, this._caseCount)) {
            this._compileDefaultView(!this._lastCaseMatched);
            this._lastCaseCheckIndex = 0;
            this._lastCaseMatched = false;
        }
        return matched;
    };
    SwitchDirective.annotations = {
        selector: 'switch',
        props: { switch: {} },
        module: 'CommonModule'
    };
    return SwitchDirective;
}();
var SwitchCaseDirective = function () {
    'use strict';
    function SwitchCaseDirective(viewRef, templateRef, jSwitch) {
        jSwitch._addCase();
        this._view = new SwitchViewContext(viewRef, templateRef);
        this.willObserve = function () {
            this._view.setState(jSwitch._matchCase(this.switchCase));
        };
    }
    SwitchCaseDirective.annotations = {
        selector: 'switchCase',
        props: { switchCase: {} },
        DI: [
            {
                optional: true,
                tokenName: 'ViewRef'
            },
            {
                optional: true,
                tokenName: 'TemplateRef'
            },
            {
                optional: true,
                value: 'switch',
                tokenName: 'ParentRef'
            }
        ],
        dynamicInjectors: true,
        module: 'CommonModule'
    };
    return SwitchCaseDirective;
}();
var SwitchDefaultDirective = function () {
    'use strict';
    function SwitchDefaultDirective(viewRef, templateRef, jSwitch) {
        jSwitch._addDefaultView(new SwitchViewContext(viewRef, templateRef));
    }
    SwitchDefaultDirective.annotations = {
        selector: 'switchDefault',
        DI: [
            {
                optional: true,
                tokenName: 'ViewRef'
            },
            {
                optional: true,
                tokenName: 'TemplateRef'
            },
            {
                optional: true,
                value: 'switch',
                tokenName: 'ParentRef'
            }
        ],
        dynamicInjectors: true,
        module: 'CommonModule'
    };
    return SwitchDefaultDirective;
}();
var ClassDirective = function () {
    'use strict';
    function ClassDirective(elementRef) {
        this._jClass = undefined;
        this.lastAddedClass = '';
        this._changeClass = function () {
            if (isobject(this._jClass)) {
                ElementClassList.add(elementRef.nativeElement, this._jClass);
            } else {
                if (this.lastAddedClass == this._jClass)
                    return;
                ElementClassList.remove(elementRef.nativeElement, this.lastAddedClass);
                if (this._jClass) {
                    ElementClassList.add(elementRef.nativeElement, this._jClass);
                }
                this.lastAddedClass = this._jClass;
            }
        };
        Object.defineProperty(this, 'class', {
            set: function (value) {
                this._jClass = value;
                this._changeClass();
            },
            get: function () {
                return this._jClass;
            }
        });
    }
    ClassDirective.annotations = {
        selector: 'jClass',
        DI: [{
                optional: true,
                tokenName: 'ElementRef'
            }],
        props: { class: { value: 'jClass' } },
        module: 'CommonModule'
    };
    return ClassDirective;
}();
var capitalizeFilter = function () {
    'use strict';
    function capitalizeFilter() {
        this.compile = function (value) {
            if (!value)
                return '';
            if (typeof value !== 'string')
                return value;
            return value.charAt(0).toUpperCase() + value.slice(1);
        };
    }
    capitalizeFilter.annotations = {
        name: 'capitalize',
        module: 'CommonModule'
    };
    return capitalizeFilter;
}();
var NumberFilter = function () {
    'use strict';
    function NumberFilter() {
        function format(n, x, s, c) {
            if (!!window.Intl) {
                var numFormat = new Intl.NumberFormat(navigator.language);
                return numFormat.format(this);
            } else {
                var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')', num = this.toFixed(Math.max(0, ~~n));
                return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
            }
        }
        this.compile = function (value, factoRize) {
            if (!isarray(factoRize)) {
                factoRize = [
                    factoRize,
                    3,
                    ',',
                    '.'
                ];
            }
            return format.apply(value || 0, factoRize);
        };
    }
    NumberFilter.annotations = {
        name: 'number',
        module: 'CommonModule'
    };
    return NumberFilter;
}();
var CurrencyFilter = function () {
    'use strict';
    function CurrencyFilter(numberFilter) {
        this.compile = function (value, style) {
            if (!!window.Intl) {
                var currencyFormat = new Intl.NumberFormat(window.navigator.language, style);
                return currencyFormat.format(value);
            } else {
                return (style && style.currency) + numberFilter.format(value);
            }
        };
    }
    CurrencyFilter.annotations = {
        name: 'currency',
        DI: [NumberFilter],
        module: 'CommonModule'
    };
    return CurrencyFilter;
}();
var jsonFilterFn = function () {
    'use strict';
    function jsonFilterFn() {
        this.compile = function (value, spacing) {
            return typeof value === 'object' ? JSON.stringify(value, null, parseInt(spacing || '0')) : value;
        };
    }
    jsonFilterFn.annotations = {
        name: 'json',
        module: 'CommonModule'
    };
    return jsonFilterFn;
}();
var lowerCaseFilter = function () {
    'use strict';
    function lowerCaseFilter() {
        this.compile = function (value) {
            return (value || '').toLowerCase();
        };
    }
    lowerCaseFilter.annotations = {
        name: 'lowercase',
        module: 'CommonModule'
    };
    return lowerCaseFilter;
}();
var QueryFactory = function () {
    'use strict';
    function QueryFactory(data) {
        this.sortBy = function () {
            var sortArguments = arguments;
            if (isarray(data) && isobject(data[0])) {
                return data.sort(function (obj1, obj2) {
                    var props = sortArguments, i = 0, result = 0, numberOfProperties = props.length, compare = _compare(obj1, obj2);
                    while (result === 0 && i < numberOfProperties) {
                        result = compare(props[i]);
                        i++;
                    }
                    return result;
                });
            }
            function _compare(a, b) {
                var sortOrder = 1;
                return function (property) {
                    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
                    return result * sortOrder;
                };
            }
            return data;
        };
        return this;
    }
    ;
    QueryFactory.annotations = { module: 'CommonModule' };
    return QueryFactory;
}();
var orderByFilterFn = function () {
    'use strict';
    function orderByFilterFn() {
        this.compile = function (value, propertyName) {
            if (value.length < 2) {
                return value;
            }
            var _queryApi = new QueryFactory(value), newList;
            var splitedProps = propertyName.split(':');
            if (splitedProps.length > 1) {
                reverse = splitedProps.pop();
            }
            propertyName = splitedProps.pop();
            newList = _queryApi.sortBy.apply(_queryApi, propertyName.split(','));
            if (reverse) {
                return newList.reverse();
            }
            return value;
        };
    }
    orderByFilterFn.annotations = {
        name: 'orderBy',
        module: 'CommonModule'
    };
    return orderByFilterFn;
}();
var upperCaseFilter = function () {
    'use strict';
    function upperCaseFilter() {
        this.compile = function (value) {
            return (value || '').toUpperCase();
        };
    }
    upperCaseFilter.annotations = {
        name: 'uppercase',
        module: 'CommonModule'
    };
    return upperCaseFilter;
}();
var whereFilterFn = function () {
    'use strict';
    function whereFilterFn() {
        this.compile = function (model, query) {
            return new QueryFactory(model).where(query);
        };
    }
    whereFilterFn.annotations = {
        name: 'whereFilter',
        module: 'CommonModule'
    };
    return whereFilterFn;
}();
var FilterPipe = function () {
    'use strict';
    function FilterPipe() {
        this.compile = function (array, expression) {
            if (!Array.isArray(array)) {
                if (array == null)
                    return array;
                console.error('expected Array type but got ' + typeof array);
            }
            var expressionType = expression !== null ? typeof expression : 'null';
            var predicateFn = null;
            var matchAny;
            switch (expressionType) {
            case 'function':
                predicateFn = expression;
                break;
            case 'boolean':
            case 'null':
            case 'number':
            case 'string':
                matchAny = true;
            case 'object':
                predicateFn = createPredicator(expression, matchAny);
                break;
            default:
                return array;
            }
            return Array.prototype.filter.call(array, predicateFn);
        };
        function createPredicator(expression, matchAny) {
            return function (item) {
                if (isobject(expression)) {
                    for (var key in expression) {
                        var expectedValue = expression[key];
                        if (isfunction(expectedValue) || isundefined(expectedValue)) {
                            continue;
                        }
                        if (expectedValue != item[key]) {
                            return false;
                        }
                    }
                    return true;
                }
            };
        }
    }
    FilterPipe.annotations = {
        name: 'filter',
        module: 'CommonModule'
    };
    return FilterPipe;
}();
var CommonModule = function () {
    'use strict';
    function CommonModule() {
    }
    return CommonModule;
}();
}),
'dist/common/bundles/jeli-common-datetime-module.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'TimeAgoFilterFn', function(){ return TimeAgoFilterFn;});
__required.r(exports, 'dateTimeFilterFN', function(){ return dateTimeFilterFN;});
__required.r(exports, 'DAYS_FULL', function(){ return DAYS_FULL;});
__required.r(exports, 'DAYS_HALF', function(){ return DAYS_HALF;});
__required.r(exports, 'MONTHS_FULL', function(){ return MONTHS_FULL;});
__required.r(exports, 'MONTHS_HALF', function(){ return MONTHS_HALF;});
__required.r(exports, 'CalendarService', function(){ return CalendarService;});
__required.r(exports, 'setText', function(){ return setText;});
__required.r(exports, 'DateStringConverter', function(){ return DateStringConverter;});
__required.r(exports, 'getDays', function(){ return getDays;});
__required.r(exports, 'leapYear', function(){ return leapYear;});
__required.r(exports, 'DatetimeService', function(){ return DatetimeService;});
__required.r(exports, 'calendarFN', function(){ return calendarFN;});
__required.r(exports, 'DateTimeModule', function(){ return DateTimeModule;});
var core = __required('dist/core/bundles/jeli-core-module.js');
var ProviderToken = core['ProviderToken'];
var __buildOptions = {};
var leapYear = function (year) {
    return year % 4 == 0 ? 1 : 0;
};
var getDays = function (month, year) {
    var ar = [
        31,
        leapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    return ar[month];
};
var DateStringConverter = function (str) {
    function setDay(d) {
        return Number(d) < 10 ? parseInt(d) : Number(d);
    }
    if (typeof str === 'string') {
        var arr = str.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/);
        if (arr) {
            arr.shift();
            return new Date(arr[0], arr[1] - 1, setDay(arr[2]), arr[3] || 0, arr[4] || 0, arr[5] || 0);
        } else if (/(\d+)-(\d+)-(\d+)/.test(str)) {
            return new Date(str);
        }
    }
    return new Date();
};
var setText = function (text, future) {
    return text + (future ? ' from now' : ' ago');
};
function CalendarObject(firstDay, lastDate, date) {
    this.monthName = now.flags.MMMM;
    this.year = now.flags.YYYY;
    this.weekDays = dateTimeDayHalf;
    this.weeks = [];
    var digit = 1;
    var curCell = 1;
    for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
        var weekDays = [];
        for (var col = 1; col <= 7; ++col) {
            if (digit > lastDate) {
                break;
            }
            if (curCell < firstDay) {
                weekDays.push({
                    date: null,
                    current: false
                });
                curCell++;
            } else {
                weekDays.push({
                    date: digit,
                    current: digit == date
                });
                digit++;
            }
        }
        this.weeks.push(weekDays);
    }
}
function CalendarService(year, month) {
    var date = new Date().getDate();
    if (year < 1000) {
        year += 1900;
    }
    var firstDayInstance = new Date(year, month, 1), firstDay = firstDayInstance.getDay();
    firstDayInstance = null;
    var days = getDays(month, year);
    return new CalendarObject(firstDay + 1, days, date);
}
var MONTHS_HALF = new ProviderToken('dateTimeMonthHalf', false, {
    value: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
});
var MONTHS_FULL = new ProviderToken('dateTimeMonthFull', false, {
    value: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
});
var DAYS_HALF = new ProviderToken('dateTimeDayHalf', false, {
    value: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
});
var DAYS_FULL = new ProviderToken('dateTimeDayFull', false, {
    value: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
});
var DatetimeService = function () {
    'use strict';
    function DatetimeService(dateTimeMonthHalf, dateTimeMonthFull, dateTimeDayHalf, dateTimeDayFull) {
        var dateFormatRegExp = /D{1,4}|M{1,4}|YY(?:YY)?|([HhMmsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
        this.dateTimeDayHalf = dateTimeDayHalf;
        this.dateTimeMonthHalf = dateTimeMonthHalf;
        this.dateTimeMonthFull = dateTimeMonthFull;
        this.dateTimeDayFull = dateTimeDayFull;
        this.format = function (date, format) {
            var toFormat = this.timeConverter(date).flags;
            return String(format).replace(dateFormatRegExp, function ($0) {
                return $0 in toFormat ? toFormat[$0] : $0.slice(1, $0.length - 1);
            });
        };
        this.buildFullCalendar = function (config) {
            var monthList = [], months = config.fullYear ? 0 : new Date().getMonth();
            for (months; months < 12; months++) {
                var date = new Date(config.year, months, 1);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var month = CalendarService(year, month);
                month.monthName = this.dateTimeMonthFull[month - 1];
                month.year = year;
                month.weekDays = dateTimeDayHalf;
                monthList.push(month);
            }
            return monthList;
        };
    }
    DatetimeService.prototype._dateTime = function (datetime) {
        var outputDate = !isNaN(Number(datetime)) && Number(datetime) ? new Date(datetime) : DateStringConverter(datetime);
        var g = function (j) {
            return (j < 10 ? '0' : '') + j;
        };
        outputDate.current_time = [
            outputDate.getFullYear(),
            '-',
            g(Math.ceil(outputDate.getMonth() + 1)),
            '-',
            g(outputDate.getDate()),
            ' ',
            g(outputDate.getHours()),
            ':',
            g(outputDate.getMinutes()),
            ':',
            g(outputDate.getSeconds())
        ].join('');
        return outputDate;
    };
    DatetimeService.prototype.timeConverter = function (dateToParse) {
        if (!dateToParse) {
            dateToParse = this._dateTime();
        }
        var currentDateTime = this._dateTime();
        var _dateTimeToParse = dateToParse.current_time ? dateToParse : this._dateTime(dateToParse);
        var j = _dateTimeToParse.getTime();
        var l = currentDateTime.getTime();
        var B = 1000 * 60 * 60 * 24;
        var result = {};
        var p = function (m) {
            return (m < 10 ? '0' : '') + m;
        };
        if (isNaN(_dateTimeToParse.getTime())) {
            var f = n.replace(' ', 'T');
            var r = n.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/), D = r[1] + '-' + p(r[2] - 1) + '-' + r[3] + ' ' + r[4] + ':' + r[5] + ':' + r[6], _dateTimeToParse = new Date(Date.fromISO(f)), j = q.getTime();
            x = new Date();
        }
        var g = Date.UTC(_dateTimeToParse.getFullYear(), _dateTimeToParse.getMonth(), _dateTimeToParse.getDate()), f = Date.UTC(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate()), days = Math.floor((f - g) / B), future = j > l, futureDiff = future ? j - l : l - j;
        result.getTime = function () {
            return j;
        };
        result.ctimestamp = g;
        result.timestamp = f;
        result.time_difference = {
            seconds: Math.floor(futureDiff / 3600000 * (60 * 60)),
            minutes: Math.floor(futureDiff / 3600000 * 60),
            hours: Math.floor(futureDiff / 3600000),
            weeks: Math.floor(days / 7),
            days: days,
            months: Math.floor(days / 30)
        };
        var year = _dateTimeToParse.getFullYear(), month = _dateTimeToParse.getMonth() + 1, day = _dateTimeToParse.getDate(), weekDay = _dateTimeToParse.getDay(), timeSettings = _dateTimeToParse.current_time.split(' ')[1].split(':'), hours = timeSettings[0], minute = parseInt(timeSettings[1]), seconds = parseInt(timeSettings[2]);
        result.flags = {
            YYYY: year,
            YY: String(year).slice(2),
            M: month,
            MM: p(month),
            MMM: this.dateTimeMonthHalf[month - 1],
            MMMM: this.dateTimeMonthFull[month - 1],
            D: day,
            DD: p(day),
            DDD: this.dateTimeDayHalf[weekDay],
            DDDD: this.dateTimeDayFull[weekDay],
            h: hours % 12 || 12,
            hh: p(hours),
            H: hours,
            HH: p(hours),
            m: minute,
            mm: p(minute),
            s: seconds,
            ss: p(seconds),
            t: hours < 12 ? 'a' : 'p',
            tt: hours < 12 ? 'am' : 'pm',
            T: hours < 12 ? 'A' : 'P',
            TT: hours < 12 ? 'AM' : 'PM'
        };
        result.isLeapYear = leapYear(year);
        result.today = this.dateTimeDayHalf[currentDateTime.getDay()] + ', ' + currentDateTime.getDate() + ' ' + this.dateTimeMonthHalf[currentDateTime.getMonth()];
        if (currentDateTime.getFullYear() > _dateTimeToParse.getFullYear()) {
            result.date = this.dateTimeMonthHalf[_dateTimeToParse.getMonth()] + ', ' + _dateTimeToParse.getDate() + ' ' + _dateTimeToParse.getFullYear();
        } else {
            result.date = this.dateTimeDayHalf[_dateTimeToParse.getDay()] + ', ' + _dateTimeToParse.getDate() + ' ' + this.dateTimeMonthHalf[_dateTimeToParse.getMonth()];
        }
        if (result.time_difference.seconds <= 60) {
            result.timeago = result.time_difference.seconds + setText(' seconds', future);
        } else {
            if (result.time_difference.minutes <= 60) {
                if (result.time_difference.minutes == 1) {
                    result.timeago = setText('1 minute', future);
                } else {
                    result.timeago = result.time_difference.minutes + setText(' minutes', future);
                }
            } else {
                if (result.time_difference.hours <= 24) {
                    if (result.time_difference.hours == 1) {
                        result.timeago = setText('an hour', future);
                    } else {
                        result.timeago = result.time_difference.hours + setText(' hours', future);
                    }
                } else {
                    if (result.time_difference.days <= 7) {
                        if (result.time_difference.days == 1) {
                            result.timeago = 'Yesterday';
                        } else {
                            result.timeago = result.time_difference.days + setText(' days', future);
                        }
                    } else {
                        if (result.time_difference.weeks <= 4) {
                            if (result.time_difference.weeks == 1) {
                                result.timeago = setText('1 week');
                            } else {
                                result.timeago = result.time_difference.weeks + setText(' weeks', future);
                            }
                        } else {
                            if (result.time_difference.months <= 12) {
                                if (result.time_difference.months == 1) {
                                    result.timeago = setText('1 month', future);
                                } else {
                                    result.timeago = result.date;
                                }
                            } else {
                                result.timeago = result.date;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    DatetimeService.annotations = {
        DI: [
            MONTHS_HALF,
            MONTHS_FULL,
            DAYS_HALF,
            DAYS_FULL
        ],
        module: 'DateTimeModule'
    };
    return DatetimeService;
}();
var calendarFN = function () {
    'use strict';
    function calendarFN($dateTimeFactory) {
        var defaultConfig = {
            fullYear: !1,
            year: new Date().getFullYear()
        };
        this.config = '';
        this.didInit = function () {
            var config = extend(defaultConfig, this.config);
            this.calendar = $dateTimeFactory.buildFullCalendar(config);
        };
    }
    calendarFN.annotations = {
        selector: 'jx-calendar',
        DI: [DatetimeService],
        props: { config: {} },
        module: 'DateTimeModule'
    };
    return calendarFN;
}();
var dateTimeFilterFN = function () {
    'use strict';
    function dateTimeFilterFN(dateTimeFactory) {
        this.compile = function (text, replacer) {
            return dateTimeFactory.format(text, replacer);
        };
    }
    dateTimeFilterFN.annotations = {
        name: 'dateTime',
        DI: [DatetimeService],
        module: 'DateTimeModule'
    };
    return dateTimeFilterFN;
}();
var TimeAgoFilterFn = function () {
    'use strict';
    function TimeAgoFilterFn(dateTimeFactory) {
        this.compile = function (text) {
            return dateTimeFactory.timeConverter(text).timeago;
        };
    }
    TimeAgoFilterFn.annotations = {
        name: 'timeAgo',
        DI: [DatetimeService],
        module: 'DateTimeModule'
    };
    return TimeAgoFilterFn;
}();
var DateTimeModule = function () {
    'use strict';
    function DateTimeModule() {
    }
    return DateTimeModule;
}();
}),
'dist/form/bundles/jeli-form-module.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'FormRepeaterService', function(){ return FormRepeaterService;});
__required.r(exports, 'RangeEventBinder', function(){ return RangeEventBinder;});
__required.r(exports, 'ResolveRangeBinder', function(){ return ResolveRangeBinder;});
__required.r(exports, 'NumberEventBinder', function(){ return NumberEventBinder;});
__required.r(exports, 'ResolveNumberBinder', function(){ return ResolveNumberBinder;});
__required.r(exports, 'getValueAccessor', function(){ return getValueAccessor;});
__required.r(exports, 'ModelDirective', function(){ return ModelDirective;});
__required.r(exports, 'OptionDirective', function(){ return OptionDirective;});
__required.r(exports, 'SelectEventBinder', function(){ return SelectEventBinder;});
__required.r(exports, 'ResolveSelectBinder', function(){ return ResolveSelectBinder;});
__required.r(exports, 'RadioEventBinder', function(){ return RadioEventBinder;});
__required.r(exports, 'RadioEventContainer', function(){ return RadioEventContainer;});
__required.r(exports, 'ResolveRadioBinder', function(){ return ResolveRadioBinder;});
__required.r(exports, 'CheckboxEventBinder', function(){ return CheckboxEventBinder;});
__required.r(exports, 'ResolveCheckboxBinder', function(){ return ResolveCheckboxBinder;});
__required.r(exports, 'DefaultEventBinder', function(){ return DefaultEventBinder;});
__required.r(exports, 'ResolveDefaultBinder', function(){ return ResolveDefaultBinder;});
__required.r(exports, 'FormFieldDirective', function(){ return FormFieldDirective;});
__required.r(exports, 'FormFieldControlService', function(){ return FormFieldControlService;});
__required.r(exports, 'AbstractValueAccessor', function(){ return AbstractValueAccessor;});
__required.r(exports, 'VALUE_ACCESSOR', function(){ return VALUE_ACCESSOR;});
__required.r(exports, 'FormFieldControlDirective', function(){ return FormFieldControlDirective;});
__required.r(exports, 'formValidationStack', function(){ return formValidationStack;});
__required.r(exports, 'customFormValidator', function(){ return customFormValidator;});
__required.r(exports, 'FormValidatorService', function(){ return FormValidatorService;});
__required.r(exports, 'FormControlAbstract', function(){ return FormControlAbstract;});
__required.r(exports, 'FormControlService', function(){ return FormControlService;});
__required.r(exports, 'AbstractFormControl', function(){ return AbstractFormControl;});
__required.r(exports, 'FormControlNameDirective', function(){ return FormControlNameDirective;});
__required.r(exports, 'FormControlDirective', function(){ return FormControlDirective;});
__required.r(exports, 'FormModule', function(){ return FormModule;});
var utils = __required('node_modules/js-helpers/utils.js');
var extend = utils['extend'];
var helpers = __required('node_modules/js-helpers/helpers.js');
var inarray = helpers['inarray'];
var isboolean = helpers['isboolean'];
var isnull = helpers['isnull'];
var isstring = helpers['isstring'];
var isnumber = helpers['isnumber'];
var isequal = helpers['isequal'];
var isarray = helpers['isarray'];
var isfunction = helpers['isfunction'];
var isundefined = helpers['isundefined'];
var isobject = helpers['isobject'];
var isempty = helpers['isempty'];
var core = __required('dist/core/bundles/jeli-core-module.js');
var ProviderToken = core['ProviderToken'];
var AttributeAppender = core['AttributeAppender'];
var closureRef = core['closureRef'];
var EventEmitter = core['EventEmitter'];
var errorBuilder = core['errorBuilder'];
var __buildOptions = {};
function AbstractFormControl(changeDetector) {
    this.changeDetector = changeDetector;
    this._registered = false;
    this.formName = '';
    this._formFields = [];
    this.form = null;
}
AbstractFormControl.prototype.addField = function (formFieldInstance) {
    var formControl = this.form.getField(formFieldInstance.name);
    setupControl(formControl, formFieldInstance);
    this.form.updateValueAndStatus({ emitEvent: false });
    this._formFields.push(formFieldInstance);
    return formControl;
};
AbstractFormControl.prototype.removeField = function (formFieldInstance) {
    this._formFields.splice(this._formFields.indexOf(formFieldInstance), 1);
};
AbstractFormControl.prototype.getField = function (fieldName) {
    return this.form.getField(fieldName);
};
AbstractFormControl.prototype.resetForm = function (values) {
    this.form.reset(values);
};
AbstractFormControl.prototype.viewDidDestroy = function () {
    if (this.form) {
        this.form = null;
    }
};
var FormControlDirective = function () {
    'use strict';
    function FormControlDirective(changeDetector) {
        AbstractFormControl.call(this, changeDetector);
        Object.defineProperty(this, 'formControl', {
            set: function (formControl) {
                this.form = formControl;
                _validateAndBindStatus(this);
            }
        });
    }
    FormControlDirective.prototype = Object.create(AbstractFormControl.prototype);
    FormControlDirective.prototype.constructor = FormControlDirective;
    FormControlDirective.annotations = {
        selector: 'formControl',
        props: { formControl: {} },
        DI: [{
                optional: true,
                tokenName: 'changeDetector'
            }],
        module: 'FormModule'
    };
    return FormControlDirective;
}();
var FormControlNameDirective = function () {
    'use strict';
    function FormControlNameDirective(parentControl, changeDetector) {
        AbstractFormControl.call(this, changeDetector);
        if (!parentControl || !(parentControl instanceof FormControlDirective)) {
            return errorBuilder('Expected instance of FormControlService but got ' + typeof parentControl);
        }
        Object.defineProperty(this, 'formControlName', {
            set: function (formName) {
                this.formName = formName;
                this.form = parentControl.getField(formName);
                _validateAndBindStatus(this);
            }
        });
    }
    FormControlNameDirective.prototype = Object.create(AbstractFormControl.prototype);
    FormControlNameDirective.prototype.constructor = FormControlNameDirective;
    FormControlNameDirective.annotations = {
        selector: 'formControlName',
        props: { formControlName: {} },
        DI: [
            {
                optional: true,
                value: 'formControl',
                tokenName: 'ParentRef'
            },
            {
                optional: true,
                tokenName: 'changeDetector'
            }
        ],
        exportAs: 'formControl',
        dynamicInjectors: true,
        module: 'FormModule'
    };
    return FormControlNameDirective;
}();
function CurrentInstance(next) {
    this.pending = null;
    this.hasAsync = false;
    this.failed = false;
    this.errors = null;
    this.count = 0;
    this.stop = function () {
        next(this.failed ? this.errors : null);
    };
}
CurrentInstance.prototype.add = function (totalValidators) {
    this.count = totalValidators;
    this.errors = {};
    this.failed = false;
    this.hasAsync = false;
    this.resolve = null;
};
CurrentInstance.prototype.rem = function (passed, type) {
    this.count--;
    if (passed !== true) {
        this.failed = true;
        this.errors[type] = true;
    }
    if (!this.count) {
        this.stop();
    }
};
CurrentInstance.prototype.registerAsyncValidator = function (asyncInstance, name) {
    this.hasAsync = true;
    var _this = this;
    var callback = function (value) {
        _this.rem(value, name);
    };
    asyncInstance.then(callback, callback);
};
var formValidationStack = Object.create({
    MINLENGTH: function (value, requiredLength) {
        if (null !== value && undefined !== value)
            return String(value).length >= requiredLength;
        return true;
    },
    MAXLENGTH: function (value, requiredLength) {
        if (value)
            return String(value).length <= requiredLength;
        return true;
    },
    EMAILVALIDATION: function (value) {
        var regExp = '^\\w+([.-]?w+)*@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$';
        return formValidationStack.PATTERN(value, regExp);
    },
    ISEMPTY: function (val, def) {
        return def === isempty(val);
    },
    BOOLEAN: function (value, def) {
        return isboolean(value) && isequal(value, def);
    },
    DOMAINVALIDATION: function (domain) {
        return formValidationStack.PATTERN(domain, '[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:.[a-zA-Z]{2,})+');
    },
    MEDIUMPASSWORDSTRENGTH: function (passwd) {
        return formValidationStack.PATTERN(passwd, '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
    },
    STRONGPASSWORDSTRENGTH: function (passwd) {
        return formValidationStack.PATTERN(passwd, '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
    },
    PATTERN: function (value, pattern) {
        return new RegExp(pattern).test(value);
    },
    REQUIRED: function (value, required) {
        if (required) {
            return !isundefined(value) && !isnull(value) && '' !== value;
        }
        return !required;
    },
    REQUIREDTRUE: function (value) {
        return isboolean(value) && value === true;
    },
    MINNUMBER: function (value, minNumber) {
        if (null !== value && undefined !== value) {
            value = Number(value);
            return !isNaN(value) && minNumber <= value;
        }
        return true;
    },
    MAXNUMBER: function (value, maxNumber) {
        if (value) {
            value = Number(value);
            return !isNaN(value) && value <= maxNumber;
        }
        return true;
    }
});
function FormValidatorService(callback, validators) {
    var currentProcess = new CurrentInstance(callback);
    function _throwErrorIfNoValidators(validatorsObj) {
        if (!isobject(validatorsObj)) {
            throw new Error('Validators are required in order to perform validations');
        }
    }
    function _validate(value, criteria) {
        var _criteria = Object.keys(criteria);
        currentProcess.add(_criteria.length);
        for (var i = 0; i < _criteria.length; i++) {
            var validatorName = _criteria[i];
            var passed = false;
            var validatorFn = formValidationStack[validatorName.toUpperCase()];
            if (validatorFn) {
                passed = validatorFn(value, criteria[validatorName]);
            } else if (isfunction(criteria[validatorName])) {
                passed = criteria[validatorName](value);
            }
            if (isequal('async', validatorName)) {
                currentProcess.registerAsyncValidator(passed, validatorName);
            } else {
                currentProcess.rem(passed, validatorName);
                if (!passed) {
                    return currentProcess.stop();
                }
            }
        }
    }
    function _validateObjectTypes(formValues) {
        if (!Object.keys(formValues).length) {
            validationInstance.emptyFormFields = true;
            trigger();
        } else {
            var _fieldsToValidate = Object.keys(validators);
            var err = _fieldsToValidate.reduce(function (ret, key) {
                if (!formValues.hasOwnProperty(key)) {
                    ret++;
                    ErrorHandler(key, ['required']);
                }
                return ret;
            }, 0);
            if (!err) {
                currentProcess.pending.count = _fieldsToValidate.length;
                _fieldsToValidate.forEach(function (field) {
                    _validateField(formValues[field], validators[field], field);
                });
            } else {
                trigger();
            }
        }
    }
    function formValidator(formValue) {
        if (!validators) {
            return callback(null);
        }
        _throwErrorIfNoValidators(validators);
        _validate(formValue, validators);
    }
    formValidator.addValidators = function (newValidators) {
        _throwErrorIfNoValidators(newValidators);
        if (!validators) {
            validators = newValidators;
        } else {
            validators = extend(true, validators, newValidators);
        }
    };
    return formValidator;
}
function customFormValidator(validatorName, validatorFn, override) {
    if (formValidationStack.hasOwnProperty(validatorName.toUpperCase()) && !override) {
        return errorBuilder('[' + validatorName + '] already exists, please pass the override parameter to the validator');
    }
    formValidationStack[validatorName.toUpperCase()] = validatorFn;
}
;
var VALID = 'VALID';
var INVALID = 'INVALID';
var DISABLED = 'DISABLED';
var PENDING = 'PENDING';
function FormControlAbstract(validators) {
    var _this = this;
    this._parent = null;
    this.status = INVALID;
    this.value = null;
    this.error = null;
    this.touched = false;
    this._pendingValue = null;
    this._onDisableEvents = [];
    this._onControlChangeListener = function () {
    };
    this.validator = FormValidatorService(function (errors) {
        _this.setError(errors, true);
    }, validators);
    this.valueChanges = new EventEmitter();
    this.statusChanged = new EventEmitter();
    Object.defineProperties(this, {
        parent: {
            get: function () {
                return this._parent;
            }
        },
        untouched: {
            get: function () {
                return !this.touched;
            }
        },
        invalid: {
            get: function () {
                return isequal(this.status, INVALID);
            }
        },
        enabled: {
            get: function () {
                return !isequal(this.status, DISABLED);
            }
        },
        disabled: {
            get: function () {
                return isequal(this.status, DISABLED);
            }
        },
        valid: {
            get: function () {
                return isequal(this.status, VALID);
            }
        }
    });
}
FormControlAbstract.prototype.setParent = function (context) {
    this._parent = context;
};
FormControlAbstract.prototype._anyFieldHasStatus = function (status) {
    return this._anyControl(function (control) {
        return isequal(control.status, status);
    });
};
FormControlAbstract.prototype._anyControl = function () {
};
FormControlAbstract.prototype.setStatus = function () {
    if (this.disabled)
        return DISABLED;
    if (this.error || this._anyFieldHasStatus(INVALID))
        return INVALID;
    return VALID;
};
FormControlAbstract.prototype.destroy = function () {
    if (this.formFieldControls) {
        this.formFieldControls = null;
    }
    this._parent = null;
    this.valueChanges.destroy();
    this.statusChanged.destroy();
};
FormControlAbstract.prototype.markAsTouched = function (options) {
    options = options || {};
    this.touched = true;
    if (this._parent && !option.self) {
        this._parent.markAsTouched(options);
    }
};
FormControlAbstract.prototype.markAllAsTouched = function () {
    this.markAsTouched({ self: true });
    this.forEachField(function (control) {
        control.markAllAsTouched();
    });
};
FormControlAbstract.prototype.updateValueAndStatus = function (options) {
    options = options || {};
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
        this.error = null;
        this.status = this.setStatus();
        this._runValidators();
    }
    if (!isequal(options.emitEvent, false)) {
        this.valueChanges.emit(this.value);
    }
    if (this._parent && !isequal(options.self, false)) {
        this._parent.updateValueAndStatus(options);
    }
};
FormControlAbstract.prototype.enable = function (options) {
    options = options || {};
    this.status = VALID;
    this.updateValueAndStatus({
        self: true,
        emitEvent: options.emitEvent
    });
    this.forEachField(function (control) {
        control.enable({ self: true });
    });
    this._onDisableEvents.forEach(function (listener) {
        listener(false);
    });
};
FormControlAbstract.prototype.disable = function (options) {
    options = options || {};
    this.status = DISABLED;
    this.forEachField(function (control) {
        control.disable({ self: true });
    });
    this.updateValueAndStatus({
        self: true,
        emitEvent: options.emitEvent
    });
    if (isequal(options.emitEvent, true)) {
        this.valueChanges.emit(this.value);
    }
    this._onDisableEvents.forEach(function (listener) {
        listener(true);
    });
};
FormControlAbstract.prototype.forEachField = function () {
};
FormControlAbstract.prototype._allFieldDisabled = function () {
    return this.disabled;
};
FormControlAbstract.prototype._setInitialStatus = function () {
    this.status = this._allFieldDisabled() ? DISABLED : VALID;
};
FormControlAbstract.prototype._updateValue = function () {
};
FormControlAbstract.prototype.setValidators = function (validator) {
    if (!validator)
        return;
    this.validator.addValidators(validator);
    this._runValidators();
};
FormControlAbstract.prototype._runValidators = function () {
    this.validator(this.value);
};
FormControlAbstract.prototype.markAsUntouched = function (options) {
    options = options || {};
    this.touched = false;
    this.forEachField(function (control) {
        control.markAsUntouched({ self: true });
    });
};
FormControlAbstract.prototype.markAsTouched = function (options) {
    if (this.touched)
        return;
    options = options || {};
    this.touched = true;
    if (this.parent && !options.self) {
        this.parent.markAsTouched(options);
    }
};
FormControlAbstract.prototype.markAllAsUnTouched = function () {
    this.markAsUntouched({ self: true });
    this.forEachField(function (control) {
        control.markAllAsUnTouched();
    });
};
FormControlAbstract.prototype._registerOnControlChangeListener = function (fn) {
    this._onControlChangeListener = fn;
};
FormControlAbstract.prototype.setError = function (errors, emitEvent) {
    this.error = errors;
    this._updateStatusOnError(emitEvent);
};
FormControlAbstract.prototype.getError = function (errorType) {
    return this.error ? this.error[errorType] : null;
};
FormControlAbstract.prototype.hasError = function (errorType) {
    return !!this.getError(errorType);
};
FormControlAbstract.prototype._updateStatusOnError = function (emitEvent) {
    this.status = this.setStatus();
    if (emitEvent) {
        this.statusChanged.emit(this.status);
    }
    if (this._parent) {
        this._parent._updateStatusOnError(emitEvent);
    }
};
FormControlAbstract.prototype.getPath = function (path) {
    return path && path.includes('.') ? path.split('.') : path;
};
var FormControlService = function () {
    'use strict';
    function FormControlService(formFields, validators) {
        FormControlAbstract.call(this, validators);
        this.formFieldControls = {};
        if (!isempty(formFields)) {
            for (var field in formFields) {
                this.addField(field, formFields[field]);
            }
        }
        this.updateValueAndStatus();
    }
    FormControlService.prototype = Object.create(FormControlAbstract.prototype);
    FormControlService.prototype.constructor = FormControlAbstract;
    FormControlService.prototype.addField = function (name, fieldControl) {
        if (fieldControl instanceof FormControlService || fieldControl instanceof FormFieldControlService) {
            this.formFieldControls[name] = fieldControl;
        } else {
            this.formFieldControls[name] = new FormFieldControlService(fieldControl);
        }
        this._setupControl(this.formFieldControls[name]);
    };
    FormControlService.prototype.hasField = function (controlName) {
        return this.formFieldControls.hasOwnProperty(controlName);
    };
    FormControlService.prototype.getField = function (controlName) {
        var path = this.getPath(controlName);
        if (isarray(path)) {
            return this.getByPath(path);
        }
        return this.formFieldControls[controlName] || null;
    };
    FormControlService.prototype.getByPath = function (paths) {
        return paths.reduce(function (accum, path) {
            return accum.getField(path);
        }, this);
    };
    FormControlService.prototype._setupControl = function (control) {
        control.setParent(this);
        control._registerOnControlChangeListener(this._onControlChangeListener);
    };
    FormControlService.prototype.patchValue = function (values, options) {
        options = options || {};
        if (isobject(values) || isarray(values)) {
            for (var field in values) {
                if (this.hasField(field) && !options.self) {
                    this.getField(field).patchValue(values[field], {
                        self: options.self,
                        updateView: true
                    });
                }
            }
        }
    };
    FormControlService.prototype.setValue = function (values, options) {
        if (!values)
            return;
        this._allValuePresent(values);
        for (var field in values) {
            this._isControlPresent(field);
            this.formFieldControls[field].setValue(values[field], { self: options && options.self });
        }
    };
    FormControlService.prototype.forEachField = function (callback) {
        var _this = this;
        Object.keys(this.formFieldControls).forEach(function (field) {
            callback(_this.formFieldControls[field], field);
        });
    };
    FormControlService.prototype.reset = function (value, options) {
        options = options || {};
        value = value || {};
        this.forEachField(function (control, name) {
            control.reset(value[name] || null, {
                self: true,
                emitEvent: options.emitEvent
            });
        });
    };
    FormControlService.prototype.setFormFieldValidators = function (fieldValidators) {
        for (var field in fieldValidators) {
            this.setFieldValidator(field, fieldValidators[field]);
        }
    };
    FormControlService.prototype.setFieldValidator = function (field, validator) {
        this.getField(field).setValidators(validator);
        return this;
    };
    FormControlService.prototype.allTouched = function () {
        var alltouched = true;
        this.forEachField(function (control, name) {
            if (!control.touched) {
                alltouched = false;
            }
        });
        return alltouched;
    };
    FormControlService.prototype.removeField = function (name) {
        this.getField(name).destroy();
        delete this.formFieldControls[name];
        delete this.value[name];
        this.valueChanges.emit(this.value);
    };
    FormControlService.prototype.getAllValues = function () {
        return this._collectValues(false);
    };
    FormControlService.prototype._allValuePresent = function (values) {
        this.forEachField(function (control, field) {
            if (isundefined(values[field])) {
                errorBuilder('value for formField(' + field + ') is missing');
            }
        });
    };
    FormControlService.prototype._isControlPresent = function (field) {
        if (!Object.keys(this.formFieldControls).length) {
            errorBuilder('There are no field controls registered to this form');
        }
        if (!this.hasField(field)) {
            errorBuilder('Cannot find field control for ' + field);
        }
    };
    FormControlService.prototype._anyControl = function (callback) {
        for (var field in this.formFieldControls) {
            var found = callback(this.formFieldControls[field]);
            if (found) {
                return found;
            }
        }
        return undefined;
    };
    FormControlService.prototype._allFieldDisabled = function () {
        for (var field in this.formFieldControls) {
            if (this.formFieldControls[field].enabled) {
                return false;
            }
        }
        return Object.keys(this.formFieldControls).length > 0 || this.disabled;
    };
    FormControlService.prototype._updateValue = function () {
        this.value = this._collectValues(true);
    };
    FormControlService.prototype._collectValues = function (enabledOnly) {
        var values = {};
        this.forEachField(function (control, field) {
            if (enabledOnly && control.enabled || !enabledOnly) {
                values[field] = control.value;
            }
        });
        return values;
    };
    FormControlService.prototype._getFieldErrors = function () {
        var errors = {};
        var invalid = false;
        this.forEachField(function (control, field) {
            if (control.error) {
                errors[field] = control.error;
                invalid = true;
            }
        });
        return invalid ? errors : null;
    };
    FormControlService.annotations = {
        static: true,
        module: 'FormModule'
    };
    FormControlService.annotations.instance = FormControlService;
    return FormControlService;
}();
var VALUE_ACCESSOR = new ProviderToken('ValueAccessor', true);
function AbstractValueAccessor(elementRef) {
    this.onChange = function () {
    };
    this.onDisable = function () {
    };
    this.onBlur = function () {
    };
    this.element = elementRef;
}
AbstractValueAccessor.prototype.setDisabledState = function (state) {
    AttributeAppender.setProp(this.element.nativeElement, 'disabled', state);
};
AbstractValueAccessor.prototype.registerOnBlur = function (onBlurFn) {
    this.onBlur = onBlurFn;
};
AbstractValueAccessor.prototype.registerOnChange = function (onChangeFn) {
    this.onChange = onChangeFn;
};
AbstractValueAccessor.prototype.registerOnDisable = function (onDisableFn) {
    this.onDisable = onDisableFn;
};
var FormFieldControlDirective = function () {
    'use strict';
    function FormFieldControlDirective(eventBinder, validators) {
        this.eventBinder = getValueAccessor(eventBinder);
        this.control = null;
        this._validators = validators;
        this._warning = false;
        Object.defineProperty(this, 'disabled', {
            set: function () {
                if (!this._warning) {
                    this._warning = true;
                    console.warn('The use of disabled property with a form field control directive will not take effect');
                }
            }
        });
    }
    FormFieldControlDirective.prototype.didInit = function () {
        if (!(this.control instanceof FormFieldControlService)) {
            return errorBuilder('Expected instance of FormFieldControlService but got ' + typeof this.control);
        }
        setupControl(this.control, this);
        if (this.control.disabled && this.eventBinder.setDisabledState) {
            this.eventBinder.setDisabledState(true);
        }
        this.control.updateValueAndStatus({ emitEvent: false });
    };
    FormFieldControlDirective.prototype.modelToViewUpdate = function () {
    };
    FormFieldControlDirective.annotations = {
        selector: 'fieldControl',
        DI: [
            VALUE_ACCESSOR,
            {
                optional: true,
                tokenName: 'VALIDATORS'
            }
        ],
        props: {
            control: { value: 'fieldControl' },
            disabled: {}
        },
        module: 'FormModule'
    };
    return FormFieldControlDirective;
}();
var FormFieldControlService = function () {
    'use strict';
    function FormFieldControlService(fieldControl) {
        FormControlAbstract.call(this, fieldControl ? fieldControl.validators : null);
        this.eventType = 'default';
        this._onChangeEvents = [];
        this._setInitialState(fieldControl);
        this.updateValueAndStatus({
            self: true,
            emitEvent: false
        });
    }
    FormFieldControlService.prototype = Object.create(FormControlAbstract.prototype);
    FormFieldControlService.prototype.constructor = FormControlAbstract;
    FormFieldControlService.prototype._setInitialState = function (state) {
        if (isobject(state)) {
            this.value = state.value;
            state.disabled ? this.disable({ self: true }) : this.enable({ self: true });
            this.eventType = state.eventType || this.eventType;
        } else {
            this.value = state !== undefined ? state : null;
        }
    };
    FormFieldControlService.prototype.setValue = function (value, options) {
        options = options || {};
        this.value = value;
        if (this._onChangeEvents.length && !isequal(options.emitToView, false)) {
            this._onChangeEvents.length && this._onChangeEvents.forEach(function (eventChange) {
                return eventChange(value, !isequal(options.emitToView, false));
            });
        }
        this.updateValueAndStatus(options);
    };
    FormFieldControlService.prototype.patchValue = function (val, options) {
        if (!options) {
            options = {};
        }
        this.setValue(val, options);
    };
    FormFieldControlService.prototype.reset = function (config, options) {
        this._setInitialState(config);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
    };
    FormFieldControlService.prototype.registerOnChangeListener = function (listener) {
        this._onChangeEvents.push(listener);
    };
    FormFieldControlService.prototype.registerOnDisabledListener = function (listener) {
        this._onDisableEvents.push(listener);
    };
    FormFieldControlService.prototype.clearListeners = function () {
        this._onChangeEvents.length = 0;
        this._onDisableEvents.length = 0;
    };
    FormFieldControlService.annotations = {
        static: true,
        module: 'FormModule'
    };
    FormFieldControlService.annotations.instance = FormFieldControlService;
    return FormFieldControlService;
}();
var FormFieldDirective = function () {
    'use strict';
    function FormFieldDirective(parentContainer, eventBinder, validators) {
        this.eventBinder = getValueAccessor(eventBinder);
        this.control = null;
        this._validators = validators;
        this.parent = parentContainer;
    }
    FormFieldDirective.prototype.didInit = function () {
        if (!this.parent) {
            return errorBuilder('[formField=' + this.name + ']: Expected an instance of FormControlDirective but got ' + typeof this.parent);
        }
        this.control = this.parent.addField(this);
        if (this.control.disabled && this.eventBinder.setDisabledState) {
            this.eventBinder.setDisabledState(true);
        }
    };
    FormFieldDirective.prototype.modelToViewUpdate = function () {
    };
    FormFieldDirective.prototype.viewDidDestroy = function () {
        if (this.parent) {
            this.parent.removeField(this);
            this.parent = null;
        }
        this.control = null;
    };
    FormFieldDirective.annotations = {
        selector: 'formField',
        DI: [
            {
                optional: true,
                value: 'formControl',
                tokenName: 'ParentRef'
            },
            VALUE_ACCESSOR,
            {
                optional: true,
                tokenName: 'VALIDATORS'
            }
        ],
        props: { name: { value: 'formField' } },
        dynamicInjectors: true,
        module: 'FormModule'
    };
    return FormFieldDirective;
}();
var ResolveDefaultBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(function () {
        return DefaultEventBinder;
    })
};
var DefaultEventBinder = function () {
    'use strict';
    function DefaultEventBinder(elementRef) {
        AbstractValueAccessor.call(this, elementRef);
    }
    DefaultEventBinder.prototype = Object.create(AbstractValueAccessor.prototype);
    DefaultEventBinder.prototype.constructor = AbstractValueAccessor;
    DefaultEventBinder.prototype.writeValue = function (value) {
        value = value === null || value === undefined ? '' : value;
        AttributeAppender.setProp(this.element.nativeElement, 'value', value);
    };
    DefaultEventBinder.annotations = {
        selector: 'input:type!=checkbox|radio|number|range:[model|formField|fieldControl],textarea:[model|formField|fieldControl]',
        events: {
            'input': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: [[
                                '$event',
                                'target',
                                'value'
                            ]],
                        fn: 'onChange'
                    }]
            },
            'blur': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: ['$event'],
                        fn: 'onBlur'
                    }]
            }
        },
        resolve: [ResolveDefaultBinder],
        DI: [{
                optional: true,
                tokenName: 'ElementRef'
            }],
        module: 'FormModule'
    };
    return DefaultEventBinder;
}();
var ResolveCheckboxBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(function () {
        return CheckboxEventBinder;
    })
};
var CheckboxEventBinder = function () {
    'use strict';
    function CheckboxEventBinder(elementRef) {
        AbstractValueAccessor.call(this, elementRef);
    }
    ;
    CheckboxEventBinder.prototype = Object.create(AbstractValueAccessor.prototype);
    CheckboxEventBinder.prototype.constructor = AbstractValueAccessor;
    CheckboxEventBinder.prototype.writeValue = function (checked) {
        AttributeAppender.setProp(this.element.nativeElement, 'checked', checked, true);
    };
    CheckboxEventBinder.annotations = {
        selector: 'input:type=checkbox:[model|formField|fieldControl]',
        events: {
            'change': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: [[
                                '$event',
                                'target',
                                'checked'
                            ]],
                        fn: 'onChange'
                    }]
            },
            'blur': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: ['$event'],
                        fn: 'onBlur'
                    }]
            }
        },
        resolve: [ResolveCheckboxBinder],
        DI: [{
                optional: true,
                tokenName: 'ElementRef'
            }],
        module: 'FormModule'
    };
    return CheckboxEventBinder;
}();
var ResolveRadioBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(function () {
        return RadioEventBinder;
    })
};
var RadioEventContainer = function () {
    'use strict';
    function RadioEventContainer() {
        var _registry = [];
        this.register = function (eventBinder) {
            _registry.push(eventBinder);
        };
        this.remove = function (eventBinder) {
            _registry.splice(_registry.indexOf(eventBinder), 1);
        };
        this.selectValue = function (eventBinder) {
            _registry.forEach(function (registeredBinder) {
                if (isSameGroup(registeredBinder, eventBinder) && registeredBinder !== eventBinder) {
                    registeredBinder.writeValue(eventBinder.value);
                }
            });
        };
        function isSameGroup(a, b) {
            return a.name === b.name;
        }
    }
    RadioEventContainer.annotations = { module: 'FormModule' };
    return RadioEventContainer;
}();
var RadioEventBinder = function () {
    'use strict';
    function RadioEventBinder(elementRef, radioEventContainer) {
        AbstractValueAccessor.call(this, elementRef);
        this.radioEventContainer = radioEventContainer;
        this.state = false;
    }
    ;
    RadioEventBinder.prototype = Object.create(AbstractValueAccessor.prototype);
    RadioEventBinder.prototype.constructor = AbstractValueAccessor;
    RadioEventBinder.prototype.didInit = function () {
        this._checkFieldName();
        this.radioEventContainer.register(this);
    };
    RadioEventBinder.prototype.didDestroy = function () {
        this.radioEventContainer.remove(this);
    };
    RadioEventBinder.prototype._checkFieldName = function () {
        if (this.name && this.formField && this.formField != this.name) {
            errorBuilder('if you define a name and formField both values must match. <input type=radio name=' + this.name + ' :formField=' + this.formField);
        }
        if (!this.name && this.formField)
            this.name = this.formField;
    };
    RadioEventBinder.prototype.registerOnChange = function (onChangeFn) {
        var _this = this;
        this._onChange = onChangeFn;
        this.onChange = function (value) {
            onChangeFn(_this.value);
            _this.radioEventContainer.selectValue(_this);
        };
    };
    RadioEventBinder.prototype.writeValue = function (value) {
        this.state = value == this.value;
        AttributeAppender.setProp(this.element.nativeElement, 'checked', this.state);
    };
    RadioEventBinder.annotations = {
        selector: 'input:type=radio:[model|formField|fieldControl]',
        props: {
            name: {},
            formField: {},
            value: {}
        },
        events: {
            'change': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: [[
                                '$event',
                                'target',
                                'value'
                            ]],
                        fn: 'onChange'
                    }]
            },
            'blur': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: ['$event'],
                        fn: 'onBlur'
                    }]
            }
        },
        resolve: [ResolveRadioBinder],
        DI: [
            {
                optional: true,
                tokenName: 'ElementRef'
            },
            RadioEventContainer
        ],
        module: 'FormModule'
    };
    return RadioEventBinder;
}();
var ResolveSelectBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(function () {
        return SelectEventBinder;
    })
};
function _buildValueToString(id, value) {
    if (id == null)
        return '' + value;
    if (typeof value === 'object' && id)
        value = 'option:object';
    return id + ':' + value;
}
var SelectEventBinder = function () {
    'use strict';
    function SelectEventBinder(elementRef) {
        this.idIncrement = 0;
        this.selectedValue;
        this._optionValueMap = new Map();
        this._compare = isequal;
        AbstractValueAccessor.call(this, elementRef);
        Object.defineProperty(this, 'compareFn', {
            set: function (fn) {
                if (typeof fn !== 'function') {
                    throw new Error('expected function for comparisonFN but got ' + typeof fn + ' instead.');
                }
                this._compare = fn;
            }
        });
    }
    ;
    SelectEventBinder.prototype = Object.create(AbstractValueAccessor.prototype);
    SelectEventBinder.prototype.constructor = AbstractValueAccessor;
    SelectEventBinder.prototype._handleSelection = function (value) {
        this.selectedValue = this._getValue(value);
        this.onChange(this.selectedValue);
    };
    SelectEventBinder.prototype.writeValue = function (value) {
        this.selectedValue = value;
        var _this = this;
        if (!this.element.hasAttribute('multiple')) {
            var optionId = this._getOptionId(value);
            if (optionId === null) {
                AttributeAppender.setProp(this.element.nativeElement, 'selectedIndex', -1);
            }
            AttributeAppender.setProp(this.element.nativeElement, 'value', _buildValueToString(optionId, value));
        } else {
            var markAsSelected = function (opt) {
                AttributeAppender.setProp(opt, 'selected', false);
            };
            if (Array.isArray(value)) {
                var optionIds = value.map(function (v) {
                    return _this._getOptionId(v) || v;
                });
                markAsSelected = function (opt) {
                    AttributeAppender.setProp(opt, 'selected', inarray(opt.value, optionIds));
                };
            }
            this._markAsSelectedMultiple(markAsSelected);
        }
    };
    SelectEventBinder.prototype._getValue = function (valueString) {
        if (this.element.hasAttribute('multiple')) {
            var optionsValue = [];
            for (var i = 0; i < this.element.nativeElement.selectedOptions.length; i++) {
                var value = this._getOptionValue(this.element.nativeElement.selectedOptions[i].value);
                optionsValue.push(value);
            }
            return optionsValue;
        }
        return this._getOptionValue(valueString);
    };
    SelectEventBinder.prototype._getOptionValue = function (valueString) {
        var optionId = valueString.split(':')[0];
        return this._optionValueMap.has(optionId) ? this._optionValueMap.get(optionId) : valueString;
    };
    SelectEventBinder.prototype.genOptionId = function () {
        return (this.idIncrement++).toString();
    };
    SelectEventBinder.prototype._getOptionId = function (value) {
        var keys = this._optionValueMap.keys();
        for (var i in keys) {
            if (this._compare(this._optionValueMap.get(keys[i]), value))
                return keys[i];
        }
        return null;
    };
    SelectEventBinder.prototype._markAsSelectedMultiple = function (callback) {
        Array.from(this.element.nativeElement.options).forEach(callback);
    };
    SelectEventBinder.annotations = {
        selector: 'select:[model|formField|fieldControl]',
        events: {
            'input': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: [[
                                '$event',
                                'target',
                                'value'
                            ]],
                        fn: '_handleSelection'
                    }]
            },
            'blur': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: ['$event'],
                        fn: 'onBlur'
                    }]
            }
        },
        props: { compareFn: {} },
        resolve: [ResolveSelectBinder],
        DI: [{
                optional: true,
                tokenName: 'ElementRef'
            }],
        module: 'FormModule'
    };
    return SelectEventBinder;
}();
var OptionDirective = function () {
    'use strict';
    function OptionDirective(selectInstance, elementRef) {
        if (selectInstance)
            this.id = selectInstance.genOptionId();
        Object.defineProperty(this, 'value', {
            set: function (value) {
                this.setValue(value);
                if (selectInstance)
                    selectInstance.writeValue(selectInstance.selectedValue);
            }
        });
        Object.defineProperty(this, 'jValue', {
            set: function (value) {
                if (!selectInstance)
                    return;
                selectInstance._optionValueMap.set(this.id, value);
                this.setValue(_buildValueToString(this.id, value));
                selectInstance.writeValue(selectInstance.selectedValue);
            }
        });
        this.setValue = function (value) {
            AttributeAppender.setProp(elementRef.nativeElement, 'value', value);
        };
        this.viewDidDestroy = function () {
            if (selectInstance) {
                selectInstance._optionValueMap.delete(this.id);
                selectInstance.writeValue(selectInstance.selectedValue);
            }
        };
    }
    OptionDirective.annotations = {
        selector: 'option',
        DI: [
            {
                optional: true,
                type: '[model|formField|fieldControl]',
                value: 'select',
                tokenName: 'ParentRef'
            },
            {
                optional: true,
                tokenName: 'ElementRef'
            }
        ],
        props: {
            value: {},
            jValue: {}
        },
        dynamicInjectors: true,
        module: 'FormModule'
    };
    return OptionDirective;
}();
var ResolveNumberBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(function () {
        return NumberEventBinder;
    })
};
var NumberEventBinder = function () {
    'use strict';
    function NumberEventBinder(elementRef) {
        AbstractValueAccessor.call(this, elementRef);
    }
    NumberEventBinder.prototype = Object.create(AbstractValueAccessor.prototype);
    NumberEventBinder.prototype.constructor = AbstractValueAccessor;
    NumberEventBinder.prototype.writeValue = function (value) {
        value = value === null || value === undefined ? '' : value;
        AttributeAppender.setProp(this.element.nativeElement, 'value', value);
    };
    NumberEventBinder.prototype.registerOnChange = function (onChangeFn) {
        this.onChange = function (value) {
            onChangeFn(value == '' ? null : parseFloat(value));
        };
    };
    NumberEventBinder.annotations = {
        selector: 'input:type=number:[model|formField|fieldControl]',
        events: {
            'input': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: [[
                                '$event',
                                'target',
                                'value'
                            ]],
                        fn: 'onChange'
                    }]
            },
            'blur': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: ['$event'],
                        fn: 'onBlur'
                    }]
            }
        },
        resolve: [ResolveNumberBinder],
        DI: [{
                optional: true,
                tokenName: 'ElementRef'
            }],
        module: 'FormModule'
    };
    return NumberEventBinder;
}();
var ResolveRangeBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(function () {
        return RangeEventBinder;
    })
};
var RangeEventBinder = function () {
    'use strict';
    function RangeEventBinder(elementRef) {
        AbstractValueAccessor.call(this, elementRef);
    }
    RangeEventBinder.prototype = Object.create(AbstractValueAccessor.prototype);
    RangeEventBinder.prototype.constructor = AbstractValueAccessor;
    RangeEventBinder.prototype.writeValue = function (value) {
        value = value === null || value === undefined ? '' : value;
        AttributeAppender.setProp(this.element.nativeElement, 'value', parseFloat(value), true);
    };
    RangeEventBinder.prototype.registerOnChange = function (onChangeFn) {
        this.onChange = function (value) {
            onChangeFn(value == '' ? null : parseFloat(value));
        };
    };
    RangeEventBinder.annotations = {
        selector: 'input:type=range:[model|formField|fieldControl]',
        events: {
            'input': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: [[
                                '$event',
                                'target',
                                'value'
                            ]],
                        fn: 'onChange'
                    }]
            },
            'change': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: [[
                                '$event',
                                'target',
                                'value'
                            ]],
                        fn: 'onChange'
                    }]
            },
            'blur': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: ['$event'],
                        fn: 'onBlur'
                    }]
            }
        },
        resolve: [ResolveRangeBinder],
        DI: [{
                optional: true,
                tokenName: 'ElementRef'
            }],
        module: 'FormModule'
    };
    return RangeEventBinder;
}();
function setupControl(fieldControl, dir) {
    if (!fieldControl)
        return errorBuilder('No field control found for ' + dir.name);
    if (!dir.eventBinder)
        return errorBuilder('No EventBinder defined');
    fieldControl.setValidators(dir._validators);
    dir.eventBinder.writeValue(fieldControl.value);
    setUpViewChangeEvent(fieldControl, dir);
    setupBlurEvent(fieldControl, dir);
    if (dir.eventBinder.setDisabledState) {
        fieldControl.registerOnDisabledListener(function (state) {
            dir.eventBinder.setDisabledState(state);
        });
    }
}
function setUpViewChangeEvent(fieldControl, dir) {
    dir.eventBinder.registerOnChange(function (value) {
        fieldControl._pendingValue = value;
        fieldControl._pendingChange = true;
        if (!isequal(fieldControl.eventType, 'blur')) {
            updateControl(fieldControl, dir);
        }
    });
    fieldControl.registerOnChangeListener(function (value, emitEvent) {
        dir.eventBinder.writeValue(value);
        if (emitEvent) {
            dir.modelToViewUpdate(value);
        }
    });
}
function setupBlurEvent(fieldControl, dir) {
    if (dir.eventBinder.registerOnBlur) {
        dir.eventBinder.registerOnBlur(function () {
            if (isequal(fieldControl.eventType, 'blur') && fieldControl._pendingChange) {
                updateControl(fieldControl, dir);
            }
        });
    }
}
function updateControl(fieldControl, dir) {
    fieldControl.setValue(fieldControl._pendingValue, { emitToView: false });
    dir.modelToViewUpdate(fieldControl._pendingValue);
    fieldControl._pendingChange = false;
    fieldControl.markAsTouched();
}
function _validateAndBindStatus(dir) {
    if (dir._registered)
        return;
    if (!dir.form || !(dir.form instanceof FormControlService)) {
        return errorBuilder((dir.formName ? '[' + dir.formName + ']' : '') + 'Expected instance of FormControlService but got ' + typeof dir.form);
    }
    dir._registered = true;
    dir.form.statusChanged.subscribe(function () {
        dir.changeDetector.detectChanges();
    });
}
var inbuiltAccessor = [
    CheckboxEventBinder,
    DefaultEventBinder,
    RadioEventBinder,
    SelectEventBinder,
    NumberEventBinder,
    RangeEventBinder
];
function getValueAccessor(valueAccessors) {
    var inbuilt = null, custom = null;
    valueAccessors.forEach(function (accessorInstance) {
        if (inbuiltAccessor.includes(accessorInstance.constructor)) {
            if (inbuilt) {
                errorBuilder('found multiple inbuilt valueAccessor instance.');
            }
            inbuilt = accessorInstance;
        } else {
            if (custom) {
                errorBuilder('found multiple custom valueAccessor instance.');
            }
            custom = accessorInstance;
        }
    });
    if (custom) {
        return custom;
    }
    return inbuilt;
}
var ModelDirective = function () {
    'use strict';
    function ModelDirective(eventBinder, parentControl, validators) {
        this.eventBinder = getValueAccessor(eventBinder);
        this.fieldControl = new FormFieldControlService();
        this._parentControl = parentControl;
        this._validators = validators;
        this.modelChange = new EventEmitter();
        this._model = null;
    }
    ModelDirective.prototype.didChange = function (changes) {
        if (this._isViewModelChanged(changes)) {
            this.fieldControl.setValue(changes.model, { emitToView: true });
            this._model = changes.model;
        }
    };
    ModelDirective.prototype.modelToViewUpdate = function (value) {
        this.modelChange.emit(value);
    };
    ModelDirective.prototype.didInit = function () {
        setupControl(this.fieldControl, this);
    };
    ModelDirective.prototype.viewDidDestroy = function () {
        this._control = null;
    };
    ModelDirective.prototype._isViewModelChanged = function (changes) {
        return changes.hasOwnProperty('model') && changes.model !== this._model;
    };
    ModelDirective.annotations = {
        selector: 'model',
        DI: [
            VALUE_ACCESSOR,
            {
                optional: true,
                value: 'form',
                tokenName: 'parentControl'
            },
            {
                optional: true,
                tokenName: 'VALIDATORS'
            }
        ],
        props: {
            model: {},
            modelOptions: {},
            name: {}
        },
        events: { 'modelChange': { type: 'emitter' } },
        exportAs: 'jModel',
        dynamicInjectors: true,
        module: 'FormModule'
    };
    return ModelDirective;
}();
var FormRepeaterService = function () {
    'use strict';
    function FormRepeaterService(fields, autoGenerate, validators) {
        FormControlAbstract.call(this, validators);
        this.formFieldControls = [];
        this._defaultfields = fields;
        this._autoSetup(autoGenerate);
        this.updateValueAndStatus();
    }
    FormRepeaterService.prototype = Object.create(FormControlService.prototype);
    FormRepeaterService.prototype.constructor = FormControlAbstract;
    FormRepeaterService.prototype.addField = function (fieldControl) {
        if (fieldControl instanceof FormControlService || fieldControl instanceof FormFieldControlService) {
            this.formFieldControls.push(fieldControl);
        } else if (this._defaultfields) {
            this.formFieldControls.push(new FormControlService(this._defaultfields));
        } else {
            this.formFieldControls.push(new FormFieldControlService(fieldControl));
        }
        this._setupControl(this.formFieldControls[this.formFieldControls.length - 1]);
    };
    FormRepeaterService.prototype.getField = function (index) {
        return this.formFieldControls[index] || null;
    };
    FormRepeaterService.prototype._collectValues = function (enabledOnly) {
        var values = [];
        this.forEachField(function (control) {
            if (enabledOnly && control.enabled || !enabledOnly) {
                values.push(control.value);
            }
        });
        return values;
    };
    FormRepeaterService.prototype.removeField = function (index) {
        var len = this.formFieldControls.length;
        if (!len || len < index)
            return;
        this.formFieldControls[index].destroy();
        this.value.splice(index, 1);
        this.formFieldControls.splice(index, 1);
        this.valueChanges.emit(this.value);
    };
    FormRepeaterService.prototype._autoSetup = function (autoGenerate) {
        if (autoGenerate) {
            while (autoGenerate--) {
                this.addField();
            }
        }
    };
    FormRepeaterService.annotations = {
        static: true,
        module: 'FormModule'
    };
    FormRepeaterService.annotations.instance = FormRepeaterService;
    return FormRepeaterService;
}();
var FormModule = function () {
    'use strict';
    function FormModule() {
    }
    return FormModule;
}();
}),
'dist/http/bundles/jeli-http-module.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'CSRFCookieHeaderService', function(){ return CSRFCookieHeaderService;});
__required.r(exports, 'csrfCookieConfig', function(){ return csrfCookieConfig;});
__required.r(exports, 'HttpCookieManager', function(){ return HttpCookieManager;});
__required.r(exports, 'HttpCSRFModule', function(){ return HttpCSRFModule;});
__required.r(exports, 'HTTP_INTERCEPTORS', function(){ return HTTP_INTERCEPTORS;});
__required.r(exports, 'HttpResponse', function(){ return HttpResponse;});
__required.r(exports, 'HttpRequest', function(){ return HttpRequest;});
__required.r(exports, 'HttpRequestError', function(){ return HttpRequestError;});
__required.r(exports, 'HttpService', function(){ return HttpService;});
__required.r(exports, 'HttpModule', function(){ return HttpModule;});
var utils = __required('node_modules/js-helpers/utils.js');
var serialize = utils['serialize'];
var helpers = __required('node_modules/js-helpers/helpers.js');
var isnull = helpers['isnull'];
var isstring = helpers['isstring'];
var isundefined = helpers['isundefined'];
var isobject = helpers['isobject'];
var inarray = helpers['inarray'];
var core = __required('dist/core/bundles/jeli-core-module.js');
var ProviderToken = core['ProviderToken'];
var InterceptorResolver = core['InterceptorResolver'];
var Subject = core['Subject'];
var ChangeDetector = core['ChangeDetector'];
var __buildOptions = {};
function HttpRequestError(message) {
    this.errorType = null;
    this.message = message;
    this.status = 400;
}
HttpRequestError.prototype.setMessage = function (message) {
    this.message = message;
};
HttpRequestError.prototype.setErrorType = function (type) {
    this.errorType = type;
};
var unsafeHeaders = {
    'Accept-Charset': true,
    'Accept-Encoding': true,
    'Connection': true,
    'Content-Length': true,
    'Cookie': true,
    'Cookie2': true,
    'Content-Transfer-Encoding': true,
    'Date': true,
    'Expect': true,
    'Host': true,
    'Keep-Alive': true,
    'Referer': true,
    'TE': true,
    'Trailer': true,
    'Transfer-Encoding': true,
    'Upgrade': true,
    'User-Agent': true,
    'Via': true
};
function HttpRequest(url, options) {
    if (!options && isobject(url)) {
        options = url;
    }
    this.url = options.url || url;
    this.type = (options.type || 'GET').toLowerCase();
    this.processData = !isundefined(option.processData) ? option.processData : true;
    this.headers = Object.assign({
        'Accept': 'application/json',
        'CONTENT-TYPE': 'application/json'
    }, options.headers || {});
    this.asynchronous = !isundefined(option.asynchronous) ? option.asynchronous : true;
    this.data = options.data || '';
    this.xhrInstance = new XMLHttpRequest();
    this.cache = !isundefined(options.cache) ? options.cache : true;
}
HttpRequest.prototype.progress = function (progressCallback) {
    this.xhrInstance.addEventListener('progress', progressCallback, false);
};
HttpRequest.prototype.setHeaders = function (headers) {
    Object.assign(this.headers, headers);
};
HttpRequest.prototype.processRequest = function () {
    this.processData = false;
    if (!isstring(this.data)) {
        if (this.type === 'get') {
            this.data = serialize(this.data);
        } else {
            this.data = JSON.stringify(this.data);
        }
    }
    if (this.type === 'get') {
        if (this.data) {
            this.url += (/\?/.test(this.url) ? '&' : '?') + this.data;
        }
        if (!this.cache) {
            this.url += (/\?/.test(this.url) ? '&' : '?') + '_=' + Date.now();
        }
    }
};
HttpRequest.prototype.processRequestHeaders = function () {
    for (var name in this.headers) {
        if (unsafeHeaders[name] || /^(Sec-|Proxy-)/.test(name)) {
            throw new Error('Refused to set unsafe header "' + name + '"');
        }
        this.xhrInstance.setRequestHeader(name, this.headers[name]);
    }
};
function HttpResponse(httpRequest) {
    this.status = httpRequest.xhrInstance.status;
    this.readyState = httpRequest.xhrInstance.readyState;
    this.url = httpRequest.url;
    this.data = null;
    this.success = httpRequest.xhrInstance.status >= 200 && httpRequest.xhrInstance.status < 300 || httpRequest.xhrInstance.status == 304 || httpRequest.xhrInstance.status == 0 && httpRequest.xhrInstance.responseText;
    this.headers = Object({
        getResponseHeader: function (name) {
            if (!isobject(name)) {
                return httpRequest.xhrInstance.getResponseHeader(name);
            } else {
                return name.map(httpRequest.xhrInstance.getResponseHeader);
            }
        }
    });
}
var HTTP_INTERCEPTORS = new ProviderToken('interceptors', true);
function parseJSON(response) {
    var content;
    var tError = !!response;
    try {
        content = JSON.parse(response);
    } catch (e) {
        if (tError) {
            throw new Error(e);
        } else {
            content = response;
        }
    }
    return content;
}
function CoreHttp(url, options, changeDetection) {
    var xhrPromise = new Subject();
    var httpRequest = new HttpRequest(url, options);
    var httpError = new HttpRequestError('');
    InterceptorResolver(HTTP_INTERCEPTORS, httpRequest).then(function (request) {
        if (!request) {
            httpError.setMessage('HTTP: Interceptor should return a value');
            return xhrPromise.error(httpError);
        }
        if (changeDetection) {
            changeDetection();
        }
        if (request.processData) {
            request.processRequest();
        }
        sendRequest();
    });
    function respondToReadyState() {
        var response = new HttpResponse(httpRequest);
        if (httpRequest.xhrInstance.readyState == 4) {
            try {
                var data = parseJSON(httpRequest.xhrInstance.responseText);
                xhrPromise.next(data, response);
            } catch (e) {
                xhrPromise.error(httpError);
            }
            xhrPromise.completed();
            changeDetection();
        }
    }
    function attachListener() {
        httpRequest.xhrInstance.addEventListener('load', respondToReadyState);
        httpRequest.xhrInstanceaddEventListener('timeout', handleError);
        httpRequest.xhrInstance.addEventListener('error', handleError);
        httpRequest.xhrInstance.addEventListener('abort', handleError);
        function handleError(e) {
            httpError.setErrorType(e.type);
            xhrPromise.error(httpError);
        }
    }
    function sendRequest() {
        attachListener();
        httpRequest.xhrInstance.open(httpRequest.type, httpRequest.url, httpRequest.asynchronous);
        httpRequest.processRequestHeaders();
        var body = null;
        if (inarray(httpRequest.type, [
                'post',
                'put',
                'delete'
            ])) {
            body = httpRequest.data;
        }
        try {
            httpRequest.xhrInstance.send(body);
        } catch (e) {
            httpError.setMessage(e);
            xhrPromise.error(httpError);
        }
    }
    return xhrPromise;
}
var staticMethods = [
    'put',
    'get',
    'post',
    'request',
    'patch',
    'delete'
];
var HttpService = function () {
    'use strict';
    function HttpService(changeDetector) {
        function http(url, options) {
            return CoreHttp(url, options, changeDetector);
        }
        function generateOptionalHTTP(type) {
            http[type] = function (url, data, headers) {
                var options = {};
                options.type = type;
                options.data = data;
                options.headers = headers || {};
                return http(url, options);
            };
        }
        staticMethods.forEach(generateOptionalHTTP);
        return http;
    }
    HttpService.annotations = {
        DI: [ChangeDetector],
        module: 'HttpModule'
    };
    return HttpService;
}();
var HttpModule = function () {
    'use strict';
    function HttpModule() {
    }
    return HttpModule;
}();
var HttpCookieManager = function () {
    'use strict';
    function HttpCookieManager() {
        Object.defineProperty(this, 'cookies', {
            get: function () {
                return this._getAll();
            }
        });
    }
    ;
    HttpCookieManager.prototype.set = function (name, value, options) {
        if (!isnull(value) && !isundefined(value)) {
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            var expires = '';
            var isNumberExpires = typeof options.expires === 'number';
            if (options.expires && (isNumberExpires || options.expires.toUTCString)) {
                var date;
                if (isNumberExpires) {
                    date = new Date();
                    date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString();
            }
            var path = options.path ? '; path=' + options.path : '';
            var domain = options.domain ? '; domain=' + options.domain : '';
            var secure = options.secure ? '; secure' : '';
            document.cookie = [
                name,
                '=',
                encodeURIComponent(value),
                expires,
                path,
                domain,
                secure
            ].join('');
        }
    };
    HttpCookieManager.prototype.get = function (name) {
        return this.cookies[name];
    };
    HttpCookieManager.prototype._getAll = function () {
        var cookieValues = {};
        var cookies = (document.cookie || '').split(';');
        if (cookies.length) {
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim().split('=');
                cookieValues[cookie[0]] = cookie[1];
            }
        }
        return cookieValues;
    };
    HttpCookieManager.annotations = { module: 'HttpCSRFModule' };
    return HttpCookieManager;
}();
var csrfCookieConfig = {
    cookieName: 'X-CSRF-TOKEN',
    headerName: 'X-CSRF-TOKEN'
};
var CSRFCookieHeaderService = function () {
    'use strict';
    function CSRFCookieHeaderService(cookieManager) {
        this.resolve = function (httpRequest, next) {
            var cookie = cookieManager.get(csrfCookieConfig.cookieName);
            if (cookie) {
                var tokenHeader = {};
                tokenHeader[csrfCookieConfig.headerName] = cookie;
                httpRequest.setHeaders(tokenHeader);
            }
            next();
        };
    }
    CSRFCookieHeaderService.annotations = { DI: [HttpCookieManager] };
    return CSRFCookieHeaderService;
}();
var HttpCSRFModule = function () {
    'use strict';
    function HttpCSRFModule() {
    }
    HttpCSRFModule.setCookieValue = function (config) {
        Object.assign(csrfCookieConfig, config);
    };
    HTTP_INTERCEPTORS.register({ useClass: CSRFCookieHeaderService }, true);
    return HttpCSRFModule;
}();
}),
'dist/router/bundles/jeli-router-module.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'RouterInitService', function(){ return RouterInitService;});
__required.r(exports, 'JIntentContainer', function(){ return JIntentContainer;});
__required.r(exports, 'ViewIntentService', function(){ return ViewIntentService;});
__required.r(exports, 'OpenIntent', function(){ return OpenIntent;});
__required.r(exports, 'jViewFn', function(){ return jViewFn;});
__required.r(exports, 'PathStrategyService', function(){ return PathStrategyService;});
__required.r(exports, 'AbstractStrategy', function(){ return AbstractStrategy;});
__required.r(exports, 'HashStrategyService', function(){ return HashStrategyService;});
__required.r(exports, 'RouteInterceptorInstance', function(){ return RouteInterceptorInstance;});
__required.r(exports, 'getHref', function(){ return getHref;});
__required.r(exports, 'parseUrl', function(){ return parseUrl;});
__required.r(exports, 'getRequiredRoute', function(){ return getRequiredRoute;});
__required.r(exports, 'getParentRoute', function(){ return getParentRoute;});
__required.r(exports, 'routeConfig', function(){ return routeConfig;});
__required.r(exports, 'staticRoutePrefix', function(){ return staticRoutePrefix;});
__required.r(exports, 'ROUTE_INTERCEPTOR', function(){ return ROUTE_INTERCEPTOR;});
__required.r(exports, 'ViewHandler', function(){ return ViewHandler;});
__required.r(exports, 'LocationService', function(){ return LocationService;});
__required.r(exports, 'WebStateService', function(){ return WebStateService;});
__required.r(exports, 'GoFn', function(){ return GoFn;});
__required.r(exports, 'RouterModule', function(){ return RouterModule;});
var utils = __required('node_modules/js-helpers/utils.js');
var unserialize = utils['unserialize'];
var extend = utils['extend'];
var core = __required('dist/core/bundles/jeli-core-module.js');
var APP_BOOTSTRAP = core['APP_BOOTSTRAP'];
var InterceptorResolver = core['InterceptorResolver'];
var EventManager = core['EventManager'];
var errorBuilder = core['errorBuilder'];
var ProviderToken = core['ProviderToken'];
var DOMHelper = core['DOMHelper'];
var ComponentFactoryResolver = core['ComponentFactoryResolver'];
var __buildOptions = {};
var ROUTE_INTERCEPTOR = new ProviderToken('RouteInterceptor', true);
var staticRoutePrefix = '^';
var routeConfig = Object({
    isLoaded: false,
    intentFallback: null,
    useHash: true,
    fallback: {
        url: '/',
        name: '.'
    },
    restoreOnRefresh: true
});
var _unregistered = {};
var $stateCollection = {};
var $intentCollection = {};
function createRoute(url) {
    var replacer = '/([\\w-@!.]+)', paramsMapping = [];
    url = url.replace(/([\/]|)([:]|)+(\w+)/g, function (match) {
        if (match.indexOf(':') > -1) {
            paramsMapping.push(match.split(':')[1]);
            return replacer;
        }
        return match;
    });
    return {
        params: {},
        paramsMapping: paramsMapping,
        regexp: new RegExp('(?:' + url.split('?')[0] + ')$')
    };
}
function addViewMatcher(view, route, routeElements) {
    if (route.component) {
        route.views = route.views || {};
        if (!route.views[view]) {
            route.views[view] = {};
        }
        var isStringComp = typeof route.component === 'string';
        if (isStringComp && !routeElements || routeElements && !routeElements.has(route.component)) {
            errorBuilder('Invalid route configuration, missing view component', 0, route);
        }
        route.views[view] = isStringComp ? routeElements.get(route.component) : route.component;
        delete route.component;
    }
}
function generateRoute(route, requireParent, routeElements) {
    if (route.isIntent) {
        $intentCollection[route.name] = route;
        return;
    } else if ($stateCollection[route.name]) {
        console.info('[Route] Duplicate route found: ' + route.name + ', skipping to use existing');
        return;
    } else if (!route.views && !route.component) {
        console.info('[Router] missing view configuration for: ' + route.name);
        return;
    }
    route.route = createRoute(route.url || '^');
    var _views = Object.keys(route.views || {});
    if (requireParent) {
        var parentRoute = $stateCollection[route.parent];
        route.views = route.views || {};
        for (var view in parentRoute.views) {
            if (view !== route.targetView) {
                route.views[view] = parentRoute.views[view];
            } else if (!route.views[view]) {
                addViewMatcher(view, route, routeElements);
            }
        }
        if (route.targetView && !route.views[route.targetView]) {
            addViewMatcher(route.targetView, route, routeElements);
        }
        route.route.parent = parentRoute;
        if (!_views.length && !route.abstract) {
            _views = parentRoute.route.$$views;
        }
        parentRoute = null;
        delete route.parent;
    }
    if (!route.url) {
        route.abstract = true;
    }
    if (route.fallback) {
        routeConfig.fallback = {
            name: route.name,
            url: route.url
        };
    }
    route.route.$$views = _views;
    $stateCollection[route.name] = route;
    if (_unregistered.hasOwnProperty(route.name)) {
        _unregistered[route.name].forEach(function (uName) {
            setupRoutes($stateCollection[uName], routeElements);
        });
        delete _unregistered[route.name];
    }
}
function setupRoutes(route, routeElements) {
    var requireParent = route.hasOwnProperty('parent');
    if (!route.name && route.url) {
        route.name = route.url.replace(/[/:]/g, _ => _ == '/' ? '.' : '');
    }
    if (!route.parent) {
        addViewMatcher(route.targetView || staticRoutePrefix, route, routeElements);
    }
    if (requireParent && !$stateCollection.hasOwnProperty(route.parent)) {
        if (!_unregistered.hasOwnProperty(route.parent)) {
            _unregistered[route.parent] = [];
        }
        _unregistered[route.parent].push(route.name);
        $stateCollection[route.name] = route;
        return this;
    }
    generateRoute(route, requireParent, routeElements);
    function addChildren(config) {
        if (config.children) {
            config.children.forEach(function (childConfig) {
                if (childConfig.name) {
                    var name = childConfig.name;
                    childConfig.name = [
                        config.name,
                        name
                    ].join('.');
                    childConfig.url = '/' + config.name + (childConfig.url || '/' + name);
                    childConfig.parent = config.name;
                    generateRoute(childConfig, true, routeElements);
                    addChildren(childConfig);
                } else {
                    errorBuilder('unregistered child route in parent<' + config.name + '>, name is required:' + JSON.stringify(childConfig));
                }
            });
        }
    }
    addChildren(route);
}
function getParentRoute(name) {
    var parent = $stateCollection[name], fnd;
    do {
        if (parent) {
            fnd = parent;
        }
    } while (parent = parent.route.parent);
    return fnd;
}
function getRouteObj(routeName) {
    var queryParam = routeName.split('?');
    for (var prop in $stateCollection) {
        if (!$stateCollection[prop].abstract && $stateCollection[prop].route.regexp.test(queryParam[0])) {
            return $stateCollection[prop];
        }
    }
    return $stateCollection[routeConfig.fallback.name] || null;
}
function getRequiredRoute(routeName, params) {
    var queryParam = routeName.split('?'), foundRoute = getRouteObj(routeName);
    if (foundRoute) {
        foundRoute.route.params = extend({}, foundRoute.params || {}, params || {});
        if (foundRoute.route.paramsMapping.length && !params) {
            foundRoute.route.regexp.exec(queryParam[0]).splice(1).forEach(function (val, inc) {
                var isNumber = Number(val);
                foundRoute.route.params[foundRoute.route.paramsMapping[inc]] = !isNaN(isNumber) ? isNumber : val;
            });
        }
        if (queryParam[1]) {
            foundRoute.route.params = extend(foundRoute.route.params, unserialize(queryParam[1]));
        }
    }
    return foundRoute;
}
function parseUrl(href, params) {
    return href.replace(/\:(\w)+/g, function (index, key) {
        var param = index.split(':')[1];
        return param in params ? params[param] : '';
    });
}
function getHref(stateName, params) {
    var state = $stateCollection[stateName];
    if (state) {
        if (state.route.paramsMapping.length && !params) {
            throw new Error(stateName + ' requires parameter, but none was provided');
        }
        return parseUrl(state.url, params);
    }
    return routeConfig.fallback.url;
}
function RouteInterceptorInstance(route, path, redirectMethod) {
    this.name = route.name;
    this.path = path;
    this.data = route.data;
    this.params = route.params;
    this.originalUrl = route.url;
    this.locals = {};
    this.redirect = redirectMethod;
}
var ViewHandler = function () {
    'use strict';
    function ViewHandler() {
        this.viewsHolder = new Map();
        this.currentView = staticRoutePrefix;
        this.stateInProgress;
        this.stateQueue = [];
        this.$stateTransitioned = false;
        this.currentState = '';
        this.previousState = '';
        this._pendingViewStack = new Map();
        this._resolvedParents = {};
    }
    ViewHandler.prototype.setViewReference = function (elementRef, ref) {
        this.viewsHolder.set(ref, {
            element: elementRef,
            compiledWith: null,
            cleanUp: function () {
                if (this.compiledWith) {
                    DOMHelper.remove(this.compiledWith);
                } else {
                    this.element.children.forEach(DOMHelper.remove);
                }
            }
        });
        return this;
    };
    ViewHandler.prototype.getView = function (view, name) {
        var _viewHolder = this.viewsHolder.get(view);
        return name ? _viewHolder[name] : _viewHolder;
    };
    ViewHandler.prototype.compileViewTemplate = function (viewComponent, viewObjectInstance) {
        viewObjectInstance.cleanUp();
        if (viewComponent) {
            ComponentFactoryResolver(viewComponent, viewObjectInstance.element, function (componentRef) {
                viewObjectInstance.compiledWith = componentRef;
            });
        }
    };
    ViewHandler.prototype.removeViews = function (_views) {
        var _this = this;
        this.viewsHolder.forEach(function (view, key) {
            if (!_views.includes(key)) {
                view.cleanUp();
                _this.viewsHolder.delete(key);
            }
        });
    };
    ViewHandler.prototype.getCurrentView = function (_route) {
        var _views = [], mView = Object.keys(_route.views).concat();
        this._resolvedParents[_route.name] = true;
        if (_route.route.parent && !this._resolvedParents[_route.route.parent.name]) {
            var parentRoute = getParentRoute(_route.route.parent.name);
            this._resolvedParents[parentRoute.name] = true;
            this._resolvedParents[_route.route.parent.name] = true;
            return mView;
        }
        if (_route.targetView) {
            if (this.viewsHolder.has(_route.targetView)) {
                return _views.concat(_route.targetView);
            }
            return mView;
        }
        _views = _views.concat(_route.route.$$views);
        this.removeViews(_views);
        mView = null;
        return _views;
    };
    ViewHandler.prototype.resolveViews = function (route) {
        var _views = this.getCurrentView(route);
        for (var idx = 0; idx < _views.length; idx++) {
            var view = _views[idx] || staticRoutePrefix;
            var viewObj = route.views ? route.views[view] : route;
            var viewObjectInstance = this.getView(view);
            if (viewObjectInstance) {
                this.compileViewTemplate(viewObj, viewObjectInstance);
            } else {
                this._pendingViewStack.set(view, viewObj);
            }
        }
    };
    ViewHandler.prototype.destroy = function (ref) {
        if (!this.viewsHolder.has(ref))
            return;
        this.viewsHolder.get(ref).cleanUp();
        this.viewsHolder.delete(ref);
    };
    ViewHandler.annotations = {
        name: 'ViewHandler',
        module: 'RouterModule'
    };
    return ViewHandler;
}();
function AbstractStrategy(locationService) {
    this.originalState = null;
    this.locationService = locationService;
    this.isReplaceState = false;
    this.stateChanged = false;
}
AbstractStrategy.prototype.getBaseHref = function () {
};
AbstractStrategy.prototype.path = function () {
};
var HashStrategyService = function () {
    'use strict';
    function HashStrategyService(locationService) {
        AbstractStrategy.call(this, locationService);
        var _this = this;
        window.addEventListener('hashchange', function (e) {
            var locHash = _this.path();
            if (!locHash.length || !locationService.changed(locHash) || _this.isReplaceState) {
                _this.isReplaceState = false;
                return;
            }
            locationService.go(locHash);
        }, false);
    }
    HashStrategyService.prototype = Object.create(AbstractStrategy.prototype);
    HashStrategyService.prototype.constructor = AbstractStrategy;
    HashStrategyService.prototype.replace = function () {
        var state = this.locationService.getState();
        this.isReplaceState = true;
        if (state.hash !== state.previousHash || stateChanged) {
            location.replace(state.hash);
            this.originalState = state.currentLocation;
        }
    };
    HashStrategyService.prototype.pushState = function (path) {
        history.pushState(null, '', '#' + path);
    };
    HashStrategyService.prototype.path = function () {
        return location.hash.replace(/^#/, '');
    };
    HashStrategyService.annotations = { static: true };
    HashStrategyService.annotations.instance = HashStrategyService;
    return HashStrategyService;
}();
var PathStrategyService = function () {
    'use strict';
    function PathStrategyService(locationService) {
        AbstractStrategy.call(this, locationService);
    }
    PathStrategyService.prototype = Object.create(AbstractStrategy.prototype);
    PathStrategyService.prototype.constructor = AbstractStrategy;
    PathStrategyService.annotations = { static: true };
    PathStrategyService.annotations.instance = PathStrategyService;
    return PathStrategyService;
}();
var LocationService = function () {
    'use strict';
    function LocationService(viewHandler) {
        var _this = this;
        this.viewHandler = viewHandler;
        this.strategy = routeConfig.useHash ? new HashStrategyService(this) : new PathStrategyService(this);
        this.lastVisited = '';
        this.previousState = null;
        this.locationState = null;
        this.previous = null;
        this.currentRoute = Object({ route: { params: {} } });
        this.events = new EventManager(function (e, route, path) {
            if ('$webRouteStart' === e.type) {
                var navigatedPath = route.name === routeConfig.fallback.name ? route.url : path;
                var lastTransitionQueue = viewHandler.stateQueue.pop();
                if (lastTransitionQueue) {
                    navigatedPath = lastTransitionQueue[0];
                    route = getRequiredRoute.apply(null, lastTransitionQueue);
                    viewHandler.stateQueue.length = 0;
                }
                if (_this.changed(navigatedPath)) {
                    _this.events.dispatch('$webRouteSuccess', route, _this.currentRoute);
                    _this.currentRoute = route;
                    _this.strategy.pushState(navigatedPath);
                    viewHandler.resolveViews(route);
                } else {
                    _this.events.dispatch('$webRouteError', route);
                }
                _this.viewHandler.stateInProgress = false;
                _this.lastVisited = navigatedPath;
            }
        });
        this.events.add('view.render', function (ev, viewName) {
            if (viewHandler._pendingViewStack.has(viewName)) {
                viewHandler.compileViewTemplate(viewHandler._pendingViewStack.get(viewName), viewHandler.viewsHolder.get(viewName));
                viewHandler._pendingViewStack.delete(viewName);
            }
        });
    }
    LocationService.prototype.changed = function (path) {
        return this.lastVisited !== path;
    };
    LocationService.prototype.replace = function (path) {
        if (!this.locationState && !path)
            return;
        this.locationState = {
            state: 'replaceState',
            path: path || this.locationState.previous,
            previous: this.previousState,
            current: this.lastVisited
        };
        this.previous = this.locationState.path;
    };
    LocationService.prototype.getState = function (state) {
        if (state) {
            this.locationState = state;
            return;
        }
        return this.locationState;
    };
    LocationService.prototype.search = function (query) {
        return window.location.search = query;
    };
    LocationService.prototype.go = function (path, params) {
        var _this = this;
        if (!path) {
            return false;
        }
        this.viewHandler.previousState = this.viewHandler.currentState;
        this.viewHandler.currentState = path;
        if (this.viewHandler.stateInProgress) {
            if (this.viewHandler.currentState === this.viewHandler.previousState) {
                return;
            }
            this.viewHandler.stateQueue.push([
                path,
                params
            ]);
            this.viewHandler.$stateTransitioned = true;
        } else if (this.changed(path)) {
            var route = getRequiredRoute(path, params);
            if (route) {
                this.viewHandler.stateInProgress = true;
                var routeInstance = new RouteInterceptorInstance(route, path, function (path, params) {
                    path = getHref(path, params);
                    if (_this.changed(path)) {
                        _this.go(path, params);
                    }
                });
                InterceptorResolver(ROUTE_INTERCEPTOR, routeInstance).then(function () {
                    _this.events.dispatch('$webRouteStart', route, path);
                });
            } else {
                this.events.dispatch('$webRouteNotFound', {
                    path: path,
                    params: params,
                    message: 'unable to resolve route'
                });
            }
        }
    };
    LocationService.prototype.getRootUrl = function () {
        var rootUrl = document.location.protocol + '//' + (document.location.hostname || document.location.host);
        if (document.location.port || false) {
            rootUrl += ':' + document.location.port;
        }
        rootUrl += '/';
        return rootUrl;
    };
    LocationService.annotations = {
        DI: [
            ViewHandler,
            HashStrategyService,
            PathStrategyService
        ]
    };
    return LocationService;
}();
var WebStateService = function () {
    'use strict';
    function WebStateService(locationService) {
        this.locationService = locationService;
        Object.defineProperty(this, 'state', {
            get: function () {
                return this.locationService.currentRoute;
            }
        });
    }
    ;
    WebStateService.prototype.go = function (path, params, targetWindow) {
        path = getHref(path, params);
        if (!targetWindow) {
            this.locationService.go(path, params);
        } else {
            window.open(path, targetWindow);
        }
    };
    WebStateService.prototype.href = function (stateName, params) {
        return getHref(stateName, params);
    };
    WebStateService.prototype.getParam = function (name) {
        return this.locationService.currentRoute.route.params[name];
    };
    WebStateService.prototype.getUrlParams = function () {
        return Object(this.locationService.currentRoute.route.params);
    };
    WebStateService.annotations = {
        DI: [LocationService],
        module: 'RouterModule'
    };
    return WebStateService;
}();
var GoFn = function () {
    'use strict';
    function GoFn(webStateService) {
        this.params = {};
        this.clickHandler = function () {
            webStateService.go(this.pathName, this.params);
        };
    }
    GoFn.annotations = {
        selector: 'go',
        DI: [WebStateService],
        props: {
            pathName: { value: 'go' },
            params: {}
        },
        events: {
            'click': {
                type: 'event',
                value: [{
                        type: 'call',
                        args: [],
                        fn: 'clickHandler'
                    }]
            }
        },
        module: 'RouterModule'
    };
    return GoFn;
}();
var jViewFn = function () {
    'use strict';
    function jViewFn(viewHandler, locationService, elementRef) {
        this.ref = staticRoutePrefix;
        this.didInit = function () {
            viewHandler.setViewReference(elementRef, this.ref);
            locationService.events.dispatch('view.render', this.ref);
        };
        this.viewDidDestroy = function () {
            viewHandler.destroy(this.ref);
        };
    }
    jViewFn.annotations = {
        selector: 'router-view',
        DI: [
            ViewHandler,
            LocationService,
            {
                optional: true,
                tokenName: 'ElementRef'
            }
        ],
        props: { ref: {} },
        module: 'RouterModule'
    };
    return jViewFn;
}();
var ViewIntentService = function () {
    'use strict';
    function ViewIntentService() {
        this._currentOpenIntent = new Map();
        this.intentContainer = null;
        this.$currentIntent = '';
    }
    ViewIntentService.prototype.openIntent = function (intentName, params) {
        if (this.$currentIntent === intentName) {
            return;
        }
        var intentConfig = $intentCollection[intentName];
        if (intentConfig) {
            if (!this._currentOpenIntent.has(intentName)) {
                var _this = this;
                this.$currentIntent = intentName;
                this._currentOpenIntent.set(intentName, {
                    element: null,
                    route: {
                        name: intentName,
                        params: params,
                        data: intentConfig.data
                    }
                });
                ComponentFactoryResolver(intentConfig.view.component, this.intentContainer, function (componentRef) {
                    DOMHelper.insertAfter(componentRef, componentRef.nativeElement, _this.intentContainer.nativeElement);
                    var config = _this._currentOpenIntent.get(intentName);
                    config.element = componentRef;
                    componentRef.class.add('view-intent');
                    _this.intentContainer.children.add(componentRef);
                    _this.transitIntent(intentName, intentConfig.transition || 50);
                }, true);
            } else {
                this.transitIntent(intentName, 50);
            }
        }
        ;
    };
    ViewIntentService.prototype.closeIntent = function () {
        var allIntents = [];
        var current = this.$currentIntent;
        this._currentOpenIntent.forEach(function (intent, key) {
            intent.element && intent.element.nativeElement.removeAttribute('style');
            if (current === key) {
                DOMHelper.remove(intent.element);
            } else {
                allIntents.push(key);
            }
        });
        this._currentOpenIntent.delete(current);
        this.$currentIntent = allIntents.pop();
        if (this.$currentIntent) {
            this.transitIntent(this.$currentIntent, 70);
        }
    };
    ViewIntentService.prototype.$destroyAllIntent = function () {
        this._currentOpenIntent.forEach(function (intentView) {
            DOMHelper.remove(intentView.element);
        });
        this.$currentIntent = undefined;
        this._currentOpenIntent.clear();
    };
    ViewIntentService.prototype.animate = function (elementRef, style, timer) {
        var start = null;
        function step(timestamp) {
            if (!start)
                start = timestamp;
            var progress = timestamp - start;
            if (progress < timer) {
                window.requestAnimationFrame(step);
            } else {
                elementRef.style(style);
            }
        }
        if (!elementRef) {
            return;
        }
        window.requestAnimationFrame(step);
    };
    ViewIntentService.prototype.removeIntent = function (intentName) {
        this._currentOpenIntent.remove(intentName);
    };
    ViewIntentService.prototype.transitIntent = function (intentName, timer) {
        var intentView = this._currentOpenIntent.get(intentName);
        if (intentView) {
            this.$currentIntent = intentName;
            this.hideAllIntent();
            this.animate(intentView.element, { transform: 'translateX(0%)' }, timer || 100);
        }
    };
    ViewIntentService.prototype.getIntentView = function (intentName) {
        return this._currentOpenIntent.get(intentName);
    };
    ViewIntentService.prototype.hideAllIntent = function (removeIntent) {
        this._currentOpenIntent.forEach(function (intentView) {
            intentView.element && intentView.element.nativeElement.removeAttribute('style');
        });
    };
    ViewIntentService.prototype.getCurrentIntent = function () {
        return (this.getIntentView(this.$currentIntent) || {}).route;
    };
    ViewIntentService.annotations = {
        name: 'viewIntent',
        module: 'RouterModule'
    };
    return ViewIntentService;
}();
var OpenIntent = function () {
    'use strict';
    function OpenIntent(elementRef, viewIntent) {
        this.params = {};
        this._open = null;
        this.clickHandler = function () {
            if (this.splitWhere.length) {
                this.params = elementRef.context.evaluate(this.splitWhere.join(':'));
            }
            viewIntent.openIntent(this.pathName, this.params);
        };
        Object.defineProperty(this, 'open', {
            set: function (value) {
                this.splitWhere = (value || '').split(':');
                this.pathName = this.splitWhere.shift();
                this._open = value;
            },
            get: function () {
                return this._open;
            }
        });
    }
    OpenIntent.annotations = {
        selector: 'open',
        DI: [
            {
                optional: true,
                tokenName: 'ElementRef'
            },
            ViewIntentService
        ],
        props: {
            open: {},
            params: {}
        },
        events: {
            'event': {
                type: 'click',
                value: [{
                        type: 'call',
                        args: [],
                        fn: 'clickHandler'
                    }]
            }
        },
        module: 'RouterModule'
    };
    return OpenIntent;
}();
var JIntentContainer = function () {
    'use strict';
    function JIntentContainer(viewIntent, ElementRef) {
        viewIntent.intentContainer = ElementRef;
        this.viewDidDestroy = function () {
            viewIntent.$destroyAllIntent();
        };
    }
    JIntentContainer.annotations = {
        selector: 'router-intent-container',
        DI: [
            ViewIntentService,
            {
                optional: true,
                tokenName: 'ElementRef'
            }
        ],
        module: 'RouterModule'
    };
    return JIntentContainer;
}();
function RouterInitService(locationService) {
    routeConfig.isLoaded = true;
    var path = '';
    if (routeConfig.restoreOnRefresh) {
        if (routeConfig.useHash) {
            path = (location.hash || '').replace('#', '');
        } else {
            path = location.pathname;
        }
    }
    locationService.go(path || routeConfig.fallback.url);
}
var RouterModule = function () {
    'use strict';
    function RouterModule() {
    }
    RouterModule.setRoutes = function (routes, elements) {
        if (Array.isArray(routes)) {
            routes.forEach(function (route) {
                setupRoutes(route, elements);
            });
        } else {
            setupRoutes(routes, elements);
        }
    };
    APP_BOOTSTRAP.register({
        DI: [LocationService],
        factory: RouterInitService
    }, true);
    return RouterModule;
}();
}),
'viewers/Todo/src/app/components/calculator/calculator.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'CalculatorComponent', function(){ return CalculatorComponent;});
var core = __required('dist/core/bundles/jeli-core-module.js');
/** compiled CalculatorComponent **/
var CalculatorComponent = function(){
"use strict";

function CalculatorComponent() {
    this.clear();
}
CalculatorComponent.prototype.getNumber = function (v) {
    console.log(v);
    if (this.waitForSecondNumber) {
        this.currentNumber = v;
        this.waitForSecondNumber = false;
    } else {
        this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
    }
};
CalculatorComponent.prototype.getDecimal = function () {
    if (!this.currentNumber.includes('.')) {
        this.currentNumber += '.';
    }
};
CalculatorComponent.prototype.doCalculation = function (op, secondOp) {
    switch (op) {
    case '+':
        return this.firstOperand += secondOp;
    case '-':
        return this.firstOperand -= secondOp;
    case '*':
        return this.firstOperand *= secondOp;
    case '/':
        return this.firstOperand /= secondOp;
    case '=':
        return secondOp;
    }
};
CalculatorComponent.prototype.getOperation = function (op) {
    if (this.firstOperand === null) {
        this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
        const result = this.doCalculation(this.operator, Number(this.currentNumber));
        this.currentNumber = String(result);
        this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
};
CalculatorComponent.prototype.clear = function () {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
};

CalculatorComponent.annotations = {
    selector: 'app-calculator',
    exposeView: true,
    module: 'AppModule'
};

CalculatorComponent.view = /** jeli template **/ function(compiler){ return function(viewRef){ var $tmpl={}; return compiler.compile([{"type":"element","name":"div","index":0,"isc":false,"attr":{"class":"calculator"},"children":[{"type":"element","name":"input","index":0,"isc":false,"attr":{"type":"text","class":"calculator-screen","disabled":""},"attr$":{"value":{"prop":"currentNumber","once":false}}},{"type":"element","name":"div","index":1,"isc":false,"attr":{"class":"calculator-keys"},"children":[{"type":"element","name":"button","index":0,"isc":false,"attr":{"type":"button","class":"operator","value":"+"},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"+"}],"fn":"getOperation"}]}],"children":[{"type":"text","ast":["+"]}]},{"type":"element","name":"button","index":1,"isc":false,"attr":{"type":"button","class":"operator","value":"-"},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"-"}],"fn":"getOperation"}]}],"children":[{"type":"text","ast":["-"]}]},{"type":"element","name":"button","index":2,"isc":false,"attr":{"type":"button","class":"operator","value":"*"},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"*"}],"fn":"getOperation"}]}],"children":[{"type":"text","ast":["×"]}]},{"type":"element","name":"button","index":3,"isc":false,"attr":{"type":"button","class":"operator","value":"/"},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"/"}],"fn":"getOperation"}]}],"children":[{"type":"text","ast":["÷"]}]},{"type":"element","name":"button","index":4,"isc":false,"attr":{"type":"button","value":7},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"7"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["7"]}]},{"type":"element","name":"button","index":5,"isc":false,"attr":{"type":"button","value":8},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"8"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["8"]}]},{"type":"element","name":"button","index":6,"isc":false,"attr":{"type":"button","value":9},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"9"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["9"]}]},{"type":"element","name":"button","index":7,"isc":false,"attr":{"type":"button","value":4},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"4"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["4"]}]},{"type":"element","name":"button","index":8,"isc":false,"attr":{"type":"button","value":5},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"5"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["5"]}]},{"type":"element","name":"button","index":9,"isc":false,"attr":{"type":"button","value":6},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"6"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["6"]}]},{"type":"element","name":"button","index":10,"isc":false,"attr":{"type":"button","value":1},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"1"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["1"]}]},{"type":"element","name":"button","index":11,"isc":false,"attr":{"type":"button","value":2},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"2"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["2"]}]},{"type":"element","name":"button","index":12,"isc":false,"attr":{"type":"button","value":3},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"3"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["3"]}]},{"type":"element","name":"button","index":13,"isc":false,"attr":{"type":"button","value":0},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"0"}],"fn":"getNumber"}]}],"children":[{"type":"text","ast":["0"]}]},{"type":"element","name":"button","index":14,"isc":false,"attr":{"type":"button","class":"decimal","value":"."},"events":[{"name":"click","value":[{"type":"call","args":[],"fn":"getDecimal"}]}],"children":[{"type":"text","ast":["."]}]},{"type":"element","name":"button","index":15,"isc":false,"attr":{"type":"button","class":"all-clear","value":"all-clear"},"events":[{"name":"click","value":[{"type":"call","args":[],"fn":"clear"}]}],"children":[{"type":"text","ast":["AC"]}]},{"type":"element","name":"button","index":16,"isc":false,"attr":{"type":"button","class":"equal-sign","value":"="},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"="}],"fn":"getOperation"}]}],"children":[{"type":"text","ast":["="]}]}]}]}], viewRef);}}(new core["ViewParser"].JSONCompiler)/** template loader **/
return CalculatorComponent;
}();

}),
'viewers/Todo/src/app/components/route-form-page/route-form-page.element.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'RouterPageElement', function(){ return RouterPageElement;});
var common = __required('dist/common/bundles/jeli-common-module.js');
var AppModule = __required('viewers/Todo/src/app/app.module.js');
var core = __required('dist/core/bundles/jeli-core-module.js');
var form = __required('dist/form/bundles/jeli-form-module.js');
var FormControlService = form['FormControlService'];
/** compiled RouterPageElement **/
var RouterPageElement = function(){
"use strict";

function RouterPageElement() {
    this.testForm = new FormControlService({
        radio: {
            value: 1,
            validators: { required: true }
        },
        input: {
            value: undefined,
            disabled: true,
            validators: {
                required: true,
                minlength: 6
            }
        },
        textarea: {
            value: 'Testing the default value',
            disabled: false,
            validators: {
                required: true,
                minLength: 6,
                maxLength: 100
            }
        },
        checkbox: {
            value: true,
            validators: { requiredTrue: true }
        },
        select: {
            value: ['select_2'],
            validators: { required: true }
        },
        file: { validators: { required: true } },
        range: {
            value: 50,
            eventType: 'blur',
            validators: { maxlength: 90 }
        },
        number: { value: 500 },
        country: { value: 'Tuvalu' },
        job: { value: 1 }
    });
}
RouterPageElement.prototype.didInit = function () {
    this.testForm.patchValue({ number: 10 });
    this.testForm.addField('personalInfo', new FormControlService({
        firstName: {
            value: null,
            validators: { required: true }
        },
        lastName: {
            value: null,
            validators: { required: true }
        },
        age: {
            value: null,
            validators: { required: true }
        }
    }));
    console.log(this.testForm);
};

RouterPageElement.annotations = {
    selector: 'router-form-page',
    DI: [
        FormControlService
    ],
    exposeView: true,
    module: 'AppModule'
};

RouterPageElement.view = /** jeli template **/ function(compiler){ return function(viewRef){ var $tmpl={}; return compiler.compile([{"type":"element","name":"div","index":0,"isc":false,"props":{"formControl":{"prop":"testForm"}},"providers":[form["FormControlDirective"]],"children":[{"type":"element","name":"div","index":0,"isc":false,"children":[{"type":"element","name":"input","index":0,"isc":false,"attr":{"type":"radio"},"props":{"formField":"radio","value":1},"providers":[form["RadioEventBinder"],form["FormFieldDirective"]]},{"type":"text","ast":[" Yes"]},{"type":"element","name":"br","index":2,"isc":false},{"type":"element","name":"input","index":3,"isc":false,"attr":{"type":"radio"},"props":{"formField":"radio","value":0},"providers":[form["RadioEventBinder"],form["FormFieldDirective"]]},{"type":"text","ast":[" No"]},{"type":"element","name":"br","index":5,"isc":false},{"type":"element","name":"input","index":6,"isc":false,"attr":{"type":"checkbox"},"props":{"formField":"checkbox"},"providers":[form["CheckboxEventBinder"],form["FormFieldDirective"]]},{"type":"element","name":"br","index":7,"isc":false}]},{"type":"element","name":"textarea","index":1,"isc":false,"props":{"formField":"textarea"},"providers":[form["DefaultEventBinder"],form["FormFieldDirective"]]},{"type":"element","name":"br","index":2,"isc":false},{"type":"element","name":"input","index":3,"isc":false,"attr":{"type":"text","minlength":5,"maxlength":10,"required":true},"props":{"formField":"input"},"providers":[form["DefaultEventBinder"],form["FormFieldDirective"]]},{"type":"element","name":"br","index":4,"isc":false},{"type":"element","name":"input","index":5,"isc":false,"attr":{"type":"file"},"props":{"formField":"file"},"providers":[form["DefaultEventBinder"],form["FormFieldDirective"]]},{"type":"element","name":"br","index":6,"isc":false},{"type":"element","name":"input","index":7,"isc":false,"attr":{"type":"range","id":"a"},"props":{"formField":"range"},"providers":[form["RangeEventBinder"],form["FormFieldDirective"]]},{"type":"element","name":"br","index":8,"isc":false},{"type":"element","name":"input","index":9,"isc":false,"attr":{"type":"number","id":"b"},"props":{"formField":"number"},"providers":[form["NumberEventBinder"],form["FormFieldDirective"]]},{"type":"element","name":"br","index":10,"isc":false},{"type":"element","name":"select","index":11,"isc":false,"props":{"formField":"select"},"providers":[form["SelectEventBinder"],form["FormFieldDirective"]],"attr":{"multiple":""},"children":[{"type":"element","name":"option","index":0,"isc":false,"attr":{"value":"select_1"},"children":[{"type":"text","ast":["Select 1"]}]},{"type":"element","name":"option","index":1,"isc":false,"attr":{"value":"select_2"},"children":[{"type":"text","ast":["Select 2"]}]},{"type":"element","name":"option","index":2,"isc":false,"attr":{"value":"select_3"},"children":[{"type":"text","ast":["Select 3"]}]}]},{"type":"element","name":"div","index":12,"isc":false,"props":{"formControl":{"prop":{"type":"call","args":[{"type":"raw","value":"personalInfo"}],"fn":"getField","namespaces":["testForm"]}}},"providers":[form["FormControlDirective"]],"children":[{"type":"element","name":"div","index":0,"isc":false,"children":[{"type":"element","name":"input","index":0,"isc":false,"attr":{"type":"text","class":"form-control"},"props":{"formField":"firstName"},"providers":[form["DefaultEventBinder"],form["FormFieldDirective"]]}]},{"type":"element","name":"input","index":1,"isc":false,"attr":{"type":"text","class":"form-control"},"props":{"formField":"lastName"},"providers":[form["DefaultEventBinder"],form["FormFieldDirective"]]},{"type":"element","name":"input","index":2,"isc":false,"attr":{"type":"number","class":"form-control"},"props":{"formField":"age"},"providers":[form["NumberEventBinder"],form["FormFieldDirective"]]}]},{"type":"element","name":"div","index":13,"isc":false,"children":[{"type":"element","name":"button","index":0,"isc":false,"attr$":{"disabled":{"prop":{"type":"bin","left":{"type":"una","ops":"!","args":["testForm","valid"]},"ops":"&&","right":{"type":"raw","value":true}},"once":false}},"attr":{"class":"btn btn-primary"},"children":[{"type":"text","ast":["Submit"]}]}]},{"type":"element","name":"item-list","index":14,"isc":true,"attr":{"value":[1,2,3]},"props":{"formValue":{"prop":["testForm","value"]}},"providers":[AppModule["ItemList"]],"children":[],"templates":{"place":[{"type":"element","name":"pre","index":0,"isc":false,"children":[{"type":"text","ast":["${0}",[["${0}",{"prop":"value","args":[],"fns":[common["jsonFilterFn"]]}]],false]}]}]}},{"type":"element","name":"pre","index":15,"isc":false,"children":[{"type":"text","ast":["${0}",[["${0}",{"prop":["testForm","value"],"args":[[3]],"fns":[common["jsonFilterFn"]]}]],false]}]}]}], viewRef);}}(new core["ViewParser"].JSONCompiler)/** template loader **/
return RouterPageElement;
}();

}),
'viewers/Todo/src/app/app.routes.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'AppRouteModule', function(){ return AppRouteModule;});
__required.r(exports, 'validatorService', function(){ return validatorService;});
__required.r(exports, 'InitializeApp', function(){ return InitializeApp;});
var RouterPageElement = __required('viewers/Todo/src/app/components/route-form-page/route-form-page.element.js', 'RouterPageElement');
var CalculatorComponent = __required('viewers/Todo/src/app/components/calculator/calculator.js', 'CalculatorComponent');
var core = __required('dist/core/bundles/jeli-core-module.js');
var INITIALIZERS = core['INITIALIZERS'];
var router = __required('dist/router/bundles/jeli-router-module.js');
var WebStateService = router['WebStateService'];
var ROUTE_INTERCEPTOR = router['ROUTE_INTERCEPTOR'];
var RouterModule = router['RouterModule'];
function InitializeApp(webStateService) {
    webStateService.events.listener('$webRouteStart', console.log);
}/** compiled validatorService **/
var validatorService = function(){
"use strict";

function validatorService() {
    this.resolve = function (route, locals, next) {
        next();
    };
}

validatorService.annotations = {};
return validatorService;
}();
/** compiled AppRouteModule **/
var AppRouteModule = function(){
"use strict";

function AppRouteModule() {
    RouterModule.setRoutes([
        {
            name: 'calculator',
            url: '/calculator',
            views: { '@content': CalculatorComponent }
        },
        {
            name: 'welcome',
            url: '/',
            fallback: true,
            views: { '@content': RouterPageElement }
        }
    ]);
}

INITIALIZERS.register({factory: InitializeApp, DI: [WebStateService]}, true);

ROUTE_INTERCEPTOR.register({useClass: validatorService}, true);

AppRouteModule.fac = function(){/** bootstrap module**/[
    RouterModule
].forEach(function(m){ if(m.fac){ m.fac()} m()});
};
return AppRouteModule;
}();

}),
'viewers/Todo/src/app/components/test-place.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'TestPlaceElement', function(){ return TestPlaceElement;});
var common = __required('dist/common/bundles/jeli-common-module.js');
var core = __required('dist/core/bundles/jeli-core-module.js');
/** compiled TestPlaceElement **/
var TestPlaceElement = function(){
"use strict";

function TestPlaceElement() {
    this.test = false;
    this.html = '';
}

TestPlaceElement.annotations = {
    selector: 'test-place',
    props: {
        options: {}
    },
    module: 'AppModule'
};

TestPlaceElement.view = /** jeli template **/ function(compiler){ return function(viewRef){ var $tmpl={}; return compiler.compile([{"type":"element","name":"div","index":0,"isc":false,"children":[{"type":"place","name":"#fragment","index":0,"isc":false,"selector":["attr","modal-body"]}]},{"type":"comment","name":"#comment","text":"for","templates":{"for":{"type":"element","name":"div","index":1,"isc":false,"context":{"opt":"$context"},"props":{"jClass":{"prop":["opt","class"]}},"providers":[common["ClassDirective"]],"children":[{"type":"element","name":"p","index":0,"isc":false,"children":[{"type":"text","ast":["${0}",[["${0}",{"prop":"opt","args":[],"fns":[common["jsonFilterFn"]]}]],false]}]}]}},"props":{"forIn":{"prop":"options"}},"providers":[common["ForDirective"]]}], viewRef);}}(new core["ViewParser"].JSONCompiler)/** template loader **/
return TestPlaceElement;
}();

}),
'viewers/Todo/src/app/components/item-list/item-list.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'ItemList', function(){ return ItemList;});
var common = __required('dist/common/bundles/jeli-common-module.js');
var core = __required('dist/core/bundles/jeli-core-module.js');
/** compiled ItemList **/
var ItemList = function(){
"use strict";

function ItemList() {
}

ItemList.annotations = {
    selector: 'item-list',
    props: {
        value: {},
        formValue: {}
    },
    module: 'AppModule'
};

ItemList.view = /** jeli template **/ function(compiler){ return function(viewRef){ var $tmpl={}; return compiler.compile([{"type":"place","name":"#fragment","index":0,"isc":false},{"type":"element","name":"#fragment","index":1,"isc":false,"props":{"switch":{"prop":["formValue","personalInfo","firstName"]}},"providers":[common["SwitchDirective"]],"children":[{"type":"comment","name":"#comment","text":"switchDefault","templates":{"switchDefault":{"type":"element","name":"h5","index":0,"isc":false,"children":[{"type":"text","ast":["Invalid form"]}]}},"providers":[common["SwitchDefaultDirective"]]},{"type":"comment","name":"#comment","text":"switchCase","templates":{"switchCase":{"type":"element","name":"h5","index":1,"isc":false,"children":[{"type":"text","ast":["Valid form"]}]}},"props":{"switchCase":{"prop":{"type":"raw","value":"test"}}},"providers":[common["SwitchCaseDirective"]]}]}], viewRef);}}(new core["ViewParser"].JSONCompiler)/** template loader **/
return ItemList;
}();

}),
'viewers/Todo/src/app/app.component.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'AppRootElement', function(){ return AppRootElement;});
var datetime = __required('dist/common/bundles/jeli-common-datetime-module.js');
var AppModule = __required('viewers/Todo/src/app/app.module.js');
var common = __required('dist/common/bundles/jeli-common-module.js');
var form = __required('dist/form/bundles/jeli-form-module.js');
var core = __required('dist/core/bundles/jeli-core-module.js');
var http = __required('dist/http/bundles/jeli-http-module.js');
var HttpService = http['HttpService'];
/** compiled AppRootElement **/
var AppRootElement = function(){
"use strict";

function AppRootElement(http) {
    this.valueBinding = 3;
    this.test = true;
    this.error = false;
    this.keys = [2];
    this.removeKey = function (key) {
        this.keys.splice(key, 1);
    };
    this.selectItemTest = [];
    for (var i = 0; i < 100; i++) {
        this.selectItemTest.push({
            label: 'test_' + i,
            value: i
        });
    }
    this.selectedItem = this.selectItemTest[30];
    this.pageHeading = 'My First Todo App';
    this.todos = [];
    this.removeItemCount = 0;
    this.counter = 0;
    this.todoDescription = '';
    this.range = function (start, end) {
        var value = [];
        while (end > start) {
            value.push(start);
            start++;
        }
        return value;
    };
    this.didInit = function () {
        console.log(this);
    };
    this.print = function (list) {
        console.log(list);
    };
}
AppRootElement.prototype.addTodo = function () {
    if (this.todoDescription) {
        this.todos.push({
            description: this.todoDescription,
            details: '',
            done: false
        });
        this.todoDescription = '';
    }
};
AppRootElement.prototype.removeTodo = function (index) {
    console.log('removing Todo:', index);
    if (this.todos[index]) {
        this.todos.splice(index, 1);
    }
};
AppRootElement.prototype.markAsRemoved = function (done, todo) {
    todo.done = done;
    if (done) {
        this.removeItemCount++;
    } else if (this.removeItemCount > 0) {
        this.removeItemCount--;
    }
};
AppRootElement.prototype.generateMock = function (total) {
    var data = [];
    for (var i = 0; i < total; i++) {
        data.push({
            description: 'Test_From_' + this.counter++,
            done: false,
            details: ''
        });
    }
    this.todos = data;
    data = null;
};

AppRootElement.annotations = {
    selector: 'app-root',
    DI: [
        HttpService
    ],
    module: 'AppModule'
};

AppRootElement.view = /** jeli template **/ function(compiler){ return function(viewRef){ var $tmpl={"fallback":{"type":"element","name":"#fragment","index":6,"isc":false,"refId":"fallback","children":[{"type":"comment","name":"#comment","text":"for","templates":{"for":{"type":"element","name":"div","index":0,"isc":false,"context":{"i":"$context"},"children":[{"type":"text","ast":["Testing_${0}",[["${0}",{"prop":"i"}]],false]}]}},"props":{"forIn":{"prop":{"type":"raw","value":[0,1,2,3]}}},"providers":[common["ForDirective"]]}]}}; return compiler.compile([{"type":"element","name":"nav","index":0,"isc":false,"attr":{"class":"navbar navbar-inverse navbar-static-top"},"children":[{"type":"element","name":"div","index":0,"isc":false,"attr":{"class":"container-fluid"},"children":[{"type":"element","name":"div","index":0,"isc":false,"attr":{"class":"navbar-header"},"children":[{"type":"element","name":"a","index":0,"isc":false,"attr":{"class":"navbar-brand","href":"#"},"children":[{"type":"text","ast":[" Todo Application "]}]}]}]}]},{"type":"element","name":"input","index":3,"isc":false,"attr":{"type":"checkbox"},"props":{"model":{"prop":"test"}},"providers":[form["CheckboxEventBinder"],form["ModelDirective"]],"events":[{"name":"modelChange","value":[{"type":"asg","left":"test","right":"$event"}],"custom":true}],"attr$":{"checked":{"prop":true,"once":true}},"vc":[{"name":"model","type":"jModel","value":"input"},"app-root"]},{"type":"comment","name":"#comment","text":"if","templates":{"if":{"type":"element","name":"div","index":4,"isc":false,"children":[{"type":"text","ast":["I am Test Condition"]}]},"ifElse":$tmpl.fallback},"props":{"if":{"prop":"test"},"ifElse":"fallback"},"providers":[common["IfDirective"]]},{"type":"element","name":"div","index":5,"isc":false,"props":{"jClass":{"prop":{"type":"ite","test":"test","cons":{"type":"raw","value":"visible"},"alt":{"type":"raw","value":"hidden"}}}},"providers":[common["ClassDirective"]],"children":[{"type":"text","ast":["Class test"]}]},{"type":"element","name":"div","index":7,"isc":false,"props":{"switch":{"prop":{"type":"una","ops":"!","args":"test"}}},"providers":[common["SwitchDirective"]],"children":[{"type":"comment","name":"#comment","text":"switchCase","templates":{"switchCase":{"type":"element","name":"h5","index":0,"isc":false,"children":[{"type":"text","ast":["I am ${0} case",[["${0}",{"prop":"test"}]],false]}]}},"props":{"switchCase":{"prop":true}},"providers":[common["SwitchCaseDirective"]]},{"type":"comment","name":"#comment","text":"switchDefault","templates":{"switchDefault":{"type":"element","name":"test-place","index":1,"isc":true,"providers":[AppModule["TestPlaceElement"]],"children":[],"templates":{"place":[{"type":"text","ast":["I am default switch element"]}]}}},"providers":[common["SwitchDefaultDirective"]]}]},{"type":"comment","name":"#comment","text":"for","templates":{"for":{"type":"element","name":"div","index":8,"isc":false,"context":{"item":"$context"},"attr":{"class":"annother"},"children":[{"type":"text","ast":["${0}",[["${0}",{"prop":"item","args":[],"fns":[common["jsonFilterFn"]]}]],true]}]}},"props":{"forIn":{"prop":{"type":"raw","value":[{"test":2}]},"args":[[{"type":"obj","expr":{"test":2}}]],"fns":[common["FilterPipe"]]},"forTrackBy":"trackByFn"},"providers":[common["ForDirective"]]},{"type":"text","ast":["Selected: ${0}",[["${0}",{"prop":"valueBinding"}]],false]},{"type":"element","name":"select","index":10,"isc":false,"props":{"model":{"prop":"valueBinding"}},"providers":[form["SelectEventBinder"],form["ModelDirective"]],"events":[{"name":"modelChange","value":[{"type":"asg","left":"valueBinding","right":"$event"}],"custom":true}],"children":[{"type":"comment","name":"#comment","text":"for","templates":{"for":{"type":"element","name":"option","index":0,"isc":false,"props":{"option":"","value":{"prop":"opt","once":false}},"providers":[form["OptionDirective"]],"context":{"opt":"$context"},"children":[{"type":"text","ast":["${0}",[["${0}",{"prop":"opt"}]],true]}]}},"props":{"forIn":{"prop":{"type":"raw","value":[1,2,3,4,5,6]}}},"providers":[common["ForDirective"]]}]},{"type":"element","name":"br","index":12,"isc":false},{"type":"text","ast":[" Selected: ${0}",[["${0}",{"prop":"valueBinding2","args":[],"fns":[common["jsonFilterFn"]]}]],false]},{"type":"element","name":"select","index":14,"isc":false,"props":{"model":{"prop":"valueBinding2"}},"providers":[form["SelectEventBinder"],form["ModelDirective"]],"events":[{"name":"modelChange","value":[{"type":"asg","left":"valueBinding2","right":"$event"}],"custom":true}],"attr":{"multiple":""},"children":[{"type":"element","name":"option","index":0,"isc":false,"attr":{"value":"select_1"},"children":[{"type":"text","ast":["Select 1"]}]},{"type":"element","name":"option","index":1,"isc":false,"attr":{"value":"select_2"},"children":[{"type":"text","ast":["Select 2"]}]},{"type":"element","name":"option","index":2,"isc":false,"attr":{"value":"select_3"},"children":[{"type":"text","ast":["Select 3"]}]}]},{"type":"element","name":"p","index":16,"isc":false,"children":[{"type":"text","ast":["© ${0} FrontendOnly. All Rights Reserved ",[["${0}",{"prop":{"type":"raw","value":""},"args":[[{"type":"raw","value":"YYYY"}]],"fns":[datetime["dateTimeFilterFN"]]}]],false]}]}], viewRef);}}(new core["ViewParser"].JSONCompiler)/** template loader **/
return AppRootElement;
}();

}),
'viewers/Todo/src/app/app.module.js': (function(module, exports, __required, global){
"use strict";
__required.r(exports, 'TestPlaceElement', function(){ return TestPlaceElement;});
__required.r(exports, 'ItemList', function(){ return ItemList;});
__required.r(exports, 'AppModule', function(){ return AppModule;});
var RouterPageElement = __required('viewers/Todo/src/app/components/route-form-page/route-form-page.element.js', 'RouterPageElement');
var CalculatorComponent = __required('viewers/Todo/src/app/components/calculator/calculator.js', 'CalculatorComponent');
var AppRootElement = __required('viewers/Todo/src/app/app.component.js', 'AppRootElement');
var ItemList = __required('viewers/Todo/src/app/components/item-list/item-list.js', 'ItemList');
var TestPlaceElement = __required('viewers/Todo/src/app/components/test-place.js', 'TestPlaceElement');
var AppRouteModule = __required('viewers/Todo/src/app/app.routes.js', 'AppRouteModule');
var http = __required('dist/http/bundles/jeli-http-module.js');
var HttpModule = http['HttpModule'];
var form = __required('dist/form/bundles/jeli-form-module.js');
var FormModule = form['FormModule'];
var datetime = __required('dist/common/bundles/jeli-common-datetime-module.js');
var DateTimeModule = datetime['DateTimeModule'];
var common = __required('dist/common/bundles/jeli-common-module.js');
var CommonModule = common['CommonModule'];
/** compiled AppModule **/
var AppModule = function(){
"use strict";

function AppModule() {
}

AppModule.rootElement = AppRootElement;

AppModule.fac = function(){/** bootstrap module**/[
    CommonModule,
    DateTimeModule,
    FormModule,
    HttpModule,
    AppRouteModule
].forEach(function(m){ if(m.fac){ m.fac()} m()});
};
return AppModule;
}();

})
}, this));