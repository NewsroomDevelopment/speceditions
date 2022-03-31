import React from "react";
import styled from "styled-components";

const NavSection = styled.div`
  background-size: ${props => 'background-size' in props.styling['NavSection'] ? props.styling['background-size']['NavSection'] : "contain"};
  margin-top:${props => 'margin-top' in props.styling['NavSection'] ? props.styling['margin-top']['NavSection'] : "20%"};
  background-repeat: ${props => 'background-repeat' in props.styling ['NavSection']? props.styling['background-repeat']['NavSection'] : "no-repeat"};
  overflow: ${props => 'overflow' in props.styling['NavSection'] ? props.styling['overflow']['NavSection'] : "hidden"};
  background-position: ${props => 'background-position' in props.styling['NavSection'] ? props.styling['background-position']['NavSection'] : "left"};
  width: ${ props => 'width' in props.styling['NavSection'] ? props.styling['width']['NavSection'] : "100%" };
  height: ${ props => 'height' in props.styling['NavSection'] ? props.styling['height']['NavSection'] : "40vw" };
  position: ${ props => 'position' in props.styling['NavSection'] ? props.styling['position']['NavSection'] : "sticky" };
  top: ${ props => 'tops' in props.styling['NavSection'] ? props.styling['tops']['NavSection'] : "0" };
`;

const SectionNav = styled.div`
  position: ${props => 'position' in props.styling['SectionNav'] ? props.styling['position']['SectionNav'] : "relative"};
  font-size:  ${props => 'font-size' in props.styling['SectionNav'] ? props.styling['font-size']['SectionNav'] : "1.75em"};
  line-height:  ${props => 'line-height' in props.styling['SectionNav'] ? props.styling['line-height']['SectionNav'] : "1.85em"};
  color: ${props => 'color' in props.styling['SectionNav'] ? props.styling['color']['SectionNav'] : "white"};
  font-weight: ${props => 'bold' in props.styling['SectionNav'] ? props.styling['bold']['SectionNav'] : "bold"};
`;

const NavText = styled.div`
  margin-top: ${props => 'margin-top' in props.styling['NavText'] ? props.styling['margin-top']['NavText'] : "25%"};
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
