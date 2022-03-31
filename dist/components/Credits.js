"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const CreditsSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  height: ", ";\n  width: ", "; \n  background-size: ", ";\n  background-position: ", ";\n  background-repeat: no-repeat;\n"])), props => props.CreditsImg, props => 'height' in props.styling['CreditsSection'] ? props.styling['CreditsSection']['height'] : "100vh", props => 'width' in props.styling['CreditsSection'] ? props.styling['CreditsSection']['width'] : "100%", props => 'background-size' in props.styling['CreditsSection'] ? props.styling['CreditsSection']['background-size'] : "cover", props => 'background-position' in props.styling['CreditsSection'] ? props.styling['CreditsSection']['background-position'] : "center");

const CreditsTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-align: ", "; \n  color: ", "; \n  position: ", ";\n  top: ", "; \n  font-size: ", "; \n"])), props => 'text-align' in props.styling['CreditsTitle'] ? props.styling['CreditsTitle']['text-align'] : "center", props => 'color' in props.styling['CreditsTitle'] ? props.styling['CreditsTitle']['color'] : "white", props => 'position' in props.styling['CreditsTitle'] ? props.styling['CreditsTitle']['position'] : "relative", props => 'top' in props.styling['CreditsTitle'] ? props.styling['CreditsTitle']['top'] : "17.5%", props => 'font-size' in props.styling['CreditsTitle'] ? props.styling['CreditsTitle']['font-size'] : "5rem");

const Credits = _ref => {
  let {
    CreditsImg,
    styling
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(CreditsSection, null, /*#__PURE__*/_react.default.createElement(CreditsTitle, null, "Credits"));
};

var _default = Credits;
exports.default = _default;