const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: ['intersection-observer', './App.jsx'],
  output: {
    filename: 'dist/[name].[hash].js',
    chunkFilename: 'dist/[name].[hash].chunk.js',
    path: path.resolve(__dirname),
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    alias: {
      jquery: 'jquery-slim'
    }
  },
  plugins,
  module: loaders
};