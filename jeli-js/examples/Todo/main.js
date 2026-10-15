!function(factory, __required) {
    'use strict';
    /** trigged factory **/ 
    factory(__required);
}(function(__required) {
    const core = __required(1145);
const bootStrapApplication = core.bootStrapApplication;
const AppModule = __required(1178, 'AppModule');
bootStrapApplication(AppModule);
}, (function(modules,  self) { 
    'use strict';
    const OD = Object.defineProperty,
    dep_name = 'jeli_chunk_loaded',
    buildArgs = {"buildTime":1784303339631,"version":"1.0.0","baseHref":"","assetURL":"","production":false},
    installedModules = {buildArgs},
    pendingLazyLoad = [];
    OD(self, dep_name, {
        set: (value) => {
            Object.assign(modules, value || {})
        }
    });

    function __required(moduleId, property) {
        'use strict';
        if (!installedModules.hasOwnProperty(moduleId)){
            /** create a new ref **/
            installedModules[moduleId] = { exports: true };
            try {
                modules[moduleId](installedModules[moduleId], installedModules[moduleId], __required, self);
            } catch (e) {
                delete installedModules[moduleId];
                throw e;
            }
        }
        
        if (installedModules[moduleId].exports && installedModules[moduleId].exports.__esModule){
            return property ? installedModules[moduleId].exports[property] : installedModules[moduleId].exports;
        }

        return property ? installedModules[moduleId][property] : installedModules[moduleId];
    }

    function loadScript(mid){
        const scriptElement = document.createElement('script');
        const path = [buildArgs.assetURL || '', mid, ".js"].join('')
        scriptElement.src = path;
        scriptElement.type = "module";
        scriptElement.async = true;
        scriptElement.charset = "utf-8";
        scriptElement.timeout = 120;
        (document.getElementsByTagName('head')[0]).appendChild(scriptElement);
        if (0 > scriptElement.src.indexOf(window.location.origin + "/")) {
            scriptElement.crossOrigin = "use-credentials"
        }
        return scriptElement;
    }

    __required.r = function(context, name, value) {
        if (!context.hasOwnProperty(name)) {
            context[name] = value;
        }
    };

    __required.l = (mid) => new Promise((resolve, reject) => {
        if (pendingLazyLoad.includes(mid)) return;
        if (installedModules[mid]) {
            resolve(installedModules[mid]);
        } else {
            pendingLazyLoad.push(mid);
            const scriptElement = loadScript(mid);
            scriptElement.onreadystatechange = scriptElement.onload = function() {
                const state = scriptElement.readyState;
                if ((!state || /loaded|complete/.test(state))) {
                    resolve(__required(mid));
                    pendingLazyLoad.splice(pendingLazyLoad.indexOf(mid), 1);
                    scriptElement.parentNode.removeChild(scriptElement);
                }
            };
            scriptElement.onerror = function() {
                pendingLazyLoad.splice(pendingLazyLoad.indexOf(mid), 1);
                scriptElement.parentNode.removeChild(scriptElement);
                reject(new Error('Failed to load lazy module: ' + mid));
            };
        }
    });

    return __required;
})( /** JELI DEPENDECY HUB **/ {1126 : (module, exports, __required, global) => {
"use strict";
exports.default = function (str) {
    return typeof str === 'string' && new String(str) instanceof String;
}
},
1127 : (module, exports, __required, global) => {
"use strict";
exports.default = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
},
1128 : (module, exports, __required, global) => {
"use strict";
const isarray = __required(1127, 'default');
const isstring = __required(1126, 'default');
exports.default = function (needle, haystack) {
    return (isstring(haystack) || isarray(haystack)) && haystack.indexOf(needle) > -1;
}
},
1129 : (module, exports, __required, global) => {
"use strict";
exports.default = function (bool) {
    return Object.prototype.toString.call(bool) === '[object Boolean]';
}
},
1130 : (module, exports, __required, global) => {
"use strict";
exports.default = function (val) {
    return typeof val !== 'undefined';
}
},
1131 : (module, exports, __required, global) => {
"use strict";
exports.default = function (n) {
    return parseFloat(n) > 0;
}
},
1132 : (module, exports, __required, global) => {
"use strict";
exports.default = function (val) {
    if (val && typeof val === 'object') {
        return Object.values(val).length < 1;
    }
    return !val || val === '';
}
},
1133 : (module, exports, __required, global) => {
"use strict";
function equal(a, b) {
    if (a === b)
        return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor)
            return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (!equal(a[i], b[i]))
                    return false;
            return true;
        }
        if (a.constructor === RegExp)
            return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
            return false;
        for (i = length; i-- !== 0;) {
            if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
                return false;
        }
        for (i = length; i-- !== 0;) {
            var key = keys[i];
            if (!equal(a[key], b[key]))
                return false;
        }
        return true;
    }
    return a !== a && b !== b;
}
;
exports.default = equal;
},
1134 : (module, exports, __required, global) => {
"use strict";
exports.default = function (n) {
    return Number(n) === n && n % 1 !== 0;
}
},
1135 : (module, exports, __required, global) => {
"use strict";
exports.default = function (fn) {
    return typeof fn === 'function';
}
},
1136 : (module, exports, __required, global) => {
"use strict";
exports.default = function (str) {
    return str && typeof str === 'string' && '{['.indexOf(str.charAt(0)) > -1 && '}]'.indexOf(str.charAt(str.length - 1)) > -1;
}
},
1137 : (module, exports, __required, global) => {
"use strict";
exports.default = function (val) {
    return null === val;
}
},
1138 : (module, exports, __required, global) => {
"use strict";
exports.default = function (n) {
    return Number(n) === n && n % 1 === 0;
}
},
1139 : (module, exports, __required, global) => {
"use strict";
exports.default = function (obj) {
    return typeof obj === 'object' && obj instanceof Object && Object.prototype.toString.call(obj) === '[object Object]';
}
;
},
1140 : (module, exports, __required, global) => {
"use strict";
exports.default = function (val) {
    return typeof val === 'undefined';
}
},
1141 : (module, exports, __required, global) => {
"use strict";
exports.default = function (list, item, index) {
    if (index >= list.length) {
        list.push(item);
    } else {
        list.splice(index, 0, item);
    }
}
},
1142 : (module, exports, __required, global) => {
"use strict";
exports.default = function (list, index) {
    if (index >= list.length - 1) {
        return list.pop();
    } else {
        return list.splice(index, 1)[0];
    }
}
},
1143 : (module, exports, __required, global) => {
"use strict";
function moveItemInArray(arr, from, to) {
    if (!(arr instanceof Array))
        return;
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}
exports.default = moveItemInArray;
},
1144 : (module, exports, __required, global) => {
"use strict";

exports.inarray = __required(1128, 'default');
exports.isarray = __required(1127, 'default');
exports.isboolean = __required(1129, 'default');
exports.isdefined = __required(1130, 'default');
exports.isdouble = __required(1131, 'default');
exports.isempty = __required(1132, 'default');
exports.isequal = __required(1133, 'default');
exports.isfloat = __required(1134, 'default');
exports.isfunction = __required(1135, 'default');
exports.isjsonstring = __required(1136, 'default');
exports.isnull = __required(1137, 'default');
exports.isnumber = __required(1138, 'default');
exports.isobject = __required(1139, 'default');
exports.isstring = __required(1126, 'default');
exports.isundefined = __required(1140, 'default');
exports.addToArray = __required(1141, 'default');
exports.removeFromArray = __required(1142, 'default');
exports.moveItemInArray = __required(1143, 'default');
},
1145 : (module, exports, __required, global) => {
"use strict";
const helpers = __required(1144);
const isnumber = helpers.isnumber;
const isarray = helpers.isarray;
const isnull = helpers.isnull;
const isundefined = helpers.isundefined;
const isboolean = helpers.isboolean;
const inarray = helpers.inarray;
const moveItemInArray = helpers.moveItemInArray;
const addToArray = helpers.addToArray;
const removeFromArray = helpers.removeFromArray;
const isstring = helpers.isstring;
const isequal = helpers.isequal;
const isobject = helpers.isobject;
const isfunction = helpers.isfunction;
const __buildOptions = {
    'buildTime': 1784303339206,
    'version': '1.0.0',
    'baseHref': '',
    'assetURL': '',
    'production': false
};
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
resolveClosureRef.factory = function (token, localInjector) {
    var args = resolveDeps(token.DI, localInjector);
    return function () {
        return resolveClosureRef(token.factory).apply(null, args);
    };
};
function noop(callback) {
    return callback || function () {
    };
}
;
var existingInstance = new Map();
var singletonRegistry = null;
function enableSingletonTracking() {
    singletonRegistry = new Map();
}
function disableSingletonTracking() {
    singletonRegistry = null;
}
function getSingletonRegistry() {
    return singletonRegistry;
}
class ProviderToken {
    static getToken(resolved, token) {
        return resolved ? token : AutoWire(token);
    }
    constructor(tokenName, multiple, provide) {
        this.tokenRecords = [];
        this._persists = true;
        this._pending = [];
        this._resolved = false;
        this.tokenName = tokenName;
        this.multiple = multiple;
        if (provide) {
            this.register(provide, true);
        }
    }
    register(value, persist) {
        if (this.multiple) {
            if (this._resolved) {
                this._pending.push(value);
                return;
            } else {
                this.tokenRecords.push(value);
            }
        } else {
            this.tokenRecords = value;
        }
        this._persists = persist;
        this._resolved = false;
    }
    resolve() {
        if (this._resolved && this._persists) {
            if (this._pending.length) {
                this.tokenRecords.push.apply(this.tokenRecords, this._pending.map(record => ProviderToken.getToken(false, record)));
                this._pending.length = 0;
            }
            return this.tokenRecords;
        }
        ;
        let token = null;
        try {
            if (this.multiple) {
                token = this.tokenRecords.map(record => ProviderToken.getToken(this._resolved, record));
            } else {
                token = ProviderToken.getToken(this._resolved, this.tokenRecords);
            }
            this.tokenRecords = !this._persists ? [] : token;
            this._resolved = this._persists;
        } catch (e) {
            errorBuilder(`error while resolving ${ this.tokenName }`);
        }
        return token;
    }
}
function Inject(dep, localInjector) {
    if (!dep)
        return null;
    if (dep.instance) {
        return dep.instance;
    } else if (dep instanceof ProviderToken) {
        return dep.resolve();
    } else if (localInjector && localInjector.has(dep.tokenName)) {
        return localInjector.get(dep);
    } else if (isfunction(dep)) {
        if (!dep.ctors) {
            return resolveClosureRef(dep);
        }
        var instance = dep.ctors.instance;
        if (!instance) {
            instance = AutoWire(resolveClosureRef(dep), localInjector);
            if (!dep.ctors.noSingleton) {
                dep.ctors.instance = instance;
                if (singletonRegistry)
                    singletonRegistry.set(dep, instance);
            }
        }
        return instance;
    }
    return null;
}
;
function AutoWire(constructorFN, localInjector, callback) {
    if (isfunction(constructorFN)) {
        var deps = resolveDeps(constructorFN.ctors && constructorFN.ctors.DI, localInjector);
        var result = null;
        if ('Reflect' in window) {
            result = Reflect.construct(constructorFN, deps);
        } else {
            var protos = Object.create(constructorFN.prototype);
            var result = constructorFN.apply(protos, deps) || protos;
        }
        if (existingInstance.has(constructorFN)) {
            existingInstance.set(constructorFN, result);
        }
        if (isfunction(callback)) {
            return callback(result);
        }
        return result;
    }
    constructorFN = resolveTokenBase(constructorFN, localInjector);
    return constructorFN;
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
        else if (reference.ctors) {
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
class AbstractInjectorInstance {
    constructor(injector) {
        this.injectors = injector || {};
    }
    has(injectorToken) {
        return this.injectors.hasOwnProperty(injectorToken);
    }
    set(tokenName, value) {
        this.injectors[tokenName] = value;
    }
    get(injectorToken) {
        return this.injectors[injectorToken];
    }
    destroy() {
        this.injectors = null;
    }
}
class TemplateRef {
    constructor(templates) {
        this.createElement = function (parentNode, viewContainer, context) {
            return jitBuilder.compile(templates, parentNode, viewContainer, context);
        };
        this.getContext = function () {
            return templates.context;
        };
        this.forEach = function (selector, callback) {
            const tmplCallback = tmpl => callback(isfunction(tmpl) ? tmpl() : tmpl);
            if (typeof templates == 'function')
                return templates(selector, tmplCallback);
            if (templates.hasOwnProperty(selector)) {
                templates[selector].forEach(tmplCallback);
            }
        };
    }
    static factory(node, templateId, silent) {
        const templates = node.internal_getDefinition('templates');
        if (!templates || !templates.hasOwnProperty(templateId)) {
            if (!silent)
                errorBuilder('No templates Defined #' + templateId);
            return null;
        }
        const template = templates[templateId] || templates;
        return new TemplateRef(typeof template === 'function' ? template(templateId) : template);
    }
    static reflect(elementRef, nodeAst, callback) {
        return context => callback(jitBuilder[`$${ nodeAst.type || 1 }`](nodeAst, elementRef, null, context));
    }
    static templatesCompiler(templates, asNative) {
        const childrenNodesLen = asNative ? templates.length : 0;
        const templateTypes = {
            place: (placeSelector, callback) => {
                const children = Array.from(selector.children).splice(0, childrenNodesLen);
                if (placeSelector != '@') {
                    children = children.filter(ele => !ele.classList.has(placeSelector) || ele.id != placeSelector || ele.nodeName != placeSelector || !ele.hasAttribute(placeSelector));
                }
                children.forEach(callback);
                childrenNodesLen -= children.length;
            }
        };
        return type => templateTypes[type];
    }
}
const staticInjectionToken = {
    ElementRef: 'ElementRef',
    TemplateRef: 'TemplateRef',
    ContentData: 'ContentData',
    changeDetector: 'changeDetector',
    ViewRef: 'ViewRef',
    ParentRef: 'ParentRef',
    VALIDATORS: 'VALIDATORS',
    QueryList: 'QueryList',
    Function: 'Function',
    HostRef: 'HostRef',
    HTMLElement: 'HTMLElement',
    ContentHostRef: 'ContentHostRef',
    HostElement: 'HostElement'
};
class staticInjectionTokenHandlers {
    static TemplateRef(context) {
        return TemplateRef.factory(context.injectors.ElementRef, context.get({ tokenName: 'Selector' }));
    }
    static changeDetector(context) {
        return context.injectors.ElementRef.changeDetector;
    }
    static ViewRef(context) {
        return new ViewRef(context.injectors.ElementRef);
    }
    static ParentRef(context, dep) {
        if (dep.value) {
            return this.findParentRef(context.injectors.ElementRef.parent, dep);
        }
        return context.injectors.ElementRef.parent.componentInstance;
    }
    static VALIDATORS(context) {
        return this.getValidators(context.injectors.ElementRef);
    }
    static ContentHostRef(context) {
        const componentRef = ComponentRef.get(context.injectors.ElementRef.contentHostRefId);
        return componentRef.componentInstance;
    }
    static HostElement(context) {
        const nativeElement = context.injectors.ElementRef.nativeElement;
        const hRefId = 'jl-' + context.injectors.ElementRef.refId;
        nativeElement.setAttribute(hRefId, '');
        return Object.defineProperty({}, 'nativeElement', {
            get: () => {
                const ele = document.querySelector('[' + hRefId + ']');
                if (ele && nativeElement)
                    nativeElement == null;
                return ele || nativeElement;
            }
        });
    }
    static getValidators(elementRef) {
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
    static findParentRef(parentRef, refInstance) {
        const selector = refInstance.value + (refInstance.type ? ':' + refInstance.type : '');
        if (parentRef && (!parentRef.nodes || !parentRef.nodes.has(selector))) {
            return this.findParentRef(parentRef.parent, refInstance);
        }
        if (!parentRef) {
            return null;
        }
        return parentRef.nodes.get(selector);
    }
}
;
class ComponentInjectors extends AbstractInjectorInstance {
    constructor(elementRef, selector) {
        super(elementRef);
        this.injectors.ElementRef = elementRef;
        this.injectors.Selector = selector;
    }
    has(tokenName) {
        return this.injectors.hasOwnProperty(tokenName) || staticInjectionToken.hasOwnProperty(tokenName);
    }
    destroy() {
        this.injectors.ElementRef = null;
        this.injectors = null;
        this.currentClassAnnotations = null;
    }
    get(dep) {
        if (this.injectors.hasOwnProperty(dep.tokenName))
            return this.injectors[dep.tokenName];
        else if (staticInjectionToken[dep.tokenName])
            return staticInjectionTokenHandlers[dep.tokenName](this, dep);
    }
}
var _collectPromises = null;
function enableLifecyclePromiseTracking() {
    _collectPromises = [];
}
function disableLifecyclePromiseTracking() {
    _collectPromises = null;
}
function drainLifecyclePromises() {
    var pending = _collectPromises || [];
    if (_collectPromises)
        _collectPromises = [];
    return pending;
}
class LifeCycle {
    static lifeCycleConst = {
        willObserve: 0,
        didChange: 1,
        didInit: 2,
        viewDidLoad: 3,
        viewDidDestroy: 4,
        AfterViewLoad: 5
    };
    static lifeCycleKeys = Object.keys(LifeCycle.lifeCycleConst);
    static getContext(elementRef) {
        if (elementRef.hasContext) {
            return elementRef.context;
        } else {
            return (isequal(elementRef.parent.type, 8) && !elementRef.isc ? elementRef : elementRef.parent).context;
        }
    }
    static hash(a, count) {
        count = count || 0;
        if (a === null || a === undefined)
            return count;
        else if (typeof a === 'number')
            count += a;
        else if (typeof a === 'string')
            count += a.length;
        else if (typeof a === 'boolean')
            count += a ? 1 : 0;
        else if (typeof a === 'object' && (a.constructor === Object || a.constructor === Array)) {
            for (const prop in a) {
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
    constructor(componentInstance, elementRef, props) {
        this.componentInstance = componentInstance;
        this.propChanges = null;
        this.registeredProperty = {};
        this.ignoreChecks = [];
        this.always = false;
        this._onDestroy = [];
        this._cycleState = {
            didInit: !!componentInstance.didInit,
            viewDidLoad: !!componentInstance.viewDidLoad,
            viewDidDestroy: !!componentInstance.viewDidDestroy,
            willObserve: !!componentInstance.willObserve,
            didChange: !!componentInstance.didChange,
            afterViewLoad: !!componentInstance.afterViewLoad
        };
        this.trigger(LifeCycle.lifeCycleConst.willObserve);
        if (props)
            this._updateViewBinding(elementRef, props);
        this.trigger(LifeCycle.lifeCycleConst.didInit);
        ObserveUntilDestroyed(elementRef, {
            next: () => {
                if (this.always)
                    this._updateViewBinding(elementRef, props);
                this.trigger(LifeCycle.lifeCycleConst.willObserve);
            },
            done: () => this._cleanUp()
        });
    }
    onDestroy(callback) {
        if (typeof callback == 'function') {
            this._onDestroy.push(callback);
        }
    }
    _updateViewBinding(elementRef, properties) {
        let elementProps = elementRef.internal_getDefinition('props');
        const asNative = elementRef.internal_getDefinition('asNative');
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
        for (const prop in properties) {
            if (this.ignoreChecks.includes(prop))
                continue;
            const item = properties[prop];
            const name = item.value || prop;
            let value;
            if (asNative) {
                this.setValue(prop, elementRef.getProps(prop));
                continue;
            }
            if (elementProps && elementProps.hasOwnProperty(name)) {
                const context = LifeCycle.getContext(elementRef);
                try {
                    const propValue = elementProps[name];
                    if (isobject(propValue)) {
                        if (propValue.prop) {
                            this.always = true;
                            value = typeof propValue.compiledFn === 'function' ? propValue.compiledFn(context, elementRef.parent.componentInstance) : getFilteredTemplateValue(propValue, context, elementRef.parent.componentInstance);
                        } else if (propValue.type == 'raw') {
                            value = propValue.value;
                            this.ignoreChecks.push(prop);
                        }
                    } else {
                        value = getPrimitiveValue(item.type, name, propValue);
                        this.ignoreChecks.push(prop);
                    }
                    this.setValue(prop, value);
                } catch (e) {
                    console.error(e);
                }
            } else if (elementRef.hasAttribute(name)) {
                this.ignoreChecks.push(prop);
                this.setValue(prop, elementRef.attr[name]);
            }
        }
        if (this.propChanges) {
            this.trigger(LifeCycle.lifeCycleConst.didChange, this.propChanges);
            this.propChanges = null;
        }
    }
    setValue(property, value) {
        const hasProp = this.registeredProperty.hasOwnProperty(property);
        const sameValue = isequal(this.componentInstance[property], value);
        if (hasProp && sameValue)
            return;
        if (this.propChanges === null) {
            this.propChanges = {};
        }
        this.registeredProperty[property] = true;
        this.propChanges[property] = value;
        this.componentInstance[property] = value;
    }
    has(cycle) {
        return this._cycleState[cycle] && isfunction(this.componentInstance[cycle]);
    }
    trigger(cycle, args) {
        const cycleId = LifeCycle.lifeCycleKeys[cycle];
        if (this.has(cycleId)) {
            const result = this.componentInstance[cycleId](args);
            if (_collectPromises && result && typeof result.then === 'function') {
                _collectPromises.push(result);
            }
        }
    }
    _cleanUp() {
        this.trigger(LifeCycle.lifeCycleConst.viewDidDestroy);
        while (this._onDestroy.length) {
            this._onDestroy.shift()();
        }
        this.registeredProperty = null;
        this.ignoreChecks.length = 0;
        this.componentInstance = null;
        this.propChanges = null;
    }
}
class ElementCompiler {
    static compile(factory, elementRef, componentInjectors, next) {
        const ctors = factory.ctors;
        const asNative = elementRef.internal_getDefinition('asNative');
        let lifeCycle;
        function ConnectView(componentInstance) {
            const componentRef = ComponentRef.get(elementRef.refId);
            componentRef.componentInstance = componentInstance;
            if (factory.view) {
                try {
                    const renderedElement = factory.view(elementRef);
                    const triggerAndBindCQ = () => {
                        AttachComponentContentQuery(elementRef);
                        lifeCycle.trigger(LifeCycle.lifeCycleConst.viewDidLoad);
                    };
                    if (!asNative) {
                        elementMutationObserver(elementRef.nativeElement, (mutationList, observer) => {
                            triggerAndBindCQ();
                            observer.disconnect();
                        });
                        elementRef.nativeElement.appendChild(renderedElement);
                    } else {
                        if (ctors.useShadowDom) {
                            const shadow = elementRef.nativeElement.attachShadow({ mode: 'open' });
                            shadow.appendChild(renderedElement);
                        } else {
                            elementRef.nativeElement.appendChild(renderedElement);
                        }
                        triggerAndBindCQ();
                    }
                    elementRef.changeDetector.detectChanges();
                } catch (e) {
                    errorBuilder(e);
                }
            }
            lifeCycle.onDestroy(() => {
                componentRef.destroy();
                lifeCycle = null;
            });
            componentRef.changeDetector.detectChanges(true, true);
        }
        function eventsRegistry(componentInstance) {
            const actions = {
                event: name => elementRef.events.push(Object.assign({ name }, ctors.events[name])),
                emitter: name => EventHandler.attachEventEmitter(elementRef, name, componentInstance),
                dispatcher: name => EventHandler.attachEventDispatcher(elementRef, name, componentInstance)
            };
            if (ctors.events) {
                for (const name in ctors.events) {
                    const eventName = ctors.events[name].type;
                    if (actions.hasOwnProperty(eventName)) {
                        actions[eventName](name);
                    }
                }
                if (!factory.view && ctors.asNative || elementRef.internal_getDefinition('fromDOM')) {
                    EventHandler.registerListener(elementRef);
                }
            }
        }
        function registerDirectiveInstance(componentInstance) {
            if (elementRef.isc)
                return;
            elementRef.nodes.set(factory.ctors.exportAs || ctors.selector, componentInstance);
            lifeCycle.trigger(LifeCycle.lifeCycleConst.viewDidLoad);
            lifeCycle.onDestroy(() => elementRef.nodes.delete(ctors.selector));
        }
        wireResolvers(factory.ctors.resolve, componentInjectors);
        AutoWire(factory, componentInjectors, componentInstance => {
            try {
                eventsRegistry(componentInstance);
                lifeCycle = new LifeCycle(componentInstance, elementRef, ctors.props);
                registerDirectiveInstance(componentInstance);
                next(componentInstance);
                if (elementRef.isc)
                    ConnectView(componentInstance);
            } catch (e) {
                errorBuilder(e);
            }
        });
    }
    static resolve(node, nextTick) {
        let inc = 0;
        const componentInjectors = new ComponentInjectors(node);
        function next() {
            const factory = node.providers && node.providers[inc];
            inc++;
            if (factory) {
                componentInjectors.set('Selector', factory.ctors.selector);
                try {
                    ElementCompiler.compile(factory, node, componentInjectors, next);
                } catch (e) {
                    errorBuilder(e);
                }
            } else {
                componentInjectors.destroy();
                nextTick(node);
            }
        }
        next(null);
    }
}
class Observer {
    constructor() {
        this.$notifyInProgress = 0;
        this.bindingIdx = 0;
        this.retry = false;
        this._entries = new Map();
    }
    subscribe(callback) {
        var self = this, bindingIdx = this.bindingIdx++;
        this.retry = true;
        this._entries.set(bindingIdx, {
            handler: callback,
            state: false
        });
        return function () {
            self._entries.delete(bindingIdx);
        };
    }
    observeForKey(key, callback, core) {
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
    }
    notifyAllObservers(model, ignoreCheck) {
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
    }
    destroy() {
        this._entries.clear();
        this.notifyAllObservers = 0;
        this.retry = false;
    }
}
class InternalChangeDetector {
    constructor(context) {
        this._changeDetectorState = 3;
        this.detectChanges = function () {
            if (this._changeDetectorState == 3) {
                tick.apply(null, arguments);
            }
        };
        this.manualCheck = function () {
            tick.call(null, false, true);
        };
        function tick(ignoreChild, ignoreParent) {
            if (!context.observables) {
                return;
            }
            var hasParent = !context.parent || componentDebugContext.has(context.parent);
            if (context.parent && !ignoreParent && hasParent) {
                var parent = componentDebugContext.get(context.parent);
                parent.changeDetector.detectChanges(true);
                triggerChild(parent.child, []);
            }
            context.observables && context.observables.notifyAllObservers(context.componentInstance);
            if (!ignoreChild) {
                triggerChild(context.child, []);
            }
            function triggerChild(children, ignore) {
                for (var refId of children) {
                    if (!ignore.includes(refId) && componentDebugContext.has(refId) && hasParent) {
                        var child = componentDebugContext.get(refId);
                        child.changeDetector.onlySelf();
                    }
                }
            }
        }
        ;
    }
    get status() {
        return this._changeDetectorState;
    }
    onlySelf() {
        this.detectChanges(false, true);
    }
    markAsChecked() {
        this._changeDetectorState = 1;
    }
    markAsUnChecked() {
        this._changeDetectorState = 3;
    }
    markAsOnce() {
        this._changeDetectorState = 2;
    }
    markAsManual() {
        this._changeDetectorState = 4;
    }
}
var componentDebugContext = new Map();
class ComponentRef {
    constructor(refId, context) {
        this.componentRefId = refId;
        this.observables = new Observer();
        this.child = [];
        this.parent = null;
        this.changeDetector = new InternalChangeDetector(this);
        this._componentInstance = null;
        this._context = context || null;
    }
    get context() {
        if (this._context) {
            return this._context;
        }
        return this.componentInstance;
    }
    get componentInstance() {
        if (!this._componentInstance && this.parent && componentDebugContext.has(this.parent)) {
            return componentDebugContext.get(this.parent).componentInstance;
        }
        return this._componentInstance;
    }
    set componentInstance(value) {
        this._componentInstance = value;
    }
    static create(refId, parentId, context) {
        var componentRef = componentDebugContext.get(refId);
        if (!componentRef) {
            componentRef = new ComponentRef(refId, context);
            componentDebugContext.set(refId, componentRef);
        } else {
            componentRef._context = context || null;
        }
        if (componentDebugContext.has(parentId) && parentId != refId) {
            componentRef.parent = parentId;
            componentDebugContext.get(parentId).child.push(refId);
        }
        componentRef = null;
    }
    static get(refId, hostRefId) {
        return componentDebugContext.get(refId) || componentDebugContext.get(hostRefId) || {};
    }
    static has(refId) {
        return componentDebugContext.has(refId);
    }
    removeChild(refId) {
        this.child.splice(this.child.indexOf(refId), 1);
        componentDebugContext.delete(refId);
    }
    updateModel(propName, value) {
        if (isobject(propName)) {
            for (var prop in propName) {
                setModelValue(prop, this.context, propName[name]);
            }
        } else {
            setModelValue(propName, this.context, value);
        }
        this.changeDetector.detectChanges(false, true);
        return this;
    }
    destroy() {
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
    }
}
var $eUID = 1;
var $elementContext = '__jContext__';
class AbstractElementRef {
    constructor(definition, parentRef, context) {
        var localVariables = null;
        this.nativeElement = createElementByType(definition.name, definition.text, definition.fromDOM);
        this.$observers = [];
        this.refId = $eUID++;
        this.children = new QueryList();
        this.parent = parentRef;
        this.hostRefId = parentRef ? parentRef.isc ? parentRef.refId : parentRef.hostRefId || this.refId : this.refId;
        this.contentHostRefId = parentRef ? parentRef.contentHostRefId : null;
        this.tagName = (!definition.fromDOM ? definition.name : this.nativeElement.localName).toLowerCase();
        this.hasContext = !!definition.context || !definition.isc && parentRef && parentRef.hasContext;
        this.type = definition.type;
        this.attr = definition.attr;
        this.isc = definition.isc;
        if (definition.hydrate)
            this._hydrate = true;
        if (definition.providers) {
            this.providers = definition.providers;
            this.nodes = new Map();
        }
        if (definition.ctx$)
            localVariables = createLocalVariables(definition.ctx$, context || parentRef.context, parentRef.componentInstance);
        Object.defineProperties(this, {
            context: {
                get: function () {
                    if (localVariables)
                        return localVariables;
                    if (ComponentRef.has(this.refId))
                        return ComponentRef.get(this.refId).context;
                    return this.parent && this.parent.context;
                },
                set: context => {
                    if (!definition.ctx$)
                        localVariables = context;
                }
            }
        });
        if (11 !== this.nativeElement.nodeType) {
            Object.defineProperty(this.nativeElement, $elementContext, { get: () => this.context });
        }
        this.internal_getDefinition = prop => definition[prop];
    }
    get componentInstance() {
        const hostElement = ComponentRef.get(this.refId, this.hostRefId);
        return hostElement.componentInstance;
    }
    get changeDetector() {
        const hostElement = ComponentRef.get(this.refId, this.hostRefId);
        return hostElement.changeDetector;
    }
    get hostRef() {
        if (this.isc)
            return this;
        return this.parent && this.parent.hostRef;
    }
    get nativeNode() {
        return this.type === 8 ? this.nativeElement : null;
    }
    hasAttribute(name) {
        return this.attr && this.attr.hasOwnProperty(name);
    }
    getAttribute(name) {
        return this.hasAttribute(name) ? this.attr[name] : this.nativeElement.getAttribute(name);
    }
    getProps(prop) {
        return this.nativeElement[prop];
    }
}
class ElementRef extends AbstractElementRef {
    constructor(definition, parent, lcmp) {
        super(definition, parent);
        this.events = new EventHandler((definition.events || []).slice());
        this._lcmp = lcmp;
        if (definition.isc) {
            ComponentRef.create(this.refId, definition.fromDOM && !parent ? 1 : parent && parent.hostRef.refId);
        }
        if (definition.attr$) {
            setupAttributeObservers(this, definition.attr$);
        }
    }
}
function CompileNativeElement(componentClass, selector, callback, hydrate) {
    var asNative = componentClass.ctors.asNative;
    var elementRef = new ElementRef({
        name: selector,
        isc: true,
        type: 1,
        fromDOM: true,
        asNative,
        hydrate: !!hydrate,
        templates: TemplateRef.templatesCompiler(selector.children, asNative)
    }, null);
    var componentInjectors = new ComponentInjectors(elementRef);
    ElementCompiler.compile(componentClass, elementRef, componentInjectors, componentInstance => {
        if (typeof callback === 'function')
            callback(elementRef, componentInstance);
    });
}
function createCustomElement(elementConstructor, attributes) {
    if (typeof elementConstructor !== 'function')
        throw new Error(`Parameter should be a funtion ${ typeof elementConstructor } provided`);
    class jlCustomElement extends HTMLElement {
        static get observedAttributes() {
            return Object.keys(attributes);
        }
        get nativeStrategyCompiler() {
            if (!this._nativeStrategyCompiler) {
                this._nativeStrategyCompiler = new NativeStrategyCompiler(elementConstructor);
            }
            return this._nativeStrategyCompiler;
        }
        constructor() {
            super();
            this._nativeStrategyCompiler = null;
        }
        connectedCallback() {
            this.nativeStrategyCompiler.connect(this);
        }
        disconnectedCallback() {
            this.nativeStrategyCompiler.disconnect();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.nativeStrategyCompiler.setPropValue(attributes[name], newValue);
        }
    }
    ;
    Object.values(attributes).forEach(props => {
        Object.defineProperty(jlCustomElement.prototype, props[1], {
            get: function () {
                return this.nativeStrategyCompiler.getPropValue(props[1]);
            },
            set: function (value) {
                this.nativeStrategyCompiler.setPropValue(props[1], value);
            },
            configurable: true,
            enumerable: true
        });
    });
    return jlCustomElement;
}
class NativeStrategyCompiler {
    constructor(elementConstructor) {
        var _elementRef = null;
        this._inputValues = {};
        this.connect = function (context) {
            CompileNativeElement(elementConstructor, context, elementRef => {
                _elementRef = elementRef;
            });
        };
        this.disconnect = function () {
            cleanupElementRef(_elementRef);
            _elementRef = this._inputValues = null;
        };
    }
    setPropValue(attrProp, value) {
        if (typeof value == 'string')
            value = this._parseAttrValue(attrProp[0], value);
        this._inputValues[attrProp[1]] = value;
    }
    getPropValue(name) {
        return this._inputValues[name];
    }
    _parseAttrValue(type, value) {
        try {
            switch ((type || '').toLowerCase()) {
            case 'array':
            case 'object':
                if (!value || value == '-')
                    return null;
                if (!'{['.includes(value.trim().charAt(0)) && value.includes(':')) {
                    return value.split(',').reduce((accum, key) => {
                        key = key.split(':');
                        accum[key[0].trim()] = key[1].trim();
                        return accum;
                    }, type == 'array' ? [] : {});
                }
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    value = value.split(',');
                }
                return value;
                break;
            case 'boolean':
            case 'number':
                return JSON.parse(value);
                break;
            }
        } catch (e) {
        }
        return value;
    }
}
var CoreBootstrapContext = Object({
    bootStrapComponent: null,
    compiledModule: null,
    $isCompiled: false,
    injector: null,
    enableDebugger: true
});
var INITIALIZERS = new ProviderToken('AppInitializers', true);
var APP_BOOTSTRAP = new ProviderToken('AppBootstrap', true);
var APP_BASE_HREF = new ProviderToken('AppBaseHref', false);
var APP_ASSET_URL = new ProviderToken('AppAssetsURL', false);
var _hydrateMode = false;
function enableHydrationMode() {
    _hydrateMode = true;
}
function disableHydrationMode() {
    _hydrateMode = false;
}
function bootStrapApplication(moduleToBootStrap) {
    return new Promise(function (resolve, reject) {
        try {
            CoreBootstrapContext.compiledModule = moduleToBootStrap;
            compileModule(moduleToBootStrap);
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
        var isNative = moduleToBootStrap.rootElement.ctors.asNative;
        if (moduleToBootStrap.rootElement && !isNative) {
            var selector = moduleToBootStrap.rootElement.ctors.selector;
            CompileNativeElement(moduleToBootStrap.rootElement, document.querySelector(selector), function (elementRef) {
                CoreBootstrapContext.bootStrapComponent = elementRef;
                Inject(APP_BOOTSTRAP, CoreBootstrapContext.injector).forEach(function (callback) {
                    callback();
                });
            }, _hydrateMode);
        }
    }
}
;
function compileModule(m) {
    return m && (m.fac(), new m());
}
function ChangeDetector() {
    if (!CoreBootstrapContext.bootStrapComponent)
        return;
    CoreBootstrapContext.bootStrapComponent.changeDetector.detectChanges();
}
;
function _getBootstrapRoot() {
    return CoreBootstrapContext.bootStrapComponent;
}
function _isDebuggerEnabled() {
    return CoreBootstrapContext.enableDebugger;
}
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
    var isObjectName = isobject(name);
    if (name && !value && !isObjectName) {
        if (!!window.getComputedStyle) {
            var ret = window.getComputedStyle(nativeElement)[name];
            return parseInt(ret) || ret;
        }
        return null;
    }
    if (isObjectName) {
        for (var prop in name) {
            ElementStyle.set(nativeElement, prop, name[prop]);
        }
    } else {
        ElementStyle.set.apply(null, arguments);
    }
}
;
ElementStyle.set = function (nativeElement, name, value, suffix) {
    value = ElementStyle.fixValue(value, name, suffix);
    nativeElement.style[name] = value;
};
ElementStyle.props = {
    WithSuffix: 'width|height|top|bottom|left|right|marginTop|marginBottom|marginLeft|marginRight|paddingRight|paddingLeft|paddingTop|paddingBottom|fontSize'.split('|'),
    background: 'backgroundImage'.split('|')
};
ElementStyle.fixValue = function (value, name, suffix) {
    if (typeof value == 'number' && ElementStyle.props.WithSuffix.includes(name)) {
        value += suffix || 'px';
    } else if (value && ElementStyle.props.background.includes(name) && value.includes('.') && !value.startsWith('url')) {
        value = 'url(' + value + ')';
    }
    return value;
};
class ElementClassList {
    static set(nativeElement, classList, type) {
        if (type) {
            nativeElement.classList[type].apply(nativeElement.classList, this.toClass(classList));
        } else if (classList) {
            nativeElement.classList.value = classList;
        } else {
            return nativeElement.classList.value;
        }
    }
    static add(nativeElement, classList) {
        if (!classList || !nativeElement) {
            return;
        }
        if (isobject(classList)) {
            for (var className in classList) {
                this.set(nativeElement, className, classList[className] ? 'add' : 'remove');
            }
        } else {
            this.set(nativeElement, classList, 'add');
        }
    }
    static remove(nativeElement, classList) {
        if (!classList || !nativeElement) {
            return;
        }
        nativeElement.classList.remove.apply(nativeElement.classList, this.toClass(classList));
    }
    static contains(nativeElement, className) {
        return nativeElement.classList.contains(className);
    }
    static toClass(classList) {
        return (classList || '').split(/\s/g).filter(function (k) {
            return !!k;
        });
    }
}
class AttributeAppender {
    static set(nativeElement, prop, value) {
        if (11 === nativeElement.nodeType)
            return;
        if (isobject(prop)) {
            for (var name in prop) {
                this.byType(name, nativeElement, prop[name]);
            }
        } else {
            this.setValue(nativeElement, prop, value);
        }
    }
    static setValue(nativeElement, prop, value, canRemoveAttr) {
        const elementValue = nativeElement.getAttribute(prop);
        if (elementValue === value)
            return;
        if (canRemoveAttr && !value) {
            nativeElement.removeAttribute(prop);
        } else {
            nativeElement.setAttribute(prop, value);
        }
    }
    static byType(type, nativeElement, value, template) {
        const types = {
            style: () => {
                if (isobject(value)) {
                    ElementStyle(nativeElement, value);
                } else if (template && template.type) {
                    ElementStyle.set(nativeElement, template.type, value, template.suffix);
                } else {
                    nativeElement.setAttribute('style', value);
                }
            },
            innerhtml: () => this.setValue(nativeElement, 'innerHTML', sce.trustAsHTML(value)),
            src: () => {
                if (![
                        'IMG',
                        'IFRAME',
                        'SOURCE',
                        'SCRIPT'
                    ].includes(nativeElement.tagName))
                    return errorBuilder('src is not a valid property of ' + nativeElement.tagName);
                this.setValue(nativeElement, 'src', value);
            },
            href: () => {
                if (!isequal('A', nativeElement.tagName))
                    return errorBuilder('href is not a valid property of ' + nativeElement.nativeElement.tagName);
                this.setValue(nativeElement, 'href', value);
            },
            class: () => ElementClassList.add(nativeElement, value),
            list: () => this.setValue(nativeElement, 'list', value),
            readonly: () => this.setValue(nativeElement, 'readonly', value, true),
            aria: () => this.singleOrMultipeUpdate(nativeElement, 'aria-', value),
            data: () => this.singleOrMultipeUpdate(nativeElement, 'data-', value)
        };
        if (types[type]) {
            types[type]();
        } else if (type in nativeElement) {
            nativeElement[type] = value;
        } else {
            this.setValue(nativeElement, type, value);
        }
    }
    static setProp(nativeElement, propName, propValue, template) {
        try {
            if (propValue !== undefined && nativeElement && nativeElement.nodeType === 1) {
                this.byType(propName, nativeElement, propValue, template);
            }
        } catch (e) {
            console.error(e);
        }
    }
    static singleOrMultipeUpdate(nativeElement, prop, value) {
        if (isobject(value)) {
            for (var name in value) {
                nativeElement.setAttribute(prop + name, value[name]);
            }
        } else {
            nativeElement.setAttribute(prop, value);
        }
    }
}
var SubscriptionStates = {
    onError: 0,
    onSuccess: 1,
    onCompleted: 2
};
var statedIDs = Object.keys(SubscriptionStates);
class Subscription {
    constructor(replayOnSubscription) {
        this.subscriptions = [];
        this.state = {
            pending: false,
            value: null,
            resolveWith: -1
        };
    }
    add(success, error, completed) {
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
    }
    notify(state, args) {
        if (!this.state || this.state.resolveWith === SubscriptionStates.onCompleted) {
            return;
        }
        var stateId = statedIDs[state];
        for (var subscription of this.subscriptions) {
            var callback = subscription[stateId];
            if (callback && isfunction(callback)) {
                callback.apply(null, args);
            }
        }
        this.state.pending = this.subscriptions.length < 1;
        this.state.resolveWith = state;
        this.state.value = args;
    }
    destroy() {
        this.subscriptions.length = 0;
        this.state = null;
    }
}
class Observable {
    constructor(callback) {
        var _observer = AbstractObserver();
        callback(_observer);
        this.subscribe = function (success, error, completed) {
            var subscription = new Subscription();
            subscription.add(success, error, completed);
            _observer.add(subscription);
            return subscription;
        };
    }
}
class AbstractObserver {
    constructor() {
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
    next(...values) {
        this._forEach(function (subscription) {
            subscription.notify(SubscriptionStates.onSuccess, values);
        });
    }
    error(errorObject) {
        this._forEach(function (subscription) {
            subscription.notify(SubscriptionStates.onError, [errorObject]);
        });
    }
    completed() {
        this._forEach(function (subscription) {
            subscription.notify(SubscriptionStates.onCompleted, []);
        });
    }
    destroy() {
        this._forEach(function (subscription) {
            subscription.destroy();
            return true;
        });
    }
}
class Subject {
    constructor() {
        this._observer = new AbstractObserver();
    }
    subscribe(success, error, completed) {
        var subscription = new Subscription(false);
        subscription.add(success, error, completed);
        this._observer.add(subscription);
        return subscription;
    }
    destroy() {
        this._observer.destroy();
    }
    hasObservers() {
        return this._observer.hasObservers();
    }
    next(...values) {
        this._observer.next(...values);
    }
    error(error) {
        this._observer.error(error);
    }
    completed() {
        this._observer.completed();
    }
}
class QueryList extends Array {
    constructor() {
        super();
        this.onChanges = new Subject();
    }
    static from(iterable) {
        if (!Array.isArray(iterable))
            throw new Error(typeof iterable + ' ' + iterable + ' is not iterable');
        const instance = new QueryList(iterable);
        iterable.forEach(it => instance.push(it));
        return instance;
    }
    static is(instance) {
        return instance instanceof QueryList;
    }
    get first() {
        return this[0];
    }
    get last() {
        return this[this.length - 1];
    }
    add(element, index, emitEvent) {
        addToArray(this, element, index);
        if (emitEvent) {
            this.onChanges.next({
                value: element,
                index: index,
                type: 'add'
            });
        }
    }
    replace(from, to, emitEvent) {
        const index = this.indexOf(from);
        if (index > -1) {
            this[index] = to;
        }
        if (emitEvent) {
            this.onChanges.next({
                value: to,
                index: index,
                type: 'replace'
            });
        }
    }
    get(element) {
        if (element) {
            return this.find(ele => ele === element);
        }
        return this;
    }
    getByIndex(index) {
        return this[index];
    }
    destroy() {
        while (this.length) {
            const element = this.pop();
            if (element)
                removeElement(element);
        }
        this.onChanges.destroy();
    }
    remove(element, deep = false) {
        let index = this.indexOf(element);
        if (0 > index && deep && this.length) {
            for (let i = 0; i < this.length; i++) {
                if (!this[i].children)
                    continue;
                const remChild = this[i].children.remove(element);
                if (remChild)
                    return remChild;
            }
        }
        return this.removeByIndex(index);
    }
    hasIndex(index) {
        return this.length - 1 > index;
    }
    removeByIndex(index) {
        if (0 > index)
            return null;
        const element = removeFromArray(this, index);
        this.onChanges.next({
            value: element,
            index: index,
            type: 'detached'
        });
        return element;
    }
}
var isAllowedArrayType = ['style'];
function elementMutationObserver(nativeElement, callback) {
    if (!nativeElement)
        return;
    var observer = new MutationObserver(function (mutationsList) {
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
function AttachComponentContentQuery(elementRef) {
    var querySet = elementRef.internal_getDefinition('cq');
    if (querySet) {
        var componentInstance = elementRef.componentInstance;
        var props = Object.keys(querySet);
        props.forEach(attachQueryValue);
        function attachQueryValue(prop) {
            var mapping = querySet[prop];
            var value = null;
            if (!mapping[3]) {
                if (Array.isArray(mapping[2])) {
                    value = QueryList.from(mapping[2].map(ast => processTmpl(ast, mapping[0])));
                } else {
                    value = processTmpl(mapping[2], mapping[0]);
                }
                if (mapping[0] === staticInjectionToken.TemplateRef) {
                    mapping[2] = value;
                    mapping[3] = true;
                }
            } else {
                value = mapping[2];
            }
            componentInstance[prop] = value;
            value = null;
        }
        function processTmpl(ast, type) {
            switch (type) {
            case staticInjectionToken.TemplateRef:
                return new TemplateRef(ast, true);
            case staticInjectionToken.ContentData:
                return {};
            }
        }
        attachElementObserver(elementRef, function () {
            props.forEach(prop => {
                if (QueryList.is(componentInstance[prop])) {
                    componentInstance[prop].destroy();
                } else {
                    componentInstance[prop] = null;
                }
            });
        });
    }
}
function elementBefore(targetNode, insertNode) {
    if (!targetNode || !targetNode.parentNode)
        return;
    if (targetNode.before) {
        targetNode.before(insertNode);
    } else {
        targetNode.parentNode.insertBefore(insertNode, targetNode);
    }
}
function elementInsertAfter(hostElement, newNode, targetNode, ignoreDetector) {
    if (!targetNode || !targetNode.parentNode)
        return;
    targetNode.parentNode.insertBefore(newNode, targetNode.nextSibling);
    if (hostElement && !ignoreDetector)
        hostElement.changeDetector.onlySelf();
}
function replaceElement(fromElement, toElement) {
    var targetNode = fromElement && fromElement.nativeElement;
    if (!targetNode)
        return;
    if (11 === targetNode.nodeType) {
        targetNode = fromElement.children.first.nativeElement;
    }
    fromElement.parent.children.replace(fromElement, toElement, true);
    targetNode.replaceWith(toElement.nativeElement);
    removeElement(fromElement);
    targetNode = null;
}
function removeElement(elementRef, removeFromParent) {
    if (!elementRef)
        return;
    if (elementRef instanceof AbstractElementRef) {
        if (elementRef.nativeElement && elementRef.nativeElement.nodeType != 11) {
            elementRef.nativeElement.remove();
        }
        if (removeFromParent && elementRef.parent) {
            elementRef.parent.children.remove(elementRef, true);
        }
        cleanupElementRef(elementRef);
    } else if (elementRef instanceof TextNodeRef) {
        elementRef.nativeNode.remove();
    }
}
function attachElementObserver(element, onDestroyListener) {
    if (onDestroyListener) {
        element.$observers.push(onDestroyListener);
    }
}
function createElementByType(tag, text, fromDOM) {
    if (fromDOM)
        return tag;
    switch (tag) {
    case '##':
        return document.createComment(text);
    case '#':
        return document.createDocumentFragment();
    default:
        return document.createElement(tag);
    }
}
function ObserveUntilDestroyed(elementRef, eventListener) {
    if (elementRef.hostRef) {
        var unsubscribe = SubscribeObservables(elementRef.hostRef.refId, eventListener.next);
        attachElementObserver(elementRef, function () {
            unsubscribe();
            eventListener.done(true);
        });
    }
}
function SubscribeObservables(refId, fn) {
    var componentRef = componentDebugContext.get(refId);
    var unsubscribe = null;
    if (componentRef) {
        unsubscribe = componentRef.observables.subscribe(fn);
    }
    return unsubscribe;
}
function textNodeCompiler(textNodeRef) {
    function setValue() {
        var value = typeof textNodeRef.ast[1] === 'function' ? textNodeRef.ast[1](textNodeRef.parent.context, textNodeRef.parent.componentInstance) : compileTemplate(textNodeRef.ast, textNodeRef.parent.context, textNodeRef.parent.componentInstance);
        if (textNodeRef.nativeNode.nodeValue === value)
            return;
        textNodeRef.nativeNode.nodeValue = value;
    }
    if (!textNodeRef.ast[2] && textNodeRef.parent && textNodeRef.parent.hostRef) {
        attachElementObserver(textNodeRef.parent, SubscribeObservables(textNodeRef.parent.hostRef.refId, setValue));
    }
    ;
    setValue();
}
function cleanupElementRef(elementRef) {
    if (!elementRef)
        return;
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
function setupAttributeObservers(element, attrObservers) {
    var observerStarted = false;
    var observerKeys = Object.keys(attrObservers);
    var unsubscribe = SubscribeObservables(element.hostRef.refId, observe);
    attachElementObserver(element, unsubscribe);
    function observe() {
        for (var propName of observerKeys) {
            if (attrObservers[propName].once && observerStarted)
                continue;
            if (isAllowedArrayType.includes(propName) && Array.isArray(attrObservers[propName])) {
                var objectValues = attrObservers[propName].reduce((accum, item) => {
                    if (item.once && observerStarted)
                        return accum;
                    var value = typeof item.compiledFn === 'function' ? item.compiledFn(element.context, element.componentInstance) : compileTemplate(item, element.context, element.componentInstance);
                    if (value) {
                        if (!accum)
                            accum = {};
                        Object.assign(accum, isobject(value) ? value : { [item.type]: ElementStyle.fixValue(value, item.type, item.suffix) });
                    }
                    return accum;
                }, null);
                AttributeAppender.byType(propName, element.nativeElement, objectValues);
                continue;
            }
            attributeEvaluator(propName, attrObservers[propName]);
        }
        function attributeEvaluator(propName, template) {
            var compiledFn = Array.isArray(template) ? template[1] : template.compiledFn;
            var value = typeof compiledFn === 'function' ? compiledFn(element.context, element.componentInstance) : compileTemplate(template, element.context, element.componentInstance);
            AttributeAppender.setProp(element.nativeElement, propName, value, template);
        }
        observerStarted = true;
    }
}
function createLocalVariables(localVariables, localContext, parentContext) {
    var context = {};
    if (localVariables) {
        for (var propName in localVariables) {
            if (typeof localVariables[propName] === 'function') {
                writeCompiledPropertyBinding(propName);
            } else if (localVariables[propName] && typeof localVariables[propName] == 'string' && localVariables[propName].match(/\s/)) {
                context[propName] = localVariables[propName];
            } else {
                writePropertyBinding(propName);
            }
        }
    }
    function writePropertyBinding(propName) {
        Object.defineProperty(context, propName, {
            get: function () {
                if (!localContext)
                    return null;
                return evaluateExpression(localVariables[propName], localContext, parentContext);
            }
        });
    }
    function writeCompiledPropertyBinding(propName) {
        Object.defineProperty(context, propName, {
            get: function () {
                if (!localContext)
                    return null;
                return localVariables[propName](localContext, parentContext);
            }
        });
    }
    return context;
}
function getElementContext(targetContext, targetElement) {
    if (!targetContext)
        return targetElement.context;
    if (targetContext.locaVariables) {
        return targetContext.locaVariables;
    }
    var componentRef = ComponentRef.get(targetContext.refId, targetContext.parentRefId);
    return componentRef.context;
}
var DOMHelper = {
    insert: elementInsertAfter,
    remove: removeElement,
    replace: replaceElement,
    createElement: function (tag, attributes, content, parent, replaceParentContent) {
        var ele = document.createElement(tag);
        AttributeAppender.set(ele, attributes || {});
        if (content) {
            if (typeof content == 'function') {
                content(ele);
            } else {
                ele.innerHTML = content;
            }
        }
        if (parent) {
            if (replaceParentContent)
                parent.innerHTML = '';
            parent.appendChild(ele);
        }
        return ele;
    },
    createTextNode: function (textContent, parent) {
        var textNode = document.createTextNode(textContent);
        if (parent)
            parent.appendChild(textNode);
        return textNode;
    }
};
function containsStructuralDirective(astNodes) {
    if (!astNodes)
        return false;
    for (var i = 0; i < astNodes.length; i++) {
        var node = astNodes[i];
        if (!node)
            continue;
        if (node.type === 8 || node.type === 13)
            return true;
        if (node.children && containsStructuralDirective(node.children))
            return true;
    }
    return false;
}
function clearChildNodes(nativeElement) {
    while (nativeElement.firstChild) {
        nativeElement.removeChild(nativeElement.firstChild);
    }
}
function discardRemainingHydrationSiblings(parent) {
    if (!parent || parent._hydrateCursor === undefined)
        return;
    var node = parent._hydrateCursor;
    while (node) {
        var next = node.nextSibling;
        if (node.parentNode)
            node.parentNode.removeChild(node);
        node = next;
    }
    parent._hydrateCursor = undefined;
}
function reportHydrationMismatch(parent, definition, foundNode) {
    var expected = definition.type === 3 ? 'a text node' : '<' + definition.name + '>';
    var found = !foundNode ? 'nothing (ran out of server-rendered nodes)' : foundNode.nodeType === 3 ? 'a text node ("' + foundNode.textContent.slice(0, 30) + '")' : '<' + foundNode.nodeName.toLowerCase() + '>';
    console.warn('[hydration mismatch] expected ' + expected + ' but found ' + found + ' - falling back to a full remount for the remaining siblings at this position.');
}
class ViewParser {
    static $elementContextContainer = new Map();
    static $(e, t) {
        return t && t.type ? t : e ? t ? Object.assign(t, e) : 'object' == typeof e ? e : e() : null;
    }
    static jit(elementRef, transpiledHTML, vt) {
        if (elementRef._hydrate) {
            if (containsStructuralDirective(transpiledHTML)) {
                clearChildNodes(elementRef.nativeElement);
            } else {
                elementRef._hydrateCursor = elementRef.nativeElement.firstChild;
            }
        }
        const fragment = document.createDocumentFragment();
        const pushView = (compiled, isNativeMode) => {
            if (!isNativeMode) {
                compiled.parent && compiled.parent.children.add(compiled);
                fragment.appendChild(compiled.nativeElement || compiled.nativeNode);
                transverse(compiled);
            } else {
                fragment.appendChild(compiled);
            }
        };
        for (var i = 0; i < transpiledHTML.length; i++) {
            var compiled = jitBuilder.compile(transpiledHTML[i], elementRef, pushView);
            if (compiled) {
                pushView(compiled);
            }
        }
        var componentInstance = elementRef.componentInstance;
        for (var name in vt) {
            componentInstance[name] = TemplateRef.reflect(elementRef, vt[name], newRef => {
                transverse(newRef);
                return newRef.nativeElement || newRef.nativeNode;
            });
        }
        return fragment;
    }
}
class jitBuilder {
    static $1(definition, parent, viewContainer, context) {
        const elementRef = createOrAdoptElement(definition, parent);
        if (definition.attr) {
            AttributeAppender.set(elementRef.nativeElement, definition.attr);
        }
        if (definition.children) {
            if (elementRef._adopted) {
                elementRef._hydrateCursor = elementRef.nativeElement.firstChild;
            }
            for (let i = 0; i < definition.children.length; i++) {
                const childDefinition = typeof definition.children[i] === 'function' ? definition.children[i]() : definition.children[i];
                if (!childDefinition)
                    continue;
                const child = this.compile(childDefinition, elementRef, viewContainer, context, true);
                if (child) {
                    this.pushToParent(child, elementRef, i);
                }
            }
        }
        if (definition.vc) {
            addViewQuery(elementRef.hostRef, definition.vc, elementRef);
        }
        return elementRef;
    }
    static pushToParent(child, parent, index, isNativeMode) {
        if (!isNativeMode) {
            parent.children.add(child, index);
            parent.nativeElement.appendChild(child.nativeElement || child.nativeNode);
        } else {
            parent.nativeElement.appendChild(child);
        }
    }
    static $8(definition, parent, pushView, context) {
        return new AbstractElementRef(definition, parent, context);
    }
    static $3(definition, parent) {
        return createOrAdoptTextNode(definition, parent);
    }
    static $11(definition, parent, viewContainer, context, appendToParent) {
        const hostRef = parent.hostRef;
        const template = TemplateRef.factory(hostRef, 'place', true);
        if (!template)
            return null;
        const isNativeMode = hostRef.internal_getDefinition('asNative');
        let haveLocalVairables = false;
        const createPlaceElement = !(viewContainer || appendToParent);
        const placeElement = createPlaceElement || parent.isc ? new AbstractElementRef({
            name: '#',
            type: 11
        }, hostRef) : null;
        if (!isNativeMode) {
            haveLocalVairables = definition.$ctx && 'object' == typeof definition.$ctx;
            if (haveLocalVairables)
                context = createLocalVariables(definition.$ctx, parent.context, context);
        }
        function createAndAppend(element) {
            let child = element;
            if (!isNativeMode) {
                child = jitBuilder.compile(element, definition.$ctx == true ? parent : hostRef.parent, viewContainer, context);
                if (haveLocalVairables)
                    child.context = context;
                child.contentHostRefId = hostRef.refId;
            }
            if (parent.isc || createPlaceElement || appendToParent) {
                jitBuilder.pushToParent(child, placeElement || parent, null, isNativeMode);
            } else {
                viewContainer(child, isNativeMode);
            }
            if (definition.vc && [
                    element.refId,
                    child.tagName
                ].includes(definition.vc[0].value)) {
                addViewQuery(hostRef, definition.vc, child);
            }
        }
        if (template) {
            template.forEach(definition.refId, createAndAppend);
        }
        return placeElement;
    }
    static $13(def, parent, viewContainer, context) {
        var currentValue = null;
        var element = null;
        var unsubscribeScheduler = noop();
        var fallbackNode = createElementByType('##', 'outlet');
        var fallbackNodes = Object.defineProperties({}, {
            nativeElement: { get: () => fallbackNode },
            parent: { get: () => parent }
        });
        function checkAndCompileTemplate(fromObserver) {
            var ctxArg = context || parent.context;
            var templateId = typeof def.$templateId.compiledFn === 'function' ? def.$templateId.compiledFn(ctxArg, parent.componentInstance) : getFilteredTemplateValue(def.$templateId, ctxArg, parent.componentInstance);
            if (currentValue != templateId) {
                unsubscribeScheduler();
                currentValue = templateId;
                var template = def._GT && def._GT(templateId);
                if (template) {
                    var oldElement = element;
                    element = jitBuilder.compile(template, parent, viewContainer, context);
                    if (!fromObserver || !element)
                        return element;
                    unsubscribeScheduler = scheduler.schedule(function () {
                        if (element) {
                            transverse(element);
                            replaceElement(oldElement || fallbackNodes, element);
                        }
                        oldElement = null;
                    });
                } else {
                    if (element) {
                        replaceElement(element, fallbackNodes);
                        element = null;
                    } else if (!fromObserver) {
                        return fallbackNodes;
                    }
                }
            }
        }
        if (def.$templateId) {
            if (!def.context) {
                ObserveUntilDestroyed(parent, {
                    next: function () {
                        checkAndCompileTemplate(true);
                    },
                    done: function () {
                        element = null;
                    }
                });
            }
            return checkAndCompileTemplate();
        }
        return null;
    }
    static compile(def, elementRef, pushView, context, appendToParent) {
        return this[`$${ def.type }`](def, elementRef, pushView, context, appendToParent);
    }
}
function createOrAdoptElement(definition, parent) {
    if (parent && parent._hydrateCursor !== undefined) {
        const node = parent._hydrateCursor;
        if (node && node.nodeType === 1 && node.tagName.toLowerCase() === String(definition.name).toLowerCase()) {
            parent._hydrateCursor = node.nextSibling;
            const elementRef = new ElementRef(Object.assign({}, definition, {
                fromDOM: true,
                name: node
            }), parent);
            elementRef._adopted = true;
            if (definition.isc)
                elementRef._hydrate = true;
            return elementRef;
        }
        reportHydrationMismatch(parent, definition, node);
        discardRemainingHydrationSiblings(parent);
    }
    return new ElementRef(definition, parent);
}
function createOrAdoptTextNode(definition, parent) {
    if (parent && parent._hydrateCursor !== undefined) {
        const node = parent._hydrateCursor;
        if (node && node.nodeType === 3) {
            parent._hydrateCursor = node.nextSibling;
            return new TextNodeRef(Object.assign({}, definition, { adoptedNode: node }), parent);
        }
        reportHydrationMismatch(parent, definition, node);
        discardRemainingHydrationSiblings(parent);
    }
    return new TextNodeRef(definition, parent);
}
function transverse(node) {
    if (node._lcmp)
        return;
    if (node instanceof AbstractElementRef) {
        if (node.providers && node.providers.length) {
            ElementCompiler.resolve(node, proceedWithCompilation);
        } else {
            proceedWithCompilation(node);
        }
    } else if (node instanceof TextNodeRef && node.hasBinding) {
        textNodeCompiler(node);
    }
    function proceedWithCompilation(node) {
        if (isequal(node.type, 8)) {
            return;
        }
        ;
        EventHandler.registerListener(node);
        node.children.forEach(transverse);
    }
}
function addViewQuery(hostElement, option, childElement) {
    if (!isequal(option[1], hostElement.tagName) && !hostElement.internal_getDefinition('asNative')) {
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
class ViewRef extends Array {
    _destroyed = false;
    constructor(elementRef) {
        super();
        this.createEmbededView = function (templateRef, context, index) {
            const view = new EmbededViewContext(elementRef, templateRef, context);
            view.renderView(index);
            addToArray(this, view, index);
            return view;
        };
    }
    get(index) {
        return this[index];
    }
    move(prev, curr) {
        scheduler.schedule(() => {
            const view = this.get(prev);
            const targetNode = this.get(curr);
            if (targetNode && view) {
                if (curr > prev) {
                    elementInsertAfter(null, view.compiledElement.nativeElement, targetNode.compiledElement.nativeElement);
                } else {
                    elementBefore(targetNode.compiledElement.nativeElement, view.compiledElement.nativeElement);
                }
                moveItemInArray(this, prev, curr);
                this.updateContext();
            }
        });
    }
    remove(index) {
        const view = removeFromArray(this, index);
        if (view) {
            view._destroyed_view = true;
            view.destroy();
        }
    }
    clearView() {
        while (this.length) {
            const view = this.shift();
            view.destroy();
        }
    }
    updateContext() {
        for (var i = 0; i < this.length; i++) {
            const view = this.get(i);
            view.updateContext({
                index: i,
                count: this.length
            });
        }
    }
}
class EmbededViewContext {
    unsubscribeScheduler = null;
    constructor(parentRef, templateRef, context) {
        this.context = context;
        this.parentRef = parentRef;
        const templateContext = templateRef.getContext();
        const componentRefContext = createLocalVariables(templateContext, context, parentRef.context);
        this.compiledElement = templateRef.createElement(parentRef, null, componentRefContext);
        if (this.compiledElement) {
            this.compiledElement.hasContext = !!templateContext;
            if (this.compiledElement.hasContext) {
                this.compiledElement.context = componentRefContext;
            }
        }
    }
    renderView(index) {
        if (!this.compiledElement)
            return;
        let targetNode = (this.parentRef.children.last || this.parentRef).nativeElement;
        var _arrIndex = index ? index - 1 : index;
        if (index !== undefined && this.parentRef.children.hasIndex(_arrIndex))
            targetNode = this.parentRef.children.getByIndex(_arrIndex).nativeElement;
        if (!targetNode)
            return;
        const nativeElement = this.compiledElement.nativeElement || this.compiledElement.nativeNode;
        const changeDetector = this.compiledElement && this.compiledElement.changeDetector;
        this.parentRef.children.add(this.compiledElement, index);
        this.unsubscribeScheduler = scheduler.schedule(() => {
            try {
                transverse(this.compiledElement);
                if (index)
                    elementInsertAfter(this.parentRef, nativeElement, targetNode, true);
                else
                    elementBefore(targetNode, nativeElement);
                if (changeDetector)
                    changeDetector.detectChanges();
                targetNode = null;
            } catch (e) {
            } finally {
                this.unsubscribeScheduler();
                this.unsubscribeScheduler = null;
            }
        });
    }
    destroy() {
        this.unsubscribeScheduler && this.unsubscribeScheduler();
        removeElement(this.compiledElement, true);
        this.compiledElement = null;
        this.context = null;
        this.parentRef = null;
    }
    setContext(context) {
        this.context = context;
        this.compiledElement.changeDetector.detectChanges();
    }
    updateContext(updates) {
        if (!this.context)
            return;
        for (const prop in updates) {
            this.context[prop] = updates[prop];
        }
    }
}
function TextNodeRef(definition, parent) {
    this.nativeNode = definition.adoptedNode || document.createTextNode(definition.ast[0]);
    this.type = 3;
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
class CustomEventHandler {
    static trigger(context) {
        return event => {
            if (!context.registeredEvents.has(event.type))
                return;
            context.registeredEvents.get(event.type).forEach(listener => listener(event));
        };
    }
    constructor(element) {
        this.element = element;
        this.callback = CustomEventHandler.trigger(this);
        this.registeredEvents = new Map();
    }
    register(type, callback) {
        let index = -1;
        if (this.element) {
            if (!this.registeredEvents.has(type)) {
                this.registeredEvents.set(type, []);
                this.element.addEventListener(type, this.callback, false);
            }
            index = this.registeredEvents.get(type).push(callback);
            return () => this.registeredEvents.get(type).splice(index - 1, 1);
        }
    }
    destroy() {
        this.registeredEvents.keys().forEach(type => {
            this.registeredEvents.delete(type);
            this.element.removeEventListener(type, this.callback, false);
        });
        this.element = null;
        this.registeredEvents.clear();
    }
}
const eventProps = [
    'key',
    'keyCode',
    'pageX',
    'pageY',
    'screenX',
    'screenY',
    'x',
    'y',
    'clientX',
    'clientY',
    'type',
    'width',
    'height',
    'offsetX',
    'offsetY'
];
function ProxyEvent(event, target) {
    return eventProps.reduce((accum, name) => (accum[name] = event[name], accum), {
        target,
        preventDefault: () => event.preventDefault()
    });
}
const customEventRegistry = new Map([
    [
        'window',
        new CustomEventHandler(window)
    ],
    [
        'document',
        new CustomEventHandler(document)
    ],
    [
        'body',
        new CustomEventHandler(document.body)
    ]
]);
class EventHandler {
    constructor(events) {
        this._events = events;
        this.registeredEvents = new Map();
    }
    push(event) {
        this._events.push(event);
    }
    static registerListener(element) {
        if (!element.events || !element.events._events.length)
            return;
        const eventInstance = element.events;
        const handler = function ($ev) {
            EventHandler.handleEvent(element, $ev);
        };
        function _registerEvent(eventName, useCapture) {
            if (!eventInstance.registeredEvents.has(eventName)) {
                if (eventName.includes('.')) {
                    const event = eventName.split('.');
                    const customRegistry = customEventRegistry.get(event.shift());
                    const _customRegistryHandler = evName => {
                        evName = evName.replace(/[_]/gi, '-');
                        eventInstance.registeredEvents.set(eventName, customRegistry.register(evName, htmlEvent => {
                            EventHandler.handleEvent(element, htmlEvent, eventName);
                        }));
                    };
                    if (customRegistry) {
                        event.pop().split(',').forEach(_customRegistryHandler);
                    }
                } else {
                    element.nativeElement.addEventListener(eventName, handler, useCapture);
                    eventInstance.registeredEvents.set(eventName, function () {
                        element.nativeElement.removeEventListener(eventName, handler);
                    });
                }
            }
        }
        for (const event of eventInstance._events) {
            if (!event.custom) {
                event.name.split(' ').forEach(eventName => _registerEvent(eventName, !!event.target));
            }
        }
    }
    static attachEventEmitter(element, eventName, componentInstance) {
        const registeredEvent = getEventsByType(element.events._events, eventName)[0];
        if (registeredEvent && registeredEvent.value) {
            const unSubscribe = componentInstance[eventName].subscribe(value => {
                var parentElement = element && element.parent;
                if (!parentElement)
                    return;
                parentElement = parentElement.isc ? parentElement : parentElement.hostRef;
                _executeEventsTriggers(registeredEvent.value, parentElement.componentInstance, element.hasContext ? element.context : element.parent.hasContext ? element.parent.context : parentElement.context, value);
                parentElement && parentElement.changeDetector && parentElement.changeDetector.detectChanges();
            });
            element.events.registeredEvents.set(eventName, unSubscribe);
        }
    }
    static attachEventDispatcher(element, eventName, componentInstance) {
        const registeredEvent = getEventsByType(element.events._events, eventName)[0];
        let context = null;
        if (registeredEvent && registeredEvent.value) {
            context = element.context;
            if (element.isc) {
                context = element.parent.context;
            }
            if (context.hasOwnProperty(eventName)) {
                const unSubscribe = context[eventName].subscribe(function (value) {
                    _executeEventsTriggers(registeredEvent.value, componentInstance, element.context, value);
                    element && element.changeDetector.detectChanges();
                });
                element.events.registeredEvents.set(eventName, unSubscribe);
            }
        }
    }
    static handleEvent(element, event, eventName) {
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
        function getClosest(target) {
            for (const query of target) {
                const ele = event.target.closest(query);
                if (ele)
                    return ele;
            }
            return null;
        }
        function triggerEvents(registeredEvent) {
            let _event = null;
            let context = element.context;
            if (registeredEvent.handler) {
                return registeredEvent.handler(event);
            } else if (registeredEvent.target) {
                var mainElement = getClosest(registeredEvent.target);
                if (!mainElement)
                    return;
                context = mainElement[$elementContext];
                _event = ProxyEvent(event, mainElement);
            }
            const componentInstance = registeredEvent.node ? element.nodes.get(registeredEvent.node) : element.hostRef.componentInstance;
            _executeEventsTriggers(registeredEvent.value, componentInstance, context, _event || event);
            context = null;
        }
    }
    destroy() {
        this.registeredEvents.forEach(cb => cb && cb());
        this.registeredEvents.clear();
        this._events.length = 0;
    }
}
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
            let instance = componentInstance;
            if (event.namespaces) {
                instance = isequal(event.namespaces[0], '$event') ? resolveContext(event.namespaces.slice(1), ev, componentInstance, true) : resolveContext(event.namespaces, componentInstance, context);
            }
            if (!instance[event.fn])
                return errorBuilder('No context found for this event');
            const narg = generateArguments(event.args, context, componentInstance, ev);
            instance[event.fn](...narg);
        }
    }
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
            if (!filterClass)
                return accum;
            var filterArgs = [];
            if (templateModel.args[idx])
                filterArgs = generateArguments(templateModel.args[idx], context, componentInstance);
            filterArgs.unshift(accum);
            return filterParser(filterClass, filterArgs);
        }, value);
    }
    return value;
}
function compileTemplate(definition, context, componentInstance) {
    var value = undefined;
    if (definition.length > 1)
        value = definition[1].reduce(function (accum, options) {
            return accum.replace(options[0], evaluateExpression(options[1], context, componentInstance));
        }, definition[0]);
    else
        value = getFilteredTemplateValue(definition, context, componentInstance);
    return [
        null,
        undefined,
        'null'
    ].includes(value) ? '' : value;
}
function evaluateExpression(expr, context, componentInstance) {
    if (isobject(expr) && expr.prop) {
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
            return resolveContext(node.slice(isEvent ? 1 : 0), isEvent ? event : context, componentInstance, isEvent);
        } else if (isobject(node) && node.arg)
            return generateArguments(node.arg, context, componentInstance, event);
        else if (isstring(node))
            return isequal(node, '$event') ? event : context.hasOwnProperty(node) ? context[node] : componentInstance.hasOwnProperty(node) ? componentInstance[node] : node;
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
    return resolveIdentifier(expression, context, componentInstance);
}
function resolveIdentifier(name, context, componentInstance) {
    if (isobject(context) && name in context)
        return context[name];
    else if (isobject(componentInstance) && name in componentInstance)
        return componentInstance[name];
    return context && context.hasOwnProperty(name) ? context[name] : null;
}
function resolveCall(name, args, context, componentInstance) {
    var dcontext = context && name in context ? context : componentInstance;
    var hasContext = !isnull(dcontext) && !isundefined(dcontext);
    if (hasContext && isfunction(dcontext[name])) {
        return dcontext[name].apply(dcontext, args);
    }
    return null;
}
function parseObjectExpression(expression, context, componentInstance, event) {
    var internalParser = {
        ite: () => resolveValueFromContext(expression.test, context, componentInstance) ? resolveValueFromContext(expression.cons, context, componentInstance) : resolveValueFromContext(expression.alt, context, componentInstance),
        call: function () {
            var dcontext = context;
            if (expression.namespaces) {
                dcontext = resolveContext(expression.namespaces, context, componentInstance);
            } else {
                dcontext = dcontext && expression.fn in dcontext ? context : componentInstance;
            }
            var hasContext = !isnull(dcontext) && !isundefined(dcontext);
            if (hasContext && isfunction(dcontext[expression.fn])) {
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
            const value = generateArguments([expression.right], context, componentInstance, event)[0];
            return setModelValue(expression.left, context, componentInstance, value);
        },
        una: function () {
            let val = resolveValueFromContext(expression.args, context, componentInstance, event);
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
        new: () => errorBuilder('NewExpression not allowed in template interpolation -> (new ' + expression.fn + ') '),
        raw: () => expression.value,
        mem: () => resolveValueFromContext(expression.list, context, componentInstance, event)
    };
    return internalParser[expression.type] && internalParser[expression.type]();
}
function setModelValue(key, context, componentInstance, value) {
    const entries = !isarray(key) ? key.split('.') : key.concat();
    let modelContext = Object.is(context, componentInstance) ? componentInstance : entries[0] in context ? context : componentInstance;
    let property = entries.pop();
    if (isarray(property)) {
        property = resolveContext(property, context, componentInstance);
    }
    if (key.length) {
        modelContext = entries.reduce((accum, k) => {
            if (!accum.hasOwnProperty(k)) {
                accum[k] = {};
            }
            return accum[k];
        }, modelContext);
    }
    if (modelContext) {
        modelContext[property] = value;
    }
    return value;
}
function resolveContext(key, context, componentInstance, isEventType) {
    return key.reduce(function (accum, property, idx) {
        if (isEventType) {
            return accum[property];
        }
        var componentEntry = idx ? null : componentInstance;
        if (Array.isArray(property)) {
            const value = resolveValueFromContext(property, context, componentEntry);
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
var FX = {
    easing: {
        linear: function (progress) {
            return progress;
        },
        quadratic: function (progress) {
            return Math.pow(progress, 2);
        },
        swing: function (progress) {
            return 0.5 - Math.cos(progress * Math.PI) / 2;
        },
        circ: function (progress) {
            return 1 - Math.sin(Math.acos(progress));
        },
        back: function (progress, x) {
            return Math.pow(progress, 2) * ((x + 1) * progress - x);
        },
        bounce: function (progress) {
            for (var a = 0, b = 1; 1; a += b, b /= 2) {
                if (progress >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                }
            }
        },
        elastic: function (progress, x) {
            return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
        }
    }
};
function animationInterval(options) {
    var start = new Date();
    if (typeof options.duration === 'string') {
        options.duration = options.duration == 'fast' ? 100 : 1000;
    }
    var id = setInterval(function () {
        var timePassed = new Date() - start;
        var progress = timePassed / options.duration;
        if (progress > 1)
            progress = 1;
        options.progress = progress;
        var delta = options.delta(progress);
        options.step(delta);
        if (progress == 1) {
            clearInterval(id);
            options.complete();
        }
    }, options.delay || 10);
}
function triggerCallback(callback, arg) {
    if (callback && typeof callback == 'function') {
        callback.call(arg);
    }
}
function getAttrFx(element, show) {
    var height = parseInt(element.style.height || element.clientHeight);
    var opacity = show ? 1 : 0;
    return {
        height,
        opacity
    };
}
function animate(element, styles, speed, callback, easing) {
    animationInterval({
        duration: speed,
        delta: function (progress) {
            return (FX.easing[easing] || FX.easing.swing)(progress);
        },
        complete: callback || function () {
        },
        step: function (delta) {
            if (typeof styles == 'function')
                styles(delta);
            else
                for (var prop in styles) {
                    element.style[prop] = Math.floor(styles[prop] * delta);
                }
            ;
        }
    });
}
;
animate.hide = function (element, speed, callback) {
    var attrFx = getAttrFx(element, false);
    animate(element, attrFx, speed || 100, function () {
        element.style.display = 'none';
        element.style.height = attrFx.height;
        triggerCallback(callback);
    });
};
animate.show = function (element, speed, callback) {
    element.style.display = 'block';
    animate(element, getAttrFx(element, true), speed || 100, function () {
        triggerCallback(callback);
    });
};
function fadeFN(element, to, style, speed, callback) {
    animationInterval({
        duration: speed || 1000,
        delta: function (progress) {
            return FX.easing.swing(progress);
        },
        complete: function () {
            element.style.display = style;
            triggerCallback(callback);
        },
        step: function (delta) {
            element.style.opacity = delta ? to : delta;
        }
    });
}
animate.fadeIn = function (element, speed, callback) {
    fadeFN(element, 1, 'block', speed, callback);
};
animate.fadeOut = function (element, speed, callback) {
    fadeFN(element, 0, 'none', speed, callback);
};
animate.slideUp = function (element, speed, callback) {
    speed = speed || 1000;
    var hgt = element.clientHeight;
    animationInterval({
        duration: speed,
        delta: function (progress) {
            progress = this.progress;
            return FX.easing.swing(progress);
        },
        complete: function () {
            element.style.display = 'none';
            element.style.height = hgt + 'px';
            triggerCallback(callback);
        },
        step: function (delta) {
            element.style.height = Math.floor(hgt - hgt * delta) + 'px';
            element.style.overflow = 'hidden';
        }
    });
};
animate.slideDown = function (element, speed, callback) {
    speed = speed || 1000;
    var hgt = parseInt(element.style.height);
    element.style.height = '0px';
    element.style.display = '';
    animationInterval({
        duration: speed,
        delta: function (progress) {
            progress = this.progress;
            return FX.easing.swing(progress);
        },
        complete: function () {
            element.style.overflow = 'auto';
            triggerCallback(callback);
        },
        step: function (delta) {
            element.style.height = Math.floor(0 + hgt * delta) + 'px';
            element.style.overflow = 'hidden';
        }
    });
};
animate.toggleSlide = function (element) {
    animate[element.style.display === 'none' ? 'slideDown' : 'slideUp'](element);
};
var ANIMATION_STATE_KEY = '__jeliAnimationState__';
function createAnimation(config) {
    var states = config.states || {};
    var transitions = config.transitions || {};
    var defaults = config.defaults || {};
    function resolveTransition(fromName, toName) {
        return transitions[fromName + ' => ' + toName] || transitions['* => ' + toName] || transitions[fromName + ' => *'] || transitions['* => *'] || {};
    }
    return {
        trigger: function (element, toName, fromName) {
            var to = states[toName];
            if (!to)
                return Promise.reject(new Error('createAnimation: unknown state "' + toName + '"'));
            fromName = fromName || element[ANIMATION_STATE_KEY] || 'void';
            var from = states[fromName] || {};
            var transition = resolveTransition(fromName, toName);
            var duration = transition.duration || defaults.duration || 1000;
            var easing = transition.easing || defaults.easing || 'swing';
            return new Promise(function (resolve) {
                animate(element, function (delta) {
                    for (var prop in to) {
                        var start = prop in from ? from[prop] : to[prop];
                        element.style[prop] = start + (to[prop] - start) * delta;
                    }
                }, duration, function () {
                    element[ANIMATION_STATE_KEY] = toName;
                    resolve();
                }, easing);
            });
        },
        currentState: function (element) {
            return element[ANIMATION_STATE_KEY] || 'void';
        }
    };
}
var rxEventStatus = [
    'pending',
    'inprogress',
    'complete'
];
class AbstractEventRx {
    constructor() {
        this._listeners = [];
        this._hooks = [];
        this._callback = null;
        this._status = 0;
    }
    when() {
        for (var i = 0; i < arguments.length; i++) {
            this._hooks.push(arguments[i]);
        }
        return this;
    }
    subscribe(fn) {
        var index = this._listeners.length;
        if (typeof fn !== 'function') {
            errorBuilder('Expected a function got ' + typeof fn);
            return;
        }
        this._listeners.push(fn);
        return () => this.destroy(index);
    }
    destroy(index) {
        if (this._status == 1 && this._listeners.length) {
            this._status = 2;
            return;
        }
        if (index == this._listeners.length) {
            this._listeners.length = 0;
            this._hooks.length = 0;
        } else {
            this._listeners.splice(index, 1);
        }
    }
}
class StateManager {
    constructor(current, validator, states) {
        this.current = current || '';
        this.states = states || [];
        this.validator = validator || (() => false);
        this.set(current);
    }
    get isLast() {
        return this.lastStateIndex === this.states.length - 1;
    }
    get isFirst() {
        return this.lastStateIndex < 1;
    }
    set(state) {
        const stateIndex = this.states.indexOf(state);
        if (this.states.length && !this.validator(this.current, state, stateIndex > -1)) {
            this.current = state;
            this.lastStateIndex = stateIndex;
        }
    }
    pushStates(states) {
        this.states.push.apply(this.states, states);
        if (this.current && !this.lastStateIndex) {
            this.lastStateIndex = this.states.indexOf(name);
        }
    }
    next() {
        const next = this.lastStateIndex + 1;
        if (this.states.length - 1 >= next) {
            this.set(this.states[next]);
        }
    }
    previous() {
        if (this.lastStateIndex) {
            this.set(this.states[this.lastStateIndex - 1]);
        }
    }
    isState(state) {
        return state === this.current;
    }
    setClass(state) {
        return this.isState(state) ? 'active' : '';
    }
}
class EventEmitter extends AbstractEventRx {
    emit(args) {
        this._status = 1;
        _eventRxTrigger(this, args);
    }
}
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
class EventManager {
    constructor(defaultCallback, eventExtensionMethod) {
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
    _eventsObj(type) {
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
    }
    dispatch(eventName) {
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
    }
    unlink(eventName, index) {
        var eventListeners = this.get(eventName);
        if (eventListeners) {
            eventListeners.splice(1, index);
        }
    }
    destroy(eventName) {
        var eventListeners = this.get(eventName);
        if (eventListeners) {
            eventListeners.length = 0;
        }
    }
    one(eventName, idx) {
        var eventListeners = this.get(eventName);
        if (eventListeners) {
            return eventListeners[idx];
        }
    }
}
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
    return function (value, next) {
        next(callback(value));
    };
}
;
function rxUntilChanged() {
    var oldValue = null;
    return function (value, next) {
        var noChanges = !isequal(value, oldValue);
        oldValue = value;
        next(noChanges);
    };
}
function rxWait() {
}
function rxEvents(targetInstance, eventNames) {
    if (!targetInstance || !eventNames)
        return errorBuilder(`Target and eventNames parameters are required to use this method`);
    function coreEventListener(event) {
    }
    if (!Array.isArray(eventNames))
        eventNames = [eventNames];
    eventNames.forEach(eventName => targetInstance.addEventListener(eventName, coreEventListener));
    return () => {
        eventNames.forEach(eventName => targetInstance.removeEventListener(eventName, coreEventListener));
    };
}
function rxWatch(source, changeDetector, onNext) {
    return source.subscribe(function (value) {
        if (onNext)
            onNext(value);
        changeDetector && changeDetector.manualCheck();
    });
}
function rxLoop(operations, callback) {
    return new Promise(resolve => {
        if (!operations || !operations.length) {
            return resolve();
        }
        var inc = 0;
        function next() {
            if (operations.length > inc) {
                inc++;
                callback(operations[inc - 1], next);
            } else {
                resolve();
            }
        }
        next();
    });
}
function rxNotify(subscription, model, ignoreCheck) {
    if (subscription.watchKey) {
        if (model) {
            var value;
            if (isfunction(subscription.watchKey)) {
                value = subscription.watchKey(model);
            } else {
                value = resolveValueFromContext(subscription.watchKey, model);
            }
            if (subscription.core && isfunction(subscription.core)) {
                if (subscription.core(value)) {
                    _trigger(subscription.handler, value);
                }
            } else if (ignoreCheck || _valueComparison(value, subscription)) {
                _trigger(subscription.handler, value);
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
function _valueComparison(value, suscription) {
    var noChanges = !isequal(value, suscription.lastValue);
    suscription.lastValue = value;
    return noChanges;
}
function triggerWhen(operators, args, callback) {
    var passed = true;
    if (!operators || !operators.length)
        return callback(passed);
    rxLoop(operators, (operator, next) => {
        operator(args, value => {
            if (!value) {
                passed = false;
            }
            next();
        });
    }).then(() => callback(passed), () => callback(passed));
}
function _eventRxTrigger(context, value) {
    triggerWhen(context._hooks, value, function (allPassed) {
        if (allPassed) {
            context._listeners.forEach(function (fn) {
                fn(value);
            });
            if (context._status == 2)
                context.destroy();
            else
                context._status = 0;
        }
    });
}
class rxTimeout {
    constructor() {
        this.subscription = new Subscription(false);
        this.play = function (timer) {
            this.timerId = nativeTimeout(() => this.subscription.notify(SubscriptionStates.onSuccess), timer || 100);
            return this;
        };
    }
    subscribe(callback, onDestroy) {
        this.subscription.add(callback, onDestroy);
        return this;
    }
    stop() {
        clearTimeout(this.timerId);
    }
    clearTimeout(destroy) {
        this.stop();
        if (destroy) {
            this.subscription.destroy();
        }
    }
}
class rxInterval {
    constructor() {
        this.subscription = new Subscription(false);
        this.intervalId = null;
        this.play = function (interval) {
            this.intervalId = nativeInterval(() => this.subscription.notify(SubscriptionStates.onSuccess), interval || 100);
            return this;
        };
    }
    subscribe(callback, onDestroy) {
        this.subscription.add(callback, onDestroy);
        return this;
    }
    stop() {
        clearInterval(this.intervalId);
    }
    clearInterval(destroy) {
        this.stop();
        if (destroy) {
            this.subscription.destroy();
        }
    }
}
class EventDebounce extends AbstractEventRx {
    constructor(timer, immediate) {
        super();
        this._callback = debounce(value => {
            this._status = 1;
            _eventRxTrigger(this, value);
        }, timer, immediate);
    }
    next(args) {
        this._callback(args);
    }
}
function MediaQueryEvent(breakPoints, callback) {
    if (!Array.isArray(breakPoints) || typeof callback != 'function') {
        return errorBuilder('MediaQueryEvent requires list of breakPoints to observe and also a callback function');
    }
    var attachQuery = (screenSize, idx) => {
        var handleChange = event => callback(event, screenSize);
        var query = `(min-width: ${ screenSize }px)`;
        var nextPoint = breakPoints[idx + 1];
        if (nextPoint) {
            query += ` and (max-width: ${ nextPoint - 0.02 }px)`;
        }
        var media = matchMedia(`${ query }`);
        media.addEventListener('change', handleChange);
        if (media.matches) {
            handleChange(media);
        }
        return () => media.removeEventListener('change', handleChange);
    };
    var breakPointHandlers = breakPoints.map(attachQuery);
    return () => breakPointHandlers.forEach(listener => listener());
}
function ComponentFactoryResolver(componentFactory, viewRef, callback, skipElementInsert) {
    if (!componentFactory) {
        return Promise.reject('No exported factory found for <' + componentFactory?.ctors?.selector + '>');
    }
    const elementRef = new ElementRef({
        name: componentFactory.ctors.selector,
        type: 'element',
        isc: true,
        providers: [componentFactory]
    }, viewRef, true);
    const componentInjector = new ComponentInjectors(elementRef);
    return new Promise((resolve, reject) => {
        try {
            ElementCompiler.compile(componentFactory, elementRef, componentInjector, componentInstance => {
                if (!skipElementInsert && viewRef) {
                    elementInsertAfter(viewRef, elementRef.nativeElement, viewRef.nativeElement);
                    viewRef.children.add(elementRef);
                }
                EventHandler.registerListener(elementRef);
                (callback || resolve)(elementRef, componentInstance);
            });
        } catch (exception) {
            reject(exception);
        }
    });
}
var TAIL_SENTINEL = Symbol('iterable-profiler-tail');
function DiffNode(hash) {
    this.hash = hash;
    this.prev = null;
    this.next = null;
}
function unlinkNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}
function insertNodeBefore(node, ref) {
    node.prev = ref.prev;
    node.next = ref;
    ref.prev.next = node;
    ref.prev = node;
}
class IterableProfiler {
    _destroyed = false;
    _typeError = false;
    cacheHash = [];
    out = null;
    _trackBy = null;
    constructor(trackBy) {
        this._trackBy = trackBy;
    }
    trackBy(item, index) {
        if (this._trackBy) {
            if (isfunction(this._trackBy)) {
                return this._trackBy(item, index);
            } else if (isstring(this._trackBy)) {
                return item[this._trackBy];
            }
        }
        return item || index;
    }
    diff(source) {
        if (this._destroyed)
            return false;
        if (source && !(source instanceof Array)) {
            if (!this._typeError) {
                this._typeError = true;
                return errorBuilder(new TypeError('Collection should be an array'));
            }
            return false;
        }
        this.out = {
            deleted: [],
            order: []
        };
        this._typeError = false;
        var noSource = !source || !source.length;
        if (noSource && (!this.cacheHash || !this.cacheHash.length)) {
            return false;
        }
        if (noSource && this.cacheHash.length) {
            for (var d = this.cacheHash.length - 1; d >= 0; d--) {
                this.out.deleted.push(d);
            }
            this.cacheHash.length = 0;
            return true;
        }
        var len = source.length;
        var seenHashes = new Set();
        var newHash = new Array(len);
        var newHashIndex = new Map();
        for (var idx = 0; idx < len; idx++) {
            var hash = this.trackBy(source[idx], idx);
            this.checkDuplicateRepeater(hash, seenHashes);
            seenHashes.add(hash);
            newHash[idx] = hash;
            newHashIndex.set(hash, idx);
        }
        var oldHash = this.cacheHash;
        var deleted = [];
        var working = [];
        for (var oi = 0; oi < oldHash.length; oi++) {
            if (newHashIndex.has(oldHash[oi])) {
                working.push(oldHash[oi]);
            } else {
                deleted.push(oi);
            }
        }
        deleted.sort(function (a, b) {
            return b - a;
        });
        this.out.deleted = deleted;
        var tail = new DiffNode(TAIL_SENTINEL);
        tail.next = tail;
        tail.prev = tail;
        var nodeByHash = new Map();
        var prevNode = tail;
        for (var wi = 0; wi < working.length; wi++) {
            var wNode = new DiffNode(working[wi]);
            nodeByHash.set(working[wi], wNode);
            wNode.prev = prevNode;
            prevNode.next = wNode;
            prevNode = wNode;
        }
        prevNode.next = tail;
        tail.prev = prevNode;
        var operationOrder = [];
        var isDirty = deleted.length > 0;
        var cursor = tail.next;
        for (var i = 0; i < len; i++) {
            var h = newHash[i];
            if (cursor.hash === h) {
                cursor = cursor.next;
                continue;
            }
            var target = nodeByHash.get(h);
            if (target) {
                var prevIndex = i;
                var scan = cursor;
                while (scan !== target) {
                    prevIndex++;
                    scan = scan.next;
                }
                unlinkNode(target);
                insertNodeBefore(target, cursor);
                operationOrder.push({
                    index: i,
                    prevIndex: prevIndex,
                    state: 'move'
                });
            } else {
                var created = new DiffNode(h);
                nodeByHash.set(h, created);
                insertNodeBefore(created, cursor);
                operationOrder.push({
                    index: i,
                    state: 'create'
                });
            }
            isDirty = true;
        }
        this.out.order = operationOrder;
        this.cacheHash = newHash;
        return isDirty;
    }
    forEachDeleted(callback) {
        this.out.deleted.forEach(callback);
    }
    forEachOperation(callback) {
        var len = this.out.order.length;
        for (var i = 0; i < len; i++) {
            if (this.out.order[i]) {
                callback(this.out.order[i], i);
            }
        }
    }
    checkDuplicateRepeater(hash, seenHashes) {
        if (seenHashes.has(hash)) {
            errorBuilder('Duplicate values are not allowed in repeaters. Use \'track by\' expression to specify unique keys');
        }
    }
    attachTrackBy(trackBy) {
        this._trackBy = trackBy;
    }
    destroy() {
        this._destroyed = true;
        this.cacheHash.length = 0;
        this.out = null;
    }
}
function InterceptorResolver(interceptorToken, locals) {
    var interceptors = Inject(interceptorToken);
    return new Promise(function (resolve, reject) {
        if (!interceptors || !interceptors.length) {
            return resolve(locals);
        }
        var len = 0;
        function next() {
            var interceptor = interceptors[len];
            len++;
            if (interceptor) {
                interceptor.resolve(locals, next, reject);
            } else {
                resolve(locals);
            }
        }
        next();
    });
}
var lazyLoaderCachedPaths = new Map();
class LazyLoader {
    constructor(dropZone) {
        this.dropZone = dropZone;
        this.setPath = function (path) {
            this.sourcePath = path;
            return this;
        };
    }
    static staticLoader() {
        LazyLoader._resolve.apply({}, arguments);
    }
    static _resolve(filePaths, callback, type, assetURL, dropZone) {
        assetURL = assetURL || '';
        var totalFiles = 0, resolved = 0, failed = 0, _triggerImmediately = [];
        var types = [
            'js',
            'css'
        ];
        var clink = (path, ftype, params) => {
            var url = path.includes('//') ? path : [
                assetURL,
                path,
                ftype ? '.' : '',
                ftype
            ].join('');
            var urlParams = new URLSearchParams();
            if (params) {
                Object.keys(params).forEach(param => {
                    urlParams.set(param, params[param]);
                });
            }
            return url + urlParams;
        };
        if (typeof callback !== 'function') {
            callback = function () {
            };
        }
        if (Array.isArray(filePaths)) {
            for (var filePath of filePaths) {
                var url = filePath;
                var attrs = {};
                var params = {};
                if (typeof filePath == 'object') {
                    url = filePath.url;
                    attrs = filePath.attrs;
                    params = filePath.params;
                    type = type || LazyLoader.getExt(filePath.name);
                    if (filePath.content && type) {
                        url = URL.createObjectURL(new Blob([filePath.content], LazyLoader.mimeType(type)));
                    }
                }
                if (!url || lazyLoaderCachedPaths.has(url)) {
                    const cached = lazyLoaderCachedPaths.get(url);
                    if (cached) {
                        cached.callbacks.push(callback);
                        if (cached.resolved && !_triggerImmediately.includes(url)) {
                            _triggerImmediately.push(url);
                        }
                    }
                    continue;
                }
                var ftype = type || LazyLoader.getExt(url);
                if (types.includes(ftype)) {
                    totalFiles++;
                    lazyLoaderCachedPaths.set(url, {
                        callbacks: [callback],
                        resolved: false
                    });
                    var element = _createElement(clink(url, type || '', params), ftype, attrs);
                    attachListener(element, url);
                    (dropZone || document.getElementsByTagName('head')[0]).appendChild(element);
                }
            }
        }
        function _createElement(filePath, type, attrs) {
            var element = null;
            if (type === 'js') {
                element = document.createElement('script');
                element.src = filePath;
            } else if (type == 'css') {
                element = document.createElement('link');
                element.setAttribute('type', 'text/css');
                element.setAttribute('href', filePath);
                element.setAttribute('rel', 'stylesheet');
            }
            if (attrs) {
                Object.keys(attrs).forEach(attr => {
                    element[attr] = attrs[attr];
                });
            }
            element.charset = 'utf-8';
            element.timeout = 120;
            element.async = true;
            return element;
        }
        function attachListener(element, filePath) {
            element.onload = function () {
                resolved++;
                triggerCallack(filePath);
                element.parentNode.removeChild(element);
            };
            element.onerror = element.onabort = function () {
                failed++;
                triggerCallack(filePath);
                lazyLoaderCachedPaths.delete(filePath);
            };
        }
        function triggerCallack(filePath) {
            var allResolved = totalFiles == resolved + failed;
            if (allResolved) {
                const cached = lazyLoaderCachedPaths.get(filePath);
                cached.resolved = true;
                while (cached.callbacks.length) {
                    const _callback = cached.callbacks.shift();
                    _callback({
                        failed,
                        resolved,
                        allResolved
                    });
                }
            }
        }
        _triggerImmediately.forEach(triggerCallack);
    }
    static resolveModule(filePaths, callback) {
        if (typeof callback !== 'function') {
            callback = function () {
            };
        }
        var paths = Array.isArray(filePaths) ? filePaths : [filePaths];
        var totalFiles = paths.length, resolved = 0, failed = 0;
        var modules = {};
        var _triggerImmediately = [];
        function triggerCallback(url) {
            var allResolved = totalFiles == resolved + failed;
            if (allResolved) {
                paths.forEach(function (path) {
                    var cached = lazyLoaderCachedPaths.get(path);
                    if (!cached)
                        return;
                    cached.resolved = true;
                    while (cached.callbacks.length) {
                        var _callback = cached.callbacks.shift();
                        _callback({
                            failed,
                            resolved,
                            allResolved,
                            modules
                        });
                    }
                });
            }
        }
        paths.forEach(function (url) {
            if (!url || lazyLoaderCachedPaths.has(url)) {
                var cached = lazyLoaderCachedPaths.get(url);
                if (cached) {
                    cached.callbacks.push(callback);
                    if (cached.resolved) {
                        resolved++;
                        if (cached.module)
                            modules[url] = cached.module;
                        if (!_triggerImmediately.includes(url))
                            _triggerImmediately.push(url);
                    }
                }
                return;
            }
            lazyLoaderCachedPaths.set(url, {
                callbacks: [callback],
                resolved: false,
                module: null
            });
            import(url).then(function (mod) {
                resolved++;
                modules[url] = mod;
                var cached = lazyLoaderCachedPaths.get(url);
                if (cached)
                    cached.module = mod;
                triggerCallback(url);
            }).catch(function () {
                failed++;
                triggerCallback(url);
                lazyLoaderCachedPaths.delete(url);
            });
        });
        _triggerImmediately.forEach(triggerCallback);
    }
    static mimeType(type) {
        var mimeTypes = {
            js: 'application/javascript',
            css: 'text/css',
            json: 'application/json',
            txt: 'application/text'
        };
        return { type: mimeTypes[type || 'js'] };
    }
    static getExt(name) {
        return (name || '').substring(name.lastIndexOf('.') + 1);
    }
    js(obj, callback) {
        LazyLoader._resolve(obj, callback, 'js', this.resourcePath, this.dropZone);
    }
    css(obj) {
        LazyLoader._resolve(obj, null, 'css', this.resourcePath, this.dropZone);
    }
    jscs(obj, callback) {
        for (var type in obj) {
            LazyLoader._resolve(obj[type], callback, type, this.resourcePath, this.dropZone);
        }
        return this;
    }
}
var jeliContext = Object.create({
    buildTime: __buildOptions.buildTime,
    version: __buildOptions.version,
    debug: jeliDebugger
});
function jeliQuerySelector(root, nativeNode) {
    if (!root)
        return null;
    if ((root.nativeElement || root.nativeNode) === nativeNode) {
        return root;
    }
    if (root.children) {
        for (var child of root.children) {
            var found = jeliQuerySelector(child, nativeNode);
            if (found)
                return found;
        }
    }
    return null;
}
function jeliDebugger(element) {
    if (!element || !_isDebuggerEnabled())
        return null;
    var ref = jeliQuerySelector(_getBootstrapRoot(), element);
    return ref ? ref.context : null;
}
function describeDep(dep) {
    if (!dep)
        return String(dep);
    if (dep instanceof ProviderToken)
        return dep.tokenName + (dep.multiple ? '[]' : '');
    if (typeof dep === 'function')
        return dep.name || '(anonymous)';
    if (dep.tokenName)
        return dep.tokenName + (dep.optional ? '?' : '');
    return String(dep);
}
function getComponentTree(elementRef) {
    var root = elementRef || _getBootstrapRoot();
    if (!root)
        return null;
    return walk(root);
    function walk(ref) {
        var node = {
            refId: ref.refId,
            tagName: ref.tagName,
            isComponent: !!ref.isc,
            children: (ref.children || []).map(walk)
        };
        if (ref.isc) {
            node.componentInstance = ref.componentInstance;
        }
        return node;
    }
}
function inspectElement(nativeNode) {
    return jeliQuerySelector(_getBootstrapRoot(), nativeNode);
}
function inspectComponent(target) {
    var ref = target && target.nodeType ? jeliQuerySelector(_getBootstrapRoot(), target) : null;
    var instance = ref ? ref.componentInstance : target;
    if (!instance || !instance.constructor || !instance.constructor.ctors)
        return null;
    var di = instance.constructor.ctors.DI || [];
    return {
        selector: instance.constructor.ctors.selector,
        instance: instance,
        refId: ref ? ref.refId : undefined,
        changeDetectorStatus: ref ? ref.changeDetector.status : undefined,
        dependencies: di.map(function (dep) {
            return {
                description: describeDep(dep),
                resolvedInstance: typeof dep === 'function' && dep.ctors ? dep.ctors.instance : undefined
            };
        })
    };
}
function getSingletonInstances() {
    var registry = getSingletonRegistry();
    if (!registry)
        return null;
    return Array.from(registry.entries()).map(function (entry) {
        return {
            name: entry[0].name || '(anonymous)',
            instance: entry[1]
        };
    });
}
global.jeli = Object.assign(global.jeli || {}, jeliContext);
global.jeli.devtools = {
    getComponentTree: getComponentTree,
    inspectElement: inspectElement,
    inspectComponent: inspectComponent,
    enableSingletonTracking: enableSingletonTracking,
    disableSingletonTracking: disableSingletonTracking,
    getSingletonInstances: getSingletonInstances
};
var nativeTimeout = window.setTimeout;
var nativeInterval = window.setInterval;
window.setTimeout = function (fn, timer, trigerDetector) {
    return nativeTimeout(trigger(fn, trigerDetector), timer);
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
;__required.r(exports, 'ElementCompiler', ElementCompiler);
__required.r(exports, 'errorBuilder', errorBuilder);
__required.r(exports, 'enableSingletonTracking', enableSingletonTracking);
__required.r(exports, 'disableSingletonTracking', disableSingletonTracking);
__required.r(exports, 'getSingletonRegistry', getSingletonRegistry);
__required.r(exports, 'ProviderToken', ProviderToken);
__required.r(exports, 'Inject', Inject);
__required.r(exports, 'AutoWire', AutoWire);
__required.r(exports, 'wireResolvers', wireResolvers);
__required.r(exports, 'AbstractInjectorInstance', AbstractInjectorInstance);
__required.r(exports, 'closureRef', closureRef);
__required.r(exports, 'resolveClosureRef', resolveClosureRef);
__required.r(exports, 'noop', noop);
__required.r(exports, 'enableLifecyclePromiseTracking', enableLifecyclePromiseTracking);
__required.r(exports, 'disableLifecyclePromiseTracking', disableLifecyclePromiseTracking);
__required.r(exports, 'drainLifecyclePromises', drainLifecyclePromises);
__required.r(exports, 'LifeCycle', LifeCycle);
__required.r(exports, 'TemplateRef', TemplateRef);
__required.r(exports, 'staticInjectionToken', staticInjectionToken);
__required.r(exports, 'ComponentInjectors', ComponentInjectors);
__required.r(exports, 'ComponentRef', ComponentRef);
__required.r(exports, 'Observer', Observer);
__required.r(exports, 'createCustomElement', createCustomElement);
__required.r(exports, 'CompileNativeElement', CompileNativeElement);
__required.r(exports, 'ElementRef', ElementRef);
__required.r(exports, 'INITIALIZERS', INITIALIZERS);
__required.r(exports, 'APP_BOOTSTRAP', APP_BOOTSTRAP);
__required.r(exports, 'APP_BASE_HREF', APP_BASE_HREF);
__required.r(exports, 'APP_ASSET_URL', APP_ASSET_URL);
__required.r(exports, 'enableHydrationMode', enableHydrationMode);
__required.r(exports, 'disableHydrationMode', disableHydrationMode);
__required.r(exports, 'bootStrapApplication', bootStrapApplication);
__required.r(exports, 'compileModule', compileModule);
__required.r(exports, 'ChangeDetector', ChangeDetector);
__required.r(exports, '_getBootstrapRoot', _getBootstrapRoot);
__required.r(exports, '_isDebuggerEnabled', _isDebuggerEnabled);
__required.r(exports, 'ViewParser', ViewParser);
__required.r(exports, 'scheduler', scheduler);
__required.r(exports, 'elementMutationObserver', elementMutationObserver);
__required.r(exports, 'ObserveUntilDestroyed', ObserveUntilDestroyed);
__required.r(exports, 'setupAttributeObservers', setupAttributeObservers);
__required.r(exports, 'createLocalVariables', createLocalVariables);
__required.r(exports, 'getElementContext', getElementContext);
__required.r(exports, 'DOMHelper', DOMHelper);
__required.r(exports, 'AttributeAppender', AttributeAppender);
__required.r(exports, 'sce', sce);
__required.r(exports, 'ElementStyle', ElementStyle);
__required.r(exports, 'ElementClassList', ElementClassList);
__required.r(exports, 'QueryList', QueryList);
__required.r(exports, 'Subject', Subject);
__required.r(exports, 'SubscriptionStates', SubscriptionStates);
__required.r(exports, 'Subscription', Subscription);
__required.r(exports, 'Observable', Observable);
__required.r(exports, 'AbstractObserver', AbstractObserver);
__required.r(exports, 'ViewRef', ViewRef);
__required.r(exports, 'TextNodeRef', TextNodeRef);
__required.r(exports, 'EventHandler', EventHandler);
__required.r(exports, 'CustomEventHandler', CustomEventHandler);
__required.r(exports, 'ProxyEvent', ProxyEvent);
__required.r(exports, 'resolveIdentifier', resolveIdentifier);
__required.r(exports, 'resolveCall', resolveCall);
__required.r(exports, 'interpolationHelper', interpolationHelper);
__required.r(exports, 'animate', animate);
__required.r(exports, 'createAnimation', createAnimation);
__required.r(exports, 'StateManager', StateManager);
__required.r(exports, 'EventEmitter', EventEmitter);
__required.r(exports, 'Promise2', Promise2);
__required.r(exports, 'EventManager', EventManager);
__required.r(exports, 'debounce', debounce);
__required.r(exports, 'rxDebounceTime', rxDebounceTime);
__required.r(exports, 'rxWhile', rxWhile);
__required.r(exports, 'rxUntilChanged', rxUntilChanged);
__required.r(exports, 'rxWait', rxWait);
__required.r(exports, 'rxEvents', rxEvents);
__required.r(exports, 'rxWatch', rxWatch);
__required.r(exports, 'rxLoop', rxLoop);
__required.r(exports, 'rxTimeout', rxTimeout);
__required.r(exports, 'rxInterval', rxInterval);
__required.r(exports, 'EventDebounce', EventDebounce);
__required.r(exports, 'MediaQueryEvent', MediaQueryEvent);
__required.r(exports, 'ComponentFactoryResolver', ComponentFactoryResolver);
__required.r(exports, 'IterableProfiler', IterableProfiler);
__required.r(exports, 'InterceptorResolver', InterceptorResolver);
__required.r(exports, 'LazyLoader', LazyLoader);

},
1146 : (module, exports, __required, global) => {
"use strict";
const helpers = __required(1144);
const isundefined = helpers.isundefined;
const isfunction = helpers.isfunction;
const isarray = helpers.isarray;
const isobject = helpers.isobject;
const isequal = helpers.isequal;
const core = __required(1145);
const ElementClassList = core.ElementClassList;
const IterableProfiler = core.IterableProfiler;
const __buildOptions = {
    'buildTime': 1784303339255,
    'version': '1.0.0',
    'baseHref': '',
    'assetURL': '',
    'production': false
};
class jForRow {
    constructor(context, index, count) {
        this.count = count;
        this.index = index;
        this.$context = context;
    }
    get first() {
        return this.index > 0;
    }
    get last() {
        return this.count - 1 === this.index;
    }
    get even() {
        return this.index % 2 === 0;
    }
    get odd() {
        return !this.even;
    }
}
class ForDirective {
    constructor(viewRef, templateRef) {
        this.viewRef = viewRef;
        this.templateRef = templateRef;
        this.iterable = new IterableProfiler();
        this._forTrackBy = null;
        this._forValue = null;
        this._isForIn = false;
        this._isForOf = false;
        this.inProgress = false;
    }
    set forIn(value) {
        this._isForIn = true;
        this._forValue = value;
        this.willObserve();
    }
    get forIn() {
        if (!this._isForIn)
            return null;
        return this._forValue;
    }
    set forOf(value) {
        this._isForOf = true;
        this._forValue = value;
        this.willObserve();
    }
    get forOf() {
        if (!this._isForOf)
            return null;
        return this._forValue;
    }
    set forTrackBy(fn) {
        this.iterable.attachTrackBy(fn);
        this._forTrackBy = fn;
    }
    get forTrackBy() {
        return this._forTrackBy;
    }
    _listenerFn() {
        this.iterable.forEachDeleted(index => {
            this.viewRef.remove(index);
        });
        this.iterable.forEachOperation(item => {
            switch (item.state) {
            case 'create':
                var context = new jForRow(this._forValue[item.index], item.index, null);
                this.viewRef.createEmbededView(this.templateRef, context, item.index);
                break;
            case 'update':
                var view = this.viewRef.get(item.index);
                view.updateContext({ $context: this._forValue[item.index] });
                break;
            case 'move':
                this.viewRef.move(item.prevIndex, item.index);
                break;
            }
        });
        this.viewRef.updateContext();
        this.inProgress = false;
    }
    willObserve() {
        var changes = this.iterable.diff(this._forValue);
        if (changes && !this.inProgress) {
            this.inProgress = true;
            this._listenerFn();
        }
    }
    viewDidDestroy() {
        this.viewRef.clearView();
        this.iterable.destroy();
        this.viewRef = null;
        this.templateRef = null;
    }
}
ForDirective.ctors = {
    selector: 'for',
    props: {
        forIn: {},
        forOf: {},
        forTrackBy: { type: 'any' }
    },
    DI: [
        {
            optional: true,
            tokenName: 'ViewRef'
        },
        {
            optional: true,
            tokenName: 'TemplateRef'
        }
    ]
};
class IfDirective {
    constructor(viewRef, templateRef) {
        this.viewRef = viewRef;
        this._jIfValue = false;
        this._thenTemplateRef = templateRef;
        this._elseTemplateRef = null;
        this._thenView = null;
        this._elseView = null;
    }
    set if(value) {
        this._jIfValue = value;
        this.createView();
    }
    get if() {
        return this._jIfValue;
    }
    set ifElse(templateRef) {
        this._elseTemplateRef = templateRef;
        this.createView();
    }
    set ifThen(templateRef) {
        if (templateRef) {
            this._thenTemplateRef = templateRef;
            this.createView();
        }
    }
    createView() {
        if (this._jIfValue) {
            if (!this._thenView) {
                this.viewRef.clearView();
                this._elseView = null;
                if (this._thenTemplateRef) {
                    this._thenView = this.viewRef.createEmbededView(this._thenTemplateRef);
                }
            }
        } else {
            if (!this._elseView) {
                this.viewRef.clearView();
                this._thenView = null;
                if (this._elseTemplateRef) {
                    this._elseView = this.viewRef.createEmbededView(this._elseTemplateRef);
                }
            }
        }
    }
}
IfDirective.ctors = {
    selector: 'if',
    props: {
        if: {},
        ifElse: { type: 'TemplateRef' },
        ifThen: { type: 'TemplateRef' }
    },
    DI: [
        {
            optional: true,
            tokenName: 'ViewRef'
        },
        {
            optional: true,
            tokenName: 'TemplateRef'
        }
    ]
};
class SwitchViewContext {
    constructor(viewRef, templateRef) {
        this._isCreated = false;
        this.viewRef = viewRef;
        this.templateRef = templateRef;
    }
    setState(create) {
        if (create && !this._isCreated) {
            this.createView();
        } else if (!create && this._isCreated) {
            this.destroyView();
        }
    }
    createView() {
        this._isCreated = true;
        this.viewRef.createEmbededView(this.templateRef);
    }
    destroyView() {
        this._isCreated = false;
        this.viewRef.clearView();
    }
}
class SwitchDirective {
    constructor() {
        this._caseCount = 0;
        this.defaultViews;
        this._lastCaseCheckIndex = 0;
        this._isDefaultCase = false;
        this._previousValue = undefined;
        this._lastCaseMatched = false;
    }
    _addCase() {
        this._caseCount++;
    }
    _addDefaultView(viewContext) {
        if (!this.defaultViews) {
            this.defaultViews = [];
        }
        this.defaultViews.push(viewContext);
    }
    set switch(value) {
        this._jSwitch = value;
        if (isequal(this._caseCount, 0)) {
            this._compileDefaultView(true);
        }
    }
    _compileDefaultView(isDefaultCase) {
        if (this.defaultViews && !isequal(this._isDefaultCase, isDefaultCase)) {
            this._isDefaultCase = isDefaultCase;
            for (var i = 0; i < this.defaultViews.length; i++) {
                var defaultView = this.defaultViews[i];
                defaultView.setState(isDefaultCase);
            }
        }
    }
    viewDidDestroy() {
    }
    _matchCase(caseValue) {
        var matched = isequal(this._jSwitch, caseValue);
        this._lastCaseMatched = this._lastCaseMatched || matched;
        this._lastCaseCheckIndex++;
        if (isequal(this._lastCaseCheckIndex, this._caseCount)) {
            this._compileDefaultView(!this._lastCaseMatched);
            this._lastCaseCheckIndex = 0;
            this._lastCaseMatched = false;
        }
        return matched;
    }
}
SwitchDirective.ctors = {
    selector: 'switch',
    props: { switch: {} }
};
class SwitchCaseDirective {
    constructor(viewRef, templateRef, jSwitch) {
        jSwitch._addCase();
        this._view = new SwitchViewContext(viewRef, templateRef);
        this.willObserve = function () {
            this._view.setState(jSwitch._matchCase(this.switchCase));
        };
    }
}
SwitchCaseDirective.ctors = {
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
    ]
};
function SwitchDefaultDirective(viewRef, templateRef, jSwitch) {
    jSwitch._addDefaultView(new SwitchViewContext(viewRef, templateRef));
}
SwitchDefaultDirective.ctors = {
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
    ]
};
class ClassDirective {
    constructor(elementRef) {
        this._jClass = undefined;
        this.lastAddedClass = '';
        this.elementRef = elementRef;
    }
    _changeClass() {
        if (isobject(this._jClass)) {
            ElementClassList.add(this.elementRef.nativeElement, this._jClass);
        } else {
            if (this.lastAddedClass == this._jClass)
                return;
            ElementClassList.remove(this.elementRef.nativeElement, this.lastAddedClass);
            if (this._jClass) {
                ElementClassList.add(this.elementRef.nativeElement, this._jClass);
            }
            this.lastAddedClass = this._jClass;
        }
    }
    get class() {
        return this._jClass;
    }
    set class(value) {
        this._jClass = value;
        this._changeClass();
    }
    viewDidDestroy() {
        this.elementRef = null;
        this._jClass = null;
        this.lastAddedClass = null;
    }
}
ClassDirective.ctors = {
    selector: 'jClass',
    props: { class: { value: 'jClass' } },
    DI: [{
            optional: true,
            tokenName: 'ElementRef'
        }]
};
class capitalizeFilter {
    constructor() {
    }
    compile(value) {
        if (!value)
            return '';
        if (typeof value !== 'string')
            return value;
        return `${ value.charAt(0).toUpperCase() }${ value.slice(1).toLowerCase() }`;
    }
}
capitalizeFilter.ctors = {};
class NumberFilter {
    constructor() {
    }
    compile(value, factoRize) {
        if (!isarray(factoRize)) {
            factoRize = [
                factoRize,
                3,
                ',',
                '.'
            ];
        }
        return this._format.apply(value || 0, factoRize);
    }
    _format(n, x, s, c) {
        if (!!window.Intl) {
            var numFormat = new Intl.NumberFormat(navigator.language);
            return numFormat.format(this);
        } else {
            var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')', num = this.toFixed(Math.max(0, ~~n));
            return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
        }
    }
}
NumberFilter.ctors = {};
class CurrencyFilter {
    constructor(numberFilter) {
        this.numberFilter = numberFilter;
    }
    compile(value, style) {
        if (!!window.Intl) {
            var currencyFormat = new Intl.NumberFormat(window.navigator.language, style);
            return currencyFormat.format(value);
        } else {
            return `${ style && style.currency } ${ this.numberFilter.format(value) }`;
        }
    }
}
CurrencyFilter.ctors = { DI: [NumberFilter] };
class jsonFilterFn {
    compile(value, spacing) {
        return value && typeof value === 'object' ? JSON.stringify(value, null, parseInt(spacing || '0')) : value;
    }
}
jsonFilterFn.ctors = {};
class lowerCaseFilter {
    constructor() {
    }
    compile(value) {
        return (value || '').toLowerCase();
    }
}
lowerCaseFilter.ctors = {};
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
QueryFactory.ctors = {};
class orderByFilterFn {
    constructor() {
    }
    compile(value, propertyName) {
        if (value.length < 2) {
            return value;
        }
        var _queryApi = new QueryFactory(value);
        var newList;
        var reverse;
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
    }
}
orderByFilterFn.ctors = {};
class upperCaseFilter {
    constructor() {
    }
    compile(value) {
        return (value || '').toUpperCase();
    }
}
upperCaseFilter.ctors = {};
class whereFilterFn {
    constructor() {
    }
    compile(model, query) {
        return new QueryFactory(model).where(query);
    }
}
whereFilterFn.ctors = {};
class FilterPipe {
    constructor() {
    }
    compile(array, expression) {
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
            predicateFn = this._createPredicator(expression, matchAny);
            break;
        default:
            return array;
        }
        return Array.prototype.filter.call(array, predicateFn);
    }
    _createPredicator(expression, matchAny) {
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
FilterPipe.ctors = {};
class ReversePipe {
    constructor() {
    }
    compile(data) {
        if (!Array.isArray(data)) {
            console.error('Reverse pipe expected array but got ', typeof data);
            return;
        }
        return data.reverse();
    }
}
ReversePipe.ctors = {};
class SizeToUnitPipe {
    constructor() {
    }
    compile(size) {
        var t = Math.floor(Math.log(size, 1024));
        var unit = [
            'b',
            'kb',
            'mb',
            'gb',
            'tb',
            'pb'
        ];
        return Math.round(size / Math.pow(1024, t), 2) + ' ' + unit[t];
    }
}
SizeToUnitPipe.ctors = {};
function CommonModule() {
}__required.r(exports, 'CommonModule', CommonModule);
__required.r(exports, 'ForDirective', ForDirective);
__required.r(exports, 'IfDirective', IfDirective);
__required.r(exports, 'SwitchDirective', SwitchDirective);
__required.r(exports, 'SwitchCaseDirective', SwitchCaseDirective);
__required.r(exports, 'SwitchDefaultDirective', SwitchDefaultDirective);
__required.r(exports, 'ClassDirective', ClassDirective);
__required.r(exports, 'capitalizeFilter', capitalizeFilter);
__required.r(exports, 'CurrencyFilter', CurrencyFilter);
__required.r(exports, 'NumberFilter', NumberFilter);
__required.r(exports, 'jsonFilterFn', jsonFilterFn);
__required.r(exports, 'lowerCaseFilter', lowerCaseFilter);
__required.r(exports, 'orderByFilterFn', orderByFilterFn);
__required.r(exports, 'QueryFactory', QueryFactory);
__required.r(exports, 'upperCaseFilter', upperCaseFilter);
__required.r(exports, 'whereFilterFn', whereFilterFn);
__required.r(exports, 'FilterPipe', FilterPipe);
__required.r(exports, 'ReversePipe', ReversePipe);
__required.r(exports, 'SizeToUnitPipe', SizeToUnitPipe);

},
1147 : (module, exports, __required, global) => {
"use strict";
const core = __required(1145);
const ProviderToken = core.ProviderToken;
const __buildOptions = {
    'buildTime': 1784303339295,
    'version': '1.0.0',
    'baseHref': '',
    'assetURL': '',
    'production': false
};
function leapYear(year) {
    return year % 4 == 0 ? 1 : 0;
}
function getDays(month, year) {
    const ar = [
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
}
function DateStringConverter(dateString) {
    var str2Date = null;
    if (typeof dateString === 'string') {
        str2Date = new Date(dateString);
        if (isNaN(str2Date.getTime())) {
            var dateRegEx = dateString.match(/(\d+)[-./](\d+)[-./](\d+)(\s(\d+):(\d+):(\d+)|)/);
            if (dateRegEx) {
                dateRegEx.shift();
                str2Date = new Date(dateRegEx[0], dateRegEx[1], dateRegEx[2], dateRegEx[3] || 0, dateRegEx[4] || 0, dateRegEx[5] || 0);
            }
        }
    }
    return str2Date || new Date();
}
function setText(text, future) {
    return text + (future ? ' from now' : ' ago');
}
function generateTimeAgo(obj, future) {
    const setters = {
        hours: () => {
            if (obj.time_difference.hours == 1) {
                obj.timeago = setText('an hour', future);
            } else {
                obj.timeago = obj.time_difference.hours + setText(' hours', future);
            }
        },
        minutes: () => {
            if (obj.time_difference.minutes == 1) {
                obj.timeago = setText('1 minute', future);
            } else {
                obj.timeago = setText(`${ obj.time_difference.minutes } minutes`, future);
            }
        },
        weeks: () => {
            if (obj.time_difference.weeks == 1) {
                obj.timeago = setText('1 week');
            } else {
                obj.timeago = setText(`${ obj.time_difference.weeks } weeks`, future);
            }
        },
        days: () => {
            if (obj.time_difference.days == 1) {
                obj.timeago = future ? 'Tomorrow' : 'Yesterday';
            } else {
                obj.timeago = +setText(`${ obj.time_difference.days } days`, future);
            }
        },
        months: () => {
            const months = obj.time_difference.months;
            if (months <= 12) {
                if (months == 1) {
                    obj.timeago = setText('1 month', future);
                } else {
                    obj.timeago = setText(`${ months } months`, future);
                }
            } else {
                let diff = '' + (months / 12).toFixed(1);
                diff = diff.split('.').map(Number);
                obj.timeago = setText(`${ diff[0] } years ${ diff[1] > 0 ? ', ' + diff[1] + ' months' : '' }`, future);
            }
        },
        seconds: () => {
            obj.timeago = obj.time_difference.seconds + setText(' seconds', future);
        }
    };
    if (future) {
        const days = obj.time_difference.days;
        if (days > 30) {
            setters.months();
        } else if (days) {
            setters.days();
        } else if (obj.time_difference.hours <= 24 && obj.time_difference.minutes > 60) {
            setters.hours();
        } else if (obj.time_difference.minutes <= 60) {
            setters.minutes();
        } else if (obj.time_difference.seconds <= 60) {
            setters.seconds();
        }
    } else {
        if (obj.time_difference.seconds <= 60) {
            setters.seconds();
        } else if (obj.time_difference.minutes <= 60) {
            setters.minutes();
        } else {
            if (obj.time_difference.hours <= 24) {
                setters.hours();
            } else {
                if (obj.time_difference.days <= 7) {
                    setters.days();
                } else {
                    if (obj.time_difference.weeks <= 4) {
                        setters.weeks();
                    } else {
                        setters.months();
                    }
                }
            }
        }
    }
}
class CalendarObject {
    constructor(firstDay, lastDate, date) {
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
class DatetimeService {
    constructor(dateTimeMonthHalf, dateTimeMonthFull, dateTimeDayHalf, dateTimeDayFull) {
        var dateFormatRegExp = /D{1,4}|M{1,4}|YY(?:YY)?|([HhMmsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
        this.dateTimeDayHalf = dateTimeDayHalf;
        this.dateTimeMonthHalf = dateTimeMonthHalf;
        this.dateTimeMonthFull = dateTimeMonthFull;
        this.dateTimeDayFull = dateTimeDayFull;
        this.format = function (date, format) {
            const toFormat = this.timeConverter(date);
            return toFormat && String(format).replace(dateFormatRegExp, $0 => $0 in toFormat.flags ? toFormat.flags[$0] : $0.slice(1, $0.length - 1));
        };
    }
    buildFullCalendar(config) {
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
    }
    _dateTime(datetime) {
        return DatetimeService.staticDateTime(datetime);
    }
    timeConverter(dateToParse) {
        return DatetimeService.staticTimeConverter(dateToParse, this);
    }
    static staticDateTime(datetime) {
        datetime = isNaN(Number(datetime)) ? datetime : Number(datetime);
        const outputDate = typeof datetime == 'number' ? new Date(datetime) : DateStringConverter(datetime);
        const g = j => (typeof j == 'number' && j < 10 ? '0' : '') + j;
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
    }
    static staticTimeConverter(dateToParse, context) {
        if (!dateToParse)
            dateToParse = DatetimeService.staticDateTime();
        var currentDateTime = DatetimeService.staticDateTime();
        var date2ParseObject = dateToParse.current_time ? dateToParse : DatetimeService.staticDateTime(dateToParse);
        var j = date2ParseObject.getTime();
        var l = currentDateTime.getTime();
        var B = 1000 * 60 * 60 * 24;
        var result = {};
        var p = m => (typeof m == 'number' && m < 10 ? '0' : '') + m;
        if (isNaN(date2ParseObject.getTime())) {
            const f = dateToParse.replace(' ', 'T');
            const r = dateToParse.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/);
            if (r) {
                const D = r[1] + '-' + p(r[2] - 1) + '-' + r[3] + ' ' + r[4] + ':' + r[5] + ':' + r[6];
                date2ParseObject = new Date(Date.fromISO(f));
                j = date2ParseObject.getTime();
            } else {
                console.warn('[Datetime] Invalid Date received', dateToParse);
                return null;
            }
        }
        const future = j > l;
        const futureDiff = future ? j - l : l - j;
        const days = Math.floor(futureDiff / B);
        result.getTime = () => j;
        result.ctimestamp = l;
        result.timestamp = j;
        result.time_difference = {
            seconds: Math.floor(futureDiff / 1000),
            minutes: Math.floor(futureDiff / 60000),
            hours: Math.floor(futureDiff / 3600000),
            weeks: Math.floor(days / 7),
            days,
            months: Math.floor(days / 30)
        };
        const year = date2ParseObject.getFullYear(), month = date2ParseObject.getMonth() + 1, day = date2ParseObject.getDate(), weekDay = date2ParseObject.getDay(), timeSettings = date2ParseObject.current_time.split(' ')[1].split(':'), hours = timeSettings[0], minute = parseInt(timeSettings[1]), seconds = parseInt(timeSettings[2]);
        result.flags = {
            YYYY: year,
            YY: String(year).slice(2),
            M: month,
            MM: p(month),
            MMM: context.dateTimeMonthHalf[month - 1],
            MMMM: context.dateTimeMonthFull[month - 1],
            D: day,
            DD: p(day),
            DDD: context.dateTimeDayHalf[weekDay],
            DDDD: context.dateTimeDayFull[weekDay],
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
        result.today = `${ context.dateTimeDayHalf[currentDateTime.getDay()] }, ${ currentDateTime.getDate() } ${ context.dateTimeMonthHalf[currentDateTime.getMonth()] }`;
        if (currentDateTime.getFullYear() > date2ParseObject.getFullYear()) {
            result.date = `${ context.dateTimeMonthHalf[date2ParseObject.getMonth()] }, ${ date2ParseObject.getDate() } ${ date2ParseObject.getFullYear() }`;
        } else {
            result.date = `${ context.dateTimeDayHalf[date2ParseObject.getDay()] }, ${ date2ParseObject.getDate() } ${ context.dateTimeMonthHalf[date2ParseObject.getMonth()] }`;
        }
        generateTimeAgo(result, future);
        return result;
    }
    static isSameDate(dateA, dateB) {
        if (!dateA || !dateB)
            return false;
        if (dateA == dateB)
            return true;
        dateA = new Date(dateA);
        dateB = new Date(dateB);
        if (isNaN(dateA) || isNaN(dateB))
            return false;
        return dateA.getFullYear() == dateB.getFullYear() && dateA.getMonth() == dateB.getMonth() && dateA.getDate() == dateB.getDate();
    }
}
DatetimeService.ctors = {
    DI: [
        MONTHS_HALF,
        MONTHS_FULL,
        DAYS_HALF,
        DAYS_FULL
    ]
};
class calendarFN {
    constructor(dateTimeFactory) {
        this.config = {};
        this.dateTimeFactory = dateTimeFactory;
    }
    didInit() {
        this.calendar = this.dateTimeFactory.buildFullCalendar(extend({
            fullYear: !1,
            year: new Date().getFullYear()
        }, this.config));
    }
}
calendarFN.ctors = {
    selector: 'jx-calendar',
    props: { config: {} },
    DI: [DatetimeService]
};
class dateTimeFilterFN {
    constructor(dateTimeFactory) {
        this.dateTimeFactory = dateTimeFactory;
    }
    compile(text, replacer) {
        return this.dateTimeFactory.format(text, replacer);
    }
}
dateTimeFilterFN.ctors = { DI: [DatetimeService] };
class TimeAgoFilterFn {
    constructor(dateTimeFactory) {
        this.dateTimeFactory = dateTimeFactory;
    }
    compile(dateTime, fallback) {
        if (!dateTime && fallback)
            return fallback;
        return this.dateTimeFactory.timeConverter(dateTime)?.timeago || fallback;
    }
}
TimeAgoFilterFn.ctors = { DI: [DatetimeService] };
function DateTimeModule() {
}__required.r(exports, 'DateTimeModule', DateTimeModule);
__required.r(exports, 'calendarFN', calendarFN);
__required.r(exports, 'DatetimeService', DatetimeService);
__required.r(exports, 'leapYear', leapYear);
__required.r(exports, 'getDays', getDays);
__required.r(exports, 'DateStringConverter', DateStringConverter);
__required.r(exports, 'setText', setText);
__required.r(exports, 'generateTimeAgo', generateTimeAgo);
__required.r(exports, 'CalendarService', CalendarService);
__required.r(exports, 'MONTHS_HALF', MONTHS_HALF);
__required.r(exports, 'MONTHS_FULL', MONTHS_FULL);
__required.r(exports, 'DAYS_HALF', DAYS_HALF);
__required.r(exports, 'DAYS_FULL', DAYS_FULL);
__required.r(exports, 'dateTimeFilterFN', dateTimeFilterFN);
__required.r(exports, 'TimeAgoFilterFn', TimeAgoFilterFn);

},
1148 : (module, exports, __required, global) => {
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
},
1149 : (module, exports, __required, global) => {
"use strict";
exports.default = function (str) {
    return str.replace(/^([A-Z])|[\s-_](\w)/g, (_, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
}
},
1150 : (module, exports, __required, global) => {
"use strict";
const camelCase = __required(1149, 'default');
exports.default = function (str) {
    return str.charAt(0).toUpperCase() + camelCase(str.substring(1));
}
},
1151 : (module, exports, __required, global) => {
"use strict";
exports.default = function (str) {
    return (str | '').replace(/[A-Z]/g, (a, k, t) => '-' != t[k - 1] ? '-' + a.toLowerCase() : a.toLowerCase());
}
;
},
1152 : (module, exports, __required, global) => {
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
},
1153 : (module, exports, __required, global) => {
"use strict";
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
exports.default = extend;
},
1154 : (module, exports, __required, global) => {
"use strict";
const extend = __required(1153, 'default');
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
},
1155 : (module, exports, __required, global) => {
"use strict";
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
exports.default = copyFrom;
},
1156 : (module, exports, __required, global) => {
"use strict";
exports.default = function (obj) {
    return Object.keys(obj).length;
}
},
1157 : (module, exports, __required, global) => {
"use strict";
const isobject = __required(1139, 'default');
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
},
1158 : (module, exports, __required, global) => {
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
},
1159 : (module, exports, __required, global) => {
"use strict";
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
exports.default = logger;
},
1160 : (module, exports, __required, global) => {
"use strict";
exports.default = function (e) {
    var uid = '';
    var f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var g = 0; g < e; g++) {
        uid += f.charAt(Math.floor(Math.random() * f.length));
    }
    return uid;
}
},
1161 : (module, exports, __required, global) => {
"use strict";
exports.default = function (arr) {
    return arr.reduce(function (all, item, index) {
        if (arr.indexOf(arr[index]) === index) {
            all.push(item);
        }
        return all;
    }, []);
}
},
1162 : (module, exports, __required, global) => {
"use strict";
const isFunction = __required(1135, 'default');
const isObject = __required(1139, 'default');
const isArray = __required(1127, 'default');
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
exports.default = serialize;
},
1163 : (module, exports, __required, global) => {
"use strict";
exports.default = function (str, regexp) {
    return (str || '').split(regexp).map(function (val) {
        return val.trim();
    });
}
},
1164 : (module, exports, __required, global) => {
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
},
1165 : (module, exports, __required, global) => {
"use strict";
exports.default = function (par) {
    if (!par || typeof par !== 'string')
        return {};
    return par.split('&').reduce(function (accum, val) {
        if (val) {
            var splitPairs = val.split('=');
            accum[splitPairs[0]] = splitPairs[1] ? parseJSON(splitPairs[1]) : splitPairs[1];
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
},
1166 : (module, exports, __required, global) => {
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
},
1167 : (module, exports, __required, global) => {
"use strict";
exports.default = function (size) {
    var t = Math.floor(Math.log(size, 1024));
    var unit = [
        'b',
        'kb',
        'mb',
        'gb',
        'tb',
        'pb'
    ];
    return Math.round(size / Math.pow(1024, t), 2) + ' ' + unit[t];
}
},
1168 : (module, exports, __required, global) => {
"use strict";

exports.base64 = __required(1148, 'default');
exports.cookie = __required(1152, 'default');
exports.copy = __required(1154, 'default');
exports.copyfrom = __required(1155, 'default');
exports.count = __required(1156, 'default');
exports.expect = __required(1157, 'default');
exports.extend = __required(1153, 'default');
exports.hashcode = __required(1158, 'default');
exports.logger = __required(1159, 'default');
exports.makeuid = __required(1160, 'default');
exports.nodubs = __required(1161, 'default');
exports.serialize = __required(1162, 'default');
exports.splitntrim = __required(1163, 'default');
exports.toobject = __required(1164, 'default');
exports.unserialize = __required(1165, 'default');
exports.camelcase = __required(1149, 'default');
exports.pascalCase = __required(1150, 'default');
exports.kebabCase = __required(1151, 'default');
exports.simpleBooleanParser = __required(1166, 'default');
exports.sizetounit = __required(1167, 'default');
},
1169 : (module, exports, __required, global) => {
"use strict";
const utils = __required(1168);
const extend = utils.extend;
const helpers = __required(1144);
const inarray = helpers.inarray;
const isboolean = helpers.isboolean;
const isempty = helpers.isempty;
const isfunction = helpers.isfunction;
const isequal = helpers.isequal;
const isarray = helpers.isarray;
const isundefined = helpers.isundefined;
const isobject = helpers.isobject;
const core = __required(1145);
const AttributeAppender = core.AttributeAppender;
const closureRef = core.closureRef;
const ProviderToken = core.ProviderToken;
const EventEmitter = core.EventEmitter;
const errorBuilder = core.errorBuilder;
const __buildOptions = {
    'buildTime': 1784303339416,
    'version': '1.0.0',
    'baseHref': '',
    'assetURL': '',
    'production': false
};
class AbstractFormControl {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this._registered = false;
        this.formName = '';
        this._formFields = [];
        this.form = null;
    }
    addField(formFieldInstance) {
        var formControl = this.getField(formFieldInstance.name);
        setupControl(formControl, formFieldInstance);
        formControl.updateValueAndStatus({ emitEvent: false });
        this._formFields.push(formFieldInstance);
        return formControl;
    }
    removeField(formFieldInstance) {
        this._formFields.splice(this._formFields.indexOf(formFieldInstance), 1);
        var formControl = this.getField(formFieldInstance.name);
        cleanupControl(formControl, formFieldInstance);
    }
    getField(fieldName) {
        return this.form && this.form.getField(fieldName);
    }
    resetForm(values) {
        this.form.reset(values);
    }
    viewDidDestroy() {
        if (this.form) {
            this._formFields.forEach(formField => {
                cleanupControl(this.getField(formField.name), formField);
            });
            this.form = null;
        }
    }
}
class FormControlDirective extends AbstractFormControl {
    set formControl(formControl) {
        this.form = formControl;
        _validateAndBindStatus(this);
    }
}
FormControlDirective.ctors = {
    selector: 'formControl',
    props: { formControl: {} },
    DI: [{
            optional: true,
            tokenName: 'changeDetector'
        }]
};
class FormControlNameDirective extends AbstractFormControl {
    constructor(parentControl, changeDetector) {
        super(changeDetector);
        this.parentControl = parentControl;
        if (!parentControl || !(parentControl instanceof FormControlDirective)) {
            return errorBuilder('Expected instance of FormControlService but got ' + typeof parentControl);
        }
    }
    set formControlName(formName) {
        this.formName = formName;
        this.form = this.parentControl.getField(formName);
        _validateAndBindStatus(this);
    }
}
FormControlNameDirective.ctors = {
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
    exportAs: 'formControl'
};
class CurrentInstance {
    constructor(next, isDeep) {
        this.pending = null;
        this.hasAsync = false;
        this.isDeep = isDeep;
        this.failed = false;
        this.errors = null;
        this.count = 0;
        this.stop = function () {
            next(this.failed ? this.errors : null);
        };
    }
    add(totalValidators) {
        this.count = totalValidators;
        this.errors = {};
        this.failed = false;
        this.hasAsync = false;
        this.resolve = null;
    }
    rec(passed, type, fieldName) {
        this.count--;
        if (passed !== true) {
            this.failed = true;
            if (this.isDeep) {
                this.errors[fieldName] = this.errors[fieldName] || {};
                this.errors[fieldName][type] = true;
            } else {
                this.errors[type] = true;
            }
        }
        if (!this.count) {
            this.stop();
        }
    }
    registerAsyncValidator(asyncInstance, name, fieldName) {
        this.hasAsync = true;
        var callback = value => {
            this.rec(value, name, fieldName);
        };
        asyncInstance.then(callback, callback);
    }
}
const emptyCheck = value => [
    null,
    undefined,
    ''
].includes(value);
class FormValidationStack {
    static MINLENGTH(value, requiredLength) {
        if (!emptyCheck(value))
            return String(value).length >= requiredLength;
        return true;
    }
    static MAXLENGTH(value, requiredLength) {
        if (!emptyCheck(value))
            return String(value).length <= requiredLength;
        return true;
    }
    static EMAILVALIDATION(value) {
        if (emptyCheck(value))
            return true;
        var regExp = '^(([\\w]+(\\.[\\w]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
        return FormValidationStack.PATTERN(value, regExp);
    }
    static ISEMPTY(val, def) {
        return def === isempty(val);
    }
    static BOOLEAN(value, def) {
        return isboolean(value) && isequal(value, def);
    }
    static DOMAINVALIDATION(domain) {
        return FormValidationStack.PATTERN(domain, '[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:.[a-zA-Z]{2,})+');
    }
    static MEDIUMPASSWORDSTRENGTH(passwd) {
        return FormValidationStack.PATTERN(passwd, '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
    }
    static STRONGPASSWORDSTRENGTH(passwd) {
        return FormValidationStack.PATTERN(passwd, '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
    }
    static PATTERN(value, pattern) {
        if (emptyCheck(value))
            return true;
        return new RegExp(pattern).test(value);
    }
    static REQUIRED(value, required) {
        if (required) {
            return !emptyCheck(value);
        }
        return !required;
    }
    static REQUIREDTRUE(value) {
        return !emptyCheck(value) && isboolean(value) && value === true;
    }
    static MINNUMBER(value, minNumber) {
        if (!emptyCheck(value)) {
            value = Number(value);
            return !isNaN(value) && minNumber <= value;
        }
        return true;
    }
    static MAXNUMBER(value, maxNumber) {
        if (!emptyCheck(value)) {
            value = Number(value);
            return !isNaN(value) && value <= maxNumber;
        }
        return true;
    }
}
class ValidatorHelper {
    static flattenValdators(validatorPaths, vRecords, currentProcess) {
        const flatten = (field, record, paths) => {
            if (isobject(record)) {
                paths.push(field);
                const _reqStacks = Object.keys(record);
                if (!FormValidationStack[_reqStacks[0].toUpperCase()] && !isfunction(record[_reqStacks[0]])) {
                    _reqStacks.forEach(field => flatten(field, record[field], paths.slice()));
                } else {
                    validatorPaths.push([
                        paths,
                        record
                    ]);
                }
            }
        };
        if (vRecords) {
            const keys = Object.keys(vRecords);
            if (keys.length) {
                if (!!FormValidationStack[keys[0].toUpperCase()] || isfunction(vRecords[keys[0]]))
                    return;
                keys.forEach(field => flatten(field, vRecords[field], []));
                currentProcess.isDeep = true;
            }
        }
    }
    static throwErrorIfNoValidators(validatorsObj) {
        if (!isobject(validatorsObj)) {
            throw new Error('Validators are required in order to perform validations');
        }
    }
}
function FormValidatorService(callback, validators, isDeep) {
    const currentProcess = new CurrentInstance(callback, isDeep);
    const validatorPaths = [];
    function _formFieldValidator(value, criteria, fieldName) {
        const criteriaKeys = Object.keys(criteria);
        currentProcess.add(criteriaKeys.length);
        for (var i = 0; i < criteriaKeys.length; i++) {
            const validatorName = criteriaKeys[i];
            let passed = false;
            const validatorFn = FormValidationStack[validatorName.toUpperCase()];
            const isAsync = isequal('async', validatorName);
            if (validatorFn) {
                passed = validatorFn(value, criteria[validatorName]);
            } else if (isfunction(criteria[validatorName])) {
                try {
                    passed = criteria[validatorName](value);
                } catch (e) {
                    passed = isAsync ? Promise.resolve(false) : false;
                }
            }
            if (isAsync) {
                currentProcess.registerAsyncValidator(passed, validatorName, fieldName);
            } else {
                currentProcess.rec(passed, validatorName, fieldName);
                if (!passed) {
                    currentProcess.stop();
                    return true;
                }
            }
        }
        return false;
    }
    function formValidator(formValue) {
        if (!validators)
            return callback(null);
        ValidatorHelper.throwErrorIfNoValidators(validators);
        if (!currentProcess.isDeep)
            _formFieldValidator(formValue, validators);
        else {
            for (const path of validatorPaths) {
                if (_formFieldValidator(getValueByPath(formValue, path[0]), path[1], path[0].join('.'))) {
                    break;
                }
            }
        }
    }
    formValidator.addValidators = newValidators => {
        ValidatorHelper.throwErrorIfNoValidators(newValidators);
        if (!validators) {
            validators = newValidators;
        } else {
            validators = extend(true, validators, newValidators);
        }
        ValidatorHelper.flattenValdators(validatorPaths, newValidators, currentProcess);
    };
    ValidatorHelper.flattenValdators(validatorPaths, validators, currentProcess);
    return formValidator;
}
function customFormValidator(validatorName, validatorFn, override) {
    if (FormValidationStack.hasOwnProperty(validatorName.toUpperCase()) && !override) {
        return errorBuilder('[' + validatorName + '] already exists, please pass the override parameter to the validator');
    }
    FormValidationStack[validatorName.toUpperCase()] = validatorFn;
}
;
var VALID = 'VALID';
var INVALID = 'INVALID';
var DISABLED = 'DISABLED';
var PENDING = 'PENDING';
class FormControlAbstract {
    constructor(validators, deepValidation) {
        this._parent = null;
        this.status = INVALID;
        this.value = null;
        this.error = null;
        this.touched = false;
        this._pendingValue = null;
        this._onDisableEvents = [];
        this._onControlChangeListener = function () {
        };
        this.validator = FormValidatorService(errors => {
            this.setError(errors, true);
        }, validators, deepValidation);
        this.valueChanges = new EventEmitter();
        this.statusChanged = new EventEmitter();
    }
    get parent() {
        return this._parent;
    }
    get untouched() {
        return !this.touched;
    }
    get invalid() {
        return isequal(this.status, INVALID);
    }
    get enabled() {
        return !isequal(this.status, DISABLED);
    }
    get disabled() {
        return isequal(this.status, DISABLED);
    }
    get valid() {
        return isequal(this.status, VALID);
    }
    setParent(context) {
        this._parent = context;
    }
    _anyFieldHasStatus(status) {
        return this._anyControl(control => isequal(control.status, status));
    }
    _anyControl() {
    }
    setStatus() {
        if (this.disabled)
            return DISABLED;
        if (this.error || this._anyFieldHasStatus(INVALID))
            return INVALID;
        return VALID;
    }
    destroy(softDestroy) {
        if (!softDestroy && this.formFieldControls) {
            this.formFieldControls = null;
        }
        this._parent = null;
        this.valueChanges.destroy();
        this.statusChanged.destroy();
    }
    markAsTouched(options) {
        options = options || {};
        this.touched = true;
        if (this._parent && !options.self) {
            this._parent.markAsTouched(options);
        }
    }
    markAllAsTouched() {
        this.markAsTouched({ self: true });
        this.forEachField(function (control) {
            control.markAllAsTouched();
        });
    }
    updateValueAndStatus(options) {
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
    }
    enable(options) {
        options = options || {};
        this.status = VALID;
        this.updateValueAndStatus({
            self: true,
            emitEvent: options.emitEvent
        });
        this.forEachField(control => {
            control.enable({ self: true });
        });
        this._onDisableEvents.forEach(listener => listener(false));
    }
    disable(options) {
        options = options || {};
        this.status = DISABLED;
        this.forEachField(control => {
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
    }
    forEachField() {
    }
    _allFieldDisabled() {
        return this.disabled;
    }
    _setInitialStatus() {
        this.status = this._allFieldDisabled() ? DISABLED : VALID;
    }
    _updateValue() {
    }
    setValidators(validator) {
        if (!validator)
            return;
        this.validator.addValidators(validator);
        this._runValidators();
    }
    _runValidators() {
        this.validator(this.value);
    }
    markAsUntouched(options) {
        options = options || {};
        this.touched = false;
        this.forEachField(control => control.markAsUntouched({ self: true }));
    }
    markAllAsUnTouched() {
        this.markAsUntouched({ self: true });
        this.forEachField(function (control) {
            control.markAllAsUnTouched();
        });
    }
    _registerOnControlChangeListener(fn) {
        this._onControlChangeListener = fn;
    }
    setError(errors, emitEvent) {
        this.error = errors;
        if (this._parent)
            this._parent._collectErrors();
        this._updateStatusOnError(emitEvent);
    }
    getError(errorType) {
        return this.error ? this.error[errorType] : null;
    }
    hasError(errorType) {
        return !!this.getError(errorType);
    }
    _updateStatusOnError(emitEvent) {
        this.status = this.setStatus();
        if (emitEvent) {
            this.statusChanged.emit(this.status);
        }
        if (this._parent) {
            this._parent._updateStatusOnError(emitEvent);
        }
    }
    getPath(path) {
        return path && path.includes('.') ? path.split('.') : path;
    }
    markAsTouched(options) {
        if (this.touched)
            return;
        options = options || {};
        this.touched = true;
        if (this.parent && !options.self) {
            this.parent.markAsTouched(options);
        }
    }
    isValueChanged(value) {
        return this._pendingValue !== value;
    }
    _setupControl(control) {
        control.setParent(this);
        control._registerOnControlChangeListener(this._onControlChangeListener);
    }
    _collectErrors() {
        this.error = this._getAllFieldErrors();
    }
    _getAllFieldErrors() {
        var errors = this._getArryOrObjectType();
        var invalid = false;
        this.forEachField((control, field) => {
            if (control.error) {
                errors[field] = control.error;
                invalid = true;
            }
        });
        return invalid ? errors : null;
    }
    _collectValues(enabledOnly) {
        var values = this._getArryOrObjectType();
        this.forEachField((control, field) => {
            if (enabledOnly && control.enabled || !enabledOnly) {
                values[field] = control.value;
            }
        });
        return values;
    }
    _getArryOrObjectType() {
        return Array.isArray(this.formFieldControls) ? [] : {};
    }
}
class FormFieldControlService extends FormControlAbstract {
    constructor(fieldControl, isManualInit = false) {
        super(fieldControl ? fieldControl.validators : null, false);
        this.eventType = 'default';
        this.valueType = 'default';
        this._onChangeEvents = [];
        if (!isManualInit) {
            this._setInitialState(fieldControl);
        }
    }
    _setInitialState(state) {
        if (isobject(state)) {
            this.value = ![
                undefined,
                null
            ].includes(state.value) ? state.value : this.value;
            state.disabled ? this.disable({ self: true }) : this.enable({ self: true });
            this.eventType = state.eventType || this.eventType;
            this.valueType = state.valueType || this.valueType;
        } else {
            this.value = state !== undefined ? state : null;
        }
    }
    setValue(value, options) {
        options = options || {};
        this.value = value;
        const emitToView = !isequal(options.emitToView, false);
        if (this._onChangeEvents.length && emitToView) {
            this._onChangeEvents.forEach(eventChange => eventChange(value, emitToView));
        }
        this.updateValueAndStatus(options);
    }
    patchValue(val, options) {
        this.setValue(val, options || {});
    }
    reset(config, options) {
        this._setInitialState(config);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
    }
    registerOnChangeListener(listener) {
        this._onChangeEvents.push(listener);
    }
    registerOnDisabledListener(listener) {
        this._onDisableEvents.push(listener);
    }
    clearListeners() {
        this._onChangeEvents.length = 0;
        this._onDisableEvents.length = 0;
    }
}
FormFieldControlService.ctors = {};
FormFieldControlService.ctors.instance = FormFieldControlService;
class FormControlService extends FormControlAbstract {
    constructor(formFields, validators) {
        super(validators, true);
        this.formFieldControls = {};
        this.addFields(formFields);
    }
    addField(name, fieldControl) {
        if (fieldControl instanceof FormControlAbstract) {
            this.formFieldControls[name] = fieldControl;
        } else {
            this.formFieldControls[name] = new FormFieldControlService(fieldControl);
        }
        this._setupControl(this.formFieldControls[name]);
    }
    addFields(fieldControls) {
        if (!isobject(fieldControls))
            return;
        for (const field in fieldControls) {
            this.addField(field, fieldControls[field]);
        }
        this.updateValueAndStatus();
    }
    hasField(controlName) {
        return this.formFieldControls.hasOwnProperty(controlName);
    }
    getField(controlName) {
        const path = this.getPath(controlName);
        if (isarray(path))
            return this.getByPath(path);
        return this.formFieldControls ? this.formFieldControls[controlName] : null;
    }
    getByPath(paths) {
        return paths.reduce((accum, path) => accum && accum.getField(path), this);
    }
    patchValue(values, options) {
        options = options || {};
        if (values && typeof values == 'object') {
            for (var field in values) {
                if (this.hasField(field) && !options.self) {
                    this.getField(field).patchValue(values[field], {
                        self: options.self,
                        updateView: true
                    });
                }
            }
        }
    }
    setValue(values, options) {
        if (!values)
            return;
        this._allValuePresent(values);
        for (var field in values) {
            this._isControlPresent(field);
            this.formFieldControls[field].setValue(values[field], { self: options && options.self });
        }
    }
    forEachField(callback) {
        Object.keys(this.formFieldControls).forEach(field => {
            callback(this.formFieldControls[field], field);
        });
    }
    reset(value, options) {
        options = options || {};
        value = value || {};
        this.forEachField(function (control, name) {
            control.reset(value[name] || null, {
                self: true,
                emitEvent: options.emitEvent
            });
        });
    }
    setFormFieldValidators(fieldValidators) {
        for (var field in fieldValidators) {
            this.setFieldValidator(field, fieldValidators[field]);
        }
    }
    setFieldValidator(field, validator) {
        this.getField(field).setValidators(validator);
        return this;
    }
    allTouched() {
        var alltouched = true;
        this.forEachField(function (control, name) {
            if (!control.touched) {
                alltouched = false;
            }
        });
        return alltouched;
    }
    removeField(name, softDestroy) {
        this.getField(name).destroy(softDestroy);
        delete this.formFieldControls[name];
        delete this.value[name];
        this.valueChanges.emit(this.value);
    }
    getAllValues() {
        return this._collectValues(false);
    }
    _allValuePresent(values) {
        this.forEachField(function (control, field) {
            if (isundefined(values[field])) {
                errorBuilder('value for formField(' + field + ') is missing');
            }
        });
    }
    _isControlPresent(field) {
        if (!Object.keys(this.formFieldControls).length) {
            errorBuilder('There are no field controls registered to this form');
        }
        if (!this.hasField(field)) {
            errorBuilder('Cannot find field control for ' + field);
        }
    }
    _anyControl(callback) {
        for (var field in this.formFieldControls) {
            var found = callback(this.formFieldControls[field]);
            if (found) {
                return found;
            }
        }
        return undefined;
    }
    _allFieldDisabled() {
        for (var field in this.formFieldControls) {
            if (this.formFieldControls[field].enabled) {
                return false;
            }
        }
        return Object.keys(this.formFieldControls).length > 0 || this.disabled;
    }
    _updateValue() {
        this.value = this._collectValues(true);
    }
}
FormControlService.ctors = {};
FormControlService.ctors.instance = FormControlService;
var VALUE_ACCESSOR = new ProviderToken('ValueAccessor', true);
class AbstractValueAccessor {
    constructor(elementRef) {
        this.onChange = function () {
        };
        this.onDisable = function () {
        };
        this.onBlur = function () {
        };
        this.element = elementRef;
    }
    setDisabledState(state) {
        AttributeAppender.setProp(this.element.nativeElement, 'disabled', state);
    }
    registerOnBlur(onBlurFn) {
        this.onBlur = onBlurFn;
    }
    registerOnChange(onChangeFn) {
        this.onChange = onChangeFn;
    }
    registerOnDisable(onDisableFn) {
        this.onDisable = onDisableFn;
    }
    clearRegistries() {
        this.elementRef = null;
        this.onChange = null;
        this.onBlur = null;
        this.onDisable = null;
    }
}
class FormFieldControlDirective {
    constructor(eventBinder, validators) {
        this.eventBinder = getValueAccessor(eventBinder);
        this.control = null;
        this._validators = validators;
        this._warning = false;
    }
    set disabled(value) {
        if (!this._warning) {
            this._warning = true;
            console.warn('The use of disabled property with a form field control directive will not take effect');
        }
    }
    didInit() {
        if (!(this.control instanceof FormFieldControlService)) {
            return errorBuilder('Expected instance of FormFieldControlService but got ' + typeof this.control);
        }
        setupControl(this.control, this);
        if (this.control.disabled && this.eventBinder.setDisabledState) {
            this.eventBinder.setDisabledState(true);
        }
        this.control.updateValueAndStatus({ emitEvent: false });
    }
    modelToViewUpdate() {
    }
}
FormFieldControlDirective.ctors = {
    selector: 'fieldControl',
    props: {
        control: { value: 'fieldControl' },
        disabled: {}
    },
    DI: [
        VALUE_ACCESSOR,
        {
            optional: true,
            tokenName: 'VALIDATORS'
        }
    ]
};
class FormFieldDirective {
    constructor(parentContainer, eventBinder, validators) {
        this.eventBinder = getValueAccessor(eventBinder);
        this.control = null;
        this._validators = validators;
        this.parent = parentContainer;
    }
    didInit() {
        if (!this.parent) {
            return errorBuilder(`[formField=${ this.name }]: Expected an instance of FormControlDirective but got ${ typeof this.parent }`);
        }
        this.control = this.parent.addField(this);
        if (this.control.disabled && this.eventBinder.setDisabledState) {
            this.eventBinder.setDisabledState(true);
        }
    }
    modelToViewUpdate() {
    }
    viewDidDestroy() {
        if (this.parent) {
            this.parent.removeField(this);
            this.parent = null;
        }
        this.control = null;
    }
}
FormFieldDirective.ctors = {
    selector: 'formField',
    props: { name: { value: 'formField' } },
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
    ]
};
const ResolveDefaultBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(function () {
        return DefaultEventBinder;
    })
};
class DefaultEventBinder extends AbstractValueAccessor {
    writeValue(value) {
        value = [
            'null',
            null,
            'undefined',
            undefined
        ].includes(value) ? '' : value;
        AttributeAppender.setProp(this.element.nativeElement, 'value', this.stringifyValue(value));
    }
    stringifyValue(value) {
        if (value && typeof value == 'object') {
            return JSON.stringify(value, null, 3);
        }
        return value;
    }
}
DefaultEventBinder.ctors = {
    selector: 'input:type!=checkbox|radio|number|range:[model|formField|fieldControl],textarea:[model|formField|fieldControl],input:list:[model|formField|fieldControl]',
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
                }],
            node: 'input:type!=checkbox|radio|number|range:[model|formField|fieldControl],textarea:[model|formField|fieldControl],input:list:[model|formField|fieldControl]'
        },
        'blur': {
            type: 'event',
            value: [{
                    type: 'call',
                    args: ['$event'],
                    fn: 'onBlur'
                }],
            node: 'input:type!=checkbox|radio|number|range:[model|formField|fieldControl],textarea:[model|formField|fieldControl],input:list:[model|formField|fieldControl]'
        }
    },
    DI: [{
            optional: true,
            tokenName: 'ElementRef'
        }],
    resolve: [ResolveDefaultBinder]
};
const ResolveCheckboxBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(() => CheckboxEventBinder)
};
class CheckboxEventBinder extends AbstractValueAccessor {
    writeValue(checked) {
        AttributeAppender.setProp(this.element.nativeElement, 'checked', checked, true);
    }
}
;
CheckboxEventBinder.ctors = {
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
                }],
            node: 'input:type=checkbox:[model|formField|fieldControl]'
        },
        'blur': {
            type: 'event',
            value: [{
                    type: 'call',
                    args: ['$event'],
                    fn: 'onBlur'
                }],
            node: 'input:type=checkbox:[model|formField|fieldControl]'
        }
    },
    DI: [{
            optional: true,
            tokenName: 'ElementRef'
        }],
    resolve: [ResolveCheckboxBinder]
};
function isSameGroup(a, b) {
    return a.name === b.name;
}
const ResolveRadioBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(() => RadioEventBinder)
};
class RadioEventContainer {
    constructor() {
        this._registry = [];
    }
    register(eventBinder) {
        this._registry.push(eventBinder);
    }
    remove(eventBinder) {
        this._registry.splice(this._registry.indexOf(eventBinder), 1);
    }
    selectValue(eventBinder) {
        this._registry.forEach(function (registeredBinder) {
            if (isSameGroup(registeredBinder, eventBinder) && registeredBinder !== eventBinder) {
                registeredBinder.writeValue(eventBinder.value);
            }
        });
    }
}
RadioEventContainer.ctors = {};
class RadioEventBinder extends AbstractValueAccessor {
    constructor(elementRef, radioEventContainer) {
        super(elementRef);
        this.radioEventContainer = radioEventContainer;
        this.state = false;
    }
    didInit() {
        this._checkFieldName();
        this.radioEventContainer.register(this);
    }
    didDestroy() {
        this.radioEventContainer.remove(this);
    }
    _checkFieldName() {
        if (this.name && this.formField && this.formField != this.name) {
            errorBuilder('if you define a name and formField both values must match. <input type=radio name=' + this.name + ' :formField=' + this.formField);
        }
        if (!this.name && this.formField)
            this.name = this.formField;
    }
    registerOnChange(onChangeFn) {
        this._onChange = onChangeFn;
        this.onChange = value => {
            onChangeFn(this.value);
            this.radioEventContainer.selectValue(this);
        };
    }
    writeValue(value) {
        this.state = value == this.value;
        AttributeAppender.setProp(this.element.nativeElement, 'checked', this.state);
    }
}
;
RadioEventBinder.ctors = {
    selector: 'input:type=radio:[model|formField|fieldControl]',
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
                }],
            node: 'input:type=radio:[model|formField|fieldControl]'
        },
        'blur': {
            type: 'event',
            value: [{
                    type: 'call',
                    args: ['$event'],
                    fn: 'onBlur'
                }],
            node: 'input:type=radio:[model|formField|fieldControl]'
        }
    },
    props: {
        name: {},
        formField: {},
        value: {}
    },
    DI: [
        {
            optional: true,
            tokenName: 'ElementRef'
        },
        RadioEventContainer
    ],
    resolve: [ResolveRadioBinder]
};
const ResolveSelectBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(() => SelectEventBinder)
};
function _buildValueToString(id, value) {
    if (id == null)
        return '' + value;
    if (typeof value === 'object' && id)
        value = 'option:object';
    return id + '|' + value;
}
class SelectEventBinder extends AbstractValueAccessor {
    constructor(elementRef) {
        super(elementRef);
        this.idIncrement = 0;
        this.selectedValue;
        this._optionValueMap = new Map();
        this._compare = isequal;
    }
    set compareFn(fn) {
        if (typeof fn !== 'function') {
            throw new Error('expected function for comparisonFN but got ' + typeof fn + ' instead.');
        }
        this._compare = fn;
    }
    _handleSelection(value) {
        this.selectedValue = this._getValue(value);
        this.onChange(this.selectedValue);
    }
    writeValue(value) {
        if (!this.element.hasAttribute('multiple')) {
            var currentSelectedValue = this._getOptionValue(this.element.nativeElement.value);
            if (!this._compare(currentSelectedValue, value)) {
                var optionId = this.getOptionIdByValue(value);
                this.element.nativeElement.value = _buildValueToString(optionId, value);
            }
        } else {
            var markAsSelected = function (opt) {
                AttributeAppender.setProp(opt, 'selected', false);
            };
            if (Array.isArray(value)) {
                var optionIds = value.map(v => this.getOptionIdByValue(v) || v);
                markAsSelected = function (opt) {
                    AttributeAppender.setProp(opt, 'selected', inarray(opt.value, optionIds));
                };
            }
            this._markAsSelectedMultiple(markAsSelected);
        }
        this.selectedValue = value;
    }
    isSelected(optionId) {
        return Object.is(this._optionValueMap.get(optionId), this.selectedValue);
    }
    _getValue(valueString) {
        if (this.element.hasAttribute('multiple')) {
            var optionsValue = [];
            for (var i = 0; i < this.element.nativeElement.selectedOptions.length; i++) {
                var value = this._getOptionValue(this.element.nativeElement.selectedOptions[i].value);
                optionsValue.push(value);
            }
            return optionsValue;
        }
        return this._getOptionValue(valueString);
    }
    _getOptionValue(valueString) {
        var sptStr = valueString.split('|')[0];
        return this._optionValueMap.has(sptStr) ? this._optionValueMap.get(sptStr) : valueString;
    }
    genOptionId() {
        return (this.idIncrement++).toString();
    }
    getOptionIdByValue(value) {
        var keys = this._optionValueMap.keys();
        for (var key of keys) {
            if (this._compare(this._optionValueMap.get(key), value))
                return key;
        }
        return null;
    }
    _markAsSelectedMultiple(callback) {
        if (!this.element.nativeElement)
            return;
        Array.from(this.element.nativeElement.options).forEach(callback);
    }
    destroyOption(optionId) {
        this._optionValueMap.delete(optionId);
        this.writeValue(this.selectedValue);
    }
}
;
SelectEventBinder.ctors = {
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
                }],
            node: 'select:[model|formField|fieldControl]'
        },
        'blur': {
            type: 'event',
            value: [{
                    type: 'call',
                    args: ['$event'],
                    fn: 'onBlur'
                }],
            node: 'select:[model|formField|fieldControl]'
        }
    },
    props: { compareFn: {} },
    DI: [{
            optional: true,
            tokenName: 'ElementRef'
        }],
    resolve: [ResolveSelectBinder]
};
class OptionDirective {
    constructor(selectInstance, elementRef) {
        this.selectInstance = selectInstance;
        if (selectInstance)
            this.id = selectInstance.genOptionId();
        this._value = null;
        var defineConnector = {
            set: value => this.prepareValue(value),
            get: () => this._value
        };
        Object.defineProperty(this, 'value', Object.assign({}, defineConnector));
        Object.defineProperty(this, 'jValue', Object.assign({}, defineConnector));
        this.setValue = function (value) {
            AttributeAppender.setProp(elementRef.nativeElement, 'value', value), AttributeAppender.setProp(elementRef.nativeElement, 'selected', this.selectInstance.isSelected(this.id));
        };
    }
    prepareValue(value) {
        if (!this.selectInstance)
            return;
        this._value = value;
        this.selectInstance._optionValueMap.set(this.id, value);
        this.setValue(_buildValueToString(this.id, value));
    }
    viewDidDestroy() {
        if (this.selectInstance) {
            this.selectInstance.destroyOption(this.id);
        }
    }
}
OptionDirective.ctors = {
    selector: 'option',
    props: {
        value: {},
        jValue: {}
    },
    DI: [
        {
            optional: true,
            type: '[model|formField|fieldControl]',
            value: 'select',
            tokenName: 'ParentRef'
        },
        {
            optional: true,
            tokenName: 'HostElement'
        }
    ]
};
const ResolveNumberBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(() => NumberEventBinder)
};
class NumberEventBinder extends AbstractValueAccessor {
    writeValue(value) {
        value = value === null || value === undefined ? '' : value;
        AttributeAppender.setProp(this.element.nativeElement, 'value', value);
    }
    registerOnChange(onChangeFn) {
        this.onChange = function (value) {
            onChangeFn(value == '' ? null : parseFloat(value));
        };
    }
}
NumberEventBinder.ctors = {
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
                }],
            node: 'input:type=number:[model|formField|fieldControl]'
        },
        'blur': {
            type: 'event',
            value: [{
                    type: 'call',
                    args: ['$event'],
                    fn: 'onBlur'
                }],
            node: 'input:type=number:[model|formField|fieldControl]'
        }
    },
    DI: [{
            optional: true,
            tokenName: 'ElementRef'
        }],
    resolve: [ResolveNumberBinder]
};
var ResolveRangeBinder = {
    name: VALUE_ACCESSOR,
    reference: closureRef(() => RangeEventBinder)
};
class RangeEventBinder extends AbstractValueAccessor {
    writeValue(value) {
        value = value === null || value === undefined ? '' : value;
        AttributeAppender.setProp(this.element.nativeElement, 'value', parseFloat(value), true);
    }
    registerOnChange(onChangeFn) {
        this.onChange = function (value) {
            onChangeFn(value == '' ? null : parseFloat(value));
        };
    }
}
RangeEventBinder.ctors = {
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
                }],
            node: 'input:type=range:[model|formField|fieldControl]'
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
                }],
            node: 'input:type=range:[model|formField|fieldControl]'
        },
        'blur': {
            type: 'event',
            value: [{
                    type: 'call',
                    args: ['$event'],
                    fn: 'onBlur'
                }],
            node: 'input:type=range:[model|formField|fieldControl]'
        }
    },
    DI: [{
            optional: true,
            tokenName: 'ElementRef'
        }],
    resolve: [ResolveRangeBinder]
};
var inbuiltAccessor = [
    CheckboxEventBinder,
    DefaultEventBinder,
    RadioEventBinder,
    SelectEventBinder,
    NumberEventBinder,
    RangeEventBinder
];
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
function cleanupControl(fieldControl, dir) {
    dir && dir.eventBinder.clearRegistries();
    fieldControl && fieldControl.clearListeners();
}
function setUpViewChangeEvent(fieldControl, dir) {
    dir.eventBinder.registerOnChange(value => {
        fieldControl._pendingValue = value;
        fieldControl._pendingChange = true;
        if (!isequal(fieldControl.eventType, 'blur')) {
            updateControl(fieldControl, dir);
        }
    });
    fieldControl.registerOnChangeListener((value, emitEvent) => {
        dir.eventBinder.writeValue(value);
        if (emitEvent) {
            dir.modelToViewUpdate(value);
        }
    });
}
function parseValue(fieldControl) {
    let value = fieldControl._pendingValue;
    if (fieldControl.valueType !== 'json')
        return value;
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
}
function setupBlurEvent(fieldControl, dir) {
    if (dir.eventBinder.registerOnBlur) {
        dir.eventBinder.registerOnBlur(() => {
            if (isequal(fieldControl.eventType, 'blur') && fieldControl._pendingChange) {
                updateControl(fieldControl, dir);
            }
        });
    }
}
function updateControl(fieldControl, dir) {
    const value = parseValue(fieldControl);
    fieldControl.setValue(value, { emitToView: false });
    dir.modelToViewUpdate(value);
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
    dir.form.statusChanged.subscribe(() => {
        dir.changeDetector.detectChanges();
    });
}
function getValueAccessor(valueAccessors) {
    let inbuilt = null;
    let custom = null;
    valueAccessors.forEach(accessorInstance => {
        if (inbuiltAccessor.includes(accessorInstance.constructor)) {
            if (inbuilt) {
                errorBuilder('found multiple inbuilt valueAccessor instance.');
            }
            inbuilt = accessorInstance;
        } else {
            if (custom)
                errorBuilder('found multiple custom valueAccessor instance.');
            custom = accessorInstance;
        }
    });
    if (custom)
        return custom;
    return inbuilt;
}
function getValueByPath(value, paths) {
    return paths.reduce((accum, key) => {
        if (typeof accum !== 'object')
            return null;
        accum = accum[key];
        return accum;
    }, value);
}
class ModelDirective {
    constructor(eventBinder, parentControl, validators) {
        this.eventBinder = getValueAccessor(eventBinder);
        this._validators = validators;
        this._parentControl = parentControl;
        this.modelChange = new EventEmitter();
        this.fieldControl = new FormFieldControlService(null);
    }
    set model(value) {
        this.fieldControl?.setValue(value, { emitToView: true });
        this._value = value;
    }
    get model() {
        return this._value;
    }
    modelToViewUpdate(value) {
        this._value = value;
        this.modelChange.emit(value);
    }
    didInit() {
        this.fieldControl._setInitialState(this.modelOptions || {});
        setupControl(this.fieldControl, this);
    }
    viewDidDestroy() {
        this.fieldControl = null;
    }
}
ModelDirective.ctors = {
    selector: 'model',
    events: {
        'modelChange': {
            type: 'emitter',
            node: 'jModel'
        }
    },
    props: {
        model: {},
        modelOptions: {},
        name: {}
    },
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
    exportAs: 'jModel'
};
class FormRepeaterService extends FormControlAbstract {
    constructor(fields, validators, autoGenerate) {
        super(validators);
        this.value = [];
        this.formFieldControls = [];
        this._defaultfields = fields;
        this._autoSetup(autoGenerate);
    }
    addField(fieldControl) {
        if (this._defaultfields && typeof this._defaultfields === 'object') {
            fieldControl = new FormControlService(this._defaultfields);
        } else if (!(fieldControl instanceof FormControlAbstract)) {
            fieldControl = new FormFieldControlService(fieldControl);
        }
        if (fieldControl) {
            this.formFieldControls.push(fieldControl);
            this._setupControl(fieldControl);
            this.updateValueAndStatus();
        }
    }
    patchValue(values, options) {
        if (Array.isArray(values)) {
            if (values.length) {
                options = options || {};
                values.forEach((value, idx) => {
                    if (!this.formFieldControls[idx]) {
                        this.addField();
                    }
                    this.formFieldControls[idx].patchValue(value, options);
                });
            } else {
                this.destroy();
            }
        }
    }
    getField(index) {
        return this.formFieldControls[index] || null;
    }
    removeField(index) {
        var len = this.formFieldControls.length;
        if (!len || len < index)
            return;
        this.formFieldControls[index].destroy();
        this.formFieldControls.splice(index, 1);
        this.updateValueAndStatus();
        this.valueChanges.emit(this.value);
    }
    _autoSetup(autoGenerate) {
        if (autoGenerate) {
            while (autoGenerate--) {
                this.addField();
            }
        }
    }
    _updateValue() {
        this.value = this._collectValues(true);
    }
    forEachField(callback) {
        this.formFieldControls.forEach(callback);
    }
    destroy() {
        while (this.formFieldControls.length) {
            const control = this.formFieldControls.shift();
            control.destroy();
        }
        this.updateValueAndStatus();
        this.valueChanges.emit(this.value);
    }
}
FormRepeaterService.ctors = {};
FormRepeaterService.ctors.instance = FormRepeaterService;
function FormModule() {
}__required.r(exports, 'FormModule', FormModule);
__required.r(exports, 'FormControlDirective', FormControlDirective);
__required.r(exports, 'FormControlNameDirective', FormControlNameDirective);
__required.r(exports, 'AbstractFormControl', AbstractFormControl);
__required.r(exports, 'FormControlService', FormControlService);
__required.r(exports, 'FormControlAbstract', FormControlAbstract);
__required.r(exports, 'FormValidatorService', FormValidatorService);
__required.r(exports, 'customFormValidator', customFormValidator);
__required.r(exports, 'FormValidationStack', FormValidationStack);
__required.r(exports, 'FormFieldControlService', FormFieldControlService);
__required.r(exports, 'FormFieldControlDirective', FormFieldControlDirective);
__required.r(exports, 'VALUE_ACCESSOR', VALUE_ACCESSOR);
__required.r(exports, 'AbstractValueAccessor', AbstractValueAccessor);
__required.r(exports, 'FormFieldDirective', FormFieldDirective);
__required.r(exports, 'ResolveDefaultBinder', ResolveDefaultBinder);
__required.r(exports, 'DefaultEventBinder', DefaultEventBinder);
__required.r(exports, 'ResolveCheckboxBinder', ResolveCheckboxBinder);
__required.r(exports, 'CheckboxEventBinder', CheckboxEventBinder);
__required.r(exports, 'ResolveRadioBinder', ResolveRadioBinder);
__required.r(exports, 'RadioEventContainer', RadioEventContainer);
__required.r(exports, 'RadioEventBinder', RadioEventBinder);
__required.r(exports, 'ResolveSelectBinder', ResolveSelectBinder);
__required.r(exports, 'SelectEventBinder', SelectEventBinder);
__required.r(exports, 'OptionDirective', OptionDirective);
__required.r(exports, 'ModelDirective', ModelDirective);
__required.r(exports, 'setupControl', setupControl);
__required.r(exports, 'cleanupControl', cleanupControl);
__required.r(exports, '_validateAndBindStatus', _validateAndBindStatus);
__required.r(exports, 'getValueAccessor', getValueAccessor);
__required.r(exports, 'getValueByPath', getValueByPath);
__required.r(exports, 'ResolveNumberBinder', ResolveNumberBinder);
__required.r(exports, 'NumberEventBinder', NumberEventBinder);
__required.r(exports, 'ResolveRangeBinder', ResolveRangeBinder);
__required.r(exports, 'RangeEventBinder', RangeEventBinder);
__required.r(exports, 'FormRepeaterService', FormRepeaterService);

},
1170 : (module, exports, __required, global) => {
"use strict";
const utils = __required(1168);
const serialize = utils.serialize;
const helpers = __required(1144);
const isnull = helpers.isnull;
const isstring = helpers.isstring;
const isundefined = helpers.isundefined;
const isobject = helpers.isobject;
const inarray = helpers.inarray;
const core = __required(1145);
const ProviderToken = core.ProviderToken;
const InterceptorResolver = core.InterceptorResolver;
const Subject = core.Subject;
const ChangeDetector = core.ChangeDetector;
const __buildOptions = {
    'buildTime': 1784303339458,
    'version': '1.0.0',
    'baseHref': '',
    'assetURL': '',
    'production': false
};
class HttpRequestError {
    constructor(message) {
        this.errorType = null;
        this.message = message;
        this.status = 400;
    }
    setMessage(message) {
        this.message = message;
    }
    setErrorType(type) {
        this.errorType = type;
    }
}
var xhrFactory = function () {
    return new XMLHttpRequest();
};
function setXhrFactory(factory) {
    xhrFactory = factory;
}
var unsafeHeaders = {
    'Accept-Charset': true,
    'Accept-Encoding': true,
    'Access-Control-Request-Headers': true,
    'Access-Control-Request-Method': true,
    'Connection': true,
    'Content-Length': true,
    'Cookie': true,
    'Cookie2': true,
    'Content-Transfer-Encoding': true,
    'Date': true,
    'DNT': true,
    'Expect': true,
    'Host': true,
    'Keep-Alive': true,
    'Origin': true,
    'Referer': true,
    'Set-Cookie': true,
    'TE': true,
    'Trailer': true,
    'Transfer-Encoding': true,
    'Upgrade': true,
    'User-Agent': true,
    'Via': true
};
class HttpRequest {
    constructor(url, options) {
        if (!options && isobject(url)) {
            options = url;
        }
        this.url = options.url || url;
        this.type = (options.type || 'GET').toLowerCase();
        this.processData = !isundefined(options.processData) ? options.processData : true;
        this.headers = Object.assign({
            'Accept': 'application/json',
            'CONTENT-TYPE': 'application/json'
        }, options.headers || {});
        this.asynchronous = !isundefined(options.asynchronous) ? options.asynchronous : true;
        this.data = options.data || '';
        this.xhrInstance = xhrFactory();
        this.cache = !isundefined(options.cache) ? options.cache : true;
        this.withCredentials = !isundefined(options.withCredentials) ? options.withCredentials : false;
    }
    progress(progressCallback) {
        this.xhrInstance.addEventListener('progress', progressCallback, false);
    }
    setHeaders(headers) {
        Object.assign(this.headers, headers);
    }
    setWithCredentials(flag) {
        this.withCredentials = !!flag;
    }
    processRequest() {
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
    }
    processRequestHeaders() {
        for (var name in this.headers) {
            if (unsafeHeaders[name] || /^(Sec-|Proxy-)/.test(name)) {
                throw new Error('Refused to set unsafe header "' + name + '"');
            }
            this.xhrInstance.setRequestHeader(name, this.headers[name]);
        }
    }
}
class HttpResponse {
    constructor(httpRequest) {
        this.status = httpRequest.xhrInstance.status;
        this.readyState = httpRequest.xhrInstance.readyState;
        this.url = httpRequest.url;
        this.data = null;
        this.success = httpRequest.xhrInstance.status >= 200 && httpRequest.xhrInstance.status < 300 || httpRequest.xhrInstance.status == 304 || httpRequest.xhrInstance.status == 0 && httpRequest.xhrInstance.responseText;
        this.headers = {
            getResponseHeader: function (name) {
                if (!isobject(name)) {
                    return httpRequest.xhrInstance.getResponseHeader(name);
                } else {
                    return name.map(headerName => httpRequest.xhrInstance.getResponseHeader(headerName));
                }
            }
        };
    }
}
var HTTP_INTERCEPTORS = new ProviderToken('interceptors', true);
var JSON_CONTENT_TYPE = /json/i;
function isJSONResponse(xhrInstance) {
    var contentType = xhrInstance.getResponseHeader('Content-Type');
    return !contentType || JSON_CONTENT_TYPE.test(contentType);
}
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
class HttpTransport {
    constructor(url, options, changeDetection) {
        this.xhrPromise = new Subject();
        this.httpRequest = new HttpRequest(url, options);
        this.httpError = new HttpRequestError('');
        this.changeDetection = changeDetection;
        InterceptorResolver(HTTP_INTERCEPTORS, this.httpRequest).then(request => this.onInterceptorsResolved(request));
    }
    onInterceptorsResolved(request) {
        if (!request) {
            this.httpError.setMessage('HTTP: Interceptor should return a value');
            return this.xhrPromise.error(this.httpError);
        }
        if (this.changeDetection) {
            this.changeDetection();
        }
        if (request.processData) {
            request.processRequest();
        }
        this.sendRequest();
    }
    respondToReadyState() {
        var response = new HttpResponse(this.httpRequest);
        if (this.httpRequest.xhrInstance.readyState == 4) {
            try {
                var responseText = this.httpRequest.xhrInstance.responseText;
                var data = isJSONResponse(this.httpRequest.xhrInstance) ? parseJSON(responseText) : responseText;
                this.xhrPromise.next(data, response);
            } catch (e) {
                this.xhrPromise.error(this.httpError);
            }
            this.xhrPromise.completed();
            this.changeDetection();
        }
    }
    handleError(e) {
        this.httpError.setErrorType(e.type);
        this.xhrPromise.error(this.httpError);
    }
    attachListener() {
        var xhrInstance = this.httpRequest.xhrInstance;
        xhrInstance.addEventListener('load', () => this.respondToReadyState());
        xhrInstance.addEventListener('timeout', e => this.handleError(e));
        xhrInstance.addEventListener('error', e => this.handleError(e));
        xhrInstance.addEventListener('abort', e => this.handleError(e));
    }
    sendRequest() {
        this.attachListener();
        var xhrInstance = this.httpRequest.xhrInstance;
        xhrInstance.open(this.httpRequest.type, this.httpRequest.url, this.httpRequest.asynchronous);
        xhrInstance.withCredentials = this.httpRequest.withCredentials;
        this.httpRequest.processRequestHeaders();
        var body = null;
        if (inarray(this.httpRequest.type, [
                'post',
                'put',
                'delete'
            ])) {
            body = this.httpRequest.data;
        }
        try {
            xhrInstance.send(body);
        } catch (e) {
            this.httpError.setMessage(e);
            this.xhrPromise.error(this.httpError);
        }
    }
}
function CoreHttp(url, options, changeDetection) {
    return new HttpTransport(url, options, changeDetection).xhrPromise;
}
var staticMethods = [
    'put',
    'get',
    'post',
    'request',
    'patch',
    'delete'
];
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
HttpService.ctors = { DI: [ChangeDetector] };
function HttpModule() {
}
class HttpCookieManager {
    constructor() {
        Object.defineProperty(this, 'cookies', {
            get: function () {
                return this._getAll();
            }
        });
    }
    set(name, value, options) {
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
    }
    get(name) {
        return this.cookies[name];
    }
    _getAll() {
        var cookieValues = {};
        var cookies = (document.cookie || '').split(';');
        if (cookies.length) {
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim().split('=');
                cookieValues[cookie[0]] = cookie[1];
            }
        }
        return cookieValues;
    }
}
HttpCookieManager.ctors = {};
var csrfCookieConfig = {
    cookieName: 'X-CSRF-TOKEN',
    headerName: 'X-CSRF-TOKEN'
};
class CSRFCookieHeaderService {
    constructor(cookieManager) {
        this.cookieManager = cookieManager;
    }
    resolve(httpRequest, next) {
        var cookie = this.cookieManager.get(csrfCookieConfig.cookieName);
        if (cookie) {
            var tokenHeader = {};
            tokenHeader[csrfCookieConfig.headerName] = cookie;
            httpRequest.setHeaders(tokenHeader);
        }
        next();
    }
}
CSRFCookieHeaderService.ctors = { DI: [HttpCookieManager] };
function HttpCSRFModule() {
}
HttpCSRFModule.setCookieValue = function (config) {
    Object.assign(csrfCookieConfig, config);
};
HTTP_INTERCEPTORS.register({ useClass: CSRFCookieHeaderService }, true);
class FetchXHRAdapter {
    constructor() {
        this.readyState = 0;
        this.status = 0;
        this.responseText = '';
        this.withCredentials = false;
        this._method = 'GET';
        this._url = '';
        this._headers = {};
        this._listeners = {};
        this._responseHeaders = null;
        this._abortController = new AbortController();
    }
    addEventListener(type, listener) {
        (this._listeners[type] = this._listeners[type] || []).push(listener);
    }
    _emit(type, event) {
        (this._listeners[type] || []).forEach(function (fn) {
            fn(event);
        });
    }
    open(method, url) {
        this._method = method;
        this._url = url;
        this.readyState = 1;
    }
    setRequestHeader(name, value) {
        this._headers[name] = value;
    }
    getResponseHeader(name) {
        return this._responseHeaders ? this._responseHeaders.get(name) : null;
    }
    send(body) {
        fetch(this._url, {
            method: this._method,
            headers: this._headers,
            body: body || undefined,
            credentials: this.withCredentials ? 'include' : 'same-origin',
            signal: this._abortController.signal
        }).then(response => this._handleResponse(response)).catch(err => this._handleError(err));
    }
    async _handleResponse(response) {
        this.status = response.status;
        this._responseHeaders = response.headers;
        var total = Number(response.headers.get('Content-Length')) || 0;
        if (total && response.body && response.body.getReader) {
            var reader = response.body.getReader();
            var loaded = 0;
            var chunks = [];
            var read;
            while (!(read = await reader.read()).done) {
                chunks.push(read.value);
                loaded += read.value.length;
                this._emit('progress', {
                    loaded: loaded,
                    total: total,
                    lengthComputable: true
                });
            }
            this.responseText = new TextDecoder().decode(concatChunks(chunks, loaded));
        } else {
            this.responseText = await response.text();
        }
        this.readyState = 4;
        this._emit('load', {});
    }
    _handleError(err) {
        if (err && err.name === 'AbortError') {
            this._emit('abort', err);
        } else {
            this._emit('error', err);
        }
    }
    abort() {
        this._abortController.abort();
    }
}
function concatChunks(chunks, totalLength) {
    var out = new Uint8Array(totalLength);
    var offset = 0;
    for (var i = 0; i < chunks.length; i++) {
        out.set(chunks[i], offset);
        offset += chunks[i].length;
    }
    return out;
}
function useFetchTransport() {
    setXhrFactory(function () {
        return new FetchXHRAdapter();
    });
}
function useXhrTransport() {
    setXhrFactory(function () {
        return new XMLHttpRequest();
    });
}__required.r(exports, 'HttpModule', HttpModule);
__required.r(exports, 'HttpService', HttpService);
__required.r(exports, 'CoreHttp', CoreHttp);
__required.r(exports, 'HttpRequestError', HttpRequestError);
__required.r(exports, 'setXhrFactory', setXhrFactory);
__required.r(exports, 'HttpRequest', HttpRequest);
__required.r(exports, 'HttpResponse', HttpResponse);
__required.r(exports, 'HTTP_INTERCEPTORS', HTTP_INTERCEPTORS);
__required.r(exports, 'isJSONResponse', isJSONResponse);
__required.r(exports, 'parseJSON', parseJSON);
__required.r(exports, 'HttpCSRFModule', HttpCSRFModule);
__required.r(exports, 'HttpCookieManager', HttpCookieManager);
__required.r(exports, 'csrfCookieConfig', csrfCookieConfig);
__required.r(exports, 'CSRFCookieHeaderService', CSRFCookieHeaderService);
__required.r(exports, 'useFetchTransport', useFetchTransport);
__required.r(exports, 'useXhrTransport', useXhrTransport);
__required.r(exports, 'FetchXHRAdapter', FetchXHRAdapter);

},
1171 : (module, exports, __required, global) => {
"use strict";
const utils = __required(1168);
const unserialize = utils.unserialize;
const extend = utils.extend;
const core = __required(1145);
const APP_BOOTSTRAP = core.APP_BOOTSTRAP;
const AttributeAppender = core.AttributeAppender;
const EventEmitter = core.EventEmitter;
const InterceptorResolver = core.InterceptorResolver;
const EventManager = core.EventManager;
const ProviderToken = core.ProviderToken;
const rxLoop = core.rxLoop;
const errorBuilder = core.errorBuilder;
const compileModule = core.compileModule;
const DOMHelper = core.DOMHelper;
const ComponentFactoryResolver = core.ComponentFactoryResolver;
const __buildOptions = {
    'buildTime': 1784303339559,
    'version': '1.0.0',
    'baseHref': '',
    'assetURL': '',
    'production': false
};
var ROUTE_INTERCEPTOR = new ProviderToken('RouteInterceptor', true);
var ROUTE_LOCATION_STRATEGY = new ProviderToken('RouteLocationStrategy', false);
var ROUTE_LOCATION_CONTEXT = new ProviderToken('RouteLocationContext', false);
var staticRoutePrefix = '^';
var routeConfig = Object({
    isLoaded: false,
    intentFallback: null,
    useHash: true,
    fallback: {
        url: '/',
        name: '.'
    },
    restoreOnRefresh: true,
    delimiter: [
        '#!',
        ''
    ],
    autoInitialize: true,
    allowChangeFromLocationBar: true,
    scrollTop: true
});
var ROUTE_EVENT_ENUMS = {
    SUCCESS: 'WEB_ROUTE_SUCCESS',
    ERROR: 'WEB_ROUTE_ERROR',
    START: 'WEB_ROUTE_START',
    NOTFOUND: 'WEB_ROUTE_NOT_FOUND',
    GUARDCHECK: 'WEB_ROUTE_GUARD_CHECK',
    REDIRECT: 'WEB_ROUTE_REDIRECT',
    RENDER: 'WEB_ROUTE_RENDER',
    COMPLETE: 'WEB_ROUTE_COMPLETE',
    LME: 'WEB_ROUTE_MODULE_LOAD_ERROR'
};
var INTENT_EVENT_ENUMS = {
    SUCCESS: 'INTENT_SUCCESS',
    ERROR: 'INTENT_ERROR',
    START: 'INTENT_START',
    NOTFOUND: 'INTENT_NOT_FOUND',
    GUARDCHECK: 'INTENT_GUARD_CHECK',
    REDIRECT: 'INTENT_REDIRECT',
    RENDER: 'INTENT_RENDER',
    COMPLETE: 'INTENT_COMPLETE'
};
var _unregistered = {};
var routeCollections = {};
var $intentCollection = {};
function createRoute(url) {
    var replacer = '/([\\w-@!.s%]+)', paramsMapping = [];
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
function addViewMatcher(viewId, route, viewsArray) {
    if (route.component) {
        route.views = route.views || {};
        route.views[viewId] = route.component;
        delete route.component;
        if (viewsArray)
            viewsArray.push(viewId);
    }
}
function attachRouteViews(route) {
    var views = Object.keys(route.views || {});
    if (route.parent) {
        var parentRoute = routeCollections[route.parent];
        route.views = route.views || {};
        for (var view in parentRoute.views) {
            if (view !== route.targetView) {
                route.views[view] = parentRoute.views[view];
            } else if (!route.views[view]) {
                addViewMatcher(view, route);
            }
        }
        if (route.targetView && !route.views[route.targetView]) {
            addViewMatcher(route.targetView, route);
        }
        if (!views.length && !route.abstract) {
            views = parentRoute.route._views;
        }
        parentRoute = null;
    } else {
        addViewMatcher(route.targetView || staticRoutePrefix, route, views);
    }
    route.route._views = views;
}
function generateRoute(route, requireParent) {
    if (route.isIntent) {
        $intentCollection[route.name] = route;
        return;
    }
    if (routeCollections[route.name] && !(_unregistered[route.parent] && _unregistered[route.parent].includes(route.name))) {
        console.info('[Route] Duplicate route found: ' + route.name + ', skipping to use existing');
        return;
    }
    route.route = createRoute(route.url || '^');
    attachRouteViews(route);
    if (!route.views && (!route.component && !route.loadModule) && !requireParent) {
        console.info('[Router] Skipping view configuration for: ' + route.name);
        return;
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
    if (route.parent && routeCollections.hasOwnProperty(route.parent)) {
        var parent = routeCollections[route.parent];
        if (parent.data && parent.data.authorities && (!route.data || !route.data.authorities)) {
            route.data = route.data || {};
            route.data.authorities = parent.data.authorities;
        }
    }
    routeCollections[route.name] = route;
    if (_unregistered.hasOwnProperty(route.name)) {
        _unregistered[route.name].forEach(function (uName) {
            setupRoute(routeCollections[uName], true);
        });
        delete _unregistered[route.name];
    }
}
function setRouteChildren(route, fromLazyLoad) {
    if (route.children) {
        for (var childRoute of route.children) {
            if (childRoute.name) {
                var name = childRoute.name;
                childRoute.name = [
                    route.name,
                    name
                ].join('.');
                if (!routeCollections[childRoute.name]) {
                    childRoute.url = (route.url || '/' + route.name) + (childRoute.url || '/' + name);
                    childRoute.parent = route.name;
                    generateRoute(childRoute, true);
                    setRouteChildren(childRoute);
                } else if (fromLazyLoad) {
                    lazyLoadRoute(childRoute);
                }
            } else {
                errorBuilder('unregistered child route in parent<' + route.name + '>, name is required:' + JSON.stringify(childRoute));
            }
        }
    }
}
function setupRoute(route) {
    var requireParent = route.hasOwnProperty('parent');
    if (!route.name && route.url) {
        route.name = route.url.replace(/[/:]/g, _ => _ == '/' ? '.' : '');
    }
    if (requireParent && !routeCollections.hasOwnProperty(route.parent)) {
        if (!_unregistered.hasOwnProperty(route.parent)) {
            _unregistered[route.parent] = [];
        }
        _unregistered[route.parent].push(route.name);
        routeCollections[route.name] = route;
        return;
    }
    generateRoute(route, requireParent);
    setRouteChildren(route);
}
function lazyLoadRoute(route) {
    if (route.name) {
        var mainRoute = routeCollections[route.name];
        if (mainRoute) {
            Object.assign(mainRoute, route);
            attachRouteViews(mainRoute);
            setRouteChildren(mainRoute, true);
        } else {
            setupRoute(route);
        }
    }
}
function patchParams(route, params, queryParam) {
    route.route.params = extend({}, route.params || {}, params || {});
    if (queryParam && route.route.paramsMapping.length && !params) {
        route.route.regexp.exec(queryParam).splice(1).forEach(function (val, inc) {
            var isNumber = Number(val);
            route.route.params[route.route.paramsMapping[inc]] = !isNaN(isNumber) ? isNumber : decodeURIComponent(val);
        });
    }
}
function getParentRoute(name) {
    return routeCollections[name];
}
function getFallback(urlPath, deep) {
    if (deep && urlPath.lastIndexOf('/') > 0) {
        const cPath = [];
        for (const path of urlPath.split('/').filter(a => !!a)) {
            cPath.push(path);
            const found = routeCollections[cPath.join('.')];
            if (found) {
                return found;
            }
        }
    }
    return routeCollections[routeConfig.fallback.name] || null;
}
function getRouteObj(urlPath, deep) {
    for (var prop in routeCollections) {
        if (!routeCollections[prop].abstract && routeCollections[prop].route.regexp.test(urlPath)) {
            return routeCollections[prop];
        }
    }
    return getFallback(urlPath, deep);
}
function parseDelimeter() {
    return routeConfig.delimiter.map(a => (a = a.split(''), a.unshift(''), a.join('\\'))).join('(.*)');
}
function getRoute(routeName, params) {
    var route = routeCollections[routeName];
    if (!route) {
        route = routeCollections[routeConfig.fallback.name] || null;
    }
    patchParams(route, params || route.params);
    var url = parseUrl(route.url, route.route.params);
    return {
        route,
        url
    };
}
function getRequiredRoute(url, params, deep = false) {
    var queryParam = url.split('?');
    var foundRoute = getRouteObj(queryParam[0], deep);
    if (foundRoute) {
        patchParams(foundRoute, params, queryParam[0]);
        if (queryParam[1]) {
            foundRoute.route.params = extend(foundRoute.route.params, unserialize(queryParam[1]));
        }
    }
    return foundRoute;
}
function parseUrl(href, params) {
    return href.replace(/\:(\w)+/g, function (index, key) {
        var param = index.split(':')[1];
        return param in params ? encodeURIComponent(params[param]) : '';
    });
}
function getHref(routeName, params) {
    var route = routeCollections[routeName];
    if (route) {
        params = params || route.params;
        if (route.route.paramsMapping.length && !params) {
            return errorBuilder(routeName + ' requires parameter, but none was provided');
        }
        return parseUrl(route.url, params);
    }
    return routeConfig.fallback.url;
}
class ViewHandler {
    constructor() {
        this.viewsHolder = new Map();
        this._pendingViewStack = new Map();
        this.currentView = staticRoutePrefix;
        this._resolvedRoute = {};
    }
    isResolved(parentName, setValue) {
        var isResolved = this._resolvedRoute[parentName];
        this._resolvedRoute[parentName] = setValue || false;
        return isResolved;
    }
    setViewReference(elementRef, ref) {
        this.viewsHolder.set(ref, {
            element: elementRef,
            compiledWith: null
        });
        this.handlePendingView(ref);
    }
    getView(view, name) {
        var _viewHolder = this.viewsHolder.get(view);
        return name ? _viewHolder[name] : _viewHolder;
    }
    compileViewTemplate(viewComponent, viewObjectInstance, callback) {
        this.cleanUp(viewObjectInstance);
        var isLazyLoaded = !!viewComponent.loadModule;
        this._loadModule(viewComponent.loadModule).then(componentFactory => {
            ComponentFactoryResolver(isLazyLoaded ? componentFactory : viewComponent, viewObjectInstance.element).then(componentRef => {
                viewObjectInstance.compiledWith = componentRef;
                callback();
            }, errMessage => {
                errorBuilder(errMessage);
                callback();
            });
        });
    }
    removeViews(views) {
        this.viewsHolder.forEach((view, key) => {
            if (!views.includes(key)) {
                this.cleanUp(view);
                this.viewsHolder.delete(key);
            }
        });
    }
    getCurrentView(route) {
        var views = [];
        var mView = Object.keys(route.views).concat();
        this.isResolved(route.name, true);
        if (route.parent && !this.isResolved(route.parent, true)) {
            return mView;
        }
        if (route.targetView) {
            if (this.viewsHolder.has(route.targetView))
                return views.concat(route.targetView);
            else if (!mView.includes(route.targetView))
                mView.push(route.targetView);
            return mView;
        }
        views = views.concat(route.route._views);
        this.removeViews(views);
        mView = null;
        return views;
    }
    resolveViews(route) {
        return rxLoop(this.getCurrentView(route), (view, next) => {
            view = view || staticRoutePrefix;
            var viewObj = route.views[view] || route;
            var viewObjectInstance = this.getView(view);
            if (!viewObj) {
                errorBuilder('[Router] No view definition for ' + route.name);
                return next();
            }
            if (viewObjectInstance) {
                this.compileViewTemplate(viewObj, viewObjectInstance, next);
            } else {
                this._pendingViewStack.set(view, viewObj);
                next();
            }
        });
    }
    destroy(ref) {
        var viewInstance = this.viewsHolder.get(ref);
        if (!viewInstance)
            return;
        this.cleanUp(viewInstance);
        this.viewsHolder.delete(ref);
        viewInstance = null;
    }
    handlePendingView(viewName) {
        if (this._pendingViewStack.has(viewName)) {
            this.compileViewTemplate(this._pendingViewStack.get(viewName), this.viewsHolder.get(viewName), () => {
                this._pendingViewStack.delete(viewName);
            });
        }
    }
    cleanUp(viewInstance) {
        if (viewInstance.compiledWith) {
            DOMHelper.remove(viewInstance.compiledWith);
        } else {
            viewInstance.element.children.forEach(DOMHelper.remove);
        }
    }
    _loadModule(mLoader) {
        if (!mLoader)
            return Promise.resolve(null);
        return mLoader().then(module => {
            compileModule(module);
            return module.rootElement;
        });
    }
}
ViewHandler.ctors = {};
function RouteInterceptorInstance(route, path, currentRoute, redirectMethod) {
    this.name = route.name;
    this.path = path;
    this.locals = {};
    this.currentRoute = currentRoute;
    this.originalUrl = route.url;
    this.data = route.data;
    this.redirect = redirectMethod;
    Object.defineProperty(this, 'params', { get: () => route.route.params });
}
function RouteErrorEvent(path) {
    this.url = path;
    this.message = 'unable to resolve route';
}
function RouteEvent(path, route, previousRoute, previousPath) {
    this.path = path;
    this.name = route.name;
    this.params = route.route.params;
    this.data = route.data;
    if (previousPath) {
        this.previous = {
            path: previousPath,
            name: previousRoute.name,
            params: previousRoute.route.params
        };
    }
}
class LocationService {
    constructor(viewHandler, locationStrategy, locationContext) {
        this.viewHandler = viewHandler;
        this.locationContext = locationContext || null;
        if (this.locationContext) {
            routeConfig.isLoaded = false;
        }
        this.strategy = new (locationStrategy || HashStrategyService)(this);
        this.lastVisited = '';
        this.previousState = null;
        this.locationState = null;
        this.transitionState = {
            currentState: '',
            previousState: '',
            inProgress: false,
            stateQueue: [],
            transitioned: false,
            stopped: false
        };
        this.previous = null;
        this.currentRoute = Object({ route: { params: {} } });
        this.events = new EventManager((e, route, path, initial) => {
            if (ROUTE_EVENT_ENUMS.RENDER === e.type) {
                var parentRoute = null;
                if (route.parent && !this.viewHandler.isResolved(route.parent, true)) {
                    parentRoute = getParentRoute(route.parent);
                }
                this.viewHandler._loadModule(parentRoute ? parentRoute.loadModule : route.loadModule).then(rootElement => {
                    if (initial && initial !== path) {
                        const reroute = getRequiredRoute(initial, null, true);
                        if (reroute.name !== route.name) {
                            return this.go({
                                route: reroute,
                                url: initial,
                                initial
                            });
                        }
                    }
                    this._processState(route, path, rootElement);
                }).catch(err => this.events.dispatch(ROUTE_EVENT_ENUMS.LME, err));
            }
        });
    }
    changed(path) {
        return this.lastVisited !== path;
    }
    replace(path) {
        if (!this.locationState && !path)
            return;
        this.locationState = {
            state: 'replaceState',
            path: path || this.locationState.previous,
            previous: this.previousState,
            current: this.lastVisited
        };
        this.previous = this.locationState.path;
    }
    getState(state) {
        if (state) {
            this.locationState = state;
            return;
        }
        return this.locationState;
    }
    go(routeObj) {
        if (!routeObj || !routeObj.url || !routeObj.route) {
            this.events.dispatch(ROUTE_EVENT_ENUMS.NOTFOUND, { message: 'unable to resolve route' });
            return false;
        }
        var path = routeObj.url;
        var redirect = (routeName, params) => this.redirect(routeName, params);
        var transitioned = () => this.transitionState.currentState !== path;
        var checkTransition = () => {
            if (path === this.transitionState.currentState)
                return;
            this.transitionState.stateQueue.push([
                path,
                routeObj.route.route.params
            ]);
            this.transitionState.transitioned = true;
        };
        this.transitionState.previousState = this.transitionState.currentState;
        if (this.transitionState.inProgress) {
            checkTransition(routeObj);
        }
        if (this.changed(path) && transitioned()) {
            this.transitionState.currentState = path;
            this.transitionState.inProgress = true;
            this.events.dispatch(ROUTE_EVENT_ENUMS.START, {
                current: this.lastVisited,
                path,
                redirected: this.transitionState.transitioned
            });
            this.events.dispatch(ROUTE_EVENT_ENUMS.GUARDCHECK, routeObj.route);
            var routeInstance = new RouteInterceptorInstance(routeObj.route, path, this.currentRoute, redirect);
            InterceptorResolver(ROUTE_INTERCEPTOR, routeInstance).then(() => {
                if (!this.transitionState.stopped && !transitioned()) {
                    this.events.dispatch(ROUTE_EVENT_ENUMS.RENDER, routeObj.route, path, routeObj.initial);
                } else if (!this.transitionState.transitioned) {
                    Object.assign(this.transitionState, {
                        inProgress: false,
                        currentState: this.transitionState.previousState,
                        stopped: false
                    });
                }
                routeObj = null;
            }).catch(() => {
                if (!this.transitionState.transitioned) {
                    Object.assign(this.transitionState, {
                        inProgress: false,
                        currentState: this.transitionState.previousState,
                        stopped: false
                    });
                }
                routeObj = null;
            });
        }
    }
    getRootUrl() {
        var loc = this.locationContext || document.location;
        var rootUrl = loc.protocol + '//' + (loc.hostname || loc.host);
        if (loc.port) {
            rootUrl += ':' + loc.port;
        }
        return rootUrl;
    }
    getFullPath(path) {
        return this.getRootUrl() + this.strategy.path(path);
    }
    _processState(route, path, rootElement) {
        var navigatedPath = route.name === routeConfig.fallback.name ? route.url : path;
        var lastTransitionQueue = this.transitionState.stateQueue.pop();
        if (lastTransitionQueue) {
            navigatedPath = lastTransitionQueue[0];
            route = getRequiredRoute.apply(null, lastTransitionQueue);
            this.transitionState.stateQueue.length = 0;
        }
        if (this.changed(navigatedPath)) {
            var routeEvent = new RouteEvent(navigatedPath, route, this.currentRoute, this.lastVisited);
            this.events.dispatch(ROUTE_EVENT_ENUMS.SUCCESS, routeEvent);
            this.currentRoute = route;
            this.viewHandler.resolveViews(route, rootElement).then(() => {
                this.strategy.pushState({
                    name: route.name,
                    params: route.route.params
                }, navigatedPath);
                if (routeConfig.scrollTop)
                    window.scrollTo(0, 0);
                this.events.dispatch(ROUTE_EVENT_ENUMS.COMPLETE, routeEvent);
                routeEvent = null;
            });
        } else {
            this.events.dispatch(ROUTE_EVENT_ENUMS.ERROR, new RouteErrorEvent(navigatedPath));
        }
        this.transitionState.inProgress = false;
        this.transitionState.stopped = false;
        this.lastVisited = navigatedPath;
    }
    initializeRoute(restoreOnRefresh) {
        if (routeConfig.isLoaded)
            return;
        var path = '';
        if (restoreOnRefresh) {
            path = this.strategy.path();
        }
        this.byUrl(path);
        routeConfig.isLoaded = true;
    }
    search(query) {
        if (this.locationContext) {
            return this.locationContext.search = query;
        }
        return window.location.search = query;
    }
    getSearchParams() {
        var search = (this.locationContext || window.location).search || '';
        return unserialize(search.substring(1));
    }
    href(stateName, params) {
        return getHref(stateName, params);
    }
    subscribe(eventName, callback) {
        var eventList = Object.values(ROUTE_EVENT_ENUMS);
        if (eventList.includes(eventName)) {
            return this.events.add(eventName, callback);
        } else {
            console.error(eventName + ' does not exist, please use ' + eventList.join('|'));
            return null;
        }
    }
    redirect(routeName, params) {
        var config = getRoute(routeName, params);
        if (this.changed(config.url)) {
            this.events.dispatch(ROUTE_EVENT_ENUMS.REDIRECT, {
                current: this.transitionState.currentState,
                path: config.url
            });
            this.go(config);
        } else {
            this.transitionState.stopped = true;
        }
    }
    byUrl(url, params) {
        url = url || routeConfig.fallback.url;
        var route = getRequiredRoute(url, params);
        this.go({
            route,
            url: route && route.fallback ? route.url : url,
            initial: routeConfig.isLoaded ? null : url
        });
    }
    byName(name, params) {
        this.go(getRoute(name, params));
    }
}
LocationService.ctors = {
    DI: [
        ViewHandler,
        ROUTE_LOCATION_STRATEGY,
        ROUTE_LOCATION_CONTEXT
    ]
};
class WebStateService {
    constructor(locationService) {
        this.onParamsChanged = new EventEmitter();
        this.locationService = locationService;
    }
    get state() {
        return this.locationService.currentRoute;
    }
    go(routeName, params, targetWindow) {
        var isHrefRequest = routeName.includes('/');
        if (routeName.includes('//')) {
            return targetWindow ? window.open(routeName, targetWindow) : location.href = routeName;
        }
        if (!targetWindow) {
            if (isHrefRequest) {
                this.locationService.byUrl(routeName, params);
            } else {
                this.locationService.byName(routeName, params);
            }
        } else {
            var url = isHrefRequest ? routeName : getHref(routeName, params);
            window.open(this.locationService.getFullPath(url), targetWindow);
        }
    }
    getParam(name) {
        return this.locationService.currentRoute.route.params[name];
    }
    setParam(name, value) {
        var params = this.locationService.currentRoute.route.params;
        var newParam = {};
        if (typeof name !== 'object') {
            newParam[name] = value;
        } else {
            newParam = name;
        }
        Object.assign(params, newParam);
        this.onParamsChanged.emit(newParam);
        newParam = null;
    }
    getUrlParams() {
        return Object.assign({}, this.locationService.currentRoute.route.params);
    }
}
WebStateService.ctors = { DI: [LocationService] };
class GoFn {
    constructor(webStateService) {
        this.params = {};
        this.clickHandler = function (event) {
            event.preventDefault();
            webStateService.go(this.pathName, this.params, this.target);
        };
    }
}
GoFn.ctors = {
    selector: 'go',
    events: {
        'click': {
            type: 'event',
            value: [{
                    type: 'call',
                    args: ['$event'],
                    fn: 'clickHandler'
                }],
            node: 'go'
        }
    },
    props: {
        pathName: { value: 'go' },
        params: {},
        target: {}
    },
    DI: [WebStateService]
};
function jViewFn(viewHandler, elementRef) {
    this.ref = staticRoutePrefix;
    this.didInit = function () {
        viewHandler.setViewReference(elementRef, this.ref);
    };
    this.viewDidDestroy = function () {
        viewHandler.destroy(this.ref);
    };
}
jViewFn.ctors = {
    selector: 'router-view',
    props: { ref: {} },
    DI: [
        ViewHandler,
        {
            optional: true,
            tokenName: 'ElementRef'
        }
    ]
};
class ViewIntentService {
    constructor() {
        this._currentOpenIntent = new Map();
        this.intentContainer = null;
        this._currentIntent = '';
        this.onCloseEvent = new EventEmitter();
        this.events = new EventManager((e, intentConfig, params) => {
            if (INTENT_EVENT_ENUMS.RENDER === e.type) {
                var name = intentConfig.name;
                this._previousIntent = this._currentIntent;
                this._currentIntent = name;
                this._currentOpenIntent.set(name, {
                    element: null,
                    transitionTimer: intentConfig.transition || 0,
                    route: {
                        name,
                        params,
                        data: intentConfig.data || null
                    }
                });
                ComponentFactoryResolver(intentConfig.component, this.intentContainer, componentRef => {
                    var config = this._currentOpenIntent.get(name);
                    config.element = componentRef;
                    componentRef.nativeElement.classList.add('view-intent');
                    this.intentContainer.nativeElement.appendChild(componentRef.nativeElement);
                    if (intentConfig.data && intentConfig.data.attrs) {
                        AttributeAppender.set(componentRef.nativeElement, intentConfig.data.attrs);
                    }
                    this.intentContainer.children.add(componentRef);
                    this.transitIntent(name);
                    this.events.dispatch(INTENT_EVENT_ENUMS.SUCCESS, {
                        name,
                        params
                    });
                }, true);
            }
        });
    }
    openIntent(intentName, params) {
        if (this._currentIntent === intentName)
            return;
        var intentConfig = $intentCollection[intentName];
        if (intentConfig) {
            if (!this._currentOpenIntent.has(intentName))
                this.events.dispatch(INTENT_EVENT_ENUMS.RENDER, intentConfig, params);
            else
                this.transitIntent(intentName);
        } else
            this.events.dispatch(INTENT_EVENT_ENUMS.NOTFOUND, {
                name: intentName,
                current: this._currentIntent
            });
    }
    closeIntent(data) {
        var allIntents = [];
        this._currentOpenIntent.forEach((intent, key) => {
            intent.element && intent.element.nativeElement.removeAttribute('style');
            if (this._currentIntent === key)
                DOMHelper.remove(intent.element, true);
            else
                allIntents.push(key);
        });
        var previous = this._currentIntent;
        this._currentOpenIntent.delete(this._currentIntent);
        this._currentIntent = allIntents.pop();
        if (this._currentIntent)
            this.transitIntent(this._currentIntent);
        this.onCloseEvent.emit({
            intent: previous,
            current: this._currentIntent,
            data
        });
    }
    destroyAllIntent() {
        this._currentOpenIntent.forEach(function (intentView) {
            DOMHelper.remove(intentView.element);
        });
        this._currentIntent = undefined;
        this._currentOpenIntent.clear();
    }
    animate(element, style, timer) {
        var start = null;
        function step(timestamp) {
            if (!start)
                start = timestamp;
            var progress = timestamp - start;
            if (progress < timer) {
                window.requestAnimationFrame(step);
            } else {
                AttributeAppender.set(element, { style });
            }
        }
        if (!element) {
            return;
        }
        window.requestAnimationFrame(step);
    }
    removeIntent(intentName) {
        this._currentOpenIntent.remove(intentName);
    }
    transitIntent(intentName) {
        var intentView = this._currentOpenIntent.get(intentName);
        if (intentView) {
            this._currentIntent = intentName;
            this.hideAllIntent();
            this.animate(intentView.element.nativeElement, { transform: 'translateX(0%)' }, intentView.transitionTimer || 1);
        }
    }
    getIntentView(intentName) {
        return this._currentOpenIntent.get(intentName);
    }
    hideAllIntent() {
        this._currentOpenIntent.forEach(intentView => {
            if (intentView.element) {
                intentView.element.nativeElement.removeAttribute('style');
            }
        });
    }
    getCurrentIntent() {
        return (this.getIntentView(this._currentIntent) || {}).route;
    }
    getParams() {
        var currentIntentRoute = this.getCurrentIntent();
        return currentIntentRoute && currentIntentRoute.params;
    }
}
ViewIntentService.ctors = {};
function OpenIntent(viewIntent) {
    this.params = {};
    this.open = null;
    this.clickHandler = function () {
        viewIntent.openIntent(this.open, this.params);
    };
}
OpenIntent.ctors = {
    selector: 'openIntent',
    events: {
        'click': {
            type: 'event',
            value: [{
                    type: 'call',
                    args: [],
                    fn: 'clickHandler'
                }],
            node: 'openIntent'
        }
    },
    props: {
        open: { value: 'openIntent' },
        params: {}
    },
    DI: [ViewIntentService]
};
class JIntentContainer {
    constructor(viewIntent, ElementRef) {
        viewIntent.intentContainer = ElementRef;
        this.viewDidDestroy = function () {
            viewIntent.destroyAllIntent();
        };
    }
}
JIntentContainer.ctors = {
    selector: 'router-intent-container',
    DI: [
        ViewIntentService,
        {
            optional: true,
            tokenName: 'ElementRef'
        }
    ]
};
function RouterInitService(locationService) {
    if (routeConfig.autoInitialize) {
        locationService.initializeRoute(routeConfig.restoreOnRefresh);
    }
}
class AbstractStrategy {
    constructor(locationService) {
        this.originalState = null;
        this.locationService = locationService;
        this.isReplaceState = false;
        this.stateChanged = false;
        if (!this.locationService.locationContext) {
            this.listenEvent();
        }
    }
    getBaseHref() {
    }
    path() {
    }
    pushState(data, path) {
        if (this.locationService.locationContext)
            return;
        if (history) {
            history.pushState(data, null, this.locationService.getFullPath(path));
        }
    }
    listenEvent() {
    }
}
class HashStrategyService extends AbstractStrategy {
    constructor(locationService) {
        super(locationService);
        this.hashRegEx = new RegExp(parseDelimeter());
    }
    replace() {
        var state = this.locationService.getState();
        this.isReplaceState = true;
        if (state.hash !== state.previousHash || stateChanged) {
            if (!this.locationService.locationContext) {
                location.replace(state.hash);
            }
            this.originalState = state.currentLocation;
        }
    }
    path(path) {
        if (path)
            return routeConfig.delimiter.join(path);
        var hash = this.locationService.locationContext ? this.locationService.locationContext.hash || '' : location.hash;
        var execPath = this.hashRegEx.exec(hash);
        return execPath ? execPath[1] : '';
    }
    listenEvent() {
        window.addEventListener('hashchange', e => {
            if (!routeConfig.allowChangeFromLocationBar)
                return;
            var locHash = location.hash.split(/#/)[1];
            if (!locHash.length || !this.locationService.changed(locHash) || this.isReplaceState) {
                this.isReplaceState = false;
                return;
            }
            e.preventDefault();
            this.locationService.byUrl(locHash);
        }, false);
    }
}
class PathStrategyService extends AbstractStrategy {
    constructor(locationService) {
        super(locationService);
    }
    path(path) {
        if (path)
            return path;
        return this.locationService.locationContext ? this.locationService.locationContext.pathname || '/' : location.pathname;
    }
    listenEvent() {
        window.addEventListener('popstate', e => {
            e.preventDefault();
            var state = e.state;
            if (state && this.locationService.changed(state.name)) {
                this.locationService.byName(state.name, state.params);
            }
        }, false);
    }
}
class RouterModule {
    static setRoutes(routes) {
        if (Array.isArray(routes)) {
            routes.forEach(route => setupRoute(route));
        } else {
            setupRoute(routes);
        }
    }
    static lazyLoad(routes) {
        if (Array.isArray(routes)) {
            routes.forEach(lazyLoadRoute);
        } else {
            lazyLoadRoute(routes);
        }
    }
}
APP_BOOTSTRAP.register({
    DI: [LocationService],
    factory: RouterInitService
}, true);__required.r(exports, 'RouterModule', RouterModule);
__required.r(exports, 'GoFn', GoFn);
__required.r(exports, 'WebStateService', WebStateService);
__required.r(exports, 'LocationService', LocationService);
__required.r(exports, 'ViewHandler', ViewHandler);
__required.r(exports, 'ROUTE_INTERCEPTOR', ROUTE_INTERCEPTOR);
__required.r(exports, 'ROUTE_LOCATION_STRATEGY', ROUTE_LOCATION_STRATEGY);
__required.r(exports, 'ROUTE_LOCATION_CONTEXT', ROUTE_LOCATION_CONTEXT);
__required.r(exports, 'staticRoutePrefix', staticRoutePrefix);
__required.r(exports, 'routeConfig', routeConfig);
__required.r(exports, 'ROUTE_EVENT_ENUMS', ROUTE_EVENT_ENUMS);
__required.r(exports, 'INTENT_EVENT_ENUMS', INTENT_EVENT_ENUMS);
__required.r(exports, 'getParentRoute', getParentRoute);
__required.r(exports, 'getFallback', getFallback);
__required.r(exports, 'parseDelimeter', parseDelimeter);
__required.r(exports, 'getRoute', getRoute);
__required.r(exports, 'getRequiredRoute', getRequiredRoute);
__required.r(exports, 'parseUrl', parseUrl);
__required.r(exports, 'getHref', getHref);
__required.r(exports, 'RouteInterceptorInstance', RouteInterceptorInstance);
__required.r(exports, 'RouteErrorEvent', RouteErrorEvent);
__required.r(exports, 'RouteEvent', RouteEvent);
__required.r(exports, 'jViewFn', jViewFn);
__required.r(exports, 'OpenIntent', OpenIntent);
__required.r(exports, 'ViewIntentService', ViewIntentService);
__required.r(exports, 'JIntentContainer', JIntentContainer);
__required.r(exports, 'RouterInitService', RouterInitService);
__required.r(exports, 'HashStrategyService', HashStrategyService);
__required.r(exports, 'AbstractStrategy', AbstractStrategy);
__required.r(exports, 'PathStrategyService', PathStrategyService);

},
1172 : (module, exports, __required, global) => {
"use strict";
const core = __required(1145);
/** compiled CalculatorComponent **/

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

CalculatorComponent.ctors = {
    selector: 'app-calculator',
    exposeView: true
};

CalculatorComponent.view = /** jeli template **/ (viewRef) => { 'use strict'; var _GT = (id, mtl) => core.ViewParser.$({}[id], mtl); return core.ViewParser.jit(viewRef, [{"type":1,"name":"div","index":0,"isc":false,"attr":{"_jeli-11ctj79":true,"class":"calculator"},"children":[{"type":1,"name":"input","index":1,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"text","class":"calculator-screen","disabled":""},"attr$":{"value":{"prop":"currentNumber","once":false}}},{"type":1,"name":"div","index":3,"isc":false,"attr":{"_jeli-11ctj79":true,"class":"calculator-keys"},"children":[{"type":1,"name":"button","index":1,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","class":"operator","value":"+"},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"+"}],"fn":"getOperation"}]}],"children":[{"type":3,"ast":["+"]}]},{"type":1,"name":"button","index":3,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","class":"operator","value":"-"},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"-"}],"fn":"getOperation"}]}],"children":[{"type":3,"ast":["-"]}]},{"type":1,"name":"button","index":5,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","class":"operator","value":"*"},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"*"}],"fn":"getOperation"}]}],"children":[{"type":3,"ast":["×"]}]},{"type":1,"name":"button","index":7,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","class":"operator","value":"/"},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"/"}],"fn":"getOperation"}]}],"children":[{"type":3,"ast":["÷"]}]},{"type":1,"name":"button","index":9,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":7},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"7"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["7"]}]},{"type":1,"name":"button","index":11,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":8},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"8"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["8"]}]},{"type":1,"name":"button","index":13,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":9},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"9"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["9"]}]},{"type":1,"name":"button","index":15,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":4},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"4"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["4"]}]},{"type":1,"name":"button","index":17,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":5},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"5"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["5"]}]},{"type":1,"name":"button","index":19,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":6},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"6"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["6"]}]},{"type":1,"name":"button","index":21,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":1},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"1"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["1"]}]},{"type":1,"name":"button","index":23,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":2},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"2"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["2"]}]},{"type":1,"name":"button","index":25,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":3},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"3"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["3"]}]},{"type":1,"name":"button","index":27,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","value":0},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"0"}],"fn":"getNumber"}]}],"children":[{"type":3,"ast":["0"]}]},{"type":1,"name":"button","index":29,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","class":"decimal","value":"."},"events":[{"name":"click","value":[{"type":"call","args":[],"fn":"getDecimal"}]}],"children":[{"type":3,"ast":["."]}]},{"type":1,"name":"button","index":31,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","class":"all-clear","value":"all-clear"},"events":[{"name":"click","value":[{"type":"call","args":[],"fn":"clear"}]}],"children":[{"type":3,"ast":["AC"]}]},{"type":1,"name":"button","index":33,"isc":false,"attr":{"_jeli-11ctj79":true,"type":"button","class":"equal-sign","value":"="},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"="}],"fn":"getOperation"}]}],"children":[{"type":3,"ast":["="]}]}]}]}], {}); };/** template loader **/
__required.r(exports, 'CalculatorComponent', CalculatorComponent);

},
1173 : (module, exports, __required, global) => {
"use strict";
const common = __required(1146);
const ItemList = __required(1176, 'ItemList');
const core = __required(1145);
const form = __required(1169);
const FormControlService = form.FormControlService;
/** compiled RouterPageElement **/

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

RouterPageElement.ctors = {
    selector: 'router-form-page',
    exposeView: true,
    DI: [
        FormControlService
    ]
};

RouterPageElement.view = /** jeli template **/ (viewRef) => { 'use strict'; var _GT = (id, mtl) => core.ViewParser.$({}[id], mtl); return core.ViewParser.jit(viewRef, [{"type":1,"name":"div","index":0,"isc":false,"attr":{"_jeli-1044nuz":true},"props":{"formControl":{"prop":"testForm"}},"providers":[form.FormControlDirective],"children":[{"type":1,"name":"div","index":1,"isc":false,"attr":{"_jeli-1044nuz":true},"children":[{"type":1,"name":"input","index":1,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"radio"},"props":{"formField":"radio","value":1},"providers":[form.RadioEventBinder,form.FormFieldDirective]},{"type":3,"ast":[" Yes"]},{"type":1,"name":"br","index":3,"isc":false,"attr":{"_jeli-1044nuz":true}},{"type":1,"name":"input","index":5,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"radio"},"props":{"formField":"radio","value":0},"providers":[form.RadioEventBinder,form.FormFieldDirective]},{"type":3,"ast":[" No"]},{"type":1,"name":"br","index":7,"isc":false,"attr":{"_jeli-1044nuz":true}},{"type":1,"name":"input","index":9,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"checkbox"},"props":{"formField":"checkbox"},"providers":[form.CheckboxEventBinder,form.FormFieldDirective]},{"type":1,"name":"br","index":10,"isc":false,"attr":{"_jeli-1044nuz":true}}]},{"type":1,"name":"textarea","index":3,"isc":false,"attr":{"_jeli-1044nuz":true},"props":{"formField":"textarea"},"providers":[form.DefaultEventBinder,form.FormFieldDirective]},{"type":1,"name":"br","index":4,"isc":false,"attr":{"_jeli-1044nuz":true}},{"type":1,"name":"input","index":6,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"text","minlength":5,"maxlength":10,"required":true},"props":{"formField":"input"},"providers":[form.DefaultEventBinder,form.FormFieldDirective]},{"type":1,"name":"br","index":7,"isc":false,"attr":{"_jeli-1044nuz":true}},{"type":1,"name":"input","index":9,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"file"},"props":{"formField":"file"},"providers":[form.DefaultEventBinder,form.FormFieldDirective]},{"type":1,"name":"br","index":10,"isc":false,"attr":{"_jeli-1044nuz":true}},{"type":1,"name":"input","index":12,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"range","id":"a"},"props":{"formField":"range"},"providers":[form.RangeEventBinder,form.FormFieldDirective]},{"type":1,"name":"br","index":13,"isc":false,"attr":{"_jeli-1044nuz":true}},{"type":1,"name":"input","index":15,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"number","id":"b"},"props":{"formField":"number"},"providers":[form.NumberEventBinder,form.FormFieldDirective]},{"type":1,"name":"br","index":16,"isc":false,"attr":{"_jeli-1044nuz":true}},{"type":1,"name":"select","index":18,"isc":false,"attr":{"_jeli-1044nuz":true,"multiple":""},"props":{"formField":"select"},"providers":[form.SelectEventBinder,form.FormFieldDirective],"children":[{"type":1,"name":"option","index":1,"isc":false,"attr":{"_jeli-1044nuz":true,"value":"select_1"},"children":[{"type":3,"ast":["Select 1"]}]},{"type":1,"name":"option","index":3,"isc":false,"attr":{"_jeli-1044nuz":true,"value":"select_2"},"children":[{"type":3,"ast":["Select 2"]}]},{"type":1,"name":"option","index":5,"isc":false,"attr":{"_jeli-1044nuz":true,"value":"select_3"},"children":[{"type":3,"ast":["Select 3"]}]}]},{"type":1,"name":"div","index":20,"isc":false,"attr":{"_jeli-1044nuz":true},"props":{"formControl":{"prop":{"type":"call","args":[{"type":"raw","value":"personalInfo"}],"fn":"getField","namespaces":["testForm"]}}},"providers":[form.FormControlDirective],"children":[{"type":1,"name":"div","index":1,"isc":false,"attr":{"_jeli-1044nuz":true},"children":[{"type":1,"name":"input","index":1,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"text","class":"form-control"},"props":{"formField":"firstName"},"providers":[form.DefaultEventBinder,form.FormFieldDirective]}]},{"type":1,"name":"input","index":3,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"text","class":"form-control"},"props":{"formField":"lastName"},"providers":[form.DefaultEventBinder,form.FormFieldDirective]},{"type":1,"name":"input","index":5,"isc":false,"attr":{"_jeli-1044nuz":true,"type":"number","class":"form-control"},"props":{"formField":"age"},"providers":[form.NumberEventBinder,form.FormFieldDirective]}]},{"type":1,"name":"div","index":22,"isc":false,"attr":{"_jeli-1044nuz":true},"children":[{"type":1,"name":"button","index":0,"isc":false,"attr":{"_jeli-1044nuz":true,"class":"btn btn-primary"},"attr$":{"disabled":{"prop":{"type":"bin","left":{"type":"una","ops":"!","args":["testForm","valid"]},"ops":"&&","right":{"type":"raw","value":true}},"once":false}},"children":[{"type":3,"ast":["Submit"]}]}]},{"type":1,"name":"item-list","index":24,"isc":true,"attr":{"_jeli-1044nuz":true,"value":[1,2,3]},"props":{"formValue":{"prop":["testForm","value"]}},"providers":[ItemList],"children":[],"templates":{"place":{"@":[{"type":1,"name":"pre","index":1,"isc":false,"attr":{"_jeli-1044nuz":true},"children":[{"type":3,"ast":["${0}",[["${0}",{"prop":"value","args":[],"fns":[common.jsonFilterFn]}]],false]}]}]}}},{"type":1,"name":"pre","index":26,"isc":false,"attr":{"_jeli-1044nuz":true},"children":[{"type":3,"ast":["${0}",[["${0}",{"prop":["testForm","value"],"args":[[3]],"fns":[common.jsonFilterFn]}]],false]}]}]}], {}); };/** template loader **/
__required.r(exports, 'RouterPageElement', RouterPageElement);

},
1174 : (module, exports, __required, global) => {
"use strict";
const RouterPageElement = __required(1173, 'RouterPageElement');
const CalculatorComponent = __required(1172, 'CalculatorComponent');
const core = __required(1145);
const INITIALIZERS = core.INITIALIZERS;
const router = __required(1171);
const WebStateService = router.WebStateService;
const ROUTE_INTERCEPTOR = router.ROUTE_INTERCEPTOR;
const RouterModule = router.RouterModule;
function InitializeApp(webStateService) {
    webStateService.events.listener('$webRouteStart', console.log);
}/** compiled validatorService **/

function validatorService() {
    this.resolve = function (route, locals, next) {
        next();
    };
}

validatorService.ctors = {};
/** compiled AppRouteModule **/

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

ROUTE_INTERCEPTOR.register({useClass: validatorService}, true);

INITIALIZERS.register({factory: InitializeApp, DI: [WebStateService]}, true);

AppRouteModule.fac = () =>/** bootstrap module**/[
    RouterModule
].forEach(m => { if(!m.k && typeof m == 'function') return (m.fac && m.fac(), new m(), m.k = 1); });

__required.r(exports, 'InitializeApp', InitializeApp);
__required.r(exports, 'validatorService', validatorService);
__required.r(exports, 'AppRouteModule', AppRouteModule);

},
1175 : (module, exports, __required, global) => {
"use strict";
const common = __required(1146);
const core = __required(1145);
/** compiled TestPlaceElement **/

function TestPlaceElement() {
    this.test = false;
    this.html = '';
}

TestPlaceElement.ctors = {
    selector: 'test-place',
    props: {
        options: {}
    }
};

TestPlaceElement.view = /** jeli template **/ (viewRef) => { 'use strict'; var _GT = (id, mtl) => core.ViewParser.$({}[id], mtl); return core.ViewParser.jit(viewRef, [{"type":1,"name":"div","index":0,"isc":false,"attr":{"_jeli-11u5cyt":true},"children":[{"type":11,"name":"#","index":0,"isc":false,"refId":"modal-body"}]},{"type":8,"name":"##","text":"for","templates":{"for":{"type":1,"name":"div","index":1,"isc":false,"attr":{"_jeli-11u5cyt":true},"context":{"opt":"$context"},"props":{"jClass":{"prop":["opt","class"]}},"providers":[common.ClassDirective],"children":[{"type":1,"name":"p","index":0,"isc":false,"attr":{"_jeli-11u5cyt":true},"children":[{"type":3,"ast":["${0}",[["${0}",{"prop":"opt","args":[],"fns":[common.jsonFilterFn]}]],false]}]}]}},"props":{"forIn":{"prop":"options"}},"providers":[common.ForDirective]}], {}); };/** template loader **/
__required.r(exports, 'TestPlaceElement', TestPlaceElement);

},
1176 : (module, exports, __required, global) => {
"use strict";
const common = __required(1146);
const core = __required(1145);
/** compiled ItemList **/

function ItemList() {
}

ItemList.ctors = {
    selector: 'item-list',
    props: {
        value: {},
        formValue: {}
    }
};

ItemList.view = /** jeli template **/ (viewRef) => { 'use strict'; var _GT = (id, mtl) => core.ViewParser.$({}[id], mtl); return core.ViewParser.jit(viewRef, [{"type":11,"name":"#","index":0,"isc":false,"refId":"@"},{"type":1,"name":"#","index":1,"isc":false,"props":{"switch":{"prop":["formValue","personalInfo","firstName"]}},"providers":[common.SwitchDirective],"children":[{"type":8,"name":"##","text":"switchDefault","templates":{"switchDefault":{"type":1,"name":"h5","index":1,"isc":false,"attr":{"_jeli-qw3nj3":true},"children":[{"type":3,"ast":["Invalid form"]}]}},"providers":[common.SwitchDefaultDirective]},{"type":8,"name":"##","text":"switchCase","templates":{"switchCase":{"type":1,"name":"h5","index":3,"isc":false,"attr":{"_jeli-qw3nj3":true},"children":[{"type":3,"ast":["Valid form"]}]}},"props":{"switchCase":{"prop":{"type":"raw","value":"test"}}},"providers":[common.SwitchCaseDirective]}]}], {}); };/** template loader **/
__required.r(exports, 'ItemList', ItemList);

},
1177 : (module, exports, __required, global) => {
"use strict";
const common = __required(1146);
const core = __required(1145);
const STORAGE_KEY = 'jeli-todo-example';
function loadTodos() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : defaultTodos();
    } catch (e) {
        return defaultTodos();
    }
}
function defaultTodos() {
    return [
        {
            description: 'Learn jeli',
            done: true
        },
        {
            description: 'Build something with @if / @for blocks',
            done: false
        },
        {
            description: 'Ship it',
            done: false
        }
    ];
}/** compiled AppRootElement **/

