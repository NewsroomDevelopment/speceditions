import React from "react";
import styled from "styled-components";

const LetterSection = styled.div`
  padding: 5%;
`;

const Title = styled.div`
  text-align: center;
  padding: 2%;
  font-size: 3rem;
  background-image: linear-gradient(
      89.88deg,
      #000748 35.17%,
      #204352 66.32%,
      #12909e 91.06%
    );

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  font-family: Bitter;
  font-style: normal;
  font-weight: bold;

  text-shadow: 5px 5px 4px rgba(27, 192, 211, 0.5);
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
