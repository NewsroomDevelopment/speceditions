import React from "react";
import styled from "styled-components";



const NavSection = styled.div`
  background-size: contain;
  margin-top:20%;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: left;
  width: 100%;
  height: 40vw;
  position: sticky;
  top:0;
`;

const SectionNav = styled.div`
  position: ${props => 'position' in props.styling ? props.styling['position'] : "relative"};
  font-size:  ${props => 'font-size' in props.styling ? props.styling['font-size'] : "1.75em"};
  line-height:  ${props => 'line-height' in props.styling ? props.styling['line-height'] : "1.85em"};
  color: ${props => 'color' in props.styling ? props.styling['color'] : "white"};
  font-weight: ${props => 'bold' in props.styling ? props.styling['bold'] : "bold"};
`;

const NavText = styled.div`
  margin-top: 25%;
`;

const Nav = ({sections, styling}) => {
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
