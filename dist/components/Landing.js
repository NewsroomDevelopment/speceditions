"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactResponsiveSimple = require("react-responsive-simple");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const TitleWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: ", ";\n  width: ", ";\n  height: ", ";\n  display: ", ";\n  justify-content: space-between;", ";\n  background-size: ", ";\n  background-position: ", ";\n  background-repeat: ", ";\n"])), props => 'overflow' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['overflow'] : "hidden", props => 'width' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['width'] : "100vw", props => 'height' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['height'] : "120vh", props => 'display' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['display'] : "flex", props => 'justify-content' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['justify-content'] : "space-between", props => 'background-size' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['background-size'] : "cover", props => 'background-position' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['background-position'] : "center", props => 'background-repeat' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['background-repeeat'] : "no-repeat");

const Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-top: ", ";\n  margin-right: ", ";\n  position: ", ";\n  top: ", ";\n  line-height: ", ";\n  width: ", ";\n  left: ", ";\n  font-family: ", ";\n  & > h1 {\n    font-size: ", ";\n  }\n  @media only screen and (max-width: 1024px) {\n    word-wrap: ", ";\n    color: ", ";\n    & > h1 {\n      font-size: ", ";\n    }\n  }\n  @media only screen and (max-width: 500px) {\n    margin: ", ";\n    text-align: ", ";\n  }\n"])), props => 'color' in props.styling['Header'] ? props.styling['Header']['color'] : "white", props => 'margin-top' in props.styling['Header'] ? props.styling['Header']['margin-top'] : "6rem", props => 'margin-right' in props.styling['Header'] ? props.styling['Header']['margin-right'] : "1rem", props => 'position' in props.styling['Header'] ? props.styling['Header']['position'] : "relative", props => 'top' in props.styling['Header'] ? props.styling['Header']['top'] : "15%", props => 'line-height' in props.styling['Header'] ? props.styling['Header']['line-height'] : "10em", props => 'width' in props.styling['Header'] ? props.styling['Header']['width'] : "50%", props => 'left' in props.styling['Header'] ? props.styling['Header']['left'] : "8%", props => 'font-family' in props.styling['Header'] ? props.styling['Header']['font-family'] : "montserrat", props => 'font-size' in props.styling['Header'] ? props.styling['Header']['font-size'] : "6rem", props => 'word-wrap' in props.styling['Header'] ? props.styling['Header']['word-wrap'] : "break-word", props => 'color' in props.styling['Header'] ? props.styling['Header']['color'] : "white", props => 'font-size' in props.styling['Header'] ? props.styling['Header']['font-size'] : "2.5rem", props => 'margin' in props.styling['Header'] ? props.styling['Header']['margin'] : "3rem 3rem", props => 'text-align' in props.styling['Header'] ? props.styling['Header']['text-align'] : "center");

const Landing = _ref => {
  let {
    styling,
    header,
    img_mobile,
    img_desktop
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactResponsiveSimple.Desktop, null, /*#__PURE__*/_react.default.createElement(TitleWrapper, {
    img: img_mobile
  }, /*#__PURE__*/_react.default.createElement(Header, null, /*#__PURE__*/_react.default.createElement("h1", null, header)))), /*#__PURE__*/_react.default.createElement(_reactResponsiveSimple.MobileAndTablet, null, /*#__PURE__*/_react.default.createElement(TitleWrapper, {
    img: img_desktop
  }, /*#__PURE__*/_react.default.createElement(Header, null, /*#__PURE__*/_react.default.createElement("h1", null, header)))));
};

var _default = Landing;
exports.default = _default;