const { ProvidePlugin, DefinePlugin } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const { dev, test, prod, CURRENT } = require('./envs');

module.exports = [
  new ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery',
    React: 'react'
  }),
  new ExtractTextPlugin('styles.css'),
  new DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(CURRENT)
    },
    app: {
      path: '/'
    }
  }),
  prod(new OptimizeCssAssetsPlugin()),
  prod(new UglifyJSPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }))
].filter(plugin => plugin !== null);
