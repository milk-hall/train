const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // 开启sourcemap
  // devtool: "cheap-module-eval-source-map",
  devServer: {
    stats: 'errors-only',
    // 默认地址 localhost
    // host: process.env.HOST,
    // 默认端口 8080
    // port: process.env.PORT,
    // 是否直接打开浏览器
    open: true,
    // 是否开启热更替
    hot: true,
  },
  module: {
    rules: [
      // 打包css文件的规则

    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
