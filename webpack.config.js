var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "/",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};