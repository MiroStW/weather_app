/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ 501:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ 966);\n\nvar input = document.createElement('input');\ndocument.body.appendChild(input);\nvar btn = document.createElement('button');\nbtn.textContent = 'send';\nbtn.addEventListener('click', function () {\n  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.default)(input.value);\n});\ndocument.body.appendChild(btn); // async src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAIXnlAQS0Ph5II7bXGZ_A_DJpHj1Q6y_U&libraries=places&callback=initMap'\n// -[x] function API query (input: location, output weather data - start with console\n// -[x] function process data (input:JSON data, output: object with only required data\n// -[ ] form wit location input\n// -[ ] Display the information on your webpage!\n// -[ ] Add any styling you like!\n// -[ ] Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.\n// -[ ] Push that baby to github and share your solution below!\n// changing the color of the background or by adding images that describe the\n// weather. (You could even use the Giphy API to find appropriate\n// weather-related gifs and display them).\n// toggle displaying the data in Fahrenheit or Celsius.\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ 966:
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ 8594);\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ 666);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar getWeatherData = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location) {\n    var data, weather;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&appid=944ab13f6c35a86d9df37f8035ffb962\"));\n\n          case 2:\n            data = _context.sent;\n            _context.next = 5;\n            return data.json();\n\n          case 5:\n            weather = _context.sent;\n            return _context.abrupt(\"return\", weather);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getWeatherData(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(location) {\n    var weatherObject;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getWeatherData(location);\n\n          case 2:\n            weatherObject = _context2.sent;\n            console.log(weatherObject.name);\n            console.log(weatherObject.weather[0].main);\n            console.log(weatherObject.main.temp);\n            console.log(\"https://openweathermap.org/img/wn/\".concat(weatherObject.weather[0].icon, \"@4x.png\"));\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x2) {\n    return _ref2.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack://weather-app/./src/weatherAPI.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(501)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);