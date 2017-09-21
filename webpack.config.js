let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./app/index.js',
    output:{
        filename: "bundle.js",
        path:path.resolve('dist')
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'],
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map',//错误时可以提示源码错误index.js，不会只显示bundle.js 错误
    devServer: {
        //跨域
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
}