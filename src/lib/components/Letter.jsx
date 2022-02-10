import React from "react";

const Letter = ({ letter }) => {
  return (
    <LetterSection>
      <Title> {letter.title} </Title>
      <Text>
        {letter.text}
      </Text>
    </LetterSection>
  );
};

export default Letter;
