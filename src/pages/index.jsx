import React from "react";
import { graphql } from "gatsby";
import Template from "../commons/components/Template";
import Articles from "./blocks/articles/ArticlesContainer";
import Intro from "./blocks/Intro";

export default function Home({ data }) {
  return (
    <Template>
      <Intro />
      <Articles articles={data?.allMediumPost.nodes} />
      <Intro />
    </Template>
  );
}

export const query = graphql`
  query GetMediumPosts {
    allMediumPost {
      nodes {
        title
        url
        imageUrl
        id
        description
        createdAt
      }
    }
  }
`;
