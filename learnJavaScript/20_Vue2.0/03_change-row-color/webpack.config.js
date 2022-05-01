/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 10:08:09
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 20:44:21
 * @FilePath: \03_change-row-color\webpack.config.js
 */
/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 06:37:22
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 08:51:38
 * @FilePath: \03_change-row-color\webpack.config.js
 */
const path = require('path');

// 配置 html-webpack-plugin 插件:
// 1. 导入 HTML 插件, 得到一个构造函数:
const HtmlPlugin = require('html-webpack-plugin');

// 2. 创建 HTML 插件的实例对象:
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',  // 原文件存放路径
    filename: './index.html'  // 生成的文件存放路径
})

module.exports = {
    mode: 'development',  // mode 用来指定构建模式, 可选的值有 development 和 production
    entry: path.join(__dirname, './src/index.js'),  // 打包的入口
    output: {
        path: path.join(__dirname, './dist/'),  // 输出文件的存放路径
        filename: 'bundle.js'  // 输出文件的名称
    },
    // 3. html-webpack-plugin 插件生效, 会自动把 bundle.js 脚本注入到 html 页面中:
    plugins: [htmlPlugin], 
    // devServer 节点, 等同于在 "scripts" 节点配置:
    devServer: {
        open: true,  // 初次打包的完成后, 自动打开浏览器
        host: '127.0.0.1',  // 实时打包所使用的主机地址
        port:80  // 实时打包所使用的端口号
    },
    // loader 加载器:
    module: {
        rules: [  // 所有第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },  // .css 文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },  // .less 文件
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' },  // 图片文件
            // 在配置 babel-loader 的时候， 程序员只需要把自己的代码进行转换即可， 一定要排除 node_modules 目录中的 .js 文件。
            // 因为第三方包中的 js 兼容性， 不需要程序员关心.
            { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' },  // 处理 JS 高级语法
        ]
    }
}

