/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ 5501:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prettier */ 945);\n/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prettier__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ 1966);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ 75);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable default-case */\n\n\n // const googleMaps = document.createElement( 'script' );\n// googleMaps.type = 'text/javascript';\n// googleMaps.setAttribute('async','');\n// googleMaps.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAIXnlAQS0Ph5II7bXGZ_A_DJpHj1Q6y_U&libraries=places&callback=initAutocomplete';\n// document.head.append( googleMaps);\n\nvar input = document.createElement(\"input\");\ndocument.body.appendChild(input); // const btn = document.createElement(\"button\");\n// btn.textContent = \"send\";\n// btn.addEventListener(\"click\", () => {\n//   processWeatherData(input.value);\n// });\n// document.body.appendChild(btn);\n// This sample uses the Places Autocomplete widget to:\n// 1. Help the user select a place\n// 2. Retrieve the address components associated with that place\n// 3. Populate the form fields with those address components.\n// This sample requires the Places library, Maps JavaScript API.\n// Include the libraries=places parameter when you first load the API.\n// For example: <script\n// src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places\">\n\nvar autocomplete;\n\nfunction fillInAddress() {\n  // Get the place details from the autocomplete object.\n  var place = autocomplete.getPlace(); // Get each component of the address from the place details,\n  // and then fill-in the corresponding field on the form.\n  // place.address_components are google.maps.GeocoderAddressComponent objects\n  // which are documented at http://goo.gle/3l5i5Mr\n  // eslint-disable-next-line no-restricted-syntax\n\n  var _iterator = _createForOfIteratorHelper(place.address_components),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var component = _step.value;\n      var componentType = component.types[0];\n\n      switch (componentType) {\n        case \"street_address\":\n          {\n            input.value += \"\".concat(component.long_name);\n            break;\n          }\n        // case \"route\": {\n        //   input.value += component.short_name;\n        //   break;\n        // }\n        // case \"postal_code\": {\n        //   input.value += `${component.long_name}`;\n        //   break;\n        // }\n        // case \"postal_code_suffix\": {\n        //   input.value += `${component.long_name}`;\n        //   break;\n        // }\n        // case \"locality\":\n        //   input.value += component.long_name;\n        //   break;\n        // case \"administrative_area_level_1\": {\n        //   input.value += component.short_name;\n        //   break;\n        // }\n        // case \"country\":\n        //   input.value += component.long_name;\n        //   break;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.default)(place.geometry.location.lat(), place.geometry.location.lng()).catch(function (err) {\n    console.error(err);\n  }); // After filling the form with address components from the Autocomplete\n  // prediction, set cursor focus on the second address line to encourage\n  // entry of subpremise information such as apartment, unit, or floor number.\n  // address2Field.focus();\n}\n\nfunction initAutocomplete() {\n  // Create the autocomplete object, restricting the search predictions to\n  // addresses in the US and Canada.\n  autocomplete = new google.maps.places.Autocomplete(input, {\n    componentRestrictions: {\n      country: [\"de\"]\n    },\n    fields: [\"address_components\", \"geometry\"],\n    types: [\"(regions)\"]\n  });\n  input.focus(); // When the user selects an address from the drop-down, populate the\n  // address fields in the form.\n\n  autocomplete.addListener(\"place_changed\", fillInAddress);\n}\n\ngoogle.maps.event.addDomListener(window, \"load\", initAutocomplete); // -[x] function API query (input: location, output weather data - start with console\n// -[x] function process data (input:JSON data, output: object with only required data\n// -[x] form wit location input\n// -[ ] Display the information on your webpage!\n// -[ ] Add any styling you like!\n// -[ ] Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.\n// -[ ] Push that baby to github and share your solution below!\n// changing the color of the background or by adding images that describe the\n// weather. (You could even use the Giphy API to find appropriate\n// weather-related gifs and display them).\n// toggle displaying the data in Fahrenheit or Celsius.\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ 1966:
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ 8594);\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ 5666);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar getWeatherData = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(lat, lon) {\n    var data, weather;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=944ab13f6c35a86d9df37f8035ffb962\"));\n\n          case 2:\n            data = _context.sent;\n            _context.next = 5;\n            return data.json();\n\n          case 5:\n            weather = _context.sent;\n\n            if (!(weather.cod === 200)) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", weather);\n\n          case 8:\n            throw new Error(\"Error from weather API: \".concat(weather.message));\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getWeatherData(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(lat, lon) {\n    var weatherObject;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getWeatherData(lat, lon);\n\n          case 2:\n            weatherObject = _context2.sent;\n            console.log(weatherObject);\n            console.log(weatherObject.name);\n            console.log(weatherObject.weather[0].main);\n            console.log(weatherObject.main.temp);\n            console.log(\"https://openweathermap.org/img/wn/\".concat(weatherObject.weather[0].icon, \"@4x.png\"));\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack://weather-app/./src/weatherAPI.js?");

/***/ }),

/***/ 426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".pac-target-input {\\n  width: fit-content;\\n  min-width: 50%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ 75:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 426);\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(5501)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);