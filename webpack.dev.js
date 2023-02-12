// 开发环境配置文件

const path = require("path");//解析路径
const HtmlWebpackPlugin = require("html-webpack-plugin")//用来将public下的html模板文件提取并在浏览器中运行
const {VueLoaderPlugin} = require("vue-loader")
module.exports = {

    mode: 'development',//开发模式
    entry: {
        index:'./example/src/index.js'
    },
    devtool:'source-map',//源代码映射
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath:'/'
    },
    devServer:{
        static:[
            path.resolve(__dirname,"example/public"),
            path.resolve(__dirname,"dist")
        ],
        port:8080,
        host:"localhost"
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:{
                    loader:"vue-loader"
                }
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"sass-loader"}
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"example/public/index.html"),
            filename:'index.html',
            chunks:["index"]
        })
    ]
}


// 2839  2810 2791