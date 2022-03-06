import React from "react";
import styled from "styled-components";

const ArticleWrap = styled.div`
  display: ${props => 'display' in props.styling ? props.styling['display'] : "flex"};
  flex-direction:${props => 'flex-direction' in props.styling ? props.styling['flex-direction'] : "row"};
  width: ${props => 'width' in props.styling ? props.styling['width'] : "18rem"};
  margin: ${props => 'margin' in props.styling ? props.styling['margin'] : "1.5rem"};
  flex-grow: ${props => 'flex-grow' in props.styling ? props.styling['flex-grow'] : "1"}; 
  display: ${props => 'display' in props.styling ? props.styling['display'] : "inline-block"};
  vertical-align: ${props => 'vertical-align' in props.styling ? props.styling['vertical-align'] : "top"};
`;

const Link = styled.a`
  text-decoration: ${props => 'text-decoration' in props.styling ? props.styling['text-decoration'] : "none"};
  width: ${props => 'width' in props.styling ? props.styling['width'] : "inherit"};
`;

const ArticleImg = styled.img`
  order: ${props => 'order' in props.styling ? props.styling['order'] : "0"};

  margin: ${props => 'margin' in props.styling ? props.styling['margin'] : "24px 0px"};
  position: ${props => 'position' in props.styling ? props.styling['position'] : "static"};
  width: ${props => 'width' in props.styling ? props.styling['width'] : "300px"};
  height: ${props => 'height' in props.styling ? props.styling['height'] : "219px"};
  left: ${props => 'left' in props.styling ? props.styling['left'] : "8px"};
  top: ${props => 'top' in props.styling ? props.styling['top'] : "8px"};
  box-shadow: ${props => 'box-shadow' in props.styling ? props.styling['box-shadow'] : "6px 6px 10px rgba(0, 0, 0, 0.1)"};
  border-radius: ${props => 'border-radius' in props.styling ? props.styling['border-radius'] : "30px 30px 10px 10px"}; 
`;

const ArticleText = styled.div`
  font-family: ${props => 'font-family' in props.styling ? props.styling['font-family'] : "Montserrat"};
  font-style: ${props => 'font-style' in props.styling ? props.styling['font-style'] : "normal"};
  font-weight: ${props => 'font-family' in props.styling ? props.styling['font-family'] : "normal"} ;
  font-size: ${props => 'font-size' in props.styling ? props.styling['font-size'] : "16px"};
  line-height: ${props => 'line-height' in props.styling ? props.styling['line-height'] : "20px"};
  flex: ${props => 'flex' in props.styling ? props.styling['flex'] : "none"};
  order: ${props => 'order' in props.styling ? props.styling['order'] : "1"};
  margin: ${props => 'margin' in props.styling ? props.styling['margin'] : "12px 0px"};
`;

const Title = styled.p`
  font-family: ${props => 'font-family' in props.styling ? props.styling['font-family'] : "Bitter"};
  font-style: ${props => 'font-style' in props.styling ? props.styling['font-style'] : "normal"};
  font-weight: ${props => 'font-weight' in props.styling ? props.styling['font-weight'] : "bold"};
  font-size: ${props => 'font-size' in props.styling ? props.styling['font-size'] : "26px"};
  line-height: ${props => 'line-height' in props.styling ? props.styling['line-height'] : "38px"};
  flex: ${props => 'flex' in props.styling ? props.styling['flex'] : "none"};
  order: ${props => 'order' in props.styling ? props.styling['order'] : "0"};
  margin: ${props => 'margin' in props.styling ? props.styling['margin'] : "8px 0px"};
`;

const Author = styled.p`
  font-family: ${props => 'font-family' in props.styling ? props.styling['font-family'] : "Bitter"};
  font-style: ${props => 'font-style' in props.styling ? props.styling['font-style'] : "normal"};
  font-weight: ${props => 'font-weight' in props.styling ? props.styling['font-weight'] : "normal"};
  font-size: ${props => 'font-size' in props.styling ? props.styling['font-size'] : "20px"};
  line-height: ${props => 'line-height' in props.styling ? props.styling['line-height'] : "29px"};
  flex: ${props => 'flex' in props.styling ? props.styling['flex'] : "none"};
  order: ${props => 'order' in props.styling ? props.styling['order'] : "1"};
  margin: ${props => 'margin' in props.styling ? props.styling['margin'] : "8px 0px"};
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
