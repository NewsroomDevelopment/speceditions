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
  position: relative;
  font-size: 1.75em;
  line-height: 1.85em;
  color: white;
  font-weight: bold;
`;

const NavText = styled.div`
  margin-top: 25%;
`;

const Nav = ({sections}) => {
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
