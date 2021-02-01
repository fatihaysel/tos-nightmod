module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of fof/nightmode.
 *
 * Copyright (c) 2020 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./node_modules/es-cookie/src/es-cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/es-cookie/src/es-cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function stringifyAttribute(name, value) {
    if (!value) {
        return '';
    }
    var stringified = '; ' + name;
    if (value === true) {
        return stringified; // boolean attributes shouldn't have a value
    }
    return stringified + '=' + value;
}
function stringifyAttributes(attributes) {
    if (typeof attributes.expires === 'number') {
        var expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
        attributes.expires = expires;
    }
    return stringifyAttribute('Expires', attributes.expires ? attributes.expires.toUTCString() : '')
        + stringifyAttribute('Domain', attributes.domain)
        + stringifyAttribute('Path', attributes.path)
        + stringifyAttribute('Secure', attributes.secure)
        + stringifyAttribute('SameSite', attributes.sameSite);
}
function encode(name, value, attributes) {
    return encodeURIComponent(name)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
        .replace(/\(/g, '%28').replace(/\)/g, '%29') // replace opening and closing parens
        + '=' + encodeURIComponent(value)
        // allowed special characters
        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
        + stringifyAttributes(attributes);
}
exports.encode = encode;
function parse(cookieString) {
    var result = {};
    var cookies = cookieString ? cookieString.split('; ') : [];
    var rdecode = /(%[\dA-F]{2})+/gi;
    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');
        if (cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
        }
        try {
            var name_1 = parts[0].replace(rdecode, decodeURIComponent);
            result[name_1] = cookie.replace(rdecode, decodeURIComponent);
        }
        catch (e) {
            // ignore cookies with invalid name/value encoding
        }
    }
    return result;
}
exports.parse = parse;
function getAll() {
    return parse(document.cookie);
}
exports.getAll = getAll;
function get(name) {
    return getAll()[name];
}
exports.get = get;
function set(name, value, attributes) {
    document.cookie = encode(name, value, __assign({ path: '/' }, attributes));
}
exports.set = set;
function remove(name, attributes) {
    set(name, '', __assign(__assign({}, attributes), { expires: -1 }));
}
exports.remove = remove;


/***/ }),

/***/ "./src/common/Themes.js":
/*!******************************!*\
  !*** ./src/common/Themes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*

    JS enum equivalent. Makes sure no value mix-ups are made!

    DEFAULT is used when an invalid value has been set, as well as for guest and new users.

*/
var Themes = {
  AUTO: 0,
  LIGHT: 1,
  DARK: 2,
  // adds an "ultra default" of 0 if the admins don't set a default tsk tsk tsk
  DEFAULT: function DEFAULT() {
    return Number.parseInt(app.data['fof-nightmode.default_theme']) || 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Themes);

/***/ }),

/***/ "./src/common/setSelectedTheme.js":
/*!****************************************!*\
  !*** ./src/common/setSelectedTheme.js ***!
  \****************************************/
/*! exports provided: default, setTheme, getUrls, setThemeFromID, setStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrls", function() { return getUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeFromID", function() { return setThemeFromID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Themes */ "./src/common/Themes.js");
/* harmony import */ var _forum_fixInvalidThemeSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forum/fixInvalidThemeSetting */ "./src/forum/fixInvalidThemeSetting.js");
/* harmony import */ var _forum_getTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forum/getTheme */ "./src/forum/getTheme.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oninit', setTheme);
});
function setTheme() {
  var user = app.session.user;

  if (!user) {
    // Default to automatic theme when visiting as guest
    setThemeFromID(_Themes__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULT());
    return;
  }

  var PerDevice = user.preferences().fofNightMode_perDevice;

  if (PerDevice) {
    Object(_forum_fixInvalidThemeSetting__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }

  var CurrentTheme = Object(_forum_getTheme__WEBPACK_IMPORTED_MODULE_4__["default"])();
  setThemeFromID(CurrentTheme);
}
function getUrls() {
  return {
    day: app.data['fof-nightmode.assets.day'],
    night: app.data['fof-nightmode.assets.night']
  };
}
function setThemeFromID(theme) {
  if (theme === _Themes__WEBPACK_IMPORTED_MODULE_2__["default"].DARK) {
    setStyle('night');
  } else if (theme === _Themes__WEBPACK_IMPORTED_MODULE_2__["default"].LIGHT) {
    setStyle('day');
  } else {
    var preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setStyle(preferDark ? 'night' : 'day');
  }
}
function setStyle(type) {
  var light = document.querySelector('link.nightmode-light[rel=stylesheet]');
  var dark = document.querySelector('link.nightmode-dark[rel=stylesheet]');

  if (light && dark) {
    if (Object(_forum_getTheme__WEBPACK_IMPORTED_MODULE_4__["default"])() === _Themes__WEBPACK_IMPORTED_MODULE_2__["default"].AUTO) return;
    var newLink = document.createElement('link'); // onload on link tags not supported in all browsers
    // so we should check it is present in the user's
    // current browser

    if ('onload' in newLink) {
      // if it is, only remove the old link tags after the new
      // one has finished loading (prevents flash of unstyled
      // content)
      newLink.onload = function () {
        light.remove();
        dark.remove();
      };
    } else {
      // if it isn't, just remove the old link tags immediately
      light.remove();
      dark.remove();
    }

    newLink.rel = 'stylesheet';
    newLink.className = 'nightmode';
    newLink.href = getUrls()[type];
    document.head.append(newLink);
  } else {
    var el = light || dark || document.querySelector('link.nightmode[rel=stylesheet]');
    var url = getUrls()[type];

    if (url !== el.href) {
      el.href = url;
      el.className = 'nightmode';
    }
  }
}

/***/ }),

