const { DefinePlugin, ContextReplacementPlugin, optimize } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const { dev, test, prod, CURRENT } = require('./envs');

module.exports = [
  new optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
      if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
        return false;
      }
      return module.context && module.context.indexOf("node_modules") !== -1;
    }
  }),
  new ExtractTextPlugin({
    filename: 'styles.css'
  }),
  new ContextReplacementPlugin(
    /assets[\/](projects|publications)/,
    /\.png/
  ),
  new DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(CURRENT)
    },
    app: {
      path: '/'
    }
  }),
  new CopyWebpackPlugin([
    { from: "assets/favicon.ico", flatten: true }
  ]),
  prod(new OptimizeCssAssetsPlugin()),
  prod(new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      compress: {
        warnings: false
      }
    }
  }))
].filter(plugin => plugin !== null);
