const path = require('path');
const loaders = require('./webpack/loaders');

module.exports = {
  target: 'node',
  entry: {
    "generate-thumbs": './utils/generate-thumbs.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.tmp')
  },
  module: loaders
};