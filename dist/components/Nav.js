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

const NavSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-size: ", ";\n  margin-top:", ";\n  background-repeat: ", ";\n  overflow: ", ";\n  background-position: ", ";\n  width: ", ";\n  height: ", ";\n  position: ", ";\n  top: ", ";\n"])), props => 'background-size' in props.styling['NavSection'] ? props.styling['background-size']['NavSection'] : "contain", props => 'margin-top' in props.styling['NavSection'] ? props.styling['margin-top']['NavSection'] : "20%", props => 'background-repeat' in props.styling['NavSection'] ? props.styling['background-repeat']['NavSection'] : "no-repeat", props => 'overflow' in props.styling['NavSection'] ? props.styling['overflow']['NavSection'] : "hidden", props => 'background-position' in props.styling['NavSection'] ? props.styling['background-position']['NavSection'] : "left", props => 'width' in props.styling['NavSection'] ? props.styling['width']['NavSection'] : "100%", props => 'height' in props.styling['NavSection'] ? props.styling['height']['NavSection'] : "40vw", props => 'position' in props.styling['NavSection'] ? props.styling['position']['NavSection'] : "sticky", props => 'tops' in props.styling['NavSection'] ? props.styling['tops']['NavSection'] : "0");

const SectionNav = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: ", ";\n  font-size:  ", ";\n  line-height:  ", ";\n  color: ", ";\n  font-weight: ", ";\n"])), props => 'position' in props.styling['SectionNav'] ? props.styling['position']['SectionNav'] : "relative", props => 'font-size' in props.styling['SectionNav'] ? props.styling['font-size']['SectionNav'] : "1.75em", props => 'line-height' in props.styling['SectionNav'] ? props.styling['line-height']['SectionNav'] : "1.85em", props => 'color' in props.styling['SectionNav'] ? props.styling['color']['SectionNav'] : "white", props => 'bold' in props.styling['SectionNav'] ? props.styling['bold']['SectionNav'] : "bold");

const NavText = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: ", ";\n"])), props => 'margin-top' in props.styling['NavText'] ? props.styling['margin-top']['NavText'] : "25%");

const Nav = _ref => {
  let {
    sections,
    styling
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(NavSection, null, /*#__PURE__*/_react.default.createElement(NavText, null, Object.keys(sections).map(section => /*#__PURE__*/_react.default.createElement(SectionNav, null, section))));
};

var _default = Nav;
exports.default = _default;