const { DefinePlugin, ContextReplacementPlugin, optimize } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const { dev, test, prod, CURRENT } = require('./envs');

const assetsContext = /assets[\/](projects|publications|banners)/;

module.exports = [
  new HTMLPlugin({
    template: 'assets/index.template.html'
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
  new optimize.CommonsChunkPlugin({
    name: 'images',
    async: true,
    minChunks: ({ resource, context }) => {
      return context && assetsContext.test(context)
    }
  }),
  new ExtractTextPlugin({
    filename: 'dist/style.[contenthash].css'
  }),
  new ContextReplacementPlugin(
    assetsContext,
    /\.(png|webp)/
  ),
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
