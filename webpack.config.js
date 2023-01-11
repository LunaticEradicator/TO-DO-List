const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index',
        logic: './src/logic'
    },
    output: {
        filename: ['name'].js,
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }, plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    devServer: {
        static: '/dist'
    },
    optimization: {
        runtimeChunk: 'single'
    }
}
