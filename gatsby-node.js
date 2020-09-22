const fetch = require("isomorphic-fetch");
require("dotenv").config();

const workerUrl = "https://medium-post-fetch.rubenspgcavalcante.workers.dev";

const fetchPage = async next => {
  const url = next ? `${workerUrl}?next=${next}` : workerUrl;

  const res = await fetch(url);
  return await res.json();
};

const fetchAllPosts = async () => {
  let allPosts = [];
  let nextPage = null;

  while (typeof nextPage !== "undefined") {
    const { data, next } = await fetchPage(nextPage);
    allPosts = [...allPosts, ...data.posts];
    nextPage = next;
  }
  return allPosts;
};

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const posts = await fetchAllPosts();

  posts.forEach(post =>
    createNode({
      ...post,
      id: createNodeId(`medium-${post.id}`),
      parent: null,
      internal: {
        type: "MediumPost",
        contentDigest: createContentDigest(post),
        description: "A medium post",
        mediaType: "text/json",
        content: JSON.stringify(post),
      },
    })
  );
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    """
    MediumPost
    """
    type Post implements Node @infer {
      url: String! @link
      title: String!
      description: String!
      createdAt: Date! @dateformat
      imageUrl: String! @link
    }
  `;
  createTypes(typeDefs);
};
