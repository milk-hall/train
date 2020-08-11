const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');

module.exports = {
  // 环境
  mode: 'development',
  // 开启sourcemap
  devtool: 'cheap-module-eval-source-map',
  // 目标文件
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  // 自定义输出文件
  output: {
    path: path.resolve(__dirname, './dist'), // 路径
    filename: '[name].[contenthash:8].js', // 文件名称
  },
  // 配置webpack-dev-server
  devServer: {
    /**
     * 日志模式  friendly-errors-webpack-plugin 插件可以优化输出
     * errors-only  只在发生错误时触发
     * minimal 只在发生错误或者有新的编译时输出
     * none 没有输出
     * normal 标准输出
     * verbose 全部输出
     */
    contentBase: path.join(__dirname, 'dist'),
    stats: 'errors-only',
    // 默认地址 localhost
    host: 'localhost',
    // 默认端口 8080
    port: 8080,
    // 是否直接打开浏览器
    open: true,
    // 开启HMR
    hot: true,
  },
  // 插件
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'index',
      template: 'src/index.html',
      chunks: ['bundle.js'],
    }),
  ],
};
