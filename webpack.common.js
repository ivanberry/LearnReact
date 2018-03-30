const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
  ],
  //optimization: {
    //splitChunks: {
      //cacheGroups: {
        //commons: {
          //test: /[\\/]node_modules[\\/]/,
          //name: 'vendor',
          //chunks: 'all',
        //}
      //}
    //}
  //},
  output: {
    //filename: '[name].bundle.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
};
