var PSBMoney =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Configuration
 */

var secure = window.location.protocol === 'https:';

module.exports = {
    name: 'likely',
    prefix: 'likely__',
    secure: secure,
    protocol: secure ? 'https:' : 'http:',
    storageKey: 'likelyServices',
    breakpoint: 680
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

var div = document.createElement('div'),
    gid = 0;

var dom = module.exports = {
    /**
     * Wrap SVG coords from data object into SVG tag
     *
     * @param {String} coords
     */
    wrapSVG: function (coords) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' + 'viewBox="0 0 16 16"><path d="M' + coords + 'z"/></svg>';
    },

    /**
     * Create node from HTML
     *
     * @param {String} html
     */
    createNode: function (html) {
        div.innerHTML = html;

        return div.children[0];
    },

    /**
     * Load script
     *
     * @param {String} url
     */
    getScript: function (url) {
        var script = document.createElement('script'),
            head   = document.head;

        script.type = 'text/javascript';
        script.src  = url;

        head.appendChild(script);
        head.removeChild(script);
    },

    /**
     * Get JSON
     *
     * @param {String} url
     * @param {Function} callback
     */
    getJSON: function (url, callback) {
        var name = encodeURIComponent('random_fun_' + (++gid));

        url = url.replace(
            /callback=(\?)/,
            'callback=' + name
        );

        window[name] = callback;

        dom.getScript(url);
    },

    /**
     * Find first node by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {Node}
     */
    find: function (selector, node) {
        return (node || document).querySelector(selector);
    },

    /**
     * Find all nodes by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {NodeList}
     */
    findAll: function (selector, node) {
        return (node || document).querySelectorAll(selector);
    },

    /**
     * Check mobile media query
     */
    isMobile: function() {
        return !window.matchMedia('(min-width: ' + config.breakpoint + 'px)').matches;
    },

    /**
     * Open the popup
     *
     * @param {String} url
     * @param {String} winId
     * @param {Number} width,
     * @param {Number} height
     */
    openPopup: function (url, winId, width, height) {
        var left = Math.round(screen.width / 2 - width / 2),
            top  = 0;

        if (screen.height > height) {
            top = Math.round(screen.height / 3 - height / 2);
        }

        var options = 'left='    + left +
                      ',top='    + top +
                      ',width='  + width +
                      ',height=' + height +
                      ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';

        var win = window.open(url, winId, options);

        // if (!win) {
        //     location.href = url;
        //     return location.href;
        // }

        // win.focus();

        return win;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var bool = {yes: true, no: false},
    rUrl = /(https?|ftp):\/\/[^\s\/$.?#].[^\s]*/gi;

/**
 * @internal
 */
var utils = {
    /**
     * Simple $.each, only for objects
     *
     * @param {Object} object
     * @param {Function} callback
     */
    each: function (object, callback) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                callback(object[key], key);
            }
        }
    },

    /**
     * Convert array-like object to array
     *
     * @param {Object} arrayLike
     * @return {Array}
     */
    toArray: function (arrayLike) {
        return Array.prototype.slice.call(arrayLike);
    },

    /**
     * Merge given dictionaries (objects) into one object
     *
     * @param {Object} ...objects
     * @return {Object}
     */
    merge: function () {
        var result = {};

        for (var i = 0; i < arguments.length; i ++) {
            var arg = arguments[i];

            if (arg) {
                for (var key in arg) {
                    result[key] = arg[key];
                }
            }
        }

        return result;
    },

    /**
     * Extend one (target) object by other (subject)
     *
     * @param {Object} target
     * @param {Object} subject
     */
    extend: function (target, subject) {
        for (var key in subject) {
            target[key] = subject[key];
        }
    },

    /**
     * Check new flexbox syntax support
     */
    flexboxSupport: function(element, name){
        var d = document, f = 'flex', fw = '-webkit-'+f, e = d.createElement('b'), c;

        try {
            e.style.display = fw;
            e.style.display = f;
            c = (e.style.display == f || e.style.display == fw) ? f : 'no-'+f;
        } catch(e) {
            c = 'no-'+f;
        }

        element.className += ' ' + name + '--' + c;
    },

    /**
     * Return node.dataset or plain object for IE 10without setters
     * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
     *
     * @param {Node} node
     * @return {Object}
     */
    getDataset: function (node) {
        if (typeof node.dataset === 'object') {
            return node.dataset;
        }

        var i,
            dataset = {},
            attributes = node.attributes,
            attribute,
            attributeName;

        var toUpperCase = function (n0) {
            return n0.charAt(1).toUpperCase();
        };

        for (i = attributes.length - 1; i >= 0; i--) {
            attribute = attributes[i];
            if (attribute && attribute.name &&
                (/^data-\w[\w\-]*$/).test(attribute.name)) {
                    attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
                    dataset[attributeName] = attribute.value;
                }
        }

        return dataset;
    },

    /**
     * Convert "yes" and "no" to true and false.
     *
     * @param {Node} node
     */
    bools: function (node) {
        var result = {},
            data   = utils.getDataset(node);

        for (var key in data) {
            var value = data[key];

            result[key] = bool[value] || value;
        }

        return result;
    },

    /**
     * Map object keys in string to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    template: function (text, data) {
        return !text ? '' : text.replace(/\{([^\}]+)\}/g, function (value, key) {
            return key in data ? data[key] : value;
        });
    },

    /**
     * Map object keys in URL to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    makeUrl: function (text, data) {
        for (var key in data) {
            data[key] = encodeURIComponent(data[key]);
        }

        return utils.template(text, data);
    },

    /**
     * Create query string out of data
     *
     * @param {Object} data
     * @return {String}
     */
    query: function (data) {
        var filter = encodeURIComponent,
            query  = [];

        for (var key in data) {
            if (typeof data[key] === 'object') continue;

            query.push(filter(key) + '=' + filter(data[key]));
        }

        return query.join('&');
    },

    /**
     * Set value in object using dot-notation
     *
     * @param {Object} object
     * @param {String} key
     * @param {Object} value
     */
    set: function (object, key, value) {
        var frags = key.split('.'),
            last  = null;

        frags.forEach(function (key, index) {
            if (typeof object[key] === 'undefined') {
                object[key] = {};
            }

            if (index !== frags.length - 1) {
                object = object[key];
            }

            last = key;
        });

        object[last] = value;
    }
};

module.exports = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendPageView = exports.sendEvent = undefined;

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONSOLE_STYLE = 'color: #E87E04';

/**
 * Send analytics events via GTM
 * @param {String} label - event label
 * @param {String} action - event action ("Click" by default)
 */
var sendEvent = exports.sendEvent = function sendEvent(label) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Click';

    var value = _config2.default.analyticsCategory + ' \u2014 ' + label + ' \u2014 ' + action;

    if (false) {}

    if (window.dataLayer !== undefined && _config2.default.analyticsCategory) {
        window.dataLayer.push({
            event: 'data_event',
            data_description: value
        });
    }
};

/**
 * Send pageview event via GTM
 */
var sendPageView = exports.sendPageView = function sendPageView() {
    if (false) {}

    if (window.dataLayer !== undefined) {
        window.dataLayer.push({
            event: 'Page — View',
            post_details: {},
            section: 'special',
            tags: [],
            title: document.title,
            url: window.location.pathname
        });
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Social network services
 */

var Service = __webpack_require__(20),
    utils   = __webpack_require__(2),
    svg     = __webpack_require__(21);

var services = {
    odnoklassniki: __webpack_require__(22),
    vkontakte:     __webpack_require__(23),
    facebook:      __webpack_require__(24),
    twitter:       __webpack_require__(25),
    gplus:         __webpack_require__(26),
    pocket:        __webpack_require__(27),
    telegram:      __webpack_require__(28),
    whatsapp:      __webpack_require__(29),
    viber:         __webpack_require__(30),
    email:         __webpack_require__(31),
    more:          __webpack_require__(32)
};

utils.each(services, function (service, key) {
    Service(service);

    service.svgi = svg[key];
    service.name = key;
});

module.exports = services;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'PSBMoney', // уникальное имя спецпроекта. Оно же — название главного класса. Используется на странице, куда интегрируется спецпроект
  analyticsCategory: 'PSBMoney',
  sendPageView: false, // отключаем, если спецпроект не на отдельной странице
  listenedEvents: ['click', 'input'] // слушаем события (click, input, change, etc.). Обычно нужен только click
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Make html element
 * @param {String} tagName
 * @param {Array|String} classNames - array of classnames or string for single classname
 * @param {Object} attributes - object with html attributes
 */
var makeElement = exports.makeElement = function makeElement(tagName) {
    var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    tagName = tagName.toLowerCase();

    var element = document.createElement(tagName);

    if (classNames) {
        if ((typeof classNames === 'undefined' ? 'undefined' : _typeof(classNames)) === 'object') {
            classNames.forEach(function (cname) {
                element.classList.add(cname);
            });
        } else if (typeof classNames === 'string') {
            element.classList.add(classNames);
        }
    }

    for (var attr in attributes) {
        if (attr === 'data') {
            var dataAttributes = attributes[attr];

            for (var _attr in dataAttributes) {
                element.dataset[_attr] = dataAttributes[_attr];
            }
        } else {
            element[attr] = attributes[attr];
        }
    }

    return element;
};

/**
 * Cache elements with [data-view] attribute and put them in given object
 * @param {Object} obj - object
 */
var cacheElements = exports.cacheElements = function cacheElements(obj) {
    var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';

    var newObj = {},
        elements = document.querySelectorAll('[data-' + attr + ']');

    Array.prototype.forEach.call(elements, function (el) {
        var name = el.dataset[attr];
        newObj[name] = el;
    });

    Object.assign(obj, newObj);
};

/**
 * Get all siblings of specified element, excluding this element
 * @param {Element} element
 */
var getSiblings = exports.getSiblings = function getSiblings(element) {
    var siblings = [],
        sibling = element.parentNode.firstChild;

    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === element) continue;
        siblings.push(sibling);
    }

    return siblings;
};

/**
 * Remove all children from element
 * @param {Element} parent
 */
var removeChildren = exports.removeChildren = function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

/**
 * Remove specified element from its parent
 * @param {Element} element
 */
