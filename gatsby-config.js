/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const icons = [48, 72, 96, 144, 168, 192, 256, 512].map(size => ({
  src: `icons/icon.${size}.png`,
  sizes: `${size}x${size}`,
  type: "image/png",
}));

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rubens Cavalcante, Frontend Engineer",
        short_name: "Rubens FE",
        start_url: ".",
        display: "standalone",
        orientation: "portrait",
        background_color: "#333",
        theme_color: "#333",
        description: "Rubens Pinheiro personal site",
        lang: "en-US",
        "​​orientation": "portrait-primary",
        icons,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Raleway"],
        },
      },
    },
  ],
};
