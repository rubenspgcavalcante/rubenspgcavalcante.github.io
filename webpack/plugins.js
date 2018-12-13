const { DefinePlugin, ContextReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const { dev, test, prod, CURRENT } = require('./envs');

const assetsContext = /assets[\/](projects|publications|banners)/;

module.exports = [
  new HTMLPlugin({
    filename: 'index.html',
    template: 'assets/index.template.js'
  }),
  new ServiceWorkerWebpackPlugin({
    entry: 'service-worker.js'
  }),
  new CopyWebpackPlugin([
    { from: 'assets/manifest.json', to: '.' },
    { from: 'assets/404.html', to: '.' },
    {
      from: 'assets/icons/*.png',
      to: 'dist/',
      flatten: true
    }
  ]),
  new MiniCssExtractPlugin({
    filename: 'dist/[name].[hash].css',
    chunkFilename: 'dist/[name].[hash].css'
  }),
  new ContextReplacementPlugin(assetsContext, /\.(png|webp)/),
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
