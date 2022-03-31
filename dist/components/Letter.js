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

const LetterSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: ", ";\n"])), props => 'padding' in props.styling['LetterSection'] ? props.styling['padding']['LetterSection'] : "5%");

const Title = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-align: ", ";\n  padding: ", ";\n  font-size: ", ";\n  background-size: ", ";\n  -webkit-background-clip: ", ";\n  -moz-background-clip: ", ";\n  -webkit-text-fill-color: ", ";\n  -moz-text-fill-color: ", ";\n  font-family: ", ";\n  font-style: ", ";\n  font-weight: ", ";\n  text-shadow: ", ";\n"])), props => 'text-align' in props.styling['Title'] ? props.styling['text-align']['Title'] : "center", props => 'padding' in props.styling['Title'] ? props.styling['padding']['Title'] : "2%", props => 'font-size' in props.styling['Title'] ? props.styling['font-size']['Title'] : "3rem", props => 'background-size' in props.styling['Title'] ? props.styling['background-size']['Title'] : "100%", props => '-webkit-background-clip' in props.styling['Title'] ? props.styling['-webkit-background-clip']['Title'] : "text", props => '-moz-background-clip' in props.styling['Title'] ? props.styling['-moz-background-clip']['Title'] : "text", props => '-webkit-text-fill-color' in props.styling['Title'] ? props.styling['-webkit-text-fill-color']['Title'] : "transparent", props => '-moz-text-fill-color' in props.styling['Title'] ? props.styling['-moz-text-fill-color']['Title'] : "transparent", props => 'font-family' in props.styling['Title'] ? props.styling['font-family']['Title'] : "Bitter", props => 'font-style' in props.styling['Title'] ? props.styling['font-style']['Title'] : "normal", props => 'font-weight' in props.styling['Title'] ? props.styling['font-weight']['Title'] : "bold", props => 'text-shadow' in props.styling['Title'] ? props.styling['text-shadow']['Title'] : "5px 5px 4px rgba(27, 192, 211, 0.5)");

const Text = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nfont-size: ", ";\n"])), props => 'font-size' in props.styling['Text'] ? props.styling['Text']['font-size'] : "16px");

const Letter = _ref => {
  let {
    title,
    text,
    styling
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(LetterSection, null, /*#__PURE__*/_react.default.createElement(Title, null, " ", title, " "), /*#__PURE__*/_react.default.createElement(Text, null, text));
};

var _default = Letter;
exports.default = _default;