var removeElement = exports.removeElement = function removeElement(element) {
    if (element) {
        element.parentNode.removeChild(element);
    }
};

/**
 * Transform html string to node
 * @param {String} html
 */
var htmlStringToNode = exports.htmlStringToNode = function htmlStringToNode(html) {
    var el = document.createElement('div');

    el.innerHTML = html;

    return el.firstChild;
};

/**
 * Prepend source element before first child of target element
 * @param {Element} parent
 * @param {Element} el
 */
var prepend = exports.prepend = function prepend(parent, el) {
    parent.insertBefore(el, parent.firstChild);
};

/** Quick check if element is in DOM */
var isElementInDom = exports.isElementInDom = function isElementInDom(el) {
    return el.parentNode;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var isAvailable = function() {

    try {
        window.localStorage.setItem('isStorageAvailable', 1);
        window.localStorage.removeItem('isStorageAvailable');
        return true;
    } catch (e) {
        return false;
    }

};

var storage = {

    /**
     * Get item from localStorage
     * @param {String} key
     */
    getItem: function(key){

        if (isAvailable()) {

            var item = window.localStorage.getItem(key);

            try {
                JSON.parse(item);
            } catch (e) {
                return item;
            }

            return JSON.parse(item);

        }

    },

    /**
     * Save item in localStorage
     * @param {String} key
     * @param {String} value
     */
    setItem: function(key, value) {

        value = (typeof value === 'string') ? value : JSON.stringify(value);

        if (isAvailable()) {
            window.localStorage.setItem(key, value);
        }

    },

    /**
     * Remove item from localStorage
     * @param {String} key
     */
    removeItem: function(key) {

        if (isAvailable()) {
            window.localStorage.removeItem(key);
        }

    }

};

module.exports = storage;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function requestAnimate(options) {

    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        var progress = options.timing(timeFraction);

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

function one(node, type, callback) {
    type = type.split(' ');

    var _loop = function _loop(i) {
        var func = function func(e) {
            for (var j = 0; j < type.length; j++) {
                e.currentTarget.removeEventListener(type[j], func);
            }
            return callback(e);
        };
        node.addEventListener(type[i], func, false);
    };

    for (var i = 0; i < type.length; i++) {
        _loop(i);
    }
}

function animate(elem, className) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    return new Promise(function (resolve, reject) {
        one(elem, 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            if (duration) {
                elem.style.animationDuration = '';
            }
            if (delay) {
                elem.style.animationDelay = '';
            }
            elem.classList.remove(className);
            elem.classList.remove('animated');

            resolve();
        });

        if (duration) {
            elem.style.animationDuration = duration;
        }
        if (delay) {
            elem.style.animationDelay = delay;
        }

        elem.classList.add(className);
        elem.classList.add('animated');
    });
}

exports.animate = animate;
exports.requestAnimate = requestAnimate;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _special = __webpack_require__(10);

var _special2 = _interopRequireDefault(_special);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.Special = _special2.default; /**
                                             * Entry point
                                             */

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(11);

var _base = __webpack_require__(13);

var _base2 = _interopRequireDefault(_base);

var _data = __webpack_require__(14);

var _data2 = _interopRequireDefault(_data);

var _svg = __webpack_require__(15);

var _svg2 = _interopRequireDefault(_svg);

var _dom = __webpack_require__(6);

var _share = __webpack_require__(16);

var Share = _interopRequireWildcard(_share);

var _animate = __webpack_require__(8);

var _swipe = __webpack_require__(35);

var _swipe2 = _interopRequireDefault(_swipe);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSS = {
  main: 'psb-money'
};

var EL = {};

