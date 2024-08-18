"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ContactForm = function ContactForm(_ref) {
  var phone = _ref.phone,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? true : _ref$name,
    _ref$email = _ref.email,
    email = _ref$email === void 0 ? true : _ref$email,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? true : _ref$message,
    formData = _ref.formData;
  var _useState = (0, _react.useState)({
      name: "",
      email: "",
      phone: "",
      message: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formDetails = _useState2[0],
    setFormDetails = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var newErrors = {};
    if (name && formDetails.name.trim() === "") {
      newErrors.name = "Please fill in your name";
    }
    if (email && formDetails.email.trim() === "") {
      newErrors.email = "Please fill in your email";
    } else if (email && !/\S+@\S+\.\S+/.test(formDetails.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (phone && formDetails.phone.trim() === "") {
      newErrors.phone = "Please fill in your phone number";
    }
    if (message && formDetails.message.trim() === "") {
      newErrors.message = "Please fill in your message";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      formData(formDetails);
      //   console.log(formDetails);
    }
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormDetails(function (prevDetails) {
      return _objectSpread(_objectSpread({}, prevDetails), {}, _defineProperty({}, name, value));
    });
    setErrors(function (prevErrors) {
      return _objectSpread(_objectSpread({}, prevErrors), {}, _defineProperty({}, name, ""));
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-red-500 p-1"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "text-center py-3 text-3xl font-semibold"
  }, "Contact Form"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "p-4 space-y-4"
  }, name && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "md:text-lg text-base font-medium"
  }, "Full Name:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: formDetails.name,
    className: "px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full",
    placeholder: "Enter your name",
    onChange: handleChange
  }), errors.name && /*#__PURE__*/React.createElement("p", {
    className: "text-red-700 text-sm"
  }, "*", errors.name))), email && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "md:text-lg text-base font-medium"
  }, "Email:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    value: formDetails.email,
    className: "px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full",
    placeholder: "Enter your email",
    onChange: handleChange
  }), errors.email && /*#__PURE__*/React.createElement("p", {
    className: "text-red-700 text-sm"
  }, "*", errors.email))), phone && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "md:text-lg text-base font-medium"
  }, "Phone:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "phone",
    value: formDetails.phone,
    className: "px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full",
    placeholder: "Enter your phone number",
    onChange: handleChange
  }), errors.phone && /*#__PURE__*/React.createElement("p", {
    className: "text-red-700 text-sm"
  }, "*", errors.phone))), message && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "md:text-lg text-base font-medium"
  }, "Message:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    value: formDetails.message,
    className: "px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black min-h-32 w-full",
    placeholder: "Write your message",
    onChange: handleChange
  }), errors.message && /*#__PURE__*/React.createElement("p", {
    className: "text-red-700 text-sm"
  }, "*", errors.message))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-red-500 text-white px-4 py-2 rounded-md text-lg hover:bg-red-700 duration-150"
  }, "Submit"))), /*#__PURE__*/React.createElement("div", {
    className: "px-4 mt-10 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "border-t border-slate-500 pt-2 pb-4 text-sm"
  }, "This contact form is neither created nor endorsed by", " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "font-medium text-nowrap"
  }, "Formdash"))));
};
var _default = exports["default"] = ContactForm;