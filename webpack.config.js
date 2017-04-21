var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // 入口
    entry: {
        main: './test/main.js'
    },
    // 输出
    output: {
        path: path.join(__dirname, './test/dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    // 加载器
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        sass: ExtractTextPlugin.extract({
                            use: [ { loader: 'css-loader' }, { loader: 'sass-loader' }],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } }
        ]
    },
    resolve: {
        alias: {
            'vAntd': '../../src/index.js'
        }
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}