var Special = function (_BaseSpecial) {
  _inherits(Special, _BaseSpecial);

  function Special() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Special);

    var _this = _possibleConstructorReturn(this, (Special.__proto__ || Object.getPrototypeOf(Special)).call(this));

    Object.assign(_this.params, params);
    _this.saveParams();

    if (_data2.default && params.data) {
      Object.assign(_data2.default, params.data);
    }

    if (_this.params.css) {
      _this.loadStyles(_this.params.css).then(function () {
        return _this.init();
      });
    } else {
      _this.init();
    }
    return _this;
  }

  _createClass(Special, [{
    key: 'createElements',
    value: function createElements() {
      var _this2 = this;

      EL.logo = (0, _dom.makeElement)('a', CSS.main + '__logo', {
        href: 'https://psbank.ru',
        target: '_blank',
        innerHTML: _svg2.default.logo
      });

      EL.enter = (0, _dom.makeElement)('div', CSS.main + '-enter');
      EL.eImg = (0, _dom.makeElement)('img', CSS.main + '-enter__img', {
        src: _data2.default.img,
        srcset: _data2.default.img2x + ' 2x'
      });
      EL.eInner = (0, _dom.makeElement)('div', CSS.main + '-enter__inner');

      if (this.params.isFeed) {
        EL.eTitle = (0, _dom.makeElement)('a', CSS.main + '-enter__title', {
          href: 'https://vc.ru/special/uralsib',
          innerHTML: _data2.default.title
        });
      } else {
        EL.eTitle = (0, _dom.makeElement)('div', CSS.main + '-enter__title', {
          innerHTML: _data2.default.title
        });
      }

      EL.eDesc = (0, _dom.makeElement)('div', CSS.main + '-enter__description', {
        innerHTML: _data2.default.description
      });
      EL.eText = (0, _dom.makeElement)('div', CSS.main + '-enter__text', {
        innerHTML: _data2.default.text
      });
      EL.eBtn = (0, _dom.makeElement)('button', CSS.main + '-enter__btn', {
        textContent: 'Начать',
        data: {
          click: 'start'
        }
      });

      EL.eInner.appendChild(EL.eTitle);
      EL.eInner.appendChild(EL.eDesc);
      EL.eInner.appendChild(EL.eText);
      EL.eInner.appendChild(EL.eBtn);

      EL.enter.appendChild(EL.eImg);
      EL.enter.appendChild(EL.eInner);

      EL.q = (0, _dom.makeElement)('div', CSS.main + '-q');
      EL.qPages = (0, _dom.makeElement)('div', CSS.main + '-q__pages');
      EL.qOptionL = (0, _dom.makeElement)('div', [CSS.main + '-q__option', CSS.main + '-q__option--left'], {
        innerHTML: '<div class="' + CSS.main + '-q__option-icon">' + _svg2.default.cross + '</div><div class="' + CSS.main + '-q__option-caption">\u041D\u0435\u043F\u0440\u0430\u0432\u0434\u0430</div>',
        data: {
          type: 'left'
        }
      });
      EL.qOptionR = (0, _dom.makeElement)('div', [CSS.main + '-q__option', CSS.main + '-q__option--right'], {
        innerHTML: '<div class="' + CSS.main + '-q__option-icon">' + _svg2.default.tick + '</div><div class="' + CSS.main + '-q__option-caption">\u041F\u0440\u0430\u0432\u0434\u0430</div>',
        data: {
          type: 'right'
        }
      });
      EL.qCards = (0, _dom.makeElement)('div', CSS.main + '-q__cards');
      EL.qCard = (0, _dom.makeElement)('div', CSS.main + '-q__card');
      EL.card = (0, _dom.makeElement)('div', CSS.main + '-card');
      EL.cHintL = (0, _dom.makeElement)('div', [CSS.main + '-card__hint', CSS.main + '-card__hint--left'], {
        innerHTML: '<div class="' + CSS.main + '-card__hint-icon">' + _svg2.default.cross + '</div><div class="' + CSS.main + '-card__hint-caption">\u041D\u0435\u043F\u0440\u0430\u0432\u0434\u0430</div>'
      });
      EL.cHintR = (0, _dom.makeElement)('div', [CSS.main + '-card__hint', CSS.main + '-card__hint--right'], {
        innerHTML: '<div class="' + CSS.main + '-card__hint-icon">' + _svg2.default.tick + '</div><div class="' + CSS.main + '-card__hint-caption">\u041F\u0440\u0430\u0432\u0434\u0430</div>'
      });
      EL.cHead = (0, _dom.makeElement)('div', CSS.main + '-card__head');
      EL.cImg = (0, _dom.makeElement)('img', CSS.main + '-card__img');
      EL.cBottom = (0, _dom.makeElement)('div', CSS.main + '-card__bottom');
      EL.cQuestion = (0, _dom.makeElement)('div', CSS.main + '-card__question');
      EL.cPriceTag = (0, _dom.makeElement)('div', CSS.main + '-card__price-tag', {
        innerHTML: _svg2.default.priceTag
      });
      EL.cPriceTagSpan = (0, _dom.makeElement)('span');
      EL.cPriceLabel = (0, _dom.makeElement)('div', CSS.main + '-card__price-label');
      EL.cAnswer = (0, _dom.makeElement)('div', CSS.main + '-card__answer');
      EL.cAnswerTitle = (0, _dom.makeElement)('div', CSS.main + '-card__a-title');
      EL.cAnswerText = (0, _dom.makeElement)('div', CSS.main + '-card__a-text');
      EL.cNextBtn = (0, _dom.makeElement)('button', CSS.main + '-card__next-btn', {
        textContent: 'Далее',
        data: {
          click: 'continue'
        }
      });

      EL.qOptionL.addEventListener('click', function () {
        _this2.answer('left');
      });
      EL.qOptionR.addEventListener('click', function () {
        _this2.answer('right');
      });

      EL.cHead.appendChild(EL.cImg);

      EL.cPriceTag.appendChild(EL.cPriceTagSpan);

      EL.cQuestion.appendChild(EL.cPriceTag);
      EL.cQuestion.appendChild(EL.cPriceLabel);

      EL.cAnswer.appendChild(EL.cAnswerTitle);
      EL.cAnswer.appendChild(EL.cAnswerText);
      EL.cAnswer.appendChild(EL.cNextBtn);

      EL.card.appendChild(EL.cHead);
      EL.card.appendChild(EL.cBottom);
      EL.card.appendChild(EL.cHintL);
      EL.card.appendChild(EL.cHintR);

      EL.qCard.appendChild(EL.card);

      EL.q.appendChild(EL.qPages);
      EL.q.appendChild(EL.qOptionL);
      EL.q.appendChild(EL.qOptionR);
      EL.q.appendChild(EL.qCards);
      EL.q.appendChild(EL.qCard);

      (0, _swipe2.default)(EL.card, function (t) {
        _this2.answer(t);
      });

      EL.result = (0, _dom.makeElement)('div', CSS.main + '-result');
      EL.rBlock = (0, _dom.makeElement)('div', CSS.main + '-result__block');
      EL.rBlockInner = (0, _dom.makeElement)('div', CSS.main + '-result__block-inner');
      EL.rImg = (0, _dom.makeElement)('img', CSS.main + '-result__img');
      EL.rMain = (0, _dom.makeElement)('div', CSS.main + '-result__main');
      EL.rResult = (0, _dom.makeElement)('div', CSS.main + '-result__result');
      EL.rTitle = (0, _dom.makeElement)('div', CSS.main + '-result__title');
      EL.rSubtitle = (0, _dom.makeElement)('div', CSS.main + '-result__subtitle');
      EL.rShare = (0, _dom.makeElement)('div', CSS.main + '-result__share');
      EL.rRestartBtn = (0, _dom.makeElement)('div', CSS.main + '-result__restart-btn', {
        innerHTML: '<span>\u041F\u0440\u043E\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437</span>' + _svg2.default.refresh,
        data: {
          click: 'restart'
        }
      });

      EL.rMain.appendChild(EL.rResult);
      EL.rMain.appendChild(EL.rTitle);
      EL.rMain.appendChild(EL.rSubtitle);
      EL.rMain.appendChild(EL.rShare);
      EL.rMain.appendChild(EL.rRestartBtn);
      EL.rBlockInner.appendChild(EL.rImg);
      EL.rBlockInner.appendChild(EL.rMain);
      EL.rBlock.appendChild(EL.rBlockInner);

      EL.rBlockBottom = (0, _dom.makeElement)('div', [CSS.main + '-result__block', CSS.main + '-result__block--bottom']);
      EL.rBlockBottomInner = (0, _dom.makeElement)('div', CSS.main + '-result__block-inner');
      EL.rText = (0, _dom.makeElement)('div', CSS.main + '-result__text', {
        innerHTML: _data2.default.result.text
      });
      EL.rBtn = (0, _dom.makeElement)('a', CSS.main + '-result__btn', {
        href: _data2.default.result.link,
        target: '_blank',
        textContent: 'Подробнее'
      });

      EL.rBlockBottomInner.appendChild(EL.rText);
      EL.rBlockBottomInner.appendChild(EL.rBtn);
      EL.rBlockBottom.appendChild(EL.rBlockBottomInner);

      EL.result.appendChild(EL.rBlock);
      EL.result.appendChild(EL.rBlockBottom);

      EL.help = (0, _dom.makeElement)('div', CSS.main + '-help');
      EL.hInner = (0, _dom.makeElement)('div', CSS.main + '-help__inner');
      EL.hIcon = (0, _dom.makeElement)('div', CSS.main + '-help__icon', {
        innerHTML: _svg2.default.swipe
      });
      EL.hText = (0, _dom.makeElement)('div', CSS.main + '-help__text', {
        innerHTML: '<p>Свайпайте карточку вправо, если считаете, что история реальна.</p><p>Влево — если выдумка.</p>'
      });
      EL.hBtn = (0, _dom.makeElement)('button', CSS.main + '-help__btn', {
        textContent: 'Понятно',
        data: {
          click: 'hideHelp'
        }
      });

      EL.hInner.appendChild(EL.hIcon);
      EL.hInner.appendChild(EL.hText);
      EL.hInner.appendChild(EL.hBtn);

      EL.help.appendChild(EL.hInner);

      EL.backCard = (0, _dom.makeElement)('div', CSS.main + '-bcard');
      EL.bcHead = (0, _dom.makeElement)('div', CSS.main + '-bcard__head');
      EL.bcBottom = (0, _dom.makeElement)('div', CSS.main + '-bcard__bottom');
      EL.bcImg = (0, _dom.makeElement)('img', CSS.main + '-bcard__img');

      EL.bcHead.appendChild(EL.bcImg);
      EL.backCard.appendChild(EL.bcHead);
      EL.backCard.appendChild(EL.bcBottom);
    }
  }, {
    key: 'hideHelp',
    value: function hideHelp() {
      var _this3 = this;

      (0, _animate.animate)(EL.help, 'fadeOut', '200ms').then(function () {
        _this3.container.removeChild(EL.help);
      });
    }
  }, {
    key: 'showCount',
    value: function showCount() {
      var index = this.activeIndex + 1;
      (0, _dom.removeChildren)(EL.qCards);

      if (index === _data2.default.questions.length) {
        return;
      }

      var backCard = Special.makeBackCard(index);

      if (index > _data2.default.questions.length / 2) {
        EL.qCards.innerHTML = '<div></div>';
        EL.qCards.firstChild.appendChild(backCard);
      } else if (index > _data2.default.questions.length / 4) {
        EL.qCards.innerHTML = '<div></div><div></div>';
        EL.qCards.firstChild.appendChild(backCard);
      } else {
        EL.qCards.innerHTML = '<div></div><div></div><div></div>';
        EL.qCards.firstChild.appendChild(backCard);
      }
    }
  }, {
    key: 'onOptionHover',
    value: function onOptionHover(e) {
      if (this.isAnswered || this.activeIndex > 0) return;

      var el = e.currentTarget;
      var t = el.dataset.type;
      var hint = (0, _dom.makeElement)('div', CSS.main + '-q__option-hint', {
        innerHTML: t === 'left' ? _svg2.default.swipeL + '<div>\u0418\u043B\u0438 \u0441\u0432\u0430\u0439\u043F\u043D\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0432\u043B\u0435\u0432\u043E</div>' : _svg2.default.swipeR + '<div>\u0418\u043B\u0438 \u0441\u0432\u0430\u0439\u043F\u043D\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0432\u043F\u0440\u0430\u0432\u043E</div>'
      });

      el.appendChild(hint);
      el.addEventListener('mouseleave', function () {
        el.removeChild(hint);
      }, { once: true });
    }
  }, {
    key: 'start',
    value: function start() {
      this.container.classList.add('is-testing');
      this.container.removeChild(EL.enter);
      this.container.appendChild(EL.q);

      this.makeNextQuestion();

      if (/Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768) {
        this.container.appendChild(EL.help);
        (0, _animate.animate)(EL.help, 'fadeIn', '200ms', '400ms');
      } else {
        EL.qOptionL.addEventListener('mouseenter', this.onOptionHover.bind(this));
        EL.qOptionR.addEventListener('mouseenter', this.onOptionHover.bind(this));
      }

      Analytics.sendEvent('Start');
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.container.removeChild(EL.result);
      this.container.appendChild(EL.q);

      EL.rImg.className = '';
      EL.rImg.classList.add(CSS.main + '-result__img');

      EL.cNextBtn.innerHTML = 'Далее';
      EL.cNextBtn.dataset.click = 'continue';

      this.setInitialParams();
      this.makeNextQuestion();
    }
  }, {
    key: 'continue',
    value: function _continue() {
      var _this4 = this;

      this.activeIndex += 1;

      var animationClassName = this.lastAnsweredType === 'left' ? 'fadeOutLeft' : 'fadeOutRight';

      (0, _animate.animate)(EL.card, animationClassName).then(function () {
        EL.qCard.removeChild(EL.card);

        _this4.makeNextQuestion();
      });

      Analytics.sendEvent('Next');
    }
  }, {
    key: 'makeNextQuestion',
    value: function makeNextQuestion() {
      var question = _data2.default.questions[this.activeIndex];

      this.isAnswered = false;

      EL.q.classList.remove('is-correct');
      EL.q.classList.remove('is-incorrect');
      EL.q.classList.remove('is-false');
      EL.q.classList.remove('is-true');

      EL.qOptionL.classList.remove('is-hide');
      EL.qOptionR.classList.remove('is-hide');

      EL.cImg.src = question.img;
      // EL.cImg.srcset = `${question.img2x} 2x`;
      EL.cPriceTagSpan.innerHTML = question.price;
      EL.cPriceLabel.textContent = question.label;

      (0, _dom.removeChildren)(EL.cBottom);
      EL.cBottom.appendChild(EL.cQuestion);

      EL.qPages.innerHTML = this.activeIndex + 1 + '/' + _data2.default.questions.length;

      this.showCount();

      EL.qCard.appendChild(EL.card);
      (0, _animate.animate)(EL.card, 'cardZoomIn', '200ms');
    }
  }, {
    key: 'answer',
    value: function answer(t) {
      var _this5 = this;

      if (this.isAnswered) {
        return;
      }
      this.isAnswered = true;

      var question = _data2.default.questions[this.activeIndex];
      var type = t;
      var trueOrFalse = question.correct === 'right';

      this.lastAnsweredType = type;

      (0, _animate.animate)(EL.cHead, 'shake', '100ms').then(function () {
        if (trueOrFalse) {
          _this5.makeAnswer(question, type, trueOrFalse);
        } else {
          (0, _animate.animate)(EL.cHead, 'flush', '400ms', '100ms').then(function () {
            _this5.makeAnswer(question, type, trueOrFalse);
          });
        }
      });

      Analytics.sendEvent('Option - ' + t);
    }
  }, {
    key: 'makeAnswer',
    value: function makeAnswer(question, type, trueOrFalse) {
      if (type === 'left') {
        EL.qOptionR.classList.add('is-hide');
      } else {
        EL.qOptionL.classList.add('is-hide');
      }

      if (trueOrFalse) {
        EL.q.classList.add('is-true');
      } else {
        EL.q.classList.add('is-false');
      }

      if (question.correct === type) {
        this.correctAnswers += 1;
        EL.q.classList.add('is-correct');
        EL.cAnswerTitle.textContent = '\u0414\u0430, \u044D\u0442\u043E ' + (trueOrFalse ? 'правда' : 'неправда') + '.';
        EL.cAnswerText.innerHTML = question.answer;
      } else {
        EL.q.classList.add('is-incorrect');
        EL.cAnswerTitle.textContent = '\u041D\u0435\u0442, \u044D\u0442\u043E ' + (trueOrFalse ? 'правда' : 'неправда') + '.';
        EL.cAnswerText.innerHTML = question.answer;
      }

      if (this.activeIndex === _data2.default.questions.length - 1) {
        EL.cNextBtn.innerHTML = 'Результат';
        EL.cNextBtn.dataset.click = 'result';
      }

      (0, _dom.removeChildren)(EL.cBottom);
      (0, _animate.animate)(EL.cBottom, 'fadeIn', '200ms').then(function () {
        EL.cBottom.appendChild(EL.cAnswer);
        (0, _animate.animate)(EL.cAnswer, 'fadeIn', '200ms');
      });
    }
  }, {
    key: 'result',
    value: function result() {
      var _Special$getResult = Special.getResult(this.correctAnswers),
          result = _Special$getResult.result,
          index = _Special$getResult.index;

      this.container.classList.remove('is-testing');
      this.container.removeChild(EL.q);
      this.container.appendChild(EL.result);

      EL.rImg.src = result.img;
      EL.rImg.classList.add(CSS.main + '-result__img--' + (index + 1));
      EL.rResult.innerHTML = this.correctAnswers + ' \u0438\u0437 ' + _data2.default.questions.length + ' \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432';
      EL.rTitle.innerHTML = result.title;
      EL.rSubtitle.innerHTML = result.subtitle;

      (0, _dom.removeChildren)(EL.rShare);
      Share.make(EL.rShare, {
        url: this.params.share.url + this.correctAnswers,
        title: this.params.share.title,
        twitter: this.params.share.title
      });

      Analytics.sendEvent('Result');
    }
  }, {
    key: 'setInitialParams',
    value: function setInitialParams() {
      this.activeIndex = 0;
      this.correctAnswers = 0;
    }
  }, {
    key: 'init',
    value: function init() {
      this.setInitialParams();
      this.createElements();
      (0, _dom.removeChildren)(this.container);
      this.container.appendChild(EL.logo);
      this.container.appendChild(EL.enter);

      this.params.isFeed ? this.container.classList.add('is-feed') : '';
    }
  }], [{
    key: 'makeBackCard',
    value: function makeBackCard(index) {
      var q = _data2.default.questions[index];

      EL.bcImg.src = q.img;

      return EL.backCard;
    }
  }, {
    key: 'getResult',
    value: function getResult(score) {
      var result = '';
      var index = 0;
      _data2.default.results.some(function (item, i) {
        if (item.range[0] <= score && item.range[1] >= score) {
          result = item;
          index = i;
          return true;
        }
        return false;
      });

      return { result: result, index: index };
    }
  }]);

  return Special;
}(_base2.default);

