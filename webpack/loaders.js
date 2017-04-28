const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  rules: [
    {
      test: /\.jsx?$/,
      use: { loader: 'babel-loader' }
    },
    {
      test: /\.scss|sass$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: 'css-loader!sass-loader'
      }),
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: 'url-loader?limit=10000',

    },
    {
      test: /\.ico$/,
      use: { loader: 'file-loader' }
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: { loader: 'url-loader?limit=10000' },
    }
  ]
};