const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webapack.base')

const config = merge(baseWebpackConfig, {
  entry: {
    app: './src/entry-client.js'
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[name].[chunkhash].js",
    publicPath: "/dist/"  // 打包后输出路径以/dist/开头
  }
})

module.exports = config