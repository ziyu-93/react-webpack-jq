const webpack = require('webpack');
const path = require('path');
const vendors = [
  'isomorphic-fetch',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'antd',
  'moment'
];

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: __dirname + '/build/vendor/',
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: __dirname + '/build/vendor/manifest.json',
      name: '[name]_[chunkhash]',
      context: __dirname
    })
  ]
}
