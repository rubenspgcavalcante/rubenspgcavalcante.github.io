const { ProvidePlugin, EnvironmentPlugin } = require('webpack');
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
  new ExtractTextPlugin('styles.css'),
  new OptimizeCssAssetsPlugin(),
  new EnvironmentPlugin(['NODE_ENV']),
  provideInProd(new UglifyJSPlugin({}))

].filter(plugin => !!plugin);