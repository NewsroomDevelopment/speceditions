"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Letter = _ref => {
  let {
    letter
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(LetterSection, null, /*#__PURE__*/_react.default.createElement(Title, null, " ", letter.title, " "), /*#__PURE__*/_react.default.createElement(Text, null, letter.text));
};

var _default = Letter;
exports.default = _default;