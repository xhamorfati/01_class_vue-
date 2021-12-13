const path = require('path')

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
            }
        ]

    }
}