exports.default = Special;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base special constructor with common methods
 */
var BaseSpecial = function () {
    function BaseSpecial() {
        _classCallCheck(this, BaseSpecial);

        this.keyCodes = {
            enter: 13
        };
        this.params = {
            container: document.body
        };

        if (_config2.default.sendPageView) {
            Analytics.sendPageView();
        }
    }

    /**
     * Save custom params
     * @param {Object} params - params object with custom values
     */


    _createClass(BaseSpecial, [{
        key: 'saveParams',
        value: function saveParams() {
            Object.assign(this.params, _config2.default);
            this.container = this.params.container;

            this.addEventListeners();
        }

        /**
         * Load css file
         * @param {String} path
         */

    }, {
        key: 'loadStyles',
        value: function loadStyles(path) {
            return new Promise(function (resolve, reject) {
                var link = document.createElement('link');

                link.rel = 'stylesheet';
                link.href = path;

                link.onload = function () {
                    return resolve();
                };
                link.onerror = function () {
                    return reject();
                };

                document.body.appendChild(link);
            });
        }

        /**
         * Add event listeners to document
         */

    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this = this;

            this.params.listenedEvents.forEach(function (eventName) {
                _this.container.addEventListener(eventName, function (event) {
                    return _this.defaultEventHandler(event, eventName);
                });
            });
        }

        /**
         * Default events handler
         * @param {Object} event
         * @param {String} eventName
         */

    }, {
        key: 'defaultEventHandler',
        value: function defaultEventHandler(event, eventName) {
            var target = event.target;
            var action = void 0;

            while (target.parentNode && target !== event.currentTarget) {
                action = target.dataset[eventName];

                /** Send all links clicks to analytics */
                if (eventName === 'click' && target.tagName.toLowerCase() === 'a') {
                    Analytics.sendEvent(target.href);
                }

                if (action) break;
                target = target.parentNode;
            }

            action = target.dataset[eventName];

            if (action && this[action]) {
                this[action](event.target, event);
            }
        }
    }]);

    return BaseSpecial;
}();

