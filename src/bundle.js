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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/src!./src/styles/main.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998; }\n\n.cc-revoke {\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block; }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: statuses, statusDeny, statusAllow, statusDismiss, categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statuses", function() { return statuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDeny", function() { return statusDeny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusAllow", function() { return statusAllow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDismiss", function() { return statusDismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });


const statuses = ["DENY", "ALLOW", "DISMISS"];
const statusDeny = "DENY";
const statusAllow = "ALLOW";
const statusDismiss = "DISMISS";
const categories = ["UNCATEGORIZED", "ESSENTIAL", "PERSONALIZATION", "ANALYTICS", "MARKETING"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/CookieConsent */ "./src/models/CookieConsent.js");





if (typeof exports !== 'undefined') {
  module.exports = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  window.CookieConsent = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/models/Base.js":
/*!****************************!*\
  !*** ./src/models/Base.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);




const emitter = new events__WEBPACK_IMPORTED_MODULE_1___default.a();
class Base {
  constructor(defaultOptions = {}, options = {}) {
    this.options = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(defaultOptions, options);
    this.on = emitter.on.bind(emitter);
    this.emit = emitter.emit.bind(emitter);
  }

}

/***/ }),

/***/ "./src/models/CookieConsent.js":
/*!*************************************!*\
  !*** ./src/models/CookieConsent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieConsent; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _Legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legal */ "./src/models/Legal.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/models/Location.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./src/models/Popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");







 // This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

class CookieConsent extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(options);
    const answers = _constants__WEBPACK_IMPORTED_MODULE_4__["categories"].map(category => {
      const cookieName = this.options.cookie && this.options.cookie.name ? this.options.cookie.name : 'cookieconsent_status_';
      const answer = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getCookie"])(cookieName + category);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isValidStatus"])(answer) ? {
        [category]: answer
      } : undefined;
    }).filter(obj => obj ? obj[Object.keys(obj)[0]] : false); // if they have already answered

    if (answers.length > 0) {
      setTimeout(() => this.emit("initialized", answers));
    } else if (this.options.legal && this.options.legal.countryCode) {
      this.initializationComplete({
        code: this.options.legal.countryCode
      });
    } else if (this.options.location) {
      new _Location__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.location).locate(this.initializationComplete.bind(this), this.initializationError.bind(this));
    } else {
      this.initializationComplete({});
    }
  }

  initializationComplete(result) {
    if (result.code) {
      this.options = new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).applyLaw(this.options, result.code);
    }

    this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options);
    setTimeout(() => this.emit("initialized", this.popup), 0);
  }

  initializationError(error) {
    setTimeout(() => this.emit("error", error, new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options)), 0);
  }

  getCountryLaws(countryCode) {
    return new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).get(countryCode);
  }

  isOpen() {
    return this.popup.isOpen();
  }

  close() {
    return this.popup.close(), this;
  }

  revokeChoice() {
    return this.popup.revokeChoice(), this;
  }

  open() {
    return this.popup.open(), this;
  }

  toggleRevokeButton(bool) {
    return this.popup.toggleRevokeButton(bool), this;
  }

  setStatuses(status) {
    return this.popup.setStatuses(status), this;
  }

  clearStatuses() {
    return this.popup.clearStatuses(), this;
  }

  destroy() {
    return this.popup.destroy(), this;
  }

}
_constants__WEBPACK_IMPORTED_MODULE_4__["statuses"].reduce((obj, status) => (Object.defineProperty(CookieConsent, status, {
  get: function () {
    return status;
  },
  set: function () {},
  enumerable: false,
  writeable: false,
  configurable: false
}), obj), CookieConsent);

/***/ }),

/***/ "./src/models/Legal.js":
/*!*****************************!*\
  !*** ./src/models/Legal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legal; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/legal */ "./src/options/legal.js");




class Legal extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(_options_legal__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  get(countryCode) {
    return {
      hasLaw: this.options.hasLaw.indexOf(countryCode) >= 0,
      revokable: this.options.revokable.indexOf(countryCode) >= 0,
      explicitAction: this.options.explicitAction.indexOf(countryCode) >= 0
    };
  }

  applyLaw(options, countryCode) {
    const country = this.get(countryCode);

    if (!country.hasLaw) {
      // The country has no cookie law
      options.enabled = false;
      this.emit("noCookieLaw", countryCode, country);
    }

    if (this.options.regionalLaw) {
      if (country.revokable) {
        // We must provide an option to revoke consent at a later time
        options.revokable = true;
      }

      if (country.explicitAction) {
        // The user must explicitly click the consent button
        options.dismissOnScroll = false;
        options.dismissOnTimeout = false;
      }
    }

    return options;
  }

}

/***/ }),

/***/ "./src/models/Location.js":
/*!********************************!*\
  !*** ./src/models/Location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/location */ "./src/options/location.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




 // An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

class Location extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_location__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.currentServiceIndex = -1; // the index (in options) of the service we're currently using
  }

  getNextService() {
    let service;

    do {
      service = this.getServiceByIdx(++this.currentServiceIndex);
    } while (this.currentServiceIndex < this.options.services.length && !service);

    return service;
  }

  getServiceByIdx(idx) {
    // This can either be the name of a default locationService, or a function.
    const serviceOption = this.options.services[idx]; // If it's a string, use one of the location services.

    if (typeof serviceOption === 'function') {
      const dynamicOpts = serviceOption();
      return dynamicOpts.name ? Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts)) : dynamicOpts;
    } // If it's a string, use one of the location services.


    if (typeof serviceOption === 'string') {
      return this.options.serviceDefinitions[serviceOption]();
    } // If it's an object, assume {name: 'ipinfo', ...otherOptions}
    // Allows user to pass in API keys etc.


    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(serviceOption)) {
      return this.options.serviceDefinitions[serviceOption.name](serviceOption);
    }

    return null;
  } // This runs the service located at index `currentServiceIndex`.
  // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully


  locate(complete, error) {
    const service = this.getNextService();

    if (!service) {
      error(new Error('No services to run'));
      return;
    }

    this.callbackComplete = complete;
    this.callbackError = error;
    this.runService(service, this.runNextServiceOnError.bind(this));
  } // Potentially adds a callback to a url for jsonp.


  setupUrl(service) {
    const serviceOpts = this.getCurrentServiceOpts();
    return service.url.replace(/\{(.*?)\}/g, function (_, param) {
      if (param === 'callback') {
        const tempName = 'callback' + Date.now();

        window[tempName] = function (res) {
          service.__JSONP_DATA = JSON.stringify(res);
        };

        return tempName;
      }

      if (param in serviceOpts.interpolateUrl) {
        return serviceOpts.interpolateUrl[param];
      }
    });
  } // requires a `service` object that defines at least a `url` and `callback`


  runService(service, complete) {
    // basic check to ensure it resembles a `service`
    if (!service || !service.url || !service.callback) {
      return;
    } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


    const requestFunction = service.isScript ? _utils__WEBPACK_IMPORTED_MODULE_2__["getScript"] : _utils__WEBPACK_IMPORTED_MODULE_2__["makeAsyncRequest"]; // both functions have similar signatures so we can pass the same arguments to both

    requestFunction(this.setupUrl(service), xhr => {
      // if `!xhr`, then `getScript` function was used, so there is no response text
      let responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
      // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
      // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

      if (service.__JSONP_DATA) {
        responseText = service.__JSONP_DATA;
        delete service.__JSONP_DATA;
      } // call the service callback with the response text (so it can parse the response)


      this.runServiceCallback.call(this, complete, service, responseText);
    }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
  } // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
  // We need to run its callback which determines if its successful or not
  // `complete` is called on success or failure


  runServiceCallback(complete, service, responseText) {
    // this is the function that is called if the service uses the async callback in its handler method
    const serviceResultHandler = asyncResult => {
      // if `result` is a valid value, then this function shouldn't really run
      // even if it is called by `service.callback`
      if (!result) {
        this.onServiceResult(complete, asyncResult);
      }
    }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
    // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


    const result = service.callback(serviceResultHandler, responseText);

    if (result) {
      this.onServiceResult(complete, result);
    }
  } // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
  // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data


  onServiceResult(complete, result) {
    // convert result to nodejs style async callback
    if (result instanceof Error || result && result.error) {
      complete.call(this, result, null);
    } else {
      complete.call(this, null, result);
    }
  } // if `err` is set, the next service handler is called
  // if `err` is null, the `onComplete` handler is called with `data`


  runNextServiceOnError(err, data) {
    if (err) {
      this.logError(err);
      const nextService = this.getNextService();

      if (nextService) {
        this.runService(nextService, this.runNextServiceOnError.bind(this));
      } else {
        this.completeService.call(this, this.callbackError, new Error('All services failed'));
      }
    } else {
      this.completeService.call(this, this.callbackComplete, data);
    }
  }

  getCurrentServiceOpts() {
    const val = this.options.services[this.currentServiceIndex];

    if (typeof val == 'string') {
      return {
        name: val
      };
    } else if (typeof val == 'function') {
      return val();
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val)) {
      return val;
    } else {
      return {};
    }
  } // calls the `onComplete` callback after resetting the `currentServiceIndex`


  completeService(fn, data) {
    this.currentServiceIndex = -1;
    fn && fn(data);
  }

  logError(err) {
    console.warn(`The service[${this.currentServiceIndex}] (${this.getServiceByIdx(this.currentServiceIndex).url}) responded with the following error`, err);
  }

}

/***/ }),

/***/ "./src/models/Popup.js":
/*!*****************************!*\
  !*** ./src/models/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/popup */ "./src/options/popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






class Popup extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_popup__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.userCategories = {
      UNCATEGORIZED: 'DISMISS',
      ESSENTIAL: 'ALLOW',
      PERSONALIZATION: 'DISMISS',
      ANALYTICS: 'DISMISS',
      MARKETING: 'DISMISS'
    };
    this.customStyles = {};
    this.hasTransition = !!function () {
      const el = document.createElement('div');
      const trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      };

      for (let prefix in trans) {
        if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] !== 'undefined') {
          return trans[prefix];
        }
      }

      return '';
    }(); // returns true if `onComplete` was called

    if (this.canUseCookies()) {
      // user has already answered
      this.options.enabled = false;
    } // apply blacklist / whitelist


    if (this.options.blacklistPage.includes(location.pathname)) {
      this.options.enabled = false;
    }

    if (this.options.whitelistPage.includes(location.pathname)) {
      this.options.enabled = true;
    } // the full markup either contains the wrapper or it does not (for multiple instances)


    let cookiePopup = this.options.window.replace('{{classes}}', this.getPopupClasses().join(' ')).replace('{{children}}', this.getPopupInnerMarkup()); // if user passes html, use it instead

    const customHTML = this.options.overrideHTML;

    if (typeof customHTML == 'string' && customHTML.length) {
      cookiePopup = customHTML;
    } // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content


    if (this.options.static) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      const wrapper = this.appendMarkup(`<div class="cc-grower">${cookiePopup}</div>`);
      wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

      this.element = wrapper.firstChild; // get the `element` reference from the wrapper

      this.element.style.display = 'none';
      this.element.classList.add('cc-invisible');
    } else {
      this.element = this.appendMarkup(cookiePopup);
    }

    this.applyAutoDismiss();
    this.applyRevokeButton();

    if (this.options.autoOpen) {
      this.autoOpen();
    }
  }

  open() {
    if (!this.element) return;

    if (!this.isOpen()) {
      if (this.hasTransition) {
        this.fadeIn();
      } else {
        this.element.style.display = '';
      }

      if (this.options.revokable) {
        this.toggleRevokeButton();
      }

      this.emit("popupOpened");
    }

    return this;
  }

  close(showRevoke) {
    if (!this.element) return;

    if (this.isOpen()) {
      if (this.hasTransition) {
        this.fadeOut();
      } else {
        this.element.style.display = 'none';
      }

      if (showRevoke && this.options.revokable) {
        this.toggleRevokeButton(true);
      }

      this.emit("popupClosed");
    }

    return this;
  }

  fadeIn() {
    const el = this.element;
    if (!this.hasTransition || !el) return; // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
    // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
    // has a chance to run, then we run it ourselves

    if (this.afterTransition) {
      this.afterFadeOut(el);
    }

    if (el.classList.contains('cc-invisible')) {
      el.style.display = '';

      if (this.options.static) {
        this.element.parentNode.style.maxHeight = this.element.clientHeight + 'px';
      }

      const fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below
      // Although most browsers can handle values less than 20ms, it should remain above this value.
      // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
      // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
      // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
      // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway

      this.openingTimeout = setTimeout(() => this.afterFadeIn(el), fadeInTimeout);
    }
  }
  /**
   * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
   * There is a good reason why it's called in a timeout. Read 'fadeIn'
   */


  afterFadeIn(element) {
    this.openingTimeout = null;
    element.classList.remove('cc-invisible');
  }

  fadeOut() {
    if (!this.hasTransition || !this.element) return;

    if (this.openingTimeout) {
      clearTimeout(this.openingTimeout);
      this.afterFadeIn(this.element);
    }

    if (!this.element.classList.contains('cc-invisible')) {
      if (this.options.static) {
        this.element.parentNode.style.maxHeight = '';
      }

      this.afterTransition = () => this.afterFadeOut(this.element);

      this.element.addEventListener(this.transitionEnd, this.afterTransition);
      this.element.classList.add('cc-invisible');
    }
  }

  afterFadeOut(el) {
    el.style.display = 'none'; // after close and before open, the display should be none

    el.removeEventListener(this.transitionEnd, this.afterTransition);
    this.afterTransition = null;
  }

  isOpen() {
    return this.element && this.element.style.display === '' && (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
  }

  toggleRevokeButton(show) {
    if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
  }

  revokeChoice(preventOpen) {
    this.options.enabled = true;
    this.clearStatuses();
    this.emit("revokeChoice");

    if (!preventOpen) {
      this.autoOpen();
    }
  }
  /**
   * Has the user responded to the banner
   * @return { boolean } - true if any cookies have been set
   */


  hasAnswered() {
    return this.getStatuses().some(status => !!status);
  }
  /**
   * Indicates if the user has given consent to all of the categories
   * @return { array<boolean> } - true if consent has been given
   */


  hasConsented() {
    return this.getStatuses().map(status => status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"] || status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
  } // opens the popup if no answer has been given


  autoOpen() {
    const hasAnswered = this.hasAnswered();

    if (!hasAnswered && this.options.enabled) {
      this.open();
    } else if (hasAnswered && this.options.revokable) {
      this.toggleRevokeButton(true);
    }
  }
  /** 
   * Set's cookie statuses
   * @param { string<status> } allOrUndef      - If this is the only param, set ALL if not, set Uncategorized cookies statuses set to value.
   * @param { string<status> } essential       - Essential Cookies status set to value
   * @param { string<status> } personalization - Preferences / Functionality set to value
   * @param { string<status> } analytics       - Analytis Cookies status set to value
   * @param { string<status> } marketing       - Marketing Cookies status set to value
   * @return { undefined }
  */


  setStatuses() {
    const {
      name,
      expiryDays,
      domain,
      path,
      secure
    } = this.options.cookie; // if `status` is valid

    const updateCategoryStatus = (categoryName, status) => {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)) {
        const cookieName = name + '_' + categoryName;
        const chosenBefore = _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].indexOf(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(cookieName)) >= 0;
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(cookieName, status, expiryDays, domain, path, secure);
        this.emit("statusChanged", cookieName, status, chosenBefore);
      } else {
        this.clearStatuses();
      }
    };

    if (arguments.length === 0) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category, this.userCategories[category]));
    } else if (arguments.length === 1) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category, arguments[0]));
    } else if (arguments.length > 1) {
      arguments.forEach((categoryStatus, index) => {
        updateCategoryStatus(this.userCategories[index], categoryStatus);
      });
    }
  }
  /**
   * Get all cookie categoies statuses
   * @return { array<string> } - cookie categories status in order of categories
   */


  getStatuses() {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].map(categoryName => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(this.options.cookie.name + '_' + categoryName));
  }
  /**
   * Clear all cookie categoies statuses
   */


  clearStatuses() {
    const {
      name,
      domain,
      path
    } = this.options.cookie;
    _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(categoryName => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(name + '_' + categoryName, '', -1, domain, path);
    });
  }

  canUseCookies() {
    if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
      return true;
    }

    const statusesValues = this.getStatuses();
    const matches = statusesValues.map((status, index) => ({
      [_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]]: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)
    }));
    const hasMatches = matches.filter(match => match[Object.keys(match)[0]]).length > 0;
    statusesValues.forEach((status, index) => this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]] === status ? status : this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]]);
    return hasMatches;
  } // top, bottom, left, right


  getPositionClasses() {
    return this.options.position.split('-').map(pos => 'cc-' + pos);
  }

  getPopupClasses() {
    const opts = this.options;
    let positionStyle = opts.position == 'top' || opts.position == 'bottom' ? 'banner' : 'floating';

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])() && opts.mobileForceFloat) {
      positionStyle = 'floating';
    }

    const classes = ['cc-' + positionStyle, // floating or banner
    'cc-type-' + opts.type, // add the compliance type
    'cc-theme-' + opts.theme];

    if (opts.static) {
      classes.push('cc-static');
    }

    classes.push.apply(classes, this.getPositionClasses()); // we only add extra styles if `palette` has been set to a valid value

    this.attachCustomPalette(this.options.palette); // if we override the palette, add the class that enables this

    if (this.customStyleSelector) {
      classes.push(this.customStyleSelector);
    }

    return classes;
  }

  getPopupInnerMarkup() {
    const interpolated = {};
    const opts = this.options; // removes link if showLink is false

    if (!opts.showLink) {
      opts.elements.link = '';
      opts.elements.messagelink = opts.elements.message;
    }

    Object.keys(opts.elements).forEach(prop => {
      interpolated[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(opts.elements[prop], name => {
        const str = opts.content[name];
        return name && typeof str == 'string' && str.length ? str : '';
      });
    }); // checks if the type is valid and defaults to info if it's not

    let complianceType = opts.compliance[opts.type];

    if (!complianceType) {
      complianceType = opts.compliance.info;
    } // build the compliance types from the already interpolated `elements`


    interpolated.compliance = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(complianceType, name => interpolated[name]); // checks if the layout is valid and defaults to basic if it's not

    let layout = opts.layouts[opts.layout];

    if (!layout) {
      layout = opts.layouts.basic;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(layout, match => interpolated[match]);
  }

  appendMarkup(markup) {
    const opts = this.options;
    const div = document.createElement('div');
    const cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
    div.innerHTML = markup;
    const el = div.children[0];
    el.style.display = 'none';

    if (el.classList.contains('cc-window') && this.hasTransition) {
      el.classList.add('cc-invisible');
    }

    el.addEventListener('click', event => this.handleButtonClick(event));
    el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.userCategories[checkbox.name.toUpperCase()] = checkbox.checked ? 'ALLOW' : 'DENY';
      });
      checkbox.addEventListener('click', event => event.stopPropagation());
    });
    el.querySelectorAll(".cc-info").forEach(showInfo => {
      showInfo.addEventListener('mousedown', function (event) {
        if (this === document.activeElement) {
          this.blur();
          event.preventDefault();
        }
      });
    });

    if (opts.autoAttach) {
      try {
        if (!cont.firstChild) {
          cont.appendChild(el);
        } else {
          cont.insertBefore(el, cont.firstChild);
        }
      } catch (error) {
        throw new Error("No container to attach too. Make sure the DOM has loaded. Is your script loaded just before the `</body>` tag?");
      }
    }

    return el;
  }

  handleButtonClick(event) {
    // returns the parent element with the specified class, or the original element - null if not found
    const btn = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;

    if (btn.classList.contains('cc-btn') && btn.classList.contains('cc-save')) {
      this.setStatuses();
      this.close(true);
    }

    if (btn.classList.contains('cc-btn')) {
      const matches = btn.className.match(new RegExp('\\bcc-(' + _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].map(str => str.toLowerCase().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')).join('|') + ')\\b'));
      const match = matches && matches[1] || false;

      if (match) {
        this.setStatuses(match);
        this.close(true);
      }
    }

    if (btn.classList.contains('cc-close')) {
      this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
      this.close(true);
    }

    if (btn.classList.contains('cc-revoke')) {
      this.revokeChoice();
    }
  }

  attachCustomPalette(palette) {
    const hashStr = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hash"])(JSON.stringify(palette));
    const selector = 'cc-color-override-' + hashStr;
    const isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(palette);
    this.customStyleSelector = isValid ? selector : null;

    if (isValid) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["addCustomStylesheet"])(hashStr, palette, '.' + selector);
    }

    return isValid;
  }

  getEventPath(event) {
    const path = event.composedPath ? event.composedPath() : function (arr, element) {
      while (element) {
        arr.push(element);
        element = element.parentNode;
      }

      return arr;
    }([], event.target);

    if (!path) {
      console.warn("'.path' & '.composedPath' failed to generate an event path.");
      return;
    }

    return path;
  }

  applyAutoDismiss() {
    const {
      enabled,
      dismissOnTimeout: delay,
      dismissOnScroll: scrollRange,
      dismissOnLinkClick,
      dismissOnWindowClick,
      dismissOnKeyPress
    } = this.options;

    if (enabled) {
      if (typeof delay == 'number' && delay >= 0) {
        this.dismissTimeout = setTimeout(() => {
          this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
          this.close(true);
        }, Math.floor(delay));
      } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
        this.onWindowScroll = () => {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('scroll', this.onWindowScroll, {
              passive: true
            });
            this.onWindowScroll = null;
          }
        };

        window.addEventListener('scroll', this.onWindowScroll, {
          passive: true
        });
      } else if (dismissOnWindowClick) {
        this.onWindowClick = evt => {
          if (!getEventPath(evt).some(element => this.options.ignoreClicksFrom.some(ignoredClick => element.classList && element.classList.contains(ignoredClick)))) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onWindowClick);
            window.removeEventListener('touchend', this.onWindowClick);
            this.onWindowClick = null;
          }
        };

        window.addEventListener('click', this.onWindowClick);
        window.addEventListener('touchend', this.onWindowClick);
      } else if (dismissOnLinkClick) {
        this.onLinkClick = evt => {
          if (getEventPath(evt).some(elem => typeof elem.tagName !== 'undefined' && elem.tagName === 'A')) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onLinkClick);
            this.onLinkClick = null;
          }
        };

        window.addEventListener('click', this.onLinkClick);
      } else if (dismissOnKeyPress) {
        this.onKeyPress = event => {
          const {
            keyCode
          } = event;

          if (keyCode === 13) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"]);
            this.close(true);
          } else if (keyCode === 27) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
          }
        };

        window.addEventListener('onkeypress', this.onKeyPress);
      }
    }
  }

  applyRevokeButton() {
    // revokable is true if advanced compliance is selected
    if (this.options.type != 'info') this.options.revokable = true; // animateRevokable false for mobile devices

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])()) this.options.animateRevokable = false;

    if (this.options.revokable) {
      const classes = this.getPositionClasses();

      if (this.options.animateRevokable) {
        classes.push('cc-animate');
      }

      if (this.customStyleSelector) {
        classes.push(this.customStyleSelector);
      }

      if (this.options.theme) {
        classes.push('cc-theme-' + this.options.theme);
      }

      console.log(this.options.content.policy);
      const revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' ')).replace('{{policy}}', this.options.content.policy);
      this.revokeBtn = this.appendMarkup(revokeBtn);
      const btn = this.revokeBtn;

      if (this.options.animateRevokable) {
        const onMouseMove = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (evt) {
          let active = false;
          const minY = 20;
          const maxY = window.innerHeight - 20;

          if (btn.classList.contains('cc-top') && evt.clientY < minY || btn.classList.contains('cc-bottom') && evt.clientY > maxY) {
            active = true;
          }

          if (active && !btn.classList.contains('cc-active')) {
            btn.classList.add('cc-active');
          } else if (!active && btn.classList.contains('cc-active')) {
            btn.classList.remove('cc-active');
          }
        }, 200);
        this.onMouseMove = onMouseMove;
        window.addEventListener('mousemove', onMouseMove);
      }
    }
  }

  destroy() {
    console.warn("Destroying...");

    if (this.element) {
      this.element.remove();
    }

    if (this.revokeBtn) {
      this.revokeBtn.remove();
    }

    if (this.onWindowScroll) {
      window.removeEventListener('scroll', this.onWindowScroll);
    }

    if (this.onWindowClick) {
      window.removeEventListener('click', this.onWindowClick);
      window.removeEventListener('touchend', this.onWindowClick);
    }

    if (this.onLinkClick) {
      window.removeEventListener('click', this.onLinkClick);
    }

    if (this.onKeyPress) {
      window.addEventListener('onkeypress', this.onKeyPress);
    }
  }

}

