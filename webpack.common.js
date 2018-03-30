const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    //another: './src/another-module.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code split'
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 10000
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
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
