const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const paths = require('./paths')

const isProd = process.env.NODE_ENV === "production"

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    // {
    //   // Options for PostCSS as we reference these options twice
    //   // Adds vendor prefixing based on your specified browser support in
    //   // package.json
    //   loader: require.resolve('postcss-loader'),
    //   options: {
    //     // Necessary for external CSS imports to work
    //     // https://github.com/facebook/create-react-app/issues/2677
    //     ident: 'postcss',
    //     plugins: () => [
    //       require('postcss-flexbugs-fixes'),
    //       require('postcss-preset-env')({
    //         autoprefixer: {
    //           flexbox: 'no-2009'
    //         },
    //         stage: 3
    //       })
    //     ]
    //   }
    // }
  ]
  if (preProcessor) {
    loaders.push(require.resolve(preProcessor))
  }
  return loaders
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        // options: [

        // ]
      },
      {
        test: /\.scss$/,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            modules: true,
          },
          'sass-loader'
        )
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    })
  ]
}