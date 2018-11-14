const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webapack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = merge(baseWebpackConfig, {
  entry: {
    app: './src/entry-client.js'
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[name].[chunkhash].js",
    publicPath: "/dist/"  // 打包后输出路径以/dist/开头
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    })
  ]
})

module.exports = config