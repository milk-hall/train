const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'), // 路径
    filename: '[name].[contenthash:8].js', // 文件名称
  },
});