/***/ "./src/forum/addSettingsItems.js":
/*!***************************************!*\
  !*** ./src/forum/addSettingsItems.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SettingsPage */ "flarum/components/SettingsPage");
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SessionDropdown */ "flarum/components/SessionDropdown");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/FieldSet */ "flarum/components/FieldSet");
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_setSelectedTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/setSelectedTheme */ "./src/common/setSelectedTheme.js");
/* harmony import */ var _fixInvalidThemeSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fixInvalidThemeSetting */ "./src/forum/fixInvalidThemeSetting.js");
/* harmony import */ var _helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/perDeviceSetting */ "./src/forum/helpers/perDeviceSetting.js");
/* harmony import */ var _getTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getTheme */ "./src/forum/getTheme.js");
/* harmony import */ var _common_Themes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/Themes */ "./src/common/Themes.js");













 // custom function for translations makes it a lot cleaner

var trans = function trans(key) {
  return app.translator.trans("fof-nightmode.forum.user.settings." + key);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'settingsItems', function (items) {
    var user = app.session.user;
    var PerDevice = !!user.preferences().fofNightMode_perDevice;

    if (PerDevice) {
      Object(_fixInvalidThemeSetting__WEBPACK_IMPORTED_MODULE_10__["default"])();
    }

    var currentTheme = Object(_getTheme__WEBPACK_IMPORTED_MODULE_12__["default"])();
    items.add('fof-nightmode', flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      label: trans('heading'),
      className: 'Settings-theme'
    }, [m("p", {
      className: "description"
    }, trans('description')), m("p", {
      className: "description"
    }, trans('description2')), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      className: 'Settings-theme--per_device_cb',
      state: PerDevice,
      onchange: function onchange(checked) {
        if (checked) {
          // save current theme as this device's default
          _helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_11__["set"](currentTheme);
        } else {
          _helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_11__["remove"]();
        }

        user.savePreferences({
          fofNightMode_perDevice: checked
        }).then(function () {
          // need to force-update selected theme (as it's only set
          // on a page load and redraw doesn't count as a page load)
          Object(_common_setSelectedTheme__WEBPACK_IMPORTED_MODULE_9__["setTheme"])();
        });
      }
    }, trans('device_specific_setting_checkbox')), flarum_components_Select__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      value: currentTheme,
      className: 'Settings-theme--input',
      onchange: function onchange(e) {
        if (PerDevice) {
          _helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_11__["set"](e);
          Object(_common_setSelectedTheme__WEBPACK_IMPORTED_MODULE_9__["setTheme"])();
          return;
        }

        user.savePreferences({
          fofNightMode: Number.parseInt(e)
        }).then(function () {
          m.redraw(); // need to force-update selected theme (as it's only set
          // on a page load and redraw doesn't count as a apge load)

          Object(_common_setSelectedTheme__WEBPACK_IMPORTED_MODULE_9__["setTheme"])();
        });
      },
      options: [trans('options.auto'), trans('options.day'), trans('options.night')]
    }), m("p", {
      className: "Settings-theme--selection_description"
    }, currentTheme === _common_Themes__WEBPACK_IMPORTED_MODULE_13__["default"].AUTO ? trans('option_descriptions.auto') : currentTheme === _common_Themes__WEBPACK_IMPORTED_MODULE_13__["default"].LIGHT ? trans('option_descriptions.day') : currentTheme === _common_Themes__WEBPACK_IMPORTED_MODULE_13__["default"].DARK ? trans('option_descriptions.night') : // prevents nasty paragraph switching
    flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a.component())]));
  });

  function addToItems(items, itemClassName, className) {
    if (itemClassName === void 0) {
      itemClassName = '';
    }

    if (className === void 0) {
      className = '';
    }

    if (!app.session.user) return;
    var user = app.session.user;
    var theme = Object(_getTheme__WEBPACK_IMPORTED_MODULE_12__["default"])();
    var isLight = theme === _common_Themes__WEBPACK_IMPORTED_MODULE_13__["default"].LIGHT || theme === _common_Themes__WEBPACK_IMPORTED_MODULE_13__["default"].AUTO && !window.matchMedia('(prefers-color-scheme: dark)').matches; // Add night mode link to session dropdown

    items.add(isLight ? 'nightmode' : 'daymode', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      icon: "far fa-" + (isLight ? 'moon' : 'sun'),
      itemClassName: itemClassName,
      className: className,
      onclick: function onclick() {
        var val = isLight ? _common_Themes__WEBPACK_IMPORTED_MODULE_13__["default"].DARK : _common_Themes__WEBPACK_IMPORTED_MODULE_13__["default"].LIGHT;

        if (!!user.preferences().fofNightMode_perDevice) {
          _helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_11__["set"](val);
          Object(_common_setSelectedTheme__WEBPACK_IMPORTED_MODULE_9__["setTheme"])();
          return;
        }

        user.savePreferences({
          fofNightMode: val
        }).then(function () {
          // need to force-update selected theme (as it's only set
          // on a page load and redraw doesn't count as a apge load)
          Object(_common_setSelectedTheme__WEBPACK_IMPORTED_MODULE_9__["setTheme"])();
        });
      }
    }, app.translator.trans("fof-nightmode.forum." + (isLight ? 'night' : 'day'))), -1);
  }

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'items', function (items) {
    addToItems(items);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'sidebarItems', function (items) {
    addToItems(items, 'App-primaryControl', 'Button Button--icon');
  });
});

