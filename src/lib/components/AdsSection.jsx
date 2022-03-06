import React from "react";
import styled from "styled-components";
import Ad from "./Ad";


const AdBlock = styled.div`
  display: ${props => 'display' in props.styling ? props.styling['display'] : "flex"};
  justify-content${props => 'justify-content' in props.styling ? props.styling['justify-content'] : "space-between"};
  padding-bottom:${props => 'padding-bottom' in props.styling ? props.styling['padding-bottom'] : "10%"};
`;

const AdsSection = ({images, styling}) => {
  return (
    <>
      <AdBlock>
        {images.map((image) => <Ad img={image}/>)}
      </AdBlock>
    </>
  );
};

export default AdsSection;
