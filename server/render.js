const ReactDOMServer = require('react-dom/server')

module.exports = {
  renderToString(ctx) {
    ReactDOMServer.renderToString()
  }
}