/***/ }),

/***/ "./src/options/legal.js":
/*!******************************!*\
  !*** ./src/options/legal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  // Make this false if you want to disable all regional overrides for settings.
  // If true, options can differ by country, depending on their cookie law.
  // It does not affect hiding the popup for countries that do not have cookie law.
  regionalLaw: true,
  // countries that enforce some version of a cookie law
  hasLaw: ['AT', 'BE', 'BG', 'HR', 'CZ', 'CY', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'SK', 'ES', 'SE', 'GB', 'UK', 'GR', 'EU', 'RO'],
  // countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
  revokable: ['HR', 'CY', 'DK', 'EE', 'FR', 'DE', 'LV', 'LT', 'NL', 'NO', 'PT', 'ES'],
  // countries that say that a person can only "consent" if the explicitly click on "I agree".
  // in these countries, consent cannot be implied via a timeout or by scrolling down the page
  explicitAction: ['HR', 'IT', 'ES', 'NO']
});

/***/ }),

/***/ "./src/options/location.js":
/*!*********************************!*\
  !*** ./src/options/location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const toError = obj => new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);

/* harmony default export */ __webpack_exports__["default"] = ({
  // The default timeout is 5 seconds. This is mainly needed to catch JSONP requests that error.
  // Otherwise there is no easy way to catch JSONP errors. That means that if a JSONP fails, the
  // app will take `timeout` milliseconds to react to a JSONP network error.
  timeout: 5000,
  // the order that services will be attempted in
  services: ['ipinfo'
  /*
   // 'ipinfodb' requires some options, so we define it using an object
  // this object will be passed to the function that defines the service
   {
    name: 'ipinfodb',
    interpolateUrl: {
      // obviously, this is a fake key
      api_key: 'vOgI3748dnIytIrsJcxS7qsDf6kbJkE9lN4yEDrXAqXcKUNvjjZPox3ekXqmMMld'
    },
  },
   // as well as defining an object, you can define a function that returns an object
   function () {
    return {name: 'ipinfodb'}
  },
   */
  ],
  serviceDefinitions: {
    ipinfo: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//ipinfo.io',
        headers: ['Accept: application/json'],
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return json.error ? toError(json) : {
              code: json.country
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    // This service requires an option to define `key`. Options are proived using objects or functions
    ipinfodb: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
        isScript: true,
        // this is JSONP, therefore we must set it to run as a script
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return json.statusCode == 'ERROR' ? toError({
              error: json.statusMessage
            }) : {
              code: json.countryCode
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    maxmind: function () {
      return {
        // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
        // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
        url: '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
        isScript: true,
        // this service responds with a JavaScript file, so it must be run as a script
        callback: function (done) {
          // if everything went okay then `geoip2` WILL be defined
          if (!window.geoip2) {
            done(new Error('Unexpected response format. The downloaded script should have exported `geoip2` to the global scope'));
            return;
          }

          geoip2.country(function (location) {
            try {
              done({
                code: location.country.iso_code
              });
            } catch (err) {
              done(toError(err));
            }
          }, function (err) {
            done(toError(err));
          }); // We can't return anything, because we need to wait for the second AJAX call to return.
          // Then we can 'complete' the service by passing data or an error to the `done` callback.
        }
      };
    }
  }
});

/***/ }),

/***/ "./src/options/popup.js":
/*!******************************!*\
  !*** ./src/options/popup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  // if false, this prevents the popup from showing (useful for giving to control to another piece of code)
  enabled: true,
  // optional (expecting a HTML element) if passed, the popup is appended to this element. default is `document.body`
  container: null,
  // defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
  cookie: {
    // This is the name of this cookie - you can ignore this
    name: 'cookieconsent_status',
    // This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
    path: '/',
    // This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
    //  - Guide to cookie domains - https://www.mxsasha.eu/blog/2014/03/04/definitive-guide-to-cookie-domains/
    domain: '',
    // The cookies expire date, specified in days (specify -1 for no expiry)
    expiryDays: 365,
    // If true the cookie will be created with the secure flag. Secure cookies will only be transmitted via HTTPS.
    secure: false
  },
  // each item defines the inner text for the element that it references
  content: {
    header: 'Cookies used on the website!',
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    allow: 'Allow cookies',
    deny: 'Decline',
    link: 'Learn more',
    href: 'https://www.cookiesandyou.com',
    close: '&#x274c',
    target: '_blank',
    policy: 'Cookie Policy'
  },
  // This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
  // You can remove "{{header}}" and write the content directly inside the HTML if you want.
  //
  //  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
  //    and to set the focus to the first interactive control (https://w3c.github.io/using-aria/)
  elements: {
    header: '<span class="cc-header">{{header}}</span>&nbsp',
    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
    dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
    allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
    deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
    categories: ` 
      <ul class="cc-categories">
        <li class="cc-category">
          <button class="cc-btn" tabindex="0"><input type="checkbox" name="uncategorized"/><span class="cc-btn-checkbox"></span>Uncategorized</button>
          <button class="cc-btn cc-info" aria-label="Uncategorized Definition Button" tabindex="1">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies that don't fit any other category.</p>
          </div>
        </li>
        <li class="cc-category">
          <button class="cc-btn" tabindex="2"><input type="checkbox" name="essential" checked disabled/><span class="cc-btn-checkbox"></span>Essential</button>
          <button class="cc-btn cc-info" aria-label="Essential Definition Button" tabindex="3">^</button>
          <div class="cc-tooltip">
            <p>This is the category for essential application or website opperation cookies.</p>
          </div>
        </li>
        <li class="cc-category">
          <button class="cc-btn" tabindex="4"><input type="checkbox" name="personalization"/><span class="cc-btn-checkbox"></span>Personalization</button>
          <button class="cc-btn cc-info" aria-label="Personalization Definition Button" tabindex="5">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies used to help peronalize the application to a specific user.</p>
          </div>
        </li>
        <li class="cc-category">
          <button class="cc-btn" tabindex="6"><input type="checkbox" name="analytics"/><span class="cc-btn-checkbox"></span>Analytics</button>
          <button class="cc-btn cc-info" aria-label="Analytics Definition Button" tabindex="7">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies used to help analyize data.</p>
          </div>
        </li>
        <li class="cc-category">
          <button class="cc-btn" tabindex="8"><input type="checkbox" name="marketing"/><span class="cc-btn-checkbox"></span>Marketing</button>
          <button class="cc-btn cc-info" aria-label="Marketing Definition Button" tabindex="9">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies used to help peronalize your internet shopping & advertisement experiences.</p>
          </div>
        </li>
      </ul>
    `,
    save: `<button class="cc-btn cc-save">Save</button>` //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

  },
  // The placeholders {{classes}} and {{children}} both get replaced during initialisation:
  //  - {{classes}} is where additional classes get added
  //  - {{children}} is where the HTML children are placed
  window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
  modal: '',
  // This is the html for the revoke button. This only shows up after the user has selected their level of consent
  // It can be enabled of disabled using the `revokable` option
  revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
  // define types of 'compliance' here. '{{value}}' strings in here are linked to `elements`
  compliance: {
    info: '<div class="cc-compliance">{{dismiss}}</div>',
    'opt-in': '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}{{customize}}</div>',
    'opt-out': '<div class="cc-compliance cc-highlight">{{dismiss}}{{deny}}</div>',
    categories: '<div class="form">{{categories}}{{save}}</div>'
  },
  // select your type of popup here
  type: 'info',
  // refers to `compliance` (in other words, the buttons that are displayed)
  // define layout layouts here
  layouts: {
    // the 'block' layout tend to be for square floating popups
    basic: '{{messagelink}}{{compliance}}',
    'basic-close': '{{messagelink}}{{compliance}}{{close}}',
    'basic-header': '{{header}}{{message}}{{link}}{{compliance}}' // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
    //'my-cool-layout': '<div class="my-special-layout">{{message}}{{compliance}}</div>{{close}}',

  },
  // default layout (see above)
  layout: 'basic',
  // this refers to the popup windows position. we currently support:
  //  - banner positions: top, bottom
  //  - floating positions: top-left, top-right, bottom-left, bottom-right
  //
  // adds a class `cc-floating` or `cc-banner` which helps when styling
  position: 'bottom',
  // default position is 'bottom'
  // Available styles
  //    -block (default, no extra classes)
  //    -edgeless
  //    -classic
  // use your own style name and use `.cc-theme-STYLENAME` class in CSS to edit.
  // Note: style "wire" is used for the configurator, but has no CSS styles of its own, only palette is used.
  theme: 'block',
  // The popup is `fixed` by default, but if you want it to be static (inline with the page content), set this to false
  // Note: by default, we animate the height of the popup from 0 to full size
  static: false,
  // if you want custom colours, pass them in here. this object should look like this.
  // ideally, any custom colours/themes should be created in a separate style sheet, as this is more efficient.
  //   {
  //     popup: {background: '#000000', text: '#fff', link: '#fff'},
  //     button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'},
  //     highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'},
  //   }
  // `highlight` is optional and extends `button`. if it exists, it will apply to the first button
  // only background needs to be defined for every element. if not set, other colors can be calculated from it
  palette: null,
  // Some countries REQUIRE that a user can change their mind. You can configure this yourself.
  // Most of the time this should be false, but the `cookieconsent.legal` can change this to `true` if it detects that it should
  revokable: false,
  // if true, the revokable button will tranlate in and out
  animateRevokable: true,
  // used to disable link on existing layouts
  // replaces element messagelink with message and removes content of link
  showLink: true,
  // set value as scroll range to enable
  dismissOnScroll: false,
  // set value as time in milliseconds to autodismiss after set time
  dismissOnTimeout: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnWindowClick: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnLinkClick: false,
  // set value as keys are pressed, ( allowKeyCode = 13, denyKeyCode = 27 )
  dismissOnKeyPress: false,
  // If `dismissOnWindowClick` is true, we can click on 'revoke' and we'll still dismiss the banner, so we need exceptions.
  // should be an array of class names (not CSS selectors)
  ignoreClicksFrom: ['cc-revoke', 'cc-btn', 'cc-link'],
  // already includes the revoke button and the banner itself
  // The application automatically decide whether the popup should open.
  // Set this to false to prevent this from happening and to allow you to control the behaviour yourself
  autoOpen: true,
  // By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
  // by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
  //
  //     const instance = cookieconsent.factory(options)
  //     document.body.appendChild(instance.element)
  //
  autoAttach: true,
  // set value if floating layout should be forced for mobile devices
  mobileForceFloat: true,
  // simple whitelist/blacklist for pages. specify page by:
  //   - using a string : '/index.html'           (matches '/index.html' exactly) OR
  //   - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
  whitelistPage: [],
  blacklistPage: [],
  // If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
  // Be sure to use the classes `cc-btn` and `cc-allow`, `cc-deny` or `cc-dismiss`. They enable the app to register click
  // handlers. You can use other pre-existing classes too. See `src/styles` folder.
  overrideHTML: null
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/src!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/utils/async.js":
/*!****************************!*\
  !*** ./src/utils/async.js ***!
  \****************************/
/*! exports provided: getScript, makeAsyncRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });


const getScript = (url, callback, timeout) => {
  let timeoutIdx;
  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/' + (url.type || 'javascript');
  scriptTag.src = url.src || url;
  scriptTag.async = false;

  scriptTag.onreadystatechange = s.onload = function () {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    const state = scriptTag.readyState;
    clearTimeout(timeoutIdx);

    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true;
      callback();
      scriptTag.onreadystatechange = scriptTag.onload = null;
    }
  };

  document.body.appendChild(scriptTag); // You can't catch JSONP Errors, because it's handled by the script tag
  // one way is to use a timeout

  timeoutIdx = setTimeout(function () {
    callback.done = true;
    callback();
    scriptTag.onreadystatechange = scriptTag.onload = null;
  }, timeout);
};
const makeAsyncRequest = (url, onComplete, timeout, postData, requestHeaders) => {
  const xhr = new (window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');
  xhr.open(postData ? 'POST' : 'GET', url, 1);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  if (Array.isArray(requestHeaders)) {
    for (let i = 0, l = requestHeaders.length; i < l; ++i) {
      const split = requestHeaders[i].split(':', 2);
      xhr.setRequestHeader(split[0].replace(/^\s+|\s+$/g, ''), split[1].replace(/^\s+|\s+$/g, ''));
    }
  }

  if (typeof onComplete == 'function') {
    xhr.onreadystatechange = function () {
      if (xhr.readyState > 3) {
        onComplete(xhr);
      }
    };
  }

  xhr.send(postData);
};

/***/ }),

/***/ "./src/utils/cookie.js":
/*!*****************************!*\
  !*** ./src/utils/cookie.js ***!
  \*****************************/
