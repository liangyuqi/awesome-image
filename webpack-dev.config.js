const path = require('path')
const join = path.join
const resolve = path.resolve
const {
  camelCase
} = require('lodash')
const webpack = require('webpack')
const {
  TsConfigPathsPlugin,
  CheckerPlugin
} = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process && process.env && process.env.NODE_ENV
const serverPort = process.env.npm_package_config_devPort || 8081
const dev = !(env && env === 'production')
/**
 * Update this variable if you change your library name
 */
const libraryName = 'htmlToImage'
const plugins = [
  new CheckerPlugin(),
  new TsConfigPathsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    title: libraryName,
    filename: 'index.html',
    template: join(__dirname, 'example/index.html'),
    hash: true,
    chunks: ['common', 'index']
  })
]
let entry = [
  // 'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${serverPort}`,
  // bundle the client for webpack-dev-servers and connect to the provided endpoint
  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // `./src/${libraryName}.ts`
  `./example/index.ts`
]
if (dev === false) {
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

plugins.push(new TsConfigPathsPlugin({configFile: "example/tsconfig.json"}))

module.exports = {
  mode: 'development',
  entry: {
    index: entry
  },
  // Currently cheap-module-source-map is broken https://github.com/webpack/webpack/issues/4176
  devtool: 'source-map',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: camelCase(libraryName),
    filename: `${libraryName}.js`
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: {
    "createjs": "createjs"
  },
  module: {
    rules: [{
        test: /\.ts$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: 'tsconfig.json'
          }
        }]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: plugins,
  devServer: {
    // hot: true,
    // contentBase: resolve(__dirname, 'example'),
    // port: serverPort,
    // publicPath: '/',
    // open: true,
    // stats: 'errors-only',
    // quiet: false,
    // noInfo: true,
    // inline: true,
    // lazy: false,
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // },
    hot: true,
    contentBase: resolve(__dirname, './example'),
    port: serverPort,
    publicPath: '/'
  }

}
