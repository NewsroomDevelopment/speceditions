import React from "react";
import styled from "styled-components";

const NavSection = styled.div`
  background-size: ${props => 'background-size' in props.styling ? props.styling['background-size'] : "contain"};
  margin-top:${props => 'margin-top' in props.styling ? props.styling['margin-top'] : "20%"};
  background-repeat: ${props => 'background-repeat' in props.styling ? props.styling['background-repeat'] : "no-repeat"};
  overflow: ${props => 'overflow' in props.styling ? props.styling['overflow'] : "hidden"};
  background-position: ${props => 'background-position' in props.styling ? props.styling['background-position'] : "left"};
  width: ${ props => 'width' in props.styling ? props.styling['width'] : "100%" };
  height: ${ props => 'height' in props.styling ? props.styling['height'] : "40vw" };
  position: ${ props => 'position' in props.styling ? props.styling['position'] : "sticky" };
  top: ${ props => 'tops' in props.styling ? props.styling['tops'] : "0" };
`;

const SectionNav = styled.div`
  position: ${props => 'position' in props.styling ? props.styling['position'] : "relative"};
  font-size:  ${props => 'font-size' in props.styling ? props.styling['font-size'] : "1.75em"};
  line-height:  ${props => 'line-height' in props.styling ? props.styling['line-height'] : "1.85em"};
  color: ${props => 'color' in props.styling ? props.styling['color'] : "white"};
  font-weight: ${props => 'bold' in props.styling ? props.styling['bold'] : "bold"};
`;

const NavText = styled.div`
  margin-top: ${props => 'margin-top' in props.styling ? props.styling['margin-top'] : "25%"};
`;

const Nav = ({ sections, styling }) => {
  return (
    <NavSection>
      <NavText>
        {Object.keys(sections).map((section) => (
          <SectionNav>{section}</SectionNav>
        ))}
      </NavText>
    </NavSection>
  );
};

export default Nav;
