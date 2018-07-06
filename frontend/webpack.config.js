const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const browserPlugin = require('webpack-browser-plugin');

module.exports = {
    devServer: {
        compress: true,
        port: 3000
    },
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
}