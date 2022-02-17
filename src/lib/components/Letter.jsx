import React from "react";
import styled from "styled-components";

const LetterSection = styled.div`
  padding: ${props => 'padding' in props.styling ? props.styling['padding'] : "5%"};
`;

const Title = styled.div`
  text-align: ${props => 'text-align' in props.styling ? props.styling['text-align'] : "center"};
  padding: ${props => 'padding' in props.styling ? props.styling['padding'] : "2%"};
  font-size: ${props => 'font-size' in props.styling ? props.styling['font-size'] : "3rem"};
  background-size: ${props => 'background-size' in props.styling ? props.styling['background-size'] : "100%"};
  -webkit-background-clip: ${props => '-webkit-background-clip' in props.styling ? props.styling['-webkit-background-clip'] : "text"};
  -moz-background-clip: ${props => '-moz-background-clip' in props.styling ? props.styling['-moz-background-clip'] : "text"};
  -webkit-text-fill-color: ${props => '-webkit-text-fill-color' in props.styling ? props.styling['-webkit-text-fill-color'] : "transparent"};
  -moz-text-fill-color: ${props => '-moz-text-fill-color' in props.styling ? props.styling['-moz-text-fill-color'] : "transparent"};

  font-family: ${props => 'font-family' in props.styling ? props.styling['font-family'] : "Bitter"};
  font-style: ${props => 'font-style' in props.styling ? props.styling['font-style'] : "normal"};
  font-weight: ${props => 'font-weight' in props.styling ? props.styling['font-weight'] : "bold"};

  text-shadow: ${props => 'text-shadow' in props.styling ? props.styling['text-shadow'] : "5px 5px 4px rgba(27, 192, 211, 0.5)"};
`;

const Text = styled.div`
`

const Letter = ({ title, text }) => {
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
