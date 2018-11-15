// common function to get style loaders
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

const styleGlobalDir = path.resolve(__dirname, '../src/styles')
const styleLoaders = (options, extension, preProcessor) => {
  options = options || {}

  const cssLoaders = (options, modules, preProcessor) => {
    modules = modules || {}
    const loaders = [
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: modules.modules,
          sourceMap: options.sourceMap
        }
      }
    ]
  
    if (preProcessor) {
      loaders.push(require.resolve(preProcessor))
    }
  
    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  return [
    {
      test: new RegExp('\\.' + extension + '$'),
      exclude: styleGlobalDir,
      use: cssLoaders(options, {
        modules: true
      }, preProcessor)
    },
    {
      test: new RegExp('\\.' + extension + '$'),
      include: styleGlobalDir,
      use: cssLoaders(options, preProcessor)
    }
  ]
}

module.exports = (options) => {
  const loaders = {
    scss: 'sass'
  }

  let output = []
  for (let extension in loaders) {
    let loader = loaders[extension]
    output = output.concat(styleLoaders(options, 'scss', loader + '-loader'))
  }
  return output
}