/***/ }),

/***/ "./src/forum/fixInvalidThemeSetting.js":
/*!*********************************************!*\
  !*** ./src/forum/fixInvalidThemeSetting.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fixInvalidThemeSetting; });
/* harmony import */ var _common_Themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Themes */ "./src/common/Themes.js");
/* harmony import */ var _helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/perDeviceSetting */ "./src/forum/helpers/perDeviceSetting.js");
/*
    This function is designed to catch invalid theme values
    and handle them before they can break Flarum for users.

    E.g. if a user manually edited their cookies to
    set their theme to an invalid value, this theme would
    detect that, and reset it to 0 (auto).
*/


function fixInvalidThemeSetting() {
  // get array of valid values without duplicate entries
  var validValues = Array.from(new Set(Object.values(_common_Themes__WEBPACK_IMPORTED_MODULE_0__["default"])));
  var Theme = Object(_helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_1__["get"])();

  if (isNaN(Theme)) {
    resetTheme('Theme is not a valid integer! Resetting...');
  } else if (!validValues.includes(Theme)) {
    // theme out of bounds
    resetTheme("Theme is out of bounds! Resetting...");
  }
}

function resetTheme(reason) {
  console.warn(reason);
  Object(_helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_1__["set"])(_common_Themes__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT());
}

/***/ }),

/***/ "./src/forum/getTheme.js":
/*!*******************************!*\
  !*** ./src/forum/getTheme.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTheme; });
/* harmony import */ var _common_Themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Themes */ "./src/common/Themes.js");
/* harmony import */ var _helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/perDeviceSetting */ "./src/forum/helpers/perDeviceSetting.js");


function getTheme() {
  var user = app.session.user;
  var IsUsingPerDeviceSettings = user && !!user.preferences().fofNightMode_perDevice;
  var SelectedTheme = user && user.preferences().fofNightMode;
  var value;

  if (IsUsingPerDeviceSettings) {
    // fetch through LS is per device enabled
    value = Object(_helpers_perDeviceSetting__WEBPACK_IMPORTED_MODULE_1__["get"])();
  } else {
    if (typeof SelectedTheme === 'number' && SelectedTheme !== -1) {
      // use user prefs
      value = SelectedTheme;
    }
  }

  return typeof value === 'number' ? value : _common_Themes__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT();
}

/***/ }),

/***/ "./src/forum/helpers/perDeviceSetting.js":
/*!***********************************************!*\
  !*** ./src/forum/helpers/perDeviceSetting.js ***!
  \***********************************************/
/*! exports provided: KEY, get, set, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var es_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es-cookie */ "./node_modules/es-cookie/src/es-cookie.js");
/* harmony import */ var es_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Themes */ "./src/common/Themes.js");


var KEY = 'flarum_nightmode';
var get = function get() {
  var value = es_cookie__WEBPACK_IMPORTED_MODULE_0__["get"](KEY);

  if (!value && value !== '0') {
    return _common_Themes__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT();
  }

  return Number(value);
};
var set = function set(val) {
  return es_cookie__WEBPACK_IMPORTED_MODULE_0__["set"](KEY, val, {
    sameSite: 'lax',
    secure: location.protocol === 'https:'
  });
};
var remove = function remove() {
  return es_cookie__WEBPACK_IMPORTED_MODULE_0__["remove"](KEY);
};

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addSettingsItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addSettingsItems */ "./src/forum/addSettingsItems.js");
/* harmony import */ var _common_setSelectedTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/setSelectedTheme */ "./src/common/setSelectedTheme.js");


app.initializers.add('fof-nightmode', function () {
  Object(_addSettingsItems__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_common_setSelectedTheme__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/FieldSet":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/FieldSet']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/FieldSet'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/SessionDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SessionDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SessionDropdown'];

/***/ }),

/***/ "flarum/components/SettingsPage":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsPage']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsPage'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map