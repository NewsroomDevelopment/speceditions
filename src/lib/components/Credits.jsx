import React from "react";
import styled from "styled-components";

const CreditsSection = styled.div`
  background-image: url(${(props) => props.CreditsImg});
  height: ${props => 'height' in props.styling['CreditsSection'] ? props.styling['CreditsSection']['height'] : "100vh"};
  width: ${props => 'width' in props.styling['CreditsSection'] ? props.styling['CreditsSection']['width'] : "100%"}; 
  background-size: ${props => 'background-size' in props.styling['CreditsSection'] ? props.styling['CreditsSection']['background-size'] : "cover"};
  background-position: ${props => 'background-position' in props.styling['CreditsSection'] ? props.styling['CreditsSection']['background-position'] : "center"};
  background-repeat: no-repeat;
`;

const CreditsTitle = styled.div`
  text-align: ${props => 'text-align' in props.styling['CreditsTitle'] ? props.styling['CreditsTitle'] ['text-align'] : "center"}; 
  color: ${props => 'color' in props.styling['CreditsTitle']  ? props.styling['CreditsTitle'] ['color'] : "white"}; 
  position: ${props => 'position' in props.styling['CreditsTitle']  ? props.styling['CreditsTitle'] ['position'] : "relative"};
  top: ${props => 'top' in props.styling['CreditsTitle']  ? props.styling['CreditsTitle'] ['top'] : "17.5%"}; 
  font-size: ${props => 'font-size' in props.styling['CreditsTitle']  ? props.styling['CreditsTitle'] ['font-size'] : "5rem"}; 
`;

const Credits = ({CreditsImg, styling}) => {
  return (
    <CreditsSection>
      <CreditsTitle>Credits</CreditsTitle>
    </CreditsSection>
  );
};

export default Credits;
