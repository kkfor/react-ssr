const Koa = require('koa')
const router = require('./router')

const app = new Koa()

const webpack = require('webpack'),
    config = require('../config/webapack.client'),
    compiler = webpack(config)

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('App runing in port: 3000')
})
