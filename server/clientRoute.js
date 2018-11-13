import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from '../../client/routes'

async function clientRoute(ctx, next) {
    let _renderProps

    match({routes, location: ctx.url}, (error, redirectLocation, renderProps) => {
        _renderProps = renderProps
    })

    if (_renderProps) {
        await ctx.render('index', {
            root: renderToString(
                    <RouterContext {..._renderProps}/>
            )
        })
    } else {
        await next()
    }
}

export default clientRoute