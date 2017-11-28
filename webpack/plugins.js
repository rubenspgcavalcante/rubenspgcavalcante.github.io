const { ProvidePlugin, DefinePlugin, optimize } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const { dev, test, prod, CURRENT } = require('./envs');

module.exports = [
  new ProvidePlugin({
    Tether: 'tether',
    Popper: 'popper.js',
    jQuery: 'jquery-slim',
    $: 'jquery-slim',
  }),
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
    uglifyOptions: {
      compress: {
        warnings: false
      }
    }
  }))
].filter(plugin => plugin !== null);
