import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components"


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
  return <ThemeProvider theme={theme}>
              <AdBlock img={img}  />;
        </ThemeProvider>;
};
export default Ad;
