const { ProvidePlugin, EnvironmentPlugin, optimize } = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const provideInProd = plugin => process.env.NODE_ENV === 'production' && plugin;

module.exports = [
  new ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
  }),
  new EnvironmentPlugin(['NODE_ENV']),
  new optimize.CommonsChunkPlugin({
    name: "commons",
    filename: "commons.js",
    minChunks: 2
  }),
  new ExtractTextPlugin('styles.css'),
  provideInProd(new OptimizeCssAssetsPlugin()),
  provideInProd(new UglifyJSPlugin({}))
].filter(plugin => !!plugin);