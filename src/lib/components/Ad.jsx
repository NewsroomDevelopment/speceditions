import React from "react";
import styled from "styled-components";

const Ad = styled.div`
  background-image: url(${(props) => props.img});
  background-size: ${ props => 'background-size' in props.styling ? props.styling['background-size'] : "contain" };
  background-position: ${ props => 'background-position' in props.styling ? props.styling['background-position'] : "center" };
  background-repeat: ${ props => 'background-repeat' in props.styling ? props.styling['background-repeat'] : "no-repeat" };
  overflow: ${ props => 'overflow' in props.styling ? props.styling['overflow'] : "hidden" };
  width: ${ props => 'width' in props.styling ? props.styling['width'] : "100%" };
  height: ${ props => 'height' in props.styling ? props.styling['height'] : "40vw" };
`;
const Ad = ({ img, styling }) => {
  console.log(img);
  return <AdBlock img={img}  />;
};
export default Ad;