exports.default = BaseSpecial;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Абсурдные траты',
  description: 'Мы рассказываем истории, а вам нужно угадать, какие из них происходили в действительности.',
  text: '<p>Вместе с «Промсвязьбанком» мы вспомнили истории, когда предприниматели нелепо тратили деньги, а ещё несколько придумали. Вам нужно разобраться, какие истории реальны, а какие — выдумка.</p>',
  img: 'https://leonardo.osnova.io/6981a1d2-4091-ebdc-a75d-40681c00096d/',
  img2x: 'https://leonardo.osnova.io/4be0905d-5e5b-7106-bca5-11baab2bd26c/',
  questions: [{
    price: '$1405',
    label: 'на ведро для мусора',
    answer: 'Столько денег на мусорное ведро потратил Джон Тэйн, генеральный директор инвестиционного банка Merill Lynch. Ого!',
    correct: 'right',
    img: 'https://leonardo.osnova.io/245e47b0-aea0-7635-7ff8-e4a6f5e5b9c8/'
  }, {
    price: '$18 468',
    label: 'на кресло короля Великобритании Георга IV',
    answer: 'Это всё тот же Джон Тэйн!',
    correct: 'right',
    img: 'https://leonardo.osnova.io/3956c551-c409-1483-9648-e39fbbaade6b/'
  }, {
    price: '$767 тысяч',
    label: 'на четыре золотых туалета',
    answer: 'Теперь они стоят дома у Канье Уэста и Ким Кардашьян.',
    correct: 'right',
    img: 'https://leonardo.osnova.io/72cf5d22-3abd-e5fe-1aee-4ada312f20ee/'
  }, {
    price: '$13 тысяч',
    label: 'на ужин и вино',
    answer: 'Так поужинал сооснователь Facebook Шон Паркер, который, кстати, <a href="https://www.huffingtonpost.com/2011/03/07/sean-parker-interview-quotes_n_832409.html" target="_blank">считает</a>, что богатство не делает человека «крутым».',
    correct: 'right',
    img: 'https://leonardo.osnova.io/712bcf8e-445f-337b-7043-44eefafcc514/'
  }, {
    price: '$20 тысяч',
    label: 'чаевых',
    answer: 'Американский телемагнат Марк Кьюбан после победы своей футбольной команды не только оставил щедрые чаевые, но ещё и неплохо вложился в алкоголь — $90 тысяч за бутылку игристого.',
    correct: 'right',
    img: 'https://leonardo.osnova.io/de51b0e4-edef-65ba-4528-aa5dad224e20/'
  }, {
    price: '$800',
    label: 'на ментоловые леденцы',
    answer: 'Мы, конечно, не можем знать наверняка, но это мы выдумали.',
    correct: 'left',
    img: 'https://leonardo.osnova.io/fbf1b471-f39d-be9f-c7ba-1525023f9906/'
  }, {
    price: '$16 550',
    label: 'на гомеопатические средства',
    answer: 'Даже объяснять не стоит!',
    correct: 'left',
    img: 'https://leonardo.osnova.io/671b6210-f59e-db2f-01d1-76f1b7d2d5b9/'
  }, {
    price: '~$35 млн',
    label: 'за билет в космос',
    answer: 'Это предположительная сумма, которую <a href="https://tjournal.ru/75165-profil-yusaku-maedzava" target="_blank">заплатил</a> японский миллиардер Юсаку Маэдзава за путешествие вокруг Луны на корабле SpaceX.',
    correct: 'right',
    img: 'https://leonardo.osnova.io/1e327520-c080-17f5-625c-180054e2ab79/'
  }, {
    price: '$800 тысяч',
    label: 'на папирусную бумагу для печати',
    answer: 'Это слишком абсурдно. Мы ведь не в Древнем Египте!',
    correct: 'left',
    img: 'https://leonardo.osnova.io/ba1eb3da-dceb-084e-4189-61faf5032e22/'
  }, {
    price: '$350 тысяч',
    label: 'на офисных хаски',
    answer: 'Но представьте, как было бы круто!',
    correct: 'left',
    img: 'https://leonardo.osnova.io/1688a691-3557-eb1a-ee52-47e183dbb534/'
  }],
  result: {
    text: '<p>Корпоративная карта «Промсвязьбанка» не избавит от абсурдных трат, но позволит контролировать расходы бизнеса при оплате товаров и услуг. <b>С помощью карты любой предприниматель сможет:</b></p><ul><li>Оплачивать любые товары и услуги на кассе и в интернете без комиссий.</li><li>Управлять лимитами держателей карт.</li><li>Всегда быть в курсе доступного остатка по карте.</li><li>Вносить выручку на расчетный счет через банкоматы банка.</li></ul>',
    link: '#'
  },
  results: [{
    range: [0, 3],
    img: 'https://leonardo.osnova.io/9bc53941-dc17-15e7-d0a8-0f1d923456f6/',
    img2x: '',
    title: 'Мне нужна эта<br>розовая шуба<br>за миллион',
    subtitle: 'Я не очень-то умею обращаться с деньгами.'
  }, {
    range: [4, 6],
    img: 'https://leonardo.osnova.io/190251e9-0d2e-8605-8b1a-90266f2acf7b/',
    img2x: '',
    title: 'Умею<br>ценить деньги',
    subtitle: 'Но тут билет до Новой Зеландии<br>со скидкой!'
  }, {
    range: [7, 10],
    img: 'https://leonardo.osnova.io/8a131e46-5f0f-3374-d78d-22afa677e265/',
    img2x: '',
    title: 'Я казначей',
    subtitle: 'Каждый день сдерживаюсь<br>от покупки билета в космос!'
  }]
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logo: '<svg viewBox="0 0 305.92 50.77"><path fill="#0d4ba0" d="M35.36 19.52v-.05a3.14 3.14 0 0 0 2.29-3.28c0-2.41-2-3.52-4.72-3.52h-4.64v5.77H25.5c-3.7 0-4.46 2.59-4.46 4 0 2 1.16 2.9 3.3 4 1.3.65 2.86 1.05 2.86 2.54 0 .78-.72 1.72-2.28 1.72h-2.9a4.55 4.55 0 0 0 .62-2.27c0-.92-.33-4.62-5.48-4.62h-4.22v14.28h2.87v-6.22l1.16 1.16h7.84c3.66 0 5.4-1.88 5.4-4.13a4.39 4.39 0 0 0-.4-2h2.94c4.54 0 5.59-2.25 5.59-4a3.31 3.31 0 0 0-2.98-3.38zM17.15 30.7H15.8v-4.67h1.34a2.17 2.17 0 0 1 2.43 2.25 2.29 2.29 0 0 1-2.42 2.42zm11.14-8.85v3.46a20.35 20.35 0 0 0-2.36-1.12c-.91-.4-1.89-.91-1.89-2.05 0-.58.36-1.45 2.1-1.45h3.23zm2.87-6.93h1.31c2.21 0 2.32 1.36 2.32 1.78 0 .62-.33 1.76-2.21 1.76h-1.46v-3.54zm1.63 9.76h-1.67v-4h1.63c2 0 2.54 1 2.54 2s-.72 2-2.54 2z"/><path fill="#0d4ba0" d="M50.8 12.36A12.36 12.36 0 0 0 38.44 0H20.97a12.36 12.36 0 0 0-11.9 9h21.11c8.12 0 11.57 3.78 11.57 12.64v20a12.39 12.39 0 0 0 9-11.89V12.36z"/><path fill="#f26522" d="M0 38.41a12.36 12.36 0 0 0 12.36 12.36h17.46a12.36 12.36 0 0 0 11.9-9H20.61c-8.12 0-11.57-3.78-11.57-12.64v-20a12.39 12.39 0 0 0-9 11.89v17.46z"/><path fill="#0d4ba0" d="M269.56 38.05V19.66h5.33v6.83h5.78v-6.83h5.26v18.39h-5.26v-8.2h-5.78v8.2h-5.33zM261.88 35.19v-6.54c-2.24.3-5.54.69-5.54 3.89 0 3.92 4.22 3.2 5.54 2.65zm-10.4-2.35a5.46 5.46 0 0 1 3.84-5.36 19.24 19.24 0 0 1 3.05-.84c.89-.16 2.06-.3 3.48-.5v-.58c.11-2.66-1.42-3.16-3.3-3.16a10.94 10.94 0 0 0-5 1.38l-.35-3.3a19.38 19.38 0 0 1 6.64-1.17 10.76 10.76 0 0 1 3.62.5 4.59 4.59 0 0 1 3.34 4 13 13 0 0 1 .07 1.87v11.45c-4.61 1.78-15.34 3-15.34-4.31zM243.56 34.52a2.49 2.49 0 0 1-2.16 1.06c-3.06 0-3.77-5-3.77-7.26a7.93 7.93 0 0 1 1.46-5.08 2.64 2.64 0 0 1 2.2-1 3 3 0 0 1 2.81 2.2 12.42 12.42 0 0 1 .78 4.69 9.31 9.31 0 0 1-1.32 5.37zm6.39-9.8a7.9 7.9 0 0 0-2.31-3.78c-1.81-1.72-8.2-3.14-11.29 1.47 0-4.86 2.06-7.26 6.18-8s6.39-1.08 6.39-1.08l-.39-3.94s-4.22.59-7.7 1.38a10.61 10.61 0 0 0-8.28 9.14c-.6 3.59-.53 9.78.53 12.68 1.24 3.34 3.73 5.86 8.28 5.86 6.25 0 9.12-3.84 9.12-9.84a16.81 16.81 0 0 0-.53-3.94zM288.98 38.05V19.66h5.26v8.46l5.89-8.46h5.19l-6.01 8.22 6.61 10.17h-5.86l-5.82-9.15v9.15h-5.26zM205.18 38.44a14.45 14.45 0 0 1-5-.73l.43-3.2a7.17 7.17 0 0 0 3.84 1.06c2.66 0 4.12-1.22 4-2.95a2.27 2.27 0 0 0-.82-1.92 3 3 0 0 0-1.85-.72c-.71-.05-1.28-.11-1.78-.11h-1.28v-2.76h.36c2 0 5-.08 5-2.61 0-2-2-2.4-3.05-2.4a9.06 9.06 0 0 0-4.47 1.17l-.28-3a15.7 15.7 0 0 1 5.9-1c4.26-.09 6.92 1.83 6.82 4.72.07 2.37-2 3.75-3.37 4.19a6.34 6.34 0 0 1 2.34.87 4.19 4.19 0 0 1 1.78 3.55 5.18 5.18 0 0 1-3.13 4.86 13.34 13.34 0 0 1-5.47 1zM157.84 38.44c-6.07 0-9.44-3.69-9.44-9.68s3.59-9.55 9.51-9.55a11.58 11.58 0 0 1 4.33.74l-.57 3.34a6.18 6.18 0 0 0-2.91-.78c-3.55 0-5.07 2.9-5.07 6.09s1.49 6.48 5.11 6.48a6 6 0 0 0 2.95-.72l.39 3.39a12.49 12.49 0 0 1-4.29.69zM216.04 38.05V19.66h5.25v5.8h2.09c2.41 0 4.23.39 5.33 1.22a5.64 5.64 0 0 1 2.13 4.67c-.14 6-6.21 7.13-9.52 7.13a27.61 27.61 0 0 1-5.25-.39zm5.22-3s4.76 1 4.76-3.53a3.16 3.16 0 0 0-.46-1.9c-.53-.94-1.74-1.1-3-1.1h-.77a2.55 2.55 0 0 0-.53.06v6.48zM170.13 27.33v-5.06s.53-.05 1.85-.05c2.52 0 3 1.47 3 2.42 0 1.81-1.1 2.7-3.66 2.7h-1.21zm1.31 2.86c.5 0 1 0 1.67.06a2.72 2.72 0 0 1 1.67.64 2.07 2.07 0 0 1 .75 1.81c0 2-1.78 2.75-4.08 2.75h-1.31v-5.26h1.31zm5.22-1.92c2.2-.69 3.3-2.07 3.3-4.17a4.32 4.32 0 0 0-.6-2.33 4.15 4.15 0 0 0-2-1.61 15.63 15.63 0 0 0-6-.94 39.15 39.15 0 0 0-6.32.44v18.39a46.89 46.89 0 0 0 6.32.39c3.69 0 9.3-.92 9.45-5.61v-.2c.11-2-1.17-4-4.12-4.37zM192.29 27.63h-1.31c-2.52 0-3.55-.83-3.55-2.91s1.63-2.59 2.95-2.59a15.12 15.12 0 0 1 1.91.06v5.41zm-1.17-8.44c-3.87 0-8.7.64-8.7 5.61a4.66 4.66 0 0 0 3.83 4.92l-4.96 8.33h5.47l3.94-7.33h1.59v7.33h5.18V19.66a40.5 40.5 0 0 0-6.36-.44zM63.5 38.05V12.68h19.32v25.37h-5.61V16.27h-8.06v21.78H63.5zM97.8 28.19c0-6.89-4.8-6.29-6.57-5.86v12c.71.16 6.57 2.41 6.57-6.14zM85.91 45.45V20.19c4.61-.94 17.11-3.54 17.11 7.67a10.94 10.94 0 0 1-2.31 7.26c-3 3.61-7.88 3.21-9.48 2.58v7.81h-5.32zM113.99 35.55c1.53 0 2.56-1.24 3-2.85a16.48 16.48 0 0 0 .46-4.09 12 12 0 0 0-.71-4.42 3 3 0 0 0-2.74-2.06 3.29 3.29 0 0 0-3.09 2.59 12.23 12.23 0 0 0-.6 3.89c0 2.27.53 6.94 3.69 6.94zm-.39 2.89c-6.07 0-8.7-3.83-8.7-9.59 0-6 3.13-9.64 9.23-9.64a8.55 8.55 0 0 1 5.26 1.49 6.66 6.66 0 0 1 2.59 3.67 14.35 14.35 0 0 1 .68 4.33c0 6.19-2.63 9.73-9.05 9.73zM123.76 38.05l1.92-18.39h6.11l3.8 12.53 3.76-12.53h6.04l1.77 18.39h-4.86l-1.03-13.23-3.98 13.23h-4.23l-4.04-13.34-1.03 13.34h-4.23z"/></svg>',
  cross: '<svg width="27" height="27" viewBox="0 0 27.44 27.45"><path d="M26.94.5a1.7 1.7 0 0 0-2.41 0L13.72 11.31 2.91.5A1.71 1.71 0 0 0 .5 2.91l10.81 10.81L.5 24.53a1.71 1.71 0 0 0 1.22 2.91 1.66 1.66 0 0 0 1.2-.51l10.8-10.8 10.8 10.81a1.72 1.72 0 0 0 1.2.51 1.64 1.64 0 0 0 1.2-.51 1.7 1.7 0 0 0 0-2.41L16.13 13.72 26.94 2.91a1.7 1.7 0 0 0 0-2.41z"/></svg>',
  tick: '<svg width="28" height="21" viewBox="0 0 29.7 20.28"><path d="M29.18.51a1.76 1.76 0 0 0-2.49 0L11.17 16.04 3 7.87a1.76 1.76 0 1 0-2.48 2.48l9.41 9.41a1.76 1.76 0 0 0 2.49 0L29.18 3a1.76 1.76 0 0 0 0-2.49z"/></svg>',
  priceTag: '<svg width="180.39" height="40"><path d="M180.22 19.24l-8-16.3v-.08A5.59 5.59 0 0 0 167.26 0h-42.33a6.21 6.21 0 0 0-.71 0H4.99a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5H124.2a6.22 6.22 0 0 0 .72 0h42.33a5.59 5.59 0 0 0 4.88-2.86v-.08l8-16.29a1.73 1.73 0 0 0 .09-1.53zm-13.75.64a4.25 4.25 0 0 1-8.49.12 4.3 4.3 0 0 1 4.25-4.34 4.25 4.25 0 0 1 4.23 4.22z"/></svg>',
  // arrow: '<svg width="10" height="17.15"><path d="M1.82 17l8-8a.54.54 0 0 0 0-.79l-8-8A.54.54 0 0 0 1 .17L.17 1a.54.54 0 0 0 0 .79l6.75 6.78-6.75 6.76a.54.54 0 0 0 0 .79L1 17a.54.54 0 0 0 .82 0z"/></svg>',
  // hat: '<svg width="44.6" height="28.4"><path d="M44.56 7.73a.83.83 0 0 0-.51-.52L22.54.04a.82.82 0 0 0-.48 0L.57 7.2a.82.82 0 0 0-.53 1 .8.8 0 0 0 .12.23l.18.22a.81.81 0 0 0 .23.15l8.64 2.88v9.63a.82.82 0 0 0 .06.31 7.39 7.39 0 0 0 2.53 2.84c2.45 1.77 6 2.72 10.31 2.75v-1.64a17.32 17.32 0 0 1-8.53-1.89 6.91 6.91 0 0 1-2.7-2.53V12.19l11.19 3.73a.79.79 0 0 0 .52 0l5.05-1.68v1.24h-.13a2.85 2.85 0 0 0-1.89 2.5l-2 10 1.61.32 1.57-7.76.24.14a2.84 2.84 0 0 0 .48.22h.13v7.29h1.65v-7.24h.13a2.82 2.82 0 0 0 .48-.22l.24-.14.02.21 1.51 7.59 1.61-.32-2-10.15a2.85 2.85 0 0 0-1.88-2.41h-.13v-1.82h.14l4.35-1.45v9.92a4.52 4.52 0 0 1-.54.58L34.3 24a5 5 0 0 0 1.08-1.29.82.82 0 0 0 .08-.36V11.64h.14l8.45-2.84a.82.82 0 0 0 .51-1.07zm-14.9 10.48a1.22 1.22 0 1 1-1.22-1.22 1.22 1.22 0 0 1 1.22 1.22zm10.95-10l-11.35 3.74-.07-.15a.83.83 0 0 0-.34-.41l-3.9-2.34.06-.15a2.82 2.82 0 0 0 .16-.89 2.89 2.89 0 1 0-1.37 2.39l.1-.07.11.06 3.53 2.12-5.24 1.77-18.87-6.3L4 7.8l18.3-6.1 18.87 6.28zm-17.09-.23A1.22 1.22 0 1 1 22.3 6.8a1.22 1.22 0 0 1 1.22 1.18z"/></svg>',
  // payment: '<svg width="43.48" height="36"><path d="M43.13 11.69L36 7.59a8.15 8.15 0 0 1 2.7-2.46.69.69 0 0 0 0-1.2L32.06.09a.69.69 0 0 0-.69 0 9.53 9.53 0 0 0-3.16 3l-.57-.33a.69.69 0 0 0-.69 0l-8.88 5.09-.07.07L.24 23.28a.69.69 0 0 0-.24.52v2.56a.69.69 0 0 0 .35.6l15.51 9a.69.69 0 0 0 .69 0l26.58-15.4a.69.69 0 0 0 .35-.6v-7.68a.69.69 0 0 0-.35-.59zM31.72 1.5L37 4.57A9.59 9.59 0 0 0 33.3 11L28 8a8.19 8.19 0 0 1 3.72-6.5zm1.86 11.3a.69.69 0 0 0 1-.6 8.1 8.1 0 0 1 .13-1.2L37 12.28l-3 1.76-9.69-5.6L26.68 7a9.48 9.48 0 0 0-.09 1.33.69.69 0 0 0 .35.6zm-6.3-8.67l.24.14a9.57 9.57 0 0 0-.39.95.69.69 0 0 0-.19.07L22.5 7.85a.69.69 0 0 0 0 1.2l11.08 6.4a.69.69 0 0 0 .69 0l4.43-2.56a.69.69 0 0 0 0-1.2l-3.65-2.11a8.17 8.17 0 0 1 .31-.78l6 3.49-7.43 4.31L19.8 8.45zM1.38 26v-1l14.12 8.15v1zm14.74 5.95L1.88 23.68 18.5 9.29l14.24 8.22zm26-12.34l-25.23 14.5v-1L34.33 18l7.76-4.48v6.08z"/><path d="M30.14 17.2L19 10.79a.69.69 0 0 0-.8.08l-3.35 2.93a.69.69 0 0 0 .15 1.12l11.1 6.41a.69.69 0 0 0 .8-.08l3.39-2.94a.69.69 0 0 0-.15-1.11zm-3.82 2.69l-9.83-5.68 2.29-2 9.83 5.68zM25 21.67l-11.1-6.41a.69.69 0 0 0-.8.08l-8.73 7.54A.69.69 0 0 0 4.48 24l11.1 6.41a.69.69 0 0 0 .8-.08l8.71-7.54a.69.69 0 0 0-.09-1.12zM15.84 29L6 23.29l7.6-6.59 9.83 5.68z"/></svg>',
  swipe: '<svg width="54.78" height="60"><path d="M35.22 7.82h12.5l-3 3a1.31 1.31 0 0 0 1.85 1.84l5.23-5.22a1.23 1.23 0 0 0 .13-.2 1.28 1.28 0 0 0 .14-.24 1.27 1.27 0 0 0-.25-1.38L46.58.38a1.301 1.301 0 0 0-1.84 1.84l3 3H35.22a1.3 1.3 0 0 0 0 2.6zM7.44 12.66a1.31 1.31 0 0 0 0-1.84l-3-3H17a1.305 1.305 0 0 0 0-2.61H4.45l3-3A1.301 1.301 0 0 0 5.6.38L.38 5.6A1.3 1.3 0 0 0 .1 6a1.31 1.31 0 0 0 0 1 1.28 1.28 0 0 0 .15.23 1.23 1.23 0 0 0 .13.2l5.22 5.23a1.31 1.31 0 0 0 .92.38 1.29 1.29 0 0 0 .92-.38zM49.57 26.09a5.2 5.2 0 0 0-2.9.88 5.22 5.22 0 0 0-7.83-2.61 5.23 5.23 0 0 0-4.93-3.49 5.18 5.18 0 0 0-2.61.7V13a5.22 5.22 0 1 0-10.44 0v22.22l-4.53-3.4a6.84 6.84 0 0 0-8.89.63 3.92 3.92 0 0 0 0 5.53L26 56.56A11.67 11.67 0 0 0 34.32 60h6.11a14.37 14.37 0 0 0 14.35-14.35V31.3a5.22 5.22 0 0 0-5.21-5.21zm2.61 19.57a11.75 11.75 0 0 1-11.74 11.73h-6.12a9.07 9.07 0 0 1-6.46-2.67L9.29 36.14a1.31 1.31 0 0 1 0-1.84 4.22 4.22 0 0 1 5.49-.39l6.62 5a1.3 1.3 0 0 0 2.09-1V13a2.61 2.61 0 1 1 5.22 0v19.61a1.305 1.305 0 0 0 2.61 0v-6.52a2.61 2.61 0 1 1 5.22 0v6.52a1.305 1.305 0 0 0 2.61 0v-3.92a2.61 2.61 0 0 1 5.22 0v3.91a1.305 1.305 0 0 0 2.61 0v-1.3a2.61 2.61 0 0 1 5.22 0v14.35z"/></svg>',
  swipeL: '<svg viewBox="0 0 54.78 60.01"><path d="M7.44 12.67a1.31 1.31 0 0 0 0-1.84l-3-3H17a1.305 1.305 0 1 0 0-2.61H4.45l3-3A1.301 1.301 0 0 0 5.6.39L.38 5.61a1.3 1.3 0 0 0-.28.4 1.31 1.31 0 0 0 0 1 1.28 1.28 0 0 0 .15.23 1.23 1.23 0 0 0 .13.2l5.22 5.23a1.31 1.31 0 0 0 .92.38 1.29 1.29 0 0 0 .92-.38zM49.57 26.1a5.2 5.2 0 0 0-2.9.88 5.22 5.22 0 0 0-7.83-2.61 5.22 5.22 0 0 0-7.54-2.79v-8.57a5.22 5.22 0 0 0-10.44 0v22.22l-4.53-3.4a6.84 6.84 0 0 0-8.89.63 3.92 3.92 0 0 0 0 5.53L26 56.57a11.67 11.67 0 0 0 8.32 3.44h6.11a14.37 14.37 0 0 0 14.35-14.35V31.31a5.22 5.22 0 0 0-5.21-5.21zm2.63 19.56A11.75 11.75 0 0 1 40.44 57.4h-6.12a9.07 9.07 0 0 1-6.46-2.67L9.29 36.15a1.31 1.31 0 0 1 0-1.84 4.22 4.22 0 0 1 5.49-.39l6.62 5a1.3 1.3 0 0 0 2.09-1V13.01a2.61 2.61 0 0 1 5.22 0v19.61a1.305 1.305 0 1 0 2.61 0V26.1a2.61 2.61 0 0 1 5.22 0v6.52a1.31 1.31 0 0 0 2.61 0V28.7a2.61 2.61 0 1 1 5.22 0v3.91a1.305 1.305 0 0 0 2.61 0v-1.3a2.61 2.61 0 1 1 5.22 0v14.35z"/></svg>',
  swipeR: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.48 60"><path d="M28.92 7.82h12.5l-3 3a1.31 1.31 0 0 0 1.85 1.84l5.23-5.22a1.23 1.23 0 0 0 .13-.2 1.25 1.25 0 0 0-.11-1.62L40.28.38a1.301 1.301 0 1 0-1.84 1.84l3 3H28.92a1.3 1.3 0 0 0 0 2.6zM43.27 26.09a5.2 5.2 0 0 0-2.9.88 5.22 5.22 0 0 0-7.83-2.61A5.22 5.22 0 0 0 25 21.57V13a5.22 5.22 0 1 0-10.44 0v22.22l-4.53-3.4a6.84 6.84 0 0 0-8.89.63 3.92 3.92 0 0 0 0 5.53L19.7 56.56A11.67 11.67 0 0 0 28.02 60h6.11a14.37 14.37 0 0 0 14.35-14.35V31.3a5.22 5.22 0 0 0-5.21-5.21zm2.61 19.57a11.75 11.75 0 0 1-11.74 11.73h-6.12a9.07 9.07 0 0 1-6.46-2.67L2.99 36.14a1.31 1.31 0 0 1 0-1.84 4.22 4.22 0 0 1 5.49-.39l6.62 5a1.3 1.3 0 0 0 2.09-1V13a2.61 2.61 0 1 1 5.22 0v19.61a1.31 1.31 0 0 0 2.61 0v-6.52a2.61 2.61 0 0 1 5.22 0v6.52a1.31 1.31 0 0 0 2.61 0v-3.92a2.61 2.61 0 0 1 5.22 0v3.91a1.31 1.31 0 0 0 2.61 0v-1.3a2.61 2.61 0 1 1 5.22 0v14.35z"/></svg>',
  refresh: '<svg width="15" height="15"><path d="M14.62.674c-.268-.11-.495-.065-.684.136l-1.27 1.26A7.58 7.58 0 0 0 10.278.542 7.357 7.357 0 0 0 7.5 0a7.298 7.298 0 0 0-2.91.596 7.565 7.565 0 0 0-2.393 1.601A7.567 7.567 0 0 0 .596 4.59 7.298 7.298 0 0 0 0 7.5c0 1.015.199 1.986.596 2.91a7.567 7.567 0 0 0 1.601 2.393 7.57 7.57 0 0 0 2.393 1.601A7.298 7.298 0 0 0 7.5 15c1.12 0 2.185-.236 3.194-.708a7.333 7.333 0 0 0 2.578-1.997.32.32 0 0 0 .073-.22.27.27 0 0 0-.093-.2l-1.338-1.348a.376.376 0 0 0-.244-.087c-.104.013-.179.052-.224.117a4.904 4.904 0 0 1-1.748 1.436A4.925 4.925 0 0 1 7.5 12.5a4.87 4.87 0 0 1-1.938-.395 5.034 5.034 0 0 1-1.597-1.07A5.038 5.038 0 0 1 2.896 9.44 4.87 4.87 0 0 1 2.5 7.5c0-.677.132-1.323.396-1.938a5.036 5.036 0 0 1 1.07-1.597c.449-.45.98-.806 1.596-1.07A4.87 4.87 0 0 1 7.5 2.5c1.309 0 2.445.446 3.409 1.338L9.56 5.186c-.202.195-.248.42-.137.674.11.26.303.39.576.39h4.375a.6.6 0 0 0 .44-.185.6.6 0 0 0 .185-.44V1.25a.584.584 0 0 0-.38-.576z"/></svg>'
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.make = exports.init = undefined;

