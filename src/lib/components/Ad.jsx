import React from "react";
import styled from "styled-components";


const AdBlock = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 100%;
  height: ${props => props.theme.height};
`;
const Ad = ({ img }) => {
  console.log(img);
  return <AdBlock img={img}  />;
};
export default Ad;
