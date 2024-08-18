/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\nvar ContactForm = function ContactForm(_ref) {\n  var phone = _ref.phone,\n    _ref$name = _ref.name,\n    name = _ref$name === void 0 ? true : _ref$name,\n    _ref$email = _ref.email,\n    email = _ref$email === void 0 ? true : _ref$email,\n    _ref$message = _ref.message,\n    message = _ref$message === void 0 ? true : _ref$message,\n    formData = _ref.formData;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n      name: \"\",\n      email: \"\",\n      phone: \"\",\n      message: \"\"\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    formDetails = _useState2[0],\n    setFormDetails = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n    _useState4 = _slicedToArray(_useState3, 2),\n    errors = _useState4[0],\n    setErrors = _useState4[1];\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var newErrors = {};\n    if (name && formDetails.name.trim() === \"\") {\n      newErrors.name = \"Please fill in your name\";\n    }\n    if (email && formDetails.email.trim() === \"\") {\n      newErrors.email = \"Please fill in your email\";\n    } else if (email && !/\\S+@\\S+\\.\\S+/.test(formDetails.email)) {\n      newErrors.email = \"Please enter a valid email address\";\n    }\n    if (phone && formDetails.phone.trim() === \"\") {\n      newErrors.phone = \"Please fill in your phone number\";\n    }\n    if (message && formDetails.message.trim() === \"\") {\n      newErrors.message = \"Please fill in your message\";\n    }\n    setErrors(newErrors);\n    if (Object.keys(newErrors).length === 0) {\n      formData(formDetails);\n      //   console.log(formDetails);\n    }\n  };\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n      name = _e$target.name,\n      value = _e$target.value;\n    setFormDetails(function (prevDetails) {\n      return _objectSpread(_objectSpread({}, prevDetails), {}, _defineProperty({}, name, value));\n    });\n    setErrors(function (prevErrors) {\n      return _objectSpread(_objectSpread({}, prevErrors), {}, _defineProperty({}, name, \"\"));\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"bg-slate-300\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"bg-red-500 p-1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", {\n    className: \"text-center py-3 text-3xl font-semibold\"\n  }, \"Contact Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"form\", {\n    onSubmit: handleSubmit,\n    className: \"p-4 space-y-4\"\n  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"flex flex-col gap-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"label\", {\n    className: \"md:text-lg text-base font-medium\"\n  }, \"Full Name:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    value: formDetails.name,\n    className: \"px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full\",\n    placeholder: \"Enter your name\",\n    onChange: handleChange\n  }), errors.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", {\n    className: \"text-red-700 text-sm\"\n  }, \"*\", errors.name))), email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"flex flex-col gap-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"label\", {\n    className: \"md:text-lg text-base font-medium\"\n  }, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    value: formDetails.email,\n    className: \"px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full\",\n    placeholder: \"Enter your email\",\n    onChange: handleChange\n  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", {\n    className: \"text-red-700 text-sm\"\n  }, \"*\", errors.email))), phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"flex flex-col gap-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"label\", {\n    className: \"md:text-lg text-base font-medium\"\n  }, \"Phone:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"number\",\n    name: \"phone\",\n    value: formDetails.phone,\n    className: \"px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full\",\n    placeholder: \"Enter your phone number\",\n    onChange: handleChange\n  }), errors.phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", {\n    className: \"text-red-700 text-sm\"\n  }, \"*\", errors.phone))), message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"flex flex-col gap-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"label\", {\n    className: \"md:text-lg text-base font-medium\"\n  }, \"Message:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"textarea\", {\n    name: \"message\",\n    value: formDetails.message,\n    className: \"px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black min-h-32 w-full\",\n    placeholder: \"Write your message\",\n    onChange: handleChange\n  }), errors.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", {\n    className: \"text-red-700 text-sm\"\n  }, \"*\", errors.message))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n    type: \"submit\",\n    className: \"bg-red-500 text-white px-4 py-2 rounded-md text-lg hover:bg-red-700 duration-150\"\n  }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"px-4 mt-10 text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", {\n    className: \"border-t border-slate-500 pt-2 pb-4 text-sm\"\n  }, \"This contact form is neither created nor endorsed by\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"a\", {\n    href: \"#\",\n    className: \"font-medium text-nowrap\"\n  }, \"Formdash\"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);\n\n//# sourceURL=webpack://formdash/./src/index.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 
