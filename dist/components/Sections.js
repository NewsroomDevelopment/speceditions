"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Letter = _interopRequireDefault(require("./Letter"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _AdsSection = _interopRequireDefault(require("./AdsSection"));

var _Section = _interopRequireDefault(require("./Section"));

var _Credits = _interopRequireDefault(require("./Credits"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Columns = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n"])), props => 'display' in props.styling['Columns'] ? props.styling['display']['Columns'] : "flex");

const NavColumn = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n"])), props => 'width' in props.styling['NavColumn'] ? props.styling['width']['NavColumn'] : "25%");

const ArticleColumn = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: ", ";\n  padding-right: ", ";\n"])), props => 'width' in props.styling['ArticleColumn'] ? props.styling['width']['ArticleColumn'] : "75%", props => 'padding-right' in props.styling['ArticleColumn'] ? props.styling['padding-right']['ArticleColumn'] : "5%");

const Title = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-align: ", ";\n  padding: ", ";\n  font-size: ", ";\n  text-transform: ", ";\n  background-image: ", ";\n  background-size: ", ";\n  -webkit-background-clip: ", ";\n  -moz-background-clip: ", ";\n  -webkit-text-fill-color: ", ";\n  -moz-text-fill-color: ", ";\n  font-family: ", ";\n  font-style: ", ";\n  font-weight: ", ";\n  text-shadow: ", ";\n"])), props => 'text-align' in props.styling['Title'] ? props.styling['text-align']['Title'] : "center", props => 'padding' in props.styling['Title'] ? props.styling['padding']['Title'] : "2%", props => 'font-size' in props.styling['Title'] ? props.styling['font-size']['Title'] : "5rem", props => 'text-transform' in props.styling['Title'] ? props.styling['text-transform']['Title'] : "uppercase", props => 'background-image' in props.styling['Title'] ? props.styling['background-image']['Title'] : "linear-gradient(89.88deg, #000748 35.17%, #204352 66.32%, #12909e 91.06%)", props => 'background-size' in props.styling['Title'] ? props.styling['background-size']['Title'] : "100%", props => '-webkit-background-clip' in props.styling['Title'] ? props.styling['-webkit-background-clip']['Title'] : "text", props => '-moz-background-clip' in props.styling['Title'] ? props.styling['-moz-background-clip']['Title'] : "text", props => '-webkit-text-fill-color' in props.styling['Title'] ? props.styling['-webkit-text-fill-color']['Title'] : "transparent", props => '-moz-text-fill-color' in props.styling['Title'] ? props.styling['-moz-text-fill-color']['Title'] : "transparent", props => 'font-family' in props.styling['Title'] ? props.styling['font-family']['Title'] : "Bitter", props => 'font-style' in props.styling['Title'] ? props.styling['font-style']['Title'] : "normal", props => 'font-weight' in props.styling['Title'] ? props.styling['font-weight']['Title'] : "bold", props => 'text-shadow' in props.styling['Title'] ? props.styling['text-shadow']['Title'] : "5px 5px 4px rgba(27, 192, 211, 0.5)");

const Sections = _ref => {
  let {
    ArticleData,
    CreditsImg,
    AdImages,
    styling
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Columns, null, /*#__PURE__*/_react.default.createElement(NavColumn, null, /*#__PURE__*/_react.default.createElement(_Nav.default, {
    styling: styling['Nav']
  })), /*#__PURE__*/_react.default.createElement(ArticleColumn, null, /*#__PURE__*/_react.default.createElement(_Letter.default, {
    styling: styling['Letter']
  }), Object.keys(ArticleData).map(key => /*#__PURE__*/_react.default.createElement(_Section.default, {
    title: key,
    articles: ArticleData[key],
    styling: styling['Section']
  })), /*#__PURE__*/_react.default.createElement(_AdsSection.default, {
    images: AdImages,
    styling: styling['AdsSection']
  }))), /*#__PURE__*/_react.default.createElement(_Credits.default, {
    CreditsImg: CreditsImg,
    styling: styling['Credits']
  }));
};

var _default = Sections;
exports.default = _default;