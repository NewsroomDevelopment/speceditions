"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SectionTitle = _ref => {
  let {
    title
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, title);
};

var _default = SectionTitle;
exports.default = _default;