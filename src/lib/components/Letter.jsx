import React from "react";
import styled from "styled-components";

const LetterSection = styled.div`
  padding: ${props => 'padding' in props.styling['LetterSection'] ? props.styling['padding']['LetterSection']: "5%"};
`;

const Title = styled.div`
  text-align: ${props => 'text-align' in props.styling['Title'] ? props.styling['text-align']['Title']  : "center"};
  padding: ${props => 'padding' in props.styling['Title']  ? props.styling['padding']['Title']  : "2%"};
  font-size: ${props => 'font-size' in props.styling['Title']  ? props.styling['font-size']['Title']  : "3rem"};
  background-size: ${props => 'background-size' in props.styling['Title']  ? props.styling['background-size']['Title']  : "100%"};
  -webkit-background-clip: ${props => '-webkit-background-clip' in props.styling['Title']  ? props.styling['-webkit-background-clip']['Title']  : "text"};
  -moz-background-clip: ${props => '-moz-background-clip' in props.styling['Title']  ? props.styling['-moz-background-clip']['Title']  : "text"};
  -webkit-text-fill-color: ${props => '-webkit-text-fill-color' in props.styling['Title']  ? props.styling['-webkit-text-fill-color']['Title']  : "transparent"};
  -moz-text-fill-color: ${props => '-moz-text-fill-color' in props.styling['Title']  ? props.styling['-moz-text-fill-color']['Title']  : "transparent"};
  font-family: ${props => 'font-family' in props.styling['Title']  ? props.styling['font-family']['Title']  : "Bitter"};
  font-style: ${props => 'font-style' in props.styling['Title']  ? props.styling['font-style']['Title']  : "normal"};
  font-weight: ${props => 'font-weight' in props.styling['Title']  ? props.styling['font-weight']['Title']  : "bold"};
  text-shadow: ${props => 'text-shadow' in props.styling['Title'] ? props.styling['text-shadow']['Title']  : "5px 5px 4px rgba(27, 192, 211, 0.5)"};
`;

const Text = styled.div`
font-size: ${props => 'font-size' in props.styling['Text'] ? props.styling['Text']['font-size'] : "16px"};
`;

const Letter = ({ title, text, styling }) => {
  return (
    <LetterSection>
      <Title> {title} </Title>
      <Text>
        {text}
      </Text>
    </LetterSection>
  );
};

export default Letter;
