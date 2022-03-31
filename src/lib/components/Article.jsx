import React from "react";
import styled from "styled-components";

const ArticleWrap = styled.div`
  display: ${props => 'display' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['display'] : "flex"};
  flex-direction:${props => 'flex-direction' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['flex-direction'] : "row"};
  width: ${props => 'width' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['width'] : "18rem"};
  margin: ${props => 'margin' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['margin'] : "1.5rem"};
  flex-grow: ${props => 'flex-grow' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['flex-grow'] : "1"}; 
  display: ${props => 'display' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['display'] : "inline-block"};
  vertical-align: ${props => 'vertical-align' in props.styling['ArticleWrap'] ? props.styling['ArticleWrap']['vertical-align'] : "top"};
`;

const Link = styled.a`
  text-decoration: ${props => 'text-decoration' in props.styling['Link'] ? props.styling['Link']['text-decoration'] : "none"};
  width: ${props => 'width' in props.styling['Link'] ? props.styling['Link']['width'] : "inherit"};
`;

const ArticleImg = styled.img`
  order: ${props => 'order' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['order'] : "0"};
  margin: ${props => 'margin' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['margin'] : "24px 0px"};
  position: ${props => 'position' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['position'] : "static"};
  width: ${props => 'width' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['width'] : "300px"};
  height: ${props => 'height' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['height'] : "219px"};
  left: ${props => 'left' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['left'] : "8px"};
  top: ${props => 'top' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['top'] : "8px"};
  box-shadow: ${props => 'box-shadow' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['box-shadow'] : "6px 6px 10px rgba(0, 0, 0, 0.1)"};
  border-radius: ${props => 'border-radius' in props.styling['ArticleImg'] ? props.styling['ArticleImg']['border-radius'] : "30px 30px 10px 10px"}; 
`;

const ArticleText = styled.div`
  font-family: ${props => 'font-family' in props.styling['ArticleText'] ? props.styling['ArticleText'] ['font-family'] : "Montserrat"};
  font-style: ${props => 'font-style' in props.styling['ArticleText']  ? props.styling['ArticleText'] ['font-style'] : "normal"};
  font-weight: ${props => 'font-family' in props.styling['ArticleText']  ? props.styling['ArticleText'] ['font-family'] : "normal"} ;
  font-size: ${props => 'font-size' in props.styling['ArticleText']  ? props.styling['ArticleText'] ['font-size'] : "16px"};
  line-height: ${props => 'line-height' in props.styling['ArticleText']  ? props.styling['ArticleText'] ['line-height'] : "20px"};
  flex: ${props => 'flex' in props.styling['ArticleText']  ? props.styling['ArticleText'] ['flex'] : "none"};
  order: ${props => 'order' in props.styling['ArticleText']  ? props.styling['ArticleText'] ['order'] : "1"};
  margin: ${props => 'margin' in props.styling['ArticleText']  ? props.styling['ArticleText'] ['margin'] : "12px 0px"};
`;

const Title = styled.p`
  font-family: ${props => 'font-family' in props.styling['Title'] ? props.styling['Title']['font-family'] : "Bitter"};
  font-style: ${props => 'font-style' in props.styling['Title'] ? props.styling['Title']['font-style'] : "normal"};
  font-weight: ${props => 'font-weight' in props.styling['Title'] ? props.styling['Title']['font-weight'] : "bold"};
  font-size: ${props => 'font-size' in props.styling['Title'] ? props.styling['Title']['font-size'] : "26px"};
  line-height: ${props => 'line-height' in props.styling['Title'] ? props.styling['Title']['line-height'] : "38px"};
  flex: ${props => 'flex' in props.styling['Title'] ? props.styling['Title']['flex'] : "none"};
  order: ${props => 'order' in props.styling['Title'] ? props.styling['Title']['order'] : "0"};
  margin: ${props => 'margin' in props.styling['Title'] ? props.styling['Title']['margin'] : "8px 0px"};
`;

const Author = styled.p`
  font-family: ${props => 'font-family' in props.styling['Author'] ? props.styling['Author']['font-family'] : "Bitter"};
  font-style: ${props => 'font-style' in props.styling['Author'] ? props.styling['Author']['font-style'] : "normal"};
  font-weight: ${props => 'font-weight' in props.styling['Author'] ? props.styling['Author']['font-weight'] : "normal"};
  font-size: ${props => 'font-size' in props.styling['Author'] ? props.styling['Author']['font-size'] : "20px"};
  line-height: ${props => 'line-height' in props.styling['Author'] ? props.styling['Author']['line-height'] : "29px"};
  flex: ${props => 'flex' in props.styling['Author'] ? props.styling['Author']['flex'] : "none"};
  order: ${props => 'order' in props.styling['Author']? props.styling['Author']['order'] : "1"};
  margin: ${props => 'margin' in props.styling['Author']? props.styling['Author']['margin'] : "8px 0px"};
`;

const Article = ({ article, styling }) => {
  console.log(article);
  return (
    <ArticleWrap>
      <Link href={article.link} target="_blank" rel="noreferrer">
        <ArticleImg src={article.img} />
        <ArticleText>
          <Title>{article.title}</Title>
          <Author>{article.author}</Author>
        </ArticleText>
      </Link>
    </ArticleWrap>
  );
};

export default Article;