var _cmttLikely = __webpack_require__(17);

var _cmttLikely2 = _interopRequireDefault(_cmttLikely);

var _dom = __webpack_require__(6);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS = {
    likely: 'likely',
    likelyCustom: 'likely--custom'
};

var init = exports.init = function init() {
    _cmttLikely2.default.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer - likely container will be placed here
 * @param {Object} set - object with optional params (title, url, twitter)
 */
var make = exports.make = function make(parentContainer) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var likelyContainer = (0, _dom.makeElement)('div', [CSS.likely, CSS.likelyCustom]);
    var socials = ['facebook', 'vkontakte', 'twitter'];

    socials.forEach(function (social) {
        var button = (0, _dom.makeElement)('div', social);

        if (social === 'facebook') button.innerHTML = 'Поделиться';

        button.addEventListener('click', function () {
            Analytics.sendEvent('Share ' + social);
        });

        likelyContainer.appendChild(button);
    });

    parentContainer.appendChild(likelyContainer);

    if (set.url) likelyContainer.dataset.url = set.url;
    if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
    if (set.title) likelyContainer.dataset.title = set.title;

    init();
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict';

var Likely = __webpack_require__(18),
    config = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1);

/**
 * @param {Node} node
 * @param {Object} options
 */
var likely = function (node, options) {
    options = options || {};

    var widget = node[config.name];

    if (widget) {
        widget.update(options);
    }
    else {
        node[config.name] = new Likely(node, utils.merge(
            {}, likely.defaults,
            options, utils.bools(node)
        ));
    }

    return widget;
};

