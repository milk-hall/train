const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    /**
     * 日志模式  friendly-errors-webpack-plugin 插件可以优化输出
     * errors-only  只在发生错误时触发
     * minimal 只在发生错误或者有新的编译时输出
     * none 没有输出
     * normal 标准输出
     * verbose 全部输出
     */
    contentBase: path.join(__dirname, "game"),
    stats: "errors-only",
    //默认地址 localhost
    host: "localhost",
    //默认端口 8080
    port: 8080,
    //是否直接打开浏览器
    open: true,
    // 开启HMR
    hot: true,
  },
  // 自定义输出文件
  output: {
    path: path.resolve(__dirname, "./game"), //路径
    filename: "bundle.js", //文件名称
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
