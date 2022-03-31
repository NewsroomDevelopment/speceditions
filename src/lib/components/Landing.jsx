import React from "react";
import styled from "styled-components";
import { Desktop, MobileAndTablet } from "react-responsive-simple";

const TitleWrapper = styled.div`
  overflow: ${props => 'overflow' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['overflow'] : "hidden"};
  width: ${props => 'width' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['width'] : "100vw"};
  height: ${props => 'height' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['height'] : "120vh"};
  display: ${props => 'display' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['display'] : "flex"};
  justify-content: space-between;${props => 'justify-content' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['justify-content'] : "space-between"};
  background-size: ${props => 'background-size' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['background-size'] : "cover"};
  background-position: ${props => 'background-position' in props.styling ['TitleWrapper']? props.styling['TitleWrapper']['background-position'] : "center"};
  background-repeat: ${props => 'background-repeat' in props.styling['TitleWrapper'] ? props.styling['TitleWrapper']['background-repeeat'] : "no-repeat"};
`;

const Header = styled.div`
  color: ${props => 'color' in props.styling['Header'] ? props.styling['Header']['color'] : "white"};
  margin-top: ${props => 'margin-top' in props.styling['Header'] ? props.styling['Header']['margin-top'] : "6rem"};
  margin-right: ${props => 'margin-right' in props.styling['Header'] ? props.styling['Header']['margin-right'] : "1rem"};
  position: ${props => 'position' in props.styling['Header'] ? props.styling['Header']['position'] : "relative"};
  top: ${props => 'top' in props.styling['Header'] ? props.styling['Header']['top'] : "15%"};
  line-height: ${props => 'line-height' in props.styling['Header'] ? props.styling['Header']['line-height'] : "10em"};
  width: ${props => 'width' in props.styling['Header'] ? props.styling['Header']['width'] : "50%"};
  left: ${props => 'left' in props.styling['Header'] ? props.styling['Header']['left'] : "8%"};
  font-family: ${props => 'font-family' in props.styling['Header'] ? props.styling['Header']['font-family'] : "montserrat"};
  & > h1 {
    font-size: ${props => 'font-size' in props.styling ['Header']? props.styling['Header']['font-size'] : "6rem"};
  }
  @media only screen and (max-width: 1024px) {
    word-wrap: ${props => 'word-wrap' in props.styling['Header'] ? props.styling['Header']['word-wrap'] : "break-word"};
    color: ${props => 'color' in props.styling['Header'] ? props.styling['Header']['color'] : "white"};
    & > h1 {
      font-size: ${props => 'font-size' in props.styling['Header'] ? props.styling['Header']['font-size'] : "2.5rem"};
    }
  }
  @media only screen and (max-width: 500px) {
    margin: ${props => 'margin' in props.styling['Header'] ? props.styling['Header']['margin'] : "3rem 3rem"};
    text-align: ${props => 'text-align' in props.styling['Header'] ? props.styling['Header']['text-align'] : "center"};
  }
`;

const Landing = ({styling, header, img_mobile, img_desktop}) => {
  return (
    <div>
      <Desktop>
        <TitleWrapper img={img_mobile}>
          <Header>
            <h1>{header}</h1>
          </Header>
        </TitleWrapper>
      </Desktop>
      <MobileAndTablet>
        <TitleWrapper img={img_desktop}>
          <Header>
            <h1>{header}</h1>
          </Header>
        </TitleWrapper>
      </MobileAndTablet>
    </div>
  );
};

export default Landing;