/**
 * Initiate Likely buttons on load
 */
likely.initiate = likely.initate = function () {
    var widgets = dom.findAll('.' + config.name);

    utils.toArray(widgets).forEach(likely);
};

/**
 * Defaults options for likely
 */
likely.defaults = {
    counters: true,
    timeout:  1e3,
    zeroes:   false,
    title:    document.title,
    wait:     0.5e3,
    url:      window.location.href.replace(window.location.hash, '')
};

module.exports = likely;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Button = __webpack_require__(19);

var services = __webpack_require__(4),
    config   = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(7);

/**
 * Main widget view
 *
 * @param {Node} container
 * @param {Object} options
 */
function Likely(container, options) {
    this.isSmartOrder = container.dataset.smart !== undefined ? true : false;
    this.container = container;
    this.options   = options;

    this.countersLeft = 0;
    this.buttons      = [];
    this.number       = 0;

    this.init();
}

Likely.prototype = {

    /**
     * Change buttons order, if previous clicks were saved
     * @param {Array} children
     */
    reorder: function (children) {
        var savedServices = storage.getItem(config.storageKey);

        if (savedServices) {
            savedServices.reverse();

            savedServices.forEach(function (service) {

                var button = dom.find('.' + service);

                if (button) {
                    button.parentNode.insertBefore(button, button.parentNode.firstChild);
                }

            });
        }
    },

    /**
     * Initiate the social buttons widget
     */
    init: function () {

        var buttons = utils.toArray(this.container.children);

        if (dom.isMobile() && this.isSmartOrder) {
            this.reorder(buttons);
        }

        buttons.forEach(this.addButton.bind(this));

        if (this.options.counters) {
            this.timer   = setTimeout(this.appear.bind(this), this.options.wait);
            this.timeout = setTimeout(this.ready.bind(this),  this.options.timeout);
        }
        else {
            this.appear();
        }

        utils.flexboxSupport(this.container, config.name);
    },

    /**
     * Add a button
     *
     * @param {Node} node
     */
    addButton: function (node) {
        var button = new Button(node, this, this.options);

        this.buttons.push(button);

        if (button.options.counterUrl) {
            this.countersLeft++;
        }
    },

    /**
     * Update the timer with URL
     *
     * @param {Object} options
     */
    update: function (options) {
        if (
            options.forceUpdate ||
            options.url !== this.options.url
        ) {
            this.countersLeft = this.buttons.length;
            this.number = 0;

            this.buttons.forEach(function (button) {
                button.update(options);
            });
        }
    },

    /**
     * Update counter
     *
     * @param {String} service
     * @param {Number} counter
     */
    updateCounter: function (service, counter) {
        if (counter) {
            this.number += counter;
        }

        this.countersLeft--;

        if (this.countersLeft === 0) {
            this.appear();
            this.ready();
        }
    },

    /**
     * Show the buttons with smooth animation
     */
    appear: function () {
        this.container.classList.add(config.name + '--visible');
    },

    /**
     * Get. Set. Ready.
     */
    ready: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);

            this.container.classList.add(config.name + '--ready');
        }
    }
};

module.exports = Likely;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(4),
    config = __webpack_require__(0),
    fetch = __webpack_require__(33),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(7);

var htmlSpan = '<span class="{className}">{content}</span>';

/**
 * Separate social link widget
 *
 * @param {Node} widget
 * @param {Likely} likely
 * @param {Object} options
 */
function LikelyButton (widget, likely, options) {
    this.widget  = widget;
    this.likely  = likely;
    this.options = utils.merge(options);

    this.init();
}

