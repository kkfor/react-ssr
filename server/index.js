const Koa = require('koa')
const router = require('./router')
const webpack = require('webpack')

const clientConfig = require('../config/webapack.client')
const serverConfig = require('../config/webpack.server')
const devMiddleware = require('./middleware/koa-webpack-dev-middleware')
const hotMiddleware = require('./middleware/koa-webpack-hot-middleware')

const clientRoute = require('./clientRoute')

const configureDevelopment = app => {

  const compiler = webpack(clientConfig)

  app.use(devMiddleware(compiler, {
    publicPath: clientConfig.output.publicPath
  }))
  app.use(hotMiddleware(compiler))
}

const app = new Koa()

configureDevelopment(app)

app.use(clientRoute)

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('App runing in port: 3000')
})
