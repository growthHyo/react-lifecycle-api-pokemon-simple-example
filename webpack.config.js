const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader']
})

var cssConfig = isProd
  ? cssProd
  : cssDev;

module.exports = {
  entry: {
    app: ["react-hot-loader/patch","./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.pug$/,
        use: ['pug-loader']
      },  {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 7006,
    hot: true,
    stats: "errors-only",
    open: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpacks projects + plugin',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './views/index.pug'
    }),
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      disable: !isProd,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'BASE_URL': JSON.stringify('https://pokeapi.co/api/v2/type/2/'),
        'POK_TYP': JSON.stringify('fighting')
      }
    }),
  ]
}
