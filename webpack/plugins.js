const { DefinePlugin, ContextReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const { dev, test, prod, CURRENT } = require('./envs');

const assetsContext = /assets[\/](projects|publications|banners)/;

module.exports = [
  new HTMLPlugin({
    template: 'assets/index.template.html'
  }),
  new MiniCssExtractPlugin({
    filename: "dist/[name].[hash].css",
    chunkFilename: "dist/[name].[hash].css"
  }),
  new ContextReplacementPlugin(
    assetsContext,
    /\.(png|webp)/
  ),
  new DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(CURRENT)
    },
    app: {
      path: '/'
    }
  }),
  prod(new OptimizeCssAssetsPlugin())
].filter(plugin => plugin !== null);
