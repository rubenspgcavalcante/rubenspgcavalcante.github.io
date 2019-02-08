const path = require('path');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const { dev, prod } = require('./webpack/envs');

module.exports = (env={}) => ({
  mode: dev("development") || prod("production"),
  context: path.resolve(__dirname, 'app'),
  entry: ['intersection-observer', './App.jsx'],
  output: {
    filename: 'dist/[name].[hash].js',
    chunkFilename: 'dist/[name].[chunkhash].chunk.js',
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
  plugins: env.analyse
  ? [new BundleAnalyzerPlugin(), ...plugins]
  : plugins,
  module: loaders,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        images: {
          test: /\.png|\.webp/,
        }
      }
    }
  }
});