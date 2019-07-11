const path = require('path')
const HtmalWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/main.js',
        publicPath: '/assets/'
    },
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules:[
          {
              test: /\.sass$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
          }
        ]
    },
    plugins: [
      new HtmalWebpackPlugin({
        titel: 'Demo-Stuff',
        template: './dist/template.html',
        filename: '../dist/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true
        },
        alwaysWriteToDisk: true
      }),
      new ExtractTextPlugin({
          filename: '../build/style.css'
      })
    ]
}