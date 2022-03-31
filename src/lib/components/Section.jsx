import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import Article from "./Article"


const Section = ({ title, articles, styling }) => {
  console.log(articles);
  return (
    <>
      <SectionTitle title={title} styling={styling['SectionTitle']} />
      {articles.map((article) => (
        <Article article={article} styling={styling['Article']} />
      ))}
    </>
  );
};

export default Section;
