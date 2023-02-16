// 发布环境配置文件



const path = require("path");//解析路径

const {VueLoaderPlugin} = require("vue-loader")
module.exports = {

    mode: 'production',//开发模式
    entry: {
        index:'./src/index.js',
        button:'./packages/components/button',
        aside:'./packages/components/aside',
        header:'./packages/components/header',
        main:'./packages/components/main',
        container:'./packages/components/container',
    },
    externals:["vue"],//排除vue框架
    devtool:'source-map',//源代码映射
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        // publicPath:'/'
        library:{
            name:'GUI',
            // 声明当前导出的模块为umd模块
            type:"umd"
        },
        clean:true
        // 开启构建清理
    },

    module:{
        rules:[
            {
                test:/\.vue$/,
                use:{
                    loader:"vue-loader"
                }
            }
           
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}


// 2839  2810 2791