class AppRootElement {
    constructor() {
        this.pageHeading = 'jeli Todos';
        this.todos = loadTodos();
        this.description = '';
        this.filter = 'all';
        this.editingIndex = -1;
        this.editingText = '';
    }
    addTodo() {
        const description = this.description.trim();
        if (!description)
            return;
        this.todos.push({
            description,
            done: false
        });
        this.description = '';
        this.persist();
    }
    removeTodo(index) {
        this.todos.splice(index, 1);
        this.persist();
    }
    toggleDone(index) {
        this.todos[index].done = !this.todos[index].done;
        this.persist();
    }
    startEdit(index) {
        this.editingIndex = index;
        this.editingText = this.todos[index].description;
    }
    saveEdit(index) {
        const text = this.editingText.trim();
        if (text)
            this.todos[index].description = text;
        this.editingIndex = -1;
        this.persist();
    }
    cancelEdit() {
        this.editingIndex = -1;
    }
    onEditKeyUp(event, index) {
        if (event.key === 'Enter')
            this.saveEdit(index);
        if (event.key === 'Escape')
            this.cancelEdit();
    }
    setFilter(filter) {
        this.filter = filter;
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.done);
        this.persist();
    }
    get visibleTodos() {
        if (this.filter === 'active')
            return this.todos.filter(todo => !todo.done);
        if (this.filter === 'completed')
            return this.todos.filter(todo => todo.done);
        return this.todos;
    }
    get remaining() {
        return this.todos.filter(todo => !todo.done).length;
    }
    persist() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
        } catch (e) {
        }
    }
}