/*! exports provided: getCookie, setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });


const getCookie = name => {
  const value = ' ' + document.cookie;
  const parts = value.split(' ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};
const setCookie = (name, value, expiryDays, domain, path, secure) => {
  const exdate = new Date();
  exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
  document.cookie = name + '=' + value + ';expires=' + exdate.toUTCString() + ';path=' + (path || '/') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
};

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: traverseDOMPath, addCustomStylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");



const traverseDOMPath = (elem, className) => !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
const addCustomStylesheet = (id, palette, prefix) => {
  const colorStyles = {};
  const {
    popup,
    button,
    highlight,
    saveButton
  } = palette; // needs background colour, text and link will be set to black/white if not specified

  if (popup) {
    // assumes popup.background is set
    popup.text = popup.text ? popup.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(popup.background);
    popup.link = popup.link ? popup.link : popup.text;
    colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

    if (button) {
      // assumes button.background is set
      button.text = button.text ? button.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(button.background);
      button.border = button.border ? button.border : 'transparent';
      colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

      if (button.padding) {
        colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
      }

      if (button.background != 'transparent') {
        colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_style__WEBPACK_IMPORTED_MODULE_0__["getHoverColor"])(button.background))];
      }

      if (highlight) {
        //assumes highlight.background is set
        highlight.text = highlight.text ? highlight.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(highlight.background);
        highlight.border = highlight.border ? highlight.border : 'transparent';
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
      } else {
        // sets highlight text color to popup text. background and border are transparent by default.
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
      }
    }

    if (saveButton) {
      colorStyles[`${prefix} .cc-btn.cc-save`] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
    }
  } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


  const style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  Object.entries(colorStyles).forEach(([prop, value], index) => style.sheet.insertRule(`${prop}{${value.join(';')}}`, index));
  return style;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getCookie, setCookie, interpolateString, throttle, hash, normalizeHex, getContrast, getLuminance, getHoverColor, traverseDOMPath, addCustomStylesheet, isValidStatus, isPlainObject, isMobile, getScript, makeAsyncRequest, mergeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return interpolateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./src/utils/cookie.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/utils/validation.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ "./src/utils/async.js");



const getCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"];
const setCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["setCookie"];
const interpolateString = (str, callback) => str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, (matches, replaced) => callback(replaced) || ''); // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)

const throttle = (callback, limit) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback(...arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}; // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)

const hash = str => {
  let hashNum = 0,
      i = 0,
      chr,
      len = str.length;
  if (str.length === 0) return hashNum;

  for (i; i < len; ++i) {
    chr = str.charCodeAt(i);
    hashNum = (hashNum << 5) - hashNum + chr;
    hashNum |= 0;
  }

  return hashNum;
};

const normalizeHex = _style__WEBPACK_IMPORTED_MODULE_1__["normalizeHex"];
const getContrast = _style__WEBPACK_IMPORTED_MODULE_1__["getContrast"];
const getLuminance = _style__WEBPACK_IMPORTED_MODULE_1__["getLuminance"];
const getHoverColor = _style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"];

const traverseDOMPath = _dom__WEBPACK_IMPORTED_MODULE_2__["traverseDOMPath"];
const addCustomStylesheet = _dom__WEBPACK_IMPORTED_MODULE_2__["addCustomStylesheet"];

const isValidStatus = _validation__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"];
const isPlainObject = _validation__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"];
const isMobile = _validation__WEBPACK_IMPORTED_MODULE_3__["isMobile"];

const getScript = _async__WEBPACK_IMPORTED_MODULE_4__["getScript"];
const makeAsyncRequest = _async__WEBPACK_IMPORTED_MODULE_4__["makeAsyncRequest"];

const loopProperties = overwrites => (obj, [key, value]) => {
  if (value instanceof Object && !(value instanceof Array)) {
    if (overwrites[key] instanceof Object && !(overwrites[key] instanceof Array)) {
      obj[key] = Object.entries(value).reduce(loopProperties(overwrites[key]), {});
    } else {
      obj[key] = value;
    }
  } else {
    if (overwrites.hasOwnProperty(key)) {
      obj[key] = overwrites[key];
    } else {
      obj[key] = value;
    }
  }

  return obj;
};

const mergeOptions = (defaults, overwrites) => Object.entries(defaults).reduce(loopProperties(overwrites), {});

/***/ }),

/***/ "./src/utils/style.js":
/*!****************************!*\
  !*** ./src/utils/style.js ***!
  \****************************/
/*! exports provided: normalizeHex, getContrast, getLuminance, getHoverColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });


const normalizeHex = hex => hex[0] == '#' ? hex.substr(1) : hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex; // used to get text colors if not set

const getContrast = hex => {
  hex = normalizeHex(hex);
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}; // used to change color on highlight

const getLuminance = hex => {
  const num = parseInt(normalizeHex(hex), 16),
        amt = 38,
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00ff) + amt,
        G = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};
const getHoverColor = hex => {
  hex = normalizeHex(hex); // for black buttons

  return hex === '000000' ? '#222' : getLuminance(hex);
};

/***/ }),

/***/ "./src/utils/validation.js":
/*!*********************************!*\
  !*** ./src/utils/validation.js ***!
  \*********************************/
