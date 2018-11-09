// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import { StaticRouter } from 'react-router-dom'
// import { layout } from './layout'
// import App from '../../src/layout/App'
// import router from '../../src/router'
// import { matchRoutes, renderRoutes } from 'react-router-config'
// import { matchPath } from 'react-router-dom'

// const getMatch=(routesArray, url)=>{
//   return routesArray.some(router=>matchPath(url,{
//     path: router.path,
//     exact: router.exact,
//   }))
// }

module.exports.render = async(ctx, next) => {
  // const branch = matchRoutes(router, ctx.req.url);
  // const promises = branch.map(({route}) => {
  //     const fetch = route.component.fetch
  //     return fetch instanceof Function ? fetch(store) : Promise.resolve(null)
  // })
  // await Promise.all(promises).catch((err)=>{
  //     console.log(err)
  // })

  // let isMatch=getMatch(router,ctx.req.url)

  // if(!isMatch){
  //   await next()
  // }else{
  //   console.log(App)
  //   const html = ReactDOMServer.renderToString(
  //   <StaticRouter
  //     location={ctx.url}
  //     context={{}}>
  //     <App />
  //   </StaticRouter>
  // )
  // const body = layout(html)
  // ctx.body = body
  // }
}