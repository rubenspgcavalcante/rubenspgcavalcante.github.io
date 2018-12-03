const path = require('path');

module.exports = {
  target: 'node',
  mode: "production",
  entry: {
    "generate-thumbs": './utils/generate-thumbs.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.tmp')
  }
};