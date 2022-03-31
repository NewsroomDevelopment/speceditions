"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Ad = _interopRequireDefault(require("./Ad"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AdWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  justify-content", ";\n  padding-bottom:", ";\n"])), props => 'display' in props.styling ? props.styling['display'] : "flex", props => 'justify-content' in props.styling ? props.styling['justify-content'] : "space-between", props => 'padding-bottom' in props.styling ? props.styling['padding-bottom'] : "10%");

const AdsSection = _ref => {
  let {
    images,
    styling
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(AdWrapper, null, images.map(image => /*#__PURE__*/_react.default.createElement(_Ad.default, {
    img: image,
    styling: styling['AdsSection']
  }))));
};

var _default = AdsSection;
exports.default = _default;