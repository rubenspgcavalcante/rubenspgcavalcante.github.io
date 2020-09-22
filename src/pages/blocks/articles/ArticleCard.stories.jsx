import React from "react";
import ArticleCard from "./ArticleCard";

const sample = {
  id: "10a7dc26c74",
  url: "https://tech.olx.com/webpack-from-zero-to-hero-10a7dc26c74",
  createdAt: 1549448150285,
  title: "Webpack From Zero to Hero",
  description: "Chapter 5: Route Based Code Splitting with React",
  imageUrl: "https://miro.medium.com/max/1200/1*ujeX407J-TyULdA7fMRwOg.jpeg",
};

export default {
  title: "Articles/ArticleCard",
  component: ArticleCard,
};

export const with_content = () => <ArticleCard article={sample} />;
