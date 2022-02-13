import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components"



const SectionTitle = ({ linePosition, title }) => {
  return <ThemeProvider><div>{title}</div></ThemeProvider>;
};

export default SectionTitle;
