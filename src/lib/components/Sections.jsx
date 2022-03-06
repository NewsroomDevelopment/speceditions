import React from "react";
import styled from "styled-components";

import Letter from "../components/Letter";
import Nav from "../components/Nav";
import AdsSection from "./AdsSection";
import WritingSection from "./WritingSection";
import VisualSection from "./VisualSection";
import Credits from "./Credits";

const Columns = styled.div`
  display: ${props => 'display' in props.styling ? props.styling['display'] : "flex"};
`;
const NavColumn = styled.div`
  width: ${props => 'width' in props.styling ? props.styling['width'] : "25%"};
`;

const ArticleColumn = styled.div`
  width: ${props => 'width' in props.styling ? props.styling['width'] : "75%"};
  padding-right: ${props => 'padding-right' in props.styling ? props.styling['padding-right'] : "5%"};
`;
const Title = styled.div`
  text-align: ${props => 'text-align' in props.styling ? props.styling['text-align'] : "center"};
  padding: ${props => 'padding' in props.styling ? props.styling['padding'] : "2%"};
  font-size: ${props => 'font-size' in props.styling ? props.styling['font-size'] : "5rem"};
  text-transform: ${props => 'text-transform' in props.styling ? props.styling['text-transform'] : "uppercase"};
  background-image: linear-gradient(89.88deg, #000748 35.17%, #204352 66.32%, #12909e 91.06%);${props => 'background-image' in props.styling ? props.styling['background-image'] : "linear-gradient(89.88deg, #000748 35.17%, #204352 66.32%, #12909e 91.06%)"};

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

const Sections = ({WritingData, VisualData, styling}) => {
  console.log(WritingData["Photo"]);
  return (
    <>
      <Columns>
        <NavColumn>
          <Nav />
        </NavColumn>
        <ArticleColumn>
          <Letter />
          <Title>Writing</Title>
          {Object.keys(WritingData).map((key) => (
            <WritingSection title={key} articles={WritingData[key]} />
          ))}
          <Title>Visuals</Title>
          {Object.keys(VisualData).map((key) => (
            <VisualSection title={key} articles={VisualData[key]} />
          ))}
          <AdsSection />
        </ArticleColumn>
      </Columns>
      <Credits />
    </>
  );
};

export default Sections;
