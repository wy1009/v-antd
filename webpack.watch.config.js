// 测试环境打包并watch库

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // 入口
    entry: {
        main: './src/index.js'
    },
    // 输出
    output: {
        path: path.join(__dirname, './test/dist'),
        publicPath: '/dist/',
        filename: 'v-antd.js',
        library: 'v-antd',
        libraryTarget: 'umd'
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
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}