AppRootElement.ctors = {
    selector: 'app-root'
};

AppRootElement.view = /** jeli template **/ (viewRef) => { 'use strict'; var _GT = (id, mtl) => core.ViewParser.$({"__jeliElse0":{"type":1,"name":"#","index":2,"isc":false,"refId":"__jeliElse0","children":[{"type":1,"name":"input","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"type":"checkbox"},"attr$":{"checked":{"prop":["todo","done"],"once":false}},"events":[{"name":"click","value":[{"type":"call","args":["idx"],"fn":"toggleDone"}]}]},{"type":1,"name":"span","index":3,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"todo-text"},"events":[{"name":"dblclick","value":[{"type":"call","args":["idx"],"fn":"startEdit"}]}],"children":[{"type":3,"ast":["${0}",[["${0}",{"prop":["todo","description"]}]],false]}]},{"type":1,"name":"button","index":5,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"icon-btn","title":"Edit"},"events":[{"name":"click","value":[{"type":"call","args":["idx"],"fn":"startEdit"}]}],"children":[{"type":3,"ast":["✎"]}]}]},"__jeliElse1":{"type":1,"name":"ul","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"todo-list"},"children":[{"type":8,"name":"##","text":"for","templates":{"for":{"type":1,"name":"#","index":1,"isc":false,"context":{"todo":"$context","idx":"index"},"children":[{"type":1,"name":"li","index":1,"isc":false,"attr":{"_jeli-v4upfz":true},"attr$":{"class":{"prop":{"type":"obj","expr":{"done":["todo","done"],"editing":{"type":"bin","left":"editingIndex","ops":"===","right":"idx"}}},"once":false}},"children":[{"type":8,"name":"##","text":"if","templates":{"if":{"type":1,"name":"#","index":1,"isc":false,"children":[{"type":1,"name":"input","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"edit-input","autofocus":""},"attr$":{"value":{"prop":"editingText","once":false}},"events":[{"name":"input","value":[{"type":"asg","left":"editingText","right":["$event","target","value"]}]},{"name":"keyup","value":[{"type":"call","args":["$event","idx"],"fn":"onEditKeyUp"}]},{"name":"blur","value":[{"type":"call","args":["idx"],"fn":"saveEdit"}]}]}]},"ifElse":() => _GT('__jeliElse0', null)},"props":{"if":{"prop":{"type":"bin","left":"editingIndex","ops":"===","right":"idx"}},"ifElse":"__jeliElse0"},"providers":[common.IfDirective]},{"type":1,"name":"button","index":4,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"icon-btn","title":"Remove"},"events":[{"name":"click","value":[{"type":"call","args":["idx"],"fn":"removeTodo"}]}],"children":[{"type":3,"ast":["✕"]}]}]}]}},"props":{"forOf":{"prop":"visibleTodos"}},"providers":[common.ForDirective]}],"refId":"__jeliElse1"},"__jeliElse2":{"type":1,"name":"#","index":6,"isc":false,"refId":"__jeliElse2","children":[{"type":1,"name":"div","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"todo-filters"},"children":[{"type":1,"name":"button","index":1,"isc":false,"attr":{"_jeli-v4upfz":true},"attr$":{"class":{"prop":{"type":"obj","expr":{"active":{"type":"bin","left":"filter","ops":"===","right":{"type":"raw","value":"all"}}}},"once":false}},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"all"}],"fn":"setFilter"}]}],"children":[{"type":3,"ast":["All"]}]},{"type":1,"name":"button","index":3,"isc":false,"attr":{"_jeli-v4upfz":true},"attr$":{"class":{"prop":{"type":"obj","expr":{"active":{"type":"bin","left":"filter","ops":"===","right":{"type":"raw","value":"active"}}}},"once":false}},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"active"}],"fn":"setFilter"}]}],"children":[{"type":3,"ast":["Active"]}]},{"type":1,"name":"button","index":5,"isc":false,"attr":{"_jeli-v4upfz":true},"attr$":{"class":{"prop":{"type":"obj","expr":{"active":{"type":"bin","left":"filter","ops":"===","right":{"type":"raw","value":"completed"}}}},"once":false}},"events":[{"name":"click","value":[{"type":"call","args":[{"type":"raw","value":"completed"}],"fn":"setFilter"}]}],"children":[{"type":3,"ast":["Completed"]}]}]},{"type":8,"name":"##","text":"if","templates":{"if":{"type":1,"name":"#","index":3,"isc":false,"children":[{"type":1,"name":"p","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"empty-state"},"children":[{"type":3,"ast":["No ${0} todos.",[["${0}",{"prop":"filter"}]],false]}]}]},"ifElse":() => _GT('__jeliElse1', null)},"props":{"if":{"prop":{"type":"una","ops":"!","args":["visibleTodos","length"]}},"ifElse":"__jeliElse1"},"providers":[common.IfDirective]},{"type":1,"name":"footer","index":6,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"todo-footer"},"children":[{"type":1,"name":"span","index":1,"isc":false,"attr":{"_jeli-v4upfz":true},"children":[{"type":3,"ast":["${0} item(s) left",[["${0}",{"prop":"remaining"}]],false]}]},{"type":8,"name":"##","text":"if","templates":{"if":{"type":1,"name":"#","index":3,"isc":false,"children":[{"type":1,"name":"button","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"link-btn"},"events":[{"name":"click","value":[{"type":"call","args":[],"fn":"clearCompleted"}]}],"children":[{"type":3,"ast":["Clear completed"]}]}]}},"props":{"if":{"prop":{"type":"bin","left":"remaining","ops":"!==","right":["todos","length"]}}},"providers":[common.IfDirective]}]}]}}[id], mtl); return core.ViewParser.jit(viewRef, [{"type":1,"name":"div","index":0,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"todo-app"},"children":[{"type":1,"name":"header","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"todo-header"},"children":[{"type":1,"name":"h1","index":1,"isc":false,"attr":{"_jeli-v4upfz":true},"children":[{"type":3,"ast":["${0}",[["${0}",{"prop":"pageHeading"}]],false]}]},{"type":1,"name":"p","index":3,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"subtitle"},"children":[{"type":3,"ast":["            A small example app built with "]},{"type":1,"name":"a","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"href":"https://github.com/gojecks/jeli-js","target":"_blank","rel":"noopener"},"children":[{"type":3,"ast":["jeli"]}]},{"type":3,"ast":[" -            see the "]},{"type":1,"name":"a","index":3,"isc":false,"attr":{"_jeli-v4upfz":true,"href":"../../guide/"},"children":[{"type":3,"ast":["guide"]}]},{"type":3,"ast":[" for how it's put together.        "]}]}]},{"type":1,"name":"form","index":3,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"todo-form"},"events":[{"name":"submit","value":[{"type":"call","args":[],"fn":"addTodo"}]}],"children":[{"type":1,"name":"input","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"placeholder":"What needs doing?","autofocus":""},"attr$":{"value":{"prop":"description","once":false}},"events":[{"name":"input","value":[{"type":"asg","left":"description","right":["$event","target","value"]}]}]},{"type":1,"name":"button","index":3,"isc":false,"attr":{"_jeli-v4upfz":true,"type":"submit"},"children":[{"type":3,"ast":["Add"]}]}]},{"type":8,"name":"##","text":"if","templates":{"if":{"type":1,"name":"#","index":5,"isc":false,"children":[{"type":1,"name":"p","index":1,"isc":false,"attr":{"_jeli-v4upfz":true,"class":"empty-state"},"children":[{"type":3,"ast":["Nothing to do yet - add your first todo above."]}]}]},"ifElse":_GT('__jeliElse2', null)},"props":{"if":{"prop":{"type":"una","ops":"!","args":["todos","length"]}},"ifElse":"__jeliElse2"},"providers":[common.IfDirective]}]}], {}); };/** template loader **/
__required.r(exports, 'AppRootElement', AppRootElement);

},
1178 : (module, exports, __required, global) => {
"use strict";
const RouterPageElement = __required(1173, 'RouterPageElement');
const CalculatorComponent = __required(1172, 'CalculatorComponent');
const AppRootElement = __required(1177, 'AppRootElement');
const ItemList = __required(1176, 'ItemList');
const TestPlaceElement = __required(1175, 'TestPlaceElement');
const AppRouteModule = __required(1174, 'AppRouteModule');
const http = __required(1170);
const HttpModule = http.HttpModule;
const form = __required(1169);
const FormModule = form.FormModule;
const datetime = __required(1147);
const DateTimeModule = datetime.DateTimeModule;
const common = __required(1146);
const CommonModule = common.CommonModule;
/** compiled AppModule **/

function AppModule() {
}

AppModule.rootElement = AppRootElement;

AppModule.fac = () =>/** bootstrap module**/[
    CommonModule,
    DateTimeModule,
    FormModule,
    HttpModule,
    AppRouteModule
].forEach(m => { if(!m.k && typeof m == 'function') return (m.fac && m.fac(), new m(), m.k = 1); });

__required.r(exports, 'AppModule', AppModule);

}}, this));