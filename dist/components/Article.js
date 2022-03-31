"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ArticleWrap = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  flex-direction:", ";\n  width: ", ";\n  margin: ", ";\n  flex-grow: ", "; \n  display: ", ";\n  vertical-align: ", ";\n"])), props => 'display' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['display'] : "flex", props => 'flex-direction' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['flex-direction'] : "row", props => 'width' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['width'] : "18rem", props => 'margin' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['margin'] : "1.5rem", props => 'flex-grow' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['flex-grow'] : "1", props => 'display' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['display'] : "inline-block", props => 'vertical-align' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['vertical-align'] : "top");

const Link = _styledComponents.default.a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-decoration: ", ";\n  width: ", ";\n"])), props => 'text-decoration' in props.styling['Link'] ? props.styling['Link']['text-decoration'] : "none", props => 'width' in props.styling['Link'] ? props.styling['Link']['width'] : "inherit");

const ArticleImg = _styledComponents.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  order: ", ";\n  margin: ", ";\n  position: ", ";\n  width: ", ";\n  height: ", ";\n  left: ", ";\n  top: ", ";\n  box-shadow: ", ";\n  border-radius: ", "; \n"])), props => 'order' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['order'] : "0", props => 'margin' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['margin'] : "24px 0px", props => 'position' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['position'] : "static", props => 'width' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['width'] : "300px", props => 'height' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['height'] : "219px", props => 'left' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['left'] : "8px", props => 'top' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['top'] : "8px", props => 'box-shadow' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['box-shadow'] : "6px 6px 10px rgba(0, 0, 0, 0.1)", props => 'border-radius' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['border-radius'] : "30px 30px 10px 10px");

const ArticleText = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-style: ", ";\n  font-weight: ", " ;\n  font-size: ", ";\n  line-height: ", ";\n  flex: ", ";\n  order: ", ";\n  margin: ", ";\n"])), props => 'font-family' in props.styling['ArticleText'] ? props.styling['ArticleText']['font-family'] : "Montserrat", props => 'font-style' in props.styling['ArticleText'] ? props.styling['ArticleText']['font-style'] : "normal", props => 'font-family' in props.styling['ArticleText'] ? props.styling['ArticleText']['font-family'] : "normal", props => 'font-size' in props.styling['ArticleText'] ? props.styling['ArticleText']['font-size'] : "16px", props => 'line-height' in props.styling['ArticleText'] ? props.styling['ArticleText']['line-height'] : "20px", props => 'flex' in props.styling['ArticleText'] ? props.styling['ArticleText']['flex'] : "none", props => 'order' in props.styling['ArticleText'] ? props.styling['ArticleText']['order'] : "1", props => 'margin' in props.styling['ArticleText'] ? props.styling['ArticleText']['margin'] : "12px 0px");

const Title = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-style: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  flex: ", ";\n  order: ", ";\n  margin: ", ";\n"])), props => 'font-family' in props.styling['Title'] ? props.styling['Title']['font-family'] : "Bitter", props => 'font-style' in props.styling['Title'] ? props.styling['Title']['font-style'] : "normal", props => 'font-weight' in props.styling['Title'] ? props.styling['Title']['font-weight'] : "bold", props => 'font-size' in props.styling['Title'] ? props.styling['Title']['font-size'] : "26px", props => 'line-height' in props.styling['Title'] ? props.styling['Title']['line-height'] : "38px", props => 'flex' in props.styling['Title'] ? props.styling['Title']['flex'] : "none", props => 'order' in props.styling['Title'] ? props.styling['Title']['order'] : "0", props => 'margin' in props.styling['Title'] ? props.styling['Title']['margin'] : "8px 0px");

const Author = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-style: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  flex: ", ";\n  order: ", ";\n  margin: ", ";\n"])), props => 'font-family' in props.styling['Author'] ? props.styling['Author']['font-family'] : "Bitter", props => 'font-style' in props.styling['Author'] ? props.styling['Author']['font-style'] : "normal", props => 'font-weight' in props.styling['Author'] ? props.styling['Author']['font-weight'] : "normal", props => 'font-size' in props.styling['Author'] ? props.styling['Author']['font-size'] : "20px", props => 'line-height' in props.styling['Author'] ? props.styling['Author']['line-height'] : "29px", props => 'flex' in props.styling['Author'] ? props.styling['Author']['flex'] : "none", props => 'order' in props.styling['Author'] ? props.styling['Author']['order'] : "1", props => 'margin' in props.styling['Author'] ? props.styling['Author']['margin'] : "8px 0px");

const Article = _ref => {
  let {
    article,
    styling
  } = _ref;
  console.log(article);
  return /*#__PURE__*/_react.default.createElement(ArticleWrap, null, /*#__PURE__*/_react.default.createElement(Link, {
    href: article.link,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(ArticleImg, {
    src: article.img
  }), /*#__PURE__*/_react.default.createElement(ArticleText, null, /*#__PURE__*/_react.default.createElement(Title, null, article.title), /*#__PURE__*/_react.default.createElement(Author, null, article.author))));
};

var _default = Article;
exports.default = _default;