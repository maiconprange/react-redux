const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin({ filename: 'bundle.css' })

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8081,
        contentBase: './public'
    },
    module: {
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            use: extractCSS.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        },]
    },
    plugins: [
        extractCSS
    ],
}