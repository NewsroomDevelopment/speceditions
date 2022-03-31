import React from "react";
import styled from "styled-components";

import Letter from "./Letter";
import Nav from "./Nav";
import AdsSection from "./AdsSection";
import Section from "./Section";
import Credits from "./Credits";

const Columns = styled.div`
  display: ${props => 'display' in props.styling['Columns'] ? props.styling['display']['Columns']  : "flex"};
`;
const NavColumn = styled.div`
  width: ${props => 'width' in props.styling['NavColumn']  ? props.styling['width']['NavColumn'] : "25%"};
`;

const ArticleColumn = styled.div`
  width: ${props => 'width' in props.styling['ArticleColumn'] ? props.styling['width']['ArticleColumn'] : "75%"};
  padding-right: ${props => 'padding-right' in props.styling['ArticleColumn'] ? props.styling['padding-right']['ArticleColumn'] : "5%"};
`;
const Title = styled.div`
  text-align: ${props => 'text-align' in props.styling['Title'] ? props.styling['text-align']['Title'] : "center"};
  padding: ${props => 'padding' in props.styling['Title'] ? props.styling['padding']['Title'] : "2%"};
  font-size: ${props => 'font-size' in props.styling['Title'] ? props.styling['font-size']['Title'] : "5rem"};
  text-transform: ${props => 'text-transform' in props.styling ['Title']? props.styling['text-transform']['Title'] : "uppercase"};
  background-image: ${props => 'background-image' in props.styling['Title'] ? props.styling['background-image']['Title'] : "linear-gradient(89.88deg, #000748 35.17%, #204352 66.32%, #12909e 91.06%)"};
  background-size: ${props => 'background-size' in props.styling['Title'] ? props.styling['background-size']['Title'] : "100%"};
  -webkit-background-clip: ${props => '-webkit-background-clip' in props.styling['Title'] ? props.styling['-webkit-background-clip']['Title'] : "text"};
  -moz-background-clip: ${props => '-moz-background-clip' in props.styling['Title'] ? props.styling['-moz-background-clip']['Title'] : "text"};
  -webkit-text-fill-color: ${props => '-webkit-text-fill-color' in props.styling['Title'] ? props.styling['-webkit-text-fill-color']['Title'] : "transparent"};
  -moz-text-fill-color: ${props => '-moz-text-fill-color' in props.styling['Title'] ? props.styling['-moz-text-fill-color']['Title'] : "transparent"};
  font-family: ${props => 'font-family' in props.styling['Title'] ? props.styling['font-family']['Title'] : "Bitter"};
  font-style: ${props => 'font-style' in props.styling['Title'] ? props.styling['font-style']['Title'] : "normal"};
  font-weight: ${props => 'font-weight' in props.styling ['Title']? props.styling['font-weight']['Title'] : "bold"};
  text-shadow: ${props => 'text-shadow' in props.styling['Title'] ? props.styling['text-shadow'] ['Title']: "5px 5px 4px rgba(27, 192, 211, 0.5)"};
`;

const Sections = ({ArticleData, CreditsImg, AdImages, styling}) => {
  return (
    <>
      <Columns>
        <NavColumn>
          <Nav styling={styling['Nav']}/>
        </NavColumn>
        <ArticleColumn>
          <Letter styling={styling['Letter']} />
          {Object.keys(ArticleData).map((key) => (
            <Section title={key} articles={ArticleData[key]} styling={styling['Section']}/>
          ))}
          <AdsSection images={AdImages} styling={styling['AdsSection']}/> 
        </ArticleColumn>
      </Columns>
      <Credits CreditsImg={CreditsImg} styling={styling['Credits']} />
    </>
  );
};

export default Sections;
