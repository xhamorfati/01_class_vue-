const path = require('path')
const {CleanWebpackPlugin}= require("clean-webpack-plugin")

module.exports ={ 
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/, //正则表达式
                use:[
                    //loader的加载顺序是从下往上，所以css-loader需要先执行
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                ]
                // loader:"css-loader"
                //{loader:"css-loader"}
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            // {
            //     //webpack5中不再需要file-loader和url-loader进行图片打包，css-loader中包含了图片打包功能，若重复使用则会导致图片不能显示
            //     test:/\.(png|svg|gif)$/,
            //     use:{
            //         loader:"file-loader",
            //         options:{
            //             outputPath:"img",
            //             name:"[name]_[hash:6]png.[ext]"
            //         }
            //     }
            // },
            // {
            //     //webpack5中不再需要file-loader和url-loader进行图片打包，css-loader中包含了图片打包功能，若重复使用则会导致图片不能显示
            //     test:/\.(png|svg|gif)$/,
            //     use:{
            //         loader:"url-loader",
            //         options:{
            //             outputPath:"img",
            //             name:"[name]_[hash:6]png.[ext]",
            //             //大于100kb的图片不再打包入bundle.js，防止影响bundle.js页面加载效率
            //             limit:100 * 1024
            //         }
            //     }
            // },
            {
                //webpack5中不再需要file-loader和url-loader进行图片打包，css-loader中包含了图片打包功能，若重复使用则会导致图片不能显示
                //webpack5可以直接使用资源模块asset module type来替代上面的这些loader
                test:/\.(jpe?g|png|svg|gif)$/,
                type: "asset",
                generator:{
                    filename :"img/[name]_[hash:6][ext]"
                },
                parser:{
                    dataUrlCondition:{
                        maxSize : 100 * 1024
                    }
                }
            },
            // {
            //     //webpack5中不再需要file-loader和url-loader进行图片打包，css-loader中包含了图片打包功能，若重复使用则会导致图片不能显示
            //     //webpack5可以直接使用资源模块asset module type来替代上面的这些loader
            //     test:/\.(eot|ttf|woff2?)$/,
            //     use:{
            //         loader:"file-loader",
            //         options:{
            //             //filename不会包含路径，name可包含路径
            //             name:"font/[name]_[hash:6].[ext]"
            //         }
            //     }
            // },
            {
                //webpack5中不再需要file-loader和url-loader进行图片打包，css-loader中包含了图片打包功能，若重复使用则会导致图片不能显示
                //webpack5可以直接使用资源模块asset module type来替代上面的这些loader
                test:/\.(eot|ttf|woff2?)$/,
                type:"asset/resource",
                generator:{
                    filename :"img/[name]_[hash:6][ext]"
                }
            },
        ]

    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}