LikelyButton.prototype = {
    /**
     * Initiate the button
     */
    init: function () {
        this.detectService();
        this.detectParams();

        if (this.service) {
            this.initHtml();

            setTimeout(this.initCounter.bind(this), 0);
        }
    },

    /**
     * Update the counter
     *
     * @param {Object} options
     */
    update: function (options) {
        var className = '.' + config.prefix + 'counter',
            counters  = dom.findAll(className, this.widget);

        utils.extend(this.options, utils.merge({forceUpdate: false}, options));
        utils.toArray(counters).forEach(function (node) {
            node.parentNode.removeChild(node);
        });

        this.initCounter();
    },

    /**
     * Get the config.name of service and its options
     */
    detectService: function () {
        var widget  = this.widget,
            service = utils.getDataset(widget).service;

        if (!service) {
            var classes = widget.className.split(' ');

            for (var i = 0; i < classes.length; i++) {
                if (classes[i] in services) break;
            }

            service = classes[i];
        }

        if (service) {
            this.service = service;

            utils.extend(this.options, services[service]);
        }
    },

    /**
     * Merge params from data-* attributes into options hash map
     */
    detectParams: function () {
        var options = this.options,
            data    = utils.getDataset(this.widget);

        if (data.counter) {
            var counter = parseInt(data.counter, 10);

            if (isNaN(counter)) {
                options.counterUrl = data.counter;
            }
            else {
                options.counterNumber = counter;
            }
        }

        options.title = data.title || options.title;
        options.url   = data.url   || options.url;
    },

    /**
     * Inititate button's HTML
     */
    initHtml: function () {
        var options = this.options,
            widget  = this.widget,
            text    = widget.innerHTML;

        widget.addEventListener('click', this.click.bind(this));
        widget.classList.remove(this.service);
        widget.className += (' ' + this.className('widget'));

        var button = utils.template(htmlSpan, {
            className: this.className('button'),
            content:   text
        });

        var icon = utils.template(htmlSpan, {
            className: this.className('icon'),
            content:   dom.wrapSVG(options.svgi)
        });

        widget.innerHTML = icon + button;
    },

    /**
     * Fetch or get cached counter value and update the counter
     */
    initCounter: function () {
        var options = this.options;

        if (options.counters && options.counterNumber) {
            this.updateCounter(options.counterNumber);
        }
        else if (options.counterUrl) {
            fetch(
                this.service,
                options.url,
                options
            )(this.updateCounter.bind(this));
        }
    },

    /**
     * @param {String} className
     * @return {String}
     */
    className: function (className) {
        var fullClass = config.prefix + className;

        return fullClass + ' ' + fullClass + '--' + this.service;
    },

    /**
     * Update counter
     *
     * @param {String} e
     */
    updateCounter: function (counter) {
        counter = parseInt(counter, 10) || 0;

        var counterElement = dom.find('.' + config.name + '__counter', this.widget);

        if (counterElement) {
            counterElement.parentNode.removeChild(counterElement);
        }

        var options = {
            className: this.className('counter'),
            content:   counter
        };

        if (!counter && !this.options.zeroes) {
            options.className += ' ' + config.prefix + 'counter--empty';
            options.content = '';
        }

        this.widget.appendChild(
            dom.createNode(utils.template(htmlSpan, options))
        );

        this.likely.updateCounter(this.service, counter);
    },

    /**
     * Click event listener
     */
    click: function () {
        var options = this.options;

        if ( this.service == 'more' ){

            this.widget.classList.toggle('active');
            this.widget.parentElement.classList.toggle(this.options.className);

        } else if (this.service == 'email'){

            var url = utils.makeUrl(options.popupUrl, {
                url: options.url,
                title: options.title
            });

            window.location = url;

            this.rememberClicked(this.service);

        } else {

            if (options.click.call(this)) {

                var twitterText = this.likely.container.dataset.twitter,
                    twitterUrl = this.likely.container.dataset.twitterUrl;

                var window_url = utils.makeUrl(options.popupUrl, {
                    url:   (this.service === 'twitter' && twitterUrl !== '' && twitterUrl !== undefined) ? twitterUrl : options.url,
                    title: (this.service === 'twitter' && twitterText !== '' && twitterText !== undefined) ? twitterText : options.title
                });

                dom.openPopup(
                    this.addAdditionalParamsToUrl(window_url),
                    config.prefix + this.service,
                    options.popupWidth,
                    options.popupHeight
                );

                this.rememberClicked(this.service);
            }

        }

        return false;
    },

    /**
     * Append service data to URL
     *
     * @param {String} url
     */
    addAdditionalParamsToUrl: function (url) {
        var parameters = utils.query(utils.merge(
                this.widget.dataset,
                this.options.data
            )),
            delimeter = url.indexOf('?') === -1 ? '?' : '&';

        return (parameters === '') ? url : (url + delimeter + parameters);
    },

    /**
     * Remember last clicked button and save to storage
     */
    rememberClicked: function (service) {
        var services = storage.getItem(config.storageKey) || [],
            serviceIndex = services.indexOf(service);

        if (serviceIndex !== -1) {
            services.splice(serviceIndex, 1);
        }

        services.splice(0, 0, service);

        storage.setItem(config.storageKey, services);
    }
};

module.exports = LikelyButton;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var dom = __webpack_require__(1);

/**
 * @param {String} url
 * @param {Function} factory
 */
var counter = function (url, factory) {
    var self = this;
    
    dom.getJSON(url, function (count) {
        try {
            if (typeof self.convertNumber === 'function') {
                count = self.convertNumber(count);
            } 
            
            factory(count);
        } 
        catch (e) {}
    });
};

/**
 * @param {Object} options
 */
module.exports = function (options) {
    options.counter = options.counter || counter;
    options.click   = options.click   || function () { return true; };
};

/***/ }),
/* 21 */
/***/ (function(module) {

module.exports = {"facebook":"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8","twitter":"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353","vkontakte":"15.4 12.8h-1.8c-.7 0-.9-.5-2.1-1.7-1-1-1.5-1.1-1.7-1.1-.4 0-.5.1-.5.6v1.6c0 .4-.1.7-1.3.7-1.9 0-3.9-1.1-5.3-3.2C.6 6.5 0 4.2 0 3.7c0-.3.1-.5.6-.5h1.8c.4 0 .6.2.8.7C4 6.4 5.4 8.6 6 8.6c.2 0 .3-.1.3-.7V5.4c0-1.2-.6-1.3-.6-1.7 0-.2.2-.4.4-.4h2.8c.4 0 .5.2.5.6v3.5c0 .4.2.5.3.5.2 0 .4-.1.8-.5 1.3-1.4 2.2-3.6 2.2-3.6.1-.3.3-.5.8-.5h1.8c.5 0 .6.3.5.6-.2 1-2.4 4-2.4 4-.2.3-.3.4 0 .8.2.3.8.8 1.2 1.3.8.8 1.3 1.6 1.5 2.1 0 .4-.2.7-.7.7","gplus":"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8","odnoklassniki":"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2","pocket":"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487","telegram":"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4","whatsapp":"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9","viber":"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3","email":"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9","more":"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Odnoklassniki service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var odnoklassniki = {
    counterUrl: config.secure 
        ? undefined 
        : 'http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: 'http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
    popupWidth: 640,
    popupHeight: 400
};

utils.set(window, 'ODKL.updateCount', function (index, counter) {
    odnoklassniki.promises[index](counter);
});

module.exports = odnoklassniki;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vkontakte service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var vkontakte = {
    counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: config.protocol + '//vk.com/share.php?url={url}&title={title}',
    popupWidth: 550,
    popupHeight: 330
};

utils.set(window, 'VK.Share.count', function (index, count) {
    vkontakte.promises[index](count);
});

module.exports = vkontakte;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Facebook service provider
 */

module.exports = {
    counterUrl: 'https://graph.facebook.com/?fields=share,og_object{likes.limit(0).summary(true),comments.limit(0).summary(true)}&id={url}&callback=?',
    convertNumber: function (counter) {
        return counter.share.share_count;
    },
    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
    popupWidth: 600,
    popupHeight: 500
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Twitter service provider
 */

var config = __webpack_require__(0);

var twitter = {
    popupUrl: config.protocol + '//twitter.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    click: function () {
        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }

        return true;
    }
};

module.exports = twitter;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Google+ service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var gplus = {
    gid: 0,
    promises: {},
    popupUrl: 'https://plus.google.com/share?url={url}',
    popupWidth: 700,
    popupHeight: 500
};

module.exports = gplus;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pocket service provider
 */

var config = __webpack_require__(0);

var pocket = {
    popupUrl: config.protocol + '//getpocket.com/save?url={url}&format=json&callback=?',
    popupWidth: 600,
    popupHeight: 300
};

module.exports = pocket;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Telegram service provider
 */

module.exports = {
    popupUrl: 'tg://msg?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * WhatsApp service provider
 */

module.exports = {
    popupUrl: 'whatsapp://send?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * Viber service provider
 */

module.exports = {
    popupUrl: 'viber://forward?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * E-mail service provider
 */

var config = __webpack_require__(0);

var email = {
    popupUrl: 'mailto:?subject={title}&body={url}',
    popupWidth: 0,
    popupHeight: 0
};

module.exports = email;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

module.exports = {
	parent: config.name,
    className: config.name + '--expanded'
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(4),
    Factory  = __webpack_require__(34),
    utils    = __webpack_require__(2),
    dom      = __webpack_require__(1);

var factories = {};

/**
 * Fetch data
 *
 * @param {String} service
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 */
module.exports = function (service, url, options) {
    if (!factories[service]) {
        factories[service] = {};
    }

    var counters = factories[service],
        counter  = counters[url];

    if (!options.forceUpdate && counter) {
        return counter;
    }

    counter = Factory();

    var href = utils.makeUrl(options.counterUrl, {
        url: url
    });

    services[service].counter(href, counter, url);

    counters[url] = counter;

    return counters[url];
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Factory function
 * 
 * This function returns function with following API:
 * 
 * - if passed argument is callback, then this callback would be callled
 *   if the value was changed
 * - if passed argument is anything but undefined or function, then this 
 *   function behaves like setter
 * - if argument isn't provided, then return value stored in closure
 * 
 * @param {Object} value
 * @return {Function}
 */
module.exports = function (value) {
    var listeners = [];
    
    return function (argument) {
        var type = typeof argument;
        
        if (type == 'undefined') {
            return value;
        }
        else if (type == 'function') {
            listeners.push(argument);
        }
        else {
            value = argument;
            
            listeners.forEach(function (listener) {
                listener(argument);
            });
        }
    };
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeSwipeable;

var _animate = __webpack_require__(8);

function makeSwipeable(el, callback) {
  var x = 0;
  var shift = 0;
  var direction = null;
  var firstX = void 0;
  var currentX = void 0;

  function down(eDown) {
    if (el.closest('.is-correct') || el.closest('.is-incorrect')) {
      return false;
    }

    if (eDown.touches) {
      eDown = eDown.touches[0];
    }

    // x = eDown.clientX + shift;
    x = eDown.clientX;
    firstX = x;

    function move(eMove) {
      if (eMove.touches) {
        eMove = eMove.touches[0];
      }

      shift = x - eMove.clientX;
      direction = x - eMove.clientX > 0 ? 'left' : 'right';
      currentX = eMove.clientX;

      var opacity = Math.ceil((100 / (el.offsetWidth / Math.abs(shift))).toFixed() / 10) * 10;
      el.dataset.opacity = opacity > 100 ? 100 : opacity;
      el.dataset.dir = direction;
      el.style.transform = 'translate3d(' + -shift + 'px, 0, 0)';
    }

    function up(eUp) {
      if (direction) {
        (function (dir) {
          (0, _animate.requestAnimate)({
            duration: 100,
            timing: function timing(timeFraction) {
              return timeFraction;
            },
            draw: function draw(progress) {
              var p = 1 - progress;
              el.style.transform = 'translate3d(' + -shift * p + 'px, 0, 0)';

              if (progress === 1 && Math.abs(currentX - firstX) > el.offsetWidth * 0.4) {
                callback(dir);
              }
            }
          });
        })(direction);
      }

      direction = null;
      el.dataset.dir = '';

      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mouseup', up);
      document.removeEventListener('touchend', up);
      document.removeEventListener('touchleave', up);
      document.removeEventListener('touchcancel', up);
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
    document.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', up);
    document.addEventListener('touchend', up);
    document.addEventListener('touchleave', up);
    document.addEventListener('touchcancel', up);

    return true;
  }

  el.addEventListener('mousedown', down);
  el.addEventListener('touchstart', down);
}

/***/ })
/******/ ]);
//# sourceMappingURL=all.js.map