/*! exports provided: isValidStatus, isMobile, isPlainObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

const isValidStatus = status => _constants__WEBPACK_IMPORTED_MODULE_0__["statuses"].indexOf(status) >= 0;
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // The code "typeof obj === 'object' && obj !== null" allows Array objects

const isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.constructor == Object;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9CYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llQ29uc2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0xlZ2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9sZWdhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9hNDNjIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6WyJzdGF0dXNlcyIsInN0YXR1c0RlbnkiLCJzdGF0dXNBbGxvdyIsInN0YXR1c0Rpc21pc3MiLCJjYXRlZ29yaWVzIiwiZXhwb3J0cyIsIm1vZHVsZSIsIkNvb2tpZUNvbnNlbnQiLCJ3aW5kb3ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiQmFzZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdE9wdGlvbnMiLCJvcHRpb25zIiwibWVyZ2VPcHRpb25zIiwib24iLCJiaW5kIiwiZW1pdCIsImFuc3dlcnMiLCJtYXAiLCJjYXRlZ29yeSIsImNvb2tpZU5hbWUiLCJjb29raWUiLCJuYW1lIiwiYW5zd2VyIiwiZ2V0Q29va2llIiwiaXNWYWxpZFN0YXR1cyIsInVuZGVmaW5lZCIsImZpbHRlciIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwibGVnYWwiLCJjb3VudHJ5Q29kZSIsImluaXRpYWxpemF0aW9uQ29tcGxldGUiLCJjb2RlIiwibG9jYXRpb24iLCJMb2NhdGlvbiIsImxvY2F0ZSIsImluaXRpYWxpemF0aW9uRXJyb3IiLCJyZXN1bHQiLCJMZWdhbCIsImFwcGx5TGF3IiwicG9wdXAiLCJQb3B1cCIsImVycm9yIiwiZ2V0Q291bnRyeUxhd3MiLCJnZXQiLCJpc09wZW4iLCJjbG9zZSIsInJldm9rZUNob2ljZSIsIm9wZW4iLCJ0b2dnbGVSZXZva2VCdXR0b24iLCJib29sIiwic2V0U3RhdHVzZXMiLCJzdGF0dXMiLCJjbGVhclN0YXR1c2VzIiwiZGVzdHJveSIsInJlZHVjZSIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiZW51bWVyYWJsZSIsIndyaXRlYWJsZSIsImNvbmZpZ3VyYWJsZSIsImhhc0xhdyIsImluZGV4T2YiLCJyZXZva2FibGUiLCJleHBsaWNpdEFjdGlvbiIsImNvdW50cnkiLCJlbmFibGVkIiwicmVnaW9uYWxMYXciLCJkaXNtaXNzT25TY3JvbGwiLCJkaXNtaXNzT25UaW1lb3V0IiwiY3VycmVudFNlcnZpY2VJbmRleCIsImdldE5leHRTZXJ2aWNlIiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsInNlcnZpY2VzIiwiaWR4Iiwic2VydmljZU9wdGlvbiIsImR5bmFtaWNPcHRzIiwiYXNzaWduIiwic2VydmljZURlZmluaXRpb25zIiwiaXNQbGFpbk9iamVjdCIsImNvbXBsZXRlIiwiRXJyb3IiLCJjYWxsYmFja0NvbXBsZXRlIiwiY2FsbGJhY2tFcnJvciIsInJ1blNlcnZpY2UiLCJydW5OZXh0U2VydmljZU9uRXJyb3IiLCJzZXR1cFVybCIsInNlcnZpY2VPcHRzIiwiZ2V0Q3VycmVudFNlcnZpY2VPcHRzIiwidXJsIiwicmVwbGFjZSIsIl8iLCJwYXJhbSIsInRlbXBOYW1lIiwiRGF0ZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnRlcnBvbGF0ZVVybCIsImNhbGxiYWNrIiwicmVxdWVzdEZ1bmN0aW9uIiwiaXNTY3JpcHQiLCJnZXRTY3JpcHQiLCJtYWtlQXN5bmNSZXF1ZXN0IiwieGhyIiwicmVzcG9uc2VUZXh0IiwicnVuU2VydmljZUNhbGxiYWNrIiwiY2FsbCIsInRpbWVvdXQiLCJkYXRhIiwiaGVhZGVycyIsInNlcnZpY2VSZXN1bHRIYW5kbGVyIiwiYXN5bmNSZXN1bHQiLCJvblNlcnZpY2VSZXN1bHQiLCJlcnIiLCJsb2dFcnJvciIsIm5leHRTZXJ2aWNlIiwiY29tcGxldGVTZXJ2aWNlIiwidmFsIiwiZm4iLCJjb25zb2xlIiwid2FybiIsInVzZXJDYXRlZ29yaWVzIiwiVU5DQVRFR09SSVpFRCIsIkVTU0VOVElBTCIsIlBFUlNPTkFMSVpBVElPTiIsIkFOQUxZVElDUyIsIk1BUktFVElORyIsImN1c3RvbVN0eWxlcyIsImhhc1RyYW5zaXRpb24iLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zIiwidCIsIk9UIiwibXNUIiwiTW96VCIsIldlYmtpdFQiLCJwcmVmaXgiLCJoYXNPd25Qcm9wZXJ0eSIsInN0eWxlIiwiY2FuVXNlQ29va2llcyIsImJsYWNrbGlzdFBhZ2UiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwid2hpdGVsaXN0UGFnZSIsImNvb2tpZVBvcHVwIiwiZ2V0UG9wdXBDbGFzc2VzIiwiam9pbiIsImdldFBvcHVwSW5uZXJNYXJrdXAiLCJjdXN0b21IVE1MIiwib3ZlcnJpZGVIVE1MIiwic3RhdGljIiwid3JhcHBlciIsImFwcGVuZE1hcmt1cCIsImRpc3BsYXkiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGx5QXV0b0Rpc21pc3MiLCJhcHBseVJldm9rZUJ1dHRvbiIsImF1dG9PcGVuIiwiZmFkZUluIiwic2hvd1Jldm9rZSIsImZhZGVPdXQiLCJhZnRlclRyYW5zaXRpb24iLCJhZnRlckZhZGVPdXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmYWRlSW5UaW1lb3V0Iiwib3BlbmluZ1RpbWVvdXQiLCJhZnRlckZhZGVJbiIsInJlbW92ZSIsImNsZWFyVGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VCdG4iLCJwcmV2ZW50T3BlbiIsImhhc0Fuc3dlcmVkIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwiaGFzQ29uc2VudGVkIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJ1cGRhdGVDYXRlZ29yeVN0YXR1cyIsImNhdGVnb3J5TmFtZSIsImNob3NlbkJlZm9yZSIsInNldENvb2tpZSIsImFyZ3VtZW50cyIsImZvckVhY2giLCJjYXRlZ29yeVN0YXR1cyIsImluZGV4IiwibmF2aWdhdG9yIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJtYXRjaCIsImdldFBvc2l0aW9uQ2xhc3NlcyIsInBvc2l0aW9uIiwic3BsaXQiLCJwb3MiLCJvcHRzIiwicG9zaXRpb25TdHlsZSIsImlzTW9iaWxlIiwibW9iaWxlRm9yY2VGbG9hdCIsImNsYXNzZXMiLCJ0eXBlIiwidGhlbWUiLCJwdXNoIiwiYXBwbHkiLCJhdHRhY2hDdXN0b21QYWxldHRlIiwicGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJzaG93TGluayIsImVsZW1lbnRzIiwibGluayIsIm1lc3NhZ2VsaW5rIiwibWVzc2FnZSIsInByb3AiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNvbnRlbnQiLCJjb21wbGlhbmNlVHlwZSIsImNvbXBsaWFuY2UiLCJpbmZvIiwibGF5b3V0IiwibGF5b3V0cyIsImJhc2ljIiwibWFya3VwIiwiZGl2IiwiY29udCIsImNvbnRhaW5lciIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZXZlbnQiLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsInRvVXBwZXJDYXNlIiwiY2hlY2tlZCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImF1dG9BdHRhY2giLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsInRyYXZlcnNlRE9NUGF0aCIsInRhcmdldCIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsInRvTG93ZXJDYXNlIiwiaGFzaFN0ciIsImhhc2giLCJzZWxlY3RvciIsImlzVmFsaWQiLCJhZGRDdXN0b21TdHlsZXNoZWV0IiwiZ2V0RXZlbnRQYXRoIiwiY29tcG9zZWRQYXRoIiwiYXJyIiwiZGVsYXkiLCJzY3JvbGxSYW5nZSIsImRpc21pc3NPbkxpbmtDbGljayIsImRpc21pc3NPbldpbmRvd0NsaWNrIiwiZGlzbWlzc09uS2V5UHJlc3MiLCJkaXNtaXNzVGltZW91dCIsIk1hdGgiLCJmbG9vciIsIm9uV2luZG93U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXNzaXZlIiwib25XaW5kb3dDbGljayIsImV2dCIsImlnbm9yZUNsaWNrc0Zyb20iLCJpZ25vcmVkQ2xpY2siLCJvbkxpbmtDbGljayIsImVsZW0iLCJ0YWdOYW1lIiwib25LZXlQcmVzcyIsImtleUNvZGUiLCJhbmltYXRlUmV2b2thYmxlIiwibG9nIiwicG9saWN5Iiwib25Nb3VzZU1vdmUiLCJ0aHJvdHRsZSIsImFjdGl2ZSIsIm1pblkiLCJtYXhZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRZIiwidG9FcnJvciIsImlwaW5mbyIsImRvbmUiLCJyZXNwb25zZSIsImpzb24iLCJwYXJzZSIsImlwaW5mb2RiIiwic3RhdHVzQ29kZSIsInN0YXR1c01lc3NhZ2UiLCJtYXhtaW5kIiwiZ2VvaXAyIiwiaXNvX2NvZGUiLCJoZWFkZXIiLCJkaXNtaXNzIiwiYWxsb3ciLCJkZW55IiwiaHJlZiIsInNhdmUiLCJtb2RhbCIsInRpbWVvdXRJZHgiLCJzY3JpcHRUYWciLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInMiLCJvbmxvYWQiLCJzdGF0ZSIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlcnMiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImwiLCJzZW5kIiwidmFsdWUiLCJwYXJ0cyIsInBvcCIsInNoaWZ0IiwiZXhkYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwiaWQiLCJjb2xvclN0eWxlcyIsImJ1dHRvbiIsImhpZ2hsaWdodCIsInNhdmVCdXR0b24iLCJ0ZXh0IiwiZ2V0Q29udHJhc3QiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicGFkZGluZyIsImhvdmVyIiwiZ2V0SG92ZXJDb2xvciIsImhlYWQiLCJlbnRyaWVzIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwicmVwbGFjZWQiLCJsaW1pdCIsIndhaXQiLCJoYXNoTnVtIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGl6ZUhleCIsImdldEx1bWluYW5jZSIsImRvbSIsInZhbGlkYXRpb24iLCJhc3luY0ZucyIsImxvb3BQcm9wZXJ0aWVzIiwib3ZlcndyaXRlcyIsImtleSIsImRlZmF1bHRzIiwiaGV4Iiwic3Vic3RyIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwidXNlckFnZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLGVBQWUsZUFBZSx3Q0FBd0MscUNBQXFDLG9DQUFvQyxtQ0FBbUMsZ0NBQWdD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LENBQWlCVixNQUFqQixLQUE0QixDQUE1RDtBQUVBLE1BQU1vSyxRQUFRLEdBQUcsTUFDdEIsaUVBQWlFd0gsSUFBakUsQ0FBdUVySSxTQUFTLENBQUN1TSxTQUFqRixDQURLLEMsQ0FHUDs7QUFDTyxNQUFNbFUsYUFBYSxHQUFHeEQsR0FBRyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCQSxHQUFHLEtBQUssSUFBbkMsSUFBMkNBLEdBQUcsQ0FBQ2xCLFdBQUosSUFBbUJtQixNQUEzRixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2Mtd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTsgfVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKiBvbmx5IGFuaW1hdGUgaWZoYXMgY2xhc3MgJ2NjLWFuaW1hdGUnICovXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWdyb3dlciB7XFxuICAvKiBJbml0aWFsbHkgd2UgZG9uJ3Qgd2FudCBhbnkgaGVpZ2h0LCBhbmQgd2Ugd2FudCB0aGUgY29udGVudHMgdG8gYmUgaGlkZGVuICovXFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIFNldCBvdXIgdHJhbnNpdGlvbnMgdXAuICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzOyB9XFxuXFxuLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGV4Y2x1ZGUgcGFkZGluZyB3aGVuIGRlYWxpbmcgd2l0aCB3aWR0aCAqL1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTg7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6aG92ZXIsXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNWVtO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIC8qIHNlZWluZyBhcyB0aGlzIGNvbnRhaW5zIHRleHQgYW5kIG5vdCBhbiBpbWFnZSwgdGhlIGVsZW1lbnQgdGFsbGVyIHRoYW4gaXQgaXMgd2lkZSAoYmVjYXVzZSBpdCBpcyB0ZXh0KSAqL1xcbiAgLyogIC0gd2Ugd2FudCBpdCB0byBiZSBhIHNxdWFyZSwgYmVjYXVzZSBpdCdzIGFjdGluZyBhcyBhbiBpY29uICovXFxuICAvKiAgLSBzZXR0aW5nIHRoZSBsaW5lIGhlaWdodCBub3JtYWxpemVzIHRoZSBoZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAwLjc1OyB9XFxuXFxuLmNjLWNsb3NlOmhvdmVyLFxcbi5jYy1jbG9zZTpmb2N1cyB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLyogVGhpcyBmaWxlIHNob3VsZCBjb250YWluIHN0eWxlcyB0aGF0IG1vZGlmaWVzIHRoZSBwb3B1cCBsYXlvdXQuICovXFxuLyogQnkgbGF5b3V0LCB3ZSBtZWFuIHRoZSBwaHlzaWNhbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgb24gdGhlIHBvcHVwIHdpbmRvdywgYW5kIHRoZSBtYXJnaW4gLyBwYWRkaW5nIGFyb3VuZCB0aG9zZSBlbGVtZW50cy4gKi9cXG4uY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDNlbTtcXG4gIHJpZ2h0OiB1bnNldDsgfVxcblxcbi5jYy1yZXZva2UuY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDNlbTtcXG4gIGxlZnQ6IHVuc2V0OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRkxPQVRJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB0aGVzZSBjbGFzc2VzIHBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50ICovXFxuLmNjLXRvcCB7XFxuICB0b3A6IDFlbTsgfVxcblxcbi5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDFlbTsgfVxcblxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtOyB9XFxuXFxuLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDFlbTsgfVxcblxcbi8qIGxpbmtzIHRoYXQgYXJlIGRpcmVjdCBkZWNlbmRhbnRzIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYmxvY2sgKi9cXG4uY2MtZmxvYXRpbmcgPiAuY2MtbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlIHtcXG4gIGZsZXg6IDEgMCBhdXRvOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQkFOTkVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5jYy1iYW5uZXIuY2MtYm90dG9tIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSA+IC5jYy1idG4ge1xcbiAgZmxleDogMTsgfVxcblxcbi5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmNjLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDIycHgpO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMnB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbyB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC12YXJpYW50OiBhbGwtc21hbGwtY2FwczsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbzpmb2N1cyArIC5jYy10b29sdGlwIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiAxOTBweDtcXG4gICAgYm90dG9tOiA0NnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC43KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogMnB4IDFweCAxcHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHAge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAuY2Mtd2luZG93LFxcbiAgLmNjLXJldm9rZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2MtYnRuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfSB9XFxuXFxuLyogZGltZW5zaW9ucyBmb3IgJ2lQaG9uZTYgUGx1cycgYW5kIGxvd2VyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAuY2Mtd2luZG93LmNjLXRvcCB7XFxuICAgIHRvcDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyLCAuY2Mtd2luZG93LmNjLWZsb2F0aW5nLCAuY2Mtd2luZG93LmNjLXJpZ2h0LCAuY2Mtd2luZG93LmNjLWxlZnQge1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLWNvbXBsaWFuY2Uge1xcbiAgICAgIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gICAgbWF4LXdpZHRoOiBub25lOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy13aW5kb3cgLmNjLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG4gIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSAuY2MtYnRuOm5vdCguY2MtaW5mbykge1xcbiAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7XFxuICAgICAgbWluLXdpZHRoOiAxNDBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODU0cHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4uY2Mtc2F2ZSB7XFxuICAgIG1hcmdpbjogOHB4IDA7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gIC5mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7IH1cXG4gIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTsgfSB9XFxuXFxuLyogQ2xhc3NpYyAqL1xcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIHBhZGRpbmc6IDEuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1jb21wbGlhbmNlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZsZXg6IG5vbmU7IH1cXG5cXG4uY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG46bGFzdC1jaGlsZCB7XFxuICAgICAgbWluLXdpZHRoOiAxNDBweDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAtMXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAycHg7XFxuICAgICAgICBsZWZ0OiA2cHg7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMUY1RjVcXFwiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2MtYnRuLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcXDI3MTNcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IC00cHg7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCA0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG46bGFzdC1jaGlsZCB7XFxuICAgICAgbWluLXdpZHRoOiAwOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItcmlnaHQ6IHRoaW4gc29saWQgbGlnaHRncmV5OyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLyogRWRnZWxlc3MgKi9cXG4uY2MtdGhlbWUtZWRnZWxlc3MuY2Mtd2luZG93IHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjhlbSAxLjhlbTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cXG4gIC5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4uY2MtaW5mbyB7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDRweDsgfVxcblxcbi5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiAkZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiAkZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gJGdldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIFJlZmxlY3RBcHBseSh0aGlzLmxpc3RlbmVyLCB0aGlzLnRhcmdldCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBjb25zdCBzdGF0dXNlcyA9IFsgXCJERU5ZXCIsIFwiQUxMT1dcIiwgXCJESVNNSVNTXCIgXVxuZXhwb3J0IGNvbnN0IHN0YXR1c0RlbnkgPSBcIkRFTllcIlxuZXhwb3J0IGNvbnN0IHN0YXR1c0FsbG93ID0gXCJBTExPV1wiXG5leHBvcnQgY29uc3Qgc3RhdHVzRGlzbWlzcyA9IFwiRElTTUlTU1wiXG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0gWyBcIlVOQ0FURUdPUklaRURcIiwgXCJFU1NFTlRJQUxcIiwgXCJQRVJTT05BTElaQVRJT05cIiwgXCJBTkFMWVRJQ1NcIiwgXCJNQVJLRVRJTkdcIiBdIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcblxuaW1wb3J0IENvb2tpZUNvbnNlbnQgZnJvbSBcIi4vbW9kZWxzL0Nvb2tpZUNvbnNlbnRcIlxuXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gQ29va2llQ29uc2VudFxufSBlbHNlIHtcbiAgd2luZG93LkNvb2tpZUNvbnNlbnQgPSBDb29raWVDb25zZW50XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgbWVyZ2VPcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxzXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5cbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBkZWZhdWx0T3B0aW9ucyA9IHt9LCBvcHRpb25zID0ge30gKXtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgICB0aGlzLm9uID0gZW1pdHRlci5vbi5iaW5kKCBlbWl0dGVyIClcbiAgICB0aGlzLmVtaXQgPSBlbWl0dGVyLmVtaXQuYmluZCggZW1pdHRlciApXG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBMZWdhbCBmcm9tIFwiLi9MZWdhbFwiXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vTG9jYXRpb25cIlxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCJcblxuaW1wb3J0IHsgc3RhdHVzZXMsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcbmltcG9ydCB7IGdldENvb2tpZSwgaXNWYWxpZFN0YXR1cyB9IGZyb20gXCIuLi91dGlsc1wiXG5cbi8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXG4vLyBZb3UgY2FuIHN0cmluZyB0b2dldGhlciB0aGVzZSB0aHJlZSBtb2R1bGVzIHlvdXJzZWxmIGhvd2V2ZXIgeW91IHdhbnQsIGJ5IHdyaXRpbmcgYSBuZXcgZnVuY3Rpb24uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUNvbnNlbnQgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgPSB7fSApe1xuICAgIHN1cGVyKCBvcHRpb25zIClcblxuICAgIGNvbnN0IGFuc3dlcnMgPSBjYXRlZ29yaWVzLm1hcCggY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgY29va2llTmFtZSA9IHRoaXMub3B0aW9ucy5jb29raWUgJiYgdGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lID8gdGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lIDogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzXydcbiAgICAgIGNvbnN0IGFuc3dlciA9IGdldENvb2tpZSggY29va2llTmFtZSArIGNhdGVnb3J5IClcbiAgICAgIHJldHVybiBpc1ZhbGlkU3RhdHVzKGFuc3dlcikgPyB7IFtjYXRlZ29yeV06IGFuc3dlciB9IDogdW5kZWZpbmVkXG4gICAgfSkuZmlsdGVyKG9iaiA9PiBvYmogPyBvYmpbT2JqZWN0LmtleXMob2JqKVswXV0gOiBmYWxzZSlcblxuICAgIC8vIGlmIHRoZXkgaGF2ZSBhbHJlYWR5IGFuc3dlcmVkXG4gICAgaWYgKGFuc3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KCBcImluaXRpYWxpemVkXCIsIGFuc3dlcnMgKSApXG4gICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxlZ2FsICYmIHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZSggeyBjb2RlOiB0aGlzLm9wdGlvbnMubGVnYWwuY291bnRyeUNvZGUgfSApXG4gICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxvY2F0aW9uICkge1xuICAgICAgbmV3IExvY2F0aW9uKCB0aGlzLm9wdGlvbnMubG9jYXRpb24gKS5sb2NhdGUoIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZS5iaW5kKCB0aGlzICksIHRoaXMuaW5pdGlhbGl6YXRpb25FcnJvci5iaW5kKCB0aGlzICkgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoe30pXG4gICAgfVxuICB9XG4gIGluaXRpYWxpemF0aW9uQ29tcGxldGUoIHJlc3VsdCApe1xuICAgIGlmIChyZXN1bHQuY29kZSkge1xuICAgICAgdGhpcy5vcHRpb25zID0gbmV3IExlZ2FsKHRoaXMub3B0aW9ucy5sZWdhbCkuYXBwbHlMYXcoIHRoaXMub3B0aW9ucywgcmVzdWx0LmNvZGUgKVxuICAgIH1cbiAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMgKVxuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdChcImluaXRpYWxpemVkXCIsIHRoaXMucG9wdXAgKSwgMCApXG4gIH1cbiAgaW5pdGlhbGl6YXRpb25FcnJvciggZXJyb3IgKSB7XG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KCBcImVycm9yXCIsIGVycm9yLCBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucyApICksIDAgKVxuICB9XG4gIGdldENvdW50cnlMYXdzKCBjb3VudHJ5Q29kZSApe1xuICAgIHJldHVybiBuZXcgTGVnYWwodGhpcy5vcHRpb25zLmxlZ2FsKS5nZXQoIGNvdW50cnlDb2RlIClcbiAgfVxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9wdXAuaXNPcGVuKClcbiAgfVxuICBjbG9zZSgpe1xuICAgIHJldHVybiAoIHRoaXMucG9wdXAuY2xvc2UoKSwgdGhpcyApXG4gIH1cbiAgcmV2b2tlQ2hvaWNlKCkge1xuICAgIHJldHVybiAoIHRoaXMucG9wdXAucmV2b2tlQ2hvaWNlKCksIHRoaXMgKVxuICB9XG4gIG9wZW4oKXtcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLm9wZW4oKSwgdGhpcyApXG4gIH1cbiAgdG9nZ2xlUmV2b2tlQnV0dG9uKCBib29sICkge1xuICAgIHJldHVybiAoIHRoaXMucG9wdXAudG9nZ2xlUmV2b2tlQnV0dG9uKCBib29sICksIHRoaXMgKVxuICB9XG4gIHNldFN0YXR1c2VzKCBzdGF0dXMgKSB7XG4gICAgcmV0dXJuICh0aGlzLnBvcHVwLnNldFN0YXR1c2VzKCBzdGF0dXMgKSwgdGhpcyApXG4gIH1cbiAgY2xlYXJTdGF0dXNlcygpe1xuICAgIHJldHVybiAoIHRoaXMucG9wdXAuY2xlYXJTdGF0dXNlcygpLCB0aGlzIClcbiAgfVxuICBkZXN0cm95KCl7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5kZXN0cm95KCksIHRoaXMgKVxuICB9XG59XG5cbnN0YXR1c2VzLnJlZHVjZSggKCBvYmosIHN0YXR1cyApID0+XG4oIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggQ29va2llQ29uc2VudCwgc3RhdHVzLCB7XG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdHVzIH0sXG4gIHNldDogZnVuY3Rpb24gKCkge30sXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICB3cml0ZWFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlXG59KSwgb2JqICksIENvb2tpZUNvbnNlbnQgKSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL2xlZ2FsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWwgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgPSB7fSApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICB9XG4gIGdldCggY291bnRyeUNvZGUgKXtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICByZXZva2FibGU6IHRoaXMub3B0aW9ucy5yZXZva2FibGUuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgIGV4cGxpY2l0QWN0aW9uOiB0aGlzLm9wdGlvbnMuZXhwbGljaXRBY3Rpb24uaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMFxuICAgIH1cbiAgfVxuICBhcHBseUxhdyggb3B0aW9ucywgY291bnRyeUNvZGUgKXtcbiAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXQoY291bnRyeUNvZGUpXG5cbiAgICBpZiAoIWNvdW50cnkuaGFzTGF3KSB7XG4gICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xuICAgICAgb3B0aW9ucy5lbmFibGVkID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCggXCJub0Nvb2tpZUxhd1wiLCBjb3VudHJ5Q29kZSwgY291bnRyeSApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWdpb25hbExhdykge1xuICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XG4gICAgICAgIC8vIFdlIG11c3QgcHJvdmlkZSBhbiBvcHRpb24gdG8gcmV2b2tlIGNvbnNlbnQgYXQgYSBsYXRlciB0aW1lXG4gICAgICAgIG9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY291bnRyeS5leHBsaWNpdEFjdGlvbikge1xuICAgICAgICAvLyBUaGUgdXNlciBtdXN0IGV4cGxpY2l0bHkgY2xpY2sgdGhlIGNvbnNlbnQgYnV0dG9uXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uU2Nyb2xsID0gZmFsc2VcbiAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25UaW1lb3V0ID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL2xvY2F0aW9uXCJcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QsIGdldFNjcmlwdCwgbWFrZUFzeW5jUmVxdWVzdCB9IGZyb20gXCIuLi91dGlsc1wiXG5cbi8vIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbG9jYXRpb24gc2VydmljZXMgd2UgaGF2ZSBhbHJlYWR5IHNldCB1cC5cbi8vIFdoZW4gdXNpbmcgYSBzZXJ2aWNlLCBpdCBjb3VsZCBlaXRoZXIgcmV0dXJuIGEgZGF0YSBzdHJ1Y3R1cmUgaW4gcGxhaW4gdGV4dCAobGlrZSBhIEpTT04gb2JqZWN0KSBvciBhbiBleGVjdXRhYmxlIHNjcmlwdFxuLy8gV2hlbiB0aGUgcmVzcG9uc2UgbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYnkgdGhlIGJyb3dzZXIsIHRoZW4gYGlzU2NyaXB0YCBtdXN0IGJlIHNldCB0byB0cnVlLCBvdGhlcndpc2UgaXQgd29uJ3Qgd29yay5cblxuLy8gV2hlbiB0aGUgc2VydmljZSB1c2VzIGEgc2NyaXB0LCB0aGUgY2hhbmNlcyBhcmUgdGhhdCB5b3UnbGwgaGF2ZSB0byB1c2UgdGhlIHNjcmlwdCB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMuIEluIHRoZXNlXG4vLyBjYXNlcywgdGhlIHNlcnZpY2VzIGBjYWxsYmFja2AgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBgZG9uZWAgZnVuY3Rpb24uIFdoZW4gcGVyZm9ybWluZyBhc3luYyBvcGVyYXRpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkXG4vLyB3aXRoIHRoZSBkYXRhIChvciBFcnJvciksIGFuZCBgY29va2llY29uc2VudC5sb2NhdGVgIHdpbGwgdGFrZSBjYXJlIG9mIHRoZSByZXN0XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xuICAgIHN1cGVyKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXG4gICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTEgLy8gdGhlIGluZGV4IChpbiBvcHRpb25zKSBvZiB0aGUgc2VydmljZSB3ZSdyZSBjdXJyZW50bHkgdXNpbmdcbiAgfVxuXG4gIGdldE5leHRTZXJ2aWNlKCkge1xuICAgIGxldCBzZXJ2aWNlXG4gICAgZG8ge1xuICAgICAgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KCsrdGhpcy5jdXJyZW50U2VydmljZUluZGV4KVxuICAgIH0gd2hpbGUgKFxuICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4IDwgdGhpcy5vcHRpb25zLnNlcnZpY2VzLmxlbmd0aCAmJlxuICAgICAgIXNlcnZpY2VcbiAgICApXG5cbiAgICByZXR1cm4gc2VydmljZVxuICB9XG5cbiAgZ2V0U2VydmljZUJ5SWR4KGlkeCkge1xuICAgIC8vIFRoaXMgY2FuIGVpdGhlciBiZSB0aGUgbmFtZSBvZiBhIGRlZmF1bHQgbG9jYXRpb25TZXJ2aWNlLCBvciBhIGZ1bmN0aW9uLlxuICAgIGNvbnN0IHNlcnZpY2VPcHRpb24gPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbaWR4XVxuXG4gICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBkeW5hbWljT3B0cyA9IHNlcnZpY2VPcHRpb24oKVxuICAgICAgcmV0dXJuIGR5bmFtaWNPcHRzLm5hbWUgPyBcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBkeW5hbWljT3B0cyxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zWyBkeW5hbWljT3B0cy5uYW1lIF0oIGR5bmFtaWNPcHRzIClcbiAgICAgICAgKSA6IGR5bmFtaWNPcHRzXG4gICAgfVxuXG4gICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbl0oKVxuICAgIH1cblxuICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0LCBhc3N1bWUge25hbWU6ICdpcGluZm8nLCAuLi5vdGhlck9wdGlvbnN9XG4gICAgLy8gQWxsb3dzIHVzZXIgdG8gcGFzcyBpbiBBUEkga2V5cyBldGMuXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qoc2VydmljZU9wdGlvbikpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb24ubmFtZV0oXG4gICAgICAgIHNlcnZpY2VPcHRpb25cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gVGhpcyBydW5zIHRoZSBzZXJ2aWNlIGxvY2F0ZWQgYXQgaW5kZXggYGN1cnJlbnRTZXJ2aWNlSW5kZXhgLlxuICAvLyBJZiB0aGUgc2VydmljZSBmYWlscywgYHJ1bk5leHRTZXJ2aWNlT25FcnJvcmAgd2lsbCBjb250aW51ZSB0cnlpbmcgZWFjaCBzZXJ2aWNlIHVudGlsIGFsbCBmYWlsLCBvciBvbmUgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxuICBsb2NhdGUoY29tcGxldGUsIGVycm9yKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKVxuXG4gICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICBlcnJvcihuZXcgRXJyb3IoJ05vIHNlcnZpY2VzIHRvIHJ1bicpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jYWxsYmFja0NvbXBsZXRlID0gY29tcGxldGVcbiAgICB0aGlzLmNhbGxiYWNrRXJyb3IgPSBlcnJvclxuXG4gICAgdGhpcy5ydW5TZXJ2aWNlKHNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpXG4gIH1cblxuICAvLyBQb3RlbnRpYWxseSBhZGRzIGEgY2FsbGJhY2sgdG8gYSB1cmwgZm9yIGpzb25wLlxuICBzZXR1cFVybChzZXJ2aWNlKSB7XG4gICAgY29uc3Qgc2VydmljZU9wdHMgPSB0aGlzLmdldEN1cnJlbnRTZXJ2aWNlT3B0cygpXG4gICAgcmV0dXJuIHNlcnZpY2UudXJsLnJlcGxhY2UoL1xceyguKj8pXFx9L2csIGZ1bmN0aW9uKF8sIHBhcmFtKSB7XG4gICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcbiAgICAgICAgY29uc3QgdGVtcE5hbWUgPSAnY2FsbGJhY2snICsgRGF0ZS5ub3coKVxuICAgICAgICB3aW5kb3dbdGVtcE5hbWVdID0gZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBOYW1lXG4gICAgICB9XG4gICAgICBpZiAocGFyYW0gaW4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmwpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsW3BhcmFtXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyByZXF1aXJlcyBhIGBzZXJ2aWNlYCBvYmplY3QgdGhhdCBkZWZpbmVzIGF0IGxlYXN0IGEgYHVybGAgYW5kIGBjYWxsYmFja2BcbiAgcnVuU2VydmljZShzZXJ2aWNlLCBjb21wbGV0ZSkge1xuICAgIC8vIGJhc2ljIGNoZWNrIHRvIGVuc3VyZSBpdCByZXNlbWJsZXMgYSBgc2VydmljZWBcbiAgICBpZiAoIXNlcnZpY2UgfHwgIXNlcnZpY2UudXJsIHx8ICFzZXJ2aWNlLmNhbGxiYWNrKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB3ZSBjYWxsIGVpdGhlciBgZ2V0U2NyaXB0YCBvciBgbWFrZUFzeW5jUmVxdWVzdGAgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHJlc291cmNlXG4gICAgY29uc3QgcmVxdWVzdEZ1bmN0aW9uID0gc2VydmljZS5pc1NjcmlwdCA/IGdldFNjcmlwdCA6IG1ha2VBc3luY1JlcXVlc3RcblxuICAgIC8vIGJvdGggZnVuY3Rpb25zIGhhdmUgc2ltaWxhciBzaWduYXR1cmVzIHNvIHdlIGNhbiBwYXNzIHRoZSBzYW1lIGFyZ3VtZW50cyB0byBib3RoXG4gICAgcmVxdWVzdEZ1bmN0aW9uKFxuICAgICAgdGhpcy5zZXR1cFVybChzZXJ2aWNlKSxcbiAgICAgIHhociA9PiB7XG4gICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxuICAgICAgICBsZXQgcmVzcG9uc2VUZXh0ID0geGhyID8geGhyLnJlc3BvbnNlVGV4dCA6ICcnXG5cbiAgICAgICAgLy8gaWYgdGhlIHJlc291cmNlIGlzIGEgc2NyaXB0LCB0aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gcnVuLlxuICAgICAgICAvLyBpZiB0aGUgc2NyaXB0IGlzIEpTT05QLCB0aGVuIGEgdGltZSBkZWZpbmVkIGZ1bmN0aW9uIGBjYWxsYmFja197RGF0ZS5ub3d9YCBoYXMgYWxyZWFkeVxuICAgICAgICAvLyBiZWVuIGNhbGxlZCAoYXMgdGhlIEpTT05QIGNhbGxiYWNrKS4gVGhpcyBjYWxsYmFjayBzZXRzIHRoZSBfX0pTT05QX0RBVEEgcHJvcGVydHlcbiAgICAgICAgaWYgKHNlcnZpY2UuX19KU09OUF9EQVRBKSB7XG4gICAgICAgICAgcmVzcG9uc2VUZXh0ID0gc2VydmljZS5fX0pTT05QX0RBVEFcbiAgICAgICAgICBkZWxldGUgc2VydmljZS5fX0pTT05QX0RBVEFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlcnZpY2UgY2FsbGJhY2sgd2l0aCB0aGUgcmVzcG9uc2UgdGV4dCAoc28gaXQgY2FuIHBhcnNlIHRoZSByZXNwb25zZSlcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlQ2FsbGJhY2suY2FsbCh0aGlzLCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0KVxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9ucy50aW1lb3V0LFxuICAgICAgc2VydmljZS5kYXRhLFxuICAgICAgc2VydmljZS5oZWFkZXJzXG4gICAgKVxuXG4gICAgLy8gYHNlcnZpY2UuZGF0YWAgYW5kIGBzZXJ2aWNlLmhlYWRlcnNgIGFyZSBvcHRpb25hbCAodGhleSBvbmx5IGNvdW50IGlmIGAhc2VydmljZS5pc1NjcmlwdGAgYW55d2F5KVxuICB9XG5cbiAgLy8gVGhlIHNlcnZpY2UgcmVxdWVzdCBoYXMgcnVuIChhbmQgcG9zc2libHkgaGFzIGEgYHJlc3BvbnNlVGV4dGApIFtubyBgcmVzcG9uc2VUZXh0YCBpZiBgaXNTY3JpcHRgXVxuICAvLyBXZSBuZWVkIHRvIHJ1biBpdHMgY2FsbGJhY2sgd2hpY2ggZGV0ZXJtaW5lcyBpZiBpdHMgc3VjY2Vzc2Z1bCBvciBub3RcbiAgLy8gYGNvbXBsZXRlYCBpcyBjYWxsZWQgb24gc3VjY2VzcyBvciBmYWlsdXJlXG4gIHJ1blNlcnZpY2VDYWxsYmFjayggY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dCApIHtcbiAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgc2VydmljZSB1c2VzIHRoZSBhc3luYyBjYWxsYmFjayBpbiBpdHMgaGFuZGxlciBtZXRob2RcbiAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcbiAgICAgIC8vIGlmIGByZXN1bHRgIGlzIGEgdmFsaWQgdmFsdWUsIHRoZW4gdGhpcyBmdW5jdGlvbiBzaG91bGRuJ3QgcmVhbGx5IHJ1blxuICAgICAgLy8gZXZlbiBpZiBpdCBpcyBjYWxsZWQgYnkgYHNlcnZpY2UuY2FsbGJhY2tgXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aGlzLm9uU2VydmljZVJlc3VsdCggY29tcGxldGUsIGFzeW5jUmVzdWx0KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBmdW5jdGlvbiBgc2VydmljZS5jYWxsYmFja2Agd2lsbCBlaXRoZXIgZXh0cmFjdCBhIGNvdW50cnkgY29kZSBmcm9tIGByZXNwb25zZVRleHRgIGFuZCByZXR1cm4gaXQgKGluIGByZXN1bHRgKVxuICAgIC8vIG9yIChpZiBpdCBoYXMgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzKSBpdCB3aWxsIGNhbGwgYSBgZG9uZWAgY2FsbGJhY2sgd2l0aCB0aGUgY291bnRyeSBjb2RlIHdoZW4gaXQgaXMgcmVhZHlcbiAgICBjb25zdCByZXN1bHQgPSBzZXJ2aWNlLmNhbGxiYWNrKHNlcnZpY2VSZXN1bHRIYW5kbGVyLCByZXNwb25zZVRleHQpXG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB0aGlzLm9uU2VydmljZVJlc3VsdCggY29tcGxldGUsIHJlc3VsdCApXG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgd2l0aCB0aGUgYHJlc3VsdGAgZnJvbSBgc2VydmljZS5jYWxsYmFja2AgcmVnYXJkbGVzcyBvZiBob3cgaXQgcHJvdmlkZWQgdGhhdCByZXN1bHQgKHN5bmMgb3IgYXN5bmMpLlxuICAvLyBgcmVzdWx0YCB3aWxsIGJlIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgLiBBIHNlcnZpY2UgY2FsbGJhY2sgc2hvdWxkIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggZGF0YVxuICBvblNlcnZpY2VSZXN1bHQoY29tcGxldGUsIHJlc3VsdCkge1xuICAgIC8vIGNvbnZlcnQgcmVzdWx0IHRvIG5vZGVqcyBzdHlsZSBhc3luYyBjYWxsYmFja1xuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciB8fCAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikpIHtcbiAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgcmVzdWx0LCBudWxsKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIG51bGwsIHJlc3VsdClcbiAgICB9XG4gIH1cblxuICAvLyBpZiBgZXJyYCBpcyBzZXQsIHRoZSBuZXh0IHNlcnZpY2UgaGFuZGxlciBpcyBjYWxsZWRcbiAgLy8gaWYgYGVycmAgaXMgbnVsbCwgdGhlIGBvbkNvbXBsZXRlYCBoYW5kbGVyIGlzIGNhbGxlZCB3aXRoIGBkYXRhYFxuICBydW5OZXh0U2VydmljZU9uRXJyb3IoZXJyLCBkYXRhKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgdGhpcy5sb2dFcnJvcihlcnIpXG5cbiAgICAgIGNvbnN0IG5leHRTZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpXG5cbiAgICAgIGlmIChuZXh0U2VydmljZSkge1xuICAgICAgICB0aGlzLnJ1blNlcnZpY2UobmV4dFNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0Vycm9yLFxuICAgICAgICAgIG5ldyBFcnJvcignQWxsIHNlcnZpY2VzIGZhaWxlZCcpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbCh0aGlzLCB0aGlzLmNhbGxiYWNrQ29tcGxldGUsIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFNlcnZpY2VPcHRzKCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1t0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXhdXG5cbiAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB2YWwoKVxuICAgIH1lbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsbHMgdGhlIGBvbkNvbXBsZXRlYCBjYWxsYmFjayBhZnRlciByZXNldHRpbmcgdGhlIGBjdXJyZW50U2VydmljZUluZGV4YFxuICBjb21wbGV0ZVNlcnZpY2UoZm4sIGRhdGEpIHtcbiAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMVxuXG4gICAgZm4gJiYgZm4oZGF0YSlcbiAgfVxuXG4gIGxvZ0Vycm9yKGVycikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBUaGUgc2VydmljZVske3RoaXMuY3VycmVudFNlcnZpY2VJbmRleH1dICgke3RoaXMuZ2V0U2VydmljZUJ5SWR4KHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCkudXJsfSkgcmVzcG9uZGVkIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcmAsXG4gICAgICAgZXJyXG4gICAgKVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvcG9wdXBcIlxuaW1wb3J0IHtcbiAgY2F0ZWdvcmllcyxcbiAgc3RhdHVzZXMsXG4gIHN0YXR1c0Rpc21pc3MsXG4gIHN0YXR1c0FsbG93XG59IGZyb20gXCIuLi9jb25zdGFudHNcIlxuaW1wb3J0IHtcbiAgYWRkQ3VzdG9tU3R5bGVzaGVldCxcbiAgZ2V0Q29va2llLFxuICBoYXNoLFxuICBpbnRlcnBvbGF0ZVN0cmluZyxcbiAgaXNNb2JpbGUsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzVmFsaWRTdGF0dXMsXG4gIHNldENvb2tpZSxcbiAgdGhyb3R0bGUsXG4gIHRyYXZlcnNlRE9NUGF0aCxcbn0gZnJvbSBcIi4uL3V0aWxzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgICB0aGlzLnVzZXJDYXRlZ29yaWVzID0ge1xuICAgICAgVU5DQVRFR09SSVpFRCAgOiAnRElTTUlTUycsXG4gICAgICBFU1NFTlRJQUwgICAgICA6ICdBTExPVycsXG4gICAgICBQRVJTT05BTElaQVRJT046ICdESVNNSVNTJyxcbiAgICAgIEFOQUxZVElDUyAgICAgIDogJ0RJU01JU1MnLFxuICAgICAgTUFSS0VUSU5HICAgICAgOiAnRElTTUlTUydcbiAgICB9XG4gICAgdGhpcy5jdXN0b21TdHlsZXMgPSB7fVxuICAgIHRoaXMuaGFzVHJhbnNpdGlvbiA9ICEhKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgY29uc3QgdHJhbnMgPSB7XG4gICAgICAgIHQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgT1Q6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgIG1zVDogJ01TVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgIE1velQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgV2Via2l0VDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgICB9XG4gIFxuICAgICAgZm9yIChsZXQgcHJlZml4IGluIHRyYW5zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0cmFucy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpICYmXG4gICAgICAgICAgdHlwZW9mIGVsLnN0eWxlW3ByZWZpeCArICdyYW5zaXRpb24nXSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zW3ByZWZpeF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnXG4gICAgfSkoKVxuXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIGBvbkNvbXBsZXRlYCB3YXMgY2FsbGVkXG4gICAgaWYgKHRoaXMuY2FuVXNlQ29va2llcygpKSB7XG4gICAgICAvLyB1c2VyIGhhcyBhbHJlYWR5IGFuc3dlcmVkXG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXG4gICAgfVxuICAgIC8vIGFwcGx5IGJsYWNrbGlzdCAvIHdoaXRlbGlzdFxuICAgIGlmICh0aGlzLm9wdGlvbnMuYmxhY2tsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy53aGl0ZWxpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gdGhlIGZ1bGwgbWFya3VwIGVpdGhlciBjb250YWlucyB0aGUgd3JhcHBlciBvciBpdCBkb2VzIG5vdCAoZm9yIG11bHRpcGxlIGluc3RhbmNlcylcbiAgICBsZXQgY29va2llUG9wdXAgPSB0aGlzLm9wdGlvbnMud2luZG93XG4gICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCB0aGlzLmdldFBvcHVwQ2xhc3NlcygpLmpvaW4oJyAnKSlcbiAgICAgIC5yZXBsYWNlKCd7e2NoaWxkcmVufX0nLCB0aGlzLmdldFBvcHVwSW5uZXJNYXJrdXAoKSlcblxuICAgIC8vIGlmIHVzZXIgcGFzc2VzIGh0bWwsIHVzZSBpdCBpbnN0ZWFkXG4gICAgY29uc3QgY3VzdG9tSFRNTCA9IHRoaXMub3B0aW9ucy5vdmVycmlkZUhUTUxcbiAgICBpZiAodHlwZW9mIGN1c3RvbUhUTUwgPT0gJ3N0cmluZycgJiYgY3VzdG9tSFRNTC5sZW5ndGggKSB7XG4gICAgICBjb29raWVQb3B1cCA9IGN1c3RvbUhUTUxcbiAgICB9XG5cbiAgICAvLyBpZiBzdGF0aWMsIHdlIG5lZWQgdG8gZ3JvdyB0aGUgZWxlbWVudCBmcm9tIDAgaGVpZ2h0IHNvIGl0IGRvZXNuJ3QganVtcCB0aGUgcGFnZVxuICAgIC8vIGNvbnRlbnQuIHdlIHdyYXAgYW4gZWxlbWVudCBhcm91bmQgaXQgd2hpY2ggd2lsbCBtYXNrIHRoZSBoaWRkZW4gY29udGVudFxuICAgIFxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAvLyBgZ3Jvd2VyYCBpcyBhIHdyYXBwZXIgZGl2IHdpdGggYSBoaWRkZW4gb3ZlcmZsb3cgd2hvc2UgaGVpZ2h0IGlzIGFuaW1hdGVkXG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5hcHBlbmRNYXJrdXAoYDxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4ke2Nvb2tpZVBvcHVwfTwvZGl2PmApXG5cbiAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnIC8vIHNldCBpdCB0byB2aXNpYmxlIChiZWNhdXNlIGFwcGVuZE1hcmt1cCBoaWRlcyBpdClcbiAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZCAvLyBnZXQgdGhlIGBlbGVtZW50YCByZWZlcmVuY2UgZnJvbSB0aGUgd3JhcHBlclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmFwcGVuZE1hcmt1cChjb29raWVQb3B1cClcbiAgICB9XG5cbiAgICB0aGlzLmFwcGx5QXV0b0Rpc21pc3MoKVxuICAgIHRoaXMuYXBwbHlSZXZva2VCdXR0b24oKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvT3Blbikge1xuICAgICAgdGhpcy5hdXRvT3BlbigpXG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuXG5cbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIGlmICh0aGlzLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5mYWRlSW4oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbigpXG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoIFwicG9wdXBPcGVuZWRcIiApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNsb3NlKCBzaG93UmV2b2tlICkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cbiAgICBcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgaWYgKHRoaXMuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLmZhZGVPdXQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3dSZXZva2UgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCBcInBvcHVwQ2xvc2VkXCIgKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmYWRlSW4oKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRcblxuICAgIGlmICghdGhpcy5oYXNUcmFuc2l0aW9uIHx8ICFlbCkgcmV0dXJuXG5cbiAgICAvLyBUaGlzIHNob3VsZCBhbHdheXMgYmUgY2FsbGVkIEFGVEVSIGZhZGVPdXQgKHdoaWNoIGlzIGdvdmVybmVkIGJ5IHRoZSAndHJhbnNpdGlvbmVuZCcgZXZlbnQpLlxuICAgIC8vICd0cmFuc2l0aW9uZW5kJyBpc24ndCBhbGwgdGhhdCByZWxpYWJsZSwgc28sIGlmIHdlIHRyeSBhbmQgZmFkZUluIGJlZm9yZSAndHJhbnNpdGlvbmVuZCcgaGFzXG4gICAgLy8gaGFzIGEgY2hhbmNlIHRvIHJ1biwgdGhlbiB3ZSBydW4gaXQgb3Vyc2VsdmVzXG4gICAgaWYgKHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmFmdGVyRmFkZU91dChlbClcbiAgICB9XG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZhZGVJblRpbWVvdXQgPSAyMCAvLyAobXMpIERPIE5PVCBNQUtFIFRISVMgVkFMVUUgU01BTExFUi4gU2VlIGJlbG93XG5cbiAgICAgIC8vIEFsdGhvdWdoIG1vc3QgYnJvd3NlcnMgY2FuIGhhbmRsZSB2YWx1ZXMgbGVzcyB0aGFuIDIwbXMsIGl0IHNob3VsZCByZW1haW4gYWJvdmUgdGhpcyB2YWx1ZS5cbiAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBhcmUgd2FpdGluZyBmb3IgYSBcImJyb3dzZXIgcmVkcmF3XCIgYmVmb3JlIHdlIHJlbW92ZSB0aGUgJ2NjLWludmlzaWJsZScgY2xhc3MuXG4gICAgICAvLyBJZiB0aGUgY2xhc3MgaXMgcmVtdm9lZCBiZWZvcmUgYSByZWRyYXcgY291bGQgaGFwcGVuLCB0aGVuIHRoZSBmYWRlSW4gZWZmZWN0IFdJTEwgTk9UIHdvcmssIGFuZFxuICAgICAgLy8gdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGZyb20gbm90aGluZy4gVGhlcmVmb3JlIHdlIE1VU1QgYWxsb3cgZW5vdWdoIHRpbWUgZm9yIHRoZSBicm93c2VyIHRvIGRvXG4gICAgICAvLyBpdHMgdGhpbmcuIFRoZSBhY3R1YWxseSBkaWZmZXJlbmNlIGJldHdlZW4gdXNpbmcgMCBhbmQgMjAgaW4gYSBzZXQgdGltZW91dCBpcyBuZWdsZWdpYmxlIGFueXdheVxuICAgICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHRoaXMuYWZ0ZXJGYWRlSW4oZWwpLFxuICAgICAgICBmYWRlSW5UaW1lb3V0XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGFmdGVyICdmYWRlSW4nLiBUaGlzIGlzIHRoZSBjb2RlIHRoYXQgYWN0dWFsbHkgY2F1c2VzIHRoZSBmYWRlSW4gdG8gd29ya1xuICAgKiBUaGVyZSBpcyBhIGdvb2QgcmVhc29uIHdoeSBpdCdzIGNhbGxlZCBpbiBhIHRpbWVvdXQuIFJlYWQgJ2ZhZGVJbidcbiAgICovXG4gIGFmdGVyRmFkZUluKCBlbGVtZW50ICkge1xuICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBudWxsXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYy1pbnZpc2libGUnKVxuICB9XG4gIFxuICBmYWRlT3V0KCkge1xuICAgIGlmICghdGhpcy5oYXNUcmFuc2l0aW9uIHx8ICF0aGlzLmVsZW1lbnQpIHJldHVyblxuXG4gICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5pbmdUaW1lb3V0KVxuICAgICAgdGhpcy5hZnRlckZhZGVJbih0aGlzLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gJydcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSAoKSA9PiB0aGlzLmFmdGVyRmFkZU91dCh0aGlzLmVsZW1lbnQpXG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxuXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcbiAgICB9XG4gIH1cbiAgXG4gIGFmdGVyRmFkZU91dChlbCkge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbilcbiAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IG51bGxcbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5lbGVtZW50ICYmXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJycgJiZcbiAgICAgICh0aGlzLmhhc1RyYW5zaXRpb24gPyAhdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykgOiB0cnVlKVxuICAgIClcbiAgfVxuXG4gIHRvZ2dsZVJldm9rZUJ1dHRvbihzaG93KSB7XG4gICAgaWYgKHRoaXMucmV2b2tlQnRuKSB0aGlzLnJldm9rZUJ0bi5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnXG4gIH1cblxuICByZXZva2VDaG9pY2UocHJldmVudE9wZW4pIHtcbiAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLmNsZWFyU3RhdHVzZXMoKVxuXG4gICAgdGhpcy5lbWl0KCBcInJldm9rZUNob2ljZVwiIClcblxuICAgIGlmICghcHJldmVudE9wZW4pIHtcbiAgICAgIHRoaXMuYXV0b09wZW4oKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYXMgdGhlIHVzZXIgcmVzcG9uZGVkIHRvIHRoZSBiYW5uZXJcbiAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIHRydWUgaWYgYW55IGNvb2tpZXMgaGF2ZSBiZWVuIHNldFxuICAgKi9cbiAgaGFzQW5zd2VyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5zb21lKCBzdGF0dXMgPT4gISFzdGF0dXMgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0byBhbGwgb2YgdGhlIGNhdGVnb3JpZXNcbiAgICogQHJldHVybiB7IGFycmF5PGJvb2xlYW4+IH0gLSB0cnVlIGlmIGNvbnNlbnQgaGFzIGJlZW4gZ2l2ZW5cbiAgICovXG4gIGhhc0NvbnNlbnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLm1hcCggc3RhdHVzID0+IHN0YXR1cyA9PT0gc3RhdHVzQWxsb3cgfHwgc3RhdHVzID09PSBzdGF0dXNEaXNtaXNzIClcbiAgfVxuXG4gIC8vIG9wZW5zIHRoZSBwb3B1cCBpZiBubyBhbnN3ZXIgaGFzIGJlZW4gZ2l2ZW5cbiAgYXV0b09wZW4oKSB7XG4gICAgY29uc3QgaGFzQW5zd2VyZWQgPSB0aGlzLmhhc0Fuc3dlcmVkKClcbiAgICBpZiAoIWhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICB0aGlzLm9wZW4oKVxuICAgIH0gZWxzZSBpZiAoaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSlcbiAgICB9XG4gIH1cblxuICAvKiogXG4gICAqIFNldCdzIGNvb2tpZSBzdGF0dXNlc1xuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGFsbE9yVW5kZWYgICAgICAtIElmIHRoaXMgaXMgdGhlIG9ubHkgcGFyYW0sIHNldCBBTEwgaWYgbm90LCBzZXQgVW5jYXRlZ29yaXplZCBjb29raWVzIHN0YXR1c2VzIHNldCB0byB2YWx1ZS5cbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gcGVyc29uYWxpemF0aW9uIC0gUHJlZmVyZW5jZXMgLyBGdW5jdGlvbmFsaXR5IHNldCB0byB2YWx1ZVxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGFuYWx5dGljcyAgICAgICAtIEFuYWx5dGlzIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICogQHJldHVybiB7IHVuZGVmaW5lZCB9XG4gICovXG4gIHNldFN0YXR1c2VzKCkge1xuICAgIGNvbnN0IHtuYW1lLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZX0gPSB0aGlzLm9wdGlvbnMuY29va2llXG5cbiAgICAvLyBpZiBgc3RhdHVzYCBpcyB2YWxpZFxuICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcbiAgICAgIGlmIChpc1ZhbGlkU3RhdHVzKHN0YXR1cykpIHtcbiAgICAgICAgY29uc3QgY29va2llTmFtZSA9IG5hbWUrJ18nK2NhdGVnb3J5TmFtZVxuICAgICAgICBjb25zdCBjaG9zZW5CZWZvcmUgPSBzdGF0dXNlcy5pbmRleE9mKCBnZXRDb29raWUoY29va2llTmFtZSkgKSA+PSAwXG4gICAgICAgIHNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxuICAgICAgICB0aGlzLmVtaXQoIFwic3RhdHVzQ2hhbmdlZFwiLCBjb29raWVOYW1lLCBzdGF0dXMsIGNob3NlbkJlZm9yZSApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyU3RhdHVzZXMoKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcnkgXSApIClcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGFyZ3VtZW50c1sgMCBdICkgKVxuICAgIH0gZWxzZSBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xuICAgICAgYXJndW1lbnRzLmZvckVhY2goICggY2F0ZWdvcnlTdGF0dXMsIGluZGV4ICkgPT4ge1xuICAgICAgICB1cGRhdGVDYXRlZ29yeVN0YXR1cyggdGhpcy51c2VyQ2F0ZWdvcmllc1sgaW5kZXggXSwgY2F0ZWdvcnlTdGF0dXMgKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAqIEByZXR1cm4geyBhcnJheTxzdHJpbmc+IH0gLSBjb29raWUgY2F0ZWdvcmllcyBzdGF0dXMgaW4gb3JkZXIgb2YgY2F0ZWdvcmllc1xuICAgKi9cbiAgZ2V0U3RhdHVzZXMoKSB7XG4gICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeU5hbWUgPT4gZ2V0Q29va2llKHRoaXMub3B0aW9ucy5jb29raWUubmFtZSsnXycrY2F0ZWdvcnlOYW1lKSApXG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICovXG4gIGNsZWFyU3RhdHVzZXMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBkb21haW4sIHBhdGggfSA9IHRoaXMub3B0aW9ucy5jb29raWVcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5TmFtZSA9PiB7XG4gICAgICBzZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnlOYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aClcbiAgICB9KVxuICB9XG4gIFxuICBjYW5Vc2VDb29raWVzKCkge1xuICAgIGlmICghd2luZG93Lm5hdmlnYXRvci5jb29raWVFbmFibGVkIHx8IHdpbmRvdy5Db29raWVzT0sgfHwgd2luZG93Lm5hdmlnYXRvci5Db29raWVzT0sgKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1c2VzVmFsdWVzID0gdGhpcy5nZXRTdGF0dXNlcygpXG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IGlzVmFsaWRTdGF0dXMoIHN0YXR1cyApIH0gKSApXG4gICAgY29uc3QgaGFzTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtYXRjaCA9PiBtYXRjaFtPYmplY3Qua2V5cyhtYXRjaClbMF1dICkubGVuZ3RoID4gMFxuICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+XG4gICAgICB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gPT09IHN0YXR1c1xuICAgICAgICA/IHN0YXR1cyA6IHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSApXG5cbiAgICByZXR1cm4gaGFzTWF0Y2hlc1xuICB9XG5cbiAgLy8gdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XG4gIGdldFBvc2l0aW9uQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKS5tYXAoIHBvcyA9PiAnY2MtJytwb3MpXG4gIH1cblxuICBnZXRQb3B1cENsYXNzZXMoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuICAgIGxldCBwb3NpdGlvblN0eWxlID1cbiAgICAgIG9wdHMucG9zaXRpb24gPT0gJ3RvcCcgfHwgb3B0cy5wb3NpdGlvbiA9PSAnYm90dG9tJ1xuICAgICAgICA/ICdiYW5uZXInXG4gICAgICAgIDogJ2Zsb2F0aW5nJ1xuXG4gICAgaWYgKGlzTW9iaWxlKCkgJiYgb3B0cy5tb2JpbGVGb3JjZUZsb2F0KSB7XG4gICAgICBwb3NpdGlvblN0eWxlID0gJ2Zsb2F0aW5nJ1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAnY2MtJyArIHBvc2l0aW9uU3R5bGUsIC8vIGZsb2F0aW5nIG9yIGJhbm5lclxuICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcbiAgICAgICdjYy10aGVtZS0nICsgb3B0cy50aGVtZSwgLy8gYWRkIHRoZSB0aGVtZVxuICAgIF1cblxuICAgIGlmIChvcHRzLnN0YXRpYykge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKVxuICAgIH1cblxuICAgIGNsYXNzZXMucHVzaC5hcHBseShjbGFzc2VzLCB0aGlzLmdldFBvc2l0aW9uQ2xhc3NlcygpKVxuXG4gICAgLy8gd2Ugb25seSBhZGQgZXh0cmEgc3R5bGVzIGlmIGBwYWxldHRlYCBoYXMgYmVlbiBzZXQgdG8gYSB2YWxpZCB2YWx1ZVxuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUGFsZXR0ZSh0aGlzLm9wdGlvbnMucGFsZXR0ZSlcblxuICAgIC8vIGlmIHdlIG92ZXJyaWRlIHRoZSBwYWxldHRlLCBhZGQgdGhlIGNsYXNzIHRoYXQgZW5hYmxlcyB0aGlzXG4gICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xuICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3Nlc1xuICB9XG5cbiAgZ2V0UG9wdXBJbm5lck1hcmt1cCgpIHtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZWQgPSB7fVxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcblxuICAgIC8vIHJlbW92ZXMgbGluayBpZiBzaG93TGluayBpcyBmYWxzZVxuICAgIGlmICghb3B0cy5zaG93TGluaykge1xuICAgICAgb3B0cy5lbGVtZW50cy5saW5rID0gJycgXG4gICAgICBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VsaW5rID0gb3B0cy5lbGVtZW50cy5tZXNzYWdlXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMob3B0cy5lbGVtZW50cykuZm9yRWFjaCggcHJvcCA9PiB7XG4gICAgICBpbnRlcnBvbGF0ZWRbcHJvcF0gPSBpbnRlcnBvbGF0ZVN0cmluZyhcbiAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcbiAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyID0gb3B0cy5jb250ZW50W25hbWVdXG4gICAgICAgICAgcmV0dXJuIG5hbWUgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyAmJiBzdHIubGVuZ3RoID8gc3RyIDogJydcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pXG5cbiAgICAvLyBjaGVja3MgaWYgdGhlIHR5cGUgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGluZm8gaWYgaXQncyBub3RcbiAgICBsZXQgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2Vbb3B0cy50eXBlXVxuICAgIGlmICghY29tcGxpYW5jZVR5cGUpIHtcbiAgICAgIGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlLmluZm9cbiAgICB9XG5cbiAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXG4gICAgaW50ZXJwb2xhdGVkLmNvbXBsaWFuY2UgPSBpbnRlcnBvbGF0ZVN0cmluZyggY29tcGxpYW5jZVR5cGUsIG5hbWUgPT4gaW50ZXJwb2xhdGVkW25hbWVdIClcblxuICAgIC8vIGNoZWNrcyBpZiB0aGUgbGF5b3V0IGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBiYXNpYyBpZiBpdCdzIG5vdFxuICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdXG4gICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgIGxheW91dCA9IG9wdHMubGF5b3V0cy5iYXNpY1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW50ZXJwb2xhdGVTdHJpbmcobGF5b3V0LCBtYXRjaCA9PmludGVycG9sYXRlZFttYXRjaF0gKVxuICB9XG5cbiAgYXBwZW5kTWFya3VwKG1hcmt1cCkge1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNvbnQgPVxuICAgICAgb3B0cy5jb250YWluZXIgJiYgb3B0cy5jb250YWluZXIubm9kZVR5cGUgPT09IDFcbiAgICAgICAgPyBvcHRzLmNvbnRhaW5lclxuICAgICAgICA6IGRvY3VtZW50LmJvZHlcblxuICAgIGRpdi5pbm5lckhUTUwgPSBtYXJrdXBcblxuICAgIGNvbnN0IGVsID0gZGl2LmNoaWxkcmVuWzBdXG5cbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy13aW5kb3cnKSAmJiB0aGlzLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXG4gICAgfVxuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKCBldmVudCApIClcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNjLWJ0biBbdHlwZT1cImNoZWNrYm94XCJdJyApLmZvckVhY2goIGNoZWNrYm94ID0+IHtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNoZWNrYm94Lm5hbWUudG9VcHBlckNhc2UoKSBdID0gY2hlY2tib3guY2hlY2tlZCA/ICdBTExPVycgOiAnREVOWSdcbiAgICAgIH0pXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpIClcbiAgICB9KVxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICBzaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICBpZiAoIHRoaXMgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgICkge1xuICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAob3B0cy5hdXRvQXR0YWNoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZWwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udC5pbnNlcnRCZWZvcmUoZWwsIGNvbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIk5vIGNvbnRhaW5lciB0byBhdHRhY2ggdG9vLiBNYWtlIHN1cmUgdGhlIERPTSBoYXMgbG9hZGVkLiBJcyB5b3VyIHNjcmlwdCBsb2FkZWQganVzdCBiZWZvcmUgdGhlIGA8L2JvZHk+YCB0YWc/XCIgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgY2xhc3MsIG9yIHRoZSBvcmlnaW5hbCBlbGVtZW50IC0gbnVsbCBpZiBub3QgZm91bmRcbiAgICBjb25zdCBidG4gPSB0cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0XG4gICAgXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXNhdmUnICkpe1xuICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgfVxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gYnRuLmNsYXNzTmFtZS5tYXRjaChcbiAgICAgICAgbmV3IFJlZ0V4cCgnXFxcXGJjYy0oJyArIHN0YXR1c2VzLm1hcCggc3RyID0+IHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcbiAgICAgIClcbiAgICAgIGNvbnN0IG1hdGNoID0gKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkgfHwgZmFsc2VcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKG1hdGNoKVxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtY2xvc2UnICkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICB9XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1yZXZva2UnICkpIHtcbiAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKClcbiAgICB9XG4gIH1cblxuICBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcbiAgICBjb25zdCBoYXNoU3RyID0gaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSlcbiAgICBjb25zdCBzZWxlY3RvciA9ICdjYy1jb2xvci1vdmVycmlkZS0nICsgaGFzaFN0clxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1BsYWluT2JqZWN0KHBhbGV0dGUpXG5cbiAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsXG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgYWRkQ3VzdG9tU3R5bGVzaGVldChoYXNoU3RyLCBwYWxldHRlLCAnLicgKyBzZWxlY3RvcilcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWRcbiAgfVxuXG5cbiAgZ2V0RXZlbnRQYXRoKCBldmVudCApIHtcbiAgICBjb25zdCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XG4gICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XG4gICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0pKFtdLGV2ZW50LnRhcmdldCApXG4gICAgaWYgKCAhcGF0aCApIHtcbiAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gcGF0aFxuICB9XG5cbiAgYXBwbHlBdXRvRGlzbWlzcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmFibGVkLFxuICAgICAgZGlzbWlzc09uVGltZW91dCAgOiBkZWxheSxcbiAgICAgIGRpc21pc3NPblNjcm9sbCAgIDpzY3JvbGxSYW5nZSxcbiAgICAgIGRpc21pc3NPbkxpbmtDbGljayxcbiAgICAgIGRpc21pc3NPbldpbmRvd0NsaWNrLFxuICAgICAgZGlzbWlzc09uS2V5UHJlc3NcbiAgICB9ID0gdGhpcy5vcHRpb25zXG5cbiAgICBpZiAoIGVuYWJsZWQgKSB7XG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHNldFRpbWVvdXQoICgpPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICAgIH0sIE1hdGguZmxvb3IoZGVsYXkpKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2Nyb2xsUmFuZ2UgPT0gJ251bWJlcicgJiYgc2Nyb2xsUmFuZ2UgPj0gMCkge1xuICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBNYXRoLmZsb29yKHNjcm9sbFJhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbldpbmRvd0NsaWNrKSB7XG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKCAhZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtZW50ID0+XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbS5zb21lKCBpZ25vcmVkQ2xpY2sgPT5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbkxpbmtDbGljaykge1xuICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBpZiAoIGdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbSA9PiB0eXBlb2YgZWxlbS50YWdOYW1lICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtLnRhZ05hbWUgPT09ICdBJyApICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXG4gICAgICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgfSBlbHNlIGlmICggZGlzbWlzc09uS2V5UHJlc3MgKSB7XG4gICAgICAgICAgdGhpcy5vbktleVByZXNzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudFxuICAgICAgICAgICAgaWYgKCBrZXlDb2RlID09PSAxMyApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzQWxsb3cgKVxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseVJldm9rZUJ1dHRvbigpIHtcbiAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXG4gICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJykgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWVcbiAgICAvLyBhbmltYXRlUmV2b2thYmxlIGZhbHNlIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgIGlmIChpc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLXRoZW1lLScrdGhpcy5vcHRpb25zLnRoZW1lKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSApXG4gICAgICBjb25zdCByZXZva2VCdG4gPSB0aGlzLm9wdGlvbnMucmV2b2tlQnRuXG4gICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxuICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSlcblxuICAgICAgdGhpcy5yZXZva2VCdG4gPSB0aGlzLmFwcGVuZE1hcmt1cChyZXZva2VCdG4pXG5cbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB0aHJvdHRsZShmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICBjb25zdCBtaW5ZID0gMjBcbiAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjBcblxuICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XG4gICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhY3RpdmUgJiYgIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKVxuXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlc3Ryb3koKXtcbiAgICBjb25zb2xlLndhcm4oIFwiRGVzdHJveWluZy4uLlwiKVxuICAgIGlmICggdGhpcy5lbGVtZW50ICl7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKCB0aGlzLnJldm9rZUJ0biApe1xuICAgICAgdGhpcy5yZXZva2VCdG4ucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKCB0aGlzLm9uV2luZG93U2Nyb2xsICl7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCApXG4gICAgfVxuICAgIGlmICggdGhpcy5vbldpbmRvd0NsaWNrICkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrIClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcbiAgICB9XG4gICAgaWYgKCB0aGlzLm9uTGlua0NsaWNrICkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcbiAgICB9XG4gICAgaWYgKCB0aGlzLm9uS2V5UHJlc3MgKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29ua2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MgKVxuICAgIH1cbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXG4gIC8vIElmIHRydWUsIG9wdGlvbnMgY2FuIGRpZmZlciBieSBjb3VudHJ5LCBkZXBlbmRpbmcgb24gdGhlaXIgY29va2llIGxhdy5cbiAgLy8gSXQgZG9lcyBub3QgYWZmZWN0IGhpZGluZyB0aGUgcG9wdXAgZm9yIGNvdW50cmllcyB0aGF0IGRvIG5vdCBoYXZlIGNvb2tpZSBsYXcuXG4gIHJlZ2lvbmFsTGF3OiB0cnVlLFxuXG4gIC8vIGNvdW50cmllcyB0aGF0IGVuZm9yY2Ugc29tZSB2ZXJzaW9uIG9mIGEgY29va2llIGxhd1xuICBoYXNMYXc6IFtcbiAgICAnQVQnLFxuICAgICdCRScsXG4gICAgJ0JHJyxcbiAgICAnSFInLFxuICAgICdDWicsXG4gICAgJ0NZJyxcbiAgICAnREsnLFxuICAgICdFRScsXG4gICAgJ0ZJJyxcbiAgICAnRlInLFxuICAgICdERScsXG4gICAgJ0VMJyxcbiAgICAnSFUnLFxuICAgICdJRScsXG4gICAgJ0lUJyxcbiAgICAnTFYnLFxuICAgICdMVCcsXG4gICAgJ0xVJyxcbiAgICAnTVQnLFxuICAgICdOTCcsXG4gICAgJ05PJyxcbiAgICAnUEwnLFxuICAgICdQVCcsXG4gICAgJ1NLJyxcbiAgICAnRVMnLFxuICAgICdTRScsXG4gICAgJ0dCJyxcbiAgICAnVUsnLFxuICAgICdHUicsXG4gICAgJ0VVJyxcbiAgICAnUk8nXG4gIF0sXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYWxsIGNvb2tpZSBjb25zZW50IGNob2ljZXMgbXVzdCBiZSByZXZva2FibGUgKGEgdXNlciBtdXN0IGJlIGFibGUgdG9vIGNoYW5nZSB0aGVpciBtaW5kKVxuICByZXZva2FibGU6IFtcbiAgICAnSFInLFxuICAgICdDWScsXG4gICAgJ0RLJyxcbiAgICAnRUUnLFxuICAgICdGUicsXG4gICAgJ0RFJyxcbiAgICAnTFYnLFxuICAgICdMVCcsXG4gICAgJ05MJyxcbiAgICAnTk8nLFxuICAgICdQVCcsXG4gICAgJ0VTJ1xuICBdLFxuXG4gIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGEgcGVyc29uIGNhbiBvbmx5IFwiY29uc2VudFwiIGlmIHRoZSBleHBsaWNpdGx5IGNsaWNrIG9uIFwiSSBhZ3JlZVwiLlxuICAvLyBpbiB0aGVzZSBjb3VudHJpZXMsIGNvbnNlbnQgY2Fubm90IGJlIGltcGxpZWQgdmlhIGEgdGltZW91dCBvciBieSBzY3JvbGxpbmcgZG93biB0aGUgcGFnZVxuICBleHBsaWNpdEFjdGlvbjogWydIUicsICdJVCcsICdFUycsICdOTyddXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuY29uc3QgdG9FcnJvciA9IG9iaiA9PiBuZXcgRXJyb3IoJ0Vycm9yIFsnICsgKG9iai5jb2RlIHx8ICdVTktOT1dOJykgKyAnXTogJyArIG9iai5lcnJvcilcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBUaGUgZGVmYXVsdCB0aW1lb3V0IGlzIDUgc2Vjb25kcy4gVGhpcyBpcyBtYWlubHkgbmVlZGVkIHRvIGNhdGNoIEpTT05QIHJlcXVlc3RzIHRoYXQgZXJyb3IuXG4gIC8vIE90aGVyd2lzZSB0aGVyZSBpcyBubyBlYXN5IHdheSB0byBjYXRjaCBKU09OUCBlcnJvcnMuIFRoYXQgbWVhbnMgdGhhdCBpZiBhIEpTT05QIGZhaWxzLCB0aGVcbiAgLy8gYXBwIHdpbGwgdGFrZSBgdGltZW91dGAgbWlsbGlzZWNvbmRzIHRvIHJlYWN0IHRvIGEgSlNPTlAgbmV0d29yayBlcnJvci5cbiAgdGltZW91dDogNTAwMCxcblxuICAvLyB0aGUgb3JkZXIgdGhhdCBzZXJ2aWNlcyB3aWxsIGJlIGF0dGVtcHRlZCBpblxuICBzZXJ2aWNlczogW1xuICAgICdpcGluZm8nXG5cbiAgICAvKlxuXG4gICAgLy8gJ2lwaW5mb2RiJyByZXF1aXJlcyBzb21lIG9wdGlvbnMsIHNvIHdlIGRlZmluZSBpdCB1c2luZyBhbiBvYmplY3RcbiAgICAvLyB0aGlzIG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzZXJ2aWNlXG5cbiAgICB7XG4gICAgICBuYW1lOiAnaXBpbmZvZGInLFxuICAgICAgaW50ZXJwb2xhdGVVcmw6IHtcbiAgICAgICAgLy8gb2J2aW91c2x5LCB0aGlzIGlzIGEgZmFrZSBrZXlcbiAgICAgICAgYXBpX2tleTogJ3ZPZ0kzNzQ4ZG5JeXRJcnNKY3hTN3FzRGY2a2JKa0U5bE40eUVEclhBcVhjS1VOdmpqWlBveDNla1hxbU1NbGQnXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBhcyB3ZWxsIGFzIGRlZmluaW5nIGFuIG9iamVjdCwgeW91IGNhbiBkZWZpbmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0XG5cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge25hbWU6ICdpcGluZm9kYid9XG4gICAgfSxcblxuICAgICovXG4gIF0sXG5cbiAgc2VydmljZURlZmluaXRpb25zOiB7XG4gICAgaXBpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxuICAgICAgICB1cmw6ICcvL2lwaW5mby5pbycsXG4gICAgICAgIGhlYWRlcnM6IFsnQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yXG4gICAgICAgICAgICAgID8gdG9FcnJvcihqc29uKVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBUaGlzIHNlcnZpY2UgcmVxdWlyZXMgYW4gb3B0aW9uIHRvIGRlZmluZSBga2V5YC4gT3B0aW9ucyBhcmUgcHJvaXZlZCB1c2luZyBvYmplY3RzIG9yIGZ1bmN0aW9uc1xuICAgIGlwaW5mb2RiOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxuICAgICAgICB1cmw6XG4gICAgICAgICAgJy8vYXBpLmlwaW5mb2RiLmNvbS92My9pcC1jb3VudHJ5Lz9rZXk9e2FwaV9rZXl9JmZvcm1hdD1qc29uJmNhbGxiYWNrPXtjYWxsYmFja30nLFxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBpcyBKU09OUCwgdGhlcmVmb3JlIHdlIG11c3Qgc2V0IGl0IHRvIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4ganNvbi5zdGF0dXNDb2RlID09ICdFUlJPUidcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKHtlcnJvcjoganNvbi5zdGF0dXNNZXNzYWdlfSlcbiAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1heG1pbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUgd2hpY2ggZGVmaW5lcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuIE9uY2UgbG9hZGVkLCB3ZSBtdXN0XG4gICAgICAgIC8vIG1ha2UgYW4gYWRkaXRpb25hbCBBSkFYIGNhbGwuIFRoZXJlZm9yZSB3ZSBwcm92aWRlIGEgYGRvbmVgIGNhbGxiYWNrIHRoYXQgY2FuIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICB1cmw6ICcvL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcbiAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlLCBzbyBpdCBtdXN0IGJlIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXG4gICAgICAgICAgaWYgKCF3aW5kb3cuZ2VvaXAyKSB7XG4gICAgICAgICAgICBkb25lKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0LiBUaGUgZG93bmxvYWRlZCBzY3JpcHQgc2hvdWxkIGhhdmUgZXhwb3J0ZWQgYGdlb2lwMmAgdG8gdGhlIGdsb2JhbCBzY29wZSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXG4gICAgICAgICAgICBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRvbmUoe1xuICAgICAgICAgICAgICAgICAgY29kZTogbG9jYXRpb24uY291bnRyeS5pc29fY29kZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcblxuICAgICAgICAgIC8vIFdlIGNhbid0IHJldHVybiBhbnl0aGluZywgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBzZWNvbmQgQUpBWCBjYWxsIHRvIHJldHVybi5cbiAgICAgICAgICAvLyBUaGVuIHdlIGNhbiAnY29tcGxldGUnIHRoZSBzZXJ2aWNlIGJ5IHBhc3NpbmcgZGF0YSBvciBhbiBlcnJvciB0byB0aGUgYGRvbmVgIGNhbGxiYWNrLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBpZiBmYWxzZSwgdGhpcyBwcmV2ZW50cyB0aGUgcG9wdXAgZnJvbSBzaG93aW5nICh1c2VmdWwgZm9yIGdpdmluZyB0byBjb250cm9sIHRvIGFub3RoZXIgcGllY2Ugb2YgY29kZSlcbiAgZW5hYmxlZDogdHJ1ZSxcblxuICAvLyBvcHRpb25hbCAoZXhwZWN0aW5nIGEgSFRNTCBlbGVtZW50KSBpZiBwYXNzZWQsIHRoZSBwb3B1cCBpcyBhcHBlbmRlZCB0byB0aGlzIGVsZW1lbnQuIGRlZmF1bHQgaXMgYGRvY3VtZW50LmJvZHlgXG4gIGNvbnRhaW5lcjogbnVsbCxcblxuICAvLyBkZWZhdWx0cyBjb29raWUgb3B0aW9ucyAtIGl0IGlzIFJFQ09NTUVOREVEIHRvIHNldCB0aGVzZSB2YWx1ZXMgdG8gY29ycmVzcG9uZCB3aXRoIHlvdXIgc2VydmVyXG4gIGNvb2tpZToge1xuICAgIC8vIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhpcyBjb29raWUgLSB5b3UgY2FuIGlnbm9yZSB0aGlzXG4gICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcbiAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXG4gICAgcGF0aDogJy8nLFxuICAgIC8vIFRoaXMgaXMgdGhlIGRvbWFpbiB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBvbiB0aGlzIGRvbWFpbi5cbiAgICAvLyAgLSBHdWlkZSB0byBjb29raWUgZG9tYWlucyAtIGh0dHBzOi8vd3d3Lm14c2FzaGEuZXUvYmxvZy8yMDE0LzAzLzA0L2RlZmluaXRpdmUtZ3VpZGUtdG8tY29va2llLWRvbWFpbnMvXG4gICAgZG9tYWluOiAnJyxcbiAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcbiAgICBleHBpcnlEYXlzOiAzNjUsXG4gICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cbiAgICBzZWN1cmU6IGZhbHNlXG4gIH0sXG5cbiAgLy8gZWFjaCBpdGVtIGRlZmluZXMgdGhlIGlubmVyIHRleHQgZm9yIHRoZSBlbGVtZW50IHRoYXQgaXQgcmVmZXJlbmNlc1xuICBjb250ZW50OiB7XG4gICAgaGVhZGVyIDogJ0Nvb2tpZXMgdXNlZCBvbiB0aGUgd2Vic2l0ZSEnLFxuICAgIG1lc3NhZ2U6ICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcbiAgICBkaXNtaXNzOiAnR290IGl0IScsXG4gICAgYWxsb3cgIDogJ0FsbG93IGNvb2tpZXMnLFxuICAgIGRlbnkgICA6ICdEZWNsaW5lJyxcbiAgICBsaW5rICAgOiAnTGVhcm4gbW9yZScsXG4gICAgaHJlZiAgIDogJ2h0dHBzOi8vd3d3LmNvb2tpZXNhbmR5b3UuY29tJyxcbiAgICBjbG9zZSAgOiAnJiN4Mjc0YycsXG4gICAgdGFyZ2V0IDogJ19ibGFuaycsXG4gICAgcG9saWN5IDogJ0Nvb2tpZSBQb2xpY3knXG4gIH0sXG5cbiAgLy8gVGhpcyBpcyB0aGUgSFRNTCBmb3IgdGhlIGVsZW1lbnRzIGFib3ZlLiBUaGUgc3RyaW5nIHt7aGVhZGVyfX0gd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBlcXVpdmFsZW50IHRleHQgYmVsb3cuXG4gIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXG4gIC8vXG4gIC8vICAtIEFSSUEgcnVsZXMgc3VnZ2VzdCB0byBlbnN1cmUgY29udHJvbHMgYXJlIHRhYmJhYmxlIChzbyB0aGUgYnJvd3NlciBjYW4gZmluZCB0aGUgZmlyc3QgY29udHJvbCksXG4gIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXG4gIGVsZW1lbnRzOiB7XG4gICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJjYy1oZWFkZXJcIj57e2hlYWRlcn19PC9zcGFuPiZuYnNwJyxcbiAgICBtZXNzYWdlOlxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+JyxcbiAgICBtZXNzYWdlbGluazpcbiAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxuICAgIGRpc21pc3M6XG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy1kaXNtaXNzXCI+e3tkaXNtaXNzfX08L2E+JyxcbiAgICBhbGxvdzpcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwiYWxsb3cgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiICBjbGFzcz1cImNjLWJ0biBjYy1hbGxvd1wiPnt7YWxsb3d9fTwvYT4nLFxuICAgIGRlbnk6XG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRlbnlcIj57e2Rlbnl9fTwvYT4nLFxuICAgIGxpbms6XG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+JyxcbiAgICBjbG9zZTpcbiAgICAgICc8c3BhbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtY2xvc2VcIj57e2Nsb3NlfX08L3NwYW4+JyxcbiAgICBjYXRlZ29yaWVzOiBgIFxuICAgICAgPHVsIGNsYXNzPVwiY2MtY2F0ZWdvcmllc1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjBcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInVuY2F0ZWdvcml6ZWRcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+VW5jYXRlZ29yaXplZDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJVbmNhdGVnb3JpemVkIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIxXCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB0aGF0IGRvbid0IGZpdCBhbnkgb3RoZXIgY2F0ZWdvcnkuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVzc2VudGlhbFwiIGNoZWNrZWQgZGlzYWJsZWQvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkVzc2VudGlhbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJFc3NlbnRpYWwgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjNcIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBlc3NlbnRpYWwgYXBwbGljYXRpb24gb3Igd2Vic2l0ZSBvcHBlcmF0aW9uIGNvb2tpZXMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjRcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBlcnNvbmFsaXphdGlvblwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5QZXJzb25hbGl6YXRpb248L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiUGVyc29uYWxpemF0aW9uIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI1XCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB0aGUgYXBwbGljYXRpb24gdG8gYSBzcGVjaWZpYyB1c2VyLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCI2XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhbmFseXRpY3NcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+QW5hbHl0aWNzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkFuYWx5dGljcyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiN1wiPl48L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIGFuYWx5aXplIGRhdGEuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjhcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hcmtldGluZ1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5NYXJrZXRpbmc8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiTWFya2V0aW5nIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI5XCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB5b3VyIGludGVybmV0IHNob3BwaW5nICYgYWR2ZXJ0aXNlbWVudCBleHBlcmllbmNlcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIGAsXG4gICAgc2F2ZTogYDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2Mtc2F2ZVwiPlNhdmU8L2J1dHRvbj5gXG4gICAgLy9jb21wbGlhbmNlOiBjb21wbGlhbmNlIGlzIGFsc28gYW4gZWxlbWVudCwgYnV0IGl0IGlzIGdlbmVyYXRlZCBieSB0aGUgYXBwbGljYXRpb24sIGRlcGVuZGluZyBvbiBgdHlwZWAgYmVsb3dcbiAgfSxcblxuICAvLyBUaGUgcGxhY2Vob2xkZXJzIHt7Y2xhc3Nlc319IGFuZCB7e2NoaWxkcmVufX0gYm90aCBnZXQgcmVwbGFjZWQgZHVyaW5nIGluaXRpYWxpc2F0aW9uOlxuICAvLyAgLSB7e2NsYXNzZXN9fSBpcyB3aGVyZSBhZGRpdGlvbmFsIGNsYXNzZXMgZ2V0IGFkZGVkXG4gIC8vICAtIHt7Y2hpbGRyZW59fSBpcyB3aGVyZSB0aGUgSFRNTCBjaGlsZHJlbiBhcmUgcGxhY2VkXG4gIHdpbmRvdzpcbiAgICAnPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1sYWJlbD1cImNvb2tpZWNvbnNlbnRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy13aW5kb3cge3tjbGFzc2VzfX1cIj48IS0tZ29vZ2xlb2ZmOiBhbGwtLT57e2NoaWxkcmVufX08IS0tZ29vZ2xlb246IGFsbC0tPjwvZGl2PicsXG4gIFxuICBtb2RhbDogJycsXG5cbiAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxuICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXG4gIHJldm9rZUJ0bjogJzxkaXYgY2xhc3M9XCJjYy1yZXZva2Uge3tjbGFzc2VzfX1cIj57e3BvbGljeX19PC9kaXY+JyxcblxuICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcbiAgY29tcGxpYW5jZToge1xuICAgIGluZm86ICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZVwiPnt7ZGlzbWlzc319PC9kaXY+JyxcbiAgICAnb3B0LWluJzpcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxuICAgICdvcHQtb3V0JzpcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+JyxcbiAgICBjYXRlZ29yaWVzOiAnPGRpdiBjbGFzcz1cImZvcm1cIj57e2NhdGVnb3JpZXN9fXt7c2F2ZX19PC9kaXY+J1xuICB9LFxuXG4gIC8vIHNlbGVjdCB5b3VyIHR5cGUgb2YgcG9wdXAgaGVyZVxuICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgLy8gZGVmaW5lIGxheW91dCBsYXlvdXRzIGhlcmVcbiAgbGF5b3V0czoge1xuICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgYmFzaWMgICAgICAgICA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fScsXG4gICAgJ2Jhc2ljLWNsb3NlJyA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fXt7Y2xvc2V9fScsXG4gICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19J1xuICAgIC8vIGFkZCBhIGN1c3RvbSBsYXlvdXQgaGVyZSwgdGhlbiBhZGQgc29tZSBuZXcgY3NzIHdpdGggdGhlIGNsYXNzICcuY2MtbGF5b3V0LW15LWNvb2wtbGF5b3V0J1xuICAgIC8vJ215LWNvb2wtbGF5b3V0JzogJzxkaXYgY2xhc3M9XCJteS1zcGVjaWFsLWxheW91dFwiPnt7bWVzc2FnZX19e3tjb21wbGlhbmNlfX08L2Rpdj57e2Nsb3NlfX0nLFxuICB9LFxuXG4gIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXG4gIGxheW91dDogJ2Jhc2ljJyxcblxuICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XG4gIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXG4gIC8vICAtIGZsb2F0aW5nIHBvc2l0aW9uczogdG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQsIGJvdHRvbS1yaWdodFxuICAvL1xuICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcbiAgcG9zaXRpb246ICdib3R0b20nLCAvLyBkZWZhdWx0IHBvc2l0aW9uIGlzICdib3R0b20nXG5cbiAgLy8gQXZhaWxhYmxlIHN0eWxlc1xuICAvLyAgICAtYmxvY2sgKGRlZmF1bHQsIG5vIGV4dHJhIGNsYXNzZXMpXG4gIC8vICAgIC1lZGdlbGVzc1xuICAvLyAgICAtY2xhc3NpY1xuICAvLyB1c2UgeW91ciBvd24gc3R5bGUgbmFtZSBhbmQgdXNlIGAuY2MtdGhlbWUtU1RZTEVOQU1FYCBjbGFzcyBpbiBDU1MgdG8gZWRpdC5cbiAgLy8gTm90ZTogc3R5bGUgXCJ3aXJlXCIgaXMgdXNlZCBmb3IgdGhlIGNvbmZpZ3VyYXRvciwgYnV0IGhhcyBubyBDU1Mgc3R5bGVzIG9mIGl0cyBvd24sIG9ubHkgcGFsZXR0ZSBpcyB1c2VkLlxuICB0aGVtZTogJ2Jsb2NrJyxcblxuICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcbiAgLy8gTm90ZTogYnkgZGVmYXVsdCwgd2UgYW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBmcm9tIDAgdG8gZnVsbCBzaXplXG4gIHN0YXRpYzogZmFsc2UsXG5cbiAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXG4gIC8vIGlkZWFsbHksIGFueSBjdXN0b20gY29sb3Vycy90aGVtZXMgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCwgYXMgdGhpcyBpcyBtb3JlIGVmZmljaWVudC5cbiAgLy8gICB7XG4gIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxuICAvLyAgICAgYnV0dG9uOiB7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjZjhlNzFjJ30sXG4gIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxuICAvLyAgIH1cbiAgLy8gYGhpZ2hsaWdodGAgaXMgb3B0aW9uYWwgYW5kIGV4dGVuZHMgYGJ1dHRvbmAuIGlmIGl0IGV4aXN0cywgaXQgd2lsbCBhcHBseSB0byB0aGUgZmlyc3QgYnV0dG9uXG4gIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxuICBwYWxldHRlOiBudWxsLFxuXG4gIC8vIFNvbWUgY291bnRyaWVzIFJFUVVJUkUgdGhhdCBhIHVzZXIgY2FuIGNoYW5nZSB0aGVpciBtaW5kLiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGlzIHlvdXJzZWxmLlxuICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50LmxlZ2FsYCBjYW4gY2hhbmdlIHRoaXMgdG8gYHRydWVgIGlmIGl0IGRldGVjdHMgdGhhdCBpdCBzaG91bGRcbiAgcmV2b2thYmxlOiBmYWxzZSxcblxuICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcbiAgYW5pbWF0ZVJldm9rYWJsZTogdHJ1ZSxcblxuICAvLyB1c2VkIHRvIGRpc2FibGUgbGluayBvbiBleGlzdGluZyBsYXlvdXRzXG4gIC8vIHJlcGxhY2VzIGVsZW1lbnQgbWVzc2FnZWxpbmsgd2l0aCBtZXNzYWdlIGFuZCByZW1vdmVzIGNvbnRlbnQgb2YgbGlua1xuICBzaG93TGluazogdHJ1ZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgc2Nyb2xsIHJhbmdlIHRvIGVuYWJsZVxuICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBhdXRvZGlzbWlzcyBhZnRlciBzZXQgdGltZVxuICBkaXNtaXNzT25UaW1lb3V0OiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gIGRpc21pc3NPbldpbmRvd0NsaWNrOiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gIGRpc21pc3NPbkxpbmtDbGljazogZmFsc2UsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIGtleXMgYXJlIHByZXNzZWQsICggYWxsb3dLZXlDb2RlID0gMTMsIGRlbnlLZXlDb2RlID0gMjcgKVxuICBkaXNtaXNzT25LZXlQcmVzczogZmFsc2UsXG5cbiAgLy8gSWYgYGRpc21pc3NPbldpbmRvd0NsaWNrYCBpcyB0cnVlLCB3ZSBjYW4gY2xpY2sgb24gJ3Jldm9rZScgYW5kIHdlJ2xsIHN0aWxsIGRpc21pc3MgdGhlIGJhbm5lciwgc28gd2UgbmVlZCBleGNlcHRpb25zLlxuICAvLyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgY2xhc3MgbmFtZXMgKG5vdCBDU1Mgc2VsZWN0b3JzKVxuICBpZ25vcmVDbGlja3NGcm9tOiBbJ2NjLXJldm9rZScsICdjYy1idG4nLCAnY2MtbGluayddLCAvLyBhbHJlYWR5IGluY2x1ZGVzIHRoZSByZXZva2UgYnV0dG9uIGFuZCB0aGUgYmFubmVyIGl0c2VsZlxuXG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRlY2lkZSB3aGV0aGVyIHRoZSBwb3B1cCBzaG91bGQgb3Blbi5cbiAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXG4gIGF1dG9PcGVuOiB0cnVlLFxuXG4gIC8vIEJ5IGRlZmF1bHQgdGhlIGNyZWF0ZWQgSFRNTCBpcyBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgKHdoaWNoIGRlZmF1bHRzIHRvIDxib2R5PikuIFlvdSBjYW4gcHJldmVudCB0aGlzIGJlaGF2aW91clxuICAvLyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UsIGJ1dCBpZiB5b3UgZG8sIHlvdSBtdXN0IGF0dGFjaCB0aGUgYGVsZW1lbnRgIHlvdXJzZWxmLCB3aGljaCBpcyBhIHB1YmxpYyBwcm9wZXJ0eSBvZiB0aGUgcG9wdXAgaW5zdGFuY2U6XG4gIC8vXG4gIC8vICAgICBjb25zdCBpbnN0YW5jZSA9IGNvb2tpZWNvbnNlbnQuZmFjdG9yeShvcHRpb25zKVxuICAvLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0YW5jZS5lbGVtZW50KVxuICAvL1xuICBhdXRvQXR0YWNoOiB0cnVlLFxuXG4gIC8vIHNldCB2YWx1ZSBpZiBmbG9hdGluZyBsYXlvdXQgc2hvdWxkIGJlIGZvcmNlZCBmb3IgbW9iaWxlIGRldmljZXNcbiAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcblxuICAvLyBzaW1wbGUgd2hpdGVsaXN0L2JsYWNrbGlzdCBmb3IgcGFnZXMuIHNwZWNpZnkgcGFnZSBieTpcbiAgLy8gICAtIHVzaW5nIGEgc3RyaW5nIDogJy9pbmRleC5odG1sJyAgICAgICAgICAgKG1hdGNoZXMgJy9pbmRleC5odG1sJyBleGFjdGx5KSBPUlxuICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxuICB3aGl0ZWxpc3RQYWdlOiBbXSxcbiAgYmxhY2tsaXN0UGFnZTogW10sXG5cbiAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxuICAvLyBCZSBzdXJlIHRvIHVzZSB0aGUgY2xhc3NlcyBgY2MtYnRuYCBhbmQgYGNjLWFsbG93YCwgYGNjLWRlbnlgIG9yIGBjYy1kaXNtaXNzYC4gVGhleSBlbmFibGUgdGhlIGFwcCB0byByZWdpc3RlciBjbGlja1xuICAvLyBoYW5kbGVycy4gWW91IGNhbiB1c2Ugb3RoZXIgcHJlLWV4aXN0aW5nIGNsYXNzZXMgdG9vLiBTZWUgYHNyYy9zdHlsZXNgIGZvbGRlci5cbiAgb3ZlcnJpZGVIVE1MOiBudWxsXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdCA9ICggdXJsLCBjYWxsYmFjaywgdGltZW91dCApID0+IHtcbiAgbGV0IHRpbWVvdXRJZHhcbiAgY29uc3Qgc2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBzY3JpcHRUYWcudHlwZSA9ICd0ZXh0LycgKyAodXJsLnR5cGUgfHwgJ2phdmFzY3JpcHQnKVxuICBzY3JpcHRUYWcuc3JjID0gdXJsLnNyYyB8fCB1cmxcbiAgc2NyaXB0VGFnLmFzeW5jID0gZmFsc2VcblxuICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB0aGlzIGNvZGUgaGFuZGxlcyB0d28gc2NlbmFyaW9zLCB3aGV0aGVyIGNhbGxlZCBieSBvbmxvYWQgb3Igb25yZWFkeXN0YXRlY2hhbmdlXG4gICAgY29uc3Qgc3RhdGUgPSBzY3JpcHRUYWcucmVhZHlTdGF0ZVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZHgpXG5cbiAgICBpZiAoIWNhbGxiYWNrLmRvbmUgJiYgKCFzdGF0ZSB8fCAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHN0YXRlKSkpIHtcbiAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlXG4gICAgICBjYWxsYmFjaygpXG4gICAgICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0VGFnLm9ubG9hZCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdFRhZylcblxuICAvLyBZb3UgY2FuJ3QgY2F0Y2ggSlNPTlAgRXJyb3JzLCBiZWNhdXNlIGl0J3MgaGFuZGxlZCBieSB0aGUgc2NyaXB0IHRhZ1xuICAvLyBvbmUgd2F5IGlzIHRvIHVzZSBhIHRpbWVvdXRcbiAgdGltZW91dElkeCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgY2FsbGJhY2suZG9uZSA9IHRydWVcbiAgICBjYWxsYmFjaygpXG4gICAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHNjcmlwdFRhZy5vbmxvYWQgPSBudWxsXG4gIH0sIHRpbWVvdXQpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlQXN5bmNSZXF1ZXN0ID0gKCB1cmwsIG9uQ29tcGxldGUsIHRpbWVvdXQsIHBvc3REYXRhLCByZXF1ZXN0SGVhZGVycyApID0+IHtcbiAgY29uc3QgeGhyID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QpKFxuICAgICdNU1hNTDIuWE1MSFRUUC4zLjAnXG4gIClcblxuICB4aHIub3Blbihwb3N0RGF0YSA/ICdQT1NUJyA6ICdHRVQnLCB1cmwsIDEpXG5cbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SGVhZGVycykpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlcXVlc3RIZWFkZXJzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgY29uc3Qgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxuICAgICAgICBzcGxpdFsxXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcbiAgICAgICAgb25Db21wbGV0ZSh4aHIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgeGhyLnNlbmQocG9zdERhdGEpXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xuICBjb25zdCB2YWx1ZSA9ICcgJyArIGRvY3VtZW50LmNvb2tpZVxuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyArIG5hbWUgKyAnPScpXG4gIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHBhcnRzXG4gICAgICAgIC5wb3AoKVxuICAgICAgICAuc3BsaXQoJzsnKVxuICAgICAgICAuc2hpZnQoKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKCBuYW1lLCB2YWx1ZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUgKSA9PiB7XG4gIGNvbnN0IGV4ZGF0ZSA9IG5ldyBEYXRlKClcbiAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICc7ZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAnO3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xuICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgKCBzZWN1cmUgPyAnO3NlY3VyZScgOiAnJyApXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgZ2V0Q29udHJhc3QsIGdldEhvdmVyQ29sb3IgfSBmcm9tICcuL3N0eWxlJ1xuXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gKCBlbGVtLCBjbGFzc05hbWUgKSA9PlxuICAhZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlXG4gID8gbnVsbCA6IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgPyBlbGVtIDogdHJhdmVyc2VET01QYXRoKGVsZW0ucGFyZW50Tm9kZSwgY2xhc3NOYW1lKVxuXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IChpZCwgcGFsZXR0ZSwgcHJlZml4KSA9PiB7XG4gIGNvbnN0IGNvbG9yU3R5bGVzID0ge31cbiAgY29uc3QgeyBwb3B1cCwgYnV0dG9uLCBoaWdobGlnaHQsIHNhdmVCdXR0b24gfSA9IHBhbGV0dGVcblxuICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXG4gIGlmIChwb3B1cCkge1xuICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgcG9wdXAudGV4dCA9IHBvcHVwLnRleHQgPyBwb3B1cC50ZXh0IDogZ2V0Q29udHJhc3QocG9wdXAuYmFja2dyb3VuZClcbiAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHRcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLXRvb2x0aXAsICcgKyBwcmVmaXggKyAnIC5jYy10b29sdGlwOmFmdGVyJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXG4gICAgICBdXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXdpbmRvdyddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxuICAgICAgXVxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcbiAgICAgIF1cbiAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgIHByZWZpeCArICcgLmNjLWxpbmssJyArIHByZWZpeCArICcgLmNjLWxpbms6YWN0aXZlLCcgKyBwcmVmaXggKyAnIC5jYy1saW5rOnZpc2l0ZWQnXG4gICAgICBdID0gWydjb2xvcjogJyArIHBvcHVwLmxpbmtdXG5cbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAvLyBhc3N1bWVzIGJ1dHRvbi5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHQgPyBidXR0b24udGV4dCA6IGdldENvbnRyYXN0KGJ1dHRvbi5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICBidXR0b24uYm9yZGVyID0gYnV0dG9uLmJvcmRlciA/IGJ1dHRvbi5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGJ1dHRvbi5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYnV0dG9uLmJhY2tncm91bmQsXG4gICAgICAgICAgXVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddLnB1c2goJ3BhZGRpbmc6ICcgKyBidXR0b24ucGFkZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5iYWNrZ3JvdW5kICE9ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ10gPSBbXG4gICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvcihidXR0b24uYmFja2dyb3VuZCkpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAvL2Fzc3VtZXMgaGlnaGxpZ2h0LmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgICAgID8gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgICAgIDogZ2V0Q29udHJhc3QoaGlnaGxpZ2h0LmJhY2tncm91bmQpO1xuICAgICAgICAgICAgICBoaWdobGlnaHQuYm9yZGVyID0gaGlnaGxpZ2h0LmJvcmRlciA/IGhpZ2hsaWdodC5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgaGlnaGxpZ2h0LnRleHQsXG4gICAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJvcmRlcixcbiAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJhY2tncm91bmQsXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBzZXRzIGhpZ2hsaWdodCB0ZXh0IGNvbG9yIHRvIHBvcHVwIHRleHQuIGJhY2tncm91bmQgYW5kIGJvcmRlciBhcmUgdHJhbnNwYXJlbnQgYnkgZGVmYXVsdC5cbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcbiAgICAgICAgICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzYXZlQnV0dG9uKSB7XG4gICAgICAgICAgY29sb3JTdHlsZXNbYCR7cHJlZml4fSAuY2MtYnRuLmNjLXNhdmVgXSA9IFtcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgc2F2ZUJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5iYWNrZ3JvdW5kLFxuICAgICAgICAgIF1cbiAgICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgd2lsbCBiZSBpbnRlcnByZXR0ZWQgYXMgQ1NTLiB0aGUga2V5IGlzIHRoZSBzZWxlY3RvciwgYW5kIGVhY2ggYXJyYXkgZWxlbWVudCBpcyBhIHJ1bGVcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlLmlkID0gaWRcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGUgKVxuICBPYmplY3QuZW50cmllcyggY29sb3JTdHlsZXMgKS5mb3JFYWNoKCAoIFsgcHJvcCwgdmFsdWUgXSwgaW5kZXggKSA9PlxuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoIGAke3Byb3B9eyR7dmFsdWUuam9pbignOycpfX1gLCBpbmRleCApXG4gIClcbiAgcmV0dXJuIHN0eWxlXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0ICogYXMgY29va2llIGZyb20gXCIuL2Nvb2tpZVwiXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gY29va2llLmdldENvb2tpZVxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IGNvb2tpZS5zZXRDb29raWVcblxuXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGVTdHJpbmcgPSAoIHN0ciwgY2FsbGJhY2sgKSA9PlxuICBzdHIucmVwbGFjZSggL3t7KFthLXpdW2EtejAtOVxcLV9dKil9fS9naSAsICggbWF0Y2hlcywgcmVwbGFjZWQgKSA9PiBjYWxsYmFjayggcmVwbGFjZWQgKSB8fCAnJylcblxuLy8gb25seSB1c2VkIGZvciB0aHJvdHRsaW5nIHRoZSAnbW91c2Vtb3ZlJyBldmVudCAodXNlZCBmb3IgYW5pbWF0aW5nIHRoZSByZXZva2UgYnV0dG9uIHdoZW4gYGFuaW1hdGVSZXZva2FibGVgIGlzIHRydWUpXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoY2FsbGJhY2ssIGxpbWl0KSA9PiB7XG4gIGxldCB3YWl0ID0gZmFsc2VcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICghd2FpdCkge1xuICAgICAgY2FsbGJhY2soLi4uYXJndW1lbnRzKVxuICAgICAgd2FpdCA9IHRydWVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdhaXQgPSBmYWxzZVxuICAgICAgfSwgbGltaXQpXG4gICAgfVxuICB9XG59XG5cbi8vIG9ubHkgdXNlZCBmb3IgaGFzaGluZyBqc29uIG9iamVjdHMgKHVzZWQgZm9yIGhhc2ggbWFwcGluZyBwYWxldHRlIG9iamVjdHMsIHVzZWQgd2hlbiBjdXN0b20gY29sb3VycyBhcmUgcGFzc2VkIHRocm91Z2ggSmF2YVNjcmlwdClcbmV4cG9ydCBjb25zdCBoYXNoID0gc3RyID0+IHtcbiAgbGV0IGhhc2hOdW0gPSAwLFxuICAgIGkgPSAwLFxuICAgIGNocixcbiAgICBsZW4gPSBzdHIubGVuZ3RoXG4gIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaE51bVxuICBmb3IgKCBpOyBpIDwgbGVuOyArK2kgKSB7XG4gICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoIGkgKVxuICAgIGhhc2hOdW0gPSAoIGhhc2hOdW0gPDwgNSApIC0gaGFzaE51bSArIGNoclxuICAgIGhhc2hOdW0gfD0gMFxuICB9XG4gIHJldHVybiBoYXNoTnVtXG59XG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tIFwiLi9zdHlsZVwiXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGV4ID0gc3R5bGUubm9ybWFsaXplSGV4XG5leHBvcnQgY29uc3QgZ2V0Q29udHJhc3QgPSBzdHlsZS5nZXRDb250cmFzdFxuZXhwb3J0IGNvbnN0IGdldEx1bWluYW5jZSA9IHN0eWxlLmdldEx1bWluYW5jZVxuZXhwb3J0IGNvbnN0IGdldEhvdmVyQ29sb3IgPXN0eWxlLmdldEhvdmVyQ29sb3JcblxuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbVwiXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gZG9tLnRyYXZlcnNlRE9NUGF0aFxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbVN0eWxlc2hlZXQgPSBkb20uYWRkQ3VzdG9tU3R5bGVzaGVldFxuXG5pbXBvcnQgKiBhcyB2YWxpZGF0aW9uIGZyb20gXCIuL3ZhbGlkYXRpb25cIlxuZXhwb3J0IGNvbnN0IGlzVmFsaWRTdGF0dXMgPSB2YWxpZGF0aW9uLmlzVmFsaWRTdGF0dXNcbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gdmFsaWRhdGlvbi5pc1BsYWluT2JqZWN0XG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSB2YWxpZGF0aW9uLmlzTW9iaWxlXG5cbmltcG9ydCAqIGFzIGFzeW5jRm5zIGZyb20gXCIuL2FzeW5jXCJcbmV4cG9ydCBjb25zdCBnZXRTY3JpcHQgPSBhc3luY0Zucy5nZXRTY3JpcHRcbmV4cG9ydCBjb25zdCBtYWtlQXN5bmNSZXF1ZXN0ID0gYXN5bmNGbnMubWFrZUFzeW5jUmVxdWVzdFxuXG5jb25zdCBsb29wUHJvcGVydGllcyA9IG92ZXJ3cml0ZXMgPT4gKG9iaiwgW2tleSwgdmFsdWVdKSA9PiB7XG4gIGlmICggdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSApIHtcbiAgICBpZiAoIG92ZXJ3cml0ZXNbIGtleSBdIGluc3RhbmNlb2YgT2JqZWN0ICYmICEob3ZlcndyaXRlc1sga2V5IF0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIG9ialsga2V5IF0gPSBPYmplY3QuZW50cmllcyh2YWx1ZSkucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXNba2V5XSksIHt9KVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmpbIGtleSBdID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCBvdmVyd3JpdGVzLmhhc093blByb3BlcnR5KCBrZXkgKSApIHtcbiAgICAgIG9ialsga2V5IF0gPSBvdmVyd3JpdGVzWyBrZXkgXVxuICAgIH1lbHNlIHtcbiAgICAgIG9ialsga2V5IF0gPSB2YWx1ZSBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VPcHRpb25zID0gKCBkZWZhdWx0cywgb3ZlcndyaXRlcyApID0+XG4gIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5yZWR1Y2UobG9vcFByb3BlcnRpZXMob3ZlcndyaXRlcyksIHt9KVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhleCA9IGhleCA9PlxuICBoZXhbMF0gPT0gJyMnXG4gICAgPyBoZXguc3Vic3RyKDEpIDogaGV4Lmxlbmd0aCA9PSAzXG4gICAgPyBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl0gOiBoZXhcblxuLy8gdXNlZCB0byBnZXQgdGV4dCBjb2xvcnMgaWYgbm90IHNldFxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gaGV4ID0+IHtcbiAgaGV4ID0gbm9ybWFsaXplSGV4KGhleClcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHIoMCwgMiksIDE2KVxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNilcbiAgY29uc3QgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwXG4gIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnXG59XG5cbi8vIHVzZWQgdG8gY2hhbmdlIGNvbG9yIG9uIGhpZ2hsaWdodFxuZXhwb3J0IGNvbnN0IGdldEx1bWluYW5jZSA9IGhleCA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KG5vcm1hbGl6ZUhleChoZXgpLCAxNiksXG4gICAgYW10ID0gMzgsXG4gICAgUiA9IChudW0gPj4gMTYpICsgYW10LFxuICAgIEIgPSAoKG51bSA+PiA4KSAmIDB4MDBmZikgKyBhbXQsXG4gICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXRcbiAgICByZXR1cm4gJyMnICsgKFxuICAgIDB4MTAwMDAwMCArXG4gICAgKFIgPCAyNTUgPyAoUiA8IDEgPyAwIDogUikgOiAyNTUpICogMHgxMDAwMCArXG4gICAgKEIgPCAyNTUgPyAoQiA8IDEgPyAwIDogQikgOiAyNTUpICogMHgxMDAgK1xuICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxuICApXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC5zbGljZSgxKVxufVxuZXhwb3J0IGNvbnN0IGdldEhvdmVyQ29sb3IgPSBoZXggPT4ge1xuICBoZXggPSBub3JtYWxpemVIZXgoIGhleCApXG4gIC8vIGZvciBibGFjayBidXR0b25zXG4gIHJldHVybiBoZXggPT09ICcwMDAwMDAnID8gJyMyMjInIDogZ2V0THVtaW5hbmNlKCBoZXggKVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IHN0YXR1c2VzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhdHVzIGlzIGluIHRoZSBjb25zdGFudHMgbGlzdFxuICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xuICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHN0YXR1cyA9PiBzdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPj0gMFxuXG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSAoKSA9PlxuICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKVxuXG4vLyBUaGUgY29kZSBcInR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbFwiIGFsbG93cyBBcnJheSBvYmplY3RzXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==