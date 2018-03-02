const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: ['./App.jsx'],
  output: {
    filename: 'build/[name].[hash].js',
    chunkFilename: 'build/[name].[hash].chunk.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    alias:{
      jquery: 'jquery-slim'
    }
  },
  plugins,
  module: loaders
};