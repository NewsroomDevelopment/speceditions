import React from "react";
import styled from "styled-components";
import ImgSrc_mobile from "../images/desktop_background.png";
import ImgSrc_desktop from "../images/desktop_background.png";
import { Desktop, MobileAndTablet } from "react-responsive-simple";

const TitleWrapper = styled.div`
  overflow: ${props => 'overflow' in props.styling ? props.styling['overflow'] : "hidden"};
  width: ${props => 'width' in props.styling ? props.styling['width'] : "100vw"};
  height: ${props => 'height' in props.styling ? props.styling['height'] : "120vh"};
  display: ${props => 'display' in props.styling ? props.styling['display'] : "flex"};
  justify-content: space-between;${props => 'justify-content' in props.styling ? props.styling['justify-content'] : "space-between"};
  background-image: url(${(props) => props.img});
  background-size: ${props => 'background-size' in props.styling ? props.styling['background-size'] : "cover"};
  background-position: ${props => 'background-position' in props.styling ? props.styling['background-position'] : "center"};
  background-repeat: ${props => 'background-repeat' in props.styling ? props.styling['background-repeeat'] : "no-repeat"};
`;

const Header = styled.div`
  color: ${props => 'color' in props.styling ? props.styling['color'] : "white"};
  margin-top: ${props => 'margin-top' in props.styling ? props.styling['margin-top'] : "6rem"};
  margin-right: ${props => 'margin-right' in props.styling ? props.styling['margin-right'] : "1rem"};
  position: ${props => 'position' in props.styling ? props.styling['position'] : "relative"};
  top: ${props => 'top' in props.styling ? props.styling['top'] : "15%"};
  line-height: ${props => 'line-height' in props.styling ? props.styling['line-height'] : "10em"};
  width: ${props => 'width' in props.styling ? props.styling['width'] : "50%"};
  left: ${props => 'left' in props.styling ? props.styling['left'] : "8%"};
  font-family: ${props => 'font-family' in props.styling ? props.styling['font-family'] : "montserrat"};
  & > h1 {
    font-size: ${props => 'font-size' in props.styling ? props.styling['font-size'] : "6rem"};
  }
  @media only screen and (max-width: 1024px) {
    word-wrap: ${props => 'word-wrap' in props.styling ? props.styling['word-wrap'] : "break-word"};
    color: ${props => 'color' in props.styling ? props.styling['color'] : "white"};
    & > h1 {
      font-size: ${props => 'font-size' in props.styling ? props.styling['font-size'] : "2.5rem"};
    }
  }
  @media only screen and (max-width: 500px) {
    margin: ${props => 'margin' in props.styling ? props.styling['margin'] : "3rem 3rem"};
    text-align: ${props => 'text-align' in props.styling ? props.styling['text-align'] : "center"};
  }
`;

const Landing = () => {
  return (
    <div>
      <Desktop>
        <TitleWrapper img={ImgSrc_desktop}>
          <Header>
            <h1>Mental health on campus</h1>
          </Header>
        </TitleWrapper>
      </Desktop>
      <MobileAndTablet>
        <TitleWrapper img={ImgSrc_mobile}>
          <Header>
            <h1 style={{ "line-height": "5em" }}>Mental health on campus</h1>
          </Header>
        </TitleWrapper>
      </MobileAndTablet>
    </div>
  );
};

export default Landing;
