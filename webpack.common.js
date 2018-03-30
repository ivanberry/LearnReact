const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

//const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    polyfills: './src/polyfills.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
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
		filename: '[name].bundle.js',
    //filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
};
