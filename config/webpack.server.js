const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webapack.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

const config = merge(baseWebpackConfig, {
  entry: {
    app: './src/entry-server.js'
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "entry-server.js",
    libraryTarget: "commonjs2"  // 打包成commonjs2规范
  },
  target: "node",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_ENV": JSON.stringify("server")  // 指定React环境为服务端
    }),
    // 服务端不支持window document等对象，需将css外链
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css"
    })
  ]
})

module.exports = config