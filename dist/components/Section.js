"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SectionTitle = _interopRequireDefault(require("./SectionTitle"));

var _Article = _interopRequireDefault(require("./Article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Section = _ref => {
  let {
    title,
    articles,
    styling
  } = _ref;
  console.log(articles);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SectionTitle.default, {
    title: title,
    styling: styling['SectionTitle']
  }), articles.map(article => /*#__PURE__*/_react.default.createElement(_Article.default, {
    article: article,
    styling: styling['Article']
  })));
};

var _default = Section;
exports.default = _default;