"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const LetterSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 5%;\n"])));

const Title = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-align: center;\n  padding: 2%;\n  font-size: 3rem;\n  background-image: linear-gradient(\n      89.88deg,\n      #000748 35.17%,\n      #204352 66.32%,\n      #12909e 91.06%\n    );\n\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n\n  font-family: Bitter;\n  font-style: normal;\n  font-weight: bold;\n\n  text-shadow: 5px 5px 4px rgba(27, 192, 211, 0.5);\n"])));

const Text = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));

const Letter = _ref => {
  let {
    title,
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(LetterSection, null, /*#__PURE__*/_react.default.createElement(Title, null, " ", title, " "), /*#__PURE__*/_react.default.createElement(Text, null, text));
};

var _default = Letter;
exports.default = _default;