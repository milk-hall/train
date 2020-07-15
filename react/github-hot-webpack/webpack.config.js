const path = require('path');
module.exports = {
  // 环境
  mode: 'development',
  // 目标文件
  entry: [path.resolve(__dirname, './src/index.js')],
  // 自定义输出文件
  output: {
      path: path.resolve(__dirname, './dist'), //路径
      filename: 'bundle.js' //文件名称
  },
  // 插件
  plugins: [

  ],
  // 给导入的文件制定规则
  module: {

  }
}