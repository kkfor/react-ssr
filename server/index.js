const Koa = require('koa')
const router = require('./router')
const webpack = require('webpack')

const clientConfig = require('../config/webapack.client')
const serverConfig = require('../config/webpack.server')
const devMiddleware = require('./middleware/koa-webpack-dev-middleware')
const hotMiddleware = require('./middleware/koa-webpack-hot-middleware')

const configureDevelopment = app => {

  const compiler = webpack(clientConfig)

  app.use(devMiddleware(compiler, {
    publicPath: clientConfig.output.publicPath
  }))
  app.use(hotMiddleware(compiler))
}

const app = new Koa()

app.use(configureDevelopment)

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('App runing in port: 3000')
})
