"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AdBlock = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: ", ";\n  background-position: ", ";\n  background-repeat: ", ";\n  overflow: ", ";\n  width: ", ";\n  height: ", ";\n"])), props => props.img, props => 'background-size' in props.styling ? props.styling['background-size'] : "contain", props => 'background-position' in props.styling ? props.styling['background-position'] : "center", props => 'background-repeat' in props.styling ? props.styling['background-repeat'] : "no-repeat", props => 'overflow' in props.styling ? props.styling['overflow'] : "hidden", props => 'width' in props.styling ? props.styling['width'] : "100%", props => 'height' in props.styling ? props.styling['height'] : "40vw");

const Ad = _ref => {
  let {
    img,
    styling
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(AdBlock, {
    img: img
  });
};

var _default = Ad;
exports.default = _default;