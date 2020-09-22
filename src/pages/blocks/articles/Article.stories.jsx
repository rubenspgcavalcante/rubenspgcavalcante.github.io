import React from "react";
import Articles from "./Articles";

const sample = [
  {
    id: "f64924e4d06",
    url: "https://tech.olx.com/webpack-from-zero-to-hero-f64924e4d06",
    createdAt: 1549371580137,
    title: "Webpack From Zero to Hero",
    description: "Chapter 4: Dynamic Imports and Code Splitting",
    imageUrl: "https://miro.medium.com/max/1200/1*IvyBZ5aFwbjRwkC2MQGrPw.jpeg",
  },
  {
    id: "10a7dc26c74",
    url: "https://tech.olx.com/webpack-from-zero-to-hero-10a7dc26c74",
    createdAt: 1549448150285,
    title: "Webpack From Zero to Hero",
    description: "Chapter 5: Route Based Code Splitting with React",
    imageUrl: "https://miro.medium.com/max/1200/1*ujeX407J-TyULdA7fMRwOg.jpeg",
  },
  {
    id: "c9b3dae0ebbc",
    url:
      "https://medium.com/front-end-weekly/webpack-reusing-module-in-multiple-entries-c9b3dae0ebbc",
    createdAt: 1575966111512,
    title: "Webpack: Reusing Module in Multiple Entries",
    description:
      "Have you ever struggled with Webpack splitChunks? It’s not breaking and reusing repetitive modules? Check the solution!",
    imageUrl: "https://miro.medium.com/max/1200/1*cUjHJMBc9qb-1KMiSwRnWQ.jpeg",
  },
];

export default {
  title: "Articles/Articles",
  component: Articles,
};

export const Empty = (...args) => <Articles {...args} expand />;

export const With_Cards = (...args) => (
  <Articles {...args} expand articles={sample} />
);
