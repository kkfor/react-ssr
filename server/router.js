const router = require('koa-router')()
// const render = require('./render')

const ReactDOMServer = require('react-dom/server')

const render = ctx => {
  const html = ReactDOMServer.renderToString(serverEntry)
  ctx.body= html
}

router.get('*', ctx => {
  console.log('-----------enter server-----------')
  console.log('visit url: ' + ctx.request.url)

  // 生产环境
  render(ctx)
})

module.exports = router